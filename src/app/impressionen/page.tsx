import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressionen | JOSHELE Klosters - Shopfront, Dekoration & Mode',
  description: 'Entdecke die Atmosphäre von JOSHELE. Impressionen unseres Ladens in Klosters mit Dekoration & Damenmode.',
  openGraph: {
    title: 'Impressionen - JOSHELE Klosters',
    url: 'https://joshele.ch/impressionen',
  },
}

const images = [
  { src: '/bilder/IMG_9678.jpeg', alt: 'JOSHELE Außenansicht Klosters' },
  { src: '/bilder/IMG_9684.jpeg', alt: 'JOSHELE Innenraum' },
  { src: '/bilder/IMG_9686.jpeg', alt: 'JOSHELE Dekoration' },
  { src: '/bilder/IMG_9688.jpeg', alt: 'JOSHELE Mode & Dekoration' },
  { src: '/bilder/IMG_9690.jpeg', alt: 'JOSHELE Kollektion' },
  { src: '/bilder/IMG_9692.jpeg', alt: 'JOSHELE Laden Klosters' },
]

export default function ImpressionsPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-serif text-5xl font-bold text-charcoal mb-6 text-center">
              Impressionen
            </h1>
            <p className="text-center text-charcoal text-lg mb-16 max-w-2xl mx-auto">
              Erlebe die Atmosphäre von JOSHELE — ein Ort für Dekoration & Mode
              im Dorfkern von Klosters
            </p>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {images.map((img) => (
                <div key={img.src} className="relative h-96">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <a
                href="/#contact"
                className="inline-block px-8 py-4 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 font-semibold"
              >
                Besuche uns persönlich
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
