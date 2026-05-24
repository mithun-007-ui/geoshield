export default function StatusCard({ title, value }) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "15px",
        width: "220px",
        color: "white",
      }}
    >
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}