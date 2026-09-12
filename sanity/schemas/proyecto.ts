import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'proyecto',
  title: 'Proyecto',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'imagen',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'enlace',
      title: 'Enlace',
      type: 'url',
    }),
    defineField({
      name: 'tecnologias',
      title: 'Tecnologías',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'estado',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          { title: 'Activo', value: 'activo' },
          { title: 'Completado', value: 'completado' },
          { title: 'Próximamente', value: 'proximo' },
        ],
      },
    }),
  ],
})
