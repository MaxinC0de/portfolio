"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import Divider from "@ui/Divider"
import { useContactStore } from "@/app/hooks/useStore"

export default function SimpleContactForm() {
  const { register, handleSubmit, setValue, reset } = useForm()
  const [selected, setSelected] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const PROJECT_TYPES = ["SITE WEB", "PHOTO", "DESIGN", "AUTRE"]

  const { contactIsToggled, setContactIsToggled } = useContactStore()

  useEffect(() => {
    if (contactIsToggled) {
      setShouldRender(true)
      setIsVisible(false)
      setTimeout(() => setIsVisible(true), 20)
    } else {
      setIsVisible(false)
      const timeout = setTimeout(() => setShouldRender(false), 300)
      return () => clearTimeout(timeout)
    }
  }, [contactIsToggled])

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data)

    setTimeout(() => {
      setIsSent(true)
      reset()
      setSelected(null)

      setTimeout(() => {
        setIsSent(false)
        setContactIsToggled(false)
      }, 2500)
    }, 500)
  }

  const handleSelect = (type: string, index: number) => {
    setSelected(index)
    setValue("projectType", type)
  }

  if (!shouldRender) return null

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-black/50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={() => setContactIsToggled(false)}
    >
      {!isSent ? (
        <form
          onClick={(e) => e.stopPropagation()}
          onSubmit={handleSubmit(onSubmit)}
          className={`relative flex flex-col p-4 bg-black text-white rounded-xl max-w-md mx-auto gap-4 border-3 border-white transition-all duration-300 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
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
      ) : (
        <div
          className={`p-6 bg-black text-white rounded-xl border-3 border-green-500 transition-all duration-300 ease-out transform ${
            isSent ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-lg font-bold text-green-500">
            Message envoyé avec succès !
          </p>
        </div>
      )}
    </div>
  )
}
