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

      {/* 2x2 Action Grid */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
        {steps.map((s) => (
          <a
            key={s.title}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-center cursor-pointer transition-all active:scale-[0.97] active:shadow-md"
            style={{
              padding: "20px 14px",
              background: "hsl(var(--card))",
              border: "0.5px solid hsl(var(--card-border))",
              borderRadius: "18px",
              minHeight: "130px",
              color: "inherit",
            }}
          >
            <div className="text-[30px] sm:text-[34px] mb-2.5 sm:mb-3 leading-none">{s.icon}</div>
            <p
              className="font-semibold leading-[1.3] tracking-[-0.01em] mb-1.5"
              style={{
                fontSize: "15px",
                color: "hsl(var(--body))",
              }}
            >
              {s.title}
            </p>
            <p className="text-[13px] leading-[1.45]" style={{ color: "hsl(var(--label))" }}>
              {s.desc}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NextSteps;
