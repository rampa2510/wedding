export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-cream">
      {/* Animated mandala */}
      <div className="relative w-32 h-32 mb-8">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full animate-spin-slow opacity-60"
          style={{ animation: "spin 8s linear infinite" }}
        >
          <circle cx="100" cy="100" r="85" stroke="#FFD700" strokeWidth="0.8" fill="none" />
          <circle cx="100" cy="100" r="65" stroke="#800020" strokeWidth="0.5" fill="none" />
          <circle cx="100" cy="100" r="45" stroke="#FFD700" strokeWidth="0.8" fill="none" />
          <circle cx="100" cy="100" r="20" stroke="#800020" strokeWidth="0.5" fill="none" />
          <circle cx="100" cy="100" r="6" fill="#FFD700" fillOpacity="0.6" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
            const rad = (a * Math.PI) / 180;
            const x1 = 100 + 45 * Math.cos(rad);
            const y1 = 100 + 45 * Math.sin(rad);
            const x2 = 100 + 85 * Math.cos(rad);
            const y2 = 100 + 85 * Math.sin(rad);
            return (
              <g key={a}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFD700" strokeWidth="0.5" strokeOpacity="0.4" />
                <ellipse
                  cx={100 + 65 * Math.cos(rad)}
                  cy={100 + 65 * Math.sin(rad)}
                  rx="4"
                  ry="10"
                  fill="#FFD700"
                  fillOpacity="0.2"
                  transform={`rotate(${a} ${100 + 65 * Math.cos(rad)} ${100 + 65 * Math.sin(rad)})`}
                />
              </g>
            );
          })}
          {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((a) => {
            const rad = (a * Math.PI) / 180;
            return (
              <circle
                key={a}
                cx={100 + 85 * Math.cos(rad)}
                cy={100 + 85 * Math.sin(rad)}
                r="3"
                fill="#FFD700"
                fillOpacity="0.5"
              />
            );
          })}
        </svg>

        {/* Inner pulsing ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-10 h-10 rounded-full border border-gold-500/40"
            style={{ animation: "pulse-gold 2s ease-in-out infinite" }}
          />
        </div>
      </div>

      {/* Names */}
      <p className="font-serif text-2xl text-maroon-800 tracking-wider mb-1">
        Ram <span className="text-gold-500">&</span> Anshika
      </p>
      <p
        className="font-sans text-xs text-burgundy/40 tracking-widest uppercase"
        style={{ animation: "fade-in-up 1s ease-out 0.5s both" }}
      >
        Loading...
      </p>
    </div>
  );
}
