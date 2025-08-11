"use client"

import { ABOUT_LABELS } from "../../constants/about"

export default function About() {
  return (
    <section className="my-3 mt-6 md:my-0 md:mt-0 md:mb-3 md:w-[23vw] overflow-y-scroll scroll-hidden">
      <h1 className="title mb-3 md:mt-0">A PROPOS DE NOUS</h1>
      <p className="leading-tight">
        Studio Regenade, est un studio créatif indépendant qui conçoit des
        marques, des expériences numériques et des solutions technologiques pour
        faire avancer des projets porteurs de sens.
      </p>
      <p className="mt-3 leading-tight">
        Nos clients nous considèrent comme des partenaires de confiance,
        investis à leurs côtés — ce qui, entre nous, est presque trompeur, car
        nous sommes encore plus engagés qu’eux. Quel que soit leur secteur
        d’activité, ils partagent tous une même ambition : occuper une place
        sincère et significative dans la vie de leurs publics et utilisateurs.
      </p>
      <h1 className="title mb-3 mt-6">SERVICES</h1>
      {ABOUT_LABELS.map((el, i) => (
        <p key={i}>→ {el}</p>
      ))}
    </section>
  )
}
