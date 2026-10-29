import { site } from "@/data/site";

const footerLinks = [
  { href: site.social.linkedin, label: "LinkedIn" },
  { href: site.social.email, label: "Email" },
  { href: site.social.behance, label: "Behance" },
  { href: site.social.resume, label: "Resume" },
];

export function Footer() {
  return (
    <footer className="relative bg-cream">
      <div className="mx-auto flex w-full min-w-0 max-w-[1440px] flex-col gap-5 px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] pt-10 pb-[max(2.5rem,calc(16px+env(safe-area-inset-bottom)))] sm:px-6 md:flex-row md:items-center md:justify-between md:gap-8 md:px-[88px] md:pt-12 md:pb-12">
        <nav aria-label="Footer links" className="min-w-0">
          <ul className="flex flex-wrap items-center gap-x-1 gap-y-1 text-[15px] text-ink/80">
            {footerLinks
              .filter((link) => site.showResume || link.label !== "Resume")
              .map((link) => (
                <li key={link.label} className="shrink-0">
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 min-w-[4.5rem] items-center justify-center px-3 transition hover:text-ink"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                    <span aria-hidden className="ml-1 text-[11px] opacity-60">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
          </ul>
        </nav>
        <p className="max-w-[42ch] text-[13px] leading-relaxed text-ink/55 md:max-w-none md:text-right">
          © {new Date().getFullYear()} {site.name}. Powered by Cursor, Chai
          &amp; Curiosity
        </p>
      </div>
    </footer>
  );
}
