import { Activity, Bell, Map, RadioTower } from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: Activity },
  { id: "map", label: "Risk Map", icon: Map },
  { id: "alerts", label: "Alerts", icon: Bell },
  { id: "sensors", label: "Sensors", icon: RadioTower },
];

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <nav className="sidebar-nav" aria-label="Primary navigation">
      {navItems.map(({ id, label, icon: Icon }) => (
        <button
          className={`nav-item ${activePage === id ? "is-active" : ""}`}
          type="button"
          key={id}
          onClick={() => setActivePage(id)}
        >
          <Icon size={20} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
