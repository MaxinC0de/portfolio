import Header from "../../components/header/index"
import Footer from "../../components/footer/index"
import { Link } from "react-router-dom"
import styles from "./error.module.scss"

export default function ErrorPage() {
    return(
        <>
            <Header />
            <div className={styles.wrapper}>
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </>
    )
}