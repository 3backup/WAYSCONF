import * as React from "react";
import { cn } from "../../lib/utils";

export type IconEmbedProps = {
  html: string;
  className?: string;
  ariaHidden?: boolean;
};

export function IconEmbed({ html, className, ariaHidden = true }: IconEmbedProps) {
  return (
    <span
      className={cn(className)}
      aria-hidden={ariaHidden}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
