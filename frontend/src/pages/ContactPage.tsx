import { useLocation } from "react-router-dom";
import { Header } from "../components/sections/Header";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";
import { siteContent } from "../data/siteContent";
import { COMPANY_INFO } from "../data/seoData";

import { Phone, MessageSquare } from "lucide-react";

export function ContactPage() {
  const location = useLocation();
  const isArabic = location.pathname.startsWith("/ar");

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
              {isArabic ? "تواصل مباشر وخدمة سريعة" : "Direct Contact & Fast Dispatch"}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              {isArabic ? (
                <>
                  تواصل مع شركة نافيآدز
                  <br />
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    في مدينة الرياض والمملكة
                  </span>
                </>
              ) : (
                <>
                  Contact Navi Ads
                  <br />
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    in Riyadh & Saudi Arabia
                  </span>
                </>
              )}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 font-medium">
              {isArabic
                ? "سواء كنت بحاجة إلى خدمات تنظيف سكاي الشاملة أو ترغب في توريد عمالة نظامية وموثوقة لمنشأتك، فريقنا في الرياض جاهز لتلبية طلبكم على الفور."
                : "Whether you require professional Sky Cleaning Services or compliant manpower solutions for your business in Riyadh, Navi Ads is ready to deliver."}
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
            </div>
          </div>
        </div>
      </section>

      <Contact />

      <Footer />
    </div>
  );
}
