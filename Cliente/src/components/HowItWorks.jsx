import { motion } from 'framer-motion';
import { Download, UserPlus, TrendingUp, Gift } from 'lucide-react';

const steps = [
  {
    icon: Download,
    number: '01',
    title: 'Descargá y registrate',
    description: 'Instalá REFERIX gratis desde App Store o Google Play. Registrate con el código de invitación de tu organización.',
    color: 'from-referix-cyan to-referix-blue',
    image: '/1000738866.jpg',
    tags: ['Gratis', 'Apple & Google', 'Código de 6 dígitos'],
  },
  {
    icon: UserPlus,
    number: '02',
    title: 'Referí contactos',
    description: 'Cargá clientes interesados en los productos o servicios de tu organización. Vinculá el ítem del catálogo y agregá notas.',
    color: 'from-purple-400 to-pink-500',
    image: '/1000738867.jpg',
    tags: ['Sin límites', 'QR y escaneo', 'Pipeline visual'],
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Ganá puntos y estrellas',
    description: 'Cada avance de tus referidos te suma recompensas automáticamente. Seguí el ranking y los desafíos semanales.',
    color: 'from-referix-lime to-green-500',
    image: '/1000738868.jpg',
    tags: ['Automático', 'Notificaciones', 'Ranking'],
  },
  {
    icon: Gift,
    number: '04',
    title: 'Canjeá premios',
    description: 'Convertí tus puntos y estrellas en premios reales: tecnología, viajes, experiencias y más.',
    color: 'from-amber-400 to-orange-500',
    image: '/1000738869.jpg',
    tags: ['Premios reales', 'Logros', 'Racha semanal'],
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-referix-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-referix-lime/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="section-badge bg-referix-blue/10 border-referix-blue/30 text-referix-cyan mb-4">
            En 4 pasos
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            ¿Cómo{' '}
            <span className="referix-gradient-text">funciona?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Simple, rápido y motivador. Empezá a referir en menos de 2 minutos.
          </p>
        </motion.div>

        <div className="space-y-24 lg:space-y-32">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-20`}
              >
                <div className="flex-1 space-y-5">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color}`}
                  >
                    <span className="text-xl font-black text-white">{step.number}</span>
                  </motion.div>

                  <h3 className="text-3xl lg:text-4xl font-black text-white">{step.title}</h3>
                  <p className="text-lg text-slate-400 leading-relaxed max-w-md">{step.description}</p>

                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} shadow-xl`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.85, rotateY: isEven ? -15 : 15 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 blur-3xl rounded-full`} />
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="relative max-w-xs mx-auto"
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full rounded-3xl shadow-2xl referix-glow"
                    />
                    <div className={`absolute -top-3 -right-3 px-4 py-1.5 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-bold shadow-lg`}>
                      Paso {index + 1}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
