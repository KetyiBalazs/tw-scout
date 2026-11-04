import { useRef, useState } from "react";

type Supplier = {
  name: string;
};

const suppliers: Supplier[] = [
  { name: "Hangzhou Mubu Home" },
  { name: "Foshan Liwei Furniture" },
  { name: "Jaipur Loom Co." },
];

function StatusBar({
  notch,
  icons,
}: {
  notch: string;
  icons: string;
}) {
  return (
    <div className="status-bar">
      <span className="status-time">9:41</span>
      <img className="status-notch" src={notch} alt="" />
      <img className="status-icons" src={icons} alt="" />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="home-indicator">
      <span />
    </div>
  );
}

function SupplierCard({ name }: Supplier) {
  return (
    <article className="supplier-card">
      <div className="supplier-main">
        <span className="supplier-avatar" aria-hidden>
          H
        </span>
        <div className="supplier-copy">
          <div className="supplier-name">
            <strong>{name}</strong>
            <img src="/assets/chevron.svg" alt="" />
          </div>
          <p>
            <span>Hall 11.2 - C34</span>
            <img src="/assets/dot.svg" alt="" />
            <span>
              <b>3</b> products
            </span>
          </p>
        </div>
      </div>
      <div className="supplier-chips">
        <span>Chair</span>
        <span>Furniture</span>
      </div>
    </article>
  );
}

function TabBar({ active }: { active: "home" | "suppliers" }) {
  const homeActive = active === "home";
  return (
    <div className="tab-wrap">
      <div className="tab-bar">
        <div className={homeActive ? "tab tab-active" : "tab"}>
          <img src={homeActive ? "/assets/icon-home-active.svg" : "/assets/icon-home.svg"} alt="" />
          <span>Home</span>
        </div>
        <div className={homeActive ? "tab" : "tab tab-active"}>
          <img src={homeActive ? "/assets/icon-building-muted.svg" : "/assets/icon-building.svg"} alt="" />
          <span>Suppliers</span>
        </div>
        <div className="tab">
          <img src="/assets/icon-grid.svg" alt="" />
          <span>Products</span>
        </div>
      </div>
      <button className="camera-btn" type="button" aria-label="Capture">
        <img src="/assets/icon-camera.svg" alt="" />
      </button>
    </div>
  );
}

function OnboardingPhone() {
  return (
    <article className="phone phone-onboarding" aria-label="Buyer onboarding">
      <div className="phone-canvas">
        <StatusBar notch="/assets/notch.svg" icons="/assets/status-right.svg" />
        <div className="phone-lang">
          <span className="lang-pill">
            <img src="/assets/globe.svg" alt="" />
            English
          </span>
        </div>
        <div className="onboarding-art">
          <img src="/assets/diamond-orange.png" alt="" />
        </div>
        <div className="onboarding-copy">
          <h3>Scouting the booth in seconds anytime.</h3>
          <p>Capture, rate and note new products as walk the hall. Everything works.</p>
        </div>
        <div className="onboarding-actions">
          <button className="phone-cta" type="button">
            Log in to my account
          </button>
          <button className="phone-text-link" type="button">
            I have an account
          </button>
        </div>
        <HomeIndicator />
      </div>
    </article>
  );
}

function SuppliersPhone() {
  return (
    <article className="phone phone-app" aria-label="Suppliers">
      <div className="phone-canvas">
        <div>
          <StatusBar notch="/assets/notch-alt.svg" icons="/assets/status-right-alt.svg" />
          <div className="app-header">
            <h3>Suppliers</h3>
            <span className="profile-pill">
              <img src="/assets/avatar.png" alt="" />
              Anna Smith
            </span>
          </div>
          <div className="search-block">
            <label className="search-field">
              <img src="/assets/search.svg" alt="" />
              <input readOnly value="Search name, booth or contact" aria-label="Search suppliers" />
            </label>
            <div className="search-meta">
              <span>5 suppliers · Canton Fair</span>
              <strong>Sort by Hall</strong>
            </div>
          </div>
          <div className="supplier-list">
            {suppliers.map((supplier) => (
              <SupplierCard key={supplier.name} name={supplier.name} />
            ))}
          </div>
        </div>
        <div>
          <TabBar active="suppliers" />
          <HomeIndicator />
        </div>
      </div>
    </article>
  );
}

function HomePhone() {
  return (
    <article className="phone phone-app" aria-label="Home">
      <div className="phone-canvas">
        <div>
          <StatusBar notch="/assets/notch-alt.svg" icons="/assets/status-right-alt.svg" />
          <div className="app-header">
            <h3>Home</h3>
            <span className="profile-pill">
              <img src="/assets/avatar.png" alt="" />
              Anna Smith
            </span>
          </div>
          <div className="home-stack">
            <div className="exhibition-card">
              <div className="exhibition-top">
                <span>Active Exhibition</span>
                <button type="button">Switch</button>
              </div>
              <h3>Canton Fair · Phase 2</h3>
              <p>Guangzhou · Day 2 of 5</p>
              <div className="exhibition-metrics">
                <div>
                  <strong>24</strong>
                  <span>Products</span>
                </div>
                <div>
                  <strong>11</strong>
                  <span>Suppliers</span>
                </div>
                <div>
                  <strong>6</strong>
                  <span>Follow-ups</span>
                </div>
              </div>
            </div>
            <div className="home-actions">
              <button type="button">Scan booth</button>
              <button type="button">Export data</button>
            </div>
          </div>
          <div className="supplier-list">
            <h4>Recently scouted</h4>
            <SupplierCard name="Hangzhou Mubu Home" />
            <SupplierCard name="Hangzhou Mubu Home" />
          </div>
        </div>
        <div>
          <TabBar active="home" />
          <HomeIndicator />
        </div>
      </div>
    </article>
  );
}

const phoneScreens = ["Onboarding", "Suppliers", "Home"];

export function PhoneRow() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function updateActive() {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const midpoint = scroller.scrollLeft + scroller.clientWidth / 2;
    const phones = [...scroller.querySelectorAll<HTMLElement>(".phone")];
    let next = 0;
    let best = Number.POSITIVE_INFINITY;
    phones.forEach((phone, index) => {
      const center = phone.offsetLeft + phone.offsetWidth / 2;
      const distance = Math.abs(center - midpoint);
      if (distance < best) {
        best = distance;
        next = index;
      }
    });
    setActive((current) => (current === next ? current : next));
  }

  function showPhone(index: number) {
    const scroller = scrollerRef.current;
    const phone = scroller?.querySelectorAll<HTMLElement>(".phone")[index];
    if (!scroller || !phone) return;
    scroller.scrollTo({
      left: phone.offsetLeft - (scroller.clientWidth - phone.offsetWidth) / 2,
      behavior: "smooth",
    });
  }

  return (
    <div className="phone-carousel">
      <div
        className="phone-row"
        ref={scrollerRef}
        onScroll={updateActive}
        aria-label="App screens"
      >
        <img className="phone-glow" src="/assets/glow.svg" alt="" />
        <OnboardingPhone />
        <SuppliersPhone />
        <HomePhone />
      </div>
      <div className="phone-dots" role="tablist" aria-label="Choose an app screen">
        {phoneScreens.map((label, index) => (
          <button
            key={label}
            type="button"
            role="tab"
            aria-label={label}
            aria-selected={active === index}
            className={active === index ? "is-active" : undefined}
            onClick={() => showPhone(index)}
          />
        ))}
      </div>
    </div>
  );
}
