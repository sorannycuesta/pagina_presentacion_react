import { useState } from "react";
import GlassCard from "./GlassCard";
import projects from "../data/projects";
import { Github, ExternalLink, Star, Filter } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "web", "app", "design"];
  const categoryLabels: Record<string, string> = {
    all: "Todos",
    web: "Web",
    app: "Apps",
    design: "Diseño"
  };

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="proyectos" className="py-32 relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold">
            Proyectos{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Destacados
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y significativos
          </p>
        </div>

        {/* Filtros */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2">
            <Filter className="text-purple-400 ml-2" size={20} />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === cat
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <GlassCard
              key={project.id}
              className="overflow-hidden group transition-all duration-500 hover:scale-[1.03]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Imagen */}
              <div className="relative h-60 overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Badge Featured */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg">
                    <Star size={14} fill="currentColor" /> Featured
                  </div>
                )}

                {/* Overlay con categoría */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/20">
                  {categoryLabels[project.category || 'web']}
                </div>

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags de tecnologías */}
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Botones */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center gap-2 transition group/btn"
                      aria-label="Ver código en GitHub"
                    >
                      <Github size={18} className="group-hover/btn:scale-110 transition-transform" /> 
                      <span className="text-sm font-medium">Código</span>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg flex items-center justify-center gap-2 transition shadow-lg shadow-purple-500/30 group/btn"
                      aria-label="Ver demostración"
                    >
                      <ExternalLink size={18} className="group-hover/btn:scale-110 transition-transform" /> 
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Mensaje si no hay proyectos */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No hay proyectos en esta categoría todavía
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;