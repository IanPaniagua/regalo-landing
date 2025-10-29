# 🚀 Quick Start - Firebase Analytics

## ✅ Lo que ya está hecho

He integrado completamente Firebase y Google Analytics 4 en tu proyecto. Estos son los archivos creados/modificados:

### Archivos Nuevos
- ✅ `src/lib/firebase.ts` - Configuración de Firebase
- ✅ `src/lib/analytics.ts` - Funciones de tracking (10 eventos diferentes)
- ✅ `src/lib/firestoreService.ts` - Guardar respuestas en Firestore
- ✅ `.env.local.example` - Template de variables de entorno
- ✅ `FIREBASE_SETUP.md` - Guía completa paso a paso

### Archivos Modificados
- ✅ `package.json` - Agregada dependencia de Firebase
- ✅ `src/lib/questionnaireStorage.ts` - Soporte para Firestore ID
- ✅ `src/app/questionnaire/page.tsx` - Tracking completo del cuestionario
- ✅ `src/components/sections/CTASection.tsx` - Tracking del botón CTA

---

## 🎯 KPIs que se rastrean automáticamente

### Landing Page
1. **Conversión Landing → Cuestionario** (`questionnaire_start`)
2. **Clicks en botones** (`button_click`)
3. **Vistas de sección** (`section_view`)

### Cuestionario
4. **Inicio del cuestionario** (`questionnaire_start`)
5. **Progreso por pasos** (`questionnaire_step`)
6. **Respuestas a preguntas** (`question_response`)
7. **Completación** (`questionnaire_complete` + tiempo total)
8. **Abandono** (`questionnaire_dropoff` + paso donde abandonó)
9. **Salida manual** (`questionnaire_exit`)

### Firestore (datos detallados)
10. **Respuestas completas del cuestionario** con metadata:
    - Tiempo total
    - User agent, idioma, resolución
    - Puntuaciones calculadas por feature
    - Timestamp

---

## 📝 Pasos que DEBES hacer ahora

### 1. Instalar dependencias (2 minutos)

```bash
npm install
```

### 2. Crear proyecto en Firebase (5 minutos)

1. Ve a https://console.firebase.google.com/
2. "Agregar proyecto" → Nombre: `regalo-app`
3. **Activa Google Analytics** ✅
4. Crear proyecto

### 3. Registrar app web (2 minutos)

1. Click en ícono Web `</>`
2. Apodo: `Regalo Landing`
3. **COPIA el objeto firebaseConfig**

### 4. Configurar Firestore (3 minutos)

1. Firestore Database → Crear base de datos
2. Modo producción → Ubicación: `europe-west3`
3. Reglas → Pega esto:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /questionnaire_responses/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
    match /analytics_events/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

### 5. Crear archivo .env.local (2 minutos)

```bash
cp .env.local.example .env.local
```

Edita `.env.local` con tus valores de Firebase:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu-proyecto
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu-proyecto.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123:web:abc
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 6. Probar localmente (1 minuto)

```bash
npm run dev
```

Abre http://localhost:3000 y:
- Verifica en consola: `✅ Firebase Analytics initialized`
- Completa el cuestionario
- Ve a Firebase Console → Firestore → Deberías ver tu respuesta

### 7. Desplegar en Vercel

1. En Vercel → Tu proyecto → Settings → Environment Variables
2. Agrega TODAS las variables `NEXT_PUBLIC_*` de tu `.env.local`
3. Redeploy

---

## 📊 Cómo ver los datos

### Tiempo Real (inmediato)
- Firebase Console → Analytics → Eventos (tiempo real)
- Verás eventos mientras navegas

### Datos Históricos (24-48 horas)
- Google Analytics 4 → Informes
- Crea informes personalizados

### Respuestas del Cuestionario
- Firebase Console → Firestore Database
- Colección: `questionnaire_responses`
- Cada documento = 1 respuesta completa

---

## 🔥 Eventos que se rastrean

| Evento | Cuándo se dispara | Datos |
|--------|------------------|-------|
| `questionnaire_start` | Usuario inicia cuestionario | timestamp |
| `questionnaire_step` | Cambia de paso | step_id, step_number |
| `question_response` | Responde una pregunta | question_id, response_type |
| `questionnaire_complete` | Completa cuestionario | time_spent_seconds |
| `questionnaire_dropoff` | Abandona sin completar | step_id, step_number |
| `questionnaire_exit` | Click en "Exit" | step_id, step_number |
| `button_click` | Click en cualquier botón | button_id, location |
| `section_view` | Ve una sección | section_name |
| `page_view` | Carga una página | page_name |

---

## ⚠️ Importante para Vercel

Cuando despliegues, asegúrate de:

1. ✅ Agregar TODAS las variables de entorno en Vercel
2. ✅ Verificar que empiecen con `NEXT_PUBLIC_`
3. ✅ Hacer redeploy después de agregar variables
4. ✅ Probar en producción que Analytics funcione

---

## 🆘 Si algo no funciona

### Error: "Cannot find module 'firebase/app'"
**Solución:** `npm install`

### Analytics no se inicializa
**Solución:** 
- Verifica `.env.local` existe y tiene valores correctos
- Reinicia servidor: `npm run dev`

### Firestore: Permission denied
**Solución:**
- Verifica que las reglas estén publicadas
- Nombres de colección deben ser exactos

### Eventos no aparecen en GA4
**Solución:**
- Usa "Informes en tiempo real" (los históricos tardan 24-48h)
- Desactiva bloqueadores de anuncios
- Verifica MEASUREMENT_ID

---

## 📚 Documentación Completa

Lee `FIREBASE_SETUP.md` para:
- Guía paso a paso con capturas
- Explicación de cada KPI
- Cómo crear dashboards personalizados
- Troubleshooting avanzado
- Próximos pasos (BigQuery, A/B testing, etc.)

---

## ✨ ¡Listo!

Tiempo total de setup: **~15 minutos**

Una vez configurado, tendrás:
- ✅ Tracking automático de todos los eventos
- ✅ Respuestas guardadas en Firestore
- ✅ Dashboards en GA4
- ✅ KPIs listos para analizar

**¡Ahora solo necesitas crear el proyecto en Firebase y configurar las variables de entorno!** 🚀
