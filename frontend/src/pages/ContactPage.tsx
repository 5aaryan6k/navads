import { useLocation } from "react-router-dom";
import { Header } from "../components/sections/Header";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";
import { siteContent } from "../data/siteContent";
import { COMPANY_INFO } from "../data/seoData";
import { Shield } from "lucide-react";

export function ContactPage() {
  const location = useLocation();
  const isArabic = location.pathname.startsWith("/ar");

  return (
    <div className={`min-h-screen bg-white text-slate-900 font-sans antialiased ${isArabic ? "font-arabic" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
      <Header />

      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 via-navy-900 to-slate-950 text-white pt-36 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-4">
            <Shield size={14} />
            <span>{isArabic ? "سجل تجاري معتمد: 7051048754 — الرياض" : "Licensed CR: 7051048754 — Riyadh"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            {isArabic ? "تواصل مع شركة نافيآدز في الرياض" : "Contact Navi Ads in Riyadh"}
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 leading-relaxed font-medium">
            {isArabic
              ? "سواء كنت بحاجة إلى خدمات تنظيف سكاي الشاملة أو ترغب في توريد عمالة نظامية وموثوقة لمنشأتك، فريقنا في الرياض جاهز لتلبية طلبكم على الفور."
              : "Whether you require professional Sky Cleaning Services or compliant manpower solutions for your business in Riyadh, Navi Ads is ready to deliver."}
          </p>
        </div>
      </div>

      <Contact />

      <Footer />
    </div>
  );
}
