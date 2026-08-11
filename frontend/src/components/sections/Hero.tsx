import { Link } from "react-router-dom";
import { Icon } from "../icons/Icons";
import { stats, servicesList } from "../../data/constants";
import { siteContent } from "../../data/siteContent";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/60 to-teal-50/40" />
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.12) 0%, transparent 45%), radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.12) 0%, transparent 45%)",
        }}
      />
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
            Building Excellence,
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              One Service at a Time.
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-lg leading-relaxed font-medium">
            {siteContent.company.fullName} delivers professional Sky Cleaning and Manpower Services across the Kingdom of Saudi Arabia – with reliability, safety, and craftsmanship at the heart of every project.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-emerald-600/20 transition hover:scale-105 flex items-center gap-2"
            >
              Get a Quote
            </Link>
            <Link
              to="/services"
              className="border border-slate-300 bg-white/70 hover:bg-slate-100 text-slate-700 px-7 py-3.5 rounded-full font-semibold transition shadow-sm"
            >
              Our Services
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-emerald-600">{s.n}</div>
                <div className="text-xs text-slate-500 font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual card - 2 main services */}
        <div className="relative hidden md:block">
          <div className="absolute -top-10 -right-10 h-72 w-72 bg-emerald-400/15 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 h-72 w-72 bg-teal-400/15 blur-3xl rounded-full" />

          <div className="relative grid grid-cols-1 gap-6">
            {servicesList.map((s) => (
              <Link
                to={`/services#${s.id}`}
                key={s.title}
                className="rounded-2xl p-6 bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xl shadow-slate-200/60 hover:border-emerald-500/40 hover:shadow-2xl hover:-translate-y-1 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-md shrink-0`}>
                    <s.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-bold text-lg group-hover:text-emerald-600 transition-colors flex items-center gap-2">
                      {s.title}
                    </div>
                    <div className="text-slate-600 text-xs mt-1 line-clamp-2 leading-relaxed">{s.desc}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
