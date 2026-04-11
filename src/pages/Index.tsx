import TopBar from "@/components/nedu/TopBar";
import Footer from "@/components/nedu/Footer";

const testUrl = import.meta.env.VITE_TEST_URL || "https://test.nhi.sg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      <main className="flex-1 flex items-center justify-center px-6 py-20" style={{ background: "var(--hero-gradient)" }}>
        {/* Orbs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsla(45, 91%, 53%, 0.1) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsla(153, 37%, 37%, 0.2) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-[560px] mx-auto text-center w-full space-y-8">
          <div className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wider font-mono uppercase border" style={{ background: "rgba(245,180,25,0.15)", borderColor: "rgba(245,180,25,0.25)", color: "hsl(var(--primary))" }}>
            ✦ Hồ sơ tâm lý · Nedu AI
          </div>

          <h1 className="font-display text-[clamp(28px,4vw,44px)] font-bold leading-tight tracking-tight" style={{ color: "#fff" }}>
            Khám phá hồ sơ<br />
            <em className="italic text-primary">tâm lý của bạn</em>
          </h1>

          <p className="font-display text-[clamp(15px,2vw,19px)] font-normal leading-relaxed max-w-[440px] mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
            Làm bài test để nhận báo cáo cá nhân hoá — tổng hợp từ MaxDiff, MBTI, Enneagram và BaZi.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={testUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold transition-all hover:opacity-90 hover:scale-105"
              style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
            >
              Làm bài test ngay →
            </a>
          </div>

          <p className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
            MaxDiff · MBTI · Enneagram · BaZi · Thần Số Học
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
