export const faqs = [
  {
    category: 'Cuenta y acceso',
    items: [
      {
        q: '¿Necesito un código para registrarme?',
        a: 'Sí. REFERIX funciona por organizaciones. Necesitás un código de invitación de 6 caracteres que te proporciona el administrador de tu empresa u organización.',
      },
      {
        q: '¿Puedo usar Sign in with Apple o Google?',
        a: 'Sí. La app soporta Sign in with Apple (iOS) y Sign in with Google. En todos los casos necesitás el código de invitación de tu organización para completar el registro.',
      },
      {
        q: 'Olvidé mi contraseña, ¿qué hago?',
        a: 'En la pantalla de inicio de sesión, tocá "¿Olvidaste tu contraseña?", ingresá tu email y seguí las instrucciones del correo de recuperación.',
      },
      {
        q: '¿Puedo cambiar mi email?',
        a: 'Contactá al administrador de tu organización o escribinos a soporte para solicitar cambios en tu cuenta.',
      },
    ],
  },
  {
    category: 'Referidos',
    items: [
      {
        q: '¿Solo es para inmobiliarias?',
        a: 'No. REFERIX se adapta a cualquier rubro con referidos: inmobiliarias, seguros, servicios profesionales, comercios y redes de distribución.',
      },
      {
        q: '¿Qué datos necesito para cargar un referido?',
        a: 'Nombre, apellido, email y teléfono del contacto. Opcionalmente podés vincular un producto o servicio del catálogo y agregar notas.',
      },
      {
        q: '¿Cuánto tarda en aprobarse un referido?',
        a: 'Depende de tu organización. Recibirás una notificación push cuando cambie el estado del referido.',
      },
      {
        q: '¿Qué pasa si mi referido es rechazado?',
        a: 'No se otorgan puntos ni estrellas. Podés ver el estado en la pestaña Clientes de la app.',
      },
    ],
  },
  {
    category: 'Puntos, estrellas y premios',
    items: [
      {
        q: '¿Cuándo se acreditan los puntos y estrellas?',
        a: 'Automáticamente cuando tu organización cambia el estado del referido (aprobado, potencial o comprado). Recibirás una notificación al instante.',
      },
      {
        q: '¿Puedo transferir puntos a otra persona?',
        a: 'No. Los puntos y estrellas son personales e intransferibles.',
      },
      {
        q: '¿Qué pasa si mi canje es rechazado?',
        a: 'Los puntos o estrellas se devuelven automáticamente a tu saldo. Podés seguir el estado en Mis Canjes.',
      },
    ],
  },
  {
    category: 'QR e invitaciones',
    items: [
      {
        q: '¿Para qué sirve mi código QR?',
        a: 'Para invitar personas a descargar REFERIX y registrarse vinculadas a vos y a tu organización.',
      },
      {
        q: '¿Puedo escanear el QR de un contacto?',
        a: 'Sí. La función "Escanear QR" precarga datos del contacto en el formulario de nuevo referido.',
      },
    ],
  },
  {
    category: 'Técnico',
    items: [
      {
        q: '¿En qué dispositivos funciona?',
        a: 'iOS (iPhone y iPad) y Android. Requiere conexión a internet para cargar referidos, ver catálogo y canjear premios.',
      },
      {
        q: '¿Por qué no recibo notificaciones?',
        a: 'Verificá que las notificaciones estén activadas para REFERIX en la configuración de tu dispositivo.',
      },
      {
        q: '¿Cómo contacto soporte?',
        a: 'Escribinos a lopez.gonza2026@gmail.com, por WhatsApp o completá el formulario en esta página. Respondemos en 24–48 horas hábiles.',
      },
    ],
  },
];

export const flatFaqs = faqs.flatMap((section) => section.items);
