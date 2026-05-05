'use client'

import Link from 'next/link'
import StackedPortfolio from './Stackedcards'


export default function Portfolio() {

  return (
    <section className="bg-[#f5f5f4] dark:bg-[#111411] py-16 md:py-20 pb-20 md:pb-32 rounded-[24px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10 md:mb-14 px-4 sm:px-10 md:px-20">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-5 w-full md:w-[55%]">
            <span className="text-base font-normal text-black dark:text-white border border-green-500 dark:border-green-700 px-2 py-0.5 rounded-full shrink-0 w-fit">Portfolio</span>
            <div className="flex flex-col gap-4 sm:gap-5 min-w-0">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-medium text-black dark:text-white"
              >
                Glimpse into Our Work
              </h2>
              <p className="text-gray-500 dark:text-gray-300 text-base sm:text-lg">Transforming ideas into memorable digital <br className="hidden sm:block"/>experiences.</p>
            </div>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors shrink-0">
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>   

      {/* STACK CONTAINER */}
      <StackedPortfolio/>

      {/* CTA */}
      <div className="mt-10 md:mt-14 w-full max-w-xl md:max-w-none md:w-[50%] mx-auto flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 px-4 sm:px-6 py-3 rounded-[16px] border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-[#1b1f1b] shadow-sm">
        <h2 className="text-black dark:text-white text-center sm:text-left text-lg sm:text-xl md:text-2xl">Don't hesitate to Collaborate with Us</h2>

        <Link
          href="#"
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-[10px] bg-[#C8F8A9] dark:text-black shrink-0"
        >
          Contact us
          <img src='/images/arrow.svg' alt='icon' className='w-7 h-7'/>
        </Link>
      </div>
    </section>
  )
}