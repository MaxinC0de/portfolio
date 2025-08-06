"use client"

import Image from "next/image"
import { useRef } from "react"
import { useDetailsAnimation } from "@gsap/useDetailsAnimation"
import { useInfosHoverAnimation } from "@gsap/useInfosAnimation"
import { useStore } from "@hooks/useStore"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function ProjectDetails() {
  const { project, isToggled, infos, setModalImage } = useStore()
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  useDetailsAnimation(containerRef, isToggled, project)
  useInfosHoverAnimation(contentRef, containerRef, infos)

  const LinkSite = () => {
    if (project.link !== null)
      return (
        <div className="flex items-center mb-3">
          <Link href={project.link} target="_blank">
            LIEN
          </Link>
          <ExternalLink className="size-3.5 ml-1" />
        </div>
      )
  }

  if (project?.id !== isToggled || !project) return null
  return (
    <article
      ref={containerRef}
      className="flex flex-col flex-1 w-full md:overflow-y-auto md:min-h-0 scroll-hidden mb-6"
    >
      <div ref={contentRef} className="w-full">
        {!infos ? (
          project.name === "riva" || project.name === "lms" ? (
            <>
              <LinkSite />
              <Image
                src={project.src}
                alt={project.title}
                width={700}
                height={1800}
                sizes="(min-width: 768px) 44vw, 100vw"
                className="w-full h-auto cursor-pointer object-contain"
                onClick={() => setModalImage(project.src)}
                priority
              />
            </>
          ) : (
            <div
              onClick={() => setModalImage(project.src)}
              className="flex flex-col"
            >
              <LinkSite />
              <video
                src="/images/didus.webm"
                autoPlay
                loop
                muted
                playsInline
                className="flex h-auto rounded-lg mb-1"
              />
              <Image
                src={project.src}
                alt={project.title}
                width={700}
                height={1800}
                sizes="(min-width: 768px) 44vw, 100vw"
                className="w-full h-auto cursor-pointer object-contain"
                priority
              />
            </div>
          )
        ) : (
          <>
            <p className="w-full">{project?.description}</p>
            <div className="flex w-full mb-6 md:mb-0 gap-4">
              {[
                { title: "SERVICES", items: project.services },
                { title: "STACK", items: project.stack },
              ].map(({ title, items }) => (
                <div
                  key={title}
                  className="flex flex-col flex-1 flex-wrap mt-3"
                >
                  <h2 className="title mb-1">{title}</h2>
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
