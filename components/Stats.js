import Image from "next/image"


const stats = [
  { label: 'E-Commerce Website',client: 'Client: LuxeWear Apparel', metric1: '+45%', m1label: 'Revenue Boost', metric2: '+70%', m2label: 'Months Launch', bg: '#EEEEEE', img: '/images/our-work-img.png' },
  { label: 'Branding & Identity',client: 'Client: NovaTech Startup', metric1: '+2M', m1label: 'Secured funding', metric2: '54%', m2label: 'Brand recall', bg: '#EEEEEE', img: '/images/our-work-img2.png' },
  { label: 'Hospitality Website',client: 'Client: BlueHaven Resort', metric1: '+38%', m1label: 'direct bookings', metric2: '40%', m2label: 'rate reduced', bg: '#EEEEEE', img: '/images/our-work-img3.png' },
]

export default function Stats() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-14 ">
          <div className="flex items-start justify-between gap-5 w-[55%] ">
            <span className="text-base font-normal text-black border border-green-500 px-2 py-0.5 rounded-full">Success Stories</span>
            <div className="flex flex-col gap-5">
              <h2
                className="text-4xl md:text-5xl font-medium"
              >
                Our Work in Action
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1"
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
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />

                {/* glitch layers */}
                <div className="glitch-layer"></div>
                <div className="glitch-layer glitch-layer-2"></div>
              </div>

              {/* Stats */}
              <div className="p-6 flex flex-col gap-3  w-full">
                <h3 className="font-medium text-2xl mb-4">{s.label}</h3>
                <h3 className="font-normal text-xl mb-4">{s.client}</h3>
                <div className="flex gap-6 ">
                  <div className=" border-r  border-gray-400/30 w-1/2 flex flex-col items-start">
                    <p className="text-2xl font-semibold" style={{ color: s.img }}>{s.metric1}</p>
                    <p className="text-lg text-gray-500">{s.m1label}</p>
                  </div>
                  <div className=" border-gray-400/30 w-1/2 flex flex-col items-start pl-10">
                    <p className="text-2xl font-semibold " style={{ color: s.img }}>{s.metric2}</p>
                    <p className="text-lg text-gray-500">{s.m2label}</p>
                  </div>
                </div>

                {/* know more */}
                <a href="#" className="hidden md:flex items-center gap-2 mt-3 text-lg font-medium text-black hover:text-black transition-colors">
                  Read more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* trusted by  */}

        <div className="w-full mt-24 flex flex-col items-center justify-center gap-10">
          <div className="bg-[#b9eee9] rounded-full tet-black px-4 py-1">Trusted By 2,000+ Clients Worldwide</div>
          <div className="overflow-hidden w-full mt-24">
          <div className="flex w-max animate-marquee gap-16 items-center">
            
            {/* First set */}
            <img src="/images/partner-01.png" alt="partner" className="h-10" />
            <img src="/images/partner-02.png" alt="partner" className="h-10" />
            <img src="/images/partner-03.png" alt="partner" className="h-10" />
            <img src="/images/partner-04.png" alt="partner" className="h-10" />
            <img src="/images/partner-05.png" alt="partner" className="h-10" />

            {/* Duplicate set for seamless loop */}
            <img src="/images/partner-01.png" alt="partner" className="h-10" />
            <img src="/images/partner-02.png" alt="partner" className="h-10" />
            <img src="/images/partner-03.png" alt="partner" className="h-10" />
            <img src="/images/partner-04.png" alt="partner" className="h-10" />
            <img src="/images/partner-05.png" alt="partner" className="h-10" />

          </div>
          </div>
        </div>

      </div>
    </section>
  )
}
