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
    <section className="py-24 px-6 mt-20 mb-20 bg-[url(/images/banner-bg.png)] bg-contain bg-top rounded-[24px] border border-green-500/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-14 ">
          <div className="flex items-start justify-between gap-5 w-[55%] ">
            <span className="text-base font-normal text-black border border-green-500 px-2 py-0.5 rounded-full">Process</span>
            <div className="flex flex-col gap-5">
              <h2
                className="text-4xl md:text-5xl font-medium"
              >
                Our Creative process
              </h2>
              <h2 className="text-gray-500 text-lg">A structured approach that keeps creativity flowing <br/>and projects on track</h2>
            </div>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors">
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 py-20  relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
              style={{ background: step.color }}
            >
                <Image
                  src={step.border}
                  alt={step.number}
                  width={35}
                  height={20}
                  className=" w-[100px] font-black  absolute -top-2 -right-2 leading-none"
                />
              <div
                className="w-fit h-fit px-4 py-1 rounded-full flex items-center justify-center text-sm font-normal mb-5 bg-white text-black"
              >
                step: {step.number}
              </div>
              <h3 className="font-bold w-[30%] text-xl mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
