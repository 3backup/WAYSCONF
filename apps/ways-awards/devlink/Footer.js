"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "footer")} tag="section">
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-vertical", "is--80")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "section-hero-wrapper")}
          tag="div"
        >
          <_Builtin.Grid
            className={_utils.cx(_styles, "footer-grid")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-grid_item")}
              id={_utils.cx(
                _styles,
                "w-node-_38737871-5a45-861a-161f-7c267cfa8765-7cfa8761"
              )}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "footer-grid_logo")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528cef9_waysconf-logo.svg"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "spacer", "is--24")}
                tag="div"
              />
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "is--paragraph",
                  "is--text-color-silver"
                )}
              >
                {"We're here if you have questions."}
              </_Builtin.Paragraph>
              <_Builtin.Block
                className={_utils.cx(_styles, "spacer", "is--24")}
                tag="div"
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-grid_link")}
                button={false}
                block=""
                options={{
                  href: "mailto:hello@waysconf.com?subject=Question%20from%20website",
                }}
              >
                {"hello@waysconf.com"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-grid_item", "is--list")}
              id={_utils.cx(
                _styles,
                "w-node-_38737871-5a45-861a-161f-7c267cfa876d-7cfa8761"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "is--caption-small",
                  "is--text-color-silver"
                )}
                tag="div"
              >
                {"Attendees"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-grid_item-list")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  button={false}
                  block=""
                  options={{
                    href: "#program",
                  }}
                >
                  {"BeforeWays"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "navbar-link",
                    "is--footer",
                    "is--display-hidden"
                  )}
                  button={false}
                  block=""
                  options={{
                    href: "#activities",
                  }}
                >
                  {"Job board"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  button={false}
                  block=""
                  options={{
                    href: "#story",
                  }}
                >
                  {"AfterWays"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  button={false}
                  block=""
                  options={{
                    href: "#story",
                  }}
                >
                  {"Venue"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  button={false}
                  block=""
                  options={{
                    href: "#story",
                  }}
                >
                  {"Gamification"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  button={false}
                  block=""
                  options={{
                    href: "#story",
                  }}
                >
                  {"Hotels"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  button={false}
                  block=""
                  options={{
                    href: "#story",
                  }}
                >
                  {"FAQ"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "navbar-link",
                    "is--footer",
                    "is--display-hidden"
                  )}
                  button={false}
                  block=""
                  options={{
                    href: "#story",
                  }}
                >
                  {"Food"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-grid_item", "is--list")}
              id={_utils.cx(
                _styles,
                "w-node-_13ea75c8-37cc-3352-a6e8-61358e79c806-7cfa8761"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "is--caption-small",
                  "is--text-color-silver"
                )}
                tag="div"
              >
                {"Conference"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-grid_item-list")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  button={false}
                  block=""
                  options={{
                    href: "#program",
                  }}
                >
                  {"Agenda"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  button={false}
                  block=""
                  options={{
                    href: "#activities",
                  }}
                >
                  {"For Researchers"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  button={false}
                  block=""
                  options={{
                    href: "#story",
                  }}
                >
                  {"Speakers"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  button={false}
                  block=""
                  options={{
                    href: "#story",
                  }}
                >
                  {"For Designers"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "navbar-link",
                    "is--footer",
                    "is--display-hidden"
                  )}
                  button={false}
                  block=""
                  options={{
                    href: "#story",
                  }}
                >
                  {"Stages & paths"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  button={false}
                  block=""
                  options={{
                    href: "#story",
                  }}
                >
                  {"Workshops"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  button={false}
                  block=""
                  options={{
                    href: "#story",
                  }}
                >
                  {"For Developers"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_13ea75c8-37cc-3352-a6e8-61358e79c818-7cfa8761"
                  )}
                  button={false}
                  block=""
                  options={{
                    href: "#story",
                  }}
                >
                  {"For Business"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-grid_item", "is--list")}
              id={_utils.cx(
                _styles,
                "w-node-_9f86f924-5831-f2d6-452c-cf9c63e1eb78-7cfa8761"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "is--caption-small",
                  "is--text-color-silver"
                )}
                tag="div"
              >
                {"Partners"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "footer-grid_item-list",
                  "is--1-col"
                )}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  button={false}
                  block=""
                  options={{
                    href: "#program",
                  }}
                >
                  {"Our partners"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  button={false}
                  block=""
                  options={{
                    href: "#story",
                  }}
                >
                  {"Media Kit"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "navbar-link",
                    "is--footer",
                    "is--display-hidden"
                  )}
                  button={false}
                  block=""
                  options={{
                    href: "#story",
                  }}
                >
                  {"Accreditation"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  button={false}
                  block=""
                  options={{
                    href: "#story",
                  }}
                >
                  {"Become partner"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-grid_item", "is--list")}
              id={_utils.cx(
                _styles,
                "w-node-be3fa76b-27ed-c14e-d2fb-916a2e499e52-7cfa8761"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "is--caption-small",
                  "is--text-color-silver"
                )}
                tag="div"
              >
                {"Waysconf"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-grid_item-list")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  button={false}
                  block=""
                  options={{
                    href: "#program",
                  }}
                >
                  {"Tickets"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "navbar-link",
                    "is--footer",
                    "is--display-hidden"
                  )}
                  button={false}
                  block=""
                  options={{
                    href: "#activities",
                  }}
                >
                  {"Startup Valley"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  button={false}
                  block=""
                  options={{
                    href: "#story",
                  }}
                >
                  {"News"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  button={false}
                  block=""
                  options={{
                    href: "#story",
                  }}
                >
                  {"WaysConf Awards"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "navbar-link", "is--footer")}
                  button={false}
                  block=""
                  options={{
                    href: "#story",
                  }}
                >
                  {"Contact"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-grid_item", "is--icons")}
              id={_utils.cx(
                _styles,
                "w-node-_38737871-5a45-861a-161f-7c267cfa8787-7cfa8761"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "is--caption-small")}
                tag="div"
              >
                {"Social channels"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "footer-grid_item-socials-wrapper"
                )}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-grid_item-social")}
                  button={false}
                  block="inline"
                  options={{
                    href: "https://www.instagram.com/waysconfcom/",
                    target: "_blank",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(
                      _styles,
                      "footer-grid_item-social_embed"
                    )}
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2016%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.685%204.52506H11.692M4.33496%201.375H11.335C13.268%201.375%2014.835%202.94203%2014.835%204.87506V11.8752C14.835%2013.8082%2013.268%2015.3753%2011.335%2015.3753H4.33496C2.40196%2015.3753%200.834961%2013.8082%200.834961%2011.8752V4.87506C0.834961%202.94203%202.40196%201.375%204.33496%201.375ZM10.635%207.93412C10.7213%208.5167%2010.6218%209.11169%2010.3506%209.63446C10.0793%2010.1572%209.65016%2010.5812%209.1241%2010.8459C8.59804%2011.1107%208.00187%2011.2029%207.42041%2011.1093C6.83895%2011.0158%206.30179%2010.7412%205.88535%2010.3248C5.4689%209.90832%205.19437%209.37116%205.10081%208.78969C5.00724%208.20821%205.09941%207.61204%205.36419%207.08597C5.62897%206.55989%206.05289%206.13071%206.57565%205.85945C7.09841%205.5882%207.69339%205.48869%208.27596%205.57508C8.87021%205.6632%209.42036%205.94011%209.84515%206.36491C10.2699%206.7897%2010.5468%207.33986%2010.635%207.93412Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.40001%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-grid_item-social")}
                  button={false}
                  block="inline"
                  options={{
                    href: "https://www.linkedin.com/company/waysconf/",
                    target: "_blank",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(
                      _styles,
                      "footer-grid_item-social_embed"
                    )}
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2016%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.7818%201.84843C3.7818%202.7555%202.98128%203.49081%201.9938%203.49081C1.00632%203.49081%200.205811%202.7555%200.205811%201.84843C0.205811%200.941373%201.00632%200.206055%201.9938%200.206055C2.98128%200.206055%203.7818%200.941373%203.7818%201.84843Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M0.450322%204.69803H3.50672V13.7943H0.450322V4.69803Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M8.42752%204.69803H5.37112V13.7943H8.42752C8.42752%2013.7943%208.42752%2010.9307%208.42752%209.14018C8.42752%208.06551%208.80114%206.98613%2010.2919%206.98613C11.9767%206.98613%2011.9666%208.39251%2011.9587%209.48206C11.9484%2010.9062%2011.9729%2012.3596%2011.9729%2013.7943H15.0293V8.99349C15.0035%205.92804%2014.1902%204.51555%2011.5145%204.51555C9.9255%204.51555%208.94054%205.22405%208.42752%205.86506V4.69803Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-grid_item-social")}
                  button={false}
                  block="inline"
                  options={{
                    href: "https://www.facebook.com/waysconf",
                    target: "_blank",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(
                      _styles,
                      "footer-grid_item-social_embed"
                    )}
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%209%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%200H6.54545C5.46048%200%204.41994%200.421427%203.65274%201.17157C2.88555%201.92172%202.45455%202.93913%202.45455%204V6.4H0V9.6H2.45455V16H5.72727V9.6H8.18182L9%206.4H5.72727V4C5.72727%203.78783%205.81347%203.58434%205.96691%203.43431C6.12035%203.28429%206.32846%203.2%206.54545%203.2H9V0Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "is--caption-small",
                "is--text-color-silver",
                "is--opacity-70"
              )}
              id={_utils.cx(
                _styles,
                "w-node-_38737871-5a45-861a-161f-7c267cfa8791-7cfa8761"
              )}
              tag="div"
            >
              {"© 2023 WaysConf"}
              <br />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "is--caption-small",
                "is--text-color-silver",
                "is--opacity-70"
              )}
              id={_utils.cx(
                _styles,
                "w-node-_8e8a2131-1834-3dac-dddf-99aca9292f53-7cfa8761"
              )}
              tag="div"
            >
              <_Builtin.Link
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"PRIVACYPOLICY "}
              </_Builtin.Link>
              {"· "}
              <_Builtin.Link
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"TERMS & CONDITIONS"}
              </_Builtin.Link>
              {" · "}
              <_Builtin.Link
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Code of conduct"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Grid>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
