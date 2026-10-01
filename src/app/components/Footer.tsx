const values = [
  { icon: "👥", title: "شريكك في نجاحك", subtitle: "من البداية إلى الانتشار" },
  { icon: "💡", title: "حلول إبداعية", subtitle: "حسب احتياجك" },
  { icon: "🕐", title: "التزام بالمواعيد", subtitle: "ومواعيد المعارض" },
  { icon: "⭐", title: "جودة عالية", subtitle: "في التنفيذ والطباعة" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a2a6c] py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap justify-center sm:justify-start gap-8">
          {values.map((v, i) => (
            <div key={i} className="flex flex-col items-center text-center min-w-[80px]">
              <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-[#f0c040] flex items-center justify-center mb-2">
                <span className="text-xl">{v.icon}</span>
              </div>
              <p className="text-[#f0c040] text-sm font-bold leading-tight">{v.title}</p>
              <p className="text-white/70 text-xs leading-tight mt-0.5">{v.subtitle}</p>
            </div>
          ))}
        </div>
        <a
          href="mailto:info@4idm.com.sa"
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full px-5 py-2.5 text-white text-sm"
        >
          <span>✉️</span>
          <span>info@4idm.com.sa</span>
        </a>
      </div>
      <p className="text-center text-white/30 text-xs mt-6">
        © {new Date().getFullYear()} أربعة أفكار للدعاية والإعلان — جميع الحقوق محفوظة
      </p>
    </footer>
  );
}
