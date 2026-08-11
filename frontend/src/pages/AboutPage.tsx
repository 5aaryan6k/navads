import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { Icon } from "../components/icons/Icons";
import { siteContent } from "../data/siteContent";
import { SafeImage } from "../components/ui/SafeImage";

export function AboutPage() {
  useEffect(() => {
    document.title = "About Navi Ads | Cleaning & Manpower Services";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Header />

      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-50 via-emerald-50/60 to-teal-50/40 text-slate-900 pt-36 pb-20 relative overflow-hidden border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">{siteContent.about.title}</h1>
          <p className="mt-4 text-xl text-emerald-600 font-semibold">{siteContent.about.subtitle}</p>
        </div>
      </div>

      {/* Main Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Company Overview</h2>
            <p className="mt-5 text-slate-600 leading-relaxed text-lg">
              {siteContent.about.overview}
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed text-lg">
              {siteContent.about.goal}
            </p>

            <div className="mt-8">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">We Focus On</h3>
              <div className="flex flex-wrap gap-2">
                {siteContent.about.focusPoints.map((point) => (
                  <span key={point} className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    ✓ {point}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {siteContent.about.showImage && siteContent.about.image && (
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <SafeImage src={siteContent.about.image} alt="About Navi Ads" className="w-full h-[400px] object-cover" />
            </div>
          )}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 shadow-sm">
            <div className="h-12 w-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-md">
              <Icon.Star className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            <p className="mt-4 text-slate-600 leading-relaxed text-lg">
              {siteContent.about.mission}
            </p>
          </div>

          <div className="bg-teal-50 border border-teal-100 rounded-3xl p-8 shadow-sm">
            <div className="h-12 w-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center mb-6 shadow-md">
              <Icon.Shield className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
            <p className="mt-4 text-slate-600 leading-relaxed text-lg">
              {siteContent.about.vision}
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
            <p className="mt-3 text-slate-600">The principles that guide our everyday operations and client service.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {siteContent.about.coreValues.map((val) => (
              <div key={val.title} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-emerald-600 font-bold text-xl mb-2">{val.title}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-emerald-500/20 transition"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
