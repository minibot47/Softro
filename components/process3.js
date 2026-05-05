import Image from "next/image"


const steps = [
  {
    number: '01',
    title: 'Discover & Define',
    desc: 'with in-depth consultations to understand your goals, target audience, and current challenges.',
    color: '#E0E3FB',
    accent: '#2d6e4a',
    border: '/images/step1.svg'
  },
  {
    number: '02',
    title: 'Launch & Analyze',
    desc: 'Our team conducts market research, competitor analysis, and audience profiling.',
    color: '#EBDEBF',
    border: '/images/step2.svg'
  },
  {
    number: '03',
    title: 'Design & Develop',
    desc: 'Develop initial wireframes and user flow diagrams.Develop initial wireframes and user flow diagrams.',
    color: '#C9E8B6',
    border: '/images/step3.svg'
  },
]

export default function Process3() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-5 mt-12 md:mt-20 mb-12 md:mb-20 bg-white dark:bg-none dark:bg-[#151a16] bg-contain bg-top  dark:border-gray-700">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16 md:mb-28 px-2 sm:px-6 md:px-10">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 lg:gap-[113px] w-full lg:w-[60%]">
              <span className="text-base font-normal text-black border border-green-500 dark:border-green-700 px-2 py-0.5 rounded-full shrink-0 w-fit">Process</span>
              <div className="flex flex-col gap-4 sm:gap-5 min-w-0">
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-medium text-black"
                >
                  Our Creative<br/> Process
                </h2>
              </div>
          </div>

          <div className="flex flex-col justify-center lg:items-end gap-3 w-full lg:w-auto">
            <p className="text-black text-base sm:text-xl lg:text-right">How we craft innovative solutions step by step</p>
            <a
            href="#"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-black dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
           Lets work Together
          </a>
          </div>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-2 mt-12 lg:mt-20 max-w-[1440px] m-auto px-2 sm:px-5">

          {/* Card 1 */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between w-full max-w-[300px] lg:w-[300px] min-h-[260px] lg:h-[295px] lg:flex-shrink-0"
            style={{ background: steps[0].color }}
          >
            <Image src={steps[0].border} alt="" width={100} height={80} className="absolute -top-2 -right-2"/>
            <div className="w-fit px-4 py-1 rounded-full text-sm bg-white text-black mb-5 dark:text-white">STEP : {steps[0].number}</div>
            <h3 className="font-medium text-xl mb-3 text-black w-[70%] dark:text-black">{steps[0].title}</h3>
            <p className="text-gray-600 text-base leading-relaxed dark:text-black">{steps[0].desc}</p>
          </div>

          {/* Connector 1 */}
          <div className="hidden lg:block" style={{ width: '150px', height: '124px', flexShrink: 0 }}>
            <img src="/images/creativeprocess1.svg" alt="" className="w-full h-full mt-5"/>
          </div>

          {/* Card 2 — middle */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 lg:-mt-20 flex flex-col justify-between w-full max-w-[300px] lg:w-[300px] min-h-[260px] lg:h-[295px] lg:flex-shrink-0"
            style={{ background: steps[1].color }}
          >
            <Image src={steps[1].border} alt="" width={100} height={80} className="absolute -top-2 -right-2"/>
            <div className="w-fit px-4 py-1 rounded-full text-sm bg-white text-black mb-5 dark:text-white">STEP : {steps[1].number}</div>
            <h3 className="font-medium text-xl mb-3 text-black w-[70%] dark:text-black">{steps[1].title}</h3>
            <p className="text-gray-600 text-base leading-relaxed dark:text-black">{steps[1].desc}</p>
          </div>

          {/* Connector 2 */}
          <div className="hidden lg:block" style={{ width: '150px', height: '124px', flexShrink: 0 }}>
            <img src="/images/creativeprocess2.svg" alt="" className="w-full h-full mt-5"/>
          </div>

          {/* Card 3 */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between w-full max-w-[300px] lg:w-[300px] min-h-[260px] lg:h-[295px] lg:flex-shrink-0"
            style={{ background: steps[2].color }}
          >
            <Image src={steps[2].border} alt="" width={100} height={80} className="absolute -top-2 -right-2"/>
            <div className="w-fit px-4 py-1 rounded-full text-sm bg-white text-black mb-5 dark:text-white">STEP : {steps[2].number}</div>
            <h3 className="font-medium text-xl mb-3 text-black w-[70%] dark:text-black">{steps[2].title}</h3>
            <p className="text-gray-600 text-base leading-relaxed dark:text-black">{steps[2].desc}</p>
          </div>

        </div>
      </div>
    </section>
  )
}
