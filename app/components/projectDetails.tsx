"use client"

import Image from "next/image"
import { useDetailsAnimation } from "../gsap/useDetailsAnimation"
import { useRef } from "react"
import { useStore } from "../hooks/useStore"

export default function ProjectDetails() {
  const { project, isToggled } = useStore()
  const containerRef = useRef(null)
  useDetailsAnimation(containerRef, isToggled)
  if (!project) return null
  return (
    <article ref={containerRef} className="flex flex-col gap-y-3 md:w-[44vw]">
      <Image
        src="/images/marketing.png"
        alt=""
        width={700}
        height={300}
        className="mt-3 md:mt-0"
      />
      <p>{project?.description}</p>
      <div className="flex justify-between mb-6 md:mb-0">
        <div className="w-[45%] flex flex-col flex-wrap">
          <h2 className="title">SERVICES</h2>
          <div className="gap-2 text-xs">{project?.services.map((p) => p)}</div>
        </div>
        <div className="w-[45%] flex flex-col flex-wrap">
          <h2 className="title">STACK</h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {project?.stack.map((p) => p)}
          </div>
        </div>
      </div>
    </article>
  )
}
