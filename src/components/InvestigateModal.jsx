import { Icons } from "./Icons";

export default function InvestigateModal({
  app,
  selectedAccounts,
  onClose,
  onConfirm,
}) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
          zIndex: 200,
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 480,
          maxWidth: "90vw",
          background: "#1C1C1E",
          borderRadius: 20,
          border: "0.5px solid rgba(255,255,255,0.1)",
          zIndex: 201,
          animation: "fadeIn 0.25s ease",
          overflow: "hidden",
        }}
      >
        <div style={{ padding: "24px 28px 0" }}>
          <h3
            style={{
              margin: 0,
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: -0.3,
            }}
          >
            Start Investigation
          </h3>
          <p
            style={{
              margin: "8px 0 0",
              fontSize: 13,
              color: "#86868B",
              lineHeight: 1.5,
            }}
          >
            You're about to investigate{" "}
            <strong style={{ color: "#F5F5F7" }}>
              {selectedAccounts.size} account
              {selectedAccounts.size > 1 ? "s" : ""}
            </strong>{" "}
            in <strong style={{ color: app.color }}>{app.name}</strong>. The
            agents will run enrichment, risk evaluation, and stakeholder
            outreach.
          </p>
        </div>

        {/* Account Tags */}
        <div
          style={{
            padding: "20px 28px",
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            maxHeight: 120,
            overflowY: "auto",
          }}
        >
          {[...selectedAccounts].slice(0, 20).map((id) => (
            <span
              key={id}
              style={{
                padding: "3px 10px",
                borderRadius: 6,
                background: "rgba(255,255,255,0.05)",
                fontSize: 11,
                color: "#86868B",
                fontFamily: "'SF Mono', monospace",
              }}
            >
              {id}
            </span>
          ))}
          {selectedAccounts.size > 20 && (
            <span
              style={{ padding: "3px 10px", fontSize: 11, color: "#48484A" }}
            >
              +{selectedAccounts.size - 20} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div
          style={{
            padding: "16px 28px 24px",
            display: "flex",
            justifyContent: "flex-end",
            gap: 10,
          }}
        >
          <button
            onClick={onClose}
            style={{
              height: 38,
              padding: "0 20px",
              borderRadius: 10,
              border: "0.5px solid rgba(255,255,255,0.1)",
              background: "transparent",
              color: "#86868B",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            style={{
              height: 38,
              padding: "0 24px",
              borderRadius: 10,
              border: "none",
              background: "linear-gradient(135deg,#0071E3,#0A84FF)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Icons.Play /> Begin
          </button>
        </div>
      </div>
    </>
  );
}
