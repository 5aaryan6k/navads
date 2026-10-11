import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pagesSEO, COMPANY_INFO } from "../data/seoData";

export function SEOHead() {
  const location = useLocation();
  const pathname = location.pathname;

  // Normalize path (strip trailing slash if not root)
  const normalizedPath = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const seo = pagesSEO[normalizedPath] || pagesSEO["/"];

  useEffect(() => {
    // 1. Update Document Title
    document.title = seo.title;

    // 2. Update HTML lang & dir
    const isArabic = seo.lang === "ar" || normalizedPath.startsWith("/ar");
    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";

    // Helper to update or create meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to update or create link tag
    const setLinkTag = (rel: string, href: string, hreflang?: string) => {
      const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
      let element = document.querySelector(selector) as HTMLLinkElement;
      if (!element) {
        element = document.createElement("link");
        element.rel = rel;
        if (hreflang) element.hreflang = hreflang;
        document.head.appendChild(element);
      }
      element.href = href;
    };

    // Standard Meta Tags
    setMetaTag("description", seo.description);
    setMetaTag("keywords", seo.keywords);
    setMetaTag("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // Canonical & Favicon Links
    setLinkTag("canonical", seo.canonical);
    setLinkTag("icon", "/favicon.svg");

    // Hreflang alternates
    const englishPath = normalizedPath.startsWith("/ar")
      ? (normalizedPath.replace(/^\/ar/, "") || "/")
      : normalizedPath;
    const arabicPath = normalizedPath.startsWith("/ar")
      ? normalizedPath
      : (normalizedPath === "/" ? "/ar" : `/ar${normalizedPath}`);

    setLinkTag("alternate", `${COMPANY_INFO.canonicalHost}${englishPath === "/" ? "/" : englishPath}`, "en-SA");
    setLinkTag("alternate", `${COMPANY_INFO.canonicalHost}${arabicPath}`, "ar-SA");
    setLinkTag("alternate", `${COMPANY_INFO.canonicalHost}${englishPath === "/" ? "/" : englishPath}`, "x-default");

    // Open Graph
    setMetaTag("og:title", seo.title, true);
    setMetaTag("og:description", seo.description, true);
    setMetaTag("og:url", seo.canonical, true);
    setMetaTag("og:locale", isArabic ? "ar_SA" : "en_SA", true);
    setMetaTag("og:locale:alternate", isArabic ? "en_SA" : "ar_SA", true);
    setMetaTag("og:type", "website", true);
    setMetaTag("og:site_name", isArabic ? COMPANY_INFO.nameAr : COMPANY_INFO.nameEn, true);

    // Twitter
    setMetaTag("twitter:title", seo.title);
    setMetaTag("twitter:description", seo.description);

    // JSON-LD Dynamic Schema
    const scriptId = "dynamic-seo-schema";
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;
    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.id = scriptId;
      scriptElement.type = "application/ld+json";
      document.head.appendChild(scriptElement);
    }

    const schemaGraph: any[] = [];

    // BreadcrumbList Schema
    if (seo.breadcrumbs && seo.breadcrumbs.length > 0) {
      schemaGraph.push({
        "@type": "BreadcrumbList",
        "itemListElement": seo.breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      });
    }

    // Service Schema for service pages
    if (normalizedPath.includes("/services/") || normalizedPath.includes("sky-cleaning")) {
      schemaGraph.push({
        "@type": "Service",
        "name": seo.h1,
        "description": seo.description,
        "brand": {
          "@type": "Brand",
          "name": "Sky Cleaning",
          "alternateName": ["Sky Cleaning Services", "Sky Cleaning Riyadh", "SkyCleaning", "سكاي كلينينج", "سكاي كلينينج الرياض"]
        },
        "provider": {
          "@type": "LocalBusiness",
          "name": "Navi Ads (Sky Cleaning Riyadh)",
          "alternateName": ["Sky Cleaning", "Sky Cleaning Riyadh", "شركة نافيآدز"],
          "telephone": COMPANY_INFO.phone,
          "url": COMPANY_INFO.canonicalHost
        },
        "areaServed": {
          "@type": "City",
          "name": "Riyadh"
        },
        "url": seo.canonical
      });
    }

    // FAQPage Schema if FAQs exist
    if (seo.faqs && seo.faqs.length > 0) {
      schemaGraph.push({
        "@type": "FAQPage",
        "mainEntity": seo.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      });
    }

    if (schemaGraph.length > 0) {
      scriptElement.text = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": schemaGraph
      });
    } else {
      scriptElement.text = "";
    }

    // Scroll to top on navigation
    window.scrollTo(0, 0);

  }, [normalizedPath, seo]);

  return null;
}
