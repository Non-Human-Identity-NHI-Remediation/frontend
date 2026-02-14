// ===== UI Icons =====
export const Icons = {
  Search: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  ChevronDown: ({ open }) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      style={{
        transition: "transform 0.25s",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  Close: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  ),
  Download: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  ),
  Play: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  Check: () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Spinner: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      style={{ animation: "spin 1s linear infinite" }}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  Shield: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Activity: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  Clock: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Alert: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  Filter: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  ),
  Bot: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="16" y1="16" x2="16" y2="16" />
    </svg>
  ),
  File: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  ),
  Zap: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
};

// ===== Platform / Application Icons =====
export const PlatformIcons = {
  // Microsoft Azure
  Azure: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
      <defs>
        <linearGradient
          id="az1"
          x1="58.97"
          y1="7.64"
          x2="28.98"
          y2="88.84"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#114A8B" />
          <stop offset="1" stopColor="#0669BC" />
        </linearGradient>
        <linearGradient
          id="az2"
          x1="60.25"
          y1="44.41"
          x2="53.37"
          y2="46.71"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopOpacity=".3" />
          <stop offset=".07" stopOpacity=".2" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="az3"
          x1="46.11"
          y1="6.03"
          x2="72.31"
          y2="85.74"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#3CCBF4" />
          <stop offset="1" stopColor="#2892DF" />
        </linearGradient>
      </defs>
      <path
        d="M33.34 6.54h26.04L32.49 88.04a5.06 5.06 0 0 1-4.8 3.42H8.63a5.07 5.07 0 0 1-4.8-6.68L29.55 9.96a5.06 5.06 0 0 1 4.8-3.42Z"
        fill="url(#az1)"
      />
      <path
        d="M71.17 60.26H29.88a2.27 2.27 0 0 0-1.54 3.93l26.53 24.77a5.1 5.1 0 0 0 3.48 1.37h22.63Z"
        fill="url(#az2)"
      />
      <path
        d="M33.34 6.54a5.02 5.02 0 0 0-4.79 3.53L2.85 84.69a5.07 5.07 0 0 0 4.75 6.77h19.4a5.26 5.26 0 0 0 4.46-3.42l5.03-14.78 17.91 16.7a5.15 5.15 0 0 0 3.24 1.5h22.57l-9.95-31.2-30.09.01L59.43 6.54Z"
        fill="url(#az3)"
      />
    </svg>
  ),

  // Amazon Web Services
  AWS: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <path
        d="M18.1 28.2c0 .9.1 1.6.3 2.2.2.5.5 1.1.9 1.7.1.2.2.4.2.5 0 .2-.1.4-.4.6l-1.2.8c-.2.1-.3.2-.5.2-.2 0-.4-.1-.6-.3-.3-.3-.5-.6-.7-.9-.2-.3-.4-.7-.6-1.2-1.5 1.8-3.4 2.6-5.7 2.6-1.6 0-2.9-.5-3.9-1.4-.9-.9-1.4-2.2-1.4-3.7 0-1.6.6-3 1.7-3.9 1.2-1 2.7-1.5 4.7-1.5.7 0 1.3.1 2 .2.7.1 1.4.3 2.1.5v-1.4c0-1.5-.3-2.5-.9-3.1-.6-.6-1.7-.9-3.2-.9-.7 0-1.4.1-2.1.3-.7.2-1.4.4-2.1.8-.3.1-.5.2-.7.3-.2 0-.3.1-.4.1-.3 0-.5-.2-.5-.7v-.9c0-.4.1-.6.2-.8.1-.2.4-.3.7-.5.7-.4 1.5-.7 2.5-.9 1-.3 2-.4 3.1-.4 2.4 0 4.1.5 5.2 1.6 1.1 1.1 1.6 2.7 1.6 4.9v6.4Zm-7.8 2.9c.7 0 1.3-.1 2-.4.7-.3 1.3-.7 1.8-1.3.3-.4.5-.8.6-1.3.1-.5.2-1.1.2-1.8v-.9c-.5-.2-1.1-.3-1.7-.4-.6-.1-1.2-.2-1.8-.2-1.3 0-2.2.2-2.8.7-.6.5-1 1.2-1 2.1 0 .9.2 1.5.7 2 .5.4 1.1.6 2 .6Zm15.5 2c-.4 0-.7-.1-.8-.2-.2-.2-.3-.4-.4-.8l-4.7-15.4c-.1-.4-.2-.7-.2-.8 0-.3.2-.5.5-.5h1.9c.4 0 .7.1.8.2.2.2.3.4.4.8L26 28.9l3-12.5c.1-.4.2-.7.4-.8.2-.2.5-.2.9-.2h1.5c.4 0 .7.1.9.2.2.2.3.4.4.8l3 12.7 2.8-12.7c.1-.4.2-.7.4-.8.2-.2.5-.2.8-.2h1.8c.3 0 .5.2.5.5 0 .1 0 .2-.1.4 0 .1-.1.3-.2.5l-4.8 15.4c-.1.4-.2.7-.4.8-.2.2-.5.2-.8.2h-1.7c-.4 0-.7-.1-.9-.2-.2-.2-.3-.4-.4-.8l-3-12.2-2.9 12.2c-.1.4-.2.7-.4.8-.2.2-.5.2-.9.2Zm24.1.7c-1 0-2-.1-2.9-.4-.9-.3-1.7-.6-2.2-1-.3-.2-.5-.4-.6-.6-.1-.2-.1-.4-.1-.6v-1c0-.5.2-.7.5-.7.1 0 .3 0 .4.1.1.1.4.2.6.3.8.4 1.6.6 2.4.8.8.2 1.6.3 2.3.3 1.2 0 2.2-.2 2.8-.7.6-.4 1-1.1 1-1.9 0-.6-.2-1-.5-1.4-.4-.4-1-.7-2-1l-2.8-.9c-1.4-.5-2.5-1.1-3.1-2-.6-.8-1-1.8-1-2.8 0-.8.2-1.5.5-2.2.4-.6.8-1.2 1.5-1.6.6-.5 1.3-.8 2.1-1 .8-.2 1.7-.3 2.6-.3.5 0 .9 0 1.4.1.5.1.9.2 1.4.3.4.1.8.3 1.2.4.4.2.7.3.9.5.3.2.5.3.6.5.1.2.2.4.2.7v.9c0 .5-.2.7-.5.7-.2 0-.5-.1-.8-.3-1.2-.5-2.5-.8-3.9-.8-1.1 0-2 .2-2.6.6-.6.4-.9 1-.9 1.8 0 .6.2 1 .6 1.4.4.4 1.1.7 2.1 1.1l2.7.9c1.4.5 2.4 1.1 3 1.9.6.8.9 1.7.9 2.8 0 .8-.2 1.6-.5 2.2-.4.7-.8 1.2-1.4 1.7-.6.5-1.4.8-2.2 1-.9.3-1.8.4-2.8.4Z"
        fill="#252F3E"
      />
      <path
        d="M50.4 41.8c-5.4 4-13.2 6.1-19.9 6.1-9.4 0-17.9-3.5-24.3-9.3-.5-.5-.1-1.1.5-.7 6.9 4 15.5 6.5 24.3 6.5 6 0 12.5-1.2 18.5-3.8.9-.4 1.7.6.9 1.2Z"
        fill="#FF9900"
      />
      <path
        d="M52.7 39.2c-.7-.9-4.5-.4-6.2-.2-.5.1-.6-.4-.1-.7 3.1-2.1 8.1-1.5 8.6-.8.6.8-.2 5.7-3 8.1-.4.4-.9.2-.7-.3.7-1.7 2.1-5.3 1.4-6.1Z"
        fill="#FF9900"
      />
    </svg>
  ),

  // Windows / Active Directory
  Windows: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 88 88">
      <path d="M0 12.4 35.7 7.6V42.6H0Z" fill="#F25022" />
      <path d="M39.7 7.1 87.5 0V42.6H39.7Z" fill="#7FBA00" />
      <path d="M0 46.2H35.7V81.1L0 76.3Z" fill="#00A4EF" />
      <path d="M39.7 46.2H87.5V88.6L39.7 81.7Z" fill="#FFB900" />
    </svg>
  ),

  // Linux / UNIX
  Linux: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <path
        d="M32 2C15.4 2 2 15.4 2 32s13.4 30 30 30 30-13.4 30-30S48.6 2 32 2Z"
        fill="#333"
      />
      <path
        d="M32 6c-3.3 0-6 4.5-6 13 0 5.8 1.2 10.5 3 13.2.5.7.7 1.5.7 2.4v5.8c0 1-.3 2-.9 2.8l-4.4 5.8c-.6.8-.3 1.4.7 1.4h13.8c1 0 1.3-.6.7-1.4l-4.4-5.8c-.6-.8-.9-1.8-.9-2.8v-5.8c0-.9.2-1.7.7-2.4 1.8-2.7 3-7.4 3-13.2 0-8.5-2.7-13-6-13Z"
        fill="#F0C674"
      />
      <ellipse cx="29" cy="17" rx="2" ry="2.5" fill="#333" />
      <ellipse cx="35" cy="17" rx="2" ry="2.5" fill="#333" />
      <path
        d="M28.5 22c0 0 1.5 2 3.5 2s3.5-2 3.5-2"
        stroke="#333"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),

  // Google Cloud Platform
  GCP: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <path
        d="M40.6 19.8h2.1l6-6 .3-2.6A27 27 0 0 0 5.2 24.8a2 2 0 0 1 1.3-.1l12-2s.6-1 .9-1a15 15 0 0 1 21.1-2Z"
        fill="#EA4335"
      />
      <path
        d="M54.4 24.8A27 27 0 0 0 46 13.2l-8.4 8.4a15 15 0 0 1 5.5 11.9v1.5a7.5 7.5 0 0 1 0 15H32l-1.5 1.5v9l1.5 1.5h11a19.5 19.5 0 0 0 11.4-36.2Z"
        fill="#4285F4"
      />
      <path
        d="M21 61h11v-12H21a7.5 7.5 0 0 1-3.1-.7l-2.2.7-6 6-.5 2.1A19.4 19.4 0 0 0 21 61Z"
        fill="#34A853"
      />
      <path
        d="M21 22a19.5 19.5 0 0 0-11.8 35l8.7-8.7A7.5 7.5 0 0 1 21 34a7.5 7.5 0 0 1 7.1-5l8.7-8.7A19.4 19.4 0 0 0 21 22Z"
        fill="#FBBC05"
      />
    </svg>
  ),

  // Microsoft Entra ID (Azure AD)
  EntraID: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 96 96">
      <defs>
        <linearGradient
          id="en1"
          x1="0"
          y1="48"
          x2="96"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0078D4" />
          <stop offset="1" stopColor="#5EA0EF" />
        </linearGradient>
      </defs>
      <path d="M11 20h30v28H11Z" fill="#0078D4" />
      <path d="M11 52h30v28H11Z" fill="#50E6FF" />
      <path d="M45 20h30v28H45Z" fill="#50E6FF" />
      <path d="M45 52h30v28H45Z" fill="#0078D4" />
      <circle cx="80" cy="16" r="10" fill="url(#en1)" />
      <circle cx="80" cy="16" r="6" fill="#fff" />
      <path d="M74 26c0 0 3 8 6 8s6-8 6-8" fill="url(#en1)" />
    </svg>
  ),

  // SAP
  SAP: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <rect width="64" height="64" rx="8" fill="#0FAAFF" />
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fill="#fff"
        fontSize="20"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
      >
        SAP
      </text>
    </svg>
  ),

  // Mainframe / z/OS
  Mainframe: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <rect
        x="16"
        y="4"
        width="32"
        height="56"
        rx="4"
        stroke="#64D2FF"
        strokeWidth="2.5"
      />
      <rect
        x="22"
        y="10"
        width="20"
        height="12"
        rx="2"
        stroke="#64D2FF"
        strokeWidth="1.5"
      />
      <line
        x1="22"
        y1="28"
        x2="42"
        y2="28"
        stroke="#64D2FF"
        strokeWidth="1.5"
      />
      <line
        x1="22"
        y1="33"
        x2="42"
        y2="33"
        stroke="#64D2FF"
        strokeWidth="1.5"
      />
      <line
        x1="22"
        y1="38"
        x2="42"
        y2="38"
        stroke="#64D2FF"
        strokeWidth="1.5"
      />
      <circle cx="26" cy="48" r="2.5" fill="#64D2FF" />
      <circle cx="32" cy="48" r="2.5" fill="#64D2FF" />
      <circle cx="38" cy="48" r="2.5" fill="#64D2FF" />
    </svg>
  ),

  // AI / ML / Agent
  AIAgent: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient
          id="ai1"
          x1="10"
          y1="10"
          x2="54"
          y2="54"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FF375F" />
          <stop offset="1" stopColor="#FF6B8A" />
        </linearGradient>
      </defs>
      <rect
        x="12"
        y="18"
        width="40"
        height="32"
        rx="6"
        stroke="url(#ai1)"
        strokeWidth="2.5"
      />
      <circle cx="26" cy="34" r="4" fill="url(#ai1)" />
      <circle cx="38" cy="34" r="4" fill="url(#ai1)" />
      <path
        d="M32 8v10"
        stroke="url(#ai1)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="6" r="3" fill="url(#ai1)" />
      <path
        d="M20 50v6M32 50v6M44 50v6"
        stroke="url(#ai1)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

// ===== Map application IDs to platform icons =====
export const APP_ICON_MAP = {
  "sap-prod": "SAP",
  "aws-core": "AWS",
  "unix-legacy": "Linux",
  "entra-saas": "EntraID",
  "gcp-data": "GCP",
  mainframe: "Mainframe",
  "ai-agents": "AIAgent",
};

// Helper to get the right icon component for an app
export function getAppIcon(appId, size = 20) {
  const iconKey = APP_ICON_MAP[appId];
  const IconComponent = iconKey ? PlatformIcons[iconKey] : null;
  return IconComponent ? <IconComponent size={size} /> : null;
}
