// ===== Tech / Platform Icons =====
// Using multiple react-icons packs for reliable coverage
// Tabler Icons (tb), VS Code Icons (vsc), Font Awesome 6 (fa6), Simple Icons (si)

import {
  SiSap,
  SiAmazonwebservices,
  SiGooglecloud,
  SiLinux,
} from "react-icons/si";
import { VscServer, VscAzure } from "react-icons/vsc";
import { TbBrain } from "react-icons/tb";
import { BsWindows } from "react-icons/bs";

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
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Shield */}
      <path
        d="M12 1.5L2.5 6v6c0 6.1 4.1 11.5 9.5 13 5.4-1.5 9.5-6.9 9.5-13V6L12 1.5Z"
        fill="rgba(255,255,255,0.08)"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      {/* Bot head */}
      <rect
        x="7.8"
        y="9.5"
        width="8.4"
        height="6"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Eyes */}
      <circle cx="10.2" cy="12.2" r="0.9" fill="currentColor" />
      <circle cx="13.8" cy="12.2" r="0.9" fill="currentColor" />
      {/* Antenna */}
      <line
        x1="12"
        y1="9.5"
        x2="12"
        y2="7.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="12" cy="7" r="0.8" fill="currentColor" />
      {/* Lock body below bot */}
      <rect
        x="9.5"
        y="16.5"
        width="5"
        height="3.2"
        rx="0.8"
        fill="currentColor"
      />
      {/* Lock arch */}
      <path
        d="M10.8 16.5v-1a1.2 1.2 0 0 1 2.4 0v1"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      {/* Keyhole */}
      <circle cx="12" cy="17.7" r="0.55" fill="#000" />
      <rect x="11.75" y="18" width="0.5" height="0.8" rx="0.2" fill="#000" />
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

// ===== Platform Icon Map =====
// Maps app IDs → { component, color }
const PLATFORM_ICON_CONFIG = {
  "sap-prod": {
    component: SiSap,
    color: "#0FAAFF",
  },
  "aws-core": {
    component: SiAmazonwebservices,
    color: "#FF9900",
  },
  "unix-legacy": {
    component: SiLinux,
    color: "#FCC624",
  },
  "entra-saas": {
    component: VscAzure, // VS Code icons — reliable Azure icon
    color: "#0078D4",
  },
  "gcp-data": {
    component: SiGooglecloud,
    color: "#4285F4",
  },
  mainframe: {
    component: VscServer,
    color: "#64D2FF",
  },
  "ai-agents": {
    component: TbBrain,
    color: "#FF375F",
  },
};

// Helper — returns a styled React element for the app icon
export function getAppIcon(appId, size = 20) {
  const config = PLATFORM_ICON_CONFIG[appId];
  if (!config) return null;

  const { component: IconComponent, color } = config;
  return <IconComponent size={size} color={color} />;
}

export { PLATFORM_ICON_CONFIG };
