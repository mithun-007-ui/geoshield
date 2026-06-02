export default function StatusCard({ title, value, color, detail, icon: Icon }) {
  return (
    <article className="status-card" style={{ "--card-accent": color }}>
      <div className="status-card-header">
        <div className="status-icon">{Icon && <Icon size={22} />}</div>
        <span>{title}</span>
      </div>
      <strong>{value}</strong>
      {detail && <p>{detail}</p>}
    </article>
  );
}
