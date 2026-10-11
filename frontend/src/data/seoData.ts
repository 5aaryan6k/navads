export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface PageSEO {
  path: string;
  lang: 'en' | 'ar';
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  h1: string;
  subtitle: string;
  serviceCategory?: string;
  serviceFeatures?: string[];
  faqs?: FAQItem[];
  breadcrumbs?: BreadcrumbItem[];
}

export const COMPANY_INFO = {
  nameEn: "Navi Ads Company",
  nameAr: "شركة نافيآدز",
  brandCleaningEn: "Sky Cleaning Services",
  brandCleaningAr: "خدمات سكاي للتنظيف",
  phone: "+966537799389",
  phoneFormatted: "+966 53 779 9389",
  whatsappUrl: "https://wa.me/966537799389",
  telUrl: "tel:+966537799389",
  email: "info@naviads.com.sa",
  crNumber: "7051048754",
  addressEn: "King Khalid International Airport District, Riyadh, Kingdom of Saudi Arabia",
  addressAr: "حي مطار الملك خالد الدولي، الرياض، المملكة العربية السعودية",
  cityEn: "Riyadh",
  cityAr: "الرياض",
  countryEn: "Saudi Arabia",
  countryAr: "المملكة العربية السعودية",
  canonicalHost: "https://www.naviads.com.sa",
  workingHoursEn: "Sun – Thu: 8:00 AM – 6:00 PM",
  workingHoursAr: "الأحد – الخميس: 8:00 صباحاً – 6:00 مساءً",
  officeMapEmbedUrl: ""
};

export const pagesSEO: Record<string, PageSEO> = {
  // English Homepage
  "/": {
    path: "/",
    lang: "en",
    title: "Sky Cleaning Riyadh | Navi Ads Professional Cleaning Services",
    description: "Sky Cleaning Riyadh by Navi Ads (شركة نافيآدز): Premier commercial, office, residential, building & facade cleaning in Riyadh. CR: 7051048754. Call +966537799389.",
    keywords: "sky cleaning, sky cleaning riyadh, skycleaning riyadh, sky cleaning services riyadh, cleaning services Saudi Arabia, manpower supply Saudi Arabia, building cleaning Riyadh, office cleaning Riyadh, deep cleaning Riyadh",
    canonical: "https://www.naviads.com.sa/",
    h1: "Sky Cleaning Services in Riyadh | Navi Ads Company",
    subtitle: "Riyadh's premier provider of professional Sky Cleaning solutions, specialized building & facade maintenance, and dependable workforce supply.",
    breadcrumbs: [{ name: "Home", url: "https://www.naviads.com.sa/" }]
  },

  // Arabic Homepage
  "/ar": {
    path: "/ar",
    lang: "ar",
    title: "سكاي كلينينج الرياض | شركة نافيآدز لخدمات التنظيف وتوريد العمالة",
    description: "سكاي كلينينج الرياض من شركة نافيآدز: أفضل خدمات تنظيف المباني، المكاتب، المنازل، والواجهات وتوريد الكوادر والعمالة بالرياض. س.ت: 7051048754. هاتف: 0537799389.",
    keywords: "سكاي كلينينج الرياض, سكاي كلينينج, تنظيف سكاي الرياض, شركة سكاي كلينينج بالرياض, شركة تنظيف بالرياض, توريد عمالة بالرياض, تنظيف مباني بالرياض, تنظيف واجهات الرياض",
    canonical: "https://www.naviads.com.sa/ar",
    h1: "خدمات سكاي كلينينج في الرياض | شركة نافيآدز",
    subtitle: "الخيار الأول في الرياض لخدمات تنظيف سكاي الشاملة للمباني والمرافق وإمداد المنشآت بالكوادر والعمالة النظامية الموثوقة.",
    breadcrumbs: [{ name: "الرئيسية", url: "https://www.naviads.com.sa/ar" }]
  },

  // About EN
  "/about": {
    path: "/about",
    lang: "en",
    title: "About Navi Ads | Sky Cleaning & Manpower Solutions Saudi Arabia",
    description: "Learn about Navi Ads Company, our mission, vision, and dedication to excellence in commercial cleaning and manpower supply in Riyadh, Saudi Arabia.",
    keywords: "about navi ads, cleaning company Riyadh, manpower provider Saudi Arabia, commercial cleaning contractor Riyadh",
    canonical: "https://www.naviads.com.sa/about",
    h1: "About Navi Ads Company",
    subtitle: "Professional Services. Reliable People. Quality Results across the Kingdom of Saudi Arabia.",
    breadcrumbs: [
      { name: "Home", url: "https://www.naviads.com.sa/" },
      { name: "About Us", url: "https://www.naviads.com.sa/about" }
    ]
  },

  // About AR
  "/ar/about": {
    path: "/ar/about",
    lang: "ar",
    title: "من نحن | شركة نافيآدز للخدمات والتنظيف وتوريد العمالة",
    description: "تعرف على شركة نافيآدز في الرياض، رؤيتنا ورسالتنا في تقديم أرقى معايير النظافة الشاملة وتوفير الكوادر المهنية والعمالية المعتمدة بالسعودية.",
    keywords: "من نحن نافيآدز, شركة تنظيف معتمدة الرياض, شركة توريد عمالة السعودية, خدمات المنشآت بالرياض",
    canonical: "https://www.naviads.com.sa/ar/about",
    h1: "عن شركة نافيآدز",
    subtitle: "خدمات احترافية، كوادر موثوقة، ونتائج عالية الجودة تدعم مسيرة التطور في المملكة العربية السعودية.",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://www.naviads.com.sa/ar" },
      { name: "من نحن", url: "https://www.naviads.com.sa/ar/about" }
    ]
  },

  // Contact EN
  "/contact": {
    path: "/contact",
    lang: "en",
    title: "Contact Navi Ads | Request Cleaning or Manpower Quote in Riyadh",
    description: "Get in touch with Navi Ads in Riyadh. Call or WhatsApp +966537799389 for cleaning services (Sky Cleaning) and manpower solutions. CR: 7051048754.",
    keywords: "contact navi ads, cleaning quote Riyadh, manpower request Saudi Arabia, cleaning company phone Riyadh",
    canonical: "https://www.naviads.com.sa/contact",
    h1: "Contact Navi Ads in Riyadh",
    subtitle: "Request a custom quotation for cleaning services or workforce supply. Our team is ready to assist you.",
    breadcrumbs: [
      { name: "Home", url: "https://www.naviads.com.sa/" },
      { name: "Contact", url: "https://www.naviads.com.sa/contact" }
    ]
  },

  // Contact AR
  "/ar/contact": {
    path: "/ar/contact",
    lang: "ar",
    title: "اتصل بنا | شركة نافيآدز لخدمات النظافة والعمالة بالرياض",
    description: "تواصل مع شركة نافيآدز في الرياض للحصول على عروض أسعار خدمات التنظيف وتوريد العمالة. اتصل أو واتساب: 0537799389. س.ت: 7051048754.",
    keywords: "اتصال نافيآدز, طلب عرض سعر تنظيف الرياض, طلب عمالة بالسعودية, رقم شركة تنظيف بالرياض",
    canonical: "https://www.naviads.com.sa/ar/contact",
    h1: "تواصل مع شركة نافيآدز بالرياض",
    subtitle: "نسعد بخدمتكم وتوفير عروض أسعار متكاملة لخدمات النظافة وإدارة المرافق وتوريد الكوادر المؤهلة.",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://www.naviads.com.sa/ar" },
      { name: "اتصل بنا", url: "https://www.naviads.com.sa/ar/contact" }
    ]
  },

  // Cleaning Overview EN
  "/services/cleaning": {
    path: "/services/cleaning",
    lang: "en",
    title: "Sky Cleaning Services in Saudi Arabia | Navi Ads",
    description: "Comprehensive Sky Cleaning Services by Navi Ads in Riyadh: building cleaning, office cleaning, residential cleaning, deep cleaning, and post-construction.",
    keywords: "sky cleaning, cleaning services Saudi Arabia, building cleaning Riyadh, commercial cleaning Saudi Arabia, facility cleaning",
    canonical: "https://www.naviads.com.sa/services/cleaning",
    h1: "Sky Cleaning Services in Saudi Arabia",
    subtitle: "Specialized commercial, residential, and facility cleaning solutions delivered by trained personnel.",
    breadcrumbs: [
      { name: "Home", url: "https://www.naviads.com.sa/" },
      { name: "Services", url: "https://www.naviads.com.sa/services" },
      { name: "Sky Cleaning Services", url: "https://www.naviads.com.sa/services/cleaning" }
    ],
    faqs: [
      {
        question: "What does Navi Ads Sky Cleaning Services include?",
        answer: "Sky Cleaning Services covers comprehensive building cleaning, office and workplace maintenance, residential deep cleaning, move-in/move-out cleaning, post-construction debris cleanup, and exterior glass/facade cleaning."
      },
      {
        question: "Which areas in Saudi Arabia do you serve?",
        answer: "We currently provide full cleaning operations across all sectors and districts of Riyadh, Kingdom of Saudi Arabia."
      },
      {
        question: "How do I request a cleaning quotation?",
        answer: "You can request an immediate quotation by calling or messaging our operations team on WhatsApp at +966537799389 or submitting the online quote form on our contact page."
      }
    ]
  },

  // Cleaning Overview AR
  "/ar/services/cleaning": {
    path: "/ar/services/cleaning",
    lang: "ar",
    title: "خدمات تنظيف سكاي | شركة نافيآدز في المملكة العربية السعودية",
    description: "خدمات تنظيف سكاي المتكاملة من شركة نافيآدز بالرياض: تنظيف المباني والمكاتب، النظافة المنزلية، التنظيف العميق، والتنظيف بعد التشطيب والإنشاءات.",
    keywords: "خدمات تنظيف سكاي, شركة تنظيف بالرياض, تنظيف مباني السعودية, نظافة مكاتب وشركات بالرياض, نظافة منشآت",
    canonical: "https://www.naviads.com.sa/ar/services/cleaning",
    h1: "خدمات تنظيف سكاي في المملكة العربية السعودية",
    subtitle: "حلول تنظيف متقدمة وموثوقة للمنشآت السكنية والتجارية والمباني الحكومية والخاصة بالرياض.",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://www.naviads.com.sa/ar" },
      { name: "الخدمات", url: "https://www.naviads.com.sa/ar/services" },
      { name: "خدمات تنظيف سكاي", url: "https://www.naviads.com.sa/ar/services/cleaning" }
    ],
    faqs: [
      {
        question: "ما هي خدمات تنظيف سكاي التي تقدمها شركة نافيآدز؟",
        answer: "تشمل خدمات سكاي تنظيف المباني العامة، تنظيف المكاتب والشركات، النظافة المنزلية الشاملة، التنظيف العميق، التنظيف بعد التشطيب والإنشاءات، وتنظيف الواجهات الزجاجية."
      },
      {
        question: "ما هي المدن التي تغطيها خدماتكم في السعودية؟",
        answer: "نقدم خدماتنا بشكل متكامل في كافة أحياء ومناطق مدينة الرياض، المملكة العربية السعودية."
      },
      {
        question: "كيف يمكنني طلب خدمة التنظيف والحصول على عرض سعر؟",
        answer: "يمكنك التواصل معنا مباشرة عبر الهاتف أو الواتساب على الرقم 0537799389 أو عبر ملء نموذج التواصل على الموقع الرسمي."
      }
    ]
  },

  // Building Cleaning EN
  "/services/cleaning/building-cleaning": {
    path: "/services/cleaning/building-cleaning",
    lang: "en",
    title: "Building Cleaning Services in Riyadh | Navi Ads Sky Cleaning",
    description: "Expert building cleaning in Riyadh: lobbies, corridors, elevators, staircases, floors, windows, high-level areas, and waste management.",
    keywords: "building cleaning, building cleaning Riyadh, common area cleaning, commercial building maintenance, high level cleaning",
    canonical: "https://www.naviads.com.sa/services/cleaning/building-cleaning",
    h1: "Building Cleaning Services in Riyadh",
    subtitle: "Complete common-area maintenance, corridor sanitation, elevator cleaning, and waste management for residential and commercial complexes.",
    breadcrumbs: [
      { name: "Home", url: "https://www.naviads.com.sa/" },
      { name: "Cleaning Services", url: "https://www.naviads.com.sa/services/cleaning" },
      { name: "Building Cleaning", url: "https://www.naviads.com.sa/services/cleaning/building-cleaning" }
    ],
    faqs: [
      {
        question: "What specific areas are covered in building cleaning?",
        answer: "Our building cleaning includes entrance lobbies, common corridors, stairwells, passenger and service elevators, shared floors, interior windows, high-level dust removal, and comprehensive waste collection."
      },
      {
        question: "Can we schedule recurring daily or weekly building maintenance?",
        answer: "Yes, we provide flexible contracts including daily housekeeping schedules, weekly deep sanitation visits, and continuous facility upkeep."
      }
    ]
  },

  // Building Cleaning AR
  "/ar/services/cleaning/building-cleaning": {
    path: "/ar/services/cleaning/building-cleaning",
    lang: "ar",
    title: "خدمات تنظيف المباني في الرياض | شركة نافيآدز سكاي كلينينج",
    description: "خدمات تنظيف المباني والأبراج في الرياض: المداخل والممرات، المصاعد، السلالم، الأرضيات، النوافذ، وإدارة جمع النفايات بعقود مرنة.",
    keywords: "تنظيف مباني, تنظيف مباني بالرياض, نظافة المداخل والممرات, نظافة مصاعد وسلالم, صيانة نظافة الأبراج بالرياض",
    canonical: "https://www.naviads.com.sa/ar/services/cleaning/building-cleaning",
    h1: "خدمات تنظيف المباني والمجمعات في الرياض",
    subtitle: "حلول احترافية لنظافة الأبراج والمجمعات السكنية والتجارية، تشمل المداخل والمصاعد والممرات والسلالم وإدارة النفايات.",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://www.naviads.com.sa/ar" },
      { name: "خدمات التنظيف", url: "https://www.naviads.com.sa/ar/services/cleaning" },
      { name: "تنظيف المباني", url: "https://www.naviads.com.sa/ar/services/cleaning/building-cleaning" }
    ],
    faqs: [
      {
        question: "ماذا يشمل برنامج تنظيف المباني من نافيآدز؟",
        answer: "يشمل تنظيف المداخل والبهو الرئيسي، الممرات، المصاعد والسلالم، غسيل وجلي الأرضيات، تنظيف الزجاج الداخلي، والمستويات المرتفعة مع جمع النفايات بشكل دوري."
      },
      {
        question: "هل تقدمون عقود صيانة دورية للمباني؟",
        answer: "نعم، نقدم عقود نظافة يومية وأسبوعية وشهرية مخصصة للعمائر والمجمعات السكنية والتجارية بالرياض."
      }
    ]
  },

  // Office Cleaning EN
  "/services/cleaning/office-cleaning": {
    path: "/services/cleaning/office-cleaning",
    lang: "en",
    title: "Office Cleaning Services in Riyadh | Navi Ads Commercial Cleaning",
    description: "Professional office cleaning services in Riyadh. Maintain pristine workstations, meeting rooms, pantries, washrooms, and receptions.",
    keywords: "office cleaning, office cleaning Riyadh, corporate housekeeping, commercial office cleaners, workplace sanitation Saudi Arabia",
    canonical: "https://www.naviads.com.sa/services/cleaning/office-cleaning",
    h1: "Professional Office Cleaning Services in Riyadh",
    subtitle: "Creating hygienic, productive, and welcoming corporate environments for companies, executive suites, and corporate headquarters.",
    breadcrumbs: [
      { name: "Home", url: "https://www.naviads.com.sa/" },
      { name: "Cleaning Services", url: "https://www.naviads.com.sa/services/cleaning" },
      { name: "Office Cleaning", url: "https://www.naviads.com.sa/services/cleaning/office-cleaning" }
    ],
    faqs: [
      {
        question: "Can office cleaning be performed outside working hours?",
        answer: "Yes, our cleaning crews can operate after business hours, early morning, or weekends to prevent any disruption to your company's daily operations."
      },
      {
        question: "Do you supply cleaning consumables and sanitization products?",
        answer: "Yes, we can provide high-grade eco-friendly cleaning detergents, microfiber sanitation supplies, and washroom essentials upon request."
      }
    ]
  },

  // Office Cleaning AR
  "/ar/services/cleaning/office-cleaning": {
    path: "/ar/services/cleaning/office-cleaning",
    lang: "ar",
    title: "خدمات تنظيف المكاتب والشركات في الرياض | شركة نافيآدز",
    description: "خدمات تنظيف المكاتب والشركات بالرياض. تعقيم محطات العمل، قاعات الاجتماعات، الاستقبال، البوفيهات، ودورات المياه بأعلى معايير النظافة.",
    keywords: "تنظيف مكاتب, تنظيف مكاتب بالرياض, نظافة شركات بالرياض, تعقيم مكاتب, عمال نظافة مكاتب",
    canonical: "https://www.naviads.com.sa/ar/services/cleaning/office-cleaning",
    h1: "خدمات تنظيف المكاتب والشركات في الرياض",
    subtitle: "بيئة عمل نقية وصحية تعزز إنتاجية فريقك وتمنح زوارك انطباعاً استثنائياً يدوم.",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://www.naviads.com.sa/ar" },
      { name: "خدمات التنظيف", url: "https://www.naviads.com.sa/ar/services/cleaning" },
      { name: "تنظيف المكاتب", url: "https://www.naviads.com.sa/ar/services/cleaning/office-cleaning" }
    ],
    faqs: [
      {
        question: "هل يمكن جدولة تنظيف المكاتب خارج ساعات العمل الرسمية؟",
        answer: "بالتأكيد، توفر نافيآدز مرونة كاملة لتنفيذ أعمال النظافة في المساء بعد انتهاء الدوام أو في عطلات نهاية الأسبوع لضمان عدم إزعاج الموظفين."
      },
      {
        question: "هل توفرون أدوات ومواد التعقيم والتنظيف المعتمدة؟",
        answer: "نعم، نستخدم أجود أنواع المنظفات والمعقمات المطابقة للمواصفات الصحية المعتمدة في المملكة."
      }
    ]
  },

  // Home Cleaning EN
  "/services/cleaning/home-cleaning": {
    path: "/services/cleaning/home-cleaning",
    lang: "en",
    title: "Home Cleaning Services in Riyadh | Navi Ads Villa & Apartment Care",
    description: "Reliable home cleaning services in Riyadh for villas, apartments, and residences. Move-in/move-out cleaning, living rooms, bedrooms, and kitchens.",
    keywords: "home cleaning, residential cleaning Riyadh, villa cleaning Riyadh, apartment cleaning, move in cleaning Riyadh",
    canonical: "https://www.naviads.com.sa/services/cleaning/home-cleaning",
    h1: "Home Cleaning Services in Riyadh",
    subtitle: "Thorough, reliable, and discreet residential cleaning services for villas, townhouses, and luxury apartments.",
    breadcrumbs: [
      { name: "Home", url: "https://www.naviads.com.sa/" },
      { name: "Cleaning Services", url: "https://www.naviads.com.sa/services/cleaning" },
      { name: "Home Cleaning", url: "https://www.naviads.com.sa/services/cleaning/home-cleaning" }
    ],
    faqs: [
      {
        question: "Do you offer move-in and move-out residential cleaning?",
        answer: "Yes, our specialized move-in/move-out cleaning sanitizes every corner of your property including inside cabinets, appliances, floors, tiles, and fixtures."
      }
    ]
  },

  // Home Cleaning AR
  "/ar/services/cleaning/home-cleaning": {
    path: "/ar/services/cleaning/home-cleaning",
    lang: "ar",
    title: "خدمات تنظيف المنازل والفلل في الرياض | شركة نافيآدز",
    description: "أفضل خدمات تنظيف المنازل والفلل والشقق في الرياض. تنظيف غرف المعيشة، المطابخ، الحمامات، وتنظيف قبل السكن وبعد الانتقال.",
    keywords: "تنظيف منازل, تنظيف منازل بالرياض, تنظيف فلل بالرياض, تنظيف شقق, تنظيف منازل قبل السكن",
    canonical: "https://www.naviads.com.sa/ar/services/cleaning/home-cleaning",
    h1: "خدمات تنظيف المنازل والفلل في الرياض",
    subtitle: "عناية متكاملة بمسكنك تضمن الراحة والأمان الصحي لك ولعائلتك بأيدي فرق مدربة وأمينة.",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://www.naviads.com.sa/ar" },
      { name: "خدمات التنظيف", url: "https://www.naviads.com.sa/ar/services/cleaning" },
      { name: "تنظيف المنازل", url: "https://www.naviads.com.sa/ar/services/cleaning/home-cleaning" }
    ],
    faqs: [
      {
        question: "هل يشمل تنظيف المنازل خدمة الانتقال من وإلى المنزل الجديد؟",
        answer: "نعم، نقدم خدمات تنظيف المنازل قبل الانتقال والتسليم تشمل غسيل الأرضيات، تنظيف المطابخ، تعقيم الحمامات، وتلميع النوافذ والأسطح."
      }
    ]
  },

  // Deep Cleaning EN
  "/services/cleaning/deep-cleaning": {
    path: "/services/cleaning/deep-cleaning",
    lang: "en",
    title: "Deep Cleaning Services in Riyadh | Navi Ads Intensive Sanitization",
    description: "Intensive deep cleaning in Riyadh for residential and commercial properties. Degreasing, grout scrubbing, hard-to-reach areas, and total sanitization.",
    keywords: "deep cleaning, deep cleaning Riyadh, intensive cleaning Saudi Arabia, sanitization services Riyadh, tile and grout deep cleaning",
    canonical: "https://www.naviads.com.sa/services/cleaning/deep-cleaning",
    h1: "Deep Cleaning Services in Riyadh",
    subtitle: "Comprehensive detail-oriented cleaning for properties requiring rigorous sanitization and restoration.",
    breadcrumbs: [
      { name: "Home", url: "https://www.naviads.com.sa/" },
      { name: "Cleaning Services", url: "https://www.naviads.com.sa/services/cleaning" },
      { name: "Deep Cleaning", url: "https://www.naviads.com.sa/services/cleaning/deep-cleaning" }
    ],
    faqs: [
      {
        question: "What is the difference between regular cleaning and deep cleaning?",
        answer: "Deep cleaning tackles embedded dirt, behind-appliance grime, baseboards, grout lines, high vents, and areas usually missed during standard surface maintenance."
      }
    ]
  },

  // Deep Cleaning AR
  "/ar/services/cleaning/deep-cleaning": {
    path: "/ar/services/cleaning/deep-cleaning",
    lang: "ar",
    title: "خدمات التنظيف العميق في الرياض | شركة نافيآدز",
    description: "خدمات التنظيف العميق والشامل في الرياض للمنازل والمنشآت. إزالة الدهون المستعصية، جلي الفواصل، تنظيف الزوايا الدقيقة، وتعقيم الأسطح بالكامل.",
    keywords: "تنظيف عميق, تنظيف عميق بالرياض, شركة تنظيف عميق, تعقيم منازل وفلل, جلي وتنظيف أرضيات الرياض",
    canonical: "https://www.naviads.com.sa/ar/services/cleaning/deep-cleaning",
    h1: "خدمات التنظيف العميق في الرياض",
    subtitle: "تنظيف دقيق وتفصيلي يزيل أصعب البقع والترسبات من الزوايا والمطابخ والأرضيات بكفاءة تامة.",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://www.naviads.com.sa/ar" },
      { name: "خدمات التنظيف", url: "https://www.naviads.com.sa/ar/services/cleaning" },
      { name: "التنظيف العميق", url: "https://www.naviads.com.sa/ar/services/cleaning/deep-cleaning" }
    ],
    faqs: [
      {
        question: "ما الفرق بين التنظيف الدوري والتنظيف العميق؟",
        answer: "التنظيف العميق يركز على التفاصيل المعقدة، مثل إزالة الدهون المتراكمة في المطابخ، جلي فواصل السيراميك، تعقيم فتحات التكييف والزوايا المخفية التي لا تصلها النظافة العادية."
      }
    ]
  },

  // Post-Construction Cleaning EN
  "/services/cleaning/post-construction-cleaning": {
    path: "/services/cleaning/post-construction-cleaning",
    lang: "en",
    title: "Post-Construction Cleaning in Riyadh | Navi Ads Site Cleanup",
    description: "Professional post-construction cleaning in Riyadh for new developments and renovations. Cement dust, paint splatters, debris removal, and glass polishing.",
    keywords: "post-construction cleaning, construction cleaning Riyadh, after builder cleaners, post renovation cleaning Saudi Arabia",
    canonical: "https://www.naviads.com.sa/services/cleaning/post-construction-cleaning",
    h1: "Post-Construction Cleaning in Riyadh",
    subtitle: "Transforming newly built and recently renovated spaces into immaculate, move-in ready properties.",
    breadcrumbs: [
      { name: "Home", url: "https://www.naviads.com.sa/" },
      { name: "Cleaning Services", url: "https://www.naviads.com.sa/services/cleaning" },
      { name: "Post-Construction Cleaning", url: "https://www.naviads.com.sa/services/cleaning/post-construction-cleaning" }
    ],
    faqs: [
      {
        question: "Can you handle post-construction paint and adhesive residue removal?",
        answer: "Yes, our crews use specialized non-abrasive chemical solvents and scraping tools to safely remove plaster, paint drips, cement residue, and sticker adhesives from glass, tiles, and fixtures."
      }
    ]
  },

  // Post-Construction Cleaning AR
  "/ar/services/cleaning/post-construction-cleaning": {
    path: "/ar/services/cleaning/post-construction-cleaning",
    lang: "ar",
    title: "تنظيف بعد البناء والتشطيب في الرياض | شركة نافيآدز",
    description: "تنظيف بعد البناء والتشطيب في الرياض للمباني والفلل والمشاريع الجديدة. إزالة بقايا الدهان والإسمنت والأتربة والجبس وتلميع الرخام والزجاج.",
    keywords: "تنظيف بعد البناء, تنظيف بعد التشطيب بالرياض, تنظيف مباني جديدة, إزالة بقايا دهان وإسمنت, شركة تنظيف فلل جديدة بالرياض",
    canonical: "https://www.naviads.com.sa/ar/services/cleaning/post-construction-cleaning",
    h1: "تنظيف بعد البناء والتشطيب في الرياض",
    subtitle: "تجهيز العقارات والمشاريع الجديدة بعد انتهاء أعمال المقاولات لتكون جاهزة تماماً للاستخدام والسكن الفوري.",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://www.naviads.com.sa/ar" },
      { name: "خدمات التنظيف", url: "https://www.naviads.com.sa/ar/services/cleaning" },
      { name: "تنظيف بعد البناء", url: "https://www.naviads.com.sa/ar/services/cleaning/post-construction-cleaning" }
    ],
    faqs: [
      {
        question: "كيف تتعاملون مع بقايا الدهان والإسمنت على الأرضيات والزجاج؟",
        answer: "نستخدم معدات احترافية ومواد متخصصة لإزالة بقايا البويات والإسمنت والجبس بعناية فائقة دون خدش الزجاج أو إتلاف أسطح الرخام والسيراميك."
      }
    ]
  },

  // Facade Cleaning EN
  "/services/cleaning/facade-cleaning": {
    path: "/services/cleaning/facade-cleaning",
    lang: "en",
    title: "High-Rise & Facade Cleaning in Riyadh | Sky Cleaning Rope Access",
    description: "Specialized high-rise building facade and exterior glass cleaning in Riyadh. IRATA-certified rope access teams and cradle operations for skyscrapers.",
    keywords: "facade cleaning Riyadh, high rise window cleaning, sky cleaning, rope access cleaning Saudi Arabia, glass facade washing Riyadh",
    canonical: "https://www.naviads.com.sa/services/cleaning/facade-cleaning",
    h1: "High-Rise & Facade Cleaning Services in Riyadh",
    subtitle: "Safety-certified exterior glass and architectural cladding cleaning for towers, commercial plazas, and high-rise developments.",
    breadcrumbs: [
      { name: "Home", url: "https://www.naviads.com.sa/" },
      { name: "Cleaning Services", url: "https://www.naviads.com.sa/services/cleaning" },
      { name: "Facade Cleaning", url: "https://www.naviads.com.sa/services/cleaning/facade-cleaning" }
    ],
    faqs: [
      {
        question: "Are your facade technicians certified for rope access?",
        answer: "Yes, our high-altitude technicians are trained in rope access and safety protocols to ensure compliance with strict Saudi safety standards."
      }
    ]
  },

  // Facade Cleaning AR
  "/ar/services/cleaning/facade-cleaning": {
    path: "/ar/services/cleaning/facade-cleaning",
    lang: "ar",
    title: "تنظيف واجهات المباني والأبراج في الرياض | سكاي كلينينج",
    description: "خدمات تنظيف واجهات الزجاج والكلادينج للأبراج والمباني الشاهقة في الرياض. فرق متخصصة بالوصول بالحبال والسقالات المعلقة بأعلى معايير السلامة.",
    keywords: "تنظيف واجهات زجاج بالرياض, تنظيف واجهات كلادينج, تنظيف أبراج الرياض, تنظيف واجهات بالحبال, سكاي كلينينج للواجهات",
    canonical: "https://www.naviads.com.sa/ar/services/cleaning/facade-cleaning",
    h1: "تنظيف واجهات المباني والأبراج بالرياض",
    subtitle: "خدمات تنظيف الواجهات الزجاجية والكلادينج للمباني المرتفعة والأبراج باستخدام الحبال المعلقة وأنظمة السلامة المعتمدة.",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://www.naviads.com.sa/ar" },
      { name: "خدمات التنظيف", url: "https://www.naviads.com.sa/ar/services/cleaning" },
      { name: "تنظيف الواجهات", url: "https://www.naviads.com.sa/ar/services/cleaning/facade-cleaning" }
    ],
    faqs: [
      {
        question: "هل يمتلك فنيو تنظيف الواجهات شهادات السلامة والعمل على الارتفاعات؟",
        answer: "نعم، جميع الفنيين مؤهلون ومدربون على تقنيات النزول بالحبال وأنظمة الأمان الصناعي المعتمدة لضمان أقصى درجات السلامة والجودة أثناء العمل."
      }
    ]
  },

  // Manpower Overview EN
  "/services/manpower": {
    path: "/services/manpower",
    lang: "en",
    title: "Manpower Supply Services in Saudi Arabia | Navi Ads Workforce",
    description: "Reliable manpower supply solutions across Riyadh and Saudi Arabia: general workers, cleaning staff, facility support, and skilled labor. CR: 7051048754.",
    keywords: "manpower supply Saudi Arabia, manpower Riyadh, cleaning staff supply, labor recruitment Saudi Arabia, facility support workers",
    canonical: "https://www.naviads.com.sa/services/manpower",
    h1: "Manpower Supply Services in Saudi Arabia",
    subtitle: "Connecting companies and facilities with dependable, compliant, and thoroughly trained manpower for operational success.",
    breadcrumbs: [
      { name: "Home", url: "https://www.naviads.com.sa/" },
      { name: "Services", url: "https://www.naviads.com.sa/services" },
      { name: "Manpower Services", url: "https://www.naviads.com.sa/services/manpower" }
    ],
    faqs: [
      {
        question: "What types of manpower does Navi Ads supply?",
        answer: "We supply general workers, dedicated janitorial and cleaning staff, facility assistants, helpers, and skilled/semi-skilled personnel for businesses and contractors."
      },
      {
        question: "Are your workers legally documented in Saudi Arabia?",
        answer: "Yes, all personnel comply with Saudi labor regulations and legal residency frameworks under commercial registration 7051048754."
      }
    ]
  },

  // Manpower Overview AR
  "/ar/services/manpower": {
    path: "/ar/services/manpower",
    lang: "ar",
    title: "توريد عمالة في السعودية | شركة نافيآدز للكوادر البشرية",
    description: "خدمات توريد العمالة في الرياض والمملكة: عمالة عادية، كوادر نظافة، عمالة تشغيل منشآت، وعمالة ماهرة ونصف ماهرة لمختلف القطاعات. س.ت: 7051048754.",
    keywords: "توريد عمالة, توريد عمالة بالسعودية, شركات توريد عمالة بالرياض, توريد عمال نظافة, توفير كوادر تشغيلية",
    canonical: "https://www.naviads.com.sa/ar/services/manpower",
    h1: "خدمات توريد العمالة في المملكة العربية السعودية",
    subtitle: "حلول قوى عاملة مرنة ونظامية تساند أعمالك بكفاءة والتزام تام بالأنظمة واللوائح المعتمدة في المملكة.",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://www.naviads.com.sa/ar" },
      { name: "الخدمات", url: "https://www.naviads.com.sa/ar/services" },
      { name: "توريد العمالة", url: "https://www.naviads.com.sa/ar/services/manpower" }
    ],
    faqs: [
      {
        question: "ما هي فئات العمالة التي توفرها شركة نافيآدز؟",
        answer: "نوفر عمالة عامة للتشغيل، عمال نظافة وضيافة، مساعدي منشآت ومستودعات، إضافة إلى عمالة فنية ماهرة ونصف ماهرة وفق احتياجات المشروع."
      },
      {
        question: "هل العمالة نظامية ومطابقة للاشتراطات الحكومية؟",
        answer: "نعم، كافة الكوادر نظامية ومستوفية لجميع متطلبات الإقامة وأنظمة العمل المعمول بها في وزارة الموارد البشرية بالمملكة بسجل تجاري رقم 7051048754."
      }
    ]
  },

  // General Workers EN
  "/services/manpower/general-workers": {
    path: "/services/manpower/general-workers",
    lang: "en",
    title: "General Workers Supply in Riyadh | Navi Ads Workforce Solutions",
    description: "Supply of dependable general workers in Riyadh: site support, loading/unloading assistance, material handling, and general facility labor.",
    keywords: "general workers, general labor supply Riyadh, warehouse workers, site support labor, loading unloading workers Saudi Arabia",
    canonical: "https://www.naviads.com.sa/services/manpower/general-workers",
    h1: "General Workers Supply in Riyadh",
    subtitle: "Dependable, physically capable workforce for daily operations, site logistics, and facility management.",
    breadcrumbs: [
      { name: "Home", url: "https://www.naviads.com.sa/" },
      { name: "Manpower Services", url: "https://www.naviads.com.sa/services/manpower" },
      { name: "General Workers", url: "https://www.naviads.com.sa/services/manpower/general-workers" }
    ]
  },

  // General Workers AR
  "/ar/services/manpower/general-workers": {
    path: "/ar/services/manpower/general-workers",
    lang: "ar",
    title: "توريد عمالة عامة في الرياض | شركة نافيآدز للقوى العاملة",
    description: "توريد عمالة عامة موثوقة في الرياض: دعم مواقع العمل، خدمات التحميل والتنزيل، مناولة المواد، ومساندة العمليات اليومية في المنشآت.",
    keywords: "توريد عمالة, عمالة عامة بالرياض, عمال تحميل وتنزيل, عمال مستودعات ومخازن, توريد عمال تشغيل",
    canonical: "https://www.naviads.com.sa/ar/services/manpower/general-workers",
    h1: "توريد عمالة عامة ومساندة في الرياض",
    subtitle: "توفير أيدٍ عاملة نشطة ومنضبطة لدعم العمليات التشغيلية، المستودعات، وتحميل ومناولة المواد في المشاريع المختلفة.",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://www.naviads.com.sa/ar" },
      { name: "توريد العمالة", url: "https://www.naviads.com.sa/ar/services/manpower" },
      { name: "عمالة عامة", url: "https://www.naviads.com.sa/ar/services/manpower/general-workers" }
    ]
  },

  // Cleaning Staff EN
  "/services/manpower/cleaning-staff": {
    path: "/services/manpower/cleaning-staff",
    lang: "en",
    title: "Cleaning Staff Supply in Riyadh | Navi Ads Janitorial Manpower",
    description: "Reliable cleaning staff supply in Riyadh: trained cleaners, janitors, office housekeepers, and building cleaning personnel for commercial and residential sites.",
    keywords: "cleaning staff supply, janitorial staff supply Riyadh, office cleaners supply, housekeepers Saudi Arabia, outsourced cleaning staff",
    canonical: "https://www.naviads.com.sa/services/manpower/cleaning-staff",
    h1: "Cleaning Staff Supply in Riyadh",
    subtitle: "Professional, vetted, and thoroughly trained janitorial personnel dedicated to your facility's ongoing cleanliness.",
    breadcrumbs: [
      { name: "Home", url: "https://www.naviads.com.sa/" },
      { name: "Manpower Services", url: "https://www.naviads.com.sa/services/manpower" },
      { name: "Cleaning Staff", url: "https://www.naviads.com.sa/services/manpower/cleaning-staff" }
    ]
  },

  // Cleaning Staff AR
  "/ar/services/manpower/cleaning-staff": {
    path: "/ar/services/manpower/cleaning-staff",
    lang: "ar",
    title: "توريد عمالة نظافة بالرياض | شركة نافيآدز لكوادر النظافة",
    description: "توريد عمالة نظافة محترفة بالرياض: عمال وعاملات نظافة للمكاتب والشركات والمباني والمجمعات والمستشفيات بعقود توريد شهرية وسنوية.",
    keywords: "توريد عمالة نظافة, عمال نظافة شركات بالرياض, تأجير عمال نظافة, كوادر نظافة وضيافة, شركة توريد عمال نظافة",
    canonical: "https://www.naviads.com.sa/ar/services/manpower/cleaning-staff",
    h1: "توريد عمالة نظافة للمنشآت والشركات في الرياض",
    subtitle: "كوادر نظافة مؤهلة ومدربة على أحدث أساليب النظافة المؤسسية لضمان بيئة نظيفة ومثالية لمقرات أعمالك.",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://www.naviads.com.sa/ar" },
      { name: "توريد العمالة", url: "https://www.naviads.com.sa/ar/services/manpower" },
      { name: "توريد عمالة نظافة", url: "https://www.naviads.com.sa/ar/services/manpower/cleaning-staff" }
    ]
  },

  // Facility Support EN
  "/services/manpower/facility-support": {
    path: "/services/manpower/facility-support",
    lang: "en",
    title: "Facility Support Staff in Riyadh | Navi Ads Operational Workforce",
    description: "Facility support personnel supply in Riyadh: facility assistants, helpers, office messengers, and operational attendants.",
    keywords: "facility support staff, facility assistants Riyadh, office support staff, operational helpers Saudi Arabia",
    canonical: "https://www.naviads.com.sa/services/manpower/facility-support",
    h1: "Facility Support Staff Supply in Riyadh",
    subtitle: "Dedicated assistants and helpers ensuring smooth day-to-day administrative and facility operations.",
    breadcrumbs: [
      { name: "Home", url: "https://www.naviads.com.sa/" },
      { name: "Manpower Services", url: "https://www.naviads.com.sa/services/manpower" },
      { name: "Facility Support Staff", url: "https://www.naviads.com.sa/services/manpower/facility-support" }
    ]
  },

  // Facility Support AR
  "/ar/services/manpower/facility-support": {
    path: "/ar/services/manpower/facility-support",
    lang: "ar",
    title: "توريد كوادر دعم المرافق والمنشآت في الرياض | شركة نافيآدز",
    description: "توريد كوادر دعم المرافق والمنشآت بالرياض: مساعدو مرافق، عمال مساندة، وموظفو خدمات مكاتب ومجمعات للمحافظة على انسيابية الأعمال.",
    keywords: "كوادر دعم مرافق, مساعدو مرافق بالرياض, عمال خدمات مساندة, عمالة تشغيل مجمعات",
    canonical: "https://www.naviads.com.sa/ar/services/manpower/facility-support",
    h1: "توريد كوادر دعم المرافق والخدمات المساندة بالرياض",
    subtitle: "كوادر مساندة متفانية تتولى المهام التشغيلية المساندة للمباني والمجمعات والمقرات الإدارية بكفاءة عالية.",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://www.naviads.com.sa/ar" },
      { name: "توريد العمالة", url: "https://www.naviads.com.sa/ar/services/manpower" },
      { name: "دعم المرافق", url: "https://www.naviads.com.sa/ar/services/manpower/facility-support" }
    ]
  },

  // Skilled Workers EN
  "/services/manpower/skilled-semi-skilled": {
    path: "/services/manpower/skilled-semi-skilled",
    lang: "en",
    title: "Skilled & Semi-Skilled Workers Supply Riyadh | Navi Ads",
    description: "Skilled and semi-skilled labor supply in Riyadh: technical assistants, site personnel, and experienced workforce tailored to project scopes.",
    keywords: "skilled labor supply, semi skilled workers Riyadh, technical assistants Saudi Arabia, workforce solutions Riyadh",
    canonical: "https://www.naviads.com.sa/services/manpower/skilled-semi-skilled",
    h1: "Skilled & Semi-Skilled Workers Supply in Riyadh",
    subtitle: "Targeted staffing solutions meeting precise industrial, maintenance, and facility workforce specifications.",
    breadcrumbs: [
      { name: "Home", url: "https://www.naviads.com.sa/" },
      { name: "Manpower Services", url: "https://www.naviads.com.sa/services/manpower" },
      { name: "Skilled & Semi-Skilled", url: "https://www.naviads.com.sa/services/manpower/skilled-semi-skilled" }
    ]
  },

  // Skilled Workers AR
  "/ar/services/manpower/skilled-semi-skilled": {
    path: "/ar/services/manpower/skilled-semi-skilled",
    lang: "ar",
    title: "توريد عمالة ماهرة ونصف ماهرة بالرياض | شركة نافيآدز",
    description: "توريد عمالة ماهرة ونصف ماهرة في الرياض لمساندة المشاريع الهندسية والصناعية ومشاريع الصيانة والتشغيل بعقود نظامية معتمدة.",
    keywords: "توريد عمالة ماهرة, عمالة فنية بالرياض, توريد فنيين ومساعدين, كوادر مهنية السعودية",
    canonical: "https://www.naviads.com.sa/ar/services/manpower/skilled-semi-skilled",
    h1: "توريد عمالة ماهرة ونصف ماهرة في الرياض",
    subtitle: "تلبية الاحتياجات الفنية والمهنية الدقيقة للمشاريع عبر كوادر تمتلك الخبرة والجاهزية للعمل الفوري.",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://www.naviads.com.sa/ar" },
      { name: "توريد العمالة", url: "https://www.naviads.com.sa/ar/services/manpower" },
      { name: "عمالة ماهرة", url: "https://www.naviads.com.sa/ar/services/manpower/skilled-semi-skilled" }
    ]
  },

  // City Page: Riyadh EN
  "/riyadh": {
    path: "/riyadh",
    lang: "en",
    title: "Cleaning Services & Manpower Supply in Riyadh | Navi Ads",
    description: "Local cleaning services (Sky Cleaning) and manpower staffing across Riyadh, Saudi Arabia. Rapid dispatch across Olaya, Malaz, KAFD, and Airport districts. CR: 7051048754.",
    keywords: "cleaning services Riyadh, sky cleaning Riyadh, manpower supply Riyadh, cleaning company Riyadh, building cleaning Riyadh, deep cleaning Olaya KAFD",
    canonical: "https://www.naviads.com.sa/riyadh",
    h1: "Cleaning Services & Manpower Supply in Riyadh",
    subtitle: "Your trusted local Riyadh partner for corporate office sanitation, high-rise building care, and compliant workforce deployment.",
    breadcrumbs: [
      { name: "Home", url: "https://www.naviads.com.sa/" },
      { name: "Riyadh Services", url: "https://www.naviads.com.sa/riyadh" }
    ],
    faqs: [
      {
        question: "Which districts in Riyadh does Navi Ads cover?",
        answer: "We cover all major districts across Riyadh including King Khalid Airport District, King Abdullah Financial District (KAFD), Al Olaya, Al Malaz, Al Yasmin, Al Narjis, and the broader metropolitan area."
      },
      {
        question: "How fast can cleaning crews or workers be dispatched in Riyadh?",
        answer: "We offer rapid same-day or next-day assessment and dispatch for commercial clients and residential properties across Riyadh."
      }
    ]
  },

  // City Page: Riyadh AR
  "/ar/riyadh": {
    path: "/ar/riyadh",
    lang: "ar",
    title: "شركة تنظيف وتوريد عمالة في الرياض | نافيآدز سكاي كلينينج",
    description: "شركة تنظيف رائدة وتوريد عمالة في الرياض، السعودية. تغطية شاملة لكافة أحياء الرياض: العليا، الملز، مركز الملك عبدالله المالي، وحي المطار. س.ت: 7051048754.",
    keywords: "شركة تنظيف بالرياض, تنظيف مباني بالرياض, توريد عمالة بالرياض, شركة تنظيف منازل بالرياض, تنظيف واجهات الرياض, عمال نظافة الرياض",
    canonical: "https://www.naviads.com.sa/ar/riyadh",
    h1: "خدمات التنظيف وتوريد العمالة في مدينة الرياض",
    subtitle: "شريككم المحلي المعتمد في العاصمة الرياض لتقديم حلول النظافة المتكاملة للشركات والأبراج والمنازل وتوريد القوى العاملة النظامية.",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://www.naviads.com.sa/ar" },
      { name: "خدمات الرياض", url: "https://www.naviads.com.sa/ar/riyadh" }
    ],
    faqs: [
      {
        question: "ما هي الأحياء والمناطق المشمولة في الرياض؟",
        answer: "تغطي خدماتنا كافة أحياء شمال، وشرق، وغرب، ووسط، وجنوب الرياض، بما يشمل حي المطار، مركز الملك عبدالله المالي (KAFD)، العليا، الملز، الياسمين، النرجس، والصحافة."
      },
      {
        question: "ما هي سرعة استجابة وتوريد الفرق في الرياض؟",
        answer: "نمتلك فرق عمل متمركزة في الرياض تمكننا من المعاينة السريعة والبدء الفوري في تقديم خدمات النظافة أو توريد الكوادر المطلوبة."
      }
    ]
  },

  // Privacy Policy EN
  "/privacy-policy": {
    path: "/privacy-policy",
    lang: "en",
    title: "Privacy Policy | Navi Ads Company Riyadh Saudi Arabia",
    description: "Read the Privacy Policy of Navi Ads Company. Learn how we collect, protect, and handle client data and inquiries in compliance with Saudi regulations.",
    keywords: "privacy policy, navi ads privacy, data protection Saudi Arabia",
    canonical: "https://www.naviads.com.sa/privacy-policy",
    h1: "Privacy Policy",
    subtitle: "Our commitment to client privacy and responsible data protection.",
    breadcrumbs: [
      { name: "Home", url: "https://www.naviads.com.sa/" },
      { name: "Privacy Policy", url: "https://www.naviads.com.sa/privacy-policy" }
    ]
  },

  // Privacy Policy AR
  "/ar/privacy-policy": {
    path: "/ar/privacy-policy",
    lang: "ar",
    title: "سياسة الخصوصية | شركة نافيآدز بالرياض المملكة العربية السعودية",
    description: "سياسة الخصوصية وحماية البيانات في شركة نافيآدز، والتزامنا بحماية سرية معلومات عملائنا وفق الأنظمة المعمول بها في المملكة العربية السعودية.",
    keywords: "سياسة الخصوصية, خصوصية البيانات السعودية, شروط الخصوصية نافيآدز",
    canonical: "https://www.naviads.com.sa/ar/privacy-policy",
    h1: "سياسة الخصوصية",
    subtitle: "التزامنا الراسخ بحماية خصوصية عملائنا وأمان بياناتهم الشخصية والتجارية.",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://www.naviads.com.sa/ar" },
      { name: "سياسة الخصوصية", url: "https://www.naviads.com.sa/ar/privacy-policy" }
    ]
  },

  // Terms EN
  "/terms": {
    path: "/terms",
    lang: "en",
    title: "Terms and Conditions | Navi Ads Company Saudi Arabia",
    description: "Terms and conditions governing professional cleaning (Sky Cleaning) and manpower services provided by Navi Ads Company in Riyadh, Saudi Arabia.",
    keywords: "terms and conditions, navi ads terms, service terms Saudi Arabia",
    canonical: "https://www.naviads.com.sa/terms",
    h1: "Terms and Conditions",
    subtitle: "Operating standards, service engagement, and agreement guidelines.",
    breadcrumbs: [
      { name: "Home", url: "https://www.naviads.com.sa/" },
      { name: "Terms and Conditions", url: "https://www.naviads.com.sa/terms" }
    ]
  },

  // Terms AR
  "/ar/terms": {
    path: "/ar/terms",
    lang: "ar",
    title: "الشروط والأحكام | شركة نافيآدز للخدمات بالرياض",
    description: "الشروط والأحكام الخاصة بتقديم خدمات تنظيف سكاي وتوريد العمالة من شركة نافيآدز بالرياض، المملكة العربية السعودية. س.ت: 7051048754.",
    keywords: "الشروط والأحكام, شروط الخدمة نافيآدز, اتفاقية الخدمات السعودية",
    canonical: "https://www.naviads.com.sa/ar/terms",
    h1: "الشروط والأحكام",
    subtitle: "المعايير والضوابط المنظمة لتقديم خدمات النظافة وتوريد الكوادر والعمالة في المملكة.",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://www.naviads.com.sa/ar" },
      { name: "الشروط والأحكام", url: "https://www.naviads.com.sa/ar/terms" }
    ]
  },

  // Dedicated Exact-Match Landing Page: Sky Cleaning Riyadh EN
  "/sky-cleaning-riyadh": {
    path: "/sky-cleaning-riyadh",
    lang: "en",
    title: "Sky Cleaning Riyadh | #1 Professional Cleaning Services in Riyadh",
    description: "Looking for Sky Cleaning in Riyadh? Navi Ads delivers premier building cleaning, office upkeep, high-rise facade washing & deep cleaning in Riyadh. CR: 7051048754.",
    keywords: "sky cleaning riyadh, skycleaning riyadh, sky cleaning in riyadh, sky cleaning services riyadh, best cleaning company riyadh, building cleaning riyadh, facade cleaning riyadh",
    canonical: "https://www.naviads.com.sa/sky-cleaning-riyadh",
    h1: "Sky Cleaning Riyadh — Premier Facility & Building Cleaning",
    subtitle: "Riyadh's trusted destination for Sky Cleaning Services: residential villas, corporate towers, and commercial plazas across all Riyadh districts.",
    breadcrumbs: [
      { name: "Home", url: "https://www.naviads.com.sa/" },
      { name: "Sky Cleaning Riyadh", url: "https://www.naviads.com.sa/sky-cleaning-riyadh" }
    ],
    faqs: [
      {
        question: "Why choose Sky Cleaning in Riyadh by Navi Ads?",
        answer: "Navi Ads Sky Cleaning is officially registered under CR 7051048754 in Riyadh, offering certified high-safety facade cleaning, corporate office upkeep, rapid local dispatch, and rigorous quality supervision across all Riyadh districts."
      },
      {
        question: "How fast can Sky Cleaning teams respond in Riyadh?",
        answer: "Our operations base in Riyadh provides same-day on-site assessments and rapid deployment across all neighborhoods including Airport District, Olaya, KAFD, and Malaz."
      }
    ]
  },

  // Dedicated Exact-Match Landing Page: Sky Cleaning Riyadh AR
  "/ar/sky-cleaning-riyadh": {
    path: "/ar/sky-cleaning-riyadh",
    lang: "ar",
    title: "سكاي كلينينج الرياض | شركة تنظيف معتمدة في الرياض - نافيآدز",
    description: "تبحث عن سكاي كلينينج في الرياض؟ شركة نافيآدز تقدم أفضل خدمات تنظيف المباني والواجهات والمكاتب والمنازل بأعلى معايير الجودة والضمان. س.ت: 7051048754.",
    keywords: "سكاي كلينينج الرياض, سكاي كلينينج في الرياض, شركة سكاي كلينينج, تنظيف سكاي بالرياض, ارقام سكاي كلينينج الرياض, افضل شركة تنظيف بالرياض",
    canonical: "https://www.naviads.com.sa/ar/sky-cleaning-riyadh",
    h1: "سكاي كلينينج الرياض — خدمات تنظيف معتمدة وشاملة",
    subtitle: "الوجهة الرائدة لخدمات تنظيف سكاي في العاصمة الرياض: تنظيف الأبراج والمكاتب والفلل والمجمعات السكنية والتجارية مع الضمان.",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://www.naviads.com.sa/ar" },
      { name: "سكاي كلينينج الرياض", url: "https://www.naviads.com.sa/ar/sky-cleaning-riyadh" }
    ],
    faqs: [
      {
        question: "لماذا تعد سكاي كلينينج من نافيآدز الخيار الأفضل في الرياض؟",
        answer: "لأننا شركة سعودية مرخصة بسجل تجاري رقم 7051048754، نمتلك أحدث تقنيات تنظيف المباني والواجهات، وكوادر مدربة نظامية مع تغطية شاملة وسريعة لكافة أحياء الرياض."
      },
      {
        question: "كيف يمكنني طلب خدمة سكاي كلينينج بالرياض؟",
        answer: "يمكنك الاتصال مباشرة أو إرسال رسالة واتساب على الرقم 0537799389 للحصول على معاينة فورية وعرض سعر مخصص."
      }
    ]
  }
};
