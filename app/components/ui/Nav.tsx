"use client"

import Image from "next/image"
import { useIsMobile } from "@hooks/useIsMobile"
import { useContactStore } from "@hooks/useStore"
import Marquee from "@ui/Marquee"
import { Button } from "../../../components/ui/button"

export default function Nav() {
  const isMobile = useIsMobile()
  const { contactIsToggled, setContactIsToggled } = useContactStore()
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
        <Button
          onClick={() => {
            setContactIsToggled(!contactIsToggled)
          }}
          className="relative z-30 text-red font-bold text-lg border-1 border-red bg-black focus:border-1"
        >
          {contactIsToggled ? "FERMER" : "CONTACT"}
        </Button>
      </div>
    </nav>
  )
}
