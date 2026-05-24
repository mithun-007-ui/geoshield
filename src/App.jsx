// import { useState } from "react";

// import Sidebar from "./components/Sidebar";

// import Dashboard from "./pages/Dashboard";

// import MapPage from "./pages/MapPage";

// export default function App() {
//   const [activePage, setActivePage] =
//     useState("dashboard");

//   return (
//     <div style={{ display: "flex" }}>
//       <Sidebar
//         activePage={activePage}
//         setActivePage={setActivePage}
//       />

//       <div style={{ flex: 1 }}>
//         {activePage === "dashboard" && (
//           <Dashboard />
//         )}

//         {activePage === "map" && <MapPage />}

//         {activePage === "alerts" && (
//           <div
//             style={{
//               background: "#0f172a",
//               minHeight: "100vh",
//               color: "white",
//               padding: "30px",
//             }}
//           >
//             <h1>🚨 Alerts Page</h1>
//           </div>
//         )}

//         {activePage === "sensors" && (
//           <div
//             style={{
//               background: "#0f172a",
//               minHeight: "100vh",
//               color: "white",
//               padding: "30px",
//             }}
//           >
//             <h1>⚙ Sensors Page</h1>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";

import MapPage from "./pages/MapPage";

export default function App() {

  const [activePage, setActivePage] =
    useState("dashboard");

  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  const isMobile = window.innerWidth < 768;

  return (
    <div
      style={{
        display: "flex",
        background: "#0f172a",
      }}
    >

      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() =>
            setSidebarOpen(!sidebarOpen)
          }

          style={{
            position: "fixed",

            top: "20px",

            left: "20px",

            zIndex: 1000,

            background: "#2563eb",

            color: "white",

            border: "none",

            padding: "12px 16px",

            borderRadius: "10px",

            cursor: "pointer",

            fontSize: "18px",
          }}
        >
          ☰
        </button>
      )}

      {/* Sidebar */}
      {sidebarOpen && (
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
        />
      )}

      {/* Main Content */}
      <div
        style={{
          flex: 1,

          marginLeft:
            isMobile || !sidebarOpen
              ? "0"
              : "0",

          transition: "0.3s",
        }}
      >
        {activePage === "dashboard" && (
          <Dashboard />
        )}

        {activePage === "map" && (
          <MapPage />
        )}

        {activePage === "alerts" && (
          <div
            style={{
              background: "#0f172a",

              minHeight: "100vh",

              color: "white",

              padding: "30px",
            }}
          >
            <h1>🚨 Alerts Page</h1>
          </div>
        )}

        {activePage === "sensors" && (
          <div
            style={{
              background: "#0f172a",

              minHeight: "100vh",

              color: "white",

              padding: "30px",
            }}
          >
            <h1>⚙ Sensors Page</h1>
          </div>
        )}
      </div>
    </div>
  );
}