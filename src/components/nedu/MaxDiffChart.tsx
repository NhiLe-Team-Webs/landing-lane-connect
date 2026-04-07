import { useEffect, useRef, useState } from "react";
import { PROFILE } from "@/data/mockProfile";

const MaxDiffChart = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mt-12 transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
    >
      <div className="flex items-center gap-2.5 mb-2">
        <span className="w-[22px] h-[22px] rounded-full bg-surface-2 flex items-center justify-center text-[9px] shrink-0">📊</span>
        <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-ink-3">Kết quả MaxDiff</span>
        <span className="flex-1 h-px bg-border" />
      </div>
      <h2 className="font-display text-xl font-bold mb-1">Những gì bạn quan tâm nhất</h2>
      <p className="text-[13px] text-ink-3 italic mb-5">Dựa trên bài test chọn ưu tiên · Thang điểm 0–100</p>
      <div className="flex flex-col gap-3">
        {PROFILE.maxdiff.map((item, i) => {
          const isTop = i < 2;
          const gradient = isTop
            ? "linear-gradient(90deg, hsl(153,37%,37%), #6EE7B7)"
            : "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--amber)))";
          return (
            <div key={item.label} className="grid grid-cols-[1fr_80px] sm:grid-cols-[1fr_120px] gap-3 items-center">
              <div>
                <p className="text-[13px] font-semibold text-foreground">{item.label}</p>
                <div className="h-1.5 rounded-full bg-surface-2 mt-1.5 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: visible ? `${item.score}%` : "0%",
                      background: gradient,
                      transitionDelay: `${i * 80}ms`,
                    }}
                  />
                </div>
              </div>
              <p className={`font-mono text-right font-bold ${isTop ? "text-secondary text-xs" : "text-ink-3 text-[10px]"}`}>
                {item.score}/100{isTop ? " 🔥" : ""}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MaxDiffChart;
