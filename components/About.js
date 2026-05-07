'use client'

import GravityPills from "./Gravitypills"

export default function About() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white dark:bg-[#0f1210]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="w-full max-w-lg mx-auto lg:max-w-none lg:mx-0">
          <div className="flex flex-col sm:flex-row items-start sm:justify-end gap-6 sm:gap-12 lg:gap-20 mb-8">
            <div className="spin-slow mt-2 flex-shrink-0 mx-auto sm:mx-0">
              <img src="/images/rolling about us.svg" alt="" className="max-w-[120px] sm:max-w-none" />
            </div>

            <div className="rounded-[16px] w-full sm:flex-1 h-[180px] sm:h-[200px] max-w-full sm:max-w-[308px] bg-[url(/images/about-us-img.png)] bg-cover bg-center mx-auto sm:mx-0" />
          </div>

          {/* CARD */}
          <div className="bg-white relative dark:bg-[#151a16] rounded-2xl  border-[0.1px] border-gray-200 dark:border-gray-800 shadow-sm w-full max-w-[380px] min-h-[320px] sm:h-[404px] mx-auto sm:mx-0 flex flex-col justify-between overflow-hidden">
            <h3 className="font-normal absolute top-0 left-[10%] text-2xl mt-8 mb-5 text-center text-gray-800 dark:text-white">
              What Makes Us Different:
            </h3>
            <div className="h-full p-1">
              <GravityPills/>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="h-full">
          <h2 className="mb-3 rounded-full px-2 py-0.5 border-[0.1px] border-green-400 w-fit">
            About us
          </h2>

          <h2 className="text-4xl md:text-5xl font-thin mb-6 text-black dark:text-white">
            We Design Experiences That Transform Ideas Into Lasting Impact
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
            At Softro, we’re more than just a design agency—we’re storytellers, creators, and problem-solvers. Our mission is to craft visually stunning and user-friendly experiences that bring brands to life and connect them with their audience.
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            With a blend of creativity, strategy, and technology, we help businesses stand out in the digital world. From branding and UI/UX design to web development and digital experiences, we turn your vision into reality.
          </p>
          
          <a
            href="/"
            className="gap-1 border-[0.1px] border-black px-3 py-3 flex rounded-[10px] w-fit items-center justify-center"
          >
            Explore more
            <img src="/icons/arrow.svg" className="w-5 h-5"/>
          </a>
        </div>

      </div>
    </section>
  )
}