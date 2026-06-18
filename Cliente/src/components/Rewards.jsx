import { motion } from 'framer-motion';
import { Coins, Star, Plane, Tv, Gift } from 'lucide-react';

const pointRewards = [
  { event: 'Lead aprobado', points: '+10', color: 'text-referix-cyan' },
  { event: 'Lead potencial confirmado', points: '+25', color: 'text-referix-lime' },
  { event: 'Compra concretada', points: '+100', color: 'text-amber-400' },
];

const starRewards = [
  { event: 'Lead potencial confirmado', stars: '+1 ⭐', color: 'text-referix-cyan' },
  { event: 'Compra — producto del agente', stars: '+3 ⭐', color: 'text-referix-lime' },
  { event: 'Compra — producto de la empresa', stars: '+1 ⭐', color: 'text-amber-400' },
];

const prizeExamples = [
  { icon: Gift, name: 'Beneficios diarios', type: 'Puntos', image: '/1000738879.jpg' },
  { icon: Tv, name: 'Smart TV y tecnología', type: 'Estrellas', image: '/1000738880.jpg' },
  { icon: Plane, name: 'Viajes y experiencias', type: 'Estrellas', image: '/1000738881.jpg' },
];

const Rewards = () => {
  return (
    <section id="rewards" className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(163,230,53,0.08),_transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge bg-amber-500/10 border-amber-500/30 text-amber-400 mb-4">
            Sistema de recompensas
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Cada referido{' '}
            <span className="referix-gradient-text">te suma premios</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Puntos para canjes diarios. Estrellas para los premios top. Todo automático cuando tus referidos avanzan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Puntos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-referix-cyan to-referix-blue flex items-center justify-center">
                <Coins className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Puntos</h3>
                <p className="text-slate-400 text-sm">Moneda principal para canjes</p>
              </div>
            </div>
            <div className="space-y-4">
              {pointRewards.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5"
                >
                  <span className="text-slate-300">{item.event}</span>
                  <span className={`font-black text-xl ${item.color}`}>{item.points}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Estrellas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-referix-lime to-amber-500 flex items-center justify-center">
                <Star className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Estrellas</h3>
                <p className="text-slate-400 text-sm">Moneda premium para premios top</p>
              </div>
            </div>
            <div className="space-y-4">
              {starRewards.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5"
                >
                  <span className="text-slate-300 text-sm">{item.event}</span>
                  <span className={`font-black text-lg ${item.color}`}>{item.stars}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Prize examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Ejemplos de premios en el catálogo
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {prizeExamples.map((prize, i) => {
              const Icon = prize.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="group glass-card overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={prize.image}
                      alt={prize.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-referix-lime/20 text-referix-lime border border-referix-lime/30">
                      {prize.type}
                    </span>
                  </div>
                  <div className="p-5 flex items-center gap-3">
                    <Icon className="w-5 h-5 text-referix-cyan" />
                    <span className="font-semibold text-white">{prize.name}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <p className="text-center text-slate-500 text-sm mt-6">
            Los premios y valores los define tu organización dentro de la app.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Rewards;
