"use client"
import { useEffect, useState } from "react"
import style from "./video.module.css"

export default function Video() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    setIsVideoLoaded(true)
  }, [])

  return (
    <video
      tabIndex="0"
      preload="none"
      loop
      autoPlay
      muted
      playsInline
      aria-label="video"
      className={style.video}
    >
      {isVideoLoaded && (
        <source
          src="/video/nyc.mp4"
          type="video/mp4"
        />
      )}
    </video>
  )
}
