"use client"

import Image from "next/image"
import { useDetailsAnimation } from "../gsap/useDetailsAnimation"
import { useRef } from "react"

export default function ProjectDetails({ project, isToggled }) {
  const containerRef = useRef(null)
  useDetailsAnimation(containerRef, isToggled)
  return (
    <article
      ref={containerRef}
      className="overflow-hidden flex flex-col gap-y-3"
    >
      <Image
        src="/images/marketing.png"
        alt=""
        width={700}
        height={300}
        className="mt-3"
      />
      <p>{project.description}</p>
      <div className="flex justify-between">
        <div>
          <h2 className="title">SERVICES</h2>
          <div className="w-[50vw] text-xs">
            {project.services.map((p) => p)}
          </div>
        </div>
        <div>
          <h2 className="title">STACK</h2>
          <div className="w-[50vw] text-xs">{project.stack.map((p) => p)}</div>
        </div>
      </div>
    </article>
  )
}
