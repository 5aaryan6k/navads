import { Link } from "react-router-dom";
import { Icon } from "../icons/Icons";
import { siteContent } from "../../data/siteContent";
import { SafeImage } from "../ui/SafeImage";

export function CEOMessage() {
  return (
    <section id="ceo" className="py-24 bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-900 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 30%, #10b981 0%, transparent 50%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-5 gap-12 items-center">
        {siteContent.ceo.showImage && siteContent.ceo.image && (
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-3xl blur-xl opacity-40" />
              <div className="relative bg-gradient-to-br from-emerald-500 to-teal-700 p-1.5 rounded-3xl shadow-2xl">
                <SafeImage
                  src={siteContent.ceo.image}
                  alt={`${siteContent.ceo.name} - ${siteContent.ceo.position}`}
                  className="w-72 h-80 object-cover object-top rounded-2xl bg-white"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-slate-900 px-5 py-2 rounded-full shadow-lg whitespace-nowrap text-center">
                <div className="text-sm font-bold">{siteContent.ceo.name}</div>
                <div className="text-[11px] text-emerald-600 font-semibold">{siteContent.ceo.position}</div>
              </div>
            </div>
          </div>
        )}

        <div className={siteContent.ceo.showImage ? "md:col-span-3 mt-10 md:mt-0" : "md:col-span-5 max-w-3xl mx-auto"}>
          <div className="text-emerald-300 font-semibold uppercase tracking-wider text-sm">
            {siteContent.ceo.title}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
            "{siteContent.ceo.quote}"
          </h2>
          <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
            {siteContent.ceo.message.map((para, i) => (
              <p key={i}>
                {i === 0 && <Icon.Quote className="h-7 w-7 inline text-emerald-400 mr-2 -mt-2" />}
                {para}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/services"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md transition"
            >
              Explore Our Services
            </Link>
            <Link
              to="/contact"
              className="border border-white/30 hover:bg-white/10 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
