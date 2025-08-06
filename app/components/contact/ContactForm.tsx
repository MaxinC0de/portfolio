"use client"

import { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import Divider from "@ui/Divider"
import { useContactStore } from "@/app/hooks/useStore"
import { useContactAnimation } from "@/app/gsap/useContactAnimation"

export default function SimpleContactForm() {
  const { register, handleSubmit, setValue, reset } = useForm()
  const [selected, setSelected] = useState<number | null>(null)
  const [isSent, setIsSent] = useState(false)

  const { contactIsToggled, setContactIsToggled } = useContactStore()

  const wrapperRef = useRef<HTMLFormElement>(null)
  const shouldRender = useContactAnimation(wrapperRef, contactIsToggled)

  const PROJECT_TYPES = ["SITE WEB", "PHOTO", "DESIGN", "AUTRE"]

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data)
    setTimeout(() => {
      setIsSent(true)
      reset()
      setSelected(null)
      setTimeout(() => setIsSent(false), 1500)
    }, 500)
  }

  const handleSelect = (type: string, index: number) => {
    setSelected(index)
    setValue("projectType", type)
  }

  if (!shouldRender) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      onClick={() => setContactIsToggled(false)}
    >
      <form
        ref={wrapperRef}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex flex-col p-3 bg-black text-white w-full h-screen gap-4"
      >
        <Button
          onClick={() => setContactIsToggled(false)}
          className="relative ml-auto mt-2.5 w-[20vw] z-30 text-red font-bold text-lg border border-red bg-black"
        >
          FERMER
        </Button>
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
          className="text-red border border-red w-full mt-4 hover:!text-black hover:bg-[#ff0000] transition-all duration-500"
        >
          {isSent ? "MESSAGE ENVOYE AVEC SUCCES" : "CONFIRMER"}
        </Button>
      </form>
    </div>
  )
}
