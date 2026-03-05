"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { ButtonIcon } from "../atoms/ButtonIcon";

export function AwardsNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolledStyle: React.CSSProperties = isScrolled
    ? {
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      }
    : {};

  return (
    <header className="navbar1_component" style={scrolledStyle}>
      <div className="navbar1_container">
        <div className="navbar1_logo-wrapper">
          <a className="navbar1_logo-link" href="/">
            <img
              className="rl_navbar2_logo"
              src="/images/waysawards-logo.svg"
              alt="WaysAwards"
            />
          </a>
          <div className="navbar18_date-wrapper is-custom is-awards-menu">
            <img
              className="navbar18_date-icon"
              src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d285_calendar-line.svg"
              alt=""
              aria-hidden="true"
            />
            <div className="text-size-14 is--text-uppercase is-custom-navbar">
              <strong>Sep 17, 2025, 17:00</strong>
            </div>
          </div>
        </div>

        <nav
          className={cn("navbar1_menu", "is-page-height-tablet", isOpen && "is-open")}
          role="navigation"
        >
          <div className="navbar1_menu-links">
            <a className="rl_navbar2_link-text text-weight-medium" href="/nominations">
              Edition 2025
            </a>
            <a className="rl_navbar2_link-text text-weight-medium" href="/cursor-past-project">
              Previous Projects
            </a>
            <a className="rl_navbar2_link-text text-weight-medium" href="/cursor-jury">
              Jury
            </a>
            <a
              className="rl_navbar2_link-text text-weight-medium"
              href="https://waysconf.com"
              target="_blank"
              rel="noreferrer"
            >
              WaysConf
            </a>
            <div className="show-tablet">
              <ButtonIcon variant="smaller" text="Vote" href="https://vote.waysawards.com/" />
            </div>
          </div>
          <div className="button_wrapper-navbar" />
        </nav>

        <button
          className={cn("navbar1_menu-button", isOpen && "w--open")}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="menu-icon1">
            <div className="menu-icon1_line-top" />
            <div className="menu-icon1_line-middle">
              <div className="menu-icon1_line-middle-inner" />
            </div>
            <div className="menu-icon1_line-bottom" />
          </div>
        </button>

        <div className="hide-tablet">
          <ButtonIcon variant="smaller" text="Vote" href="https://vote.waysawards.com/" />
        </div>
      </div>
    </header>
  );
}
