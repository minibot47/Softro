import Image from "next/image"

const services = [
  {
    title: 'Brand Identity Design',
    desc: 'We craft distinctive brand identities that resonate with your audience and stand the test of time.',
    icon: '/icons/serviceicon1.svg',
    bg: '#EEEEEE',
  },
  {
    title: 'Graphics & Print Design',
    desc: 'From business cards to billboards, we create print materials that make a lasting impression.',
    icon: '/icons/serviceicon2.svg',
    bg: '#EEEEEE',
  },
  {
    title: 'Motion & Animation',
    desc: 'Bring your brand to life with dynamic animations and motion graphics that captivate audiences.',
    icon: '/icons/serviceicon3.svg',
    bg: '#EEEEEE',
  },
  {
    title: 'UI/UX Design',
    desc: 'User-centered design that balances beauty and functionality for seamless digital experiences.',
    icon: '/icons/serviceicon4.svg',
    bg: '#EEEEEE',
  },
  {
    title: 'Web & App Design',
    desc: 'Responsive, modern websites and apps that convert visitors into loyal customers.',
    icon: '/icons/serviceicon5.svg',
    bg: '#EEEEEE',
  },
  {
    title: 'Motion & Brand',
    desc: 'Cohesive brand motion systems that keep your visual identity consistent and memorable.',
    icon: '/icons/serviceicon6.svg',
    bg: '#EEEEEE',
  },
]

export default function Services2() {
  return (
    <section className="py-24 px-6 mb-24 bg-[#EEEEEE] dark:bg-[#151a16] mt-5 rounded-[16px]">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-14">
          <div className="flex items-start justify-between gap-5 w-[55%] ">
              <span className="text-base font-normal text-black dark:text-white border border-green-500 dark:border-green-700 px-2 py-0.5 rounded-full">Services</span>
              <div className="flex flex-col gap-5">
                <h2
                  className="text-4xl md:text-5xl font-medium text-black dark:text-white"
                >
                  Our Creative Services
                </h2>
                <h2 className="text-gray-500 dark:text-gray-300 text-lg">Transforming ideas into impactful design solutions tailored for<br/> your brand.</h2>
              </div>
          </div>

          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1440px] ">
        {services.map((svc, i) => {
            const isRightCol = (i % 3) === 2
            const isMiddleCol = (i % 3) === 1
            const isBottomRow = i >= services.length - 3

            return (
                <div
                key={i}
                className="relative px-7 py-14 group cursor-pointer transition-all duration-300 border-[1px] border-black/30 dark:border-gray-800 rounded-[16px]"
                style={{ background: svc.bg }}
                onMouseEnter={e => e.currentTarget.style.background = '#C8F8A9'}
                onMouseLeave={e => e.currentTarget.style.background = svc.bg}
                >
                {/* Icon — top right, gray normally, dark on hover */}
                <div className="flex justify-between items-start">
                    <div />
                    <Image
                    src={svc.icon}
                    alt={svc.title}
                    width={48}
                    height={48}
                    className="w-14 h-14 object-contain opacity-30 group-hover:opacity-80 group-hover:brightness-0 transition-all duration-300"
                    />
                </div>

                {/* Title */}
                <h3 className="font-bold text-2xl mb-5 leading-tight text-black dark:text-white">
                    {svc.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 group-hover:text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-10 transition-colors duration-300">
                    {svc.desc}
                </p>

                {/* View Details pill + arrow */}
                <div className="flex items-center gap-0">
                    <a
                    href="#"
                    className="inline-flex items-center px-5 py-2 rounded-full border border-gray-300 group-hover:border-black/40 text-sm font-medium text-gray-800 dark:text-white hover:bg-black/5 transition-colors"
                    >
                    View Details
                    </a>
                    <div className="w-9 h-9 rounded-full border border-gray-300 group-hover:border-black/40 flex items-center justify-center -ml-px hover:bg-black/5 transition-colors cursor-pointer">
                    <img src="/icons/arrow.svg" alt="icon"/>
                    </div>
                </div>
                </div>
            )
        })}
        </div>

      </div>
    </section>
  )
}