'use client'
import { useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Discover & Research',
    desc: "with in-depth consultations to understand your goals, target audience, and current marketing challenges. It's helps us build a strong foundation for your success.",
    active: false,
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    desc: 'Our team conducts market research, competitor analysis, and audience profiling. Based on the insights, we craft a customized digital marketing.',
    active: false,
  },
  {
    number: '03',
    title: 'Execution & Optimization',
    desc: 'Our team implements the strategy across chosen platforms—SEO, ads, content, email, and social media. We continuously optimize campaigns.',
    active: false,
  },
  {
    number: '04',
    title: 'Measure & Scale',
    desc: 'We track results using advanced analytics, provide transparent reports, and scale what works best to accelerate growth.',
    active: false,
  },
]

export default function Process2() {
  const [hoveredStep, setHoveredStep] = useState(null)

  return (
    <section className="py-24 px-16 max-w-[1440px] m-auto">

      {/* Header row */}
      <div className="flex justify-between mb-16 w-[50%] p-2">
        <div className="flex-shrink-0 mt-1">
          <span className="px-4 py-1.5 rounded-full border border-gray-400 text-sm text-gray-700">
            Process
          </span>
        </div>
        <h2 className="text-5xl font-base leading-tight tracking-tight text-gray-900">
          How We Work<br />With You
        </h2>
      </div>

      {/* Body — two columns */}
      <div className="grid grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <div className="flex flex-col gap-10">

          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-1 mt-1 flex-shrink-0">
              <div className="w-px h-4 bg-gray-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              <div className="w-px h-4 bg-gray-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              <div className="w-px h-4 bg-gray-300" />
            </div>
            <p className="text-gray-600 text-base leading-relaxed max-w-sm">
              We believe <strong className="text-gray-900 font-bold">every brand is unique.</strong> That's why our
              process is simple, transparent, and tailored to deliver measurable results.
            </p>
          </div>

          <div className="flex items-center">
            <a
              href="#"
              className="inline-flex items-center px-[18px] py-[13px] rounded-full font-semibold text-sm text-gray-900 transition-all hover:opacity-90 border-black border-[1px]"
              style={{ background: '#ffffff' }}
            >
              Get a Free Consultation
            </a>
            <div className="flex flex-shrink-0 h-[45px] w-[45px] bg-[#ffffff] rounded-full items-center justify-center border-black border-[1px]">
              <img src='/images/arrow.svg' alt='arrow'/>
            </div>
          </div>

          <div className='relative w-full h-[300px]'>
            <img src='/icons/process-progress-gif.gif' alt='globe' className='absolute bottom-5 z-10 w-[150px] h-[150px] right-10'/>
            <img src='/icons/process-img.png' alt='arrow' className='absolute bottom-0 w-full h-full mt-1 -ml-1' />
          </div>
        </div>

        {/* RIGHT — Steps */}
        <div className="relative">
          <div className="flex flex-col gap-0 items-end relative">

            {/* Vertical line */}
            <div className="absolute right-[calc(80%-24px)] top-10 bottom-10 w-px bg-gray-200 z-0" />

            {steps.map((step, i) => {
              const isGreen = step.active || hoveredStep === i
              return (
                <div
                  key={i}
                  className="flex gap-6 relative z-10 w-[80%] cursor-pointer"
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Number bubble */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 border border-black transition-all duration-300"
                    style={{
                      background: isGreen ? '#b8e04a' : '#fff',
                      color: isGreen ? '#1a2e10' : '#555',
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Text */}
                  <div className="pb-10 pt-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{step.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}