'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ImageCarousel from '@/components/ImageCarousel'
import Image from 'next/image'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    nachricht: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('https://formspree.io/f/xdappvgr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setMessage('Vielen Dank! Ihre Nachricht wurde versendet.')
        setFormData({ name: '', email: '', telefon: '', nachricht: '' })
      } else {
        setMessage('Es gab einen Fehler. Bitte versuchen Sie es später erneut.')
      }
    } catch {
      setMessage('Fehler beim Senden der Nachricht.')
    }
    setLoading(false)
  }

  return (
    <>
      <Navigation />
      <main>
        {/* HERO SECTION - FULL SCREEN WITH LOCAL IMAGE */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <Image
            src="/bilder/IMG_9683.jpeg"
            alt="JOSHELE Shopfront"
            fill
            className="object-cover"
            priority
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/25" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10">
            <h1 className="font-serif text-6xl md:text-7xl font-bold mb-4 tracking-tight">
              Willkommen bei JOSHELE
            </h1>
            <p className="font-serif text-2xl md:text-3xl mb-8 font-light">
              Innendekoration und Damenmode in Klosters
            </p>
            <a
              href="#about"
              className="px-6 py-3 border-2 border-white text-white bg-transparent hover:bg-white hover:text-charcoal transition-all duration-300"
            >
              Mehr entdecken
            </a>
          </div>
        </section>

        {/* ABOUT + IMPRESSIONS SECTION */}
        <section id="about" className="py-32 px-4">
          <div className="max-w-6xl mx-auto">
            {/* ABOUT */}
            <div className="mb-24">
              <h2 className="font-serif text-5xl font-bold text-charcoal mb-8">
                Über uns
              </h2>
              <p className="text-xl text-charcoal leading-relaxed max-w-3xl">
                Seit über 40 Jahren Ihr Vertrauenspartner für Dekoration & Damenmode in Klosters.
                Joshele - Living & More finden Sie mitten im Dorfkern — gerne beraten wir Sie
                persönlich und freuen uns auf Ihren Besuch.
              </p>
            </div>

            {/* IMPRESSIONS CAROUSEL */}
            <ImageCarousel title="Impressionen" />
          </div>
        </section>

        {/* CONTACT SECTION - COMBINED */}
        <section id="contact" className="bg-gray-50 py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-5xl font-bold text-charcoal mb-16 text-center">
              Kontakt
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* LEFT COLUMN: EXTERIOR + MAP + INFO */}
              <div className="space-y-12">
                {/* EXTERIOR IMAGE */}
                <div className="relative h-72 md:h-80 rounded-lg overflow-hidden shadow-lg group">
                  <Image
                    src="/bilder/IMG_9678.jpeg"
                    alt="JOSHELE Außenansicht Klosters"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
                </div>

                {/* MAP */}
                <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
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

                {/* INFO */}
                <div className="space-y-8">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">Adresse</h3>
                    <p className="text-charcoal leading-relaxed">
                      Joshele - Living & More<br />
                      Alte Bahnhofstrasse 3<br />
                      7250 Klosters<br />
                      Schweiz
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">Telefon</h3>
                    <a href="tel:+41814222303" className="text-taupe hover:text-charcoal text-lg font-semibold">
                      +41 81 422 23 03
                    </a>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">Öffnungszeiten</h3>
                    <p className="text-charcoal leading-relaxed text-sm mb-4">
                      Aktuelle Öffnungszeiten findest du auf Google Maps:
                    </p>
                    <a
                      href="https://www.google.com/maps/search/Joshele+Living+More+Alte+Bahnhofstrasse+3+7250+Klosters"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 border-2 border-taupe text-taupe hover:bg-taupe hover:text-white transition-all duration-300 font-semibold text-sm"
                    >
                      Google Maps öffnen
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: FORM */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-8">
                  Nachricht senden
                </h3>
                {message && (
                  <div className="mb-6 p-4 bg-taupe text-white rounded-lg text-center text-sm">
                    {message}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-charcoal font-semibold mb-2 text-sm">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-charcoal rounded-lg focus:outline-none focus:ring-2 focus:ring-taupe text-sm"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal font-semibold mb-2 text-sm">E-Mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-charcoal rounded-lg focus:outline-none focus:ring-2 focus:ring-taupe text-sm"
                      placeholder="Ihre E-Mail"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal font-semibold mb-2 text-sm">Telefon</label>
                    <input
                      type="tel"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-charcoal rounded-lg focus:outline-none focus:ring-2 focus:ring-taupe text-sm"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal font-semibold mb-2 text-sm">Nachricht</label>
                    <textarea
                      name="nachricht"
                      value={formData.nachricht}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-charcoal rounded-lg focus:outline-none focus:ring-2 focus:ring-taupe h-32 text-sm"
                      placeholder="Ihre Nachricht"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-minimal disabled:opacity-50 font-semibold text-sm"
                  >
                    {loading ? 'Wird gesendet...' : 'Nachricht senden'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
