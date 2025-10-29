# Implementación de Internacionalización (i18n)

## ✅ Completado

### 1. Sistema Base
- ✅ Archivo de traducciones: `src/lib/translations.ts`
- ✅ Contexto de idioma: `src/contexts/LanguageContext.tsx`
- ✅ Provider agregado al layout: `src/app/layout.tsx`

### 2. Componentes Traducidos
- ✅ **Hero** - Título y botones
- ✅ **CTASection** - Texto completo con subrayado dorado
- ✅ **Footer** - Links, copyright y selector de idioma
- ✅ **CookieBanner** - Mensaje y botones

### 3. Selector de Idioma
- ✅ Ubicado en el Footer
- ✅ Botones EN/ES con highlight dorado
- ✅ Guarda preferencia en localStorage
- ✅ Detecta idioma del navegador automáticamente

## 🔄 Pendiente

### Cuestionario
El cuestionario tiene una estructura compleja en `src/lib/questionnaireData.ts` que necesita ser actualizada para usar el sistema de traducciones.

**Opciones:**
1. **Migrar a nuevo sistema** (recomendado)
   - Usar `src/lib/questionnaireTranslations.ts` que ya creé
   - Actualizar `src/app/questionnaire/page.tsx` para usar traducciones
   - Mantener mismos IDs para analytics

2. **Mantener estructura actual**
   - Agregar campo `translations` a cada step
   - Más complejo pero mantiene código existente

### Página de Waitlist
- `src/app/waitlist/page.tsx` - Agregar traducciones

### Privacy Policy
- Crear versión en español (archivo separado o mismo componente)

## 📊 Analytics

**IMPORTANTE:** Los analytics NO cambian por idioma.
- Todos los eventos usan los mismos IDs
- Los KPIs son compartidos entre idiomas
- Solo cambia la UI, no el tracking

Ejemplo:
```typescript
// Ambos idiomas envían el mismo evento
trackButtonClick("hero-discover", "hero");
```

## 🧪 Testing

### Probar Cambio de Idioma
1. Abre http://localhost:3000
2. Scroll al footer
3. Click en "ES" o "EN"
4. Verifica que todo el contenido cambie

### Verificar Persistencia
1. Cambia idioma
2. Recarga la página
3. El idioma debe mantenerse

### Verificar Detección Automática
1. Borra localStorage: `localStorage.clear()`
2. Recarga
3. Debe detectar idioma del navegador

## 🚀 Próximos Pasos

### Para completar la implementación:

1. **Actualizar Cuestionario**
   ```bash
   # Necesitas decidir si migrar a nuevo sistema o adaptar el actual
   ```

2. **Traducir Waitlist Page**
   ```typescript
   // src/app/waitlist/page.tsx
   const { t } = useLanguage();
   ```

3. **Privacy Policy en Español**
   - Opción A: Componente dinámico con traducciones
   - Opción B: Página separada `/es/privacy-policy`

4. **Testing Completo**
   - Probar todos los flujos en ambos idiomas
   - Verificar que analytics funcione igual

## 📝 Notas

- El idioma se guarda en: `localStorage.getItem('regalo_language')`
- Valores posibles: `'en'` | `'es'`
- Default: Detecta del navegador (`navigator.language`)
- Fallback: `'en'`

## 🎨 UI del Selector de Idioma

Ubicación: Footer, después del link de Privacy Policy

Aspecto:
```
Privacy Policy | Language: [EN] [ES]
                          ^^^^  ^^^^
                       dorado  gris
```

- Idioma activo: Fondo dorado, texto blanco
- Idioma inactivo: Texto gris, hover más oscuro

## ⚠️ Importante

- NO crear rutas separadas (`/en/`, `/es/`)
- Mantener misma URL para ambos idiomas
- Solo cambiar contenido dinámicamente
- Analytics unificado (mismo tracking para ambos)
