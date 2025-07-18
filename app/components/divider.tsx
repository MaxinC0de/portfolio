import { Plus } from "lucide-react"

export default function Divider({ isHorizontal, isPlus }) {
  return (
    <div className="flex items-center">
      {isPlus && <Plus className="mr-2 opacity-40" />}
      <div
        className={`bg-white opacity-40 ${isHorizontal ? "w-full h-[0.5px]" : "w-[0.5px] h-auto"}`}
      ></div>
      {isPlus && <Plus className="ml-2 opacity-40" />}
    </div>
  )
}
