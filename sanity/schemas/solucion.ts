export default {
  name: 'solucion',
  title: 'Solución',
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
      name: 'icono',
      title: 'Icono (emoji)',
      type: 'string',
      description: 'Ejemplo: 📊, 🔄, 📈',
    },
  ],
}
