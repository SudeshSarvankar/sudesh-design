import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";
import Image from "next/image";
import type { ReactNode } from "react";

export function ProjectVisual({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden",
        featured ? "aspect-[16/8]" : "aspect-[616/400] h-full",
      )}
      style={{ background: project.accent }}
    >
      {project.slug === "employee-center" ? <EmployeeBanner /> : null}
      {project.slug === "ubs-data-ea-pilot" ? <DataEaBanner /> : null}
      {project.slug === "fielda" ? <FieldaBanner src={project.cover!} /> : null}
      {project.slug === "bajaj-markets" ? <BajajBanner src={project.cover!} /> : null}
      {project.slug === "quality-kiosk" ? (
        <QualityBanner src={project.cover!} />
      ) : null}
      {project.slug === "blubunny" ? <BlubunnyBanner src={project.cover!} /> : null}
      {project.slug === "rpa-labs" ? <RpaBanner src={project.cover!} /> : null}
      {project.slug === "rippy" ? (
        <RippyBanner src={project.cover!} srcB={project.coverSecondary!} />
      ) : null}
    </div>
  );
}

function Shot({
  src,
  alt,
  className,
  position = "top",
  zoom = 1,
}: {
  src: string;
  alt?: string;
  className?: string;
  position?: string;
  zoom?: number;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[18px] bg-white shadow-[0_14px_28px_rgba(58,55,50,0.1)] ring-1 ring-white/70",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt ?? ""}
        fill
        sizes="(max-width: 768px) 90vw, 520px"
        className="object-cover"
        style={{ objectPosition: position, transform: `scale(${zoom})` }}
      />
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink/40">
      {children}
    </p>
  );
}

function DataEaBanner() {
  return (
    <div className="absolute inset-0 bg-[#f3eee6]">
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full max-w-[520px] overflow-hidden rounded-[18px] border border-white/80 bg-paper shadow-[0_16px_32px_rgba(58,55,50,0.1)]">
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
            <p className="text-[11px] font-medium text-ink/70">Architecture Assistant</p>
            <p className="text-[10px] uppercase tracking-[0.12em] text-ink/35">
              6 sources · live
            </p>
          </div>
          <div className="p-3">
            <div className="rounded-full bg-[#f6f1ea] px-3 py-2 text-[11px] text-ink/40">
              Ask the architecture…
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {["End of life", "Dependencies", "Ownership"].map((label) => (
                <div key={label} className="rounded-xl bg-[#f6f1ea] px-2 py-3">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-ink/40">
                    {label}
                  </p>
                  <div className="mt-2 h-1.5 w-3/4 rounded bg-ink/10" />
                  <div className="mt-1 h-1.5 w-1/2 rounded bg-ink/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmployeeBanner() {
  return (
    <div className="absolute inset-0 bg-[#f3eee6]">
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full max-w-[520px] overflow-hidden rounded-[18px] border border-white/80 bg-paper shadow-[0_16px_32px_rgba(58,55,50,0.1)]">
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
            <p className="text-[11px] font-medium text-ink/70">Employee Center</p>
            <div className="h-6 w-40 rounded-full bg-[#f3f1ea]" />
          </div>
          <div className="grid grid-cols-3 gap-2 p-3">
            {["Search", "My requests", "Forms"].map((label) => (
              <div key={label} className="rounded-xl bg-[#f6f1ea] px-2 py-3">
                <p className="text-[10px] uppercase tracking-[0.12em] text-ink/40">
                  {label}
                </p>
                <div className="mt-2 h-1.5 w-3/4 rounded bg-ink/10" />
                <div className="mt-1 h-1.5 w-1/2 rounded bg-ink/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldaBanner({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 bg-[#ece8de]">
      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#d7e2d4]" />
      <div className="absolute inset-y-0 left-0 z-10 flex w-[46%] flex-col justify-between p-7">
        <Label>Field operations</Label>
        <div>
          <p className="font-serif text-[20px] leading-tight text-ink/70">
            Maps, forms, and the work on the ground.
          </p>
          <div className="mt-4 space-y-2">
            {["SO-79  Pole inspection", "TI-63  Line repair"].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white/85 px-3 py-2 text-[11px] text-ink/60 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Shot
        src={src}
        className="absolute top-8 bottom-8 left-[46%] right-[-6%] rounded-[22px] transition duration-700 group-hover/card:-translate-y-1"
        position="54% 70%"
        zoom={1.55}
      />
    </div>
  );
}

function BajajBanner({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 bg-[#ece7df]">
      <div className="absolute right-[4%] top-[12%] h-[76%] w-[46%] rounded-[46%] bg-[#d9e3f2]" />
      <div className="absolute inset-y-0 left-0 z-10 flex w-[52%] flex-col justify-between p-7">
        <Label>Finance &amp; shopping</Label>
        <div>
          <p className="font-serif text-[28px] leading-[0.95] text-ink/75">
            One wallet.
            <br />
            One aisle.
          </p>
          <p className="mt-3 text-[12px] text-ink/45">Loans · Cards · Market</p>
        </div>
      </div>
      <Shot
        src={src}
        className="absolute top-5 bottom-[-16%] left-[54%] right-[6%] rounded-[28px] transition duration-700 group-hover/card:-translate-y-2"
        position="top"
      />
    </div>
  );
}

function QualityBanner({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 bg-[#e8efe8]">
      <div className="absolute left-[-10%] top-[20%] h-[120%] w-[50%] rounded-full bg-[#d7ebe3]" />
      <Shot
        src={src}
        className="absolute top-[-8%] bottom-[18%] left-[28%] right-[-8%] rounded-[22px] transition duration-700 group-hover/card:translate-y-1"
        position="70% 32%"
        zoom={1.14}
      />
      <div className="absolute left-6 top-6 z-10">
        <Label>Quality</Label>
        <div className="mt-5 grid h-16 w-16 place-items-center rounded-full border border-white/80 bg-white/80 text-[11px] text-ink/50 shadow-sm">
          96%
        </div>
      </div>
      <div className="absolute bottom-5 left-6 z-10 flex gap-2 text-[10px] text-ink/45">
        <span className="rounded-full bg-white/85 px-2.5 py-1">Passed</span>
        <span className="rounded-full bg-white/70 px-2.5 py-1">Running</span>
        <span className="rounded-full bg-white/55 px-2.5 py-1">Blocked</span>
      </div>
    </div>
  );
}

function BlubunnyBanner({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 bg-[#e9efe6]">
      <div className="absolute right-[-18%] top-[-28%] h-[80%] w-[62%] rounded-full bg-[#dde8d8]" />
      <div className="absolute inset-y-0 left-0 z-10 flex w-[46%] flex-col justify-between p-7">
        <Label>Marketplace</Label>
        <div>
          <p className="font-serif text-[24px] leading-tight text-ink/70">
            One listing,
            <br />
            every aisle.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Amz", "Shop", "Site"].map((ch) => (
              <span
                key={ch}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/80 text-[10px] text-ink/50 shadow-sm"
              >
                {ch}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Shot
        src={src}
        className="absolute top-8 bottom-[-12%] left-[48%] right-[-4%] rotate-[3deg] rounded-[24px] transition duration-700 group-hover/card:rotate-0"
        position="center"
      />
    </div>
  );
}

function RpaBanner({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 bg-[#e9ebf2]">
      <div className="absolute bottom-[-20%] left-[-10%] h-64 w-64 rounded-full bg-[#dde0ea]" />
      <Shot
        src={src}
        className="absolute left-[6%] top-[10%] h-[62%] w-[70%] rounded-[20px] transition duration-700 group-hover/card:-translate-y-1"
        position="center"
      />
      <div className="absolute bottom-5 right-5 w-[42%] rounded-2xl bg-white/80 p-3 shadow-[0_10px_20px_rgba(58,55,50,0.08)]">
        <p className="text-[10px] uppercase tracking-[0.14em] text-ink/35">
          Control room
        </p>
        <p className="mt-1 font-serif text-[18px] text-ink/70">Documents 32k</p>
        <p className="mt-1 text-[11px] text-ink/45">Mail · Rates · Invoices</p>
      </div>
    </div>
  );
}

function RippyBanner({ src, srcB }: { src: string; srcB: string }) {
  return (
    <div className="absolute inset-0 bg-[#ebe7e0]">
      <div className="absolute right-[-10%] top-[-16%] h-40 w-40 rounded-full bg-[#dde3f0]" />
      <div className="absolute left-6 top-6 z-10">
        <Label>Assistant</Label>
      </div>
      <Shot
        src={srcB}
        className="absolute top-[18%] bottom-[16%] left-[8%] w-[44%] -rotate-2 rounded-[20px] transition duration-700 group-hover/card:-rotate-1"
        position="left 72%"
        zoom={1.08}
      />
      <Shot
        src={src}
        className="absolute top-[14%] bottom-[12%] left-[50%] right-[8%] rotate-2 rounded-[20px] transition duration-700 group-hover/card:rotate-1"
        position="center 18%"
        zoom={1.05}
      />
    </div>
  );
}
