import localFont from "next/font/local"

export const neue = localFont({
  src: [
    {
      path: "./neue-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./neue-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
})
