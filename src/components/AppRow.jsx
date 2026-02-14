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
      style={{
        display: "grid",
        gridTemplateColumns: "2.2fr .7fr .6fr .6fr .6fr 1.6fr .7fr .5fr",
        padding: "14px 24px",
        alignItems: "center",
        cursor: "pointer",
        transition: "background 0.15s",
        background: isExpanded ? "rgba(255,255,255,0.03)" : "transparent",
      }}
      onMouseEnter={(e) => {
        if (!isExpanded)
          e.currentTarget.style.background = "rgba(255,255,255,0.025)";
      }}
      onMouseLeave={(e) => {
        if (!isExpanded) e.currentTarget.style.background = "transparent";
      }}
    >
      {/* Name + Icon */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ color: "#86868B" }}>
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
        <div>
          <div style={{ fontSize: 14, fontWeight: 500, color: "#F5F5F7" }}>
            {app.name}
          </div>
          <div style={{ fontSize: 11, color: "#48484A", marginTop: 1 }}>
            {app.platform}
          </div>
        </div>
      </div>

      {/* Counts */}
      <span style={{ fontSize: 13, fontWeight: 600, color: "#F5F5F7" }}>
        {app.accounts.length}
      </span>
      <span
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
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: stale > 0 ? "#FF9F0A" : "#48484A",
        }}
      >
        {stale}
      </span>
      <span
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: orphaned > 0 ? "#FF453A" : "#48484A",
        }}
      >
        {orphaned}
      </span>

      {/* Progress */}
      <div>
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
      <div onClick={(e) => e.stopPropagation()}>
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
      <div onClick={(e) => e.stopPropagation()} style={{ textAlign: "right" }}>
        <button
          onClick={onInvestigate}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            height: 28,
            padding: "0 11px",
            borderRadius: 7,
            border: "none",
            background: "rgba(0,113,227,0.15)",
            color: "#0A84FF",
            fontSize: 11,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(0,113,227,0.25)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(0,113,227,0.15)")
          }
        >
          <Icons.Play /> Investigate
        </button>
      </div>
    </div>
  );
}
