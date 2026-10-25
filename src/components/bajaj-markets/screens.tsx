import { Frame } from "@/components/employee-center/chrome";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

const navy = "#123A63";
const blue = "#0B63C5";

export function Shot({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("h-auto w-full object-cover object-top", className)}
    />
  );
}

export function Phone({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-[32px] border-[10px] border-ink bg-white shadow-[0_16px_36px_rgba(58,55,50,0.12)]">
      <Shot src={src} alt={alt} />
    </div>
  );
}

function PayShell({
  title,
  children,
  label,
}: {
  title: string;
  children: ReactNode;
  label: string;
}) {
  return (
    <div
      className="overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_12px_28px_rgba(58,55,50,0.08)]"
      role="img"
      aria-label={label}
    >
      <div className="px-4 py-3 text-[13px] font-medium text-white" style={{ background: navy }}>
        {title}
      </div>
      <div className="min-h-[340px] p-4">{children}</div>
    </div>
  );
}

function Radio({
  code,
  title,
  sub,
  on,
}: {
  code: string;
  title: string;
  sub: string;
  on?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-[14px] border px-3 py-2.5",
        on ? "border-[#0B63C5] bg-[#eef5fc]" : "border-line",
      )}
    >
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[10px] font-semibold text-white"
        style={{ background: on ? blue : navy }}
      >
        {code}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-medium text-ink">{title}</p>
        <p className="text-[11px] text-ink/50">{sub}</p>
      </div>
      <span
        className={cn(
          "h-4 w-4 shrink-0 rounded-full border",
          on ? "border-[#0B63C5] bg-[#0B63C5]" : "border-line",
        )}
      />
    </div>
  );
}

export function PaymentScreens() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <PayShell
        title="←  Pay EMI"
        label="Recreated payment screen: choose how to pay an EMI of 4,250 rupees, with UPI selected"
      >
        <div className="rounded-[14px] bg-[#f6f3ec] px-3 py-3">
          <p className="text-[11px] text-ink/50">Personal loan · EMI due 5 Nov</p>
          <p className="mt-1 font-inter text-[26px] font-semibold tracking-[-0.03em] text-ink">
            ₹4,250
          </p>
          <p className="text-[11px] text-ink/45">Loan ending 8842 · No extra charges</p>
        </div>
        <p className="mt-4 text-[11px] uppercase tracking-[0.12em] text-ink/40">Pay using</p>
        <div className="mt-2 space-y-2">
          <Radio code="UPI" title="UPI app" sub="GPay, PhonePe, Paytm, BHIM" on />
          <Radio code="▭" title="Saved card" sub="Visa •••• 4417" />
          <Radio code="NB" title="Net banking" sub="All major banks" />
          <Radio code="AD" title="Set up auto-pay" sub="Never miss an EMI" />
        </div>
        <div
          className="mt-4 rounded-full py-2.5 text-center text-[13px] font-semibold text-white"
          style={{ background: blue }}
        >
          Pay ₹4,250
        </div>
        <p className="mt-2 text-center text-[11px] text-ink/45">
          🔒 Secured by Razorpay · RBI-regulated
        </p>
      </PayShell>

      <PayShell
        title="Complete payment"
        label="Recreated payment screen: waiting for approval in the UPI app with a countdown"
      >
        <div className="flex flex-col items-center px-2 pt-6 text-center">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] text-[15px] font-semibold"
            style={{ borderColor: blue, color: blue }}
          >
            4:52
          </div>
          <p className="mt-4 font-sans text-[16px] font-semibold text-ink">
            Approve in your UPI app
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-ink/55">
            We&apos;ve sent a request for ₹4,250 to rohit@okbank. Open your UPI app to approve it.
          </p>
          <p className="mt-4 rounded-[12px] bg-[#f6f3ec] px-3 py-2 text-[12px] leading-relaxed text-ink/60">
            Please don&apos;t close this screen or press back. Your status will update here
            automatically.
          </p>
        </div>
        <div className="mt-8 rounded-full border border-line py-2.5 text-center text-[13px] font-semibold text-ink">
          Open UPI app
        </div>
      </PayShell>

      <PayShell
        title="Payment status"
        label="Recreated payment screen: payment not completed, no money deducted, with retry options"
      >
        <div className="flex flex-col items-center px-2 pt-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f4d6cf] text-[22px] font-semibold text-[#9a3d2e]">
            !
          </div>
          <p className="mt-4 font-sans text-[16px] font-semibold text-ink">
            Payment didn&apos;t go through
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-ink/55">
            Your bank declined the request. No money has been deducted.
          </p>
          <p className="mt-4 rounded-[12px] bg-[#f6f3ec] px-3 py-2 text-[12px] leading-relaxed text-ink/60">
            If money was deducted, it will be refunded to your account within 5–7 working days.
          </p>
        </div>
        <div
          className="mt-6 rounded-full py-2.5 text-center text-[13px] font-semibold text-white"
          style={{ background: blue }}
        >
          Try again with UPI
        </div>
        <div className="mt-2 rounded-full border border-line py-2.5 text-center text-[13px] font-semibold text-ink">
          Pay another way
        </div>
      </PayShell>

      <PayShell
        title="Payment status"
        label="Recreated payment screen: payment successful with receipt details and next EMI date"
      >
        <div className="flex flex-col items-center px-2 pt-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#dceee0] text-[22px] font-semibold text-[#2f5a3c]">
            ✓
          </div>
          <p className="mt-4 font-sans text-[16px] font-semibold text-ink">₹4,250 paid</p>
          <p className="mt-2 text-[13px] leading-relaxed text-ink/55">
            EMI for November is paid. You&apos;ll get a receipt by email and SMS.
          </p>
          <div className="mt-4 w-full space-y-2 text-left text-[13px]">
            {[
              ["Reference", "pay_N8x2…71Q"],
              ["Paid via", "UPI"],
              ["Next EMI", "5 Dec · ₹4,250"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between border-t border-line pt-2">
                <span className="text-ink/45">{k}</span>
                <span className="font-medium text-ink">{v}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 w-full rounded-[12px] bg-[#e7efe6] px-3 py-2 text-left text-[12px] text-[#2f5a3c]">
            +20 MCash added to your rewards
          </p>
        </div>
        <div className="mt-4 rounded-full border border-line py-2.5 text-center text-[13px] font-semibold text-ink">
          Download receipt
        </div>
      </PayShell>
    </div>
  );
}

const funnel: [string, number, number][] = [
  ["Opened app", 100, 100],
  ["Started signup", 64, 66],
  ["Verified OTP", 52, 56],
  ["Saw an offer", 35, 38],
  ["Started application", 19, 21],
  ["Submitted", 11, 12],
];

export function AnalyticsDash() {
  return (
    <Frame>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-4 py-3">
        <p className="break-words text-[11px] font-medium uppercase tracking-[0.14em] text-ink/40">
          analytics / bajaj-markets / onboarding-and-applications
        </p>
        <span className="rounded-md bg-[#ead7b8] px-2 py-0.5 text-[11px] font-medium text-ink">
          Illustrative values
        </span>
      </div>
      <div className="p-5 md:p-7">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-sans text-[16px] font-semibold text-ink">
              Signup &amp; application funnel
            </p>
            <p className="mt-1 text-[13px] text-ink/45">Before redesign vs after · Android</p>
          </div>
          <span className="rounded-full border border-line bg-cream px-3 py-1 text-[12px] text-ink/55">
            Last 90 days ▾
          </span>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["Reported result", "Signup & conversion completion", "+5–10%", "after redesign"],
            ["Reported result", "Drop-off at key stages", "−10%", "after redesign"],
            ["Reported result", "Design & dev effort", "~−20%", "component library"],
            ["Illustrative", "Pre-filled fields", "4 of 6", "for existing customers"],
            ["Illustrative", "Applications resumed", "18%", "from 0%"],
          ].map(([src, label, value, from]) => (
            <div key={label} className="rounded-[16px] border border-line bg-cream px-3 py-3">
              <p className="text-[11px] uppercase tracking-[0.12em] text-ink/40">{src}</p>
              <p className="mt-2 text-[12px] leading-snug text-ink/60">{label}</p>
              <p className="mt-1 font-inter text-[24px] font-semibold tracking-[-0.03em] text-ink">
                {value}
              </p>
              <p className="text-[12px] text-ink/45">{from}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="font-sans text-[15px] font-semibold text-ink">Onboarding funnel</h4>
            <div className="flex gap-4 text-[12px] text-ink/55">
              <span className="flex items-center gap-2">
                <i className="h-2 w-6 rounded-sm bg-ink/25" />
                Before
              </span>
              <span className="flex items-center gap-2">
                <i className="h-2 w-6 rounded-sm bg-[#c45c4a]" />
                After
              </span>
            </div>
          </div>
          <div className="mt-4 space-y-3">
            {funnel.map(([name, before, after]) => (
              <div key={name} className="grid grid-cols-[minmax(0,8rem)_1fr] items-center gap-3">
                <p className="text-[12px] text-ink/60">{name}</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-line">
                      <div className="h-full bg-ink/25" style={{ width: `${before}%` }} />
                    </div>
                    <span className="w-8 text-right text-[11px] text-ink/45">{before}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-line">
                      <div className="h-full bg-[#c45c4a]" style={{ width: `${after}%` }} />
                    </div>
                    <span className="w-8 text-right text-[11px] text-ink/45">{after}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}
