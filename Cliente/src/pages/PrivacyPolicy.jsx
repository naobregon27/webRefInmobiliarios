import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import { SITE, LEGAL_LINKS } from '../data/site';

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
    <div className="text-slate-400 space-y-4 leading-relaxed text-sm md:text-base">{children}</div>
  </section>
);

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout
      title="Política de Privacidad"
      description="Política de privacidad de REFERIX. Información sobre cómo recopilamos, usamos y protegemos tus datos personales."
    >
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Política de Privacidad</h1>
        <p className="text-slate-400">
          Última actualización: {SITE.lastUpdated} · Versión de la app: {SITE.appVersion}
        </p>
      </header>

      <Section title="1. Responsable del tratamiento">
        <p>
          <strong className="text-white">{SITE.developerLabel}</strong> es el responsable del tratamiento
          de los datos personales recopilados a través de la aplicación móvil <strong className="text-white">REFERIX</strong>{' '}
          (Bundle ID: {SITE.bundleId}) y del sitio web {SITE.domain}.
        </p>
        <p>
          Contacto para consultas de privacidad:{' '}
          <a href={`mailto:${SITE.email}`} className="text-referix-cyan hover:underline">{SITE.email}</a>
        </p>
        <p>Domicilio: {SITE.location}.</p>
      </Section>

      <Section title="2. Alcance">
        <p>
          Esta política aplica a usuarios de la app REFERIX (agentes, referidos y colaboradores vinculados
          a una organización) y visitantes del sitio web. REFERIX opera por organizaciones: cada usuario
          pertenece a una entidad (inmobiliaria, empresa, red de agentes, etc.) identificada mediante
          un código de invitación.
        </p>
      </Section>

      <Section title="3. Datos que recopilamos">
        <p>Recopilamos los siguientes datos personales cuando usás REFERIX:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-white">Datos de registro:</strong> nombre, apellido, email, teléfono y contraseña (encriptada).</li>
          <li><strong className="text-white">Datos de autenticación:</strong> identificadores de Sign in with Apple y Sign in with Google cuando elegís esos métodos.</li>
          <li><strong className="text-white">Datos de perfil:</strong> foto de avatar (opcional).</li>
          <li><strong className="text-white">Datos de referidos:</strong> nombre, apellido, email, teléfono y notas de contactos que cargás como referidos.</li>
          <li><strong className="text-white">Datos de actividad:</strong> puntos, estrellas, historial de referidos, canjes, ranking, logros y rachas.</li>
          <li><strong className="text-white">Documentos adjuntos:</strong> imágenes que subís en el detalle de clientes (documentación de respaldo).</li>
          <li><strong className="text-white">Datos del dispositivo:</strong> token de notificaciones push, modelo de dispositivo y versión del sistema operativo.</li>
          <li><strong className="text-white">Ubicación (opcional):</strong> solo si tu organización habilita la función de inmuebles o servicios cercanos; se usa para mostrar resultados en mapa.</li>
        </ul>
      </Section>

      <Section title="4. Finalidad del tratamiento">
        <p>Usamos tus datos para:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Crear y administrar tu cuenta en REFERIX.</li>
          <li>Vincularte a tu organización y aplicar su branding (logo, colores, catálogo).</li>
          <li>Gestionar referidos, pipeline comercial, puntos, estrellas y premios.</li>
          <li>Enviar notificaciones push sobre cambios de estado, puntos, canjes y anuncios.</li>
          <li>Generar estadísticas, rankings y competencias dentro de tu organización.</li>
          <li>Brindar soporte técnico y responder consultas.</li>
          <li>Cumplir obligaciones legales aplicables.</li>
        </ul>
      </Section>

      <Section title="5. Sign in with Apple y Google">
        <p>
          Si iniciás sesión con <strong className="text-white">Sign in with Apple</strong> o{' '}
          <strong className="text-white">Google</strong>, recibimos los datos que esos proveedores
          comparten según tu configuración de privacidad (por ejemplo, nombre y email). Apple puede
          ofrecerte ocultar tu email real mediante un reenvío privado. El uso de esos servicios está
          sujeto también a las políticas de privacidad de Apple y Google.
        </p>
        <p>
          Cuando la app ofrece inicio de sesión con terceros en iOS, también está disponible Sign in with Apple,
          conforme a las directrices de Apple (Guideline 4.8).
        </p>
      </Section>

      <Section title="6. Permisos del dispositivo">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-white">Cámara:</strong> escanear códigos QR de contactos.</li>
          <li><strong className="text-white">Fotos / galería:</strong> adjuntar documentos y subir foto de perfil.</li>
          <li><strong className="text-white">Ubicación:</strong> mostrar productos o inmuebles cercanos (solo si la organización lo habilita).</li>
          <li><strong className="text-white">Notificaciones:</strong> avisos de referidos, puntos, canjes y promociones.</li>
          <li><strong className="text-white">Micrófono:</strong> requerido por el sistema en algunas configuraciones de cámara en Android.</li>
        </ul>
        <p>Podés revocar permisos desde la configuración de tu dispositivo en cualquier momento.</p>
      </Section>

      <Section title="7. Base legal">
        <p>
          Tratamos tus datos con base en la ejecución del contrato de uso del servicio, el consentimiento
          (cuando corresponda, por ejemplo para notificaciones o ubicación) y el interés legítimo del
          responsable y de tu organización para operar el programa de referidos.
        </p>
      </Section>

      <Section title="8. Compartición de datos">
        <p>Podemos compartir datos con:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-white">Tu organización:</strong> administradores que gestionan referidos, premios y usuarios.</li>
          <li><strong className="text-white">Proveedores de infraestructura:</strong> hosting, bases de datos y servicios de notificaciones push necesarios para operar la app.</li>
          <li><strong className="text-white">Apple / Google:</strong> cuando usás sus servicios de autenticación.</li>
        </ul>
        <p>No vendemos tus datos personales a terceros con fines publicitarios.</p>
      </Section>

      <Section title="9. Conservación">
        <p>
          Conservamos tus datos mientras tu cuenta esté activa y durante el tiempo necesario para
          cumplir obligaciones legales, resolver disputas o hacer valer nuestros acuerdos. Podés solicitar
          la eliminación contactando a soporte o a tu administrador de organización.
        </p>
      </Section>

      <Section title="10. Tus derechos">
        <p>Podés solicitar:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Acceso a tus datos personales.</li>
          <li>Rectificación de datos incorrectos.</li>
          <li>Eliminación de tu cuenta y datos, cuando corresponda.</li>
          <li>Limitación u oposición al tratamiento en los casos previstos por la ley.</li>
        </ul>
        <p>
          Para ejercer estos derechos, escribinos a{' '}
          <a href={`mailto:${SITE.email}`} className="text-referix-cyan hover:underline">{SITE.email}</a>.
          Respondemos en {SITE.responseTime}.
        </p>
      </Section>

      <Section title="11. Seguridad">
        <p>
          Implementamos medidas técnicas y organizativas razonables para proteger tus datos, incluyendo
          transmisión cifrada (HTTPS), contraseñas hasheadas y control de acceso por organización.
        </p>
      </Section>

      <Section title="12. Menores de edad">
        <p>
          REFERIX no está dirigida a menores de 13 años. No recopilamos intencionalmente datos de menores.
          Si detectamos una cuenta de un menor, la eliminaremos a solicitud del titular o del responsable legal.
        </p>
      </Section>

      <Section title="13. Cambios a esta política">
        <p>
          Podemos actualizar esta política. Publicaremos la versión vigente en {SITE.domain}/privacidad
          con la fecha de última actualización. El uso continuado de la app implica la aceptación de los cambios.
        </p>
      </Section>

      <Section title="14. Contacto">
        <p>
          Consultas sobre privacidad:{' '}
          <a href={`mailto:${SITE.email}`} className="text-referix-cyan hover:underline">{SITE.email}</a>
        </p>
        <p>
          Soporte: <Link to={LEGAL_LINKS.support} className="text-referix-cyan hover:underline">{SITE.domain}/support</Link>
        </p>
      </Section>
    </LegalPageLayout>
  );
}
