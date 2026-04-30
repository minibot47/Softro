'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const trailRef = useRef(null)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let trailX = 0
    let trailY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      trailX += (mouseX - trailX) * 0.12
      trailY += (mouseY - trailY) * 0.12

      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailX - 10}px, ${trailY - 10}px)`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    const animFrame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animFrame)
    }
  }, [])

  return (
    <div
      ref={trailRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
      style={{
        width: 20,
        height: 20,
        background: '#c5e87a',
        opacity: 0.6,
        willChange: 'transform',
      }}
    />
  )
}