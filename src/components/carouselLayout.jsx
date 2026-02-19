import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import circuit from '../data/circuit';

const CarouselLayout = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % circuit.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + circuit.length) % circuit.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const handleViewDetails = () => {
    navigate(`/destination/${circuit[currentSlide].id}`)
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % circuit.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide])

  return (
    <div className='relative w-full h-screen overflow-hidden group ps-2 pe-2 sm:ps-6 sm:pe-6 md:ps-12 md:pe-12 lg:ps-20 lg:pe-20'>
      {/* Main Carousel Container */}
      <div className='relative h-full w-full'>
        {circuit.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className='w-full h-full object-cover'
            />
            {/* Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent'></div>

            {/* Text Content */}
            <div className='absolute bottom-16 left-3 right-3 sm:bottom-20 sm:left-6 sm:right-6 md:bottom-24 md:left-12 md:right-12 lg:left-20 lg:right-20 text-white'>
              <h2 className='text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2 sm:mb-4 md:mb-6 animate-fade-in leading-tight'>
                {slide.title}
              </h2>
              <p className='text-sm sm:text-base md:text-xl lg:text-2xl opacity-90 mb-3 sm:mb-4 md:mb-6 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl animate-fade-in-delay line-clamp-3 sm:line-clamp-none'>
                {slide.description}
              </p>
              <button
                onClick={handleViewDetails}
                className='bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-delay-2'
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className='absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 active:bg-white/60 backdrop-blur-sm text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 z-10'
        aria-label='Previous slide'
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
        className='absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 active:bg-white/60 backdrop-blur-sm text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 z-10'
        aria-label='Next slide'
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

      {/* Dot Indicators */}
      <div className='absolute bottom-5 sm:bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 md:space-x-3 z-10'>
        {circuit.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-6 sm:w-8 md:w-12'
                : 'bg-white/50 hover:bg-white/75 w-2 md:w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default CarouselLayout