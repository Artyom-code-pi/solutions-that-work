import { hero, site } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-night pt-36 text-white md:pt-44">
      <div className="wrap">
        <p className="rise inline-flex items-center gap-2.5 rounded-full border border-night-700 px-4 py-2 text-sm text-night-200" style={{ ["--d" as string]: "100ms" }}>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
          </span>
          {site.availability}
        </p>
        <h1 className="mt-8 font-display text-[3.6rem] font-extrabold leading-[0.9] tracking-[-0.05em] sm:text-8xl lg:text-[9.75rem]">
          <span className="strike text-night-400">{hero.struck}</span>
          <br />
          <span className="text-mint">{hero.resolved}</span>
        </h1>
        <p className="rise mt-9 max-w-[42rem] text-[1.2rem] leading-relaxed text-night-200 md:text-2xl md:leading-relaxed" style={{ ["--d" as string]: "600ms" }}>
          {hero.body}
        </p>
        <div className="rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ ["--d" as string]: "800ms" }}>
          <a href={hero.primaryCta.href} className="btn bg-mint text-night hover:bg-white">{hero.primaryCta.label} →</a>
          <a href={hero.secondaryCta.href} className="btn border-[1.5px] border-night-700 text-white hover:border-white">{hero.secondaryCta.label}</a>
        </div>
      </div>
      <svg viewBox="0 0 1440 260" preserveAspectRatio="none" className="mt-10 block h-[150px] w-full md:h-[220px]" aria-hidden="true">
        <path
          className="knot"
          d="M-10 150 C 60 20, 140 260, 200 120 S 120 40, 160 200 S 320 240, 300 110 S 200 60, 260 160 S 420 220, 440 120 S 360 80, 420 170 S 560 160, 600 140 C 700 135, 800 145, 900 140 L 1450 140"
          fill="none" stroke="#14C2B5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"
        />
      </svg>
    </section>
  );
}
