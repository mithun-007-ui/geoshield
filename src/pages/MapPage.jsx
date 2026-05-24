import { useState } from "react";

export default function MapPage() {
  const hillStations = {
    Ooty: {
      "Ketti Valley": {
        risk: "HIGH",
        rainfall: "Heavy",
        moisture: "88%",
        road: "CLOSED",
        siren: "ON",
      },

      Coonoor: {
        risk: "MEDIUM",
        rainfall: "Moderate",
        moisture: "67%",
        road: "OPEN",
        siren: "OFF",
      },

      Avalanche: {
        risk: "LOW",
        rainfall: "Light",
        moisture: "42%",
        road: "OPEN",
        siren: "OFF",
      },
    },

    Kodaikanal: {
      "Guna Cave Road": {
        risk: "HIGH",
        rainfall: "Heavy",
        moisture: "91%",
        road: "CLOSED",
        siren: "ON",
      },

      "Pillar Rocks": {
        risk: "MEDIUM",
        rainfall: "Moderate",
        moisture: "71%",
        road: "OPEN",
        siren: "OFF",
      },

      Berijam: {
        risk: "LOW",
        rainfall: "Light",
        moisture: "38%",
        road: "OPEN",
        siren: "OFF",
      },
    },

    Munnar: {
      Devikulam: {
        risk: "HIGH",
        rainfall: "Heavy",
        moisture: "85%",
        road: "CLOSED",
        siren: "ON",
      },

      Mattupetty: {
        risk: "MEDIUM",
        rainfall: "Moderate",
        moisture: "69%",
        road: "OPEN",
        siren: "OFF",
      },

      "Top Station": {
        risk: "LOW",
        rainfall: "Light",
        moisture: "40%",
        road: "OPEN",
        siren: "OFF",
      },
    },

    Darjeeling: {
      "Tiger Hill": {
        risk: "HIGH",
        rainfall: "Heavy",
        moisture: "90%",
        road: "CLOSED",
        siren: "ON",
      },

      Lamahatta: {
        risk: "MEDIUM",
        rainfall: "Moderate",
        moisture: "64%",
        road: "OPEN",
        siren: "OFF",
      },

      "Batasia Loop": {
        risk: "LOW",
        rainfall: "Light",
        moisture: "39%",
        road: "OPEN",
        siren: "OFF",
      },
    },

    Sikkim: {
      Gangtok: {
        risk: "HIGH",
        rainfall: "Heavy",
        moisture: "93%",
        road: "CLOSED",
        siren: "ON",
      },

      "Nathula Pass": {
        risk: "MEDIUM",
        rainfall: "Moderate",
        moisture: "70%",
        road: "OPEN",
        siren: "OFF",
      },

      "Tsomgo Lake": {
        risk: "LOW",
        rainfall: "Light",
        moisture: "45%",
        road: "OPEN",
        siren: "OFF",
      },
    },
  };

  const [selectedStation, setSelectedStation] =
    useState("Ooty");

  const [selectedArea, setSelectedArea] =
    useState("Ketti Valley");

  const currentData =
    hillStations[selectedStation][selectedArea];

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
      }}
    >
      <h1>🗺 Landslide Risk Monitoring Map</h1>

      <p
        style={{
          color: "#94a3b8",
          marginTop: "10px",
        }}
      >
        Real-time hill station monitoring system
      </p>

      {/* Hill Station */}
      <div style={{ marginTop: "30px" }}>
        <label>🏔 Select Hill Station</label>

        <br />

        <select
          value={selectedStation}
          onChange={(e) => {
            const station = e.target.value;

            setSelectedStation(station);

            setSelectedArea(
              Object.keys(
                hillStations[station]
              )[0]
            );
          }}
          style={{
            marginTop: "10px",
            padding: "12px",
            width: "250px",
            borderRadius: "10px",
            background: "#1e293b",
            color: "white",
            border: "none",
            cursor: "pointer",
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

      {/* Area */}
      <div style={{ marginTop: "30px" }}>
        <label>📍 Nearby Area</label>

        <br />

        <select
          value={selectedArea}
          onChange={(e) =>
            setSelectedArea(e.target.value)
          }
          style={{
            marginTop: "10px",
            padding: "12px",
            width: "250px",
            borderRadius: "10px",
            background: "#1e293b",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {Object.keys(
            hillStations[selectedStation]
          ).map((area) => (
            <option key={area}>{area}</option>
          ))}
        </select>
      </div>

      {/* Risk Card */}
      <div
        style={{
          background:
            "linear-gradient(145deg,#1e293b,#111827)",

          marginTop: "40px",

          padding: "25px",

          borderRadius: "20px",

          boxShadow:
            "0 8px 20px rgba(0,0,0,0.4)",

          transition: "0.3s",

          cursor: "pointer",
        }}

        onMouseEnter={(e) => {
          e.currentTarget.style.transform =
            "scale(1.02)";

          e.currentTarget.style.boxShadow =
            "0 15px 30px rgba(0,0,0,0.6)";
        }}

        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "scale(1)";

          e.currentTarget.style.boxShadow =
            "0 8px 20px rgba(0,0,0,0.4)";
        }}
      >
        <h2>⚠ Live Risk Status</h2>

        <p style={{ marginTop: "20px" }}>
          🏔 Hill Station:
          <strong> {selectedStation}</strong>
        </p>

        <p style={{ marginTop: "10px" }}>
          📍 Area:
          <strong> {selectedArea}</strong>
        </p>

        <p style={{ marginTop: "10px" }}>
          🌧 Rainfall:
          <strong>
            {" "}
            {currentData.rainfall}
          </strong>
        </p>

        <p style={{ marginTop: "10px" }}>
          💧 Soil Moisture:
          <strong>
            {" "}
            {currentData.moisture}
          </strong>
        </p>

        <p style={{ marginTop: "10px" }}>
          🚧 Road Status:
          <strong> {currentData.road}</strong>
        </p>

        <p
          style={{
            marginTop: "15px",

            color:
              currentData.risk === "HIGH"
                ? "#ef4444"
                : currentData.risk === "MEDIUM"
                ? "#facc15"
                : "#22c55e",

            fontWeight: "bold",

            fontSize: "22px",
          }}
        >
          ⚠ Risk Level:
          {currentData.risk}
        </p>

        <p
          style={{
            marginTop: "15px",

            color:
              currentData.siren === "ON"
                ? "#ef4444"
                : "#22c55e",
          }}
        >
          🔊 Siren:
          {currentData.siren}
        </p>
      </div>
    </div>
  );
}