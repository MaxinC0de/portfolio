"use client"

import { useInfosHoverAnimation } from "@/app/gsap/useInfosAnimation"
import { useStore } from "@/app/hooks/useStore"

export default function Infos() {
  const { infos, setInfos } = useStore()
  const { containerRef, handleMouseEnter, handleMouseLeave } =
    useInfosHoverAnimation()

  return (
    <div className="hidden md:sticky z-12 md:flex md:justify-end md:right-0 md:top-0 md:mb-3 md:-mt-4">
      <button
        onClick={() => setInfos(!infos)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative text-[#ff0000] cursor-pointer"
      >
        {infos ? "FERMER" : "INFOS"}
        <span
          ref={containerRef}
          className="absolute bottom-0 left-0 h-[1px] w-full scale-x-0 bg-[#ff0000]"
        ></span>
      </button>
    </div>
  )
}
