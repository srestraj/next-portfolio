export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  year: string;
  role: string;
  technologies: string[];
  site?: string;
  image: string;
  caseStudy?: boolean;
  details: string[];
};

export const projects: Project[] = [
  {
    slug: "mero-rating",
    title: "Mero Rating",
    category: "Product / Full Frontend Ownership",
    description:
      "A review and discovery platform built from scratch to help people discover businesses, share experiences, and make better decisions.",
    year: "2024",
    role: "Founder & Frontend Engineer",
    technologies: ["Nuxt", "Vue", "TypeScript", "SCSS", "REST APIs"],
    site: "https://merorating.com",
    image: "/images/projects/mero-rating.png",
    caseStudy: true,
    details: [
      "Built the frontend from scratch, taking ownership of the product's architecture, UI, and overall user experience.",
      "Designed and developed reusable Vue/Nuxt components for business discovery, profiles, ratings, reviews, and user workflows.",
      "Integrated the frontend with backend APIs to power dynamic business data, reviews, ratings, and interactive experiences.",
      "Designed responsive experiences across desktop, tablet, and mobile with a focus on usability and maintainability.",
      "Established reusable frontend patterns and component architecture to support continued product development.",
      "Focused on frontend performance, responsive behavior, and creating a polished product experience from the ground up.",
    ],
  },

  {
    slug: "angel-investment-network",
    title: "Angel Investment Network",
    category: "Global Platform / Enterprise Frontend",
    description:
      "A large-scale global investment platform connecting entrepreneurs and investors, developed as part of a distributed international engineering team.",
    year: "2023–2026",
    role: "Senior Frontend Developer",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "SCSS",
      "REST APIs",
      "Webpack",
    ],
    site: "https://angelinvestmentnetwork.co.uk",
    image: "/images/projects/ain.png",
    caseStudy: true,
    details: [
      "Contributed to a large-scale global platform used by entrepreneurs and investors across multiple markets.",
      "Worked as part of a distributed international team, collaborating with developers and stakeholders across different regions and time zones.",
      "Developed and maintained complex frontend experiences spanning investment opportunities, profiles, search, filtering, and account workflows.",
      "Worked within an established production codebase, balancing new feature development with maintainability and existing product requirements.",
      "Built and refined reusable React components and frontend patterns across data-heavy application flows.",
      "Contributed to frontend modernization, performance improvements, and ongoing evolution of a large production platform.",
    ],
  },

  {
    slug: "mewing-app",
    title: "Mewing App",
    category: "Health & Wellness / Web Application",
    description:
      "A digital health and wellness platform combining guided exercises, educational content, progress tracking, and habit-building experiences.",
    year: "2024–2026",
    role: "Frontend Engineer",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
    ],
    site: "https://www.mewingapp.co",
    image: "/images/projects/mewing-app.png",
    caseStudy: true,
    details: [
      "Developed responsive interfaces for guided exercises, educational content, and structured user programs.",
      "Built reusable components for progress tracking, user workflows, and content-driven experiences.",
      "Created mobile-first experiences designed around repeated user engagement and habit-building.",
      "Integrated frontend interfaces with application APIs and dynamic user data.",
      "Focused on clear information hierarchy, responsive behavior, and an intuitive experience across devices.",
    ],
  },

  {
    slug: "mike-mew",
    title: "MikeMew",
    category: "Education / Content Platform",
    description:
      "An educational platform presenting expert-led content, courses, resources, and structured learning experiences.",
    year: "2024–2026",
    role: "Frontend Engineer",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    site: "https://mikemew.com",
    image: "/images/projects/mike-mew.png",
    caseStudy: true,
    details: [
      "Developed a modern frontend for presenting educational resources and expert-led content.",
      "Created reusable components and responsive layouts for content-heavy pages.",
      "Designed clear content hierarchy to make courses and educational material easier to discover and navigate.",
      "Implemented responsive experiences across desktop, tablet, and mobile devices.",
      "Focused on frontend performance, maintainability, SEO-friendly structure, and consistent UI patterns.",
    ],
  },

  {
    slug: "jhuma-limbu",
    title: "Jhuma Limbu",
    category: "Personal Brand / Cultural Platform",
    description:
      "A visual personal brand and cultural storytelling platform showcasing Jhuma Limbu and the Raithane cultural heritage project.",
    year: "2024–2026",
    role: "Frontend Engineer",
    technologies: ["Nuxt.js", "Vue", "Vuex", "TypeScript", "Contentful"],
    site: "https://www.jhumalimbu.com",
    image: "/images/projects/jhuma-limbu.png",
    caseStudy: true,
    details: [
      "Developed an editorial-style frontend combining personal branding with cultural storytelling.",
      "Created image-driven layouts and reusable components for presenting rich visual and editorial content.",
      "Built responsive navigation and content experiences across desktop and mobile.",
      "Integrated structured content to support flexible page and project presentation.",
      "Focused on visual hierarchy, responsive behavior, performance, and creating an immersive storytelling experience.",
    ],
  },
];

export const featuredProjects = [
  projects.find((project) => project.slug === "mero-rating")!,
  projects.find((project) => project.slug === "angel-investment-network")!,
  projects.find((project) => project.slug === "mewing-app")!,
];
