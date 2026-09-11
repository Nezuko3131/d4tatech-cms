import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'D4taTech CMS',
  description: 'Panel de administración de contenido',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
