import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'd4tatech-studio',
  title: 'D4taTech CMS',
  basePath: '/studio',

  projectId: '330d9rwq',
  dataset: 'production',

  plugins: [
    structureTool({
      name: 'myStructure',
      title: 'Content',
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            S.listItem()
              .title('Sobre Mi')
              .id('sobreMi')
              .child(
                S.document()
                  .schemaType('sobreMi')
                  .documentId('sobreMi')
              ),
            S.divider(),
            S.documentTypeListItem('proyecto').title('Proyectos'),
            S.documentTypeListItem('solucion').title('Soluciones'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
