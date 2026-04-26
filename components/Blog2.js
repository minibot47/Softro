'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const posts = [
  {
    category: 'Social Media',
    title: 'The Future of Social Media Marketing in 2026',
    date: '14 August, 2026',
    img: '/images/blog-img.png',
  },
  {
    category: 'SEO Strategy',
    title: 'SEO Hacks to Skyrocket Your Website Traffic',
    date: '14 August, 2026',
    img: '/images/home4-blog-img.png',
  },
  {
    category: 'Paid Marketing',
    title: 'Mastering Paid Ads: A Complete Guide for Startups',
    date: '14 August, 2026',
    img: '/images/home4-blog-img2.png',
  },
]

export default function Blog2() {
  const cardRefs = useRef([])

  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null

      el.style.opacity = '0'
      el.style.transform = 'translateY(40px)'
      el.style.transition = `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            observer.disconnect()
          }
        },
        { threshold: 0.15 }
      )

      observer.observe(el)
      return observer
    })

    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  return (
    <section className="py-24 px-6 bg-white dark:bg-[#0f1210] max-w-[1440px] m-auto">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-14">
          <div className="flex items-start justify-between gap-5 w-[55%]">
            <span className="text-base font-normal text-black dark:text-white border border-green-500 dark:border-green-700 px-3 py-0.5 rounded-full">
              Article
            </span>
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl md:text-5xl font-medium text-black dark:text-white">
                Agency Journal
              </h2>
              <p className="text-gray-500 dark:text-gray-300 text-lg">
                A one-liner about what visitors will find latest <br/>design talks
              </p>
            </div>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <article
              key={i}
              ref={el => cardRefs.current[i] = el}
              className="rounded-2xl overflow-hidden group cursor-pointer hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-[#151a16] border border-gray-100 dark:border-gray-800"
              style={{ willChange: 'transform, opacity' }}
              onMouseEnter={() => {
                document.getElementById(`distortAnim-${i}`)?.beginElement()
              }}
            >
              {/* Image */}
              <div className="relative w-full h-[358px] overflow-hidden">

                {/* Per-card SVG filter */}
                <svg className="absolute w-0 h-0 pointer-events-none">
                  <defs>
                    <filter id={`distort-${i}`} x="-80%" y="-40%" width="180%" height="140%">
                      <feTurbulence
                        type="turbulence"
                        baseFrequency="0.065 0.001"
                        numOctaves="1"
                        seed="3"
                        result="noise"
                      />
                      <feDisplacementMap
                        in="SourceGraphic"
                        in2="noise"
                        xChannelSelector="R"
                        yChannelSelector="G"
                      >
                        <animate
                          id={`distortAnim-${i}`}
                          attributeName="scale"
                          values="0;30;0"
                          dur="0.6s"
                          begin="indefinite"
                          fill="freeze"
                        />
                      </feDisplacementMap>
                    </filter>
                  </defs>
                </svg>

                <Image
                  src={post.img}
                  alt={post.category}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  style={{ filter: `url(#distort-${i})` }}
                />

                <a
                  href="#"
                  className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  style={{ background: '#b8e04a' }}
                >
                  <img src='/icons/arrow.svg'/>
                </a>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-base text-black dark:text-gray-400">
                  <span>{post.category}</span>
                  <svg width="24" height="8" viewBox="0 0 24 8" fill="none">
                    <line x1="0" y1="4" x2="18" y2="4" stroke="#aaa" strokeWidth="1"/>
                    <path d="M16 1l4 3-4 3" stroke="#aaa" strokeWidth="1" fill="none"/>
                  </svg>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-black dark:text-white font-semibold text-xl leading-snug group-hover:opacity-80 transition-opacity">
                  {post.title}
                </h3>

                <div className="flex items-center gap-0 mt-3">
                  <a
                    href="#"
                    className="inline-flex items-center px-5 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Read More
                  </a>
                  <div className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center -ml-px cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}