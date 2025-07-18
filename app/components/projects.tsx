import { data } from "../data"
import Divider from "./divider"
import ProjectCard from "./projectCard"

export default function Projects() {
  return (
    <section>
      <h1 className="title mb-6">PROJETS</h1>
      {data.map((project) => (
        <>
          <Divider isHorizontal={true} isPlus={false} />
          <ProjectCard project={project} />
          <Divider isHorizontal={true} isPlus={false} />
        </>
      ))}
    </section>
  )
}
