import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { contact, site } from "@/content/site";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const links = [
    { href: `mailto:${site.email}`, label: "Email", value: site.email, icon: <Mail className="h-5 w-5" aria-hidden="true" /> },
    { href: `tel:${site.phone}`, label: "Phone", value: site.phoneDisplay, icon: <Phone className="h-5 w-5" aria-hidden="true" /> },
    { href: site.linkedin, label: "LinkedIn", value: "Connect with Artyom", icon: <span className="font-bold leading-none" aria-hidden="true">in</span>, external: true },
  ];
  return (
    <section id="contact" className="bg-mint py-24 text-night md:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Reveal><h2 className="font-display text-[3.5rem] font-extrabold leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-[7rem]">{contact.heading}</h2></Reveal>
          <Reveal delay={80}><p className="mt-7 max-w-xl text-xl leading-relaxed">{contact.body}</p></Reveal>
          <Reveal delay={140} className="mt-8 flex flex-wrap gap-2">
            {contact.engagements.map((e) => (
              <span key={e} className="rounded-full bg-white/50 px-4 py-1.5 text-sm font-semibold">{e}</span>
            ))}
          </Reveal>
          <Reveal delay={200} className="mt-10 space-y-3">
            {links.map((l) => (
              <a key={l.label} href={l.href} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center justify-between rounded-2xl bg-white/55 p-4 transition-colors hover:bg-white">
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-night text-white">{l.icon}</span>
                  <span>
                    <span className="block text-sm opacity-70">{l.label}</span>
                    <span className="block break-all font-semibold">{l.value}{l.external && <span className="sr-only"> (opens in a new tab)</span>}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 flex-none transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            ))}
          </Reveal>
        </div>
        <Reveal delay={120}><ContactForm /></Reveal>
      </div>
    </section>
  );
}
