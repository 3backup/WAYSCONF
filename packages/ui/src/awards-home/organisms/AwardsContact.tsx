import * as React from "react";

export type AwardsContactProps = {
  email?: string;
  personName?: string;
  personRole?: string;
  personImage?: string;
};

export function AwardsContact({
  email = "awards@waysconf.com",
  personName = "Monika Bać-Kapała",
  personRole = "Coordinator",
  personImage =
    "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6849c8764ae9989fb3b71fb8_Zdje%CC%A8cie%20WhatsApp%202025-06-09%20o%2015.43.31_0a305058%201.png",
}: AwardsContactProps) {
  return (
    <section className="tomek_jest-sekcj">
      <div className="spacer-xhuge" />
      <div className="tomek-grid">
        <div
          className="home24-hero-header is-awards24"
          id="w-node-_0305d8a9-61bd-241b-e252-72961eb94368-1eb940f5"
        >
          <div className="div-block-25">
            <h4 className="text-size-large is-preheader">Let's talk</h4>
            <div className="spacer-16" />
            <h2 className="ways25-heading1">
              Get in touch <br />with us
            </h2>
            <div className="margin-top _16px">
              <a className="chip-wrapper white" href={`mailto:${email}`}>
                <div>{email}</div>
              </a>
            </div>
          </div>
          <div className="text-wrapper awards-contact">
            <div className="ways25-text-size-18 text-weight-semibold">
              DESIGNWAYS CONF SP Z O. O.
            </div>
            <div>
              al. Powstania Warszawskiego 15, 31-539 Kraków
              <br />KRS (National Court Register): 0000774156
              <br />EUVAT: PL 6772442132
            </div>
          </div>
        </div>
        <div
          className="swiper-slide is-council25 is-talk-to-us"
          id="w-node-_0305d8a9-61bd-241b-e252-72961eb9437e-1eb940f5"
        >
          <img className="council-img" src={personImage} alt={personName} loading="lazy" />
          <div className="home25-council-img">
            <div className="home25-council-text">
              <div className="text-size-32 text-weight-semibold">{personName}</div>
              <div className="spacer-16" />
              <p>{personRole}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer-xhuge" />
    </section>
  );
}
