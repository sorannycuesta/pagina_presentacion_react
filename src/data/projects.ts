// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  featured: boolean;
  category: "web" | "app" | "design";
  tags?: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce AI Platform",
    description:
      "Plataforma completa de comercio electrónico con inteligencia artificial para recomendaciones personalizadas y análisis predictivo de ventas.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800",
    featured: true,
    category: "web",
    tags: ["React", "TypeScript", "TailwindCSS", "AI"],
    github: "https://github.com/tuusuario/ecommerce-ai",
    demo: "https://ecommerce-demo.ejemplo.com"
  },
  {
    id: 2,
    title: "Dashboard 3D Analytics",
    description: "Panel administrativo moderno con visualizaciones de datos 3D interactivas y métricas en tiempo real.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    featured: true,
    category: "web",
    tags: ["Next.js", "Three.js", "D3.js", "WebGL"],
    github: "https://github.com/tuusuario/dashboard-3d",
    demo: "https://dashboard-demo.ejemplo.com"
  },
  {
    id: 3,
    title: "Social Media Suite",
    description:
      "Suite completa para gestión de redes sociales con programación de contenido, análisis de engagement y reportes automatizados.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
    featured: false,
    category: "app",
    tags: ["React", "Node.js", "MongoDB", "API"],
    github: "https://github.com/tuusuario/social-suite",
    demo: "https://social-demo.ejemplo.com"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Sitio web de portafolio personal con animaciones fluidas, diseño moderno y experiencia de usuario optimizada.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    featured: false,
    category: "design",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/tuusuario/portfolio",
    demo: "https://portfolio.ejemplo.com"
  },
  {
    id: 5,
    title: "Weather App Pro",
    description: "Aplicación meteorológica con pronósticos detallados, mapas interactivos y alertas personalizadas.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800",
    featured: false,
    category: "app",
    tags: ["React Native", "API", "Maps"],
    github: "https://github.com/tuusuario/weather-app",
    demo: "https://weather-demo.ejemplo.com"
  },
  {
    id: 6,
    title: "Task Manager",
    description: "Gestor de tareas y proyectos con colaboración en equipo, tableros Kanban y seguimiento de tiempo.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
    featured: false,
    category: "web",
    tags: ["Vue.js", "Firebase", "PWA"],
    github: "https://github.com/tuusuario/task-manager",
    demo: "https://tasks-demo.ejemplo.com"
  }
];

export default projects;