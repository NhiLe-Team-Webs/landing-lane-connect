const steps = [
  { icon: "🌸", title: "Đăng ký khoá học ngay", desc: "Điền form ngắn — team Nedu liên hệ trong 24h để xác nhận" },
  { icon: "💬", title: "Nói chuyện với team Nedu", desc: "30 phút tư vấn miễn phí · Không áp lực" },
  { icon: "🔮", title: "Làm thêm bài test", desc: "MBTI · Enneagram · BaZi để làm sâu hơn profile" },
  { icon: "📄", title: "Tải hồ sơ PDF", desc: "Lưu về máy — như món quà Nedu tặng riêng bạn" },
];

const NextSteps = () => (
  <div className="mt-12">
    <div className="flex items-center gap-2.5 mb-2">
      <span className="w-[22px] h-[22px] rounded-full bg-surface-2 flex items-center justify-center text-[9px] shrink-0">💬</span>
      <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-ink-3">Bạn muốn làm gì tiếp theo?</span>
      <span className="flex-1 h-px bg-border" />
    </div>
    <div className="grid grid-cols-2 gap-3.5">
      {steps.map((s) => (
        <div
          key={s.title}
          className="bg-surface border border-border rounded-xl p-5 text-center cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] hover:border-primary/20"
        >
          <div className="text-3xl mb-2.5">{s.icon}</div>
          <h4 className="font-display text-[15px] font-bold mb-1.5">{s.title}</h4>
          <p className="text-xs text-ink-3 leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default NextSteps;
