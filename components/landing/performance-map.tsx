"use client";

/**
 * PerformanceMap
 * A topographic / contour wireframe representing a route from baseline
 * performance up to an elite 2600+ UCAT score. Pure SVG, no gradients,
 * no glow, square corners. Accent (#F93716) used only on the target node.
 */
export function PerformanceMap() {
  // Diagonal contour lines flowing upward from bottom-left to top-right.
  // Each line is shifted progressively to suggest rising elevation bands.
  const contours = [...Array(9)].map((_, i) => {
    const offset = i * 90;
    return `M ${-200 + offset} 1000
            C ${250 + offset} 880, ${520 + offset} 720, ${760 + offset} 540
            S ${1180 + offset} 240, ${1500 + offset} 80`;
  });

  const zones = [
    { label: "[ BASELINE ]", x: "6%", y: "88%" },
    { label: "[ STRATEGY ]", x: "64%", y: "74%" },
    { label: "[ OPTIMISATION ]", x: "72%", y: "52%" },
    { label: "[ 2600+ RANGE ]", x: "80%", y: "30%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 1000"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Contour elevation lines */}
        <g className="text-foreground">
          {contours.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              style={{ opacity: 0.05 + i * 0.006 }}
            />
          ))}
        </g>

        {/* Faint elevation tick marks along the climb */}
        <g className="text-foreground" style={{ opacity: 0.08 }}>
          {[...Array(6)].map((_, i) => {
            const x = 240 + i * 200;
            const y = 820 - i * 130;
            return (
              <line
                key={i}
                x1={x}
                y1={y}
                x2={x}
                y2={y - 24}
                stroke="currentColor"
                strokeWidth={1}
              />
            );
          })}
        </g>

        {/* Route line from baseline to target */}
        <path
          d="M 120 880 L 420 720 L 720 560 L 1020 400 L 1230 300"
          fill="none"
          stroke="currentColor"
          className="text-foreground"
          strokeWidth={1}
          strokeDasharray="4 8"
          style={{ opacity: 0.12 }}
        />

        {/* Target node marker — the only accent */}
        <g>
          <rect
            x={1220}
            y={290}
            width={20}
            height={20}
            fill="#F93716"
          />
          <rect
            x={1208}
            y={278}
            width={44}
            height={44}
            fill="none"
            stroke="#F93716"
            strokeWidth={1}
            style={{ opacity: 0.4 }}
          />
        </g>
      </svg>

      {/* Zone coordinate labels */}
      {zones.map((zone) => (
        <span
          key={zone.label}
          className="absolute font-mono text-[10px] sm:text-xs uppercase tracking-widest text-foreground/25 whitespace-nowrap"
          style={{ left: zone.x, top: zone.y }}
        >
          {zone.label}
        </span>
      ))}

      {/* Target score label next to the node */}
      <span
        className="absolute font-mono text-xs sm:text-sm uppercase tracking-widest text-primary flex items-center gap-2"
        style={{ left: "78%", top: "9%" }}
      >
        <span className="w-1.5 h-1.5 bg-primary" />
        2600+
      </span>
    </div>
  );
}
