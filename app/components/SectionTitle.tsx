type SectionTitleProps = {
    title: string;
  };
  
  export default function SectionTitle({ title }: SectionTitleProps) {
    return (
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-bold tracking-[0.22em] text-blue-600">
          {title}
        </h2>
        <div className="h-px flex-1 bg-slate-300" />
      </div>
    );
  }