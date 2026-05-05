'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechVenture',
    text: 'Softro completely transformed our brand identity. Their attention to detail and creative approach exceeded every expectation. The team delivered everything on time and our conversions are up significantly.',
    logo: '/images/testimonial-author-img.png',
    stars: 5,
  },
  {
    name: 'James Wilson',
    role: 'Founder, GreenLeaf',
    text: 'Working with Softro was an absolute pleasure. They understood our vision from day one and brought it to life in ways we never imagined. Highly recommend their services to any growing business.',
    logo: '/images/testimonial-author-img2.png',
    stars: 5,
  },
  {
    name: 'Amina Yusuf',
    role: 'Product Manager, FinEdge',
    text: 'The team delivered a stunning product experience. Our engagement metrics improved dramatically after launch.',
    logo: '/images/testimonial-author-img.png',
    stars: 5,
  },
  {
    name: 'Daniel Okoro',
    role: 'Founder, BuildHQ',
    text: 'Exceptional design and communication. They truly understand modern UI/UX principles.',
    logo: '/images/testimonial-author-img2.png',
    stars: 5,
  },
  {
    name: 'Maria Lopez',
    role: 'Marketing Lead, BrightAds',
    text: 'Our campaign performance doubled thanks to their creative direction and execution.',
    logo: '/images/testimonial-author-img.png',
    stars: 5,
  },
  {
    name: 'Maria Lopez',
    role: 'Marketing Lead, BrightAds',
    text: 'Our campaign performance doubled thanks to their creative direction and execution.',
    logo: '/images/testimonial-author-img.png',
    stars: 5,
  },
]

// 🔥 CARD
function TestimonialCard({ t }) {
  return (
    <div className="relative bg-white dark:bg-[#151a16] rounded-2xl border-[0.1px] border-gray-500/30 dark:border-gray-700 p-8 flex flex-col gap-5 py-10 shadow-sm h-full">
      
      <div className="flex items-center justify-between gap-5 mb-5">
        <div>
          <div className="flex gap-0.5">
            {[...Array(t.stars)].map((_, j) => (
              <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>

          <p className="font-semibold text-lg mt-3 text-black dark:text-white">Outstanding Service</p>
        </div>

        <Image
          src={t.logo}
          alt={t.name}
          width={80}
          height={40}
          className="rounded-tr-[16px] rounded-bl-[16px]"
        />
      </div>

      <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
        "{t.text}"
      </p>

      <div>
        <p className="font-semibold text-lg text-black dark:text-white">{t.name}</p>
        <p className="text-gray-500 dark:text-gray-400">{t.role}</p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(2)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const sync = () => setSlidesPerView(mq.matches ? 2 : 1)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - slidesPerView)

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex))
  }, [maxIndex])

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (maxIndex <= 0 ? 0 : (prev >= maxIndex ? 0 : prev + 1)))
    }, 5000)

    return () => clearInterval(interval)
  }, [maxIndex])

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white dark:bg-[#0f1210]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER (unchanged) */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black dark:text-white">
            What Our Clients Say
          </h2>
        </div>

        {/* 🔥 SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / slidesPerView)}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-2 sm:px-3"
                style={{ flex: `0 0 ${100 / slidesPerView}%` }}
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 DOTS */}
        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-black dark:bg-[#c5e87a]" : "w-2 bg-gray-300 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}