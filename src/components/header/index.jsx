import logo from "../../assets/images/logo.png"
import { NavLink } from "react-router-dom"
import styles from "./header.module.scss"

export default function Header() {
    return(
        <div className={styles.wrapper}>
            <img src={logo}/>
            <nav>
                <NavLink to="/" className={({isActive}) => isActive ? styles.active : ""}>Accueil</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? styles.active : ""}>A propos</NavLink>
            </nav>
        </div>
    )
}