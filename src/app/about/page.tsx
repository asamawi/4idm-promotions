import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "من نحن — أربعة أفكار للدعاية والإعلان",
  description: "تعرف على شركة أربعة أفكار للدعاية والإعلان وقيمنا وطريقة التواصل معنا",
};

const values = [
  { icon: "👥", title: "شريكك في نجاحك", subtitle: "من البداية إلى الانتشار، نقف بجانبك في كل خطوة." },
  { icon: "💡", title: "حلول إبداعية", subtitle: "نصمم حلولاً مخصصة تناسب احتياجاتك وتميّزك عن المنافسين." },
  { icon: "🕐", title: "التزام بالمواعيد", subtitle: "نلتزم بجداول التسليم ومواعيد المعارض والفعاليات." },
  { icon: "⭐", title: "جودة عالية", subtitle: "نستخدم أفضل المواد والتقنيات لضمان جودة التنفيذ والطباعة." },
];

export default function AboutPage() {
  return (
    <div dir="rtl">
      {/* Page hero */}
      <section className="bg-gradient-to-l from-[#1a2a6c] to-[#0d1540] py-16 px-6 text-center">
        <h1 className="text-5xl font-black text-white mb-3">من نحن</h1>
        <p className="text-[#f0c040] text-xl font-medium">
          أربعة أفكار للدعاية والإعلان
        </p>
      </section>

      {/* Company story */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative w-36 h-36 mx-auto mb-6">
            <Image
              src="/logo-4idm.png"
              alt="أربعة أفكار للدعاية والإعلان"
              fill
              sizes="144px"
              className="object-contain drop-shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-black text-[#1a2a6c] mb-5">قصتنا</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            أربعة أفكار للدعاية والإعلان شركة متخصصة في تقديم حلول إعلانية متكاملة، تشمل التصميم والطباعة والتصنيع والهدايا الترويجية والتسويق. نؤمن بأن كل فكرة تستحق التنفيذ بأعلى مستوى من الجودة والإبداع، ونسعى دائماً لأن نكون الشريك الأمثل لنجاح عملائنا من البداية حتى الانتشار.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-[#1a2a6c] text-center mb-10">
            قيمنا
            <span className="block h-1 bg-[#f0c040] rounded-full mt-2 w-16 mx-auto" />
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 flex gap-4 border-r-4 border-[#f0c040]"
              >
                <div className="w-14 h-14 rounded-full bg-[#1a2a6c]/5 border-2 border-[#f0c040] flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{v.icon}</span>
                </div>
                <div>
                  <h3 className="text-[#1a2a6c] font-black text-lg leading-tight mb-1">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#1a2a6c] text-center mb-10">
            تواصل معنا
            <span className="block h-1 bg-[#f0c040] rounded-full mt-2 w-16 mx-auto" />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            <div className="bg-gray-50 rounded-2xl p-5 text-center">
              <span className="text-3xl block mb-2">📧</span>
              <p className="text-[#1a2a6c] font-bold text-sm mb-1">البريد الإلكتروني</p>
              <a
                href="mailto:info@4idm.com.sa"
                className="text-[#1a4f8a] text-sm hover:underline break-all"
              >
                info@4idm.com.sa
              </a>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5 text-center">
              <span className="text-3xl block mb-2">📍</span>
              <p className="text-[#1a2a6c] font-bold text-sm mb-1">الموقع</p>
              <p className="text-gray-500 text-sm">المملكة العربية السعودية</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5 text-center">
              <span className="text-3xl block mb-2">🕐</span>
              <p className="text-[#1a2a6c] font-bold text-sm mb-1">ساعات العمل</p>
              <p className="text-gray-500 text-sm">الأحد–الخميس، ٩ص–٦م</p>
            </div>
          </div>

          {/* CTA card */}
          <div className="bg-[#f0c040] rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-2xl font-black text-[#1a2a6c] mb-2">هل لديك مشروع؟</h3>
            <p className="text-[#1a2a6c]/70 mb-6">نحن هنا لمساعدتك وتحويل أفكارك إلى واقع</p>
            <a
              href="mailto:info@4idm.com.sa"
              className="inline-block bg-[#1a2a6c] text-white font-bold px-8 py-3 rounded-full hover:bg-[#0d1540] transition-colors shadow"
            >
              راسلنا الآن
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
