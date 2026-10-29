"use client";

import { StudyBackLink } from "@/components/StudyBackLink";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import {
  activityTypes,
  afterMeta,
  chapters,
  chatLines,
  facts,
  features,
  fieldPhones,
  gantt,
  ganttTicks,
  heroDash,
  heroPhone,
  isometric,
  learnings,
  mobileWires,
  months,
  onboardingPhones,
  outcomes,
  phases,
  problemCards,
  researchCards,
  researchStats,
  screenStats,
  tablets,
  webProjectsWire,
  webRows,
  type Shot,
} from "./content";
import "./fielda.css";

export function FieldaStory({ className }: { className?: string }) {
  const [progress, setProgress] = useState(0);
  const [chapter, setChapter] = useState("Intro · Fielda");
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-fd-chapter]"));
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const id = visible.target.getAttribute("data-fd-chapter");
        const found = chapters.find((c) => c.id === id);
        if (found) setChapter(`Ch ${found.n} · ${found.short}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <article className={cn("fd", className)}>
      <div
        className="fd-progress"
        aria-hidden
        style={{ "--fd-progress": `${progress}%` } as CSSProperties}
      >
        <i />
      </div>
      <a className="fd-pill" href="#fd-toc">
        {chapter}
      </a>

      <section className="fd-band">
        <div className="fd-wrap">
          <StudyBackLink href="/#featured-work" label="Back to work" variant="minimal" />
          <div className="fd-hero" style={{ marginTop: 28 }}>
            <div>
              <span className="fd-brand">
                <img src="/work/fielda/logo-mark.svg" alt="" width={94} height={125} />
                <b>FIELDA</b>
              </span>
              <p className="fd-eyebrow">
                Case study · Field service management · Web, mobile &amp; tablet
              </p>
              <h1 className="fd-h1" style={{ marginTop: 12 }}>
                From 128 field workers on WhatsApp to{" "}
                <span className="fd-rust">one map they all work from.</span>
              </h1>
              <p className="fd-lede">
                Fielda is a field service app for an electrical utility. It combines maps with
                time-saving forms and workflows, so crews can raise, track and close issues on
                poles, transformers and lines from wherever they are. I led the design across
                web, mobile and tablet, from 18 user interviews to 320 screens in 4 months.
              </p>
            </div>
            <div className="fd-hero-art">
              <div className="fd-dash">
                <Image
                  src={heroDash.src}
                  alt={heroDash.alt}
                  width={heroDash.width}
                  height={heroDash.height}
                  priority
                  loading="eager"
                />
              </div>
              <div className="fd-phone-float">
                <Image
                  src={heroPhone.src}
                  alt={heroPhone.alt}
                  width={heroPhone.width}
                  height={heroPhone.height}
                  priority
                  loading="eager"
                />
              </div>
            </div>
          </div>

          <dl className="fd-facts">
            {facts.map((fact) => (
              <div className="fd-fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="fd-end">
            <h2>At a glance</h2>
            <div className="fd-stats">
              {outcomes.map((item) => (
                <div className="fd-stat" key={item.label}>
                  <b className={item.rust ? "fd-rust" : undefined}>{item.value}</b>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <ol className="fd-toc" id="fd-toc">
            {chapters.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>
                  <span className="fd-toc-n">{String(item.n).padStart(2, "0")}</span>
                  <span>{item.title}</span>
                  <span className="fd-toc-short">{item.short}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Chapter n={1} title="Field work ran on WhatsApp" alt>
        <p className="fd-beat">
          128 field workers reported broken poles and failed transformers in group chats, where{" "}
          <span className="fd-rust">details got buried within minutes.</span>
        </p>
        <div className="fd-ba">
          <div>
            <span className="fd-tag fd-tag-before">Before</span>
            <div className="fd-chat" role="img" aria-label="Illustrative group chat of a field crew">
              <div className="fd-chat-bar">
                Field crew
                <span>128 members</span>
              </div>
              <div className="fd-chat-body">
                {chatLines.map((line) =>
                  line.more ? (
                    <p className="fd-bubble fd-bubble-more" key={line.text}>
                      {line.text}
                    </p>
                  ) : (
                    <div
                      className={cn("fd-bubble", line.who === "Supervisor" && "fd-bubble-alt")}
                      key={line.text}
                    >
                      <b>{line.who}</b>
                      <p>{line.text}</p>
                      {line.photo ? <div className="fd-photo" aria-hidden /> : null}
                    </div>
                  ),
                )}
              </div>
            </div>
            <p className="fd-note">
              Illustrative, based on how crews described their day in interviews.
            </p>
          </div>
          <span className="fd-arrow fd-arrow-m" aria-hidden>
            ↓
          </span>
          <span className="fd-arrow fd-arrow-d" aria-hidden>
            →
          </span>
          <div>
            <span className="fd-tag fd-tag-after">After</span>
            <div className="fd-activity">
              <div className="fd-activity-top">
                <span className="fd-so">SO-79</span>
                <span className="fd-flag">High priority</span>
              </div>
              <h3>Pole E091 construction work.</h3>
              <div className="fd-chips">
                <span>Old</span>
                <span>Overheating</span>
                <span>Damage</span>
              </div>
              <div className="fd-grid6">
                {afterMeta.map(([k, v]) => (
                  <div key={k}>
                    <b>{k}</b>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="fd-cards fd-cards-3">
          {problemCards.map((card) => (
            <article className="fd-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
        <blockquote className="fd-quote">
          Our challenge: an intuitive platform that keeps every service order, asset and activity
          record in one place.
        </blockquote>
      </Chapter>

      <Chapter n={2} title="We listened to every role">
        <p className="fd-beat">
          Eighteen conversations, two competitor products, three jobs that had to share one record.
        </p>
        <div className="fd-research-stats">
          {researchStats.map((item) => (
            <div className="fd-stat" key={item.label}>
              <b>{item.value}</b>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="fd-cards fd-cards-2">
          {researchCards.map((card) => (
            <article className="fd-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </Chapter>

      <Chapter n={3} title="Four months, three phases" dark>
        <p className="fd-beat">
          Discovery into UX into UI, overlapping just enough that engineering was never waiting on
          a blank file.
        </p>
        <div className="fd-cards fd-cards-3">
          {phases.map((phase) => (
            <article className="fd-card" key={phase.title}>
              <h3>{phase.title}</h3>
              <ul style={{ margin: "8px 0 0", paddingLeft: 18 }}>
                {phase.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="fd-gantt">
          {gantt.map((row) => {
            const left = (row.start / months) * 100;
            const width = ((row.end - row.start) / months) * 100;
            return (
              <div className="fd-gantt-row" key={row.label}>
                <div className="fd-gantt-label">
                  {row.label}
                  <span>{row.range}</span>
                </div>
                <div className="fd-gantt-track">
                  <span
                    className="fd-gantt-bar"
                    style={
                      {
                        "--fd-left": `${left}%`,
                        "--fd-w": `${width}%`,
                        "--fd-color": row.color,
                      } as CSSProperties
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="fd-gantt-ticks">
          {ganttTicks.map((tick) => (
            <span key={tick}>{tick}</span>
          ))}
        </div>
      </Chapter>

      <Chapter n={4} title="One feature for each problem" alt>
        <p className="fd-beat">
          Four holes in the day. Four parts of Fielda that close them.
        </p>
        <div className="fd-cards fd-cards-4">
          {features.map((item) => (
            <article className="fd-card fd-feature" key={item.title}>
              <img src={item.icon} alt="" width={item.iconW} height={item.iconH} />
              <span className="fd-prob">Problem</span>
              <p>{item.problem}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </Chapter>

      <Chapter n={5} title="320 screens, sketched in grey first">
        <p className="fd-beat">
          If the path was clear without colour, colour could wait.
        </p>
        <div className="fd-screen-stats">
          {screenStats.map((item) => (
            <div className="fd-stat" key={item.label}>
              <b>{item.value}</b>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <figure style={{ margin: "24px 0 0" }}>
          <div className="fd-frame">
            <Image
              src={webProjectsWire.src}
              alt={webProjectsWire.alt}
              width={webProjectsWire.width}
              height={webProjectsWire.height}
              loading="eager"
            />
          </div>
          <figcaption className="fd-cap">{webProjectsWire.caption}</figcaption>
        </figure>
        <div className="fd-wires">
          {mobileWires.map((shot) => (
            <figure key={shot.src} style={{ margin: 0, minWidth: 0 }}>
              <div className="fd-frame">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  loading="eager"
                />
              </div>
              <figcaption className="fd-cap">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Chapter>

      <Chapter n={6} title="A colour for every kind of work" alt>
        <p className="fd-beat">
          A crew should know what they are looking at{" "}
          <span className="fd-rust">before they read the title.</span>
        </p>
        <div className="fd-swatches">
          {activityTypes.map((swatch) => (
            <button
              key={swatch.hex}
              type="button"
              className="fd-swatch"
              onClick={async () => {
                setCopied(swatch.hex);
                try {
                  await navigator.clipboard.writeText(swatch.hex);
                } catch {
                  /* show HEX even if clipboard is blocked */
                }
              }}
            >
              <i className="fd-chip" style={{ background: swatch.hex }} />
              <span>
                {swatch.name}
                <br />
                {swatch.hex}
              </span>
            </button>
          ))}
        </div>
        <p className="fd-copied" aria-live="polite">
          {copied ? `${copied} copied` : "\u00a0"}
        </p>
      </Chapter>

      <Chapter n={7} title="The office sees the whole network">
        <p className="fd-beat">
          Supervisors do not walk the line. The dashboard has to walk it for them.
        </p>
        <div className="fd-console">
          {webRows.map((row) => (
            <div className="fd-console-row" key={row.title}>
              <div className="fd-console-copy">
                <p className="fd-eyebrow">{row.eyebrow}</p>
                <h3 className="fd-h2" style={{ marginTop: 8, fontSize: "1.6rem" }}>
                  {row.title}
                </h3>
                <p className="fd-copy">{row.body}</p>
              </div>
              <Laptop shot={row.shot} />
            </div>
          ))}
        </div>
      </Chapter>

      <Chapter n={8} title="The map in a pocket" alt>
        <p className="fd-beat">
          A phone that opens on the ground they are standing on, not a list of tickets.
        </p>
        <div className="fd-frame" style={{ marginTop: 24 }}>
          <Image
            src={isometric.src}
            alt={isometric.alt}
            width={isometric.width}
            height={isometric.height}
            loading="eager"
          />
        </div>
        <div className="fd-phones">
          {onboardingPhones.map((shot) => (
            <Phone shot={shot} key={shot.src} />
          ))}
        </div>
        <div className="fd-phones fd-phones-4">
          {fieldPhones.map((shot) => (
            <Phone shot={shot} key={shot.src} />
          ))}
        </div>
      </Chapter>

      <Chapter n={9} title="A tablet for the site">
        <p className="fd-beat">
          Bigger than a phone, still out in the weather. Search, then the same record the crew
          will close.
        </p>
        <div className="fd-tablets">
          {tablets.map((shot) => (
            <figure key={shot.src} style={{ margin: 0, minWidth: 0 }}>
              <div className="fd-tab">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  loading="eager"
                />
              </div>
              <figcaption className="fd-cap">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Chapter>

      <Chapter n={10} title="What I took away" alt>
        <p className="fd-beat">
          Four things that still hold when the work is outdoors and the record has to travel.
        </p>
        <div className="fd-learns">
          {learnings.map((item) => (
            <article className="fd-learn" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <a className="fd-next" href="/work/blubunny">
          Next story → BluBunny
        </a>
      </Chapter>
    </article>
  );
}

function Chapter({
  n,
  title,
  alt,
  dark,
  children,
}: {
  n: number;
  title: string;
  alt?: boolean;
  dark?: boolean;
  children: React.ReactNode;
}) {
  const meta = chapters[n - 1];
  return (
    <section
      id={meta.id}
      data-fd-chapter={meta.id}
      className={cn("fd-band fd-chapter", alt && "fd-band-alt", dark && "fd-band-dark")}
    >
      <div className="fd-wrap">
        <p className="fd-kicker">Chapter {n}</p>
        <h2 className="fd-h2">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Laptop({ shot }: { shot: Shot }) {
  return (
    <div className="fd-laptop">
      <div className="fd-laptop-lid">
        <div className="fd-laptop-screen">
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            loading="eager"
          />
        </div>
      </div>
      <div className="fd-laptop-base" />
    </div>
  );
}

function Phone({ shot }: { shot: Shot }) {
  return (
    <figure style={{ margin: 0, minWidth: 0, width: "100%", maxWidth: 220 }}>
      <div className="fd-bezel">
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          loading="eager"
        />
      </div>
      {shot.caption ? <figcaption className="fd-cap">{shot.caption}</figcaption> : null}
    </figure>
  );
}
