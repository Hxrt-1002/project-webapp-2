import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import circuit from "../data/circuit"

// fix marker icon
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
})

const CircuitsDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const selectedCircuit = circuit.find(
    item => item.id === Number(id)
  )

  if (!selectedCircuit) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-red-600 text-2xl font-bold">
          Circuit Not Found
        </h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <div className="relative h-[450px] md:h-[550px] overflow-hidden">
        <img
          src={selectedCircuit.image}
          alt={selectedCircuit.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full transition-all duration-300 shadow-lg"
        >
          ← Back
        </button>

        <div className="absolute bottom-12 left-12">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            {selectedCircuit.name}
          </h1>
          <div className="w-24 h-1 bg-red-600 mt-4"></div>
        </div>
      </div>

      {/* DETAILS */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12 mb-16">

          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Country
            </h2>
            <p className="text-gray-300 text-lg">
              {selectedCircuit.country}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Continent
            </h2>
            <p className="text-gray-300 text-lg">
              {selectedCircuit.continent}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Circuit Length
            </h2>
            <p className="text-gray-300 text-lg">
              {selectedCircuit.length}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Corners
            </h2>
            <p className="text-gray-300 text-lg">
              {selectedCircuit.corners} Turns
            </p>
          </div>

        </div>

        <h2 className="text-3xl font-bold mb-6">
            Track Layout
          </h2>
        <img src={circuit.layoutImage} alt="Track Layout" />

        {/* MAP SECTION */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            📍 Location Map
          </h2>

          <div className="h-[400px] rounded-xl overflow-hidden border border-gray-800">
            <MapContainer
              center={[selectedCircuit.lat, selectedCircuit.lng]}
              zoom={13}
              scrollWheelZoom={true}
              className="h-full w-full"
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker position={[selectedCircuit.lat, selectedCircuit.lng]}>
                <Popup>
                  <strong>{selectedCircuit.name}</strong>
                  <br />
                  {selectedCircuit.country}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CircuitsDetail
