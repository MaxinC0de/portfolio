import Header from "../../components/header/index"
import Properties from "../../containers/properties/index"
import Footer from "../../components/footer/index"
import Carousel from "../../components/carousel/index"
import housing from "../../assets/data/housing.json"
import {useLocation} from "react-router-dom"

export default function HouseProperties() {
    const location = useLocation()
    const index = housing.findIndex(house => house.id === location.pathname.slice(11))
    return(
        <>
            <Header />
            <Carousel i={index} />
            <Properties i={index} />
            <Footer />
        </>
    )
}