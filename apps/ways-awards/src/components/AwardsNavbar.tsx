"use client";

import React from "react";
import Link from "next/link";

export function AwardsNavbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar1_component ${isScrolled ? "scrolled" : ""}`}>
      <div className="padding-global">
        <div className="navbar1_container">
          <Link href="/" className="navbar1_logo-link">
            WaysAwards
          </Link>
          <nav className="navbar1_menu" role="navigation">
            <div className="navbar1_menu-links">
              <a href="#nominations" className="rl_navbar2_link-text">
                Projects
              </a>
              <a
                href="https://waysconf.com"
                target="_blank"
                rel="noreferrer"
                className="rl_navbar2_link-text"
              >
                WaysConf
              </a>
            </div>
            <div className="button_wrapper-navbar" />
          </nav>
        </div>
      </div>
    </header>
  );
}
