
import { useState } from "react";
import '../index.css'
import StatusCard from "../components/StatusCard";
import SensorChart from "../components/SensorChart";

export default function Dashboard() {

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
        padding: "35px",
        color: "white",
      }}
    >

      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1 style={{ fontSize: "38px" }}>
            🚨 Landslide Dashboard
          </h1>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "10px",
            }}
          >
            Smart AI-Based Disaster Monitoring Platform
          </p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "15px 20px",
            borderRadius: "15px",
            marginTop: "20px",
          }}
        >
          🛰 System Status: ONLINE
        </div>
      </div>

      {/* Dropdowns */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >

        {/* Station */}
        <select
          value={selectedStation}
          onChange={(e) => {

            const station = e.target.value;

            setSelectedStation(station);

            setSelectedArea(
              Object.keys(hillStations[station])[0]
            );
          }}

          style={{
            padding: "14px",
            width: "260px",
            borderRadius: "12px",
            background: "#1e293b",
            color: "white",
            border: "none",
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

        {/* Area */}
        <select
          value={selectedArea}
          onChange={(e) =>
            setSelectedArea(e.target.value)
          }

          style={{
            padding: "14px",
            width: "260px",
            borderRadius: "12px",
            background: "#1e293b",
            color: "white",
            border: "none",
          }}
        >
          {Object.keys(
            hillStations[selectedStation]
          ).map((area) => (
            <option key={area}>
              {area}
            </option>
          ))}
        </select>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        <StatusCard
          title="Risk Level"
          value={currentData.risk}
          color="#ef4444"
        />

        <StatusCard
          title="Rainfall"
          value={currentData.rainfall}
          color="#38bdf8"
        />

        <StatusCard
          title="Soil Moisture"
          value={currentData.moisture}
          color="#22c55e"
        />

        <StatusCard
          title="Road Status"
          value={currentData.road}
          color="#facc15"
        />
      </div>

      {/* Alert */}
      <div
        style={{
          marginTop: "40px",
          background:
            "linear-gradient(145deg,#1e293b,#111827)",

          padding: "30px",

          borderRadius: "20px",

          border: "1px solid #ef4444",
        }}
      >
        <h2
          style={{
            color: "#ef4444",
            fontSize: "28px",
          }}
        >
          🚨 Emergency Warning
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
          }}
        >
          High landslide probability detected near{" "}
          <strong>{selectedArea}</strong>
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

      <SensorChart />

    </div>
  );
}

