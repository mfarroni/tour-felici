import Link from "next/link";

interface PillarCardProps {
  href: string;
  label: string;
  icon: string;
  description: string;
}

export default function PillarCard({
  href,
  label,
  icon,
  description,
}: PillarCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white border border-dolomia rounded-2xl p-8
        hover:border-ocra hover:shadow-lg transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-ocra"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-serif text-xl text-abete mb-2">{label}</h3>
      <p className="text-roccia text-sm leading-relaxed">{description}</p>
    </Link>
  );
}