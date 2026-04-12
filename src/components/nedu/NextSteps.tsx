const NextSteps = ({ pdfUrl }: { pdfUrl?: string }) => {
  const testUrl = import.meta.env.VITE_TEST_URL || "https://test.nhi.sg";
  const neduUrl = import.meta.env.VITE_NEDU_URL || "https://nedu.nhi.sg";

  const steps = [
    { icon: "🌸", title: "Tôi muốn học ngay", desc: "Nedu sẽ liên hệ bạn trong vòng 24 giờ", href: "https://nedu.nhi.sg/program" },
    { icon: "💬", title: "Nói chuyện với Nedu", desc: "Chill thôi, 30 phút — không áp lực gì đâu", href: "https://www.facebook.com/neducation.sg" },
    { icon: "🔮", title: "Khám phá thêm về mình", desc: "BaZi · Thần Số Học và nhiều hơn nữa", href: testUrl },
    { icon: "📄", title: "Lưu hồ sơ của tôi", desc: "Đọc lại bất cứ lúc nào bạn cần", href: pdfUrl },
  ];

  return (
    <div style={{ marginTop: "52px" }}>
      {/* Label row */}
      <div className="flex items-center gap-2.5 mb-3.5">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center text-[13px] shrink-0"
          style={{
            background: "hsl(var(--bg-2))",
            border: "0.5px solid hsl(var(--card-border))",
          }}
        >
          💬
        </div>
        <span
          className="text-[13px] font-semibold uppercase tracking-[0.06em]"
          style={{ color: "hsl(var(--label))" }}
        >
          Bước tiếp theo của bạn là gì?
        </span>
        <div className="flex-1 h-[0.5px]" style={{ background: "hsl(var(--card-border))" }} />
      </div>

      {/* Primary action — full width, visually dominant */}
      <a
        href={steps[0].href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between w-full transition-all active:scale-[0.98]"
        style={{
          padding: "20px 22px",
          background: "hsl(var(--body))",
          borderRadius: "18px",
          color: "inherit",
          marginBottom: "10px",
        }}
      >
        <div className="flex items-center gap-4">
          <div className="text-[32px] leading-none">{steps[0].icon}</div>
          <div className="text-left">
            <p className="font-bold leading-[1.2] tracking-[-0.01em] text-white" style={{ fontSize: "16px" }}>
              {steps[0].title}
            </p>
            <p className="text-[13px] leading-[1.4] mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
              {steps[0].desc}
            </p>
          </div>
        </div>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "20px" }}>→</span>
      </a>

      {/* Secondary actions — 3-column row */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
        {steps.slice(1).map((s) => (
          <a
            key={s.title}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-center transition-all active:scale-[0.97]"
            style={{
              padding: "18px 10px",
              background: "hsl(var(--card))",
              border: "0.5px solid hsl(var(--card-border))",
              borderRadius: "16px",
              minHeight: "110px",
              color: "inherit",
            }}
          >
            <div className="text-[28px] sm:text-[30px] mb-2 leading-none">{s.icon}</div>
            <p
              className="font-semibold leading-[1.3] tracking-[-0.01em] mb-1"
              style={{ fontSize: "13px", color: "hsl(var(--body))" }}
            >
              {s.title}
            </p>
            <p className="text-[11px] leading-[1.4]" style={{ color: "hsl(var(--label))" }}>
              {s.desc}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NextSteps;
