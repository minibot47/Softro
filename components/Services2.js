import Image from "next/image"
import { useState } from "react"

const services = [
  {
    title: 'Social Media Marketing',
    desc: 'Build your brand presence on platforms like Facebook, Instagram, LinkedIn & TikTok.',
    icon: '/icons/serviceicon1.svg',
    bg: 'white',
  },
  {
    title: 'Pay-Per-Click Advertising',
    desc: 'Drive instant traffic and leads through Google Ads & social campaigns.',
    icon: '/icons/serviceicon2.svg',
    bg: 'white',
  },
  {
    title: 'Content Marketing',
    desc: 'Create valuable content that attracts, educates, and converts your audience.',
    icon: '/icons/serviceicon3.svg',
    bg: 'white',
  },
  {
    title: 'Branding & Strategy',
    desc: 'Shape your brand identity and build a strategy that stands out.',
    icon: '/icons/serviceicon4.svg',
    bg: 'white',
  },
  {
    title: 'Search Engine Optimization',
    desc: 'Optimize your website to rank higher on Google and increase organic traffic.',
    icon: '/icons/serviceicon5.svg',
    bg: 'white',
  },
  {
    title: 'Website Design & Development',
    desc: 'Drive instant traffic and leads through Google Ads & social campaigns.',
    icon: '/icons/serviceicon6.svg',
    bg: 'white',
  },
]

export default function Services2() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-10 bg-white dark:bg-[#151a16] mt-5 rounded-[16px]">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10 md:mb-14">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-8 lg:gap-[170px] w-full md:w-[55%]">
            <span className="text-base font-normal text-black dark:text-white border border-green-500 dark:border-green-700 px-2 py-0.5 rounded-full shrink-0 w-fit">
              Services
            </span>
            <div className="flex flex-col gap-4 sm:gap-5 min-w-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black dark:text-white">
                Your Growth With Digital Innovation
              </h2>
            </div>
          </div>

          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[1440px]">
          {services.map((svc, i) => {
            const isHovered = hoveredIndex === i

            return (
              <div
                key={i}
                className="relative px-5 sm:px-8 md:px-10 py-10 sm:py-14 flex flex-col justify-between gap-5 cursor-pointer transition-all duration-300 border-[1px] border-gray-400/20 dark:border-gray-800 rounded-[10px]"
                style={{ background: isHovered ? 'rgb(243, 255, 239)' : svc.bg }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon */}
                <div className="absolute top-8 right-8">
                  <Image
                    src={svc.icon}
                    alt={svc.title}
                    width={48}
                    height={48}
                    className="w-14 h-14 object-contain transition-all duration-300"
                    style={{
                      opacity: isHovered ? 0.8 : 0.3,
                      filter: isHovered ? 'brightness(0)' : 'none',
                    }}
                  />
                </div>

                {/* Title */}
                <h3 className="font-medium text-3xl w-[70%] mb-5 leading-tight text-black dark:text-black">
                  {svc.title}
                </h3>

                {/* Description */}
                <p
                  className="text-lg leading-relaxed mb-10 transition-colors duration-300"
                  style={{ color: isHovered ? 'rgb(80,80,80)' : 'rgb(107,114,128)' }}
                >
                  {svc.desc}
                </p>

                {/*
                  The container clips overflow so nothing spills outside.
                  Only the arrow moves — it slides left by its own full width
                  plus the pill width, jumping in front with no gap.
                  The pill stays completely still; the arrow does all the work.
                */}
                <div className="flex items-center w-fit">
                  {/* Pill — does not move at all */}
                  <a
                    href="#"
                    className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium flex-shrink-0"
                    style={{
                      border: isHovered ? '1px solid black' : '1px solid rgb(209,213,219)',
                      background: isHovered ? '#C8F8A9' : 'transparent',
                      color: isHovered ? 'black' : 'rgb(31,41,55)',
                      transition: 'background 300ms, border 300ms, color 300ms',
                      transform: isHovered ? 'translateX(calc(32px))' : 'translateX(0)',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    View Details
                  </a>

                  {/* Arrow — slides left by (its width + pill width) so it lands flush at the start */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      border: isHovered ? '1px solid black' : '1px solid rgb(209,213,219)',
                      background: isHovered ? '#C8F8A9' : 'transparent',
                      transition: 'transform 400ms cubic-bezier(0.34,1.4,0.64,1), background 300ms, border 300ms',
                      transform: isHovered ? 'translateX(calc(-100% - 90px))' : 'translateX(0)',
                      position: 'relative',
                      zIndex: 2,
                      marginLeft: '-1px',
                    }}
                  >
                    <img src="/icons/arrow.svg" alt="icon" />
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}