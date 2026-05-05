import Image from "next/image"


const stats = [
  { label: 'E-Commerce Website',client: 'Client: LuxeWear Apparel', metric1: '+45%', m1label: 'Revenue Boost', metric2: '+70%', m2label: 'Months Launch', bg: '#EEEEEE', img: '/images/our-work-img.png' },
  { label: 'Branding & Identity',client: 'Client: NovaTech Startup', metric1: '+2M', m1label: 'Secured funding', metric2: '54%', m2label: 'Brand recall', bg: '#EEEEEE', img: '/images/our-work-img2.png' },
  { label: 'Hospitality Website',client: 'Client: BlueHaven Resort', metric1: '+38%', m1label: 'direct bookings', metric2: '40%', m2label: 'rate reduced', bg: '#EEEEEE', img: '/images/our-work-img3.png' },
]

export default function Stats() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white dark:bg-[#0f1210]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10 md:mb-14">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-5 w-full md:w-[55%]">
            <span className="text-base font-normal text-black dark:text-white border border-green-500 dark:border-green-700 px-2 py-0.5 rounded-full shrink-0 w-fit">Success Stories</span>
            <div className="flex flex-col gap-4 sm:gap-5 min-w-0">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-medium text-black dark:text-white"
              >
                Our Work in Action
              </h2>
              <p className="text-gray-500 dark:text-gray-300 text-base sm:text-lg">A structured approach that keeps creativity flowing <br className="hidden sm:block"/>and projects on track</p>
            </div>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors shrink-0">
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 dark:border dark:border-gray-800"
              style={{ background: s.bg }}
            >
              {/* Image area */}
              <div className="relative group overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.label}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-[260px] sm:h-[320px] md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />

                {/* glitch layers */}
                <div className="glitch-layer"></div>
                <div className="glitch-layer glitch-layer-2"></div>
              </div>

              {/* Stats */}
              <div className="p-6 flex flex-col gap-3  w-full text-black">
                <h3 className="font-medium text-2xl mb-4 dark:text-black">{s.label}</h3>
                <h3 className="font-normal text-xl mb-4 dark:text-black">{s.client}</h3>
                <div className="flex gap-4 sm:gap-6">
                  <div className="border-r border-gray-400/30 w-1/2 flex flex-col items-start pr-2 sm:pr-0">
                    <p className="text-xl sm:text-2xl font-semibold dark:text-black" style={{ color: s.img }}>{s.metric1}</p>
                    <p className="text-sm sm:text-lg text-gray-500 dark:text-black">{s.m1label}</p>
                  </div>
                  <div className="border-gray-400/30 w-1/2 flex flex-col items-start pl-4 sm:pl-8">
                    <p className="text-2xl font-semibold dark:text-black" style={{ color: s.img }}>{s.metric2}</p>
                    <p className="text-lg text-gray-500 dark:text-black">{s.m2label}</p>
                  </div>
                </div>

                {/* know more */}
                <a href="#" className="flex items-center gap-2 mt-3 text-base md:text-lg font-medium text-black hover:text-black transition-colors">
                  Read more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Trusted by banner */}
        <div className="relative flex items-center justify-center mt-24">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gray-200" />
          <span className="relative bg-[#F8FDF4] dark:text-black px-3 py-1.5 rounded-full border-[0.1px] border-gray-400/40 text-BASE font-semibold text-gray-800 z-10">
            Trusted By 2,000+ Clients Worldwide
          </span>
        </div>

        <div className="w-full mt-20 flex flex-col items-center justify-center gap-10">
        <div className="relative overflow-hidden w-full">

            {/* Left fade mask */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, white, transparent)' }}
            />
            {/* Right fade mask */}
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, white, transparent)' }}
            />

            <div className="flex gap-20 items-center w-max"
            style={{
                animation: 'marquee 40s linear infinite',
            }}
            >
            {/* Render 4 full sets for a seamless loop */}
            {[...Array(4)].flatMap((_, setIndex) =>
                [1, 2, 3, 4, 5].map((n) => (
                <img
                    key={`${setIndex}-${n}`}
                    src={`/images/partner-0${n}.png`}
                    alt="partner"
                    className="h-10 flex-shrink-0"
                />
                ))
            )}
            </div>

        </div>
        </div>

      </div>
    </section>
  )
}
