import { Link, useLocation } from "react-router-dom";
import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { pagesSEO, COMPANY_INFO } from "../data/seoData";
import { Phone, MessageSquare, CheckCircle2, Shield, Clock, MapPin, Building, Users } from "lucide-react";

export function ServiceDetailPage() {
  const location = useLocation();
  const pathname = location.pathname.length > 1 && location.pathname.endsWith("/")
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const seo = pagesSEO[pathname] || pagesSEO["/services/cleaning"];
  const isArabic = seo.lang === "ar" || pathname.startsWith("/ar");

  // Determine service details based on route
  const isCleaning = pathname.includes("cleaning");
  const isManpower = pathname.includes("manpower");

  return (
    <div className={`min-h-screen bg-white text-slate-900 font-sans antialiased ${isArabic ? "font-arabic" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
      <Header />

      {/* Hero Section */}
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
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6 flex-wrap" aria-label="Breadcrumb">
            {seo.breadcrumbs?.map((crumb, idx) => (
              <span key={crumb.url} className="flex items-center gap-2">
                {idx > 0 && <span className="text-slate-400">/</span>}
                {idx === (seo.breadcrumbs?.length || 1) - 1 ? (
                  <span className="text-emerald-700 font-bold">{crumb.name}</span>
                ) : (
                  <Link to={crumb.url.replace(COMPANY_INFO.canonicalHost, "") || "/"} className="hover:text-emerald-600 transition">
                    {crumb.name}
                  </Link>
                )}
              </span>
            ))}
          </nav>

          <div className="max-w-3xl">
            {seo.serviceCategory && (
              <div className="text-emerald-700 font-bold text-xs sm:text-sm uppercase tracking-wider mb-3">
                {seo.serviceCategory}
              </div>
            )}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              {seo.h1}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 font-medium">
              {seo.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={COMPANY_INFO.telUrl}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md shadow-emerald-600/20 flex items-center gap-2 transition hover:scale-105"
              >
                <Phone size={18} />
                <span>{isArabic ? "اتصل الآن: 0537799389" : "Call: +966 53 779 9389"}</span>
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-6 py-3.5 rounded-xl shadow-md flex items-center gap-2 transition hover:scale-105"
              >
                <MessageSquare size={18} />
                <span>{isArabic ? "محادثة واتساب" : "WhatsApp Inquiry"}</span>
              </a>

              <Link
                to={isArabic ? "/ar/contact" : "/contact"}
                className="border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-semibold px-6 py-3.5 rounded-xl shadow-sm flex items-center gap-2 transition hover:scale-105"
              >
                <span>{isArabic ? "طلب عرض سعر رسمي" : "Request Formal Quote"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left 2 Cols: Details & Scope */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Overview Card */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {isArabic ? "نظرة عامة على الخدمة ومجالات التنفيذ" : "Service Overview & Operational Scope"}
                </h2>
                <p className="text-slate-600 leading-relaxed text-base mb-6">
                  {seo.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">
                        {isArabic ? "كوادر مدرَّبة ونظامية" : "Trained & Documented Personnel"}
                      </h3>
                      <p className="text-slate-600 text-xs mt-1">
                        {isArabic ? "فرق عمل مؤهلة تعمل وفق أعلى معايير السلامة والجودة." : "All personnel operate under legal Saudi compliance and rigorous training."}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 flex items-start gap-3">
                    <Clock className="text-sky-600 shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">
                        {isArabic ? "مرونة وجاهزية سريعة" : "Flexible Scheduling & Fast Dispatch"}
                      </h3>
                      <p className="text-slate-600 text-xs mt-1">
                        {isArabic ? "استجابة فورية وتغطية متكاملة لجميع مناطق وأحياء الرياض." : "Rapid assessment and dispatch across all sectors of Riyadh."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Pillars / Specifications */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {isArabic ? "مميزات ومواصفات الخدمة من شركة نافيآدز" : "Key Service Features & Inclusions"}
                </h2>
                <div className="space-y-4">
                  {[
                    isArabic
                      ? "تنفيذ متقن ومطابق لمتطلبات المنشآت التجارية والمباني الحديثة بالرياض."
                      : "Strict compliance with commercial facility standards and Riyadh municipal guidelines.",
                    isArabic
                      ? "استخدام أدوات ومعدات متطورة ومواد تنظيف وتعقيم آمنة ومصرحة."
                      : "Utilization of professional-grade equipment and certified safe sanitization detergents.",
                    isArabic
                      ? "إشراف ومتابعة دقيقة تضمن تحقيق أعلى مستويات النظافة والرضا."
                      : "Dedicated on-site supervisors guaranteeing performance and quality control.",
                    isArabic
                      ? "عقود مرنة تناسب المتطلبات الدورية، الأسبوعية، والشهرية، أو بنظام المشروعات."
                      : "Customizable contract structures: daily recurring, weekly, monthly, or project-based."
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-700">
                      <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        ✓
                      </div>
                      <span className="text-sm sm:text-base leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs Section */}
              {seo.faqs && seo.faqs.length > 0 && (
                <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    {isArabic ? "الأسئلة الشائعة حول الخدمة" : "Frequently Asked Questions"}
                  </h2>
                  <div className="space-y-6">
                    {seo.faqs.map((faq, idx) => (
                      <div key={idx} className="border-b border-slate-100 pb-6 last:border-none last:pb-0">
                        <h3 className="font-bold text-slate-900 text-lg mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Internal Links */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {isArabic ? "خدمات أخرى ذات صلة" : "Related Services & Locations"}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {isCleaning && (
                    <>
                      <Link
                        to={isArabic ? "/ar/services/cleaning/building-cleaning" : "/services/cleaning/building-cleaning"}
                        className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-medium text-sm flex items-center justify-between transition border border-slate-200/60"
                      >
                        <span>{isArabic ? "تنظيف المباني" : "Building Cleaning"}</span>
                      </Link>
                      <Link
                        to={isArabic ? "/ar/services/cleaning/office-cleaning" : "/services/cleaning/office-cleaning"}
                        className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-medium text-sm flex items-center justify-between transition border border-slate-200/60"
                      >
                        <span>{isArabic ? "تنظيف المكاتب" : "Office Cleaning"}</span>
                      </Link>
                      <Link
                        to={isArabic ? "/ar/services/cleaning/facade-cleaning" : "/services/cleaning/facade-cleaning"}
                        className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-medium text-sm flex items-center justify-between transition border border-slate-200/60"
                      >
                        <span>{isArabic ? "تنظيف واجهات الأبراج" : "High-Rise Facade Cleaning"}</span>
                      </Link>
                      <Link
                        to={isArabic ? "/ar/riyadh" : "/riyadh"}
                        className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-medium text-sm flex items-center justify-between transition border border-slate-200/60"
                      >
                        <span>{isArabic ? "خدماتنا في مدينة الرياض" : "Cleaning in Riyadh"}</span>
                      </Link>
                    </>
                  )}

                  {isManpower && (
                    <>
                      <Link
                        to={isArabic ? "/ar/services/manpower/general-workers" : "/services/manpower/general-workers"}
                        className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-medium text-sm flex items-center justify-between transition border border-slate-200/60"
                      >
                        <span>{isArabic ? "توريد عمالة عامة" : "General Workers Supply"}</span>
                      </Link>
                      <Link
                        to={isArabic ? "/ar/services/manpower/cleaning-staff" : "/services/manpower/cleaning-staff"}
                        className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-medium text-sm flex items-center justify-between transition border border-slate-200/60"
                      >
                        <span>{isArabic ? "توريد عمالة نظافة" : "Cleaning Staff Supply"}</span>
                      </Link>
                      <Link
                        to={isArabic ? "/ar/services/manpower/facility-support" : "/services/manpower/facility-support"}
                        className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-medium text-sm flex items-center justify-between transition border border-slate-200/60"
                      >
                        <span>{isArabic ? "كوادر دعم المرافق" : "Facility Support Staff"}</span>
                      </Link>
                      <Link
                        to={isArabic ? "/ar/riyadh" : "/riyadh"}
                        className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-medium text-sm flex items-center justify-between transition border border-slate-200/60"
                      >
                        <span>{isArabic ? "توريد عمالة بالرياض" : "Manpower in Riyadh"}</span>
                      </Link>
                    </>
                  )}
                </div>
              </div>

            </div>

            {/* Right 1 Col: Contact Sidebar & Trust Signals */}
            <div className="space-y-8">
              
              {/* Quick Quote Widget */}
              <div className="bg-gradient-to-br from-slate-900 to-navy-900 text-white p-7 rounded-3xl shadow-xl border border-slate-800">
                <h3 className="text-xl font-bold mb-2">
                  {isArabic ? "احصل على عرض سعر فوري" : "Get Fast Service Quote"}
                </h3>
                <p className="text-slate-300 text-sm mb-6">
                  {isArabic ? "تواصل مباشرة مع فريق العمليات في الرياض لترتيب المعاينة والبدء الفوري." : "Connect directly with our Riyadh dispatch team for immediate consultation."}
                </p>

                <div className="space-y-3">
                  <a
                    href={COMPANY_INFO.telUrl}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition"
                  >
                    <Phone size={18} />
                    <span>{COMPANY_INFO.phoneFormatted}</span>
                  </a>

                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition"
                  >
                    <MessageSquare size={18} />
                    <span>{isArabic ? "مراسلة عبر واتساب" : "Message on WhatsApp"}</span>
                  </a>

                  <Link
                    to={isArabic ? "/ar/contact" : "/contact"}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-4 rounded-xl border border-white/20 flex items-center justify-center gap-2 transition"
                  >
                    <span>{isArabic ? "نموذج الطلب عبر الموقع" : "Online Contact Form"}</span>
                  </Link>
                </div>
              </div>

              {/* Company Credibility Card */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
                <h4 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-3">
                  {isArabic ? "بيانات الاعتماد والترخيص" : "Official Verification"}
                </h4>

                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <Shield className="text-emerald-600 shrink-0" size={18} />
                  <div>
                    <div className="text-xs text-slate-500">{isArabic ? "السجل التجاري (CR):" : "Commercial Registration:"}</div>
                    <div className="font-bold text-slate-900">{COMPANY_INFO.crNumber}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <MapPin className="text-emerald-600 shrink-0" size={18} />
                  <div>
                    <div className="text-xs text-slate-500">{isArabic ? "المقر الرئيسي والمدينة:" : "Headquarters:"}</div>
                    <div className="font-medium">{isArabic ? COMPANY_INFO.addressAr : COMPANY_INFO.addressEn}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <Clock className="text-emerald-600 shrink-0" size={18} />
                  <div>
                    <div className="text-xs text-slate-500">{isArabic ? "ساعات العمل:" : "Operating Hours:"}</div>
                    <div className="font-medium">{isArabic ? COMPANY_INFO.workingHoursAr : COMPANY_INFO.workingHoursEn}</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
