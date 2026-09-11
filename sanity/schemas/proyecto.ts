export default {
  name: 'proyecto',
  title: 'Proyecto',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'imagen',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'enlace',
      title: 'Enlace',
      type: 'url',
    },
    {
      name: 'tecnologias',
      title: 'Tecnologías',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
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
    },
  ],
}
