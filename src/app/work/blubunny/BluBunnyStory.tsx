"use client";

import { StudyBackLink } from "@/components/StudyBackLink";
import { cn } from "@/lib/cn";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import {
  chapters,
  consoleRows,
  dashboardWire,
  facts,
  gantt,
  ganttTicks,
  headacheCards,
  heroShot,
  iaModules,
  learnings,
  outcomes,
  researchCards,
  researchStats,
  results,
  siteDesktop,
  siteMobile,
  smallWires,
  swoosh,
  swatches,
  visualRules,
  weeks,
  woodenHand,
  type IaModule,
  type Shot,
} from "./content";
import "./blubunny.css";

export function BluBunnyStory({ className }: { className?: string }) {
  const [progress, setProgress] = useState(0);
  const [chapter, setChapter] = useState("Intro · BluBunny");
  const [moduleId, setModuleId] = useState<"seller" | "admin">("seller");
  const [copied, setCopied] = useState<string | null>(null);
  const ia = iaModules.find((m) => m.id === moduleId) ?? iaModules[0];

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
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-bb-chapter]"));
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const id = visible.target.getAttribute("data-bb-chapter");
        const found = chapters.find((c) => c.id === id);
        if (found) setChapter(`Ch ${found.n} · ${found.short}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <article className={cn("bb", className)}>
      <div
        className="bb-progress"
        aria-hidden
        style={{ "--bb-progress": `${progress}%` } as CSSProperties}
      >
        <i />
      </div>
      <a className="bb-pill" href="#bb-toc">
        {chapter}
      </a>

      <section className="bb-band">
        <div className="bb-wrap">
          <StudyBackLink href="/#featured-work" label="Back to work" variant="minimal" />
          <div className="bb-hero" style={{ marginTop: 28 }}>
            <div>
              <span className="bb-logo">BluBunny</span>
              <p className="bb-eyebrow">Case study · E-commerce · Seller &amp; admin web app</p>
              <h1 className="bb-h1" style={{ marginTop: 12 }}>
                One console for sellers,{" "}
                <span className="bb-rust">every marketplace they sell on.</span>
              </h1>
              <p className="bb-lede">
                This is the story of how we took small sellers from &quot;one more marketplace
                means one more headache&quot; to setting up in about 5 minutes. I led the design
                of BluBunny&apos;s seller and admin app, from the first survey to 400
                hand-off-ready screens.
              </p>
            </div>
            <div className="bb-hero-art">
              <Image
                src={heroShot.src}
                alt={heroShot.alt}
                width={heroShot.width}
                height={heroShot.height}
                priority
                loading="eager"
              />
            </div>
          </div>

          <dl className="bb-facts">
            {facts.map((fact) => (
              <div className="bb-fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="bb-end">
            <h2>The ending first · 2 months after launch</h2>
            <div className="bb-stats">
              {outcomes.map((item) => (
                <div className="bb-stat" key={item.label}>
                  <b className={item.rust ? "bb-rust" : undefined}>{item.value}</b>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <ol className="bb-toc" id="bb-toc">
            {chapters.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>
                  <span className="bb-toc-n">{String(item.n).padStart(2, "0")}</span>
                  <span className="bb-toc-title">{item.title}</span>
                  <span className="bb-toc-short">{item.short}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Chapter n={1} title="Every new marketplace was a new headache" alt>
        <p className="bb-beat">
          A seller who wanted to grow had to list the same product again on every channel, then
          wait while the same data was{" "}
          <span className="bb-rust">checked, and checked again.</span>
        </p>
        <div className="bb-cards bb-cards-3">
          {headacheCards.map((card) => (
            <article className="bb-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
        <blockquote className="bb-quote">
          “So we set one goal: give sellers confidence by collecting the right information once
          and using it everywhere.”
        </blockquote>
      </Chapter>

      <Chapter n={2} title="We listened before we drew">
        <p className="bb-beat">
          Before a single screen, we sat with sellers and mapped the products they already used.
        </p>
        <div className="bb-research-stats">
          {researchStats.map((item) => (
            <div className="bb-stat" key={item.label}>
              <b>{item.value}</b>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="bb-cards bb-cards-2">
          {researchCards.map((card) => (
            <article className="bb-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </Chapter>

      <Chapter n={3} title="A 28-week plan" alt>
        <p className="bb-beat">
          Seven months, five overlapping phases, one hand-off into engineering.
        </p>
        <div className="bb-gantt">
          {gantt.map((row) => {
            const left = ((row.start - 1) / weeks) * 100;
            const width = ((row.end - row.start + 1) / weeks) * 100;
            return (
              <div className="bb-gantt-row" key={row.label}>
                <div className="bb-gantt-label">
                  {row.label}
                  <span>{row.range}</span>
                </div>
                <div className="bb-gantt-track">
                  <span
                    className="bb-gantt-bar"
                    style={
                      {
                        "--bb-left": `${left}%`,
                        "--bb-w": `${width}%`,
                        "--bb-color": row.color,
                      } as CSSProperties
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="bb-gantt-ticks">
          {ganttTicks.map((tick) => (
            <span key={tick}>Wk {tick}</span>
          ))}
        </div>
      </Chapter>

      <Chapter n={4} title="Mapping two products into one">
        <p className="bb-beat">
          One system. Two jobs: run a shop, and run the network of shops.
        </p>
        <div className="bb-toggle" role="tablist" aria-label="Product module">
          {iaModules.map((mod) => (
            <button
              key={mod.id}
              type="button"
              role="tab"
              aria-pressed={moduleId === mod.id}
              onClick={() => setModuleId(mod.id)}
            >
              {mod.label}
            </button>
          ))}
        </div>
        <IaBoard module={ia} />
      </Chapter>

      <Chapter n={5} title="Sketching every flow in grey" alt>
        <p className="bb-beat">
          Grey boxes first. If the path was clear without colour, colour could wait.
        </p>
        <figure style={{ margin: "24px 0 0" }}>
          <div className="bb-frame">
            <Image
              src={dashboardWire.src}
              alt={dashboardWire.alt}
              width={dashboardWire.width}
              height={dashboardWire.height}
              loading="eager"
            />
          </div>
          <figcaption className="bb-cap">{dashboardWire.caption}</figcaption>
        </figure>
        <div className="bb-wires">
          {smallWires.map((shot) => (
            <figure key={shot.src} style={{ margin: 0, minWidth: 0 }}>
              <div className="bb-frame">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  loading="eager"
                />
              </div>
              <figcaption className="bb-cap">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="bb-badge">
          <Image src={swoosh.src} alt="" width={swoosh.width} height={swoosh.height} loading="eager" />
          <div>
            <div className="bb-badge-count">
              <b>400</b>
              <span>Total screens</span>
            </div>
            <p style={{ marginTop: 10 }}>
              Across the seller and admin modules, each screen specced and handed to engineering
              through Zeplin.
            </p>
          </div>
        </div>
      </Chapter>

      <Chapter n={6} title="Giving it BluBunny's voice">
        <p className="bb-beat">
          The brand already had a voice. The console had to speak it without shouting.
        </p>
        <div className="bb-rules">
          {visualRules.map((rule) => (
            <article className="bb-rule" key={rule.title}>
              <h3>{rule.title}</h3>
              <p>{rule.body}</p>
            </article>
          ))}
        </div>
        <div className="bb-palette-head">
          <Image
            className="bb-hand"
            src={woodenHand.src}
            alt={woodenHand.alt}
            width={woodenHand.width}
            height={woodenHand.height}
            loading="eager"
          />
          <p className="bb-eyebrow">Colour</p>
          <h3 className="bb-h2" style={{ fontSize: "1.4rem" }}>
            Tap a swatch to copy its HEX.
          </h3>
        </div>
        <div className="bb-swatches">
          {swatches.map((swatch) => (
            <button
              key={swatch.hex}
              type="button"
              className="bb-swatch"
              onClick={async () => {
                setCopied(swatch.hex);
                try {
                  await navigator.clipboard.writeText(swatch.hex);
                } catch {
                  /* still show the HEX; some browsers block clipboard without a user gesture grant */
                }
              }}
            >
              <i className="bb-chip" style={{ background: swatch.hex }} />
              <span>
                {swatch.name}
                <br />
                {swatch.hex}
              </span>
            </button>
          ))}
        </div>
        <p className="bb-copied" aria-live="polite">
          {copied ? `${copied} copied` : "\u00a0"}
        </p>
        <div className="bb-specs">
          <div className="bb-spec bb-spec-open">
            <b>Aa Open Sans</b>
            <span>Headings and UI labels in the product</span>
          </div>
          <div className="bb-spec bb-spec-roboto">
            <b>Aa 0123 Roboto</b>
            <span>Numbers, tables and dense data</span>
          </div>
        </div>
      </Chapter>

      <Chapter n={7} title="The console comes to life" alt>
        <p className="bb-beat">
          Colour, type and the grey map, assembled into the screens sellers and admins use.
        </p>
        <div className="bb-console">
          {consoleRows.map((row) => (
            <div className="bb-console-row" key={row.title}>
              <div className="bb-console-copy">
                <p className="bb-eyebrow">{row.eyebrow}</p>
                <h3 className="bb-h2" style={{ marginTop: 8, fontSize: "1.6rem" }}>
                  {row.title}
                </h3>
                <p className="bb-copy">{row.body}</p>
                <ul>
                  {row.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <Laptop shot={row.shot} />
            </div>
          ))}
        </div>
        <p className="bb-note">
          Figures inside the screens are sample design data, not live results.
        </p>
      </Chapter>

      <Chapter n={8} title="Opening the front door">
        <p className="bb-beat">
          The console needed a public face: a site that could explain the product before a seller
          ever logged in.
        </p>
        <div className="bb-sites">
          <PanFrame
            kind="desk"
            shot={siteDesktop}
            label="Desktop marketing site, scrolling top to bottom"
            chrome
          />
          <PanFrame
            kind="phone"
            shot={siteMobile}
            label="Mobile marketing site, scrolling top to bottom"
          />
        </div>
        <p className="bb-note">
          Figures on the website are the client&apos;s marketing claims, not results from this
          project. Hover or tap to pause.
        </p>
      </Chapter>

      <Chapter n={9} title="What happened after launch" alt>
        <p className="bb-beat">
          Two months in, the numbers we could stand behind.
        </p>
        <div className="bb-results">
          {results.map((item) => (
            <article className="bb-result" key={item.value}>
              <span className="bb-num">{item.value}</span>
              <b>{item.decision}</b>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </Chapter>

      <Chapter n={10} title="What I took away">
        <p className="bb-beat">
          Four things I still use when a product has to feel simple at scale.
        </p>
        <div className="bb-learns">
          {learnings.map((item) => (
            <article className="bb-learn" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <a className="bb-next" href="/work/employee-center">
          Next story → Employee Center
        </a>
      </Chapter>
    </article>
  );
}

function Chapter({
  n,
  title,
  alt,
  children,
}: {
  n: number;
  title: string;
  alt?: boolean;
  children: React.ReactNode;
}) {
  const meta = chapters[n - 1];
  return (
    <section
      id={meta.id}
      data-bb-chapter={meta.id}
      className={cn("bb-band bb-chapter", alt && "bb-band-alt")}
    >
      <div className="bb-wrap">
        <p className="bb-kicker">Chapter {n}</p>
        <h2 className="bb-h2">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function IaBoard({ module }: { module: IaModule }) {
  return (
    <div>
      <div className="bb-ia-flow">
        {module.flow.map((node, i) => (
          <span className="bb-flow-item" key={node}>
            {i > 0 ? (
              <span className="bb-ia-arrow" aria-hidden>
                →
              </span>
            ) : null}
            <span className="bb-ia-node">{node}</span>
          </span>
        ))}
      </div>
      <div className="bb-ia-branches">
        {module.branches.map((branch) => (
          <article
            key={branch.title}
            className={cn("bb-branch", branch.tint === "coral" ? "bb-branch-coral" : "bb-branch-indigo")}
          >
            <h3>{branch.title}</h3>
            <ul>
              {branch.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

function Laptop({ shot }: { shot: Shot }) {
  return (
    <div className="bb-laptop">
      <div className="bb-laptop-lid">
        <div className="bb-laptop-screen">
          <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} loading="eager" />
        </div>
      </div>
      <div className="bb-laptop-base" />
    </div>
  );
}

function PanFrame({
  kind,
  shot,
  label,
  chrome,
}: {
  kind: "desk" | "phone";
  shot: Shot;
  label: string;
  chrome?: boolean;
}) {
  const viewRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const measure = useCallback(() => {
    const view = viewRef.current;
    const img = view?.querySelector("img");
    if (!view || !img) return;
    const dist = Math.max(0, img.offsetHeight - view.clientHeight);
    view.style.setProperty("--bb-scroll", `${dist}px`);
  }, []);

  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    const img = view.querySelector("img");
    const ro = new ResizeObserver(measure);
    ro.observe(view);
    if (img) {
      ro.observe(img);
      if (img.complete) measure();
      else img.addEventListener("load", measure);
    }
    return () => {
      ro.disconnect();
      img?.removeEventListener("load", measure);
    };
  }, [measure]);

  const frame = (
    <div
      ref={viewRef}
      className={kind === "desk" ? "bb-view" : "bb-phone-view"}
    >
      <Image
        className={kind === "desk" ? "bb-pan" : "bb-pan-m"}
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        onLoad={measure}
        loading="eager"
      />
    </div>
  );

  if (kind === "phone") {
    return (
      <button
        type="button"
        className={cn("bb-phone", paused && "bb-paused")}
        aria-label={`${label}. Tap to pause or resume.`}
        aria-pressed={paused}
        onClick={() => setPaused((v) => !v)}
      >
        {frame}
      </button>
    );
  }

  return (
    <button
      type="button"
      className={cn("bb-browser", paused && "bb-paused")}
      aria-label={`${label}. Tap to pause or resume.`}
      aria-pressed={paused}
      onClick={() => setPaused((v) => !v)}
      style={{ display: "block", width: "100%", padding: 0, textAlign: "left" }}
    >
      {chrome ? (
        <div className="bb-chrome">
          <span className="bb-dots" aria-hidden>
            <i />
            <i />
            <i />
          </span>
          <span className="bb-url">blubunny.com</span>
        </div>
      ) : null}
      {frame}
    </button>
  );
}
