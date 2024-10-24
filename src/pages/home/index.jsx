import "../../assets/global.scss"
import Header from "../../components/header/index"
import Footer from "../../components/footer/index"
import Stars from "../../components/stars/index"
import Card from "../../components/card/index"
import styles from "./home.module.scss"
import graph from "../../assets/images/graph.png"
import { useEffect } from "react"

export default function Home() { 
  const skills = ["C", "O", "M", "P", "E", "T", "E", "N", "C", "E", "S"]

  useEffect(() => {
    document.body.className = styles.portfolioHomePage
    return () => {
      document.body.className = ""
    }
  })
  
  return(
    <>
      <Header />

      <div>
        <Stars />
      </div>

      <div style={{border:"white solid 15px"}}>
        <div style={{display:"flex"}}>
          <h1 style={{color:"white",marginBottom:"100px",fontSize:"70px",marginTop:"-30px"}}>MAXIME BRETON <span className={styles.gradient}><br/>FRONTEND</span><br/><span style={{borderBottom:"white solid 10px",paddingBottom:"20px"}}>DEVELOPPER</span></h1>
          <div style={{display:"flex"}}>
              <div className={styles.competencesContainer}>
                {skills.map(el => (
                  <p className={styles.competencesLetters}>{el}</p>
                ))}
              </div>
              <img src={graph} className={styles.graph} alt="" />
            </div>
        </div>
        
        <div className={styles.about}>
          <h2 className={styles.aboutTitle}>A propos de moi</h2>
          <div className={styles.bento1}></div>
          
          <div className={styles.wrapper}>
            <div style={{width:"100%"}}>
              <p className={styles.description}>Après trois ans de prépa commerce j'ai décidé de me réorienter.
                J'ai toujours été curieux vis-à-vis des métiers de l'informatique. Plus petit je me suis 
                intéressé aux langages html et css, et ce n'est que récemment que je m'y suis intéressé à nouveau
                grâce aux nombreuses ressources gratuites en ligne proposées par des sites connus.
                C'est dans la continuité de ce mouvement que j'ai décidé de me former aux langages du 
                web developpment. 
              </p>
            </div>
            <div className={styles.bento2}></div>
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}