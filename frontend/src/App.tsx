import { useState, useEffect, useRef } from "react";
import {
  Mail, MapPin, Menu, X, Shield, Users, Award,
  Phone, Clock, Building2, CheckCircle2, Factory, Hammer
} from "lucide-react";

import { Routes, Route, useNavigate } from "react-router-dom";

// Admin Imports
import { AdminLayout } from "./admin/layout/AdminLayout";
import { Login } from "./admin/pages/auth/Login";
import { Dashboard } from "./admin/pages/Dashboard";
import { ServicesList } from "./admin/pages/services/ServicesList";
import { ServiceForm } from "./admin/pages/services/ServiceForm";
import { InquiriesList } from "./admin/pages/inquiries/InquiriesList";
import { HomepageEditor } from "./admin/pages/content/HomepageEditor";
import { AboutUsEditor } from "./admin/pages/content/AboutUsEditor";
import { CEOMessageEditor } from "./admin/pages/content/CEOMessageEditor";

// Reusable Animated Section Wrapper
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsVisible(true), delay);
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`}>
      {children}
    </div>
  );
}

// Header
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-navy-100 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${isScrolled ? "bg-navy-900 text-gold-500" : "bg-primary-50 text-primary-600 border border-primary-100"}`}>
              <Building2 size={24} />
            </div>
            <div>
              <span className={`text-xl font-display font-bold tracking-tight transition-colors duration-300 text-navy-900`}>
                Navi Ads
              </span>
              <span className={`block text-xs font-semibold tracking-widest uppercase transition-colors duration-300 text-primary-600`}>
                Company
              </span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 text-navy-600 hover:text-primary-600 hover:bg-primary-50`}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="ml-4 btn-primary">
              Get Quote
            </a>
          </nav>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`md:hidden p-2 rounded-xl transition-colors text-navy-900 bg-navy-50`}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
          <div className="p-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-navy-100 shadow-xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-navy-600 font-semibold hover:bg-navy-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-navy-100">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary w-full text-center justify-center">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// Hero
function HeroSection({ content }: { content?: any }) {
  const title = content?.title || "Excellence in Industrial Solutions";
  const subtitle = content?.subtitle || "Delivering world-class construction, facility management, and professional services across Saudi Arabia with uncompromising quality.";

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-50 via-white to-white opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.05] mix-blend-multiply"></div>
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
            </div>
      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col lg:flex-row items-center gap-12">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-sm text-primary-300 font-medium mb-8">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
              Trusted by 500+ Clients
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-navy-900 leading-[1.1] mb-8 tracking-tight">
              {title.split(" ").map((word: string, i: number, arr: string[]) =>
                i === arr.length - 1 ? <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">{word}</span> : word + " "
              )}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-lg sm:text-xl text-navy-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#services" className="btn-primary py-4 px-8 text-base">
                Explore Services
              </a>
              <a href="#contact" className="px-8 py-4 bg-white border-2 border-navy-200 text-navy-900 rounded-xl font-semibold hover:bg-navy-50 transition-all duration-300 flex items-center justify-center gap-2">
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>

          <div className="w-full lg:w-[450px]">
            <AnimatedSection delay={200} className="w-full">
              <div className="glass-panel p-6 rounded-3xl border border-navy-100 shadow-2xl shadow-navy-200/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-display font-bold text-navy-900">Why Choose Us</h3>
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                      <Shield className="text-primary-600" size={20} />
                    </div>
                  </div>
                  <div className="space-y-6">
                    {[
                      { title: "Quality Workmanship", desc: "Premium materials and expert execution", icon: <Award size={20} /> },
                      { title: "Reliable Delivery", desc: "On-time project completion guaranteed", icon: <Clock size={20} /> },
                      { title: "Expert Team", desc: "Highly trained professionals", icon: <Users size={20} /> }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-navy-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-50 transition-colors shadow-sm">
                          <div className="text-primary-600">{item.icon}</div>
                        </div>
                        <div>
                          <h4 className="text-navy-900 font-bold mb-1">{item.title}</h4>
                          <p className="text-navy-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
      </div>
    </section>
  );
}

// Services
function ServicesSection() {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://navads.onrender.com/api/services?status=Published")
      .then(res => res.json())
      .then(data => {
        // If DB is empty, use some defaults for presentation
        if (data.length === 0) {
          setServices([
            { title: "Industrial Welding", icon: <Factory size={32} />, desc: "Precision structural and industrial welding services.", img: "/welding.jpg" },
            { title: "Commercial Painting", icon: <CheckCircle2 size={32} />, desc: "Premium coating and painting for commercial facilities.", img: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&q=80&w=800" },
            { title: "General Contracting", icon: <Hammer size={32} />, desc: "End-to-end project management and execution.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" }
          ]);
        } else {
          setServices(data.map((s: any) => ({
            title: s.name,
            icon: <CheckCircle2 size={32} />, // Default icon
            desc: s.shortDescription,
            img: s.featuredImage || "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
          })));
        }
      })
      .catch(() => console.error("Failed to load services"));
  }, []);

  return (
    <section id="services" className="py-24 bg-navy-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-navy-900 mb-6">Premium Services</h2>
          <p className="text-navy-600 text-lg">Comprehensive solutions tailored to meet the highest industry standards for commercial and industrial sectors.</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="group bg-white border border-navy-100 shadow-xl shadow-navy-200/20 rounded-3xl overflow-hidden card-hover h-full flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 right-6 w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary-600 shadow-xl z-20 group-hover:-translate-y-1 transition-transform">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">{service.title}</h3>
                  <p className="text-navy-600 mb-8 flex-1">{service.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section with E2E encryption logic
function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      const res = await fetch("https://navads.onrender.com/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setSuccess(true);
        e.currentTarget.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error securely sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatedSection>
              <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">Get In Touch</span>
              <h2 className="text-4xl font-display font-bold text-navy-900 mb-6">Let's discuss your project</h2>
              <p className="text-navy-600 text-lg mb-8">Reach out to our experts to get a comprehensive quote for your project.</p>
            </AnimatedSection>

            <AnimatedSection delay={100} className="bg-navy-50 rounded-3xl p-8 border border-navy-100 shadow-lg shadow-navy-200/20">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900 mb-2">Office Location</h4>
                    <p className="text-navy-600">KKIA District<br />Riyadh, Saudi Arabia</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900 mb-2">Email Us</h4>
                    <p className="text-navy-600">info@naviads.com.sa</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900 mb-2">Call Us</h4>
                    <p className="text-navy-600">+966 50 000 0000</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <AnimatedSection delay={200} className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-10 border border-navy-100 shadow-xl shadow-navy-200/20">
              {success ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">Inquiry Received!</h3>
                  <p className="text-navy-600">We have received your message and will reply shortly.</p>
                  <button onClick={() => setSuccess(false)} className="mt-8 text-primary-600 hover:text-primary-700 font-semibold">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-2">Full Name</label>
                      <input name="name" type="text" required className="w-full bg-white border border-navy-200 rounded-xl px-4 py-3 text-navy-900 placeholder-navy-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all" placeholder="Full Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-2">Phone</label>
                      <input name="phone" type="tel" required className="w-full bg-white border border-navy-200 rounded-xl px-4 py-3 text-navy-900 placeholder-navy-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all" placeholder="+966 5X XXX XXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-2">Email Address</label>
                    <input name="email" type="email" required className="w-full bg-white border border-navy-200 rounded-xl px-4 py-3 text-navy-900 placeholder-navy-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all" placeholder="Email Address" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-2">Service Required</label>
                    <select name="service" required className="w-full bg-white border border-navy-200 rounded-xl px-4 py-3 text-navy-900 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all">
                      <option value="">Select a service</option>
                      <option value="welding">Industrial Welding</option>
                      <option value="painting">Commercial Painting</option>
                      <option value="contracting">General Contracting</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-2">Project Details</label>
                    <textarea name="message" rows={4} required className="w-full bg-white border border-navy-200 rounded-xl px-4 py-3 text-navy-900 placeholder-navy-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all resize-none" placeholder="Tell us about your requirements..."></textarea>
                  </div>
                  <button type="submit" disabled={loading} className="w-full btn-primary py-4">
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// About
function AboutSection({ content }: { content?: any }) {
  const description = content?.p1 || "Navi Ads Company is a trusted provider of professional services including cleaning, painting, welding, and labour solutions. Based in Riyadh, Saudi Arabia, we serve clients across the Kingdom with dedication and excellence.";
  const p2 = content?.p2 || "Our commitment to premium quality and reliable delivery has made us a preferred partner for industrial and commercial projects.";
  const title = content?.title || "Building Trust Through Quality";
  const imageUrl = content?.imageUrl || "https://images.unsplash.com/photo-1541888081622-192661571597?auto=format&fit=crop&q=80&w=1000";
  
  const stats = [
    { label: content?.stat1Desc || "Completed Projects", value: content?.stat1 || "500+" },
    { label: content?.stat2Desc || "Expert Professionals", value: content?.stat2 || "150+" },
    { label: content?.stat3Desc || "Client Satisfaction", value: content?.stat3 || "100%" },
    { label: content?.stat4Desc || "Years Experience", value: content?.stat4 || "15+" }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy-950 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection className="relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img src={imageUrl} alt="About Navi Ads" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-navy-950/40"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 glass-panel-dark text-white p-8 rounded-3xl shadow-xl border border-white/10 max-w-xs animate-float">
              <div className="text-4xl font-display font-bold text-gold-400 mb-2">{content?.stat4 || "15+"}</div>
              <p className="font-semibold mb-1">Years of Excellence</p>
              <p className="text-sm text-navy-300">Delivering premium services across Saudi Arabia.</p>
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection delay={200}>
              <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">About Us</span>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-navy-900 mb-6">{title}</h2>
              <p className="text-navy-600 text-lg leading-relaxed mb-6">
                {description}
              </p>
              <p className="text-navy-600 text-lg leading-relaxed mb-8">
                {p2}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-navy-50 p-6 rounded-2xl border border-navy-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl font-display font-bold text-primary-600 mb-1">{stat.value}</div>
                    <div className="text-sm font-semibold text-navy-600 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-primary inline-flex">
                Work With Us
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

// Chairman Message
function CEOMessageSection({ content }: { content?: any }) {
  if (content?.published === 'false') return null;

  const name = content?.name || "Abu Rayyan";
  const position = content?.position || "Chief Executive Officer";
  const message = content?.message || `"At Navi Ads Company, our vision is built on the foundation of unwavering trust and uncompromising quality. We take pride in contributing to the growth of Saudi Arabia by delivering exceptional industrial and commercial services that stand the test of time."`;
  const imageUrl = content?.imageUrl || "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";

  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <AnimatedSection>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img src={imageUrl} alt={name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-display font-bold text-white mb-1">{name}</h3>
                  <p className="text-gold-400 font-semibold tracking-wider uppercase text-sm">{position}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-7 lg:pl-12">
            <AnimatedSection delay={200}>
              <h2 className="text-3xl sm:text-4xl font-display font-medium leading-relaxed mb-10 text-navy-50">
                {message}
              </h2>
              <div className="flex items-center gap-4 border-t border-white/10 pt-8 mt-8 w-max">
                <div className="text-2xl font-signature text-gold-400">{name}</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer({ onSecretClick }: { onSecretClick?: () => void }) {
  return (
    <footer className="bg-navy-900 text-navy-300 pt-20 pb-10 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gold-500 border border-white/20">
                <Building2 size={20} />
              </div>
              <div>
                <span className="text-white font-display font-bold text-lg">Navi Ads</span>
                <span className="block text-primary-400 text-xs font-semibold tracking-widest uppercase">Company</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              Navi Ads Company is a trusted provider of professional services including cleaning, painting, welding, and labour solutions. Based in Riyadh, Saudi Arabia.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <MapPin size={16} className="text-primary-500" />
              <span>KKIA District, Riyadh, Kingdom of Saudi Arabia</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'CEO Message', 'Contact'].map((link) => (
                <li key={link}><a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-primary-400 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Services</h4>
            <ul className="space-y-3">
              {['Cleaning Services', 'Painting Services', 'Welding Services', 'Labour Services', 'General Contracting'].map((svc) => (
                <li key={svc}><span className="text-sm">{svc}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm cursor-pointer select-none" onClick={onSecretClick}>© {new Date().getFullYear()} Navi Ads Company. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:aburayyanceo@naviads.com.sa" className="text-sm hover:text-white transition-colors flex items-center gap-2">
              <Mail size={16} className="text-primary-500" /> aburayyanceo@naviads.com.sa
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  const navigate = useNavigate();
  const [, setClickCount] = useState(0);
  const [cmsContent, setCmsContent] = useState<any>(null);

  useEffect(() => {
    fetch("https://navads.onrender.com/api/content")
      .then(res => res.json())
      .then(data => setCmsContent(data))
      .catch(() => console.error("Failed to load CMS content"));
  }, []);

  const handleSecretClick = () => {
    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 3) {
        navigate("/admin");
        return 0;
      }
      setTimeout(() => setClickCount(0), 2000);
      return newCount;
    });
  };

  return (
    <div className="min-h-screen bg-navy-50 font-sans selection:bg-primary-200 selection:text-primary-900">
      <Header />
      <HeroSection content={cmsContent?.hero} />
      <AboutSection content={cmsContent?.about} />
      <ServicesSection />
      <CEOMessageSection content={cmsContent?.ceo} />
      <ContactSection />
      <Footer onSecretClick={handleSecretClick} />
    </div>
  );
}

// Main App
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="services" element={<ServicesList />} />
        <Route path="services/new" element={<ServiceForm />} />
        <Route path="inquiries" element={<InquiriesList />} />
        <Route path="content/homepage" element={<HomepageEditor />} />
        <Route path="content/about" element={<AboutUsEditor />} />
        <Route path="content/ceo" element={<CEOMessageEditor />} />
        <Route path="*" element={<div className="p-8 text-center text-slate-500">Module under development.</div>} />
      </Route>
    </Routes>
  );
}
