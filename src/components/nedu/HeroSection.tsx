interface HeroSectionProps {
  name: string;
  tagline: string;
  persona: { emoji: string; label: string };
  tests: Array<{ label: string; done: boolean }>;
}

const HeroSection = ({ name, tagline, persona, tests }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden min-h-[420px] flex items-center px-6 py-16" style={{ background: "var(--hero-gradient)" }}>
      {/* Orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, hsla(45, 91%, 53%, 0.1) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full" style={{ background: "radial-gradient(circle, hsla(153, 37%, 37%, 0.2) 0%, transparent 70%)" }} />
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f5b419' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")` }} />
      
      <div className="relative z-10 max-w-[680px] mx-auto text-center w-full">
        <p className="font-mono text-[11px] tracking-widest uppercase mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
          Tháng 4/2026 · Phiên bản cá nhân hoá
        </p>
        <div className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wider font-mono uppercase mb-5 border" style={{ background: "rgba(245,180,25,0.15)", borderColor: "rgba(245,180,25,0.25)", color: "hsl(var(--primary))" }}>
          ✦ Hồ sơ tâm lý · Nedu AI
        </div>
        <h1 className="font-display text-[clamp(28px,4vw,44px)] font-bold leading-tight mb-4 tracking-tight" style={{ color: "#fff" }}>
          Xin chào,<br />
          <em className="italic text-primary">{name}</em>
        </h1>
        <p className="font-display text-[clamp(16px,2.2vw,21px)] font-normal italic leading-relaxed max-w-[520px] mx-auto mb-7" style={{ color: "rgba(255,255,255,0.65)" }}>
          {tagline}
        </p>
        <div className="inline-flex items-center gap-2 rounded-full px-5 py-1.5 text-[13px] border" style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}>
          {persona.emoji} {persona.label}
        </div>
        <div className="flex gap-1.5 justify-center mt-5 flex-wrap">
          {tests.map((t) => (
            <span
              key={t.label}
              className={`flex items-center gap-1 rounded-lg px-3 py-1 text-[10px] font-mono border ${
                t.done
                  ? "border-secondary/30 text-emerald-300"
                  : "border-secondary-foreground/10 text-secondary-foreground/50"
              }`}
              style={{ background: t.done ? "rgba(45,106,79,0.2)" : "rgba(255,255,255,0.06)" }}
            >
              {t.done ? "✓" : "○"} {t.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
