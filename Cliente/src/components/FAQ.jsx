import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQAccordion from './FAQAccordion';
import { flatFaqs } from '../data/faqs';
import { LEGAL_LINKS } from '../data/site';

const FAQ = () => {
  return (
    <section id="faq" className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge bg-purple-500/10 border-purple-500/30 text-purple-400 mb-4">
            <HelpCircle className="w-4 h-4" />
            Soporte
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Preguntas{' '}
            <span className="referix-gradient-text">frecuentes</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Todo lo que necesitás saber antes de empezar a referir con REFERIX.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={flatFaqs} />
          <p className="text-center text-slate-500 text-sm mt-8">
            ¿No encontrás tu respuesta?{' '}
            <Link to={LEGAL_LINKS.support} className="text-referix-cyan hover:underline">
              Visitá nuestro centro de soporte
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
