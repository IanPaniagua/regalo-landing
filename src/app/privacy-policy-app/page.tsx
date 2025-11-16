"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Página de Política de Privacidad para la app móvil RegaloApp
 * - Español cuando language === 'es'
 * - Inglés cuando language es 'en' o 'de'
 */
export default function MobilePrivacyPolicyPage() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <main className="min-h-screen bg-white py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-6 flex justify-center">
              <Logo size="lg" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
              {isSpanish
                ? "Política de Privacidad – RegaloApp"
                : "Privacy Policy – RegaloApp"}
            </h1>
            <p className="font-sans text-neutral-600">
              {isSpanish
                ? "Fecha de última actualización: 16/11/2025"
                : "Last updated: 16/11/2025"}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-neutral max-w-none">
            {isSpanish ? (
              <>
                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    1. Responsable del tratamiento
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    El responsable del tratamiento de tus datos personales es:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>
                      <strong>Nombre:</strong> Ian Manuel Paniagua Porroa
                    </li>
                    <li>
                      <strong>Dirección:</strong> Beim Andreasbrunnen 6, 20249 Hamburg, Alemania
                    </li>
                    <li>
                      <strong>Correo electrónico:</strong> paniagua.ian.de@gmail.com
                    </li>
                    <li>
                      <strong>Teléfono de contacto:</strong> +49 176 10816765
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    2. Datos que recopilamos
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    En RegaloApp recopilamos y tratamos los siguientes tipos de datos:
                  </p>

                  <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3 mt-4">
                    Datos de registro y autenticación
                  </h3>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>Correo electrónico</li>
                    <li>Contraseña (gestionada por Firebase Auth, no se guarda en texto plano)</li>
                    <li>UID de usuario de Firebase</li>
                  </ul>

                  <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3 mt-4">
                    Datos de perfil
                  </h3>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>Nombre</li>
                    <li>Fecha de nacimiento</li>
                    <li>Hobbies</li>
                    <li>Avatar (emoji o imagen)</li>
                  </ul>

                  <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3 mt-4">
                    Datos de uso y conexiones
                  </h3>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>Contactos / conexiones dentro de la app</li>
                    <li>
                      Estadísticas básicas de uso (por ejemplo, fecha de creación de la cuenta, conexiones,
                      invitaciones, etc.)
                    </li>
                  </ul>

                  <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3 mt-4">
                    Datos de notificaciones push
                  </h3>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>Token de Firebase Cloud Messaging (FCM) asociado a tu dispositivo</li>
                  </ul>

                  <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3 mt-4">
                    Datos técnicos
                  </h3>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>Identificadores técnicos anónimos</li>
                    <li>Logs de error y diagnóstico</li>
                  </ul>

                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    No tratamos categorías especiales de datos (como datos de salud, opiniones políticas, etc.).
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    3. Finalidad del tratamiento
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    Usamos tus datos para:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-2 mb-4">
                    <li>Crear y gestionar tu cuenta en RegaloApp.</li>
                    <li>Permitir el inicio de sesión y la autenticación segura.</li>
                    <li>
                      Mostrar y gestionar tus cumpleaños, conexiones y recordatorios dentro del calendario.
                    </li>
                    <li>
                      Enviar notificaciones push sobre recordatorios, invitaciones o cambios relevantes en tu
                      cuenta.
                    </li>
                    <li>
                      Mejorar la app, corregir errores y analizar su uso (a nivel técnico/estadístico).
                    </li>
                    <li>Cumplir obligaciones legales que puedan aplicarnos.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    4. Base legal
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    Tratamos tus datos personales sobre las siguientes bases legales:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-2 mb-4">
                    <li>
                      <strong>Ejecución de un contrato:</strong> para poder prestarte el servicio de RegaloApp
                      (art. 6.1.b RGPD).
                    </li>
                    <li>
                      <strong>Interés legítimo:</strong> para mejorar la app, prevenir fraude y garantizar la
                      seguridad (art. 6.1.f RGPD).
                    </li>
                    <li>
                      <strong>Consentimiento:</strong> para el envío de determinadas notificaciones y usos
                      opcionales. Podrás retirarlo en cualquier momento desde los ajustes del dispositivo o de la
                      app.
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    5. Servicios de terceros y ubicación de los datos
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    RegaloApp utiliza <strong>Firebase</strong> (Google LLC / Google Cloud Platform) como proveedor
                    principal de backend:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>
                      <strong>Servicios usados:</strong> Firebase Authentication, Cloud Firestore,
                      Firebase Cloud Messaging.
                    </li>
                    <li>
                      <strong>Región de almacenamiento:</strong> europe-west3 (Frankfurt, Alemania).
                    </li>
                    <li>
                      <strong>Proveedor:</strong> Google Cloud Platform (GCP).
                    </li>
                  </ul>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    Esto significa que tus datos se almacenan en servidores ubicados en la Unión Europea. No
                    obstante, Google puede realizar transferencias internacionales bajo las cláusulas contractuales
                    tipo y otras garantías reconocidas por el RGPD.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    6. Conservación de los datos
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    Conservaremos tus datos personales:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-2 mb-4">
                    <li>Mientras mantengas activa tu cuenta en RegaloApp.</li>
                    <li>
                      Durante el tiempo necesario para cumplir con obligaciones legales o resolver posibles
                      responsabilidades.
                    </li>
                  </ul>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    Cuando solicites la eliminación de tu cuenta, los datos se borrarán o se anonimizarán de forma
                    segura, salvo aquellos que debamos conservar por obligación legal.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    7. Tus derechos
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    Tienes derecho a:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-2 mb-4">
                    <li>Acceder a tus datos personales.</li>
                    <li>Rectificar datos inexactos o incompletos.</li>
                    <li>Suprimir tus datos ("derecho al olvido") cuando sea posible legalmente.</li>
                    <li>Limitar el tratamiento de tus datos en determinados supuestos.</li>
                    <li>Oponerte al tratamiento basado en interés legítimo.</li>
                    <li>Solicitar la portabilidad de tus datos a otro proveedor.</li>
                  </ul>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    Puedes ejercer estos derechos contactando conmigo en:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>Email: paniagua.ian.de@gmail.com</li>
                    <li>Teléfono: +49 176 10816765</li>
                    <li>Dirección postal: Beim Andreasbrunnen 6, 20249 Hamburg, Alemania</li>
                  </ul>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    Si consideras que tus derechos no han sido respetados, también puedes presentar una reclamación
                    ante la autoridad de protección de datos competente de tu país. En Alemania, por ejemplo, ante la
                    autoridad de protección de datos del estado federado correspondiente.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    8. Seguridad
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    Aplico medidas técnicas y organizativas razonables para proteger tus datos frente a:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>Acceso no autorizado</li>
                    <li>Pérdida o destrucción accidental</li>
                    <li>Uso indebido o modificación no autorizada</li>
                  </ul>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    No obstante, ningún sistema es 100% seguro y no puedo garantizar la seguridad absoluta de la
                    información transmitida por Internet.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    9. Menores de edad
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    RegaloApp no está dirigida a menores de 16 años. Si detecto que se han recopilado datos de un
                    menor sin el consentimiento correspondiente, procederé a eliminar dicha información.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    10. Cambios en esta política
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    Esta Política de Privacidad puede actualizarse para reflejar cambios en la app o en la normativa
                    aplicable. Cuando eso ocurra:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>Se actualizará la fecha de "Última actualización".</li>
                    <li>Podré informar de los cambios relevantes dentro de la app.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    11. Contacto
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    Para cualquier duda sobre esta Política de Privacidad o sobre el tratamiento de tus datos
                    personales, puedes contactar en:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>Nombre: Ian Manuel Paniagua Porroa</li>
                    <li>Email: paniagua.ian.de@gmail.com</li>
                    <li>Teléfono: +49 176 10816765</li>
                    <li>Dirección: Beim Andreasbrunnen 6, 20249 Hamburg, Alemania</li>
                  </ul>
                </section>
              </>
            ) : (
              <>
                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    1. Data Controller
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    The data controller responsible for your personal data is:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>
                      <strong>Name:</strong> Ian Manuel Paniagua Porroa
                    </li>
                    <li>
                      <strong>Address:</strong> Beim Andreasbrunnen 6, 20249 Hamburg, Germany
                    </li>
                    <li>
                      <strong>Email:</strong> paniagua.ian.de@gmail.com
                    </li>
                    <li>
                      <strong>Phone:</strong> +49 176 10816765
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    2. Data We Collect
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    In RegaloApp we collect and process the following types of data:
                  </p>

                  <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3 mt-4">
                    Registration and authentication data
                  </h3>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>Email address</li>
                    <li>Password (managed by Firebase Auth, not stored in plain text)</li>
                    <li>Firebase user UID</li>
                  </ul>

                  <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3 mt-4">
                    Profile data
                  </h3>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>Name</li>
                    <li>Date of birth</li>
                    <li>Hobbies</li>
                    <li>Avatar (emoji or image)</li>
                  </ul>

                  <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3 mt-4">
                    Usage and connections data
                  </h3>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>Contacts / connections inside the app</li>
                    <li>
                      Basic usage statistics (e.g. account creation date, connections, invitations, etc.)
                    </li>
                  </ul>

                  <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3 mt-4">
                    Push notification data
                  </h3>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>Firebase Cloud Messaging (FCM) token associated with your device</li>
                  </ul>

                  <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3 mt-4">
                    Technical data
                  </h3>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>Anonymous technical identifiers</li>
                    <li>Error and diagnostic logs</li>
                  </ul>

                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    We do not process special categories of personal data (such as health data, political opinions,
                    etc.).
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    3. Purposes of Processing
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    We use your data to:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-2 mb-4">
                    <li>Create and manage your RegaloApp account.</li>
                    <li>Allow you to log in and authenticate securely.</li>
                    <li>Display and manage your birthdays, connections and reminders in the calendar.</li>
                    <li>
                      Send push notifications about reminders, invitations or other relevant changes to your
                      account.
                    </li>
                    <li>
                      Improve the app, fix bugs and analyze usage (at a technical / statistical level).
                    </li>
                    <li>Comply with legal obligations that may apply to us.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    4. Legal Basis
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    We process your personal data on the following legal bases:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-2 mb-4">
                    <li>
                      <strong>Performance of a contract:</strong> to provide you with the RegaloApp service (Art.
                      6(1)(b) GDPR).
                    </li>
                    <li>
                      <strong>Legitimate interest:</strong> to improve the app, prevent fraud and ensure security
                      (Art. 6(1)(f) GDPR).
                    </li>
                    <li>
                      <strong>Consent:</strong> for certain notifications and optional uses. You can withdraw your
                      consent at any time in the app or device settings.
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    5. Third-Party Services and Data Location
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    RegaloApp uses <strong>Firebase</strong> (Google LLC / Google Cloud Platform) as its main backend
                    provider:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>
                      <strong>Services used:</strong> Firebase Authentication, Cloud Firestore, Firebase Cloud
                      Messaging.
                    </li>
                    <li>
                      <strong>Storage region:</strong> europe-west3 (Frankfurt, Germany).
                    </li>
                    <li>
                      <strong>Provider:</strong> Google Cloud Platform (GCP).
                    </li>
                  </ul>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    This means that your data is stored on servers located in the European Union. However, Google may
                    carry out international data transfers based on Standard Contractual Clauses and other safeguards
                    recognised by the GDPR.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    6. Data Retention
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    We keep your personal data:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-2 mb-4">
                    <li>For as long as your RegaloApp account remains active.</li>
                    <li>
                      For the time necessary to comply with legal obligations or resolve potential liabilities.
                    </li>
                  </ul>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    When you request deletion of your account, your data will be deleted or anonymised securely,
                    except for data we must keep to comply with legal obligations.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    7. Your Rights
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-2 mb-4">
                    <li>Access your personal data.</li>
                    <li>Rectify inaccurate or incomplete data.</li>
                    <li>Request erasure of your data ("right to be forgotten") where legally possible.</li>
                    <li>Restrict processing of your data in certain circumstances.</li>
                    <li>Object to processing based on legitimate interests.</li>
                    <li>Request data portability to another provider.</li>
                  </ul>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    You can exercise these rights by contacting me at:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>Email: paniagua.ian.de@gmail.com</li>
                    <li>Phone: +49 176 10816765</li>
                    <li>Postal address: Beim Andreasbrunnen 6, 20249 Hamburg, Germany</li>
                  </ul>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    If you believe your rights have not been respected, you can lodge a complaint with the competent
                    data protection authority in your country. In Germany, for example, with the data protection
                    authority of the relevant federal state.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    8. Security
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    I apply reasonable technical and organisational measures to protect your data against:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>Unauthorised access</li>
                    <li>Accidental loss or destruction</li>
                    <li>Misuse or unauthorised modification</li>
                  </ul>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    However, no system is 100% secure and I cannot guarantee absolute security of information
                    transmitted over the Internet.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    9. Minors
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    RegaloApp is not intended for children under 16. If I become aware that data has been collected
                    from a minor without the required consent, I will proceed to delete such information.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    10. Changes to This Policy
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    This Privacy Policy may be updated to reflect changes in the app or in applicable regulations.
                    When this happens:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>The "Last updated" date will be changed.</li>
                    <li>I may inform you of relevant changes within the app.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                    11. Contact
                  </h2>
                  <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or about how your personal data is
                    processed, you can contact me at:
                  </p>
                  <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4">
                    <li>Name: Ian Manuel Paniagua Porroa</li>
                    <li>Email: paniagua.ian.de@gmail.com</li>
                    <li>Phone: +49 176 10816765</li>
                    <li>Address: Beim Andreasbrunnen 6, 20249 Hamburg, Germany</li>
                  </ul>
                </section>
              </>
            )}
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="text-neutral-500 hover:text-neutral-700 transition-colors font-sans text-sm"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
