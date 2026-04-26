import Navbar from "../components/Navbar"
import Footer2 from "../components/Footer2"
import Image from "next/image"
import { useState, useEffect } from 'react'
import SolutionSteps from "../components/Solutionsteps"

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



export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    return(
        <div>
            <Navbar/>
            {/* Hero */}
            <div className="flex flex-col px-20  mt-24 py-10 max-w-[1440px]  m-auto items-start justify-start">
                    <div className="flex items-center gap-3 mb-10 text-base text-gray-700">
                    <span>Home</span>

                    {/* Connector */}
                    <div className="flex items-center ">
                        {/* Left diamond */}
                        <svg width="8" height="8" viewBox="0 0 10 10">
                        <path d="M5 0L10 5L5 10L0 5Z" fill="black" />
                        </svg>

                        {/* Line */}
                        <div className="w-6 h-[1px] bg-black"></div>

                        {/* Right diamond */}
                        <svg width="8" height="8" viewBox="0 0 10 10">
                        <path d="M5 0L10 5L5 10L0 5Z" fill="black" />
                        </svg>
                    </div>

                    <span>Service 01</span>
                    </div>
                    <h2 className="text-6xl ">Solutions That Drive<br/> Real Business Growth</h2>
                    <ul className="space-y-6 text-gray-700 ml-14 px-16 mt-5">
                    <li className="flex gap-4">
                        
                        {/* Left vertical indicator */}
                        <div className="flex flex-col items-center">
                        {/* Top diamond */}
                        <svg width="8" height="8" viewBox="0 0 10 10">
                            <path d="M5 0L10 5L5 10L0 5Z" fill="#1F3D3A" />
                        </svg>

                        {/* Vertical line */}
                        <div className="w-[2px] h-full bg-gray-300"></div>

                        {/* Bottom diamond */}
                        <svg width="8" height="8" viewBox="0 0 10 10">
                            <path d="M5 0L10 5L5 10L0 5Z" fill="#1F3D3A" />
                        </svg>
                        </div>

                        {/* Text */}
                        <p className="leading-relaxed text-lg">
                        From design and development to marketing and branding, we <br/> ensure every service is crafted to meet your unique goals.
                        </p>
                    </li>
                    </ul>
            </div>

            {/* SERVICES */}
            <section className="py-24 px-10  bgwhite dark:bg-[#151a16] mt-5 ">
            <div className="max-w-[1440px] mx-auto">


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

            {/*Trusted BANNER */}
            <div className="max-w-[1440px] m-auto mb-10">
                <div className="relative flex items-center justify-center">
                <div className="absolute inset-x-0 top-1/2 h-px bg-gray-200" />
                <span className="relative bg-[#F8FDF4] px-3 py-1.5 rounded-full border-[0.1px] border-gray-400/40 text-BASE font-semibold text-gray-800 z-10">
                    Trusted By 2,000+ Clients Worldwide
                </span>
                </div>

                <div className="w-full mt-20 flex flex-col items-center justify-center gap-10">
                <div className="relative overflow-hidden w-full">

                    {/* Left fade mask */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, white, transparent)' }}
                    />
                    {/* Right fade mask */}
                    <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to left, white, transparent)' }}
                    />

                    <div className="flex gap-20 items-center w-max"
                    style={{
                        animation: 'marquee 40s linear infinite',
                    }}
                    >
                    {/* Render 4 full sets for a seamless loop */}
                    {[...Array(4)].flatMap((_, setIndex) =>
                        [1, 2, 3, 4, 5].map((n) => (
                        <img
                            key={`${setIndex}-${n}`}
                            src={`/images/partner-0${n}.png`}
                            alt="partner"
                            className="h-10 flex-shrink-0"
                        />
                        ))
                    )}
                    </div>

                </div>
                </div>
            </div>

            {/* STEPS */}
            <SolutionSteps/>

            <div className="p-3">
                <Footer2/>
            </div>
            
        </div>
    )
}