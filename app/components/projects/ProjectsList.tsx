"use client"

import { Fragment, useEffect } from "react"
import Divider from "../ui/Divider"
import ProjectCard from "./ProjectCard"
import { projectsData } from "../../constants/projectsData"
import { useIsMobile } from "@/app/hooks/useIsMobile"
import { useStore } from "@/app/hooks/useStore"

export default function ProjectsList() {
  const { isMobile } = useIsMobile()
  const { setIsToggledStore, setProject } = useStore()

  useEffect(() => {
    if (isMobile === false && projectsData.length > 0) {
      setIsToggledStore(projectsData[0].id)
      setProject(projectsData[0])
    }
  }, [isMobile, setIsToggledStore, setProject])
  return (
    <section className="md:w-full">
      <h1 className="title mb-6 md:mb-3">PROJETS</h1>
      {projectsData.map((project) => (
        <Fragment key={project.id}>
          <Divider isHorizontal={true} isPlus={false} />
          <ProjectCard project={project} />
          <Divider isHorizontal={true} isPlus={false} />
        </Fragment>
      ))}
    </section>
  )
}
