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

// import { useState } from "react";

// import Sidebar from "./components/Sidebar";

// import Dashboard from "./pages/Dashboard";

// import MapPage from "./pages/MapPage";

// export default function App() {

//   const [activePage, setActivePage] =
//     useState("dashboard");

//   const [sidebarOpen, setSidebarOpen] =
//     useState(true);

//   const isMobile = window.innerWidth < 768;

//   return (
//     <div
//       style={{
//         display: "flex",
//         background: "#0f172a",
//       }}
//     >

//       {/* Mobile Menu Button */}
//       {isMobile && (
//         <button
//           onClick={() =>
//             setSidebarOpen(!sidebarOpen)
//           }

//           style={{
//             position: "fixed",

//             top: "20px",

//             left: "20px",

//             zIndex: 1000,

//             background: "#2563eb",

//             color: "white",

//             border: "none",

//             padding: "12px 16px",

//             borderRadius: "10px",

//             cursor: "pointer",

//             fontSize: "18px",
//           }}
//         >
//           ☰
//         </button>
//       )}

//       {/* Sidebar */}
//       {sidebarOpen && (
//         <Sidebar
//           activePage={activePage}
//           setActivePage={setActivePage}
//         />
//       )}

//       {/* Main Content */}
//       <div
//         style={{
//           flex: 1,

//           marginLeft:
//             isMobile || !sidebarOpen
//               ? "0"
//               : "0",

//           transition: "0.3s",
//         }}
//       >
//         {activePage === "dashboard" && (
//           <Dashboard />
//         )}

//         {activePage === "map" && (
//           <MapPage />
//         )}

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

  return (
    <div
      style={{
        background: "#0f172a",

        minHeight: "100vh",
      }}
    >

      {/* Menu Button */}
      <button
        onClick={() =>
          setSidebarOpen(!sidebarOpen)
        }

        style={{
          position: "fixed",

          top: "15px",

          left: "15px",

          zIndex: 3000,

          background: "#2563eb",

          color: "white",

          border: "none",

          padding: "12px 16px",

          borderRadius: "12px",

          fontSize: "20px",

          cursor: "pointer",

          boxShadow:
            "0 8px 20px rgba(0,0,0,0.4)",
        }}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",

          top: 0,

          left: sidebarOpen ? "0" : "-240px",

          width: "240px",

          height: "100vh",

          background: "#020617",

          transition: "0.3s ease",

          zIndex: 2000,

          padding: "20px",

          borderRight:
            "1px solid #1e293b",
        }}
      >

        {/* Logo */}
        <h1
          style={{
            color: "white",

            marginBottom: "40px",

            marginTop: "80px",

            fontSize: "42px",

            lineHeight: "1.2",
          }}
        >
          GeoShield
        </h1>

        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>

      {/* Main Content */}
      <div
        style={{
          marginLeft:
            sidebarOpen ? "240px" : "0",

          transition: "0.3s ease",
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
              color: "white",

              padding: "100px 35px",
            }}
          >
            <h1>🚨 Alerts Page</h1>
          </div>
        )}

        {activePage === "sensors" && (
          <div
            style={{
              color: "white",

              padding: "100px 35px",
            }}
          >
            <h1>⚙ Sensors Page</h1>
          </div>
        )}
      </div>
    </div>
  );
}