import { motion } from 'framer-motion';
import {
  Trophy, Target, Gift, BarChart3, Star, Users, Zap, Smartphone,
  QrCode, Bell, Palette, TrendingUp,
} from 'lucide-react';

const features = [
  {
    icon: Trophy,
    title: 'Gamificación completa',
    description: 'Puntos por cada avance, estrellas por logros premium y ranking para competir con tu equipo.',
    gradient: 'from-referix-lime to-referix-cyan',
  },
  {
    icon: Target,
    title: 'Pipeline de referidos',
    description: 'Seguí cada contacto: revisión, aprobado, potencial, compra. Notificaciones en tiempo real.',
    gradient: 'from-referix-cyan to-referix-blue',
  },
  {
    icon: Gift,
    title: 'Catálogo de premios',
    description: 'Canjeá puntos y estrellas por premios reales configurados por tu organización.',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    icon: BarChart3,
    title: 'Dashboard inteligente',
    description: 'Resumen de puntos, estrellas, clientes, desafíos semanales y feed de actividad.',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    icon: Star,
    title: 'Ranking y competencias',
    description: 'Medí tu desempeño frente a otros referidos. Campañas temporales con premios extra.',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    icon: QrCode,
    title: 'QR personal',
    description: 'Compartí tu código QR para invitar personas y sumarlas a tu red de referidos.',
    gradient: 'from-indigo-400 to-purple-500',
  },
  {
    icon: Bell,
    title: 'Notificaciones push',
    description: 'Avisos instantáneos de cambios de estado, puntos otorgados y nuevos premios.',
    gradient: 'from-rose-400 to-red-500',
  },
  {
    icon: Palette,
    title: 'Branding dinámico',
    description: 'Logo, colores, catálogo y premios personalizados para cada organización.',
    gradient: 'from-teal-400 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Gestión de clientes',
    description: 'Búsqueda, filtros, notas, documentos y recordatorios de seguimiento.',
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    icon: TrendingUp,
    title: 'Estadísticas y logros',
    description: 'KPIs personales, gráficos mensuales e insignias por hitos alcanzados.',
    gradient: 'from-referix-lime to-green-500',
  },
  {
    icon: Zap,
    title: 'Desafíos semanales',
    description: 'Metas de referidos para mantener el engagement y la racha activa.',
    gradient: 'from-yellow-400 to-amber-500',
  },
  {
    icon: Smartphone,
    title: 'iOS y Android',
    description: 'Sign in with Apple y Google. Experiencia optimizada en cualquier dispositivo.',
    gradient: 'from-referix-cyan to-referix-deep',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-referix-cyan rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-referix-lime rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge bg-referix-lime/10 border-referix-lime/30 text-referix-lime mb-4">
            Todo incluido
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Funcionalidades{' '}
            <span className="referix-gradient-text">profesionales</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Una app completa para referir, seguir, competir y canjear. Diseñada para motivar a tu red.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 4) * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group glass-card p-6 hover:border-referix-cyan/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-referix-cyan transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="#download" className="btn-primary">
            Empezá gratis hoy
            <Zap className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
