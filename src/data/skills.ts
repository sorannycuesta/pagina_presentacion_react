// src/data/skills.ts

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: "Frontend" | "Backend" | "Tools" | "Design";
}

const skills: Skill[] = [
  // Frontend
  { 
    name: "React", 
    level: 95, 
    icon: "⚛️", 
    category: "Frontend" 
  },
  { 
    name: "TypeScript", 
    level: 90, 
    icon: "📘", 
    category: "Frontend" 
  },
  { 
    name: "Next.js", 
    level: 88, 
    icon: "▲", 
    category: "Frontend" 
  },
  { 
    name: "TailwindCSS", 
    level: 95, 
    icon: "🎨", 
    category: "Frontend" 
  },
  { 
    name: "JavaScript", 
    level: 92, 
    icon: "💛", 
    category: "Frontend" 
  },
  { 
    name: "HTML/CSS", 
    level: 98, 
    icon: "🌐", 
    category: "Frontend" 
  },
  
  // Backend
  { 
    name: "Node.js", 
    level: 85, 
    icon: "🟢", 
    category: "Backend" 
  },
  { 
    name: "Python", 
    level: 80, 
    icon: "🐍", 
    category: "Backend" 
  },
  { 
    name: "MongoDB", 
    level: 82, 
    icon: "🍃", 
    category: "Backend" 
  },
  
  // Tools
  { 
    name: "Git", 
    level: 90, 
    icon: "🔧", 
    category: "Tools" 
  },
  { 
    name: "Figma", 
    level: 88, 
    icon: "🎯", 
    category: "Design" 
  },
  { 
    name: "VS Code", 
    level: 95, 
    icon: "💻", 
    category: "Tools" 
  }
];

export default skills;