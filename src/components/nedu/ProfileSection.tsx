import { useEffect, useRef, useState } from "react";

interface ProfileSectionProps {
  num: string;
  label: string;
  title: string;
  subtitle: string;
  text: string;
  variant: "who" | "strength" | "holds" | "next";
}

const accentColors: Record<string, string> = {
  who: "linear-gradient(180deg, hsl(45,91%,53%), hsl(30,65%,49%))",
  strength: "linear-gradient(180deg, hsl(153,37%,37%), #86EFAC)",
  holds: "linear-gradient(180deg, hsl(14,60%,45%), #FCA5A5)",
  next: "linear-gradient(180deg, hsl(263,70%,42%), #C4B5FD)",
};

const cardBg: Record<string, string> = {
  who: "",
  strength: "linear-gradient(135deg, hsl(var(--surface)), hsl(var(--green-ok)))",
  holds: "",
  next: "linear-gradient(135deg, hsl(var(--surface)), hsl(var(--purple-light)))",
};

const renderText = (text: string) => {
  return text.split("\n\n").map((para, i) => {
    const html = para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>');
    return <p key={i} className={i > 0 ? "mt-4" : ""} dangerouslySetInnerHTML={{ __html: html }} />;
  });
};

const ProfileSection = ({ num, label, title, subtitle, text, variant }: ProfileSectionProps) => {
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
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
      }}
    >
      <div className="flex items-center gap-2.5 mb-2">
        <span className="w-[22px] h-[22px] rounded-full bg-surface-2 flex items-center justify-center text-[9px] font-mono font-bold text-ink-3 shrink-0">
          {num}
        </span>
        <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-ink-3">{label}</span>
        <span className="flex-1 h-px bg-border" />
      </div>
      <h2 className="font-display text-[clamp(20px,2.8vw,26px)] font-bold leading-tight tracking-tight mb-1" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="text-[13px] text-ink-3 italic mb-5">{subtitle}</p>
      <div
        className="relative rounded-2xl p-7 border border-border overflow-hidden"
        style={{ background: cardBg[variant] || "hsl(var(--surface))" }}
      >
        <div className="absolute top-0 left-0 w-[3px] h-full rounded-l-2xl" style={{ background: accentColors[variant] }} />
        <div className="text-base text-ink-2 leading-[1.85] font-light">
          {renderText(text)}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
