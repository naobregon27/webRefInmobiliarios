import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <img src="/favicon.jpg" alt="Logo" className="w-12 h-12 rounded-xl" />
              <div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Referí y Ganá
                </h3>
                <p className="text-xs text-slate-400">Inmobiliario</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Convertí tus contactos en oportunidades reales. Sistema de referidos con gamificación y premios exclusivos.
            </p>
            {/* Social media */}
            <div className="flex gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-white/10 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-white/10 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-white/10 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-white/10 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Product links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 text-cyan-400">Producto</h4>
            <ul className="space-y-3">
              {['Características', 'Cómo Funciona', 'Precios', 'Descargar App', 'Testimonios'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-cyan-400">Compañía</h4>
            <ul className="space-y-3">
              {['Sobre Nosotros', 'Blog', 'Prensa', 'Carreras', 'Contacto'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 text-cyan-400">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-400">Email</p>
                  <a href="mailto:info@referiygana.com" className="text-white hover:text-cyan-400 transition-colors">
                    info@referiygana.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-400">Teléfono</p>
                  <a href="tel:+5491112345678" className="text-white hover:text-cyan-400 transition-colors">
                    +54 9 11 1234-5678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-400">Ubicación</p>
                  <p className="text-white">Buenos Aires, Argentina</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Referí y Ganá. Todos los derechos reservados.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-50" />
    </footer>
  );
};

export default Footer;
