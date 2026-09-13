import Link from "next/link";

interface MobileMenuProps {
  items: { href: string; label: string }[];
  onClose: () => void;
}

export default function MobileMenu({ items, onClose }: MobileMenuProps) {
  return (
    <div className="lg:hidden bg-neve border-t border-dolomia">
      <nav className="container-main py-6 flex flex-col gap-4" aria-label="Menu mobile">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-lg text-abete hover:text-ocra transition-colors py-2"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/guide"
          onClick={onClose}
          className="btn-primary text-center mt-4"
        >
          Prenota un'esperienza
        </Link>
      </nav>
    </div>
  );
}