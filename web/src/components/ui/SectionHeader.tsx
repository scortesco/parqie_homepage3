/** Eyebrow + H2 on the left, supporting paragraph on the right (Benefits, How it works). */
export default function SectionHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
      <div className="flex flex-col gap-4">
        <span className="inline-flex items-center gap-2 text-sm font-bold leading-5 text-forest">
          <span className="eyebrow-dot" />
          {eyebrow}
        </span>
        <h2 className="h2-section">{title}</h2>
      </div>
      <p className="m-0 max-w-[380px] text-[17px] leading-[1.6] text-muted">{lead}</p>
    </div>
  );
}
