"use client";

import { useEffect, useRef, useState } from "react";

// ─── Intersection Observer hook ───────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

// ─── WhatsApp link ─────────────────────────────────────────────────────────────
const WA_LINK = "https://wa.me/5491100000000";

// ─── WhatsApp icon ─────────────────────────────────────────────────────────────
function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "servicios", href: "#servicios" },
    { label: "portfolio", href: "#portfolio" },
    { label: "contacto", href: "#contacto" },
  ];

  return (
    <header
      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      className="sticky top-0 z-50 w-full"
      // Frosted-glass effect via inline style to avoid Tailwind purge issues
    >
      <div
        style={{ backgroundColor: "rgba(10,10,11,0.85)", backdropFilter: "blur(12px)" }}
        className="w-full"
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <span
              className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold text-black"
              style={{ backgroundColor: "#22D68A" }}
            >
              T
            </span>
            <span className="text-white font-medium text-base tracking-tight">trigga</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <span
              className="block w-5 h-0.5 bg-white transition-transform duration-300"
              style={{ transform: open ? "rotate(45deg) translateY(8px)" : "none" }}
            />
            <span
              className="block w-5 h-0.5 bg-white transition-opacity duration-300"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block w-5 h-0.5 bg-white transition-transform duration-300"
              style={{ transform: open ? "rotate(-45deg) translateY(-8px)" : "none" }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className="md:hidden px-6 pb-4 flex flex-col gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm py-1 transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-in relative flex flex-col items-center text-center px-6 pt-24 pb-28 overflow-hidden"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          style={{
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(ellipse at center, rgba(34,214,138,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Badge */}
      <div
        className="relative mb-8 inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium"
        style={{
          border: "1px solid rgba(34,214,138,0.3)",
          color: "#22D68A",
          backgroundColor: "rgba(34,214,138,0.06)",
        }}
      >
        automatizaciones para negocios
      </div>

      {/* H1 */}
      <h1 className="relative text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-3xl">
        <span className="text-white">Tu negocio trabaja</span>
        <br />
        <span style={{ color: "#22D68A" }}>mientras vos dormís</span>
      </h1>

      {/* Subtitle */}
      <p
        className="relative mt-6 max-w-lg text-base sm:text-lg leading-relaxed"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        Automatizamos las tareas repetitivas de tu emprendimiento. Notificaciones,
        integraciones, chatbots y más. Vos enfocate en vender.
      </p>

      {/* CTA */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-10 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg font-semibold text-sm text-black transition-all duration-200"
        style={{ backgroundColor: "#22D68A" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.04)";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 0 24px rgba(34,214,138,0.45)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
        }}
      >
        <WhatsAppIcon />
        Hablemos por WhatsApp
      </a>

      <p
        className="relative mt-3 text-xs"
        style={{ color: "rgba(255,255,255,0.25)" }}
      >
        Respuesta en menos de 24hs
      </p>
    </section>
  );
}

// ─── Servicios ─────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    emoji: "⚡",
    title: "Notificaciones",
    desc: "Cada venta, reserva o formulario te avisa al instante por email o WhatsApp.",
  },
  {
    emoji: "🔗",
    title: "Integraciones",
    desc: "Conectamos MercadoPago, Tiendanube, Google Sheets y más. Todo fluye solo.",
  },
  {
    emoji: "🤖",
    title: "Chatbots",
    desc: "Un bot en tu web o WhatsApp que responde consultas 24/7 por vos.",
  },
  {
    emoji: "📧",
    title: "Emails automáticos",
    desc: "Bienvenida, seguimiento, post-venta. Tus clientes siempre atendidos.",
  },
  {
    emoji: "📊",
    title: "Dashboards",
    desc: "Un panel donde ves tus ventas, pedidos y métricas clave de un vistazo.",
  },
  {
    emoji: "📅",
    title: "Turnos y reservas",
    desc: "Tus clientes reservan online, vos recibís todo organizado automáticamente.",
  },
];

function Servicios() {
  const titleRef = useReveal();
  const gridRef = useReveal();

  return (
    <section
      id="servicios"
      className="px-6 py-24"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p
          ref={titleRef as React.RefObject<HTMLParagraphElement>}
          className="fade-in text-center text-xs font-semibold uppercase tracking-widest mb-12"
          style={{ color: "#22D68A", letterSpacing: "0.1em" }}
        >
          qué hacemos
        </p>

        {/* Grid */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="fade-in-child grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-xl p-6 flex flex-col gap-3 transition-colors duration-200"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255,255,255,0.06)";
              }}
            >
              <span className="text-3xl">{s.emoji}</span>
              <h3 className="font-semibold text-white text-sm">{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Caso de éxito (KLOTHS) ───────────────────────────────────────────────────
function Portfolio() {
  const ref = useReveal();

  return (
    <section
      id="portfolio"
      className="px-6 py-24"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p
          className="text-center text-xs font-semibold uppercase tracking-widest mb-12"
          style={{ color: "#22D68A", letterSpacing: "0.1em" }}
        >
          caso real
        </p>

        {/* Card */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="fade-in rounded-xl p-8"
          style={{
            border: "1px solid rgba(34,214,138,0.2)",
            backgroundColor: "rgba(34,214,138,0.04)",
          }}
        >
          {/* Card header */}
          <div className="flex items-center gap-3 mb-8">
            <span
              className="w-9 h-9 rounded flex items-center justify-center text-sm font-bold text-black flex-shrink-0"
              style={{ backgroundColor: "#22D68A" }}
            >
              K
            </span>
            <div>
              <p className="font-semibold text-white text-sm">KLOTHS</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                Tienda de ropa online — kloths.com.ar
              </p>
            </div>
          </div>

          {/* Three columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Problema
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Procesar ventas manualmente, revisando MercadoPago constantemente.
              </p>
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Solución
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Webhook que detecta pagos y envía email automático con todos los datos.
              </p>
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Resultado
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Cero intervención manual. Cada venta llega con toda la info lista.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA final ─────────────────────────────────────────────────────────────────
function CtaFinal() {
  const ref = useReveal();

  return (
    <section
      id="contacto"
      className="px-6 py-24 text-center"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="fade-in max-w-xl mx-auto flex flex-col items-center gap-6"
      >
        <h2 className="text-2xl sm:text-3xl font-bold leading-snug text-white">
          ¿Tenés tareas que podrían ser automáticas?
        </h2>
        <p className="text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.45)" }}>
          Contanos tu problema y te decimos cómo resolverlo. Sin compromiso.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg font-semibold text-sm text-black transition-all duration-200"
          style={{ backgroundColor: "#22D68A" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.04)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              "0 0 24px rgba(34,214,138,0.45)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
          }}
        >
          <WhatsAppIcon />
          Escribinos por WhatsApp
        </a>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="px-6 py-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
          trigga.com.ar
        </span>
        <span className="text-sm" style={{ color: "rgba(255,255,255,0.25)" }}>
          Buenos Aires, Argentina
        </span>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main style={{ backgroundColor: "#0A0A0B", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Servicios />
      <Portfolio />
      <CtaFinal />
      <Footer />
    </main>
  );
}
