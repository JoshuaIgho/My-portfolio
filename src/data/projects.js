export const projects = [
  {
    id: 1,
    title: 'Charmé',
    subtitle: 'Full-Stack E-Commerce Platform',
    description: 'A comprehensive e-commerce solution with product browsing, shopping cart, secure checkout, payment integration, and address management.',
    image: new URL('../assets/Screenshot 2025-12-23 at 18.20.47.png', import.meta.url).href,
    technologies: ['React', 'Node.js', 'Express', 'Postgres', 'Stripe', 'Tailwind CSS'],
    features: [
      'Product catalog with filtering and search',
      'Shopping cart with persistent state',
      'Secure checkout process',
      'Payment gateway integration',
      'User address management',
      'Order tracking system'
    ],
    github: 'https://github.com/JoshuaIgho/Charm-frontend-',
    live: 'https://charmesiri.vercel.app/',
    category: 'full-stack'
  },
  {
    id: 2,
    title: 'AfricaCaribbeanConnect',
    subtitle: 'Portfolio & Documentary Showcase',
    description: 'A dynamic portfolio website featuring work showcase, Rating, YouTube integration, and documentary content presentation.',
    image: new URL('../assets/Screenshot 2025-12-23 at 18.30.33.png', import.meta.url).href,
    technologies: ['React', 'Node.js', 'YouTube API', 'Tailwind CSS', 'Express'],
    features: [
      'Project portfolio showcase',
      'Team member profiles',
      'YouTube video integration',
      'Documentary content management',
      'Responsive gallery',
      'Contact form integration'
    ],
    github: 'https://github.com/JoshuaIgho/africa-untold-journeys',
    live: 'https://africa-untold-journeys.vercel.app/',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'LinkShare',
    subtitle: 'Full-stack link-in-bio platform ',
    description: 'A modern, full-stack link-in-bio platform that helps creators, entrepreneurs, and brands share all their important links through a single, beautiful page.',
    image: new URL('../assets/Link sharing.png', import.meta.url).href,
    technologies: ['React', 'Node.js', 'Express', 'Postgres', 'Tailwind CSS'],
    features: [
      'Complete authentication system with JWT',
      'Beautiful, responsive UI with Tailwind CSS',
      'Drag-and-drop link management',
      'Social media platform icons with Font Awesome',
      'Professional landing page',
      'Public profile pages with custom themes'
    ],
    github: 'https://github.com/JoshuaIgho/Link-sharing',
    live: 'https://linkshare-mocha.vercel.app/',
    category: 'full-stack'
  },
];
