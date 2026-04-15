import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const [imageScale, setImageScale] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimerRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const windowH = window.innerHeight

      const scale = Math.min(Math.max((scrollY - windowH * 0.7) / (windowH * 0.8), 0), 1)
      setImageScale(scale)

      const docH = document.body.scrollHeight - windowH
      setProgress(Math.round((scrollY / docH) * 100))

      setIsScrolling(true)
      clearTimeout(scrollTimerRef.current)
      scrollTimerRef.current = setTimeout(() => setIsScrolling(false), 1500)
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(scrollTimerRef.current)
    }
  }, [])

  const windowH = typeof window !== 'undefined' ? window.innerHeight : 800

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-16 overflow-x-hidden bg-[#F0FFE9]"
    >
      {/* Dark mode toggle */}
      <div className={`dark-toggle${isScrolling ? ' visible' : ''}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </div>

      {/* Creative */}
      <div className='text-center mb-3 mt-12 w-full flex items-center justify-center'>
        <h2 className='bg-[#E07938] px-4 py-1.5 rounded-full w-fit font-medium text-lg text-white'>Creative design agency</h2>
      </div>

      {/* Header text centered */}
      <div className="text-center px-6 mb-10">
        <h1 className="text-5xl md:text-7xl font-medium leading-10 mb-4 tracking-tight">
          Inspiring Creativity, Driving<br /> Real Business Growth
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed mt-4">
          We craft unique digital experiences that help brands stand out, connect with audiences, and achieve measurable results.
        </p>
        <div className="flex items-center justify-center gap-4 mb-6 mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
            style={{ background: 'var(--green-lime)', color: '#1b3a2b' }}
          >
            Start Your Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Review on</span>
            <span className="font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>Clutch</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#ff3d2e">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500">(20 Reviews)</span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex items-center justify-between max-w-7xl mx-auto mb-8 px-20">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {['#4a7c59', '#2d5a3d', '#6aaa7a'].map((color, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                style={{ background: color }}
              >
                {['JD', 'AM', 'SK'][i]}
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm text-gray-600">we've already</p>
            <p className="font-bold text-base">20k+ <span className="font-normal text-gray-500">active users</span></p>
          </div>
        </div>

        <div className="flex items-start gap-1">
          <span className="text-7xl font-black leading-none" style={{ fontFamily: 'var(--font-display)' }}>12</span>
          <div>
            <span className="text-2xl font-bold text-gray-500">+</span>
            <p className="text-sm text-gray-600 leading-tight">year of<br/>experiences</p>
          </div>
        </div>
      </div>

      {/* Hero image — grows smoothly from center as you scroll */}
      <div className="relative flex justify-center">
        <div
          className="relative overflow-hidden"
          style={{
            width: `calc(60% + ${imageScale * 40}vw)`,
            borderRadius: `${20 - imageScale * 20}px`,
            height: `${400 + imageScale * (windowH - 400)}px`,
            transition: 'none',
          }}
        >
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: 'radial-gradient(ellipse at 40% 50%, #2d6e4a 0%, #1b4a2e 40%, #0d2a1a 100%)',
            }}
          >
            <div className="relative w-64 h-64">
              <div
                className="absolute inset-0 rounded-full opacity-60"
                style={{
                  background: 'conic-gradient(from 0deg, #4aaa6a, #a8e060, #2d8a4a, #6acd7a, #c8f08a, #1b6a3a, #4aaa6a)',
                  filter: 'blur(2px)',
                  transform: 'rotate(45deg) scale(1.2)',
                  borderRadius: '40% 60% 55% 45% / 50% 45% 55% 50%',
                }}
              />
              <div
                className="absolute inset-8 rounded-full"
                style={{
                  background: 'radial-gradient(circle at 35% 35%, #a8e060, #2d8a4a)',
                  filter: 'blur(1px)',
                }}
              />
            </div>
          </div>

          {imageScale === 0 && (
            <div className="absolute right-6 top-1/2 w-4 h-4 rounded-full bg-gray-400 opacity-60" />
          )}
        </div>
      </div>

      {/* Scroll hint */}
      {imageScale === 0 && (
        <div className="text-center mt-6 animate-bounce">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="2" className="mx-auto">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      )}

      {/* Progress pie chart */}
      {progress > 2 && (
        <div className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center">
          <svg width="56" height="56" viewBox="0 0 56 56" className="absolute inset-0">
            {/* White background */}
            <circle cx="28" cy="28" r="28" fill="white" />
            {/* Pie wedge */}
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
            {progress >= 100 && <circle cx="28" cy="28" r="28" fill="" />}
            {/* Inner white circle — donut effect */}
            <circle cx="28" cy="28" r="18" fill="white" />
          </svg>
          <span className="relative z-10 text-xs font-bold text-black leading-none">
            {progress}%
          </span>
        </div>
      )}
    </section>
  )
}