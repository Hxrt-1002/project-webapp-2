import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Top5Circuits from "../components/Top5Circuits";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">

      <Header />

      {/* ================= HERO ================= */}
      <section className="pt-36 pb-24 border-b border-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-6">

            <div className="flex items-center gap-3">
              <div className="h-1 w-14 bg-[var(--primary)]"></div>
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-[var(--primary)]">
                Welcome to
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
              <span className="text-[var(--primary)]">APEX</span> CIRCUITS
            </h1>

            <p className="max-w-2xl text-lg opacity-80 leading-relaxed">
              Experience the world's most prestigious racing circuits.
              Discover the speed, precision and heritage that define
              elite motorsport.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/AllTracks"
                className="px-8 py-4 bg-[var(--primary)] hover:opacity-90 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Browse Circuits
              </Link>

              <Link
                to="/WorldMaps"
                className="px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white font-bold rounded-lg transition-all duration-300"
              >
                View Map
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TOP 5 ================= */}
      <section className="py-24 border-b border-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-14 bg-[var(--primary)]"></div>
              <span className="uppercase tracking-[0.3em] text-sm font-bold text-[var(--primary)]">
                Featured
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Top 5 Circuits
            </h2>
          </div>

          <Top5Circuits />
        </div>
      </section>

      {/* ================= WHY SECTION ================= */}
      <section className="py-24 border-b border-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-14 bg-[var(--primary)]"></div>
              <span className="uppercase tracking-[0.3em] text-sm font-bold text-[var(--primary)]">
                Why F1
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              What Makes Each Track Unique
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Historic Circuits",
                desc: "Legendary venues with decades of racing heritage and unforgettable moments.",
              },
              {
                title: "Global Presence",
                desc: "Races across multiple continents showcasing diverse cultures and fans.",
              },
              {
                title: "Modern Innovation",
                desc: "State-of-the-art facilities and cutting-edge circuit design.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border-l-4 border-[var(--primary)] bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold uppercase tracking-wide mb-3 text-[var(--primary)]">
                  {item.title}
                </h3>
                <p className="opacity-80">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 border-b border-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

            {[
              { value: "24", label: "Grand Prix" },
              { value: "73", label: "Years of History" },
              { value: "10", label: "Teams" },
              { value: "20", label: "Drivers" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-black text-[var(--primary)]">
                  {stat.value}
                </div>
                <p className="mt-3 font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="p-12 rounded-2xl border border-[var(--primary)] bg-white dark:bg-gray-900 shadow-2xl">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>
                <h2 className="text-4xl font-black mb-4">
                  Ready to Explore the Circuits?
                </h2>
                <p className="opacity-80 text-lg">
                  Dive into detailed circuit data, layouts and race history
                  from the world's elite racing venues.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  to="/AllTracks"
                  className="px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-lg hover:opacity-90 transition-all duration-300 text-center shadow-lg"
                >
                  Browse All Tracks
                </Link>

                <Link
                  to="/WorldMaps"
                  className="px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white font-bold rounded-lg transition-all duration-300 text-center"
                >
                  View Locations
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;