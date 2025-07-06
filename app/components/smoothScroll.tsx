"use client"
import { useEffect, useRef } from "react"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/dist/locomotive-scroll.css" // Required for styles

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1, // scroll speed multiplier
      lerp: 0.1, // smoothness (0 => instant, 1 => no smoothing)
    })

    return () => scroll.destroy()
  }, [])

  return (
    <div ref={containerRef} data-scroll-container>
      {children}
    </div>
  )
}
