# REFERIX — Contenido para web promocional y de soporte

**Propósito:** este documento reúne todo el material necesario para armar la web promocional y de soporte de REFERIX, requisito habitual para publicar en **App Store** (URL de soporte, descripción del producto, ayuda al usuario y contexto de la app).

**App:** REFERIX — plataforma de referidos inmobiliarios  
**Versión actual:** 1.0.1  
**Plataformas:** iOS y Android (React Native / Expo)  
**Bundle ID iOS:** `com.referidosinmobiliarios.app`

---

## Tabla de contenidos

1. [Resumen promocional (hero)](#1-resumen-promocional-hero)
2. [¿Qué es REFERIX?](#2-qué-es-referix)
3. [Funcionalidades completas de la app](#3-funcionalidades-completas-de-la-app)
4. [Cómo funciona — guías paso a paso](#4-cómo-funciona--guías-paso-a-paso)
5. [Sistema de recompensas](#5-sistema-de-recompensas)
6. [Preguntas frecuentes (FAQ / Soporte)](#6-preguntas-frecuentes-faq--soporte)
7. [Permisos de la app](#7-permisos-de-la-app)
8. [Estructura sugerida para la web](#8-estructura-sugerida-para-la-web)
9. [Textos listos para copiar en App Store Connect](#9-textos-listos-para-copiar-en-app-store-connect)
10. [Condiciones de uso (resumen)](#10-condiciones-de-uso-resumen)
11. [Contacto y soporte](#11-contacto-y-soporte)

---

## 1. Resumen promocional (hero)

### Título principal sugerido

> **REFERIX — Referí clientes, ganá premios reales**

### Subtítulo

> La plataforma de referidos inmobiliarios de tu organización. Cargá contactos interesados en comprar propiedades, seguí su avance, sumá puntos y estrellas, y canjealos por premios exclusivos.

### Bullets promocionales (para landing)

- 🏢 **Pertenecés a tu organización** — branding, inmuebles y premios personalizados.
- 🤝 **Referí clientes** — cargá contactos compradores y elegí el inmueble de interés.
- ⭐ **Ganá puntos y estrellas** — cada avance de tus referidos te suma recompensas.
- 🎁 **Canjeá premios** — desde beneficios diarios hasta viajes y tecnología.
- 🏆 **Competí en el ranking** — medí tu desempeño frente a otros referidos de tu organización.
- 📲 **Invitá y crecé** — compartí tu QR personal y sumá personas a la plataforma.

### Llamada a la acción (CTA)

- **Descargar en App Store** / **Descargar en Google Play**
- **¿Sos parte de una organización?** Pedile el código de invitación a tu administrador y registrate gratis.

---

## 2. ¿Qué es REFERIX?

REFERIX es una aplicación móvil diseñada para **agentes, referidos y colaboradores** del sector inmobiliario que pertenecen a una **organización** (inmobiliaria, red de agentes, etc.).

La app permite:

1. **Registrar clientes potenciales** (referidos) interesados en comprar inmuebles del catálogo de la organización.
2. **Seguir el estado** de cada referido a lo largo de un pipeline comercial (revisión, aprobado, potencial, compra).
3. **Acumular puntos y estrellas** cuando los referidos avanzan en el proceso.
4. **Canjear premios** del catálogo configurado por la organización.
5. **Participar en rankings y competencias** por período dentro de la organización.
6. **Invitar nuevas personas** a unirse a REFERIX mediante código QR o código de referido.

Cada usuario queda vinculado a su **organización** mediante un **código de invitación** al registrarse. La app muestra el logo, colores y nombre de la organización (branding dinámico).

---

## 3. Funcionalidades completas de la app

### 3.1 Autenticación y cuenta

| Funcionalidad | Descripción |
|---------------|-------------|
| **Registro** | Alta con nombre, apellido, email, teléfono, contraseña y **código de invitación** de la organización (6 caracteres). Verificación del código en tiempo real con vista previa de la organización. |
| **Verificación de email** | Código de verificación enviado al correo antes de completar el registro. |
| **Inicio de sesión** | Email y contraseña. |
| **Sign in with Apple** | Inicio de sesión con cuenta Apple (requerido para iOS). |
| **Sign in with Google** | Inicio de sesión con cuenta Google. |
| **Recuperar contraseña** | Solicitud por email y restablecimiento con token de un solo uso. |
| **Cerrar sesión** | Desde el perfil; elimina el token del dispositivo para notificaciones. |

### 3.2 Onboarding y guía de uso

| Funcionalidad | Descripción |
|---------------|-------------|
| **Onboarding inicial** | Carrusel de presentación con 4 pantallas: recomendar y ganar, catálogo de premios, compartir y crecer, disfrutar logros. |
| **Guía de bienvenida** | Slides explicativos al entrar por primera vez (puntos, estrellas, premios, invitaciones). |
| **Manual de condiciones y uso** | Accesible desde Perfil → "Condiciones y uso de la app". Incluye guía completa de referidos, puntos, estrellas, canjes e invitaciones. |

### 3.3 Inicio (Dashboard)

El **Dashboard** es la pantalla principal tras iniciar sesión. Incluye:

- **Saldo de puntos y estrellas** con acceso directo a Premios.
- **Resumen de clientes** por estado (en revisión, aprobados, potenciales, vendidos).
- **Botón "Referir"** para cargar un nuevo referido.
- **Accesos rápidos:**
  - Inmuebles (catálogo)
  - Ranking
  - Premios
  - Estadísticas
  - Mi QR
  - Escanear QR
- **Racha semanal** — semanas consecutivas con al menos un referido cargado.
- **Desafíos** — metas semanales de referidos para mantener el engagement.
- **Feed de actividad** — últimos movimientos de referidos y notificaciones.
- **Campana de notificaciones** con contador de no leídas.
- **Recordatorio post-registro** para invitar personas vía QR.

### 3.4 Inmuebles (catálogo)

| Funcionalidad | Descripción |
|---------------|-------------|
| **Listado de propiedades** | Catálogo de inmuebles disponibles de la organización con imagen, precio, ubicación y características (habitaciones, baños, m²). |
| **Filtros** | Todos / Inmuebles del agente / Inmuebles de la empresa. |
| **Detalle de inmueble** | Galería de fotos, descripción, ubicación, características y precio. |
| **Recompensas estimadas** | Tabla de puntos y estrellas estimados según el precio del inmueble y su multiplicador. |
| **Calculadora de recompensas** | Permite ingresar un precio alternativo y ver la estimación de puntos/estrellas. |
| **Compartir inmueble** | Envía por WhatsApp u otras apps un resumen con título, ubicación, precio y datos del agente. |
| **Ver en mapa** | Abre la ubicación en la app de mapas del dispositivo. |
| **Referir desde inmueble** | Carga un referido comprador vinculado directamente a ese inmueble. |

### 3.5 Clientes / Referidos

| Funcionalidad | Descripción |
|---------------|-------------|
| **Listado de referidos** | Todos los clientes cargados por el usuario con avatar, estado, inmueble de interés y fecha. |
| **Búsqueda** | Por nombre, email, teléfono o inmueble. |
| **Filtros por estado** | Todos, Potenciales, En revisión, Aprobados, Vendidos, Rechazados. |
| **Cargar referido** | Formulario con nombre, apellido, email, teléfono, notas y tipo (comprador). Opción de vincular un inmueble del catálogo. |
| **Detalle de cliente** | Vista completa con pestañas: |

**Pestañas del detalle de cliente:**

| Pestaña | Contenido |
|---------|-----------|
| **Info** | Datos de contacto, inmueble de interés, notas del referido, acciones de contacto (llamar, WhatsApp, email). |
| **Pipeline** | Visualización del recorrido del lead: potencial → en revisión → aprobado → comprado (o rechazado). Timeline de eventos si está disponible. |
| **Documentos** | Adjuntar imágenes desde la galería del dispositivo (documentación del cliente). |
| **Notas** | Notas internas de seguimiento (texto libre). |
| **Recordatorios** | Programar notificación local para hacer seguimiento en 1, 3, 7 o 14 días. |

**Estados del referido:**

| Estado | Significado |
|--------|-------------|
| En revisión | El referido fue cargado y está siendo evaluado por la organización. |
| Aprobado | El referido fue validado (+10 puntos). |
| Potencial | Cliente con alto potencial confirmado (+25 puntos, +1 estrella). |
| Comprado | Operación concretada (+100 puntos, +1 a +3 estrellas según tipo de inmueble). |
| Rechazado | El referido no procedió. |

### 3.6 Premios y canjes

| Funcionalidad | Descripción |
|---------------|-------------|
| **Catálogo de premios** | Listado de premios disponibles de la organización con imagen, descripción y costo. |
| **Filtro por moneda** | Todos / Solo puntos / Solo estrellas. |
| **Solicitar canje** | El usuario confirma el canje; los puntos o estrellas se descuentan al solicitar. |
| **Mis canjes** | Historial de solicitudes con estados: Pendiente, Aprobado, Rechazado, Entregado. |
| **Logros e insignias** | Pestaña con insignias desbloqueadas y bloqueadas según hitos (referidos, ventas, puntos, ranking). |
| **Racha visible** | Semanas consecutivas con actividad de referidos. |

**Estados del canje:**

| Estado | Significado |
|--------|-------------|
| Pendiente | Solicitud enviada; en revisión por el administrador. |
| Aprobado | Canje aprobado; pendiente de entrega. |
| Rechazado | Canje rechazado; puntos/estrellas devueltos. |
| Entregado | Premio entregado al usuario. |

### 3.7 Ranking y competencias

| Funcionalidad | Descripción |
|---------------|-------------|
| **Ranking general** | Tabla de posiciones de referidos dentro de la organización según puntos/estrellas acumulados. Medallas para el top 3. |
| **Competencias por período** | Campañas temporales con ranking propio (por puntos, estrellas o invitaciones). |
| **Detalle de competencia** | Período, métrica, estado (activa, finalizada, etc.) y posición del usuario. |

### 3.8 Estadísticas personales

Pantalla dedicada con tres pestañas:

| Pestaña | Contenido |
|---------|-----------|
| **Resumen** | KPIs: total de referidos, aprobados, comprados, en revisión, puntos y estrellas. |
| **Historial** | Gráfico de barras con referidos cargados por mes (últimos 6 meses). |
| **Logros** | Hitos alcanzados (ej. primer referido, 10 referidos, primera venta, etc.). |

### 3.9 QR y captura de referidos

| Funcionalidad | Descripción |
|---------------|-------------|
| **Mi QR** | Muestra el código QR personal del agente y su código de referido. Permite compartir por WhatsApp, redes u otras apps. |
| **Escanear QR** | Usa la cámara para leer códigos QR y precargar datos en el formulario de nuevo referido (nombre, teléfono, email). |
| **Código de referido** | Identificador único que vincula invitaciones y nuevos registros al agente. |

### 3.10 Notificaciones

| Funcionalidad | Descripción |
|---------------|-------------|
| **Bandeja de notificaciones** | Listado de avisos de la organización y eventos automáticos. |
| **Tipos de notificación** | Información, promociones, ranking, alertas, anuncios, cambio de estado de referido, puntos otorgados, estrellas otorgadas, cambio de estado de canje. |
| **Marcar como leída** | Individual o todas a la vez. |
| **Contador de no leídas** | Visible en el Dashboard. |
| **Push notifications** | Notificaciones en tiempo real al dispositivo (cambios de lead, puntos, canjes, anuncios). |
| **Deep linking** | Al tocar una notificación, la app navega al detalle del referido, premio o pantalla relevante. |

### 3.11 Perfil y configuración

| Funcionalidad | Descripción |
|---------------|-------------|
| **Ver perfil** | Nombre, email, avatar, organización, estadísticas resumidas. |
| **Editar perfil** | Modificar nombre, apellido, teléfono y foto de perfil. |
| **Cambiar contraseña** | Contraseña actual + nueva contraseña. |
| **Modo oscuro / claro** | Toggle de tema visual. |
| **Condiciones y uso** | Manual integrado de la app. |
| **Cerrar sesión** | Finaliza la sesión en el dispositivo. |

### 3.12 Branding por organización

La app adapta su apariencia según la organización del usuario:

- Logo y nombre de la organización.
- Colores primarios y secundarios (gradientes en headers y botones).
- Catálogo de inmuebles y premios propios de la organización.
- Notificaciones y anuncios de la organización.

---

## 4. Cómo funciona — guías paso a paso

### 4.1 Registrarse en REFERIX

1. Descargá la app desde App Store o Google Play.
2. Tocá **"Crear cuenta"**.
3. Ingresá el **código de invitación** de tu organización (lo proporciona tu administrador).
4. Completá tus datos: nombre, apellido, email, teléfono y contraseña.
5. Verificá tu email con el código que recibís por correo.
6. ¡Listo! Entrás al onboarding y luego al Dashboard.

> También podés registrarte con **Apple** o **Google** si tu organización lo permite.

### 4.2 Referir un cliente

1. Desde el **Inicio**, tocá **"Referir"** (o el botón flotante de carga).
2. Completá los datos del contacto: nombre, apellido, email y teléfono.
3. Elegí el **inmueble de interés** del catálogo (opcional pero recomendado).
4. Agregá notas si querés dar contexto adicional.
5. Enviá el referido.
6. Seguí su estado en la pestaña **Clientes**.

**Atajo:** desde el detalle de un inmueble, tocá **"Referir cliente"** para vincularlo automáticamente.

### 4.3 Seguir un referido

1. Andá a la pestaña **Clientes**.
2. Tocá el referido que querés ver.
3. En **Info**, contactalo por teléfono, WhatsApp o email.
4. En **Pipeline**, revisá en qué etapa está.
5. En **Documentos**, adjuntá imágenes de respaldo.
6. En **Notas**, escribí observaciones de seguimiento.
7. En **Recordatorios**, programá un aviso para contactarlo más adelante.

### 4.4 Canjear un premio

1. Andá a la pestaña **Premios**.
2. Revisá tu saldo de puntos y estrellas en la parte superior.
3. Filtrá por puntos o estrellas si querés.
4. Elegí el premio que te interese.
5. Confirmá el canje.
6. Seguí el estado en **Mis Canjes**.

> Los puntos o estrellas se descuentan al solicitar. Si el canje es rechazado, se devuelven automáticamente.

### 4.5 Invitar personas a REFERIX

1. Desde el **Inicio**, tocá **"Mi QR"**.
2. Mostrá tu código QR o compartilo por WhatsApp/redes.
3. La persona descarga REFERIX y se registra.
4. Al registrarse, usa el **código de invitación de la organización** y queda vinculada a vos.
5. Participás del **sorteo semanal** por sumar personas a la app.

### 4.6 Consultar tu posición en el ranking

1. Desde el **Inicio**, tocá **"Ranking"**.
2. Mirá tu posición y la de otros referidos de tu organización.
3. Para competencias temporales, entrá a **"Competencias por período"**.

---

## 5. Sistema de recompensas

### Puntos

Los puntos se acumulan con cada avance de tus referidos y sirven para canjear premios del catálogo de puntos.

| Evento | Puntos |
|--------|--------|
| Lead aprobado | +10 |
| Lead potencial confirmado | +25 |
| Compra concretada | +100 |

### Estrellas

Las estrellas son la moneda premium. Desbloquean los premios más importantes (viajes, Smart TV, experiencias).

| Evento | Estrellas |
|--------|-----------|
| Lead potencial confirmado | +1 ⭐ |
| Compra — inmueble del agente | +3 ⭐ |
| Compra — inmueble de la empresa | +1 ⭐ |

### Tipos de premios en el catálogo

- **Con puntos:** beneficios diarios, vouchers, descuentos.
- **Con estrellas:** premios top como viajes, Smart TV y experiencias exclusivas.

> Los valores exactos de cada premio y su disponibilidad los define tu organización. Consultá el catálogo dentro de la app.

---

## 6. Preguntas frecuentes (FAQ / Soporte)

### Cuenta y acceso

**¿Necesito un código para registrarme?**  
Sí. REFERIX funciona por organizaciones. Necesitás un código de invitación de 6 caracteres que te da el administrador de tu inmobiliaria u organización.

**¿Puedo usar mi cuenta de Apple o Google?**  
Sí. La app soporta Sign in with Apple (iOS) y Sign in with Google. Igual necesitás el código de invitación de tu organización al registrarte.

**Olvidé mi contraseña, ¿qué hago?**  
En la pantalla de inicio de sesión, tocá **"¿Olvidaste tu contraseña?"**, ingresá tu email y seguí las instrucciones del correo.

**¿Puedo cambiar mi email?**  
Contactá al administrador de tu organización para cambios de email en la cuenta.

### Referidos

**¿Qué datos necesito para cargar un referido?**  
Nombre, apellido, email y teléfono del contacto. Opcionalmente podés vincular un inmueble y agregar notas.

**¿Cuánto tarda en aprobarse un referido?**  
Depende de tu organización. Recibirás una notificación cuando cambie el estado.

**¿Puedo referir clientes vendedores?**  
Actualmente el flujo principal está orientado a **clientes compradores**. Consultá con tu organización si hay flujos adicionales.

**¿Qué pasa si mi referido es rechazado?**  
No se otorgan puntos ni estrellas. Podés ver el estado en la pestaña Clientes.

### Puntos, estrellas y premios

**¿Cuándo se acreditan los puntos?**  
Automáticamente cuando tu organización cambia el estado del referido (aprobado, potencial o comprado). Recibirás una notificación.

**¿Puedo transferir puntos a otra persona?**  
No. Los puntos y estrellas son personales e intransferibles.

**¿Qué pasa si mi canje es rechazado?**  
Los puntos o estrellas se devuelven a tu saldo.

**¿Los premios tienen stock limitado?**  
Algunos premios pueden tener stock limitado. La app te avisará si un premio no está disponible.

### QR e invitaciones

**¿Para qué sirve mi QR?**  
Para que otros descarguen REFERIX y se registren vinculados a vos y a tu organización. También participás de sorteos por invitar personas.

**¿Puedo escanear el QR de un cliente?**  
Sí. La función "Escanear QR" precarga datos del contacto en el formulario de nuevo referido.

### Notificaciones

**¿Por qué no recibo notificaciones?**  
Verificá que tengas las notificaciones activadas para REFERIX en la configuración de tu dispositivo. En Android, la app usa el canal `referidos_channel`.

**¿Qué tipos de avisos recibo?**  
Cambios de estado de referidos, puntos/estrellas otorgados, actualizaciones de canjes, anuncios y promociones de tu organización.

### Técnico

**¿En qué dispositivos funciona?**  
iOS (iPhone y iPad) y Android. Requiere conexión a internet para la mayoría de las funciones.

**¿La app funciona sin conexión?**  
Algunas funciones locales (notas y documentos guardados en el dispositivo) pueden verse sin conexión, pero cargar referidos, ver el catálogo y canjear premios requieren internet.

**¿Cómo actualizo la app?**  
Desde App Store o Google Play. La app también soporta actualizaciones OTA vía Expo Updates.

---

## 7. Permisos de la app

REFERIX solicita los siguientes permisos del dispositivo:

| Permiso | Para qué se usa |
|---------|-----------------|
| **Cámara** | Escanear códigos QR de clientes y contactos. |
| **Fotos / galería** | Adjuntar imágenes de documentos en el detalle de clientes y subir foto de perfil. |
| **Ubicación** | Mostrar inmuebles cercanos (cuando la organización lo habilita). |
| **Notificaciones** | Avisos de cambios de referidos, puntos, canjes y anuncios de la organización. |
| **Micrófono** | Requerido por el sistema en algunas configuraciones de cámara (Android). |

Podés revocar permisos desde la configuración de tu dispositivo en cualquier momento, aunque algunas funciones dejarán de estar disponibles.

---

## 8. Estructura sugerida para la web

### Páginas recomendadas

| Página | URL sugerida | Contenido |
|--------|--------------|-----------|
| **Inicio** | `/` | Hero promocional, bullets, capturas de pantalla, CTAs de descarga. |
| **Funcionalidades** | `/funcionalidades` | Sección 3 de este documento, con iconos e imágenes. |
| **Cómo funciona** | `/como-funciona` | Sección 4 — guías paso a paso con ilustraciones. |
| **Premios** | `/premios` | Sistema de puntos/estrellas (sección 5) + ejemplos visuales del catálogo. |
| **Soporte / FAQ** | `/soporte` | Sección 6 completa + formulario de contacto. |
| **Privacidad** | `/privacidad` | Política de privacidad (obligatoria para App Store). |
| **Términos** | `/terminos` | Sección 10 ampliada. |
| **Contacto** | `/contacto` | Sección 11. |

### Elementos visuales sugeridos

- Capturas del Dashboard, catálogo de inmuebles, detalle de cliente, premios y ranking.
- Video corto (30–60 s) mostrando el flujo: referir → ganar puntos → canjear premio.
- Logo REFERIX + logo de la organización (si la web es white-label).
- Badges de App Store y Google Play.

### SEO — palabras clave sugeridas

`referidos inmobiliarios`, `app referidos`, `premios inmobiliarios`, `REFERIX`, `referir clientes inmobiliaria`, `gamificación inmobiliaria`, `puntos y estrellas`, `ranking referidos`.

---

## 9. Textos listos para copiar en App Store Connect

### Nombre de la app
```
REFERIX
```

### Subtítulo (iOS, máx. 30 caracteres)
```
Referí clientes, ganá premios
```

### Descripción corta (promotional text)
```
REFERIX es la plataforma de referidos inmobiliarios de tu organización. Cargá clientes, seguí su avance, sumá puntos y estrellas, y canjealos por premios reales. Competí en el ranking y compartí tu QR para invitar más personas.
```

### Descripción completa (App Store)

```
REFERIX — La app de referidos inmobiliarios que te recompensa

¿Formás parte de una inmobiliaria o red de agentes? REFERIX te permite referir clientes interesados en comprar propiedades y ganar premios reales por cada avance.

CÓMO FUNCIONA
1. Registrate con el código de invitación de tu organización.
2. Cargá referidos (contactos interesados en comprar).
3. Seguí su estado: revisión, aprobado, potencial, compra.
4. Ganá puntos y estrellas automáticamente.
5. Canjeá premios del catálogo de tu organización.

FUNCIONALIDADES PRINCIPALES
• Dashboard con resumen de puntos, estrellas y referidos
• Catálogo de inmuebles con calculadora de recompensas
• Gestión completa de clientes con pipeline visual
• Catálogo de premios con canje por puntos o estrellas
• Ranking y competencias por período
• QR personal para invitar personas
• Estadísticas personales y logros
• Notificaciones en tiempo real
• Sign in with Apple y Google

SISTEMA DE RECOMPENSAS
• Lead aprobado: +10 puntos
• Lead potencial: +25 puntos + 1 estrella
• Compra concretada: +100 puntos + hasta 3 estrellas

REFERIX se adapta al branding de tu organización: logo, colores, inmuebles y premios propios.

Descargá REFERIX y empezá a referir hoy.
```

### Categoría sugerida
- **Primaria:** Negocios
- **Secundaria:** Estilo de vida

### URL de soporte (obligatoria en App Store)
```
https://[tu-dominio]/soporte
```

### URL de marketing (opcional)
```
https://[tu-dominio]
```

### URL de política de privacidad (obligatoria)
```
https://[tu-dominio]/privacidad
```

### Palabras clave (iOS, máx. 100 caracteres)
```
referidos,inmobiliaria,premios,agentes,propiedades,referir,ganar,puntos,estrellas
```

---

## 10. Condiciones de uso (resumen)

> Texto base para la página de Términos. Adaptar con datos legales de la organización.

- Los premios están sujetos a **disponibilidad** y **aprobación** de la organización.
- Los canjes pasan por **revisión** antes de ser entregados.
- Los puntos y estrellas son **personales e intransferibles**.
- El uso indebido de la plataforma puede resultar en la **suspensión de la cuenta**.
- REFERIX opera dentro del marco de cada **organización**; las reglas de negocio (precios de premios, criterios de aprobación de referidos, etc.) las define el administrador de la organización.
- La app recopila datos personales (nombre, email, teléfono) necesarios para el funcionamiento del servicio. Ver Política de Privacidad.
- Las estimaciones de recompensas en inmuebles son **orientativas**; los valores finales los determina el sistema al acreditar puntos/estrellas.

---

## 11. Contacto y soporte

### Para usuarios de la app

> Completar con los datos reales antes de publicar.

| Canal | Detalle |
|-------|---------|
| **Email de soporte** | soporte@[tu-dominio].com |
| **Horario de atención** | Lunes a viernes, 9:00 a 18:00 (hora Argentina) |
| **Tiempo de respuesta** | 24–48 horas hábiles |

### Para administradores de organizaciones

Los administradores gestionan usuarios, referidos, premios y configuración desde el **panel web de administración** de REFERIX. Para consultas comerciales o alta de organizaciones, contactar al equipo de REFERIX.

### Reportar un problema

En la web de soporte, incluir un formulario con:

- Nombre y email
- Organización
- Versión de la app (visible en Perfil → pie de página)
- Dispositivo y sistema operativo
- Descripción del problema
- Capturas de pantalla (opcional)

---

## Notas para el equipo de desarrollo web

1. **Reemplazar** `[tu-dominio]` por el dominio real antes de publicar.
2. **Agregar** política de privacidad completa (obligatoria para Apple) — puede basarse en los datos que maneja la app: nombre, email, teléfono, avatar, tokens de dispositivo, ubicación opcional.
3. **Incluir** enlaces de descarga reales cuando la app esté publicada en las tiendas.
4. **Considerar** una página `/agente/:codigo` para deep links del QR (referencia en la app: `https://referix.app/agente/{codigo}`).
5. **Screenshots:** usar capturas reales de la app en iPhone y Android para la web y App Store Connect.

---

*Documento generado a partir del código fuente de la app móvil REFERIX (v1.0.1). Actualizar cuando se agreguen nuevas funcionalidades.*
