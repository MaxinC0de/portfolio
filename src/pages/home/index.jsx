import "../../assets/global.scss"
import background from "../../assets/images/background-banner.png"
import Header from "../../components/header/index"
import Footer from "../../components/footer/index"
import Banner from "../../components/banner/index"
import Galery from "../../containers/galery"


export default function Home() {
    return(
        <>
            <Header />
            <Banner text="Chez vous, partout et ailleurs" src={background} />
            <Galery />
            <Footer />
        </>
    )
}

