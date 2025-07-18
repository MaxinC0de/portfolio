"use client"

import gsap from "gsap"
import { useEffect, useRef } from "react"

export default function Marquee() {
  const LABELS = [
    "01 DESIGN EVERYTHING //",
    "02 DESIGN EVERYTHING //",
    "03 DESIGN EVERYTHING //",
    "04 DESIGN EVERYTHING //",
    "05 DESIGN EVERYTHING //",
  ]
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const width = contentRef?.current.offsetWidth / 2
      gsap.to(contentRef.current, {
        x: -width,
        duration: 15,
        ease: "linear",
        repeat: -1,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])
  return (
    <section
      ref={containerRef}
      className="overflow-hidden w-full md:w-[30vw] mx-auto my-6 md:m-0 md:mr-[12vw] md:blur-[2px] md:hover:blur-none cursor-pointer transition-all duration-500"
    >
      <div ref={contentRef} className="inline-flex whitespace-nowrap">
        {LABELS.map((label, i) => (
          <span key={i} className="mx-1 text-[#909090] font-black">
            {label}
          </span>
        ))}
        {LABELS.map((label, i) => (
          <span
            key={i}
            className="mx-1 text-[#909090] font-black md:hover:blur-none"
          >
            {label}
          </span>
        ))}
      </div>
    </section>
  )
}
