import { useState } from "react";
import { Icons } from "./Icons";
import {
  StatusBadge,
  RiskBadge,
  TypeBadge,
  MiniProgress,
  Checkbox,
} from "./Badges";
import OwnerModal from "./OwnerModal";

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
  const [selectedOwner, setSelectedOwner] = useState(null);

  const isSelectable = (acc) => acc.status !== "Active";
  const selectableFiltered = filteredAccounts.filter(isSelectable);
  const allSelectableSelected =
    selectableFiltered.length > 0 &&
    selectableFiltered.every((a) => selectedAccounts.has(a.id));

  const handleOwnerClick = (e, owner) => {
    e.stopPropagation();
    if (owner.name === "Unassigned") return;
    setSelectedOwner(owner);
  };

  return (
    <div
      style={{
        background: "rgba(0,0,0,0.3)",
        borderTop: "0.5px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Toolbar */}
      <div className="account-toolbar">
        <div className="account-search-wrap">
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
            className="account-search-input"
          />
        </div>

        <div className="account-filters">
          {["All", "Active", "Stale", "Orphaned"].map((f) => (
            <button
              key={f}
              onClick={() => onStatusFilterChange(f)}
              className="filter-pill-sm"
              style={{
                border:
                  accountStatusFilter === f
                    ? "none"
                    : "0.5px solid rgba(255,255,255,0.06)",
                background:
                  accountStatusFilter === f
                    ? "rgba(0,113,227,0.7)"
                    : "transparent",
                color: accountStatusFilter === f ? "#fff" : "#86868B",
              }}
            >
              {f}
            </button>
          ))}

          <div className="filter-divider" />

          {["All", "Agents", "Service", "Generic"].map((f) => (
            <button
              key={f}
              onClick={() => onTypeFilterChange(f)}
              className="filter-pill-sm"
              style={{
                border:
                  accountTypeFilter === f
                    ? "none"
                    : "0.5px solid rgba(255,255,255,0.06)",
                background:
                  accountTypeFilter === f
                    ? "rgba(255,55,95,0.6)"
                    : "transparent",
                color: accountTypeFilter === f ? "#fff" : "#86868B",
              }}
            >
              {f === "Agents" ? "🤖 Agents" : f}
            </button>
          ))}
        </div>
      </div>

      {/* Column Headers */}
      <div className="account-header">
        <div className="account-header-check" onClick={onSelectAll}>
          <Checkbox checked={allSelectableSelected} onChange={onSelectAll} />
        </div>
        <span className="account-header-col">Account</span>
        <span className="account-header-col">Type</span>
        <span className="account-header-col">Status</span>
        <span className="account-header-col account-col-desktop">Risk</span>
        <span className="account-header-col account-col-desktop">Owner</span>
        <span className="account-header-col account-col-desktop">
          Investigation
        </span>
        <span className="account-header-col">Report</span>
      </div>

      {/* Account Rows */}
      <div style={{ maxHeight: 420, overflowY: "auto" }}>
        {filteredAccounts.map((acc) => {
          const inv = accountInvestigations[acc.id];
          const isComplete = inv?.state === "complete";
          const isFailed = inv?.state === "failed";
          const isRunning =
            inv && !["complete", "failed", "idle"].includes(inv.state);
          const canSelect = isSelectable(acc);

          return (
            <div
              key={acc.id}
              className="account-row"
              style={{ opacity: canSelect ? 1 : 0.55 }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              {/* Checkbox */}
              {canSelect ? (
                <Checkbox
                  checked={selectedAccounts.has(acc.id)}
                  onChange={() => onToggleAccount(acc.id)}
                />
              ) : (
                <span
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 4,
                    border: "1.5px solid rgba(255,255,255,0.06)",
                    display: "inline-flex",
                    cursor: "not-allowed",
                  }}
                />
              )}

              {/* Account */}
              <div style={{ minWidth: 0 }}>
                <div className="account-name">{acc.name}</div>
                <div className="account-meta">
                  <span>{acc.id}</span>
                  <span className="account-meta-desktop">
                    · {acc.owner.name}
                  </span>
                </div>
              </div>

              {/* Type */}
              <TypeBadge type={acc.type} isAgent={acc.isAgent} />

              {/* Status */}
              <StatusBadge status={acc.status} />

              {/* Risk — desktop */}
              <div className="account-col-desktop">
                <RiskBadge risk={acc.risk} />
              </div>

              {/* Owner — desktop, clickable */}
              <div className="account-col-desktop">
                <span
                  onClick={(e) => handleOwnerClick(e, acc.owner)}
                  style={{
                    fontSize: 11,
                    color:
                      acc.owner.name === "Unassigned" ? "#48484A" : "#0A84FF",
                    cursor:
                      acc.owner.name === "Unassigned" ? "default" : "pointer",
                    fontWeight: 500,
                    borderBottom:
                      acc.owner.name === "Unassigned"
                        ? "none"
                        : "1px dashed rgba(10,132,255,0.3)",
                    paddingBottom: 1,
                  }}
                >
                  {acc.owner.name}
                </span>
              </div>

              {/* Investigation — desktop */}
              <div className="account-col-desktop">
                <MiniProgress
                  state={inv?.state || "idle"}
                  progress={inv?.progress || 0}
                />
              </div>

              {/* Report */}
              <div>
                {isComplete || acc.reportReady ? (
                  <button
                    onClick={() => onDownloadReport(acc)}
                    className="report-btn"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(48,209,88,0.18)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "rgba(48,209,88,0.1)")
                    }
                  >
                    <Icons.File /> <span className="report-label">Report</span>
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
                  <span style={{ fontSize: 10, color: "#FF453A" }}>✕</span>
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
      <div className="expanded-footer">
        <span style={{ fontSize: 12, color: "#86868B" }}>
          {filteredAccounts.length} accounts · {selectableFiltered.length}{" "}
          selectable · {selectedAccounts.size} selected
        </span>
        {selectedAccounts.size > 0 && (
          <button onClick={onInvestigate} className="investigate-btn-primary">
            <Icons.Play /> Investigate {selectedAccounts.size}
          </button>
        )}
      </div>

      {/* Owner Modal */}
      {selectedOwner && (
        <OwnerModal
          owner={selectedOwner}
          onClose={() => setSelectedOwner(null)}
        />
      )}
    </div>
  );
}
