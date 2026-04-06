'use client'

import { useState } from 'react'
import Image from 'next/image'

interface CarouselProps {
  title: string
}

export default function ImageCarousel({ title }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const allImages = [
    { src: '/bilder/IMG_9686.jpeg', alt: 'Impression 1' },
    { src: '/bilder/IMG_9688.jpeg', alt: 'Impression 2' },
    { src: '/bilder/IMG_9690.jpeg', alt: 'Impression 3' },
    { src: '/bilder/IMG_9691.jpeg', alt: 'Impression 4' },
    { src: '/bilder/IMG_9692.jpeg', alt: 'Impression 5' },
    { src: '/bilder/IMG_9684.jpeg', alt: 'Impression 6' },
  ]

  const imagesPerSlide = 2
  const totalSlides = Math.ceil(allImages.length / imagesPerSlide)
  const currentImages = allImages.slice(
    currentIndex * imagesPerSlide,
    (currentIndex + 1) * imagesPerSlide
  )

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalSlides)
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)

  return (
    <div>
      <h3 className="font-serif text-4xl font-bold text-charcoal mb-12">
        {title}
      </h3>

      <div className="relative">
        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {currentImages.map((image, idx) => (
            <div key={idx} className="relative h-80 md:h-96 overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                quality={75}
              />
            </div>
          ))}
        </div>

        {/* Arrows + Dots */}
        <div className="flex justify-center items-center gap-8 mt-12">
          <button
            onClick={handlePrev}
            className="w-12 h-12 flex items-center justify-center border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 rounded-full"
            aria-label="Previous images"
          >
            ←
          </button>

          <div className="flex gap-2 items-center">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'bg-charcoal w-8'
                    : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 rounded-full"
            aria-label="Next images"
          >
            →
          </button>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4 text-sm text-charcoal/60">
          {currentIndex + 1} / {totalSlides}
        </div>
      </div>
    </div>
  )
}
