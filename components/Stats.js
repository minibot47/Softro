const stats = [
  { label: 'E-Commerce Website', metric1: '+48%', m1label: 'Traffic', metric2: '+70%', m2label: 'Revenue', bg: '#e8f5e9', img: '#2d6e4a' },
  { label: 'Branding & Identity', metric1: '+2M', m1label: 'Reach', metric2: '84%', m2label: 'Retention', bg: '#e3f2fd', img: '#1565c0' },
  { label: 'Sculpture Website', metric1: '+36%', m1label: 'Sessions', metric2: '40%', m2label: 'Bounce Drop', bg: '#fff3e0', img: '#e65100' },
]

export default function Stats() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Quick Stats</span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Work in Action
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black">
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
              <div
                className="w-full h-44 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${s.img}22, ${s.img}44)` }}
              >
                <div className="w-20 h-20 rounded-2xl opacity-70" style={{ background: s.img }} />
              </div>

              {/* Stats */}
              <div className="p-6">
                <h3 className="font-bold text-base mb-4">{s.label}</h3>
                <div className="flex gap-6">
                  <div>
                    <p className="text-2xl font-black" style={{ color: s.img }}>{s.metric1}</p>
                    <p className="text-xs text-gray-500">{s.m1label}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black" style={{ color: s.img }}>{s.metric2}</p>
                    <p className="text-xs text-gray-500">{s.m2label}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div
          className="mt-10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ background: 'var(--green-dark)' }}
        >
          <div>
            <h3 className="text-white font-bold text-xl mb-1">You're in Great Company</h3>
            <p className="text-green-200 text-sm">Join 20k+ businesses that trust Softro to grow their brand.</p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 px-7 py-3 rounded-xl font-semibold text-sm"
            style={{ background: 'var(--green-lime)', color: 'var(--green-dark)' }}
          >
            Start Your Project →
          </a>
        </div>
      </div>
    </section>
  )
}
