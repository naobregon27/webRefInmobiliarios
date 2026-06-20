import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import { SITE, LEGAL_LINKS } from '../data/site';

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
    <div className="text-slate-400 space-y-4 leading-relaxed text-sm md:text-base">{children}</div>
  </section>
);

export default function Terms() {
  return (
    <LegalPageLayout
      title="Términos y Condiciones"
      description="Términos y condiciones de uso de la aplicación REFERIX."
    >
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Términos y Condiciones de Uso</h1>
        <p className="text-slate-400">
          Última actualización: {SITE.lastUpdated} · Operador: {SITE.developerLabel}
        </p>
      </header>

      <Section title="1. Aceptación">
        <p>
          Al descargar, registrarte o usar la aplicación <strong className="text-white">REFERIX</strong>,
          aceptás estos Términos y Condiciones y nuestra{' '}
          <Link to={LEGAL_LINKS.privacy} className="text-referix-cyan hover:underline">Política de Privacidad</Link>.
          Si no estás de acuerdo, no utilices la app.
        </p>
      </Section>

      <Section title="2. Descripción del servicio">
        <p>
          REFERIX es una plataforma móvil de referidos con gamificación que permite a agentes y colaboradores
          de una organización: cargar contactos referidos, seguir su avance comercial, acumular puntos y
          estrellas, canjear premios, participar en rankings y compartir códigos QR de invitación.
        </p>
        <p>
          El servicio se adapta al branding, catálogo y reglas de cada organización. REFERIX puede utilizarse
          en distintos rubros (inmobiliario, seguros, servicios, comercio, etc.).
        </p>
      </Section>

      <Section title="3. Registro y cuenta">
        <ul className="list-disc pl-6 space-y-2">
          <li>Debés ser mayor de 13 años para usar REFERIX.</li>
          <li>Necesitás un código de invitación válido de 6 caracteres proporcionado por tu organización.</li>
          <li>Sos responsable de mantener la confidencialidad de tu contraseña y de toda actividad en tu cuenta.</li>
          <li>Podés registrarte con email y contraseña, Sign in with Apple o Sign in with Google.</li>
          <li>La información que proporcionás debe ser veraz y actualizada.</li>
        </ul>
      </Section>

      <Section title="4. Organizaciones y reglas de negocio">
        <p>
          Cada usuario pertenece a una organización. Los administradores de esa organización definen:
          criterios de aprobación de referidos, catálogo de productos o servicios, premios disponibles,
          precios en puntos o estrellas, y políticas internas de canje.
        </p>
        <p>
          REFERIX actúa como plataforma tecnológica; las decisiones comerciales sobre referidos y premios
          las toma la organización correspondiente.
        </p>
      </Section>

      <Section title="5. Sistema de puntos, estrellas y premios">
        <ul className="list-disc pl-6 space-y-2">
          <li>Los puntos y estrellas se acreditan automáticamente según el avance de tus referidos (aprobado, potencial, compra).</li>
          <li>Los valores orientativos mostrados en catálogos son estimaciones; los valores finales los determina el sistema al acreditar recompensas.</li>
          <li>Los puntos y estrellas son personales e intransferibles.</li>
          <li>Los canjes pasan por revisión y aprobación antes de ser entregados.</li>
          <li>Si un canje es rechazado, los puntos o estrellas se devuelven a tu saldo.</li>
          <li>Los premios están sujetos a disponibilidad de stock definida por la organización.</li>
        </ul>
      </Section>

      <Section title="6. Referidos y contenido del usuario">
        <p>
          Al cargar referidos, garantizás que tenés legitimidad para compartir los datos de contacto
          y que cumplís con la normativa de protección de datos aplicable. No debés cargar información
          falsa, engañosa o de terceros sin su consentimiento.
        </p>
        <p>
          Las imágenes y documentos que adjuntes deben ser propios o contar con autorización para su uso.
        </p>
      </Section>

      <Section title="7. Uso prohibido">
        <p>Está prohibido:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Usar la app para actividades ilegales o fraudulentas.</li>
          <li>Manipular el sistema de puntos, estrellas o rankings.</li>
          <li>Crear cuentas múltiples para obtener ventajas indebidas.</li>
          <li>Intentar acceder a datos de otras organizaciones o usuarios.</li>
          <li>Realizar ingeniería inversa o interferir con el funcionamiento del servicio.</li>
        </ul>
        <p>
          El incumplimiento puede resultar en suspensión o eliminación de la cuenta, a criterio de REFERIX
          o de tu organización.
        </p>
      </Section>

      <Section title="8. Propiedad intelectual">
        <p>
          REFERIX, su logo, diseño, código y contenidos propios son propiedad de {SITE.developerLabel}
          o sus licenciantes. No podés copiar, modificar ni distribuir la app sin autorización.
        </p>
      </Section>

      <Section title="9. Disponibilidad y modificaciones">
        <p>
          Nos esforzamos por mantener REFERIX disponible, pero no garantizamos funcionamiento ininterrumpido.
          Podemos actualizar, modificar o discontinuar funciones con aviso razonable cuando sea posible.
          Las actualizaciones se distribuyen vía App Store, Google Play o actualizaciones OTA (Expo Updates).
        </p>
      </Section>

      <Section title="10. Limitación de responsabilidad">
        <p>
          REFERIX se proporciona "tal cual". No somos responsables por decisiones comerciales de las
          organizaciones, por la concreción de ventas de referidos, ni por daños indirectos derivados
          del uso de la app, en la medida permitida por la ley aplicable.
        </p>
      </Section>

      <Section title="11. Ley aplicable">
        <p>
          Estos términos se rigen por las leyes de la República Argentina. Cualquier controversia
          será sometida a los tribunales competentes de la Provincia de Corrientes, Argentina,
          salvo disposición legal imperativa en contrario.
        </p>
      </Section>

      <Section title="12. Contacto">
        <p>
          Consultas sobre estos términos:{' '}
          <a href={`mailto:${SITE.email}`} className="text-referix-cyan hover:underline">{SITE.email}</a>
        </p>
        <p>
          Soporte: <Link to={LEGAL_LINKS.support} className="text-referix-cyan hover:underline">{SITE.domain}/support</Link>
        </p>
        <p>Horario: {SITE.supportHours} · Respuesta: {SITE.responseTime}</p>
      </Section>
    </LegalPageLayout>
  );
}
