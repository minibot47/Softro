'use client'

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [animate, setAnimate] = useState(false)
  const cardRef = useRef(null)

  const differentiators = [
    { label: 'User-First Approach', color: '#2d6e4a', text: '#fff' },
    { label: 'On-Time Delivery', color: '#4a7c59', text: '#fff', rotate: '-6deg' },
    { label: 'Creative Excellence', color: '#6aaa7a', text: '#fff', rotate: '4deg' },
    { label: 'Human-Centered Design', color: '#e07050', text: '#fff' },
    { label: 'Scalable & Flexible', color: '#6a8ae0', text: '#fff' },
    { label: 'Global Perspective', color: '#2d5a8a', text: '#fff' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
        }
      },
      { threshold: 0.3 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 px-6 bg-white dark:bg-[#0f1210]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <div className="flex items-start justify-end gap-20 mb-8 ">
            <div className="spin-slow mt-2 flex-shrink-0">
              <img src="/images/rolling about us.svg" />
            </div>

            <div className="rounded-[16px] flex-1 h-[200px] max-w-[308px] bg-[url(/images/about-us-img.png)] bg-cover bg-center" />
          </div>

          {/* CARD */}
          <div
            ref={cardRef}
            className="bg-white dark:bg-[#151a16] rounded-2xl p-2 border-[0.1px] border-gray-200 dark:border-gray-800 shadow-sm w-[380px] h-[404px] flex flex-col justify-between overflow-hidden"
          >
            <h3 className="font-normal text-2xl mt-8 mb-5 text-center text-gray-800 dark:text-white">
              What Makes Us Different:
            </h3>

            <div className="flex flex-wrap gap-2 px-3 pb-6">
              {differentiators.map((item, i) => (
                <span
                  key={i}
                  className="text-sm font-medium px-2 py-0.5 rounded-full inline-block"
                  style={{
                    background: item.color,
                    color: item.text,
                    display: 'inline-block',
                  
                    transform: animate
                      ? `translateY(0px) rotate(${item.rotate || "0deg"})`
                      : `translateY(-180px) rotate(${item.rotate || "0deg"})`, // 👈 higher start
                  
                    opacity: animate ? 1 : 0,
                  
                    transitionProperty: "transform, opacity",
                    transitionDuration: "1100ms", // 👈 slower fall
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // smooth drop
                  
                    transitionDelay: `${i * 140}ms`, // 👈 slightly more stagger
                  }}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-thin mb-6 text-black dark:text-white">
            We Design Experiences That Transform Ideas Into Lasting Impact
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
            At Softro, we're storytellers, creators, and problem-solvers.
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            We help businesses stand out in the digital world.
          </p>
        </div>

      </div>
    </section>
  )
}