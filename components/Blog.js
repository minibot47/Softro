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
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white dark:bg-[#0f1210]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10 md:mb-14">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-5 w-full md:w-[55%]">
            <span className="text-base font-normal text-black dark:text-white border border-green-500 dark:border-green-700 px-3 py-0.5 rounded-full shrink-0 w-fit">Article</span>
            <div className="flex flex-col gap-4 sm:gap-5 min-w-0">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-medium text-black dark:text-white"
              >
                Agency Journal
              </h2>
              <p className="text-gray-500 dark:text-gray-300 text-base sm:text-lg">A one-liner about what visitors will find latest <br className="hidden sm:block"/>design talks</p>
            </div>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors shrink-0">
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
              className="rounded-2xl flex flex-col md:flex-row overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-[#f8f8f8] dark:bg-[#151a16] dark:border dark:border-gray-800"
            >
              {/* Image wrapper */}
              <div className="relative w-full md:w-1/2 h-52 sm:h-60 md:min-h-[250px] shrink-0">
                <Image
                  src={post.img}
                  alt={post.category}
                  fill
                  className="object-cover"
                />
              </div>
            
              {/* Content */}
              <div className="w-full md:w-1/2 p-5 sm:p-6 flex flex-col items-start justify-center gap-3">
                <span className="text-sm font-thin text-gray-600 dark:text-gray-300">
                  {post.category} — {post.date}
                </span>
            
                <h3 className="text-black dark:text-white font-thin text-2xl sm:text-3xl leading-snug mb-2 sm:mb-4 group-hover:opacity-80 transition-opacity">
                  {post.title}
                </h3>
            
                <a href="#" className="inline-flex md:flex items-center gap-2 text-base md:text-lg font-medium text-black dark:text-white mt-4 md:mt-10">
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
