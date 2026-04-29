'use client'
import Navbar from "../components/Navbar"
import Footer2 from "../components/Footer2"
import { useState } from 'react'
 
const plans = [
  {
    name: 'Standard',
    monthlyPrice: 99,
    yearlyPrice: 89,
    description: 'The Standard Plan provides a balanced offering with both content creation, SEO, and social media management.',
    color: '#e8f5e1',
    features: [
      'Custom UX/UI Design',
      'Full On-Page SEO',
      'Social Media Management (3 Channels)',
      'Full Campaign Management',
      'Phone & Email Support',
    ],
  },
  {
    name: 'Premium',
    monthlyPrice: 199,
    yearlyPrice: 179,
    description: 'The Premium Plan is designed for businesses seeking comprehensive digital solutions, from advanced website design.',
    color: '#e8eaf6',
    features: [
      'Advanced Custom Design',
      'On-Page + Off-Page SEO',
      'Advanced Strategy + Ads (5 Channels)',
      'Advanced PPC Campaigns',
      '24/7 Phone, Email, & Chat',
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: 299,
    yearlyPrice: 269,
    description: 'The Enterprise Plan is ideal for large businesses or corporations that require a full-scale digital marketing strategy.',
    color: '#fef9c3',
    features: [
      'Fully Tailored Design + Dev',
      'Full SEO + Content Strategy',
      'Dedicated Social Manager + Strategy',
      'Comprehensive Ads Strategy',
      'Dedicated Account Manager',
    ],
  },
]

export default function Pricing() {
    const [yearly, setYearly] = useState(false)

    return(
        <div>
            <Navbar/>
            {/* Hero */}
            <div className="flex flex-col  px-16 mt-24 py-10 max-w-[1440px]  m-auto items-start justify-start">
                    <div className="flex items-center gap-3 mb-10 text-base text-gray-700">
                    <span>Home</span>

                    {/* Connector */}
                    <div className="flex items-center ">
                        {/* Left diamond */}
                        <svg width="6" height="6" viewBox="0 0 10 10">
                        <path d="M5 0L10 5L5 10L0 5Z" fill="black" />
                        </svg>

                        {/* Line */}
                        <div className="w-4 h-[1px] bg-black"></div>

                        {/* Right diamond */}
                        <svg width="6" height="6" viewBox="0 0 10 10">
                        <path d="M5 0L10 5L5 10L0 5Z" fill="black" />
                        </svg>
                    </div>

                    <span>Pricing plan</span>
                    </div>
                    <h2 className="text-6xl font-medium ">Flexible Plans for Every<br/> Business</h2>
                    <ul className="space-y-6 text-gray-700 ml-10 px-16 mt-5">
                    <li className="flex gap-4 mt-1">
                        <div className="flex flex-col items-center ">
                            <svg width="6" height="6" viewBox="0 0 10 10">
                                <path d="M5 0L10 5L5 10L0 5Z" fill="#1F3D3A" />
                            </svg>

                            <div className="w-[1px] flex-1 bg-black"></div>

                            <svg width="6" height="6"viewBox="0 0 10 10">
                                <path d="M5 0L10 5L5 10L0 5Z" fill="#1F3D3A" />
                            </svg>
                        </div>
                        {/* Text */}
                        <p className=" text-lg">
                        Affordable options without compromising quality.<br/> No guesswork, just straightforward pricing.
                        </p>
                    </li>
                    </ul>
            </div>

            {/* CARDS */}
            <div className="w-full max-w-[1440px] mx-auto px-20 py-16 flex flex-col gap-10">
            
            {/* Toggle */}
            <div className="flex justify-center">
            <div className="flex items-center gap-4 bg-gray-100 rounded-full px-6 py-3">
                <span className={`text-base font-medium ${!yearly ? 'text-gray-900' : 'text-gray-400'}`}>Monthly</span>
                <button
                onClick={() => setYearly(!yearly)}
                className="relative w-12 h-6 rounded-full transition-colors duration-300 flex-shrink-0"
                style={{ background: yearly ? '#1a2e25' : '#4b5563' }}
                >
                <span
                    className="absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-300"
                    style={{ left: yearly ? '28px' : '4px' }}
                />
                </button>
                <span className={`text-base font-medium ${yearly ? 'text-gray-900' : 'text-gray-400'}`}>
                Yearly Save 10%
                </span>
            </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-6 min-h-[697px]">
            {plans.map((plan) => (
                <div
                key={plan.name}
                className="rounded-[10px] p-10 flex flex-col justify-between gap-6"
                style={{ background: plan.color }}
                >
                {/* Name */}
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-gray-900">
                    ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-sm text-gray-500">/per month</span>
                </div>

                {/* Description */}
                <p className="text-base text-black leading-relaxed">{plan.description}</p>

                {/* CTA */}
                <button className="w-full bg-white rounded-full py-4 text-base font-bold text-gray-900 hover:bg-gray-50 transition-colors duration-200">
                    Choose {plan.name} Plan
                </button>

                {/* Features */}
                <div className="flex flex-col gap-3">
                    <p className="text-lg font-bold text-gray-900 mb-4">What's Included of {plan.name} :</p>
                    <ul className="flex flex-col gap-3">
                    {plan.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-base text-gray-700">
                        <span className="text-gray-700 font-medium">✓</span>
                        {f}
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            ))}
            </div>

            {/* Bottom CTA banner */}
            <div className="flex items-center m-auto mt-20 justify-between border border-gray-200 rounded-2xl px-10 py-3 w-[70%]">
            <p className="text-lg font-medium text-gray-900 leading-snug">
                Don't Hesitate to<br />Collaborate with Us
            </p>
            <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-[10px] font-semibold text-base"
                style={{ background: '#c5e87a', color: '#1a2e25' }}
            >
                Get in Touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
            </a>
            </div>
            </div>


            <div className="p-3">
                <Footer2/>
            </div>
            
        </div>
    )
}