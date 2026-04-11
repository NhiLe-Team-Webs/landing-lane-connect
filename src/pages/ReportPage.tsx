import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopBar from "@/components/nedu/TopBar";
import HeroSection from "@/components/nedu/HeroSection";
import ProfileSection from "@/components/nedu/ProfileSection";
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
    
    const apiUrl = `${import.meta.env.VITE_API_URL}/report/${token}`;

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
          <p className="text-ink-3 text-sm">Đang tải hồ sơ của bạn...</p>
        </div>
      </div>
    );
  }

  if (state === "error" || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4 max-w-sm px-6">
          <div className="text-5xl">🔍</div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Không tìm thấy hồ sơ
          </h1>
          <p className="text-ink-3 text-sm leading-relaxed">
            Link này đã hết hạn hoặc không tồn tại. Vui lòng kiểm tra email của bạn để lấy link mới.
          </p>
          <a
            href="https://test.nhi.sg"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold"
          >
            Làm bài test mới →
          </a>
        </div>
      </div>
    );
  }

  const testUrl = import.meta.env.VITE_TEST_URL || "https://test.nhi.sg";
  const neduUrl = import.meta.env.VITE_NEDU_URL || "https://nedu.nhi.sg";

  const tests = [
    { label: "MaxDiff", done: true, url: `${testUrl}/maxdiff/${token}` },
    { label: `MBTI · ${data.mbti_type ?? "?"}`, done: !!data.mbti_type },
    { label: `Enneagram · Type ${data.enneagram_type ?? "?"}`, done: !!data.enneagram_type },
    { label: "BaZi · Thần Số Học", done: !!data.bazi_data },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="print:hidden">
        <div className="relative">
          <TopBar />
          <a
            href={`${testUrl}/report/${token}?print=1`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold border transition-all hover:opacity-80"
            style={{ background: "rgba(245,180,25,0.15)", borderColor: "rgba(245,180,25,0.35)", color: "hsl(var(--primary))" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Tải PDF
          </a>
        </div>
        <HeroSection
          name={data.name || "Hồ sơ của bạn"}
          tagline=""
          persona={{
            emoji: getPersonaEmoji(data.persona_label),
            label: data.persona_label,
          }}
          tests={tests}
        />
      </div>

      <div className="max-w-[720px] mx-auto px-6 pb-0 pt-16 space-y-24 print:max-w-full print:pt-0 print:space-y-12">

        {/* MaxDiff iframe */}
        <section className="w-full animate-fade-in-up delay-200 print:break-inside-avoid">
          <div className="flex items-start gap-4 mb-8">
            <span className="text-3xl font-bold font-mono text-ink-3/50 leading-none">01</span>
            <div className="pt-1">
              <h3 className="text-xs font-bold tracking-[0.2em] text-ink-3 uppercase mb-1">Nhu cầu cá nhân</h3>
              <h2 className="text-3xl font-light text-ink-1">Kết quả <span className="font-medium italic">MaxDiff</span></h2>
            </div>
          </div>
          <div className="w-full h-[80vh] md:h-[1000px] bg-white/50 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-sm border border-glass-border">
            <iframe src={`${testUrl}/maxdiff/${token}?embed=1`} className="w-full h-full border-0 mix-blend-multiply" loading="lazy"></iframe>
          </div>
        </section>

        {/* MBTI iframe */}
        <section className="w-full animate-fade-in-up delay-300 print:break-inside-avoid">
          <div className="flex items-start gap-4 mb-8">
            <span className="text-3xl font-bold font-mono text-ink-3/50 leading-none">02</span>
            <div className="pt-1">
              <h3 className="text-xs font-bold tracking-[0.2em] text-ink-3 uppercase mb-1">Kiểu phân loại</h3>
              <h2 className="text-3xl font-light text-ink-1">Báo cáo <span className="font-medium italic">MBTI</span></h2>
            </div>
          </div>
          <div className="w-full h-[80vh] md:h-[1000px] bg-white/50 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-sm border border-glass-border">
            <iframe src={`${testUrl}/mbti/${token}?embed=1`} className="w-full h-full border-0 mix-blend-multiply" loading="lazy"></iframe>
          </div>
        </section>

        {/* Enneagram iframe */}
        <section className="w-full animate-fade-in-up delay-400 print:break-inside-avoid">
          <div className="flex items-start gap-4 mb-8">
            <span className="text-3xl font-bold font-mono text-ink-3/50 leading-none">03</span>
            <div className="pt-1">
              <h3 className="text-xs font-bold tracking-[0.2em] text-ink-3 uppercase mb-1">Xác định nhóm tính cách</h3>
              <h2 className="text-3xl font-light text-ink-1">Báo cáo <span className="font-medium italic">Enneagram</span></h2>
            </div>
          </div>
          <div className="w-full h-[80vh] md:h-[1000px] bg-white/50 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-sm border border-glass-border">
            <iframe src={`${testUrl}/enneagram/${token}?embed=1`} className="w-full h-full border-0 mix-blend-multiply" loading="lazy"></iframe>
          </div>
        </section>

        {/* Bazi iframe */}
        <section className="w-full animate-fade-in-up delay-500 print:break-inside-avoid">
          <div className="flex items-start gap-4 mb-8">
            <span className="text-3xl font-bold font-mono text-ink-3/50 leading-none">04</span>
            <div className="pt-1">
              <h3 className="text-xs font-bold tracking-[0.2em] text-ink-3 uppercase mb-1">Bản thể cốt lõi & Vận mệnh</h3>
              <h2 className="text-3xl font-light text-ink-1">Báo cáo <span className="font-medium italic">BaZi (Bát Tự)</span></h2>
            </div>
          </div>
          <div className="w-full h-[80vh] md:h-[1200px] bg-white/50 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-sm border border-glass-border">
            <iframe src={`${testUrl}/bazi-numerology/${token}?embed=1`} className="w-full h-full border-0 mix-blend-multiply" loading="lazy"></iframe>
          </div>
        </section>


        <div className="print:hidden">
          <CourseRecommendation
            courseName={data.ai_recommendation?.primary_course_name || data.primary_course_name || "Khoá học Đánh Thức Sức Mạnh"}
            why={data.ai_recommendation?.why_fits || data.why_fits || "Phù hợp trực tiếp với nhu cầu hiện tại của bạn."}
            courseUrl={data.ai_recommendation?.primary_course_url || data.primary_course_url || neduUrl}
          />
          <NextSteps />
          <ShareSection />
        </div>
      </div>
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default ReportPage;
