import Image from "next/image";
import { about, site, skills } from "@/content/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-night py-24 text-white md:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative mx-auto max-w-sm lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-night-800">
              {about.photo ? (
                <Image src={about.photo} alt={`Portrait of ${site.owner}`} fill sizes="(min-width: 1024px) 380px, 90vw" className="object-cover" />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4">
                  <span className="font-display text-8xl font-extrabold tracking-[-0.05em] text-mint">AH</span>
                  <span className="rounded-full border border-dashed border-night-400 px-3 py-1 text-xs uppercase tracking-[0.12em] text-night-400">Photo to add</span>
                </div>
              )}
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-2xl bg-mint px-5 py-3 font-display font-extrabold text-night shadow-xl">{site.owner}</div>
          </div>
        </Reveal>
        <div>
          <Reveal><h2 className="h2">The person behind<br />the <span className="text-mint">simple</span>.</h2></Reveal>
          <div className="mt-8 space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className={i === 0 ? "text-xl leading-relaxed text-white" : "text-[1.06rem] leading-relaxed text-night-200"}>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <ul className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <li key={s} className="rounded-full border border-night-700 px-3.5 py-1.5 text-sm text-night-200">{s}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
