"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import Divider from "@ui/Divider"
import { useStore } from "@/app/hooks/useStore"

export default function SimpleContactForm() {
  const { register, handleSubmit, setValue } = useForm()
  const [selected, setSelected] = useState<number | null>(null)
  const PROJECT_TYPES = ["SITE WEB", "PHOTO", "DESIGN", "AUTRE"]
  const onSubmit = (data: any) => {
    console.log(data)
  }
  const handleSelect = (type: string, index: number) => {
    setSelected(index)
    setValue("projectType", type)
  }
  const { contactIsToggled } = useStore()
  if (!contactIsToggled) return null
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col p-4 bg-black text-white rounded-xl max-w-md mx-auto gap-4"
    >
      <Divider isPlus />
      <div className="flex flex-col">
        <label className="text-xs opacity-70 mb-1">VOTRE NOM *</label>
        <input
          {...register("name")}
          placeholder="Votre nom"
          className="border border-white font-black p-3 rounded-2xl"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-xs opacity-70 mb-1">VOTRE EMAIL *</label>
        <input
          type="email"
          {...register("email")}
          placeholder="Votre email"
          className="border border-white font-black p-3 rounded-2xl"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-xs opacity-70 mb-2">TYPE DE PROJET *</label>
        <input type="hidden" {...register("projectType")} />
        <div className="flex flex-wrap gap-2">
          {PROJECT_TYPES.map((type, i) => (
            <Button
              key={type}
              type="button"
              onClick={() => handleSelect(type, i)}
              className={`border border-white rounded-2xl ${
                selected === i ? "text-[#ff0000] border-[#ff0000]" : ""
              }`}
            >
              {type}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-xs opacity-70 mb-1">
          DESCRIPTION DU PROJET *
        </label>
        <textarea
          {...register("description")}
          placeholder="Description"
          className="h-[120px] border border-white p-3 rounded-2xl"
        />
      </div>
      <Button
        type="submit"
        className="text-red border border-red w-full mt-4 hover:!text-black hover:bg-[#ff0000] transition-colors duration-300"
      >
        ENVOYER
      </Button>
    </form>
  )
}
