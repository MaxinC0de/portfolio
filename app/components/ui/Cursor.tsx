"use client"

import { useIsMobile } from "@/app/hooks/useIsMobile"
import AnimatedCursor from "react-animated-cursor"

export default function CustomCursor() {
  const { isMobile } = useIsMobile()
  if (isMobile) return null
  return (
    <AnimatedCursor
      innerSize={0}
      outerSize={40}
      color="60, 60, 60"
      outerAlpha={0.7}
      innerScale={0}
      outerScale={1}
      trailingSpeed={10}
    />
  )
}
