import { useRef } from "react"
import gsap from "gsap"

export function useInfosHoverAnimation() {
  const containerRef = useRef(null)
  const handleMouseEnter = () => {
    gsap.set(containerRef.current, { transformOrigin: "left" })
    gsap.to(containerRef.current, {
      scaleX: 1,
      duration: 0.3,
      ease: "power2.out",
    })
  }
  const handleMouseLeave = () => {
    gsap.set(containerRef.current, { transformOrigin: "right" })
    gsap.to(containerRef.current, {
      scaleX: 0,
      duration: 0.3,
      ease: "power2.in",
    })
  }
  return { containerRef, handleMouseEnter, handleMouseLeave }
}
