export default function TextForm() {
  const LABELS = [
    "Salut ! On serait ravi d’en savoir plus sur votre projet afin de voir si nous sommes le bon partenaire pour vous. Pour commencer, merci de consulter les informations ci-dessous, puis de remplir notre formulaire “Commençer”.",
    "Délais. Nous sommes un studio créatif indépendant, attaché à produire des résultats de grande qualité. Cela signifie que nous nous concentrons à fond sur un nombre limité de projets à la fois. Les demandes avec des délais très courts sont donc rarement possibles.",
    "Périmètre. Notre cœur de métier, c’est l’identité visuelle et la création de sites web — du design au développement. On reste ouverts à d'autres types de missions (!), mais on privilégie les projets ambitieux avec un vrai potentiel. Les demandes de petites retouches ou d’améliorations mineures ne sont pas vraiment dans notre zone d’intervention.",
    "Budget. Le budget dépend des livrables, des délais et des enjeux. Nos prestations les plus accessibles commencent autour de 500 €, et les projets plus complets peuvent aller jusqu’à 2000 € ou plus. Si vous avez un budget différent, n’hésitez pas à nous en parler — on reste toujours ouverts à la discussion.",
    "→ Si vous avez des questions ou des doutes sur notre compatibilité, n’hésitez pas à nous contacter.",
  ]
  return (
    <section>
      <h2 className="font-bold">DEMANDE DE PROJET</h2>
      {LABELS.map((label, i) => (
        <p key={i} className={`my-3 ${i === 4 ? "mb-6" : ""}`}>
          {label}
        </p>
      ))}
    </section>
  )
}
