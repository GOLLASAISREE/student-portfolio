export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React frontend and Node.js backend. Features include user authentication, product catalog, shopping cart, and payment integration.",
    longDescription: "Built a scalable e-commerce platform serving 500+ daily active users. Implemented secure payment processing with Stripe and optimized database queries reducing load times by 40%.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    category: "Full Stack",
    role: "Full Stack Developer",
    demoLink: "https://demo-ecommerce.alexjohnson.com",
    githubLink: "https://github.com/alexjohnson/ecommerce-platform",
    featured: true,
    metrics: "Reduced page load time by 40%, processed 1000+ orders monthly"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    longDescription: "Developed a real-time task management system using Socket.io for live updates. Implemented drag-and-drop functionality and team permission systems.",
    image: "/images/projects/taskapp.jpg",
    technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
    category: "Web App",
    role: "Frontend Lead",
    demoLink: "https://taskapp.alexjohnson.com",
    githubLink: "https://github.com/alexjohnson/task-management",
    featured: true,
    metrics: "Used by 50+ teams, 95% user satisfaction rating"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts and interactive charts.",
    longDescription: "Created a weather dashboard integrating multiple APIs for accurate forecasting. Implemented caching strategies to reduce API calls by 60%.",
    image: "/images/projects/weather.jpg",
    technologies: ["React", "Chart.js", "Weather API", "PWA"],
    category: "Frontend",
    role: "Solo Developer",
    demoLink: "https://weather.alexjohnson.com",
    githubLink: "https://github.com/alexjohnson/weather-dashboard",
    featured: false,
    metrics: "60% reduction in API calls, 4.8/5 user rating"
  }
];

export const projectCategories = ["All", "Full Stack", "Web App", "Frontend", "Backend"];