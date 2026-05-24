import { useState } from "react";

export default function MapPage() {
  const hillStations = {
    Ooty: [
      "Ketti Valley",
      "Coonoor",
      "Avalanche",
    ],

    Kodaikanal: [
      "Guna Cave Road",
      "Pillar Rocks",
      "Berijam",
    ],

    Munnar: [
      "Devikulam",
      "Mattupetty",
      "Top Station",
    ],

    Darjeeling: [
      "Tiger Hill",
      "Batasia Loop",
      "Lamahatta",
    ],

    Sikkim: [
      "Gangtok",
      "Nathula Pass",
      "Tsomgo Lake",
    ],
  };

  const [selectedStation, setSelectedStation] =
    useState("Ooty");

  const [selectedArea, setSelectedArea] =
    useState("Ketti Valley");

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
      }}
    >
      <h1>🗺 Landslide Risk Map</h1>

      <p
        style={{
          color: "#94a3b8",
          marginTop: "10px",
        }}
      >
        Monitor hill stations and nearby
        landslide-prone zones
      </p>

      {/* Hill Station */}
      <div style={{ marginTop: "30px" }}>
        <label
          style={{
            fontSize: "18px",
          }}
        >
          🏔 Select Hill Station
        </label>

        <br />

        <select
          value={selectedStation}
          onChange={(e) => {
            setSelectedStation(e.target.value);

            setSelectedArea(
              hillStations[e.target.value][0]
            );
          }}
          style={{
            marginTop: "10px",
            padding: "12px",
            width: "260px",
            borderRadius: "10px",
            border: "none",
            fontSize: "16px",
          }}
        >
          {Object.keys(hillStations).map(
            (station) => (
              <option key={station}>
                {station}
              </option>
            )
          )}
        </select>
      </div>

      {/* Nearby Area */}
      <div style={{ marginTop: "30px" }}>
        <label
          style={{
            fontSize: "18px",
          }}
        >
          📍 Nearby Risk Zone
        </label>

        <br />

        <select
          value={selectedArea}
          onChange={(e) =>
            setSelectedArea(e.target.value)
          }
          style={{
            marginTop: "10px",
            padding: "12px",
            width: "260px",
            borderRadius: "10px",
            border: "none",
            fontSize: "16px",
          }}
        >
          {hillStations[selectedStation].map(
            (area) => (
              <option key={area}>{area}</option>
            )
          )}
        </select>
      </div>

      {/* Risk Card */}
      <div
        style={{
          background: "#1e293b",
          marginTop: "40px",
          padding: "25px",
          borderRadius: "15px",
        }}
      >
        <h2>⚠ Current Risk Status</h2>

        <p style={{ marginTop: "15px" }}>
          🏔 Hill Station:
          <strong> {selectedStation}</strong>
        </p>

        <p style={{ marginTop: "10px" }}>
          📍 Nearby Area:
          <strong> {selectedArea}</strong>
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#ef4444",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          HIGH LANDSLIDE RISK DETECTED
        </p>

        <p
          style={{
            marginTop: "15px",
            color: "#94a3b8",
          }}
        >
          Siren Activated • Checkpost Alerted
        </p>
      </div>
    </div>
  );
}