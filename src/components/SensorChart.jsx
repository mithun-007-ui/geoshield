import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function SensorChart() {
  const data = [      // Sample data for soil moisture over time
    { time: "1 PM", moisture: 40 },
    { time: "2 PM", moisture: 45 },
    { time: "3 PM", moisture: 52 },
    { time: "4 PM", moisture: 65 },
    { time: "5 PM", moisture: 78 },
    { time: "6 PM", moisture: 90 },
  ];

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "40px",
      }}
    >
      <h2 style={{ color: "white" }}>
        📈 Soil Moisture Analytics
      </h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="time" stroke="white" />

            <YAxis stroke="white" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="moisture"
              stroke="#38bdf8"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}