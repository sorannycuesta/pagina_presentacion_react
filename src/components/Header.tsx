import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Detectar sección activa
      const sections = ["inicio", "sobre-mí", "proyectos", "contacto"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { id: "inicio", label: "Inicio" },
    { id: "sobre-mí", label: "Sobre Mí" },
    { id: "proyectos", label: "Proyectos" },
    { id: "contacto", label: "Contacto" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 
          ? "bg-slate-950/80 backdrop-blur-xl shadow-2xl border-b border-white/10" 
          : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("inicio")}
          className="text-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
          aria-label="Ir al inicio"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg rotate-45 shadow-lg shadow-purple-500/50" />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Soranny
          </span>
        </button>

        {/* Navegación Desktop */}
        <nav className="hidden md:block" aria-label="Navegación principal">
          <ul className="flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-300 hover:text-white transition-all duration-300 relative py-2 ${
                    activeSection === item.id ? "text-white font-semibold" : ""
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botón menú móvil */}
        <button
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <nav 
          className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10"
          aria-label="Navegación móvil"
        >
          <ul className="px-6 py-6 space-y-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`block text-gray-300 py-2 text-lg transition w-full text-left ${
                    activeSection === item.id 
                      ? "text-white font-semibold pl-4 border-l-2 border-purple-400" 
                      : "hover:text-white hover:pl-2"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;