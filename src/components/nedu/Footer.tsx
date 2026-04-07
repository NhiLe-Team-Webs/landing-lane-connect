const Footer = () => (
  <footer className="bg-foreground py-8 px-6 text-center mt-16">
    <p className="font-display text-lg font-bold text-primary mb-1.5">nedu.vn</p>
    <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
      Giáo dục người lớn · NhiLe Holdings · Singapore
    </p>
    <div className="flex gap-4 justify-center flex-wrap">
      {["nedu.vn", "Làm lại bài test", "Chính sách bảo mật", "Liên hệ"].map((link) => (
        <span key={link} className="text-[11px] cursor-pointer transition-colors hover:text-secondary-foreground/75" style={{ color: "rgba(255,255,255,0.4)" }}>
          {link}
        </span>
      ))}
    </div>
  </footer>
);

export default Footer;
