import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trigga — Automatizaciones para tu negocio",
  description:
    "Automatizamos las tareas repetitivas de tu emprendimiento. Notificaciones, integraciones, chatbots, emails automáticos y más. Buenos Aires, Argentina.",
  openGraph: {
    title: "Trigga — Automatizaciones para tu negocio",
    description:
      "Automatizamos las tareas repetitivas de tu emprendimiento. Notificaciones, integraciones, chatbots, emails automáticos y más. Buenos Aires, Argentina.",
    type: "website",
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
      <body>{children}</body>
    </html>
  );
}
