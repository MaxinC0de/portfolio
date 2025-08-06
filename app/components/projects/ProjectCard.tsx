"use client"

import { useStore } from "@hooks/useStore"
import { Plus } from "lucide-react"
import ProjectDetails from "@projects/ProjectDetails"
import { useIsMobile } from "@/app/hooks/useIsMobile"

export default function ProjectCard({ project }) {
  const { isToggled, setIsToggledStore, setProject } = useStore()
  const { isMobile } = useIsMobile()
  const handleClick = () => {
    if (isToggled === project.id && isMobile) {
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
          <p className="w-full">{project?.description}</p>
          <div className="flex w-full md:mb-0 gap-4">
            {[
              { title: "SERVICES", items: project.services },
              { title: "STACK", items: project.stack },
            ].map(({ title, items }) => (
              <div key={title} className="flex flex-col flex-1 flex-wrap mt-3">
                <h2 className="title mb-1">{title}</h2>
                <div className="text-xs">{items.join(", ")}</div>
              </div>
            ))}
          </div>
          <ProjectDetails project={project} isToggled={isToggled} />
        </span>
      )}
    </>
  )
}
