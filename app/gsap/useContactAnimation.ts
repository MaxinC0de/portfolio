import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"

export const useContactAnimation = (
  containerRef: React.RefObject<HTMLElement>,
  isOpen: boolean,
) => {
  const [shouldRender, setShouldRender] = useState(false)
  const isAnimatingOut = useRef(false)

  useLayoutEffect(() => {
    const el = containerRef.current
    if (isOpen) {
      setShouldRender(true)
    } else if (shouldRender && !isAnimatingOut.current) {
      if (el) {
        isAnimatingOut.current = true
        gsap.to(el, {
          x: "100vw",
          duration: 0.4,
          onComplete: () => {
            setShouldRender(false)
            isAnimatingOut.current = false
          },
        })
      }
    }
  }, [isOpen])

  useLayoutEffect(() => {
    const el = containerRef.current
    if (shouldRender && isOpen && el) {
      requestAnimationFrame(() => {
        gsap.set(el, { x: "100vw" })
        gsap.to(el, {
          x: 0,
          duration: 0.5,
        })
      })
    }
  }, [shouldRender, isOpen])

  return shouldRender
}
