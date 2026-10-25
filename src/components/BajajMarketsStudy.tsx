import {
  FlowLegend,
  LoanFlow,
  OnboardingFlow,
} from "@/components/bajaj-markets/Flows";
import {
  AnalyticsDash,
  Phone,
  Shot,
  PaymentScreens,
} from "@/components/bajaj-markets/screens";
import { Fig, Frame } from "@/components/employee-center/chrome";
import { StudyBackLink } from "@/components/StudyBackLink";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

const toc = [
  ["Context", "#context"],
  ["Audit", "#audit"],
  ["Research", "#research"],
  ["Users", "#personas"],
  ["IA", "#ia"],
  ["Flows", "#flows"],
  ["Screens", "#screens"],
  ["Payments", "#payments"],
  ["Decisions", "#decisions"],
  ["Design system", "#system"],
  ["Impact", "#impact"],
];

export function BajajMarketsStudy({ project }: { project: Project }) {
  return (
    <article className="bg-cream pb-20 pt-28">
      <div className="mx-auto w-full max-w-[1080px] px-4 sm:px-6 md:px-16">
        <StudyBackLink href="/#featured-work" label="Back to work" variant="minimal" />
        <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
          {project.title} · Bajaj Finance Direct · 2020–2022
        </p>
        <h1 className="mt-3 max-w-[18ch] font-inter text-[clamp(2.4rem,6vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-ink">
          One app for every customer,{" "}
          <span className="text-[#c45c4a]">not just the best borrowers.</span>
        </h1>
        <p className="mt-6 max-w-[62ch] text-[18px] leading-relaxed text-ink/75">
          Bajaj opened its app to partner lenders, insurers and investment products so it
          could serve customers it used to turn away. I led the product design of the
          redesigned Bajaj Markets app across loans, cards, insurance, investments and
          payments, for 5.6 lakh monthly users.
        </p>

        <dl className="mt-10 grid grid-cols-2 overflow-hidden rounded-[20px] border border-line sm:grid-cols-3 lg:grid-cols-5">
          {[
            ["Role", "Manager, UX · design lead"],
            ["Timeline", "2 years, shipped in sprints"],
            ["Team", "2 designers I mentored, PMs, engineering"],
            ["Platforms", "Android, iOS and web"],
            ["Scale", "5.6 lakh monthly active users"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="border-b border-line px-4 py-4 last:border-b-0 sm:border-b lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <dt className="text-[11px] uppercase tracking-[0.14em] text-ink/40">{label}</dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-ink/80">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <Block title="Problem">
            <strong className="font-medium text-ink">A single-lender app had to become a marketplace.</strong>{" "}
            The old home screen was crowded, full of jargon, and couldn&apos;t scale to new
            products. Users who were rejected for a loan had nowhere to go.
          </Block>
          <Block title="What I did">
            <strong className="font-medium text-ink">Rebuilt the app from audit to launch.</strong>{" "}
            New IA, eligibility-first journeys, a payment gateway designed from scratch, and
            a component library. 213 screens with two junior designers.
          </Block>
          <Block title="Impact">
            <strong className="font-medium text-ink">5–10% higher signup and conversion completion,</strong>{" "}
            10% less drop-off at key journey stages, and about 20% less design and
            development effort.
          </Block>
        </div>

        <div className="mt-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
            On this page
          </p>
          <ol className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[14px] text-ink/70">
            {toc.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="inline-flex min-h-11 items-center underline decoration-ink/20 underline-offset-4"
                >
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <Section id="context" kicker="Context">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          From selling to a few, to serving everyone.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          Bajaj Finserv&apos;s business mostly came from cross-selling to existing customers.
          New customers arrived through lending, but Bajaj only lent to people with a CIBIL
          score above 750, so everyone else was lost. The strategy changed to an open
          market: partner lenders, insurance and investments in one app, so Bajaj could
          serve customers with lower scores too.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Stat n="5.6 lakh" label="monthly active users on an app designed to sell only Bajaj products" />
          <Stat
            n="+10%"
            label="month-on-month growth in mobile's share of online business, with more new customers expected from the open market"
          />
          <Stat
            n="750"
            label="the CIBIL cut-off that turned away the very customers the marketplace now had to serve"
          />
        </div>
      </Section>

      <Section id="audit" kicker="The starting point" tone="paper">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          An app that couldn&apos;t grow into a marketplace.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          I ran a heuristic audit of the existing app alongside analytics and session
          recordings. It turned up 16 issues, which fell into four themes.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_1.1fr] lg:items-start">
          <Frame>
            <Shot
              src="/work/bajaj/old-home.png"
              alt="The old Bajaj Markets home screen: dark theme, a 'One Marketplace' banner, a credit report gauge, and stacked promotional cards"
            />
          </Frame>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              [
                "Overload",
                "Too much, all at once",
                [
                  "4 actions in the top bar plus 6 in a second navigation row",
                  'A large "One Marketplace" banner wasted prime space',
                  "One offer card per business line, each in a different style",
                ],
                "5 of 16 issues",
              ],
              [
                "Jargon & trust",
                "Hard to understand, hard to believe",
                [
                  'Terms like "Active/Closed account" and "Credit health"',
                  "The credit report showed no source, so it lacked credibility",
                  "Brand name used inconsistently",
                ],
                "4 of 16 issues",
              ],
              [
                "Doesn't scale",
                "Built for one lender",
                [
                  "No room for new business categories",
                  "High-engagement, low-frequency products took the best spots",
                  "The same product information was repeated vertically",
                ],
                "4 of 16 issues",
              ],
              [
                "No continuity",
                "Every visit started from zero",
                [
                  "No way to resume a half-finished application",
                  "No way to dismiss or postpone a prompt",
                  "No rewards dashboard for active users",
                ],
                "3 of 16 issues",
              ],
            ].map(([kicker, title, items, count]) => (
              <div key={kicker as string} className="rounded-[20px] border border-line bg-cream p-5">
                <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">
                  {kicker as string}
                </p>
                <h3 className="mt-2 font-sans text-[16px] font-semibold text-ink">
                  {title as string}
                </h3>
                <ul className="mt-3 space-y-1.5 text-[13px] leading-relaxed text-ink/65">
                  {(items as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-3 text-[12px] text-ink/40">{count as string}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="research" kicker="Research">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          What the data and the users told us.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          I combined the audit with heatmaps and funnel data from analytics, user interviews
          and usability tests. The heatmap made one thing obvious: attention went to search,
          the top bar and the bottom navigation. The promotional content in between was
          largely ignored.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
          <Frame>
            <Shot
              src="/work/bajaj/heatmap.png"
              alt="Heatmap over the old home screen: taps cluster on search, notifications and the bottom navigation, with little attention on promotional cards"
            />
          </Frame>
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Heuristic audit", "16 issues across the home screen and product pages"],
                ["Heatmaps & sessions", "where people actually tapped, scrolled and left"],
                ["Funnel analytics", "drop-off at each step of signup and applications"],
                ["Interviews & testing", "why people left, validated over several design iterations"],
              ].map(([title, body]) => (
                <div key={title} className="rounded-[16px] border border-line bg-paper px-4 py-4">
                  <p className="font-sans text-[15px] font-semibold text-ink">{title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink/60">{body}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-3">
              {[
                [
                  "People came for credit and left when rejected",
                  "Most downloaded the app for an EMI card or personal loan, and dropped off when turned down on risk.",
                  'Show eligibility-based offers from partners, so a "no" from one lender isn\'t the end.',
                ],
                [
                  "40% of users were already Bajaj customers",
                  "The app already had their data but made them type it all again.",
                  "Pre-fill forms from existing data to shorten every journey.",
                ],
                [
                  "Too many choices slowed decisions",
                  "The home screen ran into Hick's law: more options, slower and fewer decisions.",
                  "Fewer, clearer entry points, organised by what people need.",
                ],
                [
                  "Core features were missing",
                  "No recommendations based on eligibility, no reminders to finish applications, no bill pay.",
                  '"For you" offers, resume-where-you-left-off, and payments built in.',
                ],
              ].map(([title, body, so]) => (
                <div key={title} className="rounded-[16px] border border-line bg-paper p-4">
                  <p className="font-sans text-[15px] font-semibold text-ink">{title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink/65">{body}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/55">
                    <span className="font-medium text-ink">So </span>
                    {so}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="personas" kicker="Who we designed for" tone="paper">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Three customers the old app didn&apos;t serve well.
        </h2>
        <p className="mt-3 text-[13px] text-ink/45">
          Composite personas from research · names reimagined
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            [
              "RK",
              "Rohit, 26",
              "First salaried job · CIBIL ~700 · Pune",
              '"I applied for a loan and got rejected. That was it."',
              "credit he can actually get, explained without jargon.",
              "rejection without alternatives; long forms on a small phone.",
              "Designed for him",
              "Eligibility-first offers from partner lenders",
            ],
            [
              "MS",
              "Meena, 38",
              "Existing Bajaj customer · 2 products",
              '"You already have my details. Why do I fill them in again?"',
              "one place to see her loans, cards and investments.",
              "re-entering data; no view of everything she holds.",
              "Designed for her",
              "Pre-filled journeys and the My Accounts overview",
            ],
            [
              "AJ",
              "Arjun, 33",
              "Frequent user · pays EMIs and bills in-app",
              '"I just want to pay my EMI and get out."',
              "fast, trusted payments and reminders before due dates.",
              "unclear payment status; no rewards for loyalty.",
              "Designed for him",
              "Payment gateway, reminders and rewards",
            ],
          ].map(([av, who, role, quote, needs, frustration, designedLabel, designed]) => (
            <div key={who} className="flex flex-col rounded-[24px] border border-line bg-cream p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ead7b8] text-[12px] font-semibold text-ink">
                  {av}
                </span>
                <div>
                  <p className="font-sans text-[17px] font-semibold text-ink">{who}</p>
                  <p className="text-[12px] text-ink/50">{role}</p>
                </div>
              </div>
              <p className="mt-4 text-[15px] italic leading-relaxed text-ink/70">{quote}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/65">
                <span className="font-medium text-ink">Needs </span>
                {needs}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/65">
                <span className="font-medium text-ink">Frustration </span>
                {frustration}
              </p>
              <p className="mt-auto pt-4 text-[13px] leading-relaxed text-ink/55">
                <span className="font-medium text-ink">{designedLabel} </span>
                {designed}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Guiding principles">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Three rules every screen had to pass.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            [
              "Functional",
              "Every element earns its place by helping someone apply, pay or understand. Promotional noise goes.",
            ],
            [
              "Minimal",
              "Fewer choices per screen, one clear next step, and one consistent card style for every partner.",
            ],
            [
              "Accessible",
              "Plain language instead of financial jargon, readable type, a light theme, and large touch targets for one-handed use.",
            ],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[20px] border border-line bg-paper p-5">
              <p className="font-inter text-[22px] font-semibold tracking-[-0.03em] text-ink">
                {title}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="ia" kicker="Information architecture" tone="paper">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Four pillars that leave room to grow.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          The new IA groups everything under Finance, Shopping, Health and Assistance, with a
          docked bottom navigation (Home, For You, Offers, Help) and search, notifications
          and profile always at the top. New business lines slot in without redesigning the
          home screen.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
          <Frame>
            <Shot
              src="/work/bajaj/ia.png"
              alt="Information architecture diagram: splash and onboarding lead to Home, which branches into Finance, Shopping, Health and Assistance, all converging on product pages, listing and checkout"
            />
          </Frame>
          <div className="rounded-[24px] border border-line bg-cream p-5">
            <h3 className="font-sans text-[18px] font-semibold text-ink">
              Validated with a tree test
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/65">
              Four participants found items in the old and new structures using text-only
              menus.
            </p>
            <p className="mt-2 text-[13px] text-ink/45">Real method · results illustrative</p>
            <div className="mt-4 max-w-full overflow-x-auto overscroll-x-contain">
              <table className="w-full min-w-[320px] text-left text-[14px]">
                <thead className="bg-[#f3f1ea] text-[11px] uppercase tracking-[0.12em] text-ink/45">
                  <tr>
                    {["Task", "Old", "New"].map((h) => (
                      <th key={h} className="px-3 py-2 font-medium">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Find a gold loan", 2, 4],
                    ["Check your credit score", 3, 4],
                    ["Resume an application", 0, 3],
                    ["Compare health insurance", 1, 4],
                    ["Pay a loan EMI", 2, 4],
                  ].map(([task, old, neu]) => (
                    <tr key={task as string} className="border-t border-line">
                      <td className="px-3 py-3 text-ink/75">{task as string}</td>
                      <td className="px-3 py-3">
                        <Dots n={old as number} muted />
                      </td>
                      <td className="px-3 py-3">
                        <Dots n={neu as number} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-ink/50">
              Each dot is one participant who found the item on their first path. &quot;Resume an
              application&quot; led to a dedicated &quot;Pending applications&quot; area under Finance.
            </p>
          </div>
        </div>
        <Frame className="mt-8">
          <Shot
            src="/work/bajaj/crazy8.png"
            alt="Three sheets of Crazy 8s paper sketches exploring home screen layouts with icon grids, banners and card stacks"
          />
        </Frame>
        <Fig id="FIG 01">
          Crazy 8s from the design sprint, exploring how to fit icon grids, offers and
          partner cards into a home screen that could scale.
        </Fig>
      </Section>

      <Section id="flows" kicker="Key journeys">
        <h2 className="max-w-[14ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Regulated steps, made short.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          Onboarding, eligibility, lending and payments all involve rules from regulators and
          lenders. I worked with Compliance, Legal, Risk and content teams to keep every
          required step and remove everything else.
        </p>
        <div className="mt-8">
          <FlowLegend />
          <div className="space-y-4">
            <OnboardingFlow />
            <LoanFlow />
          </div>
        </div>
      </Section>

      <Section id="screens" kicker="Before and after" tone="paper">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          From a crowded feed to a clear front door.
        </h2>
        <div className="mt-8 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.14em] text-ink/40">Before</p>
            <Frame>
              <Shot
                src="/work/bajaj/old-feed.png"
                alt="Old app: dark theme with stacked, differently styled partner cards for insurance and credit cards, plus a stories carousel"
              />
            </Frame>
          </div>
          <span className="hidden text-ink/30 md:block" aria-hidden>
            →
          </span>
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.14em] text-ink/40">After</p>
            <Phone
              src="/work/bajaj/home.png"
              alt="New home screen: light theme with category tabs, a clean icon grid of loan types, a partner logo grid and a docked bottom navigation"
            />
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Light theme, Bajaj blue",
              "Testing showed the dark theme increased cognitive load. The new UI uses a white base with Bajaj blue for actions.",
            ],
            [
              "Categories as tabs",
              "Loans, Cards, Insurance, Investments, Shopping, Travel and more scale without crowding the screen.",
            ],
            [
              "One partner pattern",
              "Every lender and insurer uses the same card and logo grid, instead of a differently styled banner each.",
            ],
            [
              "Docked navigation",
              "Offers, Rewards, My Accounts and Help are always one tap away, where the heatmap showed people already tapped.",
            ],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[16px] border border-line bg-cream p-4">
              <p className="font-sans text-[15px] font-semibold text-ink">{title}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink/65">{body}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
          The redesigned app
        </p>
        <h2 className="mt-3 max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Real screens from the shipped design.
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "/work/bajaj/onboarding.png",
              "Onboarding screen: 'Explore the World of Bajaj Markets' with full name, mobile number and date of birth fields, consent checkboxes and a Proceed with OTP button",
              "Onboarding",
              "Three fields to start",
              "Name, mobile and date of birth are all it takes to generate offers. Consent and WhatsApp updates are explicit opt-ins.",
            ],
            [
              "/work/bajaj/home.png",
              "New home screen with category tabs and loan type icons",
              "Home",
              "Find any product in one tap",
              "Category tabs and a clear icon grid replace the old double navigation and stacked banners.",
            ],
            [
              "/work/bajaj/pdp.png",
              "Personal loan page with Get Offer, Calculator, FAQ and Partners tabs and a short form for pin code, income, email and employer",
              "Loan page",
              "Eligibility before paperwork",
              "Get Offer asks five quick questions. Pin code fills the city automatically, and existing customers' details are pre-filled.",
            ],
            [
              "/work/bajaj/accounts.png",
              "My Accounts screen with tiles for credit score, loans, insurance, cards, mutual funds, rewards, expenses and flexi credit limit",
              "My Accounts",
              "Everything you hold, in one view",
              "Credit score, loans, cards, insurance, investments, rewards and spending in one place, built for existing customers like Meena.",
            ],
          ].map(([src, alt, tag, title, body]) => (
            <div key={tag}>
              <Phone src={src} alt={alt} />
              <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-ink/40">{tag}</p>
              <p className="mt-1 font-sans text-[16px] font-semibold text-ink">{title}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink/65">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="payments" kicker="Payment gateway · end to end">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Moving money in short, trusted steps.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          I owned the payment experience across the app and website, designed from scratch
          on a Razorpay-based gateway: UPI, cards, EMI and loan repayments. The goal was
          simple. People should always know what they&apos;re paying, how, and whether it worked.
        </p>
        <p className="mt-3 text-[13px] text-ink/45">Screens recreated for this case study</p>
        <div className="mt-8">
          <PaymentScreens />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Amount first",
              "What you're paying, for what and when it's due, before any payment choice.",
            ],
            [
              "Pending is a real state",
              "UPI approvals happen in another app, so the wait has a timer and clear instructions.",
            ],
            [
              "Failure says what happened to the money",
              '"No money deducted," or exactly when a refund arrives, with a one-tap retry.',
            ],
            [
              "Proof on success",
              "Reference number, method and next due date, plus a receipt and rewards.",
            ],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[16px] border border-line bg-paper p-4">
              <p className="font-sans text-[15px] font-semibold text-ink">{title}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink/65">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="decisions" kicker="Key decisions" tone="paper">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Trade-offs I made, and how I made the case.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            [
              "Eligibility before effort",
              "Show people what they can actually get before asking for documents. Rejected users see partner offers instead of a dead end.",
              "more upfront logic with Risk and partner APIs, in exchange for fewer wasted applications.",
            ],
            [
              "Pre-fill everything we already know",
              "With 40% of users already Bajaj customers, every form pulls known data. People confirm instead of typing.",
              "extra consent and data-handling reviews with Compliance and Legal.",
            ],
            [
              "Design within regulation, not around it",
              "RBI and lender rules require consent, clear charges and secure payments. I made those steps clear and short rather than hiding them, working with Compliance, Legal, Risk and content.",
              "some required steps stayed, but conversion didn't suffer.",
            ],
            [
              "Engineering trade-offs without touching UX",
              "When a build constraint blocked a design, I looked for a cheaper way to build the same experience. I didn't cut the user outcome.",
              "more design iterations, but every sprint shipped on time without weakening the journey.",
            ],
            [
              "A light theme over the existing dark one",
              "Testing showed the dark theme added cognitive load. I made the case for Bajaj blue on white, backed by user feedback.",
              "a bigger visual change for stakeholders to approve.",
            ],
            [
              "Earning stakeholder trust with evidence",
              "Monthly reviews with senior management and daily reviews with the team, each change backed by research, analytics or test results.",
              "time spent presenting, which bought faster sign-off later.",
            ],
          ].map(([title, body, trade]) => (
            <div key={title} className="rounded-[20px] border border-line bg-cream p-5">
              <h3 className="font-sans text-[17px] font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/70">{body}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-ink/55">
                <span className="font-medium text-ink">Trade-off: </span>
                {trade}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="system" kicker="Design system">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          One library for every product line.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          I built and evolved the visual system and component library, merging duplicated UI
          patterns across loans, cards, insurance and investments. It cut design and
          development effort by about 20%.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <div className="rounded-[20px] border border-line bg-paper p-5 lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">Colour</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["#123A63", "Navy", "headers"],
                ["#0B63C5", "Bajaj blue", "actions"],
                ["#1a1a1a", "Ink", "text"],
                ["#F3F1EA", "Mist", "surfaces"],
                ["#C9A227", "Gold", "rewards"],
                ["#c45c4a", "Coral", "alerts"],
                ["#B12A7A", "Magenta", "offers"],
                ["#2f5a3c", "Green", "success"],
              ].map(([hex, name, use]) => (
                <div key={name}>
                  <i className="block h-8 w-full rounded-md border border-line" style={{ background: hex }} />
                  <p className="mt-1 text-[13px] font-medium text-ink">{name}</p>
                  <p className="text-[11px] text-ink/45">{use}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[20px] border border-line bg-paper p-5 lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">Type · Open Sans</p>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-[11px] text-ink/40">H1 24 Bold</p>
                <p className="font-sans text-[22px] font-bold text-ink">Personal Loan</p>
              </div>
              <div>
                <p className="text-[11px] text-ink/40">H2 16 Bold</p>
                <p className="font-sans text-[16px] font-bold text-ink">Approved offers for you</p>
              </div>
              <div>
                <p className="text-[11px] text-ink/40">Body 12</p>
                <p className="text-[13px] text-ink/70">Easy, instant approval</p>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] border border-line bg-paper p-5 lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">Library</p>
            <p className="mt-4 font-inter text-[32px] font-semibold tracking-[-0.03em] text-ink">
              213
            </p>
            <p className="text-[14px] text-ink/60">screens</p>
            <p className="mt-4 font-inter text-[32px] font-semibold tracking-[-0.03em] text-ink">
              ~20%
            </p>
            <p className="text-[14px] text-ink/60">less effort</p>
          </div>
          <div className="rounded-[20px] border border-line bg-paper p-5 lg:col-span-12">
            <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">
              Consolidated patterns
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["C01", "Product icon grid"],
                ["C02", "Partner logo grid"],
                ["C03", "Offer card"],
                ["C04", "Floating-label field"],
                ["C05", "Get Offer form"],
                ["C06", "Account tile"],
                ["C07", "Payment option"],
                ["C08", "Status screen"],
                ["C09", "Category tabs"],
                ["C10", "Pending application"],
                ["C11", "Nudge banner"],
                ["C12", "Bottom navigation"],
              ].map(([id, label]) => (
                <div
                  key={id}
                  className="flex items-center justify-between rounded-[12px] border border-line bg-cream px-3 py-2"
                >
                  <span className="text-[14px] text-ink">{label}</span>
                  <span className="text-[11px] text-ink/40">{id}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="analytics" kicker="Measuring it" tone="paper">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Tracked after launch, improved in iterations.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          After each release I tracked user behaviour with the team: funnels, drop-off points
          and CSAT. Each finding fed the next round of interviews and usability tests.
        </p>
        <div className="mt-8">
          <AnalyticsDash />
        </div>
        <Fig id="FIG 02">
          A reimagined analytics view. The three headline results are real; funnel values are
          illustrative, chosen to match them, to show where we measured.
        </Fig>
      </Section>

      <Section kicker="My role">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Leading design across the whole product.
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <ul className="space-y-3 text-[16px] leading-relaxed text-ink/75">
            <li>
              Owned end-to-end product design, interaction and visual, for loans, credit
              cards, insurance, mutual funds and the marketplace, on mobile and web.
            </li>
            <li>
              Owned the payment gateway experience end to end: UPI, cards, EMI and loan
              repayment.
            </li>
            <li>
              Mentored two junior designers through structured feedback; together we designed
              213 screens.
            </li>
            <li>
              Worked sprint by sprint with engineering on interaction details and post-launch
              behaviour tracking.
            </li>
            <li>
              Presented design rationale and trade-offs to PMs, senior stakeholders and
              engineers, and partnered with Compliance, Legal, Risk and content.
            </li>
          </ul>
          <div className="space-y-4">
            {[
              [
                "Stakeholders",
                "Product, Engineering, Compliance, Legal, Risk, Content, Business heads",
              ],
              [
                "Methods",
                "Heuristic audit, heatmaps, funnel analytics, interviews, usability testing, tree testing, Crazy 8s",
              ],
              ["Tools", "Adobe XD, Figma, Jira, Asana, analytics dashboards"],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[16px] border border-line bg-paper p-4">
                <p className="text-[13px] font-medium text-ink">{title}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-ink/65">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="impact" kicker="Impact" tone="paper">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          More people signed up, applied and finished.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Stat n="+5–10%" label="signup and conversion completion with mobile-first onboarding" accent />
          <Stat n="−10%" label="drop-off at key journey stages" accent />
          <Stat n="~20%" label="less design and development effort from the component library" accent />
          <Stat n="5.6 lakh" label="monthly active users served" />
          <Stat n="213" label="screens designed with two junior designers" />
          <Stat n="End to end" label="ownership of the payment gateway" />
        </div>
        <div className="mt-10 rounded-[24px] border border-line bg-cream p-6 md:p-8">
          <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">Why it worked</p>
          <p className="mt-3 max-w-[62ch] text-[16px] leading-relaxed text-ink/75">
            The redesign removed the two biggest reasons people gave up: being asked for
            information the app already had, and hitting a rejection with nowhere to go.
            Shorter, pre-filled journeys and eligibility-based partner offers kept people
            moving, and a clear payment flow kept them coming back.
          </p>
        </div>
      </Section>

      <Section kicker="What I learned">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Designing money products at scale.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            [
              "Risk shapes the experience",
              "Understanding how lenders assess risk was the key to designing eligibility around the user, not the product.",
            ],
            [
              "Compliance is a design partner",
              "Bringing Compliance and Legal in early made required steps clearer, not longer.",
            ],
            [
              "Evidence wins rooms",
              "Heatmaps, funnels and test clips settled debates faster than opinions ever did.",
            ],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[20px] border border-line bg-paper p-5">
              <p className="font-sans text-[16px] font-semibold text-ink">{title}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/65">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-[28ch] font-inter text-[clamp(1.6rem,3vw,2.2rem)] font-semibold tracking-[-0.03em] text-ink">
          A financial product should feel as simple as the decision behind it.
        </p>
        <div className="mt-10">
          <StudyBackLink href="/#featured-work" label="Back to all work" />
        </div>
      </Section>
    </article>
  );
}

function Section({
  id,
  kicker,
  children,
  tone = "cream",
}: {
  id?: string;
  kicker: string;
  children: ReactNode;
  tone?: "cream" | "paper";
}) {
  return (
    <section
      id={id}
      className={cn(
        "mt-4 scroll-mt-28 px-4 py-12 sm:px-6 sm:py-16 md:px-16 md:py-20",
        tone === "paper" ? "bg-paper" : "bg-cream",
      )}
    >
      <div className="mx-auto w-full max-w-[1080px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">{kicker}</p>
        <div className="mt-4">{children}</div>
      </div>
    </section>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-[13px] font-medium text-ink">{title}</p>
      <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{children}</p>
    </div>
  );
}

function Stat({
  n,
  label,
  accent,
}: {
  n: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-[16px] border border-line bg-cream px-4 py-4">
      <p
        className={cn(
          "font-inter text-[28px] font-semibold tracking-[-0.03em]",
          accent ? "text-[#c45c4a]" : "text-ink",
        )}
      >
        {n}
      </p>
      <p className="mt-1 text-[13px] leading-snug text-ink/55">{label}</p>
    </div>
  );
}

function Dots({ n, muted }: { n: number; muted?: boolean }) {
  return (
    <span className="inline-flex gap-1" aria-label={`${n} of 4`}>
      {[0, 1, 2, 3].map((i) => (
        <i
          key={i}
          className={cn(
            "h-2 w-2 rounded-full",
            i < n ? (muted ? "bg-ink/30" : "bg-[#c45c4a]") : "bg-line",
          )}
        />
      ))}
    </span>
  );
}
