'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

const works = [
  {
    title: 'E-commerce Branding',
    description:
      'Complete branding package for a sustainable e-commerce startup.',
    tags: ['Graphic Design', 'Branding'],
    bg: '#fce4ec',
    image: '/images/home4-portfolio-img.png',
  },
  {
    title: 'Restaurant Identity',
    description:
      'Complete branding package for a sustainable e-commerce startup.',
    tags: ['Branding', 'Print Design'],
    bg: '#f9fbe7',
    image: '/images/home4-portfolio-img2.png',
  },
  {
    title: 'Creative Campaign',
    description:
      'Complete branding package for a sustainable e-commerce startup.',
    tags: ['Graphic Design', 'Branding'],
    bg: '#e1f5fe',
    image: '/images/home4-portfolio-img3.png',
  },
  {
    title: 'SaaS Landing Page',
    description:
      'Complete branding package for a sustainable e-commerce startup.',
    tags: ['Web Design', 'Product UI'],
    bg: '#fff3e0',
    image: '/images/home4-portfolio-img4.png',
  },
]

const SCROLL_RANGE = 300

function StickyProjectCard({ work }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="overflow-hidden rounded-2xl shadow-xl bg-white">
        <div className="flex flex-col md:flex-row min-h-[500px]">
          
          <div
            className="w-full md:w-1/2 p-10 flex flex-col justify-between"
            style={{ backgroundColor: work.bg }}
          >
            <div>
              <h3 className="text-3xl font-medium">{work.title}</h3>
              <p className="mt-4 text-black/70">{work.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {work.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs border px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <span className="mt-6 text-sm font-semibold">View Details →</span>
          </div>

          <div className="w-full md:w-1/2 h-[260px] md:h-auto">
            <img
              src={work.image}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

        </div>
      </div>
    </div>
  )
}

/* 🔥 STACK ANIMATION */
function computeStackStyles(scrollY, n, cardHeight = 500) {
  const viewportCenter = scrollY + window.innerHeight * 0.35

  return Array.from({ length: n }, (_, i) => {
    const cardCenter = i * cardHeight + cardHeight / 2

    const distance = Math.abs(viewportCenter - cardCenter)

    const progress = Math.min(distance / cardHeight, 1)

    const eased = 1 - progress * progress

    return {
      scale: 1 + eased * 0.18,
      brightness: 0.9 + eased * 0.1,
    }
  })
}

function getStickyTopPx() {
  if (typeof window === 'undefined') return 96
  return window.innerWidth >= 768 ? 112 : 96
}

export default function Portfolio() {
  const wrapperRefs = useRef([])
  const [styles, setStyles] = useState(
    works.map(() => ({ scale: 1, opacity: 1 }))
  )

  const setRef = useCallback(index => el => {
    wrapperRefs.current[index] = el
  }, [])

  useEffect(() => {
    let raf = null

    const handleScroll = () => {
      if (raf) return
    
      raf = requestAnimationFrame(() => {
        const scrollY = window.scrollY // ✅ FIXED
    
        const newStyles = computeStackStyles(
          scrollY,
          works.length,
          500
        )
    
        setStyles(newStyles)
        raf = null
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <section className="bg-[#f5f5f4] py-20 pb-32 rounded-[24px]">
        {/* Header */}
        <div className="flex items-start justify-between mb-14 px-20">
          <div className="flex items-start justify-between gap-5 w-[55%] ">
            <span className="text-base font-normal text-black border border-green-500 px-2 py-0.5 rounded-full">Portfolio</span>
            <div className="flex flex-col gap-5">
              <h2
                className="text-4xl md:text-5xl font-medium"
              >
                Glimpse into Our Work
              </h2>
              <h2 className="text-gray-500 text-lg">Transforming ideas into memorable digital  <br/>experiences.</h2>
            </div>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors">
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>   

      {/* STACK CONTAINER */}
      <div className="relative">
        {works.map((work, i) => {
          const { scale, opacity, brightness } = styles[i]


          return (
              <div
                className="sticky top-24 md:top-28 z-10"
                style={{ zIndex: 10 + i }}
              >
                <div
                  className="will-change-[transform,filter]"
                  style={{
                    transform: `scale(${scale}) translateZ(0)`,
                    opacity,
                    transformOrigin: 'center',
                    willChange: 'transform',
                    transition: 'transform 0.08s linear,',
                  }}
                >
                  <StickyProjectCard work={work} />
                </div>
              </div>
          )
        })}
      </div>

      {/* CTA */}
      <div className="mt-14 w-[50%] m-auto flex justify-between items-center px-6 py-3 rounded-[16px] border border-gray-300 shadow-sm">
        <h2>Don't hesitate to Collaborate with Us</h2>

        <Link
          href="#"
          className="flex items-center gap-2 px-5 py-3 rounded-[10px] bg-[#C8F8A9]"
        >
          Contact us
          <img src='/images/arrow.svg' alt='icon' className='w-7 h-7'/>
        </Link>
      </div>
    </section>
  )
}