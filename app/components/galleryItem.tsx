"use client"

import { useRef } from "react"
import Details from "./details"
import ToggleButton from "./toggleButton"
import { useHeightAnimation } from "../gsap/useHeightAnimation"
import { messina } from "../fonts"
import Divider from "./divider"

export default function GalleryItem({
  i,
  title,
  type,
  isToggled,
  animatingIndex,
  handleToggle,
  setAnimatingIndex,
}) {
  const containerRef = useRef(null)
  const isOpen = isToggled === i

  useHeightAnimation(containerRef, isOpen, () => {
    if (!isOpen) setAnimatingIndex(null)
  })

  return (
    <div key={i}>
      {i === 0 && <Divider horizontal={true} plus={false} />}
      <article
        onClick={() => handleToggle(i)}
        className="flex justify-between my-3 cursor-pointer select-none"
      >
        <p className={`font-bold ${isToggled === i ? "text-red" : ""}`}>
          {title}
        </p>
        <div className="flex items-center">
          <p className={`mr-[10vw] text-xs ${messina.variable}`}>{type}</p>
          <ToggleButton />
        </div>
      </article>
      <div
        ref={animatingIndex === i ? containerRef : null}
        className="overflow-hidden"
        style={{ height: 0 }}
      >
        {(isOpen || animatingIndex === i) && <Details i={i} isMobile={true} />}
      </div>
      <Divider plus={false} horizontal={true} />
    </div>
  )
}
