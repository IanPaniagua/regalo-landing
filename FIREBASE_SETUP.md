# 🔥 Firebase & Google Analytics Setup Guide

## 📋 Overview

Esta guía te ayudará a integrar Firebase y Google Analytics 4 (GA4) en la landing page de Regalo para rastrear el comportamiento del usuario y las respuestas del cuestionario.

## 🎯 KPIs Rastreados (Adaptados para Producto Gratis)

### KPIs de Landing Page
1. **Tasa de Conversión**: Landing → Inicio de cuestionario
2. **Engagement por Sección**: Tiempo en Hero, Features, CTA
3. **Bounce Rate**: Usuarios que salen sin interactuar
4. **Clicks en Botones**: Engagement con CTAs

### KPIs del Cuestionario
5. **Tasa de Completación**: Cuestionarios iniciados vs completados
6. **Puntos de Abandono**: En qué paso abandonan los usuarios
7. **Tiempo por Paso**: Cuánto tiempo pasan en cada sección
8. **Puntuación de Interés por Feature**: Respuestas agregadas por característica
9. **Satisfacción General**: Respuestas de "Qué te pareció"
10. **Coeficiente Viral**: Respuestas de "Compartirías la app"

---

## 🚀 Paso 1: Crear Proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Click en **"Agregar proyecto"**
3. Nombre del proyecto: `regalo-app` (o el que prefieras)
4. **Habilitar Google Analytics**: Toggle ON (esto crea GA4 automáticamente)
5. Elige o crea una cuenta de Analytics
6. Click en **"Crear proyecto"**

---

## 🔧 Paso 2: Registrar App Web

1. En Firebase Console, click en el **ícono Web** (`</>`)
2. Apodo de la app: `Regalo Landing`
3. **Opcional**: Marca "También configurar Firebase Hosting"
4. Click en **"Registrar app"**
5. **COPIA el objeto de configuración** - ¡necesitarás estos valores!

Verás algo como esto:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "regalo-app.firebaseapp.com",
  projectId: "regalo-app",
  storageBucket: "regalo-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123",
  measurementId: "G-XXXXXXXXXX"
};
```

---

## 🔑 Paso 3: Configurar Variables de Entorno

1. En la raíz del proyecto, crea el archivo `.env.local`:

```bash
cp .env.local.example .env.local
```

2. Edita `.env.local` con tus valores de Firebase:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=regalo-app.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=regalo-app
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=regalo-app.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX

NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

⚠️ **IMPORTANTE**: `.env.local` ya está en `.gitignore` - NO lo subas a Git

---

## 📦 Paso 4: Instalar Dependencias

Ejecuta en tu terminal:

```bash
npm install
```

Esto instalará Firebase (ya está en `package.json`).

---

## 🗄️ Paso 5: Configurar Firestore Database

1. En Firebase Console, ve a **"Firestore Database"**
2. Click en **"Crear base de datos"**
3. Elige **"Comenzar en modo de producción"**
4. Selecciona ubicación más cercana a tus usuarios (ej: `europe-west3` para Europa)
5. Click en **"Habilitar"**

### Configurar Reglas de Seguridad

1. Ve a la pestaña **"Reglas"**
2. Pega este código:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir a cualquiera escribir respuestas del cuestionario
    match /questionnaire_responses/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
    
    // Permitir a cualquiera escribir eventos de analytics
    match /analytics_events/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
    
    // Permitir a cualquiera unirse a la waitlist
    match /waitlist_signups/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

3. Click en **"Publicar"**

**Explicación de las reglas:**
- `allow create: if true` → Cualquiera puede crear documentos (necesario para el cuestionario público)
- `allow read, update, delete: if false` → Solo tú (admin) puedes leer/modificar datos desde la consola

---

## 📊 Paso 6: Configurar Google Analytics 4

1. En Firebase Console, ve a **"Analytics"** → **"Panel"**
2. Click en **"Ver en Google Analytics"**
3. En GA4, ve a **"Administrador"** (abajo a la izquierda)
4. En **Propiedad** → **"Flujos de datos"** → Click en tu flujo web
5. Desplázate a **"Medición mejorada"** → Activa:
   - ✅ Vistas de página
   - ✅ Desplazamientos
   - ✅ Clics salientes
   - ✅ Búsqueda en el sitio
   - ✅ Interacciones con formularios

---

## ✅ Paso 7: Probar la Configuración

1. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

2. **Abre el navegador** en `http://localhost:3000`

3. **Verifica en la consola del navegador**:
   - No debe haber errores de Firebase
   - Deberías ver: `✅ Firebase Analytics initialized`

4. **Prueba el tracking**:
   - Navega por la landing page
   - Inicia el cuestionario
   - Completa algunas preguntas

5. **Verifica en Firebase Console**:
   - Ve a **Analytics** → **Eventos** (tiempo real)
   - Deberías ver eventos como `questionnaire_start`, `button_click`, etc.

6. **Verifica en Firestore**:
   - Completa el cuestionario
   - Ve a **Firestore Database**
   - Deberías ver la colección `questionnaire_responses` con tu respuesta

---

## 📈 Paso 8: Ver Analytics

### Datos en Tiempo Real

1. **Firebase Console** → Analytics → Panel
2. Verás usuarios activos y eventos en vivo

### Datos Históricos (después de 24-48 horas)

1. **Google Analytics 4** → Informes
2. Crea informes personalizados para tus KPIs

### Consultar Datos de Firestore

**Opción 1: Firebase Console**
- Firestore Database → Navega por las colecciones
- Exporta datos manualmente

**Opción 2: Consultas programáticas**
```javascript
// Ejemplo: Obtener todas las respuestas
import { collection, getDocs } from 'firebase/firestore';

const querySnapshot = await getDocs(collection(firestore, 'questionnaire_responses'));
querySnapshot.forEach((doc) => {
  console.log(doc.id, doc.data());
});
```

---

## 📊 KPIs y Cómo Medirlos

### 1. Tasa de Conversión (Landing → Cuestionario)

**En GA4:**
- Eventos → `questionnaire_start`
- Compara con `page_view` de la home

**Fórmula:** `(questionnaire_start / page_views) × 100`

### 2. Tasa de Completación del Cuestionario

**En Firestore:**
```javascript
// Cuenta documentos en questionnaire_responses
// Compara con eventos questionnaire_start en GA4
```

**Fórmula:** `(completados / iniciados) × 100`

### 3. Puntos de Abandono

**En GA4:**
- Eventos → `questionnaire_dropoff`
- Agrupa por `step_id`

### 4. Puntuación de Features

**En Firestore:**
- Cada respuesta tiene `metadata` con scores calculados
- Agrega manualmente o usa BigQuery

### 5. Satisfacción General

**En Firestore:**
- Filtra respuestas por `overall-opinion`
- Cuenta: `need-it`, `very-useful`, `good`, `not-useful`

---

## 🔍 Troubleshooting

### ❌ Analytics no funciona

**Solución:**
- Verifica que `.env.local` tenga los valores correctos
- Asegúrate de que `NEXT_PUBLIC_` esté en todos los nombres
- Reinicia el servidor: `npm run dev`
- Desactiva bloqueadores de anuncios
- Verifica en consola del navegador si hay errores

### ❌ Error "Permission denied" en Firestore

**Solución:**
- Verifica que las reglas de seguridad estén publicadas
- Asegúrate de que los nombres de colección coincidan:
  - `questionnaire_responses`
  - `analytics_events`

### ❌ Eventos no aparecen en GA4

**Solución:**
- Los datos históricos tardan 24-48 horas
- Usa **Informes en tiempo real** para pruebas inmediatas
- Verifica que `MEASUREMENT_ID` sea correcto

### ❌ Firebase no se inicializa

**Solución:**
- Ejecuta `npm install` de nuevo
- Verifica que `firebase` esté en `package.json`
- Borra `node_modules` y reinstala:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

---

## 🚀 Despliegue en Vercel

Cuando despliegues en Vercel:

1. **Agrega las variables de entorno** en Vercel:
   - Ve a tu proyecto en Vercel
   - Settings → Environment Variables
   - Agrega todas las variables `NEXT_PUBLIC_*`

2. **Redeploy** el proyecto

3. **Verifica** que Analytics funcione en producción

---

## 🎓 Próximos Pasos

Después del setup, puedes:

1. **Crear dashboards personalizados en GA4**
2. **Configurar objetivos de conversión**
3. **Exportar datos de Firestore a BigQuery** para análisis avanzado
4. **Agregar A/B testing** con Firebase Remote Config
5. **Configurar alertas** para KPIs críticos

---

## 📞 ¿Necesitas Ayuda?

- [Documentación de Firebase](https://firebase.google.com/docs)
- [Documentación de GA4](https://support.google.com/analytics)
- [Next.js + Firebase](https://firebase.google.com/docs/web/setup#next.js)

---

## ✨ Archivos Creados

Los siguientes archivos ya están creados en tu proyecto:

- ✅ `src/lib/firebase.ts` - Configuración de Firebase
- ✅ `src/lib/analytics.ts` - Funciones de tracking
- ✅ `src/lib/firestoreService.ts` - Servicio de Firestore
- ✅ `.env.local.example` - Template de variables de entorno
- ✅ Tracking integrado en:
  - `src/app/questionnaire/page.tsx`
  - `src/components/sections/CTASection.tsx`

**Solo necesitas:**
1. Crear tu proyecto en Firebase
2. Configurar `.env.local` con tus credenciales
3. Ejecutar `npm install`
4. ¡Listo! 🎉
