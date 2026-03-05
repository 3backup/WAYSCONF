"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Navbar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-6":{"id":"e-6","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-49"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"44544cba-3720-1516-0d59-091b8136e3eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"44544cba-3720-1516-0d59-091b8136e3eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675682421371},"e-7":{"id":"e-7","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"44544cba-3720-1516-0d59-091b8136e3eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"44544cba-3720-1516-0d59-091b8136e3eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675682421371},"e-12":{"id":"e-12","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-5","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-5-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1676008303187},"e-222":{"id":"e-222","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-223"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6846a22a95d3c778d528cfaa|43b0ddb2-4792-5ff3-c429-11ec49398977","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|43b0ddb2-4792-5ff3-c429-11ec49398977","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718190530636},"e-223":{"id":"e-223","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-222"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6846a22a95d3c778d528cfaa|43b0ddb2-4792-5ff3-c429-11ec49398977","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|43b0ddb2-4792-5ff3-c429-11ec49398977","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718190530636}},"actionLists":{"a-3":{"id":"a-3","title":"navbar-open","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar-lottie","selectorGuids":["1241fef2-c1e2-58de-18c4-a66abb15f062"]},"value":0}},{"id":"a-3-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar","selectorGuids":["12b36b8c-7222-f940-af0a-f1ddced3b595"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}}]},{"actionItems":[{"id":"a-3-n-2","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".navbar-lottie","selectorGuids":["1241fef2-c1e2-58de-18c4-a66abb15f062"]},"value":50}},{"id":"a-3-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".navbar","selectorGuids":["12b36b8c-7222-f940-af0a-f1ddced3b595"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675682210331},"a-4":{"id":"a-4","title":"navbar-close","actionItemGroups":[{"actionItems":[{"id":"a-4-n-2","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar-lottie","selectorGuids":["1241fef2-c1e2-58de-18c4-a66abb15f062"]},"value":0}},{"id":"a-4-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar","selectorGuids":["12b36b8c-7222-f940-af0a-f1ddced3b595"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}}]}],"useFirstGroupAsInitialState":false,"createdOn":1675682210331},"a-5":{"id":"a-5","title":"navbar-transparent","continuousParameterGroups":[{"id":"a-5-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-5-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar","selectorGuids":["12b36b8c-7222-f940-af0a-f1ddced3b595"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-5-n-2","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar","selectorGuids":["12b36b8c-7222-f940-af0a-f1ddced3b595"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0}}]},{"keyframe":1,"actionItems":[{"id":"a-5-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar","selectorGuids":["12b36b8c-7222-f940-af0a-f1ddced3b595"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0.96}},{"id":"a-5-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar","selectorGuids":["12b36b8c-7222-f940-af0a-f1ddced3b595"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.3}}]}]}],"createdOn":1675678057380},"a-12":{"id":"a-12","title":"navbar-dropdown-OPEN","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-toggle_icon","selectorGuids":["e70e773c-e658-2c58-9841-763dd5f18b45"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-12-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-toggle_icon","selectorGuids":["e70e773c-e658-2c58-9841-763dd5f18b45"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1679489842671},"a-13":{"id":"a-13","title":"navbar-dropdown-CLOSE","actionItemGroups":[{"actionItems":[{"id":"a-13-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-toggle_icon","selectorGuids":["e70e773c-e658-2c58-9841-763dd5f18b45"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1679489842671}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar({
  as: _Component = _Builtin.NavbarWrapper,

  navbarBrandLink = {
    href: "#",
  },

  navbarBorder = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar")}
      data-w-id="44544cba-3720-1516-0d59-091b8136e3eb"
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "section-hero-wrapper",
          "navbar-container"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "navbar-brand-wrapper")}
          tag="div"
        >
          <_Builtin.NavbarBrand
            className={_utils.cx(_styles, "navbar-brand_link")}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-2")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528cef9_waysconf-logo.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "is--caption", "is--14", "is-hoem")}
              tag="div"
            >
              {"For designers, researchers, devs &Leaders"}
              <_Builtin.Strong>{""}</_Builtin.Strong>
            </_Builtin.Block>
          </_Builtin.NavbarBrand>
        </_Builtin.Block>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "navbar-menu")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "divider", "is--menu")}
            tag="div"
          />
          <_Builtin.Link
            className={_utils.cx(_styles, "navbar-link")}
            button={false}
            block=""
            options={{
              href: "#story",
            }}
          >
            {"Agenda"}
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(_styles, "divider", "is--menu")}
            tag="div"
          />
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "navbar-dropdown")}
            data-w-id="43b0ddb2-4792-5ff3-c429-11ec49398977"
            tag="div"
            delay={0}
            hover={true}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "navbar-dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "navbar-link",
                  "is--dropdown",
                  "is--toggle"
                )}
                tag="div"
              >
                {"Conference"}
              </_Builtin.Block>
              <_Builtin.Icon
                className={_utils.cx(_styles, "navbar-dropdown-toggle_icon")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "navbar-dropdown-list")}
              tag="nav"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/agenda",
                }}
              >
                {"Agenda"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/agenda",
                }}
              >
                {"Agenda - Table"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/speakers",
                }}
              >
                {"Workshops"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/agenda",
                }}
              >
                {"Speakers 🎤"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/speakers",
                }}
              >
                {"For Designers"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/speakers",
                }}
              >
                {"For Developers"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/speakers",
                }}
              >
                {"For Managers"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/speakers",
                }}
              >
                {"For Researchers"}
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "divider", "is--agenda")}
                tag="div"
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/speakers",
                }}
              >
                {"About"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/agenda",
                }}
              >
                {"Join us as Volunteer"}
              </_Builtin.Link>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.Block
            className={_utils.cx(_styles, "divider", "is--menu")}
            tag="div"
          />
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "navbar-dropdown")}
            tag="div"
            delay={0}
            hover={true}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "navbar-dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "navbar-link",
                  "is--dropdown",
                  "is--toggle"
                )}
                tag="div"
              >
                {"Attendees"}
              </_Builtin.Block>
              <_Builtin.Icon
                className={_utils.cx(_styles, "navbar-dropdown-toggle_icon")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "navbar-dropdown-list")}
              tag="nav"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/speakers",
                }}
              >
                {"AfterWays"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/agenda",
                }}
              >
                {"BeforeWays"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/agenda",
                }}
              >
                {"Discover Krakow"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/agenda",
                }}
              >
                {"Food & Beverages at WaysConf"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/speakers",
                }}
              >
                {"Gamification"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/speakers",
                }}
              >
                {"Virtual Gift Pack"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/speakers",
                }}
              >
                {"Hotels"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/speakers",
                }}
              >
                {"Venue"}
              </_Builtin.Link>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.Block
            className={_utils.cx(_styles, "divider", "is--menu")}
            tag="div"
          />
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "navbar-dropdown")}
            tag="div"
            delay={0}
            hover={true}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "navbar-dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "navbar-link",
                  "is--dropdown",
                  "is--toggle"
                )}
                tag="div"
              >
                {"Partners"}
              </_Builtin.Block>
              <_Builtin.Icon
                className={_utils.cx(_styles, "navbar-dropdown-toggle_icon")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "navbar-dropdown-list")}
              tag="nav"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/agenda",
                }}
              >
                {"Become a Partner"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/speakers",
                }}
              >
                {"Meet our Partners"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/speakers",
                }}
              >
                {"Media Accreditation"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/speakers",
                }}
              >
                {"Media Kit"}
              </_Builtin.Link>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.Block
            className={_utils.cx(_styles, "divider", "is--menu")}
            tag="div"
          />
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "navbar-dropdown")}
            tag="div"
            delay={0}
            hover={true}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "navbar-dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "navbar-link",
                  "is--dropdown",
                  "is--toggle"
                )}
                tag="div"
              >
                {"Startup"}
              </_Builtin.Block>
              <_Builtin.Icon
                className={_utils.cx(_styles, "navbar-dropdown-toggle_icon")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "navbar-dropdown-list")}
              tag="nav"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/agenda",
                }}
              >
                {"Startup Valley - Overview"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/agenda",
                }}
              >
                {"Startup Zone"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/agenda",
                }}
              >
                {"Startup Stage"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/speakers",
                }}
              >
                {"PitchMeBabe Contest"}
              </_Builtin.Link>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.Block
            className={_utils.cx(_styles, "divider", "is--menu")}
            tag="div"
          />
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "navbar-dropdown")}
            tag="div"
            delay={0}
            hover={true}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "navbar-dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "navbar-link",
                  "is--dropdown",
                  "is--toggle"
                )}
                tag="div"
              >
                {"Awards"}
              </_Builtin.Block>
              <_Builtin.Icon
                className={_utils.cx(_styles, "navbar-dropdown-toggle_icon")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "navbar-dropdown-list")}
              tag="nav"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/agenda",
                }}
              >
                {"Awards 2022- Archive"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/agenda",
                }}
              >
                {"Public Choice"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar-link", "is--dropdown")}
                button={false}
                block=""
                options={{
                  href: "/agenda",
                }}
              >
                {"WaysConf Awards 2023"}
              </_Builtin.Link>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.Block
            className={_utils.cx(_styles, "divider", "is--menu")}
            tag="div"
          />
          <_Builtin.Link
            className={_utils.cx(_styles, "navbar-link")}
            button={false}
            block=""
            options={{
              href: "#story",
            }}
          >
            {"Tickets"}
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(_styles, "divider", "is--menu")}
            tag="div"
          />
          <_Builtin.Link
            className={_utils.cx(_styles, "navbar-link")}
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Contact"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "navbar-link",
              "main-button",
              "is--mobile",
              "is-small",
              "is--display-hidden"
            )}
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Buy tickets"}
          </_Builtin.Link>
        </_Builtin.NavbarMenu>
        <_Builtin.Link
          className={_utils.cx(
            _styles,
            "navbar-link",
            "main-button",
            "is--main"
          )}
          button={false}
          block=""
          options={{
            href: "#",
          }}
        >
          {"Buy tickets"}
        </_Builtin.Link>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "navbar-button-content")}
          tag="div"
        >
          <_Builtin.NotSupported _atom="Animation" />
        </_Builtin.NavbarButton>
      </_Builtin.Block>
      {navbarBorder ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "divider", "is--navbar")}
          tag="div"
        />
      ) : null}
    </_Component>
  );
}
