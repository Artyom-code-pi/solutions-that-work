"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${scrolled || open ? "bg-night/90 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="wrap flex h-[4.75rem] items-center justify-between">
        <a href="/#top" aria-label="Solutions That Work — home" onClick={close}><Logo /></a>
        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={`/${n.href}`} className="text-[1rem] text-night-200 transition-colors hover:text-white">{n.label}</a>
          ))}
          <a href="/#contact" className="btn !px-5 !py-2.5 !text-[0.95rem] bg-white text-night hover:bg-mint">Let’s Talk</a>
        </nav>
        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <div id="mobile-menu" hidden={!open} className="h-[calc(100dvh-4.75rem)] bg-night md:hidden">
        <nav aria-label="Mobile" className="wrap flex flex-col pt-4">
          {nav.map((n) => (
            <a key={n.href} href={`/${n.href}`} onClick={close} className="border-b border-night-800 py-5 font-display text-3xl font-extrabold tracking-tight text-white">{n.label}</a>
          ))}
          <a href="/#contact" onClick={close} className="btn mt-8 w-full bg-mint text-night">Let’s Talk →</a>
        </nav>
      </div>
    </header>
  );
}
