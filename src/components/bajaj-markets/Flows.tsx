import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

function Chip({
  children,
  kind = "user",
}: {
  children: string;
  kind?: "start" | "user" | "system" | "decision" | "goal";
}) {
  const styles = {
    start: "border-ink bg-ink text-cream",
    user: "border-line bg-paper text-ink",
    system: "border-line bg-[#f3f1ea] text-ink/80",
    decision: "border-[#ead7b8] bg-[#faf4ea] text-ink",
    goal: "border-[#cfe0d2] bg-[#e7efe6] text-[#2f5a3c]",
  };
  return (
    <span
      className={cn(
        "inline-flex max-w-full break-words rounded-[12px] border px-3 py-2 text-left text-[13px] leading-snug",
        styles[kind],
      )}
    >
      {children}
    </span>
  );
}

function Arrow() {
  return (
    <span className="px-1 text-[12px] text-ink/30 md:px-2" aria-hidden>
      →
    </span>
  );
}

function Branch({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-3 rounded-[16px] border border-dashed border-line bg-cream/60 p-3">
      <p className="mb-2 text-[12px] font-medium text-ink/50">{label}</p>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  );
}

export function FlowLegend() {
  return (
    <div className="mb-8 flex flex-wrap gap-3 text-[12px] text-ink/55">
      {[
        ["Start", "start"],
        ["User step", "user"],
        ["System step", "system"],
        ["Decision", "decision"],
        ["Goal reached", "goal"],
      ].map(([label, kind]) => (
        <span key={label} className="flex items-center gap-2">
          <Chip kind={kind as "user"}>{label}</Chip>
        </span>
      ))}
    </div>
  );
}

export function OnboardingFlow() {
  return (
    <div className="rounded-[24px] border border-line bg-paper p-5 md:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h3 className="font-sans text-[18px] font-semibold text-ink">
          Onboarding · signup to first offer
        </h3>
        <p className="text-[13px] text-ink/50">Asks only what&apos;s needed to generate offers</p>
      </div>
      <div className="mt-6">
        <p className="text-[12px] font-medium text-ink/45">New user</p>
        <div className="mt-3 flex flex-wrap items-center gap-1">
          <Chip kind="start">Opens app</Chip>
          <Arrow />
          <Chip>Name, mobile, date of birth</Chip>
          <Arrow />
          <Chip>Consent &amp; OTP</Chip>
          <Arrow />
          <Chip kind="system">Bureau check (CIBIL)</Chip>
          <Arrow />
          <Chip kind="decision">Existing customer?</Chip>
          <Arrow />
          <Chip kind="system">Pre-fill known details</Chip>
          <Arrow />
          <Chip kind="goal">Pre-approved offers</Chip>
        </div>
        <Branch label="└ no →">
          <Chip kind="system">Offers from partners for their credit profile</Chip>
          <Arrow />
          <Chip kind="goal">Eligible offers, not a rejection</Chip>
        </Branch>
      </div>
    </div>
  );
}

export function LoanFlow() {
  return (
    <div className="rounded-[24px] border border-line bg-paper p-5 md:p-7">
      <h3 className="font-sans text-[18px] font-semibold text-ink">
        Personal loan · from product page to application
      </h3>
      <div className="mt-6">
        <p className="text-[12px] font-medium text-ink/45">Applicant</p>
        <div className="mt-3 flex flex-wrap items-center gap-1">
          <Chip kind="start">Loan page</Chip>
          <Arrow />
          <Chip>Get Offer</Chip>
          <Arrow />
          <Chip kind="system">Pin code → city auto-filled</Chip>
          <Arrow />
          <Chip>Income &amp; employer</Chip>
          <Arrow />
          <Chip kind="system">Eligibility across partners</Chip>
          <Arrow />
          <Chip>Pick offer</Chip>
          <Arrow />
          <Chip kind="goal">Apply · resume any time</Chip>
        </div>
        <Branch label="└ leaves midway →">
          <Chip kind="system">Saved to Pending applications</Chip>
          <Arrow />
          <Chip kind="system">Reminder nudge</Chip>
          <Arrow />
          <Chip>Resumes at same step</Chip>
        </Branch>
      </div>
    </div>
  );
}
