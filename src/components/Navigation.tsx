'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl font-bold text-charcoal">
          JOSHELE - LIVING & MORE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-charcoal hover:text-sage transition-colors">
            Home
          </Link>
          <a href="#about" className="text-charcoal hover:text-sage transition-colors">
            Über uns
          </a>
          <a href="#contact" className="text-charcoal hover:text-sage transition-colors">
            Kontakt
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-charcoal text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü öffnen"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4">
          <Link
            href="/"
            className="block text-charcoal hover:text-sage transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <a
            href="#about"
            className="block text-charcoal hover:text-sage transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Über uns
          </a>
          <a
            href="#contact"
            className="block text-charcoal hover:text-sage transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Kontakt
          </a>
        </div>
      )}
    </header>
  )
}
