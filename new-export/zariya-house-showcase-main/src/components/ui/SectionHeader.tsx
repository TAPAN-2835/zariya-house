import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  as: Tag = "h2",
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gold" />
          <span className="eyebrow">{eyebrow}</span>
          <span className="h-px w-8 bg-gold" />
        </div>
      )}
      <Tag className="serif-display text-4xl md:text-5xl lg:text-[3.4rem] text-charcoal">
        {title}
      </Tag>
      {subtitle && (
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
