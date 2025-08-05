import About from "./components/sections/About"
import Banner from "./components/sections/Banner"
import ContactForm from "./components/contact/ContactForm"
import Divider from "./components/divider"
import Footer from "./components/footer"
import Infos from "./components/projects/Infos"
import ModalImage from "./components/modalImage"
import Nav from "./components/nav"
import ProjectDetails from "./components/projectDetails"
import Projects from "./components/projects/ProjectsLists"

export default function Home() {
  return (
    <div className="relative md:text-xs md:flex md:flex-col md:h-screen w-full max-w-[1440px] mx-auto p-3">
      <Nav />
      <Banner />
      <div className="md:flex md:flex-row-reverse md:flex-grow md:min-h-0">
        <div className="hidden h-full md:flex md:flex-col md:overflow-hidden md:w-[44vw] md:flex-shrink-0">
          <h1 className="md:sticky md:top-0 title hidden md:block">
            DETAILS DU PROJET
          </h1>
          <Infos />
          <div className="flex-1 flex flex-col min-h-0">
            <ProjectDetails />
          </div>
        </div>
        <div className="hidden md:block w-[0.5px] mx-3 h-full bg-white opacity-40"></div>
        <div className="flex-grow">
          <Projects />
        </div>
        <div className="hidden md:block w-[0.5px] mx-3 h-full bg-white opacity-40"></div>
        <div className="flex-shrink-0">
          <About />
        </div>
      </div>
      <Divider isHorizontal={true} isPlus={true} />
      <Footer />
      <ContactForm />
      <ModalImage />
    </div>
  )
}
