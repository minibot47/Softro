const steps = [
  {
    number: '01',
    title: 'Discover & Define',
    desc: 'We begin by understanding your goals, target audience, and business challenges through research and discovery.',
    color: '#e8f5e9',
    accent: '#2d6e4a',
  },
  {
    number: '02',
    title: 'Launch & Analyze',
    desc: 'We deploy your project and monitor performance, collecting data and user feedback for continuous improvement.',
    color: '#e3f2fd',
    accent: '#1565c0',
  },
  {
    number: '03',
    title: 'Design & Develop',
    desc: 'Our creative team brings your vision to life with stunning designs and robust development that exceeds expectations.',
    color: '#fce4ec',
    accent: '#c62828',
  },
]

export default function Process() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Process</span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Creative Process
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm">
            A streamlined approach that ensures every project is delivered on time and beyond expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
              style={{ background: step.color }}
            >
              <div
                className="text-7xl font-black opacity-10 absolute -top-2 -right-2 leading-none"
                style={{ fontFamily: 'var(--font-display)', color: step.accent }}
              >
                {step.number}
              </div>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold mb-5"
                style={{ background: step.accent }}
              >
                {step.number}
              </div>
              <h3 className="font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
