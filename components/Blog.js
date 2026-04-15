const posts = [
  {
    category: 'Design',
    title: 'Top 10 UI Trends That Will Shape Design in 2025',
    date: 'Dec 12, 2024',
    readTime: '5 min read',
    bg: '#1a2a3a',
    accent: '#6a8ae0',
  },
  {
    category: 'Branding',
    title: 'Why Microsoft Rebrand Was the Smartest Move for Their Future',
    date: 'Nov 28, 2024',
    readTime: '7 min read',
    bg: '#2d1a3a',
    accent: '#c86ae0',
  },
  {
    category: 'Strategy',
    title: 'How to Build a Brand that Connects With Gen Z Audiences',
    date: 'Nov 15, 2024',
    readTime: '6 min read',
    bg: '#1a3a2a',
    accent: '#6ae0a0',
  },
]

export default function Blog() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Journal</span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Agency Journal
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black">
            All Articles →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <article
              key={i}
              className="rounded-2xl overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ background: post.bg }}
            >
              {/* Visual area */}
              <div
                className="h-44 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${post.accent}22, ${post.accent}44)` }}
              >
                <div
                  className="w-16 h-16 rounded-xl"
                  style={{ background: `${post.accent}88` }}
                />
              </div>

              <div className="p-6">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block"
                  style={{ background: `${post.accent}33`, color: post.accent }}
                >
                  {post.category}
                </span>
                <h3 className="text-white font-bold text-base leading-snug mb-4 group-hover:opacity-80 transition-opacity">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
