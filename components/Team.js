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
]

const VISIBLE = 4
const MAX_INDEX = team.length - VISIBLE

export default function Team() {
  const [index, setIndex] = useState(0)

  // auto slide forward
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev >= MAX_INDEX ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 px-6 bg-[#f5faf5] dark:bg-[#111411]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-medium text-black dark:text-white">
            Our Talented Team
          </h2>
          <p className="text-gray-500 dark:text-gray-300 text-lg mt-3">
            Transforming ideas into memorable digital experiences.
          </p>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 25}%)`, // 25% per step (4 items visible)
            }}
          >
            {team.map((member, i) => (
              <div key={i} className="w-1/4 flex-shrink-0 px-3">
                <div className="group cursor-pointer">

                  {/* IMAGE CARD */}
                  <div
                    className="relative rounded-2xl w-full aspect-square mb-4 overflow-hidden transition-transform duration-300 group-hover:scale-[1.03]"
                    style={{
                      background: `linear-gradient(160deg, ${member.color}33 0%, ${member.color}88 100%)`,
                    }}
                  >
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />

                    {/* SOCIAL POPUP */}
                    <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="mb-2 flex gap-3 translate-y-2 group-hover:translate-y-0 transition">
                        
                      

                      {["twitter", "linkedin", "insta"].map((icon, i) => (
                        <div
                          key={i}
                          className="w-9 h-9 bg-black rounded-full shadow flex items-center justify-center"
                        >
                          <Image
                            src={`/icons/${icon}.svg`}
                            alt={icon}
                            width={16}
                            height={16}
                          />
                        </div>
                      ))}

                      </div>
                    </div>
                  </div>

                  {/* TEXT */}
                  <h3 className="font-bold text-xl text-black dark:text-white">{member.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{member.role}</p>
                </div>
              </div>
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
                i === index ? "w-6 bg-black dark:bg-[#c5e87a]" : "w-2 bg-gray-300 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}