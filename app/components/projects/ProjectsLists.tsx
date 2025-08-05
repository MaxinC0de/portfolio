import { Fragment } from "react"
import Divider from "../ui/Divider"
import ProjectCard from "./ProjectCard"
import { projectsData } from "../../constants/projectsData"

export default function ProjectsLists() {
  return (
    <section className="md:w-[23vw]">
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
