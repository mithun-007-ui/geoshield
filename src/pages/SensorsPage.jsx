import { useMemo, useState } from "react";
import { CheckCircle2, Plus, RadioTower, Router, Trash2, X } from "lucide-react";

const stationAreas = {
  Ooty: ["Ketti Valley", "Coonoor", "Avalanche"],
  Kodaikanal: ["Guna Cave Road", "Pillar Rocks", "Berijam"],
  Munnar: ["Devikulam", "Mattupetty", "Top Station"],
  Darjeeling: ["Tiger Hill", "Lamahatta", "Batasia Loop"],
  Sikkim: ["Gangtok", "Nathula Pass", "Tsomgo Lake"],
};

const deviceTypes = ["Soil Moisture Sensor", "Rainfall Gauge", "Slope Movement Sensor", "Siren Unit"];

const initialDevices = [
  {
    id: 1,
    name: "Ooty-MST-01",
    type: "Soil Moisture Sensor",
    station: "Ooty",
    area: "Ketti Valley",
    status: "Online",
  },
  {
    id: 2,
    name: "KOD-RFG-03",
    type: "Rainfall Gauge",
    station: "Kodaikanal",
    area: "Pillar Rocks",
    status: "Online",
  },
];

const getDefaultForm = () => ({
  name: "",
  type: deviceTypes[0],
  station: "Ooty",
  area: stationAreas.Ooty[0],
});

export default function SensorsPage() {
  const [devices, setDevices] = useState(initialDevices);
  const [isAdding, setIsAdding] = useState(false);
  const [form, setForm] = useState(getDefaultForm);

  const availableAreas = useMemo(() => stationAreas[form.station], [form.station]);

  const updateStation = (station) => {
    setForm((current) => ({
      ...current,
      station,
      area: stationAreas[station][0],
    }));
  };

  const addDevice = (event) => {
    event.preventDefault();

    const fallbackName = `${form.station.slice(0, 3).toUpperCase()}-${devices.length + 1}`;

    setDevices((current) => [
      {
        id: Date.now(),
        name: form.name.trim() || fallbackName,
        type: form.type,
        station: form.station,
        area: form.area,
        status: "Online",
      },
      ...current,
    ]);

    setForm(getDefaultForm());
    setIsAdding(false);
  };

  const removeDevice = (deviceId) => {
    setDevices((current) => current.filter((device) => device.id !== deviceId));
  };

  return (
    <section className="page sensors-page">
      <header className="section-heading sensors-heading">
        <div>
          <p className="eyebrow">Field telemetry</p>
          <h2>Sensor Network</h2>
          <p>Add monitoring devices and assign them to the correct hill station area.</p>
        </div>

        <button className="primary-action" type="button" onClick={() => setIsAdding(true)}>
          <Plus size={20} />
          Add Device
        </button>
      </header>

      {isAdding && (
        <section className="panel add-device-panel">
          <div className="form-title">
            <div>
              <p className="eyebrow">New device</p>
              <h3>Add Device</h3>
            </div>
            <button className="icon-button" type="button" aria-label="Close" onClick={() => setIsAdding(false)}>
              <X size={20} />
            </button>
          </div>

          <form className="device-form" onSubmit={addDevice}>
            <label>
              Device name
              <input
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                placeholder="Example: OOT-MST-02"
              />
            </label>

            <label>
              Device type
              <select
                value={form.type}
                onChange={(event) => setForm((current) => ({ ...current, type: event.target.value }))}
              >
                {deviceTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>

            <label>
              Hill station
              <select value={form.station} onChange={(event) => updateStation(event.target.value)}>
                {Object.keys(stationAreas).map((station) => (
                  <option key={station}>{station}</option>
                ))}
              </select>
            </label>

            <label>
              Area
              <select
                value={form.area}
                onChange={(event) => setForm((current) => ({ ...current, area: event.target.value }))}
              >
                {availableAreas.map((area) => (
                  <option key={area}>{area}</option>
                ))}
              </select>
            </label>

            <button className="primary-action submit-device" type="submit">
              <CheckCircle2 size={20} />
              Save Device
            </button>
          </form>
        </section>
      )}

      <section className="devices-grid">
        {devices.length === 0 && (
          <div className="panel empty-devices">
            <RadioTower size={34} />
            <h3>No devices added</h3>
            <p className="muted">Use Add Device to register a sensor for a hill station area.</p>
          </div>
        )}

        {devices.map((device) => (
          <article className="panel device-card" key={device.id}>
            <div className="device-icon">
              <RadioTower size={24} />
            </div>
            <div>
              <div className="device-card-header">
                <h3>{device.name}</h3>
                <div className="device-actions">
                  <span>{device.status}</span>
                  <button
                    className="remove-device"
                    type="button"
                    aria-label={`Remove ${device.name}`}
                    onClick={() => removeDevice(device.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <p className="muted">{device.type}</p>
              <div className="device-location">
                <Router size={18} />
                {device.station} / {device.area}
              </div>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}
