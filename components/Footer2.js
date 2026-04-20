import { useTheme } from '../components/themecontext'

const services = [
  'Social Media Marketing',
  'Pay-Per-Click Advertising',
  'Content Marketing',
  'Branding & Strategy',
  'Cloud & DevOps',
]

const companyLinks = [
  { label: 'About us', href: '#' },
  { label: 'Our Team', href: '#' },
  { label: 'Our Portfolio', href: '#' },
  { label: 'Careers', href: '#', badge: 'Hiring' },
  { label: 'Contact Us', href: '#' },
]

export default function Footer2() {
  const { toggleTheme } = useTheme()

  return (
    <>
      <div className='bg-black rounded-[24px] '>
        <footer className="relative text-white max-w-[1440px] m-auto  w-full rounded-[16px] overflow-hidden ">
          {/* TOP SECTION — Big headline + arrow */}
          <div className="px-16 pt-16 pb-10 border-b border-white/10 flex items-start justify-between">
            <div>
              {/* Logo */}
              <a href="/" className="flex items-center gap-2 mb-8">
                <img src='/images/footer-logo.svg' alt='Softro'/>
              </a>

              {/* Big headline */}
              <h2 className="text-6xl xl:text-8xl font-light leading-tight text-white/30 tracking-tight">
                Shape The<br />Future With Us
              </h2>
            </div>

            {/* Arrow button — top right */}
            <a
              href="#"
              className="flex-shrink-0 w-36 h-36 rounded-full border-2 border-white flex items-center justify-center hover:border-white transition-colors mt-4"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          </div>

          {/* BOTTOM SECTION — 4 columns */}
          <div className="px-16 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* COL 1 — Contact */}
            <div>
              <h4 className="font-bold text-white text-2xl mb-6">Contact</h4>

              <div className="space-y-4 mb-6">
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src="/icons/phone.svg" alt="phone" className="w-5 h-5"/>
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Call 24/7 Hours</p>
                    <a href="tel:+997636844563" className="text-white font-medium">
                      +99-763 684 4563
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src="/icons/mail.svg" alt="mail" className="w-5 h-5"/>
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Send Us Mail</p>
                    <a href="mailto:info@example.com" className="text-white font-medium">
                      info@example.com
                    </a>
                  </div>
                </div>
              </div>

              <a href="#" className="text-sm text-white underline underline-offset-4">
                View site Map
              </a>
            </div>

            {/* COL 2 — Company */}
            <div>
              <h4 className="font-bold text-white text-2xl mb-6">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map(({ label, href, badge }) => (
                  <li key={label} className="flex items-center gap-2">
                    <a href={href} className="text-base text-white/60 hover:text-white transition-colors">
                      {label}
                    </a>
                    {badge && (
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#b8e04a] text-black">
                        {badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 3 — Services */}
            <div>
              <h4 className="font-bold text-white text-2xl mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map(item => (
                  <li key={item}>
                    <a href="#" className="text-base text-white/60 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 4 — Newsletter + Social */}
            <div>
              <h4 className="font-bold text-white text-2xl mb-6">Newsletter</h4>

              {/* Email input */}
              <div className="flex items-center rounded-xl border border-white/20 bg-white/5 px-4 py-3 mb-6">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
                />
                <button type="button" className="flex-shrink-0 ml-2">
                  <img src="/icons/newsletter.svg" alt="send" className="w-6 h-6"/>
                </button>
              </div>

              {/* Company Desk */}
              <button className="flex items-center gap-3 text-white text-sm font-medium mb-8">
                <div className="w-10 h-10 rounded-full bg-[#b8e04a] flex items-center justify-center">
                  <img src="/icons/download.svg" alt="download" className="w-5 h-5"/>
                </div>
                Company Desk
              </button>

              {/* Social */}
              <h4 className="font-bold text-white text-xl mb-4">Social media link</h4>
              <div className="flex gap-3">
                {[
                  { src: '/icons/facebook.svg', alt: 'facebook' },
                  { src: '/icons/twitter.svg', alt: 'twitter' },
                  { src: '/icons/linkedin.svg', alt: 'linkedin' },
                  { src: '/icons/insta.svg', alt: 'instagram' },
                ].map(s => (
                  <a
                    key={s.alt}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                  >
                    <img src={s.src} alt={s.alt} className="w-4 h-4"/>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </footer>
      </div>
      {/* Bottom bar */}
      <div className=" bg-white text-black  max-w-[1440px] m-auto">
        <div className="px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-black">
          <p>©Copyright 2026 <strong className="text-white">Egens Lab</strong> | All Right Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Support Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </>

  )
}