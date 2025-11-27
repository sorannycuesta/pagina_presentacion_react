import { Coffee, Heart, ArrowUp, Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10">
      {/* Botón scroll to top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-purple-500/30"
        aria-label="Volver arriba"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-6 py-12">
        {/* Contenido principal */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Columna 1: Logo y descripción */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg rotate-45 shadow-lg shadow-purple-500/50" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Soranny
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Desarrolladora Frontend apasionada por crear experiencias digitales únicas y memorables.
            </p>
          </div>

          {/* Columna 2: Links rápidos */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Enlaces Rápidos</h3>
            <nav className="space-y-2">
              {["Inicio", "Sobre Mí", "Proyectos", "Contacto"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="block text-gray-400 hover:text-purple-400 transition text-sm"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Columna 3: Contacto y redes */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Conecta Conmigo</h3>
            <div className="space-y-3 mb-4">
              <a 
                href="mailto:soranny@ejemplo.com"
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition text-sm"
              >
                <Mail size={16} />
                soranny@ejemplo.com
              </a>
            </div>
            
            {/* Redes sociales */}
            <div className="flex gap-3">
              <a
                href="https://github.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-purple-500/20 hover:scale-110 transition"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-purple-500/20 hover:scale-110 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            
            {/* Copyright */}
            <div className="flex items-center gap-2">
              <span>© {currentYear} Soranny.</span>
              <span className="hidden md:inline">Todos los derechos reservados.</span>
            </div>

            {/* Hecho con amor */}
            <div className="flex items-center gap-2">
              <span>Hecho con</span>
              <Heart className="text-red-500 animate-pulse" size={16} fill="currentColor" />
              <span>y mucho</span>
              <Coffee className="text-yellow-500" size={16} />
            </div>
          </div>
        </div>

        {/* Mensaje adicional */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-xs">
            Desarrollando el futuro, un pixel a la vez ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;