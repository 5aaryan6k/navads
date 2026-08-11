import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { Icon } from "../components/icons/Icons";
import { siteContent } from "../data/siteContent";
import { SafeImage } from "../components/ui/SafeImage";

export function ServicesPage() {
  const { hash } = useLocation();

  useEffect(() => {
    document.title = "Services | Navi Ads";
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const sky = siteContent.services.skyCleaning;
  const manpower = siteContent.services.manpower;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Header />

      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Our Services</h1>
          <p className="mt-4 text-xl text-emerald-300 font-semibold">
            Dedicated Sky Cleaning & Manpower Solutions Across Saudi Arabia
          </p>
        </div>
      </div>

      {/* SERVICE 1 — SKY CLEANING */}
      <section id={sky.id} className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Service 01
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{sky.title}</h2>
              <p className="mt-5 text-slate-600 text-lg leading-relaxed">
                {sky.fullDesc}
              </p>
            </div>

            {sky.showImage && sky.image && (
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <SafeImage src={sky.image} alt={sky.title} className="w-full h-[380px] object-cover" />
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sky.subcategories.map((sub) => (
              <div key={sub.name} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold text-slate-900">{sub.name}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed mb-4">{sub.desc}</p>
                <ul className="space-y-2 border-t border-slate-200 pt-4">
                  {sub.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <Icon.Check className="h-4 w-4 text-emerald-600 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-sky-50 border border-sky-200 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Need Professional Cleaning?</h3>
              <p className="text-slate-600 text-sm mt-1">Get in touch with our expert cleaning teams today.</p>
            </div>
            <Link
              to="/contact"
              className="bg-sky-600 hover:bg-sky-700 text-white px-7 py-3 rounded-full font-semibold shadow-md transition whitespace-nowrap"
            >
              Request Cleaning Service
            </Link>
          </div>
        </div>
      </section>

      <hr className="border-slate-100 max-w-7xl mx-auto" />

      {/* SERVICE 2 — MANPOWER SERVICES */}
      <section id={manpower.id} className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Service 02
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{manpower.title}</h2>
              <p className="mt-5 text-slate-600 text-lg leading-relaxed">
                {manpower.fullDesc}
              </p>
            </div>

            {manpower.showImage && manpower.image && (
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <SafeImage src={manpower.image} alt={manpower.title} className="w-full h-[380px] object-cover" />
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {manpower.subcategories.map((sub) => (
              <div key={sub.name} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold text-slate-900">{sub.name}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed mb-4">{sub.desc}</p>
                <ul className="space-y-2 border-t border-slate-100 pt-4">
                  {sub.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <Icon.Check className="h-4 w-4 text-emerald-600 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Looking for Reliable Manpower?</h3>
              <p className="text-slate-600 text-sm mt-1">Deploy trained workforce personnel tailored to your operational requirements.</p>
            </div>
            <Link
              to="/contact"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3 rounded-full font-semibold shadow-md transition whitespace-nowrap"
            >
              Request Manpower
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Let's Find the Right Solution for You</h2>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            Whether you need professional cleaning for your property or dependable manpower for your business, Navi Ads is ready to help.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-emerald-500/30 transition hover:scale-105"
            >
              Contact Navi Ads <Icon.Arrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
