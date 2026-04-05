import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="bg-cream py-20 px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-charcoal mb-4">
            Willkommen bei JOSHELE Klosters
          </h1>
          <p className="font-serif text-2xl text-charcoal mb-8">
            Zeitlose Eleganz trifft alpinen Stil
          </p>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Wir sind seit über 20 Jahren spezialisiert auf Dekorationsartikel und Damenmode.
            Entdecken Sie unsere einzigartige Kombination aus zeitloser Eleganz und alpinem Stil,
            die Ihr Zuhause und Ihren Kleiderschrank bereichern wird.
          </p>
        </section>

        {/* ABOUT SECTION */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-charcoal mb-12 text-center">
              Über uns
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-charcoal mb-4 leading-relaxed">
                  Joshele - Living & More finden Sie mitten im Dorfkern von Klosters.
                  Wir haben über 40 Jahre Erfahrung in der Modebranche und über 30 Jahre
                  im Bereich Dekoration. Gerne beraten wir Sie vor Ort und freuen uns auf Ihren Besuch.
                </p>
              </div>
              <div className="relative h-96">
                <Image
                  src="https://files.designer.hoststar.ch/c0/d5/c0d59bdf-2ef3-4da2-8c6e-664da7de191a.jpg"
                  alt="JOSHELE Shopfront"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="bg-cream py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-charcoal mb-12 text-center">
              Unsere Kollektion
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { src: 'https://files.designer.hoststar.ch/c0/d5/c0d59bdf-2ef3-4da2-8c6e-664da7de191a.jpg', alt: 'Kollektion 1' },
                { src: 'https://files.designer.hoststar.ch/ea/91/ea919b91-a629-408d-8254-da1188c70a56.jpg', alt: 'Kollektion 2' },
                { src: 'https://files.designer.hoststar.ch/81/6f/816f3f34-7b3f-404c-b270-9fa060098075.jpg', alt: 'Kollektion 3' },
                { src: 'https://files.designer.hoststar.ch/65/e5/65e54281-2913-4498-aae1-39baf170d0ec.jpg', alt: 'Kollektion 4' },
              ].map((img) => (
                <div key={img.src} className="relative h-80">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GOOGLE MAPS SECTION */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-charcoal mb-8 text-center">
              Besuchen Sie uns
            </h2>
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2722.1234567890!2d9.8729!3d46.6054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b1d4f4f4f4f4f%3A0x1234567890abcdef!2sAlte%20Bahnhofstrasse%203%2C%207250%20Klosters!5e0!3m2!1sde!2sch!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* KONTAKT INFO SECTION */}
        <section className="bg-cream py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-charcoal mb-12 text-center">
              Kontakt
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">Adresse</h3>
                <p className="text-charcoal">Joshele - Living & More</p>
                <p className="text-charcoal">Alte Bahnhofstrasse 3</p>
                <p className="text-charcoal">7250 Klosters</p>
                <p className="text-charcoal">Schweiz</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">Telefon</h3>
                <a href="tel:+41814222303" className="text-sage hover:text-charcoal text-lg transition-colors">
                  +41 81 422 23 03
                </a>
                <h3 className="font-serif text-2xl font-bold text-charcoal mt-8 mb-4">Öffnungszeiten</h3>
                <p className="text-charcoal text-sm mb-2">Mo–Fr: 10:00–12:00, 14:00–18:00</p>
                <p className="text-charcoal text-sm mb-2">Sa: 10:00–17:00</p>
                <p className="text-charcoal text-sm">So: Geschlossen</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">Social Media</h3>
                <p className="text-charcoal mb-4">Folgen Sie uns auf Instagram für die neuesten Updates:</p>
                <a
                  href="https://instagram.com/joshele_livingandmore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage hover:text-charcoal inline-block text-lg transition-colors"
                >
                  @joshele_livingandmore
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-charcoal mb-8 text-center">
              Kontaktformular
            </h2>
            <form action="https://formspree.io/f/xdappvgr" method="POST" className="space-y-6">
              <div>
                <label className="block text-charcoal font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-charcoal rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label className="block text-charcoal font-semibold mb-2">E-Mail</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-charcoal rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
                  placeholder="Ihre E-Mail"
                />
              </div>
              <div>
                <label className="block text-charcoal font-semibold mb-2">Telefon</label>
                <input
                  type="tel"
                  name="telefon"
                  className="w-full px-4 py-2 border border-charcoal rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
                  placeholder="Ihre Telefonnummer"
                />
              </div>
              <div>
                <label className="block text-charcoal font-semibold mb-2">Nachricht</label>
                <textarea
                  name="nachricht"
                  required
                  className="w-full px-4 py-2 border border-charcoal rounded-lg focus:outline-none focus:ring-2 focus:ring-sage h-32"
                  placeholder="Ihre Nachricht"
                />
              </div>
              <input type="hidden" name="_subject" value="Kundenanfrage joshele.ch" />
              <input type="hidden" name="_redirect" value="https://joshele.ch" />
              <button
                type="submit"
                className="w-full bg-charcoal text-white py-3 rounded-lg font-semibold hover:bg-sage transition-colors"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
