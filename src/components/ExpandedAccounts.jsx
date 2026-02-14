import { Icons } from "./Icons";
import {
  StatusBadge,
  RiskBadge,
  TypeBadge,
  MiniProgress,
  Checkbox,
} from "./Badges";

export default function ExpandedAccounts({
  app,
  filteredAccounts,
  allFilteredSelected,
  selectedAccounts,
  accountSearch,
  accountStatusFilter,
  accountTypeFilter,
  accountInvestigations,
  onAccountSearchChange,
  onStatusFilterChange,
  onTypeFilterChange,
  onToggleAccount,
  onSelectAll,
  onInvestigate,
  onDownloadReport,
}) {
  return (
    <div
      style={{
        background: "rgba(0,0,0,0.3)",
        borderTop: "0.5px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Toolbar */}
      <div
        style={{
          padding: "12px 24px 12px 64px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap",
          borderBottom: "0.5px solid rgba(255,255,255,0.03)",
        }}
      >
        <div style={{ position: "relative", flex: "0 0 220px" }}>
          <span
            style={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#48484A",
            }}
          >
            <Icons.Search />
          </span>
          <input
            value={accountSearch}
            onChange={(e) => onAccountSearchChange(e.target.value)}
            placeholder="Search accounts..."
            style={{
              width: "100%",
              height: 30,
              borderRadius: 8,
              border: "0.5px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.03)",
              color: "#F5F5F7",
              paddingLeft: 30,
              paddingRight: 10,
              fontSize: 12,
              outline: "none",
              fontFamily: "inherit",
              boxSizing: "border-box",
            }}
          />
        </div>

        {["All", "Active", "Stale", "Orphaned", "Unknown"].map((f) => (
          <button
            key={f}
            onClick={() => onStatusFilterChange(f)}
            style={{
              height: 26,
              padding: "0 10px",
              borderRadius: 13,
              border:
                accountStatusFilter === f
                  ? "none"
                  : "0.5px solid rgba(255,255,255,0.06)",
              background:
                accountStatusFilter === f
                  ? "rgba(0,113,227,0.7)"
                  : "transparent",
              color: accountStatusFilter === f ? "#fff" : "#86868B",
              fontSize: 10,
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {f}
          </button>
        ))}

        <div
          style={{
            width: 1,
            height: 16,
            background: "rgba(255,255,255,0.06)",
            margin: "0 4px",
          }}
        />

        {["All", "Agents", "Service", "Generic", "API"].map((f) => (
          <button
            key={f}
            onClick={() => onTypeFilterChange(f)}
            style={{
              height: 26,
              padding: "0 10px",
              borderRadius: 13,
              border:
                accountTypeFilter === f
                  ? "none"
                  : "0.5px solid rgba(255,255,255,0.06)",
              background:
                accountTypeFilter === f ? "rgba(255,55,95,0.6)" : "transparent",
              color: accountTypeFilter === f ? "#fff" : "#86868B",
              fontSize: 10,
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {f === "Agents" ? "🤖 Agents" : f}
          </button>
        ))}
      </div>

      {/* Table Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "32px 2fr 1fr .8fr .7fr .6fr 1.4fr .7fr",
          padding: "8px 24px 8px 64px",
          borderBottom: "0.5px solid rgba(255,255,255,0.03)",
        }}
      >
        <div
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          onClick={onSelectAll}
        >
          <Checkbox checked={allFilteredSelected} onChange={onSelectAll} />
        </div>
        {[
          "Account",
          "Type",
          "Status",
          "Risk",
          "Owner",
          "Investigation",
          "Report",
        ].map((h) => (
          <span
            key={h}
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: "#48484A",
              textTransform: "uppercase",
              letterSpacing: 0.8,
            }}
          >
            {h}
          </span>
        ))}
      </div>

      {/* Account Rows */}
      <div style={{ maxHeight: 420, overflowY: "auto" }}>
        {filteredAccounts.map((acc) => {
          const inv = accountInvestigations[acc.id];
          const isComplete = inv?.state === "complete";
          const isFailed = inv?.state === "failed";
          const isRunning =
            inv && !["complete", "failed", "idle"].includes(inv.state);

          return (
            <div
              key={acc.id}
              style={{
                display: "grid",
                gridTemplateColumns: "32px 2fr 1fr .8fr .7fr .6fr 1.4fr .7fr",
                padding: "9px 24px 9px 64px",
                alignItems: "center",
                borderBottom: "0.5px solid rgba(255,255,255,0.02)",
                transition: "background 0.1s",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <Checkbox
                checked={selectedAccounts.has(acc.id)}
                onChange={() => onToggleAccount(acc.id)}
              />
              <div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#F5F5F7",
                    fontFamily: "'SF Mono', SFMono-Regular, Menlo, monospace",
                  }}
                >
                  {acc.name}
                </div>
                <div style={{ fontSize: 10, color: "#48484A", marginTop: 1 }}>
                  {acc.id} · {acc.owner}
                </div>
              </div>
              <TypeBadge type={acc.type} isAgent={acc.isAgent} />
              <StatusBadge status={acc.status} />
              <RiskBadge risk={acc.risk} />
              <span style={{ fontSize: 11, color: "#86868B" }}>
                {acc.lastActivity}
              </span>
              <MiniProgress
                state={inv?.state || "idle"}
                progress={inv?.progress || 0}
              />
              <div>
                {isComplete || acc.reportReady ? (
                  <button
                    onClick={() => onDownloadReport(acc)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      height: 26,
                      padding: "0 10px",
                      borderRadius: 6,
                      border: "none",
                      background: "rgba(48,209,88,0.1)",
                      color: "#30D158",
                      fontSize: 10,
                      fontWeight: 500,
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(48,209,88,0.18)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "rgba(48,209,88,0.1)")
                    }
                  >
                    <Icons.File /> Report
                  </button>
                ) : isRunning ? (
                  <span
                    style={{
                      fontSize: 10,
                      color: "#48484A",
                      animation: "pulse 2s infinite",
                    }}
                  >
                    …
                  </span>
                ) : isFailed ? (
                  <span style={{ fontSize: 10, color: "#FF453A" }}>Failed</span>
                ) : (
                  <span style={{ fontSize: 10, color: "#2C2C2E" }}>—</span>
                )}
              </div>
            </div>
          );
        })}
        {filteredAccounts.length === 0 && (
          <div
            style={{
              padding: 32,
              textAlign: "center",
              color: "#48484A",
              fontSize: 13,
            }}
          >
            No accounts match filters.
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "10px 24px 10px 64px",
          borderTop: "0.5px solid rgba(255,255,255,0.04)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(0,0,0,0.2)",
        }}
      >
        <span style={{ fontSize: 12, color: "#86868B" }}>
          {filteredAccounts.length} accounts · {selectedAccounts.size} selected
        </span>
        {selectedAccounts.size > 0 && (
          <button
            onClick={onInvestigate}
            style={{
              height: 32,
              padding: "0 18px",
              borderRadius: 8,
              border: "none",
              background: "linear-gradient(135deg,#0071E3,#0A84FF)",
              color: "#fff",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Icons.Play /> Investigate {selectedAccounts.size} Account
            {selectedAccounts.size > 1 ? "s" : ""}
          </button>
        )}
      </div>
    </div>
  );
}
