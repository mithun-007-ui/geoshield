import { useState } from "react";
import { MapPin, Mountain, Radio, Route, Umbrella } from "lucide-react";

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

const riskClass = {
  HIGH: "risk-high",
  MEDIUM: "risk-medium",
  LOW: "risk-low",
};

export default function MapPage() {
  const [selectedStation, setSelectedStation] = useState("Ooty");
  const [selectedArea, setSelectedArea] = useState("Ketti Valley");
  const currentData = hillStations[selectedStation][selectedArea];
  const areas = Object.entries(hillStations[selectedStation]);

  return (
    <section className="page map-page">
      <header className="section-heading">
        <p className="eyebrow">Regional monitoring</p>
        <h2>Landslide Risk Map</h2>
        <p>Switch between hill stations to review nearby risk zones and response signals.</p>
      </header>

      <section className="map-layout">
        <div className="panel map-visual">
          <div className="terrain">
            {areas.map(([area, data], index) => (
              <button
                className={`map-marker ${riskClass[data.risk]} ${
                  area === selectedArea ? "is-selected" : ""
                }`}
                type="button"
                key={area}
                style={{
                  "--x": `${24 + index * 26}%`,
                  "--y": `${60 - index * 18}%`,
                }}
                onClick={() => setSelectedArea(area)}
              >
                <MapPin size={22} />
                <span>{area}</span>
              </button>
            ))}
          </div>
        </div>

        <aside className="panel map-details">
          <div className="controls-row compact">
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
          </div>

          <div className={`risk-badge ${riskClass[currentData.risk]}`}>{currentData.risk}</div>
          <h3>{selectedArea}</h3>
          <p className="muted">{selectedStation} field station</p>

          <div className="metric-list">
            <span>
              <Mountain size={18} />
              Moisture {currentData.moisture}
            </span>
            <span>
              <Umbrella size={18} />
              Rainfall {currentData.rainfall}
            </span>
            <span>
              <Route size={18} />
              Road {currentData.road}
            </span>
            <span>
              <Radio size={18} />
              Siren {currentData.siren}
            </span>
          </div>
        </aside>
      </section>
    </section>
  );
}
