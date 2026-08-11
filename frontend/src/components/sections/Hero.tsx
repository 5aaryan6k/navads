import { Link } from "react-router-dom";
import { Icon } from "../icons/Icons";
import { stats, servicesList } from "../../data/constants";
import { siteContent } from "../../data/siteContent";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-900" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #10b981 0%, transparent 40%), radial-gradient(circle at 80% 70%, #14b8a6 0%, transparent 40%)",
        }}
      />
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Trusted Service Provider in {siteContent.company.location}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
            Building Excellence,
            <br />
            <span className="bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
              One Service at a Time.
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-lg leading-relaxed">
            {siteContent.company.fullName} delivers professional Sky Cleaning and Manpower Services across the Kingdom of Saudi Arabia – with reliability, safety, and craftsmanship at the heart of every project.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-emerald-500/30 transition hover:scale-105 flex items-center gap-2"
            >
              Get a Quote <Icon.Arrow className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="border border-white/30 hover:bg-white/10 text-white px-7 py-3.5 rounded-full font-semibold transition"
            >
              Our Services
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-emerald-300">{s.n}</div>
                <div className="text-xs text-slate-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual card - 2 main services */}
        <div className="relative hidden md:block">
          <div className="absolute -top-10 -right-10 h-72 w-72 bg-emerald-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 h-72 w-72 bg-teal-500/20 blur-3xl rounded-full" />

          <div className="relative grid grid-cols-1 gap-6">
            {servicesList.map((s) => (
              <Link
                to={`/services#${s.id}`}
                key={s.title}
                className="rounded-2xl p-6 backdrop-blur-md border border-white/10 bg-white/5 hover:bg-white/10 transition group"
              >
                <div className="flex items-center gap-4">
                  <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg shrink-0`}>
                    <s.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg group-hover:text-emerald-300 transition-colors flex items-center gap-2">
                      {s.title} <Icon.Arrow className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-slate-300 text-xs mt-1 line-clamp-2">{s.desc}</div>
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
