import React from "react";
import { Route, Routes } from "react-router-dom";
import CircuitsDetail from "./components/CircuitsDetail";
import AllTracks from "./pages/allTracks";
import WorldMaps from "./pages/worldMaps";
import Setting from "./pages/setting";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <div className=" bg-gray-900">

        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AllTracks" element={<AllTracks />} />
            <Route path="/WorldMaps" element={<WorldMaps />} />
            <Route path="/Settings" element={<Setting />} />
            <Route path="/CircuitDetail/:id" element={<CircuitsDetail />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
