import { useLocation, Link } from "react-router-dom";
import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { Icon } from "../components/icons/Icons";
import { siteContent } from "../data/siteContent";
import { SafeImage } from "../components/ui/SafeImage";
import { COMPANY_INFO } from "../data/seoData";
import { Shield, ArrowRight, ArrowLeft } from "lucide-react";

export function AboutPage() {
  const location = useLocation();
  const isArabic = location.pathname.startsWith("/ar");
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  return (
    <div className={`min-h-screen bg-white text-slate-900 font-sans antialiased ${isArabic ? "font-arabic" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
      <Header />

      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 via-navy-900 to-slate-950 text-white pt-36 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-4">
            <Shield size={14} />
            <span>{isArabic ? "سجل تجاري معتمد: 7051048754" : "Registered Entity — CR: 7051048754"}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            {isArabic ? "عن شركة نافيآدز في المملكة العربية السعودية" : siteContent.about.title}
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 font-medium">
            {isArabic ? "خدمات احترافية. كوادر موثوقة. نتائج عالية الجودة." : siteContent.about.subtitle}
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {isArabic ? "نبذة عن الشركة ومسيرتها" : "Company Overview"}
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed text-base sm:text-lg">
              {isArabic
                ? "شركة نافيآدز هي مزود خدمات مهني متخصص يركز على تقديم حلول النظافة المتكاملة (خدمات تنظيف سكاي) وإدارة وتوريد القوى العاملة للعملاء من القطاعات السكنية، التجارية، والمؤسسية في مدينة الرياض والمملكة العربية السعودية."
                : siteContent.about.overview}
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed text-base sm:text-lg">
              {isArabic
                ? "نهدف إلى تزويد عملائنا بكوادر نظامية ومحترفة تساعدهم في الحفاظ على بيئات نظيفة، مريحة، منتجة، ومُدارة بأعلى درجات الكفاءة والانضباط."
                : siteContent.about.goal}
            </p>

            <div className="mt-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                {isArabic ? "مرتكزاتنا الأساسية" : "We Focus On"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(isArabic ? [
                  "الاحترافية العالية",
                  "الموثوقية والانضباط",
                  "الجودة الاستثنائية",
                  "السلامة والصحة المهنية",
                  "رضا العميل التام",
                  "كوادر مؤهلة ونظامية",
                  "خدمة مستمرة ومستقرة"
                ] : siteContent.about.focusPoints).map((point) => (
                  <span key={point} className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm">
                    ✓ {point}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {siteContent.about.showImage && siteContent.about.image && (
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <SafeImage src={siteContent.about.image} alt={isArabic ? "عن شركة نافيآدز" : "About Navi Ads"} className="w-full h-[400px] object-cover" />
            </div>
          )}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-emerald-50/60 border border-emerald-100 p-8 rounded-3xl">
              <div className="h-12 w-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-6 shadow-md">
                <Icon.Shield className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{isArabic ? "رسالتنا" : "Our Mission"}</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {isArabic
                  ? "تقديم حلول تنظيف وتوريد عمالة موثوقة تلبي تطلعات عملائنا بدقة، مع الحفاظ على أرقى معايير الاحترافية، الجودة، السلامة، وخدمة العملاء في الرياض والمملكة."
                  : siteContent.about.mission}
              </p>
            </div>

            <div className="bg-teal-50/60 border border-teal-100 p-8 rounded-3xl">
              <div className="h-12 w-12 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold mb-6 shadow-md">
                <Icon.Star className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{isArabic ? "رؤيتنا" : "Our Vision"}</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {isArabic
                  ? "أن نكون الشريك الأكثر ثقة وتميزاً في قطاع خدمات النظافة المتخصصة وإدارة القوى العاملة في المملكة العربية السعودية، عبر كوادر موثوقة وعلاقات مستدامة طويلة الأمد."
                  : siteContent.about.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            {isArabic ? "جاهزون لخدمة منشأتكم في الرياض" : "Ready to Experience Quality Services in Riyadh?"}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8">
            {isArabic ? "تواصل معنا اليوم واستلم عرض أسعار مخصص لاحتياجاتك." : "Contact our operations team today for a tailored cleaning or manpower proposal."}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to={isArabic ? "/ar/contact" : "/contact"}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3 rounded-full font-bold shadow-lg transition"
            >
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </Link>
            <a
              href={COMPANY_INFO.telUrl}
              className="bg-white/10 hover:bg-white/20 text-white px-7 py-3 rounded-full font-bold border border-white/20 transition"
            >
              {COMPANY_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
