import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JOSHELE - Living & More | Dekoration & Damenmode Klosters',
  description: 'Entdecken Sie unsere einzigartige Kombination aus zeitloser Eleganz und alpinem Stil in Klosters.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
