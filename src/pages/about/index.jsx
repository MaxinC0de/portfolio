import Header from "../../components/header/index"
import Banner from "../../components/banner/index"
import Collapsible from "../../components/collapsible/index"
import Footer from "../../components/footer/index"
import styles from "../../components/collapsible/collapsible.module.scss"
import background from "../../assets/images/background-banner-2.png"
import descriptions from "../../assets/data/descriptions.json"

export default function About() {
    return(
        <>
            <Header />
            <Banner src={background} />
            <ul>
                {descriptions.map(description => {
                    return(
                        <Collapsible 
                            key={description.title}
                            style={styles.li} 
                            title={description.title} 
                            text={description.text} 
                            p={styles.p} 
                        />
                    )
                })}
            </ul>
            <Footer />
        </>
    )
}