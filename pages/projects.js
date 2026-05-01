'use client'
import { useEffect, useState, useRef } from 'react'
import Navbar from "../components/Navbar"
import Footer2 from "../components/Footer2"

// ─── Add as many projects as you want here ───────────────────
const projects = [
  {
    title: 'AI Task Automation Platform',
    slides: [
      {
        image: '/images/portfolio-details-slider-img.png',
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
      '/images/portfolio-details-img.png',
      '/images/portfolio-details-img2.png',
    ],
    challenge: 'The client needed an intelligent platform to reduce manual workload and streamline repetitive business processes such as data entry, report generation, and customer query handling.',
    solution: 'We built a scalable AI-powered task automation platform that integrates with multiple tools (CRM, ERP apps) and automates repetitive workflows with predictive analytics and smart triggers.',
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
  {
    title: 'E-Commerce Redesign',
    slides: [
      {
        image: '/images/portfolio-details-slider-img3.png',
        industry: 'Retail & E-Commerce',
        duration: '3 Months',
        services: 'Web Design & Dev',
        client: 'Ms. Amara',
      },
    ],
    images: [
      '/images/portfolio-details-img.png',
      '/images/portfolio-details-img2.png',
    ],
    challenge: 'The client had a high cart abandonment rate and a dated mobile experience that was hurting conversions.',
    solution: 'We redesigned the entire shopping flow with a mobile-first approach, streamlined checkout, and integrated a personalised recommendation engine.',
    processSteps: [
      { icon: '🔍', label: 'User Research & Audits' },
      { icon: '🗂️', label: 'Information Architecture' },
      { icon: '🎨', label: 'UI Design & Prototyping' },
      { icon: '💻', label: 'Frontend Development' },
      { icon: '🚀', label: 'QA & Launch' },
    ],
    keyFeatures: [
      { icon: '📱', label: 'Mobile-First Checkout' },
      { icon: '🛒', label: 'Smart Cart Recovery' },
      { icon: '⭐', label: 'Personalised Recommendations' },
      { icon: '📊', label: 'Real-Time Sales Dashboard' },
      { icon: '🔒', label: 'Secure Payment Gateway' },
    ],
    results: [
      { text: 'Cart Abandonment Rate Dropped ', bold: 'By 40%', rest: ' In The First Month' },
      { text: 'Mobile Conversion Rate Increased ', bold: 'By 58%', rest: '' },
      { text: 'Average Order Value Grew ', bold: 'By 22%', rest: ' Thanks To Recommendations' },
      { text: 'Page Load Time Reduced To ', bold: 'Under 1.5s', rest: ' Across All Devices' },
    ],
  },
  // Add more projects following the same shape above...
]

const categories = ['Tech & Tools', 'Design Trends', 'Industry Insights', 'Client Spotlights']

const categorySlides = {
  'Tech & Tools': ['Digital Wallet & Payment System', 'API Integration Best Practices', 'Cloud Infrastructure Guide'],
  'Design Trends': ['Minimal UI in 2025', 'Dark Mode Design Patterns', 'Typography That Converts'],
  'Industry Insights': ['Fintech Market Report', 'AI Adoption in SMEs', 'Remote Work & Productivity'],
  'Client Spotlights': ['How We Scaled Acme Corp', 'Redesigning RetailCo', 'From MVP to Product'],
}

export default function Projects() {
  // ── Which project are we viewing ──
  const [projectIndex, setProjectIndex] = useState(0)

  // ── Hero image slider ──
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  // ── Bottom category slider ──
  const [activeCategory, setActiveCategory] = useState('Tech & Tools')
  const [slideIndex, setSlideIndex] = useState(0)

  const project = projects[projectIndex]

  // Reset hero slider when project changes
  useEffect(() => {
    setCurrent(0)
  }, [projectIndex])

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % project.slides.length)
    }, 5000)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [projectIndex])

  const goTo = (index) => setCurrent((index + project.slides.length) % project.slides.length)
  const prev1 = () => { goTo(current - 1); startTimer() }
  const next1 = () => { goTo(current + 1); startTimer() }

  // Clamp to avoid undefined when switching to a project with fewer slides
  const safeIndex = Math.min(current, project.slides.length - 1)
  const slide1 = project.slides[safeIndex]

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
          <span>{project.title}</span>
        </div>
        <h2 className="text-6xl">Explore Our Work Across<br /> Industries and Mediums</h2>
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
              Where imagination meets execution, and <br /> concepts turn into powerful experiences.
            </p>
          </li>
        </ul>
      </div>

      {/* IMAGE SECTION */}
      <div className="relative w-[98%] m-auto rounded-[12px] h-[622px] mt-10 overflow-hidden">
        {project.slides.map((s, i) => (
          <img
            key={i}
            src={s.image}
            alt="portfolio"
            className="absolute inset-0 w-full h-full object-cover rounded-[12px] transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}
        <button onClick={prev1} className="absolute left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border-[0.1px] border-white hover:bg-white flex items-center justify-center shadow transition-all duration-200">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button onClick={next1} className="absolute right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border-[0.1px] border-white hover:bg-white flex items-center justify-center shadow transition-all duration-200">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
        </button>
        <div className="absolute bottom-0 right-[5%] gap-5 w-[346px] h-fit rounded-t-[12px] bg-white text-black p-8 flex flex-col z-10 transition-all duration-500">
          {[['Industry', slide1.industry], ['Duration', slide1.duration], ['Services', slide1.services], ['Client', slide1.client]].map(([label, value]) => (
            <div key={label} className="flex text-base w-full">
              <h2 className="text-gray-600 w-[40%]">{label}</h2>
              <h2 className="w-[60%]">{value}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* About the project */}
      <div className="w-full max-w-[1440px] mx-auto px-20 py-16 flex flex-col gap-12">
        <h2 className="text-4xl font-bold text-gray-900">About the Project</h2>
        <div className="grid grid-cols-2 gap-x-20 gap-y-14">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-gray-900">Challenge:</h3>
            <p className="text-gray-500 text-base leading-relaxed">{project.challenge}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-gray-900">Our Solution:</h3>
            <p className="text-gray-500 text-base leading-relaxed">{project.solution}</p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold text-gray-900">Design & Development Process:</h3>
            <ul className="flex flex-col gap-4">
              {project.processSteps.map((s, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="text-2xl w-8 flex-shrink-0">{s.icon}</span>
                  <span className="text-base text-gray-700">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold text-gray-900">Key Features We Designed:</h3>
            <ul className="flex flex-col gap-4">
              {project.keyFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="text-2xl w-8 flex-shrink-0">{f.icon}</span>
                  <span className="text-base text-gray-700">{f.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="w-full flex px-20 h-[510px] mt-5 gap-8 m-auto">
        <img src={project.images[0]} alt="project" className="w-1/2 h-full rounded-[12px]" />
        <img src={project.images[1]} alt="project" className="w-1/2 h-full rounded-[12px]" />
      </div>

      {/* Results */}
      <div className="w-full max-w-[1440px] mx-auto px-20 py-16 flex flex-col gap-12 mb-5">
        <div className="flex items-center gap-16">
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Results & Impact</h2>
            <ul className="flex flex-col gap-6">
              {project.results.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 text-lg leading-relaxed">
                  <span className="mt-2 w-2 h-2 rounded-full bg-black flex-shrink-0" />
                  <span>
                    {r.text}
                    <strong className="text-gray-900">{r.bold}</strong> <br />
                    {r.rest}
                    {r.bold2 && <strong className="text-gray-900">{r.bold2}</strong>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[480px] flex-shrink-0 rounded-3xl flex flex-col items-center justify-center gap-8 py-20 px-12 text-center" style={{ background: '#0d2b22' }}>
            <h3 className="text-3xl font-bold text-white leading-snug">
              Partnerships That Grow<br />Stronger After Every<br />Project
            </h3>
            <a href="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-semibold text-base transition-opacity hover:opacity-90" style={{ background: '#c5e87a', color: '#0d2b22' }}>
              Let's Start a Project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Project navigation + category slider */}
      <div className="w-full max-w-[1440px] mx-auto px-20 py-10 flex flex-col gap-6 mb-10">

        {/* Category tabs */}
        <div className="flex justify-center gap-3">
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