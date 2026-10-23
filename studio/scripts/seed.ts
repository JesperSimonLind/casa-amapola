import { createReadStream } from "node:fs";
import { access } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { getCliClient } from "sanity/cli";
import {
  createPageContent,
  languages,
  roomIds,
  siteMediaSchema,
} from "../../src/cms/content";
import { translations } from "../../src/i18n/translations";

const assetsDirectory = fileURLToPath(new URL("../../src/assets/", import.meta.url));
const aboutFiles = Array.from({ length: 20 }, (_, i) =>
  `about/about-${i + 1}.${i < 3 ? "jpg" : "jpeg"}`,
);
const areaFiles = Array.from({ length: 13 }, (_, i) => `area/area-${i + 1}.jpeg`);
const areaCardFiles = ["nature-hiking", "beaches", "food-wine", "day-trips"].map((name) => `area/${name}.jpg`);
const roomFiles = {
  hanoi: ["hanoi-1.jpg", "hanoi-2.jpeg", "hanoi-3.jpeg"],
  aegean: ["aegean-1.jpg", "aegean-2.jpeg", "aegean-3.jpeg"],
  andalucia: ["andalucia-1.jpg", "andalucia-2.jpeg", "andalucia-3.jpeg"],
  pequena: ["pequena-1.jpg", "pequena-2.jpeg"],
};
const allFiles = [
  "hero/hero-desktop.jpg", "hero/hero-mobile.png", "owners.jpg",
  ...aboutFiles, ...areaFiles, ...areaCardFiles,
  ...Object.values(roomFiles).flat().map((file) => `rooms/${file}`),
];

async function seed() {
  const pages = languages.map(createPageContent);
  for (const file of allFiles) await access(resolve(assetsDirectory, file));
  if (process.env.SANITY_SEED_DRY_RUN === "1") {
    console.log(`Validated ${pages.length} translated documents and ${allFiles.length} source photos. No remote writes.`);
    return;
  }

  const client = getCliClient({ apiVersion: "2025-02-19" });
  const ids = [...pages.map((page) => page._id), "siteMedia"];
  const existing = await client.fetch<string[]>(
    "*[_id in $ids]._id",
    { ids: ids.flatMap((id) => [id, `drafts.${id}`]) },
    { perspective: "raw", useCdn: false },
  );
  const exists = (id: string) => existing.includes(id) || existing.includes(`drafts.${id}`);

  for (const page of pages) {
    if (exists(page._id)) {
      console.log(`Skipping existing ${page._id}.`);
      continue;
    }
    const document = {
      ...page,
      _id: `drafts.${page._id}`,
      rooms: {
        ...page.rooms,
        list: page.rooms.list.map((room, index) => ({ ...room, _key: roomIds[index], _type: "roomText" })),
      },
      area: {
        ...page.area,
        cards: page.area.cards.map((card, index) => ({ ...card, _key: `area-${index}`, _type: "areaCard" })),
      },
      services: {
        ...page.services,
        list: page.services.list.map((service, index) => ({ ...service, _key: `service-${index}`, _type: "service" })),
      },
    };
    await client.createIfNotExists(document);
    console.log(`Created ${document._id}.`);
  }

  if (exists("siteMedia")) {
    console.log("Skipping existing siteMedia.");
    return;
  }
  async function upload(file: string, English: string, Spanish: string, Swedish: string) {
    console.log(`Uploading ${file}`);
    const asset = await client.assets.upload("image", createReadStream(resolve(assetsDirectory, file)), {
      filename: file.split("/").pop(),
    });
    return {
      _type: "websitePhoto",
      asset: { _type: "reference", _ref: asset._id },
      alt: { English, Spanish, Swedish },
    };
  }
  async function uploadGallery(files: string[], label: [string, string, string]) {
    const photos = [];
    for (const [index, file] of files.entries()) {
      photos.push({ ...await upload(file, ...label), _key: `photo-${index}` });
    }
    return photos;
  }
  const rooms = {
    hanoi: { price: translations.English.rooms.list[0].price, images: await uploadGallery(roomFiles.hanoi.map((file) => `rooms/${file}`), ["Hanoi room", "Habitacion Hanoi", "Rummet Hanoi"]) },
    aegean: { price: translations.English.rooms.list[1].price, images: await uploadGallery(roomFiles.aegean.map((file) => `rooms/${file}`), ["Aegean Sea room", "Habitacion Aegean Sea", "Rummet Aegean Sea"]) },
    andalucia: { price: translations.English.rooms.list[2].price, images: await uploadGallery(roomFiles.andalucia.map((file) => `rooms/${file}`), ["Andalucia room", "Habitacion Andalucia", "Rummet Andalucia"]) },
    pequena: { price: translations.English.rooms.list[3].price, images: await uploadGallery(roomFiles.pequena.map((file) => `rooms/${file}`), ["Pequena Escandinavia room", "Habitacion Pequena Escandinavia", "Rummet Pequena Escandinavia"]) },
  };
  const areaCards = [];
  for (const [index, file] of areaCardFiles.entries()) {
    areaCards.push({
      ...await upload(file,
        translations.English.area.cards[index].title,
        translations.Spanish.area.cards[index].title,
        translations.Swedish.area.cards[index].title,
      ),
      _key: `area-${index}`,
    });
  }
  const media = {
    _id: "siteMedia",
    _type: "siteMedia",
    heroDesktop: await upload("hero/hero-desktop.jpg", "Casa Amapola", "Casa Amapola", "Casa Amapola"),
    heroMobile: await upload("hero/hero-mobile.png", "Casa Amapola", "Casa Amapola", "Casa Amapola"),
    hosts: await upload("owners.jpg", "Hosts at Casa Amapola", "Anfitriones de Casa Amapola", "Vardarna pa Casa Amapola"),
    about: await uploadGallery(aboutFiles, ["Casa Amapola", "Casa Amapola", "Casa Amapola"]),
    area: await uploadGallery(areaFiles, ["Around Alhaurin el Grande", "Alrededores de Alhaurin el Grande", "Omgivningarna kring Alhaurin el Grande"]),
    areaCards,
    rooms,
  };
  siteMediaSchema.parse(media);
  await client.createIfNotExists({ ...media, _id: "drafts.siteMedia" });
  console.log("Created drafts.siteMedia. Review the four documents and publish them in Studio. Existing content was not overwritten.");
}

seed().catch((error: unknown) => {
  console.error("Initial Sanity import failed. It is safe to rerun; existing documents are skipped.", error);
  process.exitCode = 1;
});
