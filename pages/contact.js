'use client'
import { useEffect, useState, useRef } from 'react'
import Navbar from "../components/Navbar"
import Footer2 from "../components/Footer2"
 
const services = [
  'IT Consulting',
  'UI/UX Design',
  'Cloud Solution',
  'AI & Machine Learning',
  'Technical Support',
  'DevOps Services',
]

const offices = [
  {
    city: 'California, USA',
    mapUrl: 'https://maps.google.com',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    phones: ['2-965-871-8617', '2-965-871-8618'],
    emails: ['Info@Example.Com', 'Info2@Example.Com'],
  },
  {
    city: 'Alabama, USA',
    mapUrl: 'https://maps.google.com',
    address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    phones: ['2-965-871-8617', '2-965-871-8618'],
    emails: ['Info@Example.Com', 'Info2@Example.Com'],
  },
  {
    city: 'California, USA',
    mapUrl: 'https://maps.google.com',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    phones: ['2-965-871-8617', '2-965-871-8618'],
    emails: ['Info@Example.Com', 'Info2@Example.Com'],
  },
]


export default function Contact() {
    const [selected, setSelected] = useState([])
    const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })
   
    const toggleService = (s) =>
      setSelected((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s])
   
    const handleChange = (e) =>
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
   
    const handleSubmit = () => {
      console.log({ ...form, services: selected })
    }

    return(
        <div>
            <Navbar/>

            {/* Hero */}
            <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-20 mt-20 md:mt-24 py-8 md:py-10 max-w-[1440px] m-auto items-start justify-start">
                
                {/* Breadcrumb */}
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

                    <span>Contact</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    Start a Conversation<br/> With Our Expert Team
                </h2>

                {/* Vertical bullet */}
                <ul className="space-y-6 text-gray-700 ml-0 md:ml-14 md:pl-16 mt-5 max-w-full">
                    <li className="flex gap-4">
                        <div className="flex flex-col items-center ">
                            <svg width="6" height="6" viewBox="0 0 10 10">
                                <path d="M5 0L10 5L5 10L0 5Z" className="fill-black dark:fill-white" />
                            </svg>

                            <div className="w-[1px] flex-1 bg-black dark:bg-white"></div>

                            <svg width="6" height="6" viewBox="0 0 10 10">
                                <path d="M5 0L10 5L5 10L0 5Z" className="fill-black dark:fill-white" />
                            </svg>
                        </div>

                        <p className="leading-relaxed text-lg">
                            Together, let’s build something truly remarkable <br/>
                            today.
                        </p>
                    </li>
                </ul>
            </div>

            {/* CONTACT */}
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-20 py-8 md:py-10">
            <div className="border border-gray-200 rounded-2xl bg-gray-50 p-4 sm:p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-gray-200">
                {offices.map((office, i) => (
                    <div key={i} className={`flex flex-col dark:text-black gap-6 md:gap-7 py-6 md:py-0 first:pt-0 md:first:pt-0 ${i === 0 ? 'md:pr-8 lg:pr-12' : i === 1 ? 'md:px-8 lg:px-12' : 'md:pl-8 lg:pl-12'}`}>
        
                    {/* City + view map */}
                    <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold dark:text-black text-gray-900">{office.city}</h3>
                        <a
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium dark:text-black underline underline-offset-2 text-gray-700 hover:text-black transition-colors"
                        style={{ color: '#1a3a30' }}
                        >
                        view map
                        </a>
                    </div>
        
                    {/* Address */}
                    <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <img src='/icons/mapicon.svg' alt='mapicon'/>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed dark:text-black">{office.address}</p>
                    </div>
        
                    {/* Phones */}
                    <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                        <img src='/icons/phoneicon.svg' alt='phoneicon'/>
                        </div>
                        <div className="flex flex-col gap-1">
                        {office.phones.map((p, j) => (
                            <a key={j} href={`tel:${p}`} className="text-gray-600 text-sm hover:text-black transition-colors">{p}</a>
                        ))}
                        </div>
                    </div>
        
                    {/* Emails */}
                    <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                        <img src='/icons/mailicon.svg' alt='mailicon'/>
                        </div>
                        <div className="flex flex-col gap-1">
                        {office.emails.map((e, j) => (
                            <a key={j} href={`mailto:${e}`} className="text-gray-600 text-sm hover:text-black transition-colors">{e}</a>
                        ))}
                        </div>
                    </div>
        
                    </div>
                ))}
                </div>
            </div>
            </div>

            {/* FORM */}
            <div className="w-full max-w-[760px] h-fit m-auto mb-10 md:mb-0 mt-16 md:mt-[120px] flex items-center justify-center px-4">
            <div
                className="w-full h-full rounded-[20px] p-6 sm:p-8 md:p-12 flex flex-col justify-between"
                style={{ background: '#e8f5e1' }}
            >
                {/* Fields */}
                <div className="flex flex-col gap-4 flex-1">
        
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-3">
                    <label className="text-lg font-medium dark:text-black text-gray-900">Full name</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder='Enter your full name'
                        className="w-full bg-white h-[56px] dark:placeholder:text-white placeholder:text-black  rounded-2xl px-5 py-5 text-base outline-none border-none"
                    />
                    </div>
                    <div className="flex flex-col gap-3">
                    <label className="text-lg dark:text-black font-medium text-gray-900">Company</label>
                    <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder='Enter your company name'
                        className="w-full bg-white h-[56px] dark:placeholder:text-white placeholder:text-black  rounded-2xl px-5 py-5 text-base outline-none border-none"
                    />
                    </div>
                </div>
        
                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-3">
                    <label className="text-lg dark:text-black  font-medium text-gray-900">Company Email</label>
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder='Enter your email here'
                        className="w-full bg-white h-[56px] dark:placeholder:text-white placeholder:text-black  rounded-2xl px-5 py-5 text-base outline-none border-none"
                    />
                    </div>
                    <div className="flex flex-col gap-3">
                    <label className="text-lg dark:text-black font-medium text-gray-900">Phone</label>
                    <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder='Enter your phone number'
                        className="w-full bg-white h-[56px] dark:placeholder:text-white placeholder:text-black  rounded-2xl px-5 py-5 text-base outline-none border-none"
                    />
                    </div>
                </div>
        
                {/* Checkboxes */}
                <div className="flex flex-col gap-4">
                    <label className="text-lg font-medium dark:text-black text-gray-900">How can We Assist You?</label>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-8 md:gap-10">
                            {services.slice(0, 3).map((s) => (
                                <button
                                    key={s}
                                    type="button"
                                    onClick={() => toggleService(s)}
                                    className="flex items-center gap-3 text-left"
                                >
                                    <span
                                        className="w-4 h-4 dark:text-black rounded-[5px] flex-shrink-0 transition-all duration-200 flex items-center justify-center"
                                        style={{
                                            background: selected.includes(s) ? '#111' : 'white',
                                        }}
                                    >
                                        {selected.includes(s) && (
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        )}
                                    </span>
                                    <span className={`text-base font-medium dark:text-black ${selected.includes(s) ? 'text-gray-900' : 'text-gray-500'}`}>
                                        {s}
                                    </span>
                                </button>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-8 md:gap-10">
                            {services.slice(3, 6).map((s) => (
                                <button
                                    key={s}
                                    type="button"
                                    onClick={() => toggleService(s)}
                                    className="flex items-center gap-3 text-left"
                                >
                                    <span
                                        className="w-4 h-4 rounded-[5px] flex-shrink-0 transition-all duration-200 flex items-center justify-center"
                                        style={{
                                            background: selected.includes(s) ? '#111' : 'white',
                                        }}
                                    >
                                        {selected.includes(s) && (
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        )}
                                    </span>
                                    <span className={`text-base dark:text-black font-medium ${selected.includes(s) ? 'text-gray-900' : 'text-gray-500'}`}>
                                        {s}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
        
                {/* Message */}
                <div className="flex flex-col gap-3 flex-1">
                    <label className="text-lg font-medium text-gray-900 dark:text-black">Message</label>
                    <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                    className="w-full flex-1 bg-white rounded-2xl px-6 py-5 text-base outline-none border-none resize-none placeholder-black dark:placeholder-white"
                    style={{ minHeight: 180 }}
                    />
                </div>
                </div>
        
                {/* Submit */}
                <div className="mt-10">
                <button
                    onClick={handleSubmit}
                    className="flex items-center gap-2 px-8 py-3 rounded-[8px] bg-gray-900 text-white font-medium text-base hover:bg-black transition-colors duration-200"
                >
                    Submit
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                </button>
                </div>
            </div>
            </div>

            <div className="p-3">
                <Footer2/>
            </div>
        </div>
    )
}