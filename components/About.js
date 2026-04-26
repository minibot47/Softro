'use client'

import GravityPills from "./Gravitypills"

export default function About() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-[#0f1210]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <div className="flex items-start justify-end gap-20 mb-8 ">
            <div className="spin-slow mt-2 flex-shrink-0">
              <img src="/images/rolling about us.svg" />
            </div>

            <div className="rounded-[16px] flex-1 h-[200px] max-w-[308px] bg-[url(/images/about-us-img.png)] bg-cover bg-center" />
          </div>

          {/* CARD */}
          <div className="bg-white dark:bg-[#151a16] rounded-2xl p-2 border-[0.1px] border-gray-200 dark:border-gray-800 shadow-sm w-[380px] h-[404px] flex flex-col justify-between overflow-hidden">
            <h3 className="font-normal text-2xl mt-8 mb-5 text-center text-gray-800 dark:text-white">
              What Makes Us Different:
            </h3>

            <GravityPills/>
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