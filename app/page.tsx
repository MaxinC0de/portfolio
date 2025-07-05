import About from "./components/about"
import Banner from "./components/banner"
import Footer from "./components/footer"
import Gallery from "./components/gallery"
import Nav from "./components/nav"

export default function Home() {
  return (
    <div className="md:overflow-hidden">
      <Nav />
      <Banner />
      <div className="md:flex md:flex-row-reverse md:justify-end md:h-[77vh]">
        <Gallery />
        <div className="w-[0.5px] h-auto bg-white opacity-60 mx-[2vw] hidden md:block"></div>
        <About />
      </div>
      <Footer />
    </div>
  )
}
