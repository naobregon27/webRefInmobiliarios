import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Gift, Star, QrCode } from 'lucide-react';

const highlights = [
  { icon: TrendingUp, label: 'Puntos y estrellas', sub: 'Por cada avance' },
  { icon: Gift, label: 'Premios reales', sub: 'Canjeables ya' },
  { icon: QrCode, label: 'Tu QR personal', sub: 'Invitá y crecé' },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Animated mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(163,230,53,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(37,99,235,0.2),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.08),_transparent_70%)]" />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-referix-lime/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-referix-blue/20 rounded-full blur-3xl"
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? '#a3e635' : i % 3 === 1 ? '#22d3ee' : '#2563eb',
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-badge bg-referix-lime/10 border-referix-lime/30 text-referix-lime"
            >
              <Sparkles className="w-4 h-4" />
              <span>Plataforma de referidos con gamificación</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] text-balance"
            >
              Referí clientes,{' '}
              <span className="referix-gradient-text bg-[length:300%_auto] animate-gradient-x">
                ganá premios reales
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl"
            >
              REFERIX es la plataforma de referidos de tu organización. Cargá contactos,
              seguí su avance, sumá puntos y estrellas, y canjealos por premios exclusivos.
              Ideal para <strong className="text-white">inmobiliarias</strong> y{' '}
              <strong className="text-white">cualquier rubro</strong> que trabaje con referidos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-3 px-4 py-3 glass-card"
                  >
                    <div className="w-10 h-10 rounded-xl referix-gradient flex items-center justify-center">
                      <Icon className="w-5 h-5 text-slate-950" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.label}</p>
                      <p className="text-xs text-slate-400">{item.sub}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#download" className="btn-primary group">
                Descargar gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#how-it-works" className="btn-secondary">
                Ver cómo funciona
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 pt-2"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-referix-lime text-referix-lime" />
                ))}
                <span className="ml-2 text-sm text-slate-300">Gamificación probada</span>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <p className="text-sm text-slate-400">
                iOS · Android · Branding por organización
              </p>
            </motion.div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 referix-gradient opacity-20 blur-3xl rounded-full" />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <img
                src="/ChatGPT Image 11 jun 2026, 19_58_53.png"
                alt="REFERIX — App de referidos"
                className="w-full max-w-lg mx-auto rounded-2xl referix-glow"
              />
            </motion.div>

            {/* Floating notification cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, type: 'spring' }}
              className="absolute -left-4 lg:-left-8 top-16 glass-card p-4 shadow-2xl"
            >
              <p className="text-referix-lime font-bold">+100 pts</p>
              <p className="text-white/70 text-xs">¡Compra concretada!</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, type: 'spring' }}
              className="absolute -right-4 lg:-right-8 bottom-24 glass-card p-4 shadow-2xl"
            >
              <p className="text-referix-cyan font-bold">⭐ +3 estrellas</p>
              <p className="text-white/70 text-xs">Lead potencial</p>
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-6 right-8 w-16 h-16 opacity-60"
            >
              <img src="/referix-logo.png" alt="" className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 referix-gradient rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
