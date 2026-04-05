export default function Footer() {
  return (
    <footer className="bg-cream py-12 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <a
            href="https://instagram.com/joshele_livingandmore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-charcoal hover:text-sage transition-colors duration-200"
            aria-label="JOSHELE auf Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
            <span className="font-sans text-sm tracking-wider">@joshele_livingandmore</span>
          </a>
        </div>
        <p className="text-charcoal font-sans text-sm">© JOSHELE - Living and More</p>
      </div>
    </footer>
  )
}
