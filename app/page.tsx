import About from "./components/about"
import Banner from "./components/banner"
import Footer from "./components/footer"
import Gallery from "./components/gallery"
import Nav from "./components/nav"

export default function Home() {
  return (
    <div>
      <Nav />
      <Banner />
      <Gallery />
      <About />
      <Footer />
    </div>
  )
}
