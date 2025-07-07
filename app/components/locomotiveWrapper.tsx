"use client"

import { useEffect } from "react"

export default function LocomotiveWrapper() {
  useEffect(() => {
    const LocomotiveScroll = require("locomotive-scroll").default

    requestAnimationFrame(() => {
      const container = document.querySelector("[data-scroll-container]")
      if (!container) {
        console.warn("LocomotiveScroll container not found")
        return
      }

      const scroll = new LocomotiveScroll({
        el: container,
        smooth: true,
      })

      console.log("Initializing LocomotiveScroll…")

      return () => scroll.destroy()
    })
  }, [])

  return null
}
