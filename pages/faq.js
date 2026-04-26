'use client'
import Navbar from "../components/Navbar"
import Footer2 from "../components/Footer2"
import { useState } from 'react'
 
const faqData = {
  'General': [
    {
      q: 'What services does your agency provide?',
      a: 'We specialize in design, development, and marketing solutions tailored to help businesses grow and stand out.',
    },
    {
      q: 'Do you work with startups as well as established businesses?',
      a: 'Absolutely. We work with companies at every stage — from early-stage startups finding their footing to established enterprises looking to modernize.',
    },
    {
      q: 'How do you usually start a new project?',
      a: 'We begin with a discovery call to understand your goals, then move into research, strategy, and a clear project roadmap before any design or development begins.',
    },
    {
      q: 'What is your typical project timeline?',
      a: 'Timelines vary by scope. A branding project might take 3–4 weeks, while a full web build can range from 6–12 weeks. We will give you a detailed timeline in our proposal.',
    },
    {
      q: 'How do you structure your pricing?',
      a: 'We offer both fixed-price project quotes and retainer-based engagements depending on what fits your needs best.',
    },
    {
      q: 'How involved do we need to be during the process?',
      a: 'We keep you involved at key decision points without overwhelming you. Most clients spend 1–2 hours per week on reviews and feedback.',
    },
    {
      q: 'Do you work with clients internationally?',
      a: 'Yes — we work with clients across the globe. Our team is remote-friendly and experienced with async collaboration across time zones.',
    },
    {
      q: 'Do you provide ongoing support after project delivery?',
      a: 'We offer post-launch support packages and are always available for follow-up work as your business evolves.',
    },
    {
      q: 'How can we get started with your agency?',
      a: 'Just reach out via our contact page or click "Say Hi" in the nav. We will schedule a free intro call to see if we are a good fit.',
    },
  ],
  'Services': [
    {
      q: 'What design services do you offer?',
      a: 'We offer brand identity, UI/UX design, web design, product design, and motion graphics.',
    },
    {
      q: 'Do you build mobile apps?',
      a: 'Yes, we build native iOS and Android apps as well as cross-platform solutions using React Native and Flutter.',
    },
    {
      q: 'Can you handle both design and development?',
      a: 'Yes — we are a full-service studio. You dont need to coordinate between a separate design agency and dev shop.',
    },
    {
      q: 'Do you offer SEO or digital marketing?',
      a: 'We offer on-page SEO, content strategy, and can connect you with trusted marketing partners for paid campaigns.',
    },
    {
      q: 'Can you redesign an existing website?',
      a: 'Absolutely. Redesigns are one of our most common engagements. We audit your current site first, then craft a strategy.',
    },
    {
      q: 'Do you work with specific industries?',
      a: 'We have deep experience in fintech, healthcare, edtech, ecommerce, and SaaS, though we work across many verticals.',
    },
  ],
  'Pricing & Timeline': [
    {
      q: 'How much does a typical project cost?',
      a: 'Projects range from $5,000 for smaller engagements to $100,000+ for complex builds. We provide detailed quotes after scoping.',
    },
    {
      q: 'Do you require a deposit?',
      a: 'Yes, we require a 50% deposit to kick off any project, with the remainder due upon delivery.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept bank transfers, credit cards, and major payment platforms. Invoices are issued at each milestone.',
    },
    {
      q: 'Can we adjust the scope mid-project?',
      a: 'Scope changes are handled through a formal change order process so there are no surprise costs.',
    },
    {
      q: 'Do you offer payment plans?',
      a: 'For larger projects, we can structure milestone-based payment plans that align with deliverable sign-offs.',
    },
  ],
  'Success Stories': [
    {
      q: 'Can I see examples of your past work?',
      a: 'Yes — visit our Work page for case studies across branding, web design, and product development.',
    },
    {
      q: 'Do you have client testimonials?',
      a: 'We have testimonials from over 50 clients. You can find them on our homepage and case study pages.',
    },
    {
      q: 'Have you worked with funded startups?',
      a: 'Yes, we have worked with seed to Series B startups across fintech, healthtech, and consumer apps.',
    },
    {
      q: 'Can I speak with a past client as a reference?',
      a: 'We can arrange reference calls with select past clients upon request during the proposal stage.',
    },
  ],
  'Process systems': [
    {
      q: 'What project management tools do you use?',
      a: 'We primarily use Notion and Linear for task tracking, and Figma for design handoff.',
    },
    {
      q: 'How do you handle feedback and revisions?',
      a: 'We use structured review rounds with clear deadlines. Feedback is collected via Figma comments or shared documents.',
    },
    {
      q: 'What does your design process look like?',
      a: 'Discovery → Research → Wireframes → Visual Design → Prototype → Handoff. Each stage has a review point.',
    },
    {
      q: 'How do you ensure quality?',
      a: 'Every deliverable goes through internal QA before client review. We also run usability checks on all interactive prototypes.',
    },
    {
      q: 'Do you use agile methodology?',
      a: 'We use a hybrid approach — structured sprints for development, with flexible creative phases for design.',
    },
  ],
  'Sectors We Work In': [
    {
      q: 'Do you work in the healthcare sector?',
      a: 'Yes — we have designed HIPAA-compliant patient portals, medical dashboards, and telehealth platforms.',
    },
    {
      q: 'Have you built fintech products?',
      a: 'We have extensive experience with trading platforms, digital wallets, and lending products.',
    },
    {
      q: 'Do you work with educational platforms?',
      a: 'Yes — LMS platforms, e-learning apps, and student-facing portals are all within our portfolio.',
    },
    {
      q: 'Can you help ecommerce brands?',
      a: 'Absolutely. We build Shopify stores, custom ecommerce solutions, and product experience sites.',
    },
    {
      q: 'Do you work with hospitality businesses?',
      a: 'Yes — hotel booking UIs, restaurant platforms, and travel apps are areas we have worked in.',
    },
    {
      q: 'Can government or nonprofit organizations work with you?',
      a: 'We do work with mission-driven organizations. We evaluate these on a case-by-case basis.',
    },
  ],
}
 
const categories = Object.keys(faqData)

export default function Faq() {
    const [activeCategory, setActiveCategory] = useState('General')
    const [openIndex, setOpenIndex] = useState(0)
   
    const questions = faqData[activeCategory]
   
    const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

    return(
        <div>
            <Navbar/>
            {/* Hero */}
            <div className="flex flex-col  px-20  mt-24 py-10 max-w-[1440px]  m-auto items-start justify-start">
                    <div className="flex items-center gap-3 mb-10 text-base text-gray-700">
                    <span>Home</span>

                    {/* Connector */}
                    <div className="flex items-center ">
                        {/* Left diamond */}
                        <svg width="8" height="8" viewBox="0 0 10 10">
                        <path d="M5 0L10 5L5 10L0 5Z" fill="black" />
                        </svg>

                        {/* Line */}
                        <div className="w-6 h-[1px] bg-black"></div>

                        {/* Right diamond */}
                        <svg width="8" height="8" viewBox="0 0 10 10">
                        <path d="M5 0L10 5L5 10L0 5Z" fill="black" />
                        </svg>
                    </div>

                    <span>FAQ</span>
                    </div>
                    <h2 className="text-6xl ">Have Questions?<br/> We’ve Got Answers</h2>
                    <ul className="space-y-6 text-gray-700 ml-14 px-16 mt-5">
                    <li className="flex gap-4">
                        
                        {/* Left vertical indicator */}
                        <div className="flex flex-col items-center">
                        {/* Top diamond */}
                        <svg width="8" height="8" viewBox="0 0 10 10">
                            <path d="M5 0L10 5L5 10L0 5Z" fill="#1F3D3A" />
                        </svg>

                        {/* Vertical line */}
                        <div className="w-[2px] h-full bg-gray-300"></div>

                        {/* Bottom diamond */}
                        <svg width="8" height="8" viewBox="0 0 10 10">
                            <path d="M5 0L10 5L5 10L0 5Z" fill="#1F3D3A" />
                        </svg>
                        </div>

                        {/* Text */}
                        <p className="leading-relaxed text-lg">
                        Your questions, our straightforward answers. The<br/> details you’re looking for.
                        </p>
                    </li>
                    </ul>
            </div>

            {/* FAQ */}
            <div className="max-w-[1440px] mx-auto w-full flex gap-0 min-h-[80vh] px-20 py-16">
            
            {/* Left sidebar */}
            <div className="w-[30%] flex-shrink-0 flex flex-col justify-between pr-10">
            <nav className="flex flex-col gap-1">
                {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setOpenIndex(0) }}
                    className={`text-left text-lg py-3 transition-all duration-200 ${
                    activeCategory === cat
                        ? 'text-black font-semibold'
                        : 'text-gray-400 hover:text-gray-700 font-normal'
                    }`}
                >
                    {cat}
                </button>
                ))}
            </nav>

            {/* Image card */}
            <div className="mt-10 rounded-2xl overflow-hidden relative h-[320px]">
                <img
                src="/images/faqimg.png"
                alt="Collaborate"
                className="w-full h-full object-cover"
                onError={(e) => {
                    e.target.style.display = 'none'
                }}
                />
                <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white text-xl font-bold leading-snug mb-4">
                    Don't Hesitate to<br />Collaborate with Us
                </p>
                <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm"
                    style={{ background: '#c5e87a', color: '#1a2e25' }}
                >
                    Contact us
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                </a>
                </div>
            </div>
            </div>

            {/* Right accordion */}
            <div className=" w-[70%] flex-1 border-l border-gray-100 pl-14">
            <div className="divide-y divide-gray-100">
                {questions.map((item, i) => (
                <div key={i} className="py-5">
                    <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between text-left gap-4 group"
                    >
                    <span className={`text-xl transition-colors duration-200 ${
                        openIndex === i ? 'font-semibold text-black' : 'font-medium text-gray-800'
                    }`}>
                        {item.q}
                    </span>
                    <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        openIndex === i
                        ? 'border-black bg-black text-white rotate-45'
                        : 'border-gray-300 text-gray-500 group-hover:border-gray-500'
                    }`}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 5v14M5 12h14"/>
                        </svg>
                    </span>
                    </button>

                    {/* Answer */}
                    <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === i ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                    }`}
                    >
                    <p className="text-black text-lg leading-relaxed pr-10">{item.a}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
            </div>

            <div className="p-3">
                <Footer2/>
            </div>
            
        </div>
    )
}