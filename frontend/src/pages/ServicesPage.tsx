import { Link, useLocation } from "react-router-dom";
import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { siteContent } from "../data/siteContent";
import { SafeImage } from "../components/ui/SafeImage";
import { COMPANY_INFO, pagesSEO } from "../data/seoData";
import { Phone, MessageSquare, Shield, CheckCircle2 } from "lucide-react";

export function ServicesPage() {
  const location = useLocation();
  const pathname = location.pathname.length > 1 && location.pathname.endsWith("/")
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const isArabic = pathname.startsWith("/ar");

  const isCleaningOverview = pathname.includes("cleaning");
  const isManpowerOverview = pathname.includes("manpower");

  const sky = siteContent.services.skyCleaning;
  const manpower = siteContent.services.manpower;

  const cleaningChildLinks = [
    { slug: "building-cleaning", en: "Building Cleaning", ar: "تنظيف المباني", descEn: "Lobbies, corridors, stairs, floors, elevators, windows, high-level cleaning, and waste collection.", descAr: "المداخل، الممرات، المصاعد، السلالم، الأرضيات، النظافة المرتفعة، وإدارة النفايات." },
    { slug: "office-cleaning", en: "Office Cleaning", ar: "تنظيف المكاتب", descEn: "Desks, workstations, meeting rooms, reception, pantries, washrooms, and daily corporate upkeep.", descAr: "محطات العمل، قاعات الاجتماعات، الاستقبال، البوفيهات، ودورات المياه بعقود مرنة." },
    { slug: "home-cleaning", en: "Home Cleaning", ar: "تنظيف المنازل", descEn: "Villas, townhouses, apartments, living areas, kitchens, bathrooms, and move-in/move-out sanitation.", descAr: "الفلل، الشقق، المجالس، المطابخ، الحمامات، ونظافة ما قبل السكن أو بعد الانتقال." },
    { slug: "deep-cleaning", en: "Deep Cleaning", ar: "التنظيف العميق", descEn: "Comprehensive restoration, tile degreasing, hard-to-reach areas, and deep sanitization.", descAr: "تنظيف تفصيلي دقيق لإزالة أصعب الدهون وجلي الفواصل وتعقيم الأسطح بالكامل." },
    { slug: "post-construction-cleaning", en: "Post-Construction Cleaning", ar: "تنظيف بعد البناء", descEn: "Construction dust, debris, cement/paint splatter removal, and final handover polish.", descAr: "إزالة بقايا الإسمنت والدهانات والجبس والأتربة وتجهيز العقار للتسليم والاستخدام." },
    { slug: "facade-cleaning", en: "High-Rise & Facade Cleaning", ar: "تنظيف واجهات الأبراج", descEn: "Rope-access and cradle exterior glass and cladding washing for commercial skyscrapers.", descAr: "تنظيف الواجهات الزجاجية والكلادينج للأبراج الشاهقة بالوصول بالحبال المعتمدة." }
  ];

  const manpowerChildLinks = [
    { slug: "general-workers", en: "General Workers", ar: "توريد عمالة عامة", descEn: "Site support, warehouse operations, material handling, and loading/unloading assistance.", descAr: "دعم مواقع العمل، عمليات المستودعات، التحميل والتنزيل، ومساندة المنشآت اليومية." },
    { slug: "cleaning-staff", en: "Cleaning Staff", ar: "توريد عمالة نظافة", descEn: "Office cleaners, janitors, housekeepers, and specialized commercial cleaning personnel.", descAr: "عمال وعاملات نظافة للمكاتب والشركات والمباني والمجمعات بعقود توريد مرنة." },
    { slug: "facility-support", en: "Facility Support Staff", ar: "كوادر دعم المرافق", descEn: "Facility assistants, operational helpers, messengers, and general service attendants.", descAr: "مساعدو مرافق، عمال مساندة، وموظفو خدمات مكاتب ومجمعات لانسيابية العمل." },
    { slug: "skilled-semi-skilled", en: "Skilled & Semi-Skilled Workers", ar: "عمالة ماهرة ونصف ماهرة", descEn: "Technical assistants, site specialists, and experienced workforce tailored to scope.", descAr: "عمالة فنية متخصصة ومساعدون مهنيون وفق متطلبات المشاريع الهندسية والتشغيلية." }
  ];

  return (
    <div className={`min-h-screen bg-white text-slate-900 font-sans antialiased ${isArabic ? "font-arabic" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
      <Header />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-50 pt-36 pb-20 border-b border-slate-200/60">
        {/* Background Gradients & Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/60 to-teal-50/40" />
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.12) 0%, transparent 45%), radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.12) 0%, transparent 45%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15, 23, 42, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-emerald-700 font-bold text-xs sm:text-sm uppercase tracking-wider mb-3">
              {isCleaningOverview
                ? (isArabic ? "خدمات النظافة المتخصصة — سكاي كلينينج" : "Specialized Cleaning — Sky Cleaning")
                : isManpowerOverview
                ? (isArabic ? "خدمات توريد وإدارة الكوادر والعمالة" : "Workforce & Manpower Solutions")
                : (isArabic ? "خدمات شركة نافيآدز المتكاملة" : "Comprehensive Commercial Services")}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              {isCleaningOverview ? (
                isArabic ? (
                  <>
                    خدمات تنظيف سكاي
                    <br />
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      في المملكة العربية السعودية
                    </span>
                  </>
                ) : (
                  <>
                    Sky Cleaning Services
                    <br />
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      in Saudi Arabia
                    </span>
                  </>
                )
              ) : isManpowerOverview ? (
                isArabic ? (
                  <>
                    خدمات توريد العمالة
                    <br />
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      في المملكة العربية السعودية
                    </span>
                  </>
                ) : (
                  <>
                    Manpower Supply Services
                    <br />
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      in Saudi Arabia
                    </span>
                  </>
                )
              ) : (
                isArabic ? (
                  <>
                    خدمات شركة نافيآدز
                    <br />
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      في الرياض والمملكة
                    </span>
                  </>
                ) : (
                  <>
                    Professional Services
                    <br />
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Navi Ads Company
                    </span>
                  </>
                )
              )}
            </h1>

            <p className="mt-4 text-base sm:text-xl text-slate-600 leading-relaxed font-medium mb-8">
              {isCleaningOverview
                ? (isArabic ? "حلول تنظيف متخصصة ومتكاملة للمباني والمكاتب والمنازل والمشاريع بالرياض" : "Comprehensive commercial, residential, and high-rise cleaning solutions delivered across Riyadh.")
                : isManpowerOverview
                ? (isArabic ? "توريد كوادر وعمالة نظامية وموثوقة لمختلف الأنشطة والمنشآت التشغيلية" : "Compliant, vetted, and dependable workforce solutions across Riyadh and Saudi Arabia.")
                : (isArabic ? "خدمات تنظيف سكاي المتكاملة وتوريد العمالة النظامية لكافة المنشآت والمشاريع" : "Dedicated Sky Cleaning & Manpower Solutions Across Saudi Arabia")}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={COMPANY_INFO.telUrl}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md shadow-emerald-600/20 flex items-center gap-2 transition hover:scale-105"
              >
                <Phone size={18} />
                <span>{COMPANY_INFO.phoneFormatted}</span>
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-6 py-3.5 rounded-xl shadow-md flex items-center gap-2 transition hover:scale-105"
              >
                <MessageSquare size={18} />
                <span>{isArabic ? "واتساب" : "WhatsApp"}</span>
              </a>
              <Link
                to={isArabic ? "/ar/contact" : "/contact"}
                className="border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-semibold px-6 py-3.5 rounded-xl shadow-sm flex items-center gap-2 transition hover:scale-105"
              >
                <span>{isArabic ? "طلب تسعير" : "Request Quote"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 1 — SKY CLEANING SECTION */}
      {(!isManpowerOverview || isCleaningOverview) && (
        <section id="cleaning" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-12">
              <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                {isArabic ? "الخدمة الأولى" : "Service 01"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                {isArabic ? "خدمات تنظيف سكاي (Sky Cleaning Services)" : sky.title}
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                {isArabic
                  ? "توفر شركة نافيآدز خدمات تنظيف سكاي الشاملة للمباني، والمكاتب، والمنازل، والمجمعات التجارية، والواجهات. تعتمد فرقنا على أحدث المعدات ومواد التنظيف المصرحة لضمان بيئة نظيفة وصحية."
                  : sky.fullDesc}
              </p>
            </div>

            {/* Child Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cleaningChildLinks.map((sub) => {
                const childUrl = isArabic
                  ? `/ar/services/cleaning/${sub.slug}`
                  : `/services/cleaning/${sub.slug}`;

                return (
                  <div key={sub.slug} className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {isArabic ? sub.ar : sub.en}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {isArabic ? sub.descAr : sub.descEn}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200/60">
                      <Link
                        to={childUrl}
                        className="text-emerald-700 hover:text-emerald-800 font-bold text-sm inline-flex items-center gap-1.5 transition"
                      >
                        <span>{isArabic ? "تفاصيل الخدمة وحجز موعد" : "View Details & Scope"}</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick CTA Box */}
            <div className="mt-12 bg-sky-50/70 border border-sky-200 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {isArabic ? "هل تحتاج إلى خدمات تنظيف متخصصة بالرياض؟" : "Need Professional Cleaning in Riyadh?"}
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  {isArabic ? "تواصل مع فريق عمليات سكاي كلينينج للحصول على أفضل خطة وعرض أسعار." : "Contact our cleaning supervisors today for a swift site assessment."}
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href={COMPANY_INFO.telUrl}
                  className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full font-bold shadow-md transition whitespace-nowrap text-sm flex items-center gap-2"
                >
                  <Phone size={16} />
                  <span>{COMPANY_INFO.phoneFormatted}</span>
                </a>
                <Link
                  to={isArabic ? "/ar/contact" : "/contact"}
                  className="bg-white border border-sky-300 text-sky-800 hover:bg-sky-100 px-6 py-3 rounded-full font-bold transition whitespace-nowrap text-sm"
                >
                  {isArabic ? "طلب تسعير" : "Request Quote"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SERVICE 2 — MANPOWER SERVICES SECTION */}
      {(!isCleaningOverview || isManpowerOverview) && (
        <section id="manpower" className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-12">
              <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                {isArabic ? "الخدمة الثانية" : "Service 02"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                {isArabic ? "خدمات توريد العمالة (Manpower Services)" : manpower.title}
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                {isArabic
                  ? "توفر شركة نافيآدز حلول قوى عاملة مرنة ونظامية للشركات، والمؤسسات، والمشاريع الإنشائية والتجارية بالرياض، بما يضمن توفير أيدٍ عاملة ملتزمة ومدربة وفق اشتراطات العمل في المملكة."
                  : manpower.fullDesc}
              </p>
            </div>

            {/* Manpower Child Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {manpowerChildLinks.map((sub) => {
                const childUrl = isArabic
                  ? `/ar/services/manpower/${sub.slug}`
                  : `/services/manpower/${sub.slug}`;

                return (
                  <div key={sub.slug} className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {isArabic ? sub.ar : sub.en}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                        {isArabic ? sub.descAr : sub.descEn}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <Link
                        to={childUrl}
                        className="text-emerald-700 hover:text-emerald-800 font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 transition"
                      >
                        <span>{isArabic ? "تفاصيل الكوادر والطلب" : "Staff Details & Hiring"}</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Manpower CTA */}
            <div className="mt-12 bg-emerald-50/70 border border-emerald-200 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {isArabic ? "هل تبحث عن توريد عمالة موثوقة ونظامية؟" : "Looking for Compliant Manpower Supply?"}
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  {isArabic ? "سجل تجاري: 7051048754 — كوادر مدربة تلبي احتياجات منشأتك." : "CR: 7051048754 — Certified workforce tailored to your operational needs."}
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href={COMPANY_INFO.telUrl}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-bold shadow-md transition whitespace-nowrap text-sm flex items-center gap-2"
                >
                  <Phone size={16} />
                  <span>{COMPANY_INFO.phoneFormatted}</span>
                </a>
                <Link
                  to={isArabic ? "/ar/contact" : "/contact"}
                  className="bg-white border border-emerald-300 text-emerald-800 hover:bg-emerald-100 px-6 py-3 rounded-full font-bold transition whitespace-nowrap text-sm"
                >
                  {isArabic ? "طلب توريد عمالة" : "Request Manpower"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
