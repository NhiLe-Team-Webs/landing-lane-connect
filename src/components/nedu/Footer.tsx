const Footer = () => (
  <footer
    className="no-print text-center"
    style={{
      background: "hsl(var(--body))",
      padding: "44px 20px",
    }}
  >
    <img 
      src="https://nedu.nhi.sg/picture/nedu.svg" 
      alt="N-Education" 
      className="h-12 w-auto mx-auto mb-6 object-contain" 
    />
    
    <div className="flex gap-6 justify-center flex-wrap">
      {[
        { label: "nedu.nhi.sg", url: "https://nedu.nhi.sg" },
        { label: "Điều khoản sử dụng", url: "https://nedu.nhi.sg/terms" },
        { label: "Chính sách bảo mật", url: "https://nedu.nhi.sg/policy" },
        { label: "Liên hệ", url: "https://nedu.nhi.sg/contact" },
      ].map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] transition-colors active:text-white/75"
          style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
        >
          {link.label}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
