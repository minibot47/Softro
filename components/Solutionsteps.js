'use client'
import { useState, useEffect, useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Discovery & Consultation',
    description: 'Understanding your clients goals, & challenges',
    items: ['Research', 'Goal Setting', 'Roadmap Planning'],
  },
  {
    number: '02',
    title: 'Design & Development',
    description: 'Develop initial wireframes and user flow diagrams.',
    items: ['Wireframing', 'Advanced Design', 'Feedback Loop'],
  },
  {
    number: '03',
    title: 'Quality Assurance',
    description: 'Perform various types of testing, including functional & performance.',
    items: ['Testing', 'Bug Fixing', 'User Acceptance Testing'],
  },
  {
    number: '04',
    title: 'Launch & Deployment',
    description: 'We carefully deploy your product to production with zero downtime strategies.',
    items: ['CI/CD Pipeline', 'Cloud Deployment', 'Go Live'],
  },
  {
    number: '05',
    title: 'Support & Growth',
    description: 'Ongoing monitoring, updates and growth strategies to keep you ahead.',
    items: ['Monitoring', 'Iteration', 'Performance Reports'],
  },
]

function PinIcon() {
  return (
    <svg width="28" height="32" viewBox="0 0 20 24" fill="none">
      <path d="M10 0C5.029 0 1 4.029 1 9c0 6.075 9 15 9 15s9-8.925 9-15C19 4.029 14.971 0 10 0z" fill="#c5e87a" />
      <circle cx="10" cy="9" r="3.5" fill="white" fillOpacity="0.55" />
    </svg>
  )
}

const CARD_WIDTH = 350   // px width of each card
const GAP = 14           // px gap between cards

export default function SolutionSteps() {
  const [offset, setOffset] = useState(0)         // current translate in px
  const [isResetting, setIsResetting] = useState(false)
  const dragStartX = useRef(null)
  const currentOffset = useRef(0)
  const timerRef = useRef(null)

  const STEP = CARD_WIDTH + GAP
  const allSteps = steps

  const slideTo = (newOffset) => {
    setOffset(newOffset)
    currentOffset.current = newOffset

    if (newOffset <= -(STEP * steps.length)) {
        setTimeout(() => {
          setIsResetting(true)
          setOffset(0)
          currentOffset.current = 0
          setTimeout(() => setIsResetting(false), 50)
        }, 400)
      }
  }

  const next = () => {
    const maxOffset = -(STEP * (steps.length - 1))
  
    if (currentOffset.current <= maxOffset) {
      // Reset back to first step
      setOffset(0)
      currentOffset.current = 0
      return
    }
  
    slideTo(currentOffset.current - STEP)
  }
  const prev = () => {
    if (currentOffset.current >= 0) return
    slideTo(currentOffset.current + STEP)
  }

  // Auto advance
  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(next, 3500)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  // Drag
  const onMouseDown = (e) => { dragStartX.current = e.clientX }
  const onMouseUp = (e) => {
    if (dragStartX.current === null) return
    const diff = dragStartX.current - e.clientX
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev()
      startTimer()
    }
    dragStartX.current = null
  }
  const onTouchStart = (e) => { dragStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (dragStartX.current === null) return
    const diff = dragStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev()
      startTimer()
    }
    dragStartX.current = null
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto px-20 py-24">

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-20">
        <span className="border border-gray-300 rounded-full px-5 py-1.5 text-sm font-medium text-gray-700 mb-6">
          Solutions Steps
        </span>
        <h2 className="text-6xl font-bold text-gray-900 leading-tight mb-5">
          How We Transform<br />Challenges Solutions
        </h2>
        <p className="text-gray-400 text-lg">How we craft innovative solutions step by step</p>
      </div>

      {/* Slider viewport — clips overflow */}
      <div
        className="overflow-hidden relative select-none cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={(e) => { if (dragStartX.current !== null) onMouseUp(e) }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Horizontal line behind everything */}
        <div className="absolute left-0 right-0 h-px bg-gray-200 z-0" style={{ top: 56 }} />

        {/* Sliding track */}
        <div
          className="flex gap-2  px-8"
          style={{
            transform: `translateX(${offset}px)`,
            transition: isResetting ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            willChange: 'transform',
          }}
        >
          {allSteps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col flex-shrink-0"
              style={{ width: CARD_WIDTH }}
            >
              {/* Step label */}
              <p className="text-lg font-bold text-gray-900 mb-2">Step-{step.number} :</p>

              {/* Pin */}
              <div className="mb-4" style={{ lineHeight: 0 }}>
                <PinIcon />
              </div>

              {/* Card */}
              <div className="border border-gray-200 rounded-2xl p-8 w-[314px] h-[320px] bg-white flex justify-between flex-col gap-3 flex-1">
                <h3 className="text-2xl font-bold w-[60%] text-gray-900 leading-snug">{step.title}</h3>
                <p className="text-black text-base leading-relaxed">{step.description}</p>
                <ul className="flex flex-col gap-3 mt-1">
                  {step.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                      <span className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


