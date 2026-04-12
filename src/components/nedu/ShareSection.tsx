import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const PLATFORMS = [
  {
    name: "Telegram",
    color: "#229ED9",
    getUrl: (text: string, url: string) =>
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    color: "#25D366",
    getUrl: (text: string, url: string) =>
      `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    color: "#1877F2",
    getUrl: (_text: string, url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "X / Twitter",
    color: "#000000",
    getUrl: (text: string, url: string) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.736-8.849L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Email",
    color: "#6B7280",
    getUrl: (text: string, url: string) =>
      `mailto:?subject=${encodeURIComponent("Thử làm bài test tâm lý ở Nedu AI")}&body=${encodeURIComponent(`${text} ${url}`)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const ShareSection = ({ pdfUrl, testUrl = "https://test.nhi.sg" }: { pdfUrl?: string; tagline?: string; testUrl?: string }) => {
  const [showPanel, setShowPanel] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareMessage = `Tôi vừa khám phá hồ sơ tâm lý và năng lực cá nhân ở Nedu AI chuẩn lắm. Bạn cũng thử làm xem có hiểu thêm về mình không nha:`;

  const handleShare = async () => {
    const shareData = {
      title: "Nedu - Thấu hiểu chính mình",
      text: shareMessage,
      url: testUrl,
    };

    if (typeof navigator.share === "function") {
      try {
        const canShare = !navigator.canShare || navigator.canShare(shareData);
        if (canShare) {
          await navigator.share(shareData);
          return;
        }
      } catch (e) {
        if (e instanceof DOMException && e.name === "AbortError") return;
      }
    }

    setShowPanel(true);
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(`${shareMessage} ${testUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePlatform = (platform: typeof PLATFORMS[number]) => {
    window.open(platform.getUrl(shareMessage, testUrl), "_blank", "noopener,noreferrer");
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

          <button
            onClick={handleShare}
            className="font-semibold rounded-[14px] transition-opacity active:opacity-70 flex items-center gap-2"
            style={{
              padding: "13px 22px",
              fontSize: "15px",
              border: "1.5px solid rgba(245,180,25,0.2)",
              background: "#FFF8E6",
              color: "#B8860B",
            }}
          >
            🤝 Chia sẻ với bạn bè
          </button>
        </div>
      </div>

      {/* Desktop share panel — only shown when Web Share API is unavailable */}
      <Dialog open={showPanel} onOpenChange={setShowPanel}>
        <DialogContent
          className="sm:max-w-sm rounded-3xl"
          style={{
            border: "0.5px solid hsl(var(--card-border))",
            background: "hsl(var(--background))",
            padding: "28px 24px 24px",
          }}
        >
          <DialogHeader>
            <DialogTitle className="text-[17px] font-bold font-display text-center">
              Chia sẻ với bạn bè
            </DialogTitle>
          </DialogHeader>

          {/* Platform grid */}
          <div className="grid grid-cols-5 gap-y-4 gap-x-2 mt-3">
            {PLATFORMS.map((platform) => (
              <button
                key={platform.name}
                onClick={() => handlePlatform(platform)}
                className="flex flex-col items-center gap-1.5 group"
              >
                <div
                  className="w-14 h-14 rounded-[16px] flex items-center justify-center transition-transform active:scale-90 group-hover:opacity-90"
                  style={{ background: platform.color }}
                >
                  {platform.icon}
                </div>
                <span
                  className="text-center leading-tight"
                  style={{ fontSize: "10px", color: "hsl(var(--label))" }}
                >
                  {platform.name}
                </span>
              </button>
            ))}
          </div>

          {/* Divider */}
          <div
            className="my-4"
            style={{ height: "0.5px", background: "hsl(var(--card-border))" }}
          />

          {/* Message preview */}
          <p
            className="text-center leading-relaxed mb-4"
            style={{ fontSize: "13px", color: "hsl(var(--label))" }}
          >
            "{shareMessage} {testUrl}"
          </p>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="w-full font-bold rounded-xl transition-all active:scale-95"
            style={{
              padding: "13px",
              fontSize: "15px",
              background: copied ? "#E8F5EC" : "#FFF8E6",
              color: copied ? "#1C7C3B" : "#B8860B",
              border: `1px solid ${copied ? "#A8D5B5" : "rgba(245,180,25,0.2)"}`,
            }}
          >
            {copied ? "✓ Đã copy tin nhắn" : "📋 Copy tin nhắn"}
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShareSection;
