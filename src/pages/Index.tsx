import TopBar from "@/components/nedu/TopBar";
import Footer from "@/components/nedu/Footer";

const testUrl = import.meta.env.VITE_TEST_URL || "https://test.nhi.sg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      <main
        className="px-6 pt-16 pb-16 fade-up d1 text-center relative overflow-hidden"
        style={{
          background: "hsl(var(--bg-2))",
          borderBottom: "0.5px solid hsl(var(--card-border))",
        }}
      >
        <div className="relative z-10 max-w-[560px] mx-auto text-center w-full">
          {/* Badge — curiosity-first, not label-first */}
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[11px] font-semibold tracking-[0.06em] uppercase mb-7"
            style={{
              color: "#B8860B",
              background: "#FFF8E6",
              border: "1px solid rgba(245,180,25,0.2)",
            }}
          >
            ✦ Miễn phí · Kết quả ngay
          </div>

          {/* Headline */}
          <h1
            className="font-bold leading-[1.08] tracking-[-0.035em] text-[#1D1D1F] mb-5"
            style={{ fontSize: "clamp(36px, 6vw, 56px)" }}
          >
            Hiểu bản thân hơn<br />
            <span style={{ color: "#B8860B" }}>bất kỳ ai.</span>
          </h1>

          {/* Subtext */}
          <p
            className="font-medium leading-[1.5] max-w-[420px] mx-auto text-[#86868B] mb-8"
            style={{ fontSize: "clamp(16px, 2.5vw, 19px)", letterSpacing: "-0.015em" }}
          >
            Nhận báo cáo tâm lý cá nhân — riêng cho bạn, chỉ trong 5 phút.
          </p>

          {/* Trust signals — ABOVE CTA so user has reason before decision */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-[12px] font-medium text-[#A1A1A6] flex items-center gap-1.5">
              <span style={{ color: "#B8860B" }}>✓</span> Không cần tài khoản
            </span>
            <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#D1D1D6", display: "inline-block" }} />
            <span className="text-[12px] font-medium text-[#A1A1A6] flex items-center gap-1.5">
              <span style={{ color: "#B8860B" }}>✓</span> Hoàn toàn riêng tư
            </span>
            <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#D1D1D6", display: "inline-block" }} />
            <span className="text-[12px] font-medium text-[#A1A1A6] flex items-center gap-1.5">
              <span style={{ color: "#B8860B" }}>✓</span> Miễn phí 100%
            </span>
          </div>

          {/* CTA */}
          <a
            href={testUrl}
            className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95"
            style={{
              background: "#1D1D1F",
              color: "#F5F5F7",
              fontSize: "16px",
              letterSpacing: "-0.01em",
              boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
            }}
          >
            Khám phá bản thân →
          </a>

          {/* Social proof — below CTA, reinforces after intent */}
          <p className="text-[12px] text-[#B8B8C0] mt-5 font-medium">
            ★★★★★ &nbsp;Hàng nghìn người đã khám phá bản thân với Nedu
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
