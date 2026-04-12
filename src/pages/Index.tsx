import TopBar from "@/components/nedu/TopBar";
import Footer from "@/components/nedu/Footer";

const testUrl = import.meta.env.VITE_TEST_URL || "https://test.nhi.sg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      <main
        className="flex-1 flex items-center justify-center px-6 py-20 fade-up d1 text-center relative overflow-hidden"
        style={{
          background: "hsl(var(--bg-2))",
          borderBottom: "0.5px solid hsl(var(--card-border))",
        }}
      >
        <div className="relative z-10 max-w-[560px] mx-auto text-center w-full space-y-8">
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[11px] font-semibold tracking-[0.06em] uppercase"
            style={{
              color: "#B8860B",
              background: "#FFF8E6",
              border: "1px solid rgba(245,180,25,0.2)",
            }}
          >
            ✦ Hồ sơ tâm lý cá nhân
          </div>

          <h1
            className="font-bold leading-[1.08] tracking-[-0.035em] text-[#1D1D1F]"
            style={{
              fontSize: "clamp(36px, 6vw, 56px)",
            }}
          >
            Hiểu bản thân hơn<br />
            <span style={{ color: "#B8860B" }}>
              bất kỳ ai.
            </span>
          </h1>

          <p
            className="font-medium leading-[1.4] max-w-[460px] mx-auto text-[#86868B]"
            style={{
              fontSize: "clamp(17px, 2.5vw, 21px)",
              letterSpacing: "-0.015em",
            }}
          >
            5 phút để nhận báo cáo tâm lý cá nhân — riêng cho bạn, miễn phí, kết quả ngay.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href={testUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95"
              style={{
                background: "#1D1D1F",
                color: "#F5F5F7",
                fontSize: "15px",
                letterSpacing: "-0.01em",
              }}
            >
              Khám phá bản thân →
            </a>
          </div>

          <p
            className="text-[11px] font-medium uppercase tracking-[0.08em] mt-8 text-[#A1A1A6]"
          >
            5 phút · Miễn phí · Kết quả ngay
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
