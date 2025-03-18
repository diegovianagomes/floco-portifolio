"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ImageGalleryProps {
  images: string[]
  interval?: number
  fadeTime?: number
}

export default function ImageGallery({ images, interval = 5000, fadeTime = 1000 }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Iniciar com fade-in após 1000ms
    const initialTimer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    // Configurar o intervalo para trocar as imagens
    const intervalTimer = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        setIsVisible(true)
      }, fadeTime)
    }, interval)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(intervalTimer)
    }
  }, [images.length, interval, fadeTime])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {images.map((src: string, index: number) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity bg-white"
          style={{
            opacity: currentImageIndex === index && isVisible ? 1 : 0,
            transitionDuration: `${fadeTime}ms`,
            zIndex: currentImageIndex === index ? 10 : 0,
          }}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Gallery image ${index + 1}`}
            width={1200}
            height={800}
            className="w-full h-screen object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  )
}

