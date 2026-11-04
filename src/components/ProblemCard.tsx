type ProblemCardProps = {
  index: string;
  text: string;
};

export function ProblemCard({ index, text }: ProblemCardProps) {
  return (
    <article className="problem-card">
      <p className="problem-index">{index}</p>
      <p>{text}</p>
    </article>
  );
}
