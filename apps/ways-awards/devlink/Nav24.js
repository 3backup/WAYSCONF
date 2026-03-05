"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Nav24.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-122":{"id":"e-122","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-123"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ce6bff5d-b05a-caef-8bd5-836248cdcd57","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ce6bff5d-b05a-caef-8bd5-836248cdcd57","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1665739978284},"e-123":{"id":"e-123","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-122"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ce6bff5d-b05a-caef-8bd5-836248cdcd57","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ce6bff5d-b05a-caef-8bd5-836248cdcd57","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1665739978284},"e-186":{"id":"e-186","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-187"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3921d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3921d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666845185455},"e-187":{"id":"e-187","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-186"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3921d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3921d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666845185455},"e-230":{"id":"e-230","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-231"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4f620b61-55a9-ac5a-4c84-0d8fc5b780b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4f620b61-55a9-ac5a-4c84-0d8fc5b780b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718193533045},"e-231":{"id":"e-231","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-230"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4f620b61-55a9-ac5a-4c84-0d8fc5b780b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4f620b61-55a9-ac5a-4c84-0d8fc5b780b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718193533045}},"actionLists":{"a-22":{"id":"a-22","title":"Navbar 18 menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":"none"}},{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-22-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-22-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":"block"}},{"id":"a-22-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-22-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-base","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95957"]},"value":"block"}}]},{"actionItems":[{"id":"a-22-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-base","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95957"]},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-22-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-middle","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95966"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626233763968},"a-23":{"id":"a-23","title":"Navbar 18 menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-base","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95957"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-23-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-middle","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95966"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-23-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-23-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-23-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-23-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626235380056},"a-52":{"id":"a-52","title":"Navbar 2 [Open Menu] 2","actionItemGroups":[{"actionItems":[{"id":"a-52-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-52-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-52-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-52-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-52-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-middle","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95966"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626225663494},"a-53":{"id":"a-53","title":"Navbar 2 [Close Menu] 2","actionItemGroups":[{"actionItems":[{"id":"a-53-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-53-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-53-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-53-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-53-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-middle","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95966"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626226496146},"a-27":{"id":"a-27","title":"Navbar 18 menu [Open] 2","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":"none"}},{"id":"a-27-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-27-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-27-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-27-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":"block"}},{"id":"a-27-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-27-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-base","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95957"]},"value":"block"}}]},{"actionItems":[{"id":"a-27-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-base","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95957"]},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-27-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-middle","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95966"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626233763968},"a-28":{"id":"a-28","title":"Navbar 18 menu [Close] 2","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-base","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95957"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-28-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-middle","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95966"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-28-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-28-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-28-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-28-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626235380056}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Nav24({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar18_component")}
      data-w-id="ce6bff5d-b05a-caef-8bd5-836248cdcd57"
      tag="div"
      data-collapse="all"
      data-animation="default"
      data-duration="400"
      data-doc-height="1"
      fs-scrolldisable-element="smart-nav"
      config={{
        collapse: "all",
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 0,
        noScroll: false,
        docHeight: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navbar18_container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "navbar18_left")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar18_brand-wrapper")}
            tag="div"
          >
            <_Builtin.NavbarBrand
              className={_utils.cx(_styles, "navbar18_logo-link")}
              options={{
                href: "#",
              }}
            >
              <_Builtin.DOM
                className={_utils.cx(_styles, "navbar18_brand")}
                tag="svg"
                slot=""
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                style=""
                viewBox="0 0 125 29"
                fill="currentColor"
              >
                <_Builtin.DOM
                  tag="path"
                  slot=""
                  d="M44.265 7.6748L40.3932 21.5295H37.1171L34.5111 11.6732L31.7934 21.5295L28.5359 21.5481L24.7944 7.6748H27.7727L30.2112 18.4425L33.0406 7.6748H36.1306L38.7924 18.3681L41.2495 7.6748H44.265Z"
                  fill="currentColor"
                />
                <_Builtin.DOM
                  tag="path"
                  slot=""
                  d="M44.8234 13.031C45.2702 12.1755 45.8658 11.506 46.629 11.0411C47.3922 10.5762 48.2485 10.353 49.1792 10.353C49.9982 10.353 50.7242 10.5204 51.3384 10.8551C51.9527 11.1899 52.4553 11.599 52.809 12.1011V10.539H55.6197V21.5298H52.809V19.9119C52.4553 20.4326 51.9527 20.8603 51.3384 21.1951C50.7056 21.5298 49.9796 21.6972 49.1606 21.6972C48.2299 21.6972 47.3922 21.4554 46.629 20.9905C45.8658 20.507 45.2702 19.8375 44.8234 18.982C44.3767 18.108 44.1533 17.1223 44.1533 15.9879C44.1533 14.8535 44.3767 13.905 44.8234 13.031ZM52.4181 14.2956C52.1575 13.8121 51.7852 13.4401 51.3384 13.1798C50.8917 12.9194 50.4077 12.7892 49.8865 12.7892C49.3653 12.7892 48.9 12.9194 48.4532 13.1612C48.0065 13.4029 47.6714 13.7749 47.3922 14.2584C47.113 14.7419 46.9827 15.3184 46.9827 15.9693C46.9827 16.6202 47.113 17.2153 47.3922 17.6988C47.6714 18.2009 48.0251 18.5729 48.4718 18.8332C48.9186 19.0936 49.3839 19.2238 49.8865 19.2238C50.3891 19.2238 50.8917 19.0936 51.3384 18.8332C51.7852 18.5729 52.1389 18.2009 52.4181 17.7174C52.6787 17.2339 52.809 16.6574 52.809 15.9879C52.8276 15.3556 52.6973 14.7791 52.4181 14.2956Z"
                  fill="currentColor"
                />
                <_Builtin.DOM
                  tag="path"
                  slot=""
                  d="M68.8728 10.5391L62.0599 26.737H59.1003L61.4829 21.2509L57.0713 10.5391H60.1985L63.0465 18.2196L65.9317 10.5391H68.8728Z"
                  fill="currentColor"
                />
                <_Builtin.DOM
                  tag="path"
                  slot=""
                  d="M71.7586 21.2322C71.0513 20.916 70.4742 20.4697 70.0647 19.9118C69.6552 19.3539 69.4132 18.7402 69.376 18.0707H72.1681C72.224 18.4984 72.4287 18.8518 72.801 19.1307C73.1547 19.4097 73.62 19.5398 74.1599 19.5398C74.6997 19.5398 75.1092 19.4283 75.407 19.2237C75.7049 19.0191 75.8538 18.7402 75.8538 18.4054C75.8538 18.0521 75.6676 17.7731 75.3139 17.6058C74.9603 17.4198 74.3646 17.2338 73.5828 17.0293C72.7638 16.8247 72.0937 16.6201 71.5725 16.4156C71.0513 16.211 70.6045 15.8762 70.2136 15.4485C69.8413 15.0208 69.6552 14.4257 69.6552 13.6818C69.6552 13.0681 69.8227 12.5102 70.1764 12.0081C70.5301 11.506 71.0327 11.1154 71.6842 10.8179C72.3357 10.5203 73.1175 10.3901 73.9923 10.3901C75.3139 10.3901 76.3564 10.7249 77.1382 11.3758C77.92 12.0267 78.3481 12.9193 78.4225 14.0165H75.7607C75.7235 13.5888 75.5373 13.2355 75.2209 12.9751C74.8858 12.7148 74.4577 12.5846 73.9179 12.5846C73.4153 12.5846 73.0244 12.6776 72.7638 12.8635C72.5032 13.0495 72.3543 13.3099 72.3543 13.6446C72.3543 14.0165 72.5404 14.2955 72.9127 14.4815C73.285 14.6674 73.862 14.872 74.6438 15.058C75.4442 15.2625 76.0957 15.4671 76.6169 15.6717C77.1381 15.8762 77.5849 16.211 77.9572 16.6573C78.3295 17.1036 78.5342 17.6801 78.5528 18.424C78.5528 19.0563 78.3853 19.6328 78.0316 20.1349C77.678 20.6371 77.1754 21.0276 76.5239 21.3252C75.8724 21.6041 75.1092 21.7529 74.2343 21.7529C73.3036 21.7157 72.466 21.5483 71.7586 21.2322Z"
                  fill="currentColor"
                />
                <_Builtin.DOM
                  tag="path"
                  slot=""
                  d="M81.0469 10.9292C81.6612 9.85058 82.4988 9.01372 83.5785 8.40002C84.6395 7.80492 85.8494 7.48877 87.171 7.48877C88.716 7.48877 90.0749 7.87931 91.2476 8.67898C92.4203 9.47865 93.2207 10.5759 93.6861 11.9706H90.4844C90.1679 11.3011 89.7212 10.8176 89.1442 10.4829C88.5671 10.1481 87.897 9.98076 87.1524 9.98076C86.352 9.98076 85.626 10.1667 84.9932 10.5387C84.3603 10.9106 83.8763 11.4499 83.5226 12.138C83.169 12.8261 83.0014 13.6258 83.0014 14.5556C83.0014 15.4855 83.169 16.2665 83.5226 16.9732C83.8763 17.6613 84.3603 18.2006 84.9932 18.5912C85.626 18.9631 86.3334 19.1491 87.1524 19.1491C87.9156 19.1491 88.5671 18.9817 89.1442 18.647C89.7212 18.3122 90.1679 17.8101 90.4844 17.1406H93.6861C93.2207 18.554 92.4017 19.6512 91.2476 20.4509C90.0935 21.2319 88.7346 21.6225 87.171 21.6225C85.8494 21.6225 84.6581 21.3249 83.5785 20.7112C82.5175 20.1161 81.6798 19.2793 81.0469 18.2006C80.4327 17.122 80.1162 15.9132 80.1162 14.5556C80.1162 13.2166 80.4327 12.0078 81.0469 10.9292Z"
                  fill="currentColor"
                />
                <_Builtin.DOM
                  tag="path"
                  slot=""
                  d="M97.2968 21.0091C96.4592 20.5441 95.789 19.8746 95.3051 19.0192C94.8211 18.1637 94.5791 17.1595 94.5791 16.0437C94.5791 14.9278 94.8211 13.9236 95.3237 13.0681C95.8263 12.2127 96.4964 11.5432 97.3526 11.0783C98.2089 10.6133 99.1768 10.3716 100.238 10.3716C101.299 10.3716 102.248 10.6133 103.123 11.0783C103.998 11.5432 104.668 12.2127 105.152 13.0681C105.655 13.9236 105.897 14.9278 105.897 16.0437C105.897 17.1595 105.636 18.1637 105.133 19.0192C104.631 19.8746 103.942 20.5441 103.067 21.0091C102.192 21.474 101.224 21.7157 100.163 21.7157C99.1024 21.7157 98.1344 21.474 97.2968 21.0091ZM101.578 18.9262C102.025 18.6844 102.379 18.3125 102.639 17.829C102.9 17.3454 103.03 16.7503 103.03 16.0437C103.03 15.0022 102.751 14.2026 102.211 13.6261C101.653 13.0681 100.982 12.7892 100.201 12.7892C99.4002 12.7892 98.7487 13.0681 98.2089 13.6261C97.6691 14.184 97.4085 14.9836 97.4085 16.0437C97.4085 17.1037 97.6691 17.8848 98.1903 18.4613C98.7115 19.0192 99.363 19.2981 100.163 19.2981C100.666 19.2981 101.131 19.1679 101.578 18.9262Z"
                  fill="currentColor"
                />
                <_Builtin.DOM
                  tag="path"
                  slot=""
                  d="M116.433 11.6176C117.233 12.4545 117.643 13.6075 117.643 15.0767V21.5298H114.85V15.4486C114.85 14.5745 114.627 13.9051 114.199 13.4401C113.771 12.9752 113.175 12.7334 112.412 12.7334C111.649 12.7334 111.034 12.9752 110.588 13.4401C110.141 13.9051 109.918 14.5745 109.918 15.4486V21.5298H107.144V10.539H109.918V11.9152C110.29 11.4317 110.755 11.0597 111.332 10.7994C111.909 10.5204 112.542 10.3902 113.231 10.3902C114.553 10.3716 115.614 10.7994 116.433 11.6176Z"
                  fill="currentColor"
                />
                <_Builtin.DOM
                  tag="path"
                  slot=""
                  d="M124.921 12.8265H123.003V21.5485H120.174V12.8265H118.927V10.539H120.174V9.98113C120.174 8.62355 120.565 7.63792 121.328 7.00562C122.091 6.37332 123.264 6.07577 124.809 6.11296V8.45618C124.139 8.43758 123.655 8.54917 123.394 8.79093C123.134 9.03269 123.003 9.46042 123.003 10.0741V10.539H124.921V12.8265Z"
                  fill="currentColor"
                />
                <_Builtin.DOM
                  tag="path"
                  slot=""
                  d="M5.95659 11.8405C5.77044 11.5615 5.54707 11.3198 5.34231 11.1152C4.98864 10.7433 4.59774 10.4457 4.26268 10.1668L4.22545 10.1482C3.98347 9.9436 3.74148 9.75763 3.53672 9.59026C3.40642 9.47868 3.27612 9.3485 3.14582 9.19973C3.05275 9.10674 2.99691 9.01376 2.94107 8.92077C2.84799 8.772 2.79215 8.64182 2.73631 8.49304C2.68046 8.30707 2.66185 8.1211 2.66185 7.93513C2.66185 7.20985 2.06619 6.61475 1.34023 6.61475C0.614273 6.61475 0.0186141 7.20985 0.0186141 7.93513C0.0186141 8.45585 0.093072 8.95797 0.260601 9.46008C0.390901 9.85062 0.577045 10.204 0.819031 10.5387C1.00517 10.7991 1.22855 11.0594 1.4333 11.264C1.78698 11.6359 2.17788 11.9335 2.51294 12.2124L2.53155 12.231C2.81076 12.4542 3.03414 12.6402 3.22028 12.8075C3.35058 12.9191 3.48088 13.0493 3.61118 13.1981C3.70425 13.2911 3.7601 13.384 3.81594 13.477C3.90901 13.6258 3.96485 13.7746 4.0207 13.9048C4.07654 14.0907 4.09515 14.2767 4.09515 14.4813C4.09515 14.6858 4.05793 14.909 4.00208 15.1322C3.94624 15.2995 3.87178 15.4297 3.77871 15.5599C3.66702 15.7273 3.55534 15.8388 3.44365 15.9504C3.20167 16.1922 2.88522 16.4525 2.56878 16.7129L2.41986 16.8245C2.19649 16.9919 1.97312 17.1778 1.74975 17.3824C1.50776 17.587 1.303 17.8101 1.11686 18.0147C0.949331 18.2007 0.800416 18.4052 0.68873 18.6098C0.465358 18.9445 0.297829 19.3165 0.186143 19.707C0.055843 20.1347 0 20.5811 0 21.0088C0 21.7341 0.595658 22.3292 1.32162 22.3292C2.04758 22.3292 2.64324 21.7341 2.64324 21.0088C2.64324 20.7856 2.68046 20.5811 2.73631 20.3579C2.79215 20.1905 2.86661 20.0604 2.95968 19.9302C3.07137 19.7814 3.18305 19.6512 3.29474 19.5396C3.53672 19.2979 3.85317 19.0375 4.16961 18.7958C4.43021 18.5912 4.70943 18.368 4.98864 18.1263C5.23063 17.9217 5.43539 17.6985 5.62153 17.494C5.78906 17.308 5.93797 17.1034 6.04966 16.8989C6.27303 16.5641 6.44056 16.1922 6.53363 15.8017C6.66393 15.3739 6.71978 14.9462 6.71978 14.4999C6.71978 13.9791 6.64532 13.477 6.47779 12.9749C6.3661 12.5472 6.17996 12.1752 5.95659 11.8405Z"
                  fill="currentColor"
                />
                <_Builtin.DOM
                  tag="path"
                  slot=""
                  d="M14.8539 18.3682C14.6678 18.1078 14.4444 17.8475 14.2397 17.6429C13.886 17.271 13.4951 16.9734 13.16 16.7131L12.9925 16.5643C12.8064 16.4155 12.6202 16.2667 12.4527 16.118C12.3224 16.0064 12.1921 15.8762 12.0618 15.7274C11.9687 15.6344 11.9129 15.5414 11.857 15.4485C11.7639 15.2997 11.7081 15.1509 11.6523 15.0207C11.615 14.8534 11.5778 14.686 11.5778 14.5C11.5778 14.4814 11.5778 14.4628 11.5778 14.4442C11.5778 14.2211 11.615 14.0165 11.6709 13.7933C11.7267 13.626 11.8012 13.4958 11.8942 13.3656C12.0059 13.2168 12.1176 13.0866 12.2293 12.9751C12.4713 12.7333 12.7877 12.4729 13.1042 12.2312C13.3648 12.0266 13.644 11.8035 13.9232 11.5617C14.1652 11.3571 14.37 11.134 14.5561 10.9294C14.7236 10.7434 14.8725 10.5389 14.9842 10.3343C15.2076 9.99955 15.3751 9.62761 15.4682 9.23707C15.5985 8.80934 15.6543 8.36301 15.6543 7.93528C15.6543 7.41457 15.5799 6.91245 15.4124 6.41033C15.2821 6.03839 15.0959 5.66645 14.8539 5.33171C14.6678 5.05275 14.4444 4.81099 14.2397 4.60642C13.886 4.23449 13.4951 3.93693 13.16 3.67658L13.1414 3.65798C12.8808 3.45341 12.6574 3.26744 12.4341 3.08147C12.3038 2.96989 12.1735 2.83971 12.0432 2.69094C11.9501 2.59795 11.8943 2.50497 11.8384 2.41198C11.7453 2.26321 11.6895 2.13303 11.6523 1.98425C11.5964 1.79828 11.5778 1.61231 11.5778 1.42634C11.5778 0.70106 10.9821 0.105957 10.2562 0.105957C9.53023 0.105957 8.93457 0.70106 8.93457 1.42634C8.93457 1.94706 9.00903 2.44918 9.17656 2.95129C9.30686 3.34183 9.493 3.69517 9.73499 4.02992C9.92113 4.29028 10.1445 4.55063 10.3493 4.7552C10.7029 5.12714 11.0938 5.42469 11.4289 5.68505L11.615 5.83383C11.8198 5.9826 11.9873 6.14997 12.1549 6.28015C12.2852 6.39173 12.4155 6.52191 12.5458 6.67069C12.6388 6.76367 12.6947 6.85666 12.7505 6.94964C12.8436 7.09842 12.8994 7.2472 12.9553 7.37737C13.0111 7.54475 13.0297 7.74931 13.0297 7.95388C13.0297 8.17704 12.9925 8.38161 12.9367 8.60477C12.8808 8.77215 12.8064 8.90232 12.7133 9.0325C12.6016 9.18128 12.4899 9.31146 12.3782 9.42304C12.1362 9.6648 11.8198 9.92516 11.5033 10.1855L11.3544 10.2971C11.1311 10.4645 10.9077 10.6504 10.6843 10.855C10.4609 11.0596 10.2376 11.2827 10.0514 11.4873C9.8839 11.6733 9.73499 11.8778 9.6233 12.0824C9.39993 12.4172 9.2324 12.7891 9.12071 13.1796C9.00903 13.5888 8.93457 14.0351 8.93457 14.5C8.93457 15.0207 9.00903 15.5229 9.17656 16.025C9.30686 16.4155 9.493 16.7688 9.73499 17.1036C9.92113 17.364 10.1445 17.6243 10.3493 17.8289C10.7029 18.2008 11.0938 18.4984 11.4289 18.7773L11.5964 18.9261C11.8012 19.0749 11.9687 19.2236 12.1362 19.3724C12.2665 19.484 12.3968 19.6142 12.5271 19.763C12.6202 19.8559 12.6761 19.9489 12.7319 20.0419C12.825 20.1907 12.8808 20.3209 12.9367 20.4696C12.9925 20.637 13.0111 20.8416 13.0111 21.0462C13.0111 21.2507 12.9739 21.4739 12.918 21.697C12.8622 21.8644 12.7877 21.9946 12.6947 22.1248C12.583 22.2921 12.4713 22.4037 12.3596 22.5153C12.1176 22.7571 11.8012 23.0174 11.4847 23.2778L11.3358 23.3894C11.1124 23.5567 10.8891 23.7427 10.6843 23.9473C10.4609 24.1518 10.2376 24.375 10.0514 24.5796C9.8839 24.7655 9.73499 24.9701 9.6233 25.1747C9.39993 25.5094 9.2324 25.8814 9.13933 26.2719C9.00903 26.6996 8.95319 27.1274 8.95319 27.5737C8.95319 28.299 9.54884 28.8941 10.2748 28.8941C11.0008 28.8941 11.5964 28.299 11.5964 27.5737C11.5964 27.3691 11.6337 27.146 11.6895 26.9228C11.7453 26.7554 11.8198 26.6252 11.9129 26.4951C12.0246 26.3277 12.1362 26.2161 12.2479 26.1045C12.4899 25.8628 12.8064 25.6024 13.1228 25.3606C13.3834 25.1561 13.6626 24.9329 13.9418 24.6912C14.1838 24.4866 14.3886 24.2634 14.5747 24.0589C14.7422 23.8729 14.8912 23.6683 15.0028 23.4638C15.2262 23.129 15.3937 22.7571 15.5054 22.3665C15.6357 21.9388 15.6916 21.5111 15.6916 21.0647C15.6916 20.544 15.6171 20.0419 15.4496 19.5398C15.2821 19.0749 15.0959 18.7215 14.8539 18.3682Z"
                  fill="currentColor"
                />
              </_Builtin.DOM>
            </_Builtin.NavbarBrand>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar18_date-wrapper")}
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
                "is--text-uppercase"
              )}
              tag="div"
            >
              {"19-20 sep 2024, "}
              <_Builtin.Strong>{"Kraków POland"}</_Builtin.Strong>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "navbar18_wrapper")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "label-link",
              "is-nounderline",
              "hide-tablet"
            )}
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Speakers"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "label-link",
              "is-nounderline",
              "hide-tablet",
              "text-style-nowrap2"
            )}
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Contact us"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "button",
              "is-navbar18-button",
              "hidden-tablet"
            )}
            button={true}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Partner With Us"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "button",
              "is-navbar18-button",
              "is--second",
              "hidden-tablet",
              "is-mobile",
              "is-scaled"
            )}
            button={true}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Buy Tickets"}
          </_Builtin.Link>
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "navbar18_menu")}
            tag="nav"
            role="navigation"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar18_menu-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "navbar18_links-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar18_pin", "is-new")}
                  tag="div"
                >
                  {"2024 Edition"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "navbar18_group-content",
                    "is-new"
                  )}
                  tag="div"
                >
                  <_Builtin.NavbarLink
                    className={_utils.cx(_styles, "navbar18_link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Become partner"}
                  </_Builtin.NavbarLink>
                  <_Builtin.NavbarLink
                    className={_utils.cx(_styles, "navbar18_link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Call For Speakers"}
                  </_Builtin.NavbarLink>
                  <_Builtin.NavbarLink
                    className={_utils.cx(_styles, "navbar18_link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Contact"}
                  </_Builtin.NavbarLink>
                  <_Builtin.NavbarLink
                    className={_utils.cx(_styles, "navbar18_link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Speakers 2024"}
                  </_Builtin.NavbarLink>
                  <_Builtin.NavbarLink
                    className={_utils.cx(_styles, "navbar18_link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Tickets"}
                  </_Builtin.NavbarLink>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "divider", "menu", "is-new")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar18_group")}
                  id={_utils.cx(
                    _styles,
                    "w-node-ce6bff5d-b05a-caef-8bd5-836248cdcd75-48cdcd57"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "navbar18_pin")}
                    tag="div"
                  >
                    {"Attendees"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "navbar18_group-content")}
                    tag="div"
                  >
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "navbar18_link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Call For Speakers"}
                    </_Builtin.NavbarLink>
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "navbar18_link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Tickets"}
                    </_Builtin.NavbarLink>
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "navbar18_link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"AfterWays ('23)"}
                    </_Builtin.NavbarLink>
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "navbar18_link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Gamification ('23)"}
                    </_Builtin.NavbarLink>
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "navbar18_link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Speakers"}
                    </_Builtin.NavbarLink>
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "navbar18_link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Before Party ('23)"}
                    </_Builtin.NavbarLink>
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "navbar18_link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Venue"}
                    </_Builtin.NavbarLink>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar18_group")}
                  id={_utils.cx(
                    _styles,
                    "w-node-ce6bff5d-b05a-caef-8bd5-836248cdcd89-48cdcd57"
                  )}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar18_group")}
                  id={_utils.cx(
                    _styles,
                    "w-node-ce6bff5d-b05a-caef-8bd5-836248cdcd9d-48cdcd57"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "navbar18_pin")}
                    tag="div"
                  >
                    {"Partners"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "navbar18_group-content",
                      "is--list"
                    )}
                    tag="div"
                  >
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "navbar18_link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Our partners"}
                    </_Builtin.NavbarLink>
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "navbar18_link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Media Kit"}
                    </_Builtin.NavbarLink>
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "navbar18_link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Accreditation"}
                    </_Builtin.NavbarLink>
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "navbar18_link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Become partner"}
                    </_Builtin.NavbarLink>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar18_group")}
                  id={_utils.cx(
                    _styles,
                    "w-node-ce6bff5d-b05a-caef-8bd5-836248cdcda9-48cdcd57"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "navbar18_pin")}
                    tag="div"
                  >
                    {"Waysconf"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "navbar18_group-content")}
                    tag="div"
                  >
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "navbar18_link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"News"}
                    </_Builtin.NavbarLink>
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "navbar18_link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"About WaysConf"}
                    </_Builtin.NavbarLink>
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "navbar18_link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Contact"}
                    </_Builtin.NavbarLink>
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "navbar18_link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Join as Volunteer"}
                    </_Builtin.NavbarLink>
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "navbar18_link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Startup Valley ('23 recap)"}
                    </_Builtin.NavbarLink>
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "navbar18_link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"WaysConf Awards ('23 recap)"}
                    </_Builtin.NavbarLink>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Grid
                  className={_utils.cx(_styles, "navbar18_social-list")}
                  id={_utils.cx(
                    _styles,
                    "w-node-ce6bff5d-b05a-caef-8bd5-836248cdcdb9-48cdcd57"
                  )}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar18_social-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.linkedin.com/company/waysconf/",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "social-icon")}
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5%203H19C20.1046%203%2021%203.89543%2021%205V19C21%2020.1046%2020.1046%2021%2019%2021H5C3.89543%2021%203%2020.1046%203%2019V5C3%203.89543%203.89543%203%205%203ZM8%2018C8.27614%2018%208.5%2017.7761%208.5%2017.5V10.5C8.5%2010.2239%208.27614%2010%208%2010H6.5C6.22386%2010%206%2010.2239%206%2010.5V17.5C6%2017.7761%206.22386%2018%206.5%2018H8ZM7.25%209C6.42157%209%205.75%208.32843%205.75%207.5C5.75%206.67157%206.42157%206%207.25%206C8.07843%206%208.75%206.67157%208.75%207.5C8.75%208.32843%208.07843%209%207.25%209ZM17.5%2018C17.7761%2018%2018%2017.7761%2018%2017.5V12.9C18.0325%2011.3108%2016.8576%209.95452%2015.28%209.76C14.177%209.65925%2013.1083%2010.1744%2012.5%2011.1V10.5C12.5%2010.2239%2012.2761%2010%2012%2010H10.5C10.2239%2010%2010%2010.2239%2010%2010.5V17.5C10%2017.7761%2010.2239%2018%2010.5%2018H12C12.2761%2018%2012.5%2017.7761%2012.5%2017.5V13.75C12.5%2012.9216%2013.1716%2012.25%2014%2012.25C14.8284%2012.25%2015.5%2012.9216%2015.5%2013.75V17.5C15.5%2017.7761%2015.7239%2018%2016%2018H17.5Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar18_social-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.facebook.com/waysconf",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-embed-xsmall")}
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22%2012.0611C22%206.50451%2017.5229%202%2012%202C6.47715%202%202%206.50451%202%2012.0611C2%2017.0828%205.65684%2021.2452%2010.4375%2022V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375%207.32296%2011.9305%205.93012%2014.2146%205.93012C15.3088%205.93012%2016.4531%206.12663%2016.4531%206.12663V8.60261H15.1922C13.95%208.60261%2013.5625%209.37822%2013.5625%2010.1739V12.0611H16.3359L15.8926%2014.9694H13.5625V22C18.3432%2021.2452%2022%2017.083%2022%2012.0611Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar18_social-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.youtube.com/@waysconf",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-embed-xsmall")}
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.5686%204.77345C21.5163%205.02692%2022.2555%205.76903%2022.5118%206.71673C23.1821%209.42042%2023.1385%2014.5321%2022.5259%2017.278C22.2724%2018.2257%2021.5303%2018.965%2020.5826%2019.2213C17.9071%2019.8831%205.92356%2019.8015%203.40294%2019.2213C2.45524%2018.9678%201.71595%2018.2257%201.45966%2017.278C0.827391%2014.7011%200.871044%209.25144%201.44558%206.73081C1.69905%205.78311%202.44116%205.04382%203.38886%204.78753C6.96561%204.0412%2019.2956%204.282%2020.5686%204.77345ZM9.86682%208.70227L15.6122%2011.9974L9.86682%2015.2925V8.70227Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar18_social-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://open.spotify.com/show/5hrTULFLO74qjTcF4telis",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "social-icon")}
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2021%2021%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2922_1386)%22%3E%0A%3Cpath%20d%3D%22M16.6174%209.32655C13.2838%207.34685%207.78511%207.16482%204.6028%208.13066C4.09175%208.28576%203.55132%207.99716%203.39652%207.48627C3.24162%206.97488%203.52981%206.43485%204.04124%206.2795C7.69432%205.17065%2013.767%205.38479%2017.6047%207.66286C18.0643%207.93578%2018.2151%208.52942%2017.9427%208.98829C17.67%209.44792%2017.0759%209.59943%2016.6174%209.32655ZM16.5082%2012.2588C16.2743%2012.6383%2015.7781%2012.7573%2015.3991%2012.5243C12.6199%2010.8159%208.38202%2010.3211%205.09402%2011.3191C4.66764%2011.448%204.21727%2011.2075%204.08775%2010.782C3.95928%2010.3556%204.19981%209.90606%204.62543%209.77639C8.38149%208.63661%2013.0509%209.18868%2016.2429%2011.1503C16.6219%2011.3837%2016.7412%2011.8802%2016.5082%2012.2588ZM15.2428%2015.0748C15.0569%2015.3796%2014.6601%2015.4751%2014.3564%2015.2893C11.9279%2013.8051%208.87122%2013.4699%205.27139%2014.2921C4.9245%2014.3716%204.57877%2014.1543%204.49966%2013.8074C4.42021%2013.4606%204.63676%2013.1148%204.98442%2013.0357C8.9238%2012.1351%2012.303%2012.5227%2015.0289%2014.1884C15.3328%2014.374%2015.4285%2014.771%2015.2428%2015.0748ZM10.4999%200.158436C4.78842%200.158436%200.158203%204.78856%200.158203%2010.5C0.158203%2016.2121%204.78842%2020.8418%2010.4999%2020.8418C16.2116%2020.8418%2020.8416%2016.2121%2020.8416%2010.5C20.8416%204.78856%2016.2116%200.158436%2010.4999%200.158436Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_2922_1386%22%3E%0A%3Crect%20width%3D%2221%22%20height%3D%2221%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar18_social-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.instagram.com/waysconfcom/",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-embed-xsmall")}
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16%203H8C5.23858%203%203%205.23858%203%208V16C3%2018.7614%205.23858%2021%208%2021H16C18.7614%2021%2021%2018.7614%2021%2016V8C21%205.23858%2018.7614%203%2016%203ZM19.25%2016C19.2445%2017.7926%2017.7926%2019.2445%2016%2019.25H8C6.20735%2019.2445%204.75549%2017.7926%204.75%2016V8C4.75549%206.20735%206.20735%204.75549%208%204.75H16C17.7926%204.75549%2019.2445%206.20735%2019.25%208V16ZM16.75%208.25C17.3023%208.25%2017.75%207.80228%2017.75%207.25C17.75%206.69772%2017.3023%206.25%2016.75%206.25C16.1977%206.25%2015.75%206.69772%2015.75%207.25C15.75%207.80228%2016.1977%208.25%2016.75%208.25ZM12%207.5C9.51472%207.5%207.5%209.51472%207.5%2012C7.5%2014.4853%209.51472%2016.5%2012%2016.5C14.4853%2016.5%2016.5%2014.4853%2016.5%2012C16.5027%2010.8057%2016.0294%209.65957%2015.1849%208.81508C14.3404%207.97059%2013.1943%207.49734%2012%207.5ZM9.25%2012C9.25%2013.5188%2010.4812%2014.75%2012%2014.75C13.5188%2014.75%2014.75%2013.5188%2014.75%2012C14.75%2010.4812%2013.5188%209.25%2012%209.25C10.4812%209.25%209.25%2010.4812%209.25%2012Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                </_Builtin.Grid>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.NavbarMenu>
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
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
