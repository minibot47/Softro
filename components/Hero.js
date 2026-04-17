'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [imageScale, setImageScale] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [windowH, setWindowH] = useState(800)

  const scrollTimerRef = useRef(null)
  const sectionRef = useRef(null)

  // ✅ Handle resize properly
  useEffect(() => {
    const handleResize = () => setWindowH(window.innerHeight)
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // ✅ Optimized scroll handler
  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const windowHeight = window.innerHeight

          const scale = Math.min(
            Math.max((scrollY - windowHeight * 0.7) / (windowHeight * 0.8), 0),
            1
          )
          setImageScale(scale)

          const docH = document.body.scrollHeight - windowHeight
          setProgress(Math.round((scrollY / docH) * 100))

          setIsScrolling(true)
          clearTimeout(scrollTimerRef.current)
          scrollTimerRef.current = setTimeout(() => setIsScrolling(false), 1500)

          ticking = false
        })

        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(scrollTimerRef.current)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-16 overflow-x-hidden flex flex-col bg-[url(/images/banner-bg.png)]"
    >
      {/* Creative */}
      <div className="text-center mb-5 mt-12 w-full flex items-center justify-center">
        <h2 className="bg-[#E07938] px-3 py-1 rounded-full w-fit font-normal text-lg text-white font-funnel">
          Creative Design Agency
        </h2>
      </div>

      {/* Header */}
      <div className="text-center px-6 mb-12">
        <h1 className="text-5xl md:text-7xl font-bold leading-relaxed mb-2">
          Inspiring Creativity, Driving
          <br /> Real Business Growth
        </h1>

        <p className="text-gray-600 max-w-full mx-auto text-lg leading-relaxed mt-2">
          We craft unique digital experiences that help brands stand out,
          connect with audiences,
          <br /> and achieve measurable results.
        </p>

        <div className="flex items-center justify-center gap-4 mb-10 mt-8">
          <a
            href="#"
            className="inline-flex bg-[#C8F8A9] text-black items-center gap-2 px-6 py-3 rounded-xl text-lg font-light hover:opacity-90"
          >
            Start Your Project
            <Image src="/images/arrow.svg" alt="arrow" width={20} height={20} />
          </a>

          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-lg text-gray-600">Review on</span>
              <img
                src="/images/clutchco-logo.svg"
                alt="clutch"
                className="w-20 h-5"
              />
            </div>

            <div className="flex flex-col gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" fill="#ff3d2e">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">(20 Reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between max-w-[1440px] mx-auto mb-8 px-16 w-full">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-4">
            {[
              { img: "/images/counter-people-img1.png", name: "JD" },
              { img: "/images/counter-people-img2.png", name: "AM" },
              { img: "/images/counter-people-img3.png", name: "SK" },
            ].map((user, i) => (
              <div
                key={i}
                className="relative w-11 h-11 rounded-full border-2 border-white overflow-hidden"
              >
                <Image src={user.img} alt={user.name} fill className="object-cover" />
              </div>
            ))}
          </div>

          <div>
            <p className="text-lg">
              we've already <span className="font-bold">20k+</span>
            </p>
            <p>active users</p>
          </div>
        </div>

        <div className="flex items-start gap-1">
          <span className="text-7xl  font-black">12</span>
          <div>
            <span className="text-2xl font-bold -ml-2">+</span>
            <p className="text-lg ml-4 -mt-5">
              year of
              <br />
              experiences
            </p>
          </div>
        </div>
      </div>

      {/* ✅ FIXED HERO VIDEO (no duplication) */}
      <div className="relative flex justify-center mt-5">
        <div
          className="relative overflow-hidden shadow-2xl"
          style={{
            width: `calc(40% + ${imageScale * 60}vw)`,
            borderRadius: `${20 - imageScale * 20}px`,
            height: `${400 + imageScale * (windowH - 400)}px`,
          }}
        >
          <div
            className="w-full h-full"
            style={{
              transform: `scale(${1 + imageScale * 0.15})`,
            }}
          >
            <video
              src="/images/home4-banner-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              background: "rgba(0,0,0,0.25)",
              opacity: 0.2 + imageScale * 0.3,
            }}
          />
        </div>
      </div>

      {/* Scroll hint */}
      {imageScale === 0 && (
        <div className="text-center mt-6 animate-bounce">
          <svg width="20" height="20" stroke="#4a7c59" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      )}

      {/* ✅ FIXED PROGRESS */}
      {progress > 2 && (
        <div className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center">
          <svg width="56" height="56">
            <circle cx="28" cy="28" r="28" fill="white" />

            {progress < 100 && (() => {
              const angle = (progress / 100) * 360
              const rad = (angle - 90) * (Math.PI / 180)
              const x = 28 + 28 * Math.cos(rad)
              const y = 28 + 28 * Math.sin(rad)
              const largeArc = angle > 180 ? 1 : 0

              return (
                <path
                  d={`M28,28 L28,0 A28,28 0 ${largeArc},1 ${x},${y} Z`}
                  fill="#a8d87c"
                />
              )
            })()}

            {progress >= 100 && (
              <circle cx="28" cy="28" r="28" fill="#a8d87c" />
            )}

            <circle cx="28" cy="28" r="18" fill="white" />
          </svg>

          <span className="absolute text-xs font-bold">
            {progress}%
          </span>
        </div>
      )}
    </section>
  )
}