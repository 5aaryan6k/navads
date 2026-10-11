import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Icon } from "../icons/Icons";
import { siteContent } from "../../data/siteContent";
import { COMPANY_INFO } from "../../data/seoData";
import { apiClient } from "../../admin/api/client";
import { Phone, MessageSquare, Shield, Clock, MapPin, Mail, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const isArabic = location.pathname.startsWith("/ar");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: (formData.get("message") as string) || (formData.get("subject") as string) || "General Inquiry"
    };

    try {
      await apiClient.post('/inquiries', payload);
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 6000);
    } catch (err: any) {
      console.error("Failed to submit inquiry:", err);
      // Even if backend fails, present friendly message without blocking
      setError(isArabic
        ? "تعذر إرسال النموذج تلقائياً. يرجى التواصل معنا مباشرة عبر الاتصال أو الواتساب على 0537799389."
        : "Failed to send message via server. Please contact us directly via phone or WhatsApp at +966 53 779 9389.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-emerald-600 font-bold uppercase tracking-wider text-xs sm:text-sm">
            {isArabic ? "تواصل معنا" : "Get in Touch"}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {isArabic ? "طلب عرض أسعار واستشارة ميدانية" : "Let's Work Together"}
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            {isArabic
              ? "سواء كنت بحاجة إلى خدمات تنظيف سكاي الاحترافية أو كوادر عمالة نظامية لمنشأتك أو مشروعك بالرياض، نحن جاهزون لخدمتكم."
              : "Whether you need professional cleaning services or reliable manpower for your business or property in Riyadh, Navi Ads is ready to deliver."}
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          
          {/* Info Card */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-800 text-white p-7 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold mb-4">
                {isArabic ? "المقر الرئيسي ومعلومات الاتصال" : "Headquarters & Contact"}
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-emerald-300 mt-0.5" />
                  <div>
                    <div className="font-bold">{isArabic ? COMPANY_INFO.nameAr : COMPANY_INFO.nameEn}</div>
                    <div className="text-emerald-50/90 text-xs mt-1 leading-relaxed">
                      {isArabic ? COMPANY_INFO.addressAr : COMPANY_INFO.addressEn}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <Phone className="h-5 w-5 shrink-0 text-emerald-300" />
                  <a href={COMPANY_INFO.telUrl} className="hover:underline font-bold text-white text-base">
                    {COMPANY_INFO.phoneFormatted}
                  </a>
                </div>

                <div className="flex gap-3 items-center">
                  <MessageSquare className="h-5 w-5 shrink-0 text-emerald-300" />
                  <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-100">
                    {isArabic ? "تواصل واتساب مباشر: 0537799389" : "Direct WhatsApp Chat"}
                  </a>
                </div>

                <div className="flex gap-3 items-center">
                  <Mail className="h-5 w-5 shrink-0 text-emerald-300" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline break-all">
                    {COMPANY_INFO.email}
                  </a>
                </div>

                <div className="flex gap-3 items-center pt-2 border-t border-emerald-500/40">
                  <Shield className="h-5 w-5 shrink-0 text-emerald-300" />
                  <div className="text-xs">
                    {isArabic ? "السجل التجاري:" : "Commercial Registration:"} <strong className="text-white text-sm">{COMPANY_INFO.crNumber}</strong>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <Clock className="h-5 w-5 shrink-0 text-emerald-300" />
                  <div>
                    <div className="text-emerald-50/90 text-xs">{isArabic ? COMPANY_INFO.workingHoursAr : COMPANY_INFO.workingHoursEn}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3">
                {isArabic ? "لماذا تختار شركة نافيآدز؟" : "Why Choose Navi Ads?"}
              </h4>
              <ul className="space-y-2.5">
                {[
                  isArabic ? "كوادر نظامية ومدربة بمعايير عالية" : "Professional & Thoroughly Trained Staff",
                  isArabic ? "سجل تجاري وترخيص رسمي معتمد في الرياض" : "Official Commercial Registration 7051048754",
                  isArabic ? "سرعة استجابة وجاهزية تامة للتنفيذ الميداني" : "Rapid Assessment & Timely Deployment",
                  isArabic ? "حلول مرنة للمشروعات أو العقود الدورية" : "Flexible Contract Structures & Project Staffing"
                ].map((p, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <form
            className="lg:col-span-3 bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80"
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              {isArabic ? "نموذج طلب الخدمة والتسعير" : "Request a Service Quotation"}
            </h3>

            {sent && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold mb-6 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span>{isArabic ? "تم استلام طلبكم بنجاح! سيتواصل معكم فريق العمليات في أقرب وقت." : "Inquiry submitted successfully! Our Riyadh team will contact you shortly."}</span>
              </div>
            )}

            {error && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm mb-6">
                {error}
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                  {isArabic ? "الاسم الكامل *" : "Full Name *"}
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-sm"
                  placeholder={isArabic ? "أدخل اسمك الكريم" : "Your full name"}
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                  {isArabic ? "البريد الإلكتروني *" : "Email Address *"}
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-sm"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mt-5">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                  {isArabic ? "رقم الجوال / الواتساب *" : "Phone / WhatsApp Number *"}
                </label>
                <input
                  name="phone"
                  required
                  type="tel"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-sm"
                  placeholder="+966 5X XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                  {isArabic ? "نوع الخدمة المطلوبة *" : "Select Required Service *"}
                </label>
                <select
                  name="service"
                  required
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-sm bg-white"
                >
                  <option value="">{isArabic ? "-- اختر الخدمة --" : "-- Select a Service --"}</option>
                  <optgroup label={isArabic ? "خدمات تنظيف سكاي" : "Sky Cleaning Services"}>
                    <option value="Building Cleaning">{isArabic ? "تنظيف مباني" : "Building Cleaning"}</option>
                    <option value="Office Cleaning">{isArabic ? "تنظيف مكاتب وشركات" : "Office Cleaning"}</option>
                    <option value="Home Cleaning">{isArabic ? "تنظيف منازل وفلل" : "Home Cleaning"}</option>
                    <option value="Deep Cleaning">{isArabic ? "تنظيف عميق" : "Deep Cleaning"}</option>
                    <option value="Post-Construction Cleaning">{isArabic ? "تنظيف بعد البناء والتشطيب" : "Post-Construction Cleaning"}</option>
                    <option value="Facade Cleaning">{isArabic ? "تنظيف واجهات الأبراج" : "Facade & Window Cleaning"}</option>
                  </optgroup>
                  <optgroup label={isArabic ? "خدمات توريد العمالة" : "Manpower Services"}>
                    <option value="General Workers">{isArabic ? "توريد عمالة عامة" : "General Workers"}</option>
                    <option value="Cleaning Staff">{isArabic ? "توريد عمالة نظافة" : "Cleaning Staff"}</option>
                    <option value="Facility Support">{isArabic ? "كوادر دعم المرافق" : "Facility Support Staff"}</option>
                    <option value="Skilled Workers">{isArabic ? "عمالة ماهرة ونصف ماهرة" : "Skilled & Semi-Skilled Workers"}</option>
                  </optgroup>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                {isArabic ? "تفاصيل الطلب وموقع المنشأة في الرياض" : "Project Details & Facility Location in Riyadh"}
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-sm resize-none"
                placeholder={isArabic ? "أدخل تفاصيل المنشأة أو عدد الكوادر المطلوبة..." : "Please describe your property type, required frequencies or workforce specifications..."}
              ></textarea>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition hover:scale-105 disabled:opacity-50 text-sm"
              >
                {loading
                  ? (isArabic ? "جارٍ الإرسال..." : "Sending...")
                  : (isArabic ? "إرسال الطلب الآن" : "Submit Quote Request")}
              </button>

              <div className="text-xs text-slate-500">
                {isArabic ? "أو اتصل مباشرة:" : "Or call directly:"}{" "}
                <a href={COMPANY_INFO.telUrl} className="font-bold text-emerald-700 hover:underline">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
