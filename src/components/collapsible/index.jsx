import {useState} from "react"
import arrow from "../../assets/images/up-arrow-angle.png"
import styles from "./collapsible.module.scss"

export default function Collapsible({title, text, p, style}) {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
            <li className={style}>
                {title}
                <img onClick={() => setIsOpen((isOpen) => !isOpen)} id="arrow" className={isOpen ? styles.rotated : ""} src={arrow}/>
            </li>
            {isOpen && <p className={p}>{text}</p>}
        </>
    )
}