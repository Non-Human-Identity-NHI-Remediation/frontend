const ACCOUNT_TYPES = [
  "Service",
  "Generic",
  "Bot",
  "API",
  "Scheduled Task",
  "AI Agent",
  "RPA Bot",
  "ML Pipeline",
];
const STATUSES = ["Active", "Stale", "Orphaned", "Unknown"];
const OWNERS = [
  "Platform Team",
  "DevOps",
  "Data Eng",
  "Security",
  "Unassigned",
  "App Team",
  "SRE",
  "Cloud Ops",
  "AI/ML Team",
  "Automation CoE",
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
    const type = isAgent ? ACCOUNT_TYPES[5 + (i % 3)] : ACCOUNT_TYPES[i % 5];
    const lastDays = Math.floor(Math.random() * 365) + 1;
    const risk = ["Low", "Medium", "High", "Critical"][
      Math.floor(Math.random() * 4)
    ];
    const status = STATUSES[Math.floor(Math.random() * 4)];
    const hasReport = status !== "Active" && Math.random() > 0.4;

    return {
      id: `${prefix}-${String(i + 1).padStart(4, "0")}`,
      name: isAgent
        ? `${AGENT_NAMES[i % AGENT_NAMES.length]}_${i + 1}`
        : `svc_${prefix.toLowerCase()}_${names[i % names.length]}_${i + 1}`,
      type,
      status,
      lastActivity: Math.random() > 0.3 ? `${lastDays}d ago` : "Never",
      owner: isAgent ? OWNERS[8 + (i % 2)] : OWNERS[i % 8],
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
    name: "UNIX Legacy Infra",
    platform: "UNIX/Linux",
    accounts: generateAccounts(67, "UNIX", false),
    icon: "◇",
    color: "#30D158",
  },
  {
    id: "sap-prod",
    name: "SAP Production",
    platform: "Windows",
    accounts: generateAccounts(48, "SAP", true),
    icon: "⬡",
    color: "#0071E3",
  },
  {
    id: "aws-core",
    name: "AWS Core Services",
    platform: "Cloud",
    accounts: generateAccounts(125, "AWS", true),
    icon: "△",
    color: "#FF9F0A",
  },

  {
    id: "gcp-data",
    name: "GCP Data Platform",
    platform: "Cloud",
    accounts: generateAccounts(34, "GCP", true),
    icon: "□",
    color: "#FF453A",
  },
  {
    id: "mainframe",
    name: "Legacy",
    platform: "Legacy",
    accounts: generateAccounts(89, "MF", false),
    icon: "⬢",
    color: "#64D2FF",
  },
  {
    id: "ai-agents",
    name: "AI Agent Registry",
    platform: "AI/ML",
    accounts: generateAccounts(42, "AGENT", true),
    icon: "◆",
    color: "#FF375F",
  },
];
