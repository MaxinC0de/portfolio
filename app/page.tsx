import About from "@sections/About"
import Banner from "@sections/Banner"
import ContactForm from "@contact/ContactForm"
import Divider from "@ui/Divider"
import Footer from "@ui/Footer"
import Infos from "@projects/Infos"
import ModalImage from "@ui/ModalImage"
import Nav from "@ui/Nav"
import ProjectDetails from "@projects/ProjectDetails"
import ProjectsList from "@projects/ProjectsList"

const VerticalDivider = () => (
  <div className="hidden md:block w-[0.5px] mx-3 h-full bg-white opacity-40" />
)

export default function Home() {
  return (
    <div className="relative md:text-xs md:flex md:flex-col md:h-screen w-full mx-auto p-3">
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
        <VerticalDivider />
        <div className="flex-grow">
          <ProjectsList />
        </div>
        <VerticalDivider />
        <div className="flex-shrink-0">
          <About />
        </div>
      </div>
      <Divider isPlus />
      <Footer />
      <ContactForm />
      <ModalImage />
    </div>
  )
}
