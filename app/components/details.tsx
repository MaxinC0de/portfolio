"use client"

import { useEffect } from "react"
import { data } from "../data"
import Image from "next/image"

export default function Details({ i, isMobile, setIsToggled }) {
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
      <p>{data[i].description}</p>
      <div className="w-full flex">
        <div className="flex flex-col w-[50%]">
          <h3 className="title mt-1 mb-3">SERVICES</h3>
          <div className="text-xs">
            {data[i].services.map((p, i) => (
              <>{p}</>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-[50%]">
          <h3 className="title mt-1 mb-3">STACK</h3>
          <div className="text-xs">
            {data[i].stack.map((p, i) => (
              <>{p}</>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1></h1>
    </div>
  )
}
