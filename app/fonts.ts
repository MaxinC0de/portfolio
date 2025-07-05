import localFont from "next/font/local"

export const neue = localFont({
  src: [
    {
      path: "./fonts/neue-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/neue-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue",
  display: "swap",
})

export const messina = localFont({
  src: [
    {
      path: "./fonts/messina.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-messina",
  display: "swap",
})
