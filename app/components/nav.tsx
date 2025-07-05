"use client"

import { useState } from "react"
import { useIsMobile } from "../hooks/useIsMobile"
import InfiniteMarquee from "./infiniteMarquee"
import Image from "next/image"

export default function Nav() {
  const [isToggled, setIsToggled] = useState(false)
  const isMobile = useIsMobile()
  return (
    <nav className="flex justify-between md:items-center md:pb-0">
      <Image
        src="/images/rgnd.png"
        alt=""
        width={700}
        height={300}
        className="w-12 md:w-16 h-auto"
      />
      <div className="md:flex md:items-center">
        {!isMobile && <InfiniteMarquee />}
        <button
          onClick={() => {
            setIsToggled(true)
          }}
          className="text-red border-red border-1 font-black tracking-tighter rounded-lg px-2 py-0.5"
        >
          CONTACT
        </button>
      </div>
    </nav>
  )
}
