import { useState, useCallback } from "react";

export function useInvestigation() {
  const [investigations, setInvestigations] = useState({});
  const [accountInvestigations, setAccountInvestigations] = useState({});

  const startInvestigation = useCallback((appId, accountIds) => {
    const stages = [
      "queued",
      "agent_a",
      "agent_b",
      "agent_c",
      "review",
      "complete",
    ];

    accountIds.forEach((accId) => {
      let idx = 0;
      setAccountInvestigations((prev) => ({
        ...prev,
        [accId]: { state: "queued", progress: 0, startedAt: Date.now() },
      }));

      const delay = Math.random() * 1500;
      setTimeout(() => {
        const iv = setInterval(() => {
          idx++;
          if (idx >= stages.length) {
            clearInterval(iv);
            setAccountInvestigations((prev) => ({
              ...prev,
              [accId]: { ...prev[accId], state: "complete", progress: 100 },
            }));
            return;
          }
          if (idx === 3 && Math.random() < 0.08) {
            clearInterval(iv);
            setAccountInvestigations((prev) => ({
              ...prev,
              [accId]: { ...prev[accId], state: "failed" },
            }));
            return;
          }
          setAccountInvestigations((prev) => ({
            ...prev,
            [accId]: {
              ...prev[accId],
              state: stages[idx],
              progress: Math.round((idx / (stages.length - 1)) * 100),
            },
          }));
        }, 2200 + Math.random() * 1800);
      }, delay);
    });

    setInvestigations((prev) => ({
      ...prev,
      [appId]: { count: accountIds.length, startedAt: Date.now() },
    }));
  }, []);

  return { investigations, accountInvestigations, startInvestigation };
}
