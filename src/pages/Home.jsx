import React from "react";
import Header from "../components/Header";
import CarouselLayout from "../components/carouselLayout";
import Footer from "../components/Footer";
import Top5Circuits from "../components/Top5Circuits.";

const Home = () => {
  return (
    <>
      <Header />

      <div className="pt-49">
        <h2 className="text-4xl text-white font-semibold text-center pb-15">
          Recommended Destinations
        </h2>
        <hr className="ms-25 me-25 mb-10 border-1 text-white" />
          <div className="w-screen overflow-x-hidden">
            <Top5Circuits />
          </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
