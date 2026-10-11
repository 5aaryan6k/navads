import { Link, useLocation } from "react-router-dom";
import { Icon } from "../icons/Icons";
import { servicesList } from "../../data/constants";
import { SafeImage } from "../ui/SafeImage";
import { ArrowRight, ArrowLeft } from "lucide-react";

export function Services() {
  const location = useLocation();
  const isArabic = location.pathname.startsWith("/ar");
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="py-24 bg-white" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-emerald-600 font-bold uppercase tracking-wider text-xs sm:text-sm">
            {isArabic ? "خدماتنا المعتمدة" : "What We Do"}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {isArabic ? "حلول التنظيف المتكاملة وإدارة القوى العاملة" : "Professional Cleaning & Manpower Solutions"}
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            {isArabic
              ? "من خدمات تنظيف سكاي الشاملة للمباني والواجهات والمكاتب إلى توفير عمالة نظامية ومؤهلة، نوفر حلولاً ميدانية متكاملة بأعلى معايير الجودة والسلامة."
              : "From specialized high-rise sky cleaning and commercial facilities to dependable workforce deployment across Saudi Arabia."}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesList.map((s, idx) => {
            const serviceUrl = idx === 0
              ? (isArabic ? "/ar/services/cleaning" : "/services/cleaning")
              : (isArabic ? "/ar/services/manpower" : "/services/manpower");

            return (
              <div
                key={s.id}
                className="group relative bg-white border border-slate-200/90 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {s.showImage && s.img && (
                    <div className="relative -mx-8 -mt-8 mb-6 h-56 overflow-hidden bg-slate-100">
                      <SafeImage src={s.img} alt={isArabic ? (idx === 0 ? "خدمات تنظيف سكاي" : "خدمات توريد العمالة") : s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className={`relative h-14 w-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg mb-5`}>
                    <s.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {isArabic ? (idx === 0 ? "خدمات تنظيف سكاي (Sky Cleaning)" : "خدمات توريد العمالة (Manpower)") : s.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                    {isArabic ? (
                      idx === 0
                        ? "حلول تنظيف احترافية للمباني، المكاتب، المنازل والفلل، التنظيف العميق، والتنظيف بعد الإنشاءات والتشطيب وتنظيف الواجهات الزجاجية."
                        : "حلول قوى عاملة موثوقة ونظامية توفر عمالة عامة، عمال نظافة، كوادر دعم المرافق، والعمالة الفنية الماهرة ونصف الماهرة بالرياض."
                    ) : s.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Link
                    to={serviceUrl}
                    className="inline-flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-700 transition-colors text-sm"
                  >
                    <span>{isArabic ? "استعراض تفاصيل الخدمة" : `Explore ${s.title}`}</span>
                    <Arrow size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
