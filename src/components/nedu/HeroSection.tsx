interface HeroSectionProps {
  name: string;
  persona: { emoji: string; label: string };
  tests: Array<{ label: string; done: boolean }>;
}

const HeroSection = ({ name, persona, tests }: HeroSectionProps) => {
  return (
    <section
      className="fade-up d1 text-center"
      style={{
        background: "hsl(var(--bg-2))",
        borderBottom: "0.5px solid hsl(var(--card-border))",
        padding: "48px 20px 44px",
      }}
    >
      {/* Eyebrow badge */}
      <div
        className="inline-block text-xs font-semibold uppercase tracking-[0.08em] rounded-full mb-[18px]"
        style={{
          color: "#B8860B",
          background: "#FFF8E6",
          border: "1px solid rgba(245,180,25,0.2)",
          padding: "5px 14px",
          letterSpacing: "0.08em",
        }}
      >
        ✦ Nedu đã chuẩn bị riêng điều này cho bạn
      </div>

      {/* Name */}
      <h1
        className="font-bold leading-[1.1] tracking-[-0.02em] mb-1.5"
        style={{
          fontSize: "clamp(28px, 7vw, 44px)",
          color: "hsl(var(--body))",
        }}
      >
        Chào bạn,<br />
        <em className="not-italic" style={{ color: "#B8860B" }}>{name}</em>
      </h1>

      {/* Persona pill */}
      <div
        className="inline-flex items-center gap-[7px] rounded-full mt-[18px]"
        style={{
          fontSize: "15px",
          fontWeight: 500,
          color: "hsl(var(--label))",
          background: "hsl(var(--bg-3))",
          padding: "6px 16px",
        }}
      >
        {persona.emoji} {persona.label}
      </div>

      {/* Test status tags */}
      <div className="flex flex-wrap gap-2 justify-center mt-4">
        {tests.map((t) => (
          <span
            key={t.label}
            className="flex items-center gap-[5px] rounded-full text-[13px] font-medium"
            style={{
              padding: "5px 13px",
              border: "1px solid",
              ...(t.done
                ? { color: "#1C7C3B", borderColor: "#A8D5B5", background: "#E8F5EC" }
                : { color: "hsl(var(--label))", borderColor: "hsl(var(--card-border))", background: "hsl(var(--bg-3))" }),
            }}
          >
            {t.done ? "✓" : "○"} {t.label}
          </span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
