import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle ? (
        <p className="mx-auto max-w-2xl text-base leading-[1.7] text-muted">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
