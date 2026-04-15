const services = [
  {
    title: 'Brand Identity Design',
    desc: 'We craft distinctive brand identities that resonate with your audience and stand the test of time.',
    icon: '✦',
    bg: '#f0f7ff',
  },
  {
    title: 'Graphics & Print Design',
    desc: 'From business cards to billboards, we create print materials that make a lasting impression.',
    icon: '◈',
    bg: '#fff5f0',
  },
  {
    title: 'Motion & Animation',
    desc: 'Bring your brand to life with dynamic animations and motion graphics that captivate audiences.',
    icon: '⟳',
    bg: '#f0fff4',
  },
  {
    title: 'UI/UX Design',
    desc: 'User-centered design that balances beauty and functionality for seamless digital experiences.',
    icon: '⬡',
    bg: '#fdf0ff',
  },
  {
    title: 'Web & App Design',
    desc: 'Responsive, modern websites and apps that convert visitors into loyal customers.',
    icon: '◻',
    bg: '#fffff0',
  },
  {
    title: 'Motion & Brand',
    desc: 'Cohesive brand motion systems that keep your visual identity consistent and memorable.',
    icon: '△',
    bg: '#fff0f5',
  },
]

export default function Services() {
  return (
    <section className="py-24 px-6 mb-24 bg-[#EFF6FF] mt-5 rounded-[16px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Services</span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Creative Services
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors">
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{ background: svc.bg }}
            >
              <div className="text-3xl mb-4" style={{ color: 'var(--green-dark)' }}>{svc.icon}</div>
              <h3 className="font-bold text-lg mb-2">{svc.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{svc.desc}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: 'var(--green-dark)' }}
              >
                View More
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
