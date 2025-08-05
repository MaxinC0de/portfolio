import { Plus } from "lucide-react"

export default function Divider({ isHorizontal = true, isPlus = false }) {
  return (
    <div className="flex items-center">
      {isPlus && <Plus className="size-5 opacity-40" />}
      <div
        className={`bg-white opacity-40 ${isHorizontal ? "w-full h-[0.5px]" : "w-[0.5px] h-full"}`}
      ></div>
      {isPlus && <Plus className="size-5 opacity-40" />}
    </div>
  )
}
