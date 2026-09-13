interface PlaceholderProps {
  title: string;
  description: string;
  icon?: string;
}

export default function Placeholder({
  title,
  description,
  icon = "🏔️",
}: PlaceholderProps) {
  return (
    <div className="border-2 border-dashed border-ocra/30 rounded-2xl p-12 text-center bg-neve/50">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="font-serif text-2xl text-abete mb-2">{title}</h3>
      <p className="text-roccia text-sm max-w-md mx-auto leading-relaxed">
        {description}
      </p>
      <p className="text-xs text-roccia/50 mt-6 italic">
        Sezione in costruzione — Tour Felici srl
      </p>
    </div>
  );
}