import { INVESTIGATION_STATES } from "../constants/investigationStates";

export function downloadAccountReport(acc, app, accountInvestigations) {
  const inv = accountInvestigations[acc.id];
  const lines = [
    `NHI Remediation — Individual Account Report`,
    `Application: ${app.name}`,
    `Account: ${acc.name} (${acc.id})`,
    `Type: ${acc.type}`,
    `Status: ${acc.status}`,
    `Risk: ${acc.risk}`,
    ``,
    `Owner: ${acc.owner.name}`,
    `  Username: ${acc.owner.username}`,
    `  Employee ID: ${acc.owner.employeeId}`,
    `  Email: ${acc.owner.email}`,
    `  Department: ${acc.owner.department}`,
    `  Title: ${acc.owner.title}`,
    ``,
    `Last Activity: ${acc.lastActivity}`,
    `Investigation: ${inv ? INVESTIGATION_STATES[inv.state]?.label : "N/A"}`,
    acc.isAgent
      ? `\nAI Agent Details:\n  Model: ${acc.enrichment?.model}\n  Permissions: ${acc.enrichment?.permissions}\n  Last Prompt: ${acc.enrichment?.lastPrompt}\n  Token Usage: ${acc.enrichment?.tokenUsage}`
      : "",
    `\nGenerated: ${new Date().toISOString()}`,
  ].join("\n");

  const blob = new Blob([lines], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `nhi-report-${acc.id}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

export function downloadAppReport(app, accountInvestigations) {
  const header =
    "ID,Name,Type,Status,Risk,Owner,OwnerEmail,Department,LastActivity,IsAgent,InvestigationStatus";
  const rows = app.accounts.map((a) => {
    const inv = accountInvestigations[a.id];
    return `${a.id},${a.name},${a.type},${a.status},${a.risk},${a.owner.name},${
      a.owner.email
    },${a.owner.department},${a.lastActivity},${a.isAgent},${
      inv ? INVESTIGATION_STATES[inv.state]?.label : "N/A"
    }`;
  });
  const content = [
    `NHI Remediation Report — ${app.name}\n\n`,
    header,
    ...rows,
  ].join("\n");
  const blob = new Blob([content], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `nhi-report-${app.id}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
