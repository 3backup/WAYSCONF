import * as React from "react";

export type AwardsNumbersProps = {
  imageSrc?: string;
};

export function AwardsNumbers({
  imageSrc =
    "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6849c7162aa50cfd87a209fa_Rectangle.png",
}: AwardsNumbersProps) {
  return (
    <section className="section_home25-numbers">
      <div className="home25-numbers-grid">
        <div
          className="home25-numbers-left"
          id="w-node-_0305d8a9-61bd-241b-e252-72961eb94105-1eb940f5"
        >
          <div className="home25-numbers-left_content">
            <img className="background-video" src={imageSrc} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
