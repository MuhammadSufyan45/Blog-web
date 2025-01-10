import { defineType, defineField, defineArrayMember } from "sanity"

export const Blog = defineType({
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Blog Title',
            validation: Rule => Rule.required(),
        }),

        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required(),
        }),

        defineField({
            name: 'description',
            type: 'text',
            title: 'Descripton of the Blog',
        }),

        defineField({
            name: 'image',
            type: 'image',
            title: 'image',
            validation: Rule => Rule.required(),
        }),

        defineField({
            name: 'content',
            type: 'array',
            title: 'Content',
            of:[
                defineArrayMember(
                    {
                        type: 'block'
                    }
                )
            ]
        }),

        defineField({
            name: 'date',
            type: 'string',
            title: 'Date',
        }),

        defineField({
            name: 'category',
            type: 'string',
            title: 'Category',
        }),

        defineField({
            name: 'writer',
            type: 'reference',
            title: 'Writer',
            to:[
                {
                    type: 'writer'
                }
            ]
        }),
    ]


})