'use client'

import Link from 'next/link'
import StackedPortfolio from './Stackedcards'


export default function Portfolio() {

  return (
    <section className="bg-[#f5f5f4] dark:bg-[#111411] py-20 pb-32 rounded-[24px]">
        {/* Header */}
        <div className="flex items-start justify-between mb-14 px-20">
          <div className="flex items-start justify-between gap-5 w-[55%] ">
            <span className="text-base font-normal text-black dark:text-white border border-green-500 dark:border-green-700 px-2 py-0.5 rounded-full">Portfolio</span>
            <div className="flex flex-col gap-5">
              <h2
                className="text-4xl md:text-5xl font-medium text-black dark:text-white"
              >
                Glimpse into Our Work
              </h2>
              <h2 className="text-gray-500 dark:text-gray-300 text-lg">Transforming ideas into memorable digital  <br/>experiences.</h2>
            </div>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>   

      {/* STACK CONTAINER */}
      <StackedPortfolio/>

      {/* CTA */}
      <div className="mt-14 w-[50%] m-auto flex justify-between items-center px-6 py-3 rounded-[16px] border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-[#1b1f1b] shadow-sm">
        <h2 className="text-black dark:text-white">Don't hesitate to Collaborate with Us</h2>

        <Link
          href="#"
          className="flex items-center gap-2 px-5 py-3 rounded-[10px] bg-[#C8F8A9]"
        >
          Contact us
          <img src='/images/arrow.svg' alt='icon' className='w-7 h-7'/>
        </Link>
      </div>
    </section>
  )
}