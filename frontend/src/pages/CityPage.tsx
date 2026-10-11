import { Link, useLocation } from "react-router-dom";
import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { pagesSEO, COMPANY_INFO } from "../data/seoData";
import { Phone, MessageSquare, MapPin, Building2, Shield, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

export function CityPage() {
  const location = useLocation();
  const pathname = location.pathname.length > 1 && location.pathname.endsWith("/")
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const seo = pagesSEO[pathname] || pagesSEO["/riyadh"];
  const isArabic = seo.lang === "ar" || pathname.startsWith("/ar");
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  const riyadhDistricts = [
    { en: "King Khalid Airport District", ar: "حي مطار الملك خالد الدولي", descEn: "Headquarters proximity & fast response hub", descAr: "منطقة المقر الرئيسي وسرعة الاستجابة" },
    { en: "King Abdullah Financial District (KAFD)", ar: "مركز الملك عبدالله المالي (KAFD)", descEn: "Financial skyscrapers & corporate towers", descAr: "أبراج الشركات والمؤسسات المالية الكبرى" },
    { en: "Al Olaya & Al Sulaimaniyah", ar: "العليا والسليمانية", descEn: "Central commercial business & luxury offices", descAr: "المركز التجاري الرئيسي والمكاتب الفاخرة" },
    { en: "Al Malaz & Downtown Riyadh", ar: "الملز ووسط الرياض", descEn: "Government facilities & commercial avenues", descAr: "المقرات الحكومية والمنشآت التجارية العريقة" },
    { en: "North Riyadh (Al Yasmin, Al Narjis)", ar: "شمال الرياض (الياسمين، النرجس)", descEn: "Modern residential compounds & tech parks", descAr: "المجمعات السكنية الحديثة والواحات التقنية" },
    { en: "Industrial & Logistics Districts", ar: "المدن الصناعية والمناطق اللوجستية", descEn: "Warehouses, general workers & operations", descAr: "المستودعات والعمالة العامة والتشغيل" }
  ];

  return (
    <div className={`min-h-screen bg-white text-slate-900 font-sans antialiased ${isArabic ? "font-arabic" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-navy-900 to-slate-950 text-white pt-36 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-4">
              <MapPin size={14} />
              {isArabic ? "تغطية شاملة لجميع أحياء ومناطق الرياض" : "Comprehensive Coverage Across Riyadh"}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {seo.h1}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
              {seo.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={COMPANY_INFO.telUrl}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg flex items-center gap-2 transition"
              >
                <Phone size={18} />
                <span>{COMPANY_INFO.phoneFormatted}</span>
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-700 hover:bg-teal-600 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg flex items-center gap-2 transition"
              >
                <MessageSquare size={18} />
                <span>{isArabic ? "تواصل واتساب" : "WhatsApp Dispatch"}</span>
              </a>
              <Link
                to={isArabic ? "/ar/contact" : "/contact"}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/20 flex items-center gap-2 transition"
              >
                <span>{isArabic ? "طلب تسعير بالرياض" : "Riyadh Quote Request"}</span>
                <Arrow size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Local Content Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              {isArabic
                ? "حلول النظافة والعمالة المصممة خصيصاً لبيئة واحتياجات العاصمة الرياض"
                : "Tailored Facility & Workforce Solutions for Riyadh's Unique Environment"}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {isArabic
                ? "تتطلب المنشآت في مدينة الرياض معايير نظافة فائقة نظراً لطبيعة المناخ الصحراوي والعواصف الغبارية المتكررة. توفر شركة نافيآدز عبر علامتها التجارية 'سكاي كلينينج' وكوادرها المتخصصة حلولاً مستمرة ومتطورة لتنظيف الأبراج والمكاتب والفلل وإمداد المشاريع بالقوى العاملة النظامية."
                : "Operating in Riyadh demands specialized cleaning methods adapted to desert climatic conditions, seasonal dust storms, and extreme summer temperatures. Navi Ads delivers reliable Sky Cleaning solutions and verified manpower, keeping your corporate premises, residential compounds, and construction projects immaculate."}
            </p>
          </div>

          {/* Districts Grid */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              {isArabic ? "أبرز قطاعات وأحياء الرياض المشمولة بخدماتنا" : "Key Riyadh Districts & Sectors We Serve"}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {riyadhDistricts.map((district, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4">
                    <Building2 size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">
                    {isArabic ? district.ar : district.en}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm">
                    {isArabic ? district.descAr : district.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Services Quick Access */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              {isArabic ? "خدماتنا المعتمدة في الرياض" : "Our Certified Services in Riyadh"}
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-100">
                <span className="text-sky-700 font-bold text-xs uppercase tracking-wider block mb-2">
                  {isArabic ? "الخدمة الأولى" : "Service 01"}
                </span>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {isArabic ? "خدمات تنظيف سكاي (Sky Cleaning)" : "Sky Cleaning Services"}
                </h4>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {isArabic
                    ? "تنظيف مباني، مكاتب، منازل وفلل، تنظيف عميق، تنظيف بعد البناء والتشطيب، وتنظيف واجهات المباني والأبراج الزجاجية."
                    : "Building cleaning, office cleaning, residential villa care, deep cleaning, post-construction cleanup, and high-rise facade washing."}
                </p>
                <Link
                  to={isArabic ? "/ar/services/cleaning" : "/services/cleaning"}
                  className="text-sky-600 hover:text-sky-700 font-bold text-sm inline-flex items-center gap-1"
                >
                  <span>{isArabic ? "استعراض خدمات التنظيف" : "Explore Cleaning Services"}</span>
                  <Arrow size={14} />
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider block mb-2">
                  {isArabic ? "الخدمة الثانية" : "Service 02"}
                </span>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {isArabic ? "خدمات توريد العمالة (Manpower Services)" : "Manpower Supply Services"}
                </h4>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {isArabic
                    ? "توريد عمالة عامة، عمال نظافة وضيافة، كوادر دعم المرافق والمستودعات، والعمالة الفنية الماهرة ونصف الماهرة بعقود نظامية."
                    : "Supply of general workers, cleaning staff, facility assistants, and skilled/semi-skilled personnel under strict Saudi compliance."}
                </p>
                <Link
                  to={isArabic ? "/ar/services/manpower" : "/services/manpower"}
                  className="text-emerald-600 hover:text-emerald-700 font-bold text-sm inline-flex items-center gap-1"
                >
                  <span>{isArabic ? "استعراض خدمات العمالة" : "Explore Manpower Supply"}</span>
                  <Arrow size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* FAQs for Riyadh */}
          {seo.faqs && seo.faqs.length > 0 && (
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {isArabic ? "أسئلة شائعة حول خدماتنا في الرياض" : "Frequently Asked Questions About Riyadh Operations"}
              </h3>
              <div className="space-y-6">
                {seo.faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-100 pb-6 last:border-none last:pb-0">
                    <h4 className="font-bold text-slate-900 text-lg mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}
