import { Plus } from "lucide-react"

export default function Divider({ horizontal, plus }) {
  return (
    <div className="flex items-center md:my-3">
      {plus && <Plus className="opacity-60 size-5" />}
      <div
        className={`bg-white opacity-60 ${horizontal ? "w-full h-[0.5px]" : "w-[0.5px] h-auto"}`}
      ></div>
      {plus && <Plus className="opacity-60 size-5" />}
    </div>
  )
}
