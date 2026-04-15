export default function About() {
  const differentiators = [
    { label: 'User-First Approach', color: '#2d6e4a', text: '#fff' },
    { label: 'On-Time Delivery', color: '#4a7c59', text: '#fff', rotate: '-6deg' },
    { label: 'Creative Excellence', color: '#6aaa7a', text: '#fff', rotate: '4deg' },
    { label: 'Human-Centered Design', color: '#e07050', text: '#fff' },
    { label: 'Scalable & Flexible', color: '#6a8ae0', text: '#fff' },
    { label: 'Global Perspective', color: '#2d5a8a', text: '#fff' },
  ]

  return (
    <section className="py-24 px-6 bg-white" >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left side */}
        <div>
          {/* Top row: asterisk + photo */}
          <div className="flex items-start gap-4 mb-8">
            <div className="spin-slow mt-2 flex-shrink-0">
              <svg width="56" height="56" viewBox="0 0 56 56">
                {[0, 45, 90, 135].map((angle, i) => (
                  <line
                    key={i}
                    x1="28" y1="4" x2="28" y2="52"
                    stroke="#4a7c59"
                    strokeWidth="4"
                    strokeLinecap="round"
                    transform={`rotate(${angle} 28 28)`}
                  />
                ))}
              </svg>
            </div>
            {/* Team photo placeholder */}
            <div
              className="rounded-2xl overflow-hidden flex-1"
              style={{ height: '200px', background: 'linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 50%, #81c784 100%)' }}
            >
              <div className="w-full h-full flex items-end justify-center p-4">
                {/* Simplified team illustration */}
                <div className="flex gap-3 items-end ">
                  {[60, 80, 70].map((h, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div
                        className="w-8 h-8 rounded-full"
                        style={{ background: ['#2d6e4a', '#4a7c59', '#6aaa7a'][i] }}
                      />
                      <div
                        className="w-10 rounded-t-lg"
                        style={{ height: h, background: ['#1b4a2e', '#2d6e4a', '#4a7c59'][i], opacity: 0.8 }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* What Makes Us Different card */}
          <div className="bg-white rounded-2xl p-3 border-[0.1px] shadow-sm w-[70%] h-[60vh] flex flex-col justify-between">
            <h3 className="font-semibold text-base mb-5 text-gray-800">What Makes Us Different:</h3>
            <div className="flex flex-wrap gap-2">
              {differentiators.map((item, i) => (
                <span
                  key={i}
                  className="pill text-sm font-medium "
                  style={{
                    background: item.color,
                    color: item.text,
                    transform: item.rotate ? `rotate(${item.rotate})` : 'none',
                    display: 'inline-block',
                  }}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right side */}
        <div>
          {/* About Us label */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="px-4 py-1.5 rounded-full text-sm font-medium border"
              style={{ borderColor: '#c0c0c0', color: '#333' }}
            >
              About Us
            </span>
            <div className="w-3 h-3 rounded-full" style={{ background: '#a8d5a2' }} />
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            We Design Experiences That Transform Ideas Into Lasting Impact
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            At Softro, we're more than just a design agency — we're storytellers, creators, and problem-solvers. Our mission is to craft visually stunning and user-friendly experiences that bring brands to life and connect them with their audience.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            With a blend of creativity, strategy, and technology, we help businesses stand out in the digital world. From branding and UI/UX design to web development and digital experiences, we turn your vision into reality.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 border-black hover:bg-black hover:text-white transition-all duration-200"
          >
            Explore More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
