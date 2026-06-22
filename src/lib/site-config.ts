export const siteConfig = {
  name: "Maxime Breton",
  title: "Développeur web freelance",
  email: "pro.maximebreton@gmail.com",
  maltUrl: "https://www.malt.fr/profile/maximebreton1",
  formSpreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
  availability: "2 créneaux disponibles, fin juin / début juillet",
  pricing: {
    landing: 390,
    vitrine: 590,
  },
} as const;
