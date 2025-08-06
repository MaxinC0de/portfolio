"use client"

import Image from "next/image"
import { useContactStore } from "@hooks/useStore"
import Marquee from "@ui/Marquee"
import { Button } from "../../../components/ui/button"

export default function Nav() {
  const { contactIsToggled, setContactIsToggled } = useContactStore()
  return (
    <nav className="flex justify-between items-center">
      <Image
        src="/images/logo.png"
        alt=""
        width={700}
        height={300}
        className="object-contain size-14"
        priority
        unoptimized
      />
      <div className="md:flex md:items-center">
        <div className="hidden md:block">
          <Marquee />
        </div>
        <Button
          onClick={() => {
            setContactIsToggled(!contactIsToggled)
          }}
          className="relative z-30 text-red font-bold text-lg border-1 border-red bg-black focus:border-1"
        >
          CONTACT
        </Button>
      </div>
    </nav>
  )
}
