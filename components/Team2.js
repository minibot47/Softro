'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

const team = [
  { name: 'David Chen', role: 'Creative Director', color: '#4a7c59', img:'/images/team-img.png' },
  { name: 'Aidan Curtis', role: 'Lead Developer', color: '#2d5a8a', img:'/images/team-img2.png' },
  { name: 'Linda Johnson', role: 'UX Designer', color: '#8a2d5a', img:'/images/team-img3.png' },
  { name: 'Daniel Lee', role: 'Brand Strategist', color: '#5a4a2d', img:'/images/team-img4.png' },
  { name: 'John Stone', role: 'Brand Strategist', color: '#5a4a2d', img:'/images/team-img5.png' },
  { name: 'Emily Johnson', role: 'Brand Strategist', color: '#5a4a2d', img:'/images/team-img6.png' },
  { name: 'Sarah Kahn', role: 'Brand Strategist', color: '#5a4a2d', img:'/images/team-img7.png' },
  { name: 'Aiden Smith', role: 'Brand Strategist', color: '#5a4a2d', img:'/images/team-img8.png' },
  { name: 'David Chen', role: 'Creative Director', color: '#4a7c59', img:'/images/team-img.png' },
  { name: 'Aidan Curtis', role: 'Lead Developer', color: '#2d5a8a', img:'/images/team-img2.png' },
  { name: 'Linda Johnson', role: 'UX Designer', color: '#8a2d5a', img:'/images/team-img3.png' },
  { name: 'Daniel Lee', role: 'Brand Strategist', color: '#5a4a2d', img:'/images/team-img4.png' },
  { name: 'John Stone', role: 'Brand Strategist', color: '#5a4a2d', img:'/images/team-img5.png' },
  { name: 'Emily Johnson', role: 'Brand Strategist', color: '#5a4a2d', img:'/images/team-img6.png' },
  { name: 'Sarah Kahn', role: 'Brand Strategist', color: '#5a4a2d', img:'/images/team-img7.png' },
  { name: 'Aiden Smith', role: 'Brand Strategist', color: '#5a4a2d', img:'/images/team-img8.png' },
]

// split into two rows
const row1 = team.slice(0, Math.ceil(team.length / 2))
const row2 = team.slice(Math.ceil(team.length / 2))

const VISIBLE = 4
const MAX_INDEX = row1.length - VISIBLE

function MemberCard({ member }) {
  return (
    <div className="w-1/4 flex-shrink-0 px-3">
      <div className="group cursor-pointer">
        <div
          className="relative rounded-2xl w-full h-[340px] mb-4 overflow-hidden transition-transform duration-300 group-hover:scale-[1.03]"
          style={{
            background: `linear-gradient(160deg, ${member.color}33 0%, ${member.color}88 100%)`,
          }}
        >
          <Image src={member.img} alt={member.name} fill className="object-cover "/>

          {/* Social icons — column, slides in from top right */}
          <div className="absolute -top-1 right-3 flex flex-col gap-2 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-100%] group-hover:translate-y-0">
            <div className="bg-black rounded-b-full rounded-tl-none rounded-tr-none flex flex-col gap-2 px-0.5 py-2">
              {['twitter', 'linkedin', 'insta'].map((icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
                >
                  <Image src={`/icons/${icon}.svg`} alt={icon} width={16} height={16}/>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="font-bold text-base text-black dark:text-white text-center">{member.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center">{member.role}</p>
      </div>
    </div>
  )
}

export default function Team() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev >= MAX_INDEX ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 px-6 rounded-[16px] bg-white dark:bg-[#111411]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-14 ">
          <div className="flex items-start justify-between gap-[33px] w-[50%]  ">
              <span className="text-base font-normal text-black dark:text-white border border-green-500 dark:border-green-700 px-2 py-0.5 rounded-full">Team</span>
              <div className="flex flex-col gap-5">
                <h2
                  className="text-4xl md:text-5xl font-medium text-black dark:text-white"
                >
                  Our Dynamic Creative <br/> Team
                </h2>
              </div>
          </div>

          <div className="flex flex-col justify-center w-[50%] items-end gap-3 ">
            <h2 className="text-black text-lg">Smart solution to build a outstanding performance easily</h2>
            <a
            href="#"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-black dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
          </div>
        </div>

        {/* SLIDER — two rows */}
        <div className="overflow-hidden flex flex-col gap-5">

          {/* Row 1 */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 25}%)`}}
          >
            {row1.map((member, i) => (
              <MemberCard key={i} member={member}/>
            ))}
          </div>

          {/* Row 2 */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 25}%)` }}
          >
            {row2.map((member, i) => (
              <MemberCard key={i} member={member}/>
            ))}
          </div>

        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: MAX_INDEX + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-black dark:bg-[#c5e87a]' : 'w-2 bg-gray-300 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}