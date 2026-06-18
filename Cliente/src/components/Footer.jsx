import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { label: 'Funcionalidades', href: '#features' },
    { label: 'Rubros', href: '#industries' },
    { label: 'Premios', href: '#rewards' },
    { label: 'Cómo funciona', href: '#how-it-works' },
    { label: 'Descargar', href: '#download' },
  ];

  const supportLinks = [
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contact' },
    { label: 'Soporte', href: '#contact' },
  ];

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px referix-gradient" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <img src="/referix-logo.png" alt="REFERIX" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-2xl font-black referix-gradient-text">REFERIX</h3>
                <p className="text-xs text-slate-500">Referí · Ganá · Crecé</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              La plataforma de referidos con gamificación para tu organización.
              Puntos, estrellas, premios y ranking en una sola app.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-bold mb-5 text-referix-cyan uppercase tracking-wider">Producto</h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-bold mb-5 text-referix-cyan uppercase tracking-wider">Soporte</h4>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-sm font-bold mb-5 text-referix-cyan uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-referix-cyan mt-0.5 flex-shrink-0" />
                <a href="mailto:lopez.gonza2026@gmail.com" className="text-slate-400 hover:text-white text-sm transition-colors">
                  lopez.gonza2026@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-referix-cyan mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+5493777812165" className="block text-slate-400 hover:text-white text-sm transition-colors">
                    +54 9 3777 812165
                  </a>
                  <a href="tel:+5493777507158" className="block text-slate-400 hover:text-white text-sm transition-colors">
                    +54 9 3777 507158
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-referix-cyan mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Corrientes, Argentina</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} REFERIX. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#faq" className="hover:text-white transition-colors">Términos</a>
            <a href="#faq" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#contact" className="hover:text-white transition-colors">Soporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
