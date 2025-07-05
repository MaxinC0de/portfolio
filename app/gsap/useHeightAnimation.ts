import { useEffect } from "react"
import gsap from "gsap"

export function useHeightAnimation(ref, isOpen, onComplete) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.killTweensOf(el)

    if (isOpen) {
      gsap.fromTo(
        el,
        { height: 0 },
        {
          height: el.scrollHeight,
          duration: 0.4,
          onComplete: () => {
            el.style.height = "auto"
            onComplete()
          },
        },
      )
    } else {
      gsap.to(el, {
        height: 0,
        duration: 0.4,
        onComplete: () => {
          el.style.height = "0px"
          onComplete()
        },
      })
    }
  }, [isOpen, ref, onComplete])
}
