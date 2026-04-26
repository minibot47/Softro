'use client'
import { useEffect, useRef, useState } from 'react'

export default function ExpandingVideo() {
  const [imageScale, setImageScale] = useState(0)
  const [windowH, setWindowH] = useState(800)
  const scrollTimerRef = useRef(null)

  useEffect(() => {
    const handleResize = () => setWindowH(window.innerHeight)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{ height: '200vh' }} className="relative w-full">
      <div className="sticky top-0 w-full flex justify-center pt-5 overflow-hidden">
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
            style={{ transform: `scale(${1 + imageScale * 0.15})` }}
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
              background: 'rgba(0,0,0,0.25)',
              opacity: 0.2 + imageScale * 0.3,
            }}
          />
        </div>
  
        {imageScale === 0 && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg width="20" height="20" fill="none" stroke="#4a7c59" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}