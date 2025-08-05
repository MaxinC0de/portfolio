"use client"

import Image from "next/image"
import { useRef } from "react"
import { useDetailsAnimation } from "@gsap/useDetailsAnimation"
import { useInfosHoverAnimation } from "@gsap/useInfosAnimation"
import { useStore } from "@hooks/useStore"

export default function ProjectDetails() {
  const { project, isToggled, infos, setModalImage } = useStore()
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  useDetailsAnimation(containerRef, isToggled, project)
  useInfosHoverAnimation(contentRef, containerRef, infos)
  if (project?.id !== isToggled || !project) return null
  return (
    <article
      ref={containerRef}
      className="flex flex-col flex-1 w-full md:overflow-y-auto md:min-h-0 scroll-hidden mb-6"
    >
      <div ref={contentRef} className="w-full">
        {!infos ? (
          <Image
            src={project.src}
            alt={project.title}
            width={0}
            height={0}
            sizes="(min-width: 768px) 44vw, 100vw"
            className="w-full h-auto cursor-pointer object-contain"
            onClick={() => setModalImage(project.src)}
          />
        ) : (
          <>
            <p className="w-full">{project?.description}</p>
            <div className="flex w-full mb-6 md:mb-0 gap-4">
              {[
                { title: "SERVICES", items: project.services },
                { title: "STACK", items: project.stack },
              ].map(({ title, items }) => (
                <div key={title} className="flex flex-col flex-1 flex-wrap">
                  <h2 className="title">{title}</h2>
                  <div className="text-xs">{items.join(", ")}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </article>
  )
}
