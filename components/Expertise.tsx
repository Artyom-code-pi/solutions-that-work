import { services, type Service } from "@/content/site";
import { Reveal } from "./Reveal";

const tones: Record<Service["tone"], { card: string; body: string }> = {
  night: { card: "bg-night text-white", body: "text-night-200" },
  sky: { card: "bg-sky text-night", body: "text-ink-700" },
  sand: { card: "bg-sand text-night", body: "text-ink-700" },
  coral: { card: "bg-coral-100 text-night", body: "text-ink-700" },
  mint: { card: "bg-[#E5F7F4] text-night", body: "text-ink-700" },
};

export function Expertise() {
  return (
    <section id="expertise" className="bg-white pb-24 md:pb-32">
      <div className="wrap">
        <Reveal><h2 className="h2">What I untangle</h2></Reveal>
        <Reveal delay={80}><p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">Six things I hear from organisations — and what changes when we work together.</p></Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} as="article" delay={(i % 3) * 100}
              className={`tile flex min-h-[260px] flex-col justify-between rounded-[1.75rem] p-8 ${tones[s.tone].card}`}>
              <p className="text-lg leading-snug opacity-80">“{s.pain}”</p>
              <div className="mt-8">
                <h3 className="font-display text-[1.65rem] font-extrabold leading-tight tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-2 text-[1.05rem] font-semibold">→ {s.gain}</p>
                <p className={`mt-2 text-[0.95rem] leading-relaxed ${tones[s.tone].body}`}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
