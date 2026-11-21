import { stats, statsHeading } from "@/content/site";
import { Reveal } from "./Reveal";

const styles = ["bg-white text-night", "bg-night text-white", "bg-sky text-night"];
const valueStyles = ["", "text-mint", ""];
const labelStyles = ["text-ink-700", "text-night-200", "text-ink-700"];

export function Stats() {
  return (
    <section aria-label="Experience at a glance" className="bg-sand py-24 md:py-28">
      <div className="wrap">
        <Reveal><h2 className="h2 max-w-4xl">
          {statsHeading.split("obvious")[0]}<span className="text-mint-700">obvious</span>{statsHeading.split("obvious")[1]}
        </h2></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120} className={`rounded-[1.75rem] p-8 ${styles[i]}`}>
              <p className={`font-display text-6xl font-extrabold tracking-[-0.04em] ${valueStyles[i]}`}>{s.value}</p>
              <p className={`mt-3 text-[1.05rem] leading-relaxed ${labelStyles[i]}`}>{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
