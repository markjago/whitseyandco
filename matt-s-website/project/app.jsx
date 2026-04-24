// ============================================================
// Whitsey & Co. — Homepage components
// Warm, typographically precise, photography-forward.
// ============================================================

const { useState, useEffect, useRef } = React;
const Icon = window.Icon;

// ---------- Imagery ----------
// Unsplash source URLs — interior/construction/building photography.
// In production these would be Matt's own project photos.
const HERO_IMG =
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=2400&q=80&auto=format&fit=crop";
const PORTRAIT_IMG =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80&auto=format&fit=crop";

// 39 project photos — mix of interiors, exteriors, kitchens, bathrooms, building sites
const GALLERY_IDS = [
  "1560448204-e02f11c3d0e2", // kitchen
  "1583847268964-b28dc8f51f92", // interior
  "1600607687939-ce8a6c25118c", // modern home
  "1512917774080-9991f1c4c750", // architecture
  "1505691938895-1758d7feb511", // living room
  "1600585154340-be6161a56a0c", // modern kitchen
  "1600566753190-17f0baa2a6c8", // bathroom
  "1600210492486-724fe5c67fb0", // interior
  "1600607687644-c7171b42498b", // kitchen
  "1600566753376-12c8ab7fb75b", // hallway
  "1565182999561-18d7dc61c393", // building
  "1593604340846-4fbe9763a8f3", // timber frame
  "1600566752355-35792bedcfea", // stair
  "1600585154526-990dced4db0d", // bath
  "1600607688969-a5bfcd646154", // bed
  "1600566753051-6057d2b1f3e1", // kitchen island
  "1586023492125-27b2c045efd7", // interior detail
  "1558618666-fcd25c85cd64", // exterior night
  "1512699355324-f07e3106dae5", // fireplace
  "1556909114-f6e7ad7d3136", // home ext
  "1600047509807-ba8f99d2cdde", // shower
  "1600210491892-03d54c0aaf87", // living
  "1600585154363-67eb9e2e2099", // bath stone
  "1598928506311-c55ded91a20c", // loft
  "1600585152220-90363fe7e115", // kitchen wood
  "1600607687920-4e2a09cf159d", // kitchen blue
  "1600566753086-00f18fe6ba68", // hallway light
  "1600585154084-4e5fe7c39198", // dining
  "1600047509358-9dc75507daeb", // bath terrazzo
  "1598300042247-d088f8ab3a91", // extension
  "1600607688066-890987f18a86", // bedroom
  "1570129477492-45c003edd2be", // exterior
  "1600607687126-c2b00e6b1b65", // sitting
  "1600566752229-450a97e1bb57", // kitchen marble
  "1600210492493-0946911123c4", // living sofa
  "1586105251261-72a756497a11", // roof
  "1600607687710-b6c8f4d84b0c", // kitchen pendant
  "1605276374104-dee2a0ed3cd6", // masonry
  "1600566753376-12c8ab7fb75b", // hallway (repeat safe)
];

const GALLERY_CAPTIONS = [
  { caption: "Kitchen extension — Cotswolds", year: "2024" },
  { caption: "Victorian terrace refurb — Bath", year: "2024" },
  { caption: "New build — Wiltshire", year: "2023" },
  { caption: "Period restoration — Bristol", year: "2024" },
  { caption: "Family room extension — Bradford-on-Avon", year: "2023" },
  { caption: "Shaker kitchen — Tetbury", year: "2024" },
  { caption: "En-suite — Frome", year: "2023" },
  { caption: "Open-plan living — Chippenham", year: "2024" },
  { caption: "Island kitchen — Malmesbury", year: "2023" },
  { caption: "Entryway — Marshfield", year: "2024" },
  { caption: "Garage conversion — Corsham", year: "2023" },
  { caption: "Oak frame — Castle Combe", year: "2024" },
  { caption: "Staircase — Lacock", year: "2024" },
  { caption: "Family bath — Wells", year: "2023" },
  { caption: "Principal bedroom — Shepton Mallet", year: "2024" },
  { caption: "Kitchen island — Warminster", year: "2023" },
  { caption: "Joinery detail — Melksham", year: "2024" },
  { caption: "Exterior, evening — Trowbridge", year: "2023" },
  { caption: "Fireplace rebuild — Westbury", year: "2024" },
  { caption: "Rear extension — Bruton", year: "2023" },
  { caption: "Walk-in shower — Keynsham", year: "2024" },
  { caption: "Lounge — Saltford", year: "2023" },
  { caption: "Stone bathroom — Midford", year: "2024" },
  { caption: "Loft conversion — Larkhall", year: "2023" },
  { caption: "Timber kitchen — Limpley Stoke", year: "2024" },
  { caption: "Utility + boot room — Freshford", year: "2023" },
  { caption: "Hallway — Bathampton", year: "2024" },
  { caption: "Dining room — Bathford", year: "2023" },
  { caption: "Terrazzo bath — Claverton", year: "2024" },
  { caption: "Single-storey ext. — Monkton Combe", year: "2023" },
  { caption: "Guest room — Combe Down", year: "2024" },
  { caption: "Listed cottage — Southstoke", year: "2023" },
  { caption: "Sitting room — Widcombe", year: "2024" },
  { caption: "Marble kitchen — Bathwick", year: "2023" },
  { caption: "Lounge redesign — Oldfield Park", year: "2024" },
  { caption: "Reroof — Twerton", year: "2023" },
  { caption: "Pendant kitchen — Weston", year: "2024" },
  { caption: "Stonework — Combe Hay", year: "2023" },
  { caption: "Hallway — Englishcombe", year: "2024" },
];

const galleryUrl = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

// ============================================================
// Navigation
// ============================================================
function Nav({ scrolled }) {
  return (
    <nav
      className={`nav ${scrolled ? "nav--scrolled" : ""}`}
      aria-label="Primary"
    >
      <div className="nav__inner container-wide">
        <a href="#top" className="nav__mark" aria-label="Whitsey & Co. — home">
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
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="Services.html">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav__cta">
          <span className="nav__phone mono-label">
            <span className="nav__phone-dot" aria-hidden="true" />
            01225 000 000
          </span>
          <a href="#contact" className="btn btn--ink btn--sm">
            Get a quote
            <Icon name="arrow-right" data-arrow />
          </a>
        </div>
      </div>
    </nav>
  );
}

// ============================================================
// Hero
// ============================================================
function Hero() {
  const imgRef = useRef(null);

  // Subtle parallax: shift image up on scroll. Combined with a slow Ken Burns
  // CSS zoom for a quiet “breathing” feel — classy, not flashy.
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = imgRef.current;
        if (!el) return;
        const y = Math.min(window.scrollY, 900);
        el.style.setProperty("--py", `${y * 0.25}px`);
        el.style.setProperty("--pf", `${Math.max(0, 1 - y / 1200)}`);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="hero" id="top">
      <div className="hero__image" aria-hidden="true" ref={imgRef}>
        <img src={HERO_IMG} alt="" loading="eager" />
        <div className="hero__grain" />
        <div className="hero__scrim" />
      </div>

      <div className="hero__content container-wide">
        <div className="hero__eyebrow">
          <span className="mono-label-lg" style={{ color: "var(--bone)" }}>
            <span className="hero__eyebrow-dot" /> Est. 2009 · Wiltshire &amp; Somerset
          </span>
        </div>

        <h1 className="hero__headline display-xl">
          Building <em>better</em> homes,<br />
          together.
        </h1>

        <p className="hero__lede body-lg">
          Matt Whitsey and a small, steady crew of tradesmen — looking after
          extensions, renovations and full builds across the South West for
          fifteen years and counting.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="btn btn--bone btn--lg">
            Start a project
            <Icon name="arrow-right" data-arrow />
          </a>
          <a href="#work" className="btn btn--glass-light btn--lg">
            See recent work
          </a>
        </div>

        {/* Figma-style floating card with a sub-detail */}
        <aside className="hero__card" aria-label="Currently on site">
          <div className="hero__card-head">
            <span className="mono-label">Currently on site</span>
            <span className="hero__card-tag">3 live projects</span>
          </div>
          <div className="hero__card-body">
            <p className="heading-sm">
              Kitchen extension,<br />
              <em style={{ fontFamily: "var(--font-display)", fontWeight: 380 }}>
                Cotswolds
              </em>
            </p>
            <p className="body-sm" style={{ marginTop: "10px" }}>
              Week 7 of 14 · on programme.
            </p>
          </div>
          <div className="hero__card-foot">
            <div className="hero__card-progress" aria-hidden="true">
              <span style={{ width: "50%" }} />
            </div>
            <span className="mono-label">50%</span>
          </div>
        </aside>

        <div className="hero__scroll">
          <span className="mono-label" style={{ color: "var(--bone)" }}>
            Scroll
          </span>
          <span className="hero__scroll-line" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}

// ============================================================
// About Matt
// ============================================================
function About() {
  return (
    <section className="about" id="about">
      <div className="container-wide about__grid">
        <div className="about__portrait">
          <img src={PORTRAIT_IMG} alt="Matt Whitsey on site" loading="lazy" />
          <div className="about__portrait-tag">
            <span className="mono-label">Matt Whitsey</span>
            <span className="body-sm">Founder &amp; lead builder</span>
          </div>
        </div>

        <div className="about__copy">
          <span className="mono-label-lg section-marker">About the builder</span>

          <h2 className="display-lg" style={{ marginTop: "24px" }}>
            A small firm that <em>shows up</em>, finishes clean, and answers
            the phone.
          </h2>

          <div className="about__text">
            <p className="body-lg">
              I started Whitsey &amp; Co. in 2009 after a decade on the tools
              with larger contractors. The jobs I loved most were always the
              ones where the family and the builder actually knew each other
              — so that&rsquo;s the firm I set out to run.
            </p>
            <p className="body-md">
              Fifteen years on, we&rsquo;re a core team of six: me on the
              ground every day, two carpenters, a brickie, and two apprentices
              we&rsquo;re bringing up properly. We handle kitchens,
              extensions, listed-building works and full renovations —
              typically within an hour of Bath.
            </p>
          </div>

          <a href="#contact" className="about__link">
            Have a chat about your project
            <Icon name="arrow-right" data-arrow />
          </a>

          <div className="about__stats">
            <Stat big="15+" label="Years trading" note="Since 2009" />
            <Stat big="200+" label="Completed projects" note="All within ~40 mi of Bath" />
            <Stat big="5.0" label="Google rating" note="From 62 reviews" star />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ big, label, note, star }) {
  return (
    <div className="stat">
      <div className="stat__big display-lg">
        {big}
        {star && <Icon name="star" className="stat__star-icon" />}
      </div>
      <div className="stat__label mono-label">{label}</div>
      <div className="stat__note body-sm">{note}</div>
    </div>
  );
}

// ============================================================
// Gallery
// ============================================================
function Gallery() {
  const INITIAL = 6;
  const STEP = 9;
  const [count, setCount] = useState(INITIAL);
  const total = GALLERY_IDS.length;
  const remaining = total - count;

  return (
    <section className="gallery" id="work">
      <div className="container-wide">
        <div className="gallery__head">
          <div>
            <span className="mono-label-lg section-marker">
              Selected work · 2023—2024
            </span>
            <h2 className="display-lg" style={{ marginTop: "24px", maxWidth: "18ch" }}>
              Projects we&rsquo;re <em>proud</em> to have put our name on.
            </h2>
          </div>
          <div className="gallery__head-meta">
            <div className="gallery__counter mono-label-lg">
              <span className="gallery__counter-big">{String(count).padStart(2, "0")}</span>
              <span className="gallery__counter-total">/ {total} shown</span>
            </div>
            <p className="body-md" style={{ maxWidth: "34ch" }}>
              A photograph of every completed project, large or small. The
              camera doesn&rsquo;t lie and neither do we.
            </p>
          </div>
        </div>

        <div className="gallery__grid">
          {GALLERY_IDS.slice(0, count).map((id, i) => (
            <GalleryCard
              key={i}
              id={id}
              index={i}
              caption={GALLERY_CAPTIONS[i]?.caption}
              year={GALLERY_CAPTIONS[i]?.year}
            />
          ))}
        </div>

        <div className="gallery__foot">
          {remaining > 0 ? (
            <>
              <button
                className="btn btn--ink btn--lg"
                onClick={() => setCount(c => Math.min(c + STEP, total))}
              >
                Load {Math.min(STEP, remaining)} more
                <Icon name="arrow-right" data-arrow />
              </button>
              <span className="mono-label" style={{ color: "var(--ink-3)" }}>
                {remaining} project{remaining === 1 ? "" : "s"} remaining
              </span>
            </>
          ) : (
            <>
              <button
                className="btn btn--ghost btn--lg"
                onClick={() => setCount(INITIAL)}
              >
                Collapse gallery
              </button>
              <span className="mono-label" style={{ color: "var(--ink-3)" }}>
                That&rsquo;s the lot — for now.
              </span>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ id, index, caption, year }) {
  return (
    <figure className="gcard">
      <div className="gcard__img">
        <img src={galleryUrl(id, 900)} alt={caption || `Project ${index + 1}`} loading="lazy" />
        <span className="gcard__num mono-label">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <figcaption className="gcard__cap">
        <span className="body-md" style={{ color: "var(--ink)", fontWeight: 440 }}>
          {caption}
        </span>
        <span className="mono-label" style={{ color: "var(--ink-3)" }}>
          {year}
        </span>
      </figcaption>
    </figure>
  );
}

// ============================================================
// Contact strip
// ============================================================
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container-wide">
        <div className="contact__inner">
          <div className="contact__lead">
            <span className="mono-label-lg section-marker" style={{ color: "var(--bone-2)" }}>
              Get in touch
            </span>
            <h2 className="display-lg" style={{ marginTop: "24px" }}>
              Thinking about a project?<br />
              <em>Let&rsquo;s have a proper chat first.</em>
            </h2>
            <p className="body-lg" style={{ color: "var(--bone-2)", opacity: 0.8, maxWidth: "48ch", marginTop: "24px" }}>
              No pushy sales. I&rsquo;ll come out, walk the space, and
              tell you honestly whether we&rsquo;re the right firm for the
              job — usually within a week of you ringing.
            </p>
          </div>

          <div className="contact__cards">
            <ContactCard
              label="Phone"
              big="01225 000 000"
              note="Mon — Fri · 7am — 6pm"
              href="tel:+441225000000"
              icon="phone"
            />
            <ContactCard
              label="Email"
              big="hello@whitsey.co.uk"
              note="Replies within one working day"
              href="mailto:hello@whitsey.co.uk"
              icon="mail"
            />
            <ContactCard
              label="Where we work"
              big="Bath &amp; surrounds"
              note="~40 mile radius · Wiltshire, Somerset, Gloucestershire"
              href="#"
              icon="map-pin"
            />
          </div>

          <div className="contact__foot">
            <a href="#contact" className="btn btn--bone btn--lg">
              Request a site visit
              <Icon name="arrow-right" data-arrow />
            </a>
            <div className="contact__credentials">
              <span className="mono-label" style={{ color: "var(--bone-2)" }}>
                Federation of Master Builders
              </span>
              <span className="contact__credentials-dot" />
              <span className="mono-label" style={{ color: "var(--bone-2)" }}>
                TrustMark registered
              </span>
              <span className="contact__credentials-dot" />
              <span className="mono-label" style={{ color: "var(--bone-2)" }}>
                £5m public liability
              </span>
            </div>
          </div>
        </div>
      </div>

      <footer className="foot">
        <div className="container-wide foot__inner">
          <span className="mono-label" style={{ color: "var(--bone-2)" }}>
            © 2026 Whitsey &amp; Co. Ltd · Company no. 07412389
          </span>
          <span className="mono-label" style={{ color: "var(--bone-2)" }}>
            Built in Bath
          </span>
        </div>
      </footer>
    </section>
  );
}

function ContactCard({ label, big, note, href, icon }) {
  return (
    <a className="ccard" href={href}>
      <span className="ccard__icon-row">
        <Icon name={icon} size="16" />
        <span className="mono-label ccard__label">{label}</span>
      </span>
      <span className="ccard__big heading-md" dangerouslySetInnerHTML={{ __html: big }} />
      <span className="body-sm ccard__note" style={{ color: "var(--bone-2)", opacity: 0.7 }}>
        {note}
      </span>
      <span className="ccard__arrow" aria-hidden="true">
        <Icon name="arrow-up-right" size="18" />
      </span>
    </a>
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
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
