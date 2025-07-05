"use client"

import Image from "next/image"
import { useIsMobile } from "../hooks/useIsMobile"
import InfiniteMarquee from "./infiniteMarquee"
import Divider from "./divider"

export default function Banner() {
  const isMobile = useIsMobile()
  if (isMobile === null) return null
  return isMobile ? (
    <div className="flex flex-col my-3">
      <Divider horizontal={true} plus={true} />
      <Image src="/images/bannerMobile.webp" alt="" width={700} height={300} />
      <Divider horizontal={true} plus={true} />
      <InfiniteMarquee />
    </div>
  ) : (
    <div className="flex flex-col my-3">
      <Divider horizontal={true} plus={true} />
      <Image
        className="w-full flex mx-auto"
        src="/images/bannerDesktop.svg"
        alt=""
        width={700}
        height={300}
      />
      <Divider horizontal={true} plus={true} />
    </div>
  )
}
