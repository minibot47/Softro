import Image from "next/image"
import { useState } from "react"


const services = [
  {
    title: 'Product Development',
    desc: 'From idea to launch — full-cycle product design, development, and testing.',
    icon: '/images/serviceicon1.svg',
    bg: 'white',
  },
  {
    title: 'UI/UX Design',
    desc: 'Intuitive and modern design systems tailored to your users needs.',
    icon: '/images/serviceicon2.svg',
    bg: 'white',
  },
  {
    title: 'Technical Support',
    desc: 'Technical Support for your business goals web, mobile, and desktop.',
    icon: '/images/serviceicon3.svg',
    bg: 'white',
  },
  {
    title: 'E-commerce Solutions',
    desc: 'We create powerful e-commerce platforms that drive sales & customer engagement.',
    icon: '/images/serviceicon3.svg',
    bg: 'white',
  },
  {
    title: 'AI & Automation',
    desc: 'Smart solutions to improve workflows, decision-making, and customer experience.',
    icon: '/images/serviceicon4.svg',
    bg: 'white',
  },
  {
    title: 'Branding & Identity',
    desc: 'Logo, color palette, typography, and visual guidelines to define your brand.',
    icon: '/images/serviceicon5.svg',
    bg: 'white',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Infrastructure setup, cloud migration, CI/CD pipelines, and maintenance.',
    icon: '/images/serviceicon6.svg',
    bg: 'white',
  },
  {
    title: 'Product Management',
    desc: 'From planning to launch — aligning features with market needs.',
    icon: '/images/serviceicon4.svg',
    bg: 'white',
  },
]

export default function Services3() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-24 px-10  bg-[url(/images/servicesbg.png)] dark:bg-[#151a16] mt-5 ">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-14 px-10">
          <div className="flex items-start justify-between gap-[170px] w-[60%] ">
              <span className="text-base font-normal text-white dark:text-white border border-green-500 dark:border-green-700 px-2 py-0.5 rounded-full">Services</span>
              <div className="flex flex-col gap-5">
                <h2
                  className="text-4xl md:text-5xl font-medium text-white dark:text-white"
                >
                  Services & Solutions For Modern World
                </h2>
              </div>
          </div>

          <div className="flex flex-col justify-center items-end gap-3">
            <h2 className="text-gray-300 text-xl">Powerful solutions designed to grow your business</h2>
            <a
            href="#"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-white dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1440px] px-10 ">
        {services.map((svc, i) => {
            const isRightCol = (i % 3) === 2
            const isMiddleCol = (i % 3) === 1
            const isBottomRow = i >= services.length - 3

            return (

                <div
                key={i}
                className="relative px-8 py-14 flex flex-col justify-between cursor-pointer border-[1px] border-gray-400/20 dark:border-gray-800 rounded-[10px] overflow-hidden"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                >
                {/* background */}
                <div
                    className="absolute inset-0 transition-colors duration-300"
                    style={{ background: svc.bg }}
                />


                {/* Small triangle visible by default */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(225deg, #C8F8A9 25%, transparent 25%)',
                  }}
                />

                {/* Full fill that scales out from top right on hover */}
                <div
                  className="absolute inset-0 pointer-events-none transition-transform duration-500 ease-out"
                  style={{
                    background: '#C8F8A9',
                    transformOrigin: 'top right',
                    transform: hoveredIndex === i ? 'scale(1)' : 'scale(0)',
                  }}
                />
                {/* Icon */}
                <div className="absolute top-5 right-3 z-10">
                  <div />
                  <Image
                    src={svc.icon}
                    alt={svc.title}
                    width={48}
                    height={48}
                    className="w-14 h-14 object-contain transition-all duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="font-medium text-2xl w-[70%] mb-5 leading-tight text-black dark:text-white z-10">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-relaxed mb-10 transition-colors duration-300 z-10"
                  style={{ color: hoveredIndex === i ? 'rgb(80,80,80)' : 'rgb(107,114,128)' }}
                >
                  {svc.desc}
                </p>

                {/* View Details pill + arrow */}
                <div className="flex items-center z-10 ">
                  <a
                    href="#"
                    className="inline-flex items-center  py-2  text-base font-medium transition-colors"
                  >
                    View Details
                  </a>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center -ml-px transition-colors cursor-pointer"
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