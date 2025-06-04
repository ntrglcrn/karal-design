// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Case = defineDocumentType(() => ({
  name: 'Case',
  filePathPattern: `cases/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Case],
})
