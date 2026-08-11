import { siteContent } from "./siteContent";
import { Icon } from "../components/icons/Icons";

export const servicesList = [
  {
    id: siteContent.services.skyCleaning.id,
    title: siteContent.services.skyCleaning.title,
    desc: siteContent.services.skyCleaning.shortDesc,
    fullDesc: siteContent.services.skyCleaning.fullDesc,
    icon: Icon.Spray,
    color: "from-sky-500 to-cyan-500",
    img: siteContent.services.skyCleaning.image,
    showImage: siteContent.services.skyCleaning.showImage,
    subcategories: siteContent.services.skyCleaning.subcategories,
  },
  {
    id: siteContent.services.manpower.id,
    title: siteContent.services.manpower.title,
    desc: siteContent.services.manpower.shortDesc,
    fullDesc: siteContent.services.manpower.fullDesc,
    icon: Icon.Labour,
    color: "from-emerald-500 to-teal-600",
    img: siteContent.services.manpower.image,
    showImage: siteContent.services.manpower.showImage,
    subcategories: siteContent.services.manpower.subcategories,
  },
];

export const stats = [
  { n: "10+", label: "Years of Experience" },
  { n: "500+", label: "Projects Delivered" },
  { n: "200+", label: "Skilled Workers" },
  { n: "98%", label: "Client Satisfaction" },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/ceo-message", label: "CEO Message" },
  { href: "/contact", label: "Contact" },
];
