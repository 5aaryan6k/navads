import { Link } from "react-router-dom";
import { Icon } from "../icons/Icons";
import { servicesList } from "../../data/constants";
import { SafeImage } from "../ui/SafeImage";

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-emerald-600 font-semibold uppercase tracking-wider text-sm">What We Do</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Professional Cleaning & Manpower Solutions
          </h2>
          <p className="mt-4 text-slate-600">
            From specialized high-rise sky cleaning to reliable workforce deployment, our teams handle every job with safety, discipline, and precision.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesList.map((s) => (
            <div
              key={s.id}
              className="group relative bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {s.showImage && s.img && (
                  <div className="relative -mx-8 -mt-8 mb-6 h-56 overflow-hidden bg-slate-100">
                    <SafeImage src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className={`relative h-14 w-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg mb-5`}>
                  <s.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{s.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed text-sm">{s.desc}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to={`/services#${s.id}`}
                  className="inline-flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-700 transition-colors text-sm"
                >
                  Explore {s.title} <Icon.Arrow className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
