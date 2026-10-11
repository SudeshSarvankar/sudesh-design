import { brand } from "@/components/employee-center/chrome";
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
        "inline-flex max-w-full rounded-[12px] border px-3 py-2 text-left text-[13px] leading-snug",
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

export function LaptopFlow() {
  return (
    <div className="rounded-[24px] border border-line bg-paper p-5 md:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h3 className="font-sans text-[18px] font-semibold text-ink">
          Everyday employee · “my laptop won&apos;t charge”
        </h3>
        <p className="text-[13px] text-ink/50">
          Before 9 steps · After 4 steps
        </p>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div>
          <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">Before</p>
          <div className="mt-3 flex flex-wrap items-center gap-1">
            {[
              "Problem",
              "Guess department",
              "IT",
              "Service catalog",
              "Hardware",
              "Find form",
              "Fill 11 fields",
              "Reference no. emailed",
              "No status · chases desk",
            ].map((step, i) => (
              <span key={step} className="contents">
                {i > 0 ? <Arrow /> : null}
                <Chip kind={i === 0 ? "start" : "user"}>{step}</Chip>
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">After</p>
          <div className="mt-3 flex flex-wrap items-center gap-1">
            <Chip kind="start">Problem</Chip>
            <Arrow />
            <Chip>Search in own words</Chip>
            <Arrow />
            <Chip kind="system">Suggested answer + form</Chip>
            <Arrow />
            <Chip kind="decision">Solved?</Chip>
          </div>
          <Branch label="yes">
            <Chip kind="goal">Fixed · no request needed</Chip>
          </Branch>
          <Branch label="└ no →">
            <Chip>Report issue · pre-filled</Chip>
            <Arrow />
            <Chip kind="system">Manager notified</Chip>
            <Arrow />
            <Chip kind="system">Live status + Teams update</Chip>
            <Arrow />
            <Chip kind="goal">Collect charger</Chip>
          </Branch>
        </div>
      </div>
    </div>
  );
}

export function BadgeFlow() {
  return (
    <div className="rounded-[24px] border border-line bg-paper p-5 md:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h3 className="font-sans text-[18px] font-semibold text-ink">
          New joiner · building badge in week one
        </h3>
        <p className="text-[13px] text-ink/50">Time shown up front ~2 min</p>
      </div>
      <div className="mt-6">
        <p className="text-[12px] font-medium" style={{ color: brand }}>
          Priya
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-1">
          <Chip kind="start">Logs in, day 1</Chip>
          <Arrow />
          <Chip kind="system">Home shows first-week checklist</Chip>
          <Arrow />
          <Chip>Start “badge” item</Chip>
          <Arrow />
          <Chip kind="system">Office & start date pre-filled</Chip>
          <Arrow />
          <Chip>Add photo</Chip>
          <Arrow />
          <Chip kind="decision">Photo clear?</Chip>
        </div>
        <Branch label="yes">
          <Chip>Review & send</Chip>
        </Branch>
        <Branch label="└ no →">
          <Chip kind="system">Explains why + example</Chip>
          <Arrow />
          <Chip>Retake on phone</Chip>
          <Arrow />
          <Chip>Back to review</Chip>
        </Branch>
      </div>
      <div className="mt-8 border-t border-line pt-6">
        <p className="text-[12px] font-medium" style={{ color: brand }}>
          Manager
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-1">
          <Chip kind="system">Appears in approvals hub</Chip>
          <Arrow />
          <Chip kind="decision">Approve?</Chip>
        </div>
        <Branch label="yes">
          <Chip kind="system">Facilities prints badge</Chip>
          <Arrow />
          <Chip kind="system">“Ready” in Teams</Chip>
          <Arrow />
          <Chip kind="goal">Checklist item done</Chip>
        </Branch>
        <Branch label="└ no →">
          <Chip>Declines with reason</Chip>
          <Arrow />
          <Chip kind="system">Priya sees reason + how to fix</Chip>
        </Branch>
      </div>
    </div>
  );
}

export function ManagerFlow() {
  return (
    <div className="rounded-[24px] border border-line bg-paper p-5 md:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h3 className="font-sans text-[18px] font-semibold text-ink">
          People manager · end-of-day approvals
        </h3>
        <p className="text-[13px] text-ink/50">Before 4 systems · After 1 hub</p>
      </div>
      <p className="mt-6 text-[12px] font-medium" style={{ color: brand }}>
        Arjun
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-1">
        <Chip kind="start">Notification: 5 waiting</Chip>
        <Arrow />
        <Chip>Opens approvals hub</Chip>
        <Arrow />
        <Chip kind="system">Sorted by due date</Chip>
        <Arrow />
        <Chip kind="decision">Over ₹20,000?</Chip>
      </div>
      <Branch label="no">
        <Chip>Bulk approve</Chip>
        <Arrow />
        <Chip kind="goal">Team unblocked</Chip>
      </Branch>
      <Branch label="└ yes →">
        <Chip>Opens detail</Chip>
        <Arrow />
        <Chip>Reviews receipts & policy</Chip>
        <Arrow />
        <Chip kind="decision">Approve?</Chip>
        <Arrow />
        <Chip kind="goal">Audit trail recorded</Chip>
      </Branch>
    </div>
  );
}
