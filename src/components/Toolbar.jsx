import { Icons } from "./Icons";

export default function Toolbar({
  search,
  onSearchChange,
  platforms,
  activeFilter,
  onFilterChange,
}) {
  return (
    <div
      style={{
        maxWidth: 1320,
        margin: "0 auto",
        padding: "28px 32px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        flexWrap: "wrap",
      }}
    >
      <div
        style={{ position: "relative", display: "flex", alignItems: "center" }}
      >
        <span
          style={{
            position: "absolute",
            left: 12,
            color: "#86868B",
            pointerEvents: "none",
          }}
        >
          <Icons.Search />
        </span>
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search applications..."
          style={{
            width: 280,
            height: 36,
            borderRadius: 10,
            border: "0.5px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)",
            color: "#F5F5F7",
            paddingLeft: 36,
            paddingRight: 12,
            fontSize: 14,
            outline: "none",
            fontFamily: "inherit",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          flexWrap: "wrap",
        }}
      >
        <span style={{ color: "#86868B", marginRight: 2 }}>
          <Icons.Filter />
        </span>
        {platforms.map((p) => (
          <button
            key={p}
            onClick={() => onFilterChange(p)}
            style={{
              height: 28,
              padding: "0 13px",
              borderRadius: 14,
              border:
                activeFilter === p
                  ? "none"
                  : "0.5px solid rgba(255,255,255,0.1)",
              background:
                activeFilter === p
                  ? "rgba(0,113,227,0.85)"
                  : "rgba(255,255,255,0.04)",
              color: activeFilter === p ? "#fff" : "#86868B",
              fontSize: 11,
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.2s",
            }}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
