# 📊 Funnel de Conversión - Regalo App

## 🎯 Embudo Completo de Conversión

```
┌─────────────────────────────────────────┐
│  100 Visitantes → Landing Page          │
│  Evento: page_view                      │
└─────────────────────────────────────────┘
                  ↓
         Click "Yes! Let's Go 💪"
         Evento: button_click
                  ↓
┌─────────────────────────────────────────┐
│  60 Usuarios → Inician Cuestionario     │
│  Evento: questionnaire_start            │
│  Conversión: 60%                        │
└─────────────────────────────────────────┘
                  ↓
         Completan 5 pasos
         Evento: questionnaire_step (x5)
         Evento: question_response (x10)
                  ↓
┌─────────────────────────────────────────┐
│  24 Usuarios → Completan Cuestionario   │
│  Evento: questionnaire_complete         │
│  Conversión: 40% (de los que iniciaron) │
│  Datos guardados en Firestore           │
└─────────────────────────────────────────┘
                  ↓
         Click "Join Waitlist 🎉"
         Evento: waitlist_view
                  ↓
┌─────────────────────────────────────────┐
│  17 Usuarios → Se unen a Waitlist       │
│  Evento: waitlist_signup                │
│  Conversión: 70% (de los que completaron)│
│  Datos guardados en Firestore           │
└─────────────────────────────────────────┘

CONVERSIÓN TOTAL: 17% (de visitante a waitlist)
```

---

## 📈 KPIs Principales

### 1. Tasa de Conversión Landing → Cuestionario
**Fórmula:** `(questionnaire_start / page_view) × 100`

**En GA4:**
- Eventos → `questionnaire_start` vs `page_view`
- Target: >20%

**Qué mide:** Efectividad del mensaje en la landing page

---

### 2. Tasa de Completación del Cuestionario
**Fórmula:** `(questionnaire_complete / questionnaire_start) × 100`

**En GA4:**
- Eventos → `questionnaire_complete` vs `questionnaire_start`
- Target: >50%

**Qué mide:** Fricción en el cuestionario

---

### 3. Puntos de Abandono
**Fórmula:** Distribución de `questionnaire_dropoff` por `step_id`

**En GA4:**
- Eventos → `questionnaire_dropoff`
- Agrupa por: `step_id`

**Qué mide:** Qué preguntas causan más abandonos

---

### 4. Tasa de Conversión Cuestionario → Waitlist
**Fórmula:** `(waitlist_signup / questionnaire_complete) × 100`

**En GA4:**
- Eventos → `waitlist_signup` vs `questionnaire_complete`
- Target: >60%

**Qué mide:** Interés real en el producto

---

### 5. Conversión Total (End-to-End)
**Fórmula:** `(waitlist_signup / page_view) × 100`

**En GA4:**
- Eventos → `waitlist_signup` vs `page_view`
- Target: >10%

**Qué mide:** Efectividad global del funnel

---

## 🔥 Eventos Rastreados

### Landing Page
| Evento | Cuándo | Datos |
|--------|--------|-------|
| `page_view` | Usuario carga la página | page_name |
| `section_view` | Usuario ve una sección | section_name |
| `button_click` | Click en cualquier botón | button_id, location |

### Cuestionario
| Evento | Cuándo | Datos |
|--------|--------|-------|
| `questionnaire_start` | Inicia cuestionario | timestamp |
| `questionnaire_step` | Cambia de paso | step_id, step_number |
| `question_response` | Responde pregunta | question_id, response_type |
| `questionnaire_complete` | Completa todo | time_spent_seconds |
| `questionnaire_dropoff` | Abandona sin completar | step_id, step_number |
| `questionnaire_exit` | Click en "Exit" | step_id, step_number |

### Waitlist
| Evento | Cuándo | Datos |
|--------|--------|-------|
| `waitlist_view` | Ve formulario waitlist | source |
| `waitlist_signup` | Se une a waitlist | source, timestamp |
| `waitlist_skip` | Rechaza unirse | source |

---

## 📊 Cómo Ver los Datos en GA4

### Opción 1: Exploración de Embudo

1. Ve a **Google Analytics 4**
2. **Explorar** (menú lateral)
3. **Crear nueva exploración** → **Análisis de embudo**
4. Configura los pasos:
   - Paso 1: `page_view`
   - Paso 2: `questionnaire_start`
   - Paso 3: `questionnaire_complete`
   - Paso 4: `waitlist_signup`
5. **Ejecutar**

Verás:
- Tasa de conversión entre cada paso
- Dónde pierdes más usuarios
- Tiempo promedio en cada paso

### Opción 2: Informes Personalizados

1. **Informes** → **Biblioteca**
2. **Crear informe personalizado**
3. Agrega métricas:
   - Recuento de eventos por nombre
   - Usuarios activos
   - Tasa de conversión
4. Dimensiones:
   - Nombre del evento
   - Origen del tráfico
   - Dispositivo

### Opción 3: Tiempo Real

1. **Informes** → **Tiempo real**
2. Ve eventos en vivo mientras los usuarios navegan
3. Perfecto para testing

---

## 🗄️ Datos en Firestore

### Colección: `questionnaire_responses`
**Qué contiene:** Respuestas completas del cuestionario

```javascript
{
  responses: {
    "forgot-gift": { value: "rarely" },
    "profile-useful": { value: "awesome" },
    // ... todas las respuestas
  },
  metadata: {
    timeSpent: 45,
    completedSteps: 5,
    totalSteps: 5,
    userAgent: "...",
    language: "en-GB",
    screenResolution: "390x844"
  },
  timestamp: Timestamp,
  createdAt: "2025-10-29T15:51:11.289Z"
}
```

**Uso:**
- Análisis cualitativo de respuestas
- Exportar para análisis en Excel/Python
- Identificar patrones en usuarios interesados

### Colección: `waitlist_signups`
**Qué contiene:** Emails de usuarios interesados

```javascript
{
  email: "user@example.com",
  name: "John Doe",
  source: "questionnaire", // o "landing"
  metadata: {
    userAgent: "...",
    language: "en-GB",
    referrer: "direct",
    sessionId: "session_123..."
  },
  timestamp: Timestamp,
  createdAt: "2025-10-29T16:00:00.000Z"
}
```

**Uso:**
- Lista de emails para lanzamiento
- Segmentación por fuente
- Análisis de perfil de early adopters

---

## 🎯 Análisis de Optimización

### Si la conversión Landing → Cuestionario es baja (<20%)

**Problema:** El mensaje no convence

**Soluciones:**
- Mejorar copy del Hero
- Agregar testimonios
- Video explicativo
- Cambiar CTA

### Si la completación del cuestionario es baja (<50%)

**Problema:** Cuestionario muy largo o confuso

**Soluciones:**
- Reducir número de preguntas
- Hacer preguntas opcionales
- Mejorar UX (animaciones, feedback)
- Agregar barra de progreso más visible

### Si la conversión Cuestionario → Waitlist es baja (<60%)

**Problema:** Usuarios no ven valor suficiente

**Soluciones:**
- Mejorar propuesta de valor
- Agregar beneficios de early access
- Mostrar roadmap del producto
- Agregar social proof

---

## 📧 Exportar Datos de Firestore

### Opción 1: Firebase Console (Manual)

1. Firestore Database → Colección
2. Click en los 3 puntos → **Exportar**
3. Formato: JSON

### Opción 2: Script de Exportación

```javascript
// exportWaitlist.js
const admin = require('firebase-admin');
const fs = require('fs');

admin.initializeApp();
const db = admin.firestore();

async function exportWaitlist() {
  const snapshot = await db.collection('waitlist_signups').get();
  const data = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  
  fs.writeFileSync('waitlist.json', JSON.stringify(data, null, 2));
  console.log(`Exported ${data.length} signups`);
}

exportWaitlist();
```

### Opción 3: BigQuery (Avanzado)

1. Firebase Console → Project Settings
2. **Integrations** → **BigQuery**
3. **Link to BigQuery**
4. Consultas SQL para análisis avanzado

---

## 🚀 Próximos Pasos

1. **Configurar alertas en GA4**
   - Notificación si conversión < 10%
   - Alerta de picos de tráfico

2. **A/B Testing**
   - Probar diferentes CTAs
   - Variaciones del cuestionario
   - Diferentes mensajes de waitlist

3. **Segmentación**
   - Usuarios móvil vs desktop
   - Por fuente de tráfico
   - Por país/idioma

4. **Automatización**
   - Email automático al unirse a waitlist
   - Recordatorios para completar cuestionario
   - Notificaciones de nuevos signups

---

## ✅ Checklist de Análisis Semanal

- [ ] Revisar tasa de conversión total
- [ ] Identificar puntos de abandono
- [ ] Analizar respuestas del cuestionario
- [ ] Exportar nuevos emails de waitlist
- [ ] Comparar con semana anterior
- [ ] Identificar oportunidades de mejora
- [ ] Implementar cambios y medir impacto

---

## 📞 Recursos

- [GA4 Funnel Exploration](https://support.google.com/analytics/answer/9327974)
- [Firebase Analytics Events](https://firebase.google.com/docs/analytics/events)
- [BigQuery for Firebase](https://firebase.google.com/docs/projects/bigquery-export)
