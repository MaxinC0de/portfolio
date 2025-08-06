"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { useStore } from "@hooks/useStore"
import { initialStyle } from "@constants/modalImage"
import { useModalImageAnimation } from "@gsap/useModalImageAnimation"

export default function ModalImage() {
  const { project, modalImage, setModalImage } = useStore()
  const overlayRef = useRef(null)
  const contentRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  useModalImageAnimation({
    modalImage,
    isVisible,
    overlayRef,
    contentRef,
    setIsVisible,
  })
  if (!isVisible) return null
  return (
    <div
      ref={overlayRef}
      style={initialStyle}
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 overflow-y-auto scroll-hidden"
      onClick={() => setModalImage(null)}
    >
      <div
        ref={contentRef}
        style={initialStyle}
        className="mt-20 mb-20 w-[70vw]"
      >
        {project.name === "didus" && (
          <video
            src="/images/didus.webm"
            autoPlay
            loop
            muted
            playsInline
            className="flex h-auto rounded-lg mb-1"
          />
        )}
        <Image
          src={modalImage}
          alt="Image modale"
          width={700}
          height={300}
          className="flex"
        />
      </div>
    </div>
  )
}
