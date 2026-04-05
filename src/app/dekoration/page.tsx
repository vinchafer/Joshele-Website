import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dekoration Klosters | Premium Wohnaccessoires & Vintage Deko | JOSHELE',
  description: 'Hochwertige Dekoration in Klosters. Von zeitlos-eleganten Wohnaccessoires bis Vintage-Dekoration. 40 Jahre Erfahrung. Besuche uns im Dorfkern von Klosters.',
  keywords: ['Dekoration Klosters', 'Deko Graubünden', 'Vintage Dekoration', 'Wohnaccessoires', 'Einrichtung Klosters'],
  openGraph: {
    title: 'Dekoration Klosters - Premium Wohnaccessoires',
    description: 'Entdecke unsere kuratierte Auswahl an hochwertiger Dekoration & Wohnaccessoires in Klosters.',
    url: 'https://joshele.ch/dekoration',
  },
}

export default function DekorationPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl font-bold text-charcoal mb-6">
              Dekoration in Klosters
            </h1>

            <div className="max-w-2xl mb-12">
              <p className="text-xl text-charcoal leading-relaxed mb-6">
                Seit über 30 Jahren spezialisieren wir uns auf hochwertige Dekoration und Wohnaccessoires.
                Von zeitlos-eleganten Einrichtungsstücken bis zu sorgfältig ausgesuchten Vintage-Dekorationen —
                wir bieten die perfekte Auswahl für dein Zuhause.
              </p>

              <h2 className="font-serif text-3xl font-bold text-charcoal mt-12 mb-6">
                Unser Dekorations-Sortiment
              </h2>

              <ul className="space-y-3 text-charcoal">
                <li>✓ Zeitlose Einrichtungsstücke & Wohnaccessoires</li>
                <li>✓ Vintage & Antik-Dekoration</li>
                <li>✓ Naturmaterialien & hochwertige Stoffe</li>
                <li>✓ Saisonale Dekorationen</li>
                <li>✓ Individuelle Beratung vor Ort</li>
              </ul>

              <h2 className="font-serif text-3xl font-bold text-charcoal mt-12 mb-6">
                Warum JOSHELE für Dekoration wählen?
              </h2>

              <p className="text-charcoal leading-relaxed">
                Mit 40 Jahren Erfahrung verstehen wir, wie du dein Zuhause in einen Wohlfühl-Raum verwandelst.
                Unsere Kurator:innen wählen jedes Stück sorgfältig aus — für nachhaltige, zeitlose Eleganz,
                die nicht an Trends gebunden ist.
              </p>

              <p className="text-charcoal leading-relaxed mt-6">
                <strong>Besuche uns im Dorfkern von Klosters</strong> und entdecke unsere aktuelle Auswahl an
                hochwertiger Dekoration & Wohnaccessoires. Wir freuen uns auf deinen Besuch!
              </p>
            </div>

            <div className="mt-12">
              <a
                href="/#contact"
                className="inline-block px-8 py-4 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 font-semibold"
              >
                Jetzt Kontakt aufnehmen
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
