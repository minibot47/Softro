'use client'
import { useState, useEffect, useRef } from 'react'

const navLinks = ['Home', 'Services', 'Work', 'Company', 'Insights']

const dropdowns = {
  Home: ['Startup', 'Software', 'Digital marketing', 'Design Agency', 'Saas'],
  Work: ['All Projects', 'Branding', 'Web Design', 'Mobile Apps'],
  Company: ['About Us', 'Our Team', 'Services', 'FAQ', 'Careers', 'Contact'],
  Insights: [
    'News & Article 01',
    'News & Article 02',
    'News & Article 03',
    'News & Article 04',
    'News & Article 05',
    'News & Article Details',
  ],
}

// Maps each dropdown label to its URL path
const dropdownRoutes = {
  // Home
  'Startup': '/startup',
  'Software': '/software',
  'Digital marketing': '/digital-marketing',
  'Design Agency': '/design-agency',
  'Saas': '/saas',
  // Work
  'All Projects': '/all-projects',
  'Branding': '/branding',
  'Web Design': '/web-design',
  'Mobile Apps': '/mobile-apps',
  // Company
  'About Us': '/about',
  'Our Team': '/team',
  'Services': '/services',
  'FAQ': '/faq',
  'Careers': '/careers',
  'Contact': '/contact',
  // Insights
  'News & Article 01': '/news-article-01',
  'News & Article 02': '/news-article-02',
  'News & Article 03': '/news-article-03',
  'News & Article 04': '/news-article-04',
  'News & Article 05': '/news-article-05',
  'News & Article Details': '/news-article-details',
}

const services = [
  { icon: '🖥️', title: 'Product Development' },
  { icon: '🎨', title: 'UI/UX Design' },
  { icon: '🛒', title: 'eCommerce Solutions' },
  { icon: '⚙️', title: 'Product Management' },
  { icon: '☁️', title: 'Cloud & DevOps' },
  { icon: '🛠️', title: 'Technical Support' },
]

const industries = [
  'Financial & Fintech',
  'Healthcare & Medical',
  'Entertainment',
  'Education & EdTech',
  'Hospitality & Travel',
  'eCommerce Solutions',
]

const teamAvatars = [
  { top: '8%',  left: '12%', src: '/images/avater.png' },
  { top: '8%',  left: '58%', src: '/images/avater1.png' },
  { top: '35%', left: '2%',  src: '/images/avater2.png' },
  { top: '35%', left: '70%', src: '/images/avater3.png' },
  { top: '65%', left: '8%',  src: '/images/avater4.png' },
  { top: '65%', left: '52%', src: '/images/avater5.png' },
  { top: '78%', left: '30%', src: '/images/avater6.png' },
]

const avatarColors = [
  'linear-gradient(135deg, #c060a0, #6030c0)',
  'linear-gradient(135deg, #e06020, #c03030)',
  'linear-gradient(135deg, #4060e0, #2030a0)',
  'linear-gradient(135deg, #30a0c0, #2060e0)',
  'linear-gradient(135deg, #a030c0, #6020a0)',
  'linear-gradient(135deg, #c08020, #e05010)',
  'linear-gradient(135deg, #8040c0, #c020a0)',
]

const serviceIcons = {
  'Product Development': (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#333" strokeWidth="1.5">
      <rect x="4" y="6" width="14" height="18" rx="2"/>
      <path d="M8 10h6M8 14h4"/>
      <circle cx="20" cy="20" r="5"/>
      <path d="M18 20h4M20 18v4"/>
    </svg>
  ),
  'UI/UX Design': (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#333" strokeWidth="1.5">
      <rect x="3" y="5" width="22" height="15" rx="2"/>
      <path d="M9 23h10M14 20v3"/>
      <rect x="7" y="9" width="5" height="4" rx="1"/>
      <path d="M15 11h6M15 14h4"/>
    </svg>
  ),
  'eCommerce Solutions': (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#333" strokeWidth="1.5">
      <path d="M4 5h3l2.5 11h11l2-7H8"/>
      <circle cx="12" cy="22" r="1.5"/>
      <circle cx="19" cy="22" r="1.5"/>
    </svg>
  ),
  'Product Management': (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#333" strokeWidth="1.5">
      <circle cx="14" cy="14" r="9"/>
      <circle cx="14" cy="14" r="3"/>
      <path d="M14 5v3M14 20v3M5 14h3M20 14h3"/>
    </svg>
  ),
  'Cloud & DevOps': (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#333" strokeWidth="1.5">
      <path d="M8 19a5 5 0 0 1 0-10 7 7 0 0 1 13 3 4 4 0 0 1-1 7H8z"/>
      <path d="M14 15v6M11 18l3 3 3-3"/>
    </svg>
  ),
  'Technical Support': (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#333" strokeWidth="1.5">
      <rect x="3" y="5" width="22" height="15" rx="2"/>
      <path d="M9 23h10M14 20v3"/>
      <path d="M9 11l3 3-3 3M15 17h4"/>
    </svg>
  ),
}

// Sidebar component
function Sidebar({ open, onClose }) {
  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/30 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[520px] max-w-full bg-white dark:bg-[#151a16] z-[70] shadow-2xl transition-transform duration-500 ease-in-out overflow-y-auto ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-10">

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 w-11 h-11 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-gray-500 dark:hover:border-gray-500 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <img src="/images/header-logo.svg" alt="Softro" className="h-8" />
          </div>

          {/* Tagline */}
          <p className="text-gray-500 dark:text-gray-300 text-lg leading-relaxed mb-12 max-w-sm">
            We develop innovative digital solutions that enhance Software Development, Cloud & DevOps etc.
          </p>

          {/* Divider line with arrow */}
          <div className="relative mb-8">
            <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center" style={{ width: '1px' }}>
              <div className="flex-1 w-px bg-gray-200" />
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="mt-1">
                <path d="M5 0v8M1 4l4 4 4-4" stroke="#aaa" strokeWidth="1.5"/>
              </svg>
            </div>

            <div className="pl-8 space-y-10">

              {/* Chat With Us */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">Chat With Us</h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5">
                      <rect x="3" y="5" width="18" height="14" rx="2"/>
                      <path d="M3 7l9 6 9-6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Send Us Mail</p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">info@example.com</p>
                  </div>
                </div>
              </div>

              {/* Call Us */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">Call Us</h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 21 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call 24/7 Hours</p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">2-965-871-8617</p>
                  </div>
                </div>
              </div>

              {/* Visit Office */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">Visit Office</h3>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-900 dark:text-white leading-snug">
                      1234 Innovation Drive, Suite 500 San Francisco, CA 94107 United States
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Follow Us */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">Follow Us</h3>
            <div className="flex items-center gap-3">
              {[
                { label: 'f', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { label: 'x', path: 'M4 4l16 16M20 4L4 20' },
                { label: 'in', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
                { label: '◻', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z' },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold transition-opacity hover:opacity-80"
                  style={{ background: '#1a2e25' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d={social.path}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [active, setActive] = useState('Home')
  const [openDropdown, setOpenDropdown] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const closeTimer = useRef(null)
  
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const windowH = window.innerHeight
      setScrolled(scrollY > 40)
  
      // Hide during video expansion zone
      const expansionStart = windowH * 0.7
      const expansionEnd = windowH * 2
      setHidden(scrollY > expansionStart && scrollY < expansionEnd)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMouseEnter = (link) => {
    clearTimeout(closeTimer.current)
    if (link === 'Services' || dropdowns[link]) setOpenDropdown(link)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
          opacity: hidden ? 0 : 1,
        }}
      >
        <div className="w-full px-20 2xl:px-32 flex items-center justify-between h-20 bg-white dark:bg-[#111411] border-b border-gray-200 dark:border-gray-800">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 font-light text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
            <img src='/images/header-logo.svg' alt='Mainicon'/>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-5">
            {navLinks.map(link => (
              <div
                key={link}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  onClick={() => setActive(link)}
                  className={`text-base font-medium transition-colors px-4 py-0.5 rounded-full border ${
                    active === link
                      ? 'border-gray-400 dark:border-gray-600 text-black dark:text-white'
                      : 'border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {link}
                </a>

                {/* Services mega dropdown */}
                {link === 'Services' && openDropdown === 'Services' && (
                  <div
                    className="fixed left-1/2 top-[70px] -translate-x-1/2 mt-3 bg-white dark:bg-[#151a16] rounded-2xl shadow-xl py-0 border border-gray-100 dark:border-gray-800 z-50 overflow-hidden w-[80vw]"
                    style={{ left: '50%', transform: 'translateX(-50%)', width: '90vw' }}
                    onMouseEnter={() => clearTimeout(closeTimer.current)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex h-full">
                      <div className="flex-1 px-4 py-20 w-[40%] ml-16">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">Company Services</h3>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {services.map((svc) => (
                            <a
                              key={svc.title}
                              href="#"
                              className="flex items-center gap-3 px-2 py-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-[#1d241f] transition-all group"
                            >
                              <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                                {serviceIcons[svc.title]}
                              </div>
                              <span className="text-lg font-medium text-gray-800 dark:text-gray-100 group-hover:text-black dark:group-hover:text-white leading-tight">
                                {svc.title}
                              </span>
                            </a>
                          ))}
                        </div>
                        <div className="pt-5 flex flex-col gap-2">
                          <p className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                            Don't Hesitate to Collaborate with Us
                          </p>
                          <a href="#" className="inline-flex items-center gap-1.5 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
                            Contact us
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M7 17L17 7M17 7H7M17 7v10"/>
                            </svg>
                          </a>
                        </div>
                      </div>

                      <div className="w-[25%] border-gray-100 px-4 py-20 flex items-center justify-center">
                        <div className='w-[70%] h-full'>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">Industries</h3>
                          <ul className="space-y-3">
                            {industries.map((ind) => (
                              <li key={ind}>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                                  {ind}
                                </a>
                              </li>
                            ))}
                          </ul>
                          <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white mt-5 underline underline-offset-2">
                            View All Industries
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M7 17L17 7M17 7H7M17 7v10"/>
                            </svg>
                          </a>
                        </div>
                      </div>

                      <div
                        className="w-[35%] relative flex flex-col items-center justify-center text-white py-20 bg-[url(/images/topareabg.png)]"
                      >
                        {teamAvatars.map((avatar, i) => {
                          const count = teamAvatars.length
                          const radius = 38
                          const angle = (i / count) * 2 * Math.PI

                          const x = 50 + radius * Math.cos(angle)
                          const y = 50 + radius * Math.sin(angle)

                          return (
                            <div
                              key={i}
                              className="absolute w-14 h-14 rounded-full border-2 border-white/20"
                              style={{
                                top: `${y}%`,
                                left: `${x}%`,
                                transform: "translate(-50%, -50%)",
                              }}
                            >
                              <img
                                src={avatar.src}
                                alt="team member"
                                className="w-full h-full object-cover rounded-full"
                              />
                            </div>
                          )
                        })}

                        <div className="relative z-10 text-center">
                          <h3 className="text-2xl font-medium leading-snug mb-4">
                            Always Here to<br />Support You
                          </h3>

                          <a
                            href="/about"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-lg font-medium"
                            style={{ background: "#c5e87a", color: "#1a2e25" }}
                          >
                            Let's Talk
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <path d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Regular dropdowns */}
                {link !== 'Services' && dropdowns[link] && openDropdown === link && (
                  <div
                    className="absolute top-full left-0 mt-8 bg-white dark:bg-[#151a16] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 py-2 min-w-[220px] z-50"
                    onMouseEnter={() => clearTimeout(closeTimer.current)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {dropdowns[link].map((item) => (
                      <a
                        key={item}
                        href={dropdownRoutes[item] ?? '#'}
                        className="block px-5 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1d241f] hover:text-black dark:hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-7">
            <button
              onClick={() => setSidebarOpen(true)}
              className="hidden md:flex w-9 h-9 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              <img src='/images/navicon.svg' alt='logo'/>
            </button>

            <a
              href="/page2"
              className="bg-black dark:bg-[#c5e87a] hover:bg-[#F4BC0F] text-white dark:text-black hover:text-black flex gap-2 items-center justify-center rounded-[14px] px-5 py-3 transition-colors duration-300"
            >
              <h2>Say Hi</h2>
              <img
                src="/icons/arrowup.svg"
                alt="icon"
                className="w-5 h-5 transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  )
}