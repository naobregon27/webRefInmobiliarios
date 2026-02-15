# **PLAN DE DESARROLLO COMPLETO - APP DE REFERIDOS INMOBILIARIOS**

---

## **🎯 DISCOVERY COMPLETO**

### **Modelo de negocio claro:**
**Agente inmobiliario** → gestiona **Referidos** → traen **Clientes/Leads** → se convierten en **Compradores** → todos ganan.

**Sistema de gamificación de doble vía:**
- **Puntos** (acumulables) → por traer clientes → canjean premios
- **Estrellas** (logros) → por cerrar ventas reales → premio especial no acumulable

**Multiplier de valor:**
- Inmuebles del agente (6 propios) → **3x estrellas**
- Inmuebles de la empresa → **1x estrellas**

---

## **📱 ALCANCE DEL MVP (V1.0 - 3 meses)**

### **App Móvil Referidos (React Native)**

#### ✅ **Onboarding + Autenticación**
- Registro con email/teléfono
- Verificación por email + SMS (Twilio o similar)
- Login con recuperación de contraseña
- Tutorial first-time (gamificación explicada)

#### ✅ **Dashboard del Referido**
- Mis puntos totales + estrellas ganadas
- Ranking personal (Top 10 referidos)
- Resumen: clientes activos, potenciales, convertidos
- Botón CTA: "Agregar nuevo cliente"

#### ✅ **Catálogo de Inmuebles**
- Tab "Del Agente" (badge especial: 3x estrellas)
- Tab "De la Empresa"
- Cards con: foto, precio, ubicación, m², estado
- Detalle del inmueble (galería, descripción, mapa)
- Botón: "Tengo un cliente para este inmueble"

#### ✅ **Gestión de Clientes (del referido)**
**Formulario para agregar cliente potencial:**
- Nombre, teléfono, email
- Tipo de inmueble de interés (dropdown con catálogo)
- Notas opcionales

**Lista de mis clientes con estados:**
- 🟡 En revisión (pendiente validación del agente)
- 🟢 Aprobado → +X puntos
- ⭐ Potencial confirmado → +Y puntos + estrellas
- ✅ Compra concretada → +Z puntos + bonus estrellas
- Timeline de cada cliente (historial de cambios de estado)

#### ✅ **Notificaciones Push Gamificadas**
- "¡Tu cliente Juan fue aprobado! +10 puntos 🎉"
- "🌟 ¡Tu cliente María compró! +50 puntos + 3 estrellas"
- "Subiste al Top 5 de referidos este mes 🏆"
- Inbox de notificaciones dentro de la app

#### ✅ **Premios y Canje**
- Catálogo de premios (editable desde admin)
- Canjear puntos por premios (proceso aprobado por admin)
- Historial de canjes

#### ✅ **Perfil del Referido**
- Datos personales editables
- Estadísticas históricas (clientes traídos, tasa de conversión)
- Cerrar sesión

---

### **🖥️ Panel Web Admin (React + Next.js o Vite)**

#### ✅ **Dashboard General**
**KPIs principales:**
- Total referidos activos/inactivos
- Clientes en pipeline (revisión/potencial/comprados)
- Ventas cerradas este mes
- Top 5 referidos del mes
- Gráficos: conversión, tendencias, performance por referido

#### ✅ **Gestión de Referidos**
- Tabla con todos los referidos (buscar, filtrar, ordenar)
- Ver perfil completo de cada referido:
  - Clientes que trajo
  - Puntos/estrellas
  - Historial de actividad
- Activar/desactivar referidos
- Exportar lista a Excel

#### ✅ **Gestión de Clientes/Leads**
**Pipeline visual (Kanban o tabla):**
- **En revisión** → validar si es cliente real
- **Aprobado** → cliente válido
- **Potencial** → interés confirmado de compra
- **Comprado** → venta cerrada
- **Descartado** → no válido

**Funcionalidades:**
- Arrastrar y soltar para cambiar estados
- Al cambiar estado → notificación automática al referido + actualización de puntos/estrellas
- Filtros: por referido, por inmueble, por fecha
- Notas internas del agente (no visibles en app móvil)

#### ✅ **Catálogo de Inmuebles**
**CRUD completo:**
- Crear/editar/eliminar inmueble
- Tipo: "Del Agente" (multiplicador 3x) o "De la Empresa" (1x)
- Subir fotos (drag & drop), ubicación, precio, descripción
- Marcar como "Vendido" (ocultar de app móvil)
- Vista previa de cómo se ve en la app móvil

#### ✅ **Sistema de Gamificación**
**Configuración de puntos:**
- Cliente aprobado: X puntos
- Cliente potencial: Y puntos + Z estrellas
- Compra concretada: W puntos + multiplicador de estrellas

**Catálogo de premios (CRUD):**
- Nombre, descripción, costo en puntos, stock
- Solicitudes de canje pendientes (aprobar/rechazar)

#### ✅ **Notificaciones Masivas**
- Enviar push a todos los referidos o segmentados (ej: Top 10)
- Plantillas predefinidas + personalizable

#### ✅ **Estadísticas Avanzadas**
**Reportes exportables:**
- Performance por referido (tabla comparativa)
- Tasa de conversión (clientes → potenciales → compras)
- Inmuebles más solicitados
- Evolución mensual
- Gráficos interactivos (Chart.js o Recharts)

#### ✅ **Configuración**
- Datos del agente/empresa
- Gestión de usuarios admin (si necesita delegar acceso)

---

### **🌐 Landing Promocional (Next.js + Tailwind)**

#### ✅ **Hero Section**
- Headline: "Referí, Ganás, Crecemos Juntos"
- Subtitle: programa de referidos del agente
- CTA: Descargar app (links a Play Store + App Store)

#### ✅ **Cómo Funciona (3 pasos visuales)**
1. Descargá la app → registrate
2. Referí clientes → ganá puntos
3. Convertí ventas → ganá premios

#### ✅ **Beneficios/Features**
- Sistema de puntos y estrellas
- Catálogo de inmuebles exclusivos
- Premios reales y seguimiento en tiempo real

#### ✅ **Testimonios** (opcional para MVP, pero recomendado)
- 2-3 referidos destacados con foto y quote

#### ✅ **Footer**
- Links a términos, privacidad, contacto
- Redes sociales del agente/empresa

---

## **💡 IDEAS ADICIONALES DE VALOR (para impresionar al cliente)**

### **1. Gamificación avanzada (V2)**
- **Badges/Logros**: "Primera venta", "5 clientes en un mes", "Racha de 3 meses"
- **Ligas/Niveles**: Bronce → Plata → Oro → Platino (desbloquean premios exclusivos)
- **Retos mensuales**: "El que traiga más clientes potenciales este mes gana un bono extra"

### **2. Social & Sharing**
- Botón "Compartir inmueble" desde la app → link único con tracking del referido
- Si alguien se registra desde ese link → cliente automáticamente asignado
- Integración con WhatsApp Business API para enviar catálogo directo

### **3. Predicción inteligente (futuro con ML)**
- Analizar qué tipo de clientes tienen mayor tasa de conversión por referido
- Sugerirle al referido qué tipo de inmuebles mostrarle a cada cliente

### **4. Programa de incentivos dinámico**
- Multiplicadores temporales: "Esta semana inmuebles de empresa valen 2x"
- Happy hours de puntos

### **5. Chat in-app (V2)**
- Referido puede consultar al agente sobre un cliente específico
- Notificaciones bidireccionales

### **6. Geolocalización de inmuebles**
- Mapa interactivo con pins de propiedades
- Referido puede mostrarle al cliente en persona

### **7. Exportación automática a CRM**
- Si el agente usa algún CRM (Salesforce, HubSpot, etc.) → integración

### **8. Sistema de referidos multinivel (pirámide virtuosa)**
- Un referido puede invitar a otro referido → comisión compartida
- Ej: si tu referido trae un cliente que compra, vos también ganás

---

## **📐 LISTA DE PANTALLAS PARA FIGMA**

### **App Móvil (15 pantallas base)**
1. **Splash Screen** (logo + loading)
2. **Onboarding** (3 slides: cómo funciona)
3. **Login/Registro** (tabs)
4. **Verificación** (código SMS/email)
5. **Dashboard Home** (puntos, estrellas, CTA)
6. **Catálogo Inmuebles** (tabs: agente/empresa)
7. **Detalle Inmueble** (galería, info, mapa, CTA)
8. **Mis Clientes** (lista con estados)
9. **Agregar Cliente** (formulario)
10. **Detalle Cliente** (timeline, historial)
11. **Ranking** (top referidos)
12. **Premios** (catálogo)
13. **Canje de Premio** (confirmación)
14. **Notificaciones** (inbox)
15. **Perfil** (editar datos, estadísticas)

**Estados especiales a diseñar:**
- Empty states (sin clientes, sin notificaciones)
- Loading states
- Error states
- Modals de confirmación

---

### **Panel Web Admin (12 pantallas principales)**
1. **Login**
2. **Dashboard** (KPIs + gráficos)
3. **Referidos - Lista** (tabla)
4. **Referidos - Detalle** (perfil completo)
5. **Clientes/Leads - Kanban** (pipeline)
6. **Clientes - Detalle** (ficha completa)
7. **Inmuebles - Lista** (tabla con acciones)
8. **Inmuebles - Crear/Editar** (formulario)
9. **Gamificación - Config** (puntos, premios)
10. **Premios - CRUD**
11. **Notificaciones - Envío masivo**
12. **Estadísticas - Reportes**

---

### **Landing Web (1 página scroll)**
- Hero
- Cómo funciona
- Features
- Testimonios
- CTA final + footer

---

## **🗓️ PLAN DE FASES (roadmap recomendado)**

### **Fase 0: Setup + Discovery (1 semana)**
- Refinamiento de requerimientos con el cliente
- Diseño completo en Figma (app + web + landing)
- Validación y ajustes
- Setup de proyecto (repos, CI/CD, environments)

### **Fase 1: MVP Backend + Admin (4 semanas)**
- Arquitectura backend (Node + Express + MongoDB)
- APIs RESTful (auth, referidos, clientes, inmuebles, puntos)
- Panel admin completo (gestión de todo)
- Testing + deploy en staging

### **Fase 2: App Móvil Core (4 semanas)**
- Auth + onboarding
- Dashboard + catálogo inmuebles
- Gestión de clientes
- Notificaciones push (Firebase Cloud Messaging)
- Testing en dispositivos reales

### **Fase 3: Gamificación + Premios (2 semanas)**
- Sistema de puntos/estrellas automático
- Catálogo y canje de premios
- Ranking y estadísticas
- Notificaciones gamificadas

### **Fase 4: Landing + QA General (1 semana)**
- Landing promocional
- Testing end-to-end de todos los flujos
- Ajustes UX/UI
- Preparación para stores

### **Fase 5: Deploy + Lanzamiento (1 semana)**
- Publicación en Play Store (Android)
- Publicación en App Store (iOS)
- Deploy de admin y landing
- Migración de los 120 referidos desde Excel
- Capacitación al agente

**Total MVP: 3 meses (13 semanas)**

---

### **V2 (post-lanzamiento, 2-3 meses después)**
- Chat in-app
- Compartir inmuebles con tracking
- Badges y ligas
- Reportes avanzados con IA
- Integración CRM

---

## **🛠️ STACK TÉCNICO DETALLADO**

### **Backend**
- **Runtime**: Node.js v20+
- **Framework**: Express.js
- **Base de datos**: MongoDB (Atlas para prod)
- **ORM**: Mongoose
- **Auth**: JWT + refresh tokens
- **Storage**: AWS S3 o Cloudinary (fotos de inmuebles)
- **Push Notifications**: Firebase Cloud Messaging (FCM)
- **Email**: SendGrid o AWS SES
- **SMS**: Twilio

### **App Móvil**
- **Framework**: React Native (Expo o bare workflow)
- **Navegación**: React Navigation v6
- **State**: Zustand o Redux Toolkit
- **API Client**: Axios + React Query
- **Push**: Expo Notifications o react-native-firebase
- **Analytics**: Firebase Analytics

### **Panel Admin**
- **Framework**: Next.js 14 (App Router) o Vite + React
- **UI**: Tailwind CSS + Shadcn/ui o Material-UI
- **Tablas**: TanStack Table
- **Gráficos**: Recharts o Chart.js
- **Formularios**: React Hook Form + Zod

### **Landing**
- **Framework**: Next.js 14 (optimizado para SEO)
- **UI**: Tailwind + Framer Motion (animaciones)
- **Hosting**: Vercel

### **DevOps**
- **Hosting Backend**: Railway, Render o AWS EC2
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry (errores) + LogRocket (sessions)

---

## **🎨 DISEÑO EN FIGMA**

### **1. Design System primero (1 día)**
- Colores (primario, secundario, success/warning/error, neutros)
- Tipografía (Poppins/Inter para headings, Roboto para body)
- Espaciado (sistema de 8px)
- Componentes base: botones, inputs, cards, badges, tabs
- Iconografía (Feather Icons o Lucide)

### **2. App Móvil (2-3 días)**
- Wireframes low-fi de las 15 pantallas
- Mockups hi-fi con el design system
- Prototipo interactivo (flujo completo de un referido agregando cliente)

### **3. Panel Admin (1-2 días)**
- Wireframes de pantallas clave (dashboard, kanban, CRUD inmuebles)
- Mockups hi-fi de 4-5 pantallas críticas
- Prototipo básico

### **4. Landing (1 día)**
- Mockup desktop + mobile
- Con copys reales

---

## **💰 PRESUPUESTO**

### **📊 ESTIMACIÓN POR HORAS**

| Módulo | Horas estimadas |
|--------|----------------|
| **Diseño UI/UX (Figma completo)** | 40-50h |
| **Backend (APIs + DB + lógica)** | 120-150h |
| **App Móvil (React Native)** | 150-180h |
| **Panel Admin Web** | 100-120h |
| **Landing Promocional** | 20-30h |
| **Testing + QA** | 40-50h |
| **Deploy + Publicación Stores** | 20-30h |
| **TOTAL** | **490-610 horas** |

---

### **💵 INVERSIÓN INICIAL - MVP COMPLETO**

| Entregable | Precio |
|------------|--------|
| Diseño completo en Figma (app + web + landing) | $2,500 |
| App Móvil (iOS + Android) | $9,000 |
| Panel Admin Web | $5,500 |
| Landing Promocional | $1,500 |
| Backend + Infraestructura | $3,000 |
| Testing + Publicación en Stores | $1,500 |
| **TOTAL MVP** | **$23,000 USD** |

---

### **💡 OPCIONES DE PAGO**

#### **Paquete con descuento por pago adelantado:**
- 50% al inicio, 50% al final: **$23,000**
- 100% por adelantado: **$21,000** (descuento 9%)

#### **Plan de pagos por hitos:**
- 30% al firmar (Figma + setup): $6,900
- 30% a mitad de desarrollo (backend + app funcionando): $6,900
- 30% antes de publicación (todo terminado): $6,900
- 10% después de publicación en stores: $2,300

---

### **🚀 EXTRAS OPCIONALES (V2 - post-lanzamiento)**

| Feature | Precio |
|---------|--------|
| Chat in-app (referido ↔ agente) | $2,500 |
| Sistema de badges/ligas avanzado | $1,800 |
| Reportes con IA/predicción | $3,500 |
| Integración con CRM externo | $2,000 |
| Sistema de referidos multinivel | $2,500 |

---

## **💰 CÓMO PRESENTARLO AL CLIENTE**

### **Slide 1: El Problema**
"Hoy gestionás 120+ referidos en Excel. Perdés tiempo, no hay visibilidad en tiempo real, y los referidos no se sienten motivados porque no ven su progreso."

### **Slide 2: La Solución**
"Una plataforma completa que automatiza todo: app móvil para referidos con gamificación, panel admin para vos, y sistema de premios que incentiva ventas reales."

### **Slide 3: Así Funciona**
Diagrama simple:

**Referido** (app móvil) → trae cliente → **Sistema** valida → **Agente** (web admin) aprueba → **Referido** gana puntos/estrellas automático → **Comprador** cierra negocio → todos ganan.

### **Slide 4: Demo Visual**
Mostrar Figma prototipo navegable:
- "Así se ve el dashboard de un referido"
- "Así agregás un cliente en 30 segundos"
- "Así gestionás todo desde tu panel admin"

### **Slide 5: Roadmap**
Diagrama de las 5 fases con fechas.

### **Slide 6: Valor Agregado**
- "Vas a tener estadísticas reales de qué referidos convierten más"
- "Sistema escalable: podés tener 500 referidos sin drama"
- "Landing para atraer nuevos referidos sin que vos hagas nada"

### **Slide 7: Inversión**
Presentar el presupuesto con:
- Fase 1-5 (MVP): $23,000 USD
- V2 opcional: según features
- Mantenimiento mensual: (ver sección completa abajo)

---

## **💎 MANTENIMIENTO Y VALOR CONTINUO - TU SOCIO TECNOLÓGICO**

### **🎯 LA PROPUESTA DE VALOR**

**Concepto clave para el cliente:**

"Una vez que lanzo tu app, no te quedás solo. Yo me convierto en tu **CTO externo**: manejo toda la parte técnica, te doy insights de negocio basados en los datos de tu sistema, y vos te enfocás 100% en vender y gestionar tus referidos. Tu única preocupación es hacer crecer tu negocio, de la tecnología me ocupo yo."

---

### **🔧 TIPOS DE MANTENIMIENTO QUE OFREZCO**

#### **1. MANTENIMIENTO TÉCNICO (Infraestructura y Estabilidad)**

**Qué incluye:**
- **Monitoreo 24/7** del backend, base de datos, y servidores
- **Backups automáticos diarios** (base de datos + archivos)
- **Actualizaciones de seguridad** (librerías, frameworks, dependencies)
- **Escalamiento de servidores** si el tráfico aumenta
- **Uptime monitoring** con alertas (si la app se cae, se resuelve inmediatamente)
- **Optimización de performance** (si la app se pone lenta, se optimiza)
- **Gestión de hosting** (renovaciones, configuraciones, dominios, SSL)

**Valor para el cliente:**
- "Tu app está siempre online, sin caídas. Si algo falla, lo soluciono antes de que te des cuenta."
- "Tus datos están seguros: backups diarios + protección contra hackers."
- "Si tu negocio crece y tenés 500 referidos, la app sigue funcionando perfecta sin que vos tengas que hacer nada."

---

#### **2. MANTENIMIENTO FUNCIONAL (Soporte y Ajustes)**

**Qué incluye:**
- **Soporte técnico para el agente** (dudas de cómo usar el admin)
- **Soporte para referidos** (si un referido tiene problema con la app)
- **Ajustes menores sin costo**:
  - Cambiar textos, copys, notificaciones
  - Ajustar valores de puntos/estrellas
  - Modificar catálogo de premios
  - Agregar/editar inmuebles
  - Cambiar colores o imágenes menores
- **Corrección de bugs** (si aparece un error, se arregla)
- **Actualizaciones de app en stores** (si iOS/Android sacan nueva versión, se actualiza)

**Valor para el cliente:**
- "No necesitás contratar a nadie más. Si querés cambiar un texto o ajustar los puntos de un premio, me mandás un mensaje y lo hago en el día."
- "Si un referido reporta un bug, yo lo soluciono sin que vos tengas que entender nada técnico."
- "Tus apps en las stores siempre están actualizadas y compatibles con los últimos celulares."

---

#### **3. MANTENIMIENTO EVOLUTIVO (Mejoras y Crecimiento)**

**Qué incluye:**
- **Análisis mensual de métricas** (revisión de cómo usan la app los referidos)
- **Sugerencias de mejoras** basadas en datos reales
  - Ejemplo: "El 80% de los referidos no canjea premios, ¿probamos bajar el costo en puntos?"
- **Pequeñas features nuevas** (incluidas en el plan mensual):
  - Agregar un nuevo filtro en el admin
  - Crear una nueva plantilla de notificación
  - Exportar un reporte específico
  - Mejorar un flujo que no funciona bien
- **A/B testing de notificaciones/premios** (probar qué funciona mejor para motivar referidos)

**Valor para el cliente:**
- "No solo mantengo la app, te ayudo a mejorarla constantemente con los datos que veo."
- "Si detecto que algo no funciona bien, te lo digo y lo mejoro antes de que pierdas referidos."
- "La app evoluciona con tu negocio. Si necesitás algo nuevo, lo agregamos sin drama."

---

#### **4. INTELIGENCIA DE NEGOCIO (Reportes y Data Insights)**

**Qué incluye:**

**Reporte Mensual Ejecutivo** que incluye:

**A) Métricas de Performance del Sistema:**
- Total de referidos activos vs inactivos este mes
- Nuevos clientes ingresados por referidos
- Tasa de conversión:
  - % de clientes que pasan de "En revisión" a "Aprobado"
  - % de clientes "Aprobados" que se vuelven "Potenciales"
  - % de "Potenciales" que se convierten en "Compra concretada"
- Tiempo promedio que tarda un cliente en cada etapa del funnel
- Inmuebles más solicitados vs menos solicitados

**B) Top Performers:**
- Top 10 referidos del mes (clientes traídos, ventas cerradas, puntos ganados)
- Comparativa mes a mes: ¿están mejorando o empeorando?
- Detección de referidos "durmientes" (registrados pero que no traen clientes hace +2 meses)

**C) Análisis de Gamificación:**
- Total de puntos distribuidos este mes
- Total de estrellas ganadas
- Premios más canjeados vs premios que nadie quiere
- ¿Los referidos están motivados? (frecuencia de uso de la app)

**D) Recomendaciones Estratégicas:**

Ejemplos de insights que se proporcionan:
- "Tus 3 mejores referidos traen el 40% de todas las ventas. Considerá darles un premio especial para retenerlos."
- "El 60% de los clientes se quedan en 'Aprobado' pero no avanzan a 'Potencial'. ¿Querés que ajustemos algo en el flujo o necesitás más seguimiento manual?"
- "Los inmuebles de la empresa tienen menos solicitudes. Probá lanzar un multiplicador temporal: '2x estrellas en inmuebles de empresa esta semana'."
- "Hay 15 referidos inactivos hace 3 meses. ¿Mandamos una notificación push automática de reactivación?"

**E) Proyección y Forecasting (opcional avanzado):**
- Si mantiene este ritmo, cuántos clientes potenciales tendrá el próximo mes
- Qué referidos tienen más probabilidad de traer la próxima venta (basado en patrón histórico)

**Valor para el cliente:**
- "Cada mes recibís un reporte ejecutivo como si fueras CEO de una startup. No solo ves números, te digo **qué hacer con esos números** para vender más."
- "Tenés claridad total de qué funciona y qué no. Tomás decisiones con datos, no con intuición."
- "Si tu contador te pide info de tu sistema de referidos, tenés todo documentado y profesional."

---

### **📊 QUÉ INFORMACIÓN RECIBE EL CLIENTE**

#### **Dashboards en Vivo (en su panel admin):**
Ya disponibles 24/7:
- Dashboard principal con KPIs actualizados en tiempo real
- Gráficos de tendencias (últimos 6 meses)
- Comparativas mensuales
- Todo exportable a Excel/PDF

#### **Reportes Mensuales:**
**Formato:** PDF ejecutivo (2-3 páginas) + Excel con data cruda

**Estructura del reporte mensual:**
1. **Resumen Ejecutivo** (3 bullets con lo más importante del mes)
2. **Métricas Clave** (tabla comparativa mes actual vs anterior)
3. **Top Performers** (tabla con los 10 mejores referidos)
4. **Análisis de Funnel** (gráfico visual del embudo de conversión)
5. **Alertas y Oportunidades** (3-5 recomendaciones accionables)
6. **Próximos Pasos** (qué se va a optimizar el próximo mes)

**Frecuencia:** Primera semana de cada mes (ej: el 5 de marzo se envía el reporte de febrero)

---

### **💼 PLANES DE MANTENIMIENTO**

#### **PLAN BÁSICO - $500 USD/mes**

**Incluye:**
- ✅ Hosting completo (backend + admin + landing)
- ✅ Monitoreo 24/7 + alertas automáticas
- ✅ Backups diarios
- ✅ Actualizaciones de seguridad
- ✅ Soporte técnico por email (respuesta en 24-48h)
- ✅ Corrección de bugs críticos
- ✅ 2 ajustes menores al mes (cambios de textos, valores, etc.)
- ✅ Reporte mensual básico (métricas principales en Excel)

**No incluye:**
- ❌ Nuevas features
- ❌ Análisis de negocio profundo
- ❌ Soporte prioritario

**Para quién:** Cliente que arranca, no necesita mucho cambio mes a mes.

---

#### **PLAN PROFESIONAL - $800 USD/mes** ⭐ **RECOMENDADO**

**Incluye TODO del Plan Básico +:**
- ✅ Soporte prioritario (respuesta en 4-12h)
- ✅ **Reporte mensual ejecutivo completo** (PDF + data + recomendaciones estratégicas)
- ✅ **Análisis de performance y sugerencias** de optimización
- ✅ **5 horas/mes de desarrollo** (ajustes, mejoras menores, nuevas features chicas)
  - Ej: agregar un nuevo filtro, crear una plantilla de notificación, ajustar un flujo, mejorar un reporte
- ✅ **Reunión mensual de 30 min** (llamada para revisar métricas y definir próximos pasos)
- ✅ **Notificaciones gamificadas dinámicas** (sugerencias de notificaciones basadas en datos)

**Para quién:** Cliente que quiere un socio tecnológico activo, no solo un mantenedor.

---

#### **PLAN GROWTH - $1,200 USD/mes**

**Incluye TODO del Plan Profesional +:**
- ✅ **10 horas/mes de desarrollo** (features medianas o varias mejoras)
- ✅ **Análisis predictivo con IA** (forecasting de ventas, recomendaciones automáticas)
- ✅ **Optimización activa de conversión** (A/B testing de notificaciones, ajustes de gamificación)
- ✅ **Soporte premium** (respuesta en 2-4h, incluso fines de semana)
- ✅ **Reuniones quincenales** (dos calls al mes de 30 min)
- ✅ **Acceso a roadmap V2** (prioridad en nuevas features grandes)

**Para quién:** Cliente que crece rápido y necesita evolucionar la app constantemente.

---

### **🎁 EXTRAS/ADD-ONS (cobro aparte)**

Si el cliente necesita algo fuera del plan:

| Extra | Precio |
|-------|--------|
| **Feature grande nueva** (ej: chat in-app, sistema de badges) | $2,000 - $4,000 |
| **Integración con CRM externo** | $1,500 - $3,000 |
| **Migración a nueva versión** (ej: rediseño completo de una sección) | Según alcance |
| **Capacitación para su equipo** (si contrata gente) | $500 por sesión |
| **Consultoría estratégica** (fuera del reporte mensual) | $150/hora |

---

### **🚀 CÓMO SE LO PRESENTAS AL CLIENTE**

**"Después del lanzamiento, tenés 3 opciones:**

**Opción A) No hacer nada (no recomendado)**
- La app funciona, pero si algo se rompe, quedás tirado.
- No tenés visibilidad de qué funciona y qué no.
- En 6 meses la app está desactualizada.

**Opción B) Contratar a otro dev cada vez que necesitás algo (caro y lento)**
- Cada bug o cambio = nuevo presupuesto + tiempo de explicarle todo.
- No hay continuidad, cada dev hace las cosas distinto.
- Perdés el "conocimiento" del sistema.

**Opción C) Plan de Mantenimiento conmigo (tu CTO externo)** ✅
- **Yo ya conozco tu sistema al 100%** porque lo construí.
- **Vos te despreocupás de todo lo técnico** y te enfocás en vender.
- **Cada mes te doy insights de negocio** que te ayudan a vender más.
- **La app evoluciona con vos** sin costos escondidos.
- **Tenés un socio tecnológico**, no solo un proveedor.

---

**Ejemplo real de valor:**

"Imaginate que en el reporte mensual veo que **3 referidos traen el 50% de todas tus ventas**. Te digo: 'Llamá a esos 3, darles un premio especial, porque si se van, perdés la mitad de tu pipeline.' Eso no lo ves en Excel, y esa info puede valerte miles de dólares."

"O veo que **muchos clientes se quedan en 'Aprobado' pero no avanzan**. Te sugiero: 'Probá mandar una notificación automática a esos clientes a los 7 días recordándoles que tienen inmuebles nuevos.' Lo configuro en 1 hora y puede aumentar tu tasa de conversión 20%."

**Ese tipo de optimizaciones mes a mes hacen que tu inversión inicial se multiplique.**"

---

### **📈 ROI DEL MANTENIMIENTO PARA EL CLIENTE**

**Inversión mensual:** $800/mes (Plan Profesional)

**Retorno esperado:**
- Si gracias a los insights y optimizaciones cierra **1 venta extra cada 2 meses** (por tener referidos más motivados + sistema optimizado)
- Comisión promedio del agente por venta: **$3,000 - $5,000 USD**
- **ROI: Recupera la inversión del mes en 1 sola venta**

**Sin contar:**
- Tiempo ahorrado (no gestiona Excel, no se preocupa por bugs)
- Escalabilidad (puede crecer de 120 a 300 referidos sin drama)
- Data para tomar mejores decisiones

---

### **🎯 POSICIONAMIENTO DEL DESARROLLADOR**

**No sos "el programador que le hizo la app".**

**Sos "su socio tecnológico que lo ayuda a vender más con tecnología".**

Cuando le presentás el mantenimiento, usá este lenguaje:

❌ **NO decir:** "Te cobro $800/mes para arreglar bugs y mantener servidores."

✅ **SÍ decir:** "Con el Plan Profesional, yo me convierto en tu CTO externo. Me ocupo de que la tecnología funcione perfecta, **y además te doy insights de negocio cada mes para que vendas más**. Vos te enfocás en tu expertise (vender inmuebles), yo me enfoco en el mío (hacer que tu sistema sea una máquina de generar ventas)."

---

### **💡 BONUS: VALOR AGREGADO ADICIONAL**

**1. Acceso a mejoras continuas**
- Si en el futuro se desarrolla una feature nueva para otro cliente (ej: sistema de badges), se ofrece a este cliente con descuento.
- "Mis clientes se benefician de las mejoras que hago para otros."

**2. Comunidad de mejores prácticas**
- Si en el futuro hay varios clientes con apps similares, se pueden hacer workshops trimestrales (Zoom) donde se comparte "qué funciona mejor para motivar referidos" (anonimizado).

**3. Early access a nuevas tecnologías**
- Si sale una nueva feature de Firebase o React Native, los clientes con plan de mantenimiento la tienen primero.

---

## **📝 RESUMEN FINAL - MENSAJE AL CLIENTE**

**"Mirá, el desarrollo inicial son $23,000 USD y te entrego la plataforma completa funcionando.**

**Pero la magia no pasa solo con tener la app. La magia pasa con:**

1. **Mantenerla siempre online y segura** → por eso el mantenimiento técnico.
2. **Optimizarla constantemente** → por eso los ajustes y mejoras mensuales.
3. **Tomar decisiones con datos** → por eso los reportes ejecutivos.

**Con el Plan Profesional de $800/mes, yo me ocupo de TODO eso.**

**Vos te levantás a la mañana, abrís tu panel admin, y ves:**
- Cuántos referidos trajeron clientes ayer
- Quiénes están cerca de ganar premios (para motivarlos)
- Qué inmuebles tienen más interés

**Y cada mes te mando un reporte diciéndote:**
- Qué está funcionando bien
- Qué deberías cambiar
- Cómo podés vender más

**Tu trabajo es vender inmuebles. El mío es que la tecnología te ayude a vender más.**

**¿Arrancamos?**"

---

## **📞 PRÓXIMOS PASOS**

1. **Validar alcance del MVP** con el cliente
2. **Aprobar presupuesto** y plan de pagos
3. **Firmar contrato** (con alcance, tiempos, entregables)
4. **Pago inicial** (30% = $6,900)
5. **Kickoff meeting** para refinar detalles
6. **Arrancar Fase 0** (diseño en Figma)

---

**Documento generado el:** 29 de enero de 2026
**Desarrollador:** [Tu nombre]
**Cliente:** Agente Inmobiliario - Sistema de Referidos
**Proyecto:** App Móvil de Referidos + Panel Admin + Landing
