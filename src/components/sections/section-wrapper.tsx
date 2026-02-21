import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className, id, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 border-t border-border-subtle",
        dark && "bg-[#0a0a0a]",
        className
      )}
    >
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-[60px]">{children}</div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  className,
  align = "left",
  label,
}: {
  title: string | React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
  label?: string;
}) {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-px bg-jumper-orange" />
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-text-muted">
            {label}
          </span>
        </div>
      )}
      <h2 className="text-fluid-h2 font-semibold text-foreground text-balance tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-8 text-[15px] leading-[1.85] text-text-secondary max-w-[720px] text-balance",
          align === "center" && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
