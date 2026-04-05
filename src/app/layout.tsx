import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JOSHELE - Living & More | Dekoration & Damenmode Klosters',
  description: 'Seit 40 Jahren Ihr Vertrauenspartner für zeitlose Eleganz & Alpine Chic in Klosters.',
  openGraph: {
    title: 'JOSHELE - Living & More',
    description: 'Seit 40 Jahren Ihr Vertrauenspartner für zeitlose Eleganz & Alpine Chic in Klosters.',
    url: 'https://joshele.ch',
    siteName: 'JOSHELE - Living & More',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JOSHELE - Living & More',
    description: 'Dekoration & Damenmode in Klosters',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'JOSHELE - Living & More',
              image: 'https://files.designer.hoststar.ch/c0/d5/c0d59bdf-2ef3-4da2-8c6e-664da7de191a.jpg',
              description: 'Dekoration & Damenmode in Klosters',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Alte Bahnhofstrasse 3',
                addressLocality: 'Klosters',
                postalCode: '7250',
                addressCountry: 'CH',
              },
              telephone: '+41814222303',
              url: 'https://joshele.ch',
              sameAs: 'https://instagram.com/joshele_livingandmore',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
