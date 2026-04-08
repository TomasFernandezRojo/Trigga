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

// ─── Constants ────────────────────────────────────────────────────────────────
const WA_LINK = "https://wa.me/5491100000000";
const ACCENT = "#22D68A";

// ─── Icons ────────────────────────────────────────────────────────────────────
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ─── Animated counter ─────────────────────────────────────────────────────────
function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = value / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl sm:text-4xl font-bold text-white">
        {count}
        <span style={{ color: ACCENT }}>{suffix}</span>
      </p>
      <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
        {label}
      </p>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Casos", href: "#casos" },
    { label: "Precios", href: "#precios" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }} className="sticky top-0 z-50 w-full">
      <div style={{ backgroundColor: "rgba(10,10,11,0.85)", backdropFilter: "blur(12px)" }} className="w-full">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-black" style={{ backgroundColor: ACCENT }}>T</span>
            <span className="text-white font-semibold text-base tracking-tight">trigga</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>
                {l.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm text-black transition-transform duration-200 hover:scale-105"
              style={{ backgroundColor: ACCENT }}
            >
              Contactar
            </a>
          </nav>

          <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(!open)} aria-label="Menú">
            <span className="block w-5 h-0.5 bg-white transition-transform duration-300" style={{ transform: open ? "rotate(45deg) translateY(8px)" : "none" }} />
            <span className="block w-5 h-0.5 bg-white transition-opacity duration-300" style={{ opacity: open ? 0 : 1 }} />
            <span className="block w-5 h-0.5 bg-white transition-transform duration-300" style={{ transform: open ? "rotate(-45deg) translateY(-8px)" : "none" }} />
          </button>
        </div>

        {open && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm py-1 transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>
                {l.label}
              </a>
            ))}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm text-black" style={{ backgroundColor: ACCENT }}>
              <WhatsAppIcon size={16} />
              Contactar
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const ref = useReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="fade-in relative flex flex-col items-center text-center px-6 pt-24 pb-16 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div style={{ width: "700px", height: "500px", background: "radial-gradient(ellipse at center, rgba(34,214,138,0.10) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      <div className="relative mb-8 inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium" style={{ border: `1px solid rgba(34,214,138,0.3)`, color: ACCENT, backgroundColor: "rgba(34,214,138,0.06)" }}>
        Agencia de automatización
      </div>

      <h1 className="relative text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl">
        <span className="text-white">Automatizamos tu negocio</span>
        <br />
        <span style={{ color: ACCENT }}>para que escale solo</span>
      </h1>

      <p className="relative mt-6 max-w-lg text-base sm:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
        Eliminamos las tareas repetitivas que te frenan. Integraciones, notificaciones, chatbots y flujos automáticos para que te enfoques en crecer.
      </p>

      <div className="relative flex flex-col sm:flex-row items-center gap-4 mt-10">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold text-sm text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,214,138,0.4)]"
          style={{ backgroundColor: ACCENT }}
        >
          <WhatsAppIcon />
          Agendar llamada gratis
        </a>
        <a
          href="#como-funciona"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:bg-white/10"
          style={{ border: "1px solid rgba(255,255,255,0.15)" }}
        >
          Cómo funciona
        </a>
      </div>

      <p className="relative mt-4 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
        Sin compromiso · Respuesta en menos de 24hs
      </p>
    </section>
  );
}

// ─── Stats bar ────────────────────────────────────────────────────────────────
function StatsBar() {
  const ref = useReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="fade-in px-6 py-16" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <AnimatedStat value={50} suffix="+" label="Automatizaciones activas" />
        <AnimatedStat value={200} suffix="h" label="Horas ahorradas al mes" />
        <AnimatedStat value={99} suffix="%" label="Uptime garantizado" />
        <AnimatedStat value={24} suffix="hs" label="Tiempo de respuesta" />
      </div>
    </section>
  );
}

// ─── Servicios ────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: "⚡",
    title: "Notificaciones inteligentes",
    desc: "Cada venta, reserva o formulario te avisa al instante por email, WhatsApp o Slack.",
    features: ["Email automático", "WhatsApp Business", "Slack & Discord"],
  },
  {
    icon: "🔗",
    title: "Integraciones a medida",
    desc: "Conectamos tus herramientas para que los datos fluyan sin intervención manual.",
    features: ["MercadoPago", "Google Sheets", "Tiendanube"],
  },
  {
    icon: "🤖",
    title: "Chatbots con IA",
    desc: "Un asistente en tu web o WhatsApp que responde consultas y califica leads 24/7.",
    features: ["WhatsApp Bot", "Chat web", "Respuestas con IA"],
  },
  {
    icon: "📧",
    title: "Emails automáticos",
    desc: "Bienvenida, seguimiento, post-venta. Tus clientes siempre atendidos, sin esfuerzo.",
    features: ["Secuencias", "Post-venta", "Recupero de carritos"],
  },
  {
    icon: "📊",
    title: "Dashboards y reportes",
    desc: "Paneles en tiempo real para ver ventas, pedidos y métricas clave de un vistazo.",
    features: ["Métricas en vivo", "Reportes semanales", "Alertas"],
  },
  {
    icon: "📅",
    title: "Turnos y reservas",
    desc: "Tus clientes reservan online, vos recibís todo organizado automáticamente.",
    features: ["Agenda online", "Recordatorios", "Sync con Google Calendar"],
  },
];

function Servicios() {
  const titleRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="servicios" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef as React.RefObject<HTMLDivElement>} className="fade-in text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ACCENT, letterSpacing: "0.1em" }}>
            Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
            Todo lo que necesitás para automatizar tu negocio
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            Soluciones personalizadas que se adaptan a tu operación
          </p>
        </div>

        <div ref={gridRef as React.RefObject<HTMLDivElement>} className="fade-in-child grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:translate-y-[-2px]"
              style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(34,214,138,0.2)"; e.currentTarget.style.backgroundColor = "rgba(34,214,138,0.03)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)"; }}
            >
              <span className="text-3xl">{s.icon}</span>
              <h3 className="font-semibold text-white text-base">{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{s.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {s.features.map((f) => (
                  <span key={f} className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Comparativa ──────────────────────────────────────────────────────────────
const COMPARISONS = [
  { task: "Notificar cada venta", manual: "Revisar MercadoPago constantemente", auto: "Email + WhatsApp al instante" },
  { task: "Responder consultas", manual: "Responder uno por uno, a toda hora", auto: "Chatbot IA 24/7 automático" },
  { task: "Seguimiento post-venta", manual: "Acordarse y escribir manualmente", auto: "Secuencia de emails automática" },
  { task: "Agendar turnos", manual: "Mensajes ida y vuelta por WhatsApp", auto: "Link de reserva + confirmación auto" },
  { task: "Reportes de ventas", manual: "Planilla Excel actualizada a mano", auto: "Dashboard en tiempo real" },
  { task: "Cargar pedidos", manual: "Copiar datos entre plataformas", auto: "Sync automático entre sistemas" },
];

function Comparativa() {
  const ref = useReveal();

  return (
    <section className="px-6 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-4xl mx-auto">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="fade-in">
          <p className="text-center text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ACCENT, letterSpacing: "0.1em" }}>
            Antes vs Después
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-4">
            Dejá de hacer todo a mano
          </h2>
          <p className="text-center text-base mb-12 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            Mirá cómo cambia tu operación con automatizaciones
          </p>
        </div>

        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          {/* Header */}
          <div className="grid grid-cols-3 px-6 py-4 text-xs font-semibold uppercase tracking-wider" style={{ backgroundColor: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.4)" }}>
            <span>Tarea</span>
            <span className="text-center">Manual</span>
            <span className="text-center" style={{ color: ACCENT }}>Con Trigga</span>
          </div>

          {/* Rows */}
          {COMPARISONS.map((c, i) => (
            <div key={i} className="grid grid-cols-3 px-6 py-4 items-center" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
              <span className="text-sm font-medium text-white">{c.task}</span>
              <span className="text-sm text-center flex items-center justify-center gap-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                <XIcon />
                <span className="hidden sm:inline">{c.manual}</span>
              </span>
              <span className="text-sm text-center flex items-center justify-center gap-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                <CheckIcon />
                <span className="hidden sm:inline">{c.auto}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Cómo funciona ────────────────────────────────────────────────────────────
const STEPS = [
  {
    num: "01",
    title: "Hablamos",
    desc: "Nos contás cómo funciona tu negocio y qué tareas te consumen más tiempo. Sin tecnicismos.",
  },
  {
    num: "02",
    title: "Diseñamos",
    desc: "Armamos un plan de automatización a medida y te presentamos la solución antes de empezar.",
  },
  {
    num: "03",
    title: "Implementamos",
    desc: "Configuramos todo, lo conectamos con tus herramientas y lo dejamos andando. Vos no tocás nada.",
  },
  {
    num: "04",
    title: "Optimizamos",
    desc: "Monitoreamos, ajustamos y escalamos. Tu negocio se adapta solo a medida que crece.",
  },
];

function ComoFunciona() {
  const titleRef = useReveal();
  const stepsRef = useReveal();

  return (
    <section id="como-funciona" className="px-6 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef as React.RefObject<HTMLDivElement>} className="fade-in text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ACCENT, letterSpacing: "0.1em" }}>
            Proceso
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Cómo trabajamos
          </h2>
        </div>

        <div ref={stepsRef as React.RefObject<HTMLDivElement>} className="fade-in-child grid grid-cols-1 md:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <div key={s.num} className="relative flex flex-col gap-4 p-6 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <span className="text-3xl font-bold" style={{ color: "rgba(34,214,138,0.25)" }}>{s.num}</span>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Caso de éxito (KLOTHS) ──────────────────────────────────────────────────
function CasoExito() {
  const ref = useReveal();

  return (
    <section id="casos" className="px-6 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ACCENT, letterSpacing: "0.1em" }}>
          Caso real
        </p>
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-12">
          Resultados que hablan solos
        </h2>

        <div ref={ref as React.RefObject<HTMLDivElement>} className="fade-in rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(34,214,138,0.15)", backgroundColor: "rgba(34,214,138,0.03)" }}>
          {/* Header */}
          <div className="px-8 pt-8 pb-6 flex items-center gap-4" style={{ borderBottom: "1px solid rgba(34,214,138,0.1)" }}>
            <span className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold text-black flex-shrink-0" style={{ backgroundColor: ACCENT }}>
              K
            </span>
            <div>
              <p className="font-bold text-white text-lg">KLOTHS</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                Tienda de surfwear — kloths.com.ar
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 px-8 py-6" style={{ borderBottom: "1px solid rgba(34,214,138,0.1)" }}>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">0</p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>Intervención manual</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">&lt;3s</p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>Notificación de venta</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>Pedidos rastreados</p>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Problema</p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Procesar ventas manualmente, revisando MercadoPago constantemente y copiando datos a mano.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Solución</p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Webhook que detecta pagos aprobados y envía email automático con datos del cliente, productos y dirección de envío.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Resultado</p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Cero intervención manual. Cada venta genera un email con toda la información lista para despachar.
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="px-8 pb-8">
            <div className="rounded-xl p-6" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
              <p className="text-sm italic leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                &ldquo;Antes perdía tiempo revisando MercadoPago todo el día. Ahora me llega un mail con todo listo y solo tengo que preparar el envío.&rdquo;
              </p>
              <p className="text-sm font-semibold text-white mt-3">— Kloths, surfwear argentino</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Herramientas / Logos ────────────────────────────────────────────────────
const TOOLS = [
  "MercadoPago", "WhatsApp Business", "Google Sheets", "Tiendanube",
  "Slack", "Gmail", "Google Calendar", "Notion",
  "Stripe", "Instagram", "Zapier", "Make",
];

function Herramientas() {
  const ref = useReveal();

  return (
    <section className="px-6 py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-5xl mx-auto text-center">
        <p ref={ref as React.RefObject<HTMLParagraphElement>} className="fade-in text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>
          Nos integramos con tus herramientas
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {TOOLS.map((t) => (
            <span key={t} className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-white/10" style={{ backgroundColor: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.06)" }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Precios ──────────────────────────────────────────────────────────────────
const PLANS = [
  {
    name: "Starter",
    desc: "Para emprendimientos que arrancan a automatizar",
    features: [
      "Hasta 3 automatizaciones",
      "Notificaciones por email",
      "Integración con 1 plataforma",
      "Soporte por WhatsApp",
      "Setup en 48hs",
    ],
    cta: "Empezar",
    highlighted: false,
  },
  {
    name: "Pro",
    desc: "Para negocios que quieren escalar sin límites",
    features: [
      "Automatizaciones ilimitadas",
      "Chatbot con IA",
      "Integraciones múltiples",
      "Dashboard personalizado",
      "Soporte prioritario",
      "Optimización continua",
    ],
    cta: "Contactar",
    highlighted: true,
  },
  {
    name: "Enterprise",
    desc: "Soluciones custom para operaciones complejas",
    features: [
      "Todo lo de Pro",
      "Desarrollo a medida",
      "Infraestructura dedicada",
      "SLA garantizado",
      "Onboarding personalizado",
      "Account manager",
    ],
    cta: "Hablemos",
    highlighted: false,
  },
];

function Precios() {
  const titleRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="precios" className="px-6 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef as React.RefObject<HTMLDivElement>} className="fade-in text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ACCENT, letterSpacing: "0.1em" }}>
            Precios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Planes que se adaptan a tu negocio
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            Cada proyecto es diferente. Hablemos y armamos el plan perfecto para vos.
          </p>
        </div>

        <div ref={gridRef as React.RefObject<HTMLDivElement>} className="fade-in-child grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className="rounded-xl p-7 flex flex-col transition-all duration-300 hover:translate-y-[-2px]"
              style={{
                backgroundColor: p.highlighted ? "rgba(34,214,138,0.04)" : "rgba(255,255,255,0.03)",
                border: p.highlighted ? "1px solid rgba(34,214,138,0.25)" : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {p.highlighted && (
                <span className="self-start text-xs font-semibold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(34,214,138,0.15)", color: ACCENT }}>
                  Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-white">{p.name}</h3>
              <p className="text-sm mt-2 mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>{p.desc}</p>

              <p className="text-2xl font-bold text-white mb-6">
                A definir
                <span className="text-sm font-normal ml-2" style={{ color: "rgba(255,255,255,0.35)" }}>/ proyecto</span>
              </p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={
                  p.highlighted
                    ? { backgroundColor: ACCENT, color: "#000" }
                    : { border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }
                }
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "¿Qué tipo de negocios pueden automatizar?",
    a: "Cualquier negocio con tareas repetitivas: e-commerce, servicios, gastronomía, salud, educación, inmobiliarias y más. Si hacés algo a mano más de 2 veces, se puede automatizar.",
  },
  {
    q: "¿Cuánto tarda la implementación?",
    a: "Depende de la complejidad. Automatizaciones simples (notificaciones, emails) se entregan en 48hs. Proyectos más complejos (chatbots, dashboards) pueden tomar 1-2 semanas.",
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "No. Nosotros nos encargamos de todo: diseño, configuración, testing y puesta en marcha. Vos solo nos contás qué necesitás.",
  },
  {
    q: "¿Qué pasa si algo falla?",
    a: "Monitoreamos todo 24/7. Si algo se rompe, lo detectamos y arreglamos antes de que te des cuenta. Además, tenés soporte directo por WhatsApp.",
  },
  {
    q: "¿Puedo escalar después?",
    a: "Sí. Las automatizaciones se diseñan para crecer con tu negocio. Agregar nuevas funciones o integraciones es simple y rápido.",
  },
  {
    q: "¿Cómo es el proceso de pago?",
    a: "Cotizamos cada proyecto de forma personalizada. Trabajamos con un pago inicial + entregas. Sin costos ocultos ni sorpresas.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="text-sm font-medium text-white">{q}</span>
        <span style={{ color: "rgba(255,255,255,0.4)" }}>
          <ChevronIcon open={open} />
        </span>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open ? "200px" : "0", opacity: open ? 1 : 0 }}>
        <p className="pb-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
          {a}
        </p>
      </div>
    </div>
  );
}

function Faq() {
  const ref = useReveal();

  return (
    <section id="faq" className="px-6 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-3xl mx-auto">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="fade-in text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ACCENT, letterSpacing: "0.1em" }}>
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="rounded-xl px-6" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
          {FAQS.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA final ────────────────────────────────────────────────────────────────
function CtaFinal() {
  const ref = useReveal();

  return (
    <section className="px-6 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div ref={ref as React.RefObject<HTMLDivElement>} className="fade-in max-w-3xl mx-auto text-center">
        <div className="rounded-2xl p-12" style={{ background: "linear-gradient(135deg, rgba(34,214,138,0.08) 0%, rgba(34,214,138,0.02) 100%)", border: "1px solid rgba(34,214,138,0.15)" }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Listo para automatizar?
          </h2>
          <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            Contanos tu problema y te mostramos cómo resolverlo. Primera consulta gratis, sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold text-sm text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,214,138,0.4)]"
              style={{ backgroundColor: ACCENT }}
            >
              <WhatsAppIcon />
              Escribinos por WhatsApp
            </a>
            <a
              href="mailto:contacto@trigga.com.ar"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Enviar email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="px-6 py-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-black" style={{ backgroundColor: ACCENT }}>T</span>
              <span className="text-white font-semibold text-sm">trigga</span>
            </div>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
              Automatizaciones para negocios que quieren escalar.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <a href="#servicios" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>Servicios</a>
            <a href="#como-funciona" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>Proceso</a>
            <a href="#casos" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>Casos</a>
            <a href="#precios" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>Precios</a>
            <a href="#faq" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>FAQ</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2026 Trigga. Buenos Aires, Argentina.
          </span>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            trigga.com.ar
          </span>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main style={{ backgroundColor: "#0A0A0B", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <StatsBar />
      <Servicios />
      <Comparativa />
      <ComoFunciona />
      <CasoExito />
      <Herramientas />
      <Precios />
      <Faq />
      <CtaFinal />
      <Footer />
    </main>
  );
}
