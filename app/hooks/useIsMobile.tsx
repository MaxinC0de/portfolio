import { useState, useEffect } from "react"

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const handleResizeOrOrientation = () => {
      const isPhone = window.innerWidth < 768
      const isLandscape = window.matchMedia("(orientation: landscape)").matches
      setIsMobile(isPhone && !isLandscape)
    }

    handleResizeOrOrientation()
    window.addEventListener("resize", handleResizeOrOrientation)
    window.addEventListener("orientationchange", handleResizeOrOrientation)

    return () => {
      window.removeEventListener("resize", handleResizeOrOrientation)
      window.removeEventListener("orientationchange", handleResizeOrOrientation)
    }
  }, [])

  return { isMobile }
}
