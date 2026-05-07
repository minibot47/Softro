'use client'
import { useEffect, useState, useRef } from 'react'
import Navbar from "../components/Navbar"
import Footer2 from "../components/Footer2"
import Team2 from '../components/Team2'
import TeamworkGallery from '../components/Teamworkgallery'

export default function Team() {

    // ✅ Parallax state (scoped)
    const sectionRef = useRef(null)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return

            const rect = sectionRef.current.getBoundingClientRect()

            // Only animate when visible
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setOffset(rect.top)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return(
        <div>
            <Navbar/>

            {/* Hero */}
            <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-20 mt-20 md:mt-24 py-8 md:py-10 max-w-[1440px] m-auto items-start justify-start">
                
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 mb-10 text-base text-gray-700">
                    <span>Home</span>

                    <div className="flex items-center">
                        <svg width="6" height="6" viewBox="0 0 10 10">
                            <path d="M5 0L10 5L5 10L0 5Z" className="fill-black dark:fill-white" />
                        </svg>
                        <div className="w-4 h-[1px] bg-black dark:bg-white"></div>
                        <svg width="6" height="6" viewBox="0 0 10 10">
                            <path d="M5 0L10 5L5 10L0 5Z" className="fill-black dark:fill-white" />
                        </svg>
                    </div>

                    <span>Team 01</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    The People Fueling<br/> Our Collective Vision
                </h2>

                {/* Vertical bullet */}
                <ul className="space-y-6 text-gray-700 ml-0 md:ml-14 md:pl-16 mt-5 max-w-full">
                    <li className="flex gap-4">
                        <div className="flex flex-col items-center ">
                            <svg width="6" height="6" viewBox="0 0 10 10">
                                <path d="M5 0L10 5L5 10L0 5Z" className="fill-black dark:fill-white" />
                            </svg>

                            <div className="w-[1px] flex-1 bg-black dark:bg-white"></div>

                            <svg width="6" height="6"viewBox="0 0 10 10">
                                <path d="M5 0L10 5L5 10L0 5Z" className="fill-black dark:fill-white" />
                            </svg>
                        </div>

                        <p className="leading-relaxed text-lg">
                            A diverse team of creators, strategists, and<br/>
                            problem-solvers shaping tomorrow’s brands today
                        </p>
                    </li>
                </ul>
            </div>

            {/* ✅ PARALLAX IMAGE SECTION */}
            <div
                ref={sectionRef}
                className="relative w-full min-h-[320px] h-[45vh] sm:h-[55vh] md:h-[622px] mt-12 md:mt-20 overflow-hidden"
            >
                <img
                    src="/images/team-banner-card-img.png"
                    alt="bannerIMG"
                    className="w-full h-full object-cover will-change-transform"
                    style={{
                        transform: `translateY(${offset * 0.15}px) scale(1.05)`
                    }}
                />

                {/* Stats Card */}
                <div
                    className="hidden absolute bottom-0 left-0 right-0 md:left-auto md:right-[15%] sm:w-full w-fit max-w-full md:w-[386px] md:max-w-[386px] h-fit md:h-[365px] rounded-t-[12px] bg-white text-black p-4 sm:p-7 sm:grid grid-cols-2 grid-rows-2 mx-auto md:mx-0"
                >
                    <div className="flex flex-col items-start border-b border-gray-200/40 gap-4 p-1 2xl:p-5">
                        <h2 className='text-sm lg:text-lg'>Years of <br/> expertise</h2>
                        <h2 className="text-2xl lg:text-5xl font-medium">12+</h2>
                    </div>

                    <div className="flex flex-col items-start pl-10 border-b border-l border-gray-200/40 gap-4 p-1 2xl:p-5">
                        <h2 className='text-sm lg:text-lg'>Industry <br/> Awards</h2>
                        <h2 className="text-2xl lg:text-5xl font-semibold">05</h2>
                    </div>

                    <div className="flex flex-col items-start gap-4 p-1 2xl:p-5">
                        <h2 className='text-sm lg:text-lg'>Creative <br/> Minds</h2>
                        <h2 className="text-2xl lg:text-5xl font-semibold">25+</h2>
                    </div>

                    <div className="flex flex-col items-start pl-10 border-l border-gray-200/40 gap-4 p-1 2xl:p-5">
                        <h2 className='text-sm lg:text-lg'>Project <br/> Completed</h2>
                        <h2 className="text-2xl lg:text-5xl font-semibold">1k+</h2>
                    </div>
                </div>
            </div>

            {/* TEAM */}
            <Team2/>

            {/* Teamwork */}
            <div className='hidden max-w-[1440px] m-auto md:flex flex-col gap-5 px-4'>
                <h2 className='text-center mb-12 md:mb-20 text-3xl sm:text-4xl md:text-5xl font-semibold'>
                    Believe In Teamwork <br/> Over Hierarchy
                </h2>

                <TeamworkGallery/>
            </div>

            {/* Join our team */}
            <div className="flex items-center justify-center py-12 md:py-20 max-w-[1400px] m-auto px-4 overflow-hidden">
                <div className="relative flex items-center justify-center w-[min(100%,320px)] h-[min(100vw,320px)] sm:w-[400px] sm:h-[400px] md:w-[560px] md:h-[560px] max-w-full">
                    
                    <div className="absolute rounded-full border border-dashed border-gray-300 w-[96%] h-[96%] max-w-[310px] max-h-[310px] sm:max-w-[390px] sm:max-h-[390px] md:max-w-none md:max-h-none md:w-[540px] md:h-[540px]" />

                    <div className="absolute w-[96%] h-[96%] max-w-[310px] max-h-[310px] sm:max-w-[390px] sm:max-h-[390px] md:max-w-none md:max-h-none md:w-[540px] md:h-[540px]" style={{ animation: 'spinCW 12s linear infinite' }}>
                        <span className="absolute w-2 h-2 rounded-full bg-[#c5e87a]" style={{ top: -4, left: '50%', transform: 'translateX(-50%)' }} />
                        <span className="absolute w-2 h-2 rounded-full bg-[#c5e87a]" style={{ bottom: -4, left: '50%', transform: 'translateX(-50%)' }} />
                    </div>

                    <div className="absolute rounded-full bg-gray-100 w-[88%] h-[88%] max-w-[280px] max-h-[280px] sm:max-w-[360px] sm:max-h-[360px] md:max-w-none md:max-h-none md:w-[500px] md:h-[500px]" />

                    <div className="absolute w-[88%] h-[88%] max-w-[280px] max-h-[280px] sm:max-w-[360px] sm:max-h-[360px] md:max-w-none md:max-h-none md:w-[500px] md:h-[500px]" style={{ animation: 'spinCW 10s linear infinite' }}>
                        <span className="absolute w-2.5 h-2.5 rounded-full bg-[#c5e87a]" style={{ top: -5, left: '50%', transform: 'translateX(-50%)' }} />
                        <span className="absolute w-2.5 h-2.5 rounded-full bg-[#c5e87a]" style={{ bottom: -5, left: '50%', transform: 'translateX(-50%)' }} />
                    </div>

                    <div className="relative z-10 text-center px-4 sm:px-8 md:px-16 max-w-[90%]">
                        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-black">Join Our Team!</h2>
                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 dark:text-black">
                            We're always on the lookout for passionate,<br/>
                            creative, and talented individuals to join our<br/>
                            dynamic team.
                        </p>

                        <a href="/careers" className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base" style={{ background: '#c5e87a', color: '#1a2e25' }}>
                            Join Our Team
                        </a>
                    </div>

                    <style>{`
                        @keyframes spinCW {
                            from { transform: rotate(0deg); }
                            to { transform: rotate(360deg); }
                        }
                    `}</style>
                </div>
            </div>

            <div className="p-3">
                <Footer2/>
            </div>
        </div>
    )
}