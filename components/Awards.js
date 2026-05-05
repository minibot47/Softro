'use client'

import { useState } from 'react'
import Image from 'next/image'

const awards = [
  { title: 'Best Emerging Digital Marketing Agency', year: '2026', img: '/images/awardimg.png' },
  { title: 'Excellence In Social Media Strategy', year: '2025', img: '/images/awardimg2.png' },
  { title: 'Top 10 SEO Agencies In Asia', year: '2024', img: '/images/awardimg3.png' },
  { title: 'Innovation In Performance Marketing', year: '2023', img: '/images/awardimg6.png' },
  { title: 'Fastest Growing Startup', year: '2022', img: '/images/awardimg5.png' },
]

export default function Awards() {
  const [hoveredIndex, setHoveredIndex] = useState(0)

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-white dark:bg-[#0f1210] max-w-[1440px] mx-auto">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 lg:gap-[113px] mb-10 md:mb-16">
        <span className="px-4 py-1.5 rounded-full border border-gray-400 text-sm text-gray-700 dark:text-gray-300 flex-shrink-0 sm:mt-2 w-fit">
          Award
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
          Awards That<br />Inspire Us
        </h2>
      </div>

      {/* Body — stack on small screens, side-by-side from lg */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 lg:items-start">

        {/* Image */}
        <div className="flex-shrink-0 w-full max-w-[380px] mx-auto lg:mx-0 h-[280px] sm:h-[360px] md:h-[440px] lg:w-[380px] lg:h-[520px] rounded-[16px] overflow-hidden border-8 sm:border-[12px] md:border-[20px] border-gray-100 dark:border-gray-800 relative">
          {awards.map((award, i) => (
            <Image
              key={i}
              src={award.img}
              alt={award.title}
              fill
              className="object-cover transition-opacity duration-500"
              style={{ opacity: hoveredIndex === i ? 1 : 0 }}
            />
          ))}
        </div>

        {/* Award list */}
        <div className="flex-1 flex flex-col gap-0 min-w-0 w-full">
          {awards.map((award, i) => {
            const active = hoveredIndex === i
            return (
            <div
              key={i}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setHoveredIndex(i)
                }
              }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 px-4 py-5 sm:px-6 sm:py-6 md:py-7 cursor-pointer transition-all duration-300 text-left"
              style={{
                background: active ? '#C8F8A9' : 'transparent',
                borderBottom: i === awards.length - 1 ? 'none' : '1px solid #e5e7eb',
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onClick={() => setHoveredIndex(i)}
            >
              <span
                className={`text-base sm:text-lg md:text-xl font-medium transition-colors duration-300 pr-2 ${
                  active ? 'text-[#1a2e10]' : 'text-gray-900 dark:text-gray-200'
                }`}
              >
                {award.title}
              </span>
              <span
                className={`text-base sm:text-lg md:text-xl font-medium transition-colors duration-300 flex-shrink-0 ${
                  active ? 'text-[#1a2e10]' : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {award.year}
              </span>
            </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}