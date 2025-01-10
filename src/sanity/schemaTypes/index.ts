import { type SchemaTypeDefinition } from 'sanity'
import { Blog } from '../blog'
import { Writer } from '../writer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Blog,Writer],
}
