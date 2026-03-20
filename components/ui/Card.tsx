import * as React from "react";

import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-card border-2 border-dark bg-surface p-8 shadow-card transition-all duration-200 ease-out hover:-translate-x-0.5 hover:-translate-y-1 hover:shadow-card-hover",
        className,
      )}
      {...props}
    />
  ),
);

Card.displayName = "Card";

export { Card };
