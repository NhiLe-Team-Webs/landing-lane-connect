import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ShareSection = ({ pdfUrl, testUrl = "https://test.nhi.sg" }: { pdfUrl?: string; tagline?: string; testUrl?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const shareText = `Tôi vừa khám phá hồ sơ tâm lý và năng lực cá nhân ở Nedu AI chuẩn lắm. Bạn cũng thử làm xem có hiểu thêm về mình không nha: ${testUrl}`;
    navigator.clipboard?.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <div
        className="text-center rounded-[20px] sm:rounded-[24px]"
        style={{
          background: "hsl(var(--bg-2))",
          border: "0.5px solid hsl(var(--card-border))",
          padding: "32px 22px",
        }}
      >
        <p
          className="font-bold tracking-[-0.02em] mb-2"
          style={{
            fontSize: "clamp(18px, 4vw, 22px)",
            color: "hsl(var(--body))",
          }}
        >
          💌 Giữ lại hành trình của bạn nhé
        </p>
        <p
          className="leading-[1.5] mb-[22px]"
          style={{
            fontSize: "15px",
            color: "hsl(var(--label))",
          }}
        >
          Nedu đã chuẩn bị sẵn bản PDF riêng cho bạn — đọc lại bất cứ lúc nào bạn muốn.
        </p>
        <div className="flex gap-2.5 justify-center flex-wrap">
          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold rounded-[14px] text-white transition-opacity active:opacity-80 flex items-center gap-2"
              style={{
                padding: "13px 22px",
                fontSize: "15px",
                background: "hsl(var(--body))",
              }}
            >
              📥 Lưu về máy của tôi
            </a>
          )}
          
          <Dialog>
            <DialogTrigger asChild>
              <button
                className="font-semibold rounded-[14px] transition-opacity active:opacity-70 flex items-center gap-2"
                style={{
                  padding: "13px 22px",
                  fontSize: "15px",
                  border: "1.5px solid rgba(245,180,25,0.2)",
                  background: "#FFF8E6",
                  color: "#B8860B",
                }}
              >
                📋 Chia sẻ hồ sơ
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md rounded-3xl" style={{ border: "0.5px solid hsl(var(--card-border))", background: "hsl(var(--background))" }}>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold font-display text-center">
                  Mời bạn bè cùng làm test
                </DialogTitle>
              </DialogHeader>
              <div className="p-4 bg-muted rounded-2xl text-center space-y-4 my-2">
                <p className="text-[15px] font-medium leading-relaxed text-ink-2">
                  "Tôi vừa khám phá hồ sơ tâm lý và năng lực cá nhân ở Nedu AI chuẩn lắm. Bạn cũng thử làm xem có hiểu thêm về mình không nha: {testUrl}"
                </p>
              </div>
              <div className="flex justify-center mt-2">
                <button
                  onClick={handleCopy}
                  className="font-bold rounded-xl transition-all active:scale-95"
                  style={{
                    padding: "12px 28px",
                    fontSize: "15px",
                    background: copied ? "#E8F5EC" : "#FFF8E6",
                    color: copied ? "#1C7C3B" : "#B8860B",
                    border: `1px solid ${copied ? "#A8D5B5" : "rgba(245,180,25,0.2)"}`
                  }}
                >
                  {copied ? "✓ Đã copy link chia sẻ" : "📋 Copy tin nhắn này"}
                </button>
              </div>
            </DialogContent>
          </Dialog>

        </div>
      </div>
    </div>
  );
};

export default ShareSection;
