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
        "space-y-5",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <h2 className="text-display-md">{title}</h2>
      {subtitle ? (
        <p
          className={cn(
            "text-body-md text-muted",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
