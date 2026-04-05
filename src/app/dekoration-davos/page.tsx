import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dekoration Davos | Premium Wohnaccessoires | JOSHELE Klosters-Davos',
  description: 'Hochwertige Dekoration in Davos & Klosters. Von eleganten Wohnaccessoires bis Vintage-Deko. 40 Jahre Erfahrung in der Davos-Klosters Region.',
  keywords: ['Dekoration Davos', 'Deko Davos Klosters', 'Wohnaccessoires Davos', 'Vintage Dekoration Prättigau'],
  openGraph: {
    title: 'Dekoration Davos - Premium Wohnaccessoires',
    description: 'Hochwertige Dekoration & Wohnaccessoires in der Davos-Klosters Region.',
    url: 'https://joshele.ch/dekoration-davos',
  },
}

export default function DekorationDavosPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl font-bold text-charcoal mb-6">
              Dekoration Davos & Klosters
            </h1>

            <div className="max-w-2xl mb-12">
              <p className="text-xl text-charcoal leading-relaxed mb-6">
                In der Davos-Klosters Region seit über 30 Jahren deine Anlaufstelle für hochwertige
                Dekoration & Wohnaccessoires. Ob für dein Ferienhaus, deine Alpen-Residenz oder deinen
                Hauptwohnsitz — wir bieten die perfekte Auswahl.
              </p>

              <h2 className="font-serif text-3xl font-bold text-charcoal mt-12 mb-6">
                Dekoration für die Alpenregion
              </h2>

              <p className="text-charcoal leading-relaxed">
                Die Davos-Klosters Region ist bekannt für ihre Berggrandiosität. Unsere Dekorationen
                passen perfekt zu diesem Lifestyle — zeitlose Eleganz, hochwertige Materialien,
                die Wärme ins Alpen-Zuhause bringen.
              </p>

              <ul className="space-y-3 text-charcoal mt-8">
                <li>✓ Dekoration für Ferienimmobilien</li>
                <li>✓ Winterliche & saisonale Deko</li>
                <li>✓ Einrichtungen für Chalets & Alpine Häuser</li>
                <li>✓ Persönliche Beratung vor Ort in Klosters</li>
              </ul>

              <p className="text-charcoal leading-relaxed mt-8">
                <strong>Besuche JOSHELE in Klosters</strong> — nur 20 Minuten von Davos entfernt,
                im Dorfkern an der Alten Bahnhofstrasse 3.
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
