import { Link, useLocation } from "react-router-dom";
import { Icon } from "../icons/Icons";
import { stats, servicesList } from "../../data/constants";
import { siteContent } from "../../data/siteContent";
import { COMPANY_INFO } from "../../data/seoData";
import { Shield, Phone, MessageSquare } from "lucide-react";

export function Hero() {
  const location = useLocation();
  const isArabic = location.pathname.startsWith("/ar");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/60 to-teal-50/40" />
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.12) 0%, transparent 45%), radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.12) 0%, transparent 45%)",
        }}
      />
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-36 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          {/* CR Trust Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-6 shadow-sm">
            <Shield size={14} className="text-emerald-700" />
            <span>{isArabic ? "سجل تجاري معتمد: 7051048754 — الرياض" : "Official License CR: 7051048754 — Riyadh"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-slate-900">
            {isArabic ? (
              <>
                خدمات تنظيف سكاي
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  وتوريد العمالة في الرياض
                </span>
              </>
            ) : (
              <>
                Building Excellence,
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Sky Cleaning & Manpower.
                </span>
              </>
            )}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed font-medium">
            {isArabic ? (
              "تقدم شركة نافيآدز خدمات النظافة الشاملة والمتخصصة (خدمات تنظيف سكاي) وتوريد الكوادر والعمالة النظامية الموثوقة للمنشآت والمباني والمكاتب في كافة قطاعات مدينة الرياض والمملكة العربية السعودية."
            ) : (
              "Navi Ads delivers professional Sky Cleaning Services and dependable manpower supply across Riyadh and the Kingdom of Saudi Arabia – with uncompromising safety, reliability, and quality standards."
            )}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to={isArabic ? "/ar/contact" : "/contact"}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-full font-bold shadow-lg shadow-emerald-600/20 transition hover:scale-105 flex items-center gap-2"
            >
              {isArabic ? "طلب عرض سعر" : "Get a Quote"}
            </Link>
            <a
              href={COMPANY_INFO.telUrl}
              className="border border-emerald-300 bg-white hover:bg-emerald-50 text-emerald-800 px-6 py-3.5 rounded-full font-bold transition shadow-sm flex items-center gap-2"
            >
              <Phone size={16} />
              <span>{isArabic ? "0537799389" : "+966 53 779 9389"}</span>
            </a>
            <Link
              to={isArabic ? "/ar/services/cleaning" : "/services/cleaning"}
              className="border border-slate-300 bg-white/70 hover:bg-slate-100 text-slate-700 px-6 py-3.5 rounded-full font-semibold transition shadow-sm"
            >
              {isArabic ? "استعراض الخدمات" : "Our Services"}
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-200/60">
            {stats.map((s, idx) => (
              <div key={idx}>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">{s.n}</div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  {isArabic ? (
                    idx === 0 ? "سنوات خبرة" :
                    idx === 1 ? "مشروعاً منجزاً" :
                    idx === 2 ? "عامل مهني" : "نسبة رضا العملاء"
                  ) : s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual card - 2 main services */}
        <div className="relative hidden md:block">
          <div className="space-y-4">
            {servicesList.map((service, idx) => (
              <Link
                key={service.id}
                to={isArabic ? (idx === 0 ? "/ar/services/cleaning" : "/ar/services/manpower") : (idx === 0 ? "/services/cleaning" : "/services/manpower")}
                className="block bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/80 hover:border-emerald-500 transition group"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                      {isArabic ? (idx === 0 ? "الخدمة الأولى" : "الخدمة الثانية") : `Service 0${idx + 1}`}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition">
                      {isArabic ? (idx === 0 ? "خدمات تنظيف سكاي (Sky Cleaning)" : "خدمات توريد العمالة (Manpower)") : service.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {isArabic ? (
                        idx === 0 ? "تنظيف مباني، مكاتب، منازل وفلل، تنظيف عميق، تنظيف بعد البناء، وتنظيف واجهات."
                        : "توريد عمالة عامة، عمال نظافة، كوادر دعم المرافق، والعمالة الماهرة ونصف الماهرة بالرياض."
                      ) : service.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
