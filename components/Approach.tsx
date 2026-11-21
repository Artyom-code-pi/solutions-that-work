import { approach } from "@/content/site";
import { Reveal } from "./Reveal";

/** Four illustrations that go from chaos to order. */
const art = [
  { bg: "bg-coral-50", num: "text-coral", svg: <path d="M20 60 C 40 10, 70 100, 90 40 S 60 20, 110 80 S 160 10, 140 60 S 170 90, 185 50" fill="none" stroke="#F26B5B" strokeWidth="3" strokeLinecap="round" /> },
  { bg: "bg-honey-50", num: "text-honey-700", svg: <g fill="#E0A43B"><circle cx="40" cy="35" r="8" /><circle cx="85" cy="75" r="8" /><circle cx="120" cy="30" r="8" /><circle cx="160" cy="70" r="8" /><circle cx="60" cy="88" r="5" opacity=".4" /><circle cx="140" cy="92" r="5" opacity=".4" /></g> },
  { bg: "bg-cobalt-50", num: "text-cobalt", svg: <g><g fill="#3F7BEA"><circle cx="40" cy="55" r="8" /><circle cx="80" cy="55" r="8" /><circle cx="120" cy="55" r="8" /><circle cx="160" cy="55" r="8" /></g><path d="M48 55h24M88 55h24M128 55h24" stroke="#3F7BEA" strokeWidth="2" strokeDasharray="3 4" /></g> },
  { bg: "bg-night-800", num: "text-mint", svg: <g><path d="M30 55H160" stroke="#fff" strokeWidth="4" strokeLinecap="round" /><circle cx="172" cy="55" r="11" fill="#14C2B5" /></g> },
];

export function Approach() {
  return (
    <section id="approach" className="bg-white py-24 md:py-32">
      <div className="wrap">
        <Reveal><h2 className="h2">From chaos to clear,<br />in four moves.</h2></Reveal>
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((a, i) => {
            const last = i === approach.length - 1;
            return (
              <Reveal as="li" key={a.step} delay={i * 120}
                className={`rounded-[1.75rem] border-[1.5px] p-7 ${last ? "border-night bg-night text-white" : "border-[#E4E8EE]"}`}>
                <svg viewBox="0 0 200 110" className={`block h-auto w-full rounded-2xl ${art[i].bg}`} aria-hidden="true">{art[i].svg}</svg>
                <p className={`mt-6 font-display text-sm font-extrabold ${art[i].num}`}>{a.step}</p>
                <h3 className="mt-1.5 font-display text-2xl font-extrabold tracking-[-0.02em]">{a.title}</h3>
                <p className={`mt-2.5 leading-relaxed ${last ? "text-night-200" : "text-ink-700"}`}>{a.body}</p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
