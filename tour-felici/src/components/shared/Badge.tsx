interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const styles = {
    default: "bg-abete/10 text-abete",
    accent: "bg-ocra/20 text-abete",
    outline: "border border-roccia/30 text-roccia",
  };

  return (
    <span
      className={`inline-block text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  );
}