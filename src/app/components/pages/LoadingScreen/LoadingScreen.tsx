import { useEffect, useState } from "react";

const lines = [
  "> Initializing portfolio...",
  "> Loading modules...",
  "> Connecting to backend services...",
  "> Compiling components...",
  "> Booting interface...",
  "> Access granted. Welcome.",
];

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let lineIdx = 0;
    const lineInterval = setInterval(() => {
      if (lineIdx < lines.length) {
        setVisibleLines((prev) => [...prev, lines[lineIdx]]);
        setProgress(Math.round(((lineIdx + 1) / lines.length) * 100));
        lineIdx++;
      } else {
        clearInterval(lineInterval);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 600);
        }, 400);
      }
    }, 350);
    return () => clearInterval(lineInterval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] transition-opacity duration-600 ${done ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="w-full max-w-lg px-6">
        <div className="mb-8 text-center">
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#00ff9c",
              textShadow: "0 0 20px #00ff9c",
              fontSize: "1.5rem",
              letterSpacing: "0.2em",
            }}
          >
            DEV_PORTFOLIO
          </span>
        </div>
        <div
          className="rounded border p-4 mb-6 min-h-[220px]"
          style={{
            borderColor: "#00ff9c33",
            backgroundColor: "#0d0d0d",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {visibleLines.map((line, i) => (
            <div
              key={i}
              className="mb-1"
              style={{
                color: i === visibleLines.length - 1 ? "#00ff9c" : "#00ff9c99",
                fontSize: "0.85rem",
                animation: "fadeIn 0.3s ease",
              }}
            >
              {line}
              {i === visibleLines.length - 1 && !done && (
                <span className="animate-pulse ml-1">█</span>
              )}
            </div>
          ))}
        </div>
        {/* Progress bar */}
        <div
          className="w-full rounded-full h-1.5 overflow-hidden"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              backgroundColor: "#00ff9c",
              boxShadow: "0 0 10px #00ff9c, 0 0 20px #00ff9c66",
            }}
          />
        </div>
        <div
          className="mt-2 text-right"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#00ff9c99",
            fontSize: "0.75rem",
          }}
        >
          {progress}%
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
}
