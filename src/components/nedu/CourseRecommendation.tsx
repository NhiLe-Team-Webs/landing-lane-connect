interface CourseRecommendationProps {
  courseName: string;
  why: string;
  courseUrl?: string;
}

const CourseRecommendation = ({ courseName, why, courseUrl = "https://nedu.vn" }: CourseRecommendationProps) => {
  return (
    <div className="fade-up d6" style={{ marginTop: "52px" }}>
      {/* Label row */}
      <div className="flex items-center gap-2.5 mb-3.5">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center text-[13px] shrink-0"
          style={{
            background: "hsl(var(--bg-2))",
            border: "0.5px solid hsl(var(--card-border))",
          }}
        >
          🎯
        </div>
        <span
          className="text-[13px] font-semibold uppercase tracking-[0.06em]"
          style={{ color: "hsl(var(--label))" }}
        >
          Nedu nghĩ khoá này sinh ra cho bạn
        </span>
        <div className="flex-1 h-[0.5px]" style={{ background: "hsl(var(--card-border))" }} />
      </div>

      {/* Dark recommendation card */}
      <div
        className="relative overflow-hidden rounded-[20px] sm:rounded-[24px]"
        style={{
          background: "hsl(var(--body))",
          padding: "28px 22px",
        }}
      >
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-3"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          Dựa trên những gì bạn vừa chia sẻ với Nedu
        </p>
        <h3
          className="font-bold leading-[1.2] mb-2.5 text-white"
          style={{ fontSize: "clamp(22px, 5vw, 30px)", letterSpacing: "-0.02em" }}
        >
          {courseName}
        </h3>
        <p
          className="font-normal leading-[1.65] max-w-[500px]"
          style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "rgba(255,255,255,0.55)" }}
        >
          {why}
        </p>
        <div className="flex gap-2.5 flex-wrap mt-[22px]">
          <a
            href={courseUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-[7px] font-bold rounded-[14px] transition-all active:opacity-80 active:scale-[0.98]"
            style={{
              padding: "13px 22px",
              background: "#F5B419",
              color: "#1a1000",
              fontSize: "15px",
            }}
          >
            🌸 Xem khoá học này →
          </a>
          <a
            href="https://m.me/neduedu"
            target="_blank"
            rel="noreferrer"
            className="font-semibold rounded-[14px] transition-all active:opacity-70"
            style={{
              padding: "13px 20px",
              fontSize: "15px",
              border: "1.5px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Hỏi Nedu trước nhé
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseRecommendation;
