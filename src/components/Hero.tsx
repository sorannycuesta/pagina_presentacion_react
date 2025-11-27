import { useEffect, useState } from "react";
import ProfilePhoto from "./ProfilePhoto";
import { Award, Users, Coffee, Rocket, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-28 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Texto */}
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-4">
            ✨ Disponible para proyectos
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-gray-400 block mb-2">Hola, soy</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Soranny
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
            Desarrolladora{" "}
            <span className="text-purple-400 font-semibold">Frontend</span>{" "}
            apasionada por crear experiencias digitales únicas. 
            Transformo ideas en interfaces modernas, rápidas y funcionales.
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("#proyectos")}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center gap-3 hover:scale-105 transition-transform shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
            >
              <Rocket size={20} /> Ver Proyectos
            </button>

            <button
              onClick={() => scrollTo("#contacto")}
              className="px-8 py-4 bg-white/10 border border-white/20 rounded-full flex items-center gap-3 hover:bg-white/20 transition backdrop-blur-sm"
            >
              <Mail size={20} /> Contactar
            </button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-6 pt-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { icon: Award, value: "15+", label: "Proyectos" },
              { icon: Users, value: "10+", label: "Clientes" },
              { icon: Coffee, value: "2+", label: "Años Exp." },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="text-center group hover:scale-110 transition-transform cursor-default"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition">
                  <stat.icon className="mx-auto text-purple-400 mb-2 group-hover:scale-110 transition-transform" size={28} />
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOTO CIRCULAR */}
        <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <ProfilePhoto />
        </div>
      </div>

      {/* Indicador de scroll */}
      <button
        onClick={() => scrollTo("#sobre-mí")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hover:scale-110 transition-transform"
        aria-label="Desplazarse hacia abajo"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition">
          <span className="text-sm">Desliza</span>
          <ArrowDown size={24} />
        </div>
      </button>
    </section>
  );
};

export default Hero;