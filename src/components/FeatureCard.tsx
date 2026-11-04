type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <img className="feature-card-icon" src="/assets/diamond-orange.png" alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
