import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { COMPANY_INFO } from "../../data/seoData";
import { Phone, Globe, Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();
  const pathname = location.pathname.length > 1 && location.pathname.endsWith("/")
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const isArabic = pathname.startsWith("/ar");

  // Determine current language alternate path
  const targetLangPath = isArabic
    ? (pathname.replace(/^\/ar/, "") || "/")
    : (pathname === "/" ? "/ar" : `/ar${pathname}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = isArabic ? [
    { href: "/ar", label: "الرئيسية" },
    {
      label: "خدماتنا",
      dropdown: [
        { href: "/ar/services/cleaning", label: "خدمات تنظيف سكاي (Sky Cleaning Services)" },
        { href: "/ar/services/manpower", label: "خدمات توريد العمالة (Manpower Services)" },
      ]
    },
    { href: "/ar/riyadh", label: "موقعنا" },
    { href: "/ar/about", label: "من نحن" },
    { href: "/ar/contact", label: "اتصل بنا" }
  ] : [
    { href: "/", label: "Home" },
    {
      label: "Services",
      dropdown: [
        { href: "/services/cleaning", label: "Sky Cleaning Services" },
        { href: "/services/manpower", label: "Manpower Services" },
      ]
    },
    { href: "/riyadh", label: "Our Location" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3" : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4"
      }`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to={isArabic ? "/ar" : "/"} onClick={() => setOpen(false)} className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform text-white font-black text-xl">
            N
          </div>
          <div className="text-left">
            <div className="font-extrabold text-lg leading-tight text-slate-900 group-hover:text-emerald-700 transition">
              {isArabic ? COMPANY_INFO.nameAr : "Navi Ads"}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-emerald-600 font-bold">
              {isArabic ? "خدمات سكاي والعمالة" : "Sky Cleaning & Manpower"}
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item, idx) => {
            if (item.dropdown) {
              return (
                <div key={idx} className="relative group" onMouseEnter={() => setServicesDropdown(true)} onMouseLeave={() => setServicesDropdown(false)}>
                  <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-emerald-600 py-2 transition">
                    <span>{item.label}</span>
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                  </button>

                  {/* Dropdown Menu - Exactly Two Listings */}
                  <div className={`absolute top-full ${isArabic ? "right-0" : "left-0"} w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2.5 transition-all duration-200 ${servicesDropdown ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        onClick={() => setServicesDropdown(false)}
                        className={`block px-4 py-3 rounded-xl text-sm font-semibold transition ${pathname === sub.href ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-700 hover:bg-slate-50 hover:text-emerald-600"}`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href!}
                className={`text-sm font-semibold transition-colors duration-200 hover:text-emerald-600 ${isActive ? "text-emerald-600 font-bold" : "text-slate-700"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Switcher */}
          <Link
            to={targetLangPath}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition border border-slate-200"
            title={isArabic ? "Switch to English" : "التحويل إلى العربية"}
          >
            <Globe size={14} />
            <span>{isArabic ? "English" : "العربية"}</span>
          </Link>

          {/* Call button */}
          <a
            href={COMPANY_INFO.telUrl}
            className="hidden md:flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg hover:bg-emerald-100 transition border border-emerald-200"
          >
            <Phone size={14} />
            <span>0537799389</span>
          </a>

          {/* Quote Button */}
          <Link
            to={isArabic ? "/ar/contact" : "/contact"}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 transition hover:scale-105"
          >
            {isArabic ? "طلب تسعير" : "Get a Quote"}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to={targetLangPath}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200"
          >
            <Globe size={13} />
            <span>{isArabic ? "EN" : "عربي"}</span>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="text-slate-700 hover:text-slate-900 p-2"
            aria-label="Toggle Navigation"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-2xl max-h-[85vh] overflow-y-auto">
          {navItems.map((item, idx) => {
            if (item.dropdown) {
              return (
                <div key={idx} className="space-y-1">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
                    {item.label}
                  </div>
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      to={sub.href}
                      onClick={() => setOpen(false)}
                      className={`block px-3 py-2 rounded-lg text-sm ${pathname === sub.href ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-700 hover:bg-slate-50"}`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                to={item.href!}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-semibold ${pathname === item.href ? "bg-emerald-50 text-emerald-700" : "text-slate-700 hover:bg-slate-50"}`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-slate-100 space-y-2">
            <a
              href={COMPANY_INFO.telUrl}
              className="flex items-center justify-center gap-2 w-full text-center bg-slate-100 text-slate-800 py-3 rounded-xl font-bold text-sm"
            >
              <Phone size={16} />
              <span>{isArabic ? "اتصال مباشر: 0537799389" : "Call: +966 53 779 9389"}</span>
            </a>
            <Link
              to={isArabic ? "/ar/contact" : "/contact"}
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm shadow-md"
            >
              {isArabic ? "طلب عرض سعر" : "Get a Quote"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
