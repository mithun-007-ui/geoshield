import { useState } from "react";
import { Bell, Menu, ShieldCheck, X } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import MapPage from "./pages/MapPage";
import SensorsPage from "./pages/SensorsPage";
import "./App.css";

const placeholderPages = {
  alerts: {
    icon: Bell,
    title: "Alert Center",
    eyebrow: "Emergency operations",
    description:
      "Active sirens, road closures, and checkpost alerts will be listed here for fast response.",
  },
};

export default function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const PlaceholderIcon = placeholderPages[activePage]?.icon ?? ShieldCheck;

  return (
    <div className="app-shell">
      <button
        className="sidebar-toggle"
        type="button"
        aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setSidebarOpen((isOpen) => !isOpen)}
      >
        {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <aside className={`app-sidebar ${sidebarOpen ? "is-open" : ""}`}>
        <div className="brand">
          <img src="/download.png" alt="GeoShield AI" className="brand-mark" />
          <div>
            <p className="brand-kicker">GeoShield AI</p>
            <h1>Landslide Alert</h1>
          </div>
        </div>

        <Sidebar activePage={activePage} setActivePage={setActivePage} />
      </aside>

      <main className={`app-main ${sidebarOpen ? "with-sidebar" : ""}`}>
        {activePage === "dashboard" && <Dashboard />}
        {activePage === "map" && <MapPage />}
        {activePage === "sensors" && <SensorsPage />}

        {placeholderPages[activePage] && (
          <section className="page page-placeholder">
            <div className="placeholder-panel">
              <PlaceholderIcon size={42} />
              <p className="eyebrow">{placeholderPages[activePage].eyebrow}</p>
              <h2>{placeholderPages[activePage].title}</h2>
              <p>{placeholderPages[activePage].description}</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
