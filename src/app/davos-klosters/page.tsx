import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JOSHELE in Davos-Klosters | Dekoration & Mode | Ferienregion Guide',
  description: 'JOSHELE Klosters — deine Adresse in der Davos-Klosters Ferienregion für Dekoration & elegante Damenmode. Entdecke unseren Guide.',
  keywords: ['Davos Klosters', 'Ferienregion Shopping', 'Dekoration Ferienhaus', 'Mode Davos Klosters'],
  openGraph: {
    title: 'JOSHELE - Das Original aus der Davos-Klosters Region',
    url: 'https://joshele.ch/davos-klosters',
  },
}

export default function DavosKlostersPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl font-bold text-charcoal mb-6">
              JOSHELE in der Davos-Klosters Region
            </h1>

            <div className="max-w-2xl mb-12">
              <p className="text-xl text-charcoal leading-relaxed mb-6">
                Du planst deinen Aufenthalt in der beliebten Ferienregion Davos-Klosters?
                JOSHELE ist deine perfekte Anlaufstelle für hochwertige Dekoration & elegante
                Damenmode — nur 20 Minuten von Davos entfernt.
              </p>

              <h2 className="font-serif text-3xl font-bold text-charcoal mt-12 mb-6">
                JOSHELE Klosters — Was dich erwartet
              </h2>

              <p className="text-charcoal leading-relaxed">
                Seit 40 Jahren sind wir die erste Adresse in Klosters für alle, die Wert auf
                Qualität, Stil & Beratung legen. Egal ob du ein Ferienhaus einrichten möchtest,
                deine Alpine-Garderobe ergänzen willst oder einfach stöbern möchtest — bei uns
                bist du richtig.
              </p>

              <h2 className="font-serif text-3xl font-bold text-charcoal mt-12 mb-6">
                Unsere Angebote
              </h2>

              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="font-semibold text-lg text-charcoal mb-2">Dekoration & Wohnaccessoires</h3>
                  <p className="text-charcoal mb-2">Hochwertige Dekoration für dein Ferienhaus oder Alpen-Chalet.</p>
                  <Link href="/dekoration-davos" className="text-taupe hover:text-charcoal font-semibold">
                    Mehr zur Dekoration →
                  </Link>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-charcoal mb-2">Damenmode & Alpine Chic</h3>
                  <p className="text-charcoal mb-2">Elegante Mode die zum Berglifestyle passt.</p>
                  <Link href="/damenmode-davos" className="text-taupe hover:text-charcoal font-semibold">
                    Mehr zur Mode →
                  </Link>
                </div>
              </div>

              <h2 className="font-serif text-3xl font-bold text-charcoal mt-12 mb-6">
                Besuche uns!
              </h2>

              <p className="text-charcoal leading-relaxed">
                <strong>JOSHELE - Living & More</strong><br />
                Alte Bahnhofstrasse 3<br />
                7250 Klosters<br />
                <strong>Tel:</strong> +41 81 422 23 03<br />
                <strong>Öffnungszeiten:</strong> Mo–Fr 10:00–12:00, 14:00–18:00 | Sa 10:00–17:00
              </p>
            </div>

            <a
              href="/#contact"
              className="inline-block px-8 py-4 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 font-semibold"
            >
              Kontakt & Fragen
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
