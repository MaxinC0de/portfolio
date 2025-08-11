// components/contact/ContactSheet.jsx
"use client"

import { useRef, useState, forwardRef } from "react"
import { useForm } from "react-hook-form"
import Divider from "@ui/Divider"
import { Button } from "../../../components/ui/button"
import { useContactStore } from "@hooks/useStore"
import { useContactAnimation } from "@gsap/useContactAnimation"

const DEFAULT_TYPES = ["SITE WEB", "PHOTO", "DESIGN", "AUTRE"]
const DEFAULT_LABELS = {
  close: "FERMER",
  name: "VOTRE NOM *",
  email: "VOTRE EMAIL *",
  type: "TYPE DE PROJET *",
  description: "DESCRIPTION DU PROJET *",
  budget: "ESTIMATION DU BUDGET *",
  time: "ESTIMATION DU TEMPS AVANT LIVRAISON *",
  discovery: "COMMENT VOUS NOUS AVEZ VOUS TROUVES ? *",
  submit: "CONFIRMER",
  success: "MESSAGE ENVOYÉ AVEC SUCCÈS",
}

export default function ContactSheet({
  projectTypes = DEFAULT_TYPES,
  labels = DEFAULT_LABELS,
  onSubmit,
}) {
  const { contactIsToggled, setContactIsToggled } = useContactStore()
  const wrapperRef = useRef(null)
  const shouldRender = useContactAnimation(wrapperRef, contactIsToggled)

  const { register, handleSubmit, setValue, reset } = useForm()
  const [selected, setSelected] = useState(null)
  const [isSent, setIsSent] = useState(false)

  const handleSelect = (type, index) => {
    setSelected(index)
    setValue("projectType", type)
  }

  const submit = (data) => {
    if (typeof onSubmit === "function") {
      onSubmit(data)
    } else {
      console.log("Form submitted:", data)
    }
    setIsSent(true)
    reset()
    setSelected(null)
    const t = setTimeout(() => setIsSent(false), 1500)
    return () => clearTimeout(t)
  }

  if (!shouldRender) return null

  return (
    <div className="fixed inset-0 z-50">
      {contactIsToggled ? (
        <Backdrop onClose={() => setContactIsToggled(false)} />
      ) : null}

      <ContactPanel
        ref={wrapperRef}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(submit)}
      >
        <CloseButton onClick={() => setContactIsToggled(false)}>
          {labels.close}
        </CloseButton>

        <Divider isPlus />

        <div className="flex flex-col">
          <label className="text-xs opacity-70 mb-1">{labels.name}</label>
          <InputField
            placeholder="Votre nom"
            className="border border-white p-3 rounded-2xl"
            {...register("name")}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-xs opacity-70 mb-1">{labels.email}</label>
          <InputField
            type="email"
            placeholder="Votre email"
            className="border border-white p-3 rounded-2xl"
            {...register("email")}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-xs opacity-70 mb-2">{labels.type}</label>
          <ProjectTypeSelector
            options={projectTypes}
            selectedIndex={selected}
            onSelect={handleSelect}
            register={register}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-xs opacity-70 mb-1">
            {labels.description}
          </label>
          <TextAreaField
            placeholder="Description"
            className="h-[120px] border border-white p-3 rounded-2xl"
            {...register("description")}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex flex-col flex-1">
            <label className="text-xs opacity-70 mb-1">{labels.budget}</label>
            <SelectField
              className="border border-white p-3 rounded-2xl bg-black"
              {...register("budget")}
              options={["500€-2000€", "2000€-5000€", "5000€+"]}
              placeholder="Sélectionnez un budget"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-xs opacity-70 mb-1">{labels.time}</label>
            <InputField
              placeholder="ex: 3-4 semaines"
              className="border border-white p-3 rounded-2xl"
              {...register("deliveryTime")}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-xs opacity-70 mb-1">{labels.discovery}</label>
          <SelectField
            className="border border-white p-3 rounded-2xl bg-black"
            {...register("discovery")}
            options={["Instagram", "Google", "Autre"]}
            placeholder="Sélectionnez une option"
          />
        </div>

        <Button
          type="submit"
          className="text-red border border-red w-full mt-4 hover:!text-black hover:bg-[#ff0000] transition-all duration-500"
        >
          {isSent ? labels.success : labels.submit}
        </Button>
      </ContactPanel>
    </div>
  )
}

// ---- Inline subcomponents (same file) ----
function Backdrop({ onClose }) {
  return (
    <div
      className="absolute inset-0 bg-black/70 transition-opacity duration-300"
      onClick={onClose}
    />
  )
}

const ContactPanel = forwardRef(function ContactPanel(props, ref) {
  const { children, onSubmit, onClick } = props
  return (
    <div className="absolute right-0 top-0 h-full w-full md:w-[50vw] z-10">
      <form
        ref={ref}
        onSubmit={onSubmit}
        onClick={onClick}
        className="flex flex-col p-3 bg-black text-white w-full h-full gap-4"
      >
        {children}
      </form>
    </div>
  )
})

function CloseButton({ onClick, children }) {
  return (
    <Button
      type="button"
      onClick={onClick}
      className="relative ml-auto rounded-xl mt-2.5 w-auto z-30 text-white font-bold text-lg border border-red bg-red"
    >
      {children}
    </Button>
  )
}

const InputField = forwardRef(function InputField(props, ref) {
  const { className = "", ...rest } = props
  return <input ref={ref} className={className} {...rest} />
})

const TextAreaField = forwardRef(function TextAreaField(props, ref) {
  const { className = "", ...rest } = props
  return <textarea ref={ref} className={className} {...rest} />
})

const SelectField = forwardRef(function SelectField(props, ref) {
  const { className = "", options = [], placeholder, ...rest } = props
  return (
    <select ref={ref} className={className} {...rest}>
      {placeholder ? <option value="">{placeholder}</option> : null}
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  )
})

function ProjectTypeSelector({ options, selectedIndex, onSelect, register }) {
  return (
    <>
      <input type="hidden" {...register("projectType")} />
      <div className="flex flex-wrap gap-2">
        {options.map((type, i) => (
          <Button
            key={type}
            type="button"
            onClick={() => onSelect(type, i)}
            className={`border border-white rounded-2xl ${
              selectedIndex === i ? "text-[#ff0000] border-[#ff0000]" : ""
            }`}
          >
            {type}
          </Button>
        ))}
      </div>
    </>
  )
}
