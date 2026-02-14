const ACCOUNT_TYPES = [
  "Service",
  "Generic",
  "AI Agent",
  "RPA Bot",
  "ML Pipeline",
];
const STATUSES = ["Active", "Stale", "Orphaned"];
const OWNERS = [
  {
    name: "James Mitchell",
    username: "j.mitchell",
    employeeId: "EMP-10234",
    email: "j.mitchell@contoso.com",
    department: "Platform Engineering",
    title: "Sr. Platform Engineer",
  },
  {
    name: "Sarah Chen",
    username: "s.chen",
    employeeId: "EMP-10412",
    email: "s.chen@contoso.com",
    department: "DevOps",
    title: "DevOps Lead",
  },
  {
    name: "Raj Patel",
    username: "r.patel",
    employeeId: "EMP-10587",
    email: "r.patel@contoso.com",
    department: "Data Engineering",
    title: "Data Engineer II",
  },
  {
    name: "Maria Lopez",
    username: "m.lopez",
    employeeId: "EMP-10033",
    email: "m.lopez@contoso.com",
    department: "Security Operations",
    title: "Security Analyst",
  },
  {
    name: "Unassigned",
    username: "—",
    employeeId: "—",
    email: "—",
    department: "—",
    title: "—",
  },
  {
    name: "David Kim",
    username: "d.kim",
    employeeId: "EMP-10891",
    email: "d.kim@contoso.com",
    department: "Application Support",
    title: "App Support Engineer",
  },
  {
    name: "Alex Rivera",
    username: "a.rivera",
    employeeId: "EMP-11002",
    email: "a.rivera@contoso.com",
    department: "SRE",
    title: "Site Reliability Engineer",
  },
  {
    name: "Priya Sharma",
    username: "p.sharma",
    employeeId: "EMP-11156",
    email: "p.sharma@contoso.com",
    department: "Cloud Operations",
    title: "Cloud Ops Manager",
  },
  {
    name: "Tom Zhang",
    username: "t.zhang",
    employeeId: "EMP-11340",
    email: "t.zhang@contoso.com",
    department: "AI/ML Team",
    title: "ML Engineer",
  },
  {
    name: "Nina Kowalski",
    username: "n.kowalski",
    employeeId: "EMP-11478",
    email: "n.kowalski@contoso.com",
    department: "Automation CoE",
    title: "RPA Developer",
  },
];

const AGENT_NAMES = [
  "copilot",
  "chatbot",
  "ml_scorer",
  "rpa_invoice",
  "ai_summarizer",
  "llm_gateway",
  "embedding_svc",
  "rag_pipeline",
  "agent_orchestrator",
  "vision_api",
];

function generateAccounts(count, prefix, includeAgents = false) {
  const names = [
    "batch",
    "etl",
    "api",
    "sync",
    "monitor",
    "backup",
    "deploy",
    "auth",
    "cache",
    "proxy",
  ];
  return Array.from({ length: count }, (_, i) => {
    const isAgent = includeAgents && i % 5 === 0;
    const type = isAgent ? ACCOUNT_TYPES[2 + (i % 3)] : ACCOUNT_TYPES[i % 2];
    const lastDays = Math.floor(Math.random() * 365) + 1;
    const status = STATUSES[Math.floor(Math.random() * 3)];

    // Owners pool excluding "Unassigned" (index 4)
    const assignedOwners = OWNERS.filter((o) => o.name !== "Unassigned");

    // Orphaned → no owner, High risk
    // Stale → has owner, Medium risk
    // Active → has owner, Low risk
    const owner =
      status === "Orphaned"
        ? OWNERS[4] // "Unassigned"
        : isAgent
        ? assignedOwners[(8 + (i % 2)) % assignedOwners.length]
        : assignedOwners[i % assignedOwners.length];

    const risk =
      status === "Orphaned" ? "High" : status === "Stale" ? "Medium" : "Low";
    const hasReport = status !== "Active" && Math.random() > 0.4;

    return {
      id: `${prefix}-${String(i + 1).padStart(4, "0")}`,
      name: isAgent
        ? `${AGENT_NAMES[i % AGENT_NAMES.length]}_${i + 1}`
        : `svc_${prefix.toLowerCase()}_${names[i % names.length]}_${i + 1}`,
      type,
      status,
      lastActivity: Math.random() > 0.3 ? `${lastDays}d ago` : "Never",
      owner,
      risk,
      isAgent,
      reportReady: hasReport,
      investigation: null,
      enrichment: isAgent
        ? {
            model: ["GPT-4o", "Claude Sonnet", "Phi-4", "Gemini"][i % 4],
            permissions: ["Read", "Read/Write", "Admin"][i % 3],
            lastPrompt: `${Math.floor(Math.random() * 48)}h ago`,
            tokenUsage: `${(Math.random() * 2).toFixed(1)}M/month`,
          }
        : null,
    };
  });
}

export const MOCK_APPLICATIONS = [
  {
    id: "entra-saas",
    name: "Entra ID",
    platform: "Cloud",
    accounts: generateAccounts(210, "ENTRA", true),
    icon: "○",
    color: "#BF5AF2",
  },

  {
    id: "unix-legacy",
    name: "UNIX",
    platform: "UNIX/Linux",
    accounts: generateAccounts(67, "UNIX", false),
    icon: "◇",
    color: "#30D158",
  },

  {
    id: "sap-prod",
    name: "SAP",
    platform: "Windows",
    accounts: generateAccounts(48, "SAP", true),
    icon: "⬡",
    color: "#0071E3",
  },
  {
    id: "aws-core",
    name: "AWS",
    platform: "Cloud",
    accounts: generateAccounts(125, "AWS", true),
    icon: "△",
    color: "#FF9F0A",
  },

  {
    id: "gcp-data",
    name: "Google Cloud",
    platform: "Cloud",
    accounts: generateAccounts(34, "GCP", true),
    icon: "□",
    color: "#FF453A",
  },

  {
    id: "ai-agents",
    name: "AI Agent Registry",
    platform: "AI/ML",
    accounts: generateAccounts(42, "AGENT", true),
    icon: "◆",
    color: "#FF375F",
  },
  {
    id: "mainframe",
    name: "Mainframe z/OS",
    platform: "Legacy",
    accounts: generateAccounts(89, "MF", false),
    icon: "⬢",
    color: "#64D2FF",
  },
];
