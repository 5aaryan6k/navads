import { Link } from "react-router-dom";
import { Icon } from "../icons/Icons";
import { siteContent } from "../../data/siteContent";
import { SafeImage } from "../ui/SafeImage";

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div className="text-emerald-600 font-semibold uppercase tracking-wider text-sm">About Us</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            A Reliable Partner for Cleaning & Manpower Solutions in Saudi Arabia
          </h2>
          <p className="mt-5 text-slate-600 leading-relaxed">
            {siteContent.about.overview}
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            {siteContent.about.goal}
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { icon: Icon.Shield, t: "Professionalism", d: "High standards in every service" },
              { icon: Icon.Clock, t: "Reliability", d: "Dependable and consistent support" },
              { icon: Icon.Star, t: "Quality First", d: "Focusing on exceptional results" },
              { icon: Icon.Labour, t: "Skilled Personnel", d: "Vetted & trained professionals" },
            ].map((f) => (
              <div key={f.t} className="flex gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{f.t}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{f.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md transition"
            >
              Learn More About Us
            </Link>
          </div>
        </div>

        <div className="relative">
          {siteContent.about.showImage && siteContent.about.image ? (
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <SafeImage src={siteContent.about.image} alt="About Navi Ads" className="w-full h-[450px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="text-xl font-bold">{siteContent.company.fullName}</h3>
                <p className="text-xs text-emerald-300 mt-1">{siteContent.about.subtitle}</p>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl p-10 text-white shadow-2xl">
              <Icon.Quote className="h-12 w-12 text-emerald-300/60" />
              <h3 className="text-2xl font-bold mt-4">Our Mission</h3>
              <p className="mt-3 text-emerald-50/90 leading-relaxed">
                {siteContent.about.mission}
              </p>
              <h3 className="text-2xl font-bold mt-8">Our Vision</h3>
              <p className="mt-3 text-emerald-50/90 leading-relaxed">
                {siteContent.about.vision}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
