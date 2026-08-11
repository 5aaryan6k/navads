import { Link } from "react-router-dom";
import { navLinks, servicesList } from "../../data/constants";
import { siteContent } from "../../data/siteContent";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg">
              <span className="text-white font-extrabold text-xl">N</span>
            </div>
            <div>
              <div className="font-extrabold text-white text-lg">{siteContent.company.name}</div>
              <div className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">Company</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Trusted provider of professional Sky Cleaning and Manpower Services across the Kingdom of Saudi Arabia.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="hover:text-emerald-400 transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {servicesList.map((s) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`} className="hover:text-emerald-400 transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="text-slate-400">
              <strong className="text-slate-200 block mb-0.5">{siteContent.company.fullName}</strong>
              {siteContent.company.address.building}, {siteContent.company.address.district}<br />
              {siteContent.company.location}
            </li>
            <li>
              <a href={`mailto:${siteContent.company.email}`} className="hover:text-emerald-400 transition-colors break-all">
                {siteContent.company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center text-xs gap-2 text-slate-500">
          <div>© {new Date().getFullYear()} {siteContent.company.fullName}. All rights reserved.</div>
          <div>{siteContent.company.location} 🇸🇦</div>
        </div>
      </div>
    </footer>
  );
}
