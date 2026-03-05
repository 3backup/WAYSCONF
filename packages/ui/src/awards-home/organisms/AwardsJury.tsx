import * as React from "react";

type JuryMember = {
  id: string;
  name: string;
  role?: string;
  company?: string;
  bio?: string;
  image?: string;
  profileUrl?: string;
};

const WAVE_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='160' viewBox='0 0 1200 160' fill='none'%3E%3Cpath d='M0 95.6C150 67.2 300 124.8 450 95.6C600 67.2 750 124.8 900 95.6C1000 76.5 1100 82.8 1200 95.6V160H0V95.6Z' fill='%233842f4'/%3E%3C/svg%3E";

const DEFAULT_JURY_YEAR = process.env.NEXT_PUBLIC_EDITION ?? "2025";

export type AwardsJuryProps = {
  limit?: number;
  showMoreHref?: string;
  showMoreLabel?: string;
  year?: string;
};

function normalizeYear(value: string | undefined | null): string | null {
  if (!value) {
    return null;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  if (trimmed.toLowerCase() === "all") {
    return "all";
  }

  const match = trimmed.match(/20\d{2}/);
  return match ? match[0] : trimmed;
}

function roleLine(member: JuryMember) {
  if (member.role && member.company) {
    return `${member.role} @ ${member.company}`;
  }

  return member.role || member.company || "";
}

function JuryItem({ member }: { member: JuryMember }) {
  const role = roleLine(member);

  return (
    <article
      className="speakers-collection-item is--interactive"
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <div className="speaker-hero-grid_image-wrapper">
        {member.image ? (
          <>
            <img className="speaker-main-grid_image is-blur" src={member.image} alt="" loading="lazy" />
            <img className="speaker-main-grid_image" src={member.image} alt={member.name} loading="lazy" />
          </>
        ) : (
          <div
            className="speaker-main-grid_image"
            style={{ backgroundImage: "linear-gradient(135deg, #3842f4 0%, #8da0ff 100%)" }}
          />
        )}
        <img className="speaker-main-grid_wave" src={WAVE_IMAGE} alt="" loading="lazy" />
      </div>

      <div
        className="speakers-item_name-2"
        style={{ height: "10.5rem", justifyContent: "space-between", overflow: "hidden" }}
      >
        <h3
          className="ways25-heading5 text-size-32"
          style={{
            margin: 0,
            color: "#fff",
            display: "-webkit-box",
            minHeight: "2.5em",
            overflow: "hidden",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical" as const,
          }}
        >
          {member.name}
        </h3>
        <p
          className="is--paragraph"
          style={{
            margin: 0,
            minHeight: "2.8em",
            color: "#fff",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical" as const,
          }}
          aria-hidden={role ? undefined : true}
        >
          {role || "\u00a0"}
        </p>
      </div>

      {member.profileUrl ? (
        <a
          style={{ position: "absolute", inset: 0, zIndex: 5 }}
          href={member.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${member.name} profile`}
        />
      ) : null}
    </article>
  );
}

export function AwardsJury({
  limit,
  showMoreHref,
  showMoreLabel = "Pokaż więcej",
  year = DEFAULT_JURY_YEAR,
}: AwardsJuryProps) {
  const [members, setMembers] = React.useState<JuryMember[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string>("");
  const requestedYear = React.useMemo(() => normalizeYear(year), [year]);
  const visibleMembers = React.useMemo(() => {
    if (typeof limit !== "number" || limit <= 0) {
      return members;
    }

    return members.slice(0, limit);
  }, [members, limit]);
  const shouldShowMoreButton =
    Boolean(showMoreHref) && members.length > visibleMembers.length;

  React.useEffect(() => {
    let isCancelled = false;

    async function loadMembers() {
      setIsLoading(true);

      try {
        const params = new URLSearchParams();
        if (requestedYear && requestedYear !== "all") {
          params.set("year", requestedYear);
        }

        const query = params.toString();
        const endpoint = query ? `/api/webflow/jury?${query}` : "/api/webflow/jury";
        const response = await fetch(endpoint, {
          headers: {
            Accept: "application/json",
          },
        });
        const payload = await response.json();

        if (!response.ok) {
          throw new Error(payload?.error || "Unable to load jury members.");
        }

        const nextMembers = Array.isArray(payload?.members) ? payload.members : [];
        if (!isCancelled) {
          setMembers(nextMembers);
          setError("");
        }
      } catch (fetchError) {
        if (!isCancelled) {
          setMembers([]);
          setError(
            fetchError instanceof Error
              ? fetchError.message
              : "Unable to load jury members."
          );
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }

    loadMembers();

    return () => {
      isCancelled = true;
    };
  }, [requestedYear]);

  return (
    <div className="section-hero-wrapper awards-jury">
      <div className="home-speakers-content">
        <h2 className="ways25-heading2 text-align-center">Meet our esteemed experts</h2>
        {isLoading ? (
          <p className="is--paragraph is--text-color-silver" style={{ marginTop: "2rem", textAlign: "center" }}>
            Loading jury members...
          </p>
        ) : error && members.length === 0 ? (
          <p className="is--paragraph is--text-color-silver" style={{ marginTop: "2rem", textAlign: "center" }}>{error}</p>
        ) : members.length === 0 ? (
          <p className="is--paragraph is--text-color-silver" style={{ marginTop: "2rem", textAlign: "center" }}>
            No jury members available yet.
          </p>
        ) : (
          <div className="speakers-collection-wrapper">
            <div className="speakers-collection-list-s">
              {visibleMembers.map((member) => (
                <JuryItem key={member.id} member={member} />
              ))}
            </div>

            {shouldShowMoreButton ? (
              <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
                <a className="ways25-button-secondary white" href={showMoreHref}>
                  <span className="text-style-nowrap">{showMoreLabel}</span>
                </a>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
