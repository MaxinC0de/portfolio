"use client"

import { useForm } from "react-hook-form"
import Input from "../input"
import TextForm from "../textForm"
import { useContactStore } from "../../hooks/useStore"
import Divider from "../divider"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactForm() {
  const { register, handleSubmit, setValue } = useForm()
  const { contactIsToggled } = useContactStore()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const LABELS = [
    ["text", "mail", "button", "text"],
    ["NOM", "EMAIL", "", "DETAILS DU PROJET"],
    ["SITE WEB", "PHOTO", "DESIGN", "AUTRE"],
  ]
  const handleSubmitAnimation = () => {
    ;(setIsSubmitted(true),
      setTimeout(() => {
        setIsSubmitted(false)
      }, 1000))
  }
  if (contactIsToggled)
    return (
      <section className="fixed z-20 top-0 left-0 w-screen h-screen bg-black flex flex-col items-center p-3">
        <span className="w-full mt-14 mb-3">
          <Divider isHorizontal={true} isPlus={true} />
        </span>
        <div className="flex-1 w-full overflow-y-auto">
          <TextForm />
          <form>
            {LABELS[0].map((_, i) => (
              <Input
                key={i}
                index={i}
                type={LABELS[0][i]}
                placeholder={LABELS[1][i]}
                register={register}
              />
            ))}
          </form>
          <Button
            onSubmit={handleSubmit((data) => {
              console.log(data)
            })}
            onClick={handleSubmitAnimation}
            className="text-red border-1 border-red w-full mt-6 hover:!text-[#000000] hover:bg-[#ff0000] transition-colors duration-300 cursor-pointer"
          >
            {isSubmitted ? "SUCCES" : "COMMENCER"}
          </Button>
        </div>
      </section>
    )
}
