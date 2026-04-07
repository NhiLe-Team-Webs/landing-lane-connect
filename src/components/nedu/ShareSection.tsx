import { PROFILE } from "@/data/mockProfile";
import { useState } from "react";

const ShareSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(PROFILE.tagline);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-12 text-center">
      <div className="inline-block w-full max-w-[480px] bg-surface border border-border rounded-2xl p-8">
        <h3 className="font-display text-lg font-bold mb-1.5">📄 Tải hồ sơ của bạn về</h3>
        <p className="text-[13px] text-ink-3 mb-5">
          Hồ sơ tâm lý cá nhân hoá — Nedu tặng riêng bạn.
        </p>
        <div className="rounded-xl p-3 px-4 font-display text-sm italic leading-relaxed mb-4 border-[1.5px]" style={{ background: "hsl(var(--gold-light))", borderColor: "hsl(var(--border-gold))", color: "hsl(var(--gold-dark))" }}>
          {PROFILE.tagline}
        </div>
        <div className="flex gap-2.5 justify-center flex-wrap">
          <button className="px-5 py-2.5 text-[13px] font-bold rounded-xl bg-foreground text-background border-none transition-all hover:opacity-90">
            📥 Tải PDF về máy
          </button>
          <button
            onClick={handleCopy}
            className="px-5 py-2.5 text-[13px] font-bold rounded-xl border-[1.5px] transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
            style={{ color: "hsl(var(--gold-dark))", background: "hsl(var(--gold-light))", borderColor: "hsl(var(--border-gold))" }}
          >
            {copied ? "✓ Đã copy!" : "📋 Copy tagline"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareSection;
