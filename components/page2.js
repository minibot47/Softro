'use client'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer2 from '../components/Footer2'
import Image from 'next/image'
import Solutions from './Solutions'
import Process2 from './process2'
import Services2 from './Services2'
import Blog2 from './Blog2'

const images = [
  '/images/banner-img-slide.png',
  '/images/banner-img-slide2.png',
  '/images/banner-img-slide3.png',
]

export default function Page2Content() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Navbar/>
      <section className="min-h-screen pt-24 2xl:px-10 px-3 bg-white dark:bg-[#0f1210]">
        {/* HERO */}
        <div className=" relative w-full grid grid-cols-2 bg-[#EEEEEE] min-h-[80vh] rounded-[24px]">

          {/* LEFT */}
          <div className="flex flex-col justify-center px-16 xl:px-24 py-24 relative items-center">
            <div className='w-full h-fit '>
                <h1 className="text-5xl 2xl:text-8xl font-light leading-tight mb-5 text-gray-900 tracking-tight">
                Strategic<br />
                Marketing{' '}
                <span className="font-bold">for<br />the Digital Age</span>
                </h1>

                <div className="flex items-start gap-3 mb-10 w-full  ">
                <div className="w-px bg-gray-400 mt-1 flex-shrink-0" style={{ height: '48px' }} />
                <p className="text-gray-600 text-lg leading-relaxed">
                    We help <strong className="text-gray-900 font-semibold">businesses</strong> reach the right audience,
                    boost engagement, and skyrocket conversions.
                </p>
                </div>

                <div className="flex items-center justify-between mb-14   ">
                    <div className='flex'>
                        <a
                        href="#"
                        className="inline-flex items-center px-[18px] py-[13px] rounded-full font-semibold text-sm text-gray-900 transition-all hover:opacity-90"
                        style={{ background: '#b8e04a' }}
                    >
                        Get a Free Consultation
                    </a>

                    <div className="flex flex-shrink-0 h-[42px] w-[42px] bg-[#b8e04a] rounded-full items-center justify-center">
                        <img src='/images/arrow.svg' alt='arrow'/>
                    </div>
                    </div>
                    <div className='relative w-[180px] h-[90px] '>
                        <img src='/icons/banner-global-icon.gif ' alt='globe' className='absolute bottom-4 right-1 w-[83px] h-[83px]'/>
                        <img src='/icons/updownarrow.svg' alt='arrow' className='absolute top-0 w-[170px] h-[90px] mt-1 -ml-1' />
                    </div>
                </div>

                <div className="flex items-center justify-between  border-t-[0.1px] border-black/30 ">
                <div className='border-r-[0.1px] border-black/30 w-[40%] py-3'>
                    <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-lg text-gray-500">Review on</span>
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#ff3d2e">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        ))}
                    </div>
                    </div>
                    <div className="flex items-center gap-2">
                    <span className="font-bold text-xl leading-none">Clutch</span>
                    <span className="text-sm text-gray-400">(20 Reviews)</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex -space-x-4">
                        {[
                        { img: "/images/counter-people-img1.png", name: "JD" },
                        { img: "/images/counter-people-img2.png", name: "AM" },
                        { img: "/images/counter-people-img3.png", name: "SK" },
                        ].map((user, i) => (
                        <div
                            key={i}
                            className="relative w-11 h-11 rounded-full border-2 border-white overflow-hidden"
                        >
                            <Image src={user.img} alt={user.name} fill className="object-cover" />
                        </div>
                        ))}
                    </div>
                    <div>
                    <p className="text-sm text-gray-500">we've already</p>
                    <p className="text- font-bold">20k+ <span className="font-normal text-gray-500">active users</span></p>
                    </div>
                </div>
                </div>
            </div>
          </div>

          {/* RIGHT — Carousel */}
          <div className="relative rounded-r-[24px] overflow-hidden">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Slide ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                style={{ opacity: i === currentImage ? 1 : 0 }}
              />
            ))}

            <div
              className="absolute inset-0 -z-10"
              style={{ background: 'linear-gradient(135deg, #1a3a2a 0%, #2d6e4a 40%, #1a4a3a 100%)' }}
            />

            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2 z-10 rounded-r-[24px]">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className="transition-all duration-300 rounded-full "
                  style={{
                    width: i === currentImage ? '20px' : '8px',
                    height: '8px',
                    background: i === currentImage ? '#b8e04a' : 'rgba(255,255,255,0.5)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className="absolute bottom-0 left-[65%] flex items-end z-50" style={{ transform: 'translateX(-80%)' }}>
            <div
                className="rounded-t-2xl px-8 py-6 min-w-[150px]"
                style={{
                height: '150px',
                backgroundImage: 'url(/images/project-completed.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                }}
            >
                <p className="text-xs text-green-300 font-medium mb-4 leading-tight">Business<br/>Growth</p>
                <p className="text-4xl font-bold text-white">2X</p>
            </div>

            <div
                className="rounded-t-2xl -ml-3 px-8 py-6 min-w-[150px]"
                style={{
                height: '180px',
                backgroundImage: 'url(/images/customer-satisfaction.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                }}
            >
                <p className="text-xs text-green-300 font-medium mb-4 leading-tight">Online<br/>Revenue</p>
                <p className="text-4xl font-bold text-white">1.6X</p>
            </div>
          </div>

        </div>

        {/* SOLUTIONS */}
        <Solutions/>

        {/* Process */}
        <Process2/>

        {/* SERVICES */}
        <Services2/>

        {/* BLOG */}
        <Blog2/>
      </section>
      <div className='px-3'>
        <Footer2/>
      </div>
    </>
  )
}