import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0
      setProgress(pct)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (progress <= 2) return null

  const cx = 30, cy = 30, r = 28
  const angle = (progress / 100) * 360
  const rad = (angle - 90) * (Math.PI / 180)
  const x = cx + r * Math.cos(rad)
  const y = cy + r * Math.sin(rad)
  const largeArc = angle > 180 ? 1 : 0

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div
      className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] flex items-center justify-center"
      onClick={progress >= 100 ? scrollToTop : undefined}
      style={{ cursor: progress >= 100 ? 'pointer' : 'default' }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60">
        {/* Base circle */}
        <circle cx={cx} cy={cy} r={r} fill="white" className="dark:fill-[#1b1f1b]" />

        {/* Green slice sweep */}
        {progress < 100 ? (
          <path
            d={`M ${cx} ${cy} L ${cx} ${cy - r} A ${r} ${r} 0 ${largeArc} 1 ${x} ${y} Z`}
            fill="#a8d87c"
          />
        ) : (
          <circle cx={cx} cy={cy} r={r} fill="#a8d87c" />
        )}
      </svg>

      {/* At 100%: arrow icon. Below 100%: percentage text */}
      {progress >= 100 ? (
        <svg
          className="absolute"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      ) : (
        <span className="absolute text-xs font-bold text-black dark:text-white">
          {progress}%
        </span>
      )}
    </div>
  )
}