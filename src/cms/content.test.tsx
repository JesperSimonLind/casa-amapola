import * as React from "react";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { ContentProvider, useContent } from "../context/ContentContext";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { displayMedia, loadPublishedContent } from "./client";
import {
  createPageContent,
  languages,
  localizeContent,
  pageContentSchema,
  siteMediaSchema,
} from "./content";

const photo = {
  _type: "websitePhoto",
  asset: { _ref: "image-abc123-800x600-jpg" },
  alt: { English: "CMS photo", Spanish: "Foto del CMS", Swedish: "CMS-foto" },
};
const roomMedia = { price: "EUR 123", images: [photo] };
const media = siteMediaSchema.parse({
  _id: "siteMedia",
  _type: "siteMedia",
  heroDesktop: photo,
  heroMobile: photo,
  about: [photo],
  area: [photo],
  hosts: photo,
  areaCards: [photo, photo, photo, photo],
  rooms: { hanoi: roomMedia, aegean: roomMedia, andalucia: roomMedia, pequena: roomMedia },
});

const originalFetch = global.fetch;
const fetchMock = jest.fn();
let warning: jest.SpyInstance;
let error: jest.SpyInstance;

beforeEach(() => {
  global.fetch = fetchMock;
  warning = jest.spyOn(console, "warn").mockImplementation(() => {});
  error = jest.spyOn(console, "error").mockImplementation(() => {});
  fetchMock.mockReset();
});

afterEach(() => {
  global.fetch = originalFetch;
  jest.restoreAllMocks();
});

function respond(result: unknown[]) {
  fetchMock.mockResolvedValue({ ok: true, json: async () => ({ result }) });
}

function ContentHarness() {
  const { t, media: photos } = useContent();
  const { setLanguage } = useLanguage();
  return (
    <>
      <p>{t.about.overline}</p>
      <p>{t.rooms.list[0].price}</p>
      <p>{t.rooms.list[0].title}</p>
      <p>{t.footer.termsTitle}</p>
      {photos && <img src={photos.hosts.src} alt={photos.hosts.alt} />}
      <button onClick={() => setLanguage("Spanish")}>Spanish</button>
      <button onClick={() => setLanguage("Swedish")}>Swedish</button>
    </>
  );
}

function renderContent() {
  return render(
    <LanguageProvider>
      <ContentProvider><ContentHarness /></ContentProvider>
    </LanguageProvider>,
  );
}

test.each(languages)("the %s import preserves existing text and prices", (language) => {
  const page = createPageContent(language);
  const localized = localizeContent(language, page);
  expect(localized.about).toEqual(translations[language].about);
  expect(localized.area).toEqual(translations[language].area);
  expect(localized.preFooter).toEqual(translations[language].preFooter);
  expect(localized.heroInfoItems).toEqual(translations[language].heroInfoItems);
  expect(localized.rooms.list.map((room) => room.price))
    .toEqual(translations[language].rooms.list.map((room) => room.price));
  expect(localized.footer).toEqual(translations[language].footer);
  expect(localized.menuItems).toEqual(translations[language].menuItems);
});

test("rejects missing rooms, services, card images and empty galleries", () => {
  const page = createPageContent("English");
  expect(pageContentSchema.safeParse({ ...page, rooms: { ...page.rooms, list: [] } }).success).toBe(false);
  expect(pageContentSchema.safeParse({ ...page, services: { ...page.services, list: [] } }).success).toBe(false);
  expect(siteMediaSchema.safeParse({ ...media, areaCards: [photo] }).success).toBe(false);
  expect(siteMediaSchema.safeParse({ ...media, about: [] }).success).toBe(false);
  expect(siteMediaSchema.safeParse({ ...media, hosts: { ...photo, asset: { _ref: "invalid" } } }).success).toBe(false);
});

test("builds public image URLs and selects the image description language", () => {
  const result = displayMedia(media, "Spanish");
  expect(result.hosts).toEqual({
    src: "https://cdn.sanity.io/images/pyefeumj/production/abc123-800x600.jpg?auto=format&w=1920",
    alt: "Foto del CMS",
  });
  expect(result.rooms.hanoi).toHaveLength(1);
});

test("fetches only the singleton published documents without credentials", async () => {
  respond([...languages.map(createPageContent), media]);
  const signal = new AbortController().signal;
  const result = await loadPublishedContent(signal);
  expect(result.pages.Spanish?.language).toBe("Spanish");
  expect(result.media).toEqual(media);
  const [url, options] = fetchMock.mock.calls[0];
  const request = new URL(url);
  expect(request.searchParams.get("perspective")).toBe("published");
  expect(request.searchParams.get("query")).toContain('"pageContent-en"');
  expect(request.searchParams.get("query")).toContain('"siteMedia"');
  expect(options).toEqual({ signal });
});

test("reports unpublished content and uses the local website content", async () => {
  respond([]);
  renderContent();
  expect(screen.getByText("ABOUT US")).toBeInTheDocument();
  await waitFor(() => expect(warning).toHaveBeenCalledTimes(4));
  expect(screen.getByText(translations.English.rooms.list[0].price)).toBeInTheDocument();
  expect(screen.queryByRole("img")).not.toBeInTheDocument();
});

test("loads CMS text, switches translations without refetching, and shares prices", async () => {
  const pages = languages.map((language) => {
    const page = createPageContent(language);
    return { ...page, about: { ...page.about, overline: `CMS ${language}` } };
  });
  respond([...pages, media]);
  renderContent();
  expect(await screen.findByText("CMS English")).toBeInTheDocument();
  expect(screen.getByText("EUR 123")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Spanish" }));
  expect(screen.getByText("CMS Spanish")).toBeInTheDocument();
  expect(screen.getByAltText("Foto del CMS")).toBeInTheDocument();
  expect(screen.getByText(translations.Spanish.footer.termsTitle)).toBeInTheDocument();
  expect(screen.getByText("EUR 123")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Swedish" }));
  expect(screen.getByText("CMS Swedish")).toBeInTheDocument();
  expect(screen.getByAltText("CMS-foto")).toBeInTheDocument();
  expect(fetchMock).toHaveBeenCalledTimes(1);
});

test("uses the selected language's bundled text when that language is not published", async () => {
  respond([createPageContent("English"), media]);
  renderContent();
  await screen.findByText("EUR 123");
  fireEvent.click(screen.getByRole("button", { name: "Spanish" }));
  expect(screen.getByText(translations.Spanish.about.overline)).toBeInTheDocument();
  expect(screen.getByText("EUR 123")).toBeInTheDocument();
});

test.each(["network", "http", "malformed", "wrong language"])("reports %s failures and keeps local content", async (failure) => {
  if (failure === "network") fetchMock.mockRejectedValue(new Error("Network unavailable"));
  if (failure === "http") fetchMock.mockResolvedValue({ ok: false, status: 403 });
  if (failure === "malformed") respond([{ _id: "pageContent-en", _type: "pageContent" }]);
  if (failure === "wrong language") respond([{ ...createPageContent("English"), language: "Spanish" }]);
  renderContent();
  await waitFor(() => expect(error).toHaveBeenCalledWith(
    "Unable to load Sanity content; using bundled website content.",
    expect.any(Error),
  ));
  expect(screen.getByText("ABOUT US")).toBeInTheDocument();
  expect(screen.getByText(translations.English.rooms.list[0].price)).toBeInTheDocument();
});

test("reports a ten-second timeout rather than silently waiting forever", async () => {
  jest.useFakeTimers();
  fetchMock.mockImplementation((_url, { signal }: { signal: AbortSignal }) =>
    new Promise((_resolve, reject) => signal.addEventListener("abort", () => reject(new Error("Aborted")))),
  );
  renderContent();
  await act(async () => { jest.advanceTimersByTime(10000); });
  expect(error).toHaveBeenCalled();
  expect(screen.getByText("ABOUT US")).toBeInTheDocument();
  jest.useRealTimers();
});

test("all editable sections use CMS text and shared images; one-photo galleries remain navigable", async () => {
  let resolveContent: (value: unknown) => void = () => {};
  fetchMock.mockImplementation(() => new Promise((resolve) => { resolveContent = resolve; }));
  const page = createPageContent("English");
  page.about.overline = "CMS about heading";
  page.rooms.overline = "CMS rooms heading";
  page.services.overline = "CMS services heading";
  page.area.title = "CMS area heading";
  page.preFooter.hostsParagraph = "CMS hosts paragraph";
  page.preFooter.extrasParagraph1 = "CMS extras paragraph";
  page.heroInfoItems[0] = "CMS room highlight";
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Show next area image" }));
  fireEvent.click(screen.getByRole("button", { name: "Show next Hanoi image" }));
  await act(async () => {
    resolveContent({ ok: true, json: async () => ({ result: [page, media] }) });
  });
  expect(screen.getByText("CMS about heading")).toBeInTheDocument();
  expect(screen.getByText("CMS rooms heading")).toBeInTheDocument();
  expect(screen.getByText("CMS services heading")).toBeInTheDocument();
  expect(screen.getByText("CMS area heading")).toBeInTheDocument();
  expect(screen.getByText("CMS hosts paragraph")).toBeInTheDocument();
  expect(screen.getByText("CMS extras paragraph")).toBeInTheDocument();
  expect(screen.getAllByText("CMS room highlight")).toHaveLength(2);
  expect(screen.getAllByText("EUR 123")).toHaveLength(4);
  fireEvent.click(screen.getByRole("button", { name: "Show next area image" }));
  fireEvent.click(screen.getByRole("button", { name: "Show previous area image" }));
  expect(screen.queryByRole("button", { name: "Show next Hanoi image" })).not.toBeInTheDocument();
  const cmsImages = screen.getAllByRole("img").filter((element) =>
    element.getAttribute("src")?.startsWith("https://cdn.sanity.io/"),
  );
  expect(cmsImages.length).toBeGreaterThanOrEqual(10);
  expect(error).not.toHaveBeenCalled();
});
