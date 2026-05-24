  export default function Sidebar({
  activePage,
  setActivePage,
}) {
  const menuStyle = (page) => ({
    marginBottom: "20px",
    cursor: "pointer",
    padding: "12px",
    borderRadius: "10px",
    background:
      activePage === page ? "#1e293b" : "transparent",
  });

  return (
    <div
      style={{
        width: "250px",
        background: "#111827",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>🌍 GeoShield AI</h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginTop: "30px",
        }}
      >
        <li
          style={menuStyle("dashboard")}
          onClick={() => setActivePage("dashboard")}
        >
          📊 Dashboard
        </li>

        <li
          style={menuStyle("alerts")}
          onClick={() => setActivePage("alerts")}
        >
          🚨 Alerts
        </li>

        <li
          style={menuStyle("map")}
          onClick={() => setActivePage("map")}
        >
          🗺 Map
        </li>

        <li
          style={menuStyle("sensors")}
          onClick={() => setActivePage("sensors")}
        >
          ⚙ Sensors
        </li>
      </ul>
    </div>
  );
}