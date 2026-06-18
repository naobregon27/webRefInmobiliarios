import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: '¿Necesito un código para registrarme?',
    a: 'Sí. REFERIX funciona por organizaciones. Necesitás un código de invitación de 6 caracteres que te da el administrador de tu empresa u organización.',
  },
  {
    q: '¿Solo es para inmobiliarias?',
    a: 'No. Aunque nació en el sector inmobiliario, REFERIX se adapta a cualquier rubro que trabaje con referidos: seguros, servicios, comercios, redes de distribución y más.',
  },
  {
    q: '¿Cómo se acreditan los puntos y estrellas?',
    a: 'Automáticamente cuando tu organización cambia el estado del referido (aprobado, potencial o comprado). Recibirás una notificación en el momento.',
  },
  {
    q: '¿Puedo usar Apple o Google para iniciar sesión?',
    a: 'Sí. La app soporta Sign in with Apple (iOS) y Sign in with Google. Igual necesitás el código de invitación de tu organización al registrarte.',
  },
  {
    q: '¿Para qué sirve mi código QR?',
    a: 'Para que otros descarguen REFERIX y se registren vinculados a vos y a tu organización. También participás de sorteos por invitar personas.',
  },
  {
    q: '¿Qué pasa si mi canje es rechazado?',
    a: 'Los puntos o estrellas se devuelven automáticamente a tu saldo. Podés ver el estado en la pestaña Mis Canjes.',
  },
  {
    q: '¿En qué dispositivos funciona?',
    a: 'iOS (iPhone y iPad) y Android. Requiere conexión a internet para la mayoría de las funciones.',
  },
  {
    q: '¿Cómo contacto soporte?',
    a: 'Podés escribirnos por email o WhatsApp. Nuestro equipo responde en 24–48 horas hábiles, de lunes a viernes de 9:00 a 18:00 (hora Argentina).',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

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

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-white pr-4">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-referix-cyan flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-5 pb-5 text-slate-400 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
