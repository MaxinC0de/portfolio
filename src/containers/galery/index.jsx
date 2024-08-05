import Card from "../../components/card"
import {Link} from "react-router-dom"
import styles from "./galery.module.scss"
import housing from "../../assets/data/housing.json"

export default function Galery() {
    return(
        <div className={styles.wrapper}>
            {housing.map((house) => 
                <div key={house.id} className={styles.divImg}>
                    <Link to={`logements/${house.id}`} className={styles.link}>
                        <Card title={house.title} cover={house.cover} />
                    </Link>
                </div>
            )}
        </div>
    )
}