import { Icons } from "./Icons";
import { INVESTIGATION_STATES } from "../constants/investigationStates";

export const StatusBadge = ({ status }) => {
  const styles = {
    Active: { bg: "rgba(48,209,88,0.12)", c: "#30D158" },
    Stale: { bg: "rgba(255,159,10,0.12)", c: "#FF9F0A" },
    Orphaned: { bg: "rgba(255,69,58,0.12)", c: "#FF453A" },
    Unknown: { bg: "rgba(152,152,157,0.15)", c: "#98989D" },
  };
  const s = styles[status] || styles.Unknown;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "2px 10px",
        borderRadius: 20,
        background: s.bg,
        fontSize: 11,
        fontWeight: 500,
        color: s.c,
      }}
    >
      <span style={{ width: 5, height: 5, borderRadius: 3, background: s.c }} />
      {status}
    </span>
  );
};

export const RiskBadge = ({ risk }) => {
  const colors = {
    Low: "#30D158",
    Medium: "#FF9F0A",
    High: "#FF453A",
    Critical: "#BF5AF2",
  };
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 600,
        color: colors[risk] || "#98989D",
      }}
    >
      {risk}
    </span>
  );
};

export const TypeBadge = ({ type, isAgent }) => {
  if (!isAgent)
    return <span style={{ fontSize: 11, color: "#86868B" }}>{type}</span>;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "2px 8px",
        borderRadius: 6,
        background: "rgba(255,55,95,0.1)",
        fontSize: 11,
        fontWeight: 500,
        color: "#FF375F",
      }}
    >
      <Icons.Bot />
      {type}
    </span>
  );
};

export const MiniProgress = ({ state, progress }) => {
  const s = INVESTIGATION_STATES[state];
  if (!s || state === "idle") return null;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div
        style={{
          width: 60,
          height: 3,
          borderRadius: 2,
          background: "rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            borderRadius: 2,
            background: s.color,
            transition: "width 0.6s cubic-bezier(.4,0,.2,1)",
          }}
        />
      </div>
      <span
        style={{
          fontSize: 10,
          color: s.color,
          fontWeight: 500,
          whiteSpace: "nowrap",
        }}
      >
        {state === "complete" ? "✓ Done" : s.label}
      </span>
    </div>
  );
};

export const Checkbox = ({ checked, onChange, size = 16 }) => (
  <span
    onClick={onChange}
    style={{
      width: size,
      height: size,
      borderRadius: 4,
      border: checked ? "none" : "1.5px solid rgba(255,255,255,0.15)",
      background: checked ? "#0071E3" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.15s",
      cursor: "pointer",
      flexShrink: 0,
    }}
  >
    {checked && <Icons.Check />}
  </span>
);
