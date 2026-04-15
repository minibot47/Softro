'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

const works = [
  {
    title: 'E-commerce Branding',
    description:
      'A full brand and storefront experience built to showcase products with clarity, trust, and a memorable visual language.',
    tags: ['E-commerce', 'Branding'],
    bg: '#fce4ec',
    accent: '#1a1a1a',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop&q=80',
    imageAlt: 'E-commerce checkout and packaging',
  },
  {
    title: 'Restaurant Identity',
    description:
      'Warm typography, tactile print, and a flexible identity kit that feels at home on menus, signage, and social.',
    tags: ['Branding', 'Print Design'],
    bg: '#f9fbe7',
    accent: '#1a1a1a',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop&q=80',
    imageAlt: 'Restaurant interior and dining',
  },
  {
    title: 'Creative Campaign',
    description:
      'Campaign art direction and rollout across digital and OOH, with a bold palette and a single clear story.',
    tags: ['Campaign', 'Strategy'],
    bg: '#e1f5fe',
    accent: '#1a1a1a',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop&q=80',
    imageAlt: 'Creative team reviewing campaign boards',
  },
  {
    title: 'SaaS Landing Page',
    description:
      'Product-led UI, crisp hierarchy, and motion that explains the workflow without overwhelming new visitors.',
    tags: ['Web', 'UI/UX'],
    bg: '#fff3e0',
    accent: '#1a1a1a',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80',
    imageAlt: 'Analytics dashboard on laptop',
  },
]

/** Pixels of scroll after a section “takes over” to finish shrink / fade for cards below */
const SCROLL_RANGE = 340
const MIN_SCALE = 0.86
const MIN_OPACITY = 0.48

function ArrowUpRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

function StickyProjectCard({ work, stackIndex }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="overflow-hidden rounded-2xl shadow-[0_16px_48px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.04]">
        <div className="flex min-h-[min(520px,calc(100vh-7rem))] flex-col md:flex-row">
          <div
            className="flex w-full flex-col justify-between gap-8 p-8 sm:p-10 md:w-1/2 md:p-12 lg:p-14"
            style={{ backgroundColor: work.bg }}
          >
            <div>
              <h3 className="font-bold tracking-tight text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] text-[#111]">
                {work.title}
              </h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-black/70">{work.description}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {work.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/20 bg-white/40 px-3 py-1.5 text-xs font-medium text-[#111]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#111] transition-opacity hover:opacity-80"
            >
              View Details
              <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRight />
              </span>
            </a>
          </div>

          <div className="relative h-64 w-full min-h-[240px] md:h-auto md:w-1/2 md:min-h-0">
            <img
              src={work.image}
              alt={work.imageAlt}
              className="h-full w-full object-cover"
              loading={stackIndex < 2 ? 'eager' : 'lazy'}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent md:bg-gradient-to-l" />
          </div>
        </div>
      </div>
    </div>
  )
}

function getStickyTopPx() {
  if (typeof window === 'undefined') return 96
  return window.matchMedia('(min-width: 768px)').matches ? 112 : 96
}

function computeStackStyles(wrapperEls, scrollY, stickyTopPx, n) {
  const absTops = Array.from({ length: n }, (_, j) => {
    const el = wrapperEls[j]
    if (!el) return Number.POSITIVE_INFINITY
    return el.getBoundingClientRect().top + scrollY
  })

  return Array.from({ length: n }, (_, i) => {
    let scale = 1
    let opacity = 1

    for (let j = i + 1; j < n; j++) {
      const threshold = absTops[j] - stickyTopPx
      if (scrollY >= threshold) {
        const u = Math.min(1, Math.max(0, (scrollY - threshold) / SCROLL_RANGE))
        scale *= 1 - 0.065 * u
        opacity *= 1 - 0.14 * u
      }
    }

    return {
      scale: Math.max(MIN_SCALE, scale),
      opacity: Math.max(MIN_OPACITY, opacity),
    }
  })
}

export default function Portfolio() {
  const n = works.length
  const wrapperRefs = useRef([])
  const [stackStyles, setStackStyles] = useState(() =>
    Array.from({ length: n }, () => ({ scale: 1, opacity: 1 }))
  )
  const reducedMotionRef = useRef(false)

  const setWrapperRef = useCallback(index => el => {
    wrapperRefs.current[index] = el
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    reducedMotionRef.current = mq.matches
    const onMq = () => {
      reducedMotionRef.current = mq.matches
    }
    mq.addEventListener('change', onMq)
    return () => mq.removeEventListener('change', onMq)
  }, [])

  useEffect(() => {
    let raf = 0

    const tick = () => {
      raf = 0
      if (reducedMotionRef.current) {
        setStackStyles(Array.from({ length: n }, () => ({ scale: 1, opacity: 1 })))
        return
      }

      const scrollY = window.scrollY || document.documentElement.scrollTop
      const stickyTopPx = getStickyTopPx()
      const next = computeStackStyles(wrapperRefs.current, scrollY, stickyTopPx, n)
      setStackStyles(next)
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(tick)
    }

    tick()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [n])

  return (
    <section className="bg-[#f5f5f4] py-20 pb-32 rounded-[24px]">
      <div className="mx-auto max-w-7xl px-6 pb-14">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-medium uppercase tracking-widest text-gray-500">Portfolio</span>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-[#111] md:text-5xl">Glimpse Into Our Work</h2>
          </div>

          <a
            href="#"
            className="hidden items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-black md:inline-flex"
          >
            View All
            <ArrowUpRight />
          </a>
        </div>
      </div>

      <div className="relative isolate overflow-x-clip">
        {works.map((work, i) => {
          const { scale, opacity } = stackStyles[i] || { scale: 1, opacity: 1 }
          return (
            <div key={work.title} ref={setWrapperRef(i)} className="relative min-h-[115vh]">
              {/* Sticky on outer only — transform on inner avoids breaking sticky in browsers */}
              <div className="sticky top-24 pb-6 md:top-28" style={{ zIndex: 10 + i }}>
                <div
                  className="will-change-[transform,opacity]"
                  style={{
                    transform: `scale(${scale})`,
                    opacity,
                    transformOrigin: 'top center',
                  }}
                >
                  <StickyProjectCard work={work} stackIndex={i} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className=" mt-6 w-[50%] m-auto flex justify-between items-center px-6 py-3 rounded-[16px] border-[0.1px] border-gray-400/30 shadow-sm text-center">
        <div>
          <h2 className='text-left'>Don't hesitate to <br/>Collaborate with Us</h2>
        </div>
        <Link href="" className='flex items-center gap-2 px-5 py-3 rounded-[10px] border-[0.1px] border-gray-200/30 bg-[#C8F8A9]'>
          <h2>Contact us</h2>
          <img src='' alt='icon'/>
        </Link>
      </div>
    </section>
  )
}
