"use client";

import { StudyBackLink } from "@/components/StudyBackLink";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import {
  chapters,
  chatWires,
  concernItems,
  facts,
  flows,
  gantt,
  ganttTicks,
  goalItems,
  heroConversations,
  heroWelcome,
  iconIdeas,
  inboxRows,
  laptopShot,
  learnings,
  meetPhones,
  outcomes,
  problemCards,
  quoteSteps,
  rippeyLines,
  salesBars,
  shareBars,
  siteWires,
  supportBars,
  swatches,
  typeScale,
  volumeBars,
  volumeNotes,
  weeks,
  whoCards,
  type Shot,
} from "./content";
import "./rippey.css";

export function RippeyStory({ className }: { className?: string }) {
  const [progress, setProgress] = useState(0);
  const [chapter, setChapter] = useState("Intro · Rippey");
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
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-rp-chapter]"));
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const id = visible.target.getAttribute("data-rp-chapter");
        const found = chapters.find((c) => c.id === id);
        if (found) setChapter(`Ch ${found.n} · ${found.short}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <article className={cn("rp", className)}>
      <div
        className="rp-progress"
        aria-hidden
        style={{ "--rp-progress": `${progress}%` } as CSSProperties}
      >
        <i />
      </div>
      <a className="rp-pill" href="#rp-toc">
        {chapter}
      </a>

      <section className="rp-band">
        <div className="rp-wrap">
          <StudyBackLink href="/#featured-work" label="Back to work" variant="minimal" />
          <div className="rp-hero" style={{ marginTop: 28 }}>
            <div>
              <span className="rp-brand">
                <img src="/work/rippey/icon-idea-14.webp" alt="" width={220} height={204} />
                <span>
                  <b>Rippey</b>
                  <span>by RPA Labs</span>
                </span>
              </span>
              <p className="rp-eyebrow">
                Case study · Conversational UX · RPA Labs × BluJay Solutions
              </p>
              <h1 className="rp-h1" style={{ marginTop: 12 }}>
                From quote requests lost in email to{" "}
                <span className="rp-rust">quotes, bookings and payments in one chat.</span>
              </h1>
              <p className="rp-lede">
                Rippey is a virtual assistant that RPA Labs built for BluJay Solutions, a logistics
                and supply chain company. Customers were stuck between slow email threads and a
                generic bot that didn&apos;t understand them. I led the UX of the new bot, so they
                could get a quote, book and pay, or track a shipment without waiting for anyone.
              </p>
            </div>
            <div className="rp-hero-art">
              <div className="rp-hero-phone rp-hero-phone-back">
                <Image
                  src={heroWelcome.src}
                  alt={heroWelcome.alt}
                  width={heroWelcome.width}
                  height={heroWelcome.height}
                  priority
                  loading="eager"
                />
              </div>
              <div className="rp-hero-phone rp-hero-phone-front">
                <Image
                  src={heroConversations.src}
                  alt={heroConversations.alt}
                  width={heroConversations.width}
                  height={heroConversations.height}
                  priority
                  loading="eager"
                />
              </div>
            </div>
          </div>

          <dl className="rp-facts">
            {facts.map((fact) => (
              <div className="rp-fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="rp-end">
            <h2>The business result first</h2>
            <div className="rp-stats">
              {outcomes.map((item) => (
                <div className="rp-stat" key={item.label}>
                  <b className={item.rust ? "rp-rust" : undefined}>{item.value}</b>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <ol className="rp-toc" id="rp-toc">
            {chapters.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>
                  <span className="rp-toc-n">{String(item.n).padStart(2, "0")}</span>
                  <span>{item.title}</span>
                  <span className="rp-toc-short">{item.short}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Chapter n={1} title="Quotes lived in inboxes" alt>
        <p className="rp-beat">
          A customer who wanted a price had two options: write an email and wait, or try a bot that{" "}
          <span className="rp-rust">didn&apos;t understand the question.</span>
        </p>
        <p className="rp-copy">
          The old generic bot had UX problems and couldn&apos;t answer what customers expected.
          People got tired, stopped coming back, and went back to email and calls, which landed on
          BluJay&apos;s support and sales teams.
        </p>
        <div className="rp-ba">
          <div>
            <span className="rp-tag rp-tag-before">Before</span>
            <div className="rp-inbox" role="img" aria-label="Illustrative inbox of a quote request">
              <div className="rp-inbox-bar">
                Inbox
                <span>· 3 messages, no quote yet</span>
              </div>
              {inboxRows.map((row) => (
                <div className="rp-inbox-row" key={row.subject}>
                  <div className="rp-inbox-meta">
                    <span>{row.from}</span>
                    <span>{row.when}</span>
                  </div>
                  <b>{row.subject}</b>
                  {row.preview ? <p>{row.preview}</p> : null}
                </div>
              ))}
            </div>
            <div className="rp-bot-fail">
              <p className="rp-line-user">I need a quote for a 20ft container</p>
              <p className="rp-line-bot rp-fail">
                Sorry, I didn&apos;t understand that. Please choose from the menu.
              </p>
            </div>
            <p className="rp-note">
              Illustrative, based on how customers and staff described the old process.
            </p>
          </div>
          <span className="rp-arrow rp-arrow-m" aria-hidden>
            ↓
          </span>
          <span className="rp-arrow rp-arrow-d" aria-hidden>
            →
          </span>
          <div>
            <span className="rp-tag rp-tag-after">After</span>
            <RippeyChat />
          </div>
        </div>
        <div className="rp-cards rp-cards-3">
          {problemCards.map((card) => (
            <article className="rp-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </Chapter>

      <Chapter n={2} title="Everyone in the chain had a say">
        <p className="rp-beat">
          We spoke to the people asking the questions and{" "}
          <span className="rp-rust">the people answering them.</span>
        </p>
        <p className="rp-eyebrow" style={{ marginTop: 24 }}>
          Who we spoke to
        </p>
        <div className="rp-cards rp-cards-3">
          {whoCards.map((card) => (
            <article className="rp-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
        <div className="rp-cards rp-cards-2">
          <article className="rp-card">
            <h3>Areas of concern</h3>
            <ul>
              {concernItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="rp-card">
            <h3>Primary goals</h3>
            <ul>
              {goalItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </Chapter>

      <Chapter n={3} title="Three jobs the bot had to do" alt>
        <p className="rp-beat">
          Tracking, quoting and support — the three reasons anyone opened the chat.
        </p>
        <div className="rp-share">
          <p>Share of these requests now handled in the bot</p>
          {shareBars.map((bar) => (
            <div className="rp-share-row" key={bar.label}>
              <span>
                {bar.label}
                <b>{bar.pct}%</b>
              </span>
              <div className="rp-track">
                <i className="rp-fill" style={{ "--rp-w": `${bar.pct}%` } as CSSProperties} />
              </div>
            </div>
          ))}
        </div>
        <div className="rp-cards rp-cards-3">
          {flows.map((flow) => (
            <article className="rp-card" key={flow.title}>
              <h3>{flow.title}</h3>
              <div className="rp-steps">
                {flow.steps.map((step, i) => (
                  <span className="rp-step" key={step}>
                    <i>{i + 1}</i>
                    {step}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Chapter>

      <Chapter n={4} title="A four-week sprint" navy>
        <p className="rp-beat">
          Project understanding into UX into UI, overlapping so the prototype was never waiting on
          a blank week.
        </p>
        <div className="rp-gantt">
          {gantt.map((row) => {
            const left = (row.start / weeks) * 100;
            const width = ((row.end - row.start) / weeks) * 100;
            return (
              <div className="rp-gantt-row" key={row.label}>
                <div className="rp-gantt-label">
                  {row.label}
                  <span>{row.range}</span>
                </div>
                <div className="rp-gantt-track">
                  <span
                    className="rp-gantt-bar"
                    style={
                      {
                        "--rp-left": `${left}%`,
                        "--rp-w": `${width}%`,
                        "--rp-color": row.color,
                      } as CSSProperties
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="rp-gantt-ticks">
          {ganttTicks.map((tick) => (
            <span key={tick}>{tick}</span>
          ))}
        </div>
      </Chapter>

      <Chapter n={5} title="Writing the conversation first">
        <p className="rp-beat">
          If the questions were in the right order on paper, colour could wait.
        </p>
        <div className="rp-strip">
          {chatWires.map((shot) => (
            <Figure shot={shot} key={shot.src} />
          ))}
        </div>
        <p className="rp-eyebrow">On the BluJay website</p>
        <div className="rp-site">
          {siteWires.map((shot) => (
            <Figure shot={shot} key={shot.src} />
          ))}
        </div>
      </Chapter>

      <Chapter n={6} title="A system for talking" alt>
        <p className="rp-beat">
          One typeface, four colours, and buttons that meant the bot did not have to guess.
        </p>
        <div className="rp-cards rp-cards-4">
          <article className="rp-card">
            <h3>Message formats</h3>
            <div style={{ marginTop: 12 }}>
              <p className="rp-line-user">FCL Quote</p>
              <p className="rp-line-bot" style={{ marginTop: 8 }}>
                Do you require truck pickup?
              </p>
              <div className="rp-typing" aria-hidden style={{ marginTop: 8 }}>
                <i />
                <i />
                <i />
              </div>
            </div>
          </article>
          <article className="rp-card">
            <h3>Buttons &amp; inputs</h3>
            <div className="rp-chips" style={{ marginTop: 12 }}>
              <span className="rp-chip">Email copy</span>
              <span className="rp-chip rp-chip-fill">Book order</span>
            </div>
            <p className="rp-input-demo">Your email / pauljones@hotmail.co</p>
            <div className="rp-msg-field">
              <img src="/work/rippey/ui-attach.svg" alt="" width={20} height={20} />
              Send us a message!
            </div>
          </article>
          <article className="rp-card">
            <h3>Open Sans scale</h3>
            <div className="rp-type">
              {typeScale.map((row) => (
                <p
                  key={row.name}
                  className={
                    row.name === "H1"
                      ? "rp-type-h1"
                      : row.name === "H2"
                        ? "rp-type-h2"
                        : row.name === "Button"
                          ? "rp-type-btn"
                          : "rp-type-body"
                  }
                >
                  {row.name} · {row.weight} · {row.size}
                </p>
              ))}
            </div>
          </article>
          <article className="rp-card">
            <h3>Colour</h3>
            <div className="rp-swatches">
              {swatches.map((swatch) => (
                <button
                  type="button"
                  key={swatch.hex}
                  className="rp-swatch"
                  aria-label={`${swatch.name} ${swatch.hex}`}
                  onClick={async () => {
                    setCopied(swatch.hex);
                    try {
                      await navigator.clipboard.writeText(swatch.hex);
                    } catch {
                      /* show HEX even if clipboard is blocked */
                    }
                  }}
                >
                  <i className="rp-chip-color" style={{ background: swatch.hex }} />
                  <span>
                    {swatch.name}
                    <br />
                    {swatch.hex}
                  </span>
                </button>
              ))}
            </div>
            <p className="rp-copied" aria-live="polite">
              {copied ? `${copied} copied` : "Tap a swatch to copy HEX"}
            </p>
          </article>
        </div>
        <p className="rp-eyebrow">14 launch-icon ideas → one Rippey</p>
        <div className="rp-icons">
          {iconIdeas.map((shot, i) => (
            <div className={cn("rp-icon", i === 13 && "rp-icon-final")} key={shot.src}>
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                loading="eager"
              />
              {i === 13 ? <span className="rp-final-pill">FINAL</span> : null}
            </div>
          ))}
        </div>
      </Chapter>

      <Chapter n={7} title="Meet Rippey">
        <p className="rp-beat">
          Two jobs on the welcome screen. A quote that can be booked and paid before anyone leaves.
        </p>
        <figure style={{ margin: "24px 0 0" }}>
          <div className="rp-frame">
            <Image
              src={laptopShot.src}
              alt={laptopShot.alt}
              width={laptopShot.width}
              height={laptopShot.height}
              loading="eager"
            />
          </div>
        </figure>
        <div className="rp-meet">
          {meetPhones.map((shot) => (
            <Figure shot={shot} key={shot.caption} />
          ))}
        </div>
        <p className="rp-eyebrow">The quote flow, step by step</p>
        <div className="rp-quote-flow">
          {quoteSteps.map((shot, i) => (
            <div className="rp-step-shot" key={shot.src}>
              <span className="rp-num-circle">{i + 1}</span>
              <Figure shot={shot} />
            </div>
          ))}
        </div>
      </Chapter>

      <Chapter n={8} title="What happened after launch" alt>
        <p className="rp-beat">
          Customers stopped waiting on email, the call centre got quieter, and{" "}
          <span className="rp-rust">quotes started turning into paid bookings</span> inside the
          chat.
        </p>
        <div className="rp-results">
          <article className="rp-card">
            <h3>For sales · every month</h3>
            {salesBars.map((bar) => (
              <div className="rp-metric" key={bar.label}>
                <div className="rp-metric-top">
                  <span>
                    <b>{bar.value}</b> {bar.label}
                  </span>
                  <span>{bar.pct}</span>
                </div>
                <div className="rp-track">
                  <i
                    className="rp-fill"
                    style={
                      {
                        "--rp-w": `${bar.width}%`,
                        background: bar.color,
                      } as CSSProperties
                    }
                  />
                </div>
              </div>
            ))}
            <p className="rp-note">
              Bars and % are against quote requests. Bookings are paid inside the chat. 5K quote
              requests are about 20% of all conversations.
            </p>
            <div className="rp-revenue">
              <b>~20%</b>
              <span>of revenue influenced by the bot (team estimate)</span>
            </div>
          </article>
          <div className="rp-zero">
            <b>0</b>
            <p>requests to speak with a human</p>
            <small>Customers finished what they came for without asking for a person.</small>
          </div>
        </div>
        <div className="rp-cards rp-cards-2">
          <article className="rp-card">
            <h3>For customers and support · % of 100</h3>
            {supportBars.map((bar) => (
              <div className="rp-metric" key={bar.label}>
                <div className="rp-metric-top">
                  <span>{bar.label}</span>
                  <b>{bar.value}</b>
                </div>
                <div className={cn("rp-track", bar.hatch && "rp-hatch")}>
                  <i className="rp-fill" style={{ "--rp-w": `${bar.width}%` } as CSSProperties} />
                </div>
                <p className="rp-note">{bar.note}</p>
              </div>
            ))}
          </article>
          <article className="rp-card">
            <h3>Volume · every month</h3>
            {volumeBars.map((bar) => (
              <div className="rp-metric" key={bar.label}>
                <div className="rp-metric-top">
                  <span>
                    <b>{bar.value}</b> {bar.label}
                  </span>
                  <span>{bar.pct}</span>
                </div>
                <div className="rp-track">
                  <i
                    className="rp-fill"
                    style={
                      {
                        "--rp-w": `${bar.width}%`,
                        background: bar.color,
                      } as CSSProperties
                    }
                  />
                </div>
              </div>
            ))}
            <div className="rp-plain">
              {volumeNotes.map((item) => (
                <div className="rp-stat" key={item.label}>
                  <b>{item.value}</b>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </Chapter>

      <Chapter n={9} title="What I took away">
        <p className="rp-beat">
          Four things that still hold when the product is a conversation, not a screen.
        </p>
        <div className="rp-learns">
          {learnings.map((item) => (
            <article className="rp-learn" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <a className="rp-next" href="/work/fielda">
          Next story → Fielda
        </a>
      </Chapter>
    </article>
  );
}

function Chapter({
  n,
  title,
  alt,
  navy,
  children,
}: {
  n: number;
  title: string;
  alt?: boolean;
  navy?: boolean;
  children: React.ReactNode;
}) {
  const meta = chapters[n - 1];
  return (
    <section
      id={meta.id}
      data-rp-chapter={meta.id}
      className={cn("rp-band rp-chapter", alt && "rp-band-alt", navy && "rp-band-navy")}
    >
      <div className="rp-wrap">
        <p className="rp-kicker">Chapter {n}</p>
        <h2 className="rp-h2">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Figure({ shot }: { shot: Shot }) {
  return (
    <figure style={{ margin: 0, minWidth: 0 }}>
      <div className="rp-frame">
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          loading="eager"
        />
      </div>
      {shot.caption ? <figcaption className="rp-cap">{shot.caption}</figcaption> : null}
    </figure>
  );
}

function RippeyChat() {
  return (
    <div className="rp-chat" role="img" aria-label="Illustrative Rippey chat completing a quote">
      <div className="rp-chat-bar">
        <img src="/work/rippey/icon-idea-14.webp" alt="" width={220} height={204} />
        <span>
          Rippey
          <small>Online</small>
        </span>
        <span className="rp-chat-tools">
          <img src="/work/rippey/ui-back.svg" alt="" width={18} height={18} />
          <img src="/work/rippey/ui-restart.svg" alt="" width={18} height={18} />
        </span>
      </div>
      <div className="rp-chat-body">
        {rippeyLines.map((line, i) => {
          if (line.kind === "user") {
            return (
              <p className="rp-line-user" key={i}>
                {line.text}
              </p>
            );
          }
          if (line.kind === "bot") {
            return (
              <p className="rp-line-bot" key={i}>
                {line.text}
              </p>
            );
          }
          if (line.kind === "chips") {
            return (
              <div className="rp-chips" key={i}>
                {line.options.map((opt) => (
                  <span className="rp-chip" key={opt}>
                    {opt}
                  </span>
                ))}
              </div>
            );
          }
          if (line.kind === "quote") {
            return (
              <div className="rp-quote" key={i}>
                <p>Miami → Antwerp</p>
                <p>Container 20 ft</p>
                <strong>$650</strong>
                <div className="rp-quote-actions">
                  <span className="rp-chip">Email copy</span>
                  <span className="rp-chip rp-chip-fill">Book order</span>
                </div>
              </div>
            );
          }
          return (
            <p className="rp-line-bot" key={i}>
              {line.text}
            </p>
          );
        })}
      </div>
      <div className="rp-chat-input">
        <img src="/work/rippey/ui-attach.svg" alt="" width={20} height={20} />
        <span>Send us a message!</span>
      </div>
    </div>
  );
}
