type StatCardProps = {
  value: string;
  lines: string[];
  source: string;
};

export function StatCard({ value, lines, source }: StatCardProps) {
  return (
    <aside className="stat-card">
      <p className="stat-value">{value}</p>
      <p className="stat-copy">
        {lines.map((line, index) => (
          <span key={line}>
            {line}
            {index < lines.length - 1 ? <br /> : null}
          </span>
        ))}
      </p>
      <p className="stat-source">{source}</p>
    </aside>
  );
}
