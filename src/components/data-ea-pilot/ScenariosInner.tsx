"use client";

import {
  DependenciesScreen,
  EolAnswerScreen,
  HomeAskScreen,
  LowConfidenceScreen,
  OwnerReviewScreen,
  PortfolioScreen,
  ScreenStack,
} from "@/components/data-ea-pilot/screens";
import { cn } from "@/lib/cn";
import { useState } from "react";

const tabs = [
  "Architect · ask",
  "Architect · EOL answer",
  "Architect · dependencies",
  "Low confidence",
  "Owner · review",
  "Head · portfolio",
] as const;

type Tab = (typeof tabs)[number];

export function ScenariosInner() {
  const [tab, setTab] = useState<Tab>("Architect · ask");

  return (
    <div>
      <div className="-mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
        <div className="flex min-w-max gap-2 pb-2">
          {tabs.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={cn(
                "rounded-full px-3 py-1.5 text-[13px] transition",
                tab === item
                  ? "bg-ink text-cream"
                  : "border border-line bg-paper text-ink/60 hover:text-ink",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6">
        {tab === "Architect · ask" ? (
          <ScreenStack>
            <HomeAskScreen />
          </ScreenStack>
        ) : null}
        {tab === "Architect · EOL answer" ? (
          <ScreenStack>
            <EolAnswerScreen />
          </ScreenStack>
        ) : null}
        {tab === "Architect · dependencies" ? (
          <ScreenStack>
            <DependenciesScreen />
          </ScreenStack>
        ) : null}
        {tab === "Low confidence" ? (
          <ScreenStack>
            <LowConfidenceScreen />
          </ScreenStack>
        ) : null}
        {tab === "Owner · review" ? (
          <ScreenStack>
            <OwnerReviewScreen />
          </ScreenStack>
        ) : null}
        {tab === "Head · portfolio" ? (
          <ScreenStack>
            <PortfolioScreen />
          </ScreenStack>
        ) : null}
      </div>
    </div>
  );
}
