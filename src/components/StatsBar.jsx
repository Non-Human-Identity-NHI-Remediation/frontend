import { Icons } from "./Icons";

export default function StatsBar({ applications }) {
  const totalAccounts = applications.reduce((s, a) => s + a.accounts.length, 0);
  const totalAgents = applications.reduce(
    (s, a) => s + a.accounts.filter((ac) => ac.isAgent).length,
    0
  );
  const totalStale = applications.reduce(
    (s, a) => s + a.accounts.filter((ac) => ac.status === "Stale").length,
    0
  );
  const totalOrphaned = applications.reduce(
    (s, a) => s + a.accounts.filter((ac) => ac.status === "Orphaned").length,
    0
  );

  const stats = [
    {
      label: "Total NHIs",
      value: totalAccounts,
      icon: <Icons.Activity />,
      color: "#0071E3",
    },
    {
      label: "AI / Agent Accounts",
      value: totalAgents,
      icon: <Icons.Zap />,
      color: "#FF375F",
    },
    {
      label: "Stale Accounts",
      value: totalStale,
      icon: <Icons.Clock />,
      color: "#FF9F0A",
    },
    {
      label: "Orphaned Accounts",
      value: totalOrphaned,
      icon: <Icons.Alert />,
      color: "#FF453A",
    },
  ];

  return (
    <div className="stats-bar">
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="stat-card"
            style={{ animation: `fadeIn 0.5s ease ${i * 0.07}s both` }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <span style={{ fontSize: 12, color: "#86868B", fontWeight: 500 }}>
                {stat.label}
              </span>
              <span style={{ color: stat.color, opacity: 0.7 }}>
                {stat.icon}
              </span>
            </div>
            <span
              style={{
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: -1,
                color: "#F5F5F7",
              }}
            >
              {stat.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
