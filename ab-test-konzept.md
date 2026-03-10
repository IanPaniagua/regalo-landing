# Concepto de Test A/B - Regalo App

A continuación se detalla de manera sencilla y estructurada el diseño del test A/B, basándose en tus ideas de crear un enfoque más emocional y un cambio de la Propuesta Única de Valor (USP).

---

### 1. Was ist das Ziel deines A/B Test? Also: Welche Hypothese möchtest du validieren?
*(¿Cuál es el objetivo del test? / ¿Qué hipótesis quieres validar?)*

El objetivo es determinar qué enfoque de comunicación y diseño genera más conversiones para la plataforma. Queremos validar dos hipótesis principales basadas en tus ideas:
*   **Hipótesis 1 (Emocional vs. Descriptiva):** Una landing page enfocada en evocar emociones (mediante imágenes de personas felices, videos, fiestas y comidas) generará una mayor tasa de conversión que la landing page actual, que es principalmente descriptiva sobre las funcionalidades.
*   **Hipótesis 2 (Nuevo USP):** Cambiar el USP actual enfocado en un "calendario" por un mensaje centrado en "conexiones sociales y la organización de regalos en grupo" resonará mejor con las necesidades del público y aumentará las conversiones.

### 2. Wie viele Test Varianten erstellst du? Warum?
*(¿Cuántas variantes del test vas a crear y por qué?)*

Crearemos **2 variantes nuevas** para competir contra la original en un **test A/B/C**:
*   **Variante A (Original):** El diseño funcional y descriptivo actual enfocado en el calendario.
*   **Variante B (Enfoque Emocional):** Landing page altamente visual, con fotos/videos de fiestas y estilo de vida, pero manteniendo el mensaje actual.
*   **Variante C (Enfoque Social USP):** Mismo diseño base pero con un cambio completo del texto (copy) centrado en las conexiones sociales y regalos grupales.

**¿Por qué?** Porque si combinamos imágenes emocionales con un nuevo texto en una sola variante y logramos ganar, no sabremos con certeza qué causó el éxito (si la imagen o el texto). Probarlas como variantes separadas nos da datos más precisos.

### 3. Was ist der Umfang deines Tests?
*(¿Cuál es el alcance del test / la lista de diferencias con el original?)*

*   **Para la Variante B (Emocional):**
    *   Reemplazo de los "mockups" o capturas de pantalla de la app por fotografías y micro-videos de personas celebrando cumpleaños.
    *   Cambio de la paleta de colores/UI a algo más festivo y cálido.
*   **Para la Variante C (Nuevo USP):**
    *   Cambio de los textos del "Hero Section" (Título Principal y Subtítulo) para eliminar la palabra "calendario" y enfocarlo en "organizar en grupo".
    *   Modificación de los beneficios en la página para resaltar la *conexión social* en vez de las funcionalidades técnicas.

### 4. Wie sieht dein Test Set up aus?
*(¿Cómo se ve tu configuración técnica / Wireframes, Prototipos, Herramientas?)*

*   **Wireframes/Prototype:** Se diseñarán las dos nuevas variantes en **Figma** antes de desarrollarlas, para asegurar que el contenido emocional fluya bien.
*   **Herramientas (Tools):** Un software comercial de A/B Testing (como VWO, Optimizely, o PostHog) que permita dividir el tráfico de la web.
*   **Requisito técnico:** El tráfico se dividirá equitativamente (33% a cada variante) para que el muestreo sea justo.

### 5. Welche Metriken wählst du als Test-KPI? Warum?
*(¿Qué métricas eliges como KPI del test y por qué?)*

*   **Click-Through-Rate (CTR) de los botones de acción:** El porcentaje de clics en el botón de "Registrarse" o "Usar app".
*   **¿Por qué?** Es la manera más directa de medir si el mensaje social o las imágenes emocionales son lo suficientemente persuasivos para invitar al usuario a dar el siguiente paso inmediatamente.

### 6. Was ist die Ziel-Metrik deines Tests? Gibt es Alternativen?
*(¿Cuál es la métrica objetivo? ¿Hay micro-conversiones alternativas?)*

*   **Métrica Objetivo (Ziel-Metrik):** Tasa de Conversión Real / Tasa de Registro (usuarios que llegan a crear una cuenta o instalar).
*   **Alternativas (Micro-Conversions):** 
    *   *Scroll Depth* (Nivel de profundidad de scroll): Muy útil para la versión emocional para ver si las imágenes invitan a explorar más la web.
    *   *Video Play Rate* (Tasa de reproducción): Si incluimos videos de celebraciones en la Variante B.

### 7. Welche zusätzlichen KPIs möchtest du für den Test im Blick behalten?
*(¿Qué KPIs adicionales quieres mantener vigilados?)*

*   **Bounce Rate (Tasa de rebote):** Para identificar si el nuevo enfoque de texto (USP) asusta a los usuarios o si, por el contrario, los retiene más que el actual.
*   **Time on Page (Tiempo en página):** Para observar si la landing emocional hace que los usuarios se queden más segundos consumiendo el contenido visual.

### 8. Was brauchst du für dein Test Set up?
*(¿Qué necesitas para tu set up: Herramientas, Landing Builders, Devs, BI?)*

*   **Diseño y Multimedia:** Bancos de fotos de alta calidad o material en video de fiestas de cumpleaños.
*   **Herramienta de Testing:** Una licencia de software de A/B Testing configurada.
*   **Soporte de Desarrollo (Devs):** Si la web actual está programada a medida, necesitamos un desarrollador Frontend para incrustar el script del test A/B y maquetar las variantes B y C. (Si está en un *Builder* como Webflow o Framer, lo puede hacer el equipo de marketing).
*   **Apoyo Analítico (BI):** Asegurar que las etiquetas de conversión (ej. Google Tag Manager o Mixpanel) estén disparando correctamente los eventos ("SignUp_Clicked") antes de lanzar el test para no perder datos.
