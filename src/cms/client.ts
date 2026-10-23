import { z } from "zod";
import { sanityApiVersion, sanityDataset, sanityProjectId } from "./config";
import {
  ContentImage,
  DisplayMedia,
  languages,
  languageIds,
  PageContent,
  pageContentSchema,
  SiteMedia,
  siteMediaSchema,
} from "./content";
import { Language } from "../i18n/translations";

export type PublishedContent = {
  pages: Partial<Record<Language, PageContent>>;
  media?: SiteMedia;
};

const query = `*[_id in ["pageContent-en", "pageContent-es", "pageContent-sv", "siteMedia"]]`;

export async function loadPublishedContent(signal: AbortSignal): Promise<PublishedContent> {
  if (!/^[a-z0-9]+$/.test(sanityProjectId) || !/^[a-z0-9][a-z0-9_-]*$/.test(sanityDataset)) {
    throw new Error("Invalid Sanity project ID or dataset configuration.");
  }
  const url = new URL(
    `https://${sanityProjectId}.apicdn.sanity.io/v${sanityApiVersion}/data/query/${sanityDataset}`,
  );
  url.searchParams.set("query", query);
  url.searchParams.set("perspective", "published");
  const response = await fetch(url.toString(), { signal });
  if (!response.ok) {
    throw new Error(`Sanity content request failed (${response.status}).`);
  }
  const { result } = z.object({ result: z.array(z.unknown()) }).parse(await response.json());
  const documents = z.array(z.object({ _id: z.string() }).passthrough()).parse(result);
  const pages: PublishedContent["pages"] = {};
  for (const language of languages) {
    const id = `pageContent-${languageIds[language]}`;
    const document = documents.find((entry) => entry._id === id);
    if (!document) {
      console.warn(`Sanity: ${id} is not published; using the bundled ${language} text.`);
      continue;
    }
    const page = pageContentSchema.parse(document);
    if (page.language !== language) {
      throw new Error(`Sanity: ${id} has the wrong language.`);
    }
    pages[language] = page;
  }
  const document = documents.find((entry) => entry._id === "siteMedia");
  if (!document) {
    console.warn("Sanity: siteMedia is not published; using bundled photos and prices.");
  }
  return { pages, media: document ? siteMediaSchema.parse(document) : undefined };
}

export function displayMedia(media: SiteMedia, language: Language): DisplayMedia {
  const image = (value: SiteMedia["hosts"]): ContentImage => {
    const asset = value.asset._ref.slice("image-".length);
    const extensionIndex = asset.lastIndexOf("-");
    const filename = `${asset.slice(0, extensionIndex)}.${asset.slice(extensionIndex + 1)}`;
    return {
      src: `https://cdn.sanity.io/images/${sanityProjectId}/${sanityDataset}/${filename}?auto=format&w=1920`,
      alt: value.alt[language],
    };
  };
  return {
    heroDesktop: image(media.heroDesktop),
    heroMobile: image(media.heroMobile),
    about: media.about.map(image),
    area: media.area.map(image),
    hosts: image(media.hosts),
    areaCards: media.areaCards.map(image),
    rooms: {
      hanoi: media.rooms.hanoi.images.map(image),
      aegean: media.rooms.aegean.images.map(image),
      andalucia: media.rooms.andalucia.images.map(image),
      pequena: media.rooms.pequena.images.map(image),
    },
  };
}
