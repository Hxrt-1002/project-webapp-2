import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Top5Circuits from "../components/Top5Circuits.";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-black to-zinc-900 text-white pt-34 pb-16 border-b border-red-600 flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-red-600"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-red-500">
                Welcome to
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight">
              <span className="text-red-600">APEX</span> CIRCUITS
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
              Experience the world's most prestigious Formula 1 racing circuits. Discover the speed, precision, and unforgettable moments that define motorsport excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Top 5 Circuits Section */}
      <div className="w-full bg-black">
        <Top5Circuits />
      </div>

      {/* Recommended Destinations Section */}
      <div className="w-full bg-gradient-to-b from-black to-zinc-900 py-16 border-t border-red-600">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-red-600"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-red-500">
                Featured
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Why Choose F1 Circuits?
            </h2>
            <p className="text-gray-400 text-lg mt-3">
              Discover what makes Formula 1 the pinnacle of motorsport
            </p>
          </div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group bg-gradient-to-br from-red-900/30 to-red-900/10 border border-red-600/50 rounded-lg p-6 hover:border-red-500 transition-all duration-300 hover:bg-red-900/20">
              <div className="text-3xl mb-3"></div>
              <h3 className="text-xl font-bold text-white mb-2">Historic Circuits</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Discover legendary tracks with decades of racing heritage and passionate fan bases worldwide
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-gradient-to-br from-red-900/30 to-red-900/10 border border-red-600/50 rounded-lg p-6 hover:border-red-500 transition-all duration-300 hover:bg-red-900/20">
              <div className="text-3xl mb-3"></div>
              <h3 className="text-xl font-bold text-white mb-2">Global Coverage</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                From Europe to Asia, Americas to Oceania - experience racing on every continent
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-gradient-to-br from-red-900/30 to-red-900/10 border border-red-600/50 rounded-lg p-6 hover:border-red-500 transition-all duration-300 hover:bg-red-900/20">
              <div className="text-3xl mb-3"></div>
              <h3 className="text-xl font-bold text-white mb-2">Modern Technology</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                State-of-the-art facilities and cutting-edge track designs pushing the limits of racing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="w-full bg-black py-16 border-y border-red-600/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-red-600 mb-3">24</div>
              <p className="text-gray-300 font-semibold">Grand Prix Races</p>
              <p className="text-gray-500 text-sm mt-1">Per Season</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-red-600 mb-3">73</div>
              <p className="text-gray-300 font-semibold">Years of History</p>
              <p className="text-gray-500 text-sm mt-1">Since 1950</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-red-600 mb-3">10</div>
              <p className="text-gray-300 font-semibold">Teams Competing</p>
              <p className="text-gray-500 text-sm mt-1">Championship Battle</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-red-600 mb-3">20</div>
              <p className="text-gray-300 font-semibold">Elite Drivers</p>
              <p className="text-gray-500 text-sm mt-1">Per Season</p>
            </div>
          </div>
        </div>
      </div>

      {/* Circuit Highlights Section */}
      <div className="w-full bg-gradient-to-b from-black to-zinc-900 py-16 border-b border-red-600/30">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-red-600"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-red-500">
                Highlights
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              What Makes Each Track Unique
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Monaco */}
            <div className="flex gap-4 items-start p-6 bg-gradient-to-br from-red-900/20 to-transparent border-l-4 border-red-600 rounded-lg hover:bg-red-900/30 transition-all duration-300">
              <span className="text-4xl flex-shrink-0"></span>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Monaco Grand Prix</h3>
                <p className="text-gray-300 text-sm">The most prestigious and glamorous race, navigating through narrow street circuits of Monte Carlo</p>
              </div>
            </div>

            {/* Monza */}
            <div className="flex gap-4 items-start p-6 bg-gradient-to-br from-red-900/20 to-transparent border-l-4 border-red-600 rounded-lg hover:bg-red-900/30 transition-all duration-300">
              <span className="text-4xl flex-shrink-0"></span>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Italian Grand Prix</h3>
                <p className="text-gray-300 text-sm">The fastest circuit with incredible top speeds, featuring iconic turns like Parabolica and Eau Rouge</p>
              </div>
            </div>

            {/* Silverstone */}
            <div className="flex gap-4 items-start p-6 bg-gradient-to-br from-red-900/20 to-transparent border-l-4 border-red-600 rounded-lg hover:bg-red-900/30 transition-all duration-300">
              <span className="text-4xl flex-shrink-0"></span>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">British Grand Prix</h3>
                <p className="text-gray-300 text-sm">The home of motorsport, combining history with modern challenges at this legendary British track</p>
              </div>
            </div>

            {/* Singapore */}
            <div className="flex gap-4 items-start p-6 bg-gradient-to-br from-red-900/20 to-transparent border-l-4 border-red-600 rounded-lg hover:bg-red-900/30 transition-all duration-300">
              <span className="text-4xl flex-shrink-0"></span>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Singapore Grand Prix</h3>
                <p className="text-gray-300 text-sm">The thrilling night race featuring street circuits with tight corners and demanding physical challenges</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full bg-black py-16 border-b border-red-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-red-900/40 to-red-900/10 border border-red-600/50 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Explore the Circuits?</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Discover detailed information about every Formula 1 circuit, including track layouts, records, and fascinating facts about each venue.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Link
                  to="/AllTracks"
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 text-center shadow-lg"
                >
                  Browse All Tracks
                </Link>
                <Link
                  to="/WorldMaps"
                  className="px-8 py-4 bg-transparent border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-bold rounded-lg transition-all duration-300 text-center"
                >
                  View Location
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
