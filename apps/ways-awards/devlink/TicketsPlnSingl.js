"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Ways25Button } from "./Ways25Button";
import * as _utils from "./utils";
import _styles from "./TicketsPlnSingl.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-24":{"id":"e-24","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".tickets-faq_dropdown","originalId":"b11d3e41-829b-7f3e-7d89-dfe19eeec1fc","appliesTo":"CLASS"},"targets":[{"id":"b11d3e41-829b-7f3e-7d89-dfe19eeec1fc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677231371372},"e-25":{"id":"e-25","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-24"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".tickets-faq_dropdown","originalId":"b11d3e41-829b-7f3e-7d89-dfe19eeec1fc","appliesTo":"CLASS"},"targets":[{"id":"b11d3e41-829b-7f3e-7d89-dfe19eeec1fc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677231371373},"e-268":{"id":"e-268","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-58","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-269"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".tickets-faq_dropdown","originalId":"6846a22a95d3c778d528cfb2|f4bdcef1-714f-731e-390f-c4907e3b0412","appliesTo":"CLASS"},"targets":[{"selector":".tickets-faq_dropdown","originalId":"6846a22a95d3c778d528cfb2|f4bdcef1-714f-731e-390f-c4907e3b0412","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1720530259063},"e-269":{"id":"e-269","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-59","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-268"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".tickets-faq_dropdown","originalId":"6846a22a95d3c778d528cfb2|f4bdcef1-714f-731e-390f-c4907e3b0412","appliesTo":"CLASS"},"targets":[{"selector":".tickets-faq_dropdown","originalId":"6846a22a95d3c778d528cfb2|f4bdcef1-714f-731e-390f-c4907e3b0412","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1720530259063},"e-341":{"id":"e-341","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-342"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".tickets-faq_dropdown","originalId":"6846a22a95d3c778d528cf98|714926a8-1fa0-dc72-49ff-f983978f092c","appliesTo":"CLASS"},"targets":[{"selector":".tickets-faq_dropdown","originalId":"6846a22a95d3c778d528cf98|714926a8-1fa0-dc72-49ff-f983978f092c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1740652534398},"e-342":{"id":"e-342","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-68","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-341"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".tickets-faq_dropdown","originalId":"6846a22a95d3c778d528cf98|714926a8-1fa0-dc72-49ff-f983978f092c","appliesTo":"CLASS"},"targets":[{"selector":".tickets-faq_dropdown","originalId":"6846a22a95d3c778d528cf98|714926a8-1fa0-dc72-49ff-f983978f092c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1740652534398}},"actionLists":{"a-6":{"id":"a-6","title":"faq-open","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".tickets-faq_dropdown-list","selectorGuids":["9e5392e6-4109-212a-1884-9da067b15153"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-6-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-embed-small","selectorGuids":["2ad57ee2-e365-02fb-d44e-141013d7f0d1"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-6-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".tickets-faq_dropdown-list","selectorGuids":["9e5392e6-4109-212a-1884-9da067b15153"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-6-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-embed-small","selectorGuids":["2ad57ee2-e365-02fb-d44e-141013d7f0d1"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1677231373405},"a-7":{"id":"a-7","title":"faq-close","actionItemGroups":[{"actionItems":[{"id":"a-7-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".tickets-faq_dropdown-list","selectorGuids":["9e5392e6-4109-212a-1884-9da067b15153"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-7-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-embed-small","selectorGuids":["2ad57ee2-e365-02fb-d44e-141013d7f0d1"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1677231373405},"a-58":{"id":"a-58","title":"faq-open 3","actionItemGroups":[{"actionItems":[{"id":"a-58-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".tickets-faq_dropdown-list","selectorGuids":["9e5392e6-4109-212a-1884-9da067b15153"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-58-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-embed-small","selectorGuids":["2ad57ee2-e365-02fb-d44e-141013d7f0d1"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-58-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".tickets-faq_dropdown-list","selectorGuids":["9e5392e6-4109-212a-1884-9da067b15153"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-58-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-embed-small","selectorGuids":["2ad57ee2-e365-02fb-d44e-141013d7f0d1"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1677231373405},"a-59":{"id":"a-59","title":"faq-close 3","actionItemGroups":[{"actionItems":[{"id":"a-59-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".tickets-faq_dropdown-list","selectorGuids":["9e5392e6-4109-212a-1884-9da067b15153"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-59-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-embed-small","selectorGuids":["2ad57ee2-e365-02fb-d44e-141013d7f0d1"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1677231373405},"a-67":{"id":"a-67","title":"faq-open 4","actionItemGroups":[{"actionItems":[{"id":"a-67-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".tickets-faq_dropdown-list","selectorGuids":["9e5392e6-4109-212a-1884-9da067b15153"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-67-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-embed-small","selectorGuids":["2ad57ee2-e365-02fb-d44e-141013d7f0d1"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-67-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".tickets-faq_dropdown-list","selectorGuids":["9e5392e6-4109-212a-1884-9da067b15153"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-67-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-embed-small","selectorGuids":["2ad57ee2-e365-02fb-d44e-141013d7f0d1"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1677231373405},"a-68":{"id":"a-68","title":"faq-close 4","actionItemGroups":[{"actionItems":[{"id":"a-68-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".tickets-faq_dropdown-list","selectorGuids":["9e5392e6-4109-212a-1884-9da067b15153"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-68-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-embed-small","selectorGuids":["2ad57ee2-e365-02fb-d44e-141013d7f0d1"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1677231373405}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function TicketsPlnSingl({
  as: _Component = _Builtin.Grid,
  onlineOnlinePass = "369",
  onlineOnlineVat = "(454,87 with VAT)",
  conferenceConferencePass = "479",
  conferenceConferenceVat = "(589,17 with VAT)",
  networkingNetworkingPass = "849",
  networkingNetworkingVat = "(1 044,27 with VAT)",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "tickets-grid")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "tickets-grid-item")}
        id={_utils.cx(
          _styles,
          "w-node-_5fd3dea6-61c9-a8a7-b992-a7ef83e5ceda-83e5ced9"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "tickets-grid-item_header")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_header-pool")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icon-embed-small")}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M24.1%2023.2C24.1%2023.4387%2024.0052%2023.6676%2023.8364%2023.8364C23.6676%2024.0052%2023.4387%2024.1%2023.2%2024.1H8.79999C8.5613%2024.1%208.33238%2024.0052%208.1636%2023.8364C7.99482%2023.6676%207.89999%2023.4387%207.89999%2023.2V13.741C7.8999%2013.6039%207.93115%2013.4685%207.99136%2013.3453C8.05157%2013.2221%208.13914%2013.1142%208.24739%2013.03L15.4474%207.43023C15.6054%207.30733%2015.7998%207.2406%2016%207.2406C16.2002%207.2406%2016.3946%207.30733%2016.5526%207.43023L23.7526%2013.03C23.8608%2013.1142%2023.9484%2013.2221%2024.0086%2013.3453C24.0688%2013.4685%2024.1001%2013.6039%2024.1%2013.741V23.2V23.2Z%22%20fill%3D%22%233842F4%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Heading tag="h4">{"Conference pass"}</_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "tickets-grid-item_price")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "price-gross")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "custom-h1-64")}
              tag="h1"
            >
              {conferenceConferencePass}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "opacity-60",
                "text-weight-semibold"
              )}
            >
              {conferenceConferenceVat}
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "tickets-grid-item_cta")}
          tag="div"
        >
          <Ways25Button variant="White" label="Buy Tickets" />
        </_Builtin.Block>
        <_Builtin.Heading tag="h4">{"package includes:"}</_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "tickets-grid-item_list")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-blue"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.89999%2011.5L15.5005%206.43301C15.6484%206.33434%2015.8222%206.28168%2016%206.28168C16.1778%206.28168%2016.3516%206.33434%2016.4995%206.43301L24.1%2011.5V24.1C24.1%2024.3387%2024.0052%2024.5676%2023.8364%2024.7364C23.6676%2024.9052%2023.4387%2025%2023.2%2025H8.79999C8.5613%2025%208.33238%2024.9052%208.1636%2024.7364C7.99482%2024.5676%207.89999%2024.3387%207.89999%2024.1V11.5ZM16%2015.1C16.4774%2015.1%2016.9352%2014.9104%2017.2728%2014.5728C17.6104%2014.2352%2017.8%2013.7774%2017.8%2013.3C17.8%2012.8226%2017.6104%2012.3648%2017.2728%2012.0272C16.9352%2011.6897%2016.4774%2011.5%2016%2011.5C15.5226%2011.5%2015.0648%2011.6897%2014.7272%2012.0272C14.3896%2012.3648%2014.2%2012.8226%2014.2%2013.3C14.2%2013.7774%2014.3896%2014.2352%2014.7272%2014.5728C15.0648%2014.9104%2015.5226%2015.1%2016%2015.1Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {"Everything included in the Online Package"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-blue"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M13.75%209.25C14.5784%209.25%2015.25%209.92157%2015.25%2010.75C15.25%2010.836%2015.2428%2010.9198%2015.2292%2011.0009L16.7085%2011.2491C16.7359%2011.0863%2016.75%2010.9195%2016.75%2010.75C16.75%2010.5719%2016.7345%2010.3974%2016.7047%2010.2278C16.9354%2010.0832%2017.2077%2010%2017.5%2010C18.3284%2010%2019%2010.6716%2019%2011.5C19%2011.7733%2018.9273%2012.0293%2018.7995%2012.25H10.75C10.3358%2012.25%2010%2011.9142%2010%2011.5C10%2011.0858%2010.3358%2010.75%2010.75%2010.75C10.9001%2010.75%2011.0377%2010.7933%2011.1539%2010.8678C11.3589%2010.9994%2011.6151%2011.0231%2011.8409%2010.9315C12.0667%2010.8399%2012.2338%2010.6443%2012.2892%2010.407C12.4441%209.7436%2013.0403%209.25%2013.75%209.25ZM14.8873%207.97309C14.5367%207.82931%2014.1527%207.75%2013.75%207.75C12.6257%207.75%2011.6468%208.36807%2011.133%209.28258C11.0084%209.26116%2010.8804%209.25%2010.75%209.25C9.50736%209.25%208.5%2010.2574%208.5%2011.5C8.5%2012.1664%208.78969%2012.7651%209.25%2013.1771V22C9.25%2022.8284%209.92157%2023.5%2010.75%2023.5H18.25C19.0784%2023.5%2019.75%2022.8284%2019.75%2022H21.25C22.0784%2022%2022.75%2021.3284%2022.75%2020.5V15.25C22.75%2014.4216%2022.0784%2013.75%2021.25%2013.75H19.75V13.4843C20.2161%2012.956%2020.5%2012.2608%2020.5%2011.5C20.5%209.84314%2019.1568%208.5%2017.5%208.5C16.9857%208.5%2016.5013%208.62976%2016.0782%208.85787C15.7638%208.47151%2015.3552%208.1649%2014.8873%207.97309ZM19.75%2020.5V15.25H21.25V20.5H19.75ZM12.25%2015.25H13.75V20.5H12.25V15.25ZM15.25%2015.25H16.75V20.5H15.25V15.25Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {"Opportunity to participate in a closed networking events"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-blue"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M21.2577%2019.2932L21.4161%2019.4525L21.5763%2019.2932C21.7643%2019.1052%2021.9876%2018.956%2022.2332%2018.8542C22.4789%2018.7525%2022.7423%2018.7001%2023.0082%2018.7001C23.2741%2018.7001%2023.5374%2018.7525%2023.7831%2018.8542C24.0288%2018.956%2024.252%2019.1052%2024.4401%2019.2932C24.6281%2019.4812%2024.7773%2019.7045%2024.879%2019.9502C24.9808%2020.1958%2025.0332%2020.4592%2025.0332%2020.7251C25.0332%2020.991%2024.9808%2021.2544%2024.879%2021.5C24.7773%2021.7457%2024.6281%2021.969%2024.4401%2022.157L21.4161%2025.1801L18.3939%2022.157C18.0141%2021.7772%2017.8008%2021.2622%2017.8008%2020.7251C17.8008%2020.188%2018.0141%2019.673%2018.3939%2019.2932C18.7736%2018.9134%2019.2887%2018.7001%2019.8258%2018.7001C20.3628%2018.7001%2020.8779%2018.9134%2021.2577%2019.2932V19.2932ZM16.0008%2017.8001V25.0001H8.80078C8.8008%2023.1295%209.52882%2021.3324%2010.8307%2019.9892C12.1326%2018.646%2013.9061%2017.8622%2015.7758%2017.8037L16.0008%2017.8001ZM16.0008%206.1001C18.9843%206.1001%2021.4008%208.5166%2021.4008%2011.5001C21.4008%2014.4836%2018.9843%2016.9001%2016.0008%2016.9001C13.0173%2016.9001%2010.6008%2014.4836%2010.6008%2011.5001C10.6008%208.5166%2013.0173%206.1001%2016.0008%206.1001Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {"Opportunity to attend the conference in-person"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-blue"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M20.5016%208.7998C21.9337%208.7998%2023.3072%209.36873%2024.3199%2010.3814C25.3326%2011.3941%2025.9016%2012.7676%2025.9016%2014.1998V17.7998C25.9016%2019.232%2025.3326%2020.6055%2024.3199%2021.6182C23.3072%2022.6309%2021.9337%2023.1998%2020.5016%2023.1998H11.5016C10.0694%2023.1998%208.69588%2022.6309%207.68319%2021.6182C6.67049%2020.6055%206.10156%2019.232%206.10156%2017.7998V14.1998C6.10156%2012.7676%206.67049%2011.3941%207.68319%2010.3814C8.69588%209.36873%2010.0694%208.7998%2011.5016%208.7998H20.5016ZM14.2016%2013.2998H12.4016V15.0998H10.6016V16.8998H12.4007L12.4016%2018.6998H14.2016L14.2007%2016.8998H16.0016V15.0998H14.2016V13.2998ZM21.4016%2016.8998H19.6016V18.6998H21.4016V16.8998ZM19.6016%2013.2998H17.8016V15.0998H19.6016V13.2998Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {"Gamification with chances to win cool gifts"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-blue"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M13%2010C13%2010.8284%2012.3284%2011.5%2011.5%2011.5C10.6716%2011.5%2010%2010.8284%2010%2010C10%209.17157%2010.6716%208.5%2011.5%208.5C12.3284%208.5%2013%209.17157%2013%2010ZM10.75%2019V23.5H9.25V14.5C9.25%2013.2574%2010.2574%2012.25%2011.5%2012.25C12.1154%2012.25%2012.6732%2012.4971%2013.0794%2012.8975L14.8602%2014.5793L16.5948%2012.8447L17.6555%2013.9053L14.8901%2016.6707L13.75%2015.594V23.5H12.25V19H10.75ZM14.5%2010.75H21.25V17.5H14.5V19H17.7741L19.8917%2023.5H21.5495L19.4318%2019H22C22.4142%2019%2022.75%2018.6642%2022.75%2018.25V10C22.75%209.58579%2022.4142%209.25%2022%209.25H14.5V10.75Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {"Opportunity to attend workshops"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-blue"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16.9016%2020.4441V22.2999H21.4016V24.0999H10.6016V22.2999H15.1016V20.4441C13.3616%2020.2247%2011.7615%2019.3778%2010.6016%2018.0625C9.44163%2016.7471%208.80159%2015.0537%208.80156%2013.2999V7.8999H23.2016V13.2999C23.2015%2015.0537%2022.5615%2016.7471%2021.4016%2018.0625C20.2416%2019.3778%2018.6415%2020.2247%2016.9016%2020.4441V20.4441ZM6.10156%209.6999H7.90156V13.2999H6.10156V9.6999ZM24.1016%209.6999H25.9016V13.2999H24.1016V9.6999Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {"Opportunity to attend the Ways Awards Ceremony"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-blue"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.89844%2011.5001L15.4989%206.43307C15.6468%206.3344%2015.8206%206.28174%2015.9984%206.28174C16.1762%206.28174%2016.35%206.3344%2016.4979%206.43307L24.0984%2011.5001V24.1001C24.0984%2024.3388%2024.0036%2024.5677%2023.8348%2024.7365C23.6661%2024.9053%2023.4371%2025.0001%2023.1984%2025.0001H8.79844C8.55974%2025.0001%208.33082%2024.9053%208.16204%2024.7365C7.99326%2024.5677%207.89844%2024.3388%207.89844%2024.1001V11.5001ZM15.9984%2015.1001C16.4758%2015.1001%2016.9337%2014.9104%2017.2712%2014.5729C17.6088%2014.2353%2017.7984%2013.7775%2017.7984%2013.3001C17.7984%2012.8227%2017.6088%2012.3648%2017.2712%2012.0273C16.9337%2011.6897%2016.4758%2011.5001%2015.9984%2011.5001C15.521%2011.5001%2015.0632%2011.6897%2014.7256%2012.0273C14.3881%2012.3648%2014.1984%2012.8227%2014.1984%2013.3001C14.1984%2013.7775%2014.3881%2014.2353%2014.7256%2014.5729C15.0632%2014.9104%2015.521%2015.1001%2015.9984%2015.1001Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {
                "Access to discounts including discounts at hotels and pubs during the conference"
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "tickets-grid-item")}
        id={_utils.cx(
          _styles,
          "w-node-_5fd3dea6-61c9-a8a7-b992-a7ef83e5cf0c-83e5ced9"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "tickets-grid-item_header")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_header-pool")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icon-embed-small")}
              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22currentColor%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M19.6%208.80005C19.8387%208.80005%2020.0676%208.89487%2020.2364%209.06365C20.4052%209.23244%2020.5%209.46135%2020.5%209.70005V13.48L25.1917%2010.195C25.2591%2010.1478%2025.3383%2010.1199%2025.4205%2010.1145C25.5027%2010.1091%2025.5848%2010.1264%2025.6579%2010.1644C25.731%2010.2025%2025.7922%2010.2599%2025.8349%2010.3304C25.8775%2010.4008%2025.9001%2010.4817%2025.9%2010.564V21.436C25.9001%2021.5184%2025.8775%2021.5993%2025.8349%2021.6697C25.7922%2021.7402%2025.731%2021.7976%2025.6579%2021.8357C25.5848%2021.8737%2025.5027%2021.891%2025.4205%2021.8856C25.3383%2021.8802%2025.2591%2021.8523%2025.1917%2021.805L20.5%2018.52V22.3C20.5%2022.5387%2020.4052%2022.7677%2020.2364%2022.9364C20.0676%2023.1052%2019.8387%2023.2%2019.6%2023.2H6.99998C6.76128%2023.2%206.53236%2023.1052%206.36358%2022.9364C6.1948%2022.7677%206.09998%2022.5387%206.09998%2022.3V9.70005C6.09998%209.46135%206.1948%209.23244%206.36358%209.06365C6.53236%208.89487%206.76128%208.80005%206.99998%208.80005H19.6ZM11.86%2013.1461C11.777%2013.1461%2011.6965%2013.1748%2011.6322%2013.2273C11.568%2013.2798%2011.5238%2013.3528%2011.5072%2013.4341L11.5%2013.5052V18.493C11.5%2018.5513%2011.5141%2018.6088%2011.5412%2018.6604C11.5683%2018.712%2011.6075%2018.7563%2011.6555%2018.7894C11.7035%2018.8225%2011.7588%2018.8435%2011.8167%2018.8505C11.8746%2018.8575%2011.9333%2018.8503%2011.9878%2018.8296L12.0535%2018.7972L15.973%2016.3024C16.0187%2016.2732%2016.0572%2016.234%2016.0857%2016.1877C16.1141%2016.1415%2016.1317%2016.0894%2016.1371%2016.0354C16.1426%2015.9813%2016.1358%2015.9268%2016.1172%2015.8758C16.0985%2015.8248%2016.0686%2015.7787%2016.0297%2015.7408L15.973%2015.6958L12.0535%2013.201C11.9954%2013.1651%2011.9283%2013.1463%2011.86%2013.147V13.1461Z%22%20fill%3D%22%2332D5B4%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Heading tag="h4">{"Online pass"}</_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "tickets-grid-item_price")}
          tag="div"
        >
          <_Builtin.Block tag="div">
            <_Builtin.Heading
              className={_utils.cx(_styles, "custom-h1-64")}
              tag="h1"
            >
              {onlineOnlinePass}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "opacity-60",
                "text-weight-semibold"
              )}
            >
              {onlineOnlineVat}
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "tickets-grid-item_cta")}
          tag="div"
        >
          <Ways25Button variant="Base" label="Buy Tickets" />
        </_Builtin.Block>
        <_Builtin.Heading tag="h4">{"package includes:"}</_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "tickets-grid-item_list")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-teal"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.79999%2025C8.79999%2023.0904%209.55856%2021.2591%2010.9088%2019.9088C12.2591%2018.5585%2014.0904%2017.8%2016%2017.8C17.9095%2017.8%2019.7409%2018.5585%2021.0912%2019.9088C22.4414%2021.2591%2023.2%2023.0904%2023.2%2025H8.79999ZM16%2016.9C13.0165%2016.9%2010.6%2014.4835%2010.6%2011.5C10.6%208.51648%2013.0165%206.09998%2016%206.09998C18.9835%206.09998%2021.4%208.51648%2021.4%2011.5C21.4%2014.4835%2018.9835%2016.9%2016%2016.9Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {"An account in our streaming services"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-teal"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M19.6%208.79999C19.8387%208.79999%2020.0676%208.89481%2020.2364%209.06359C20.4052%209.23237%2020.5%209.46129%2020.5%209.69999V13.48L25.1917%2010.195C25.2591%2010.1477%2025.3383%2010.1198%2025.4205%2010.1144C25.5027%2010.109%2025.5848%2010.1263%2025.6579%2010.1644C25.731%2010.2024%2025.7922%2010.2598%2025.8349%2010.3303C25.8775%2010.4008%2025.9001%2010.4816%2025.9%2010.564V21.436C25.9001%2021.5184%2025.8775%2021.5992%2025.8349%2021.6697C25.7922%2021.7401%2025.731%2021.7975%2025.6579%2021.8356C25.5848%2021.8737%2025.5027%2021.8909%2025.4205%2021.8855C25.3383%2021.8801%2025.2591%2021.8523%2025.1917%2021.805L20.5%2018.52V22.3C20.5%2022.5387%2020.4052%2022.7676%2020.2364%2022.9364C20.0676%2023.1052%2019.8387%2023.2%2019.6%2023.2H6.99998C6.76128%2023.2%206.53236%2023.1052%206.36358%2022.9364C6.1948%2022.7676%206.09998%2022.5387%206.09998%2022.3V9.69999C6.09998%209.46129%206.1948%209.23237%206.36358%209.06359C6.53236%208.89481%206.76128%208.79999%206.99998%208.79999H19.6ZM11.86%2013.1461C11.777%2013.1461%2011.6965%2013.1747%2011.6322%2013.2272C11.568%2013.2797%2011.5238%2013.3528%2011.5072%2013.4341L11.5%2013.5052V18.493C11.5%2018.5513%2011.5141%2018.6087%2011.5412%2018.6603C11.5683%2018.712%2011.6075%2018.7562%2011.6555%2018.7893C11.7035%2018.8224%2011.7588%2018.8434%2011.8167%2018.8504C11.8746%2018.8574%2011.9333%2018.8503%2011.9878%2018.8296L12.0535%2018.7972L15.973%2016.3024C16.0187%2016.2731%2016.0572%2016.2339%2016.0857%2016.1877C16.1141%2016.1414%2016.1317%2016.0893%2016.1371%2016.0353C16.1426%2015.9813%2016.1358%2015.9267%2016.1172%2015.8757C16.0985%2015.8247%2016.0686%2015.7786%2016.0297%2015.7408L15.973%2015.6958L12.0535%2013.201C11.9954%2013.165%2011.9283%2013.1463%2011.86%2013.147V13.1461Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {"Live stream access to all 4 stages"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-teal"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M23.2%2016.9V23.2C23.2%2023.4387%2023.1052%2023.6676%2022.9364%2023.8364C22.7676%2024.0052%2022.5387%2024.1%2022.3%2024.1H9.7C9.46131%2024.1%209.23239%2024.0052%209.0636%2023.8364C8.89482%2023.6676%208.8%2023.4387%208.8%2023.2V16.9H23.2ZM18.25%207.00003C18.7816%206.99985%2019.3046%207.1342%2019.7702%207.39056C20.2359%207.64693%2020.6291%208.01698%2020.9133%208.46625C21.1974%208.91551%2021.3633%209.42938%2021.3953%209.96C21.4274%2010.4906%2021.3247%2011.0207%2021.0967%2011.5009L24.1%2011.5C24.3387%2011.5%2024.5676%2011.5948%2024.7364%2011.7636C24.9052%2011.9324%2025%2012.1613%2025%2012.4V15.1C25%2015.3387%2024.9052%2015.5676%2024.7364%2015.7364C24.5676%2015.9052%2024.3387%2016%2024.1%2016H7.9C7.66131%2016%207.43239%2015.9052%207.2636%2015.7364C7.09482%2015.5676%207%2015.3387%207%2015.1V12.4C7%2012.1613%207.09482%2011.9324%207.2636%2011.7636C7.43239%2011.5948%207.66131%2011.5%207.9%2011.5L10.9033%2011.5009C10.5827%2010.8274%2010.5115%2010.062%2010.7023%209.34093C10.8932%208.61984%2011.3338%207.98989%2011.9456%207.56321C12.5574%207.13652%2013.3008%206.9408%2014.0434%207.01089C14.786%207.08097%2015.4797%207.41232%2016.0009%207.94593C16.2934%207.6458%2016.6432%207.40744%2017.0296%207.24496C17.4159%207.08248%2017.8309%206.99919%2018.25%207.00003V7.00003ZM13.75%208.80003C13.4033%208.8002%2013.07%208.93375%2012.8191%209.173C12.5681%209.41225%2012.4189%209.73886%2012.4022%2010.0852C12.3856%2010.4314%2012.5028%2010.7709%2012.7296%2011.0331C12.9563%2011.2953%2013.2753%2011.4603%2013.6204%2011.4937L13.75%2011.5H15.1V10.15C15.1%209.81443%2014.975%209.49088%2014.7493%209.24245C14.5237%208.99403%2014.2136%208.83854%2013.8796%208.80633L13.75%208.80003ZM18.25%208.80003L18.1204%208.80633C17.8084%208.83622%2017.5166%208.97371%2017.2949%209.19523C17.0732%209.41674%2016.9355%209.70849%2016.9054%2010.0204L16.9%2010.15V11.5H18.25L18.3796%2011.4937C18.7135%2011.4614%2019.0234%2011.3058%2019.2489%2011.0574C19.4744%2010.809%2019.5993%2010.4855%2019.5993%2010.15C19.5993%209.81454%2019.4744%209.49107%2019.2489%209.24266C19.0234%208.99425%2018.7135%208.8387%2018.3796%208.80633L18.25%208.80003Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {"Access to the virtual gift pack"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-teal"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.99698%208.14389C10.5586%207.94353%2011.1656%207.9067%2011.7473%208.0377C12.3291%208.16869%2012.8617%208.46212%2013.2833%208.88387C13.7048%209.30562%2013.998%209.83837%2014.1288%2010.4202C14.2595%2011.002%2014.2224%2011.6089%2014.0218%2012.1705L23.7823%2021.931L21.8725%2023.8399L12.112%2014.0803C11.5503%2014.2807%2010.9434%2014.3175%2010.3616%2014.1865C9.77986%2014.0555%209.24724%2013.7621%208.82568%2013.3403C8.40412%2012.9186%208.11093%2012.3858%207.9802%2011.804C7.84947%2011.2222%207.88656%2010.6152%208.08718%2010.0537L10.0996%2012.067C10.2241%2012.1959%2010.3731%2012.2988%2010.5378%2012.3695C10.7025%2012.4403%2010.8796%2012.4775%2011.0589%2012.4791C11.2381%2012.4806%2011.4159%2012.4465%2011.5818%2012.3786C11.7477%2012.3107%2011.8985%2012.2105%2012.0252%2012.0837C12.152%2011.957%2012.2522%2011.8062%2012.3201%2011.6403C12.388%2011.4744%2012.4221%2011.2967%2012.4206%2011.1174C12.419%2010.9382%2012.3818%2010.761%2012.311%2010.5963C12.2403%2010.4316%2012.1374%2010.2826%2012.0085%2010.1581L9.99608%208.14299L9.99698%208.14389ZM19.3273%209.83949L22.1911%208.24829L23.4637%209.52089L21.8725%2012.3847L20.2813%2012.7033L18.3733%2014.6122L17.0998%2013.3396L19.0087%2011.4307L19.3273%209.83949V9.83949ZM12.9634%2016.8397L14.8723%2018.7495L10.4173%2023.2045C10.1716%2023.4479%209.84192%2023.5877%209.4962%2023.5951C9.15048%2023.6025%208.81509%2023.477%208.55919%2023.2444C8.30329%2023.0119%208.1464%2022.6899%208.12087%2022.3451C8.09534%2022.0002%208.20312%2021.6587%208.42198%2021.391L8.50928%2021.2947L12.9643%2016.8397H12.9634Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {"Technical Support during the conference"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-teal"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.90002%208.79372C7.90002%208.30052%208.30052%207.90002%208.79372%207.90002H23.2063C23.6995%207.90002%2024.1%208.30052%2024.1%208.79372V23.2063C24.0998%2023.4433%2024.0056%2023.6705%2023.838%2023.838C23.6705%2024.0056%2023.4433%2024.0998%2023.2063%2024.1H8.79372C8.55677%2024.0998%208.3296%2024.0056%208.16205%2023.838C7.9945%2023.6705%207.90026%2023.4433%207.90002%2023.2063V8.79372ZM14.7598%2012.7735C14.7057%2012.7374%2014.6427%2012.7166%2014.5777%2012.7134C14.5126%2012.7102%2014.4479%2012.7247%2014.3905%2012.7554C14.3331%2012.7861%2014.285%2012.8317%2014.2515%2012.8875C14.2179%2012.9433%2014.2001%2013.0072%2014.2%2013.0723V18.9277C14.2001%2018.9928%2014.2179%2019.0567%2014.2515%2019.1125C14.285%2019.1683%2014.3331%2019.214%2014.3905%2019.2446C14.4479%2019.2753%2014.5126%2019.2898%2014.5777%2019.2866C14.6427%2019.2834%2014.7057%2019.2627%2014.7598%2019.2265L19.1509%2016.2997C19.2003%2016.2669%2019.2408%2016.2223%2019.2688%2016.17C19.2968%2016.1177%2019.3115%2016.0593%2019.3115%2016C19.3115%2015.9407%2019.2968%2015.8823%2019.2688%2015.83C19.2408%2015.7777%2019.2003%2015.7332%2019.1509%2015.7003L14.7589%2012.7735H14.7598Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {"On-demand video access after the conference"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-teal"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.2%207.89999H17.8C19.7096%207.89999%2021.5409%208.65856%2022.8912%2010.0088C24.2414%2011.3591%2025%2013.1904%2025%2015.1C25%2017.0096%2024.2414%2018.8409%2022.8912%2020.1912C21.5409%2021.5414%2019.7096%2022.3%2017.8%2022.3V25.45C13.3%2023.65%207%2020.95%207%2015.1C7%2013.1904%207.75857%2011.3591%209.10883%2010.0088C10.4591%208.65856%2012.2904%207.89999%2014.2%207.89999V7.89999Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {
                "Interactive access to conference (implemented in our online service)"
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "tickets-grid-item", "is-ways-fan")}
        id={_utils.cx(
          _styles,
          "w-node-_5fd3dea6-61c9-a8a7-b992-a7ef83e5cf3a-83e5ced9"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "tickets-grid-item_header")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_header-pool")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icon-embed-small")}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16%2021.634L9.6523%2025.1872L11.0698%2018.052L5.7283%2013.1128L12.9526%2012.256L16%205.65002L19.0474%2012.256L26.2717%2013.1128L20.9302%2018.052L22.3477%2025.1872L16%2021.634Z%22%20fill%3D%22%23FF6365%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Heading tag="h4">{"Networking+ pass"}</_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "tickets-grid-item_price")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "price-gross")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "custom-h1-64")}
              tag="h1"
            >
              {networkingNetworkingPass}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "opacity-60",
                "text-weight-semibold"
              )}
            >
              {networkingNetworkingVat}
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "tickets-grid-item_cta")}
          tag="div"
        >
          <Ways25Button variant="Base" label="Buy Tickets" />
        </_Builtin.Block>
        <_Builtin.Heading tag="h4">{"package includes:"}</_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "tickets-grid-item_list")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-red"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16%207.75L23.125%2011.875V20.125L16.75%2023.8158V15.5676L9.62345%2011.4417L16%207.75ZM8.875%2012.7416V20.125L15.25%2023.8158V16.4324L8.875%2012.7416Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {"Everything included in the Conference Package"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-red"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M13.75%209.25C14.5784%209.25%2015.25%209.92157%2015.25%2010.75C15.25%2010.836%2015.2428%2010.9198%2015.2292%2011.0009L16.7085%2011.2491C16.7359%2011.0863%2016.75%2010.9195%2016.75%2010.75C16.75%2010.5719%2016.7345%2010.3974%2016.7047%2010.2278C16.9354%2010.0832%2017.2077%2010%2017.5%2010C18.3284%2010%2019%2010.6716%2019%2011.5C19%2011.7733%2018.9273%2012.0293%2018.7995%2012.25H10.75C10.3358%2012.25%2010%2011.9142%2010%2011.5C10%2011.0858%2010.3358%2010.75%2010.75%2010.75C10.9001%2010.75%2011.0377%2010.7933%2011.1539%2010.8678C11.3589%2010.9994%2011.6151%2011.0231%2011.8409%2010.9315C12.0667%2010.8399%2012.2338%2010.6443%2012.2892%2010.407C12.4441%209.7436%2013.0403%209.25%2013.75%209.25ZM14.8873%207.97309C14.5367%207.82931%2014.1527%207.75%2013.75%207.75C12.6257%207.75%2011.6468%208.36807%2011.133%209.28258C11.0084%209.26116%2010.8804%209.25%2010.75%209.25C9.50736%209.25%208.5%2010.2574%208.5%2011.5C8.5%2012.1664%208.78969%2012.7651%209.25%2013.1771V22C9.25%2022.8284%209.92157%2023.5%2010.75%2023.5H18.25C19.0784%2023.5%2019.75%2022.8284%2019.75%2022H21.25C22.0784%2022%2022.75%2021.3284%2022.75%2020.5V15.25C22.75%2014.4216%2022.0784%2013.75%2021.25%2013.75H19.75V13.4843C20.2161%2012.956%2020.5%2012.2608%2020.5%2011.5C20.5%209.84314%2019.1568%208.5%2017.5%208.5C16.9857%208.5%2016.5013%208.62976%2016.0782%208.85787C15.7638%208.47151%2015.3552%208.1649%2014.8873%207.97309ZM19.75%2020.5V15.25H21.25V20.5H19.75ZM12.25%2015.25H13.75V20.5H12.25V15.25ZM15.25%2015.25H16.75V20.5H15.25V15.25Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {"Opportunity to participate in a closed networking events"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-red"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16%2017.1998L7.6993%2022.7339C7.63153%2022.779%207.55281%2022.8048%207.4715%2022.8087C7.3902%2022.8126%207.30936%2022.7944%207.2376%2022.756C7.16584%2022.7176%207.10584%2022.6604%207.064%2022.5906C7.02216%2022.5207%207.00004%2022.4409%207%2022.3595V9.64069C7.00004%209.55929%207.02216%209.47943%207.064%209.4096C7.10584%209.33978%207.16584%209.28262%207.2376%209.2442C7.30936%209.20578%207.3902%209.18754%207.4715%209.19143C7.55281%209.19532%207.63153%209.22119%207.6993%209.26629L16%2014.8004V9.64069C16%209.55929%2016.0222%209.47943%2016.064%209.4096C16.1058%209.33978%2016.1658%209.28262%2016.2376%209.2442C16.3094%209.20578%2016.3902%209.18754%2016.4715%209.19143C16.5528%209.19532%2016.6315%209.22119%2016.6993%209.26629L26.2384%2015.6257C26.3%2015.6668%2026.3506%2015.7225%2026.3855%2015.7878C26.4205%2015.8531%2026.4388%2015.926%2026.4388%2016.0001C26.4388%2016.0742%2026.4205%2016.1471%2026.3855%2016.2124C26.3506%2016.2777%2026.3%2016.3334%2026.2384%2016.3745L16.6993%2022.7339C16.6315%2022.779%2016.5528%2022.8048%2016.4715%2022.8087C16.3902%2022.8126%2016.3094%2022.7944%2016.2376%2022.756C16.1658%2022.7176%2016.1058%2022.6604%2016.064%2022.5906C16.0222%2022.5207%2016%2022.4409%2016%2022.3595V17.1998V17.1998Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {"Fast track registration for quciker access"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-red"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16%2025C11.0293%2025%207%2020.9707%207%2016C7%2011.0293%2011.0293%207%2016%207C20.9707%207%2025%2011.0293%2025%2016C25%2020.9707%2020.9707%2025%2016%2025ZM15.1%2016.7128V19.6H16.9V16.7128C17.3738%2016.506%2017.7619%2016.1424%2017.9991%2015.6832C18.2363%2015.2239%2018.3081%2014.697%2018.2025%2014.1909C18.0969%2013.6849%2017.8203%2013.2307%2017.4192%2012.9047C17.0181%2012.5786%2016.5169%2012.4006%2016%2012.4006C15.4831%2012.4006%2014.9819%2012.5786%2014.5808%2012.9047C14.1797%2013.2307%2013.9031%2013.6849%2013.7975%2014.1909C13.6918%2014.697%2013.7637%2015.2239%2014.0009%2015.6832C14.2381%2016.1424%2014.6262%2016.506%2015.1%2016.7128Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {
                "Exclusive networking room with speakers and partners for valuable connections"
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-red"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M18.7016%207.00001C19.3336%206.99993%2019.9546%207.16626%2020.5019%207.48228C21.0493%207.7983%2021.5039%208.25287%2021.8198%208.80027C22.1358%209.34767%2022.3021%209.96862%2022.302%2010.6007C22.3019%2011.2327%2022.1353%2011.8536%2021.8192%2012.4009L25.9016%2012.4V14.2H24.1016V23.2C24.1016%2023.4387%2024.0067%2023.6676%2023.838%2023.8364C23.6692%2024.0052%2023.4403%2024.1%2023.2016%2024.1H8.80156C8.56287%2024.1%208.33395%2024.0052%208.16517%2023.8364C7.99638%2023.6676%207.90156%2023.4387%207.90156%2023.2V14.2H6.10156V12.4L10.184%2012.4009C9.73744%2011.6277%209.59418%2010.7162%209.78201%209.84326C9.96983%208.97037%2010.4753%208.19842%2011.2004%207.6773C11.9254%207.15619%2012.8182%206.9231%2013.7054%207.0233C14.5927%207.12349%2015.411%207.54982%2016.0016%208.21951C16.3387%207.83555%2016.754%207.5281%2017.2197%207.31778C17.6854%207.10745%2018.1906%206.99911%2018.7016%207.00001V7.00001ZM16.9016%2014.2H15.1016V23.2H16.9016V14.2ZM13.3016%208.80001C12.8345%208.79792%2012.3849%208.97747%2012.0477%209.30075C11.7106%209.62402%2011.5123%2010.0657%2011.4948%2010.5325C11.4772%2010.9992%2011.6419%2011.4545%2011.9538%2011.8022C12.2658%2012.1498%2012.7006%2012.3626%2013.1666%2012.3955L13.3016%2012.4H15.1016V10.6C15.1016%2010.1699%2014.9476%209.75393%2014.6674%209.42754C14.3872%209.10115%2013.9994%208.88587%2013.5743%208.82071L13.4357%208.80451L13.3016%208.80001ZM18.7016%208.80001C18.2474%208.79986%2017.8101%208.97137%2017.4771%209.28015C17.1441%209.58893%2016.9401%2010.0122%2016.9061%2010.465L16.9016%2010.6V12.4H18.7016C19.1557%2012.4001%2019.5931%2012.2286%2019.9261%2011.9199C20.259%2011.6111%2020.463%2011.1878%2020.4971%2010.735L20.5016%2010.6C20.5016%2010.1226%2020.3119%209.66478%2019.9744%209.32721C19.6368%208.98965%2019.179%208.80001%2018.7016%208.80001V8.80001Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {"Premium WaysConf giftpack filled with high-quality items"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-red"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M13%2010C13%2010.8284%2012.3284%2011.5%2011.5%2011.5C10.6716%2011.5%2010%2010.8284%2010%2010C10%209.17157%2010.6716%208.5%2011.5%208.5C12.3284%208.5%2013%209.17157%2013%2010ZM10.75%2019V23.5H9.25V14.5C9.25%2013.2574%2010.2574%2012.25%2011.5%2012.25C12.1154%2012.25%2012.6732%2012.4971%2013.0794%2012.8975L14.8602%2014.5793L16.5948%2012.8447L17.6555%2013.9053L14.8901%2016.6707L13.75%2015.594V23.5H12.25V19H10.75ZM14.5%2010.75H21.25V17.5H14.5V19H17.7741L19.8917%2023.5H21.5495L19.4318%2019H22C22.4142%2019%2022.75%2018.6642%2022.75%2018.25V10C22.75%209.58579%2022.4142%209.25%2022%209.25H14.5V10.75Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {"Priority in workshop registration for guaranteed participation"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tickets-grid-item_list-item")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "tickets-grid-item_list-item-icon",
                "is-red"
              )}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.6016%207.8999H16.9016C18.3337%207.8999%2019.7072%208.46883%2020.7199%209.48153C21.7326%2010.4942%2022.3016%2011.8677%2022.3016%2013.2999C22.3016%2014.7321%2021.7326%2016.1056%2020.7199%2017.1183C19.7072%2018.131%2018.3337%2018.6999%2016.9016%2018.6999H14.2016V24.0999H10.6016V7.8999ZM14.2016%2011.4999V15.0999H16.9016C17.379%2015.0999%2017.8368%2014.9103%2018.1744%2014.5727C18.5119%2014.2351%2018.7016%2013.7773%2018.7016%2013.2999C18.7016%2012.8225%2018.5119%2012.3647%2018.1744%2012.0271C17.8368%2011.6895%2017.379%2011.4999%2016.9016%2011.4999H14.2016Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>
              {
                "Reserved parking at the Expo venue with a parking card, included at no additional cost"
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "tickets-grid-item", "is-student")}
        id={_utils.cx(
          _styles,
          "w-node-_5fd3dea6-61c9-a8a7-b992-a7ef83e5cf6c-83e5ced9"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "tickets-grid-item_student-copy")}
          tag="div"
        >
          <_Builtin.Heading tag="h6">
            {"are you a student? 👩🏼🎓"}
          </_Builtin.Heading>
          <_Builtin.Heading tag="h3">
            {"Fill the form and get 50% discount"}
          </_Builtin.Heading>
        </_Builtin.Block>
        <Ways25Button variant="Base" />
      </_Builtin.Block>
    </_Component>
  );
}
