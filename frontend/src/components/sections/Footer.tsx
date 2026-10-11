import { Link, useLocation } from "react-router-dom";
import { COMPANY_INFO } from "../../data/seoData";
import { Phone, Mail, MapPin, Shield, MessageSquare } from "lucide-react";

export function Footer() {
  const location = useLocation();
  const isArabic = location.pathname.startsWith("/ar");

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Official Trust Signals (2 spans) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-black text-xl shadow-lg">
                N
              </div>
              <div>
                <div className="font-extrabold text-white text-lg leading-tight">
                  {isArabic ? COMPANY_INFO.nameAr : COMPANY_INFO.nameEn}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
                  {isArabic ? "خدمات النظافة وإدارة العمالة" : "Sky Cleaning & Manpower Services"}
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              {isArabic
                ? "مزود معتمد وموثوق لخدمات تنظيف سكاي الشاملة وحلول توريد العمالة والكوادر المهنية لكافة المنشآت في مدينة الرياض والمملكة العربية السعودية."
                : "Trusted provider of specialized Sky Cleaning solutions and compliant workforce supply across Riyadh, Kingdom of Saudi Arabia."}
            </p>

            {/* CR Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <Shield size={14} className="text-emerald-400 shrink-0" />
              <span>{isArabic ? "السجل التجاري:" : "Commercial Registration:"} <strong className="text-white">{COMPANY_INFO.crNumber}</strong></span>
            </div>

            {/* Direct Contact CTAs */}
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={COMPANY_INFO.telUrl}
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800/80 px-3 py-1.5 rounded-lg hover:bg-emerald-900 transition"
              >
                <Phone size={13} />
                <span>{COMPANY_INFO.phoneFormatted}</span>
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-teal-950 text-teal-300 border border-teal-800/80 px-3 py-1.5 rounded-lg hover:bg-teal-900 transition"
              >
                <MessageSquare size={13} />
                <span>{isArabic ? "واتساب" : "WhatsApp"}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Sky Cleaning Services Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {isArabic ? "خدمات تنظيف سكاي" : "Sky Cleaning"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to={isArabic ? "/ar/services/cleaning" : "/services/cleaning"} className="hover:text-emerald-400 transition">
                  {isArabic ? "نظرة عامة على التنظيف" : "All Cleaning Services"}
                </Link>
              </li>
              <li>
                <Link to={isArabic ? "/ar/services/cleaning/building-cleaning" : "/services/cleaning/building-cleaning"} className="hover:text-emerald-400 transition">
                  {isArabic ? "تنظيف المباني" : "Building Cleaning"}
                </Link>
              </li>
              <li>
                <Link to={isArabic ? "/ar/services/cleaning/office-cleaning" : "/services/cleaning/office-cleaning"} className="hover:text-emerald-400 transition">
                  {isArabic ? "تنظيف المكاتب" : "Office Cleaning"}
                </Link>
              </li>
              <li>
                <Link to={isArabic ? "/ar/services/cleaning/home-cleaning" : "/services/cleaning/home-cleaning"} className="hover:text-emerald-400 transition">
                  {isArabic ? "تنظيف المنازل" : "Home Cleaning"}
                </Link>
              </li>
              <li>
                <Link to={isArabic ? "/ar/services/cleaning/deep-cleaning" : "/services/cleaning/deep-cleaning"} className="hover:text-emerald-400 transition">
                  {isArabic ? "التنظيف العميق" : "Deep Cleaning"}
                </Link>
              </li>
              <li>
                <Link to={isArabic ? "/ar/services/cleaning/post-construction-cleaning" : "/services/cleaning/post-construction-cleaning"} className="hover:text-emerald-400 transition">
                  {isArabic ? "تنظيف بعد البناء" : "Post-Construction"}
                </Link>
              </li>
              <li>
                <Link to={isArabic ? "/ar/services/cleaning/facade-cleaning" : "/services/cleaning/facade-cleaning"} className="hover:text-emerald-400 transition">
                  {isArabic ? "تنظيف واجهات الأبراج" : "Facade & Window Cleaning"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Manpower Supply Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {isArabic ? "توريد العمالة" : "Manpower Services"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to={isArabic ? "/ar/services/manpower" : "/services/manpower"} className="hover:text-emerald-400 transition">
                  {isArabic ? "نظرة عامة على العمالة" : "All Manpower Supply"}
                </Link>
              </li>
              <li>
                <Link to={isArabic ? "/ar/services/manpower/general-workers" : "/services/manpower/general-workers"} className="hover:text-emerald-400 transition">
                  {isArabic ? "عمالة عامة" : "General Workers"}
                </Link>
              </li>
              <li>
                <Link to={isArabic ? "/ar/services/manpower/cleaning-staff" : "/services/manpower/cleaning-staff"} className="hover:text-emerald-400 transition">
                  {isArabic ? "عمالة نظافة" : "Cleaning Staff"}
                </Link>
              </li>
              <li>
                <Link to={isArabic ? "/ar/services/manpower/facility-support" : "/services/manpower/facility-support"} className="hover:text-emerald-400 transition">
                  {isArabic ? "دعم المرافق" : "Facility Support Staff"}
                </Link>
              </li>
              <li>
                <Link to={isArabic ? "/ar/services/manpower/skilled-semi-skilled" : "/services/manpower/skilled-semi-skilled"} className="hover:text-emerald-400 transition">
                  {isArabic ? "عمالة ماهرة وفنية" : "Skilled & Semi-Skilled"}
                </Link>
              </li>
              <li className="pt-2">
                <Link to={isArabic ? "/ar/riyadh" : "/riyadh"} className="text-emerald-400 font-semibold hover:underline">
                  {isArabic ? "موقعنا" : "Our Location"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Location Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {isArabic ? "المقر والتواصل" : "Location & Contact"}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>{isArabic ? COMPANY_INFO.addressAr : COMPANY_INFO.addressEn}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-emerald-400 transition">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="pt-2">
                <div className="text-[11px] text-slate-500 uppercase">{isArabic ? "ساعات العمل:" : "Working Hours:"}</div>
                <div className="text-slate-300 text-xs">{isArabic ? COMPANY_INFO.workingHoursAr : COMPANY_INFO.workingHoursEn}</div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {isArabic ? COMPANY_INFO.nameAr : COMPANY_INFO.nameEn}. {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </div>

          <div className="flex items-center gap-6">
            <Link to={isArabic ? "/ar/privacy-policy" : "/privacy-policy"} className="hover:text-slate-300 transition">
              {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
            <Link to={isArabic ? "/ar/terms" : "/terms"} className="hover:text-slate-300 transition">
              {isArabic ? "الشروط والأحكام" : "Terms & Conditions"}
            </Link>
            <Link to={isArabic ? "/ar/contact" : "/contact"} className="hover:text-slate-300 transition">
              {isArabic ? "اتصل بنا" : "Contact"}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
