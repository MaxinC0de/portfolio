"use client"

import AnimatedCursor from "react-animated-cursor"

export default function CustomCursor() {
  return (
    <div className="hidden md:block">
      <AnimatedCursor
        innerSize={0}
        outerSize={40}
        color="60, 60, 60"
        outerAlpha={0.7}
        innerScale={0}
        outerScale={1}
        trailingSpeed={10}
      />
    </div>
  )
}
