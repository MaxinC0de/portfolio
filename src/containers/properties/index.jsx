import styles from "./properties.module.scss"
import housing from "../../assets/data/housing.json"
import Collapsible from "../../components/collapsible/index"
import star from "../../assets/images/star.png"
import "../../components/collapsible"

export default function Properties({i}) {
    const index = i
    const current = housing[index]

    const equipments = (current.equipments).map((equipment, index) =>
        <li key={index}>{equipment}</li>
    )
    return(
        <>
            <ul className={styles.ul}>
                <li>
                    <h1>{current.title}</h1>
                    <h2>{current.location}</h2>
                    <div className={styles.divTags}>{current.tags.map((tag, index) => <div key={index} className={styles.tag}>{tag}</div>)}</div>
                </li>                    
                <li className={styles.wrapperHost}>
                    <ol className={styles.hostProfile}>
                        <h4>{current.host.name}</h4>
                        <div className={styles.circle}><img className={styles.hostPicture} src={current.host.picture}/></div>
                    </ol>
                    <div>
                        {Array.from({length : current.rating}).map((_, index) =>(<img  key={index} src={star} className={`${styles.pink} ${styles.star}`}/>))}
                        {Array.from({length : 5 - current.rating}).map((_, index) =>(<img key={index} src={star} className={`${styles.grey} ${styles.star}`}/>))}
                    </div>
                </li>
            </ul>
            <ul className={styles.divCollapsibles}>
                <div><Collapsible style={styles.collapsible} title="Description" text={current.description} p={styles.p} /></div>
                <div><Collapsible style={styles.collapsibleLeft} title="Equipements" text={equipments} p={styles.p} /></div>
            </ul>
        </>
    )
}