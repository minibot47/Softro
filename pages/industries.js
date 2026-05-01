'use client'
import { useEffect, useState, useRef } from 'react'
import Navbar from "../components/Navbar"
import Footer2 from "../components/Footer2"

const projects = [
  {
    title: 'Financial Services & Fintech',
    slides: [
      {
        image: '/images/industries-thumb-img.png',
        industry: 'Technology and SaaS',
        duration: '6 Months',
        services: 'UI/UX Design',
        client: 'Mr. Daniel',
      },
      {
        image: '/images/portfolio-details-slider-img2.png',
        industry: 'Fintech',
        duration: '4 Months',
        services: 'Product Development',
        client: 'Ms. Sarah',
      },
    ],
    images: [
      '/images/industries-details-img.png',
      '/images/industries-details-img2.png',
      '/images/industries-details-img3.png',
    ],
    challenge: 'The construction and manufacturing industries are transitioning into the digital age, where online visibility and client engagement play a critical role in growth. Digital strategies in this space focus on showcasing capabilities, building credibility, and generating high-value leads.',
    solution: 'Construction and manufacturing companies also benefit from digital platforms to streamline oparations, share project portfolios, and engage with partners and clients effectively.',
    processSteps: [
      { icon: '⚙️', label: 'Discovery & Research' },
      { icon: '🗂️', label: 'Wireframes & Prototyping' },
      { icon: '🤖', label: 'AI Model Training' },
      { icon: '🎨', label: 'UI Design' },
      { icon: '🚀', label: 'Testing & Deployment' },
    ],
    keyFeatures: [
      { icon: '☰', label: 'Smart Workflow Builder' },
      { icon: '🤖', label: 'AI-Powered Predictions' },
      { icon: '⚙️', label: 'Cross-Platform Integrations' },
      { icon: '🌐', label: 'Real-Time Monitoring' },
      { icon: '⚠️', label: 'Error Handling & Alerts' },
    ],
    results: [
      { text: 'Reduced Manual Workload ', bold: 'By 65%', rest: ' Within The First ', bold2: '3 Months' },
      { text: 'Increased Task Accuracy ', bold: 'To 98%', rest: ' With AI-Powered Predictions' },
      { text: 'Integrated ', bold: 'With 15+', rest: ' Third-Party Tools For Seamless Workflows' },
      { text: 'Empowered Employees To Focus On ', bold: 'Higher-Value', rest: ' Strategic Tasks' },
    ],
  },
]

const categories = ['Tech & Tools', 'Design Trends', 'Industry Insights', 'Client Spotlights']

const categorySlides = {
  'Tech & Tools': ['Digital Wallet & Payment System', 'API Integration Best Practices', 'Cloud Infrastructure Guide'],
  'Design Trends': ['Minimal UI in 2025', 'Dark Mode Design Patterns', 'Typography That Converts'],
  'Industry Insights': ['Fintech Market Report', 'AI Adoption in SMEs', 'Remote Work & Productivity'],
  'Client Spotlights': ['How We Scaled Acme Corp', 'Redesigning RetailCo', 'From MVP to Product'],
}

export default function Industries() {
  // ── Which project are we viewing ──
  const [projectIndex, setProjectIndex] = useState(0)


  // ── Bottom category slider ──
  const [activeCategory, setActiveCategory] = useState('Tech & Tools')
  const [slideIndex, setSlideIndex] = useState(0)

  const project = projects[projectIndex]




  const goTo = (index) => setCurrent((index + project.slides.length) % project.slides.length)
  const prev1 = () => { goTo(current - 1); startTimer() }
  const next1 = () => { goTo(current + 1); startTimer() }


  // ── Project navigation ──
  const prevProject = () => { setProjectIndex((i) => (i - 1 + projects.length) % projects.length); window.scrollTo({ top: 0, behavior: "smooth" }) }
  const nextProject = () => { setProjectIndex((i) => (i + 1) % projects.length); window.scrollTo({ top: 0, behavior: "smooth" }) }

  // ── Category slider ──
  const items = categorySlides[activeCategory]
  const prev = () => setSlideIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setSlideIndex((i) => (i + 1) % items.length)
  const handleCategory = (cat) => { setActiveCategory(cat); setSlideIndex(0) }

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <div className="flex flex-col px-20 mt-24 py-10 max-w-[1440px] m-auto items-start justify-start">
        <div className="flex items-center gap-3 mb-10 text-base text-gray-700">
          <span>Home</span>
          <div className="flex items-center">
            <svg width="6" height="6" viewBox="0 0 10 10">
                <path d="M5 0L10 5L5 10L0 5Z" className="fill-black dark:fill-white" />
            </svg>
            <div className="w-4 h-[1px] bg-black dark:bg-white"></div>
            <svg width="6" height="6" viewBox="0 0 10 10">
                <path d="M5 0L10 5L5 10L0 5Z" className="fill-black dark:fill-white" />
            </svg>
          </div>
          <span>Industries</span>
        </div>
        <h2 className="text-6xl">Delivering Results Across<br /> Industries We Serve</h2>
        <ul className="space-y-6 text-gray-700 ml-14 px-16 mt-5">
          <li className="flex gap-4">
            <div className="flex flex-col items-center">
                <svg width="6" height="6" viewBox="0 0 10 10">
                    <path d="M5 0L10 5L5 10L0 5Z" className="fill-black dark:fill-white" />
                </svg>
              <div className="w-[1px] flex-1 bg-black dark:bg-white"></div>
              <svg width="6" height="6" viewBox="0 0 10 10">
                <path d="M5 0L10 5L5 10L0 5Z" className="fill-black dark:fill-white" />
                </svg>
            </div>
            <p className="leading-relaxed text-lg">
                We serve diverse industries by blending creativity, <br /> technology, and strategy into powerful solutions.
            </p>
          </li>
        </ul>
      </div>

      {/* IMAGE SECTION */}
      <div className="relative w-[98%] m-auto rounded-[12px] h-[622px] mt-10 overflow-hidden">

          <img
            src='/images/industries-thumb-img.png'
            alt="portfolio"
            className="absolute inset-0 w-full h-full object-cover rounded-[12px] transition-opacity duration-700"
          />

      </div>

      {/* About the project */}
      <div className="w-full max-w-[1440px] mx-auto px-20 py-16 flex flex-col gap-12  my-10">
        <h2 className="text-4xl font-bold text-gray-900">We Focus on Our Hard Work</h2>
        <div className="flex justify-between">
          <div className='flex flex-col gap-5  w-1/2'>
            <div className="flex flex-col gap-4">
                <p className="text-gray-500 text-base leading-relaxed">{project.challenge}</p>
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-gray-500 text-base leading-relaxed">{project.solution}</p>
            </div>
            </div>  
          <div className="flex flex-col gap-5 w-1/2 pl-24">
            <h3 className="text-xl font-bold text-gray-900">Our Speciality of Constructions :</h3>
            <ul className="flex flex-col gap-4">
              {project.processSteps.map((s, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="text-2xl w-8 flex-shrink-0">{s.icon}</span>
                  <span className="text-base text-gray-700">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="flex h-[390px]  mt-5 items-center justify-between gap-7 m-auto mb-20 max-w-[1440px] w-[90%]">
        <img src={project.images[0]} alt="project" className="w-[50%] h-full rounded-[12px]" />
        <img src={project.images[1]} alt="project" className="w-[25%] h-full rounded-[12px]" />
        <img src={project.images[2]} alt="project" className="w-[25%] h-full rounded-[12px]" />
      </div>

        {/* About the project */}
        <div className="w-full max-w-[1440px] mx-auto px-20  flex flex-col gap-5  mb-16">
        <h2 className="text-4xl font-bold text-gray-900">We Focus on Our Hard Work</h2>
        <div className="flex justify-between">
            <div className="flex flex-col gap-4">
                <p className="text-gray-500 text-base leading-relaxed">{project.challenge}</p>
            </div>
        </div>
      </div>


      {/* Project navigation + category slider */}
      <div className="w-full max-w-[1440px] mx-auto px-20 py-10 flex flex-col gap-6 mb-16">

        {/* Category tabs */}
        <div className="flex justify-start gap-3">
          {categories.map((cat) => (
            <button key={cat} onClick={() => handleCategory(cat)}
              className="px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200"
              style={{
                background: activeCategory === cat ? '#e8f5e1' : 'white',
                borderColor: activeCategory === cat ? '#b8dca8' : '#e5e7eb',
                color: activeCategory === cat ? '#1a3a20' : '#6b7280',
              }}>
              {cat}
            </button>
          ))}
        </div>

        <div className="w-full h-px bg-gray-200" />

        {/* Project navigation row — clicking arrows swaps the whole project */}
        <div className="flex items-center justify-between gap-6 py-8">
          <button onClick={prevProject}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 hover:border-gray-500 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>

          <div className="flex-1 text-center flex flex-col gap-1">
            <p className="text-sm text-gray-400">{projectIndex + 1} / {projects.length}</p>
            <h2 className="text-2xl font-medium text-gray-900 leading-snug transition-all duration-300">
              {project.title}
            </h2>
          </div>

          <button onClick={nextProject}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 hover:border-gray-500 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>

        <div className="w-full h-px bg-gray-200" />
      </div>

      <div className="p-3">
        <Footer2 />
      </div>
    </div>
  )
}