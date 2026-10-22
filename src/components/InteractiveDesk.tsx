"use client";

import { ChaosCleanToggle } from "@/components/ChaosCleanToggle";
import { InteractiveObject } from "@/components/InteractiveObject";
import {
  Book,
  Camera,
  Chai,
  Folder,
  Headphones,
  Journal,
  Lamp,
  Monitor,
  Plant,
  Skydive,
  SparkCube,
  Stamps,
  StickyNotes,
  Vinyl,
} from "@/components/objects/DeskIllustrations";
import { useDeskMode } from "@/context/DeskModeContext";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type ObjectState = {
  lamp: boolean;
  vinyl: boolean;
  headphones: boolean;
  plant: boolean;
  camera: boolean;
  journal: boolean;
  stamps: boolean;
  monitor: boolean;
  sticky: boolean;
  coffee: boolean;
  book: boolean;
  skydive: boolean;
};

const initialState: ObjectState = {
  lamp: false,
  vinyl: false,
  headphones: false,
  plant: false,
  camera: false,
  journal: false,
  stamps: false,
  monitor: false,
  sticky: false,
  coffee: false,
  book: false,
  skydive: false,
};

const spring = { type: "spring" as const, stiffness: 160, damping: 22 };

export function InteractiveDesk() {
  const { mode, setMode, scrollHeroTo } = useDeskMode();
  const chaos = mode === "chaos";
  const focus = mode === "focus";
  const reduce = useReducedMotion();
  const [state, setState] = useState<ObjectState>(initialState);
  const audioRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<{ stop: () => void } | null>(null);
  const jumpingRef = useRef(false);
  const touchStartY = useRef<number | null>(null);
  const modeRef = useRef(mode);
  modeRef.current = mode;

  const toggle = useCallback((key: keyof ObjectState) => {
    setState((current) => ({ ...current, [key]: !current[key] }));
  }, []);

  useEffect(() => {
    if (!state.vinyl) {
      sourceRef.current?.stop();
      sourceRef.current = null;
      return;
    }

    const AudioCtx =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = audioRef.current ?? new AudioCtx();
    audioRef.current = ctx;
    void ctx.resume();

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 720;
    const gain = ctx.createGain();
    gain.gain.value = 0.03;
    const osc = ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = 110;
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.18;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 8;
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    lfo.start();
    sourceRef.current = {
      stop: () => {
        osc.stop();
        lfo.stop();
      },
    };

    return () => {
      sourceRef.current?.stop();
      sourceRef.current = null;
    };
  }, [state.vinyl]);

  useEffect(() => {
    const jump = (next: "chaos" | "clean") => {
      if (jumpingRef.current) return;
      jumpingRef.current = true;
      setMode(next);
      scrollHeroTo(next);
      window.setTimeout(() => {
        jumpingRef.current = false;
      }, reduce ? 50 : 720);
    };

    const inHeroPin = () => {
      const el = document.getElementById("hero");
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.top <= 8 && rect.bottom >= window.innerHeight * 0.55;
    };

    const desktop = window.matchMedia("(min-width: 1024px)");

    const onWheel = (event: WheelEvent) => {
      if (!desktop.matches || !inHeroPin() || jumpingRef.current) return;
      const current = modeRef.current;
      if (event.deltaY > 28 && current !== "clean") {
        event.preventDefault();
        jump("clean");
        return;
      }
      if (event.deltaY < -28 && current !== "chaos") {
        event.preventDefault();
        jump("chaos");
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      if (!desktop.matches) return;
      touchStartY.current = event.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (
        !desktop.matches ||
        touchStartY.current == null ||
        !inHeroPin() ||
        jumpingRef.current
      ) {
        return;
      }
      const currentY = event.touches[0]?.clientY;
      if (currentY == null) return;
      const delta = touchStartY.current - currentY;
      const current = modeRef.current;
      if (delta > 36 && current !== "clean") {
        event.preventDefault();
        touchStartY.current = currentY;
        jump("clean");
      } else if (delta < -36 && current !== "chaos") {
        event.preventDefault();
        touchStartY.current = currentY;
        jump("chaos");
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    const onScroll = () => {
      if (!desktop.matches || jumpingRef.current) return;
      const el = document.getElementById("hero");
      if (!el) return;
      const progress =
        (window.scrollY - el.offsetTop) / Math.max(1, window.innerHeight);
      if (progress < 0.4) {
        if (modeRef.current === "clean") setMode("chaos");
        return;
      }
      if (progress < 1.2 && modeRef.current === "chaos") {
        setMode("clean");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reduce, setMode, scrollHeroTo]);

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative isolate h-[100svh] overflow-x-clip bg-cream lg:h-[200vh]"
    >
      <div className="flex h-[100svh] flex-col overflow-x-clip px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-[5.25rem] lg:sticky lg:top-0 lg:h-screen lg:px-6 lg:pb-8 lg:pt-28">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 hidden lg:block"
        animate={{ opacity: state.lamp ? 0.5 : 0 }}
        transition={{ duration: 0.45 }}
        style={{
          background:
            "radial-gradient(circle at 18% 42%, rgba(255,236,176,0.75), transparent 32%)",
        }}
      />

      <div className="relative mx-auto min-h-0 w-full flex-1 max-w-[1280px]">
        <MobileCopy chaos={chaos} />

        <div className="absolute inset-0 hidden lg:block">
        <motion.div
          className={cn(
            "absolute inset-x-[2%] inset-y-[4%] overflow-visible sm:inset-x-[6%]",
            chaos ? "desk-grid" : "",
          )}
          animate={{ opacity: chaos ? 1 : 0 }}
        />

        <Phrase
          chaos={chaos}
          chaosPos={{ left: "22%", top: "9%" }}
        >
          THE WORLD IS
          <br />
          FULL OF
        </Phrase>
        <Phrase
          chaos={chaos}
          chaosPos={{ left: "52%", top: "26%" }}
        >
          UNFINISHED
          <br />
          IDEAS
        </Phrase>
        <Phrase
          chaos={chaos}
          chaosPos={{ left: "22%", top: "46%" }}
        >
          &amp; FRUSTRATING
          <br />
          EXPERIENCES
        </Phrase>
        <motion.p
          className="absolute z-10 whitespace-nowrap bg-[#ead7b8] px-2.5 py-1 font-serif text-[17px] font-bold italic text-ink"
          animate={
            chaos
              ? { left: "62%", top: "56%", opacity: 1 }
              : { opacity: 0, left: "62%", top: "56%" }
          }
          transition={spring}
        >
          I design the path
        </motion.p>
        <Phrase
          chaos={chaos}
          chaosPos={{ left: "62%", top: "61%" }}
        >
          THAT MAKE
          <br />
          THEM
          <br />
          SEAMLESS
        </Phrase>
        <motion.a
          href={site.social.email}
          className="absolute z-10 font-hand text-[17px] text-ink/70 underline decoration-ink/20 underline-offset-4"
          animate={
            chaos
              ? { left: "11%", top: "82%", opacity: 1 }
              : { left: "4%", top: "88%", opacity: 0 }
          }
          transition={spring}
        >
          {site.email}
        </motion.a>

        <motion.div
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6 text-center"
          animate={{ opacity: chaos ? 0 : 1, y: chaos ? 12 : 0 }}
          transition={spring}
        >
          <div className="max-w-xl">
            <h1 className="font-script text-[clamp(2.6rem,7vw,4.4rem)] leading-[1.15] text-[#3e3e42]">
              {site.name}
            </h1>
            <p className="mt-3 text-[17px] text-ink/80">{site.cleanRole}</p>
            <p className="mt-1 text-[17px] text-ink/80">{site.expertRole}</p>
            <p className="mx-auto mt-7 max-w-lg font-hand text-[clamp(1.35rem,3vw,1.85rem)] leading-snug text-ink/80">
              {site.tagline}
            </p>
            <p className="mx-auto mt-3 max-w-lg font-hand text-[clamp(1.15rem,2.4vw,1.45rem)] text-ink/70">
              {site.taglineAsk}{" "}
              <a
                href={site.social.email}
                className="pointer-events-auto underline decoration-ink/25 underline-offset-4 transition hover:text-ink"
              >
                {site.email}
              </a>
            </p>
          </div>
        </motion.div>

        <Slot chaos={chaos} focus={focus} chaosPos={{ left: "6%", top: "50%", width: 88 }} cleanPos={{ left: "4%", top: "16%", width: 124 }}>
          <InteractiveObject label="Go skydiving" hint="JUMP" pressed={state.skydive} float={chaos && !reduce} onActivate={() => toggle("skydive")}>
            <motion.div
              className="rotate-[-8deg]"
              animate={{ y: state.skydive ? [0, -18, 0] : 0 }}
              transition={state.skydive ? { duration: 0.9, ease: "easeInOut" } : { duration: 0.3 }}
              onAnimationComplete={() => {
                if (state.skydive) setState((current) => ({ ...current, skydive: false }));
              }}
            >
              <Skydive className="h-auto w-full drop-shadow-[0_12px_18px_rgba(58,55,50,0.16)]" />
            </motion.div>
          </InteractiveObject>
        </Slot>

        <Slot chaos={chaos} focus={focus} chaosPos={{ left: "8%", top: "22%", width: 150 }} cleanPos={{ left: "-6%", top: "24%", width: 190 }}>
          <InteractiveObject label="Toggle desk lamp" hint="LIGHT" pressed={state.lamp} float={chaos && !reduce} onActivate={() => toggle("lamp")}>
            <Lamp className="h-auto w-full" />
          </InteractiveObject>
        </Slot>

        <Slot chaos={chaos} focus={focus} chaosPos={{ left: "26%", top: "26%", width: 108 }} cleanPos={{ left: "-2%", top: "72%", width: 130 }}>
          <InteractiveObject label="Put on headphones" hint="LISTEN" pressed={state.headphones} float={chaos && !reduce} onActivate={() => toggle("headphones")}>
            <Headphones className="h-auto w-full" />
          </InteractiveObject>
        </Slot>

        <Slot chaos={chaos} focus={focus} chaosPos={{ left: "38%", top: "20%", width: 108 }} cleanPos={{ left: "6%", top: "42%", width: 120 }}>
          <InteractiveObject label="Spin vinyl record" hint={state.vinyl ? "PAUSE" : "PLAY"} pressed={state.vinyl} float={false} onActivate={() => toggle("vinyl")}>
            <motion.div
              animate={{ rotate: state.vinyl ? 360 : 0 }}
              transition={state.vinyl ? { repeat: Infinity, duration: 4.2, ease: "linear" } : { duration: 0.6 }}
            >
              <Vinyl className="h-auto w-full" />
            </motion.div>
          </InteractiveObject>
        </Slot>

        <Slot chaos={chaos} focus={focus} chaosPos={{ left: "54%", top: "5%", width: 92 }} cleanPos={{ left: "88%", top: "6%", width: 110 }}>
          <InteractiveObject label="Flip Sprint book" hint="READ" pressed={state.book} float={chaos && !reduce} onActivate={() => toggle("book")}>
            <Book className="h-auto w-full" />
          </InteractiveObject>
        </Slot>

        <Slot chaos={chaos} focus={focus} chaosPos={{ left: "64%", top: "4%", width: 168 }} cleanPos={{ left: "88%", top: "34%", width: 190 }}>
          <InteractiveObject label="Sip chai" hint="SIP" pressed={state.coffee} float={chaos && !reduce} onActivate={() => toggle("coffee")}>
            <Chai className="h-auto w-full" />
          </InteractiveObject>
        </Slot>

        <Slot chaos={chaos} focus={focus} chaosPos={{ left: "78%", top: "5%", width: 88 }} cleanPos={{ left: "92%", top: "8%", width: 96 }}>
          <div className="relative">
            <SparkCube className="h-auto w-full" />
            <Folder className="absolute -bottom-2 left-6 h-auto w-16" />
          </div>
        </Slot>

        <Slot chaos={chaos} focus={focus} chaosPos={{ left: "68%", top: "30%", width: 118 }} cleanPos={{ left: "88%", top: "24%", width: 130 }}>
          <InteractiveObject label="Toggle monitor" hint={state.monitor ? "SLEEP" : "ON"} pressed={state.monitor} float={chaos && !reduce} onActivate={() => toggle("monitor")}>
            <div className="relative">
              <Monitor className="h-auto w-full" />
              <span className={cn("absolute left-[20%] top-[24%] h-[42%] w-[64%] rounded-sm", state.monitor ? "bg-[#9ad7c6]" : "bg-[#cfd6d4]")} />
            </div>
          </InteractiveObject>
        </Slot>

        <Slot chaos={chaos} focus={focus} chaosPos={{ left: "18%", top: "64%", width: 96 }} cleanPos={{ left: "2%", top: "58%", width: 150 }}>
          <InteractiveObject label="Nudge plant" hint="HI" pressed={state.plant} float={chaos && !reduce} onActivate={() => toggle("plant")}>
            <motion.div animate={{ rotate: state.plant ? [0, -8, 8, 0] : 0 }}>
              <Plant className="h-auto w-full" />
            </motion.div>
          </InteractiveObject>
        </Slot>

        <Slot chaos={chaos} focus={focus} chaosPos={{ left: "30%", top: "66%", width: 110 }} cleanPos={{ left: "18%", top: "78%", width: 90 }}>
          <InteractiveObject label="Reveal sticky note" hint="NOTE" pressed={state.sticky} float={chaos && !reduce} onActivate={() => toggle("sticky")}>
            <StickyNotes className="h-auto w-full" />
          </InteractiveObject>
        </Slot>

        <Slot chaos={chaos} focus={focus} chaosPos={{ left: "48%", top: "48%", width: 130 }} cleanPos={{ left: "78%", top: "48%", width: 140 }}>
          <InteractiveObject label="Peel a stamp" hint="POST" pressed={state.stamps} float={chaos && !reduce} onActivate={() => toggle("stamps")}>
            <motion.div animate={{ y: state.stamps ? -10 : 0 }}>
              <Stamps className="h-auto w-full" />
            </motion.div>
          </InteractiveObject>
        </Slot>

        <Slot chaos={chaos} focus={focus} chaosPos={{ left: "72%", top: "48%", width: 92 }} cleanPos={{ left: "90%", top: "58%", width: 110 }}>
          <InteractiveObject label="Take a photo" hint="SNAP" pressed={state.camera} float={chaos && !reduce} onActivate={() => toggle("camera")}>
            <Camera className="h-auto w-full" />
          </InteractiveObject>
        </Slot>

        <Slot chaos={chaos} focus={focus} chaosPos={{ left: "82%", top: "68%", width: 84 }} cleanPos={{ left: "86%", top: "72%", width: 110 }}>
          <InteractiveObject label="Open journal" hint="READ" pressed={state.journal} float={chaos && !reduce} onActivate={() => toggle("journal")}>
            <Journal className="h-auto w-full" />
          </InteractiveObject>
        </Slot>
        </div>

        <AnimatePresence>
          {state.camera ? (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-40 bg-white"
              initial={{ opacity: 0.85 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              onAnimationComplete={() => setState((current) => ({ ...current, camera: false }))}
            />
          ) : null}
        </AnimatePresence>
      </div>

      <div className="relative z-30 mt-3 flex shrink-0 justify-center lg:absolute lg:inset-x-0 lg:bottom-8 lg:mt-0">
        <ChaosCleanToggle />
      </div>
      <p className="sr-only">
        Chaos mode scatters desk objects. Clean mode shows identity. Focus mode
        quiets the desk. Scroll down to jump to clean mode; scroll up to return
        to chaos.
      </p>
      </div>
    </section>
  );
}

function MobileCopy({ chaos }: { chaos: boolean }) {
  return (
    <div className="relative h-full min-h-0 lg:hidden">
      <motion.div
        className="absolute inset-0 flex flex-col justify-center"
        initial={false}
        animate={{ opacity: chaos ? 1 : 0, y: chaos ? 0 : 8 }}
        transition={spring}
        style={{ pointerEvents: chaos ? "auto" : "none" }}
        aria-hidden={!chaos}
      >
        <p className="max-w-[18ch] font-inter text-[clamp(1.15rem,5.4vw,1.75rem)] font-semibold uppercase leading-[1.2] tracking-[-0.03em] text-ink">
          The world is full of unfinished ideas
        </p>
        <p className="mt-2 max-w-[18ch] font-inter text-[clamp(1.15rem,5.4vw,1.75rem)] font-semibold uppercase leading-[1.2] tracking-[-0.03em] text-ink">
          &amp; frustrating experiences
        </p>
        <p className="mt-4 self-start bg-[#ead7b8] px-2.5 py-1 font-serif text-[16px] font-bold italic text-ink">
          I design the path
        </p>
        <p className="mt-3 max-w-[16ch] font-inter text-[clamp(1.15rem,5.4vw,1.75rem)] font-semibold uppercase leading-[1.2] tracking-[-0.03em] text-ink">
          that make them seamless
        </p>
        <a
          href={site.social.email}
          className="mt-4 inline-block max-w-full break-all font-hand text-[16px] text-ink/70 underline decoration-ink/20 underline-offset-4"
        >
          {site.email}
        </a>
      </motion.div>

      <motion.div
        className="absolute inset-0 flex flex-col justify-center text-center"
        initial={false}
        animate={{ opacity: chaos ? 0 : 1, y: chaos ? 8 : 0 }}
        transition={spring}
        style={{ pointerEvents: chaos ? "none" : "auto" }}
        aria-hidden={chaos}
      >
        <h1 className="font-script text-[clamp(2.35rem,11vw,3.6rem)] leading-[1.1] text-[#3e3e42]">
          {site.name}
        </h1>
        <p className="mt-3 text-[15px] text-ink/80">{site.cleanRole}</p>
        <p className="mt-0.5 px-1 text-[15px] text-ink/80">{site.expertRole}</p>
        <p className="mx-auto mt-5 max-w-[28ch] px-1 font-hand text-[clamp(1.15rem,4.4vw,1.55rem)] leading-snug text-ink/80">
          {site.tagline}
        </p>
        <p className="mx-auto mt-3 max-w-[34ch] font-hand text-[15px] leading-snug text-ink/70">
          {site.taglineAsk}
        </p>
        <a
          href={site.social.email}
          className="mx-auto mt-1 inline-block max-w-full break-all px-2 font-hand text-[15px] text-ink/70 underline decoration-ink/25 underline-offset-4"
        >
          {site.email}
        </a>
      </motion.div>
    </div>
  );
}

function Phrase({
  children,
  chaos,
  chaosPos,
  className,
}: {
  children: React.ReactNode;
  chaos: boolean;
  chaosPos: { left: string; top: string };
  className?: string;
}) {
  return (
    <motion.h2
      className={cn(
        "absolute z-10 font-inter text-[clamp(1.35rem,2.4vw,2rem)] font-semibold uppercase leading-[1.35] text-ink",
        className,
      )}
      animate={{
        left: chaosPos.left,
        top: chaosPos.top,
        opacity: chaos ? 1 : 0,
      }}
      style={{ pointerEvents: chaos ? "auto" : "none" }}
      transition={spring}
    >
      {children}
    </motion.h2>
  );
}

function Slot({
  children,
  chaos,
  focus,
  chaosPos,
  cleanPos,
  className,
}: {
  children: React.ReactNode;
  chaos: boolean;
  focus: boolean;
  chaosPos: { left: string; top: string; width: number };
  cleanPos: { left: string; top: string; width: number };
  className?: string;
}) {
  const pos = chaos ? chaosPos : cleanPos;
  const tilt = Number.parseFloat(pos.left) > 50 ? 8 : -8;
  return (
    <motion.div
      className={cn("absolute z-10", className)}
      animate={{
        left: pos.left,
        top: pos.top,
        width: pos.width,
        rotate: chaos ? 0 : tilt,
        opacity: focus ? 0 : 1,
      }}
      transition={spring}
      style={{ pointerEvents: focus ? "none" : "auto" }}
    >
      {children}
    </motion.div>
  );
}
