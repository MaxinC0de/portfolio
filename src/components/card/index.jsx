import styles from "./card.module.scss"
import website from "../../assets/images/website.jpg"

import { NavLink } from "react-router-dom"

import data from "../../assets/data/data.json"

export default function Card() {
    const cards = data[0].cards
    return(
        <div style={{display:"flex",justifyContent:"space-evenly",margin:"7px"}}>
            {cards.map(el => (
                <div className={styles.wrapper}>
                    <div className={styles.external}>
                        <h1 style={{color:"white"}}>{el.title}</h1>
                        <p style={{color:"white"}}>{el.description}</p>
                        <NavLink target="_blank" to={el.websiteUrl}><img src={website} className={styles.website} alt="" /></NavLink>
                        <a href={el.githubUrl} target="_blank"><img src={`${process.env.PUBLIC_URL}${"/logos/github.png"}`} className={styles.redux} alt="" /></a>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}${el.image}`} className={styles.img} alt="" />
                </div>     
            ))}
        </div>
    )
}