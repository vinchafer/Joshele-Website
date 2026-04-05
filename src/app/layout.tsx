import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JOSHELE - Innendekoration und Damenmode Klosters',
  description: 'Seit 40 Jahren Innendekoration und Damenmode in Klosters. Hochwertige Auswahl, persönliche Beratung. Besuche uns im Dorfkern an der Alten Bahnhofstrasse 3.',
  keywords: ['Innendekoration Klosters', 'Damenmode Klosters', 'Dekoration Graubünden', 'Mode Klosters', 'Boutique Klosters'],
  alternates: {
    canonical: 'https://joshele.ch',
    languages: {
      'de-CH': 'https://joshele.ch',
      'x-default': 'https://joshele.ch',
    },
  },
  openGraph: {
    title: 'JOSHELE - Innendekoration und Damenmode in Klosters',
    description: 'Seit 40 Jahren Innendekoration und Damenmode in Klosters. Hochwertige Auswahl, persönliche Beratung.',
    url: 'https://joshele.ch',
    siteName: 'JOSHELE - Living & More',
    type: 'website',
    locale: 'de_CH',
    images: [
      {
        url: 'https://joshele.ch/og-image.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'JOSHELE Shopfront Klosters',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JOSHELE - Dekoration & Damenmode',
    description: 'Innendekoration und Damenmode in Klosters seit 40 Jahren',
    images: ['https://joshele.ch/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Store'],
  name: 'JOSHELE - Living & More',
  url: 'https://joshele.ch',
  image: 'https://joshele.ch/og-image.jpg',
  description: 'Innendekoration und Damenmode in Klosters seit 40 Jahren',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Alte Bahnhofstrasse 3',
    addressLocality: 'Klosters',
    addressRegion: 'Graubünden',
    postalCode: '7250',
    addressCountry: 'CH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 46.6054,
    longitude: 9.8729,
  },
  areaServed: [
    { '@type': 'City', name: 'Klosters', url: 'https://joshele.ch/' },
    { '@type': 'City', name: 'Davos' },
    { '@type': 'Region', name: 'Prättigau-Davos', url: 'https://joshele.ch/' },
    { '@type': 'State', name: 'Graubünden', url: 'https://joshele.ch/' },
    { '@type': 'Country', name: 'Switzerland', url: 'https://joshele.ch/' },
  ],
  telephone: '+41814222303',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://instagram.com/joshele_livingandmore',
    'https://www.google.com/maps/place/Joshele+-+Living+%26+More',
    'https://maps.apple.com/?address=Alte%20Bahnhofstrasse%203,%207250%20Klosters,%20Switzerland',
  ],
  priceRange: 'CHF 50 - CHF 5000',
  keywords: 'Innendekoration, Damenmode, Klosters, Graubünden, Boutique',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wo befindet sich JOSHELE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JOSHELE - Living & More befindet sich im Dorfkern von Klosters an der Alten Bahnhofstrasse 3, 7250 Klosters, Graubünden, Schweiz.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Öffnungszeiten hat JOSHELE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mo–Fr: 10:00–12:00, 14:00–18:00 | Sa: 10:00–17:00 | So: Geschlossen',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie kontaktiere ich JOSHELE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du kannst uns telefonisch unter +41 81 422 23 03 erreichen oder unser Kontaktformular nutzen.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://joshele.ch' },
    { '@type': 'ListItem', position: 2, name: 'Dekoration', item: 'https://joshele.ch/dekoration' },
    { '@type': 'ListItem', position: 3, name: 'Damenmode', item: 'https://joshele.ch/damenmode' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="German, Deutsch" />
        <meta name="geo.position" content="46.6054;9.8729" />
        <meta name="ICBM" content="46.6054, 9.8729" />
        <meta name="geo.placename" content="Klosters, Graubünden, Switzerland" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
