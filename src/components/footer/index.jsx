import styles from "./footer.module.scss"
import logo from "../../assets/images/logo.png"

export default function Footer() {
    return(
        <div className={styles.wrapper}>
            <img src={logo}/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}