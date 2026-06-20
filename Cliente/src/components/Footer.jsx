import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { images } from '../data/images';
import { SITE, LEGAL_LINKS } from '../data/site';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { label: 'Funcionalidades', href: '/#features' },
    { label: 'Rubros', href: '/#industries' },
    { label: 'Premios', href: '/#rewards' },
    { label: 'Cómo funciona', href: '/#how-it-works' },
    { label: 'Descargar', href: '/#download' },
  ];

  const legalLinks = [
    { label: 'Política de Privacidad', to: LEGAL_LINKS.privacy },
    { label: 'Términos y Condiciones', to: LEGAL_LINKS.terms },
    { label: 'Soporte', to: LEGAL_LINKS.support },
  ];

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px referix-gradient" />

      {/* Legal links bar — visible for Apple reviewers */}
      <div className="border-b border-white/10 bg-slate-900/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            {legalLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-slate-300 hover:text-referix-cyan font-medium transition-colors underline-offset-4 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link to="/" className="flex items-center gap-3">
              <OptimizedImage src={images.logo} alt="REFERIX" className="w-12 h-12 object-contain" width={128} height={128} />
              <div>
                <h3 className="text-2xl font-black referix-gradient-text">REFERIX</h3>
                <p className="text-xs text-slate-500">{SITE.tagline}</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Plataforma de referidos con gamificación para tu organización.
            </p>
            <p className="text-slate-500 text-xs">
              Empresa: {SITE.company}
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
            <h4 className="text-sm font-bold mb-5 text-referix-cyan uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
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
                <a href={`mailto:${SITE.email}`} className="text-slate-400 hover:text-white text-sm transition-colors break-all">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-referix-cyan mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  {SITE.phones.map((phone) => (
                    <a key={phone.tel} href={`tel:${phone.tel}`} className="block text-slate-400 hover:text-white text-sm transition-colors">
                      {phone.display}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-referix-cyan mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">{SITE.location}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} {SITE.company}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {legalLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-slate-400 hover:text-referix-cyan transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
