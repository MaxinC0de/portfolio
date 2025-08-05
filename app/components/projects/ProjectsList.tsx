import { Fragment } from "react"
import Divider from "../ui/Divider"
import ProjectCard from "./ProjectCard"
import { projectsData } from "../../constants/projectsData"

export default function ProjectsList() {
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
