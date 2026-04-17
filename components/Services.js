import Image from "next/image"

const services = [
  {
    title: 'Brand Identity Design',
    desc: 'We craft distinctive brand identities that resonate with your audience and stand the test of time.',
    icon: '/images/creative.svg',
    bg: '#EFF6FF',
  },
  {
    title: 'Graphics & Print Design',
    desc: 'From business cards to billboards, we create print materials that make a lasting impression.',
    icon: '/images/creative1.svg',
    bg: '#EFF6FF',
  },
  {
    title: 'Motion & Animation',
    desc: 'Bring your brand to life with dynamic animations and motion graphics that captivate audiences.',
    icon: '/images/creative2.svg',
    bg: '#EFF6FF',
  },
  {
    title: 'UI/UX Design',
    desc: 'User-centered design that balances beauty and functionality for seamless digital experiences.',
    icon: '/images/creative3.svg',
    bg: '#EFF6FF',
  },
  {
    title: 'Web & App Design',
    desc: 'Responsive, modern websites and apps that convert visitors into loyal customers.',
    icon: '/images/creative4.svg',
    bg: '#EFF6FF',
  },
  {
    title: 'Motion & Brand',
    desc: 'Cohesive brand motion systems that keep your visual identity consistent and memorable.',
    icon: '/images/creative5.svg',
    bg: '#EFF6FF',
  },
]

export default function Services() {
  return (
    <section className="py-24 px-6 mb-24 bg-[#EFF6FF] mt-5 rounded-[16px]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-14">
          <div className="flex items-start justify-between gap-5 w-[55%] ">
              <span className="text-base font-normal text-black border border-green-500 px-2 py-0.5 rounded-full">Services</span>
              <div className="flex flex-col gap-5">
                <h2
                  className="text-4xl md:text-5xl font-medium"
                >
                  Our Creative Services
                </h2>
                <h2 className="text-gray-500 text-lg">Transforming ideas into impactful design solutions tailored for<br/> your brand.</h2>
              </div>
          </div>

          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {services.map((svc, i) => {
            const isMiddleCol = (i % 3) !== 0 // not first column
            const isTopRow = i < 3

            return (
              <div
                key={i}
                className={`
                  p-7 group cursor-pointer transition-all duration-300
                  hover:-translate-y-1 hover:shadow-md
                  ${isMiddleCol ? 'lg:border-l' : ''}
                  ${isTopRow ? '' : 'lg:border-t'}
                  border-gray-400/30
                `}
                style={{ background: svc.bg }}
              >
                <div className="flex gap-6 items-start">
                  <Image
                    src={svc.icon}
                    alt={svc.title}
                    width={40}
                    height={40}
                    className="w-[40px] h-[40px] object-contain"
                  />

                  <div>
                    <h3 className="font-semibold text-xl mb-2 leading-tight">
                      {svc.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {svc.desc}
                    </p>

                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold"
                      style={{ color: 'var(--green-dark)' }}
                    >
                      View Details
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </a>
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