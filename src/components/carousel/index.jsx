import {useState} from "react"
import styles from "./carousel.module.scss"
import left from "../../assets/images/chevron-left.png"
import right from "../../assets/images/chevron-right.png"
import housing from "../../assets/data/housing.json"

export default function Carousel({i}) {
    const index = i
    const current = housing[index]
    const [count, setCount] = useState(0)

    const nextSlide = () => {setCount(count + 1); if (count > current.pictures.length - 2) {setCount(0)}}
    const prevSlide = () => {setCount(count - 1); if (count < 1) {setCount(current.pictures.length - 1)}}

    return(
        <div className={styles.wrapper}>
            {current.pictures.length != 1 &&
                <>
                    <img onClick={prevSlide} className={styles.left} src={left}/>
                    <img onClick={nextSlide} className={styles.right} src={right}/>
                    <div className={styles.counting}>{`${count + 1}/${current.pictures.length}`}</div>
                </>}
            <img src={current.pictures[count]}/>
        </div>
    )    
}