import { useState } from "react";
import { Icon } from "../icons/Icons";
import { siteContent } from "../../data/siteContent";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-emerald-600 font-semibold uppercase tracking-wider text-sm">Get in Touch</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Let's Work Together
          </h2>
          <p className="mt-4 text-slate-600">
            Whether you need professional cleaning services or reliable manpower for your business or property, Navi Ads is ready to provide a solution tailored to your requirements.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-800 text-white p-7 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold">Head Office</h3>
              <div className="mt-5 space-y-4 text-sm">
                <div className="flex gap-3">
                  <Icon.Map className="h-5 w-5 shrink-0 text-emerald-300 mt-0.5" />
                  <div>
                    <div className="font-semibold">{siteContent.company.fullName}</div>
                    <div className="text-emerald-50/90 mt-1">
                      {siteContent.company.address.building}<br />
                      {siteContent.company.address.district}<br />
                      {siteContent.company.location}
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon.Mail className="h-5 w-5 shrink-0 text-emerald-300 mt-0.5" />
                  <a href={`mailto:${siteContent.company.email}`} className="hover:underline break-all">
                    {siteContent.company.email}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Icon.Clock className="h-5 w-5 shrink-0 text-emerald-300 mt-0.5" />
                  <div>
                    <div className="font-semibold">Working Hours</div>
                    <div className="text-emerald-50/90 mt-1">{siteContent.company.hours}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900">Why Choose Navi Ads?</h4>
              <ul className="mt-3 space-y-2">
                {["Professional & Trained Staff", "Reliable & Punctual Service", "Flexible Workforce Solutions", "High Quality Standards"].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-700">
                    <Icon.Check className="h-4 w-4 text-emerald-600 shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <form
            className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                setSent(true);
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setSent(false), 5000);
              }, 800);
            }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                <input required type="text" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                <input required type="email" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number *</label>
                <input required type="tel" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="+966 ..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Required *</label>
                <select required className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-white">
                  <option value="">Select Service</option>
                  <option value="Sky Cleaning">Sky Cleaning</option>
                  <option value="Manpower Services">Manpower Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Subject</label>
              <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="Inquiry subject" />
            </div>
            <div className="mt-5">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Message *</label>
              <textarea required rows={5} className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="Tell us about your requirements..." />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-emerald-500/30 transition flex items-center justify-center gap-2"
            >
              {loading ? "Sending Message..." : "Send Message"}
            </button>

            {sent && (
              <div className="mt-4 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
                <Icon.Check className="h-5 w-5 shrink-0" /> Thank you! Your message has been sent successfully. We will contact you shortly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
