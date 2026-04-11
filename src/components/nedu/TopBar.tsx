const TopBar = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-3.5" style={{ background: "var(--topbar-gradient)" }}>
      <div>
        <img src="/nedu-logo.jpg" alt="Nedu" className="h-8 w-auto object-contain" />
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden sm:block font-mono text-[10px] font-bold tracking-widest uppercase text-secondary-foreground/50">
          Hồ sơ cá nhân · Bảo mật
        </span>
      </div>
    </header>
  );
};

export default TopBar;
