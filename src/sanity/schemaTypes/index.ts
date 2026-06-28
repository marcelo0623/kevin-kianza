import { type SchemaTypeDefinition } from 'sanity'
import { concertSchema } from './concert'
import { siteInfoSchema } from './siteInfo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [concertSchema, siteInfoSchema],
}