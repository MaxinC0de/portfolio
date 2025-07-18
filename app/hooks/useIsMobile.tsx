import { useState, useEffect } from "react"

export function useIsMobile(breakpoint = 768) {
  const getIsMobile = () =>
    typeof window !== "undefined"
      ? window.matchMedia(`(max-width: ${breakpoint}px)`).matches
      : false
  const [isMobile, setIsMobile] = useState(getIsMobile)

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`)
    const handleChange = (e) => setIsMobile(e.matches)

    mediaQuery.addEventListener("change", handleChange)
    setIsMobile(mediaQuery.matches)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [breakpoint])

  return isMobile
}
