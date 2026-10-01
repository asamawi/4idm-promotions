import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "التصميم",
    color: "bg-[#3a7d44]",
    icon: "✏️",
    items: ["تصميم هوية للشركات", "تصميم رسومات كرتونية"],
  },
  {
    title: "الطباعة وأنواعها",
    color: "bg-[#1a4f8a]",
    icon: "🖨️",
    items: ["الطباعة الداخلية والخارجية", "طباعة حرارية ( DTF - UV )"],
  },
  {
    title: "التصنيع",
    color: "bg-[#e07b00]",
    icon: "⚙️",
    items: ["تصنيع استاندات معارض", "تصنيع حروف بارزة"],
  },
  {
    title: "الهدايا والترويج",
    color: "bg-[#c49a00]",
    icon: "🎁",
    items: ["الطباعة على الهدايا الدعائية", "تفصيل الملابس الدعائية"],
  },
  {
    title: "التسويق",
    color: "bg-[#1a2a6c]",
    icon: "📢",
    items: ["طرح الافكار التسويقية", "تنظيم المعارض والمؤتمرات"],
  },
];

const values = [
  { icon: "👥", title: "شريكك في نجاحك", subtitle: "من البداية إلى الانتشار" },
  { icon: "💡", title: "حلول إبداعية", subtitle: "حسب احتياجك" },
  { icon: "🕐", title: "التزام بالمواعيد", subtitle: "ومواعيد المعارض" },
  { icon: "⭐", title: "جودة عالية", subtitle: "في التنفيذ والطباعة" },
];

export default function Home() {
  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] bg-white flex items-center justify-center overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-[-80px] left-[-80px] w-80 h-80 rounded-full bg-[#1a2a6c]/5 pointer-events-none" />
        <div className="absolute bottom-[-60px] right-[-60px] w-64 h-64 rounded-full bg-[#f0c040]/10 pointer-events-none" />

        <div className="relative z-10 text-center px-6 py-16 max-w-2xl mx-auto">
          {/* Full brand logo */}
          <div className="mx-auto mb-8 w-72 md:w-96 relative aspect-square">
            <Image
              src="/logo-hero.png"
              alt="أربعة أفكار للدعاية والإعلان — Four Ideas Advertising"
              fill
              sizes="(max-width: 768px) 288px, 384px"
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* H1 visually hidden but present for SEO */}
          <h1 className="sr-only">أربعة أفكار للدعاية والإعلان — Four Ideas Advertising</h1>

          <p className="text-[#e07b00] text-xl font-medium mb-10">
            حلول إعلانية متكاملة ... من الفكرة إلى التنفيذ
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-[#1a2a6c] text-white font-black px-8 py-3 rounded-full text-lg hover:bg-[#0d1540] transition-colors shadow-lg"
            >
              اكتشف خدماتنا
            </Link>
            <Link
              href="/about"
              className="border-2 border-[#1a2a6c] text-[#1a2a6c] font-bold px-8 py-3 rounded-full text-lg hover:bg-[#1a2a6c]/10 transition-colors"
            >
              من نحن
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#1a2a6c]/5 border-2 border-[#f0c040] flex items-center justify-center mb-3">
                <span className="text-2xl">{v.icon}</span>
              </div>
              <p className="text-[#1a2a6c] font-black text-base leading-tight">{v.title}</p>
              <p className="text-gray-500 text-sm mt-1">{v.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services teaser */}
      <section className="bg-gray-50 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#1a2a6c] inline-block relative">
              خدماتنا
              <span className="block h-1 bg-[#f0c040] rounded-full mt-2" />
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <article key={i} className="rounded-2xl overflow-hidden shadow-md bg-white">
                <div className={`${s.color} flex items-center gap-3 px-5 py-4`}>
                  <span className="text-2xl">{s.icon}</span>
                  <h3 className="text-white font-black text-lg">{s.title}</h3>
                </div>
                <ul className="px-5 py-4 space-y-1.5">
                  {s.items.map((item, j) => (
                    <li key={j} className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-[#f0c040] mt-0.5 flex-shrink-0">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block bg-[#1a2a6c] text-white font-bold px-8 py-3 rounded-full hover:bg-[#0d1540] transition-colors shadow"
            >
              عرض جميع الخدمات
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-[#f0c040] py-14 px-6 text-center">
        <h2 className="text-3xl font-black text-[#1a2a6c] mb-3">
          جاهز لتحويل فكرتك إلى واقع؟
        </h2>
        <p className="text-[#1a2a6c]/70 text-lg mb-8">
          تواصل معنا اليوم وابدأ رحلة نجاحك
        </p>
        <Link
          href="/about"
          className="inline-block bg-[#1a2a6c] text-white font-bold px-8 py-3 rounded-full hover:bg-[#0d1540] transition-colors shadow-lg"
        >
          تواصل معنا
        </Link>
      </section>
    </div>
  );
}
