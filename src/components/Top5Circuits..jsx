 import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import circuit from '../data/circuit'

const Top5Circuits = () => {
  const navigate = useNavigate()

  const topCircuits = useMemo(() => {
    return [...circuit]
      .sort((a, b) => b.corners - a.corners)
      .slice(0, 5)
  }, [])

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % topCircuits.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      (prev - 1 + topCircuits.length) % topCircuits.length
    )
  }

  const handleViewDetails = () => {
    navigate(`/circuit/${topCircuits[currentSlide].id}`)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % topCircuits.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [topCircuits.length])

  return (
    <div className="relative w-full h-screen min-h-[600px] bg-black text-white overflow-hidden">

      {topCircuits.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-0"
            }`}
        >
          {/* Background Image */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] z-0 ease-linear ${index === currentSlide ? "scale-110" : "scale-100"
              }`}
            style={{
              backgroundImage: `url(${slide.image})`
            }}
          ></div>

          {/* Dark Overlay */}
          < div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 z-10 to-black/40"></div>

          {/* Content */}
          <div className="relative z-30 flex items-center justify-start h-full px-6 sm:px-10 md:px-16 lg:px-20 max-w-5xl">

            <div className='ps-15'>
              {/* Top Badge */}
              <div className="inline-block bg-red-600 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold tracking-widest rounded-md shadow-lg">
                🏆 TOP 5 MOST CORNERS
              </div>

              {/* Rank */}
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-red-600 mt-4 sm:mt-6 drop-shadow-lg">
                #{index + 1}
              </h1>

              {/* Circuit Name */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 sm:mt-4 leading-tight">
                {slide.name}
              </h2>

              {/* Country */}
              <p className="text-base sm:text-xl text-gray-300 mt-2">
                {slide.country}
              </p>

              {/* Corners */}
              <div className="mt-4 sm:mt-6 flex items-center gap-3 sm:gap-4">
                <div className="bg-red-600 px-4 py-3 sm:px-6 sm:py-4 rounded-xl text-2xl sm:text-3xl font-bold shadow-xl">
                  {slide.corners}
                </div>
                <span className="text-lg sm:text-2xl tracking-wide">
                  Corners
                </span>
              </div>

              {/* Button */}
              <button
                onClick={handleViewDetails}
                className="mt-6 sm:mt-8 bg-red-600 hover:bg-red-700 active:bg-red-800 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                View Circuit Details
              </button>
            </div>

          </div>
        </div >
      ))}

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute z-40 left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-red-600 active:bg-red-700 p-2.5 sm:p-4 rounded-full transition-all text-sm sm:text-base "
      >
        <svg
          className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute z-40 right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-red-600 active:bg-red-700 p-2.5 sm:p-4 rounded-full transition-all text-sm sm:text-base"
      >
        <svg
          className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 5l7 7-7 7'
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute z-40 bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
        {topCircuits.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 sm:h-3 rounded-full cursor-pointer transition-all ${index === currentSlide
              ? "bg-red-600 w-8 sm:w-12"
              : "bg-gray-500 w-2 sm:w-3"
              }`}
          />
        ))}
      </div>

    </div >
  )
}

export default Top5Circuits