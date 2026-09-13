interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const subtitleAlign = align === "center" ? "mx-auto" : "";

  return (
    <div className={`mb-12 ${alignClass}`}>
      {eyebrow && (
        <p className="text-ocra uppercase tracking-[0.2em] text-xs mb-3 font-semibold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-section text-abete mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-roccia max-w-2xl ${subtitleAlign} leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}