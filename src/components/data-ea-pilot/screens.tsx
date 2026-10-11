import { Bar, Frame, Path } from "@/components/employee-center/chrome";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

function Chip({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: "muted" | "ink" | "wait" | "done";
}) {
  const map = {
    muted: "bg-[#f3f1ea] text-ink/60",
    ink: "bg-ink text-cream",
    wait: "bg-[#ead7b8] text-ink",
    done: "bg-[#e7efe6] text-[#2f5a3c]",
  };
  return (
    <span className={cn("rounded-md px-2 py-0.5 text-[11px] font-medium", map[tone])}>
      {children}
    </span>
  );
}

export function BeforeDashboard() {
  return (
    <div>
      <Path>intranet / architecture / portfolio-dashboard</Path>
      <p className="mb-2 text-[12px] text-ink/45">Before · reimagined</p>
      <Frame>
        <Bar
          title="Architecture Portfolio Overview"
          right={
            <p className="text-[12px] text-ink/40">Last refreshed: 19 days ago</p>
          }
        />
        <div className="flex flex-wrap gap-2 border-b border-line px-4 py-2 text-[12px] text-ink/45">
          {["Applications", "Lifecycle", "Cost", "Reports", "Exports"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          <Widget title="Application inventory" flag="stale">
            Showing 1,240 of ? applications
          </Widget>
          <Widget title="Ownership" />
          <Widget title="End-of-life risk" empty="Widget failed to load" />
          <Widget
            title="Dependencies"
            empty="Not available in this view. See source system."
          />
          <Widget title="Spend by portfolio" flag="Q-2 data" className="sm:col-span-2" />
        </div>
      </Frame>
    </div>
  );
}

function Widget({
  title,
  flag,
  empty,
  children,
  className,
}: {
  title: string;
  flag?: string;
  empty?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-[16px] border border-line bg-cream p-4", className)}>
      <div className="flex items-center justify-between gap-2">
        <p className="text-[13px] font-medium text-ink">{title}</p>
        {flag ? <Chip tone="wait">{flag}</Chip> : null}
      </div>
      <p className="mt-3 text-[13px] text-ink/50">{empty ?? children}</p>
      {!empty && !children ? (
        <div className="mt-4 space-y-2">
          <div className="h-2 w-3/4 rounded bg-ink/10" />
          <div className="h-2 w-1/2 rounded bg-ink/10" />
        </div>
      ) : null}
    </div>
  );
}

export function HomeAskScreen() {
  return (
    <div>
      <Path>intranet / architecture-assistant</Path>
      <p className="mb-2 text-[12px] text-ink/45">After · reimagined</p>
      <Frame>
        <Bar title="Architecture Assistant" right={<Chip>+ New question</Chip>} />
        <div className="grid gap-0 md:grid-cols-[220px_1fr]">
          <aside className="border-b border-line p-4 md:border-b-0 md:border-r">
            <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">Recent</p>
            <ul className="mt-2 space-y-2 text-[13px] text-ink/70">
              <li>EOL in Payments domain</li>
              <li>Who owns Ledger Core now?</li>
              <li>Dependencies of KYC Hub</li>
            </ul>
            <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-ink/40">
              Watchlist
            </p>
            <ul className="mt-2 space-y-2 text-[13px] text-ink/70">
              <li>Payments Gateway</li>
              <li>Ledger Core</li>
              <li>Client Portal</li>
            </ul>
          </aside>
          <div className="p-5">
            <p className="font-sans text-[18px] font-semibold text-ink">
              Good morning, Anika
            </p>
            <p className="mt-1 text-[13px] text-ink/50">
              Payments domain · 48 applications you can see
            </p>
            <p className="mt-3 text-[12px] text-ink/40">
              Answers use live data from 6 sources · respects your access
            </p>
            <div className="mt-4 rounded-full bg-cream px-4 py-3 text-[13px] text-ink/40">
              Ask a question…
            </div>
            <p className="mt-5 text-[12px] text-ink/40">Suggested for you</p>
            <div className="mt-2 space-y-2">
              {[
                ["End of life", "What reaches end of support in my domain in the next 12 months?"],
                ["Dependencies", "What depends on Payments Gateway?"],
                ["Ownership", "Which of my apps have no confirmed owner?"],
                ["Versions", "Which apps are more than two major versions behind?"],
              ].map(([label, q]) => (
                <div key={label} className="rounded-[14px] border border-line bg-cream px-3 py-2">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-ink/40">{label}</p>
                  <p className="mt-1 text-[13px] text-ink/75">{q}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[12px] text-ink/40">Changes on your watchlist</p>
            <p className="mt-1 text-[13px] text-ink/70">
              Ledger Core · new owner assigned Today
            </p>
            <p className="text-[13px] text-ink/70">
              Payments Gateway · end of support in 170 days{" "}
              <Chip tone="wait">Risk</Chip>
            </p>
          </div>
        </div>
      </Frame>
    </div>
  );
}

export function EolAnswerScreen() {
  return (
    <div>
      <Path>intranet / architecture-assistant / conversation</Path>
      <Frame>
        <Bar title="Architecture Assistant" />
        <div className="space-y-4 p-5">
          <p className="rounded-[14px] bg-cream px-4 py-3 text-[14px] text-ink/80">
            What reaches end of support in my domain in the next 12 months, and
            who owns it?
          </p>
          <p className="text-[15px] leading-relaxed text-ink/80">
            4 applications in the Payments domain reach end of support in the
            next 12 months. Together they have 23 dependent systems.{" "}
            <span className="font-semibold">Payments Gateway</span> is the most
            urgent. <sup>1</sup>
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-[13px]">
              <thead className="text-[11px] uppercase tracking-[0.12em] text-ink/40">
                <tr>
                  {["Application", "Version", "End of support", "Owner", "Dependents", "Annual run cost"].map(
                    (h) => (
                      <th key={h} className="pb-2 font-medium">
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody className="text-ink/75">
                {[
                  ["Payments Gateway", "4.2", "31 Mar 2027", "Thomas B.", "7", "₹ 4.1 Cr"],
                  ["Settlement Engine", "2.8", "30 Jun 2027", "Leena P.", "9", "₹ 2.6 Cr"],
                  ["Merchant Reports", "1.4", "31 Aug 2027", "Vikram S.", "2", "₹ 0.7 Cr"],
                  ["Card Tokeniser", "3.0", "30 Sep 2027", "Thomas B.", "5", "₹ 1.2 Cr"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-line">
                    {row.map((cell) => (
                      <td key={cell} className="py-2">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Chip tone="done">High confidence · All sources within refresh SLA</Chip>
        </div>
      </Frame>
    </div>
  );
}

export function DependenciesScreen() {
  return (
    <div>
      <Path>intranet / architecture-assistant / conversation</Path>
      <Frame>
        <Bar title="Architecture Assistant" />
        <div className="space-y-4 p-5">
          <p className="rounded-[14px] bg-cream px-4 py-3 text-[14px] text-ink/80">
            What depends on Payments Gateway?
          </p>
          <p className="text-[15px] leading-relaxed text-ink/80">
            7 systems depend on Payments Gateway: 4 directly and 3 through
            Settlement Engine. Two are customer-facing. <sup>1</sup>
          </p>
          <div className="rounded-[16px] border border-dashed border-line bg-cream p-4 text-[13px] text-ink/70">
            <p className="font-medium text-ink">Payments Gateway</p>
            <p className="mt-3 text-[12px] uppercase tracking-[0.12em] text-ink/40">
              Direct
            </p>
            <p className="mt-1">Settlement Engine · Card Tokeniser · Merchant Reports · Client Portal ★</p>
            <p className="mt-3 text-[12px] uppercase tracking-[0.12em] text-ink/40">
              Through Settlement Engine
            </p>
            <p className="mt-1">Fraud Monitor · Ledger Core · KYC Hub ★</p>
            <p className="mt-3 text-[12px] text-ink/40">★ customer-facing</p>
          </div>
        </div>
      </Frame>
    </div>
  );
}

export function LowConfidenceScreen() {
  return (
    <div>
      <Path>intranet / architecture-assistant / conversation</Path>
      <Frame>
        <Bar title="Architecture Assistant" />
        <div className="space-y-4 p-5">
          <p className="rounded-[14px] bg-cream px-4 py-3 text-[14px] text-ink/80">
            Who owns Ledger Core and what version is it on?
          </p>
          <p className="text-[15px] leading-relaxed text-ink/80">
            Ledger Core is owned by <span className="font-semibold">Priya M.</span>{" "}
            <sup>1</sup> I&apos;m not sure about the version: two sources disagree.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[14px] border border-line bg-cream p-3">
              <p className="text-[12px] text-ink/40">Release registry</p>
              <p className="mt-1 font-medium text-ink">Version 4.2</p>
              <p className="mt-1 text-[12px] text-ink/50">Hasn&apos;t refreshed in 41 days</p>
            </div>
            <div className="rounded-[14px] border border-line bg-cream p-3">
              <p className="text-[12px] text-ink/40">Owner record</p>
              <p className="mt-1 font-medium text-ink">Version not set as authoritative</p>
            </div>
          </div>
          <Chip tone="wait">Low confidence</Chip>
          <div className="flex flex-wrap gap-2">
            <Chip tone="ink">Confirm with owner</Chip>
            <Chip>Open both records ↗</Chip>
          </div>
          <p className="text-[13px] text-[#2f5a3c]">
            ✓ Sent to Priya M. You&apos;ll be notified when she confirms. This
            question is saved, and the answer will update automatically.
          </p>
        </div>
      </Frame>
    </div>
  );
}

export function OwnerReviewScreen() {
  return (
    <div>
      <Path>intranet / architecture-assistant / owner-review</Path>
      <Frame>
        <Bar title="Your applications" right={<Chip tone="wait">3 to review</Chip>} />
        <div className="p-5">
          <p className="text-[13px] text-ink/50">12 applications · 3 items need review</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-[13px]">
              <thead className="text-[11px] uppercase tracking-[0.12em] text-ink/40">
                <tr>
                  {["Flagged fact", "Application", "Flagged by", "Action"].map((h) => (
                    <th key={h} className="pb-2 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-ink/75">
                <tr className="border-t border-line">
                  <td className="py-2">
                    Version shows 4.2
                    <span className="block text-ink/45">“We upgraded to 4.3 in July”</span>
                  </td>
                  <td>Payments Gateway</td>
                  <td>Anika R.</td>
                  <td>Fix · It&apos;s correct</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="py-2">Missing support team</td>
                  <td>Card Tokeniser</td>
                  <td>Rahul K.</td>
                  <td>Add</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="py-2">
                    Dependency not listed
                    <span className="block text-ink/45">“Fraud Monitor calls this too”</span>
                  </td>
                  <td>Payments Gateway</td>
                  <td>Data team</td>
                  <td>Review</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[12px] uppercase tracking-[0.14em] text-ink/40">
            Guardrails for your apps
          </p>
          <ul className="mt-2 space-y-1 text-[13px] text-ink/70">
            <li>Authoritative source for versions · Release registry</li>
            <li>Authoritative source for ownership · Ownership directory</li>
            <li>Maximum data age before “medium” · 7 days</li>
            <li>Re-verify facts every · 90 days</li>
          </ul>
        </div>
      </Frame>
    </div>
  );
}

export function PortfolioScreen() {
  return (
    <div>
      <Path>intranet / architecture-assistant / conversation</Path>
      <Frame>
        <Bar title="Architecture Assistant" />
        <div className="space-y-4 p-5">
          <p className="rounded-[14px] bg-cream px-4 py-3 text-[14px] text-ink/80">
            How much are we spending on applications that go out of support in
            the next two years, by domain?
          </p>
          <p className="text-[15px] leading-relaxed text-ink/80">
            You spend <span className="font-semibold">₹ 31.4 Cr</span> a year on
            26 applications reaching end of support by Oct 2028. Payments and
            Lending account for over half. <sup>1</sup>
          </p>
          <div className="grid grid-cols-4 items-end gap-2 rounded-[16px] bg-cream px-4 py-6">
            {[
              ["Payments", "h-24"],
              ["Lending", "h-20"],
              ["Wealth", "h-12"],
              ["Other", "h-8"],
            ].map(([label, h]) => (
              <div key={label} className="text-center">
                <div className={cn("mx-auto w-full max-w-[48px] rounded-t bg-ink/70", h)} />
                <p className="mt-2 text-[11px] text-ink/50">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-[12px] text-ink/40">Annual run cost of EOL applications, by domain · ₹ Cr</p>
        </div>
      </Frame>
    </div>
  );
}

export function ScreenStack({ children }: { children: ReactNode }) {
  return <div className="space-y-8">{children}</div>;
}
