import { motion } from 'framer-motion';
import { Apple, Smartphone, Star, CheckCircle2 } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { images } from '../data/images';

const DownloadCTA = () => {
  return (
    <section id="download" className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-referix-lime/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-referix-blue/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring' }}
            className="flex justify-center"
          >
            <OptimizedImage
              src={images.logoLg}
              alt="REFERIX"
              className="w-24 h-24 object-contain"
              width={256}
              height={256}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-white"
          >
            Empezá a referir{' '}
            <span className="referix-gradient-text">hoy mismo</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-xl mx-auto"
          >
            Descargá REFERIX gratis. Pedile el código de invitación a tu administrador y registrate en 2 minutos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 py-4"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-referix-lime text-referix-lime" />
              ))}
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Smartphone className="w-5 h-5 text-referix-cyan" />
              iOS y Android
            </div>
            <div className="flex items-center gap-2 text-referix-lime font-semibold">
              100% Gratis
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 rounded-2xl text-gray-900 shadow-xl transition-colors"
            >
              <Apple className="w-8 h-8" />
              <div className="text-left">
                <p className="text-xs text-gray-500">Descargar en</p>
                <p className="text-lg font-bold">App Store</p>
              </div>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 rounded-2xl text-gray-900 shadow-xl transition-colors"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <p className="text-xs text-gray-500">Disponible en</p>
                <p className="text-lg font-bold">Google Play</p>
              </div>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-slate-400"
          >
            {['Sin costos ocultos', 'Registro en 2 minutos', 'Soporte dedicado'].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-referix-lime" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
