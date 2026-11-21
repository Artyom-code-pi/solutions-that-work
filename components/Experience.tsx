import { experience, work } from "@/content/site";
import { Reveal } from "./Reveal";

const cardStyles = ["bg-mint text-night", "bg-sand text-night", "bg-sky text-night"];

export function Experience() {
  return (
    <section id="work" className="bg-white py-24 md:py-32">
      <div className="wrap">
        <Reveal><h2 className="h2">Complex work,<br />made to land.</h2></Reveal>
        <Reveal delay={80}><p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">Selected work from enterprise telecoms, described without confidential detail.</p></Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {work.map((w, i) => (
            <Reveal key={w.title} as="article" delay={i * 120} className={`tile flex flex-col rounded-[1.75rem] p-8 ${cardStyles[i]}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.1em] opacity-70">{w.sector}</p>
              <h3 className="mt-3 font-display text-[1.65rem] font-extrabold leading-tight tracking-[-0.02em]">{w.title}</h3>
              {w.note && <p className="mt-3 self-start rounded-full bg-white/60 px-3 py-1 text-xs font-semibold">{w.note}</p>}
              <dl className="mt-6 space-y-4 text-[0.97rem] leading-relaxed">
                {([["The tangle", w.challenge], ["My part", w.role], ["What changed", w.outcome]] as const).map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-display text-sm font-extrabold">{k}</dt>
                    <dd className="mt-1 opacity-85">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal><h3 className="font-display text-3xl font-extrabold tracking-[-0.03em]">Career</h3></Reveal>
          <ol className="mt-8 divide-y divide-[#E4E8EE] border-y border-[#E4E8EE]">
            {experience.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 80} className="grid gap-3 py-8 md:grid-cols-[180px_1fr_1.4fr] md:gap-8">
                <p className="font-display font-extrabold text-ink-500">{r.period}</p>
                <div>
                  <p className="font-display text-xl font-extrabold tracking-[-0.02em]">{r.title}</p>
                  <p className="font-semibold text-mint-700">{r.org}</p>
                </div>
                <div>
                  <p className="leading-relaxed text-ink-700">{r.summary}</p>
                  <ul className="mt-3 space-y-1.5">
                    {r.highlights.map((h) => (
                      <li key={h} className="relative pl-5 text-[0.95rem] leading-relaxed text-ink-700 before:absolute before:left-0 before:top-[0.55em] before:h-2 before:w-2 before:rounded-full before:bg-mint">{h}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
