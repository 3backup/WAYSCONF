import * as React from "react";
import { cn } from "../../lib/utils";
import { IconEmbed } from "../atoms/IconEmbed";

export type InfoCardProps = {
  id?: string;
  iconHtml: string;
  iconClassName?: string;
  label?: string;
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
  labelClassName?: string;
  baseClassName?: string;
};

export function InfoCard({
  id,
  iconHtml,
  iconClassName,
  label,
  title,
  description,
  className,
  titleClassName,
  labelClassName,
  baseClassName = "home25-session-content_grid-item",
}: InfoCardProps) {
  return (
    <div className={cn(baseClassName, className)} id={id}>
      <div className="home25-session-tabs_grid-item-top">
        <div className="home25-session-content_grid-item-top">
          <IconEmbed className={cn("icon-embed-xsmall-10", iconClassName)} html={iconHtml} />
          {label ? (
            <div className={cn("ways25-text-size-18", labelClassName)}>{label}</div>
          ) : null}
        </div>
        <h5 className={cn("ways25-heading5", titleClassName)}>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}
