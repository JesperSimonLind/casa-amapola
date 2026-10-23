import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

const documents = [
  { id: "pageContent-en", type: "pageContent", title: "English text" },
  { id: "pageContent-es", type: "pageContent", title: "Spanish text" },
  { id: "pageContent-sv", type: "pageContent", title: "Swedish text" },
  { id: "siteMedia", type: "siteMedia", title: "Photos & room prices (all languages)" },
];

export default defineConfig({
  name: "casa-amapola",
  title: "Casa Amapola",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "pyefeumj",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Website content")
          .items(
            documents.map(({ id, type, title }) =>
              S.listItem().id(id).title(title).child(
                S.document().schemaType(type).documentId(id).title(title),
              ),
            ),
          ),
    }),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter((template) => !["pageContent", "siteMedia"].includes(template.schemaType)),
  },
  document: {
    actions: (actions, context) =>
      ["pageContent", "siteMedia"].includes(context.schemaType)
        ? actions.filter(({ action }) => action !== "delete" && action !== "duplicate" && action !== "unpublish")
        : actions,
  },
});
