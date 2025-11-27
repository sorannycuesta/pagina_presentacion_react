import GlassCard from "./GlassCard";

const ProfilePhoto = () => {
  return (
    <div className="relative">
      {/* Círculos decorativos de fondo */}
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse" />
      
      {/* Contenedor de la foto */}
      <GlassCard className="relative p-2 w-80 h-80 mx-auto rounded-full overflow-hidden flex items-center justify-center border-4 border-white/20 shadow-2xl">
        <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center">
          <img
            src="/mi-foto.jpg"
            alt="Soranny - Desarrolladora Frontend"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              // Fallback si la imagen no carga
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              if (target.parentElement) {
                target.parentElement.innerHTML = `
                  <div class="w-full h-full flex items-center justify-center text-6xl">
                    👩‍💻
                  </div>
                `;
              }
            }}
          />
        </div>
      </GlassCard>

      {/* Puntos decorativos flotantes */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-pink-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }} />
    </div>
  );
};

export default ProfilePhoto;