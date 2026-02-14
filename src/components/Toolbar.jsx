import { Icons } from "./Icons";

export default function Toolbar({
  search,
  onSearchChange,
  platforms,
  activeFilter,
  onFilterChange,
}) {
  return (
    <div className="toolbar">
      <div className="toolbar-search">
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
          className="search-input"
        />
      </div>
      <div className="toolbar-filters">
        <span style={{ color: "#86868B", marginRight: 2 }}>
          <Icons.Filter />
        </span>
        {platforms.map((p) => (
          <button
            key={p}
            onClick={() => onFilterChange(p)}
            className="filter-pill"
            style={{
              border:
                activeFilter === p
                  ? "none"
                  : "0.5px solid rgba(255,255,255,0.1)",
              background:
                activeFilter === p
                  ? "rgba(0,113,227,0.85)"
                  : "rgba(255,255,255,0.04)",
              color: activeFilter === p ? "#fff" : "#86868B",
            }}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
