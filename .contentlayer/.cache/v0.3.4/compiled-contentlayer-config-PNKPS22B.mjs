// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Case = defineDocumentType(() => ({
  name: "Case",
  filePathPattern: `cases/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    date: { type: "date", required: true }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Case]
});
export {
  Case,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-PNKPS22B.mjs.map
