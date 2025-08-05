import { useEffect } from "react"
import gsap from "gsap"

export function useModalImageAnimation({
  modalImage,
  isVisible,
  overlayRef,
  contentRef,
  setIsVisible,
}) {
  useEffect(() => {
    if (modalImage) {
      setIsVisible(true)
    } else if (isVisible) {
      gsap.to([overlayRef.current, contentRef.current], {
        opacity: 0,
        visibility: "hidden",
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => setIsVisible(false),
      })
    }
  }, [modalImage])

  useEffect(() => {
    if (isVisible && modalImage) {
      gsap.set([overlayRef.current, contentRef.current], {
        opacity: 0,
        visibility: "hidden",
      })

      gsap.to(overlayRef.current, {
        opacity: 1,
        visibility: "visible",
        duration: 0.3,
        ease: "power2.out",
      })

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20, visibility: "visible" },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
      )
    }
  }, [isVisible, modalImage])
}
