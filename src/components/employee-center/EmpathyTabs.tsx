"use client";

import { cn } from "@/lib/cn";
import { useState } from "react";

const people = [
  {
    tab: "Priya · new joiner",
    initials: "PN",
    who: "Priya, analyst · week 1",
    role: "Joined from a start-up · Pune · uses the portal daily this month",
    goal: "get fully set up and look competent in her first week, without bothering her new manager with “basic” questions.",
    says: [
      "“Who do I even ask about my badge?”",
      "“Is there a list of what I'm supposed to do?”",
    ],
    thinks: [
      "Everyone else already knows how this works.",
      "I don't want to look lost in week one.",
    ],
    does: [
      "Searches with her own words, not the bank's terms.",
      "Opens five tabs, asks a teammate on chat, gives up on the portal.",
    ],
    feels: [
      "Anxious and overwhelmed by acronyms.",
      "Relieved when something just works first time.",
    ],
    pain: "Doesn't know the department names, so department-based navigation is a maze.",
    gain: "A clear checklist with time estimates and the next step always visible.",
  },
  {
    tab: "Daniel · everyday employee",
    initials: "DM",
    who: "Daniel, operations · 4 years",
    role: "Visits the portal a few times a month · mostly from Teams",
    goal: "fix the problem in front of him and get back to work, ideally without raising a request at all.",
    says: [
      "“My laptop won't charge. Just tell me what to do.”",
      "“I raised it last week. Where is it?”",
    ],
    thinks: [
      "This will take longer than the actual problem.",
      "Did my request disappear into a black hole?",
    ],
    does: [
      "Types the symptom into search, scans the first three results.",
      "Emails the service desk when search fails.",
    ],
    feels: ["Impatient and interrupted.", "Distrustful when there's no status update."],
    pain: "Search returns long, mixed lists; after submitting there's only a reference number and silence.",
    gain: "An answer first, the right form one tap away, and live status he can check in Teams.",
  },
  {
    tab: "Arjun · people manager",
    initials: "AK",
    who: "Arjun, team lead · 9 reports",
    role: "Approves requests across IT, Finance and Facilities",
    goal: "keep his team unblocked without approvals eating into his day, while staying compliant.",
    says: [
      "“Why are approvals in four different places?”",
      "“I only found out it was waiting on me when someone chased.”",
    ],
    thinks: [
      "I'm the bottleneck and I didn't even know.",
      "I need to check high-value ones properly.",
    ],
    does: [
      "Batches approvals at the end of the day.",
      "Approves from email notifications on his phone.",
    ],
    feels: [
      "Guilty when his team waits on him.",
      "Cautious about compliance mistakes.",
    ],
    pain: "Approvals scattered across systems with no due dates or priority.",
    gain: "One approvals hub, sorted by due date, with bulk approve for routine items only.",
  },
  {
    tab: "Meera · expert",
    initials: "MS",
    who: "Meera, executive assistant · 7 years",
    role: "Raises requests for others several times a week",
    goal: "raise routine requests in seconds, often on behalf of someone else.",
    says: [
      "“I know exactly which form I want. Let me get to it.”",
      "“I do this every week. Why do I fill in everything again?”",
    ],
    thinks: [
      "Guidance is for new people, not for me.",
      "Any extra click times fifty requests a month adds up.",
    ],
    does: [
      "Bookmarks deep links to specific forms.",
      "Keeps her own spreadsheet to track open requests.",
    ],
    feels: ["Slowed down by hand-holding.", "Proud of knowing the system well."],
    pain: "Bookmarks break when pages move; no way to repeat or save a request.",
    gain: "Saved shortcuts, “raise again” with details kept, and “on behalf of” built into forms.",
  },
] as const;

export function EmpathyTabs() {
  const [active, setActive] = useState<(typeof people)[number]["tab"]>(people[0].tab);
  const person = people.find((item) => item.tab === active) ?? people[0];

  return (
    <div>
      <div className="-mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
        <div className="flex min-w-max gap-2">
          {people.map((item) => (
            <button
              key={item.tab}
              type="button"
              onClick={() => setActive(item.tab)}
              className={cn(
                "rounded-full px-3 py-1.5 text-[13px] transition",
                item.tab === active
                  ? "bg-ink text-cream"
                  : "border border-line bg-paper text-ink/60 hover:text-ink",
              )}
            >
              {item.tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-[24px] border border-line bg-paper p-5 md:p-8">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ead7b8] text-[14px] font-semibold">
            {person.initials}
          </span>
          <div>
            <p className="font-sans text-[18px] font-semibold text-ink">{person.who}</p>
            <p className="text-[14px] text-ink/55">{person.role}</p>
            <p className="mt-3 max-w-[58ch] text-[15px] leading-relaxed text-ink/75">
              Goal: {person.goal}
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {(
            [
              ["Says", person.says],
              ["Thinks", person.thinks],
              ["Does", person.does],
              ["Feels", person.feels],
            ] as [string, readonly string[]][]
          ).map(([title, lines]) => (
            <div key={title} className="rounded-[16px] bg-cream p-4">
              <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">
                {title}
              </p>
              {lines.map((line) => (
                <p key={line} className="mt-2 text-[14px] leading-relaxed text-ink/75">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-[16px] bg-[#f6e6df] p-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">Pain</p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/75">{person.pain}</p>
          </div>
          <div className="rounded-[16px] bg-[#e7efe6] p-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">Gain</p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/75">{person.gain}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
