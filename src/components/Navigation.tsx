'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <svg viewBox="0 0 420 110" xmlns="http://www.w3.org/2000/svg" className="h-10">
            <text x="0" y="60" fontFamily="Lora, serif" fontSize="64" fontWeight="300" fill="#888888" letterSpacing="6">
              JOSHELE
            </text>
            <text x="2" y="100" fontFamily="Lora, serif" fontSize="28" fontWeight="300" fill="#888888" letterSpacing="5">
              LIVING & MORE
            </text>
          </svg>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-charcoal hover:text-taupe transition-colors text-sm">
            Home
          </Link>
          <a href="#about" className="text-charcoal hover:text-taupe transition-colors text-sm">
            Über uns
          </a>
          <a href="#contact" className="text-charcoal hover:text-taupe transition-colors text-sm">
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
            className="block text-charcoal hover:text-taupe text-sm"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <a
            href="#about"
            className="block text-charcoal hover:text-taupe text-sm"
            onClick={() => setIsOpen(false)}
          >
            Über uns
          </a>
          <a
            href="#contact"
            className="block text-charcoal hover:text-taupe text-sm"
            onClick={() => setIsOpen(false)}
          >
            Kontakt
          </a>
        </div>
      )}
    </header>
  )
}
