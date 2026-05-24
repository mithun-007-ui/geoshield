import { useState } from "react";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";

import MapPage from "./pages/MapPage";

export default function App() {
  const [activePage, setActivePage] =
    useState("dashboard");

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div style={{ flex: 1 }}>
        {activePage === "dashboard" && (
          <Dashboard />
        )}

        {activePage === "map" && <MapPage />}

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