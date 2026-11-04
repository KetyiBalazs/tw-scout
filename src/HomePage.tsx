import { Chip } from "./components/Chip";
import { Button } from "./components/Button";
import { DemoForm } from "./components/DemoForm";
import { FaqList } from "./components/FaqList";
import { FeatureCard } from "./components/FeatureCard";
import { PhoneRow } from "./components/Phones";
import { ProblemCard } from "./components/ProblemCard";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { StatCard } from "./components/StatCard";
import { StepCard } from "./components/StepCard";

const features = [
  { title: "Your branding", description: "Logo, colours, app name and custom domain." },
  { title: "Industry presets", description: "Furniture, toys, electronics and more. Fully editable." },
  { title: "Offline-first", description: "Works with no signal and syncs automatically." },
  { title: "Every device", description: "iPhone, Android and tablets of every size." },
  { title: "Desktop companion", description: "Review, edit and bulk-upload from the office." },
  { title: "Exports and CRM", description: "PDF line sheets, Excel and organised." },
];

const questions = [
  {
    question: "Does it work without internet?",
    answer:
      "Yes. Buyers can capture and organize products offline. Everything syncs automatically when a connection returns.",
  },
  { question: "Which phones and tablets are supported?" },
  { question: "Can we use our own domain and app name?" },
  { question: "Who owns the buyer data?" },
  { question: "How is buyer consent and privacy handled?" },
  { question: "How fast can we launch for our show?" },
];

export function HomePage() {
  return (
    <div className="page" id="top">
      <SiteHeader />
      <main>
        <section className="hero wash">
          <div className="hero-copy">
            <Chip>White-label event technology</Chip>
            <h1>
              Your show. Your app.
              <br />
              Every buyer captured.
            </h1>
            <p>
              A white-label scouting and lead-capture app that buyers actually use, branded as yours and built to work
              with no signal on the show floor.
            </p>
            <div className="hero-actions">
              <Button href="#demo">Book a demo</Button>
              <Button appearance="secondary" href="#how-it-works">
                See how it works
              </Button>
            </div>
          </div>
          <img className="hero-diamond" src="/assets/diamond-orange.png" alt="" />
        </section>

        <section className="problems" aria-label="The problem">
          <div className="problem-grid">
            <ProblemCard index="01" text="Buyers walk past booths and leave no trace." />
            <ProblemCard index="02" text="Exhibitors lose warm leads they paid to attract." />
            <ProblemCard index="03" text="Organisers have no view of who went where." />
            <StatCard
              value="40,000"
              lines={["Visitors a day!", "Most leave no data behind."]}
              source="CIFF Guangzhou"
            />
          </div>
        </section>

        <section className="exhibitors wash" id="exhibitors">
          <div className="exhibitors-layout">
            <div className="exhibitors-intro">
              <Chip>For exhibitors</Chip>
              <h2>
                Turn your booth interest
                <br />
                into a qualified lead.
              </h2>
              <img className="cluster" src="/assets/diamond-purple.png" alt="" />
            </div>
            <div className="steps" id="how-it-works">
              <StepCard index="01" title="Buyer taps or scans" description="No app-store download or account friction." />
              <StepCard index="02" title="Content unlocks" description="Catalogue, price list, samples and details." />
              <StepCard
                index="03"
                title="A lead is created"
                description="Buyer contact and company details join the exhibitor lead list."
              />
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="section-heading">
            <Chip>White-label features</Chip>
            <h2>
              Your brand in front.
              <br />
              Our infrastructure underneath.
            </h2>
            <p>Make every touchpoint feel like a natural extension of your show or member offering.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
            ))}
          </div>
        </section>

        <section className="roadmap">
          <div className="section-heading">
            <Chip>Roadmap</Chip>
            <h2>See what is happening across your show.</h2>
            <p>An organiser view designed to turn on-floor activity into practical, real-time insight.</p>
          </div>
          <PhoneRow />
        </section>

        <section className="faq" id="faq">
          <div className="faq-intro">
            <h2>Questions, answered.</h2>
            <p>
              Need more detail?
              <br />
              Book a short walkthrough with our team.
            </p>
          </div>
          <FaqList items={questions} />
        </section>

        <section className="demo wash" id="demo">
          <div className="demo-copy">
            <h2>
              Launch your branded
              <br />
              app before your next show.
            </h2>
            <p>
              Tell us a little about your audience.
              <br />
              We will show you how Scout can fit your event.
            </p>
          </div>
          <DemoForm />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
