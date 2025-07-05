"use client"

import { data } from "../data"
import { useIsMobile } from "../hooks/useIsMobile"
import GalleryItem from "./galleryItem"
import { useToggleAnimation } from "../hooks/useToggleAnimation"
import Details from "./details"

export default function Gallery() {
  const isMobile = useIsMobile()
  const { isToggled, animatingIndex, setAnimatingIndex, handleToggle } =
    useToggleAnimation()

  return (
    <div>
      <section className="flex flex-col mx-auto">
        <h1 className="title mb-3">PROJETS</h1>
        {data.map((item, i) => (
          <GalleryItem
            key={i}
            i={i}
            title={item.title}
            type={item.type}
            isToggled={isToggled}
            animatingIndex={animatingIndex}
            handleToggle={handleToggle}
            setAnimatingIndex={setAnimatingIndex}
          />
        ))}
      </section>

      {!isMobile && (
        <Details
          i={isToggled}
          isMobile={false}
          setIsToggled={setAnimatingIndex}
        />
      )}
    </div>
  )
}
