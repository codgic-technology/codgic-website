import { Service, Project, Testimonial, ProcessStep } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    category: 'Engineering',
    shortDescription: 'We assemble ultra-responsive, server-side optimized Next.js and React web applications designed to convert and scale.',
    detailedDescription: 'From highly complex state managers to lightweight corporate greeting architectures, we design and code web layouts that are blazingly fast, SEO-optimized, and ready to scale infinitely on the cloud.',
    iconName: 'Code',
    benefits: [
      'Tailwind CSS v4 & Motion interactive structures',
      'Advanced API endpoints & serverless rendering',
      'Optimal Core Web Vitals performance scores',
      'Bulletproof TypeScript safety & modular components'
    ],
    techStack: ['React', 'Next.js', 'Vite', 'Tailwind', 'Node.js', 'TypeScript']
  },
  {
    id: 'app-dev',
    title: 'App Development',
    category: 'Mobile Systems',
    shortDescription: 'Premium cross-platform and native mobile applications crafted for optimal Play Store and iOS deployment.',
    detailedDescription: 'We write robust, offline-capable mobile software packed with responsive gesture tracking, native device integration, background tasks, and high-performance rendering that feels completely natural on any viewport.',
    iconName: 'Smartphone',
    benefits: [
      'Play Store & App Store deployment guidelines',
      'Local caching & offline database storage engines',
      'Native push notifications & background synchronization',
      'Smooth 60fps micro-interaction and swipe layout frames'
    ],
    techStack: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'Firebase SDK', 'Node API']
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    category: 'Aesthetics & Media',
    shortDescription: 'High-conversion app trailers, professional social media promo templates, and sleek animated kinetics.',
    detailedDescription: 'Turn viewport attention into digital engagement. We craft high-pacing video deliverables, promotional teasers, and detailed walkthroughs layered with premium sound engineering, modern cuts, and cinematic asset workflows.',
    iconName: 'Video',
    benefits: [
      'Aesthetic color grading & high-density footage styling',
      'App store walkthrough trailers & landing loop edits',
      'Dynamic typography, tracking transitions & logo clips',
      'Custom sound engineering, mastering, and timing syncs'
    ],
    techStack: ['After Effects', 'Premiere Pro', 'DaVinci Resolve', 'Motion Graphics', 'Audition']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'novaluxe',
    title: 'NovaLuxe E-Commerce Sphere',
    category: 'Full-Stack',
    clientName: 'NovaLuxe Apparel Ltd',
    shortDesc: 'A fully custom, 3D clothing customizer and immersive high-speed retail application optimized for headless checkout.',
    challenge: 'NovaLuxe needed an extremely smooth client-side interface that allowed users to select real-time material textures and sizes, with a checkout process under 2 seconds, without lagging on mobile screens.',
    approach: 'We built a custom React rendering canvas coupled with modular Tailwind states, using local cache hydration to fetch pricing structures in advance so the user never encounters loading rings.',
    results: 'Bounce rates dropped by 34%, and overall average order value increased by 22% within ninety days of launching with client-side caching.',
    tags: ['React', 'Tailwind v4', 'Tailwind CSS', 'Framer Motion', 'Headless Commerce'],
    duration: '8 weeks',
    rating: 5,
    featured: true
  },
  {
    id: 'intellecta',
    title: 'Intellecta enterprise NLP core',
    category: 'AI & Data',
    clientName: 'Intellecta FinTech Group',
    shortDesc: 'A deep analytic interface mapping market signals, automatically summarizing multi-page PDFs using server-side Gemini pipelines.',
    challenge: 'Financial analysts were spending hours searching through SEC filings manually. They required an eye-safe, blazing fast dark dashboard capable of live-answering queries on complex economic indicators.',
    approach: 'Established a server-side route architecture using the Google GenAI SDK. We crafted a beautiful dark-brutalist interactive node canvas that renders AI-confidence scoring as high-contrast purple-blue dots.',
    results: 'Saved analysts an average of 14 hours per week. Secured positive evaluation ratings of 4.9/5 from 120 early beta testers.',
    tags: ['Next.js', 'Google GenAI', 'TypeScript', 'Tailwind', 'Data Visualization', 'D3.js'],
    duration: '10 weeks',
    rating: 5,
    featured: true
  },
  {
    id: 'synthetix',
    title: 'Synthetix Edge Control Platform',
    category: 'Product Design',
    clientName: 'Synthetix Cloud Solutions',
    shortDesc: 'A highly complex web control station for real-time edge node cluster tracking, container telemetry, and failure alert systems.',
    challenge: 'Synthetix manages over 45,000 edge server locations. Their existing control portal was cluttered, confusing, and led to slow operator response times during critical hardware failures.',
    approach: 'We applied rigorous visual hierarchy: high-density modular cards, subtle animation alerts using Motion, interactive scale filters, and clear typographic treatments for status codes.',
    results: 'Operator reaction time to server offline alerts improved from 4.2 minutes down to an average of 18 seconds, reducing downtime significantly.',
    tags: ['UX Architecture', 'Interactive Maps', 'WebSockets', 'Vite', 'High-Density UI'],
    duration: '6 weeks',
    rating: 5,
    featured: false
  },
  {
    id: 'prism',
    title: 'Prism Multi-Tenant CMS Framework',
    category: 'Full-Stack',
    clientName: 'Prism Creative Network',
    shortDesc: 'A headless, localized content management hub for rapid deployment of media brands across 14 languages.',
    challenge: 'The network could not launch subsidiary brands without costly server configurations and complex database duplication.',
    approach: 'Designed a multi-tenant DNS router inside an Express server proxying dynamic pages through automated CDN caching, backed by a responsive custom administration workspace.',
    results: 'Saved over $75,000 in monthly DevOps overhead and reduced individual site spinoff times from 2 weeks down to 4 minutes.',
    tags: ['Express', 'TypeScript', 'Multi-tenant Server', 'Tailwind CSS', 'Redis Caching'],
    duration: '12 weeks',
    rating: 5,
    featured: true
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Surgical Discovery & Architecture scoping',
    description: 'We host interactive tech workshops to extract your exact requirements. We strip out unnecessary fluff and architect a highly detailed blueprint document specifying software requirements, tech stack pairings, and clean database structures.',
    deliverables: ['System Architecture Diagram', 'Interactive Wireframe Prototype', 'Technical Project Specification Document'],
    duration: '1 - 2 Weeks'
  },
  {
    step: '02',
    title: 'High-Fidelity Interface & Interactive Design',
    description: 'We construct customized design tokens, typography scales, page layouts, and custom visual elements inside Figma. Every design is built fully responsive and fully custom to your brand guidelines—no generic pre-made templates.',
    deliverables: ['Full Desktop & Mobile Design Mockups', 'Interactive Clickable Prototype', 'Component Library tokens'],
    duration: '2 - 3 Weeks'
  },
  {
    step: '03',
    title: 'Intensive Agile Engineering Workcycle',
    description: 'Our software engineers transform approved designs into production React/TypeScript code using clean, modular standards. We maintain a staging link updated daily so you can review and click through active work progress in real-time.',
    deliverables: ['Active Sandbox Web Access', 'Fully-typed Code Repository', 'Initial Automated Test Report'],
    duration: '4 - 8 Weeks'
  },
  {
    step: '04',
    title: 'Polished Deployment & Launch verification',
    description: 'We stress-test the application for secure transactions, configure global content distribution networks, and deploy the production container. We provide a full training run-through and keep a team on standby to monitor early launch signals.',
    deliverables: ['Production Container Deployment', 'Platform Handover Docs', '30-Day Post-Launch Hypercare Support'],
    duration: '1 Week'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'jenkins',
    name: 'Sarah Jenkins',
    role: 'Chief Technology Officer',
    company: 'NovaLuxe Apparel Ltd',
    quote: "Working with Codgic was a Masterclass in execution. They didn't just write robust code; they took ownership of our interactive material customizer's mathematical rendering speed to ensure a 60fps experience for mobile users. A rare hybrid of design mastery and engineering rigor.",
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    projectCompleted: 'NovaLuxe E-Commerce Sphere'
  },
  {
    id: 'thorne',
    name: 'Marcus Thorne',
    role: 'Founder & CEO',
    company: 'Intellecta NLP systems',
    quote: "Our SEC parsing dashboard required lightning fast dark-mode visuals and robust server-side LLM proxies. Codgic shipped the layout in record time. Their attention to subtle visual timing and micro-interactions makes their frontend execution look years ahead of other web agencies.",
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    projectCompleted: 'Intellecta enterprise NLP core'
  },
  {
    id: 'patel',
    name: 'Priya Patel',
    role: 'VP of Product',
    company: 'Synthetix Cloud',
    quote: "With over 40,000 global servers, alert fatigue was our biggest risk. Codgic designed a high-density telemetry workspace that helps operators isolate issues in seconds. Their clean design patterns turned our technical chaos into a calm, intuitive interface.",
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    projectCompleted: 'Synthetix Edge Control Platform'
  }
];
