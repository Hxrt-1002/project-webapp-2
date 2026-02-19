import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"
import circuit from './../data/circuit';

// แก้ปัญหา marker icon ไม่ขึ้น
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const WorldMaps = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white pt-34">
      <Header />

      <main className="flex-1">
        <h1 className="text-3xl font-bold text-center py-6">
          🌍 F1 World Circuits Map
        </h1>

        <hr className="ms-25 me-25 border-1"/>

        <div className="h-[75vh] w-full px-6 pb-6 pt-5">
          <MapContainer
            center={[20, 0]}
            zoom={2}
            scrollWheelZoom={true}
            className="h-full w-full rounded-2xl pt-24"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {circuit.map((circuit) => (
              <Marker key={circuit.id} position={[circuit.lat, circuit.lng]}>
                <Popup>
                  <div className="text-black">
                    <h2 className="font-bold">{circuit.name}</h2>
                    <p>{circuit.country}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </main>

    </div>
  );
};

export default WorldMaps;
