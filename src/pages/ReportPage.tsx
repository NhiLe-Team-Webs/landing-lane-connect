import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopBar from "@/components/nedu/TopBar";
import HeroSection from "@/components/nedu/HeroSection";
import CourseRecommendation from "@/components/nedu/CourseRecommendation";
import NextSteps from "@/components/nedu/NextSteps";
import ShareSection from "@/components/nedu/ShareSection";
import Footer from "@/components/nedu/Footer";

type State = "loading" | "error" | "success";

const PERSONA_EMOJI_MAP: Record<string, string> = {
  "Sinh viên / Học sinh": "🎓",
  "Mới đi làm 1–3 năm": "🌱",
  "Nhân viên văn phòng / Corporate": "🧭",
  "Freelancer / Tự kinh doanh": "🦋",
  "Digital Nomad / Creator / YouTuber": "🧳",
  "Quản lý / Chủ doanh nghiệp nhỏ": "💼",
  "Phụ nữ / Mẹ cân bằng gia đình & sự nghiệp": "🌸",
  "Giáo viên / Công chức / Viên chức": "🌾",
  "Lãnh đạo cấp cao / Doanh nhân": "🏔️",
};

function getPersonaEmoji(label: string): string {
  return PERSONA_EMOJI_MAP[label] ?? "✨";
}

const ReportPage = () => {
  const { token } = useParams<{ token: string }>();
  const [state, setState] = useState<State>("loading");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!token) return;
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const apiUrl = `${(import.meta as any).env.VITE_API_URL || "https://nedu-api.nhi.sg"}/api/report/${token}`;

    fetch(apiUrl)
      .then((r) => {
        if (!r.ok) throw new Error("Not found");
        return r.json();
      })
      .then((data) => {
        setData(data);
        setState("success");
      })
      .catch(() => setState("error"));
  }, [token]);

  if (state === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-ink-3 text-sm">Nedu đang chuẩn bị hồ sơ riêng cho bạn...</p>
        </div>
      </div>
    );
  }

  const testUrl = (import.meta as any).env.VITE_TEST_URL || "https://test.nhi.sg";
  const iframeUrl = (import.meta as any).env.VITE_IFRAME_URL || "https://test.nhi.sg";

  if (state === "error" || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4 max-w-sm px-6">
          <div className="text-5xl">🌿</div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Hồ sơ không còn ở đây
          </h1>
          <p className="text-ink-3 text-sm leading-relaxed">
            Link đã hết hạn hoặc không còn hiệu lực. Kiểm tra lại email — hoặc làm bài test mới để nhận hồ sơ mới nhất của bạn.
          </p>
          <a
            href={testUrl}
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold"
          >
            Làm bài test mới →
          </a>
        </div>
      </div>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const neduUrl = (import.meta as any).env.VITE_NEDU_URL || "https://nedu.nhi.sg";
  const pdfUrl = `${testUrl}/report/${token}?print=1`;

  const tests = [
    { label: "Nhu cầu & Ưu tiên (MaxDiff)", done: true, url: `${testUrl}/maxdiff/${token}` },
    { label: "Giải mã Tính cách (MBTI)", done: true },
    { label: "Phân tích Động lực (Enneagram)", done: true },
    { label: "Bản đồ Vận mệnh (BaZi)", done: true },
  ];

  const primaryCourseName = data.ai_recommendation?.primary_course_name || data.primary_course_name || "Là Chính Mình";
  const whyFits = data.ai_recommendation?.why_fits || data.why_fits || "Bạn đang ở giai đoạn tìm hiểu bản thân — và đó là điều dũng cảm lắm đó. Khoá học này giúp bạn gỡ bỏ những rào cản tâm lý, tìm ra tiếng nói thật của mình và bước đi tự tin hơn mỗi ngày.";
  const primaryCourseUrl = data.ai_recommendation?.primary_course_url || data.primary_course_url || "https://nedu.nhi.sg/program";
  const tagline = data.ai_recommendation?.tagline || data.tagline || "";

  return (
    <div className="min-h-screen bg-background">
      <div className="print:hidden">
        <TopBar pdfUrl={pdfUrl} />
        <HeroSection
          name={data.name || "Hồ sơ của bạn"}
          persona={{
            emoji: getPersonaEmoji(data.persona_label),
            label: data.persona_label || "Đang tìm hướng cho mình",
          }}
          tests={tests}
        />
      </div>

      <div className="max-w-[680px] md:max-w-[740px] mx-auto px-5 print:max-w-full print:px-0">
        
        {/* 01 MaxDiff */}
        <div className="pt-[52px] sm:pt-[72px] fade-up d2 print:break-inside-avoid print:pt-4">
          <p className="text-[13px] font-bold text-placeholder tracking-[0.04em] mb-1.5">01 · Bạn đang cần gì nhất lúc này?</p>
          <h2 className="text-[clamp(22px,5vw,32px)] font-bold tracking-[-0.025em] leading-[1.15] text-body mb-5 sm:mb-6">Những điều quan trọng nhất với bạn</h2>
          <div className="w-full bg-bg-2 rounded-[20px] sm:rounded-[24px] overflow-hidden border-[0.5px] border-card-border shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <iframe src={`${iframeUrl}/maxdiff/${token}?embed=1`} className="w-full h-[82svh] md:h-[1020px] block" loading="lazy"></iframe>
          </div>
        </div>

        {/* 02 MBTI */}
        <div className="pt-[52px] sm:pt-[72px] fade-up d3 print:break-inside-avoid print:pt-8">
          <p className="text-[13px] font-bold text-placeholder tracking-[0.04em] mb-1.5">02 · Bạn là kiểu người như thế nào?</p>
          <h2 className="text-[clamp(22px,5vw,32px)] font-bold tracking-[-0.025em] leading-[1.15] text-body mb-5 sm:mb-6">Tính cách và cách bạn nhìn thế giới</h2>
          <div className="w-full bg-bg-2 rounded-[20px] sm:rounded-[24px] overflow-hidden border-[0.5px] border-card-border shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <iframe src={`${iframeUrl}/mbti/${token}?embed=1`} className="w-full h-[82svh] md:h-[1020px] block" loading="lazy"></iframe>
          </div>
        </div>

        {/* 03 Enneagram */}
        <div className="pt-[52px] sm:pt-[72px] fade-up d4 print:break-inside-avoid print:pt-8">
          <p className="text-[13px] font-bold text-placeholder tracking-[0.04em] mb-1.5">03 · Điều gì đang thúc đẩy bạn từ bên trong?</p>
          <h2 className="text-[clamp(22px,5vw,32px)] font-bold tracking-[-0.025em] leading-[1.15] text-body mb-5 sm:mb-6">Động lực sâu bên trong của bạn</h2>
          <div className="w-full bg-bg-2 rounded-[20px] sm:rounded-[24px] overflow-hidden border-[0.5px] border-card-border shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <iframe src={`${iframeUrl}/enneagram/${token}?embed=1`} className="w-full h-[82svh] md:h-[1020px] block" loading="lazy"></iframe>
          </div>
        </div>

        {/* 04 BaZi */}
        <div className="pt-[52px] sm:pt-[72px] fade-up d5 print:break-inside-avoid print:pt-8">
          <p className="text-[13px] font-bold text-placeholder tracking-[0.04em] mb-1.5">04 · Năng lượng bẩm sinh và vận mệnh của bạn</p>
          <h2 className="text-[clamp(22px,5vw,32px)] font-bold tracking-[-0.025em] leading-[1.15] text-body mb-5 sm:mb-6">Hồ sơ Bát Tự & Thần Số Học</h2>
          <div className="w-full bg-bg-2 rounded-[20px] sm:rounded-[24px] overflow-hidden border-[0.5px] border-card-border shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <iframe src={`${iframeUrl}/bazi-numerology/${token}?embed=1`} className="w-full h-[90svh] md:h-[1240px] block" loading="lazy"></iframe>
          </div>
        </div>

        {/* BOTTOM CONTENT — no print */}
        <div className="no-print pb-[72px] sm:pb-[96px]">
          <div className="h-[0.5px] bg-card-border mt-10"></div>

          <CourseRecommendation
            courseName={primaryCourseName}
            why={whyFits}
            courseUrl={primaryCourseUrl}
          />
          
          <NextSteps pdfUrl={pdfUrl} />
          
          <ShareSection pdfUrl={pdfUrl} tagline={tagline} testUrl={testUrl} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReportPage;
