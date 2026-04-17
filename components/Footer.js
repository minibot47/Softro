import { useTheme } from '../components/themecontext'

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



export default function Footer() {
  const { toggleTheme } = useTheme()
  const scrollToTop = () => {
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative text-white bg-black w-full rounded-[16px] overflow-hidden mb-5  py-12">

      {/* Dark-mode style control on left edge (visual match) */}
      <button
        onClick={toggleTheme}
        className="fixed left-0 top-[30%] z-10 flex items-center justify-center w-10 h-10 rounded-r-full bg-[#1a1a1a] border border-white/10 text-white"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </button>

      <div className="max-w-[1440px] mx-auto  sm:pl-14 lg:px-12 lg:pl-16 pb-8 pt-4  min-h-[80vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 ">

        {/* COLUMN 1 — unchanged */}
        <div className="lg:pr-10 lg:border-r lg:border-white/[0.08] flex flex-col items-start justify-center border-r-[0.1px] border-gray-400/30">

          <a href="/" className="flex mb-3 items-center gap-2 font-light text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
            <img src='/images/footer-logo.svg' alt='Mainicon'/>
          </a>

          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-sm mt-2">
            This professional company that provides creative services to help businesses, brands, and individuals communicate visually and build strong identities.
          </p>

          <h4 className="font-bold text-white text-2xl mb-3">Newsletter</h4>

          <div className="flex py-3 rounded-[8px] text-sm bg-[#0d0d0d] gap-2items-center mb-6 border border-white/20">
            <input
              type="email"
              placeholder="Enter your email here"
              className="w-[90%] pl-4 pr-12  text-whit bg-transparent placeholder:text-white/40  outline-none"
            />
            <button
              type="button"
              className=" w-[10%] mr-4"
            >
              <img src="/icons/newsletter.svg" alt="newsletter" className="w-7 h-7"/>
            </button>
          </div>

          <button className="flex items-center gap-3 text-white text-sm font-medium">
            <img src="/icons/download.svg" alt="icon" className="w-10 h-10 bg-[#C9E8B6] rounded-full p-1"/>
            Company Desk
          </button>

        </div>

        {/* COLUMN 2 — SPLIT VERTICALLY */}
        <div className=" lg:border-r lg:border-white/[0.08] flex flex-col">

          {/* TOP — SERVICES */}
          <div className="pb-10 border-b border-gray-400/20  px-28">
            <h4 className="font-bold text-white text-3xl mb-4">Services</h4>

            <ul className="space-y-2.5">
              {services.map(item => (
                <li key={item}>
                  <a href="#" className="text-base text-white/70 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* BOTTOM — CONTACT */}
          <div className="pt-10 px-28">
            <h4 className="font-bold text-white text-3xl mb-4">Contact</h4>

            <div className="space-y-5 mb-4">
              <div className="flex gap-3">
                <img src="/icons/mail.svg" alt="mail" className="w-10 h-10 bg-white/80 p-1 rounded-[6px]"/>
                <div>
                  <p className="text-sm text-white/70">Call 24/7 Hours</p>
                  <a href="tel:+997636844563" className="text-white font-medium">
                    +99-763 684 4563
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
              <img src="/icons/phone.svg" alt="phone" className="w-10 h-10 bg-white/80 p-1 rounded-[6px]"/>
                <div>
                  <p className="text-sm text-white/70">Send Us Mail</p>
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

        </div>

        {/* COLUMN 3 — SPLIT VERTICALLY */}
        <div className=" flex flex-col">

          {/* TOP — COMPANY */}
          <div className="pb-10 border-b border-gray-400/20 px-28">
            <h4 className="font-bold text-white text-3xl mb-4">Company</h4>

            <ul className="space-y-2.5">
              {companyLinks.map(({ label, href, badge }) => (
                <li key={label} className="flex items-center gap-2 flex-wrap">
                  <a href={href} className="text-base text-white/70 hover:text-white">
                    {label}
                  </a>
                  {badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-[var(--green-lime)] text-black">
                      {badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* BOTTOM — SOCIAL */}
          <div className="pt-10 px-28">
            <h4 className="font-bold text-white text-2xl mb-4">
              Social media link
            </h4>

            <div className="flex flex-wrap gap-3">
              {/* your SocialIcon components stay unchanged */}

                <img src="/icons/facebook.svg" alt="facebook" className="w-7 h-7"/>


                <img src="/icons/insta.svg" alt="insta" className="w-7 h-7"/>


                <img src="/icons/twitter.svg" alt="twitter" className="w-7 h-7"/>


                <img src="/icons/linkedin.svg" alt="linkedin" className="w-7 h-7"/>

            </div>
          </div>

        </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 sm:pl-14 lg:px-12 lg:pl-16 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-lg text-white">
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
