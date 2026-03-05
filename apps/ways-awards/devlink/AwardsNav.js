"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./AwardsNav.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-122":{"id":"e-122","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-123"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ce6bff5d-b05a-caef-8bd5-836248cdcd57","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ce6bff5d-b05a-caef-8bd5-836248cdcd57","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1665739978284},"e-123":{"id":"e-123","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-122"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ce6bff5d-b05a-caef-8bd5-836248cdcd57","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ce6bff5d-b05a-caef-8bd5-836248cdcd57","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1665739978284},"e-186":{"id":"e-186","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-187"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3921d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3921d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666845185455},"e-187":{"id":"e-187","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-186"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3921d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3921d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666845185455},"e-230":{"id":"e-230","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-231"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4f620b61-55a9-ac5a-4c84-0d8fc5b780b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4f620b61-55a9-ac5a-4c84-0d8fc5b780b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718193533045},"e-231":{"id":"e-231","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-230"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4f620b61-55a9-ac5a-4c84-0d8fc5b780b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4f620b61-55a9-ac5a-4c84-0d8fc5b780b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718193533045}},"actionLists":{"a-22":{"id":"a-22","title":"Navbar 18 menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":"none"}},{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-22-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-22-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":"block"}},{"id":"a-22-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-22-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-base","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95957"]},"value":"block"}}]},{"actionItems":[{"id":"a-22-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-base","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95957"]},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-22-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-middle","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95966"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626233763968},"a-23":{"id":"a-23","title":"Navbar 18 menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-base","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95957"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-23-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-middle","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95966"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-23-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-23-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-23-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-23-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626235380056},"a-52":{"id":"a-52","title":"Navbar 2 [Open Menu] 2","actionItemGroups":[{"actionItems":[{"id":"a-52-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-52-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-52-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-52-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-52-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-middle","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95966"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626225663494},"a-53":{"id":"a-53","title":"Navbar 2 [Close Menu] 2","actionItemGroups":[{"actionItems":[{"id":"a-53-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-53-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-53-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-53-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-53-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-middle","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95966"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626226496146},"a-27":{"id":"a-27","title":"Navbar 18 menu [Open] 2","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":"none"}},{"id":"a-27-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-27-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-27-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-27-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":"block"}},{"id":"a-27-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-27-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-base","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95957"]},"value":"block"}}]},{"actionItems":[{"id":"a-27-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-base","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95957"]},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-27-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-middle","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95966"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626233763968},"a-28":{"id":"a-28","title":"Navbar 18 menu [Close] 2","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-base","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95957"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-28-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-middle","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95966"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-28-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-28-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-28-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-28-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626235380056}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AwardsNav({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar18_component")}
      data-w-id="4f620b61-55a9-ac5a-4c84-0d8fc5b780b3"
      tag="div"
      data-collapse="all"
      data-animation="default"
      data-duration="400"
      data-doc-height="1"
      fs-scrolldisable-element="smart-nav"
      config={{
        collapse: "medium",
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 0,
        noScroll: false,
        docHeight: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "rl_navbar2_container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "logo-wrappper", "is-awards")}
          tag="div"
        >
          <_Builtin.NavbarBrand
            className={_utils.cx(_styles, "rl_navbar2_logo-link")}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "aweards-logo")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d33d_logo-awards.svg"
            />
          </_Builtin.NavbarBrand>
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar18_date-wrapper", "is-custom")}
            id={_utils.cx(
              _styles,
              "w-node-_8dacb3de-7ef8-649d-6a6d-cebd1c4f132b-c5b780b3"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "navbar18_date-icon")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d285_calendar-line.svg"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-size-14",
                "is--text-uppercase",
                "is-custom-navbar"
              )}
              tag="div"
            >
              {"20 sep, 16:00"}
              <br /> <_Builtin.Strong>{"EXPO KRAKÓW"}</_Builtin.Strong>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.NavbarMenu
          className={_utils.cx(
            _styles,
            "rl_navbar2_menu",
            "is-page-height-tablet",
            "is-custom"
          )}
          tag="nav"
          role="navigation"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "blur_bg", "is-custom-awards")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar-mobile-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar_menu-mobile")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-header")}
                tag="div"
              >
                {"Awards"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "mobile-list-link")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "mobile-menu-link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-13")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d3ec_trophy-line.svg"
                  />
                  <_Builtin.Block tag="div">{"Categories"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "mobile-menu-link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-13")}
                    loading="lazy"
                    width="auto"
                    height="16"
                    alt=""
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d413_award-line.svg"
                  />
                  <_Builtin.Block tag="div">{"Awards Ceremony"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "mobile-menu-link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-13")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d3ef_medal-fill.svg"
                  />
                  <_Builtin.Block tag="div">
                    {"Previous Projects"}
                  </_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "mobile-menu-link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-13")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d332_user-heart-fill.svg"
                  />
                  <_Builtin.Block tag="div">{"Jury"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "mobile-menu-link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-13")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d3eb_send-plane-fill.svg"
                  />
                  <_Builtin.Block tag="div">
                    {"Submit your project"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.Block
          className={_utils.cx(_styles, "awards-navbaar")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "mobile-menu-link")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "no-wrap-custom")}
              tag="div"
            >
              {"Categories"}
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "mobile-menu-link")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "no-wrap-custom")}
              tag="div"
            >
              {"Awards Ceremony"}
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "mobile-menu-link")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "no-wrap-custom")}
              tag="div"
            >
              {"Jury"}
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "mobile-menu-link")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "no-wrap-custom")}
              tag="div"
            >
              {"Previous Projects"}
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "navbar18_menu-button")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-icon4")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-icon4_wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon4_line-top")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon4_line-middle")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "menu-icon_line-middle-top")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "menu-icon_line-middle-base")}
                  tag="div"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon4_line-bottom")}
                tag="div"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.NavbarButton>
        <_Builtin.Link
          className={_utils.cx(
            _styles,
            "buttononclick",
            "is-navbar18-button",
            "is-small",
            "is-nav"
          )}
          button={false}
          block="inline"
          options={{
            href: "https://vote.waysconf.com/",
          }}
        >
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "text-style-nowrap", "is-small")}
          >
            {"Vote"}
          </_Builtin.Paragraph>
          <_Builtin.Image
            className={_utils.cx(_styles, "form-button_submit-icon")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d030_arrow.svg"
          />
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
