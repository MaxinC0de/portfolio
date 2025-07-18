"use client"

import Image from "next/image"
import Divider from "./divider"
import { useIsMobile } from "../hooks/useIsMobile"
import Marquee from "./marquee"

export default function Banner() {
  const isMobile = useIsMobile()
  return (
    <section className="flex flex-col">
      <Divider isHorizontal={true} isPlus={true} />
      <Image
        src={`/images/${isMobile ? "bannerMobile.webp" : "bannerDesktop.svg"}`}
        alt=""
        width={700}
        height={300}
        className="w-full px-3 object-contain"
      />
      <Divider isHorizontal={true} isPlus={true} />
      {isMobile && <Marquee />}
    </section>
  )
}
