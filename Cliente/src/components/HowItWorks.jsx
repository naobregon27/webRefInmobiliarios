import { motion } from 'framer-motion';
import { Download, UserPlus, TrendingUp, Gift } from 'lucide-react';

const steps = [
  {
    icon: Download,
    number: '01',
    title: 'Descargá la App',
    description: 'Instalá gratis desde Play Store o App Store. Registrate en menos de 2 minutos.',
    color: 'from-cyan-400 to-blue-500',
    image: '/app-icon-4.jpg',
  },
  {
    icon: UserPlus,
    number: '02',
    title: 'Referí Clientes',
    description: 'Agregá tus contactos interesados en inmuebles. Cada cliente suma puntos automáticamente.',
    color: 'from-purple-400 to-pink-500',
    image: '/app-icon-2.jpg',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Ganá Puntos y Estrellas',
    description: 'Por clientes aprobados y ventas cerradas. Sistema multiplicador 3x en propiedades premium.',
    color: 'from-green-400 to-emerald-500',
    image: '/app-loading.jpg',
  },
  {
    icon: Gift,
    number: '04',
    title: 'Canjeá Premios',
    description: 'Convertí tus puntos en premios reales. Viajes, tecnología, experiencias y más.',
    color: 'from-amber-400 to-orange-500',
    image: '/app-icon-3.jpg',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 font-semibold mb-4"
          >
            Proceso Simple
          </motion.span>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            ¿Cómo{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Funciona?
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            En 4 simples pasos comenzás a generar ingresos con tu red de contactos.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-32">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
              >
                {/* Content side */}
                <div className="flex-1 space-y-6">
                  {/* Number badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: index * 0.2 + 0.3 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg`}
                  >
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-slate-400 leading-relaxed max-w-md">
                    {step.description}
                  </p>

                  {/* Icon decoration */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} shadow-2xl`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Features list */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    {index === 0 && (
                      <>
                        <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">Gratis</span>
                        <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">iOS & Android</span>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm">Sin límites</span>
                        <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm">Fácil y rápido</span>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm">Automático</span>
                        <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm">En tiempo real</span>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm">Premios reales</span>
                        <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm">Variedad</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Image side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotateY: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                  className="flex-1 relative"
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-30 blur-3xl`} />
                  
                  {/* Image container */}
                  <div className="relative">
                    <motion.img
                      src={step.image}
                      alt={step.title}
                      className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl"
                      whileHover={{ scale: 1.05, rotateZ: 2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />

                    {/* Floating badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                      className={`absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-br ${step.color} rounded-full shadow-xl`}
                    >
                      <p className="text-white font-bold">Paso {index + 1}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Connection lines (decorative) */}
        <div className="absolute left-1/2 top-1/4 bottom-1/4 w-0.5 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent hidden lg:block" />
      </div>
    </section>
  );
};

export default HowItWorks;
