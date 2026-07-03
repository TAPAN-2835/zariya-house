import { Link } from "@tanstack/react-router";

type Props = {
  size?: number;
  className?: string;
  animate?: boolean;
};

export function ZMonogram({ size = 48, className = "", animate = false }: Props) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id="z-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.86 0.09 78)" />
          <stop offset="50%" stopColor="oklch(0.72 0.11 76)" />
          <stop offset="100%" stopColor="oklch(0.55 0.10 62)" />
        </linearGradient>
      </defs>
      {/* Outer ornamental ring */}
      <circle
        cx="60"
        cy="60"
        r="54"
        fill="none"
        stroke="url(#z-gold)"
        strokeWidth="1"
        strokeDasharray="2 4"
        opacity="0.6"
      />
      <circle
        cx="60"
        cy="60"
        r="48"
        fill="none"
        stroke="url(#z-gold)"
        strokeWidth="0.75"
        opacity="0.9"
      />
      {/* Calligraphic Z */}
      <g fill="none" stroke="url(#z-gold)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {/* Top ornament curl */}
        <path d="M34 40 Q40 32 48 34 Q52 35 54 39" />
        {/* Top bar of Z */}
        <path d="M36 42 L82 42 Q86 42 84 46" />
        {/* Diagonal */}
        <path d="M82 46 L38 78" />
        {/* Bottom bar */}
        <path d="M36 78 Q34 82 40 82 L84 82" />
        {/* Bottom curl */}
        <path d="M84 82 Q92 84 86 90 Q80 94 74 90" />
      </g>
      {/* Jewel dots */}
      <circle cx="60" cy="26" r="1.8" fill="oklch(0.34 0.13 15)" />
      <circle cx="60" cy="94" r="1.8" fill="oklch(0.34 0.13 15)" />
      <circle cx="30" cy="60" r="1.3" fill="url(#z-gold)" />
      <circle cx="90" cy="60" r="1.3" fill="url(#z-gold)" />
      {animate && (
        <circle cx="60" cy="60" r="52" fill="none" stroke="url(#z-gold)" strokeWidth="0.6" strokeDasharray="326" strokeDashoffset="326">
          <animate attributeName="stroke-dashoffset" from="326" to="0" dur="2s" fill="freeze" />
        </circle>
      )}
    </svg>
  );
}

type LogoProps = {
  variant?: "full" | "compact" | "stacked";
  className?: string;
  onLight?: boolean;
};

export function Logo({ variant = "full", className = "", onLight = true }: LogoProps) {
  const text = onLight ? "text-charcoal" : "text-ivory";
  if (variant === "compact") {
    return (
      <Link to="/" className={`flex items-center gap-2 ${className}`} aria-label="Zariya House home">
        <ZMonogram size={36} />
        <span className={`serif-display text-xl tracking-tight ${text}`}>Zariya</span>
      </Link>
    );
  }
  if (variant === "stacked") {
    return (
      <Link to="/" className={`flex flex-col items-center gap-2 ${className}`} aria-label="Zariya House home">
        <ZMonogram size={64} animate />
        <div className="text-center">
          <div className={`serif-display text-2xl tracking-wide ${text}`}>Zariya House</div>
          <div className="eyebrow mt-1 text-[0.6rem]">Designs to Adorn Every Story</div>
        </div>
      </Link>
    );
  }
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`} aria-label="Zariya House home">
      <ZMonogram size={40} />
      <div className="flex flex-col leading-none">
        <span className={`serif-display text-xl tracking-wide ${text}`}>Zariya House</span>
        <span className="eyebrow mt-1 text-[0.55rem]">Designs to Adorn Every Story</span>
      </div>
    </Link>
  );
}
