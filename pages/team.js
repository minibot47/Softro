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
            <div className="flex flex-col px-20 mt-24 py-10 max-w-[1440px] m-auto items-start justify-start">
                
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 mb-10 text-base text-gray-700">
                    <span>Home</span>

                    <div className="flex items-center">
                        <svg width="8" height="8" viewBox="0 0 10 10">
                            <path d="M5 0L10 5L5 10L0 5Z" fill="black" />
                        </svg>
                        <div className="w-6 h-[1px] bg-black"></div>
                        <svg width="8" height="8" viewBox="0 0 10 10">
                            <path d="M5 0L10 5L5 10L0 5Z" fill="black" />
                        </svg>
                    </div>

                    <span>Team 01</span>
                </div>

                <h2 className="text-6xl">
                    The People Fueling<br/> Our Collective Vision
                </h2>

                {/* Vertical bullet */}
                <ul className="space-y-6 text-gray-700 ml-14 px-16 mt-5">
                    <li className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <svg width="8" height="8" viewBox="0 0 10 10">
                                <path d="M5 0L10 5L5 10L0 5Z" fill="#1F3D3A" />
                            </svg>

                            <div className="w-[2px] flex-1 bg-gray-300"></div>

                            <svg width="8" height="8" viewBox="0 0 10 10">
                                <path d="M5 0L10 5L5 10L0 5Z" fill="#1F3D3A" />
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
                className="relative w-full h-[622px] mt-20 overflow-hidden"
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
                    className="absolute bottom-0 right-[15%] w-fit h-fit rounded-t-[24px] bg-white text-black p-10 grid grid-cols-2 grid-rows-2"
                    style={{
                        transform: `translateY(${offset * -0.05}px)` // subtle opposite movement
                    }}
                >
                    <div className="flex flex-col items-start border-b border-gray-200 gap-4 p-2 2xl:p-5">
                        <h2 className='text-sm 2xl:text-lg'>Years of <br/> expertise</h2>
                        <h2 className="text-3xl 2xl:text-5xl font-semibold">12+</h2>
                    </div>

                    <div className="flex flex-col items-end border-b border-l border-gray-200 gap-4 p-2 2xl:p-5">
                        <h2 className='text-sm 2xl:text-lg'>Industry <br/> Awards</h2>
                        <h2 className="text-3xl 2xl:text-5xl font-semibold">05</h2>
                    </div>

                    <div className="flex flex-col items-start gap-4 p-2 2xl:p-5">
                        <h2 className='text-sm 2xl:text-lg'>Creative <br/> Minds</h2>
                        <h2 className="text-3xl 2xl:text-5xl font-semibold">25+</h2>
                    </div>

                    <div className="flex flex-col items-end border-l border-gray-200 gap-4 p-2 2xl:p-5">
                        <h2 className='text-sm 2xl:text-lg'>Project <br/> Completed</h2>
                        <h2 className="text-3xl 2xl:text-5xl font-semibold">1k+</h2>
                    </div>
                </div>
            </div>

            {/* TEAM */}
            <Team2/>

            {/* Teamwork */}
            <div className='max-w-[1440px] m-auto flex flex-col gap-5'>
                <h2 className='text-center mb-20 text-5xl font-semibold'>
                    Believe In Teamwork <br/> Over Hierarchy
                </h2>

                <TeamworkGallery/>
            </div>

            {/* Join our team */}
            <div className="flex items-center justify-center py-20 max-w-[1400px] m-auto">
                <div className="relative flex items-center justify-center" style={{ width: 560, height: 560 }}>
                    
                    <div className="absolute rounded-full border border-dashed border-gray-300" style={{ width: 540, height: 540 }} />

                    <div className="absolute" style={{ width: 540, height: 540, animation: 'spinCW 12s linear infinite' }}>
                        <span className="absolute w-2 h-2 rounded-full bg-[#c5e87a]" style={{ top: -4, left: '50%', transform: 'translateX(-50%)' }} />
                        <span className="absolute w-2 h-2 rounded-full bg-[#c5e87a]" style={{ bottom: -4, left: '50%', transform: 'translateX(-50%)' }} />
                    </div>

                    <div className="absolute rounded-full bg-gray-100" style={{ width: 500, height: 500 }} />

                    <div className="absolute" style={{ width: 500, height: 500, animation: 'spinCW 10s linear infinite' }}>
                        <span className="absolute w-2.5 h-2.5 rounded-full bg-[#c5e87a]" style={{ top: -5, left: '50%', transform: 'translateX(-50%)' }} />
                        <span className="absolute w-2.5 h-2.5 rounded-full bg-[#c5e87a]" style={{ bottom: -5, left: '50%', transform: 'translateX(-50%)' }} />
                    </div>

                    <div className="relative z-10 text-center px-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team!</h2>
                        <p className="text-gray-500 text-base leading-relaxed mb-8">
                            We're always on the lookout for passionate,<br/>
                            creative, and talented individuals to join our<br/>
                            dynamic team.
                        </p>

                        <a href="/careers" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base" style={{ background: '#c5e87a', color: '#1a2e25' }}>
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