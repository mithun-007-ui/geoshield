import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import StatusCard from "../components/StatusCard";
import SensorChart from "../components/SensorChart";
export default function Dashboard() {
  const [data, setData] = useState({
    risk: "LOW",
    rainfall: "Light",
    moisture: "45%",
    road: "OPEN",
    alert: "No danger detected",
    siren: "OFF",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMoisture = Math.floor(Math.random() * 100);

      let risk = "LOW";
      let rainfall = "Light";
      let road = "OPEN";
      let alert = "No danger detected";
      let siren = "OFF";

      if (randomMoisture > 60) {
        risk = "MEDIUM";
        rainfall = "Moderate";
        alert = "Soil moisture increasing";
      }

      if (randomMoisture > 80) {
        risk = "HIGH";
        rainfall = "Heavy";
        road = "CLOSED";
        siren = "ON";
        alert = "High landslide probability detected!";
      }

      setData({
        risk,
        rainfall,
        moisture: `${randomMoisture}%`,
        road,
        alert,
        siren,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        background: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          padding: "30px",
          flex: 1,
          color: "white",
        }}
      >
        <h1>🚨 Landslide Monitoring Dashboard</h1>

        <p
          style={{
            marginTop: "10px",
            color: "#94a3b8",
          }}
        >
          Real-time AI-based monitoring system
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <StatusCard title="Risk Level" value={data.risk} />

          <StatusCard title="Rainfall" value={data.rainfall} />

          <StatusCard title="Soil Moisture" value={data.moisture} />

          <StatusCard title="Road Status" value={data.road} />
        </div>

        <div
          style={{
            background: "#1e293b",
            marginTop: "40px",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h2>🚨 Emergency Alert</h2>

          <p
            style={{
              marginTop: "15px",
              fontSize: "18px",
            }}
          >
            {data.alert}
          </p>
            <SensorChart />
          <p
            style={{
              marginTop: "15px",
              color:
                data.siren === "ON" ? "#ef4444" : "#22c55e",
              fontWeight: "bold",
            }}
          >
            🔊 Siren: {data.siren}
          </p>
        </div>
      </div>
    </div>
  );
}