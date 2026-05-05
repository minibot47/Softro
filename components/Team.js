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

export default function Team() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(4)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const sync = () => setVisible(mq.matches ? 4 : 1)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const maxIndex = Math.max(0, team.length - visible)

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex))
  }, [maxIndex])

  // auto slide forward
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (maxIndex <= 0 ? 0 : (prev >= maxIndex ? 0 : prev + 1)))
    }, 4000)

    return () => clearInterval(interval)
  }, [maxIndex])

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f5faf5] dark:bg-[#111411]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black dark:text-white">
            Our Talented Team
          </h2>
          <p className="text-gray-500 dark:text-gray-300 text-base sm:text-lg mt-3">
            Transforming ideas into memorable digital experiences.
          </p>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visible)}%)`,
            }}
          >
            {team.map((member, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-2 sm:px-3"
                style={{ flex: `0 0 ${100 / visible}%` }}
              >
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
        <div className="flex justify-center gap-2 mt-10 flex-wrap">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
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