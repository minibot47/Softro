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

export default function Process() {
  return (
    <section className="py-24 px-6 mt-20 mb-20 bg-[url(/images/banner-bg.png)] dark:bg-none dark:bg-[#151a16] bg-contain bg-top rounded-[24px] border border-green-500/30 dark:border-gray-700">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-14 ">
          <div className="flex items-start justify-between gap-5 w-[55%] ">
            <span className="text-base font-normal text-black dark:text-white border border-green-500 dark:border-green-700 px-2 py-0.5 rounded-full">Process</span>
            <div className="flex flex-col gap-5">
              <h2
                className="text-4xl md:text-5xl font-medium text-black dark:text-white"
              >
                Our Creative process
              </h2>
              <h2 className="text-gray-500 dark:text-gray-300 text-lg">A structured approach that keeps creativity flowing <br/>and projects on track</h2>
            </div>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>

        <div className="relative flex items-center justify-center gap-2 mt-32">

        {/* Card 1 */}
        <div
          className="rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
          style={{ background: steps[0].color, width: '300px', height: '295px', flexShrink: 0 }}
        >
          <Image src={steps[0].border} alt="" width={100} height={80} className="absolute -top-2 -right-2"/>
          <div className="w-fit px-4 py-1 rounded-full text-sm bg-white text-black mb-5">STEP : {steps[0].number}</div>
          <h3 className="font-bold text-xl mb-3 text-black">{steps[0].title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{steps[0].desc}</p>
        </div>

        {/* Connector 1 */}
        <div style={{ width: '181px', height: '124px', flexShrink: 0 }}>
          <img src="/images/creativeprocess1.svg" alt="connector" className="w-full h-full mt-5"/>
        </div>

        {/* Card 2 — middle */}
        <div
          className="rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 -mt-20"
          style={{ background: steps[1].color, width: '300px', height: '295px', flexShrink: 0 }}
        >
          <Image src={steps[1].border} alt="" width={100} height={80} className="absolute -top-2 -right-2"/>
          <div className="w-fit px-4 py-1 rounded-full text-sm bg-white text-black mb-5">STEP : {steps[1].number}</div>
          <h3 className="font-bold text-xl mb-3 text-black">{steps[1].title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{steps[1].desc}</p>
        </div>

        {/* Connector 2 */}
        <div style={{ width: '181px', height: '124px', flexShrink: 0 }}>
          <img src="/images/creativeprocess2.svg" alt="connector" className="w-full h-full mt-5"/>
        </div>

        {/* Card 3 */}
        <div
          className="rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
          style={{ background: steps[2].color, width: '300px', height: '295px', flexShrink: 0 }}
        >
          <Image src={steps[2].border} alt="" width={100} height={80} className="absolute -top-2 -right-2"/>
          <div className="w-fit px-4 py-1 rounded-full text-sm bg-white text-black mb-5">STEP : {steps[2].number}</div>
          <h3 className="font-bold text-xl mb-3 text-black">{steps[2].title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{steps[2].desc}</p>
        </div>

        </div>
      </div>
    </section>
  )
}
