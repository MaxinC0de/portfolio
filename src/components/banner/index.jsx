import styles from "./banner.module.scss"

export default function Banner({src, text}) {
    return(
        <span className={styles.span}>
            <h1>{text && text}</h1>
            <img src={src}/>
        </span>
    )
}