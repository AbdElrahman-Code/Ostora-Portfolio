export type Project = {
  slug: string;
  title: string;
  tagline: string;
  pitch: string;
  problem: string;
  role: string[];
  stack: string[];
  features: string[];
  design: string[];
  challenges: string[];
  results: string[];
  selling: string[];
  links: { label: string; url: string }[];
  featured: boolean;
  year: string;
  category: string;
};

export const projects: Project[] = [
  {
    slug: "jettech",
    title: "Jet Tech — Industrial Sewing Platform",
    tagline: "React storefront for an industrial sewing machine manufacturer",
    year: "2024",
    category: "Frontend / React",
    featured: true,
    pitch:
      "A single-page React application built for JET TECH, an industrial sewing machine supplier, to present its product catalog and company profile to an international, multilingual audience with a fast, app-like experience.",
    problem:
      "The client sold specialized industrial equipment but had no digital presence that matched the technical nature of the product line. Buyers needed a fast way to browse machine categories and specifications without the overhead of a traditional CMS site.",
    role: [
      "Built the entire frontend as a component-driven React SPA.",
      "Structured routing, page layout, and reusable UI components from scratch.",
      "Implemented responsive layouts for desktop, tablet, and mobile.",
      "Deployed and configured continuous delivery on Vercel.",
    ],
    stack: [
      "React",
      "React Router",
      "CSS Modules",
      "Vercel Hosting",
      "Create React App tooling",
    ],
    features: [
      "Responsive product catalog layout",
      "Component-based architecture for fast iteration",
      "Optimized asset loading for product imagery",
      "Clean navigation for multi-category browsing",
      "Production deployment pipeline on Vercel",
    ],
    design: [
      "Industrial, no-nonsense visual tone that matches heavy machinery rather than a generic template.",
      "Clear typographic hierarchy so technical product names remain legible at small sizes.",
      "Generous spacing around product cards to keep a dense catalog from feeling cluttered.",
      "Consistent grid system carried across every page for predictable scanning.",
    ],
    challenges: [
      "Translating a catalog of highly technical machines into a browsable, non-technical-buyer-friendly layout.",
      "Keeping the SPA fast on first load given a large set of product images.",
      "Structuring components so new product categories could be added without touching layout code.",
    ],
    results: [
      "Gave the manufacturer a professional, modern web presence to match international competitors.",
      "Reduced the effort required to add or update products going forward.",
      "Improved mobile usability for buyers researching equipment on the move.",
    ],
    selling: [
      "This project demonstrates the ability to turn an undocumented, offline business into a structured digital product from a blank canvas.",
      "It shows component architecture discipline, not just visual polish.",
      "Good example to cite when a client asks for a fast, no-CMS marketing site.",
    ],
    links: [{ label: "Live Site", url: "https://jet-tech-sewing.vercel.app/" }],
  },
  {
    slug: "oakyard",
    title: "OAK YARD Furniture — E-Commerce Showcase",
    tagline: "Localized furniture brand website with Arabic/English support",
    year: "2024",
    category: "Frontend / Next.js",
    featured: true,
    pitch:
      "A bilingual (Arabic/English) furniture brand website built to present a home-goods catalog with a layout that adapts cleanly to right-to-left reading direction, giving the business a credible online storefront presence.",
    problem:
      "A furniture retailer needed a way to showcase its catalog to both Arabic and English speaking customers without maintaining two separate websites, and needed a look that felt premium enough to match physical showroom quality.",
    role: [
      "Implemented locale-based routing (/en, /ar) with Next.js internationalized routing.",
      "Built the product presentation layout and navigation.",
      "Handled RTL/LTR layout mirroring for Arabic content.",
      "Deployed the project on Vercel with production build configuration.",
    ],
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS / custom CSS",
      "next-i18n routing pattern",
      "Vercel Hosting",
    ],
    features: [
      "Full bilingual experience (Arabic & English)",
      "RTL-aware layout system",
      "Responsive product grid",
      "SEO-friendly page structure via Next.js",
      "Fast static + server-rendered pages",
    ],
    design: [
      "Warm, showroom-like palette to reflect the tactile nature of furniture.",
      "Mirrored layout logic so Arabic users get a genuinely native RTL experience, not a flipped afterthought.",
      "Card-based catalog with breathing room between pieces, echoing physical showroom spacing.",
      "Typography chosen to read comfortably in both Latin and Arabic script.",
    ],
    challenges: [
      "Mirroring an entire layout system correctly for RTL without duplicating components.",
      "Keeping typography legible and consistent across two very different scripts.",
      "Structuring Next.js routing cleanly across two locales.",
    ],
    results: [
      "Gave the brand one unified codebase serving two language markets.",
      "Improved credibility for the brand with a modern, responsive storefront.",
      "Simplified future content updates by keeping both locales in one project.",
    ],
    selling: [
      "Strong project to highlight for any client needing an Arabic-market or MENA-region website.",
      "Demonstrates real internationalization experience, not just translated strings.",
      "Shows Next.js routing and localization competency end-to-end.",
    ],
    links: [{ label: "Live Site", url: "https://furn-bassem.vercel.app/en" }],
  },
  {
    slug: "saas-admin-dashboard",
    title: "Admin — SaaS Analytics Dashboard",
    tagline: "Data-dense admin dashboard UI for SaaS product management",
    year: "2024",
    category: "Frontend / Dashboard UI",
    featured: true,
    pitch:
      "A SaaS-style admin dashboard interface with charts, tables, and navigation patterns typical of modern product analytics tools — built to demonstrate the ability to design and implement complex, data-heavy interfaces.",
    problem:
      "Admin dashboards are one of the most requested deliverables from SaaS and internal-tooling clients, but require a different skill set than marketing sites: dense data, multiple states, and consistent interaction patterns across many screens.",
    role: [
      "Designed and built the dashboard layout system: sidebar navigation, top bar, content grid.",
      "Implemented charting and data visualization components.",
      "Built reusable table, card, and stat-widget components.",
      "Handled responsive behavior for dashboard views on smaller screens.",
    ],
    stack: [
      "React / Next.js",
      "Charting library (Recharts/Chart.js-style components)",
      "Tailwind CSS",
      "Component-driven architecture",
      "Vercel Hosting",
    ],
    features: [
      "Sidebar + top bar navigation shell",
      "Interactive charts and stat widgets",
      "Data tables with sorting-ready structure",
      "Card-based KPI summaries",
      "Fully responsive dashboard breakpoints",
      "Dark-mode-ready color system",
    ],
    design: [
      "Restrained, data-first palette so charts and numbers stay the visual focus, not decoration.",
      "Consistent 8px spacing rhythm across cards, tables, and widgets so dense screens still feel calm.",
      "Clear visual hierarchy between primary KPIs, secondary metrics, and supporting tables.",
      "Sidebar and navigation patterns modeled on real SaaS products for interaction familiarity.",
    ],
    challenges: [
      "Keeping a data-dense interface readable without overwhelming the user.",
      "Building a component system flexible enough to support many widget types consistently.",
      "Balancing information density with whitespace on smaller viewports.",
    ],
    results: [
      "Produced a portfolio-grade example of admin/dashboard UI competency.",
      "Demonstrates ability to ship the kind of internal tool most B2B/SaaS clients actually need.",
      "Reusable component patterns that can be adapted quickly to a real client's data.",
    ],
    selling: [
      "This is the project to lead with for any B2B, SaaS, or internal-tooling client conversation.",
      "Shows fluency in the exact interface patterns Toptal/Upwork Enterprise clients search for.",
      "Good evidence of component architecture thinking beyond simple marketing pages.",
    ],
    links: [{ label: "Live Site", url: "https://saas-admin-dashboard-15ub.vercel.app/" }],
  },
  {
    slug: "saudi-german-hospital",
    title: "Saudi German Hospital — Specialty Clinic Landing Pages",
    tagline: "High-trust healthcare landing pages for a hospital network",
    year: "2023",
    category: "WordPress / Healthcare",
    featured: false,
    pitch:
      "A set of specialty-clinic landing pages built on WordPress for Saudi German Hospital, a large regional hospital group, covering services from concussion care to mental health and home-care discharge programs.",
    problem:
      "A multi-specialty hospital group needed dedicated, trust-building landing pages for individual clinics and services, each with different content needs, while staying inside an existing WordPress content system used by a non-technical marketing team.",
    role: [
      "Built and structured individual clinic landing pages inside WordPress.",
      "Implemented layout, content blocks, and responsive behavior per page.",
      "Coordinated content presentation for medical/clinical information in a clear, trustworthy layout.",
    ],
    stack: [
      "WordPress",
      "Elementor / page-builder blocks",
      "Custom CSS",
      "Responsive layout techniques",
    ],
    features: [
      "Dedicated landing page per clinic/service line",
      "Responsive layout across all device sizes",
      "Clear service/benefit sections for patient-facing content",
      "Consistent brand system across multiple clinic pages",
    ],
    design: [
      "Calm, clinical color system that signals medical trust rather than a generic marketing tone.",
      "Clear, scannable sections so a worried patient can find the information they need quickly.",
      "Consistent component patterns reused across clinics to keep the hospital's brand cohesive.",
    ],
    challenges: [
      "Presenting sensitive medical information (mental health, concussion care) with an appropriately calm and clear tone.",
      "Working inside an existing WordPress theme/brand system rather than a blank canvas.",
      "Keeping multiple clinic pages visually consistent while addressing different services.",
    ],
    results: [
      "Delivered multiple production landing pages live on a real hospital network's website.",
      "Improved page-level clarity for patients researching specific clinics.",
      "Demonstrated ability to work within enterprise CMS constraints and existing brand guidelines.",
    ],
    selling: [
      "Strong proof of enterprise/CMS experience for clients who are wary of hiring a 'framework-only' developer.",
      "Shows the ability to work respectfully with sensitive, regulated content (healthcare).",
      "Good evidence for WordPress + Elementor fluency, still one of the most requested freelance skill sets.",
    ],
    links: [
      { label: "Dizzy Clinic", url: "https://saudigerman.com/dubai-dizzy-clinic" },
      { label: "Concussion Clinic", url: "https://saudigerman.com/dubai-concussion-clinic" },
      { label: "Mental Health Clinic", url: "https://saudigerman.com/mental-health-clinic" },
      { label: "Home Care Discharge", url: "https://saudigerman.com/home-care-discharge/" },
    ],
  },
  {
    slug: "tra-egypt",
    title: "Telecommunications Regulatory Authority (Egypt) — Maintenance & UI",
    tagline: "Ongoing maintenance for a national government website",
    year: "2023",
    category: "WordPress / Government",
    featured: false,
    pitch:
      "Ongoing maintenance, UI improvements, and content management support for the official website of Egypt's Telecommunications Regulatory Authority (TRA), a national government body.",
    problem:
      "A government regulatory body needed consistent upkeep of its public-facing WordPress site: fixing responsive issues, keeping plugins configured correctly, and managing content updates without downtime or regressions.",
    role: [
      "Performed WordPress edits and general UI improvements.",
      "Managed content updates across the site.",
      "Fixed responsive layout issues as they were identified.",
      "Handled plugin configuration and general site maintenance.",
    ],
    stack: ["WordPress", "PHP/Theme customization", "Plugin ecosystem", "Responsive CSS fixes"],
    features: [
      "Ongoing responsive fixes across pages",
      "Ongoing content management support",
      "Plugin configuration and upkeep",
      "General enhancement work on a live national site",
    ],
    design: [
      "Worked within an existing government-grade design system rather than a personal aesthetic — the priority is consistency, accessibility, and stability over visual experimentation.",
    ],
    challenges: [
      "Making changes safely on a live, public national government website with zero tolerance for downtime.",
      "Diagnosing and fixing responsive issues within an existing, non-authored codebase.",
      "Working within institutional processes and existing plugin/content constraints.",
    ],
    results: [
      "Kept a national regulatory authority's public website stable and current.",
      "Improved responsive behavior across the live site.",
      "Demonstrated reliability working on high-visibility, low-risk-tolerance infrastructure.",
    ],
    selling: [
      "Use this to answer the 'have you worked with large/institutional clients' question directly.",
      "Shows maturity: maintaining someone else's live codebase carefully is a different (and valuable) skill from greenfield builds.",
      "Signals trustworthiness for enterprise or government-adjacent freelance work.",
    ],
    links: [{ label: "Live Site", url: "https://www.tra.gov.eg/ar/" }],
  },
];
