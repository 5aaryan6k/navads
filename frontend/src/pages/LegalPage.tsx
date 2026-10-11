import { useLocation, Link } from "react-router-dom";
import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { pagesSEO, COMPANY_INFO } from "../data/seoData";
import { Shield, FileText } from "lucide-react";

export function LegalPage() {
  const location = useLocation();
  const pathname = location.pathname.length > 1 && location.pathname.endsWith("/")
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const seo = pagesSEO[pathname] || pagesSEO["/privacy-policy"];
  const isArabic = seo.lang === "ar" || pathname.startsWith("/ar");
  const isTerms = pathname.includes("terms");

  return (
    <div className={`min-h-screen bg-white text-slate-900 font-sans antialiased ${isArabic ? "font-arabic" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
      <Header />

      <section className="relative overflow-hidden bg-slate-50 pt-36 pb-16 border-b border-slate-200/60">
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-emerald-700 font-bold text-xs sm:text-sm uppercase tracking-wider mb-3">
            {isTerms
              ? (isArabic ? "الشروط والأحكام الرسمية" : "Terms & Conditions")
              : (isArabic ? "سياسة الخصوصية وحماية البيانات" : "Privacy & Data Protection")}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            {seo.h1}
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed font-medium">
            {seo.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm prose prose-slate max-w-none">
            
            {isTerms ? (
              // TERMS AND CONDITIONS
              isArabic ? (
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <h2 className="text-xl font-bold text-slate-900">1. المقدمة ونطاق العمل</h2>
                  <p>
                    تحكم هذه الشروط والأحكام كافة الخدمات المقدمة من شركة نافيآدز (السجل التجاري رقم: 7051048754) في المملكة العربية السعودية، بما في ذلك خدمات تنظيف سكاي (Sky Cleaning Services) وخدمات توريد العمالة والكوادر المهنية.
                  </p>

                  <h2 className="text-xl font-bold text-slate-900">2. اتفاقيات وعقود الخدمة</h2>
                  <p>
                    يتم تقديم كافة الخدمات بناءً على نطاق عمل متفق عليه مسبقاً وتفاصيل التسعير والجدول الزمني المعتمد بين الطرفين. تلتزم الشركة بتقديم كوادر نظامية مؤهلة ومعدات مطابقة للمواصفات.
                  </p>

                  <h2 className="text-xl font-bold text-slate-900">3. التزامات العميل والسلامة المهنية</h2>
                  <p>
                    يلتزم العميل بتوفير إمكانية الوصول الآمن إلى الموقع المعني ومصادر المياه والكهرباء اللازمة لإنجاز أعمال النظافة، والالتزام بمعايير السلامة المهنية المعتمدة.
                  </p>

                  <h2 className="text-xl font-bold text-slate-900">4. القانون الواجب التطبيق</h2>
                  <p>
                    تخضع هذه الاتفاقية وتفسر وفقاً للأنظمة واللوائح والقرارات السارية في المملكة العربية السعودية، وتختص محاكم مدينة الرياض بالفصل في أي نزاع ينشأ عنها.
                  </p>
                </div>
              ) : (
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <h2 className="text-xl font-bold text-slate-900">1. Introduction & Scope</h2>
                  <p>
                    These Terms and Conditions govern all professional services provided by Navi Ads Company (Commercial Registration No.: 7051048754) within the Kingdom of Saudi Arabia, encompassing Sky Cleaning Services and Manpower Supply Services.
                  </p>

                  <h2 className="text-xl font-bold text-slate-900">2. Service Contracts & Engagement</h2>
                  <p>
                    All service engagements are carried out under defined scope-of-work agreements detailing task frequencies, workforce allocations, and commercial terms. Navi Ads ensures all deployed staff operate in full compliance with Saudi labor laws.
                  </p>

                  <h2 className="text-xl font-bold text-slate-900">3. Site Access & Safety Compliance</h2>
                  <p>
                    Clients agree to grant safe access to the premises and standard utility connections required for executing cleaning and facility maintenance operations.
                  </p>

                  <h2 className="text-xl font-bold text-slate-900">4. Governing Law & Jurisdiction</h2>
                  <p>
                    These Terms are governed by and construed in accordance with the applicable laws and regulations of the Kingdom of Saudi Arabia. The competent courts in Riyadh hold exclusive jurisdiction.
                  </p>
                </div>
              )
            ) : (
              // PRIVACY POLICY
              isArabic ? (
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <h2 className="text-xl font-bold text-slate-900">1. سياسة الخصوصية وسرية البيانات</h2>
                  <p>
                    تلتزم شركة نافيآدز (س.ت: 7051048754) بحماية خصوصية زوار موقعنا وعملائنا الكرام في المملكة العربية السعودية، وفق نظام حماية البيانات الشخصية المعمول به.
                  </p>

                  <h2 className="text-xl font-bold text-slate-900">2. المعلومات التي نجمعها</h2>
                  <p>
                    نقوم فقط بجمع المعلومات الضرورية للتواصل وتقديم عروض الأسعار، مثل: الاسم، رقم الهاتف، عنوان البريد الإلكتروني، وتفاصيل الخدمة المطلوبة وموقع المنشأة في الرياض.
                  </p>

                  <h2 className="text-xl font-bold text-slate-900">3. استخدام المعلومات ومشاركتها</h2>
                  <p>
                    تُستخدم بياناتك فقط للرد على استفساراتك، وتقديم عروض الأسعار، وتنفيذ الخدمات الميدانية. لا نقوم إطلاقاً ببيع أو تأجير أو مشاركة بياناتك مع أي طرف ثالث لأغراض تسويقية.
                  </p>

                  <h2 className="text-xl font-bold text-slate-900">4. التواصل والاستفسار</h2>
                  <p>
                    لأي استفسارات حول سياسة الخصوصية، يرجى التواصل معنا عبر البريد الإلكتروني: info@naviads.com.sa أو هاتفياً على الرقم: 0537799389.
                  </p>
                </div>
              ) : (
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <h2 className="text-xl font-bold text-slate-900">1. Privacy Commitment</h2>
                  <p>
                    Navi Ads Company (CR: 7051048754) respects your privacy and is dedicated to protecting client information in accordance with Saudi Arabian Personal Data Protection Law (PDPL).
                  </p>

                  <h2 className="text-xl font-bold text-slate-900">2. Information Collection</h2>
                  <p>
                    We collect only the contact information provided through our inquiry forms or direct communication (such as name, phone number, email address, facility location in Riyadh, and service specifications) necessary to provide consultations and quotations.
                  </p>

                  <h2 className="text-xl font-bold text-slate-900">3. Use and Protection of Information</h2>
                  <p>
                    Your data is solely used to process inquiries, coordinate field visits, and deliver contracted services. We never sell, lease, or distribute client information to third parties for marketing purposes.
                  </p>

                  <h2 className="text-xl font-bold text-slate-900">4. Contact Information</h2>
                  <p>
                    For inquiries regarding our privacy practices, please contact us at info@naviads.com.sa or call +966 53 779 9389.
                  </p>
                </div>
              )
            )}

            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div>CR: {COMPANY_INFO.crNumber} | {COMPANY_INFO.nameEn}</div>
              <div>{isArabic ? COMPANY_INFO.addressAr : COMPANY_INFO.addressEn}</div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
