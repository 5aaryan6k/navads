import { Link, useLocation } from "react-router-dom";
import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { pagesSEO, COMPANY_INFO } from "../data/seoData";
import { Phone, MessageSquare, MapPin, Building2, Shield, CheckCircle2, Clock } from "lucide-react";

export function CityPage() {
  const location = useLocation();
  const pathname = location.pathname.length > 1 && location.pathname.endsWith("/")
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const seo = pagesSEO[pathname] || pagesSEO["/riyadh"];
  const isArabic = seo.lang === "ar" || pathname.startsWith("/ar");

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
              {isArabic ? "موقعنا — الرياض، المملكة العربية السعودية" : "Our Location — Riyadh, Saudi Arabia"}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              {isArabic ? (
                <>
                  موقعنا ومقر خدماتنا
                  <br />
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    في مدينة الرياض
                  </span>
                </>
              ) : (
                <>
                  Our Location &
                  <br />
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Operations Hub in Riyadh
                  </span>
                </>
              )}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 font-medium">
              {seo.subtitle}
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
                <span>{isArabic ? "تواصل واتساب" : "WhatsApp"}</span>
              </a>
              <Link
                to={isArabic ? "/ar/contact" : "/contact"}
                className="border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-semibold px-6 py-3.5 rounded-xl shadow-sm flex items-center gap-2 transition hover:scale-105"
              >
                <span>{isArabic ? "طلب تسعير بالرياض" : "Riyadh Quote Request"}</span>
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

          {/* Office Location & Interactive Map Section */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 sm:p-10 mb-16">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Office Details */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-2">
                    {isArabic ? "المقر الرئيسي" : "Company Headquarters"}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {isArabic ? "مقر شركة نافيآدز بالرياض" : "Navi Ads Office in Riyadh"}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {isArabic
                      ? "يسرنا استقبالكم وتنسيق متطلبات النظافة وتوريد العمالة مباشرة من مركز عملياتنا في العاصمة الرياض."
                      : "We welcome corporate clients and facility managers to our operations center in Riyadh for direct inquiries and contract arrangements."}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <MapPin className="text-emerald-600 shrink-0 mt-1" size={20} />
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase">{isArabic ? "العنوان" : "Office Address"}</div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">
                        {isArabic ? COMPANY_INFO.addressAr : COMPANY_INFO.addressEn}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <Clock className="text-emerald-600 shrink-0 mt-1" size={20} />
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase">{isArabic ? "أوقات الدوام" : "Working Hours"}</div>
                      <div className="text-sm font-semibold text-slate-900 mt-0.5">
                        {isArabic ? COMPANY_INFO.workingHoursAr : COMPANY_INFO.workingHoursEn}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <Phone className="text-emerald-600 shrink-0 mt-1" size={20} />
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase">{isArabic ? "الهاتف والواتساب" : "Direct Contact"}</div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5" dir="ltr">
                        {COMPANY_INFO.phoneFormatted}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={COMPANY_INFO.telUrl}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-md text-sm inline-flex items-center gap-2 transition"
                  >
                    <Phone size={15} />
                    <span>{isArabic ? "اتصال فوري" : "Call Office"}</span>
                  </a>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-5 py-2.5 rounded-xl shadow-md text-sm inline-flex items-center gap-2 transition"
                  >
                    <MessageSquare size={15} />
                    <span>{isArabic ? "محادثة واتساب" : "WhatsApp"}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Map Frame / Placeholder */}
              <div className="lg:col-span-7">
                <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner flex flex-col items-center justify-center text-center p-6">
                  {COMPANY_INFO.officeMapEmbedUrl ? (
                    <iframe
                      src={COMPANY_INFO.officeMapEmbedUrl}
                      className="w-full h-full border-0 rounded-2xl"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={isArabic ? "خريطة موقع شركة نافيآدز في الرياض" : "Navi Ads Riyadh Office Map"}
                    />
                  ) : (
                    <div className="max-w-md space-y-4">
                      {/* Stylized Map Placeholder Grid & Icon */}
                      <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 flex items-center justify-center shadow-sm">
                        <MapPin size={32} className="animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">
                          {isArabic ? "خريطة مقر الشركة التفاعلية (الرياض)" : "Office Location Map — Riyadh"}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                          {isArabic
                            ? "مساحة مخصصة لخريطة المقر المعتمدة. سيتم ربط وتضمين خريطة Google التفاعلية هنا مباشرة."
                            : "Interactive office Google Map embed container. Direct navigation iframe will be rendered here."}
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-700">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                        <span>{isArabic ? "الرياض، حي مطار الملك خالد الدولي" : "Riyadh — King Khalid Airport District"}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
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
