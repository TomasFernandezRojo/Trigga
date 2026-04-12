"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

// ─── Intersection Observer hooks ──────────────────────────────────────────────

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const WA_LINK =
  "https://wa.me/5491100000000?text=Hola%20Trigga%2C%20quiero%20consultar%20sobre%20automatizaciones%20para%20mi%20negocio";
const ACCENT = "#22D68A";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function XCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`transition-transform duration-500 ${open ? "rotate-180" : ""}`} style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/* ─── Service SVG Icons ─────────────────────────────────────────────────────── */

function IconBell() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function IconLink() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function IconBot() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="16" y1="16" x2="16" y2="16" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconBarChart() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

/* ─── Differentiator icons ──────────────────────────────────────────────────── */

function IconTarget() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconMessageCircle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function IconZap() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function IconHeadphones() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

function IconTrendingUp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

/* ─── Comparativa icons ─────────────────────────────────────────────────────── */

function SmallCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function SmallX() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ─── Animated counter ─────────────────────────────────────────────────────────

function AnimatedMetric({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState("0");
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          // Parse numeric part
          const num = parseInt(value.replace(/[^0-9]/g, ""), 10);
          if (isNaN(num) || num === 0) {
            setDisplay(value);
            return;
          }
          const prefix = value.match(/^[^0-9]*/)?.[0] || "";
          const suffix = value.match(/[^0-9]*$/)?.[0] || "";
          const dur = 1200;
          const steps = 30;
          let i = 0;
          const iv = setInterval(() => {
            i++;
            const progress = i / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(num * eased);
            setDisplay(prefix + current + suffix);
            if (i >= steps) { setDisplay(value); clearInterval(iv); }
          }, dur / steps);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl sm:text-4xl font-bold text-white num-pulse">{display}</p>
      <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>{label}</p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 1. NAVBAR
// ═══════════════════════════════════════════════════════════════════════════════

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Cómo funciona", href: "#proceso" },
    { label: "Caso real", href: "#caso-real" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="nav-slide sticky top-0 z-50 w-full" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ backgroundColor: "rgba(10,10,11,0.85)", backdropFilter: "blur(14px)" }} className="w-full">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-black" style={{ backgroundColor: ACCENT }}>T</span>
            <span className="text-white font-semibold text-base tracking-tight">trigga</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>
                {l.label}
              </a>
            ))}
            <a href="#contacto" className="text-sm transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>
              Contacto
            </a>
            <a
              href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm text-black transition-all duration-200 hover:scale-105 active:scale-[0.98]"
              style={{ backgroundColor: ACCENT }}
            >
              <WhatsAppIcon size={15} />
              Agendar llamada
            </a>
          </nav>

          {/* Hamburger */}
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="Abrir menú de navegación">
            <span className="block w-5 h-0.5 bg-white transition-transform duration-300" style={{ transform: open ? "rotate(45deg) translateY(8px)" : "none" }} />
            <span className="block w-5 h-0.5 bg-white transition-opacity duration-300" style={{ opacity: open ? 0 : 1 }} />
            <span className="block w-5 h-0.5 bg-white transition-transform duration-300" style={{ transform: open ? "rotate(-45deg) translateY(-8px)" : "none" }} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden px-6 pb-5 flex flex-col gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm py-1 transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>
                {l.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="text-sm py-1 transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>
              Contacto
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm text-black mt-1" style={{ backgroundColor: ACCENT }}>
              <WhatsAppIcon size={15} />
              Agendar llamada gratis
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 2. HERO
// ═══════════════════════════════════════════════════════════════════════════════

function Hero() {
  const ref = useReveal();

  return (
    <section ref={ref as RefObject<HTMLElement>} className="hero-stagger relative flex flex-col items-center text-center px-6 pt-24 pb-20 overflow-hidden">
      {/* Animated mesh background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 mesh-bg" />
      {/* Glow pulse */}
      <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="glow-pulse" style={{ width: "700px", height: "500px", background: "radial-gradient(ellipse at center, rgba(34,214,138,0.10) 0%, transparent 70%)", filter: "blur(50px)" }} />
      </div>

      {/* Badge */}
      <div className="relative inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium tracking-wide" style={{ border: "1px solid rgba(34,214,138,0.3)", color: ACCENT, backgroundColor: "rgba(34,214,138,0.06)" }}>
        Agencia de automatización
      </div>

      {/* Headline */}
      <h1 className="relative mt-8 text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] tracking-tight max-w-4xl">
        <span className="text-white">Automatizamos las tareas que te frenan</span>
        <br />
        <span style={{ color: ACCENT }}>para que tu negocio escale solo</span>
      </h1>

      {/* Subtitle */}
      <p className="relative mt-6 max-w-xl text-base sm:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
        Eliminamos las tareas repetitivas que te consumen el día. Integraciones, notificaciones, chatbots y flujos automáticos para que te enfoques en vender.
      </p>

      {/* CTAs */}
      <div className="relative flex flex-col sm:flex-row items-center gap-4 mt-10">
        <a
          href={WA_LINK} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold text-sm text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,214,138,0.4)] active:scale-[0.98]"
          style={{ backgroundColor: ACCENT }}
        >
          <WhatsAppIcon />
          Agendar llamada gratis
        </a>
        <a
          href="#proceso"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.98]"
          style={{ border: "1px solid rgba(255,255,255,0.15)" }}
        >
          Ver cómo funciona
        </a>
      </div>

      {/* Microcopy */}
      <p className="relative mt-4 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
        Sin compromiso · Respuesta en menos de 24hs
      </p>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 3. MARQUEE — Herramientas
// ═══════════════════════════════════════════════════════════════════════════════

const TOOLS = [
  "MercadoPago", "WhatsApp Business", "Google Sheets", "Tiendanube",
  "Slack", "Gmail", "Google Calendar", "Notion", "Instagram", "MercadoLibre",
];

function Marquee() {
  return (
    <section className="py-10 overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <p className="text-center text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>
        Nos integramos con las herramientas que ya usás
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10" style={{ background: "linear-gradient(to right, #0A0A0B, transparent)" }} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10" style={{ background: "linear-gradient(to left, #0A0A0B, transparent)" }} />
        <div className="marquee-track" role="marquee" aria-label="Herramientas con las que nos integramos">
          {[...TOOLS, ...TOOLS].map((t, i) => (
            <span key={i} className="flex-shrink-0 mx-3 px-5 py-2.5 rounded-lg text-sm font-medium" style={{ backgroundColor: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.06)", whiteSpace: "nowrap" }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 4. EL PROBLEMA
// ═══════════════════════════════════════════════════════════════════════════════

const PROBLEMS = [
  "Revisás MercadoPago todo el día para ver si entró una venta",
  "Respondés las mismas consultas por WhatsApp una y otra vez",
  "Copiás datos entre planillas, plataformas y apps manualmente",
  "Te olvidás de hacer seguimiento a clientes que ya compraron",
  "Perdés ventas porque no respondés a tiempo fuera de horario",
];

function Problema() {
  const titleRef = useReveal();
  const listRef = useReveal();

  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <div ref={titleRef as RefObject<HTMLDivElement>} className="fade-up text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Tu negocio depende de que vos estés<br className="hidden sm:block" /> encima de todo?
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            Si te identificás con alguna de estas situaciones, estás perdiendo tiempo (y plata) todos los días.
          </p>
        </div>

        <div ref={listRef as RefObject<HTMLDivElement>} className="stagger-left flex flex-col gap-4">
          {PROBLEMS.map((p, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl transition-colors duration-200" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
              <span className="flex-shrink-0 mt-0.5"><XCircleIcon /></span>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 5. SERVICIOS
// ═══════════════════════════════════════════════════════════════════════════════

const SERVICES = [
  {
    icon: <IconBell />,
    title: "Notificaciones automáticas",
    desc: "Cada venta, reserva o formulario te avisa al instante por email o WhatsApp.",
    tags: ["Email automático", "WhatsApp alerts"],
  },
  {
    icon: <IconLink />,
    title: "Integraciones entre plataformas",
    desc: "Conectamos tus herramientas para que los datos fluyan solos. Sin copiar y pegar.",
    tags: ["MercadoPago", "Tiendanube", "Google Sheets"],
  },
  {
    icon: <IconBot />,
    title: "Chatbots para WhatsApp y web",
    desc: "Un asistente que responde consultas y califica leads 24/7, incluso cuando dormís.",
    tags: ["WhatsApp Bot", "Chat web"],
  },
  {
    icon: <IconMail />,
    title: "Emails automáticos",
    desc: "Bienvenida, seguimiento, post-venta. Tus clientes siempre atendidos sin que hagas nada.",
    tags: ["Secuencias", "Recupero de carritos"],
  },
  {
    icon: <IconBarChart />,
    title: "Dashboards y reportes",
    desc: "Paneles para ver ventas, pedidos y métricas clave de un vistazo. Actualizados en tiempo real.",
    tags: ["Métricas en vivo", "Reportes"],
  },
  {
    icon: <IconCalendar />,
    title: "Turnos y reservas online",
    desc: "Tus clientes reservan solos. Vos recibís todo organizado automáticamente.",
    tags: ["Agenda online", "Recordatorios"],
  },
];

function Servicios() {
  const titleRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="servicios" className="px-6 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef as RefObject<HTMLDivElement>} className="fade-up text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ACCENT, letterSpacing: "0.1em" }}>
            Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
            Lo que podemos automatizar en tu negocio
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            Soluciones a medida que se adaptan a tu operación
          </p>
        </div>

        <div ref={gridRef as RefObject<HTMLDivElement>} className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_30px_rgba(34,214,138,0.08)]"
              style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(34,214,138,0.25)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(34,214,138,0.08)" }}>
                {s.icon}
              </div>
              <h3 className="font-semibold text-white text-base">{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{s.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {s.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}>
                    {t}
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

// ═══════════════════════════════════════════════════════════════════════════════
// 6. COMPARATIVA — Antes vs Después
// ═══════════════════════════════════════════════════════════════════════════════

const COMPARISONS = [
  { task: "Notificar cada venta", manual: "Revisar MercadoPago constantemente", auto: "Email + WhatsApp al instante" },
  { task: "Responder consultas", manual: "Responder uno por uno a toda hora", auto: "Chatbot automático 24/7" },
  { task: "Seguimiento post-venta", manual: "Acordarse y escribir manualmente", auto: "Secuencia de emails automática" },
  { task: "Agendar turnos", manual: "Mensajes ida y vuelta por WhatsApp", auto: "Link de reserva + confirmación auto" },
  { task: "Reportes de ventas", manual: "Planilla Excel actualizada a mano", auto: "Dashboard en tiempo real" },
  { task: "Cargar pedidos", manual: "Copiar datos entre plataformas", auto: "Sync automático entre sistemas" },
];

function Comparativa() {
  const titleRef = useReveal();
  const tableRef = useReveal();

  return (
    <section className="px-6 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-4xl mx-auto">
        <div ref={titleRef as RefObject<HTMLDivElement>} className="fade-up text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ACCENT, letterSpacing: "0.1em" }}>
            Antes vs Después
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Mirá cómo cambia tu operación
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            Lo que hoy te lleva horas, con automatizaciones pasa solo
          </p>
        </div>

        <div ref={tableRef as RefObject<HTMLDivElement>} className="stagger-children rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          {/* Header */}
          <div className="grid grid-cols-3 px-6 py-4 text-xs font-semibold uppercase tracking-wider" style={{ backgroundColor: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.4)" }}>
            <span>Tarea</span>
            <span className="text-center">Sin automatizar</span>
            <span className="text-center" style={{ color: ACCENT }}>Con Trigga</span>
          </div>
          {COMPARISONS.map((c, i) => (
            <div key={i} className="comp-row grid grid-cols-3 px-6 py-4 items-center" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
              <span className="text-sm font-medium text-white">{c.task}</span>
              <span className="text-sm text-center flex items-center justify-center gap-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                <SmallX />
                <span className="hidden sm:inline">{c.manual}</span>
              </span>
              <span className="comp-trigga text-sm text-center flex items-center justify-center gap-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                <SmallCheck />
                <span className="hidden sm:inline">{c.auto}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 7. CÓMO TRABAJAMOS — Proceso / Timeline
// ═══════════════════════════════════════════════════════════════════════════════

const STEPS = [
  { num: "01", title: "Hablamos", desc: "Nos contás cómo funciona tu negocio y qué te consume más tiempo. Sin tecnicismos, sin compromiso." },
  { num: "02", title: "Diagnosticamos", desc: "Identificamos las tareas que se pueden automatizar y te presentamos un plan concreto con prioridades." },
  { num: "03", title: "Implementamos", desc: "Desarrollamos, conectamos con tus herramientas y dejamos todo andando. Vos no tocás nada técnico." },
  { num: "04", title: "Iteramos", desc: "Monitoreamos, ajustamos y sumamos nuevas automatizaciones a medida que tu negocio crece." },
];

function Proceso() {
  const titleRef = useReveal();
  const lineRef = useReveal(0.2);
  const stepsRef = useReveal();

  return (
    <section id="proceso" className="px-6 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef as RefObject<HTMLDivElement>} className="fade-up text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ACCENT, letterSpacing: "0.1em" }}>
            Proceso
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            No arrancamos con código. Arrancamos entendiendo tu negocio.
          </p>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative pl-14">
          <div ref={lineRef as RefObject<HTMLDivElement>} className="timeline-line" />
          <div ref={stepsRef as RefObject<HTMLDivElement>} className="stagger-children flex flex-col gap-10">
            {STEPS.map((s) => (
              <div key={s.num} className="relative">
                <div className="absolute -left-14 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-black z-10" style={{ backgroundColor: ACCENT }}>
                  {s.num}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative">
          <div ref={lineRef as RefObject<HTMLDivElement>} className="timeline-line-h" style={{ top: "19px" }} />
          <div className="stagger-children grid grid-cols-4 gap-8 relative">
            {STEPS.map((s) => (
              <div key={s.num} className="relative pt-14">
                <div className="absolute top-0 left-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-black z-10" style={{ backgroundColor: ACCENT }}>
                  {s.num}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 8. CASO REAL — KLOTHS
// ═══════════════════════════════════════════════════════════════════════════════

function CasoReal() {
  const titleRef = useReveal();
  const cardRef = useReveal();

  return (
    <section id="caso-real" className="px-6 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef as RefObject<HTMLDivElement>} className="fade-up text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ACCENT, letterSpacing: "0.1em" }}>
            Caso real
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Resultados que se miden, no que se inventan
          </h2>
        </div>

        <div ref={cardRef as RefObject<HTMLDivElement>} className="fade-scale rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(34,214,138,0.15)", backgroundColor: "rgba(34,214,138,0.03)" }}>
          {/* Header */}
          <div className="px-8 pt-8 pb-6 flex items-center gap-4" style={{ borderBottom: "1px solid rgba(34,214,138,0.1)" }}>
            <span className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold text-black flex-shrink-0" style={{ backgroundColor: ACCENT }}>K</span>
            <div>
              <p className="font-bold text-white text-lg">KLOTHS</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>Tienda de surfwear — kloths.com.ar</p>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 px-8 py-8" style={{ borderBottom: "1px solid rgba(34,214,138,0.1)" }}>
            <AnimatedMetric value="0" label="Intervención manual por venta" />
            <AnimatedMetric value="<3s" label="Tiempo de notificación" />
            <AnimatedMetric value="100%" label="Pedidos rastreados automáticamente" />
          </div>

          {/* Problem → Solution → Result */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Problema</p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Procesar cada venta manualmente: revisar MercadoPago, copiar datos del cliente, armar el pedido a mano.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Solución</p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Webhook que detecta pagos aprobados en MercadoPago y envía email automático con datos del cliente, productos, talles, dirección de envío y total.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Resultado</p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Cada venta genera automáticamente un email completo listo para despachar. Cero intervención manual, cero errores de copia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 9. POR QUÉ TRIGGA — Diferenciadores
// ═══════════════════════════════════════════════════════════════════════════════

const DIFFERENTIATORS = [
  { icon: <IconTarget />, title: "Soluciones a medida", desc: "No vendemos paquetes genéricos. Cada automatización se diseña para tu negocio específico." },
  { icon: <IconMessageCircle />, title: "Sin tecnicismos", desc: "Vos nos contás el problema, nosotros lo resolvemos. No necesitás saber de programación." },
  { icon: <IconZap />, title: "Resultados rápidos", desc: "Automatizaciones simples en 48hs. Proyectos complejos en 1-2 semanas." },
  { icon: <IconLayers />, title: "Nos integramos con tu stack", desc: "MercadoPago, Tiendanube, WhatsApp, Google Sheets, y lo que uses." },
  { icon: <IconHeadphones />, title: "Soporte directo", desc: "Hablás con nosotros por WhatsApp. Sin tickets, sin esperas." },
  { icon: <IconTrendingUp />, title: "Escala con tu negocio", desc: "Empezá con una automatización. Sumá más a medida que crezcas." },
];

function PorQueTrigga() {
  const titleRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="px-6 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef as RefObject<HTMLDivElement>} className="fade-up text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ACCENT, letterSpacing: "0.1em" }}>
            Por qué elegirnos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Lo que nos diferencia
          </h2>
        </div>

        <div ref={gridRef as RefObject<HTMLDivElement>} className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIFFERENTIATORS.map((d) => (
            <div
              key={d.title}
              className="rounded-xl p-6 flex flex-col gap-3 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_30px_rgba(34,214,138,0.06)]"
              style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(34,214,138,0.2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(34,214,138,0.08)" }}>
                {d.icon}
              </div>
              <h3 className="font-semibold text-white text-sm">{d.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 10. CTA INTERMEDIO
// ═══════════════════════════════════════════════════════════════════════════════

function CtaIntermedio() {
  const ref = useReveal();

  const words = "¿Cuántas horas por semana perdés en tareas que una máquina puede hacer por vos?".split(" ");

  return (
    <section className="px-6 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div ref={ref as RefObject<HTMLDivElement>} className="max-w-3xl mx-auto text-center">
        <div className="rounded-2xl p-10 sm:p-14" style={{ background: "linear-gradient(135deg, rgba(34,214,138,0.06) 0%, rgba(34,214,138,0.02) 100%)", border: "1px solid rgba(34,214,138,0.12)" }}>
          <p className="word-stagger text-2xl sm:text-3xl font-bold leading-snug text-white mb-8">
            {words.map((w, i) => (
              <span key={i}>{w}{" "}</span>
            ))}
          </p>
          <a
            href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold text-sm text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,214,138,0.4)] active:scale-[0.98]"
            style={{ backgroundColor: ACCENT }}
          >
            <WhatsAppIcon />
            Descubrilo en una llamada gratis
          </a>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 11. FAQ
// ═══════════════════════════════════════════════════════════════════════════════

const FAQS = [
  { q: "¿Qué tipo de negocios pueden automatizar?", a: "Cualquier negocio con tareas repetitivas: e-commerce, servicios, gastronomía, salud, educación, inmobiliarias y más. Si hacés algo a mano más de 2 veces, se puede automatizar." },
  { q: "¿Cuánto tarda la implementación?", a: "Depende de la complejidad. Automatizaciones simples (notificaciones, emails) se entregan en 48hs. Proyectos más complejos (chatbots, dashboards) pueden tomar 1-2 semanas." },
  { q: "¿Necesito conocimientos técnicos?", a: "No. Nosotros nos encargamos de todo: diseño, configuración, testing y puesta en marcha. Vos solo nos contás qué necesitás." },
  { q: "¿Qué pasa si algo falla?", a: "Tenés soporte directo por WhatsApp. Si algo se rompe, lo arreglamos lo antes posible. Además diseñamos las automatizaciones con manejo de errores para minimizar problemas." },
  { q: "¿Puedo escalar después?", a: "Sí. Las automatizaciones se diseñan para crecer con tu negocio. Agregar nuevas funciones o integraciones es simple y rápido." },
  { q: "¿Cómo es el proceso de pago?", a: "Cotizamos cada proyecto de forma personalizada. Trabajamos con un pago inicial + entregas. Sin costos ocultos ni sorpresas." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-4 group">
        <span className="text-sm font-medium text-white group-hover:text-[#22D68A] transition-colors duration-200">{q}</span>
        <span className="flex-shrink-0" style={{ color: "rgba(255,255,255,0.4)" }}>
          <ChevronIcon open={open} />
        </span>
      </button>
      <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: open ? "300px" : "0", opacity: open ? 1 : 0, transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
        <p className="pb-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{a}</p>
      </div>
    </div>
  );
}

function Faq() {
  const ref = useReveal();

  return (
    <section id="faq" className="px-6 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-3xl mx-auto">
        <div ref={ref as RefObject<HTMLDivElement>} className="fade-up text-center mb-12">
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

// ═══════════════════════════════════════════════════════════════════════════════
// 12. CTA FINAL
// ═══════════════════════════════════════════════════════════════════════════════

function CtaFinal() {
  const ref = useReveal();

  return (
    <section id="contacto" className="px-6 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div ref={ref as RefObject<HTMLDivElement>} className="fade-scale max-w-3xl mx-auto text-center">
        <div className="cta-glow rounded-2xl p-12" style={{ background: "linear-gradient(135deg, rgba(34,214,138,0.08) 0%, rgba(34,214,138,0.02) 100%)", border: "1px solid rgba(34,214,138,0.15)" }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Listo para dejar de hacer todo a mano?
          </h2>
          <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            Contanos tu problema y te mostramos cómo resolverlo. Primera consulta gratis, sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold text-sm text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,214,138,0.4)] active:scale-[0.98]"
              style={{ backgroundColor: ACCENT }}
            >
              <WhatsAppIcon />
              Escribinos por WhatsApp
            </a>
            <a
              href="mailto:contacto@trigga.com.ar"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.98]"
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

// ═══════════════════════════════════════════════════════════════════════════════
// 13. FOOTER
// ═══════════════════════════════════════════════════════════════════════════════

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
            <a href="#proceso" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>Proceso</a>
            <a href="#caso-real" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>Caso real</a>
            <a href="#faq" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>FAQ</a>
            <a href="#contacto" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>Contacto</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2026 Trigga. Buenos Aires, Argentina.
          </span>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════════════

export default function Home() {
  return (
    <main style={{ backgroundColor: "#0A0A0B", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Marquee />
      <Problema />
      <Servicios />
      <Comparativa />
      <Proceso />
      <CasoReal />
      <PorQueTrigga />
      <CtaIntermedio />
      <Faq />
      <CtaFinal />
      <Footer />
    </main>
  );
}
