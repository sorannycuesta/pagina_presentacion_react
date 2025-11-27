import GlassCard from "./GlassCard";
import { Sparkles, Star, Code2, Heart, Target, Zap } from "lucide-react";
import SkillsGrid from "./SkillsGrid";

const About = () => {
  return (
    <section id="sobre-mí" className="py-32 relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold">
            Sobre{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mí
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Conoce más sobre mi experiencia, pasión y enfoque en el desarrollo web
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {/* Historia principal */}
          <GlassCard className="md:col-span-2 p-8 hover:scale-[1.02] transition-transform">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Sparkles className="text-purple-400" size={26} />
              </div>
              <h3 className="text-2xl font-bold">Mi Historia</h3>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Soy una <span className="text-purple-400 font-semibold">desarrolladora frontend apasionada</span> por 
                crear experiencias digitales que combinen funcionalidad con estética moderna. 
                Mi enfoque está en construir interfaces intuitivas que los usuarios adoren usar.
              </p>

              <p>
                Trabajo principalmente con <span className="text-pink-400 font-semibold">React, TypeScript y TailwindCSS</span>, 
                siguiendo las mejores prácticas y metodologías ágiles. Me especializo en:
              </p>

              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <Code2 className="text-purple-400 mt-1 flex-shrink-0" size={18} />
                  <span>Desarrollo de aplicaciones web responsivas y accesibles</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="text-yellow-400 mt-1 flex-shrink-0" size={18} />
                  <span>Optimización de rendimiento y experiencia de usuario</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="text-pink-400 mt-1 flex-shrink-0" size={18} />
                  <span>Diseño de interfaces atractivas con animaciones fluidas</span>
                </li>
              </ul>

              <p className="pt-4 border-t border-white/10">
                Siempre estoy aprendiendo nuevas tecnologías y buscando 
                <span className="text-purple-400 font-semibold"> desafíos que me impulsen a crecer</span> como desarrolladora.
              </p>
            </div>
          </GlassCard>

          {/* Estadística destacada */}
          <GlassCard className="p-8 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform bg-gradient-to-br from-purple-500/10 to-pink-500/10">
            <div className="mb-4 p-4 bg-yellow-500/20 rounded-full">
              <Star className="text-yellow-400" size={40} />
            </div>
            <h3 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
              98%
            </h3>
            <p className="text-gray-300 font-semibold">Satisfacción</p>
            <p className="text-gray-400 text-sm">del Cliente</p>
          </GlassCard>

          {/* Tarjeta de valores */}
          <GlassCard className="md:col-span-3 p-8 hover:scale-[1.01] transition-transform">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-pink-500/20 rounded-lg">
                <Target className="text-pink-400" size={26} />
              </div>
              <h3 className="text-2xl font-bold">Mi Enfoque</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-semibold text-lg mb-2">Calidad</h4>
                <p className="text-gray-400 text-sm">
                  Código limpio, mantenible y siguiendo las mejores prácticas del sector
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">💡</div>
                <h4 className="font-semibold text-lg mb-2">Innovación</h4>
                <p className="text-gray-400 text-sm">
                  Siempre explorando nuevas tecnologías y tendencias en desarrollo web
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h4 className="font-semibold text-lg mb-2">Colaboración</h4>
                <p className="text-gray-400 text-sm">
                  Trabajo en equipo efectivo y comunicación clara durante todo el proyecto
                </p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Skills Grid */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">
            Habilidades{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Técnicas
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillsGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;