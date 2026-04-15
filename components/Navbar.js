import { useState, useEffect } from 'react'

const navLinks = ['Home', 'Services', 'Work','Company', 'Insights']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-20 flex items-center justify-between h-20 bg-white border-b-[0.5px] border-gray-400/20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 2L13.5 8.5H20L14.5 12.5L16.5 19L11 15L5.5 19L7.5 12.5L2 8.5H8.5L11 2Z" fill="#1b3a2b"/>
          </svg>
          Softro
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map(link => (
            <a
              key={link}
              href="#"
              className="text-lg font-medium text-gray-700 hover:text-black transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-black transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a href="#" className="hidden md:block text-sm font-medium text-gray-700 hover:text-black transition-colors">
            <img src='' alt='icon' className='w-15 h-25 border-[0.5px] border-black'/>
          </a>
          <a
            href="#"
            className="text-sm font-semibold px-8 py-3.5 rounded-[12px] text-white transition-all duration-200 hover:opacity-90 bg-black"
          >
            Say Hi
            <img src='' alt=''/>
          </a>
        </div>
      </div>
    </header>
  )
}
