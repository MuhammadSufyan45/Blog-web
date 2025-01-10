import { defineType, defineField } from "sanity";

export const Writer = defineType({
    name: 'writer',
    type: 'document',
    title: 'Writer',
    fields:[
        defineField({
            name: 'name',
            type: 'string',
            title: 'Wrtier name',
        })
    ]
})