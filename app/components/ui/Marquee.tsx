"use client"

import gsap from "gsap"
import { useEffect, useRef } from "react"
import { MARQUEE_LABELS } from "@constants/marquee"

export default function Marquee() {
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const width = contentRef?.current?.offsetWidth / 2
      gsap.to(contentRef.current, {
        x: -width,
        duration: 15,
        ease: "linear",
        repeat: -1,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])
  const items = MARQUEE_LABELS.map((label, i) => (
    <span key={i} className="mx-1 text-[#909090] font-black">
      {label}
    </span>
  ))
  return (
    <section
      ref={containerRef}
      className="overflow-hidden w-full md:w-[30vw] mx-auto my-6 md:m-0 md:mr-[4vw] md:blur-[2px] md:hover:blur-none cursor-pointer transition-all duration-500"
    >
      <div ref={contentRef} className="inline-flex whitespace-nowrap">
        {items}
        {items}
      </div>
    </section>
  )
}
