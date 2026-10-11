import {
  BadgeFlow,
  FlowLegend,
  LaptopFlow,
  ManagerFlow,
} from "@/components/employee-center/Flows";
import { EmpathyTabs } from "@/components/employee-center/EmpathyTabs";
import { Scenarios } from "@/components/employee-center/Scenarios";
import {
  Bar,
  Fig,
  Frame,
  Note,
  Path,
  Pill,
  brand,
} from "@/components/employee-center/chrome";
import { StudyBackLink } from "@/components/StudyBackLink";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

const toc = [
  ["Problem", "#problem"],
  ["Research", "#research"],
  ["Personas", "#personas"],
  ["Information architecture", "#ia"],
  ["User flows", "#flows"],
  ["Decisions", "#decisions"],
  ["Design system", "#system"],
  ["Screens", "#screens"],
  ["Personalisation", "#personalisation"],
  ["Usability testing", "#testing"],
  ["Accessibility", "#accessibility"],
  ["Analytics", "#analytics"],
  ["Impact", "#impact"],
];

export function EmployeeCenterStudy({ project }: { project: Project }) {
  return (
    <article className="bg-cream pb-20 pt-28">
      <div className="mx-auto w-full max-w-[1080px] px-6 md:px-16">
        <StudyBackLink href="/#featured-work" label="Back to work" variant="minimal" />
        <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
          UBS · GCOO Group Technology · Employee Center
        </p>
        <h1 className="mt-3 max-w-[16ch] font-inter text-[clamp(2.6rem,6.5vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-ink">
          Finding help shouldn&apos;t{" "}
          <span className="text-[#c45c4a]">need help.</span>
        </h1>
        <p className="mt-6 max-w-[62ch] text-[18px] leading-relaxed text-ink/75">
          I led the redesign of the bank&apos;s Employee Center: one front door
          where employees across the bank raise HR, IT, Facilities, Finance,
          Legal and Procurement requests. Over two years we rebuilt how people
          find answers, get things done and track what they&apos;ve asked for.
        </p>

        <dl className="mt-10 grid grid-cols-2 overflow-hidden rounded-[20px] border border-line sm:grid-cols-3 lg:grid-cols-5">
          {[
            ["Role", "Lead Product Designer"],
            ["Duration", "2 years, ongoing"],
            ["Team", "2 designers I mentored, product owner, engineering"],
            ["Stakeholders", "4 business groups"],
            ["Platform", "Web, mobile and Teams"],
          ].map(([label, value]) => (
            <div key={label} className="border-b border-line px-4 py-4 last:border-b-0 sm:border-b lg:border-b-0 lg:border-r lg:last:border-r-0">
              <dt className="text-[11px] uppercase tracking-[0.14em] text-ink/40">
                {label}
              </dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-ink/80">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 rounded-[16px] border border-line bg-paper px-4 py-4 text-[14px] leading-relaxed text-ink/70">
          <span className="mr-2 rounded-md bg-[#ead7b8] px-2 py-0.5 text-[11px] font-medium text-ink">
            NDA
          </span>
          Screens and scenarios on this page are reimagined. The users, the
          problems, the research and the design decisions are real. Dashboards
          use illustrative values in typical industry ranges, except where marked
          as a reported result.
        </div>

        <div className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-3">
          <Block title="Problem">
            Employees couldn&apos;t find what they needed. Content was hard to
            find, some pages linked to the wrong place or didn&apos;t work, and
            the experience had accessibility and usability gaps.
          </Block>
          <Block title="What I did">
            Rebuilt it around tasks, not departments. Research with 50+
            employees, a design system from scratch, 220+ screens with two
            junior designers, and testing before and after every release.
          </Block>
          <Block title="Impact">
            Support tickets down 30% within two quarters, and CSAT up 10%.
            Broken links fixed, journeys personalised from first-week joiner to
            expert, and a funnel now tracks behaviour so the work keeps
            improving.
          </Block>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-2">
          <p className="mr-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
            On this page
          </p>
          {toc.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-line bg-paper px-3 py-1.5 text-[13px] text-ink/70 transition hover:text-ink"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <Section id="context" kicker="Context">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Six departments, one front door.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          For most employees the Employee Center is where work admin happens: a
          new laptop, a payroll question, a desk booking, an expense claim. It
          sits on a leading enterprise service platform and is reachable from
          the browser, the mobile app and Microsoft Teams.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["IT", "Report an issue, request software or hardware, troubleshooting guides"],
            ["HR", "Time off, payroll questions, benefits enrolment, policies"],
            ["Facilities", "Maintenance, building access badges, desk and parking bookings"],
            ["Finance", "Expense reimbursement, corporate card questions"],
            ["Legal & Compliance", "Mandatory training, policy lookups"],
            ["Procurement", "Purchase requests, supplier questions"],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[20px] border border-line bg-paper p-5">
              <p className="font-sans text-[16px] font-semibold text-ink">{title}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/65">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="problem" kicker="The problem" tone="paper">
        <h2 className="max-w-[18ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          The portal was organised the way the bank is, not the way people think.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          An employee with a broken laptop doesn&apos;t know which team owns it.
          They know what&apos;s wrong. The old portal made them translate their
          problem into the org chart first.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            [
              "Findability",
              "Hard to find anything",
              "Content was grouped by department. Search returned long, mixed lists, so people gave up and emailed or called instead.",
            ],
            [
              "Broken journeys",
              "Links that went nowhere",
              "Some pages linked to the wrong content or didn't work at all, a side effect of development constraints on the platform.",
            ],
            [
              "Accessibility",
              "Not usable for everyone",
              "Low contrast, unlabelled controls and keyboard dead ends locked some employees out of basic tasks.",
            ],
            [
              "Consistency",
              "Every page its own rules",
              "Forms, buttons and statuses looked and behaved differently from one department to the next.",
            ],
          ].map(([kicker, title, body]) => (
            <div key={title} className="rounded-[20px] border border-line bg-cream p-5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">
                {kicker}
              </p>
              <p className="mt-2 font-sans text-[18px] font-semibold text-ink">{title}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Path>intranet / employee-center / home</Path>
          <p className="mb-2 text-[12px] text-ink/45">Before · reimagined</p>
          <BeforeHome />
        </div>
      </Section>

      <Section id="research" kicker="Research">
        <h2 className="max-w-[18ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Talking to 50+ employees before drawing a screen.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          I combined interviews, a survey and usability focus groups to find
          where people got stuck, then built personas from first-week joiners
          through to experts. We tested at the start and again after each
          version went live.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["50+", "employees across teams and seniority"],
            ["Interviews", "one-to-one, on how they actually get help today"],
            ["Survey", "to size which pain points were widespread"],
            ["Focus groups", "task-based usability sessions, before and after release"],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[20px] border border-line bg-paper p-5">
              <p className="font-inter text-[28px] font-semibold tracking-[-0.03em] text-ink">
                {title}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/60">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="personas" kicker="Personas" tone="paper">
        <p className="text-[13px] text-ink/45">Newbie → Expert</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            [
              "New joiner",
              "“What do I even need to do?”",
              "First weeks at the bank. Doesn't know the vocabulary, the teams or what's expected of them.",
              "→ guided first-week checklist",
            ],
            [
              "Everyday employee",
              "“Just fix my problem.”",
              "Comes a few times a month with one task. Describes the problem, not the department.",
              "→ search by intent, answers first",
            ],
            [
              "People manager",
              "“Approvals are piling up.”",
              "Approves requests for their team across several departments and systems.",
              "→ one approvals hub",
            ],
            [
              "Expert",
              "“Don't slow me down.”",
              "Knows exactly what they want and uses the portal often.",
              "→ shortcuts, recent and saved items",
            ],
          ].map(([title, quote, body, next]) => (
            <div key={title} className="rounded-[20px] border border-line bg-cream p-5">
              <p className="text-[13px] font-medium text-ink/45">{title}</p>
              <p className="mt-2 font-serif text-[22px] italic text-ink">{quote}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{body}</p>
              <p className="mt-4 text-[14px] text-ink/80">{next}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 max-w-[18ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          What it feels like on the other side of the screen.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          From the interviews I built an empathy map for each persona: what they
          say, think, do and feel when they need help. These maps decided what
          each person sees first.
        </p>
        <p className="mt-4 text-[13px] text-ink/45">
          Composite personas · names and details reimagined
        </p>
        <div className="mt-6">
          <EmpathyTabs />
        </div>
      </Section>

      <Section id="ia" kicker="Information architecture">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          From the org chart to the task.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          The old structure mirrored who owns each service. I restructured it
          around what people come to do, and turned department into a filter
          instead of the main way in.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-[24px] border border-line bg-paper p-5 md:p-7">
            <p className="text-[13px] text-ink/45">Before · by department</p>
            <p className="mt-1 font-medium text-ink">11 top-level items</p>
            <ul className="mt-4 space-y-2 text-[14px] leading-relaxed text-ink/75">
              <li>Home</li>
              <li>HR · Services · Policies › Documents › year · Forms</li>
              <li>IT · Service catalog › Hardware › Laptops · Knowledge · Incidents</li>
              <li>Facilities · Requests · Badge office</li>
              <li>Finance · Expenses · Expenses (legacy) duplicate, broken</li>
              <li>Legal · Compliance · Procurement</li>
              <li>Useful links · Documents · Other</li>
            </ul>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <Stat n="4–5" label={'clicks to a common form'} />
              <Stat n="3" label={'places for policies'} />
              <Stat n="0" label={'views of "my requests"'} />
            </div>
          </div>
          <div className="rounded-[24px] border border-line bg-paper p-5 md:p-7">
            <p className="text-[13px] text-ink/45">After · by task</p>
            <p className="mt-1 font-medium text-ink">4 top-level items</p>
            <ul className="mt-4 space-y-2 text-[14px] leading-relaxed text-ink/75">
              <li>Home personalised to you</li>
              <li>Search everything answers, forms, policies in one list</li>
              <li>My items · Open · Waiting on me · Closed</li>
              <li>
                Help topics by what you need to do · Get set up laptop, access,
                payroll · Fix something IT, building · Time off & pay · Spend &
                expenses · Rules & training · Buy something
              </li>
              <li>Approvals managers only</li>
            </ul>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <Stat n="2" label={'clicks to a common form'} />
              <Stat n="1" label={'place for policies'} />
              <Stat n="1" label={'view of all my requests'} />
            </div>
          </div>
        </div>
        <Fig id="FIG IA">
          Department labels still exist, as filters and tags on every result, so
          specialists can narrow down without everyone else needing to know the
          org chart. Click counts reflect the reimagined structure.
        </Fig>
      </Section>

      <Section id="flows" kicker="User flows" tone="paper">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Fewer steps, and no dead ends.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          I mapped the main journeys end to end, including what the system does
          behind the scenes, so every branch had a designed outcome.
        </p>
        <div className="mt-8">
          <FlowLegend />
          <div className="space-y-6">
            <LaptopFlow />
            <BadgeFlow />
            <ManagerFlow />
          </div>
        </div>
      </Section>

      <Section kicker="The moment it clicked">
        <h2 className="max-w-[18ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          One screen did what months of documents couldn&apos;t.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          Personas, information architecture, hierarchy and flows had built a
          strong case on paper. When I showed users and stakeholders a single
          redesigned screen, the journey suddenly made sense to them. They could
          see why the work mattered and felt that the experience had genuinely
          improved.
        </p>
        <p className="mt-4 max-w-[62ch] font-serif text-[22px] italic text-ink">
          From then on the conversation moved from “why change this?” to “how
          soon can we ship it?”
        </p>
        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Interviews and survey", "50+ people"],
            ["Personas", "newbie → expert"],
            ["Information architecture", "by task"],
            ["Hierarchy and user flows", "key journeys"],
            ["Usability issues logged", "prioritised"],
            ["First screen shown", "buy-in"],
          ].map(([title, note], i) => (
            <li key={title} className="rounded-[16px] border border-line bg-paper px-4 py-4">
              <p className="font-hand text-[20px] text-[#3a5c86]">0{i + 1}</p>
              <p className="font-medium text-ink">{title}</p>
              <p className="text-[13px] text-ink/50">{note}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="decisions" kicker="Key decisions" tone="paper">
        <h2 className="max-w-[14ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          What I chose, and what it cost.
        </h2>
        <div className="mt-8 space-y-4">
          {[
            [
              "Build a design system from scratch",
              "Before more screens, I built the components and patterns every department would share: forms, statuses, cards, empty states and navigation.",
              "Trade-off: slower first month. It paid back quickly: 10+ reusable patterns let us produce 220+ screens with a small team.",
            ],
            [
              "Bring engineering and stakeholders in from day one",
              "Developers and all four stakeholder groups saw the work from the first sketches, so platform limits surfaced early instead of at handoff.",
              "Trade-off: more meetings early on, far fewer surprises later.",
            ],
            [
              "Test before launch and after every release",
              "Usability testing wasn't a one-off gate. We tested the old portal, the prototypes, and each version once it was live.",
              "Trade-off: some planned designs changed after real use. That was the point.",
            ],
            [
              "Prioritise around the platform, not against users",
              "When development constraints blocked an ideal design, I looked for the version that kept the user outcome intact, and pushed back with reasoning when a shortcut would hurt users.",
              "Trade-off: some ideas moved to later releases rather than being cut.",
            ],
            [
              "Use AI prototyping to unblock developers",
              "I used AI-assisted prototyping and code to show engineers working behaviour, not just static screens, which cleared up ambiguity fast.",
              "Trade-off: extra design time per tricky component, less back-and-forth overall.",
            ],
            [
              "Help shape the roadmap",
              "I worked with the product owner to turn research findings into a prioritised roadmap, so the biggest user problems were fixed first.",
              "Trade-off: visible quick wins sometimes waited behind deeper structural fixes.",
            ],
          ].map(([title, body, cost]) => (
            <div key={title} className="rounded-[20px] border border-line bg-cream p-5 md:p-6">
              <h3 className="font-sans text-[18px] font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{body}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/55">{cost}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="system" kicker="Design system">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          One set of parts for six departments.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          I built the system from scratch before scaling screens: foundations,
          components with every state, and the patterns that combine them.
          It&apos;s what let three designers ship 220+ consistent screens, and it
          was built on the platform&apos;s own components wherever possible so
          engineering could reuse them.
        </p>
        <DesignSystem />
      </Section>

      <Section id="screens" kicker="The redesign · reimagined scenarios" tone="paper">
        <h2 className="max-w-[14ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Four people, four everyday jobs.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          Each scenario follows one of the personas through a real kind of task.
          Specifics are invented for the NDA; the patterns are the ones we
          shipped.
        </p>
        <div className="mt-8">
          <Scenarios />
        </div>
      </Section>

      <Section id="personalisation" kicker="Personalisation">
        <h2 className="max-w-[14ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Same portal, different front door.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          The home page adapts from newbie to expert. It uses information the
          portal already had, such as role, office and start date, plus what
          you&apos;ve done in the portal, so everyone sees their most likely next
          task first.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-[13px] text-ink/60">
          {[
            "Start date · first 30 days",
            "Role · manages people",
            "Office · location-specific services",
            "Activity · open requests, recent searches",
            "Frequency · visits per month",
          ].map((item) => (
            <span key={item} className="rounded-full border border-line bg-paper px-3 py-1">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <PersonaHome
            who="New joiner"
            hello="Welcome, Priya"
            when="Start date in the last 30 days"
          >
            <p className="text-[13px] font-medium">Your first week · 3 of 6</p>
            <p className="text-[13px] text-ink/60">Request badge · 2 min</p>
            <p className="text-[13px] text-ink/60">Compliance training · Due 9d</p>
            <p className="mt-2 text-[12px] text-ink/45">Popular with new joiners</p>
            <p className="text-[13px]">Office Wi-Fi</p>
            <p className="text-[13px]">Relocation expenses</p>
          </PersonaHome>
          <PersonaHome
            who="Everyday"
            hello="Hi, Daniel"
            when="Has open requests or recent searches"
          >
            <p className="text-[13px] font-medium">My active items · 1</p>
            <p className="text-[13px] text-ink/60">Laptop charger · In progress</p>
            <p className="mt-2 text-[12px] text-ink/45">Your recent searches</p>
            <p className="text-[13px]">laptop not charging</p>
            <p className="text-[13px]">leave balance</p>
          </PersonaHome>
          <PersonaHome
            who="Manager"
            hello="Hi, Arjun"
            when="Role includes direct reports"
          >
            <p className="text-[13px] font-medium">Waiting on you · 5</p>
            <p className="text-[13px] text-ink/60">2 due today · Review</p>
            <p className="mt-2 text-[12px] text-ink/45">Your team</p>
            <p className="text-[13px]">New joiner starts Mon</p>
            <p className="text-[13px]">2 requests in progress</p>
          </PersonaHome>
          <PersonaHome
            who="Expert"
            hello="Hi, Meera"
            when="10+ requests in the last 90 days"
          >
            <p className="text-[13px] font-medium">Saved shortcuts</p>
            <p className="text-[13px]">Travel booking ↗</p>
            <p className="text-[13px]">Meeting room + catering ↗</p>
            <p className="mt-2 text-[12px] text-ink/45">Raise again</p>
            <p className="text-[13px]">Visitor pass · for J. Shah</p>
          </PersonaHome>
        </div>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-[14px]">
            <thead className="bg-[#f3f1ea] text-[11px] uppercase tracking-[0.12em] text-ink/45">
              <tr>
                {["Module", "Who sees it", "Why it's there", "Guardrail"].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "First-week checklist",
                  "New joiners, first 30 days",
                  "They don't know what to ask for yet",
                  "Dismissible; disappears when complete",
                ],
                [
                  "Active items",
                  "Anyone with open requests",
                  "Status was the most-asked question",
                  "Always one tap from My items",
                ],
                [
                  "Waiting on you",
                  "People managers",
                  "Approvals were blocking their teams",
                  "High-value items never bulk-approved",
                ],
                [
                  "Saved shortcuts",
                  "Frequent users",
                  "Experts wanted speed, not guidance",
                  "User-controlled; can pin or remove",
                ],
                [
                  "Search, always on top",
                  "Everyone",
                  "The one constant across every persona",
                  "Never personalised away",
                ],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-line bg-paper">
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
      </Section>

      <Section id="testing" kicker="Usability testing" tone="paper">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Tested before, during and after.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          We ran task-based usability sessions on the old portal to set a
          baseline, on prototypes as the design evolved, and again on each live
          release.
        </p>
        <p className="mt-3 text-[13px] text-ink/45">
          Illustrative values · real rounds, reimagined numbers
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Round 1 · baseline", "The old portal", "Focus groups and one-to-one sessions to see where people failed and why."],
            ["Round 2 · prototype", "Clickable prototypes", "Same tasks on the new IA and screens, iterated between sessions."],
            ["Round 3 · live", "After each release", "Re-tested on the shipped version to catch what changed in build."],
          ].map(([k, t, b]) => (
            <div key={k} className="rounded-[20px] border border-line bg-cream p-5">
              <p className="text-[12px] text-ink/45">{k}</p>
              <p className="mt-1 font-semibold text-ink">{t}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/65">{b}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-[14px]">
            <thead className="bg-[#f3f1ea] text-[11px] uppercase tracking-[0.12em] text-ink/45">
              <tr>
                {["Task", "Task success · before → after", "Avg. time before", "Avg. time after"].map(
                  (h) => (
                    <th key={h} className="px-4 py-3 font-medium">
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {[
                ["Report a laptop that won't charge", "58% → 92%", "4m 20s", "1m 35s"],
                ["Find your leave balance", "46% → 88%", "3m 05s", "0m 50s"],
                ["Request a building badge (new joiner)", "40% → 90%", "6m 10s", "2m 05s"],
                ["Check the status of a request", "35% → 95%", "2m 40s", "0m 25s"],
                ["Approve a team request (managers)", "62% → 94%", "3m 30s", "1m 10s"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-line bg-paper">
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
        <div className="mt-8 rounded-[20px] border border-line bg-paper p-5 md:p-7">
          <p className="text-[13px] text-ink/45">System Usability Scale</p>
          <p className="mt-1 font-inter text-[32px] font-semibold text-ink">58 → 79</p>
          <p className="text-[13px] text-ink/50">
            Illustrative · SUS 68 is the commonly cited average
          </p>
          <div className="relative mt-6 h-3 rounded-full bg-[#f3f1ea]">
            <div className="absolute left-[58%] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink/40" />
            <div
              className="absolute left-[68%] top-0 h-3 w-px bg-ink/30"
              title="68 avg"
            />
            <div
              className="absolute left-[79%] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ background: brand }}
            />
          </div>
          <p className="mt-2 text-[12px] text-ink/40">0 · 25 · 50 · 68 avg · 100</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            [
              "Critical",
              "People didn't know which department owned their problem",
              "Most failed tasks started with a wrong guess at the department, then a dead end.",
              "Fix: Task-based IA and search by plain-language problem.",
            ],
            [
              "Critical",
              "After submitting, people had no idea what happened next",
              "Participants called or emailed the service desk to check status.",
              "Fix: Status timeline, “what happens next” panel and Teams updates.",
            ],
            [
              "Major",
              "New joiners didn't recognise internal terms",
              "Words like “catalog item” and “incident” meant nothing to people in their first weeks.",
              "Fix: UX writing pass: plain labels, checklist with time estimates.",
            ],
            [
              "Major",
              "Keyboard users got stuck in the date picker",
              "Found in round 3 on the live build, not in the prototype.",
              "Fix: Rebuilt to be fully keyboard operable; logged and tracked as a Git issue.",
            ],
          ].map(([level, title, body, fix]) => (
            <div key={title} className="rounded-[20px] border border-line bg-cream p-5">
              <p className="text-[11px] uppercase tracking-[0.14em]" style={{ color: brand }}>
                {level}
              </p>
              <p className="mt-2 font-semibold text-ink">{title}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/65">{body}</p>
              <p className="mt-3 text-[14px] text-ink/80">{fix}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Details that add up">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Words, states and accessibility.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          A lot of the improvement came from small things done consistently:
          clearer writing, every state designed, and accessibility treated as a
          baseline rather than a fix.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Button", "Submit ticket", "Send request to IT", "Says who it goes to. “Ticket” is the service desk's word, not the employee's."],
            ["Error", "Error 404: resource not found", "This page has moved. Here's the closest match.", "Explains what happened and gives a way forward, no codes."],
            ["Status", "Work in progress (WIP-2)", "Being prepared · expected Wed by 15:00", "Internal status codes replaced with what's happening and when."],
          ].map(([k, before, after, note]) => (
            <div key={k} className="rounded-[20px] border border-line bg-paper p-5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">{k}</p>
              <p className="mt-3 text-[14px] text-ink/40 line-through">{before}</p>
              <p className="mt-1 text-[15px] font-medium text-ink">{after}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/60">{note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="accessibility" kicker="Accessibility · WCAG 2.1 AA" tone="paper">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Accessible by default, not by exception.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          I audited the existing pages against WCAG 2.1 AA, fixed what we
          inherited, and built the criteria into the design system so new
          screens met them from the start.
        </p>
        <p className="mt-3 text-[13px] text-ink/45">
          Criteria are real WCAG 2.1 · issues reimagined from the audit
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-[14px]">
            <thead className="bg-[#f3f1ea] text-[11px] uppercase tracking-[0.12em] text-ink/45">
              <tr>
                {["Criterion", "Level", "Issue found", "What we did"].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["1.4.3 Contrast (Minimum)", "AA", "Light grey helper text and placeholders fell below 4.5:1.", "Darkened text tokens; every text pairing checked in the system."],
                ["1.4.1 Use of Color", "A", "Request status shown only by a coloured dot.", "Status badges always pair colour with a word."],
                ["1.3.1 Info and Relationships", "A", "Placeholders used instead of form labels.", "Visible, programmatic labels on every field."],
                ["2.1.1 Keyboard", "A", "Date picker trapped keyboard focus.", "Rebuilt to be fully operable with keyboard alone."],
                ["2.4.7 Focus Visible", "AA", "Theme removed focus outlines.", "A 2px focus ring on every interactive component."],
                ["2.4.4 Link Purpose", "A", "“Click here” and “More” links out of context.", "Descriptive link text, e.g. “Go to Expense claims”."],
                ["3.3.1 Error Identification", "A", "Errors shown by a red border only.", "Text error message next to the field, announced to screen readers."],
                ["4.1.2 Name, Role, Value", "A", "Icon-only buttons had no accessible name.", "Labels added; icon-only buttons kept to a minimum."],
                ["1.4.10 Reflow", "AA", "Forms scrolled sideways at 320px width.", "Responsive layouts that stack on narrow screens."],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-line bg-paper">
                  {row.map((cell) => (
                    <td key={cell} className="px-4 py-3 align-top text-ink/75">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-[16px] border border-line bg-paper p-5">
            <p className="text-[14px] text-[#b9b3a8]">Updated 3 weeks ago</p>
            <p className="mt-2 text-[13px] text-ink/45">2.5 : 1 on white · fails</p>
          </div>
          <div className="rounded-[16px] border border-line bg-paper p-5">
            <p className="text-[14px] text-ink/70">Updated 3 weeks ago</p>
            <p className="mt-2 text-[13px] text-ink/45">4.7 : 1 on white · passes AA</p>
          </div>
        </div>
      </Section>

      <Section kicker="Constraints">
        <h2 className="max-w-[14ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Designing inside a bank.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            ["Compliance", "Some friction is required", "Approval limits, audit trails and mandatory training rules are non-negotiable. The job was to make them clear, not to hide them."],
            ["Legacy platform", "Working with the grain", "The service platform has its own components and limits. Designs had to be buildable within them, or worth the cost of custom work."],
            ["Accessibility", "Fixing inherited issues", "Existing pages carried contrast, labelling and keyboard problems that had to be fixed alongside new work."],
            ["Four stakeholders", "One page, many owners", "Four business groups shared the same pages. Aligning them on one structure took evidence from research, not opinion."],
          ].map(([k, t, b]) => (
            <div key={k} className="rounded-[20px] border border-line bg-paper p-5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">{k}</p>
              <p className="mt-2 font-semibold text-ink">{t}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="analytics" kicker="Measuring it" tone="paper">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Watching what people actually do.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          Alongside CSAT, we track the journey from search to submitted request
          as a funnel, so we can see where people still drop off and what to fix
          next.
        </p>
        <Analytics />
      </Section>

      <Section kicker="Leading the work">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Two junior designers, 220+ screens, one standard.
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ul className="space-y-4 text-[16px] leading-relaxed text-ink/75">
            {[
              "Mentored and grew two junior designers through reviews, pairing and ownership of real flows.",
              "Ran design sprints alongside engineering, and logged design defects as Git issues so they were tracked like any other bug.",
              "Did design QA on every release, so what shipped matched what we designed.",
              "Kept four stakeholder groups aligned using research evidence, and pushed back with reasoning when needed.",
              "Worked with the product owner to turn findings into the roadmap.",
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ background: brand }} />
                {line}
              </li>
            ))}
          </ul>
          <Frame>
            <div className="divide-y divide-line text-[14px]">
              <IssueCol title="To fix" n="3">
                <p>#212 · a11y · Focus ring missing on date picker</p>
                <p>#208 · content · Old “Submit ticket” label on Facilities form</p>
              </IssueCol>
              <IssueCol title="In review" n="2">
                <p>#205 · ui · Status badge colours on mobile</p>
                <p>#199 · link · Policy link points to archived page</p>
              </IssueCol>
              <IssueCol title="Done" n="41">
                <p>#190 · ux · Empty state for My items</p>
                <p>#184 · link · Duplicate Expenses tile removed</p>
              </IssueCol>
            </div>
          </Frame>
        </div>
      </Section>

      <Section id="impact" kicker="Impact">
        <h2 className="max-w-[18ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          A portal that explains itself, so fewer people need to ask for help.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["−30%", "support tickets within two quarters of the redesigned flows going live"],
            ["+10%", "CSAT after the redesign"],
            ["50+", "employees in research and testing"],
            ["220+", "screens designed with two junior designers"],
            ["10+", "reusable patterns in a new design system"],
            ["2", "junior designers mentored through the project"],
          ].map(([stat, note], i) => (
            <div
              key={stat}
              className="rounded-[20px] border border-line bg-paper px-6 py-7 shadow-[0_8px_18px_rgba(40,32,18,0.05)]"
            >
              <p
                className="font-inter text-[42px] font-semibold tracking-[-0.04em]"
                style={{ color: i < 2 ? brand : "#3a3732" }}
              >
                {stat}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/60">{note}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-[24px] bg-[#f6e6df] px-6 py-10 md:px-10">
          <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink/45">
            Why tickets dropped
          </p>
          <p className="mt-4 max-w-[62ch] text-[17px] leading-relaxed text-ink/80">
            When the portal explains itself, people stop needing to ask.
            Plain-language search with answers first, forms that say what
            happens next, and live status in one place removed the most common
            reasons employees contacted support: “where do I find…”, “which form
            is it…” and “what&apos;s happening with my request?”
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              [
                "Broken journeys fixed",
                "Mislinked and non-working pages were found and repaired, and moved content now redirects to the right place.",
              ],
              [
                "Personalised from newbie to expert",
                "New joiners get guidance; frequent users get shortcuts and saved items.",
              ],
              [
                "Consistent across departments",
                "One design system for forms, statuses, empty states and writing, with consistent branding.",
              ],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="font-sans text-[18px] font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section kicker="What's next">
        <h2 className="max-w-[12ch] font-inter text-[clamp(2rem,5vw,3.2rem)] font-semibold tracking-[-0.03em] text-ink">
          It&apos;s never finished.
        </h2>
        <p className="mt-5 max-w-[54ch] text-[17px] leading-relaxed text-ink/75">
          The Employee Center is still evolving. Behaviour funnels now show
          where people drop off, and each round of findings feeds the next
          usability tests and the roadmap.
        </p>
      </Section>

      <div className="mx-auto mt-6 w-full max-w-[1080px] border-t border-line px-6 pt-12 md:px-16">
        <p className="max-w-[18ch] font-inter text-[clamp(1.8rem,4vw,2.6rem)] font-semibold leading-tight tracking-[-0.03em] text-ink">
          When people can find help without asking for it, the portal has done
          its job.
        </p>
        <div className="mt-10">
          <StudyBackLink href="/#featured-work" label="Back to all work" variant="minimal" />
        </div>
      </div>
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
        "mt-4 scroll-mt-28 px-6 py-16 md:px-16 md:py-20",
        tone === "paper" ? "bg-paper" : "bg-cream",
      )}
    >
      <div className="mx-auto w-full max-w-[1080px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
          {kicker}
        </p>
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

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-[12px] bg-cream px-2 py-3">
      <p className="font-inter text-[22px] font-semibold text-ink">{n}</p>
      <p className="text-[11px] leading-snug text-ink/50">{label}</p>
    </div>
  );
}

function PersonaHome({
  who,
  hello,
  when,
  children,
}: {
  who: string;
  hello: string;
  when: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[20px] border border-line bg-paper p-4">
      <p className="text-[12px] text-ink/40">{who}</p>
      <p className="mt-1 font-semibold text-ink">{hello}</p>
      <div className="mt-3 rounded-full bg-cream px-3 py-2 text-[12px] text-ink/40">
        Describe what you need…
      </div>
      <div className="mt-4 space-y-1">{children}</div>
      <p className="mt-4 text-[12px] text-ink/45">Shown when · {when}</p>
    </div>
  );
}

function IssueCol({
  title,
  n,
  children,
}: {
  title: string;
  n: string;
  children: ReactNode;
}) {
  return (
    <div className="p-4">
      <div className="flex items-baseline justify-between">
        <p className="text-[12px] uppercase tracking-[0.12em] text-ink/40">{title}</p>
        <p className="font-inter text-[22px] font-semibold">{n}</p>
      </div>
      <div className="mt-3 space-y-2 text-ink/70">{children}</div>
    </div>
  );
}

function BeforeHome() {
  const tiles = [
    "HR Services",
    "HR Policies",
    "HR Forms",
    "IT Service Catalog",
    "IT Knowledge",
    "IT Incidents",
    "Facilities Requests",
    "Workplace",
    "Badge Office",
    "Finance Forms",
    "Expenses (legacy)",
    "Expenses",
    "Legal",
    "Compliance",
    "Procurement",
    "Useful Links",
    "Documents",
    "Other",
  ];
  return (
    <div>
      <Frame>
        <Bar
          title="Employee Center"
          right={
            <div className="flex flex-wrap gap-3 text-[12px] text-ink/50">
              {["HR", "IT", "Facilities", "Finance", "Legal", "Procurement", "More ▾"].map(
                (item) => (
                  <span key={item}>{item}</span>
                ),
              )}
            </div>
          }
        />
        <div className="p-4 md:p-6">
          <div className="h-9 max-w-xs rounded-md border border-line bg-cream px-3 text-[13px] leading-9 text-ink/35">
            Search…
          </div>
          <p className="mt-4 rounded-[12px] bg-[#f6e6df] px-4 py-3 text-[13px] leading-relaxed text-ink/70">
            ANNOUNCEMENT: Please refer to the relevant department page for all
            service requests. For urgent IT issues contact the service desk.
            Updated policies are available under HR › Policies › Documents ›
            2023.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {tiles.map((tile) => (
              <div
                key={tile}
                className="rounded-[12px] border border-line bg-cream px-3 py-4 text-[12px] text-ink/70"
              >
                {tile}
              </div>
            ))}
          </div>
        </div>
      </Frame>
      <ol className="mt-5 space-y-3">
        <Note n={1}>
          Search is small and secondary, though it&apos;s what most people reach
          for first.
        </Note>
        <Note n={2}>The first thing on the page tells people to go somewhere else.</Note>
        <Note n={3}>Two “Expenses” tiles. One of them goes to a retired form.</Note>
        <Note n={4}>
          18 tiles of equal weight, organised by team. Nothing about what you
          have open.
        </Note>
      </ol>
    </div>
  );
}

function DesignSystem() {
  const colors = [
    ["Ink", "text, primary action", "#3a3732"],
    ["Surface", "cards, forms", "#fffdf8"],
    ["Sunk", "panels", "#f4f0e5"],
    ["Brand", "mark, highlights", brand],
    ["Done", "success", "#4a7c59"],
    ["Waiting", "attention", "#c4a35a"],
    ["Error", "declined, failed", "#b54a3c"],
    ["Muted", "helper text", "#626c81"],
  ];
  return (
    <div className="mt-10 space-y-10">
      <div>
        <p className="text-[13px] font-medium text-ink">Foundations · colour</p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {colors.map(([name, use, hex]) => (
            <div key={name} className="overflow-hidden rounded-[16px] border border-line">
              <div className="h-14" style={{ background: hex }} />
              <div className="bg-paper px-3 py-3">
                <p className="text-[14px] font-medium text-ink">{name}</p>
                <p className="text-[12px] text-ink/50">{use}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[13px] text-ink/50">
          Every text pairing checked to WCAG AA contrast. Status colours always
          ship with a label.
        </p>
      </div>
      <div>
        <p className="text-[13px] font-medium text-ink">Foundations · type</p>
        <div className="mt-4 space-y-2 rounded-[20px] border border-line bg-paper p-5">
          <p className="font-inter text-[28px] font-semibold">Good morning</p>
          <p className="text-[12px] text-ink/40">Display 28</p>
          <p className="mt-4 text-[20px] font-semibold">Request a badge</p>
          <p className="text-[12px] text-ink/40">Heading 20</p>
          <p className="mt-4 text-[14px]">Takes about 2 minutes</p>
          <p className="text-[12px] text-ink/40">Body 14</p>
          <p className="mt-4 text-[12px] text-ink/55">Updated 3 weeks ago</p>
          <p className="text-[12px] text-ink/40">Caption 12</p>
        </div>
      </div>
      <div>
        <p className="text-[13px] font-medium text-ink">Foundations · spacing</p>
        <div className="mt-4 flex flex-wrap items-end gap-3">
          {[4, 8, 12, 16, 24, 32].map((n) => (
            <div key={n} className="text-center">
              <div className="bg-ink/80" style={{ width: n * 2, height: n * 2 }} />
              <p className="mt-1 text-[12px] text-ink/50">{n}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[13px] text-ink/50">
          4-point scale. Touch targets at least 44px on mobile.
        </p>
      </div>
      <div>
        <p className="text-[13px] font-medium text-ink">Component · button states</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Btn>Send request</Btn>
          <Btn dim>Send request</Btn>
          <Btn ring>Send request</Btn>
          <Btn disabled>Send request</Btn>
          <Btn secondary>Save for later</Btn>
          <Btn secondary dim>
            Save for later
          </Btn>
          <Btn secondary ring>
            Save for later
          </Btn>
          <Btn secondary disabled>
            Save for later
          </Btn>
        </div>
      </div>
      <div>
        <p className="text-[13px] font-medium text-ink">Component · form field states</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field label="Default" value="14 Oct 2026" />
          <Field label="Focus" value="14 Oct 2026" ring />
          <Field
            label="Error"
            value="01 Jan 2020"
            error="Choose a start date from today onwards."
          />
          <Field label="Read-only" value="Pune · Tower B" readOnly />
        </div>
      </div>
      <div>
        <p className="text-[13px] font-medium text-ink">Component · request status</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Received", "In progress", "Waiting on you", "Ready", "Done", "Declined"].map(
            (s) => (
              <Pill
                key={s}
                tone={
                  s === "Declined"
                    ? "brand"
                    : s === "Done" || s === "Ready"
                      ? "done"
                      : s.includes("Waiting") || s === "In progress"
                        ? "wait"
                        : "muted"
                }
              >
                {s}
              </Pill>
            ),
          )}
        </div>
        <p className="mt-3 text-[13px] text-ink/50">
          One status set across all six departments, replacing internal codes
          like “WIP-2”. Colour plus a word, never colour alone.
        </p>
      </div>
      <div>
        <p className="text-[13px] font-medium text-ink">Patterns · 10+ reusable</p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {[
            ["Request form", "P01"],
            ["Status timeline", "P02"],
            ["Approval table", "P03"],
            ["Search result", "P04"],
            ["Suggested answer", "P05"],
            ["Checklist", "P06"],
            ["Empty state", "P07"],
            ["Moved page", "P08"],
            ["Filter chips", "P09"],
            ["“What happens next”", "P10"],
            ["Persona home module", "P11"],
            ["Review step", "P12"],
          ].map(([name, id]) => (
            <div key={id} className="rounded-[16px] border border-line bg-paper px-4 py-4">
              <p className="text-[11px] text-ink/40">{id}</p>
              <p className="mt-1 text-[14px] font-medium text-ink">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Btn({
  children,
  secondary,
  disabled,
  dim,
  ring,
}: {
  children: ReactNode;
  secondary?: boolean;
  disabled?: boolean;
  dim?: boolean;
  ring?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-md px-3 py-2 text-[13px] font-medium",
        secondary
          ? "border border-line bg-paper text-ink"
          : "text-white",
        disabled && "opacity-40",
        dim && "opacity-80",
        ring && "ring-2 ring-offset-2 ring-ink",
      )}
      style={secondary ? undefined : { background: brand }}
    >
      {children}
    </span>
  );
}

function Field({
  label,
  value,
  error,
  ring,
  readOnly,
}: {
  label: string;
  value: string;
  error?: string;
  ring?: boolean;
  readOnly?: boolean;
}) {
  return (
    <label className="block text-[13px] text-ink/50">
      {label}
      <span
        className={cn(
          "mt-1 block rounded-lg border px-3 py-2.5 text-[14px] text-ink",
          error ? "border-[#b54a3c] bg-[#fdf4f2]" : "border-line bg-cream",
          ring && "ring-2 ring-ink",
          readOnly && "bg-[#f3f1ea] text-ink/60",
        )}
      >
        {value}
      </span>
      {error ? <span className="mt-1 block text-[12px] text-[#b54a3c]">{error}</span> : null}
    </label>
  );
}

function Analytics() {
  const funnel = [
    ["Visited portal", "100%", "100%"],
    ["Searched", "68%", "72%"],
    ["Opened a result", "41%", "60%"],
    ["Started a request", "22%", "31%"],
    ["Submitted", "14%", "26%"],
  ];
  return (
    <div className="mt-8">
      <Path>analytics / employee-center / overview</Path>
      <p className="mb-2 text-[12px] text-ink/45">Illustrative values</p>
      <Frame>
        <Bar
          title="Employee Center · overview"
          right={
            <p className="text-[12px] text-ink/45">
              Before redesign vs after · rolling 90 days · All departments · Web
              + mobile + Teams
            </p>
          }
        />
        <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-5 md:p-6">
          {[
            ["Reported result", "CSAT", "+10%", "vs before redesign"],
            ["Illustrative", "Search success rate", "78%", "from 61%"],
            ["Illustrative", "Zero-result searches", "7%", "from 18%"],
            ["Reported result", "Support tickets", "−30%", "within 2 quarters"],
            ["Illustrative", "Median time to submit", "3m 10s", "from 6m 40s"],
          ].map(([tag, name, value, note]) => (
            <div key={name} className="rounded-[16px] border border-line p-4">
              <p className="text-[11px] uppercase tracking-[0.12em] text-ink/40">{tag}</p>
              <p className="mt-2 text-[13px] text-ink/60">{name}</p>
              <p
                className="mt-1 font-inter text-[28px] font-semibold"
                style={{ color: tag === "Reported result" ? brand : "#3a3732" }}
              >
                {value}
              </p>
              <p className="text-[12px] text-ink/45">{note}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-6 border-t border-line p-4 md:grid-cols-2 md:p-6">
          <div>
            <p className="font-medium text-ink">Search-to-request funnel</p>
            <p className="text-[12px] text-ink/45">Share of sessions reaching each step</p>
            <table className="mt-3 w-full text-left text-[13px]">
              <thead className="text-[11px] uppercase tracking-[0.12em] text-ink/40">
                <tr>
                  <th className="py-2 font-medium">Step</th>
                  <th className="py-2 font-medium">Before</th>
                  <th className="py-2 font-medium">After</th>
                </tr>
              </thead>
              <tbody>
                {funnel.map((row) => (
                  <tr key={row[0]} className="border-t border-line">
                    {row.map((cell) => (
                      <td key={cell} className="py-2 text-ink/75">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <p className="font-medium text-ink">CSAT by quarter</p>
            <p className="text-[12px] text-ink/45">Score out of 5 · First release +10%</p>
            <svg viewBox="0 0 320 120" className="mt-4 h-28 w-full">
              <polyline
                fill="none"
                stroke={brand}
                strokeWidth="2"
                points="10,80 50,70 90,62 130,55 170,48 210,40 250,32 310,24"
              />
              <text x="10" y="115" fontSize="10" fill="#9a9488">
                Q1
              </text>
              <text x="280" y="115" fontSize="10" fill="#9a9488">
                Q8
              </text>
            </svg>
          </div>
        </div>
        <div className="grid gap-6 border-t border-line p-4 md:grid-cols-2 md:p-6">
          <div>
            <p className="font-medium text-ink">Top zero-result searches, before</p>
            <ul className="mt-3 space-y-2 text-[14px] text-ink/75">
              <li>laptop not charging · 1,240 · Answered</li>
              <li>reimbursement · 980 · Answered</li>
              <li>leave balance · 760 · Answered</li>
              <li>wfh equipment · 410 · In review</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-ink">Where people still drop off</p>
            <ul className="mt-3 space-y-2 text-[14px] text-ink/75">
              <li>Expense claim · receipt upload step · High</li>
              <li>Software request · licence type question · Medium</li>
              <li>Desk booking · floor map on mobile · Medium</li>
            </ul>
            <p className="mt-3 text-[13px] text-ink/50">
              Feeds the next round of usability tests and the roadmap.
            </p>
          </div>
        </div>
      </Frame>
      <Fig id="FIG 07">
        A reimagined analytics view. CSAT and support tickets are reported
        results; every other value is illustrative, chosen from typical ranges
        for enterprise service portals, to show what we measure rather than the
        bank&apos;s actual data.
      </Fig>
    </div>
  );
}
