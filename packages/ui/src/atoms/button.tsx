"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { ArrowIcon } from "./icons";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 rounded-[1000px] border font-semibold transition-all duration-200 ease-out cursor-pointer outline-none [font-family:var(--font-general-sans,'General_Sans',sans-serif)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
  {
    variants: {
      variant: {
        primary:
          "border-white bg-white text-black shadow-[0_0_10px_0_rgba(255,255,255,0.1)_inset] backdrop-blur-[25px] hover:-translate-y-px hover:shadow-[0_4px_20px_0_rgba(255,255,255,0.3)]",
        secondary:
          "border-white bg-transparent text-white shadow-none backdrop-blur-none hover:bg-white/10 hover:shadow-[0_4px_20px_0_rgba(255,255,255,0.2)] hover:-translate-y-px",
        transparent:
          "border-white/30 bg-transparent text-white shadow-none hover:bg-white/10 hover:shadow-[0_4px_20px_0_rgba(255,255,255,0.2)] hover:-translate-y-px",
      },
      size: {
        small: "h-8 px-4 py-2 text-xs",
        medium: "h-10 px-6 py-2.5 text-sm tracking-[-0.14px]",
        large: "h-12 px-8 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  asChild?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  linkComponent?: React.ComponentType<{
    href: string;
    className?: string;
    children: React.ReactNode;
  }>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      href,
      icon,
      iconPosition = "right",
      linkComponent: Link,
      children,
      ...props
    },
    ref
  ) => {
    const content = (
      <>
        {icon && iconPosition === "left" && icon}
        <span>{children}</span>
        {icon && iconPosition === "right" && icon}
      </>
    );
    const resolvedVariant = variant ?? "primary";
    const resolvedSize = size ?? "medium";
    const classes = cn(
      "ui-button",
      `ui-button--${resolvedVariant}`,
      `ui-button--${resolvedSize}`,
      buttonVariants({ variant: resolvedVariant, size: resolvedSize, className })
    );

    if (href && Link) {
      return (
        <Link href={href} className={cn(classes, "inline-flex no-underline")}>
          {content}
        </Link>
      );
    }

    if (href && !Link) {
      return (
        <a href={href} className={cn(classes, "inline-flex no-underline")}>
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export { ArrowIcon, Button, buttonVariants };
