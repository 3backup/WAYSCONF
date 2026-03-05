"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ArrowIcon, Button } from "@waysconf/ui";
import * as _utils from "./utils";
import _styles from "./AwardsNavbar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-360":{"id":"e-360","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-73","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-361"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0484954e-c4b5-c65a-40d8-7c2c7b2a7174","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0484954e-c4b5-c65a-40d8-7c2c7b2a7174","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749718971124},"e-361":{"id":"e-361","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-360"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0484954e-c4b5-c65a-40d8-7c2c7b2a7174","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0484954e-c4b5-c65a-40d8-7c2c7b2a7174","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749718971124},"e-377":{"id":"e-377","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-378"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6846a22a95d3c778d528cf84|f1f15737-3ad5-4a32-9736-3d7a01cc3757","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cf84|f1f15737-3ad5-4a32-9736-3d7a01cc3757","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752177990870},"e-378":{"id":"e-378","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-92","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-377"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6846a22a95d3c778d528cf84|f1f15737-3ad5-4a32-9736-3d7a01cc3757","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cf84|f1f15737-3ad5-4a32-9736-3d7a01cc3757","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752177990870}},"actionLists":{"a-73":{"id":"a-73","title":"Navbar 1 menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-73-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267d4"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-73-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267d1"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-73-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267cc"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-73-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267cc"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-73-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267d1"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-74":{"id":"a-74","title":"Navbar 1 menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-74-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267d1"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-74-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267cc"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-74-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267d1"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-74-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267cc"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-74-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267d4"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-91":{"id":"a-91","title":"Navbar 1 menu [Close] 3","actionItemGroups":[{"actionItems":[{"id":"a-91-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267d4"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-91-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267d1"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-91-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267cc"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-91-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267cc"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-91-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267d1"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-92":{"id":"a-92","title":"Navbar 1 menu [Open] 3","actionItemGroups":[{"actionItems":[{"id":"a-92-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267d1"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-92-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267cc"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-92-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267d1"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-92-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267cc"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-92-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["17a150da-e4ae-aa7a-3675-c6c2f13267d4"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AwardsNavbar({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar1_component")}
      data-w-id="0484954e-c4b5-c65a-40d8-7c2c7b2a7174"
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      fs-scrolldisable-element="smart-nav"
      config={{
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        noScroll: false,
        animation: "default",
        collapse: "medium",
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navbar1_container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "navbar1_logo-wrapper")}
          tag="div"
        >
          <_Builtin.NavbarBrand
            className={_utils.cx(_styles, "navbar1_logo-link")}
            options={{
              href: "/",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "rl_navbar2_logo")}
              width="auto"
              height="auto"
              loading="lazy"
              alt=""
              src="/images/waysawards-logo.svg"
            />
          </_Builtin.NavbarBrand>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "navbar18_date-wrapper",
              "is-custom",
              "is-awards-menu"
            )}
            id={_utils.cx(
              _styles,
              "w-node-_0484954e-c4b5-c65a-40d8-7c2c7b2a7179-7b2a7174"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "navbar18_date-icon")}
              width="auto"
              height="auto"
              loading="lazy"
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
              <_Builtin.Strong>{"Sep 17, 2025, 17:00"}</_Builtin.Strong>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.NavbarMenu
          className={_utils.cx(
            _styles,
            "navbar1_menu",
            "is-page-height-tablet"
          )}
          tag="nav"
          role="navigation"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar1_menu-links")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "rl_navbar2_link-text",
                "text-weight-medium"
              )}
              button={false}
              block=""
              options={{
                href: "/nominations",
              }}
            >
              {"Edition 2025"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "rl_navbar2_link-text",
                "text-weight-medium"
              )}
              button={false}
              block=""
              options={{
                href: "/cursor-past-project",
              }}
            >
              {"Previous Projects"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "rl_navbar2_link-text",
                "text-weight-medium"
              )}
              button={false}
              block=""
              options={{
                href: "/cursor-jury",
              }}
            >
              {"Jury"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "rl_navbar2_link-text",
                "text-weight-medium"
              )}
              button={false}
              block=""
              options={{
                href: "https://waysconf.com",
                target: "_blank",
              }}
            >
              {"WaysConf"}
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(_styles, "show-tablet")}
              tag="div"
            >
              <Button
                href="#"
                variant="primary"
                size="small"
                icon={<ArrowIcon />}
              >
                {"Submit Your Projects"}
              </Button>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "button_wrapper-navbar")}
            tag="div"
          />
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "navbar1_menu-button")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-icon1")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-icon1_line-top")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-icon1_line-middle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon1_line-middle-inner")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-icon1_line-bottom")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.NavbarButton>
        <_Builtin.Block className={_utils.cx(_styles, "hide-tablet")} tag="div">
          <Button
            href="https://vote.waysawards.com/"
            variant="primary"
            size="small"
            icon={<ArrowIcon />}
          >
            {"Vote"}
          </Button>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
