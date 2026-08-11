import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../data/constants";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3" : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span className="text-white font-extrabold text-xl">N</span>
          </div>
          <div className="text-left">
            <div className="font-extrabold text-lg leading-tight text-slate-900">
              Navi Ads
            </div>
            <div className="text-[10px] uppercase tracking-wider text-emerald-600 font-bold">
              Company
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => {
            const isActive = location.pathname === l.href;
            return (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm font-semibold transition-colors duration-200 hover:text-emerald-600 ${
                  isActive ? "text-emerald-600 font-bold" : "text-slate-700"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-emerald-600/20 transition-all hover:scale-105"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-700 hover:text-slate-900 p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-xl">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                location.pathname === l.href ? "bg-emerald-50 text-emerald-600 font-semibold" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-full text-base font-semibold shadow-md"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
