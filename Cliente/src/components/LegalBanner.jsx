import { Link } from 'react-router-dom';
import { Shield, FileText, Headphones } from 'lucide-react';
import { LEGAL_LINKS } from '../data/site';

const links = [
  { to: LEGAL_LINKS.privacy, label: 'Política de Privacidad', icon: Shield },
  { to: LEGAL_LINKS.terms, label: 'Términos y Condiciones', icon: FileText },
  { to: LEGAL_LINKS.support, label: 'Soporte', icon: Headphones },
];

export default function LegalBanner() {
  return (
    <section className="py-10 bg-slate-900 border-y border-white/10">
      <div className="container mx-auto px-6">
        <p className="text-center text-slate-400 text-sm mb-6">
          Información legal y soporte
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {links.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="inline-flex items-center gap-2 px-6 py-3 glass-card hover:border-referix-cyan/40 text-white font-semibold text-sm transition-all hover:scale-105"
            >
              <Icon className="w-4 h-4 text-referix-cyan" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
