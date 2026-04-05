import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Damenmode Davos | Alpine Chic & Elegante Mode | JOSHELE',
  description: 'Elegante Damenmode & Alpine Chic in Davos & Klosters. Hochwertige Mode seit 40 Jahren. Besuche uns in der Davos-Klosters Region.',
  keywords: ['Damenmode Davos', 'Mode Davos Klosters', 'Alpenchic Davos', 'Fashion Davos Region'],
  openGraph: {
    title: 'Damenmode Davos - Alpine Chic Kollektion',
    url: 'https://joshele.ch/damenmode-davos',
  },
}

export default function DamenmodeAvosPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl font-bold text-charcoal mb-6">
              Damenmode Davos & Klosters
            </h1>

            <div className="max-w-2xl mb-12">
              <p className="text-xl text-charcoal leading-relaxed mb-6">
                In der Davos-Klosters Ferienregion seit über 40 Jahren deine Ansprechpartnerin
                für elegante Damenmode. Ob du Resident, Ferienhaus-Besitzer oder Tourist bist —
                wir beraten dich gerne.
              </p>

              <h2 className="font-serif text-3xl font-bold text-charcoal mt-12 mb-6">
                Alpine Chic für Davos & Klosters
              </h2>

              <p className="text-charcoal leading-relaxed">
                Alpine Chic ist mehr als Mode — es ist ein Lifestyle für die Bergregionen.
                Hochwertige Materialien, zeitlose Schnitte, Farben die zur Alpenlandschaft passen.
                Das ist, was wir bei JOSHELE anbieten.
              </p>

              <h2 className="font-serif text-3xl font-bold text-charcoal mt-12 mb-6">
                Warum JOSHELE für Mode in Davos?
              </h2>

              <ul className="space-y-3 text-charcoal">
                <li>✓ 40 Jahre Erfahrung in der Modebranche</li>
                <li>✓ Kuratierte Auswahl für Alpine Chic</li>
                <li>✓ Persönliche Stilberatung</li>
                <li>✓ Hochwertige, zeitlose Mode</li>
                <li>✓ Gut erreichbar von Davos (20 min nach Klosters)</li>
              </ul>

              <p className="text-charcoal leading-relaxed mt-8">
                <strong>Besuche JOSHELE in Klosters</strong> — deine Styleberatung wartet!
              </p>
            </div>

            <a
              href="/#contact"
              className="inline-block px-8 py-4 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 font-semibold"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
