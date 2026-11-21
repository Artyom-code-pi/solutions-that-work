import { Logo } from "./Logo";
import { nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-night text-night-400">
      <div className="wrap py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <Logo />
            <p className="mt-5 font-display text-3xl font-extrabold tracking-[-0.03em] text-white">Turning complexity <span className="text-mint">into results.</span></p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-3 text-sm">
            {nav.map((n) => <a key={n.href} href={`/${n.href}`} className="hover:text-white">{n.label}</a>)}
            <a href="/#contact" className="hover:text-white">Contact</a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-night-800 pt-7 text-xs sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.owner} · Solutions That Work · {site.location}</p>
          <p><a href="/privacy" className="hover:text-white">Privacy notice</a> · No tracking cookies</p>
        </div>
      </div>
    </footer>
  );
}
