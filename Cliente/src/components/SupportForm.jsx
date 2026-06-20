import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { SITE } from '../data/site';

export default function SupportForm({ variant = 'support' }) {
  const isSupport = variant === 'support';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fields = {
      name: form.name.value,
      email: form.email.value,
      organization: form.organization?.value || '',
      appVersion: form.appVersion?.value || '',
      device: form.device?.value || '',
      message: form.message.value,
    };

    const subject = encodeURIComponent(
      isSupport ? `Soporte REFERIX - ${fields.name}` : `Consulta REFERIX - ${fields.name}`
    );
    const body = encodeURIComponent(
      [
        `Nombre: ${fields.name}`,
        `Email: ${fields.email}`,
        fields.organization && `Organización: ${fields.organization}`,
        fields.appVersion && `Versión de la app: ${fields.appVersion}`,
        fields.device && `Dispositivo / SO: ${fields.device}`,
        '',
        fields.message,
      ].filter(Boolean).join('\n')
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="glass-card p-8 space-y-5"
    >
      <h3 className="text-xl font-bold text-white">
        {isSupport ? 'Reportar un problema o consulta' : 'Enviános tu consulta'}
      </h3>
      {isSupport && (
        <p className="text-slate-400 text-sm">
          Completá el formulario con el mayor detalle posible. Podés adjuntar capturas de pantalla
          respondiendo al email de confirmación.
        </p>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1.5">Nombre *</label>
          <input name="name" required className="form-input" placeholder="Tu nombre" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1.5">Email *</label>
          <input name="email" type="email" required className="form-input" placeholder="tu@email.com" />
        </div>
      </div>

      <div>
        <label className="block text-sm text-slate-400 mb-1.5">Organización</label>
        <input name="organization" className="form-input" placeholder="Nombre de tu empresa" />
      </div>

      {isSupport && (
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Versión de la app</label>
            <input name="appVersion" className="form-input" placeholder={`Ej: ${SITE.appVersion}`} />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Dispositivo y sistema operativo</label>
            <input name="device" className="form-input" placeholder="Ej: iPhone 14, iOS 17" />
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm text-slate-400 mb-1.5">
          {isSupport ? 'Descripción del problema *' : 'Mensaje *'}
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="form-input resize-none"
          placeholder={isSupport ? 'Describí el problema con el mayor detalle posible...' : '¿En qué podemos ayudarte?'}
        />
      </div>

      <button type="submit" className="w-full btn-primary justify-center text-base py-3">
        <Send className="w-5 h-5" />
        Enviar a soporte
      </button>
    </motion.form>
  );
}
