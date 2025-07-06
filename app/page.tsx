import About from "./components/about"
import Banner from "./components/banner"
import Footer from "./components/footer"
import Gallery from "./components/gallery"
import LocomotiveWrapper from "./components/locomotiveWrapper"
import Nav from "./components/nav"

export default function Home() {
  return (
    <div className="md:overflow-hidden" data-scroll-container>
      <LocomotiveWrapper>
        <Nav />
        <Banner />
        <div className="md:flex md:flex-row-reverse md:justify-end md:h-[77vh]">
          <Gallery />
          <div className="w-[0.5px] h-auto bg-white opacity-60 mx-[2vw] hidden md:block"></div>
          <About />
        </div>
        <Footer />
      </LocomotiveWrapper>
    </div>
  )
}
