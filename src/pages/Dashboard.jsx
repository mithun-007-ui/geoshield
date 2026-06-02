import { useState } from "react";
import { CloudRain, Droplets, Gauge, Route, ShieldAlert } from "lucide-react";
import SensorChart from "../components/SensorChart";
import StatusCard from "../components/StatusCard";

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

const riskTone = {
  HIGH: "#f87171",
  MEDIUM: "#fbbf24",
  LOW: "#34d399",
};

export default function Dashboard() {
  const [selectedStation, setSelectedStation] = useState("Ooty");
  const [selectedArea, setSelectedArea] = useState("Ketti Valley");
  const currentData = hillStations[selectedStation][selectedArea];

  const cards = [
    {
      title: "Risk Level",
      value: currentData.risk,
      color: riskTone[currentData.risk],
      detail: "AI slope model",
      icon: Gauge,
    },
    {
      title: "Rainfall",
      value: currentData.rainfall,
      color: "#60a5fa",
      detail: "Last 60 minutes",
      icon: CloudRain,
    },
    {
      title: "Soil Moisture",
      value: currentData.moisture,
      color: "#5eead4",
      detail: "Probe average",
      icon: Droplets,
    },
    {
      title: "Road Status",
      value: currentData.road,
      color: "#fbbf24",
      detail: "Field checkpoint",
      icon: Route,
    },
  ];

  return (
    <section className="page dashboard-page">
      <header className="hero-panel">
        <div>
          <p className="eyebrow">AI disaster monitoring</p>
          <h2>Landslide Dashboard</h2>
          <p>
            Real-time terrain signals for hill stations, roads, sirens, and
            rainfall-driven risk escalation.
          </p>
        </div>
        <div className="system-pill">
          <span className="pulse-dot" />
          System online
        </div>
      </header>

      <section className="controls-row">
        <label>
          Hill station
          <select
            value={selectedStation}
            onChange={(event) => {
              const station = event.target.value;
              setSelectedStation(station);
              setSelectedArea(Object.keys(hillStations[station])[0]);
            }}
          >
            {Object.keys(hillStations).map((station) => (
              <option key={station}>{station}</option>
            ))}
          </select>
        </label>

        <label>
          Nearby area
          <select value={selectedArea} onChange={(event) => setSelectedArea(event.target.value)}>
            {Object.keys(hillStations[selectedStation]).map((area) => (
              <option key={area}>{area}</option>
            ))}
          </select>
        </label>
      </section>

      <section className="status-grid">
        {cards.map((card) => (
          <StatusCard key={card.title} {...card} />
        ))}
      </section>

      <section className="panel warning-panel">
        <div className="warning-icon">
          <ShieldAlert size={28} />
        </div>
        <div>
          <p className="eyebrow">Emergency warning</p>
          <h2>High landslide probability near {selectedArea}</h2>
          <p>
            Siren {currentData.siren}. Road status is {currentData.road.toLowerCase()}.
            Checkpost teams should verify slope movement and drainage channels.
          </p>
        </div>
      </section>

      <SensorChart />
    </section>
  );
}
