type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-col gap-4">
      <span className="pill w-fit">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}
