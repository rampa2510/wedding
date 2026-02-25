"use client";

interface OrnateCardBorderProps {
  /** "dark" = gold on dark card, "light" = dark-gold on cream card */
  variant?: "dark" | "light";
}

const GOLD = "#D4A843";
const GOLD_LIGHT = "#E8C97C";

function CornerOrnament({ flip }: { flip: boolean }) {
  const sx = flip ? -1 : 1;
  const sy = flip ? -1 : 1;
  return (
    <g transform={`scale(${sx},${sy})`}>
      <rect x="-4" y="-1" width="8" height="2" rx="1" fill={GOLD} />
      <rect x="-1" y="-4" width="2" height="8" rx="1" fill={GOLD} />
      <circle cx="0" cy="0" r="2.5" fill={GOLD} fillOpacity="0.85" />
    </g>
  );
}

export default function OrnateCardBorder({ variant = "dark" }: OrnateCardBorderProps) {
  const gradId = `goldGrad-${variant}`;
  const opacity = variant === "dark" ? 1 : 0.65;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={GOLD_LIGHT} stopOpacity={opacity} />
          <stop offset="50%" stopColor={GOLD} stopOpacity={opacity} />
          <stop offset="100%" stopColor={GOLD_LIGHT} stopOpacity={opacity} />
        </linearGradient>
      </defs>

      {/* Main border — percentage-based, works with preserveAspectRatio=none */}
      <rect
        x="1"
        y="1"
        width="99%"
        height="99%"
        rx="22"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />

      {/* Inner subtle border */}
      <rect
        x="2%"
        y="2%"
        width="96%"
        height="96%"
        rx="18"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="0.5"
        strokeOpacity="0.3"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Corner diamond ornaments rendered as a regular div overlay (avoids SVG calc issues) */
export function CardCornerOrnaments() {
  const corners = [
    "top-3 left-3",
    "top-3 right-3",
    "bottom-3 left-3",
    "bottom-3 right-3",
  ] as const;

  return (
    <>
      {corners.map((pos, i) => (
        <svg
          key={i}
          className={`absolute ${pos} w-5 h-5 pointer-events-none z-10`}
          viewBox="-10 -10 20 20"
          fill="none"
          aria-hidden="true"
        >
          <rect x="-4" y="-1" width="8" height="2" rx="1" fill={GOLD} />
          <rect x="-1" y="-4" width="2" height="8" rx="1" fill={GOLD} />
          <circle cx="0" cy="0" r="2.5" fill={GOLD} fillOpacity="0.85" />
        </svg>
      ))}
    </>
  );
}
