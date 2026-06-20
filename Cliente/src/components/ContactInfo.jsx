import { Mail, Phone, MapPin, Clock, MessageCircle, Building2 } from 'lucide-react';
import { SITE } from '../data/site';

export default function ContactInfo({ showDeveloper = false }) {
  return (
    <div className="space-y-5">
      {showDeveloper && (
        <div className="glass-card p-6 flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl referix-gradient flex items-center justify-center flex-shrink-0">
            <Building2 className="w-6 h-6 text-slate-950" />
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-1">Empresa</p>
            <p className="text-white font-semibold">{SITE.company}</p>
            <p className="text-slate-500 text-sm mt-1">{SITE.location}</p>
            <p className="text-slate-500 text-sm">App: {SITE.name} v{SITE.appVersion}</p>
          </div>
        </div>
      )}

      <div className="glass-card p-6 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl referix-gradient flex items-center justify-center flex-shrink-0">
          <Mail className="w-6 h-6 text-slate-950" />
        </div>
        <div>
          <p className="text-slate-400 text-sm mb-1">Email de soporte</p>
          <a href={`mailto:${SITE.email}`} className="text-white font-semibold hover:text-referix-cyan transition-colors break-all">
            {SITE.email}
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
            {SITE.phones.map((phone) => (
              <a key={phone.tel} href={`tel:${phone.tel}`} className="block text-white font-semibold hover:text-referix-cyan transition-colors mb-1">
                {phone.display}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {SITE.phones.map((phone) => (
            <a
              key={phone.whatsapp}
              href={`https://wa.me/${phone.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium hover:bg-green-600/30 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          ))}
        </div>
      </div>

      <div className="glass-card p-6 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
          <Clock className="w-6 h-6 text-referix-cyan" />
        </div>
        <div>
          <p className="text-slate-400 text-sm mb-1">Horario de atención</p>
          <p className="text-white font-semibold">{SITE.supportHours}</p>
          <p className="text-referix-lime text-sm font-medium mt-1">
            Tiempo de respuesta: {SITE.responseTime}
          </p>
        </div>
      </div>

      <div className="glass-card p-6 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
          <MapPin className="w-6 h-6 text-referix-cyan" />
        </div>
        <div>
          <p className="text-slate-400 text-sm mb-1">Ubicación</p>
          <p className="text-white font-semibold">{SITE.location}</p>
        </div>
      </div>
    </div>
  );
}
