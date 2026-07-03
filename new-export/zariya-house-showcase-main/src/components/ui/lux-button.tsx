import * as React from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type Variant = "wine" | "gold" | "outline-gold" | "ghost" | "outline-ivory";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  wine: "bg-wine text-ivory hover:bg-wine-deep",
  gold: "bg-gold text-charcoal hover:bg-gold-deep hover:text-ivory",
  "outline-gold": "border border-gold text-gold-deep hover:bg-gold hover:text-charcoal",
  "outline-ivory": "border border-ivory/70 text-ivory hover:bg-ivory hover:text-charcoal",
  ghost: "text-charcoal hover:text-wine",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-[0.68rem] tracking-[0.24em]",
  md: "px-6 py-3 text-[0.72rem] tracking-[0.28em]",
  lg: "px-8 py-4 text-[0.75rem] tracking-[0.3em]",
};

type Props = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function LuxButton({ variant = "wine", size = "md", className, children, href, ...rest }: Props) {
  const cls = cn(
    "shine-sweep relative inline-flex items-center justify-center gap-2 font-medium uppercase transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
  if (href) {
    return (
      <Link to={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
