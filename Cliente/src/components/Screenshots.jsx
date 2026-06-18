import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import OptimizedImage from './OptimizedImage';
import { screenshots as screenshotData, images } from '../data/images';

const Screenshots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshotData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % screenshotData.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + screenshotData.length) % screenshotData.length);

  return (
    <section id="screenshots" className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.1),_transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge bg-referix-cyan/10 border-referix-cyan/30 text-referix-cyan mb-4">
            La app en acción
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Diseño{' '}
            <span className="referix-gradient-text">premium</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Interfaz moderna, oscura y elegante. Todo al alcance de tu mano.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="hidden md:flex w-12 h-12 glass-card items-center justify-center text-white"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex-1 relative min-h-[520px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.85, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.85, x: -50 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="relative"
                >
                  <div className="absolute inset-0 referix-gradient opacity-20 blur-3xl" />
                  <OptimizedImage
                    src={screenshotData[currentIndex].image}
                    alt={screenshotData[currentIndex].title}
                    className="w-72 lg:w-80 rounded-3xl shadow-2xl referix-glow relative z-10 mx-auto"
                    width={400}
                    height={800}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-11/12 glass-card p-4 text-center z-20"
                  >
                    <h3 className="text-white font-bold">{screenshotData[currentIndex].title}</h3>
                    <p className="text-slate-400 text-sm">{screenshotData[currentIndex].description}</p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="hidden md:flex w-12 h-12 glass-card items-center justify-center text-white"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="flex justify-center gap-2 mt-16 flex-wrap">
            {screenshotData.map((shot, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-2 ring-referix-cyan scale-110'
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <OptimizedImage
                  src={shot.thumb}
                  alt=""
                  className="w-12 h-20 object-cover object-top"
                  width={96}
                  height={160}
                />
              </button>
            ))}
          </div>

          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button onClick={prevSlide} className="w-12 h-12 glass-card flex items-center justify-center">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 glass-card flex items-center justify-center">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <OptimizedImage
            src={images.promoBanner}
            alt="Referí y ganá con REFERIX"
            className="w-full rounded-2xl referix-glow"
            width={1000}
            height={500}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Screenshots;
