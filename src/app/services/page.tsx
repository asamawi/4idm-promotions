import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدماتنا — أربعة أفكار للدعاية والإعلان",
  description: "نقدم خدمات التصميم والطباعة والتصنيع والهدايا والتسويق",
};

const services = [
  {
    title: "التصميم",
    color: "bg-[#3a7d44]",
    icon: "✏️",
    items: [
      "تصميم هوية للشركات",
      "تصميم رسومات كرتونية",
      "تصميم ثلاثي الابعاد",
    ],
  },
  {
    title: "الطباعة وأنواعها",
    color: "bg-[#1a4f8a]",
    icon: "🖨️",
    items: [
      "الطباعة الداخلية والخارجية",
      "طباعة استاندات دعائية",
      "طباعة حرارية ( DTF - UV )",
      "الطباعة على الاكريليك و بديل الخشب",
    ],
  },
  {
    title: "التصنيع",
    color: "bg-[#e07b00]",
    icon: "⚙️",
    items: [
      "تصنيع استاندات معارض",
      "التصنيعات الخشبية",
      "تصنيع حروف بارزة",
      "تصنيع المجسمات",
    ],
  },
  {
    title: "الهدايا والترويج",
    color: "bg-[#c49a00]",
    icon: "🎁",
    items: [
      "الطباعة على الهدايا الدعائية",
      "الطباعة على التقويم خشبية",
      "تفصيل ذي الرياضي والملابس الدعائية",
      "تفصيل الدمى والشخصيات الكرتونية",
    ],
  },
  {
    title: "التسويق",
    color: "bg-[#1a2a6c]",
    icon: "📢",
    items: [
      "طرح الافكار التسويقية",
      "حجز المواقع في المولات وقاعات الفنادق",
      "تنفيذ وتنظيم المعارض والمؤتمرات",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div dir="rtl">
      {/* Page hero */}
      <section className="bg-gradient-to-l from-[#1a2a6c] to-[#0d1540] py-16 px-6 text-center">
        <h1 className="text-5xl font-black text-white mb-3">خدماتنا</h1>
        <p className="text-[#f0c040] text-xl font-medium">
          حلول إعلانية متكاملة ... من الفكرة إلى التنفيذ
        </p>
      </section>

      {/* Services grid */}
      <section className="bg-gray-50 py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article key={i} className="rounded-2xl overflow-hidden shadow-md bg-white">
              <div className={`${s.color} flex items-center gap-3 px-6 py-5`}>
                <span className="text-3xl">{s.icon}</span>
                <h2 className="text-white font-black text-xl">{s.title}</h2>
              </div>
              <ul className="px-6 py-5 space-y-2.5">
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
      </section>
    </div>
  );
}
