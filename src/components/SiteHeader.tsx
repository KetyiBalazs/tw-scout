import { useState } from "react";
import { Button } from "./Button";
import { Logo } from "./Logo";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#exhibitors", label: "For exhibitors" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className={open ? "site-header is-open" : "site-header"}>
      <div className="site-header-inner">
        <Logo />
        <div className="site-header-tools">
          <Button href="#demo" onClick={close}>
            Book a demo
          </Button>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((current) => !current)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className="site-header-bar" id="site-menu">
          <nav className="site-nav" aria-label="Primary">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={close}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="site-header-actions">
            <button className="lang-toggle" type="button">
              EN / 中文
            </button>
            <Button href="#demo" onClick={close}>
              Book a demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
