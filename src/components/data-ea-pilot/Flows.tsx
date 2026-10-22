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

function Branch({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mt-3 rounded-[16px] border border-dashed border-line bg-cream/60 p-3">
      <p className="mb-2 text-[12px] font-medium text-ink/50">{label}</p>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  );
}

function Row({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center gap-2">{children}</div>;
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

export function ArchitectFlow() {
  return (
    <div className="rounded-[24px] border border-line bg-paper p-5 md:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h3 className="font-sans text-[18px] font-semibold text-ink">
          Architect · “what&apos;s going end of life in my domain?”
        </h3>
        <p className="text-[13px] text-ink/50">Before 6 systems · After 1 question</p>
      </div>
      <p className="mt-4 text-[12px] uppercase tracking-[0.14em] text-ink/40">Before</p>
      <Row>
        <Chip kind="start">Question</Chip>
        <Arrow />
        <Chip>Dashboard</Chip>
        <Arrow />
        <Chip>EOL widget empty</Chip>
        <Arrow />
        <Chip>Release registry</Chip>
        <Arrow />
        <Chip>Inventory export</Chip>
        <Arrow />
        <Chip>Ownership lookup</Chip>
        <Arrow />
        <Chip>Merge in Excel</Chip>
        <Arrow />
        <Chip>Still unsure it&apos;s current</Chip>
      </Row>
      <p className="mt-6 text-[12px] uppercase tracking-[0.14em] text-ink/40">After</p>
      <Row>
        <Chip kind="user">Asks in own words</Chip>
        <Arrow />
        <Chip kind="system">Checks access</Chip>
        <Arrow />
        <Chip kind="system">Queries connected model</Chip>
        <Arrow />
        <Chip kind="decision">Confidence high?</Chip>
      </Row>
      <Branch label="yes">
        <Chip kind="goal">Answer + sources + time</Chip>
        <Arrow />
        <Chip>Exports or asks follow-up</Chip>
      </Branch>
      <Branch label="└ no →">
        <Chip kind="system">Shows conflict & why</Chip>
        <Arrow />
        <Chip>Confirm with owner</Chip>
        <Arrow />
        <Chip kind="system">Owner notified</Chip>
      </Branch>
    </div>
  );
}

export function OwnerFlow() {
  return (
    <div className="rounded-[24px] border border-line bg-paper p-5 md:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h3 className="font-sans text-[18px] font-semibold text-ink">
          Application owner · correcting a fact
        </h3>
        <p className="text-[13px] text-ink/50">Before email & hope · After tracked fix</p>
      </div>
      <p className="mt-4 text-[12px] uppercase tracking-[0.14em] text-ink/40">Any user</p>
      <Row>
        <Chip kind="user">Spots wrong version</Chip>
        <Arrow />
        <Chip>Flags it on the answer</Chip>
        <Arrow />
        <Chip kind="system">Routed to app owner</Chip>
      </Row>
      <p className="mt-6 text-[12px] uppercase tracking-[0.14em] text-ink/40">Owner</p>
      <Row>
        <Chip kind="user">Appears in review queue</Chip>
        <Arrow />
        <Chip kind="decision">Data wrong?</Chip>
      </Row>
      <Branch label="yes">
        <Chip>Sets correct source</Chip>
        <Arrow />
        <Chip kind="system">Pipeline rule updated</Chip>
        <Arrow />
        <Chip kind="goal">Everyone sees the fix</Chip>
      </Branch>
      <Branch label="└ no →">
        <Chip>Confirms as correct</Chip>
        <Arrow />
        <Chip kind="goal">Fact marked verified, confidence rises</Chip>
      </Branch>
    </div>
  );
}

export function HeadFlow() {
  return (
    <div className="rounded-[24px] border border-line bg-paper p-5 md:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h3 className="font-sans text-[18px] font-semibold text-ink">
          Head of department · planning question
        </h3>
        <p className="text-[13px] text-ink/50">Before days of reporting · After minutes</p>
      </div>
      <p className="mt-4 text-[12px] uppercase tracking-[0.14em] text-ink/40">Sarah</p>
      <Row>
        <Chip kind="user">“Spend on apps going EOL?”</Chip>
        <Arrow />
        <Chip kind="system">Portfolio summary + chart</Chip>
        <Arrow />
        <Chip>Drills into one area</Chip>
        <Arrow />
        <Chip>Shares with team</Chip>
        <Arrow />
        <Chip kind="goal">Decision in planning</Chip>
      </Row>
    </div>
  );
}
