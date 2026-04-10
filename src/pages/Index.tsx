import { PROFILE } from "@/data/mockProfile";
import TopBar from "@/components/nedu/TopBar";
import HeroSection from "@/components/nedu/HeroSection";
import ProfileSection from "@/components/nedu/ProfileSection";
import MaxDiffChart from "@/components/nedu/MaxDiffChart";
import CourseRecommendation from "@/components/nedu/CourseRecommendation";
import NextSteps from "@/components/nedu/NextSteps";
import ShareSection from "@/components/nedu/ShareSection";
import Footer from "@/components/nedu/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <HeroSection 
        name={PROFILE.name} 
        tagline={PROFILE.tagline} 
        persona={PROFILE.persona} 
        tests={PROFILE.tests} 
      />
      <div className="max-w-[720px] mx-auto px-6 pb-0">
        <ProfileSection
          num="01"
          label="Bạn là người như thế nào"
          title="Điều Nedu nhận ra<br/>ở bạn"
          subtitle="Tổng hợp từ MaxDiff · MBTI · Enneagram · BaZi"
          text={PROFILE.whoYouAre}
          variant="who"
        />
        <ProfileSection
          num="02"
          label="Điểm mạnh ít ai nhìn ra"
          title="Sức mạnh bạn<br/>chưa dùng hết"
          subtitle="Từ pattern chung của các bài test"
          text={PROFILE.hiddenStrength}
          variant="strength"
        />
        <ProfileSection
          num="03"
          label="Điều đang giữ bạn lại"
          title="Không phải điểm yếu —<br/>là điểm chưa giải quyết"
          subtitle="Góc nhìn từ tension nội tâm"
          text={PROFILE.whatHoldsBack}
          variant="holds"
        />
        <MaxDiffChart />
        <ProfileSection
          num="04"
          label="Bước tiếp theo"
          title="Hành trình phù hợp<br/>nhất với bạn lúc này"
          subtitle="Gợi ý dựa trên toàn bộ profile"
          text={PROFILE.nextStep}
          variant="next"
        />
        <CourseRecommendation 
          courseName={PROFILE.recommendation.courseName} 
          why={PROFILE.recommendation.why} 
        />
        <NextSteps />
        <ShareSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
