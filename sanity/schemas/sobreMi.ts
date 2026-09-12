import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'sobreMi',
  title: 'Sobre Mi',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
    }),
    defineField({
      name: 'titulo',
      title: 'Título profesional',
      type: 'string',
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'imagen',
      title: 'Foto de perfil',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'stack',
      title: 'Stack/Tecnologías',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
  ],
})
