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
            <div className="flex flex-col px-20 mt-24 py-10 max-w-[1440px] m-auto items-start justify-start">
                
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 mb-10 text-base text-gray-700">
                    <span>Home</span>

                    <div className="flex items-center">
                        <svg width="6" height="6" viewBox="0 0 10 10">
                            <path d="M5 0L10 5L5 10L0 5Z" fill="black" />
                        </svg>
                        <div className="w-4 h-[1px] bg-black"></div>
                        <svg width="6" height="6" viewBox="0 0 10 10">
                            <path d="M5 0L10 5L5 10L0 5Z" fill="black" />
                        </svg>
                    </div>

                    <span>Contact</span>
                </div>

                <h2 className="text-6xl">
                    Start a Conversation<br/> With Our Expert Team
                </h2>

                {/* Vertical bullet */}
                <ul className="space-y-6 text-gray-700 ml-14 px-16 mt-5">
                    <li className="flex gap-4">
                        <div className="flex flex-col items-center ">
                            <svg width="6" height="6" viewBox="0 0 10 10">
                                <path d="M5 0L10 5L5 10L0 5Z" fill="#1F3D3A" />
                            </svg>

                            <div className="w-[1px] flex-1 bg-black"></div>

                            <svg width="6" height="6"viewBox="0 0 10 10">
                                <path d="M5 0L10 5L5 10L0 5Z" fill="#1F3D3A" />
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
            <div className="w-full max-w-[1440px] mx-auto px-20 py-10">
            <div className="border border-gray-200 rounded-2xl bg-gray-50 p-10">
                <div className="grid grid-cols-3 divide-x divide-gray-200">
                {offices.map((office, i) => (
                    <div key={i} className={`flex flex-col gap-7 ${i === 0 ? 'pr-12' : i === 1 ? 'px-12' : 'pl-12'}`}>
        
                    {/* City + view map */}
                    <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-gray-900">{office.city}</h3>
                        <a
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium underline underline-offset-2 text-gray-700 hover:text-black transition-colors"
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
                        <p className="text-gray-600 text-sm leading-relaxed">{office.address}</p>
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
            <div className="w-[760px] h-fit m-auto mt-[120px] flex items-center justify-center p-4">
            <div
                className="w-full h-full rounded-[20px] p-12 flex flex-col justify-between"
                style={{ background: '#e8f5e1' }}
            >
                {/* Fields */}
                <div className="flex flex-col gap-4 flex-1">
        
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-3">
                    <label className="text-lg font-medium text-gray-900">Full name</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-white h-[56px]  rounded-2xl px-5 py-5 text-base outline-none border-none"
                    />
                    </div>
                    <div className="flex flex-col gap-3">
                    <label className="text-lg font-medium text-gray-900">Company</label>
                    <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full bg-white h-[56px] rounded-2xl px-5 py-5 text-base outline-none border-none"
                    />
                    </div>
                </div>
        
                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-3">
                    <label className="text-lg font-medium text-gray-900">Company Email</label>
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full bg-white h-[56px]  rounded-2xl px-5 py-5 text-base outline-none border-none"
                    />
                    </div>
                    <div className="flex flex-col gap-3">
                    <label className="text-lg font-medium text-gray-900">Phone</label>
                    <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full bg-white h-[56px]  rounded-2xl px-5 py-5 text-base outline-none border-none"
                    />
                    </div>
                </div>
        
                {/* Checkboxes */}
                <div className="flex flex-col gap-4">
                    <label className="text-lg font-medium text-gray-900">How can We Assist You?</label>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-10">
                            {services.slice(0, 3).map((s) => (
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
                                    <span className={`text-base font-medium ${selected.includes(s) ? 'text-gray-900' : 'text-gray-500'}`}>
                                        {s}
                                    </span>
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-10">
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
                                    <span className={`text-base font-medium ${selected.includes(s) ? 'text-gray-900' : 'text-gray-500'}`}>
                                        {s}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
        
                {/* Message */}
                <div className="flex flex-col gap-3 flex-1">
                    <label className="text-lg font-medium text-gray-900">Message</label>
                    <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                    className="w-full flex-1 bg-white rounded-2xl px-6 py-5 text-base outline-none border-none resize-none placeholder-gray-400"
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