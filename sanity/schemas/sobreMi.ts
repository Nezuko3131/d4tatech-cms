export default {
  name: 'sobreMi',
  title: 'Sobre Mi',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'titulo',
      title: 'Título profesional',
      type: 'string',
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'imagen',
      title: 'Foto de perfil',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'stack',
      title: 'Stack/Tecnologías',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
  ],
}
