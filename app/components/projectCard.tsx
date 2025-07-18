"use client"

import { Plus } from "lucide-react"
import ProjectDetails from "./projectDetails"
import { useStore } from "../hooks/useStore"

export default function ProjectCard({ project }) {
  const { isToggled, setIsToggledStore, setProject } = useStore()
  return (
    <>
      <article
        onClick={() => {
          ;(setIsToggledStore(!isToggled), setProject(project))
        }}
        className="flex flex-col justify-center"
      >
        <div
          onClick={() => {
            setIsToggled(!isToggled)
          }}
          className="flex justify-between items-center my-6 md:my-3"
        >
          <p className={`${isToggled ? "text-red" : ""} font-bold`}>
            {project.title}
          </p>
          <div className="flex items-center text-xs">
            <p>{project.type}</p>
            <div className="ml-[20vw] border-1 border-red p-1 text-red md:hidden">
              <Plus />
            </div>
          </div>
        </div>
      </article>
      <span className="md:hidden">
        <ProjectDetails project={project} isToggled={isToggled} />
      </span>
    </>
  )
}
