"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Ways25Tag } from "./Ways25Tag";
import * as _utils from "./utils";
import _styles from "./Ways25PreviousItem.module.css";

export function Ways25PreviousItem({
  as: _Component = _Builtin.Block,

  linksYoutube = {
    href: "#",
    target: "_blank",
  },

  linksSpotify = {
    href: "#",
    target: "_blank",
  },

  contentTitle = "3 Key Findings from Testing the World's Leading Checkout Flows",
  authorPortrait = "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d487_author.png",
  authorFullName = "Rachel Rosenson",
  authorPosition = "Designer advocate at Figma",
  authorCompanyLogo = "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d486_figma.svg",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "home25-previous-grid_item")}
      id={_utils.cx(
        _styles,
        "w-node-cba38c1b-5639-b5ef-c2ab-9121cff46623-cff46623"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "home25-previous-grid_item-top")}
        tag="div"
      >
        <Ways25Tag variant="Pink" label="TOP LECTURE" />
        <_Builtin.Block
          className={_utils.cx(_styles, "home25-previous-grid_item-top-links")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "home25-previous-link")}
            button={false}
            block="inline"
            options={linksYoutube}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "icon-embed-custom",
                "_20x20",
                "color-inherit"
              )}
              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2021%2020%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M18.3139%203.2761C19.1744%203.50678%2019.852%204.18649%2020.082%205.04965C20.5%206.61407%2020.5%209.87814%2020.5%209.87814C20.5%209.87814%2020.5%2013.1422%2020.082%2014.7067C19.852%2015.5698%2019.1744%2016.2495%2018.3139%2016.4803C16.7542%2016.8994%2010.5%2016.8994%2010.5%2016.8994C10.5%2016.8994%204.24583%2016.8994%202.68613%2016.4803C1.82564%2016.2495%201.1479%2015.5698%200.917924%2014.7067C0.5%2013.1422%200.5%209.87814%200.5%209.87814C0.5%209.87814%200.5%206.61407%200.917924%205.04965C1.1479%204.18649%201.82564%203.50678%202.68613%203.2761C4.24583%202.85686%2010.5%202.85686%2010.5%202.85686C10.5%202.85686%2016.7542%202.85686%2018.3139%203.2761ZM13.6811%209.87819L8.45387%2012.8416V6.91453L13.6811%209.87819Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "home25-previous-link", "is-spotify")}
            button={false}
            block="inline"
            options={linksSpotify}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "icon-embed-custom",
                "_20x20",
                "color-inherit"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2021%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_56_2487)%22%3E%0A%3Cpath%20d%3D%22M16.3263%208.88222C13.1514%206.99679%207.9146%206.82343%204.88383%207.74327C4.39711%207.89099%203.88242%207.61613%203.73499%207.12957C3.58747%206.64254%203.86193%206.12822%204.34901%205.98026C7.82813%204.92422%2013.6117%205.12816%2017.2666%207.29776C17.7043%207.55768%2017.8479%208.12304%2017.5885%208.56007C17.3288%208.99781%2016.763%209.14211%2016.3263%208.88222ZM16.2223%2011.6748C15.9995%2012.0363%2015.527%2012.1496%2015.166%2011.9277C12.5191%2010.3007%208.48309%209.82937%205.35166%2010.7799C4.94558%2010.9026%204.51666%2010.6736%204.3933%2010.2683C4.27095%209.86226%204.50003%209.43413%204.90538%209.31064C8.48258%208.22513%2012.9296%208.75092%2015.9697%2010.6191C16.3306%2010.8414%2016.4442%2011.3142%2016.2223%2011.6748ZM15.0171%2014.3568C14.8401%2014.647%2014.4622%2014.7379%2014.173%2014.561C11.8601%2013.1475%208.94899%2012.8282%205.52058%2013.6113C5.19021%2013.6871%204.86094%2013.48%204.7856%2013.1497C4.70993%2012.8194%204.91617%2012.4901%205.24728%2012.4147C8.99907%2011.557%2012.2174%2011.9262%2014.8134%2013.5125C15.1029%2013.6893%2015.194%2014.0674%2015.0171%2014.3568ZM10.5001%200.150682C5.06061%200.150682%200.650879%204.56033%200.650879%209.99976C0.650879%2015.4398%205.06061%2019.8491%2010.5001%2019.8491C15.9398%2019.8491%2020.3493%2015.4398%2020.3493%209.99976C20.3493%204.56033%2015.9398%200.150682%2010.5001%200.150682Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_56_2487%22%3E%0A%3Crect%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22currentColor%22%20transform%3D%22translate(0.5)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "home25-previous-grid_item-bottom")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "ways25-heading5", "text-size-32")}
          tag="h5"
        >
          {contentTitle}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "home25-previous-grid_item-bottom-content"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "home25-previous-grid_item-bottom-author"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(
                _styles,
                "home25-previous-grid_item-bottom-author_portrait"
              )}
              id={_utils.cx(
                _styles,
                "w-node-cba38c1b-5639-b5ef-c2ab-9121cff46631-cff46623"
              )}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src={authorPortrait}
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "home25-previous-grid_item-bottom-author_desc"
              )}
              id={_utils.cx(
                _styles,
                "w-node-cba38c1b-5639-b5ef-c2ab-9121cff46632-cff46623"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "ways25-text-size-24",
                  "text-weight-semibold"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-cba38c1b-5639-b5ef-c2ab-9121cff46633-cff46623"
                )}
                tag="div"
              >
                {authorFullName}
              </_Builtin.Block>
              <_Builtin.Block
                id={_utils.cx(
                  _styles,
                  "w-node-cba38c1b-5639-b5ef-c2ab-9121cff46635-cff46623"
                )}
                tag="div"
              >
                {authorPosition}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "home25-previous-grid_item-bottom-logo"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src={authorCompanyLogo}
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
