import { useEffect } from "react";
import { Header } from "../components/sections/Header";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";
import { siteContent } from "../data/siteContent";

export function ContactPage() {
  useEffect(() => {
    document.title = "Contact Navi Ads | Get a Quote";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Header />

      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-50 via-emerald-50/60 to-teal-50/40 text-slate-900 pt-36 pb-20 relative overflow-hidden border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Let's Work Together</h1>
          <p className="mt-4 text-xl text-emerald-600 font-semibold leading-relaxed">
            Whether you need professional cleaning services or reliable manpower for your business or property, {siteContent.company.fullName} is ready to provide a solution tailored to your requirements.
          </p>
        </div>
      </div>

      <Contact />

      <Footer />
    </div>
  );
}
