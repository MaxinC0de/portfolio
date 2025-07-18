"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Nav() {
  return (
    <nav className="flex justify-between items-center">
      <Image
        src="/images/logo.png"
        alt=""
        width={700}
        height={300}
        className="object-contain size-12"
      />
      <Button className="text-red font-bold text-lg border-1 border-red bg-black">
        CONTACT
      </Button>
    </nav>
  )
}
