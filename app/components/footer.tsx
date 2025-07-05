import Divider from "./divider"

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <Divider horizontal={true} plus={true} />
      <p className="flex ml-auto mt-3 opacity-60 messina">© 2025</p>
    </footer>
  )
}
