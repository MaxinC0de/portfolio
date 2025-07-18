export default function About() {
  const labels = [
    "Web Design",
    "Développement de sites web",
    "Copywriting",
    "Optimisation SEO",
    "Design graphique",
    "Photographie",
    "Retouche photo",
  ]
  return (
    <section className="">
      <h1 className="title my-6">A PROPOS DE NOUS</h1>
      <p>
        Studio Regenade, est un studio créatif indépendant qui conçoit des
        marques, des expériences numériques et des solutions technologiques pour
        faire avancer des projets porteurs de sens.
      </p>
      <p className="mt-3">
        Nos clients nous considèrent comme des partenaires de confiance,
        investis à leurs côtés — ce qui, entre nous, est presque trompeur, car
        nous sommes encore plus engagés qu’eux. Quel que soit leur secteur
        d’activité, ils partagent tous une même ambition : occuper une place
        sincère et significative dans la vie de leurs publics et utilisateurs.
      </p>
      <h1 className="title my-6">SERVICES</h1>
      {labels.map((el) => (
        <p>→ {el}</p>
      ))}
    </section>
  )
}
