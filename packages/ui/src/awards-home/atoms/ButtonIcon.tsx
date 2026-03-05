import * as React from "react";
import { cn } from "../../lib/utils";
import { IconEmbed } from "./IconEmbed";

export type ButtonIconVariant = "Base" | "smaller";

const variantClass: Record<ButtonIconVariant, string> = {
  Base: "",
  smaller: "w-variant-8ad0fca4-f7d8-9c07-7a71-7eb65c0d4448",
};

const arrowSvg =
  "%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2013%2012%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.02941%201L11.3824%201.11765M11.3824%201.11765L11.5%209.47059M11.3824%201.11765L1.5%2011%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.66667%22%2F%3E%0A%3C%2Fsvg%3E";

export type ButtonIconProps = {
  text: string;
  href: string;
  className?: string;
  variant?: ButtonIconVariant;
  target?: string;
  rel?: string;
};

export function ButtonIcon({
  text,
  href,
  className,
  variant = "Base",
  target,
  rel,
}: ButtonIconProps) {
  const variantKey = variantClass[variant];
  return (
    <a
      href={href}
      className={cn("button-icon", "is--menu", variantKey, className)}
      target={target}
      rel={rel}
    >
      <div>{text}</div>
      <IconEmbed
        className={cn("button-icon_embed", variantKey)}
        html={decodeURIComponent(arrowSvg)}
      />
    </a>
  );
}
