const cards = [
    {
      title: 'Marketing Automation',
      desc: 'Automate repetitive marketing tasks, nurture leads, and streamline.',
      bg: '#d4e8c2',
    },
    {
      title: 'Automated Workflow',
      desc: 'Repetitive marketing manage client relationships, track interactions.',
      bg: '#eef0b8',
    },
    {
      title: 'Cost-Effective Solutions',
      desc: 'They are paying for will deliver results without exceeding their budget and plans efficiently.',
      bg: '#f0d4a8',
    },
    {
      title: 'Analytics and Reporting',
      desc: 'Essential components for any marketing agency campaigns and provide valuable insights.',
      bg: '#f5c8c0',
    },
  ]
  
  // Fan/burst SVG decoration for top right of each card
  function FanIcon({ color }) {
    return (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="absolute top-3 right-3 opacity-30">
        {[...Array(8)].map((_, i) => {
          const angle = (i * 20 - 70) * (Math.PI / 180)
          const x2 = 80 + Math.cos(angle) * 60
          const y2 = 10 + Math.sin(angle) * 60
          return (
            <line key={i} x1="80" y1="0" x2={x2} y2={y2} stroke="#555" strokeWidth="0.8"/>
          )
        })}
      </svg>
    )
  }
  
  export default function Solutions() {
    return (
      <section className="py-24 px-16 bg-white max-w-[1440px] m-auto">
  
        {/* Header */}
        <div className="flex gap-[134px] mb-16  ">
          <div className="flex-shrink-0 mt-1">
            <span className="px-4 py-1.5 rounded-full border border-gray-400 text-sm text-gray-700">
              Roadmap
            </span>
          </div>
          <h2 className="text-5xl font-medium leading-tight tracking-tight text-gray-900 max-w-lg">
            Comprehensive Digital Marketing Solutions
          </h2>
        </div>
  
        {/* Cards */}
        <div className="grid grid-cols-4 gap-4 mb-28">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative rounded-[10px] py-[50px] px-8 overflow-hidden flex flex-col items-center justify-start"
              style={{ background: card.bg, minHeight: '302px' }}
            >
                <img
                src="/icons/hover-line.svg"
                alt=""
                className="absolute -top-1 -right-1  w-[87px] h-[87px] "
                />
              <div className=" h-ful flex flex-col  justify-between">
                <h3 className="text-[28px] font-base text-gray-900 mb-6 leading-snug w-full">
                  {card.title}
                </h3>
                <p className="text-[16px] text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Trusted by banner */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gray-200" />
          <span className="relative bg-[#F8FDF4] px-3 py-1.5 rounded-full border-[0.1px] border-gray-400/40 text-BASE font-semibold text-gray-800 z-10">
            Trusted By 2,000+ Clients Worldwide
          </span>
        </div>

        <div className="w-full mt-20 flex flex-col items-center justify-center gap-10">
        <div className="relative overflow-hidden w-full">

            {/* Left fade mask */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, white, transparent)' }}
            />
            {/* Right fade mask */}
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
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
  
      </section>
    )
  }