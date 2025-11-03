# Dashboard de Administración

## Acceso

El dashboard está disponible en la ruta oculta:

```
https://tu-dominio.com/dashboard
```

**No hay enlaces desde la UI principal** - solo accesible mediante URL directa.

## Autenticación

El dashboard está protegido con contraseña simple.

### Contraseña por defecto
- **Contraseña:** `regalo2024`

### Cambiar la contraseña

Agrega la variable de entorno en `.env.local`:

```env
NEXT_PUBLIC_DASHBOARD_PASSWORD=tu_contraseña_segura
```

## Configuración de Firestore

Para que el dashboard pueda leer datos, necesitas:

### 1. Desplegar las reglas de Firestore

El archivo `firestore.rules` ya está creado. Despliégalo con:

```bash
firebase deploy --only firestore:rules
```

### 2. Reglas actuales

Las reglas permiten:
- ✅ **Crear** respuestas de cuestionario y waitlist (público)
- ✅ **Leer** respuestas desde el dashboard (actualmente público, cambiar en producción)
- ❌ **No leer** eventos de analytics (solo escritura)

### 3. Seguridad en producción (recomendado)

Para mayor seguridad, implementa Firebase Authentication y cambia las reglas:

```javascript
// En firestore.rules, cambiar:
allow read: if true;

// Por:
allow read: if request.auth != null;
```

Luego implementa login con Firebase Auth en el dashboard.

## Funcionalidades

### Vista de Cuestionarios
- Lista de todas las respuestas recibidas
- Detalles completos de cada respuesta
- Información de metadata (tiempo, idioma, dispositivo)
- Ordenadas por fecha (más recientes primero)

### Vista de Waitlist
- Tabla con todos los registros
- Nombre, email, origen (landing/questionnaire)
- Fecha de registro
- Filtrado por origen

## Datos mostrados

### Por cada respuesta del cuestionario:
- ID único
- Fecha y hora de completado
- Tiempo total invertido
- Progreso (pasos completados)
- Todas las respuestas con etiquetas legibles
- Respuestas de texto libre
- Metadata del dispositivo

### Por cada registro de waitlist:
- Nombre
- Email
- Origen (landing o questionnaire)
- Fecha de registro

## Desarrollo local

Para probar el dashboard localmente:

1. Asegúrate de tener Firebase configurado en `.env.local`
2. Navega a `http://localhost:3000/dashboard`
3. Introduce la contraseña (por defecto: `regalo2024`)

## Notas de seguridad

⚠️ **Importante:**
- La contraseña actual es básica y se almacena en sessionStorage
- Para producción, considera implementar Firebase Authentication
- Las reglas de Firestore actuales permiten lectura pública
- No compartas la URL del dashboard públicamente
- Considera agregar IP whitelisting en producción
