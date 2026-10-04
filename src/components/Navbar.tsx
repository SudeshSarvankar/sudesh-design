"use client";

import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { FileText, Folder, LayoutGrid, Smile } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#featured-work", hash: "featured-work", label: "Work", icon: Folder },
  { href: "/#journal", hash: "journal", label: "About", icon: Smile },
  { href: "/#experiments", hash: "experiments", label: "Playground", icon: LayoutGrid },
  {
    href: site.social.resume,
    hash: null,
    label: "Resume",
    icon: FileText,
    external: true,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash.replace("#", ""));
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-[100] flex justify-center px-3 md:top-6 md:px-4">
      <a
        href="#featured-work"
        className="pointer-events-auto sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-cream-2 focus:px-4 focus:py-2"
      >
        Skip to work
      </a>
      <nav
        aria-label="Primary"
        className="pointer-events-auto flex w-full max-w-[calc(100vw-24px)] items-center gap-2 md:w-auto md:max-w-none md:gap-3"
      >
        <Link
          href="/"
          aria-label={`${site.name} — Home`}
          className="flex size-12 shrink-0 items-center justify-center rounded-full border border-line bg-cream-2 text-sm font-semibold tracking-[-0.02em] text-ink shadow-[0_12px_40px_rgba(70,55,25,0.08)] md:size-[56px] lg:size-[64px]"
        >
          {site.monogram}
        </Link>
        <div className="flex min-h-12 min-w-0 flex-1 items-center rounded-full border border-line bg-cream-2 px-1.5 py-1 shadow-[0_12px_40px_rgba(70,55,25,0.08)] md:h-[56px] md:flex-none md:px-3 lg:h-[64px] lg:px-4">
          <ul className="grid w-full grid-cols-4 items-center md:flex md:w-auto md:gap-1">
            {links.map((link) => {
              const Icon = link.icon;
              const active =
                !link.external && pathname === "/" && hash === link.hash;
              const className = cn(
                "group inline-flex w-full min-w-0 items-center justify-center gap-1 rounded-full px-1 py-2 text-[12px] font-medium tracking-[-0.02em] text-ink/65 transition duration-250 hover:-translate-y-0.5 hover:text-ink sm:gap-1.5 sm:px-2 sm:text-[14px] md:w-auto md:gap-2 md:px-4 md:text-[16px] lg:px-5 lg:text-[18px]",
                active && "bg-cream text-ink",
              );
              return (
                <li key={link.href} className="min-w-0">
                  {link.external ? (
                    <a
                      href={link.href}
                      aria-label={link.label}
                      target="_blank"
                      rel="noreferrer"
                      className={className}
                    >
                      <Icon className="hidden h-4 w-4 sm:block" strokeWidth={1.7} />
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      aria-label={link.label}
                      aria-current={active ? "page" : undefined}
                      className={className}
                    >
                      <Icon className="hidden h-4 w-4 sm:block" strokeWidth={1.7} />
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
