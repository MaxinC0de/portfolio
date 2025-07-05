"use client"

import { useEffect, useState } from "react"
import { data } from "../data"
import Image from "next/image"

export default function Details({ i, isMobile, setIsToggled }) {
  const [isInfoToggled, setIsInfoToggled] = useState(false)
  useEffect(() => {
    if (!isMobile) {
      setIsToggled(0)
    }
  }, [isMobile, setIsToggled])
  return isMobile ? (
    <div className="mb-3 flex flex-col gap-y-3">
      {data[i]?.src.map((src, i) => (
        <Image
          src={src}
          alt=""
          width={700}
          height={300}
          className="rounded-lg object-cover"
        />
      ))}

      <p>{data[i]?.description}</p>
      <div className="w-full flex">
        <div className="flex flex-col w-[50%]">
          <h3 className="title mt-1 mb-3">SERVICES</h3>
          <div className="text-xs">
            {data[i]?.services.map((p, i) => (
              <>{p}</>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-[50%]">
          <h3 className="title mt-1 mb-3">STACK</h3>
          <div className="text-xs">
            {data[i]?.stack.map((p, i) => (
              <>{p}</>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="w-[45vw]">
        <div className="flex justify-between">
          <h1 className="title mb-6">DETAILS DU PROJET</h1>
          <button
            onClick={() => {
              setIsInfoToggled(!isInfoToggled)
            }}
            className="text-red cursor-pointer"
          >
            INFO
          </button>
        </div>
        {!isInfoToggled &&
          data[i]?.src.map((src, i) => (
            <Image
              src={src}
              alt=""
              width={700}
              height={300}
              className="rounded-lg object-cover"
            />
          ))}
        {isInfoToggled && (
          <>
            <p>{data[i]?.description}</p>
            <div className="w-full flex">
              <div className="flex flex-col w-[50%]">
                <h3 className="title mt-1 mb-3">SERVICES</h3>
                <div className="text-xs">
                  {data[i]?.services.map((p, i) => (
                    <>{p}</>
                  ))}
                </div>
              </div>
              <div className="flex flex-col w-[50%]">
                <h3 className="title mt-1 mb-3">STACK</h3>
                <div className="text-xs">
                  {data[i]?.stack.map((p, i) => (
                    <>{p}</>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[0.5px] h-auto bg-white opacity-60 mx-[2vw] hidden md:block"></div>
          </>
        )}
      </div>

      <div className="w-[0.5px] h-auto bg-white opacity-60 mx-[2vw] hidden md:block"></div>
    </>
  )
}
