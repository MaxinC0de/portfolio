"use client"

import { useEffect } from "react"

export default function LocomotiveWrapper() {
  useEffect(() => {
    const LocomotiveScroll = require("locomotive-scroll").default

    const container = document.querySelector("[data-scroll-container]")
    if (!container) {
      console.warn("LocomotiveScroll container not found")
      return
    }

    const scroll = new LocomotiveScroll({
      el: container,
      smooth: true,
    })

    return () => {
      if (scroll) scroll.destroy()
    }
  }, [])

  return null
}
