"use client"

import { useEffect, useState } from "react"

export default function IPhoneDynamicIslandSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    )

    const el = document.getElementById("iphone-section")
    if (el) observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="iphone-section"
      className="py-20 px-4 bg-white flex justify-center"
    >
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* iPhone body */}
        <div className="relative w-[280px] md:w-[360px] h-[620px]">
          <div className="relative bg-black rounded-[3.2rem] p-[6px] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">

            {/* Screen */}
            <div className="relative bg-white rounded-[2.7rem] overflow-hidden aspect-[9/17.5]">

              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
                <div className="w-[92px] h-[26px] bg-black rounded-full shadow-inner"></div>
              </div>

              {/* App Content */}
              <img
                src="/placeholder.jpg"
                alt="App preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Side button hint (optional but nice) */}
          <div className="absolute right-[-4px] top-[90px] h-[60px] w-[3px] bg-black/80 rounded-full" />
        </div>
      </div>
    </section>
  )
}
