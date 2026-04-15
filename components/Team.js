const team = [
  { name: 'David Chen', role: 'Creative Director', color: '#4a7c59' },
  { name: 'Aidan Curtis', role: 'Lead Developer', color: '#2d5a8a' },
  { name: 'Linda Johnson', role: 'UX Designer', color: '#8a2d5a' },
  { name: 'Daniel Lee', role: 'Brand Strategist', color: '#5a4a2d' },
]

export default function Team() {
  return (
    <section className="py-24 px-6" style={{ background: '#f5faf5' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">People</span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Talented Team
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black">
            Find Us →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Avatar */}
              <div
                className="rounded-2xl w-full aspect-square mb-4 flex items-end justify-center overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(160deg, ${member.color}33 0%, ${member.color}88 100%)`,
                }}
              >
                <div className="flex flex-col items-center pb-4">
                  <div
                    className="w-16 h-16 rounded-full mb-2 flex items-center justify-center text-white text-xl font-bold"
                    style={{ background: member.color }}
                  >
                    {member.name[0]}
                  </div>
                  <div
                    className="w-20 h-20 rounded-t-full"
                    style={{ background: `${member.color}55` }}
                  />
                </div>
              </div>
              <h3 className="font-bold text-base">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
