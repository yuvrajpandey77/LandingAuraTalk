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
      className="py-12 sm:py-16 md:py-20 px-4 bg-white flex justify-center"
    >
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* iPhone body */}
        <div className="relative w-[240px] sm:w-[280px] md:w-[360px] h-[530px] sm:h-[620px]">
          <div className="relative bg-black rounded-[2.8rem] sm:rounded-[3.2rem] p-[5px] sm:p-[6px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:shadow-[0_30px_80px_rgba(0,0,0,0.35)]">

            {/* Screen */}
            <div className="relative bg-white rounded-[2.4rem] sm:rounded-[2.7rem] overflow-hidden aspect-[9/17.5]">

              {/* Dynamic Island */}
              <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 z-20">
                <div className="w-[78px] h-[22px] sm:w-[92px] sm:h-[26px] bg-black rounded-full shadow-inner"></div>
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
          <div className="absolute right-[-3px] sm:right-[-4px] top-[75px] sm:top-[90px] h-[50px] sm:h-[60px] w-[2px] sm:w-[3px] bg-black/80 rounded-full" />
        </div>
      </div>
    </section>
  )
}
