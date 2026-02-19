import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import circuit from "../data/circuit"

const AllTracks = () => {
  const navigate = useNavigate()
  const rowRefs = useRef({})

  const continents = [...new Set(circuit.map((item) => item.continent))]

  const scroll = (continent, direction) => {
    const container = rowRefs.current[continent]
    const scrollAmount = 300

    if (container) {
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const continentDescriptions = {
    Europe: "The historic heart of Formula 1 racing, featuring legendary circuits with decades of tradition and passionate fans.",
    Asia: "Fast-growing racing region with state-of-the-art facilities and massive audiences. Home to some of the most modern circuits.",
    Americas: "The new world of F1 featuring iconic American venues and emerging circuits pushing the boundaries of track design.",
    Oceania: "The antipodean circuit bringing F1 to the Southern Hemisphere with unique racing conditions and electrifying atmospheres.",
    "Middle East": "Ultra-modern night racing circuits showcasing cutting-edge technology and spectacular nighttime racing experiences.",
    Africa: "Rising prominence in the F1 calendar with circuits offering unique challenges and rich motorsport heritage.",
  }

  return (
    <>
      <Header />

      <div className="min-h-screen text-white">
        {/* Hero Section */}
        <div className="pt-32 px-8 pb-16 border-b-2 border-red-600">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-6xl font-black mb-4 tracking-tight">
              <span className="text-red-600">APEX</span> CIRCUITS
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              Experience the world's most prestigious racing circuits. Each track tells a story of speed, precision, and unforgettable moments.
            </p>
          </div>
        </div>

        {/* Continents Grid */}
        <div className="px-8 py-16">
          <div className="max-w-6xl mx-auto">
            {continents.map((continent) => (
              <div key={continent} className="mb-24">
                {/* Continent Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-1 w-16 bg-red-600"></div>
                    <h2 className="text-4xl font-black uppercase tracking-wide">
                      {continent}
                    </h2>
                  </div>
                  <p className="text-gray-300 text-base max-w-3xl ml-20">
                    {continentDescriptions[continent]}
                  </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-end gap-2 mb-6">
                  <button
                    onClick={() => scroll(continent, "left")}
                    className="group relative h-10 w-10 rounded-full bg-gray-900 border border-red-600 hover:bg-red-600 transition-all duration-300 flex items-center justify-center"
                    title="Scroll left"
                  >
                    <span className="text-white font-bold">‹</span>
                  </button>

                  <button
                    onClick={() => scroll(continent, "right")}
                    className="group relative h-10 w-10 rounded-full bg-gray-900 border border-red-600 hover:bg-red-600 transition-all duration-300 flex items-center justify-center"
                    title="Scroll right"
                  >
                    <span className="text-white font-bold">›</span>
                  </button>
                </div>

                {/* Circuits Carousel */}
                <div
                  ref={(el) => (rowRefs.current[continent] = el)}
                  className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
                >
                  {circuit
                    .filter((item) => item.continent === continent)
                    .map((item) => (
                      <div
                        key={item.id}
                        onClick={() => navigate(`/circuitDetail/${item.id}`)}
                        className="group relative min-w-80 h-56 rounded-lg overflow-hidden cursor-pointer shrink-0 border-2 border-gray-800 hover:border-red-600 transition-all duration-300"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent group-hover:via-red-900/20 transition-all duration-500 pointer-events-none"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-between p-5 pointer-events-none">
                          <div className="self-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-red-600 text-black px-3 py-1 rounded-full text-xs font-bold">
                              {item.country}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                              {item.name}
                            </h3>
                            <div className="flex gap-4 text-xs text-gray-300">
                              <span>📏 {item.length}</span>
                              <span>🔄 {item.corners} turns</span>
                            </div>
                          </div>
                        </div>

                        {/* Hover accent line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default AllTracks
