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
    <section className="py-24 px-5 mt-20 mb-20 bg-white dark:bg-none dark:bg-[#151a16] bg-contain bg-top  dark:border-gray-700">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-28 px-10">
          <div className="flex items-start  gap-[113px] w-[60%] ">
              <span className="text-base font-normal text-black border border-green-500 dark:border-green-700 px-2 py-0.5 rounded-full">Process</span>
              <div className="flex flex-col gap-5">
                <h2
                  className="text-4xl md:text-5xl font-medium text-black"
                >
                  Our Creative<br/> Process
                </h2>
              </div>
          </div>

          <div className="flex flex-col justify-center items-end gap-3">
            <h2 className="text-black text-xl">How we craft innovative solutions step by step</h2>
            <a
            href="#"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-black dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
           Lets work Together
          </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center gap-2 mt-20  max-w-[1440px] m-auto px-5">

          {/* Card 1 */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            style={{ background: steps[0].color, width: '300px', height: '295px', flexShrink: 0 }}
          >
            <Image src={steps[0].border} alt="" width={100} height={80} className="absolute -top-2 -right-2"/>
            <div className="w-fit px-4 py-1 rounded-full text-sm bg-white text-black mb-5">STEP : {steps[0].number}</div>
            <h3 className="font-medium text-xl mb-3 text-black w-[70%]">{steps[0].title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{steps[0].desc}</p>
          </div>

          {/* Connector 1 */}
          <div style={{ width: '150px', height: '124px', flexShrink: 0 }}>
            <img src="/images/creativeprocess1.svg" alt="connector" className="w-full h-full mt-5"/>
          </div>

          {/* Card 2 — middle */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 -mt-20 flex flex-col justify-between"
            style={{ background: steps[1].color, width: '300px', height: '295px', flexShrink: 0 }}
          >
            <Image src={steps[1].border} alt="" width={100} height={80} className="absolute -top-2 -right-2"/>
            <div className="w-fit px-4 py-1 rounded-full text-sm bg-white text-black mb-5">STEP : {steps[1].number}</div>
            <h3 className="font-medium text-xl mb-3 text-black w-[70%]">{steps[1].title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{steps[1].desc}</p>
          </div>

          {/* Connector 2 */}
          <div style={{ width: '150px', height: '124px', flexShrink: 0 }}>
            <img src="/images/creativeprocess2.svg" alt="connector" className="w-full h-full mt-5"/>
          </div>

          {/* Card 3 */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            style={{ background: steps[2].color, width: '300px', height: '295px', flexShrink: 0 }}
          >
            <Image src={steps[2].border} alt="" width={100} height={80} className="absolute -top-2 -right-2"/>
            <div className="w-fit px-4 py-1 rounded-full text-sm bg-white text-black mb-5">STEP : {steps[2].number}</div>
            <h3 className="font-medium text-xl mb-3 text-black w-[70%]">{steps[2].title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{steps[2].desc}</p>
          </div>

        </div>
      </div>
    </section>
  )
}
