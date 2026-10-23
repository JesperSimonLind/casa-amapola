import { defineArrayMember, defineField, defineType, type ArrayOptions } from "sanity";

const requiredText = (name: string, title: string, multiline = false) =>
  defineField({
    name,
    title,
    type: multiline ? "text" : "string",
    validation: (Rule) => Rule.required().custom((value) =>
      typeof value === "string" && value.trim() ? true : "Enter text, not just spaces.",
    ),
  });

const fixedOptions: ArrayOptions = {
  sortable: false,
  disableActions: ["add", "remove", "duplicate", "copy"],
};

const paragraphField = defineField({
  name: "paragraphs",
  title: "Paragraphs",
  type: "array",
  of: [defineArrayMember({ type: "text", validation: (Rule) => Rule.required().min(1) })],
  validation: (Rule) => Rule.required().min(1),
});

const photo = defineType({
  name: "websitePhoto",
  title: "Photo",
  type: "image",
  description: "Use the full image; crop or resize it before uploading if needed.",
  fields: [
    defineField({
      name: "alt",
      title: "Image description (optional)",
      type: "object",
      description: "Optional: describe what this photo shows. Leave blank to use the room or gallery label in that language.",
      fields: ["English", "Spanish", "Swedish"].map((name) =>
        defineField({ name, title: name, type: "string" }),
      ),
    }),
  ],
  validation: (Rule) => Rule.required().assetRequired(),
});

const gallery = (name: string, title: string) => defineField({
  name,
  title,
  type: "array",
  of: [defineArrayMember({ type: "websitePhoto" })],
  validation: (Rule) => Rule.required().min(1),
});

const pageContent = defineType({
  name: "pageContent",
  title: "Website text",
  type: "document",
  description: "Run the initial import before editing. Publish each language separately. Layout and list order are fixed.",
  fields: [
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      readOnly: true,
      options: { list: ["English", "Spanish", "Swedish"] },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroInfoItems",
      title: "Hero highlights (rooms, terrace, location)",
      type: "array",
      options: fixedOptions,
      of: [defineArrayMember({ type: "string", validation: (Rule) => Rule.required().min(1) })],
      validation: (Rule) => Rule.required().length(3),
    }),
    defineField({
      name: "about", title: "About us", type: "object",
      validation: (Rule) => Rule.required(),
      fields: [requiredText("overline", "Section heading"), paragraphField],
    }),
    defineField({
      name: "rooms", title: "Rooms", type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        requiredText("overline", "Section heading"),
        requiredText("introduction", "Introduction", true),
        defineField({
          name: "list", title: "Room details", type: "array",
          description: "Fixed order: Hanoi, Aegean Sea, Andalucia, Pequena Escandinavia. Prices and photos are shared in Photos & room prices.",
          options: fixedOptions,
          validation: (Rule) => Rule.required().length(4),
          of: [defineArrayMember({
            name: "roomText", type: "object",
            fields: [
              requiredText("title", "Room name"),
              requiredText("description", "Description", true),
              requiredText("bed", "Beds"),
              requiredText("size", "Room size"),
              requiredText("bathroom", "Bathroom"),
              defineField({ name: "seasonalAvailability", title: "Seasonal availability (optional)", type: "string" }),
            ],
            preview: { select: { title: "title" } },
          })],
        }),
      ],
    }),
    defineField({
      name: "area", title: "Explore the area", type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        requiredText("overline", "Section heading"),
        requiredText("title", "Title"),
        paragraphField,
        defineField({
          name: "cards", title: "Area cards", type: "array",
          description: "Fixed order: nature/hiking, beaches, food/wine, day trips.",
          options: fixedOptions,
          validation: (Rule) => Rule.required().length(4),
          of: [defineArrayMember({
            name: "areaCard", type: "object",
            fields: [requiredText("title", "Title"), requiredText("description", "Description", true)],
            preview: { select: { title: "title" } },
          })],
        }),
        requiredText("ctaTitle", "Contact prompt title"),
        requiredText("ctaDescription", "Contact prompt description", true),
        requiredText("ctaLink", "Contact link text"),
      ],
    }),
    defineField({
      name: "services", title: "Services", type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        requiredText("overline", "Section heading"),
        defineField({
          name: "list", title: "Services", type: "array",
          description: "The existing order matches the website icons.",
          options: fixedOptions,
          validation: (Rule) => Rule.required().length(10),
          of: [defineArrayMember({
            name: "service", type: "object",
            fields: [
              requiredText("title", "Title"),
              requiredText("description", "Description", true),
              defineField({ name: "emphasized", title: "Emphasize this service", type: "boolean", initialValue: false }),
            ],
            preview: { select: { title: "title" } },
          })],
        }),
      ],
    }),
    defineField({
      name: "preFooter", title: "Extras and hosts", type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        requiredText("extrasTitle", "Extras heading"),
        requiredText("extrasParagraph1", "Extras paragraph 1", true),
        requiredText("extrasParagraph2", "Extras paragraph 2", true),
        requiredText("extrasParagraph3", "Extras paragraph 3", true),
        requiredText("hostsTitle", "Hosts heading"),
        requiredText("hostsParagraph", "Hosts description", true),
      ],
    }),
  ],
  preview: { select: { title: "language" } },
});

const siteMedia = defineType({
  name: "siteMedia",
  title: "Photos & room prices",
  type: "document",
  fields: [
    defineField({ name: "heroDesktop", title: "Hero (desktop)", type: "websitePhoto", validation: (Rule) => Rule.required() }),
    defineField({ name: "heroMobile", title: "Hero (mobile)", type: "websitePhoto", validation: (Rule) => Rule.required() }),
    gallery("about", "About us gallery"),
    gallery("area", "Area gallery"),
    defineField({ name: "hosts", title: "Hosts photo", type: "websitePhoto", validation: (Rule) => Rule.required() }),
    defineField({
      ...gallery("areaCards", "Area card photos"),
      description: "Fixed order: nature/hiking, beaches, food/wine, day trips. Replace images in place.",
      options: fixedOptions,
      validation: (Rule) => Rule.required().length(4),
    }),
    defineField({
      name: "rooms", title: "Rooms", type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        ["hanoi", "Hanoi"],
        ["aegean", "Aegean Sea"],
        ["andalucia", "Andalucia"],
        ["pequena", "Pequena Escandinavia"],
      ].map(([name, title]) => defineField({
        name, title, type: "object",
        validation: (Rule) => Rule.required(),
        fields: [
          requiredText("price", "Nightly price (including currency; e.g. EUR 70-80)"),
          gallery("images", "Room gallery"),
        ],
      })),
    }),
  ],
  preview: { prepare: () => ({ title: "Photos & room prices (all languages)" }) },
});

export const schemaTypes = [photo, pageContent, siteMedia];
