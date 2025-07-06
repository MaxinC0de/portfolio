"use client"

import { useEffect } from "react"

export default function LocomotiveWrapper() {
  useEffect(() => {
    const LocomotiveScroll = require("locomotive-scroll").default

    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    })

    return () => scroll.destroy()
  }, [])

  return null
}
