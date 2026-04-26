'use client'
import { useEffect, useRef, useState } from 'react'

const centerImage = {
  src: '/images/team-center.png',
  width: 528,
  height: 572,
}

const satellites = [
  // Left column
  { id: 1, src: '/images/team-1.png', width: 211, height: 144, style: { top: 20,  left: 69  }, delay: 100 },
  { id: 2, src: '/images/team-3.png', width: 323, height: 203, style: { top: 180, left: 11  }, delay: 200 },
  { id: 3, src: '/images/team-5.png', width: 250, height: 214, style: { top: 400, left: 49  }, delay: 300 },

  // Bottom row — percentage based so they stay centered on all screen sizes
  { id: 4, src: '/images/team-7.png', width: 164, height: 131, style: { bottom: 80, leftPercent: 29.5  }, delay: 150 },
  { id: 5, src: '/images/team-9.png', width: 219, height: 179, style: { bottom: 50, leftPercent: 43.5  }, delay: 250 },
  { id: 6, src: '/images/team-8.png', width: 164, height: 131, style: { bottom: 80, leftPercent: 61.5  }, delay: 350 },

  // Right column
  { id: 7, src: '/images/team-2.png', width: 211, height: 144, style: { top: 20,  right: 69  }, delay: 100 },
  { id: 8, src: '/images/team-4.png', width: 323, height: 203, style: { top: 180, right: 11  }, delay: 200 },
  { id: 9, src: '/images/team-6.png', width: 250, height: 214, style: { top: 400, right: 49  }, delay: 300 },
]

export default function TeamworkGallery() {
  const sectionRef = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="relative w-full mx-auto overflow-visible"
      style={{ height: 900 }}
    >
      {/* Center hero image — always visible */}
      <div
        className="absolute rounded-2xl overflow-hidden"
        style={{
          width:  centerImage.width,
          height: centerImage.height,
          top: '4%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <img
          src={centerImage.src}
          alt="Team"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.parentElement.style.background = 'linear-gradient(135deg, #d0d8cf, #a8b8a5)'
            e.target.style.display = 'none'
          }}
        />
      </div>

      {/* Satellite images */}
      {satellites.map((img) => {
        const { top, bottom, left, right, leftPercent } = img.style
        return (
          <div
            key={img.id}
            className="absolute rounded-2xl overflow-hidden"
            style={{
              width:  img.width,
              height: img.height,
              top:    top    !== undefined ? top    : undefined,
              bottom: bottom !== undefined ? bottom : undefined,
              left:   leftPercent !== undefined ? `${leftPercent}%` : left !== undefined ? left : undefined,
              right:  right  !== undefined ? right  : undefined,
              opacity:   revealed ? 1 : 0,
              transform: revealed ? 'scale(1) translateY(0px)' : 'scale(0.85) translateY(24px)',
              transition: `opacity 0.55s ease ${img.delay}ms, transform 0.55s ease ${img.delay}ms`,
            }}
          >
            <img
              src={img.src}
              alt={`Team ${img.id}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                const gradients = [
                  'linear-gradient(135deg, #c8d8c0, #8aaa80)',
                  'linear-gradient(135deg, #c0c8d8, #809aaa)',
                  'linear-gradient(135deg, #d8c8c0, #aa8a80)',
                  'linear-gradient(135deg, #d8d0c0, #aaa080)',
                  'linear-gradient(135deg, #c8c0d8, #9880aa)',
                  'linear-gradient(135deg, #c0d8d0, #80aa98)',
                  'linear-gradient(135deg, #d0c8d8, #9888aa)',
                  'linear-gradient(135deg, #d8c8d0, #aa8898)',
                  'linear-gradient(135deg, #c8d8d0, #88aa98)',
                ]
                e.target.parentElement.style.background = gradients[(img.id - 1) % gradients.length]
                e.target.style.display = 'none'
              }}
            />
          </div>
        )
      })}
    </div>
  )
}