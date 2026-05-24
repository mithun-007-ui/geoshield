
// export default function StatusCard({ title, value, color }) {
//   return (
//     <div
//       style={{
//         background: "linear-gradient(145deg, #1e293b, #0f172a)",
//         padding: "25px",
//         borderRadius: "20px",
//         width: "240px",
//         color: "white",
//         boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
//         border: `1px solid ${color}`,
//         transition: "0.3s",
//       }}
//     >
//       <h3
//         style={{
//           color: "#94a3b8",
//           marginBottom: "15px",
//         }}
//       >
//         {title}
//       </h3>

//       <h1
//         style={{
//           color: color,
//           fontSize: "32px",
//         }}
//       >
//         {value}
//       </h1>
//     </div>
//   );
// }

export default function StatusCard({
  title,
  value,
  color,
}) {
  return (
    <div
      style={{
        background:
          "linear-gradient(145deg, #1e293b, #0f172a)",

        padding: "25px",

        borderRadius: "20px",

        width: "240px",

        color: "white",

        boxShadow:
          "0 8px 20px rgba(0,0,0,0.4)",

        border: `1px solid ${color}`,

        transition: "0.3s",

        cursor: "pointer",
      }}

      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-8px)";

        e.currentTarget.style.boxShadow =
          "0 15px 30px rgba(0,0,0,0.5)";
      }}

      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0px)";

        e.currentTarget.style.boxShadow =
          "0 8px 20px rgba(0,0,0,0.4)";
      }}
    >
      <h3
        style={{
          color: "#94a3b8",
          marginBottom: "15px",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          color: color,
          fontSize: "32px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}