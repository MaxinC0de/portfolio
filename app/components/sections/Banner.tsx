"use client"

import Image from "next/image"
import { useIsMobile } from "@/app/hooks/useIsMobile"
import Divider from "../ui/Divider"
import Marquee from "../ui/Marquee"
import { BANNER_IMAGES } from "../../constants/banner"

export default function Banner() {
  const isMobile = useIsMobile()
  return (
    <section className="flex flex-col">
      <Divider isHorizontal={true} isPlus={true} />
      <Image
        src={isMobile ? BANNER_IMAGES.mobile : BANNER_IMAGES.desktop}
        alt="Bannière"
        width={1040}
        height={225}
        className="w-full px-3 object-contain"
        priority
      />
      <Divider isPlus />
      <div className="block md:hidden">
        <Marquee />
      </div>
    </section>
  )
}
