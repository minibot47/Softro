import Image from "next/image"


const posts = [
  {
    category: 'Design Trends',
    title: 'Top 10 UI Trends That Will Shape Design in 2025',
    date: '11 Septembar, 2026',
    readTime: '5 min read',
    bg: '#1a2a3a',
    accent: '#6a8ae0',
    img:"/images/home4-blog-img.png"
  },
  {
    category: 'Branding',
    title: 'Why Microsoft Rebrand Was the Smartest Move for Their Future',
    date: '14 August, 2026',
    readTime: '7 min read',
    bg: '#2d1a3a',
    accent: '#c86ae0',
    img:"/images/home4-blog-img2.png"
  },
]

export default function Blog() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-14 ">
          <div className="flex items-start justify-between gap-5 w-[55%] ">
            <span className="text-base font-normal text-black border border-green-500 px-3 py-0.2 rounded-full">Article</span>
            <div className="flex flex-col gap-5">
              <h2
                className="text-4xl md:text-5xl font-medium"
              >
                Agency Journal
              </h2>
              <h2 className="text-gray-500 text-lg">A one-liner about what visitors will find latest <br/>design talks</h2>
            </div>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-black transition-colors">
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 min-h-[55vh]">
          {posts.map((post, i) => (
            <article
              key={i}
              className="rounded-2xl flex overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image wrapper */}
              <div className="relative w-1/2 min-h-[250px]">
                <Image
                  src={post.img}
                  alt={post.category}
                  fill
                  className="object-cover"
                />
              </div>
            
              {/* Content */}
              <div className="w-1/2 p-6  flex flex-col items-start justify-center gap-3">
                <span className="text-sm font-thin">
                  {post.category} — {post.date}
                </span>
            
                <h3 className="text-black font-thin text-3xl leading-snug mb-4 group-hover:opacity-80 transition-opacity">
                  {post.title}
                </h3>
            
                <a href="#" className="hidden md:flex items-center gap-2 text-lg font-medium text-black mt-10">
                  Read more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
