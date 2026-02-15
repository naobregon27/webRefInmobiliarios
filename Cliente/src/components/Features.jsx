import { motion } from 'framer-motion';
import { Trophy, Target, Zap, BarChart3, Gift, Star, Users, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Trophy,
    title: 'Sistema de Gamificación',
    description: 'Ganá puntos por cada cliente y estrellas por ventas cerradas. Sistema de recompensas motivante y justo.',
    gradient: 'from-yellow-400 to-orange-500',
    delay: 0.1,
  },
  {
    icon: Target,
    title: 'Seguimiento en Tiempo Real',
    description: 'Mirá el estado de tus clientes en cada momento. Notificaciones instantáneas de cada avance.',
    gradient: 'from-cyan-400 to-blue-500',
    delay: 0.2,
  },
  {
    icon: Gift,
    title: 'Premios Exclusivos',
    description: 'Canjeá tus puntos por premios reales. Catálogo actualizado con opciones para todos.',
    gradient: 'from-purple-400 to-pink-500',
    delay: 0.3,
  },
  {
    icon: BarChart3,
    title: 'Dashboard Completo',
    description: 'Estadísticas detalladas de tu performance. Visualizá tu progreso y mejorá tus resultados.',
    gradient: 'from-green-400 to-emerald-500',
    delay: 0.4,
  },
  {
    icon: Star,
    title: 'Multiplicador 3x',
    description: 'Inmuebles del agente valen triple. Maximizá tus ganancias con propiedades premium.',
    gradient: 'from-amber-400 to-yellow-500',
    delay: 0.5,
  },
  {
    icon: Users,
    title: 'Gestión de Clientes',
    description: 'Agregá y gestioná todos tus contactos fácilmente. Sistema organizado y profesional.',
    gradient: 'from-indigo-400 to-purple-500',
    delay: 0.6,
  },
  {
    icon: Zap,
    title: 'Notificaciones Inteligentes',
    description: 'Recibí alertas de cada logro. Mantenete siempre informado sin perder oportunidades.',
    gradient: 'from-rose-400 to-red-500',
    delay: 0.7,
  },
  {
    icon: Smartphone,
    title: 'iOS y Android',
    description: 'Disponible en ambas plataformas. Experiencia optimizada para cualquier dispositivo.',
    gradient: 'from-teal-400 to-cyan-500',
    delay: 0.8,
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 font-semibold mb-4"
          >
            ¿Por qué elegirnos?
          </motion.span>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Herramientas{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Profesionales
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Todo lo que necesitás para maximizar tus referidos y convertirlos en ventas exitosas.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.delay }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-6 right-6 text-cyan-400"
                >
                  →
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-16"
        >
          <p className="text-slate-300 text-lg mb-6">
            ¿Listo para comenzar a ganar?
          </p>
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-full font-semibold text-white text-lg shadow-2xl shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
          >
            Descargar Gratis
            <Zap className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
