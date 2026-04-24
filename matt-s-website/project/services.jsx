// ============================================================
// Services page — shares Nav, reuses tokens + site.css.
// ============================================================

const { useState, useEffect, useRef } = React;
const Icon = window.Icon;

// Service image URLs — Unsplash stock that reads UK/domestic
const IMG = {
  kitchens:    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c8?w=1200&q=80&auto=format&fit=crop",
  bathrooms:   "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80&auto=format&fit=crop",
  entertainment:"https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80&auto=format&fit=crop",
  fireplaces:  "https://images.unsplash.com/photo-1512699355324-f07e3106dae5?w=1200&q=80&auto=format&fit=crop",
  tiling:      "https://images.unsplash.com/photo-1600566753051-6057d2b1f3e1?w=1200&q=80&auto=format&fit=crop",
  lighting:    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80&auto=format&fit=crop",
  landscaping: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&q=80&auto=format&fit=crop",
  patios:      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80&auto=format&fit=crop",
  pergolas:    "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=1200&q=80&auto=format&fit=crop",
  fencing:     "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1200&q=80&auto=format&fit=crop",
};

const SERVICES = [
  {
    icon: "chef-hat",
    title: ["Kitchen", "fitting"],
    italic: 1,
    desc:
      "From Shaker to handleless. We handle the full job — breakout, first-fix plumbing and electrics, cabinetry, stone, appliances and snagging — so you&rsquo;re dealing with one team, not five.",
    bullets: ["Design consult", "Cabinetry install", "Stone &amp; worktops", "Appliance fit-out"],
    img: IMG.kitchens,
    foot: "Typically 4–8 weeks",
  },
  {
    icon: "bath",
    title: ["Bathrooms &", "wet rooms"],
    italic: 1,
    desc:
      "Fully tanked wet rooms, en-suites and family bathrooms. Watertight first — stone, glass and brassware after. We only fit what we&rsquo;d put in our own homes.",
    bullets: ["Tanking &amp; waterproofing", "Underfloor heating", "Shower &amp; bath install", "Brassware &amp; glass"],
    img: IMG.bathrooms,
    foot: "Typically 3–5 weeks",
  },
  {
    icon: "tv",
    title: ["Entertainment", "systems"],
    italic: 1,
    desc:
      "TV walls, hidden speaker systems, media cupboards. We build with the electricians and AV specialists we&rsquo;ve worked with for years — cable routes planned before the plaster goes up.",
    bullets: ["Wall-mount TV builds", "In-ceiling speakers", "Cable-free installs", "Media joinery"],
    img: IMG.entertainment,
    foot: "Typically 1–2 weeks",
  },
  {
    icon: "flame",
    title: ["Fireplaces &", "wood burners"],
    italic: 1,
    desc:
      "HETAS-registered fitters for stoves and flues. Hearth rebuilds, chimney relining, reclaimed-stone surrounds and bespoke mantels — all signed off properly and certified.",
    bullets: ["HETAS-certified", "Chimney relining", "Hearth &amp; surround", "Wood-burner install"],
    img: IMG.fireplaces,
    foot: "Typically 1–3 weeks",
  },
  {
    icon: "grid-2x2",
    title: ["Tiling"],
    italic: 0,
    desc:
      "Wall and floor tiling across stone, porcelain, ceramic and terrazzo. Proper preparation, decoupling membranes where needed, dead-level finishes — done once, done well.",
    bullets: ["Natural stone", "Large-format porcelain", "Decoupling systems", "Precision grouting"],
    img: IMG.tiling,
    foot: "Typically 1–2 weeks",
  },
  {
    icon: "lightbulb",
    title: ["Lighting"],
    italic: 0,
    desc:
      "Working with our Part-P electrician on everything from recessed downlights to statement pendants and automated circuits. Properly planned, so the switching makes sense.",
    bullets: ["Part-P certified", "Low-voltage circuits", "Pendant &amp; feature", "Smart switching"],
    img: IMG.lighting,
    foot: "Typically 3–10 days",
  },
  {
    icon: "trees",
    title: ["Garden", "landscaping"],
    italic: 1,
    desc:
      "Full garden redesigns — grading, drainage, planting beds, steps, retaining walls. We bring in our regular planting specialist for soft landscaping where it&rsquo;s needed.",
    bullets: ["Levelling &amp; drainage", "Retaining walls", "Planting beds", "Turf &amp; gravel"],
    img: IMG.landscaping,
    foot: "Typically 4–8 weeks",
  },
  {
    icon: "square-stack",
    title: ["Patios &", "paving"],
    italic: 1,
    desc:
      "Indian sandstone, porcelain, Cotswold stone, blockwork. Properly dug-out sub-base, compacted, drained and pointed — so the patio&rsquo;s still dead-level in ten years&rsquo; time.",
    bullets: ["Sandstone &amp; porcelain", "Block paving", "Stepping &amp; edging", "SuDS drainage"],
    img: IMG.patios,
    foot: "Typically 2–4 weeks",
  },
  {
    icon: "warehouse",
    title: ["Pergolas &", "outdoor rooms"],
    italic: 1,
    desc:
      "Oak and cedar pergolas, covered dining rooms, garden offices, carports. Built to last in British weather — properly footed, breathable and finished to a domestic standard.",
    bullets: ["Oak &amp; cedar frame", "Louvred roofs", "Lighting &amp; power", "Outdoor joinery"],
    img: IMG.pergolas,
    foot: "Typically 2–5 weeks",
  },
  {
    icon: "fence",
    title: ["Fencing &", "boundaries"],
    italic: 1,
    desc:
      "Closeboard, featheredge, horizontal slat, post-and-rail — set in concrete on properly-depthed posts. Gates, driveway entrances and stock fencing all handled in-house.",
    bullets: ["Closeboard &amp; slat", "Concrete post-setting", "Gates &amp; latches", "Stock &amp; post-rail"],
    img: IMG.fencing,
    foot: "Typically 3–10 days",
  },
];

// ============================================================
// Nav (same visual language as homepage — cloned locally)
// ============================================================
function Nav({ scrolled }) {
  return (
    <nav className={`nav nav--on-light ${scrolled ? "nav--scrolled" : ""}`} aria-label="Primary">
      <div className="nav__inner container-wide">
        <a href="Homepage.html" className="nav__mark" aria-label="Whitsey & Co. — home">
          <span className="nav__mark-glyph" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 11 L12 3 L21 11 L21 21 L14 21 L14 14 L10 14 L10 21 L3 21 Z" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="nav__mark-word">
            Whitsey <span className="nav__mark-amp">&amp;</span> Co.
          </span>
        </a>
        <ul className="nav__links">
          <li><a href="Homepage.html#work">Work</a></li>
          <li><a href="Homepage.html#about">About</a></li>
          <li><a href="Services.html" aria-current="page" style={{ color: "var(--ink)" }}>Services</a></li>
          <li><a href="Homepage.html#contact">Contact</a></li>
        </ul>
        <div className="nav__cta">
          <span className="nav__phone mono-label">
            <span className="nav__phone-dot" aria-hidden="true" />
            01225 000 000
          </span>
          <a href="#cta" className="btn btn--ink btn--sm">
            Get a quote
            <Icon name="arrow-right" data-arrow />
          </a>
        </div>
      </div>
    </nav>
  );
}

// ============================================================
// Hero (light, type-led)
// ============================================================
function SvHero() {
  return (
    <header className="sv-hero">
      <div className="container-wide sv-hero__inner">
        <div>
          <span className="sv-hero__kicker mono-label-lg">Services · 2026</span>
          <h1 className="sv-hero__title">
            What we <em>actually</em> do, from first fix to final snag.
          </h1>
          <p className="sv-hero__lede">
            We&rsquo;re a small firm, so we stay honest about scope. Here&rsquo;s
            the work we take on week-in, week-out — handled by Matt and our
            core crew, with a few trusted specialists we&rsquo;ve worked with
            for years.
          </p>
        </div>
        <dl className="sv-hero__meta">
          <div className="sv-hero__meta-row">
            <dt className="sv-hero__meta-key">Based</dt>
            <dd className="sv-hero__meta-val">Bath, Somerset</dd>
          </div>
          <div className="sv-hero__meta-row">
            <dt className="sv-hero__meta-key">Coverage</dt>
            <dd className="sv-hero__meta-val">~40 mile radius</dd>
          </div>
          <div className="sv-hero__meta-row">
            <dt className="sv-hero__meta-key">Crew</dt>
            <dd className="sv-hero__meta-val">6 full-time · 4 specialists</dd>
          </div>
          <div className="sv-hero__meta-row">
            <dt className="sv-hero__meta-key">Certified</dt>
            <dd className="sv-hero__meta-val">FMB · TrustMark · HETAS · Part-P</dd>
          </div>
        </dl>
      </div>
    </header>
  );
}

// ============================================================
// Services grid
// ============================================================
function SvGrid() {
  return (
    <section className="sv-grid-section" id="services">
      <div className="container-wide">
        <div className="sv-grid-head">
          <div>
            <span className="mono-label-lg section-marker">The full list</span>
            <h2 className="sv-grid-head__title">
              Ten services under <em>one</em> roof, one crew.
            </h2>
          </div>
          <div className="sv-count">
            <span className="sv-count__big">10</span>
            <span>services offered</span>
          </div>
        </div>

        <div className="sv-grid">
          {SERVICES.map((s, i) => (
            <SvCard key={i} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SvCard({ service, index }) {
  const { icon, title, italic, desc, bullets, img, foot } = service;
  return (
    <a className="sv-card" href="#cta">
      <div className="sv-card__img">
        <img src={img} alt="" loading="lazy" />
        <span className="sv-card__num">{String(index + 1).padStart(2, "0")} / 10</span>
      </div>
      <div className="sv-card__body">
        <div className="sv-card__icon"><Icon name={icon} /></div>
        <h3 className="sv-card__title">
          {title[0]}{title[1] ? " " : ""}
          {title[1] && (italic === 1 ? <em>{title[1]}</em> : title[1])}
        </h3>
        <p className="sv-card__desc" dangerouslySetInnerHTML={{ __html: desc }} />
        <ul className="sv-card__bullets">
          {bullets.map((b, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: b }} />
          ))}
        </ul>
        <div className="sv-card__foot">
          <span className="sv-card__foot-label">{foot}</span>
          <span className="sv-card__cta-icon">
            <Icon name="arrow-up-right" />
          </span>
        </div>
      </div>
    </a>
  );
}

// ============================================================
// How we work
// ============================================================
function SvProcess() {
  const steps = [
    { num: "01", title: ["Site", "visit"], italic: 1, desc: "I come out, walk the space with you, and take honest notes. No pressure, no sales patter.", time: "Within 1 week" },
    { num: "02", title: ["Scope &", "quote"], italic: 1, desc: "Written quote with phases, rough timeline, who&rsquo;s on the crew, and what we&rsquo;re not doing.", time: "Within 2 weeks" },
    { num: "03", title: ["Plan &", "book in"], italic: 1, desc: "We firm up the programme, order the long-lead items, and agree start dates together.", time: "4–8 weeks ahead" },
    { num: "04", title: ["Build &", "snag"], italic: 1, desc: "Daily clean site, weekly check-in, proper snagging at handover. No loose ends.", time: "On programme" },
  ];
  return (
    <section className="sv-process" id="process">
      <div className="container-wide">
        <div className="sv-process__head">
          <span className="mono-label-lg section-marker">How we work</span>
          <h2 className="sv-process__title">
            Four steps, in the same order, <em>every</em> time.
          </h2>
        </div>
        <div className="sv-process__steps">
          {steps.map((s, i) => (
            <div className="sv-step" key={i}>
              <div className="sv-step__num">{s.num}</div>
              <h3 className="sv-step__title">
                {s.title[0]}{s.title[1] ? " " : ""}
                {s.title[1] && (s.italic ? <em>{s.title[1]}</em> : s.title[1])}
              </h3>
              <p className="sv-step__desc" dangerouslySetInnerHTML={{ __html: s.desc }} />
              <span className="sv-step__time">{s.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CTA banner (mini-contact; a hint toward full contact strip)
// ============================================================
function SvCta() {
  return (
    <section className="sv-cta" id="cta">
      <div className="container-wide sv-cta__inner">
        <div>
          <span className="mono-label-lg section-marker" style={{ color: "var(--bone-2)" }}>
            Ready to chat?
          </span>
          <h2 className="sv-cta__title">
            Got a project in mind? <em>Ring us first.</em>
          </h2>
        </div>
        <div>
          <p className="sv-cta__dek">
            We&rsquo;ll come out, walk the space, and tell you honestly whether
            we&rsquo;re the right firm — usually within a week of your call.
          </p>
          <div className="sv-cta__actions">
            <a href="tel:+441225000000" className="btn btn--bone btn--lg">
              <Icon name="phone" /> 01225 000 000
            </a>
            <a href="mailto:hello@whitsey.co.uk" className="btn btn--glass-light btn--lg">
              <Icon name="mail" /> hello@whitsey.co.uk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Footer
// ============================================================
function SvFoot() {
  return (
    <footer style={{ padding: "28px 0", background: "var(--ink)" }}>
      <div className="container-wide" style={{ display: "flex", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
        <span className="mono-label" style={{ color: "var(--bone-2)" }}>
          © 2026 Whitsey &amp; Co. Ltd · Company no. 07412389
        </span>
        <span className="mono-label" style={{ color: "var(--bone-2)" }}>
          <a href="Homepage.html" style={{ borderBottom: "1px solid currentColor", paddingBottom: "2px" }}>← Back to homepage</a>
        </span>
      </div>
    </footer>
  );
}

// ============================================================
// App
// ============================================================
function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <React.Fragment>
      <Nav scrolled={scrolled} />
      <SvHero />
      <SvGrid />
      <SvProcess />
      <SvCta />
      <SvFoot />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
