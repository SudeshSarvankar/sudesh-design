import {
  ArchitectFlow,
  FlowLegend,
  HeadFlow,
  OwnerFlow,
} from "@/components/data-ea-pilot/Flows";
import { Scenarios } from "@/components/data-ea-pilot/Scenarios";
import { BeforeDashboard } from "@/components/data-ea-pilot/screens";
import {
  Fig,
  Frame,
  Note,
  Path,
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
  ["Data", "#data"],
  ["User flows", "#flows"],
  ["Designing trust", "#trust"],
  ["Screens", "#screens"],
  ["AI components", "#system"],
  ["Usability testing", "#testing"],
  ["Analytics", "#analytics"],
  ["Impact", "#impact"],
];

export function DataEaPilotStudy({ project }: { project: Project }) {
  return (
    <article className="bg-cream pb-20 pt-28">
      <div className="mx-auto w-full max-w-[1080px] px-6 md:px-16">
        <StudyBackLink href="/#featured-work" label="Back to work" variant="minimal" />
        <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
          UBS · Enterprise architecture · Gen AI assistant
        </p>
        <h1 className="mt-3 max-w-[18ch] font-inter text-[clamp(2.4rem,6vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-ink">
          Stop searching dashboards.{" "}
          <span className="text-[#c45c4a]">Ask the architecture.</span>
        </h1>
        <p className="mt-6 max-w-[62ch] text-[18px] leading-relaxed text-ink/75">
          Enterprise architects at the bank needed facts about thousands of
          applications: who owns them, what they depend on, when they reach end
          of life and what they cost. The dashboard meant to answer that was
          incomplete and out of date. I led the design of a Gen AI assistant
          that answers in plain language, from live data across six sources, and
          shows exactly where every answer came from.
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-line py-6 sm:grid-cols-3 lg:grid-cols-5">
          {[
            ["Role", "Lead Product Designer"],
            ["Status", "Shipped and live"],
            ["Team", "Designers I guided, AI and data engineering, app owners"],
            ["Users", "Architects, data engineers, app owners, department heads"],
            ["Research", "20 interviews, focus groups, usability checks"],
          ].map(([label, value]) => (
            <div key={label}>
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
          Screens, application names and data on this page are reimagined. The
          users, problems, research, design decisions and the two headline
          results are real. Other values are illustrative and marked as such.
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <Block title="Problem">
            The dashboard couldn&apos;t be trusted. Widgets were missing data,
            updates lagged, and people spent around 40 minutes a day digging
            through six sources and Excel exports instead.
          </Block>
          <Block title="What I did">
            Designed an assistant, not another dashboard. Plain-language
            questions, answers from live pipelines, and visible sources,
            freshness and confidence on every answer.
          </Block>
          <Block title="Impact">
            40% less time to find and understand data, and 50% fewer support
            tickets. Answers that used to need six systems now arrive in
            seconds.
          </Block>
        </div>

        <div className="mt-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
            On this page
          </p>
          <ol className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[14px] text-ink/70">
            {toc.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="underline decoration-ink/20 underline-offset-4">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <Section kicker="Context">
        <h2 className="max-w-[18ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Every decision starts with “what do we actually have?”
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          Enterprise architecture owns the map of the bank&apos;s technology:
          every application, the systems it talks to and the data flowing
          between them. Before anyone retires a system, plans a budget or
          responds to an incident, they need the same handful of facts, and they
          need them to be right.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Application data", "What it is, what it does, which business it serves"],
            ["Ownership & support", "Who owns it, who supports it, who to call"],
            ["Dependencies", "Upstream and downstream systems and data flows"],
            ["Versions", "What's running, what's current, what's behind"],
            ["End of life", "When technology goes out of support, and the risk"],
            ["Spend", "Run and change costs per application and portfolio"],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[20px] border border-line bg-paper p-5">
              <p className="font-sans text-[16px] font-semibold text-ink">{title}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/65">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="problem" kicker="The problem" tone="paper">
        <h2 className="max-w-[14ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          A dashboard nobody believed.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          The data existed, spread across six sources connected by pipelines.
          The dashboard was supposed to bring it together, but in interviews
          people described it as slow, incomplete and out of date. So they
          stopped using it and went to the sources directly.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            ["Missing", "Widgets with no data", "Components failed to load or showed blanks where pipelines hadn't populated them."],
            ["Missing", "Updates out of date", "Refresh lagged behind the pipelines, so numbers didn't match what owners knew to be true."],
            ["Fragmented", "Six sources, no single answer", "One question like “what breaks if we retire this?” needed data from several systems."],
            ["Fragmented", "~40 minutes a day", "Interviewees reported losing around 40 minutes daily to digging in sources and Excel exports."],
          ].map(([kicker, title, body]) => (
            <div key={title} className="rounded-[20px] border border-line bg-cream p-5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">{kicker}</p>
              <p className="mt-2 font-sans text-[18px] font-semibold text-ink">{title}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <BeforeDashboard />
          <ol className="mt-6 space-y-3">
            <Note n={1}>
              Refresh lagged weeks behind the pipelines, so nobody trusted the numbers.
            </Note>
            <Note n={2}>
              Key widgets were empty or failed to load, exactly when they were needed.
            </Note>
            <Note n={3}>
              Dependencies weren&apos;t shown at all: “see source system.”
            </Note>
            <Note n={4}>
              Fixed widgets answered fixed questions. Real questions cut across all of them.
            </Note>
          </ol>
        </div>
      </Section>

      <Section id="research" kicker="Research">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          20 interviews and one pattern.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          I facilitated 20 individual interviews and focus groups with the
          people who used the dashboard, mapped their real use cases, then ran
          usability checks on each use case as the design took shape.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["20", "individual interviews across four roles"],
            ["Focus groups", "to compare workarounds across teams"],
            ["Use-case mapping", "every recurring question, ranked by frequency and pain"],
            ["Usability checks", "tested against each use case before and after launch"],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[20px] border border-line bg-paper p-5">
              <p className="font-inter text-[22px] font-semibold tracking-[-0.03em] text-ink">
                {title}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/60">{body}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-14 max-w-[18ch] font-inter text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.03em] text-ink">
          They didn&apos;t need a better dashboard. They needed answers.
        </h3>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          Every interview ended in a question, not a widget request. “What
          depends on this?” “Who owns it now?” “What&apos;s going out of support
          next year?” A dashboard can only answer the questions someone
          predicted. People&apos;s questions were different every day.
        </p>
        <p className="mt-4 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          So we stopped fixing widgets and designed a way to ask.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "“It takes me 40 minutes every day”",
            "“Half the widgets are empty”",
            "“I don't trust the numbers”",
            "“I just export to Excel”",
            "“I go to the source directly”",
            "“I just want to ask it”",
          ].map((quote) => (
            <span
              key={quote}
              className="rounded-full border border-line bg-paper px-3 py-1.5 text-[13px] text-ink/70"
            >
              {quote}
            </span>
          ))}
        </div>
      </Section>

      <Section id="personas" kicker="Personas" tone="paper">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Four roles, four kinds of question.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          Each persona came from the interviews. The same assistant serves all
          four, but what it suggests and how it answers depends on who&apos;s
          asking.
        </p>
        <p className="mt-3 text-[13px] text-ink/45">
          Composite personas · names and details reimagined
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Persona
            who="Anika, enterprise architect"
            role="Owns the architecture of a business domain · several lookups a day"
            goal="Know what's in her domain, what depends on what, and what's at risk, before anyone asks her in a meeting."
            quotes={[
              "“What breaks if we decommission this?”",
              "“The dashboard says one owner, the CMDB says another.”",
              "If I quote a wrong number, it's my credibility.",
              "I'll double-check everything anyway.",
            ]}
            habits="Opens three source systems side by side. Keeps her own spreadsheet of “the real data”."
            feels="Frustrated by repeated manual checking. Exposed when data is wrong in a review."
            pain="Dependencies and ownership live in different systems and disagree."
            gain="One answer that combines them, with the source of each fact visible."
          />
          <Persona
            who="Rahul, data engineer"
            role="Maintains pipelines feeding the portfolio data"
            goal="Keep data flowing and know quickly when something upstream breaks or goes stale."
            quotes={[
              "“Is this field empty because of my pipeline or the source?”",
              "“People raise tickets for things the data already shows.”",
              "Half my tickets are ‘where do I find…’ questions.",
              "Nobody sees when data was last refreshed.",
            ]}
            habits="Queries the lakehouse directly to answer colleagues. Traces lineage by hand."
            feels="Interrupted by repeat questions. Blamed for problems that start upstream."
            pain="No visibility of freshness, so stale data looks like a pipeline failure."
            gain="Freshness on every answer, and far fewer “where is it?” tickets."
          />
          <Persona
            who="Thomas, application owner"
            role="Accountable for 12 applications in his area"
            goal="Make sure the data about his applications is correct, without spending his week maintaining it."
            quotes={[
              "“That version is wrong. We upgraded last quarter.”",
              "“How do I even fix it on the dashboard?”",
              "Wrong data about my app reflects on me.",
              "There's no way to tell people it's wrong.",
            ]}
            habits="Emails corrections to whoever he thinks owns the data. Answers the same questions about his apps repeatedly."
            feels="Responsible but powerless. Tired of repeating himself."
            pain="No route to correct inaccurate data, and no control over which source is authoritative."
            gain="A review queue for flagged facts, and guardrails he sets that drive the confidence level."
          />
          <Persona
            who="Sarah, head of department"
            role="Plans strategy and budget for a portfolio"
            goal="See risk and spend across her portfolio quickly enough to make planning decisions."
            quotes={[
              "“How much are we spending on systems going out of support?”",
              "“Can someone pull this together by Thursday?”",
              "I need the big picture, not raw tables.",
              "Every report takes my team days.",
            ]}
            habits="Asks her architects to build slides from exports. Rarely opens the dashboard herself."
            feels="Dependent on others for basic facts. Uneasy making decisions on old numbers."
            pain="Strategic questions turn into multi-day reporting exercises."
            gain="Portfolio-level answers with summaries and charts, ready for planning."
          />
        </div>
      </Section>

      <Section id="ia" kicker="Information architecture">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          From screens to a single question.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          The old IA split the data into tabs that mirrored the source systems.
          The new one puts a conversation on top of one connected data model,
          organised around the application, where every fact links back to its
          source.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[24px] border border-line bg-paper p-6">
            <p className="text-[12px] uppercase tracking-[0.14em] text-ink/40">
              Before · tabs per data type
            </p>
            <p className="mt-2 font-semibold text-ink">6 sources to cross-check</p>
            <ul className="mt-4 space-y-2 text-[14px] text-ink/70">
              <li>Portfolio dashboard</li>
              <li>Overview · fixed widgets</li>
              <li>Applications · inventory list</li>
              <li>Lifecycle · EOL, partial</li>
              <li>Cost · quarter-old data</li>
              <li>Reports · static</li>
              <li>Exports → Excel, the real workflow</li>
              <li>Dependencies · not in dashboard</li>
            </ul>
            <p className="mt-4 text-[13px] text-ink/50">
              ~40 min a day spent finding data · 6 systems opened per question ·
              0 way to report bad data
            </p>
          </div>
          <div className="rounded-[24px] border border-line bg-paper p-6">
            <p className="text-[12px] uppercase tracking-[0.14em] text-ink/40">
              After · ask, then go deeper
            </p>
            <p className="mt-2 font-semibold text-ink">1 place to ask</p>
            <ul className="mt-4 space-y-2 text-[14px] text-ink/70">
              <li>Assistant · plain-language questions</li>
              <li>Ask with suggestions for your role</li>
              <li>Answer · summary, table or chart</li>
              <li>Sources · name, time, link</li>
              <li>Confidence · high, medium, low</li>
              <li>Flag to owner</li>
              <li>Application profile · owner, versions, dependencies, EOL, spend, support</li>
              <li>Watchlist · alerts on apps you follow</li>
              <li>Owner review · app owners only</li>
            </ul>
            <p className="mt-4 text-[13px] text-ink/50">
              Seconds to a first answer · 1 question, all sources · 1 tap to flag
              bad data
            </p>
          </div>
        </div>
        <Fig id="FIG IA">
          The application is the centre of the model. Whatever someone asks, the
          answer resolves to applications and their facts, each traceable to a
          source.
        </Fig>
      </Section>

      <Section id="data" kicker="Data" tone="paper">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Six sources, one up-to-date layer.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          The assistant only answers from data the pipelines bring in. Designing
          it meant understanding that flow well enough to show users what&apos;s
          fresh, what&apos;s verified and what isn&apos;t.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            [
              "Sources",
              [
                "Application inventory · apps",
                "Data lakehouse · flows",
                "Cost & spend · ₹ / $",
                "Support & incidents · teams",
                "Release registry · versions",
                "Ownership directory · people",
              ],
            ],
            [
              "Pipelines",
              [
                "Scheduled refresh per source SLA",
                "Freshness timestamp on every record",
                "Owner rules · which source wins",
              ],
            ],
            [
              "Connected model",
              [
                "Application · the centre",
                "Owner · Support · who",
                "Dependencies · what",
                "Version · EOL · Spend · risk",
              ],
            ],
            [
              "Assistant",
              [
                "Answer in seconds",
                "Citations · source + time",
                "Confidence from guardrails",
                "Access · your permissions",
              ],
            ],
          ].map(([title, items]) => (
            <div key={String(title)} className="rounded-[20px] border border-line bg-cream p-5">
              <p className="font-sans text-[16px] font-semibold text-ink">{title}</p>
              <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-ink/65">
                {(items as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="flows" kicker="User flows">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          From six systems to one question.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          Each flow was mapped against a real use case from research, including
          what happens when the data isn&apos;t good enough to answer.
        </p>
        <div className="mt-8">
          <FlowLegend />
          <div className="space-y-6">
            <ArchitectFlow />
            <OwnerFlow />
            <HeadFlow />
          </div>
        </div>
      </Section>

      <Section id="trust" kicker="Designing trust" tone="paper">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          An answer is only useful if you can check it.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          The old dashboard failed because people couldn&apos;t trust it. So
          trust became the core of the design: every answer shows where it came
          from, how fresh it is and how confident the system is, and gives a way
          to fix it.
        </p>
        <Frame className="mt-8">
          <div className="p-5 md:p-7">
            <p className="text-[16px] leading-relaxed text-ink/80">
              <span className="font-semibold">Payments Gateway</span> is owned
              by Thomas B. and runs version 4.2. It reaches end of support on 31
              Mar 2027. <sup>1</sup> 7 systems depend on it. <sup>2</sup>
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-[12px] text-ink/55">
              <span className="rounded-full bg-cream px-3 py-1">
                Application inventory · 2h ago ↗
              </span>
              <span className="rounded-full bg-cream px-3 py-1">
                Data lakehouse · 25m ago ↗
              </span>
            </div>
          </div>
        </Frame>
        <ol className="mt-6 space-y-3">
          <Note n={1}>Plain-language answer, facts in bold. Key values stand out, so people can scan before they read.</Note>
          <Note n={2}>Citations on every fact. Numbered markers link each statement to the source it came from.</Note>
          <Note n={3}>Source, freshness and a direct link. Each source shows how recently it refreshed, and opens the record so nobody has to search for it manually.</Note>
          <Note n={4}>Confidence level. Calculated from guardrails app owners set, not guessed by the model.</Note>
          <Note n={5}>Flag to the owner. If something looks wrong, one tap sends it to the person who can fix it.</Note>
        </ol>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-[14px]">
            <thead className="bg-[#f3f1ea] text-[11px] uppercase tracking-[0.12em] text-ink/45">
              <tr>
                {["Confidence", "When it's shown", "What the user sees"].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "High",
                  "Source is the one the owner marked authoritative, refreshed within its SLA, and recently verified",
                  "Answer with sources; no extra steps",
                ],
                [
                  "Medium",
                  "One condition missing, e.g. not verified recently or refresh slightly behind",
                  "Answer with a note on what's uncertain",
                ],
                [
                  "Low",
                  "Sources disagree, data is missing, or refresh is well past its SLA",
                  "Both values shown side by side, plus “Confirm with owner”",
                ],
                [
                  "No access",
                  "The user isn't permitted to see that data",
                  "Says so plainly and names who to ask; never guesses",
                ],
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
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            [
              "A conversation, not a new dashboard",
              "Research showed questions changed daily. Fixed widgets could never keep up, so the main interface became a question box.",
              "Trade-off: less glanceable than a dashboard. We added role-based suggestions and a watchlist to keep the “at a glance” value.",
            ],
            [
              "Only answer from real, connected data",
              "The assistant answers from pipeline data and says when it can't. It never fills gaps with a plausible guess.",
              "Trade-off: some questions get “I don't have that data” instead of an answer. That honesty is what made people trust the rest.",
            ],
            [
              "Confidence comes from owners, not the model",
              "App owners set which source is authoritative. Confidence is calculated from those rules and data freshness, so it means something.",
              "Trade-off: owners needed onboarding, but they gained control over their own data.",
            ],
            [
              "Close the loop on bad data",
              "Every answer can be flagged, and flags go straight to the owner's review queue, so wrong data gets fixed once for everyone.",
              "Trade-off: new work for owners, offset by far fewer repeat questions.",
            ],
            [
              "Answer in the right shape",
              "A single fact gets a sentence; a list gets a table; a portfolio question gets a chart. The format follows the question.",
              "Trade-off: more answer templates to design and build.",
            ],
            [
              "Design with engineering from day one",
              "I worked with the AI and data engineers on what the pipelines could guarantee, then handed over and stayed through implementation.",
              "Trade-off: some ideas waited until pipelines could support them.",
            ],
          ].map(([title, body, trade]) => (
            <div key={title} className="rounded-[20px] border border-line bg-cream p-5">
              <p className="font-sans text-[16px] font-semibold text-ink">{title}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/65">{body}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-ink/50">{trade}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="screens" kicker="The redesign · reimagined scenarios">
        <h2 className="max-w-[14ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Six moments in the assistant.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          Each screen follows a persona through a real kind of question.
          Application names, people and figures are invented.
        </p>
        <div className="mt-8">
          <Scenarios />
        </div>
        <div className="mt-8 space-y-3">
          <Fig id="FIG 01">
            The home screen is a question box with suggestions based on role and
            domain, plus a watchlist that keeps the “at a glance” value people
            liked about dashboards.
          </Fig>
          <Fig id="FIG 02">
            A question that used to need four systems and an Excel merge. List
            answers come back as tables, with every source, its freshness and a
            link to the original record.
          </Fig>
          <Fig id="FIG 03">
            Dependencies were missing from the old dashboard entirely. Now they
            come back as a map, separating direct from indirect dependents and
            highlighting customer-facing systems, which is what architects check
            first before any change.
          </Fig>
          <Fig id="FIG 04">
            When sources disagree, the assistant shows both values, explains why
            it&apos;s unsure and offers “Confirm with owner.” It never picks one
            silently. This was the design decision that won over the most
            skeptical architects.
          </Fig>
          <Fig id="FIG 05">
            App owners finally have a way to fix data about their applications.
            Flags arrive in one queue, and the guardrails they set (authoritative
            sources, data age, re-verification) drive the confidence everyone
            else sees.
          </Fig>
          <Fig id="FIG 06">
            A planning question that used to take days of reporting. Portfolio
            questions get a summary and a chart. Medium confidence is shown
            honestly, with the reason, so leaders know exactly what they&apos;re
            deciding on.
          </Fig>
        </div>
      </Section>

      <Section id="system" kicker="AI components" tone="paper">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Components for answers you can trust.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          I extended our design system with components specific to AI answers,
          so every response, in every format, carries the same trust signals in
          the same place.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-[20px] border border-line bg-cream p-5">
            <p className="text-[12px] uppercase tracking-[0.14em] text-ink/40">
              Prompt bar · states
            </p>
            <p className="mt-3 text-[14px] text-ink">Idle</p>
            <p className="mt-2 text-[13px] text-ink/50">No access</p>
            <p className="mt-1 text-[13px] text-ink/60">
              You don&apos;t have access to Lending data
            </p>
          </div>
          <div className="rounded-[20px] border border-line bg-cream p-5">
            <p className="text-[12px] uppercase tracking-[0.14em] text-ink/40">
              Confidence indicator
            </p>
            <p className="mt-3 text-[14px] text-ink">
              High confidence · Medium confidence · Low confidence
            </p>
            <p className="mt-2 text-[13px] text-ink/55">
              Bars, colour and a word together, so it never relies on colour
              alone. Always paired with the reason.
            </p>
          </div>
          <div className="rounded-[20px] border border-line bg-cream p-5">
            <p className="text-[12px] uppercase tracking-[0.14em] text-ink/40">
              Source chip
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-[12px] text-ink/60">
              <span className="rounded-full bg-paper px-3 py-1">Release registry · 1h ago ↗</span>
              <span className="rounded-full bg-paper px-3 py-1">Cost & spend · 9 days ↗</span>
              <span className="rounded-full bg-paper px-3 py-1">Registry · stale ↗</span>
            </div>
          </div>
        </div>
        <p className="mt-8 text-[12px] uppercase tracking-[0.14em] text-ink/40">
          Answer patterns · the format follows the question
        </p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["A01", "Single fact → sentence"],
            ["A02", "List → table"],
            ["A03", "Relationships → map"],
            ["A04", "Portfolio → chart"],
            ["A05", "Conflict → side by side"],
            ["A06", "No data → say so"],
            ["A07", "No access → who to ask"],
            ["A08", "Flag → owner queue"],
            ["A09", "Follow-up chips"],
            ["A11", "Role suggestions"],
          ].map(([id, label]) => (
            <div key={id} className="rounded-[14px] border border-line bg-cream px-4 py-3">
              <p className="text-[11px] text-ink/40">{id}</p>
              <p className="mt-1 text-[14px] text-ink">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="testing" kicker="Usability testing">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Tested on the questions people really ask.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink/75">
          I turned the use cases from research into test tasks and ran them on
          the old dashboard, on prototypes and on the live assistant.
        </p>
        <p className="mt-3 text-[13px] text-ink/45">
          Illustrative values · real method, reimagined numbers
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-[14px]">
            <thead className="bg-[#f3f1ea] text-[11px] uppercase tracking-[0.12em] text-ink/45">
              <tr>
                {["Task", "Found a correct answer · before → after", "Time before", "Time after"].map(
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
                ["List apps reaching EOL in your domain", "45% → 95%", "14m", "2m"],
                ["Find what depends on an application", "30% → 90%", "18m", "3m"],
                ["Find the current owner and support team", "60% → 98%", "6m", "1m"],
                ["Spend on EOL apps by domain", "25% → 88%", "25m+", "4m"],
                ["Spot and report an incorrect fact", "10% → 92%", "no route", "30s"],
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
        <p className="mt-3 text-[13px] text-ink/45">
          Old dashboard + sources · Assistant (live)
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            [
              "Critical",
              "Architects wouldn't act on an answer without a source",
              "Early prototypes gave clean answers with no provenance. Participants rechecked everything manually.",
              "Fix · Citations, source chips with freshness and direct links on every answer.",
            ],
            [
              "Critical",
              "A confident wrong answer destroyed trust instantly",
              "One mismatched version in testing made a participant dismiss the whole tool.",
              "Fix · Owner-set guardrails, confidence levels and side-by-side conflicts.",
            ],
            [
              "Major",
              "A blank box made people unsure what to ask",
              "First-time users typed very short or very vague questions.",
              "Fix · Role-based suggested questions and follow-up chips.",
            ],
            [
              "Major",
              "Long lists in prose were hard to use",
              "Answers about many applications were written as paragraphs.",
              "Fix · Answer patterns: lists become tables, portfolios become charts, all exportable.",
            ],
          ].map(([level, title, body, fix]) => (
            <div key={title} className="rounded-[20px] border border-line bg-paper p-5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">{level}</p>
              <p className="mt-2 font-sans text-[16px] font-semibold text-ink">{title}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/65">{body}</p>
              <p className="mt-3 text-[13px] text-ink/55">{fix}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="analytics" kicker="Measuring it" tone="paper">
        <h2 className="max-w-[14ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Tracking adoption and trust.
        </h2>
        <Path>analytics / architecture-assistant / overview</Path>
        <p className="text-[13px] text-ink/45">Illustrative values</p>
        <Frame className="mt-4">
          <div className="p-5 md:p-7">
            <p className="font-sans text-[16px] font-semibold text-ink">
              Architecture Assistant · overview
            </p>
            <p className="mt-1 text-[13px] text-ink/45">
              Before launch vs after · rolling 90 days
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Stat n="−40%" label="Reported result · Time to find & understand data vs old dashboard" />
              <Stat n="−50%" label="Reported result · Support tickets after launch" />
              <Stat n="4s" label="Illustrative · Median time to answer, first response" />
              <Stat n="82%" label="Illustrative · Answers with high confidence, from 61% at launch" />
              <Stat n="91%" label="Illustrative · Flags resolved by owners within 5 days" />
            </div>
          </div>
        </Frame>
        <Fig id="FIG 07">
          A reimagined analytics view. The 40% time saving and 50% fewer support
          tickets are reported results; other values are illustrative, to show
          what we track.
        </Fig>
      </Section>

      <Section kicker="Leading the work">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          From the first interview to production.
        </h2>
        <ul className="mt-6 max-w-[62ch] space-y-3 text-[16px] leading-relaxed text-ink/75">
          <li>
            Facilitated 20 persona interviews and focus groups, and mapped every
            recurring use case.
          </li>
          <li>
            Owned the IA, the trust model and the AI answer patterns, and
            extended the design system for them.
          </li>
          <li>Guided the designer on the team through flows and screens.</li>
          <li>
            Worked with AI and data engineers on what the pipelines could
            guarantee, then handed over and stayed through implementation.
          </li>
          <li>
            Managed stakeholders across architecture, data and application
            owners, and brought owners on board as part of the solution.
          </li>
        </ul>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Design QA 2", ["#318 · trust · Source chip missing on chart answers", "#314 · a11y · Confidence bars need text label"]],
            ["In build 3", ["#309 · data · Freshness from release registry", "#305 · ux · Owner review queue"]],
            ["Live 36", ["#290 · ai · Conflict side-by-side pattern", "#284 · ux · Role-based suggestions"]],
          ].map(([title, items]) => (
            <div key={String(title)} className="rounded-[20px] border border-line bg-paper p-5">
              <p className="font-sans text-[16px] font-semibold text-ink">{title}</p>
              <ul className="mt-3 space-y-2 text-[13px] text-ink/65">
                {(items as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="impact" kicker="Impact" tone="paper">
        <h2 className="max-w-[16ch] font-inter text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-ink">
          Answers in seconds, in their own words.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Stat n="−40%" label="time to find and understand application data" />
          <Stat n="−50%" label="support tickets after launch" />
          <Stat n="6 → 1" label="data sources unified behind one question" />
          <Stat n="~40 min" label="a day people reported losing before" />
          <Stat n="20" label="interviews shaped the product" />
          <Stat n="Live" label="shipped and in daily use" />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Block title="Why it worked">
            People didn&apos;t have to learn where data lived anymore. They
            asked in their own words and got an answer from live data across all
            six sources, with proof attached. When they could check the source
            in one tap, they stopped double-checking everything by hand and
            stopped raising tickets to ask where things were.
          </Block>
          <Block title="Trust by design">
            Every answer shows its source, freshness and confidence. Nothing is
            guessed. App owners fix their own data and set the rules behind
            confidence.
          </Block>
          <Block title="Personalised by role">
            Suggestions and answer formats adapt for architects, engineers,
            owners and heads.
          </Block>
        </div>
        <p className="mt-12 max-w-[28ch] font-inter text-[clamp(1.6rem,3vw,2.2rem)] font-semibold tracking-[-0.03em] text-ink">
          The best answer is the one you don&apos;t have to double-check.
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
    <div className="rounded-[16px] border border-line bg-cream px-4 py-4">
      <p className="font-inter text-[28px] font-semibold tracking-[-0.03em] text-ink">{n}</p>
      <p className="mt-1 text-[13px] leading-snug text-ink/55">{label}</p>
    </div>
  );
}

function Persona({
  who,
  role,
  goal,
  quotes,
  habits,
  feels,
  pain,
  gain,
}: {
  who: string;
  role: string;
  goal: string;
  quotes: string[];
  habits: string;
  feels: string;
  pain: string;
  gain: string;
}) {
  return (
    <div className="rounded-[24px] border border-line bg-cream p-5">
      <p className="font-sans text-[18px] font-semibold text-ink">{who}</p>
      <p className="mt-1 text-[13px] text-ink/50">{role}</p>
      <p className="mt-4 text-[14px] leading-relaxed text-ink/70">
        <span className="font-medium text-ink">Goal. </span>
        {goal}
      </p>
      <ul className="mt-3 space-y-1 text-[14px] text-ink/65">
        {quotes.map((quote) => (
          <li key={quote}>{quote}</li>
        ))}
      </ul>
      <p className="mt-3 text-[13px] leading-relaxed text-ink/55">{habits}</p>
      <p className="mt-2 text-[13px] leading-relaxed text-ink/55">
        <span className="font-medium text-ink/70">Feels. </span>
        {feels}
      </p>
      <p className="mt-4 text-[13px] leading-relaxed text-ink/55">
        <span className="font-medium text-ink/70">Pain. </span>
        {pain}
      </p>
      <p className="mt-2 text-[13px] leading-relaxed text-ink/55">
        <span className="font-medium text-ink/70">Gain. </span>
        {gain}
      </p>
    </div>
  );
}
