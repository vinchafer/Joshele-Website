'use client'

import { useState } from 'react'
import Image from 'next/image'

interface CarouselProps {
  title: string
}

export default function ImageCarousel({ title }: CarouselProps) {
  const [currentSet, setCurrentSet] = useState(0)

  const imageSets = [
    [
      { src: '/bilder/IMG_9686.jpg', alt: 'Impression 1' },
      { src: '/bilder/IMG_9688.jpg', alt: 'Impression 2' },
    ],
    [
      { src: '/bilder/IMG_9690.jpg', alt: 'Impression 3' },
      { src: '/bilder/IMG_9691.jpg', alt: 'Impression 4' },
      { src: '/bilder/IMG_9692.jpg', alt: 'Impression 5' },
      { src: '/bilder/IMG_9684.jpg', alt: 'Impression 6' },
      { src: '/bilder/IMG_9689.jpg', alt: 'Impression 7' },
    ],
  ]

  const currentImages = imageSets[currentSet]
  const totalSets = imageSets.length

  return (
    <div>
      <h3 className="font-serif text-4xl font-bold text-charcoal mb-12">
        {title}
      </h3>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {currentImages.map((image, idx) => (
          <div key={idx} className="relative h-80 md:h-96">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots/Buttons */}
      {totalSets > 1 && (
        <div className="flex justify-center gap-4 mt-8">
          {Array.from({ length: totalSets }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSet(idx)}
              className={`px-4 py-2 transition-all duration-300 ${
                currentSet === idx
                  ? 'bg-charcoal text-white'
                  : 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
              }`}
            >
              {`Set ${idx + 1}`}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
