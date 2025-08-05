import { Button } from "@/components/ui/button"
import React, { useState } from "react"

export default function Input({
  index,
  type,
  placeholder,
  register,
  setValue,
}) {
  const LABELS = ["SITE WEB", "PHOTO", "DESIGN", "AUTRE"]
  const LABELS_NAMES = [
    "VOTRE NOM *",
    "VOTRE EMAIL *",
    "TYPE DE PROJET *",
    "DESCRIPTION DU PROJET *",
  ]
  const [isFocused, setIsFocused] = useState(null)
  const Label = ({ value }) => (
    <label className="text-xs opacity-70 font-extralight mb-3">{value}</label>
  )
  const inputClass = "border-1 border-white font-black p-3 rounded-2xl mb-6"
  if (index === 0 || index === 1) {
    return (
      <div className="flex flex-col">
        <Label value={LABELS_NAMES[index]} />
        <input className={inputClass} type={type} placeholder={placeholder} />
      </div>
    )
  } else if (index === 2) {
    const handleClicked = (label, j) => {
      setValue("selectedOption", label)
      setIsFocused(j)
      console.log(j)
    }

    return (
      <div className="flex flex-col">
        <Label value={LABELS_NAMES[index]} />
        <input type="hidden" {...register("selectedOption")} />
        <div className="flex flex-wrap">
          {LABELS.map((label, j) => (
            <React.Fragment key={label}>
              <Button
                onClick={() => {
                  handleClicked(label, j)
                }}
                className={`border-1 border-white rounded-2xl mr-3 ${j === isFocused ? "text-[#ff0000] border-[#ff0000]" : ""}`}
              >
                {label}
              </Button>
            </React.Fragment>
          ))}
        </div>
      </div>
    )
  } else if (index === 3) {
    return (
      <div className="flex flex-col mt-6">
        <Label value={LABELS_NAMES[index]} />
        <textarea
          {...register}
          placeholder="DESCRIPTION"
          className="h-[30vh] border-1 border-white p-3 rounded-2xl"
        />
      </div>
    )
  }
}
