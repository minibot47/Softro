const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechVenture',
    text: 'Softro completely transformed our brand identity. Their attention to detail and creative approach exceeded every expectation. The team delivered everything on time and our conversions are up significantly.',
    logo: 'TechVenture',
    stars: 5,
  },
  {
    name: 'James Wilson',
    role: 'Founder, GreenLeaf',
    text: 'Working with Softro was an absolute pleasure. They understood our vision from day one and brought it to life in ways we never imagined. Highly recommend their services to any growing business.',
    logo: 'GreenLeaf',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6" style={{ background: '#f5faf5' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Reviews</span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What Our Clients Say
            </h2>
          </div>
          {/* Rating summary */}
          <div className="hidden md:flex items-center gap-6">
            <div className="text-center">
              <div className="flex gap-0.5 justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#ff3d2e">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-500">4.9 on Clutch</span>
            </div>
            <div className="text-center">
              <div className="flex gap-0.5 justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-500">5.0 on Google</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Logo placeholder */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: i === 0 ? '#2d6e4a' : '#4a7c59' }}
                >
                  {t.logo[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.logo}</p>
                  <div className="flex gap-0.5">
                    {[...Array(t.stars)].map((_, j) => (
                      <svg key={j} width="11" height="11" viewBox="0 0 24 24" fill="#fbbf24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-6">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: 'linear-gradient(135deg, #4a7c59, #2d6e4a)' }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
