import { Icons } from "./Icons";

export default function Navbar({ accountInvestigations }) {
  const isProcessing = Object.values(accountInvestigations).some(
    (v) => !["complete", "failed", "idle"].includes(v?.state)
  );

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        background: "rgba(0,0,0,0.72)",
        borderBottom: "0.5px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 32px",
          height: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 7,
              background: "linear-gradient(135deg,#0071E3,#BF5AF2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icons.Shield />
          </div>
          <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: -0.3 }}>
            NHI Remediation
          </span>
          <span style={{ fontSize: 11, color: "#48484A", marginLeft: 4 }}>
            v1.0.0
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {isProcessing && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                color: "#FF9F0A",
              }}
            >
              <Icons.Spinner /> Processing
            </div>
          )}
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              background: "rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 500,
              color: "#86868B",
            }}
          >
            N
          </div>
        </div>
      </div>
    </nav>
  );
}
