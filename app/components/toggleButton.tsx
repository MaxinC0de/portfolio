import { Plus } from "lucide-react"

export default function ToggleButton() {
  return (
    <button className="md:hidden">
      <div className="w-6 h-6 border-red border-1 flex justify-center items">
        <Plus className="text-red" />
      </div>
    </button>
  )
}
