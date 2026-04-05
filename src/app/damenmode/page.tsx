import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Damenmode Graubünden | Alpine Chic & Elegante Mode | JOSHELE Klosters',
  description: 'Entdecke elegante Damenmode mit Alpenchic-Flair in Klosters. Hochwertige Mode, zeitlos & elegant. 40 Jahre Expertise. Besuche uns im Dorfkern.',
  keywords: ['Damenmode Graubünden', 'Alpenchic Mode', 'Mode Klosters', 'Elegante Mode', 'Fashion Prättigau'],
  openGraph: {
    title: 'Damenmode Graubünden - Alpine Chic Kollektion',
    description: 'Elegante, zeitlose Damenmode mit Alpenchic-Stil in Klosters. Entdecke unsere Auswahl.',
    url: 'https://joshele.ch/damenmode',
  },
}

export default function DamenmodeSeite() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl font-bold text-charcoal mb-6">
              Damenmode in Graubünden
            </h1>

            <div className="max-w-2xl mb-12">
              <p className="text-xl text-charcoal leading-relaxed mb-6">
                Seit über 40 Jahren beraten wir Frauen in Graubünden bei der Wahl ihrer Garderobe.
                Unser Fokus liegt auf zeitlos-eleganter Mode mit Alpenchic-Flair — perfekt für das
                Leben in den Bergen und darüber hinaus.
              </p>

              <h2 className="font-serif text-3xl font-bold text-charcoal mt-12 mb-6">
                Unser Mode-Sortiment
              </h2>

              <ul className="space-y-3 text-charcoal">
                <li>✓ Zeitlose Klassiker & elegante Basics</li>
                <li>✓ Alpine Chic — Mode für den Bergraum</li>
                <li>✓ Hochwertige Materialien & Verarbeitung</li>
                <li>✓ Saisonale Kollektionen</li>
                <li>✓ Persönliche Stilberatung</li>
              </ul>

              <h2 className="font-serif text-3xl font-bold text-charcoal mt-12 mb-6">
                Alpenchic Style
              </h2>

              <p className="text-charcoal leading-relaxed">
                Alpine Chic verbindet Funktionalität mit Eleganz. Es geht um hochwertige Materialien,
                zeitlose Schnitte und Farben, die zur Berglandschaft passen. Bei JOSHELE findest du
                genau diese Balance — Mode, die dich überall begleitet.
              </p>

              <h2 className="font-serif text-3xl font-bold text-charcoal mt-12 mb-6">
                Warum JOSHELE für Mode wählen?
              </h2>

              <p className="text-charcoal leading-relaxed">
                Mit 40 Jahren Erfahrung in der Modebranche verstehen wir, was Frauen wirklich brauchen.
                Wir beraten individuell, wählen sorgfältig aus und bieten eine Auswahl, die nicht an
                Trends gebunden ist, sondern zeitlos elegant bleibt.
              </p>

              <p className="text-charcoal leading-relaxed mt-6">
                <strong>Besuche uns im Dorfkern von Klosters</strong> und entdecke deine nächste
                Lieblings-Mode. Wir freuen uns auf deinen Besuch und deine Fragen!
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
