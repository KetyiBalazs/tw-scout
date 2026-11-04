import { Logo } from "./Logo";

const columns = [
  {
    title: "Product",
    links: [
      { href: "#how-it-works", label: "How it works" },
      { href: "#features", label: "Features" },
    ],
  },
  {
    title: "Company",
    links: [{ href: "#demo", label: "Book a demo" }],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-top">
        <div className="site-footer-brand">
          <Logo tone="light" />
          <p>
            The white-label scouting and
            <br />
            lead-capture app for trade shows.
          </p>
        </div>
        <div className="site-footer-columns">
          {columns.map((column) => (
            <div key={column.title}>
              <h2>{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="site-footer-base">
        <p>© 2025 Scout</p>
        <p>Technology by Scout</p>
      </div>
    </footer>
  );
}
