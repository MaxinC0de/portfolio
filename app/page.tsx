import About from "./components/about"
import Banner from "./components/banner"
import Marquee from "./components/marquee"
import Nav from "./components/nav"
import Projects from "./components/projects"

export default function Home() {
  return (
    <div>
      <Nav />
      <Banner />
      <Marquee />
      <Projects />
      <About />
    </div>
  )
}
