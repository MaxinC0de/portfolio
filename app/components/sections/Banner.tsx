"use client"

import Image from "next/image"
import Divider from "../ui/Divider"
import Marquee from "../ui/Marquee"
import { BANNER_IMAGES } from "../../constants/banner"

export default function Banner() {
  return (
    <section className="flex flex-col">
      <Divider isHorizontal={true} isPlus={true} />
      <div className="hidden md:block">
        <Image
          src={BANNER_IMAGES.desktop}
          alt="Bannière desktop"
          width={1040}
          height={225}
          className="w-full px-3 object-contain"
          priority
        />
      </div>
      <div className="block md:hidden my-1.5">
        <Image
          src={BANNER_IMAGES.mobile}
          alt="Bannière mobile"
          width={1040}
          height={225}
          className="w-full px-3 object-contain"
          priority
        />
      </div>
      <Divider isPlus />
      <div className="block md:hidden">
        <Marquee />
      </div>
    </section>
  )
}
