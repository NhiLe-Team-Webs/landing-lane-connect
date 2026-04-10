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
    fetch(`https://test.nhi.sg/api/report/${token}`)
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

  const tests = [
    { label: "MaxDiff", done: true },
    { label: `MBTI · ${data.mbti_type ?? "?"}`, done: !!data.mbti_type },
    { label: `Enneagram · Type ${data.enneagram_type ?? "?"}`, done: !!data.enneagram_type },
    { label: "BaZi", done: !!data.bazi_data },
    { label: "Thần Số Học", done: !!data.numerology_data },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <HeroSection
        name="Hồ sơ của bạn"
        tagline=""
        persona={{
          emoji: getPersonaEmoji(data.persona_label),
          label: data.persona_label,
        }}
        tests={tests}
      />
      <div className="max-w-[720px] mx-auto px-6 pb-0">
        <ProfileSection
          num="01"
          label="Bạn là người như thế nào"
          title="Điều Nedu nhận ra<br/>ở bạn"
          subtitle="Tổng hợp từ MaxDiff · MBTI · Enneagram · BaZi"
          text={data.bazi_interp ?? "Đang tải phân tích..."}
          variant="who"
        />
        <ProfileSection
          num="02"
          label="Điểm mạnh ít ai nhìn ra"
          title="Sức mạnh bạn<br/>chưa dùng hết"
          subtitle="Từ pattern chung của các bài test"
          text={data.numerology_interp ?? "Đang tải phân tích..."}
          variant="strength"
        />
        <ProfileSection
          num="03"
          label="MBTI"
          title="Góc nhìn<br/>logic &amp; hành vi"
          subtitle="Từ bài kiểm tra Myer-Briggs"
          text={data.mbti_desc ?? "Bạn chưa hoàn thành bài test MBTI. <a href='https://test.nhi.sg' class='underline hover:text-primary transition-colors'>Vào đây để làm →</a>"}
          variant="holds"
        />
        <ProfileSection
          num="04"
          label="Enneagram"
          title="Động lực nội tâm<br/>&amp; nỗi sợ sâu thẳm"
          subtitle="Từ bài kiểm tra Enneagram"
          text={data.enneagram_desc ?? "Bạn chưa hoàn thành bài test Enneagram. <a href='https://test.nhi.sg' class='underline hover:text-primary transition-colors'>Vào đây để làm →</a>"}
          variant="next"
        />
        <CourseRecommendation
          courseName={data.primary_course_name}
          why={data.why_fits}
          courseUrl={data.primary_course_url}
        />
        <NextSteps />
        <ShareSection />
      </div>
      <Footer />
    </div>
  );
};

export default ReportPage;
