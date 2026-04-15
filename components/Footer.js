const services = [
  'Brand Identity Design',
  'Graphic & Print Design',
  'Motion & Animation',
  'Web & App Design',
  'UI/UX Design',
]

const companyLinks = [
  { label: 'About us', href: '#' },
  { label: 'Our Team', href: '#' },
  { label: 'Our Portfolio', href: '#' },
  { label: 'Careers', href: '#', badge: 'Hiring' },
  { label: 'Contact Us', href: '#' },
]

function PaperPlaneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <span
      className="inline-flex items-center justify-center w-9 h-9 rounded border border-white/15 bg-white/5 shrink-0"
      aria-hidden
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[var(--green-lime)]">
        <path
          d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

function MailIcon() {
  return (
    <span
      className="inline-flex items-center justify-center w-9 h-9 rounded border border-white/15 bg-white/5 shrink-0"
      aria-hidden
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[var(--green-lime)]">
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function SocialIcon({ children, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/15 transition-colors"
    >
      {children}
    </a>
  )
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative text-white bg-black w-full rounded-[16px] overflow-hidden mb-5 px-5 py-24">

      {/* Dark-mode style control on left edge (visual match) */}
      <button
        type="button"
        className="fixed  left-0 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-10 h-10 rounded-r-full bg-[#1a1a1a] border border-white/10 border-l-0 text-white/80 hover:text-white transition-colors"
        aria-label="Toggle theme"
      >
        <svg width="full" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </button>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 sm:pl-14 lg:px-12 lg:pl-16 pb-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
          {/* Column 1 — Brand & newsletter */}
          <div className="lg:pr-10 lg:border-r lg:border-white/[0.08]">
            <div className="flex items-center gap-2.5 font-bold text-xl mb-4">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[var(--green-lime)]/20 ring-1 ring-[var(--green-lime)]/40">
                <svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden>
                  <path
                    d="M11 2L13.5 8.5H20L14.5 12.5L16.5 19L11 15L5.5 19L7.5 12.5L2 8.5H8.5L11 2Z"
                    fill="var(--green-lime)"
                  />
                </svg>
              </span>
              Softro
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              This professional company that provides creative services to help businesses, brands, and individuals
              communicate visually and build strong identities.
            </p>

            <h4 className="font-bold text-white text-sm mb-3">Newsletter</h4>
            <div className="relative mb-6">
              <input
                type="email"
                placeholder="Enter your email here"
                className="w-full pl-4 pr-12 py-3 rounded-[8px] text-sm bg-[#0d0d0d] text-white placeholder:text-white/40 border border-white/20 outline-none focus:border-[var(--green-lime)]/60"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[var(--green-lime)] hover:opacity-90"
                aria-label="Subscribe"
              >
                <PaperPlaneIcon />
              </button>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-3 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <span
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--green-lime)] text-black"
                aria-hidden
              >
                <ChevronDownIcon />
              </span>
              Company Desk
            </button>
          </div>

          {/* Column 2 — Services & Contact */}
          <div className="lg:px-10 lg:border-r lg:border-white/[0.08]">
            <h4 className="font-bold text-white text-sm mb-4">Services</h4>
            <ul className="space-y-2.5 mb-10">
              {services.map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/90 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-bold text-white text-sm mb-4">Contact</h4>
            <div className="space-y-5 mb-4">
              <div className="flex gap-3">
                <PhoneIcon />
                <div>
                  <p className="text-[11px] text-white/50 uppercase tracking-wide">Call 24/7 Hours</p>
                  <a href="tel:+997636844563" className="text-sm font-medium text-white">
                    +99-763 684 4563
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MailIcon />
                <div>
                  <p className="text-[11px] text-white/50 uppercase tracking-wide">Send Us Mail</p>
                  <a href="mailto:info@example.com" className="text-sm font-medium text-white">
                    info@example.com
                  </a>
                </div>
              </div>
            </div>
            <a href="#" className="text-sm text-white underline underline-offset-4 decoration-white/40 hover:decoration-white">
              View site Map
            </a>
          </div>

          {/* Column 3 — Company & Social */}
          <div className="lg:pl-10">
            <h4 className="font-bold text-white text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 mb-10">
              {companyLinks.map(({ label, href, badge }) => (
                <li key={label} className="flex items-center gap-2 flex-wrap">
                  <a href={href} className="text-sm text-white/90 hover:text-white transition-colors">
                    {label}
                  </a>
                  {badge && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[var(--green-lime)] text-black">
                      {badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <h4 className="font-bold text-white text-sm mb-4">Social media link</h4>
            <div className="flex flex-wrap gap-3">
              <SocialIcon label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="X">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 sm:pl-14 lg:px-12 lg:pl-16 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-white/70">
          <p>@Copyright 2026 Softro | All Right Reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-white transition-colors">
              Support Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}
