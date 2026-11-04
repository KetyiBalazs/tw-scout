type StepCardProps = {
  index: string;
  title: string;
  description: string;
};

export function StepCard({ index, title, description }: StepCardProps) {
  return (
    <article className="step-card">
      <span className="step-index">{index}</span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
