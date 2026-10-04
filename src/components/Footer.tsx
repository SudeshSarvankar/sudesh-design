import { site } from "@/data/site";

const footerLinks = [
  { href: site.social.linkedin, label: "LinkedIn" },
  { href: site.social.email, label: "Email" },
  { href: site.social.resume, label: "Resume" },
];

export function Footer() {
  return (
    <footer className="relative bg-cream">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-[88px] md:py-12">
        <nav aria-label="Footer links">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-ink/80">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-1 transition hover:text-ink"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                  <span aria-hidden className="text-[11px] opacity-60">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-[13px] text-ink/55">
          © {new Date().getFullYear()} {site.name}. Powered by Cursor, Chai
          &amp; Curiosity
        </p>
      </div>
    </footer>
  );
}
