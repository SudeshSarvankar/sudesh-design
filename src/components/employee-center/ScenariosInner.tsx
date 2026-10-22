"use client";

import {
  ApprovalDetailScreen,
  ApprovalsHubScreen,
  BadgeFormScreen,
  DanielHomeScreen,
  DanielRequestScreen,
  DanielSearchScreen,
  DatePickerScreen,
  DeclineReasonScreen,
  EmptyItemsScreen,
  ExpenseUploadScreen,
  HelpTopicsScreen,
  MeeraHomeScreen,
  MovedPageScreen,
  MyItemsScreen,
  PhotoRetryScreen,
  PriyaHomeScreen,
  ScreenStack,
  StatusTimelineScreen,
  TeamsReadyScreen,
} from "@/components/employee-center/screens";
import { cn } from "@/lib/cn";
import { useState } from "react";

const tabs = [
  "New joiner · home",
  "Everyday · search",
  "Everyday · request",
  "Everyday · tracking",
  "Manager · approvals",
  "Edge cases",
] as const;

type Tab = (typeof tabs)[number];

export function ScenariosInner() {
  const [tab, setTab] = useState<Tab>("New joiner · home");

  return (
    <div>
      <div className="-mx-4 overflow-x-auto px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0">
        <div className="flex min-w-max gap-2 pb-2">
          {tabs.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={cn(
                "min-h-11 rounded-full px-3 py-1.5 text-[13px] transition",
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
        {tab === "New joiner · home" ? (
          <ScreenStack>
            <PriyaHomeScreen />
            <BadgeFormScreen />
            <PhotoRetryScreen />
            <TeamsReadyScreen />
          </ScreenStack>
        ) : null}
        {tab === "Everyday · search" ? (
          <ScreenStack>
            <DanielHomeScreen />
            <DanielSearchScreen />
          </ScreenStack>
        ) : null}
        {tab === "Everyday · request" ? (
          <ScreenStack>
            <DanielRequestScreen />
          </ScreenStack>
        ) : null}
        {tab === "Everyday · tracking" ? (
          <ScreenStack>
            <MyItemsScreen />
            <StatusTimelineScreen />
          </ScreenStack>
        ) : null}
        {tab === "Manager · approvals" ? (
          <ScreenStack>
            <ApprovalsHubScreen />
            <ApprovalDetailScreen />
            <DeclineReasonScreen />
          </ScreenStack>
        ) : null}
        {tab === "Edge cases" ? (
          <ScreenStack>
            <HelpTopicsScreen />
            <MeeraHomeScreen />
            <MovedPageScreen />
            <EmptyItemsScreen />
            <DatePickerScreen />
            <ExpenseUploadScreen />
          </ScreenStack>
        ) : null}
      </div>
    </div>
  );
}
