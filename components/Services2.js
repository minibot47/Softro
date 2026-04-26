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
    <section className="py-24 px-10  bg-white dark:bg-[#151a16] mt-5 rounded-[16px]">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-14">
          <div className="flex items-start justify-between gap-[170px] w-[55%] ">
              <span className="text-base font-normal text-black dark:text-white border border-green-500 dark:border-green-700 px-2 py-0.5 rounded-full">Services</span>
              <div className="flex flex-col gap-5">
                <h2
                  className="text-4xl md:text-5xl font-medium text-black dark:text-white"
                >
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[1440px] ">
        {services.map((svc, i) => {
            const isRightCol = (i % 3) === 2
            const isMiddleCol = (i % 3) === 1
            const isBottomRow = i >= services.length - 3

            return (

              <div
                key={i}
                className="relative px-10 py-14 cursor-pointer transition-all duration-300 border-[1px] border-gray-400/20 dark:border-gray-800 rounded-[10px]"
                style={{ background: hoveredIndex === i ? 'rgb(243, 255, 239)' : svc.bg }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon */}
                <div className="absolute top-8 right-8">
                  <div />
                  <Image
                    src={svc.icon}
                    alt={svc.title}
                    width={48}
                    height={48}
                    className="w-14 h-14 object-contain transition-all duration-300"
                    style={{ opacity: hoveredIndex === i ? 0.8 : 0.3, filter: hoveredIndex === i ? 'brightness(0)' : 'none' }}
                  />
                </div>

                {/* Title */}
                <h3 className="font-medium text-3xl w-[70%] mb-5 leading-tight text-black dark:text-white">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-lg leading-relaxed mb-10 transition-colors duration-300"
                  style={{ color: hoveredIndex === i ? 'rgb(80,80,80)' : 'rgb(107,114,128)' }}
                >
                  {svc.desc}
                </p>

                {/* View Details pill + arrow */}
                <div className="flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium transition-colors"
                    style={{
                      border: hoveredIndex === i ? '1px solid black' : '1px solid rgb(209,213,219)',
                      background: hoveredIndex === i ? '#C8F8A9' : 'transparent',
                      color: hoveredIndex === i ? 'black' : 'rgb(31,41,55)',
                    }}
                  >
                    View Details
                  </a>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center -ml-px transition-colors cursor-pointer"
                    style={{
                      border: hoveredIndex === i ? '1px solid black' : '1px solid rgb(209,213,219)',
                      background: hoveredIndex === i ? '#C8F8A9' : 'transparent',
                    }}
                  >
                    <img src="/icons/arrow.svg" alt="icon"/>
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