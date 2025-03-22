"use client"

import { useState } from "react"
import Image from "next/image"

interface FloorPlansCarouselProps {
  floorPlans: string[]
  projectTitle: string
}

export default function FloorPlansCarousel({ floorPlans, projectTitle }: FloorPlansCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Only render if there are valid floor plans
  if (!floorPlans || floorPlans.length === 0 || (floorPlans.length === 1 && !floorPlans[0])) {
    return null
  }

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === floorPlans.length - 1 ? 0 : current + 1
    )
  }

  const prevSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? floorPlans.length - 1 : current - 1
    )
  }

  return (
    <div className="w-full px-8 py-6 my-4">
      <div className="mb-4 border-b-2 border-[#B7CCE9]">
        <h3 className="font-bold text-lg text-[#B7CCE9] font-sans antialiased">Plantas Baixas</h3>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-300"
               style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {floorPlans.map((floorPlan, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  src={floorPlan}
                  alt={`Planta baixa ${index + 1} - ${projectTitle}`}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {floorPlans.length > 1 && (
          <div className="flex justify-between w-full absolute top-1/2 transform -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="bg-[#B7CCE9] text-white p-2 rounded-full shadow hover:bg-[#91A8E0]"
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#B7CCE9] text-white p-2 rounded-full shadow hover:bg-[#91A8E0]"
            >
              &gt;
            </button>
          </div>
        )}

        {floorPlans.length > 1 && (
          <div className="flex justify-center mt-4">
            {floorPlans.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 mx-1 rounded-full ${currentSlide === index ? 'bg-[#B7CCE9]' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}