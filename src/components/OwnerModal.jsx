import { Icons } from "./Icons";

export default function OwnerModal({ owner, onClose }) {
  if (!owner || owner.name === "Unassigned") return null;

  const fields = [
    { label: "Username", value: owner.username },
    { label: "Employee ID", value: owner.employeeId },
    { label: "Email", value: owner.email },
    { label: "Department", value: owner.department },
    { label: "Title", value: owner.title },
  ];

  // Initials for avatar
  const initials = owner.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

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
          zIndex: 300,
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 340,
          maxWidth: "90vw",
          background: "#1C1C1E",
          borderRadius: 16,
          border: "0.5px solid rgba(255,255,255,0.1)",
          zIndex: 301,
          animation: "fadeIn 0.2s ease",
          overflow: "hidden",
          boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "24px 24px 16px",
            display: "flex",
            alignItems: "center",
            gap: 14,
            borderBottom: "0.5px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              background: "linear-gradient(135deg, #0071E3, #BF5AF2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: 700,
              color: "#fff",
              flexShrink: 0,
            }}
          >
            {initials}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: "#F5F5F7" }}>
              {owner.name}
            </div>
            <div style={{ fontSize: 12, color: "#86868B", marginTop: 2 }}>
              {owner.title}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 28,
              height: 28,
              borderRadius: 14,
              border: "none",
              background: "rgba(255,255,255,0.06)",
              color: "#86868B",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Icons.Close />
          </button>
        </div>

        {/* Details */}
        <div style={{ padding: "12px 24px 24px" }}>
          {fields.map((row) => (
            <div
              key={row.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 0",
                borderBottom: "0.5px solid rgba(255,255,255,0.04)",
              }}
            >
              <span style={{ fontSize: 12, color: "#86868B", flexShrink: 0 }}>
                {row.label}
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: "#F5F5F7",
                  fontWeight: 500,
                  textAlign: "right",
                  marginLeft: 16,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
