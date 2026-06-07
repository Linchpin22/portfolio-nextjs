import {
  BuildingStorefrontIcon,
  Squares2X2Icon,
  ChatBubbleLeftRightIcon,
  BuildingOffice2Icon,
  TableCellsIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const projects = [
  {
  name: "VIDYAone Official Website",
  icon: <GlobeAltIcon className="w-5 h-5 text-green-600" />,
  category: "production",
  description: "Took ownership of the company's official website mid-project — refactored existing codebase, resolved legacy issues, and built new marketing landing pages with responsive UI, SEO-friendly structure, and performance optimisation.",
  tags: ["Next.js", "Tailwind CSS", "SEO", "Vercel"],
  live: "https://vidyaone.com",
  link: null,
},
  {
    name: "BlackGiraffe",
    icon: <BuildingStorefrontIcon className="w-5 h-5 text-blue-600" />,
    category: "freelance",
    description: "Full production website for a boutique digital studio. Multi-page, SEO-optimised with OG tags, sitemap, legal pages, and WhatsApp CTA. Custom domain on Vercel.",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "SEO"],
    live: "https://blackgiraffe.in",
    link: null,
  },
  {
    name: "School Website Template System",
    icon: <Squares2X2Icon className="w-5 h-5 text-green-600" />,
    category: "production",
    description: "ThemeForest-style template listing with SSG-powered pages, WebP thumbnail pipeline, and card UI. Live on VIDYAone's SaaS platform.",
    tags: ["Next.js", "Tailwind CSS", "SSG", "AWS CDN"],
    live: "https://test.vidyaone.com/school-website/templates/",
    link: null,
  },
  {
    name: "Customer Stories UI",
    icon: <ChatBubbleLeftRightIcon className="w-5 h-5 text-green-600" />,
    category: "production",
    description: "Shipped testimonials section with featured cards, expandable content, result pills, and dynamic brand accent theming for VIDYAone's marketing site.",
    tags: ["React.js", "Tailwind CSS", "Framer Motion"],
    live: null,
    link: null,
  },
  {
    name: "Neelabh Hospital Website",
    icon: <BuildingOffice2Icon className="w-5 h-5 text-violet-600" />,
    category: "internship",
    description: "Official hospital website with patient-focused service pages, responsive layout, and real-time data display — built and shipped during internship.",
    tags: ["Next.js", "Tailwind CSS", "React hooks"],
    live: "https://www.neelabhhospital.com/",
    link: null,
  },
  {
    name: "Admin Product Dashboard",
    icon: <TableCellsIcon className="w-5 h-5 text-violet-600" />,
    category: "internship",
    description: "Admin panel for a retail platform with category-based product filtering, product management UI, and comprehensive inventory data display.",
    tags: ["React.js", "Tailwind CSS", "Axios"],
    live: null,
    link: "https://github.com/Linchpin22/DemoTask",
  },
];

export default projects;