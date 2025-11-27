import { useState } from "react";
import GlassCard from "./GlassCard";
import { 
  Mail, Phone, MapPin, Github, Linkedin, 
  Instagram, Send, MessageCircle, CheckCircle2, 
  AlertCircle, Loader2 
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateEmail = (email: string) => {
    if (!email) return "El correo es requerido";
    if (!email.includes("@") || !email.includes(".")) {
      return "El correo debe contener @ y un dominio válido";
    }
    return "";
  };

  const validatePhone = (phone: string) => {
    if (!phone) return "El teléfono es requerido";
    if (!/^[0-9]{10,}$/.test(phone)) {
      return "Debe tener mínimo 10 números";
    }
    return "";
  };

  const validateName = (name: string) => {
    if (!name.trim()) return "El nombre es requerido";
    if (name.trim().length < 2) return "El nombre debe tener al menos 2 caracteres";
    return "";
  };

  const validateMessage = (message: string) => {
    if (!message.trim()) return "El mensaje es requerido";
    if (message.trim().length < 10) return "El mensaje debe tener al menos 10 caracteres";
    return "";
  };

  const handleSubmit = async () => {
    // Validar todos los campos
    const nameError = validateName(form.name);
    const emailError = validateEmail(form.email);
    const phoneError = validatePhone(form.phone);
    const messageError = validateMessage(form.message);

    if (nameError || emailError || phoneError || messageError) {
      setErrors({ 
        name: nameError, 
        email: emailError, 
        phone: phoneError,
        message: messageError 
      });
      return;
    }

    // Simular envío
    setStatus("sending");
    
    try {
      // Aquí iría tu lógica de envío real (API, emailjs, etc.)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", phone: "", message: "" });
      }, 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "soranny@ejemplo.com",
      href: "mailto:soranny@ejemplo.com"
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+57 300 000 0000",
      href: "tel:+573000000000"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Dosquebradas, Colombia",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/tuusuario",
      color: "hover:text-purple-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/tuusuario",
      color: "hover:text-blue-400"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/573000000000",
      color: "hover:text-green-400"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/tuusuario",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <section id="contacto" className="py-32 relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold">
            Trabajemos{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Juntos
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Conversemos sobre cómo puedo ayudarte
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* INFORMACIÓN DE CONTACTO */}
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Mail className="text-purple-400" />
              Información de Contacto
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition">
                    <item.icon className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="font-semibold hover:text-purple-400 transition"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Redes Sociales */}
            <div className="border-t border-white/10 pt-6">
              <h4 className="text-lg font-semibold mb-4">Sígueme en:</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:scale-110 transition ${social.color} group`}
                    aria-label={social.label}
                  >
                    <social.icon className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Info adicional */}
            <div className="mt-8 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
              <p className="text-sm text-gray-300">
                💼 <span className="font-semibold">Disponibilidad:</span> Abierta a proyectos freelance y oportunidades a tiempo completo
              </p>
            </div>
          </GlassCard>

          {/* FORMULARIO */}
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold mb-6">Envíame un Mensaje</h3>

            {/* Mensajes de estado */}
            {status === "sent" && (
              <div className="p-4 bg-green-500/20 border border-green-500 rounded-xl text-green-300 mb-6 flex items-center gap-2 animate-fade-in">
                <CheckCircle2 size={20} />
                ¡Mensaje enviado exitosamente! Te responderé pronto.
              </div>
            )}

            {status === "error" && (
              <div className="p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-300 mb-6 flex items-center gap-2 animate-fade-in">
                <AlertCircle size={20} />
                Hubo un error al enviar el mensaje. Intenta nuevamente.
              </div>
            )}

            <div className="space-y-5">

              {/* Nombre */}
              <div>
                <label className="block mb-2 font-medium">
                  Nombre <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    setErrors({ ...errors, name: "" });
                  }}
                  className="w-full p-3 bg-white/10 rounded-xl border border-white/20 focus:border-purple-400 transition outline-none"
                  placeholder="Tu nombre completo"
                  disabled={status === "sending"}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    setErrors({ ...errors, email: "" });
                  }}
                  className="w-full p-3 bg-white/10 rounded-xl border border-white/20 focus:border-purple-400 transition outline-none"
                  placeholder="tu@email.com"
                  disabled={status === "sending"}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <label className="block mb-2 font-medium">
                  Teléfono <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => {
                    if (/^[0-9]*$/.test(e.target.value)) {
                      setForm({ ...form, phone: e.target.value });
                      setErrors({ ...errors, phone: "" });
                    }
                  }}
                  className="w-full p-3 bg-white/10 rounded-xl border border-white/20 focus:border-purple-400 transition outline-none"
                  placeholder="10 o más números"
                  disabled={status === "sending"}
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Mensaje */}
              <div>
                <label className="block mb-2 font-medium">
                  Mensaje <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    setErrors({ ...errors, message: "" });
                  }}
                  className="w-full p-3 bg-white/10 rounded-xl border border-white/20 focus:border-purple-400 transition outline-none resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  disabled={status === "sending"}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Botón de envío */}
              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center gap-2 hover:from-purple-500 hover:to-pink-500 transition shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} /> Enviar Mensaje
                  </>
                )}
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;