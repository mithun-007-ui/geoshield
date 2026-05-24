export default function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        background: "#111827",
        color: "white",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h2>🌍 GeoShield AI</h2>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "30px" }}>
        <li style={{ marginBottom: "20px" }}>📊 Dashboard</li>
        <li style={{ marginBottom: "20px" }}>🚨 Alerts</li>
        <li style={{ marginBottom: "20px" }}>🗺 Map</li>
        <li style={{ marginBottom: "20px" }}>⚙ Sensors</li>
      </ul>
    </div>
  );
}