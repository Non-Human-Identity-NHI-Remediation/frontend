import { Icons, getAppIcon } from "./Icons";

export default function AppRow({
  app,
  isExpanded,
  summary,
  onToggle,
  onInvestigate,
  onDownload,
}) {
  const stale = app.accounts.filter((a) => a.status === "Stale").length;
  const orphaned = app.accounts.filter((a) => a.status === "Orphaned").length;
  const agents = app.accounts.filter((a) => a.isAgent).length;
  const icon = getAppIcon(app.id, 22);

  return (
    <div
      onClick={onToggle}
      className="app-row"
      style={{
        background: isExpanded ? "rgba(255,255,255,0.03)" : "transparent",
      }}
      onMouseEnter={(e) => {
        if (!isExpanded)
          e.currentTarget.style.background = "rgba(255,255,255,0.025)";
      }}
      onMouseLeave={(e) => {
        if (!isExpanded)
          e.currentTarget.style.background = isExpanded
            ? "rgba(255,255,255,0.03)"
            : "transparent";
      }}
    >
      {/* Name + Icon — always visible */}
      <div
        style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}
      >
        <span style={{ color: "#86868B", flexShrink: 0 }}>
          <Icons.ChevronDown open={isExpanded} />
        </span>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: `${app.color}12`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          {icon || (
            <span style={{ fontSize: 15, color: app.color }}>{app.icon}</span>
          )}
        </div>
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#F5F5F7",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {app.name}
          </div>
          <div className="app-row-meta">
            <span>{app.platform}</span>
            <span>·</span>
            <span>{app.accounts.length} accounts</span>
            {agents > 0 && (
              <>
                <span>·</span>
                <span style={{ color: "#FF375F" }}>🤖 {agents}</span>
              </>
            )}
            {stale > 0 && (
              <>
                <span>·</span>
                <span style={{ color: "#FF9F0A" }}>{stale} stale</span>
              </>
            )}
            {orphaned > 0 && (
              <>
                <span>·</span>
                <span style={{ color: "#FF453A" }}>{orphaned} orphaned</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Desktop-only columns */}
      <span
        className="app-col-desktop"
        style={{ fontSize: 13, fontWeight: 600, color: "#F5F5F7" }}
      >
        {app.accounts.length}
      </span>
      <span
        className="app-col-desktop"
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: agents > 0 ? "#FF375F" : "#48484A",
        }}
      >
        {agents > 0 && <span style={{ marginRight: 3 }}>🤖</span>}
        {agents}
      </span>
      <span
        className="app-col-desktop"
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: stale > 0 ? "#FF9F0A" : "#48484A",
        }}
      >
        {stale}
      </span>
      <span
        className="app-col-desktop"
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: orphaned > 0 ? "#FF453A" : "#48484A",
        }}
      >
        {orphaned}
      </span>

      {/* Progress */}
      <div className="app-col-desktop">
        {summary ? (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                flex: 1,
                maxWidth: 100,
                height: 3,
                borderRadius: 2,
                background: "rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  width: `${Math.round(
                    (summary.complete / summary.total) * 100
                  )}%`,
                  height: "100%",
                  borderRadius: 2,
                  background: "#30D158",
                  transition: "width 0.5s",
                }}
              />
            </div>
            <span style={{ fontSize: 11, color: "#86868B" }}>
              {summary.complete}/{summary.total}
            </span>
            {summary.running > 0 && <Icons.Spinner />}
          </div>
        ) : (
          <span style={{ fontSize: 11, color: "#48484A" }}>—</span>
        )}
      </div>

      {/* Report */}
      <div className="app-col-desktop" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onDownload}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            height: 28,
            padding: "0 12px",
            borderRadius: 7,
            border: "0.5px solid rgba(255,255,255,0.08)",
            background: "transparent",
            color: "#86868B",
            fontSize: 11,
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          <Icons.Download /> CSV
        </button>
      </div>

      {/* Investigate */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ textAlign: "right", flexShrink: 0 }}
      >
        <button
          onClick={onInvestigate}
          className="investigate-btn"
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(0,113,227,0.25)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(0,113,227,0.15)")
          }
        >
          <Icons.Play /> <span className="investigate-label">Investigate</span>
        </button>
      </div>
    </div>
  );
}
