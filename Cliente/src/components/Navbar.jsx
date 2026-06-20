import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { images } from '../data/images';
import { LEGAL_LINKS } from '../data/site';

const homeLinks = [
  { label: 'Funcionalidades', href: '#features' },
  { label: 'Rubros', href: '#industries' },
  { label: 'Premios', href: '#rewards' },
  { label: 'Cómo funciona', href: '#how-it-works' },
  { label: 'App', href: '#screenshots' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const sectionHref = (hash) => (isHome ? hash : `/${hash}`);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-500/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <OptimizedImage
            src={images.logo}
            alt="REFERIX"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
            priority
            width={128}
            height={128}
          />
          <div>
            <span className="text-xl md:text-2xl font-black tracking-tight referix-gradient-text">
              REFERIX
            </span>
            <p className="text-[10px] md:text-xs text-slate-400 -mt-0.5 hidden sm:block">
              Referí · Ganá · Crecé
            </p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {homeLinks.map((link) => (
            <a
              key={link.href}
              href={sectionHref(link.href)}
              className="px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
          <Link
            to={LEGAL_LINKS.support}
            className="px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
          >
            Soporte
          </Link>
        </div>

        <div className="hidden lg:block">
          <a
            href={sectionHref('#download')}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm
              bg-gradient-to-r from-referix-lime via-referix-cyan to-referix-blue text-slate-950
              shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform"
          >
            <Download className="w-4 h-4" />
            Descargar
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 border border-white/10"
          aria-label="Menú"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 space-y-1">
              {homeLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={sectionHref(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <Link
                to={LEGAL_LINKS.support}
                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                Soporte
              </Link>
              <a
                href={sectionHref('#download')}
                onClick={() => setMobileOpen(false)}
                className="block mt-2 text-center btn-primary text-sm py-3"
              >
                Descargar gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
