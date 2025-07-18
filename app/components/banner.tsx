"use client"

import Image from "next/image"
import Divider from "./divider"

export default function Banner() {
  return (
    <section className="flex flex-col">
      <Divider isHorizontal={true} isPlus={true} />
      <Image src="/images/bannerMobile.webp" alt="" width={700} height={300} />
      <Divider isHorizontal={true} isPlus={true} />
    </section>
  )
}
