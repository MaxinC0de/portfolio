import { stretch } from "../../fonts"

export default function Footer() {
  return (
    <footer className="flex justify-end mt-3">
      <p className={`text-xs ${stretch.className}`}>
        © {new Date().getFullYear()}
      </p>
    </footer>
  )
}
