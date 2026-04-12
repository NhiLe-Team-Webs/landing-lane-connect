const TopBar = ({ pdfUrl }: { pdfUrl?: string }) => {
  return (
    <header
      className="sticky top-0 z-[100] flex items-center justify-between px-5"
      style={{
        height: "var(--topbar-h)",
        background: "rgba(255,255,255,0.88)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        borderBottom: "0.5px solid hsl(var(--card-border))",
      }}
    >
      <div>
        <img
          src="/logo-nedu.svg"
          alt="N-Education"
          className="h-7 w-7 object-contain rounded-[6px] block"
        />
      </div>
      <div className="flex items-center gap-3.5">
        {pdfUrl && (
          <span className="hidden sm:block text-xs font-medium tracking-[0.01em]" style={{ color: "hsl(var(--label))" }}>
            Chỉ riêng bạn mới thấy trang này
          </span>
        )}
        {pdfUrl && (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-[7px] rounded-full text-sm font-semibold whitespace-nowrap transition-opacity active:opacity-70"
            style={{
              background: "#FFF8E6",
              border: "1px solid rgba(245,180,25,0.2)",
              color: "#B8860B",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Tải PDF
          </a>
        )}
      </div>
    </header>
  );
};

export default TopBar;
