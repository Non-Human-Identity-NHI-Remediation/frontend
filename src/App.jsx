import { useState, useEffect } from "react";
import "./App.css";

import { MOCK_APPLICATIONS } from "./data/mockData";
import { INVESTIGATION_STATES } from "./constants/investigationStates";
import { useInvestigation } from "./hooks/useInvestigation";
import {
  downloadAccountReport,
  downloadAppReport,
} from "./utils/reportGenerator";

import Navbar from "./components/Navbar";
import StatsBar from "./components/StatsBar";
import Toolbar from "./components/Toolbar";
import AppRow from "./components/AppRow";
import ExpandedAccounts from "./components/ExpandedAccounts";
import InvestigateModal from "./components/InvestigateModal";

export default function App() {
  const [search, setSearch] = useState("");
  const [expandedApp, setExpandedApp] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [accountSearch, setAccountSearch] = useState("");
  const [accountTypeFilter, setAccountTypeFilter] = useState("All");
  const [accountStatusFilter, setAccountStatusFilter] = useState("All");
  const [selectedAccounts, setSelectedAccounts] = useState(new Set());
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelApp, setPanelApp] = useState(null);
  const [now, setNow] = useState(Date.now());

  const { investigations, accountInvestigations, startInvestigation } =
    useInvestigation();

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  // --- Computed ---
  const platforms = [
    "All",
    ...new Set(MOCK_APPLICATIONS.map((a) => a.platform)),
  ];

  const filteredApps = MOCK_APPLICATIONS.filter((a) => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = activeFilter === "All" || a.platform === activeFilter;
    return matchSearch && matchFilter;
  });

  const getFilteredAccounts = (app) => {
    return app.accounts.filter((a) => {
      const ms =
        a.name.toLowerCase().includes(accountSearch.toLowerCase()) ||
        a.id.toLowerCase().includes(accountSearch.toLowerCase());
      const mt =
        accountTypeFilter === "All" ||
        (accountTypeFilter === "Agents"
          ? a.isAgent
          : !a.isAgent && a.type === accountTypeFilter);
      const mst =
        accountStatusFilter === "All" || a.status === accountStatusFilter;
      return ms && mt && mst;
    });
  };

  const appInvestigationSummary = (app) => {
    const states = app.accounts
      .map((a) => accountInvestigations[a.id]?.state)
      .filter(Boolean);
    if (states.length === 0) return null;
    return {
      total: states.length,
      complete: states.filter((s) => s === "complete").length,
      failed: states.filter((s) => s === "failed").length,
      running: states.filter((s) => !["complete", "failed", "idle"].includes(s))
        .length,
    };
  };

  // --- Actions ---
  const toggleExpand = (appId) => {
    setExpandedApp((prev) => (prev === appId ? null : appId));
    setAccountSearch("");
    setAccountTypeFilter("All");
    setAccountStatusFilter("All");
    setSelectedAccounts(new Set());
  };

  const toggleAccount = (id) => {
    setSelectedAccounts((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const selectAllFiltered = (app) => {
    const filtered = getFilteredAccounts(app).filter(
      (a) => a.status !== "Active"
    );
    const allSelected = filtered.every((a) => selectedAccounts.has(a.id));
    setSelectedAccounts((prev) => {
      const next = new Set(prev);
      filtered.forEach((a) =>
        allSelected ? next.delete(a.id) : next.add(a.id)
      );
      return next;
    });
  };

  const openInvestigatePanel = (app) => {
    setPanelApp(app);
    setPanelOpen(true);
  };

  const handleStartInvestigation = () => {
    if (!panelApp || selectedAccounts.size === 0) return;
    startInvestigation(panelApp.id, [...selectedAccounts]);
    setPanelOpen(false);
    setSelectedAccounts(new Set());
  };

  // --- Render ---
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#F5F5F7",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif",
      }}
    >
      <Navbar accountInvestigations={accountInvestigations} />

      {/* Hero */}
      <div className="page-container" style={{ paddingTop: 44 }}>
        <h1
          style={{
            fontSize: 38,
            fontWeight: 700,
            letterSpacing: -1.5,
            margin: 0,
            lineHeight: 1.1,
            background: "linear-gradient(135deg,#F5F5F7 0%,#86868B 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Non-Human Identity Governance
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "#86868B",
            marginTop: 6,
            fontWeight: 400,
            letterSpacing: -0.2,
          }}
        >
          Investigate and remediate non-human identities across your enterprise.
          Sit back and relax while agents do the investigation and report you
          back with findings, approvals
        </p>
      </div>

      <StatsBar applications={MOCK_APPLICATIONS} />

      <Toolbar
        search={search}
        onSearchChange={setSearch}
        platforms={platforms}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {/* Application Table */}
      <div
        className="page-container"
        style={{ paddingTop: 20, paddingBottom: 64 }}
      >
        <div
          style={{
            borderRadius: 16,
            border: "0.5px solid rgba(255,255,255,0.06)",
            overflow: "hidden",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          {/* Table Header */}
          <div className="app-table-header">
            {[
              "Application",
              "Accounts",
              "Agents",
              "Stale",
              "Orphaned",
              "Progress",
              "Report",
              "",
            ].map((h) => (
              <span key={h}>{h}</span>
            ))}
          </div>

          {filteredApps.map((app, ai) => {
            const isExpanded = expandedApp === app.id;
            const filteredAccs = isExpanded ? getFilteredAccounts(app) : [];
            const allFilteredSelected =
              filteredAccs.length > 0 &&
              filteredAccs.every((a) => selectedAccounts.has(a.id));

            return (
              <div
                key={app.id}
                style={{
                  borderBottom: "0.5px solid rgba(255,255,255,0.04)",
                  animation: `fadeIn 0.35s ease ${ai * 0.03}s both`,
                }}
              >
                <AppRow
                  app={app}
                  isExpanded={isExpanded}
                  summary={appInvestigationSummary(app)}
                  onToggle={() => toggleExpand(app.id)}
                  onInvestigate={() => {
                    if (!isExpanded) toggleExpand(app.id);
                    openInvestigatePanel(app);
                  }}
                  onDownload={() =>
                    downloadAppReport(app, accountInvestigations)
                  }
                />

                {isExpanded && (
                  <ExpandedAccounts
                    app={app}
                    filteredAccounts={filteredAccs}
                    allFilteredSelected={allFilteredSelected}
                    selectedAccounts={selectedAccounts}
                    accountSearch={accountSearch}
                    accountStatusFilter={accountStatusFilter}
                    accountTypeFilter={accountTypeFilter}
                    accountInvestigations={accountInvestigations}
                    onAccountSearchChange={setAccountSearch}
                    onStatusFilterChange={setAccountStatusFilter}
                    onTypeFilterChange={setAccountTypeFilter}
                    onToggleAccount={toggleAccount}
                    onSelectAll={() => selectAllFiltered(app)}
                    onInvestigate={() => openInvestigatePanel(app)}
                    onDownloadReport={(acc) =>
                      downloadAccountReport(acc, app, accountInvestigations)
                    }
                  />
                )}
              </div>
            );
          })}

          {filteredApps.length === 0 && (
            <div
              style={{
                padding: 48,
                textAlign: "center",
                color: "#86868B",
                fontSize: 14,
              }}
            >
              No applications match your search.
            </div>
          )}
        </div>
      </div>

      {panelOpen && panelApp && (
        <InvestigateModal
          app={panelApp}
          selectedAccounts={selectedAccounts}
          onClose={() => setPanelOpen(false)}
          onConfirm={handleStartInvestigation}
        />
      )}
    </div>
  );
}
