//   export default function Sidebar({
//   activePage,
//   setActivePage,
// }) {
//   const menuStyle = (page) => ({
//     marginBottom: "20px",
//     cursor: "pointer",
//     padding: "12px",
//     borderRadius: "10px",
//     background:
//       activePage === page ? "#1e293b" : "transparent",
//   });

//   return (
//     <div
//       style={{
//         width: "250px",
//         background: "#111827",
//         color: "white",
//         minHeight: "100vh",
//         padding: "20px",
//       }}
//     >
//       <h2>🌍 GeoShield AI</h2>

//       <ul
//         style={{
//           listStyle: "none",
//           padding: 0,
//           marginTop: "30px",
//         }}
//       >
//         <li
//           style={menuStyle("dashboard")}
//           onClick={() => setActivePage("dashboard")}
//         >
//           📊 Dashboard
//         </li>

//         <li
//           style={menuStyle("alerts")}
//           onClick={() => setActivePage("alerts")}
//         >
//           🚨 Alerts
//         </li>

//         <li
//           style={menuStyle("map")}
//           onClick={() => setActivePage("map")}
//         >
//           🗺 Map
//         </li>

//         <li
//           style={menuStyle("sensors")}
//           onClick={() => setActivePage("sensors")}
//         >
//           ⚙ Sensors
//         </li>
//       </ul>
//     </div>
//   );
// }


// export default function Sidebar({
//   activePage,
//   setActivePage,
// }) {
//   const menuStyle = (page) => ({
//     marginBottom: "18px",
//     cursor: "pointer",
//     padding: "15px",
//     borderRadius: "14px",
//     background:
//       activePage === page
//         ? "linear-gradient(90deg,#2563eb,#1d4ed8)"
//         : "transparent",

//    transform:
//   activePage === page
//     ? "scale(1.03)"
//     : "scale(1)",
//     fontWeight: "bold",
//   });

//   return (
//     <div
//       style={{
//         width: "270px",
//         background: "#020617",
//         color: "white",
//         minHeight: "100vh",
//         padding: "25px",
//         borderRight: "1px solid #1e293b",
//       }}
//     >
//       <h1
//         style={{
//           fontSize: "28px",
//           marginBottom: "40px",
//         }}
//       >
//         🌍 GeoShield AI
//       </h1>

//       <ul
//         style={{
//           listStyle: "none",
//           padding: 0,
//         }}
//       >
//         <li
//           style={menuStyle("dashboard")}
//           onClick={() => setActivePage("dashboard")}
//         >
//           📊 Dashboard
//         </li>

//         <li
//           style={menuStyle("alerts")}
//           onClick={() => setActivePage("alerts")}
//         >
//           🚨 Alerts
//         </li>

//         <li
//           style={menuStyle("map")}
//           onClick={() => setActivePage("map")}
//         >
//           🗺 Risk Map
//         </li>

//         <li
//           style={menuStyle("sensors")}
//           onClick={() => setActivePage("sensors")}
//         >
//           ⚙ Sensors
//         </li>
//       </ul>
//     </div>
//   );
// }

export default function Sidebar({
  activePage,
  setActivePage,
}) {
  const isMobile = window.innerWidth < 768;

  const menuStyle = (page) => ({
    marginBottom: "18px",

    cursor: "pointer",

    padding: "15px",

    borderRadius: "14px",

    background:
      activePage === page
        ? "linear-gradient(90deg,#2563eb,#1d4ed8)"
        : "transparent",

    transition: "0.3s",

    fontWeight: "bold",
  });

  return (
    <div
      style={{
        width: isMobile ? "90px" : "270px",

        background: "#020617",

        color: "white",

        minHeight: "100vh",

        padding: "25px",

        borderRight: "1px solid #1e293b",
      }}
    >
      <h1
        style={{
          fontSize: "28px",

          marginBottom: "40px",
        }}
      >
        {isMobile
          ? "🌍"
          : "🌍 GeoShield AI"}
      </h1>

      <ul
        style={{
          listStyle: "none",

          padding: 0,
        }}
      >
        <li
          style={menuStyle("dashboard")}
          onClick={() =>
            setActivePage("dashboard")
          }
        >
          📊 {!isMobile && "Dashboard"}
        </li>

        <li
          style={menuStyle("map")}
          onClick={() =>
            setActivePage("map")
          }
        >
          🗺 {!isMobile && "Risk Map"}
        </li>

        <li
          style={menuStyle("alerts")}
          onClick={() =>
            setActivePage("alerts")
          }
        >
          🚨 {!isMobile && "Alerts"}
        </li>

        <li
          style={menuStyle("sensors")}
          onClick={() =>
            setActivePage("sensors")
          }
        >
          ⚙ {!isMobile && "Sensors"}
        </li>
      </ul>
    </div>
  );
}