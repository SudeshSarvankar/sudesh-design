import { Bar, Fig, Frame, Path, Pill, brand } from "@/components/employee-center/chrome";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function PortalNav({
  active = "Home",
  initials = "PN",
}: {
  active?: string;
  initials?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line px-4 py-3 text-[13px] md:px-5">
      <p className="font-medium text-ink">Employee Center</p>
      {["Home", "My items", "Help topics"].map((item) => (
        <span
          key={item}
          className={item === active ? "font-medium text-ink" : "text-ink/45"}
        >
          {item}
        </span>
      ))}
      <span className="ml-auto text-[13px]">🔔 2</span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ead7b8] text-[11px] font-semibold">
        {initials}
      </span>
    </div>
  );
}

export function ScreenLabel({
  path,
  state = "After · reimagined",
}: {
  path: string;
  state?: string;
}) {
  return (
    <div className="mb-2">
      <Path>{path}</Path>
      <p className="text-[12px] text-ink/45">{state}</p>
    </div>
  );
}

function SearchField({ value, placeholder }: { value?: string; placeholder?: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-3 text-[14px]">
      <span className={cn("flex-1", value ? "text-ink" : "text-ink/45")}>
        {value ?? placeholder}
      </span>
      <span className="text-[12px] text-ink/30">/</span>
    </div>
  );
}

export function PriyaHomeScreen() {
  return (
    <div>
      <ScreenLabel path="intranet / employee-center / home" />
      <Frame>
        <PortalNav />
        <div className="p-5 md:p-8">
          <p className="font-inter text-[28px] font-semibold tracking-[-0.03em] text-ink">
            Good morning, Priya
          </p>
          <p className="mt-1 text-[14px] text-ink/50">Day 3 at the bank · Pune office</p>
          <div className="mt-5">
            <SearchField placeholder="Describe what you need, e.g. “my badge doesn't open the door”" />
          </div>
          <div className="mt-8 rounded-[20px] border border-line bg-cream p-5">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[16px] font-semibold text-ink">Your first week</p>
                <p className="text-[13px] text-ink/50">
                  3 of 6 done · most people finish in 5 days
                </p>
              </div>
              <p className="text-[13px] font-medium text-ink/60">50%</p>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
              <div className="h-full w-1/2 rounded-full bg-ink" />
            </div>
            <ul className="mt-5 space-y-3 text-[14px]">
              <li className="px-3 text-ink/45 line-through">Collect your laptop</li>
              <li className="px-3 text-ink/45 line-through">Set up multi-factor sign-in</li>
              <li className="px-3 text-ink/45 line-through">Add bank details for payroll</li>
              <li className="flex flex-wrap items-center justify-between gap-2 rounded-[12px] bg-paper px-3 py-3">
                <span>Request permanent building badge</span>
                <span
                  className="rounded-md px-3 py-1 text-[12px] font-medium text-white"
                  style={{ background: brand }}
                >
                  Start · 2 min
                </span>
              </li>
              <li className="flex flex-wrap items-center justify-between gap-2 px-3 py-1 text-ink/70">
                <span>Complete mandatory compliance training</span>
                <span className="text-[12px] text-ink/45">Due in 9 days</span>
              </li>
              <li className="flex flex-wrap items-center justify-between gap-2 px-3 py-1 text-ink/70">
                <span>Book a desk for next week</span>
                <span className="text-[12px] underline">Book</span>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-ink">My active items</p>
              <span className="text-[13px] text-ink/45">View all</span>
            </div>
            <div className="mt-3 space-y-2">
              <RequestRow dept="IT" title="Laptop docking station" id="REQ0048213" status="Ready to collect" />
              <RequestRow dept="HR" title="Payroll setup" id="REQ0048177" status="In progress" />
            </div>
          </div>
          <div className="mt-8">
            <p className="font-semibold text-ink">Popular with new joiners</p>
            <ul className="mt-3 space-y-2 text-[14px] text-ink/70">
              <li>? How do I claim relocation expenses?</li>
              <li>? Connecting to Wi-Fi in the office</li>
              <li>? Who to ask about my benefits</li>
            </ul>
          </div>
        </div>
      </Frame>
      <Fig id="FIG 01">
        Home starts with search and with your stuff, not 18 department tiles. A
        new joiner gets a first-week checklist with time estimates and due
        dates; experts see recent and saved items in the same slot.
      </Fig>
    </div>
  );
}

export function BadgeFormScreen() {
  return (
    <div>
      <ScreenLabel path="intranet / employee-center / get-set-up / badge" />
      <Frame>
        <Bar title="Request permanent building badge" right={<span className="text-[12px] text-ink/45">~2 min</span>} />
        <div className="grid gap-6 p-5 md:grid-cols-[1.1fr_0.9fr] md:p-8">
          <div className="space-y-4">
            <Field label="Office" value="Pune · Tower B" hint="Pre-filled from your start date and office" />
            <Field label="Start date" value="8 Oct 2026" hint="Pre-filled" />
            <div>
              <p className="text-[13px] text-ink/50">Add photo</p>
              <div className="mt-1 flex h-28 items-center justify-center rounded-[16px] border border-dashed border-line bg-cream text-[13px] text-ink/45">
                Take on phone or upload
              </div>
            </div>
            <span
              className="inline-block rounded-md px-4 py-2 text-[13px] font-medium text-white"
              style={{ background: brand }}
            >
              Review & send
            </span>
          </div>
          <div className="rounded-[16px] bg-[#111318] p-5 text-[#f4f0e5]">
            <p className="text-[11px] uppercase tracking-[0.14em] text-white/45">
              What happens next
            </p>
            <ol className="mt-4 space-y-3 text-[14px] text-white/80">
              <li>01 · Manager sees it in the approvals hub</li>
              <li>02 · Facilities prints the badge</li>
              <li>03 · “Ready” in Teams · checklist item done</li>
            </ol>
          </div>
        </div>
      </Frame>
    </div>
  );
}

export function PhotoRetryScreen() {
  return (
    <div>
      <ScreenLabel path="intranet / employee-center / get-set-up / badge · photo" />
      <Frame>
        <Bar title="Photo isn’t clear enough" />
        <div className="grid gap-6 p-5 md:grid-cols-2 md:p-8">
          <div>
            <p className="font-semibold text-ink">Explains why + example</p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/65">
              Face the camera, even light, no crop. Retake on your phone, then
              you come back to review.
            </p>
            <div className="mt-4 h-40 rounded-[16px] bg-[#f3f1ea]" />
            <span
              className="mt-4 inline-block rounded-md px-4 py-2 text-[13px] font-medium text-white"
              style={{ background: brand }}
            >
              Retake on phone
            </span>
          </div>
          <div className="rounded-[16px] border border-line p-4">
            <p className="text-[12px] text-ink/45">Example</p>
            <div className="mt-3 h-40 rounded-[12px] bg-cream" />
            <p className="mt-3 text-[13px] text-ink/60">Back to review once the photo is clear.</p>
          </div>
        </div>
      </Frame>
    </div>
  );
}

export function TeamsReadyScreen() {
  return (
    <div>
      <ScreenLabel path="Teams · Employee Center" />
      <Frame>
        <Bar title="Microsoft Teams" />
        <div className="p-5 md:p-6">
          <div className="rounded-[16px] border border-line bg-cream p-4">
            <p className="text-[12px] text-ink/45">Employee Center · Facilities</p>
            <p className="mt-1 font-semibold text-ink">Ready · building badge</p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/70">
              Priya’s badge is printed. Checklist item done. Collect from the
              badge office, Pune · Tower B.
            </p>
            <p className="mt-3 text-[12px] text-ink/40">Live status + Teams update</p>
          </div>
        </div>
      </Frame>
    </div>
  );
}

export function HelpTopicsScreen() {
  const topics = [
    ["Get set up", "laptop, access, payroll"],
    ["Fix something", "IT, building"],
    ["Time off & pay", "leave, payroll questions"],
    ["Spend & expenses", "reimbursement, corporate card"],
    ["Rules & training", "mandatory training, policy lookups"],
    ["Buy something", "purchase requests, supplier questions"],
  ];
  return (
    <div>
      <ScreenLabel path="intranet / employee-center / help-topics" />
      <Frame>
        <PortalNav active="Help topics" />
        <div className="p-5 md:p-8">
          <p className="font-inter text-[24px] font-semibold text-ink">Help topics</p>
          <p className="mt-1 text-[14px] text-ink/55">By what you need to do</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["All", "IT", "HR", "Facilities", "Finance", "Legal", "Procurement"].map(
              (chip, i) => (
                <span
                  key={chip}
                  className={cn(
                    "rounded-full px-3 py-1 text-[12px]",
                    i === 0
                      ? "bg-ink text-cream"
                      : "border border-line text-ink/60",
                  )}
                >
                  {chip}
                </span>
              ),
            )}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {topics.map(([title, note]) => (
              <div key={title} className="rounded-[16px] border border-line p-4">
                <p className="font-medium text-ink">{title}</p>
                <p className="mt-1 text-[13px] text-ink/55">{note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[13px] text-ink/50">Approvals · managers only</p>
        </div>
      </Frame>
    </div>
  );
}

export function MyItemsScreen() {
  return (
    <div>
      <ScreenLabel path="intranet / employee-center / my-items" />
      <Frame>
        <PortalNav active="My items" initials="DA" />
        <div className="p-5 md:p-8">
          <p className="font-inter text-[24px] font-semibold text-ink">My items</p>
          <div className="mt-4 flex gap-2 text-[13px]">
            {["Open", "Waiting on me", "Closed"].map((tab, i) => (
              <span
                key={tab}
                className={cn(
                  "rounded-full px-3 py-1",
                  i === 0 ? "bg-ink text-cream" : "border border-line text-ink/55",
                )}
              >
                {tab}
              </span>
            ))}
          </div>
          <div className="mt-5 space-y-2">
            <RequestRow dept="IT" title="Laptop charger" id="REQ0048301" status="In progress" />
            <RequestRow dept="IT" title="Laptop docking station" id="REQ0048213" status="Ready to collect" />
            <RequestRow dept="HR" title="Payroll setup" id="REQ0048177" status="Received" />
          </div>
        </div>
      </Frame>
    </div>
  );
}

export function DanielSearchScreen() {
  return (
    <div>
      <ScreenLabel path="intranet / employee-center / search" />
      <Frame>
        <PortalNav initials="DA" />
        <div className="p-5 md:p-8">
          <p className="font-inter text-[24px] font-semibold text-ink">Hi, Daniel</p>
          <div className="mt-4">
            <SearchField value="laptop not charging" />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {["All", "Answers", "Forms", "Policies"].map((chip, i) => (
              <span
                key={chip}
                className={cn(
                  "rounded-full px-3 py-1 text-[12px]",
                  i === 0 ? "bg-ink text-cream" : "border border-line text-ink/55",
                )}
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-3">
              <div className="rounded-[16px] border border-line p-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">
                  Suggested answer
                </p>
                <p className="mt-2 font-semibold text-ink">Laptop won&apos;t charge</p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/70">
                  Answer first, in your own words. If this fixes it, stop here —
                  no request needed.
                </p>
                <p className="mt-3 text-[13px] text-ink/50">Solved?</p>
              </div>
              <div className="rounded-[16px] border border-line px-4 py-3">
                <div className="flex items-center justify-between">
                  <p className="text-[14px] text-ink">Leave balance</p>
                  <span className="text-[11px] uppercase tracking-[0.12em] text-ink/40">
                    Policy
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-[16px] border border-line p-4">
              <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">Form</p>
              <p className="mt-2 font-semibold text-ink">Report issue</p>
              <p className="mt-2 text-[14px] text-ink/60">Pre-filled from your search.</p>
              <span
                className="mt-4 inline-block rounded-md px-3 py-1.5 text-[12px] font-medium text-white"
                style={{ background: brand }}
              >
                Report issue
              </span>
            </div>
          </div>
        </div>
      </Frame>
    </div>
  );
}

export function DanielRequestScreen() {
  return (
    <div>
      <ScreenLabel path="intranet / employee-center / request" />
      <Frame>
        <Bar title="Report issue · laptop" />
        <div className="grid gap-6 p-5 md:grid-cols-[1.1fr_0.9fr] md:p-8">
          <div className="space-y-3">
            <Field label="What's wrong?" value="Laptop won't charge" />
            <Field label="Where are you?" value="Pune · Tower B" />
            <Field label="When did it start?" value="This morning" />
            <span
              className="mt-2 inline-block rounded-md px-4 py-2 text-[13px] font-medium text-white"
              style={{ background: brand }}
            >
              Send request to IT
            </span>
          </div>
          <div className="rounded-[16px] bg-[#111318] p-5 text-[#f4f0e5]">
            <p className="text-[11px] uppercase tracking-[0.14em] text-white/45">
              What happens next
            </p>
            <ol className="mt-4 space-y-3 text-[14px] text-white/80">
              <li>01 · We confirm we have everything</li>
              <li>02 · Manager notified</li>
              <li>03 · Live status here, and a Teams update</li>
            </ol>
          </div>
        </div>
      </Frame>
    </div>
  );
}

export function StatusTimelineScreen() {
  return (
    <div>
      <ScreenLabel path="intranet / employee-center / my-items / REQ0048213" />
      <Frame>
        <PortalNav active="My items" initials="DA" />
        <div className="p-5 md:p-8">
          <p className="text-[13px] text-ink/50">REQ0048213 · IT</p>
          <p className="mt-1 font-inter text-[24px] font-semibold text-ink">
            Laptop docking station
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-6">
            {["Received", "In progress", "Waiting on you", "Ready", "Done", "Declined"].map(
              (step, i) => (
                <div
                  key={step}
                  className={cn(
                    "rounded-[12px] border px-2 py-3 text-center text-[12px] font-medium",
                    i === 3
                      ? "border-ink bg-ink text-cream"
                      : "border-line bg-cream text-ink/55",
                  )}
                >
                  {step}
                </div>
              ),
            )}
          </div>
          <p className="mt-6 text-[15px] text-ink/70">
            Being prepared · expected Wed by 15:00
          </p>
        </div>
      </Frame>
    </div>
  );
}

export function DanielHomeScreen() {
  return (
    <div>
      <ScreenLabel path="intranet / employee-center / home" />
      <Frame>
        <PortalNav initials="DA" />
        <div className="p-5 md:p-7">
          <p className="font-inter text-[24px] font-semibold text-ink">Hi, Daniel</p>
          <div className="mt-4">
            <SearchField placeholder="Describe what you need…" />
          </div>
          <p className="mt-6 text-[13px] font-medium text-ink">My active items · 1</p>
          <div className="mt-2">
            <RequestRow dept="IT" title="Laptop charger" id="REQ0048301" status="In progress" />
          </div>
          <p className="mt-6 text-[12px] text-ink/45">Your recent searches</p>
          <p className="mt-1 text-[14px] text-ink/80">laptop not charging</p>
          <p className="text-[14px] text-ink/80">leave balance</p>
        </div>
      </Frame>
    </div>
  );
}

export function ArjunHomeScreen() {
  return (
    <div>
      <ScreenLabel path="intranet / employee-center / home" />
      <Frame>
        <PortalNav initials="AR" />
        <div className="p-5 md:p-7">
          <p className="font-inter text-[24px] font-semibold text-ink">Hi, Arjun</p>
          <div className="mt-4">
            <SearchField placeholder="Describe what you need…" />
          </div>
          <div className="mt-6 rounded-[16px] border border-line bg-cream p-4">
            <p className="font-medium text-ink">Waiting on you · 5</p>
            <p className="mt-1 text-[13px] text-ink/60">2 due today</p>
            <span
              className="mt-3 inline-block rounded-md px-3 py-1.5 text-[12px] font-medium text-white"
              style={{ background: brand }}
            >
              Review
            </span>
          </div>
          <p className="mt-6 text-[12px] text-ink/45">Your team</p>
          <p className="mt-1 text-[14px]">New joiner starts Mon</p>
          <p className="text-[14px]">2 requests in progress</p>
        </div>
      </Frame>
    </div>
  );
}

export function MeeraHomeScreen() {
  return (
    <div>
      <ScreenLabel path="intranet / employee-center / home" />
      <Frame>
        <PortalNav initials="ME" />
        <div className="p-5 md:p-7">
          <p className="font-inter text-[24px] font-semibold text-ink">Hi, Meera</p>
          <div className="mt-4">
            <SearchField placeholder="Describe what you need…" />
          </div>
          <p className="mt-6 font-medium text-ink">Saved shortcuts</p>
          <div className="mt-2 space-y-2">
            <div className="rounded-[12px] border border-line px-4 py-3 text-[14px]">
              Travel booking ↗
            </div>
            <div className="rounded-[12px] border border-line px-4 py-3 text-[14px]">
              Meeting room + catering ↗
            </div>
          </div>
          <p className="mt-6 text-[12px] text-ink/45">Raise again</p>
          <p className="mt-1 text-[14px]">Visitor pass · for J. Shah</p>
        </div>
      </Frame>
    </div>
  );
}

export function ApprovalsHubScreen() {
  return (
    <div>
      <ScreenLabel path="intranet / employee-center / approvals" />
      <Frame>
        <Bar title="Approvals hub" right={<Pill tone="wait">5 waiting</Pill>} />
        <div className="max-w-full overflow-x-auto overscroll-x-contain">
          <table className="w-full min-w-[560px] text-left text-[14px]">
            <thead className="bg-[#f3f1ea] text-[11px] uppercase tracking-[0.12em] text-ink/45">
              <tr>
                {["Request", "Person", "Amount", "Due"].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Expense claim", "J. Shah", "₹8,400", "Today"],
                ["Visitor pass", "Priya", "—", "Today"],
                ["Software licence", "R. Mehta", "₹24,500", "Thu"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-line">
                  {row.map((cell) => (
                    <td key={cell} className="px-4 py-3 text-ink/75">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap gap-2 border-t border-line px-4 py-4">
          <span className="rounded-md border border-line px-3 py-1.5 text-[13px]">
            Bulk approve
          </span>
          <span className="text-[12px] leading-[34px] text-ink/45">
            High-value items never bulk-approved
          </span>
        </div>
      </Frame>
    </div>
  );
}

export function ApprovalDetailScreen() {
  return (
    <div>
      <ScreenLabel path="intranet / employee-center / approvals / software-licence" />
      <Frame>
        <Bar title="Software licence · R. Mehta" right={<Pill tone="wait">₹24,500</Pill>} />
        <div className="grid gap-6 p-5 md:grid-cols-2 md:p-8">
          <div>
            <p className="text-[13px] text-ink/45">Over ₹20,000 — opens detail</p>
            <p className="mt-2 font-semibold text-ink">Reviews receipts & policy</p>
            <div className="mt-4 space-y-2">
              <div className="rounded-[12px] border border-line px-4 py-3 text-[14px]">
                Receipt · licence quote.pdf
              </div>
              <div className="rounded-[12px] border border-line px-4 py-3 text-[14px]">
                Policy · software purchase
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              <span
                className="rounded-md px-3 py-1.5 text-[13px] font-medium text-white"
                style={{ background: brand }}
              >
                Approve
              </span>
              <span className="rounded-md border border-line px-3 py-1.5 text-[13px]">
                Decline with reason
              </span>
            </div>
          </div>
          <div className="rounded-[16px] bg-cream p-4 text-[14px] leading-relaxed text-ink/70">
            Audit trail recorded. High-value items never bulk-approved.
          </div>
        </div>
      </Frame>
    </div>
  );
}

export function DeclineReasonScreen() {
  return (
    <div>
      <ScreenLabel path="intranet / employee-center / my-items / badge" />
      <Frame>
        <PortalNav active="My items" />
        <div className="p-5 md:p-8">
          <Pill tone="brand">Declined</Pill>
          <p className="mt-3 font-inter text-[22px] font-semibold text-ink">
            Building badge
          </p>
          <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-ink/70">
            Priya sees reason + how to fix. Photo was unclear — retake on phone
            and send again.
          </p>
        </div>
      </Frame>
    </div>
  );
}

export function ExpenseUploadScreen() {
  return (
    <div>
      <ScreenLabel path="intranet / employee-center / spend / expense-claim" />
      <Frame>
        <Bar title="Expense claim · receipt upload" />
        <div className="p-5 md:p-8">
          <p className="text-[13px] text-ink/45">Where people still drop off · High</p>
          <div className="mt-4 flex h-36 items-center justify-center rounded-[16px] border border-dashed border-line bg-cream text-[14px] text-ink/50">
            Add receipt
          </div>
          <p className="mt-4 text-[14px] text-ink/60">
            Feeds the next round of usability tests and the roadmap.
          </p>
        </div>
      </Frame>
    </div>
  );
}

export function DatePickerScreen() {
  return (
    <div>
      <ScreenLabel path="intranet / employee-center / request · date" />
      <Frame>
        <Bar title="Start date" />
        <div className="p-5 md:p-8">
          <label className="block text-[13px] text-ink/50">
            Start date
            <span className="mt-1 block rounded-lg border border-line bg-cream px-3 py-2.5 text-[14px] text-ink ring-2 ring-ink ring-offset-2">
              14 Oct 2026
            </span>
          </label>
          <p className="mt-3 text-[13px] text-ink/55">
            2px focus ring. Fully keyboard operable — rebuilt after round 3 on
            the live build.
          </p>
        </div>
      </Frame>
    </div>
  );
}

export function MovedPageScreen() {
  return (
    <div>
      <ScreenLabel path="intranet / employee-center / expenses-legacy" />
      <Frame>
        <Bar title="Moved page" />
        <div className="p-5 md:p-7">
          <p className="font-semibold text-ink">This page has moved. Here&apos;s the closest match.</p>
          <p className="mt-2 text-[14px] text-ink/60">
            Expense claims now live under Spend & expenses.
          </p>
          <p className="mt-4 text-[14px] underline">Go to Expense claims</p>
        </div>
      </Frame>
    </div>
  );
}

export function EmptyItemsScreen() {
  return (
    <div>
      <ScreenLabel path="intranet / employee-center / my-items" />
      <Frame>
        <PortalNav active="My items" initials="DA" />
        <div className="p-5 md:p-8">
          <p className="font-semibold text-ink">No requests yet — start one</p>
          <p className="mt-2 text-[14px] text-ink/60">
            Search for what you need, or open Help topics.
          </p>
        </div>
      </Frame>
    </div>
  );
}

function RequestRow({
  dept,
  title,
  id,
  status,
}: {
  dept: string;
  title: string;
  id: string;
  status: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-[14px] border border-line px-4 py-3">
      <Pill tone="muted">{dept}</Pill>
      <div className="min-w-0 flex-1">
        <p className="text-[14px] font-medium text-ink">{title}</p>
        <p className="text-[12px] text-ink/40">{id}</p>
      </div>
      <Pill
        tone={
          status.includes("Ready") || status === "Done"
            ? "done"
            : status === "Received"
              ? "muted"
              : "wait"
        }
      >
        {status}
      </Pill>
    </div>
  );
}

function Field({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <label className="block text-[13px] text-ink/50">
      {label}
      <span className="mt-1 block rounded-lg border border-line bg-cream px-3 py-2.5 text-[14px] text-ink">
        {value}
      </span>
      {hint ? <span className="mt-1 block text-[12px] text-ink/40">{hint}</span> : null}
    </label>
  );
}

export function ScreenStack({ children }: { children: ReactNode }) {
  return <div className="space-y-10">{children}</div>;
}
