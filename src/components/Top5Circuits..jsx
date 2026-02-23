import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import circuit from "../data/circuit";

const Top5Circuits = () => {
  const navigate = useNavigate();

  const topCircuits = useMemo(() => {
    return [...circuit]
      .sort((a, b) => b.corners - a.corners)
      .slice(0, 5);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % topCircuits.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + topCircuits.length) % topCircuits.length
    );
  };

  const handleViewDetails = () => {
    navigate(`/circuit/${topCircuits[currentSlide].id}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % topCircuits.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [topCircuits.length]);

  return (
    <div className="relative w-full h-screen min-h-[600px] bg-[var(--bg)] text-[var(--text)] overflow-hidden transition-colors duration-300">

      {topCircuits.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-0"
          }`}
        >
          {/* Background */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-linear ${
              index === currentSlide ? "scale-110" : "scale-100"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Overlay (dynamic based on theme) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/80 to-transparent"></div>

          {/* Content */}
          <div className="relative z-30 flex items-center h-full px-10 max-w-5xl">

            <div>
              {/* Badge */}
              <div className="inline-block bg-[var(--primary)] text-white px-4 py-2 text-sm font-bold tracking-widest rounded-md shadow-lg">
                🏆 TOP 5 MOST CORNERS
              </div>

              {/* Rank */}
              <h1 className="text-6xl md:text-8xl font-extrabold text-[var(--primary)] mt-6 drop-shadow-lg">
                #{index + 1}
              </h1>

              {/* Circuit Name */}
              <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
                {slide.name}
              </h2>

              {/* Country */}
              <p className="text-lg md:text-xl opacity-80 mt-2">
                {slide.country}
              </p>

              {/* Corners */}
              <div className="mt-6 flex items-center gap-4">
                <div className="bg-[var(--primary)] text-white px-6 py-4 rounded-xl text-3xl font-bold shadow-xl">
                  {slide.corners}
                </div>
                <span className="text-2xl tracking-wide">
                  Corners
                </span>
              </div>

              {/* Button */}
              <button
                onClick={handleViewDetails}
                className="mt-8 bg-[var(--primary)] hover:opacity-90 active:scale-95 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                View Circuit Details
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Prev */}
      <button
        onClick={prevSlide}
        className="absolute z-40 left-6 top-1/2 -translate-y-1/2 bg-[var(--surface)]/70 hover:bg-[var(--primary)] text-[var(--text)] hover:text-white p-4 rounded-full transition-all"
      >
        ❮
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute z-40 right-6 top-1/2 -translate-y-1/2 bg-[var(--surface)]/70 hover:bg-[var(--primary)] text-[var(--text)] hover:text-white p-4 rounded-full transition-all"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute z-40 bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {topCircuits.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full cursor-pointer transition-all ${
              index === currentSlide
                ? "bg-[var(--primary)] w-12"
                : "bg-[var(--surface)] w-3"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default Top5Circuits;