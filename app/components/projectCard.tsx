"use client"

import { Plus } from "lucide-react"
import { useState } from "react"
import ProjectDetails from "./projectDetails"

export default function ProjectCard({ project }) {
  const [isToggled, setIsToggled] = useState(false)
  return (
    <article
      onClick={() => {
        setIsToggled(!isToggled)
      }}
      className="flex flex-col justify-center my-5"
    >
      <div className="flex justify-between items-center">
        <p className={`${isToggled ? "text-red" : ""}`}>{project.title}</p>

        <div className="flex items-center">
          <p>{project.type}</p>

          <div className="ml-[15vw] border-1 border-red p-1 text-red">
            <Plus />
          </div>
        </div>
      </div>
      <ProjectDetails project={project} isToggled={isToggled} />
    </article>
  )
}
