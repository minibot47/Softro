'use client'

import { useState } from 'react'
import Image from 'next/image'

const awards = [
  { title: 'Best Emerging Digital Marketing Agency', year: '2026', img: '/images/awardimg.png' },
  { title: 'Excellence In Social Media Strategy', year: '2025', img: '/images/awardimg2.png' },
  { title: 'Top 10 SEO Agencies In Asia', year: '2024', img: '/images/awardimg3.png' },
  { title: 'Innovation In Performance Marketing', year: '2023', img: '/images/awardimg4.png' },
  { title: 'Fastest Growing Startup', year: '2022', img: '/images/awardimg5.png' },
]

export default function Awards() {
  const [hoveredIndex, setHoveredIndex] = useState(0)

  return (
    <section className="py-24 px-16 bg-white dark:bg-[#0f1210] max-w-[1440px] mx-auto">

      {/* Header */}
      <div className="flex items-start gap-[113px] mb-16">
        <span className="px-4 py-1.5 rounded-full border border-gray-400 text-sm text-gray-700 dark:text-gray-300 flex-shrink-0 mt-2">
          Award
        </span>
        <h2 className="text-5xl font-bold text-black dark:text-white leading-tight">
          Awards That<br />Inspire Us
        </h2>
      </div>

      {/* Body */}
      <div className="flex gap-8 items-start">

        {/* Left — image */}
        <div className="flex-shrink-0 w-[380px] h-[520px] rounded-[16px] overflow-hidden border-[20px]   dark:border-gray-800 relative">
          {awards.map((award, i) => (
            <Image
              key={i}
              src={award.img}
              alt={award.title}
              fill
              className="object-cover transition-opacity duration-500 "
              style={{ opacity: hoveredIndex === i ? 1 : 0 }}
            />
          ))}
        </div>

        {/* Right — award list */}
        <div className="flex-1 flex flex-col gap-3 ">
          {awards.map((award, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-6 py-7  cursor-pointer transition-all duration-300 group"
              style={{
                background: hoveredIndex === i ? '#C8F8A9' : 'transparent',
                borderBottom: i === awards.length - 1 ? 'none' : '1px solid #e5e7eb',
              }}
              onMouseEnter={() => setHoveredIndex(i)}
            >
              <span
                className="text-xl font-medium transition-colors duration-300"
                style={{ color: hoveredIndex === i ? '#1a2e10' : '#6b7280' }}
              >
                {award.title}
              </span>
              <span
                className="text-xl font-medium transition-colors duration-300 flex-shrink-0"
                style={{ color: hoveredIndex === i ? '#1a2e10' : '#6b7280' }}
              >
                {award.year}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}