import { useState } from "react"

export function useToggleAnimation() {
  const [isToggled, setIsToggled] = useState(null)
  const [animatingIndex, setAnimatingIndex] = useState(null)

  function handleToggle(i) {
    if (isToggled === i) {
      setIsToggled(null)
      setAnimatingIndex(i)
    } else {
      setIsToggled(i)
      setAnimatingIndex(i)
    }
  }

  return {
    isToggled,
    animatingIndex,
    setAnimatingIndex,
    setIsToggled,
    handleToggle,
  }
}
