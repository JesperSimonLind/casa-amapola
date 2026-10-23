import { z } from "zod";
import { Language, LocalizedText, translations } from "../i18n/translations";

export const languages: Language[] = ["English", "Spanish", "Swedish"];
export const roomIds = ["hanoi", "aegean", "andalucia", "pequena"] as const;
export const languageIds: Record<Language, string> = {
  English: "en",
  Spanish: "es",
  Swedish: "sv",
};

const text = z.string().trim().min(1);
const paragraphs = z.array(text).min(1);
const card = z.object({ title: text, description: text });
const room = card.extend({
  bed: text,
  size: text,
  bathroom: text,
  seasonalAvailability: z.string().default(""),
});

export const pageContentSchema = z.object({
  _id: text,
  _type: z.literal("pageContent"),
  language: z.enum(["English", "Spanish", "Swedish"]),
  heroInfoItems: z.array(text).length(3),
  about: z.object({ overline: text, paragraphs }),
  rooms: z.object({
    overline: text,
    introduction: text,
    list: z.array(room).length(4),
  }),
  area: z.object({
    overline: text,
    title: text,
    paragraphs,
    cards: z.array(card).length(4),
    ctaTitle: text,
    ctaDescription: text,
    ctaLink: text,
  }),
  services: z.object({
    overline: text,
    list: z.array(card.extend({ emphasized: z.boolean().default(false) })).length(10),
  }),
  preFooter: z.object({
    extrasTitle: text,
    extrasParagraph1: text,
    extrasParagraph2: text,
    extrasParagraph3: text,
    hostsTitle: text,
    hostsParagraph: text,
  }),
});

const localizedAlt = z.object({ English: text, Spanish: text, Swedish: text });
const image = z.object({
  asset: z.object({ _ref: z.string().regex(/^image-[a-zA-Z0-9]+-\d+x\d+-[a-zA-Z0-9]+$/) }),
  alt: localizedAlt,
});
const gallery = z.array(image).min(1);
const roomMedia = z.object({ price: text, images: gallery });

export const siteMediaSchema = z.object({
  _id: z.literal("siteMedia"),
  _type: z.literal("siteMedia"),
  heroDesktop: image,
  heroMobile: image,
  about: gallery,
  area: gallery,
  hosts: image,
  areaCards: z.array(image).length(4),
  rooms: z.object({
    hanoi: roomMedia,
    aegean: roomMedia,
    andalucia: roomMedia,
    pequena: roomMedia,
  }),
});

export type PageContent = z.infer<typeof pageContentSchema>;
export type SiteMedia = z.infer<typeof siteMediaSchema>;
export type ContentImage = { src: string; alt: string };
export type DisplayMedia = {
  heroDesktop: ContentImage;
  heroMobile: ContentImage;
  about: ContentImage[];
  area: ContentImage[];
  hosts: ContentImage;
  areaCards: ContentImage[];
  rooms: Record<typeof roomIds[number], ContentImage[]>;
};

export function createPageContent(language: Language): PageContent {
  const t = translations[language];
  return pageContentSchema.parse({
    _id: `pageContent-${languageIds[language]}`,
    _type: "pageContent",
    language,
    heroInfoItems: t.heroInfoItems,
    about: t.about,
    rooms: { overline: t.rooms.overline, introduction: t.rooms.introduction, list: t.rooms.list },
    area: t.area,
    services: t.services,
    preFooter: t.preFooter,
  });
}

export function localizeContent(
  language: Language,
  page?: PageContent,
  media?: SiteMedia,
): LocalizedText {
  const defaults = translations[language];
  const content = page
    ? { ...defaults, ...page, rooms: { ...defaults.rooms, ...page.rooms } }
    : defaults;

  return {
    ...content,
    rooms: {
      ...content.rooms,
      list: content.rooms.list.map((room, index) => ({
        ...defaults.rooms.list[index],
        ...room,
        price: media?.rooms[roomIds[index]].price ?? defaults.rooms.list[index].price,
      })),
    },
  };
}
