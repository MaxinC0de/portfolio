"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useIsMobile } from "../hooks/useIsMobile"
import Marquee from "./marquee"

export default function Nav() {
  const isMobile = useIsMobile()
  return (
    <nav className="flex justify-between items-center">
      <Image
        src="/images/logo.png"
        alt=""
        width={700}
        height={300}
        className="object-contain size-14"
      />
      <div className="md:flex md:items-center">
        {!isMobile && <Marquee />}
        <Button className="text-red font-bold text-lg border-1 border-red bg-black">
          CONTACT
        </Button>
      </div>
    </nav>
  )
}
