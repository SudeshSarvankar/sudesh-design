"use client";

import { TornEdge } from "@/components/TornEdge";
import {
  Bike,
  Car,
  Chai,
  CursorMark,
  FigmaMark,
  Raft,
  Scuba,
  Skydive,
  Trek,
  VercelMark,
} from "@/components/objects/DeskIllustrations";
import { site } from "@/data/site";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export function JournalSection() {
  const [open, setOpen] = useState(false);
  const busy = useRef(false);
  const reduce = useReducedMotion();
  const durationMs = reduce ? 90 : 920;

  const toggle = useCallback(() => {
    if (busy.current) return;
    busy.current = true;
    setOpen((value) => !value);
    window.setTimeout(() => {
      busy.current = false;
    }, durationMs);
  }, [durationMs]);

  const close = useCallback(() => {
    if (busy.current || !open) return;
    busy.current = true;
    setOpen(false);
    window.setTimeout(() => {
      busy.current = false;
    }, durationMs);
  }, [durationMs, open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <section
      id="journal"
      aria-label="Journal"
      className="relative scroll-mt-24"
    >
      <div className="bg-white">
        <TornEdge fill="#f4f0e5" />
      </div>
      <div className="relative flex w-full items-center justify-center overflow-visible bg-cream px-4 py-14 md:h-[918px] md:px-[88px] md:py-0">
        {open ? (
          <button
            type="button"
            tabIndex={-1}
            aria-label="Close journal"
            className="absolute inset-0 z-0 bg-transparent"
            onClick={close}
          />
        ) : null}

        <div
          role="button"
          tabIndex={0}
          aria-expanded={open}
          aria-label={open ? "Close journal" : "Open journal"}
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a")) return;
            toggle();
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              toggle();
            }
          }}
          className="relative z-10 mx-auto w-full max-w-[1040px] cursor-pointer touch-manipulation border-0 bg-transparent p-0 text-left outline-offset-4"
        >
          <JournalBook open={open} reduce={Boolean(reduce)} />
        </div>
      </div>
      <div className="bg-white">
        <TornEdge flip fill="#f4f0e5" />
      </div>
    </section>
  );
}

function JournalBook({ open, reduce }: { open: boolean; reduce: boolean }) {
  const t = reduce
    ? { duration: 0.01 }
    : { duration: 0.95, ease: [0.45, 0.05, 0.2, 1] as const };

  return (
    <div
      className="relative mx-auto h-[min(78vw,680px)] w-full min-h-[440px] max-w-[980px]"
      style={{ perspective: 2200 }}
    >
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-[96%] h-16 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_top,rgba(32,44,61,0.22),transparent_70%)] blur-xl"
        animate={{ width: open ? "78%" : "42%", x: open ? "0%" : "-12%" }}
        transition={t}
      />

      <motion.div
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          x: open || reduce ? "0%" : "-25%",
          rotateX: open ? 4 : 7,
        }}
        transition={t}
      >
        <div
          className="absolute inset-y-0 right-0 w-1/2 overflow-hidden rounded-r-[18px] border border-l-0 border-[#d7e0d4] bg-[#fffcf7] shadow-[18px_22px_40px_rgba(32,44,61,0.12)]"
          style={{ transformOrigin: "left center" }}
        >
          <RightPage />
        </div>

        <div
          aria-hidden
          className="absolute inset-y-[6%] left-1/2 z-20 w-2 -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,#8ea48a,#d5e0d0_45%,#8ea48a)] shadow-[0_0_16px_rgba(32,44,61,0.18)]"
        />

        <motion.div
          className="absolute inset-y-0 right-0 z-30 w-1/2"
          style={{
            transformOrigin: "left center",
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateY: reduce ? (open ? -180 : 0) : open ? -180 : 0,
          }}
          transition={t}
        >
          <div
            className="absolute inset-0 overflow-hidden rounded-[18px] shadow-[12px_20px_36px_rgba(32,44,61,0.18)]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <ClosedCover />
          </div>
          <div
            className="absolute inset-0 overflow-hidden rounded-l-[18px] border border-[#d7e0d4] bg-[#fffcf7] shadow-[-18px_22px_40px_rgba(32,44,61,0.12)]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <LeftPage />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function ClosedCover() {
  return (
    <div className="relative h-full w-full min-h-[340px]">
      <div
        aria-hidden
        className="absolute -right-2 top-3 h-[94%] w-5 rounded-r-[10px]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, #efe4d2 0 2px, #e4d5bc 2px 3px)",
        }}
      />
      <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-[#1f5a45] shadow-[18px_28px_50px_rgba(32,44,61,0.22)]">
        <div className="absolute inset-y-0 left-0 w-3 bg-[#174a38]" />
        <div className="absolute -top-2 left-[18%] h-3 w-10 rounded-sm bg-[#8fbf8a]" />
        <div className="absolute bottom-0 left-[18%] h-10 w-3 rounded-b-sm bg-[#8fbf8a]" />
        <p className="absolute left-1/2 top-10 -translate-x-1/2 font-script text-4xl text-[#e7d7a2] md:text-5xl">
          Journal
        </p>
        <div className="absolute inset-x-6 top-[26%] h-[62%]">
          <span className="absolute left-[6%] top-[6%] rotate-[-12deg] rounded-sm bg-[#f3efe4] px-3 py-3 text-2xl shadow-md">
            🍉
          </span>
          <span className="absolute right-[8%] top-[10%] w-16 rotate-[12deg]">
            <Chai className="h-auto w-full drop-shadow-md" />
          </span>
          <span className="absolute left-[10%] top-[42%] w-[88px] rotate-[8deg]">
            <Bike className="h-auto w-full drop-shadow-md" />
          </span>
          <span className="absolute right-[6%] top-[46%] w-[92px] rotate-[-8deg]">
            <Car className="h-auto w-full drop-shadow-md" />
          </span>
          <span className="absolute bottom-[6%] left-[18%] w-12 rotate-[-6deg]">
            <Trek className="h-auto w-full" />
          </span>
          <span className="absolute bottom-[4%] right-[22%] w-12 rotate-[10deg]">
            <Skydive className="h-auto w-full" />
          </span>
        </div>
      </div>
    </div>
  );
}

function LeftPage() {
  return (
    <div className="notebook-dots relative h-full p-6 text-left md:p-10">
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink/40">
        About
      </p>
      <h2 className="mt-1 font-script text-4xl text-ink md:text-5xl">
        {site.name}
      </h2>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[#e8f1fb] px-3 py-1 text-sm text-[#3a5c86]">
          {site.role}
        </span>
        <span className="font-hand text-lg text-[#3a5c86]">8+ years</span>
      </div>
      <p className="mt-4 max-w-[36ch] text-[13px] leading-relaxed text-ink/65">
        {site.bio}
      </p>
      <ul className="mt-6 space-y-2.5 text-sm text-ink/80">
        {site.timeline.map((item) => (
          <li key={item.label} className="flex items-start justify-between gap-4">
            <span className="flex items-center gap-2">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#7ea0c4]" />
              {item.label}
            </span>
            <span className="shrink-0 text-[12px] text-ink/45">{item.years}</span>
          </li>
        ))}
      </ul>
      <ul className="mt-6 flex flex-wrap gap-1.5">
        {site.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-white/80 px-2.5 py-1 text-[11px] text-ink/60 ring-1 ring-ink/10"
          >
            {skill}
          </li>
        ))}
      </ul>
      <p className="mt-6 font-hand text-[22px] leading-snug text-[#3a5c86]">
        {site.journalLine}
      </p>
      <p className="mt-2 font-hand text-lg text-ink/70">
        {site.taglineAsk}{" "}
        <a
          href={`mailto:${site.email}`}
          className="relative z-30 underline decoration-[#3a5c86]/30 underline-offset-4"
          onClick={(event) => event.stopPropagation()}
          onPointerDown={(event) => event.stopPropagation()}
        >
          {site.email}
        </a>
      </p>
      <p className="mt-5 text-[12px] text-ink/50">{site.location}</p>
    </div>
  );
}

function RightPage() {
  return (
    <div className="notebook-dots relative h-full overflow-hidden p-6 md:p-9">
      <div className="absolute right-5 top-5 flex items-center gap-2">
        <CursorMark className="h-9 w-8 rotate-[12deg] drop-shadow-md" />
        <span className="text-[11px] text-ink/45">Cursor</span>
      </div>
      <div className="mt-2 flex items-start justify-between gap-3">
        <div className="relative w-[46%] max-w-[200px] -rotate-6">
          <div className="rounded-[4px] bg-white p-2 pb-8 shadow-[0_16px_28px_rgba(58,55,50,0.16)]">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#d7c4ae]">
              <Image
                src={site.photo}
                alt={`${site.name} smiling, portrait`}
                fill
                sizes="200px"
                className="object-cover object-[50%_18%]"
              />
            </div>
            <p className="mt-2 text-center font-hand text-lg text-ink/70">
              @{site.firstName}
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-end pt-8">
          <Chai className="h-auto w-[120px] drop-shadow-lg" />
          <p className="mt-1 font-hand text-xl text-ink/70">Chai Lover</p>
        </div>
      </div>
      <div className="mt-2 flex items-end justify-between gap-3 px-1">
        <div className="w-[46%] -rotate-3">
          <Bike className="h-auto w-full drop-shadow-md" />
        </div>
        <div className="w-[48%] rotate-3">
          <Car className="h-auto w-full drop-shadow-md" />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-4 items-end gap-2">
        <figure className="text-center">
          <Skydive className="mx-auto h-auto w-14" />
          <figcaption className="mt-1 text-[10px] text-ink/45">Skydiving</figcaption>
        </figure>
        <figure className="text-center">
          <Scuba className="mx-auto h-auto w-14" />
          <figcaption className="mt-1 text-[10px] text-ink/45">Scuba</figcaption>
        </figure>
        <figure className="text-center">
          <Trek className="mx-auto h-auto w-14" />
          <figcaption className="mt-1 text-[10px] text-ink/45">Trekking</figcaption>
        </figure>
        <figure className="text-center">
          <Raft className="mx-auto h-auto w-14" />
          <figcaption className="mt-1 text-[10px] text-ink/45">Rafting</figcaption>
        </figure>
      </div>
      <div className="mt-5 flex items-end justify-between">
        <div className="flex items-center gap-3">
          <FigmaMark className="h-12 w-9 -rotate-6 drop-shadow-md" />
          <VercelMark className="h-10 w-11 rotate-6 drop-shadow-md" />
        </div>
        <p className="font-hand text-[15px] text-ink/50">craft, not logos</p>
      </div>
    </div>
  );
}
