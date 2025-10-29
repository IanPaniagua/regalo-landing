# 🔧 Troubleshooting - Firebase No Funciona

## 🚨 Problema: Analytics en 0 y Firestore no guarda datos

### ✅ Checklist de Diagnóstico

#### 1. Verificar Variables de Entorno

```bash
# En la terminal, ejecuta:
cat .env.local
```

**Debe mostrar:**
- ✅ `NEXT_PUBLIC_FIREBASE_API_KEY=AIza...`
- ✅ `NEXT_PUBLIC_FIREBASE_PROJECT_ID=regalo-db`
- ✅ `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-...`

**Si no aparecen o están vacías:**
```bash
# Reinicia el servidor
npm run dev
```

---

#### 2. Verificar Firestore Database Creada

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona proyecto `regalo-db`
3. Menú lateral → **Firestore Database**

**¿Qué deberías ver?**
- ✅ Base de datos creada (no dice "Crear base de datos")
- ✅ Pestaña "Reglas" disponible

**Si dice "Crear base de datos":**
1. Click en **"Crear base de datos"**
2. Selecciona **"Comenzar en modo de producción"**
3. Ubicación: `europe-west3` (o la más cercana)
4. Click **"Habilitar"**

---

#### 3. Verificar Reglas de Seguridad de Firestore

1. Firestore Database → Pestaña **"Reglas"**
2. **Debe tener este código EXACTO:**

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
    match /waitlist_signups/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

3. Click **"Publicar"**

**Si las reglas son diferentes:**
- Borra todo
- Pega el código de arriba
- Publica

---

#### 4. Verificar Google Analytics Habilitado

1. Firebase Console → **Analytics** → **Panel**
2. **Debe mostrar:** Gráficos y eventos (aunque estén en 0)

**Si dice "Habilitar Analytics":**
1. Click en "Habilitar Analytics"
2. Selecciona cuenta de Google Analytics
3. Espera a que se active (puede tardar unos minutos)

---

#### 5. Usar Página de Diagnóstico

1. Abre: http://localhost:3000/test-firebase
2. Verifica que ambos muestren ✅:
   - Analytics: ✅ Ready
   - Firestore: ✅ Ready

**Si alguno muestra ❌:**
- Abre la consola del navegador (F12)
- Busca errores en rojo
- Copia el error y revisa abajo

---

#### 6. Probar Eventos Manualmente

En la página de diagnóstico:

1. Click **"Send Test Analytics Event"**
2. Ve a Firebase Console → Analytics → **Eventos (tiempo real)**
3. Espera 30 segundos
4. Deberías ver `test_event`

**Si NO aparece:**
- Verifica que no tengas bloqueador de anuncios activo
- Prueba en modo incógnito
- Verifica MEASUREMENT_ID en `.env.local`

---

#### 7. Probar Firestore Manualmente

En la página de diagnóstico:

1. Click **"Test Firestore Write"**
2. Ve a Firebase Console → Firestore Database
3. Busca colección `waitlist_signups`
4. Deberías ver un documento con `test@example.com`

**Si NO aparece:**
- Verifica las reglas de seguridad (paso 3)
- Revisa la consola del navegador por errores
- Verifica PROJECT_ID en `.env.local`

---

## 🐛 Errores Comunes

### Error: "Firebase: Error (auth/api-key-not-valid)"

**Causa:** API Key incorrecta

**Solución:**
1. Ve a Firebase Console → Project Settings → General
2. Scroll a "Your apps" → Web app
3. Copia el `apiKey` correcto
4. Actualiza `.env.local`
5. Reinicia servidor: `npm run dev`

---

### Error: "Missing or insufficient permissions"

**Causa:** Reglas de Firestore incorrectas

**Solución:**
1. Ve a Firestore Database → Reglas
2. Pega las reglas del paso 3 (arriba)
3. Click "Publicar"
4. Espera 1 minuto
5. Prueba de nuevo

---

### Error: Analytics no se inicializa

**Causa:** Bloqueador de anuncios o extensión del navegador

**Solución:**
1. Desactiva bloqueadores de anuncios
2. Prueba en modo incógnito
3. Prueba en otro navegador
4. Verifica que MEASUREMENT_ID sea correcto

---

### Error: "Cannot find module 'firebase/app'"

**Causa:** Firebase no instalado

**Solución:**
```bash
npm install
npm run dev
```

---

## 🔍 Verificación Final

### Checklist Completo

- [ ] `.env.local` existe y tiene todas las variables
- [ ] Firestore Database está creada
- [ ] Reglas de Firestore publicadas correctamente
- [ ] Google Analytics habilitado en Firebase
- [ ] Servidor reiniciado después de cambios
- [ ] `/test-firebase` muestra ambos ✅
- [ ] Test de Analytics funciona
- [ ] Test de Firestore funciona
- [ ] No hay errores en consola del navegador

---

## 📞 Si Nada Funciona

### Opción 1: Recrear Firebase Config

1. Borra `.env.local`
2. Ve a Firebase Console → Project Settings
3. Scroll a "Your apps" → Click en tu web app
4. Copia TODOS los valores
5. Crea nuevo `.env.local`:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=tu_valor_aqui
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=regalo-db.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=regalo-db
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=regalo-db.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_valor_aqui
NEXT_PUBLIC_FIREBASE_APP_ID=tu_valor_aqui
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

6. Reinicia: `npm run dev`

---

### Opción 2: Limpiar Cache

```bash
# Detener servidor (Ctrl+C)
rm -rf .next
npm run dev
```

---

### Opción 3: Verificar en Producción

A veces funciona en producción pero no en local:

```bash
npm run build
npm start
```

Abre: http://localhost:3000

---

## 📊 Cómo Verificar que Funciona

### Analytics Funcionando ✅

1. Firebase Console → Analytics → Eventos (tiempo real)
2. Navega por tu sitio
3. Deberías ver eventos aparecer en 10-30 segundos

### Firestore Funcionando ✅

1. Completa el cuestionario
2. Firebase Console → Firestore Database
3. Deberías ver documento en `questionnaire_responses`

### Waitlist Funcionando ✅

1. Únete a waitlist
2. Firebase Console → Firestore Database
3. Deberías ver documento en `waitlist_signups`

---

## 🎯 Próximos Pasos

Una vez que todo funcione:

1. ✅ Completa el checklist de arriba
2. ✅ Prueba en `/test-firebase`
3. ✅ Verifica eventos en Analytics
4. ✅ Verifica datos en Firestore
5. ✅ Despliega en Vercel (agrega variables de entorno allí también)
