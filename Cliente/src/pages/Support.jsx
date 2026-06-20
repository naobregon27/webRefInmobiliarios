import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import FAQAccordion from '../components/FAQAccordion';
import SupportForm from '../components/SupportForm';
import ContactInfo from '../components/ContactInfo';
import { faqs } from '../data/faqs';
import { SITE, LEGAL_LINKS } from '../data/site';

export default function Support() {
  return (
    <LegalPageLayout
      title="Soporte"
      description="Centro de soporte de REFERIX. Contacto, preguntas frecuentes y formulario para reportar problemas."
    >
      <header className="mb-12">
        <span className="section-badge bg-referix-cyan/10 border-referix-cyan/30 text-referix-cyan mb-4">
          Centro de ayuda
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Soporte REFERIX</h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Estamos acá para ayudarte con tu cuenta, referidos, premios o problemas técnicos.
          Respondemos en <strong className="text-white">{SITE.responseTime}</strong>.
        </p>
      </header>

      {/* Quick contact banner — visible for Apple reviewers */}
      <div className="glass-card p-6 md:p-8 mb-12 border-referix-cyan/20">
        <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <p className="text-slate-400 text-sm mb-1">Email de soporte</p>
            <a href={`mailto:${SITE.email}`} className="text-white font-bold hover:text-referix-cyan transition-colors break-all">
              {SITE.email}
            </a>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-1">Horario</p>
            <p className="text-white font-semibold">{SITE.supportHours}</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-1">Tiempo de respuesta</p>
            <p className="text-referix-lime font-semibold">{SITE.responseTime}</p>
          </div>
        </div>
      </div>

      {/* Developer info for Apple 1.5.0 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Información de la empresa</h2>
        <div className="glass-card p-6 md:p-8">
          <dl className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-slate-500 mb-1">Aplicación</dt>
              <dd className="text-white font-semibold">{SITE.name} v{SITE.appVersion}</dd>
            </div>
            <div>
              <dt className="text-slate-500 mb-1">Empresa</dt>
              <dd className="text-white font-semibold">{SITE.company}</dd>
            </div>
            <div>
              <dt className="text-slate-500 mb-1">Bundle ID (iOS)</dt>
              <dd className="text-white font-mono text-xs">{SITE.bundleId}</dd>
            </div>
            <div>
              <dt className="text-slate-500 mb-1">Ubicación</dt>
              <dd className="text-white">{SITE.location}</dd>
            </div>
            <div>
              <dt className="text-slate-500 mb-1">Email de contacto</dt>
              <dd>
                <a href={`mailto:${SITE.email}`} className="text-referix-cyan hover:underline">{SITE.email}</a>
              </dd>
            </div>
            <div>
              <dt className="text-slate-500 mb-1">Documentos legales</dt>
              <dd className="space-x-3">
                <Link to={LEGAL_LINKS.privacy} className="text-referix-cyan hover:underline">Privacidad</Link>
                <Link to={LEGAL_LINKS.terms} className="text-referix-cyan hover:underline">Términos</Link>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Contactanos</h2>
        <div className="grid lg:grid-cols-2 gap-10">
          <ContactInfo />
          <SupportForm variant="support" />
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-2">Preguntas frecuentes</h2>
        <p className="text-slate-400 mb-8">
          Encontrá respuestas rápidas antes de escribirnos.
        </p>
        <FAQAccordion grouped sections={faqs} />
      </section>
    </LegalPageLayout>
  );
}
