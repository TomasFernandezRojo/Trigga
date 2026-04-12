import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trigga — Automatizaciones para tu negocio | Buenos Aires, Argentina",
  description:
    "Automatizamos las tareas repetitivas de tu emprendimiento o pyme. Notificaciones, integraciones con MercadoPago y Tiendanube, chatbots para WhatsApp, emails automáticos y más. Consultá gratis.",
  keywords: [
    "automatizaciones para negocios",
    "automatización de procesos Argentina",
    "chatbot WhatsApp Argentina",
    "integración MercadoPago",
    "automatización Tiendanube",
    "automatización de emails",
    "notificaciones automáticas",
    "agencia de automatización Buenos Aires",
  ],
  openGraph: {
    title: "Trigga — Automatizaciones para tu negocio",
    description:
      "Eliminamos las tareas manuales que te frenan. Integraciones, chatbots, notificaciones y flujos automáticos para emprendimientos y pymes en Argentina.",
    type: "website",
    locale: "es_AR",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Outfit', sans-serif" }}>{children}</body>
    </html>
  );
}
