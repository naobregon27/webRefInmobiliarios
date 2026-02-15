import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const screenshots = [
  {
    image: '/app-icon-1.jpg',
    title: 'Dashboard Principal',
    description: 'Mirá tus puntos, estrellas y progreso en tiempo real',
  },
  {
    image: '/app-icon-2.jpg',
    title: 'Sistema de Referidos',
    description: 'Gestioná todos tus clientes desde un solo lugar',
  },
  {
    image: '/app-icon-3.jpg',
    title: 'Perfil y Estadísticas',
    description: 'Seguí tu performance y mejorá constantemente',
  },
  {
    image: '/app-loading.jpg',
    title: 'Progreso en Tiempo Real',
    description: 'Visualizá el avance de cada cliente',
  },
  {
    image: '/app-icon-4.jpg',
    title: 'Notificaciones',
    description: 'Mantenete informado de cada logro',
  },
];

const Screenshots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 font-semibold mb-4"
          >
            Interfaz Intuitiva
          </motion.span>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Diseño{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Profesional
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Una experiencia visual moderna y fácil de usar. Todo al alcance de tu mano.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            {/* Prev button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="hidden md:flex w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center text-white transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Screenshots container */}
            <div className="flex-1 relative overflow-hidden">
              <div className="flex items-center justify-center gap-6 px-4">
                {/* Previous image (blurred) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 0.3, scale: 0.7 }}
                  className="hidden lg:block flex-shrink-0"
                >
                  <img
                    src={screenshots[(currentIndex - 1 + screenshots.length) % screenshots.length].image}
                    alt="Previous"
                    className="w-64 rounded-2xl blur-sm"
                  />
                </motion.div>

                {/* Current image (main) */}
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex-shrink-0 relative"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 blur-3xl" />
                  
                  <img
                    src={screenshots[currentIndex].image}
                    alt={screenshots[currentIndex].title}
                    className="w-80 lg:w-96 rounded-3xl shadow-2xl shadow-cyan-500/50 relative z-10"
                  />

                  {/* Info card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-11/12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center"
                  >
                    <h3 className="text-white font-bold text-lg mb-1">
                      {screenshots[currentIndex].title}
                    </h3>
                    <p className="text-slate-300 text-sm">
                      {screenshots[currentIndex].description}
                    </p>
                  </motion.div>
                </motion.div>

                {/* Next image (blurred) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 0.3, scale: 0.7 }}
                  className="hidden lg:block flex-shrink-0"
                >
                  <img
                    src={screenshots[(currentIndex + 1) % screenshots.length].image}
                    alt="Next"
                    className="w-64 rounded-2xl blur-sm"
                  />
                </motion.div>
              </div>
            </div>

            {/* Next button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="hidden md:flex w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center text-white transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-20">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-cyan-500 to-blue-500'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Mobile navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
