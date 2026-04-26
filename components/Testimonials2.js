'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechVenture',
    text: 'Softro completely transformed our brand identity. Their attention to detail and creative approach exceeded every expectation. The team delivered everything on time and our conversions are up significantly.',
    img: '/images/testimonial-image.png',
    stars: 5,
  },
  {
    name: 'James Wilson',
    role: 'Founder, GreenLeaf',
    text: 'Working with Softro was an absolute pleasure. They understood our vision from day one and brought it to life in ways we never imagined. Highly recommend their services to any growing business.',
    img: '/images/testimonial-image2.png',
    stars: 5,
  },
  {
    name: 'Amina Yusuf',
    role: 'Product Manager, FinEdge',
    text: 'The team delivered a stunning product experience. Our engagement metrics improved dramatically after launch.',
    img: '/images/testimonial-image3.png',
    stars: 5,
  },
  {
    name: 'Daniel Okoro',
    role: 'Founder, BuildHQ',
    text: 'Exceptional design and communication. They truly understand modern UI/UX principles.',
    img: '/images/testimonial-image.png',
    stars: 5,
  },
  {
    name: 'Maria Lopez',
    role: 'Marketing Lead, BrightAds',
    text: 'Our campaign performance doubled thanks to their creative direction and execution.',
    img: '/images/testimonial-image2.png',
    stars: 5,
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const t = testimonials[index]

  return (
    <section className="py-24 px-6 bg-white dark:bg-[#0f1210]">
      <div className="max-w-[1440px] mx-auto">

        {/* HEADER */}
        <div className="flex items-start justify-between mb-14">
          <div className="flex items-start gap-[133px]">
            <span className="px-3 py-0.5 rounded-full border border-green-400 text-base text-gray-700 dark:text-gray-300 flex-shrink-0 mt-2">
              Testimonial
            </span>
            <h2 className="text-4xl md:text-5xl font-medium text-black dark:text-white leading-tight">
              Growth Stories From<br />Those Who Trust Us
            </h2>
          </div>

          {/* Review badges */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-base text-gray-500">Review on</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#ff3d2e">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img src="/images/clutchco-logo.svg"/>
                <span className="text-sm text-black">(20 Reviews)</span>
              </div>
            </div>

            <div className="w-px h-10 bg-gray-200" />

            <div className="flex flex-col">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-base text-gray-500">Review on</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#fbbf24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img src="/images/google-logo.svg"/>
                <span className="text-sm text-black">(20 Reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CARD */}
        <div className="relative min-h-[440px] flex gap-5 justify-end ml-20 overflow-hidden border-none w-[90%]   dark:border-gray-800 ">

          {/* LEFT — text content */}
          <div className="flex-1 bg-white dark:bg-[#151a16] p-12 relative rounded-[14px] border-[0.1px] border-black/20">

            {/* Google icon top right of card */}
            <div className="absolute top-0 right-0">
              <div
                className="w-32 h-32 flex items-end justify-end p-3"
                style={{
                  background: 'linear-gradient(45deg, transparent 50%, #f0f0f0 50%)',
                }}
              >
                {/* Google G icon */}
                <img src="/images/testimonial-logo2.png" className=" absolute right-4 top-4"/>
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-0.5 mb-3">
              {[...Array(t.stars)].map((_, j) => (
                <svg key={j} width="20" height="20" viewBox="0 0 24 24" fill="#ff3d2e">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>

            <p className="font-bold text-lg text-black dark:text-white mb-6">Out Standing Service</p>

            <p className="text-gray-700 dark:text-gray-200 text-xl leading-relaxed mb-10">
              "{t.text}"
            </p>

            {/* Big quote mark */}
            <div className="absolute bottom-8 right-12 text-gray-100 dark:text-gray-800 text-[120px] leading-none font-serif select-none">
              <img src="/images/apostrophe.svg" className="opacity-10"/>
            </div>

            <div>
              <p className="font-bold text-lg text-black dark:text-white">{t.name}</p>
              <p className="text-gray-500 dark:text-gray-400">{t.role}</p>
            </div>
          </div>

          {/* RIGHT — big image */}
          <div className="relative w-[420px] flex-shrink-0 ">
            <Image
              src={t.img}
              alt={t.name}
              fill
              className="object-cover transition-opacity duration-700 rounded-[14px]"
            />
          </div>

          {/* DOTS — right side vertical */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50 ">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: '6px',
                  height: i === index ? '12px' : '6px',
                  background: i === index ? '#C8F8A9' : 'black',
                }}
              />
            ))}
          </div>

        </div>

        {/* Trusted by banner */}
        <div className="relative flex items-center justify-center mt-24">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gray-200" />
          <span className="relative bg-[#F8FDF4] px-3 py-1.5 rounded-full border-[0.1px] border-gray-400/40 text-BASE font-semibold text-gray-800 z-10">
            Trusted By 2,000+ Clients Worldwide
          </span>
        </div>

        <div className="w-full mt-20 flex flex-col items-center justify-center gap-10">
        <div className="relative overflow-hidden w-full">

            {/* Left fade mask */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, white, transparent)' }}
            />
            {/* Right fade mask */}
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, white, transparent)' }}
            />

            <div className="flex gap-20 items-center w-max"
            style={{
                animation: 'marquee 40s linear infinite',
            }}
            >
            {/* Render 4 full sets for a seamless loop */}
            {[...Array(4)].flatMap((_, setIndex) =>
                [1, 2, 3, 4, 5].map((n) => (
                <img
                    key={`${setIndex}-${n}`}
                    src={`/images/partner-0${n}.png`}
                    alt="partner"
                    className="h-10 flex-shrink-0"
                />
                ))
            )}
            </div>

        </div>
        </div>

        {/* Free Consultation */}
        <div className="relative w-[80%] m-auto rounded-2xl overflow-hidden flex items-center mt-24 min-h-[250px] bg-[url(/images/project-completed.png)]" >
        {/* Left — text content */}
        <div className="relative z-10 px-16 py-12 w-[55%]">
            <h2 className="text-white font-bold text-3xl leading-snug mb-8">
            Creating Partnerships That<br />
            Thrive Beyond Project<br />
            Completion
            </h2>
            <a
            href="#"
            className="inline-flex items-center gap-3 text-lg px-8 py-4 rounded-xl font-medium text-gray-900 transition-all hover:opacity-90"
            style={{ background: '#C8F8A9' }}
            >
            Get a Free Consultation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
            </a>
        </div>

        {/* Right — image with curved left edge */}
        <div className="absolute w-[53%] h-full right-0 bottom-0 ">
          <img src="/images/banner-card-image.png" className="h-full"/>
        </div>
        </div>
      </div>
    </section>
  )
}