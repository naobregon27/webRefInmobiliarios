import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const phones = [
  { number: '+54 9 3777 812165', href: 'tel:+5493777812165' },
  { number: '+54 9 3777 507158', href: 'tel:+5493777507158' },
];

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
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl referix-gradient flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Email</p>
                <a
                  href="mailto:lopez.gonza2026@gmail.com"
                  className="text-white font-semibold hover:text-referix-cyan transition-colors"
                >
                  lopez.gonza2026@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl referix-gradient flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-slate-950" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-2">WhatsApp / Teléfono</p>
                  {phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="block text-white font-semibold hover:text-referix-cyan transition-colors mb-1"
                    >
                      {phone.number}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                {phones.map((phone) => (
                  <motion.a
                    key={phone.href}
                    href={`https://wa.me/${phone.href.replace('tel:', '').replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium hover:bg-green-600/30 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-referix-cyan" />
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Horario de atención</p>
                <p className="text-white font-semibold">Lunes a viernes, 9:00 a 18:00</p>
                <p className="text-slate-500 text-sm">Hora Argentina · Respuesta en 24–48 hs hábiles</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-referix-cyan" />
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Ubicación</p>
                <p className="text-white font-semibold">Corrientes, Argentina</p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              const name = form.name.value;
              const email = form.email.value;
              const org = form.organization.value;
              const message = form.message.value;
              const subject = encodeURIComponent(`Consulta REFERIX - ${name}`);
              const body = encodeURIComponent(
                `Nombre: ${name}\nEmail: ${email}\nOrganización: ${org}\n\n${message}`
              );
              window.location.href = `mailto:lopez.gonza2026@gmail.com?subject=${subject}&body=${body}`;
            }}
            className="glass-card p-8 space-y-5"
          >
            <h3 className="text-xl font-bold text-white mb-2">Enviános tu consulta</h3>
            <div>
              <label className="block text-sm text-slate-400 mb-1.5">Nombre</label>
              <input
                name="name"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-referix-cyan/50 transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1.5">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-referix-cyan/50 transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1.5">Organización</label>
              <input
                name="organization"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-referix-cyan/50 transition-colors"
                placeholder="Nombre de tu empresa"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1.5">Mensaje</label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-referix-cyan/50 transition-colors resize-none"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary justify-center text-base py-3"
            >
              <Send className="w-5 h-5" />
              Enviar consulta
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
