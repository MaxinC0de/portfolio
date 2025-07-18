import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export const useDetailsAnimation = (containerRef, isToggled) => {
  useGSAP(() => {
    const el = containerRef.current
    if (!el) return

    if (isToggled) {
      gsap.set(el, { height: "auto" })
      const fullHeight = el.scrollHeight
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        {
          height: fullHeight,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(el, { height: "auto" })
          },
        },
      )
    } else {
      const currentHeight = el.offsetHeight
      gsap.set(el, { height: currentHeight })
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      })
    }
  }, [isToggled])
}
