type SectionTitleProps = {
    title: string;
  };
  
  export default function SectionTitle({ title }: SectionTitleProps) {
    return (
      <div className="flex items-center gap-3">
        <span className="title-accent" aria-hidden="true" />
        <h2 className="text-base font-bold tracking-[0.24em] text-slate-800">
          {title}
        </h2>
        <span className="hairline" />
      </div>
    );
  }