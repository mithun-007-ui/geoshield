import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { time: "1 PM", moisture: 40, rain: 18 },
  { time: "2 PM", moisture: 45, rain: 24 },
  { time: "3 PM", moisture: 52, rain: 31 },
  { time: "4 PM", moisture: 65, rain: 44 },
  { time: "5 PM", moisture: 78, rain: 58 },
  { time: "6 PM", moisture: 90, rain: 72 },
];

export default function SensorChart() {
  return (
    <section className="panel chart-panel">
      <div className="section-heading">
        <p className="eyebrow">Live telemetry</p>
        <h2>Soil Moisture Analytics</h2>
      </div>

      <div className="chart-wrap">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 18, right: 18, left: -16, bottom: 0 }}>
            <CartesianGrid stroke="#233247" strokeDasharray="4 4" vertical={false} />
            <XAxis dataKey="time" stroke="#90a3b8" tickLine={false} axisLine={false} />
            <YAxis stroke="#90a3b8" tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid #26364c",
                borderRadius: "8px",
                color: "#f8fafc",
              }}
            />
            <Line
              type="monotone"
              dataKey="moisture"
              name="Moisture"
              stroke="#5eead4"
              strokeWidth={3}
              dot={{ r: 4, fill: "#5eead4" }}
            />
            <Line
              type="monotone"
              dataKey="rain"
              name="Rainfall"
              stroke="#60a5fa"
              strokeWidth={3}
              dot={{ r: 4, fill: "#60a5fa" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
