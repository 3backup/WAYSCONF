import * as React from "react";

export type AwardsFooterProps = {
  email?: string;
};

export function AwardsFooter({ email = "hello@waysconf.com" }: AwardsFooterProps) {
  return (
    <footer className="home24-footer">
      <style>{`
        .home24-footer .home24-footer-content_grid.w-layout-grid {
          display: grid;
          grid-auto-columns: 1fr;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          grid-row-gap: 16px;
          grid-column-gap: 16px;
        }

        .home24-footer .navbar18_social-list.w-layout-grid {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: max-content;
          grid-template-columns: max-content;
          grid-template-rows: auto;
          grid-column-gap: 0.75rem;
          grid-row-gap: 0;
          white-space: normal;
        }

        .track-horizontal-alt {
          position: absolute;
          white-space: nowrap;
          will-change: transform;
          animation: marquee-horizontal-alt 40s linear infinite;
        }
        @keyframes marquee-horizontal-alt {
          from { transform: translateX(-50%); }
          to { transform: translateX(0%); }
        }
      `}</style>
      <div className="marquee-horizontal">
        <div className="track-horizontal-alt">
          <h1 className="home24-hero-heading">hello@waysconf.com</h1>
          <h1 className="home24-hero-heading">{email}</h1>
          <h1 className="home24-hero-heading">{email}</h1>
          <h1 className="home24-hero-heading">{email}</h1>
          <h1 className="home24-hero-heading">{email}</h1>
          <h1 className="home24-hero-heading">{email}</h1>
        </div>
      </div>

      <div className="home24-footer-content">
        <div className="home24-footer-content_grid w-layout-grid">
          <a
            className="navbar18_logo-link w-nav-brand w--current"
            href="/"
            aria-current="page"
            id="w-node-_800cba35-2c8d-0d21-460b-378f532686ab-5326868d"
          >
            <img
              className="navbar18_brand"
              src="https://cdn.prod.website-files.com/63b2a5b42091f1283873f0fe/6798eff455c9675a18abade8_waysconf-logo.svg"
              alt=""
            />
          </a>
          <div
            className="home24-footer-content_grid-group"
            id="w-node-_800cba35-2c8d-0d21-460b-378f532686b7-5326868d"
          >
            <div>Contact us if you have any questions.</div>
            <a
              className="home24-heading-h4 on-hover-underline"
              href="mailto:hello@waysconf.com"
            >
              hello@waysconf.com
            </a>
          </div>
          <div
            className="home24-footer-content_grid-group is--right"
            id="w-node-_800cba35-2c8d-0d21-460b-378f532686bc-5326868d"
          >
            <div className="navbar18_social-list w-layout-grid">
              <a
                className="navbar18_social-link w-inline-block"
                href="https://www.linkedin.com/company/waysconf/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-icon w-embed" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z" />
                  </svg>
                </div>
              </a>
              <a
                className="navbar18_social-link w-inline-block"
                href="https://www.facebook.com/waysconf"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon-embed-xsmall w-embed" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z" />
                  </svg>
                </div>
              </a>
              <a
                className="navbar18_social-link w-inline-block"
                href="https://www.youtube.com/@waysconf"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon-embed-xsmall w-embed" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.5686 4.77345C21.5163 5.02692 22.2555 5.76903 22.5118 6.71673C23.1821 9.42042 23.1385 14.5321 22.5259 17.278C22.2724 18.2257 21.5303 18.965 20.5826 19.2213C17.9071 19.8831 5.92356 19.8015 3.40294 19.2213C2.45524 18.9678 1.71595 18.2257 1.45966 17.278C0.827391 14.7011 0.871044 9.25144 1.44558 6.73081C1.69905 5.78311 2.44116 5.04382 3.38886 4.78753C6.96561 4.0412 19.2956 4.282 20.5686 4.77345ZM9.86682 8.70227L15.6122 11.9974L9.86682 15.2925V8.70227Z" />
                  </svg>
                </div>
              </a>
              <a
                className="navbar18_social-link w-inline-block"
                href="https://open.spotify.com/show/5hrTULFLO74qjTcF4telis"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-icon w-embed" aria-hidden="true">
                  <svg viewBox="0 0 21 21" fill="currentColor" aria-hidden="true">
                    <path d="M16.6174 9.32655C13.2838 7.34685 7.78511 7.16482 4.6028 8.13066C4.09175 8.28576 3.55132 7.99716 3.39652 7.48627C3.24162 6.97488 3.52981 6.43485 4.04124 6.2795C7.69432 5.17065 13.767 5.38479 17.6047 7.66286C18.0643 7.93578 18.2151 8.52942 17.9427 8.98829C17.67 9.44792 17.0759 9.59943 16.6174 9.32655Z" />
                    <path d="M16.5082 12.2588C16.2743 12.6383 15.7781 12.7573 15.3991 12.5243C12.6199 10.8159 8.38202 10.3211 5.09402 11.3191C4.66764 11.448 4.21727 11.2075 4.08775 10.782C3.95928 10.3556 4.19981 9.90606 4.62543 9.77639C8.38149 8.63661 13.0509 9.18868 16.2429 11.1503C16.6219 11.3837 16.7412 11.8802 16.5082 12.2588Z" />
                    <path d="M15.2428 15.0748C15.0569 15.3796 14.6601 15.4751 14.3564 15.2893C11.9279 13.8051 8.87122 13.4699 5.27139 14.2921C4.9245 14.3716 4.57877 14.1543 4.49966 13.8074C4.42021 13.4606 4.63676 13.1148 4.98442 13.0357C8.9238 12.1351 12.303 12.5227 15.0289 14.1884C15.3328 14.374 15.4285 14.771 15.2428 15.0748Z" />
                    <path d="M10.4999 0.158436C4.78842 0.158436 0.158203 4.78856 0.158203 10.5C0.158203 16.2121 4.78842 20.8418 10.4999 20.8418C16.2116 20.8418 20.8416 16.2121 20.8416 10.5C20.8416 4.78856 16.2116 0.158436 10.4999 0.158436Z" />
                  </svg>
                </div>
              </a>
              <a
                className="navbar18_social-link w-inline-block"
                href="https://www.instagram.com/waysconfcom/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon-embed-xsmall w-embed" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="home24-footer-content_grid-group-links">
              <a
                className="home24-footer-link"
                href="/code-of-conduct"
              >
                Code of Conduct
              </a>
              <a
                className="home24-footer-link"
                href="/privacy-policy-information-causes"
              >
                Privacy policy &amp; Information causes
              </a>
              <a
                className="home24-footer-link"
                href="/terms-of-service"
              >
                TERMS &amp; CONDITIONS
              </a>
              <a className="home24-footer-link is-disabled" href="/old-home-3">
                © 2026 WaysConf
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
