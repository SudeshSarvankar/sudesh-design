"use client";

import { useEffect, useState, type ComponentType } from "react";

export function Scenarios() {
  const [Inner, setInner] = useState<ComponentType | null>(null);

  useEffect(() => {
    void import("./ScenariosInner").then((mod) => {
      setInner(() => mod.ScenariosInner);
    });
  }, []);

  if (!Inner) {
    return (
      <div className="h-[480px] rounded-[20px] border border-line bg-paper px-5 py-6 text-[13px] text-ink/40">
        Loading screens…
      </div>
    );
  }

  return <Inner />;
}
