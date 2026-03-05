import * as React from "react";

export type AwardsWhereProps = {
  image1?: string;
  image2?: string;
  image3?: string;
  shape?: string;
};

export function AwardsWhere({
  image1 =
    "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6849c7162aa50cfd87a209fa_Rectangle.png",
  image2 =
    "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6849c71688189ad5dab29052_Image04.png",
  image3 =
    "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6849c7167cfe331395c7e1fb_Frame%2023762635.png",
  shape =
    "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d4b5_where-shape.svg",
}: AwardsWhereProps) {
  return (
    <section className="section_home25-where">
      <div className="home25-where-content">
        <div className="home25-where-content_top">
          <h2 className="ways25-heading2">WaysAwards Ceremony</h2>
          <div className="home25-where-content_top-content">
            <h2 className="ways25-heading2">17th Sep, EXPO Kraków</h2>
          </div>
        </div>
        <div className="home25-where-grid w-layout-grid">
          <img
            className="home25-where-grid_asset"
            id="w-node-_0305d8a9-61bd-241b-e252-72961eb941f1-1eb940f5"
            src={image1}
            alt=""
            loading="lazy"
          />
          <img
            className="home25-where-grid_asset"
            id="w-node-_0305d8a9-61bd-241b-e252-72961eb941f2-1eb940f5"
            src={image2}
            alt=""
            loading="lazy"
          />
          <img
            className="home25-where-grid_asset"
            id="w-node-_0305d8a9-61bd-241b-e252-72961eb941f3-1eb940f5"
            src={image3}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <img className="home25-where-shape" src={shape} alt="" loading="lazy" />
    </section>
  );
}
