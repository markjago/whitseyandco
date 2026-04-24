// ============================================================
// Icons — Lucide-sourced SVG paths, inlined.
// Pass `data-arrow` to opt into the nudge-on-hover animation.
// ============================================================
window.Icon = function Icon({ name, size, className, ...rest }) {
  const paths = {
    "arrow-right": (
      <React.Fragment>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </React.Fragment>
    ),
    "arrow-up-right": (
      <React.Fragment>
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </React.Fragment>
    ),
    "phone": (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
    "mail": (
      <React.Fragment>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </React.Fragment>
    ),
    "map-pin": (
      <React.Fragment>
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </React.Fragment>
    ),
    "star": (
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    ),
    "chef-hat": (
      <React.Fragment>
        <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
        <path d="M6 17h12" />
      </React.Fragment>
    ),
    "bath": (
      <React.Fragment>
        <path d="M10 4 8 6" />
        <path d="M17 19v2" />
        <path d="M2 12h20" />
        <path d="M7 19v2" />
        <path d="M9 5a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h4Z" />
        <path d="M4 12V6a2 2 0 1 1 4 0v6" />
        <path d="M20 12v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5" />
      </React.Fragment>
    ),
    "tv": (
      <React.Fragment>
        <path d="m17 2-5 5-5-5" />
        <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
      </React.Fragment>
    ),
    "flame": (
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    ),
    "grid-2x2": (
      <React.Fragment>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 12h18" />
        <path d="M12 3v18" />
      </React.Fragment>
    ),
    "lightbulb": (
      <React.Fragment>
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </React.Fragment>
    ),
    "trees": (
      <React.Fragment>
        <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
        <path d="M7 16v6" />
        <path d="M13 19h6" />
        <path d="M17 12v10" />
        <path d="M17 2a3 3 0 0 0-3 3v1.4c-.6.3-1 .9-1 1.6v.2c0 .8.6 1.5 1.4 1.6l.6.1V14h5V10l.6-.1c.8-.1 1.4-.8 1.4-1.6V8c0-.7-.4-1.3-1-1.6V5a3 3 0 0 0-3-3Z" />
      </React.Fragment>
    ),
    "square-stack": (
      <React.Fragment>
        <path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
        <path d="M10 22H6c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2" />
        <rect width="12" height="12" x="10" y="10" rx="2" />
      </React.Fragment>
    ),
    "warehouse": (
      <React.Fragment>
        <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
        <path d="M6 18h12" />
        <path d="M6 14h12" />
        <rect width="12" height="12" x="6" y="10" />
      </React.Fragment>
    ),
    "fence": (
      <React.Fragment>
        <path d="M4 22V9.5a.5.5 0 0 1 .2-.4l2.6-1.8a.6.6 0 0 1 .8 0l2.8 1.9a.5.5 0 0 0 .8 0l2.8-1.9a.6.6 0 0 1 .8 0l2.8 1.9a.5.5 0 0 0 .8 0l2.6-1.8a.5.5 0 0 1 .8.4V22" />
        <path d="M1 22h22" />
        <path d="M7 13h2" />
        <path d="M7 17h2" />
        <path d="M15 13h2" />
        <path d="M15 17h2" />
      </React.Fragment>
    ),
  };

  const s = size || "1em";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={s}
      height={s}
      className={"icon " + (className || "")}
      aria-hidden="true"
      {...rest}
    >
      {paths[name] || null}
    </svg>
  );
};
