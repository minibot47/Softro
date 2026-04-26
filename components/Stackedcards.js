'use client'

import { useEffect, useRef, useState } from 'react'

const works = [
  {
    title: 'E-commerce Branding',
    description: 'Complete branding package for a sustainable e-commerce startup.',
    tags: ['Graphic Design', 'Branding'],
    bg: '#fce4ec',
    image: '/images/home4-portfolio-img.png',
  },
  {
    title: 'Restaurant Identity',
    description: 'Complete branding package for a sustainable e-commerce startup.',
    tags: ['Branding', 'Print Design'],
    bg: '#f9fbe7',
    image: '/images/home4-portfolio-img2.png',
  },
  {
    title: 'Creative Campaign',
    description: 'Complete branding package for a sustainable e-commerce startup.',
    tags: ['Graphic Design', 'Branding'],
    bg: '#e1f5fe',
    image: '/images/home4-portfolio-img3.png',
  },
  {
    title: 'SaaS Landing Page',
    description: 'Complete branding package for a sustainable e-commerce startup.',
    tags: ['Web Design', 'Product UI'],
    bg: '#fff3e0',
    image: '/images/home4-portfolio-img4.png',
  },
]

function StickyProjectCard({ work }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-[#1b1f1b]">
        <div className="flex flex-col md:flex-row min-h-[500px]">
          <div
            className="w-full md:w-1/2 p-10 flex flex-col justify-between"
            style={{ backgroundColor: work.bg }}
          >
            <div>
              <h3 className="text-3xl font-medium text-black">{work.title}</h3>
              <p className="mt-4 text-black/70">{work.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {work.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs border border-black/20 text-black px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="mt-6 text-sm font-semibold text-black">View Details →</span>
          </div>

          <div className="w-full md:w-1/2 h-[260px] md:h-auto">
            <img src={work.image} className="w-full h-full object-cover" alt={work.title}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function StackedPortfolio() {
  const [styles, setStyles] = useState(
    works.map(() => ({ scale: 1, opacity: 1 }))
  )
  const containerRef = useRef(null)

  useEffect(() => {
    let raf = null

    const handleScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        if (!containerRef.current) return
        const scrollY = window.scrollY
        const containerTop = containerRef.current.getBoundingClientRect().top + scrollY
        const cardH = containerRef.current.offsetHeight / works.length

        const newStyles = works.map((_, i) => {
          const cardStart = containerTop + i * cardH
          const scrolledPast = scrollY - cardStart
          if (scrolledPast <= 0) return { scale: 1, opacity: 1 }
          const progress = Math.min(scrolledPast / cardH, 1)
          return {
            scale: 1 - progress * 0.2,
            opacity: 1 - progress * 0.15,
          }
        })

        setStyles(newStyles)
        raf = null
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${works.length * 520}px` }}
    >
      {works.map((work, i) => (
        <div
          key={i}
          className="sticky top-24 md:top-28"
          style={{ zIndex: 10 + i, marginBottom: i === works.length - 1 ? 0 : '16px' }}
        >
          <div
            style={{
              transform: `scale(${styles[i].scale}) translateZ(0)`,
              opacity: styles[i].opacity,
              transformOrigin: 'top center',
              transition: 'transform 0.1s linear, opacity 0.1s linear',
              willChange: 'transform, opacity',
            }}
          >
            <StickyProjectCard work={work} />
          </div>
        </div>
      ))}
    </div>
  )
}