interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, light }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${
            light ? 'text-accent-100' : 'text-brand-500'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-semibold leading-tight sm:text-4xl ${
          light ? 'text-white' : 'text-brand-900'
        }`}
      >
        {title}
      </h2>
      <div
        className={`mx-auto mt-5 h-1 w-16 rounded-full ${
          light ? 'bg-accent-400' : 'bg-accent-400'
        }`}
      />
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-blue-100' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
