"use client"

import { useStore } from "@hooks/useStore"
import { Plus } from "lucide-react"
import ProjectDetails from "@projects/ProjectDetails"

export default function ProjectCard({ project }) {
  const { isToggled, setIsToggledStore, setProject } = useStore()
  const handleClick = () => {
    if (isToggled === project.id) {
      setIsToggledStore(null)
    } else {
      setIsToggledStore(project.id)
    }
    setProject(project)
  }
  return (
    <>
      <article
        onClick={handleClick}
        className="flex flex-col justify-center cursor-pointer"
      >
        <div className="flex justify-between items-center my-3 md:my-3">
          <p
            className={`${isToggled === project.id ? "text-red" : ""} font-bold`}
          >
            {project.title}
          </p>
          <div className="flex items-center text-xs">
            <p className="md:text-[10px] whitespace-nowrap">{project.type}</p>
            <div className="ml-[20vw] border-1 border-red p-1 text-red md:hidden">
              <Plus />
            </div>
          </div>
        </div>
      </article>
      {isToggled === project.id && (
        <span className="md:hidden">
          <ProjectDetails project={project} isToggled={isToggled} />
        </span>
      )}
    </>
  )
}
