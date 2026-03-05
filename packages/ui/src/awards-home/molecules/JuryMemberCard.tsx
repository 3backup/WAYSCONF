import * as React from "react";
import { cn } from "../../lib/utils";

export type JuryMemberCardProps = {
  name?: string;
  role?: string;
  company?: string;
  bio?: string;
  imageSrc?: string;
  className?: string;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function JuryMemberCard({
  name = "Alex Rivers",
  role = "Head of Product Design",
  company = "Northstar Studio",
  bio = "Dummy profile: product designer with 12+ years of experience building digital products and mentoring cross-functional teams.",
  imageSrc,
  className,
}: JuryMemberCardProps) {
  const initials = getInitials(name);

  return (
    <article className={cn("jury-member-card", className)}>
      <div className="jury-member-card__media">
        <div className="jury-member-card__glow" aria-hidden="true" />

        {imageSrc ? (
          <img className="jury-member-card__photo" src={imageSrc} alt={name} loading="lazy" />
        ) : (
          <div className="jury-member-card__fallback" aria-hidden="true">
            <span>{initials}</span>
          </div>
        )}

        <div className="jury-member-card__wave" aria-hidden="true">
          <svg viewBox="0 0 600 70" preserveAspectRatio="none" fill="currentColor">
            <path d="M0 40C75 12 150 68 225 40C300 12 375 68 450 40C500 22 550 28 600 40V70H0V40Z" />
          </svg>
        </div>

        <div className="jury-member-card__spark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z" />
          </svg>
        </div>

        <span className={cn("jury-member-card__badge", "text-size-14", "is--text-uppercase")}>
          Dummy
        </span>
      </div>

      <div className="jury-member-card__content">
        <p className="is--paragraph is--text-color-silver is--text-uppercase">
          Jury member
        </p>
        <h3 className={cn("ways25-heading5 text-size-32", "jury-member-card__heading")}>{name}</h3>
        <p className={cn("is--paragraph is--text-color-silver", "jury-member-card__meta")}>
          {role} @ {company}
        </p>
        <p className={cn("is--paragraph is--text-color-silver", "jury-member-card__bio")}>
          {bio}
        </p>
      </div>
    </article>
  );
}
