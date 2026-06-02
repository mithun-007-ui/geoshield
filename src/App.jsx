import { useState } from "react";
import { Bell, Menu, Moon, ShieldCheck, Sun, X } from "lucide-react";
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
  const isSmallScreen = () => window.matchMedia("(max-width: 1040px)").matches;
  const [sidebarOpen, setSidebarOpen] = useState(() => !isSmallScreen());
  const [theme, setTheme] = useState("dark");

  const PlaceholderIcon = placeholderPages[activePage]?.icon ?? ShieldCheck;
  const isDark = theme === "dark";

  const navigateTo = (page) => {
    setActivePage(page);

    if (isSmallScreen()) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="app-shell" data-theme={theme}>
      <button
        className="sidebar-toggle"
        type="button"
        aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setSidebarOpen((isOpen) => !isOpen)}
      >
        {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <button
        className="theme-toggle"
        type="button"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
        <span>{isDark ? "Light" : "Dark"}</span>
      </button>

      {sidebarOpen && <button className="sidebar-backdrop" type="button" aria-label="Close navigation" onClick={() => setSidebarOpen(false)} />}

      <aside className={`app-sidebar ${sidebarOpen ? "is-open" : ""}`}>
        <button className="brand" type="button" aria-label="Go to dashboard" onClick={() => navigateTo("dashboard")}>
          <img src="/download.png" alt="GeoShield AI" className="brand-mark" />
          <div>
            <p className="brand-kicker">GeoShield AI</p>
            <h1>Landslide Alert</h1>
          </div>
        </button>

        <Sidebar activePage={activePage} setActivePage={navigateTo} />
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

        <footer className="app-footer">
  © 2026 GeoShield | AI-Powered Disaster Management System | Built for Safer Communities
</footer>
      </main>
    </div>
  );
}
