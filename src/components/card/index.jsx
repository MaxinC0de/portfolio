import styles from "./card.module.scss"

export default function Card({cover, title}) {
    return(
        <div className={styles.wrapper}>
            <img src={cover}/>
            <h1>{title}</h1>
        </div>
    )
}