import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactInfo from './ContactInfo';
import SupportForm from './SupportForm';
import { LEGAL_LINKS } from '../data/site';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-referix-cyan/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge bg-referix-lime/10 border-referix-lime/30 text-referix-lime mb-4">
            Estamos para ayudarte
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Contacto y{' '}
            <span className="referix-gradient-text">soporte</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            ¿Tenés dudas? ¿Querés sumar tu organización a REFERIX? Escribinos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <ContactInfo showDeveloper />
          <SupportForm variant="contact" />
        </div>

        <p className="text-center text-slate-500 text-sm mt-10">
          Para soporte técnico detallado visitá{' '}
          <Link to={LEGAL_LINKS.support} className="text-referix-cyan hover:underline">
            referix.netlify.app/support
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Contact;
