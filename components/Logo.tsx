/** The mark: a wave that resolves into a straight line and a point — complexity into results. */
export function LogoMark({ className = "h-9 w-9", onLight = false }: { className?: string; onLight?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill={onLight ? "#0A1626" : "#14C2B5"} />
      <path d="M6 16c2-7 4-7 5 0s3 4 4 0 2-2 3 0h5" fill="none" stroke={onLight ? "#FFFFFF" : "#0A1626"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="25.5" cy="16" r="2.3" fill={onLight ? "#14C2B5" : "#0A1626"} />
    </svg>
  );
}

export function Logo({ onLight = false }: { onLight?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark onLight={onLight} />
      <span className={`font-display text-lg font-extrabold tracking-[-0.02em] ${onLight ? "text-night" : "text-white"}`}>Solutions That Work</span>
    </span>
  );
}
