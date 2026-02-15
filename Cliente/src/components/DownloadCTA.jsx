import { motion } from 'framer-motion';
import { Apple, Download, Smartphone, Star } from 'lucide-react';

const DownloadCTA = () => {
  return (
    <section id="download" className="relative py-24 bg-gradient-to-br from-slate-900 via-cyan-950 to-blue-950 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Large gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="flex justify-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                <Smartphone className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-white"
            >
              Comenzá a Ganar{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                Hoy Mismo
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Descargá la app gratis y empezá a convertir tus contactos en ingresos reales. Disponible para iOS y Android.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 py-6"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-semibold">4.9/5.0</span>
              </div>
              <div className="h-6 w-px bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-cyan-400">10K+</p>
                <p className="text-sm text-slate-400">Descargas</p>
              </div>
              <div className="h-6 w-px bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-cyan-400">Free</p>
                <p className="text-sm text-slate-400">Gratis</p>
              </div>
            </motion.div>

            {/* Download buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 pt-4"
            >
              {/* App Store Button */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 rounded-2xl font-semibold text-gray-900 shadow-xl transition-all duration-300"
              >
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <p className="text-xs text-gray-600">Descargar en</p>
                  <p className="text-lg font-bold">App Store</p>
                </div>
              </motion.a>

              {/* Google Play Button */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 rounded-2xl font-semibold text-gray-900 shadow-xl transition-all duration-300"
              >
                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-600">Disponible en</p>
                  <p className="text-lg font-bold">Google Play</p>
                </div>
              </motion.a>
            </motion.div>

            {/* QR Code (optional) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-8"
            >
              <p className="text-slate-400 text-sm mb-4">O escaneá el código QR</p>
              <div className="inline-block p-4 bg-white rounded-2xl shadow-2xl">
                <div className="w-32 h-32 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg flex items-center justify-center">
                  <Download className="w-16 h-16 text-slate-600" />
                </div>
              </div>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-6 pt-8 text-slate-400 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Sin costos ocultos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Registro en 2 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Soporte 24/7</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
