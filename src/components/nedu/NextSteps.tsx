const NextSteps = ({ pdfUrl }: { pdfUrl?: string }) => {
  const testUrl = import.meta.env.VITE_TEST_URL || "https://test.nhi.sg";
  const neduUrl = import.meta.env.VITE_NEDU_URL || "https://nedu.nhi.sg";

  const steps = [
    { icon: "🌸", title: "Đăng ký khoá học ngay", desc: "Điền form ngắn — team Nedu liên hệ trong 24h để xác nhận", href: neduUrl },
    { icon: "💬", title: "Nói chuyện với team Nedu", desc: "30 phút tư vấn miễn phí · Không áp lực", href: neduUrl },
    { icon: "🔮", title: "Làm thêm bài test", desc: "MBTI · Enneagram · BaZi để làm sâu hơn profile", href: testUrl },
    { icon: "📄", title: "Tải hồ sơ PDF", desc: "Lưu về máy — như món quà Nedu tặng riêng bạn", href: pdfUrl },
  ];

  return (
    <div className="mt-12 no-print">
      <div className="flex items-center gap-2.5 mb-2">
        <span className="w-[22px] h-[22px] rounded-full bg-surface-2 flex items-center justify-center text-[9px] shrink-0">💬</span>
        <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-ink-3">Bạn muốn làm gì tiếp theo?</span>
        <span className="flex-1 h-px bg-border" />
      </div>
      <div className="grid grid-cols-2 gap-3.5">
        {steps.map((s) => {
          const content = (
            <div className="bg-surface border border-border rounded-xl p-5 text-center cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] hover:border-primary/20 h-full flex flex-col justify-center">
              <div className="text-3xl mb-2.5">{s.icon}</div>
              <h4 className="font-display text-[15px] font-bold mb-1.5 text-foreground">{s.title}</h4>
              <p className="text-xs text-ink-3 leading-relaxed">{s.desc}</p>
            </div>
          );

          if (s.href) {
            return (
              <a key={s.title} href={s.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                {content}
              </a>
            );
          }

          return (
            <div key={s.title} onClick={s.action} className="h-full">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NextSteps;
