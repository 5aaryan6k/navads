import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { Icon } from "../components/icons/Icons";
import { siteContent } from "../data/siteContent";
import { SafeImage } from "../components/ui/SafeImage";

export function CEOMessagePage() {
  useEffect(() => {
    document.title = "CEO Message | Navi Ads";
    window.scrollTo(0, 0);
  }, []);

  const ceo = siteContent.ceo;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Header />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-50 pt-36 pb-20 border-b border-slate-200/60">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-emerald-700 font-bold text-xs sm:text-sm uppercase tracking-wider mb-3">
              Executive Leadership
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
              {ceo.title}
            </h1>
            <p className="text-lg sm:text-xl text-emerald-700 font-semibold">
              {ceo.position}
            </p>
          </div>
        </div>
      </section>

      {/* Message Content */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-5 gap-12 items-center">
          {ceo.showImage && ceo.image && (
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-3xl blur-xl opacity-30" />
                <div className="relative bg-gradient-to-br from-emerald-500 to-teal-700 p-1.5 rounded-3xl shadow-2xl">
                  <SafeImage
                    src={ceo.image}
                    alt={`${ceo.name} - ${ceo.position}`}
                    className="w-72 h-80 object-cover object-top rounded-2xl bg-white"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-5 py-2 rounded-full shadow-lg whitespace-nowrap text-center border border-slate-700">
                  <div className="text-sm font-bold">{ceo.name}</div>
                  <div className="text-[11px] text-emerald-400 font-semibold">{ceo.position}</div>
                </div>
              </div>
            </div>
          )}

          <div className={ceo.showImage ? "md:col-span-3" : "md:col-span-5 max-w-3xl mx-auto"}>
            <div className="text-emerald-600 font-bold uppercase tracking-wider text-xs mb-3">
              Leadership Commitment
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              "{ceo.quote}"
            </h2>

            <div className="mt-8 space-y-5 text-slate-600 leading-relaxed text-lg">
              {ceo.message.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="font-bold text-slate-900 pt-2">
                Thank you for trusting Navi Ads. We look forward to serving you.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3 rounded-full font-semibold shadow-md transition"
              >
                Explore Our Services
              </Link>
              <Link
                to="/contact"
                className="border border-slate-300 hover:bg-slate-100 text-slate-700 px-7 py-3 rounded-full font-semibold transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
