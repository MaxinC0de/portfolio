import About from "./components/about"
import Banner from "./components/banner"
import Divider from "./components/divider"
import Footer from "./components/footer"
import Nav from "./components/nav"
import ProjectDetails from "./components/projectDetails"
import Projects from "./components/projects"

export default function Home() {
  return (
    <div className="md:text-xs md:flex md:flex-col md:h-screen w-full max-w-[1440px] mx-auto p-3">
      <Nav />
      <Banner />
      <div className="md:flex md:flex-row-reverse md:justify-end md:flex-grow md:min-h-0">
        <div className="hidden md:block h-full overflow-auto">
          <h1 className="title hidden md:block md:mb-3">DETAILS DU PROJET</h1>
          <ProjectDetails />
        </div>
        <div className="hidden md:block w-[0.5px] mx-3 h-full bg-white opacity-40"></div>
        <Projects />
        <div className="hidden md:block w-[0.5px] mx-3 h-full bg-white opacity-40"></div>
        <About />
      </div>
      <Divider isHorizontal={true} isPlus={true} />
      <Footer />
    </div>
  )
}
