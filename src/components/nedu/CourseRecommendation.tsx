import { PROFILE } from "@/data/mockProfile";

const CourseRecommendation = () => {
  const rec = PROFILE.recommendation;

  return (
    <div className="mt-12">
      <div className="flex items-center gap-2.5 mb-2">
        <span className="w-[22px] h-[22px] rounded-full bg-surface-2 flex items-center justify-center text-[9px] shrink-0">🎯</span>
        <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-ink-3">Khoá học được gợi ý</span>
        <span className="flex-1 h-px bg-border" />
      </div>
      <div className="relative rounded-2xl p-7 overflow-hidden" style={{ background: "var(--rec-gradient)" }}>
        <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full" style={{ background: "rgba(245,180,25,0.08)" }} />
        <div className="absolute -bottom-10 left-16 w-40 h-40 rounded-full" style={{ background: "rgba(245,180,25,0.05)" }} />
        <div className="relative z-10">
          <p className="font-mono text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
            Dựa trên profile của bạn · Nedu AI Recommendation
          </p>
          <h3 className="font-display text-[22px] font-bold mb-2 leading-snug" style={{ color: "#fff" }}>
            {rec.courseName}
          </h3>
          <p className="text-sm font-light leading-relaxed mb-5 max-w-[480px]" style={{ color: "rgba(255,255,255,0.6)" }}>
            {rec.why}
          </p>
          <div className="flex gap-2.5 flex-wrap mb-5">
            {rec.meta.map((tag) => (
              <span key={tag} className="text-[11px] rounded-lg px-2.5 py-1 border" style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}>
                {tag}
              </span>
            ))}
          </div>
          <p className="font-display text-[26px] font-bold text-primary mb-5">{rec.price}</p>
          <div className="flex gap-2.5 flex-wrap">
            <button className="flex items-center gap-2 px-7 py-3 text-sm font-bold rounded-xl bg-primary text-primary-foreground hover:brightness-95 transition-all hover:-translate-y-0.5">
              🌸 Đăng ký khoá học →
            </button>
            <button className="px-6 py-3 text-[13px] font-semibold rounded-xl border-[1.5px] transition-all hover:border-secondary-foreground/50" style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.2)" }}>
              Tư vấn miễn phí trước
            </button>
          </div>
          <div className="flex items-center gap-2 mt-4 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse-dot shrink-0" />
            Chỉ còn 8 chỗ · Khai giảng 01/06/2026
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseRecommendation;
