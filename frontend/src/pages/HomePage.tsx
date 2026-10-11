import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../components/sections/Header";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Services } from "../components/sections/Services";
import { CEOMessage } from "../components/sections/CEOMessage";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";

export function HomePage() {
  const location = useLocation();
  const isArabic = location.pathname.startsWith("/ar");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen bg-white text-slate-900 font-sans antialiased ${isArabic ? "font-arabic" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
      <Header />
      <Hero />
      <About />
      <Services />
      <CEOMessage />
      <Contact />
      <Footer />
    </div>
  );
}
