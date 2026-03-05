"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { PageGlobals } from "./PageGlobals";
import { ComponentChip } from "./ComponentChip";
import { CursrorSectionJuryPeople } from "./CursrorSectionJuryPeople";
import { TicketsFaqItem } from "./TicketsFaqItem";
import { Footer24 } from "./Footer24";
import { HeroWaveLottie } from "../src/components/HeroWaveLottie";
import * as _utils from "./utils";
import _styles from "./CursorHome.module.css";

const _interactionsData = JSON.parse(
    '{"events":{"e-155":{"id":"e-155","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-32","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"selector":".speaker-hero-grid_image-wrapper","originalId":"6846a22a95d3c778d528cf7f|ef184280-c757-8e95-d0ef-56fc15f8b13b","appliesTo":"CLASS"},"targets":[{"selector":".speaker-hero-grid_image-wrapper","originalId":"6846a22a95d3c778d528cf7f|ef184280-c757-8e95-d0ef-56fc15f8b13b","appliesTo":"CLASS"}],"config":[{"continuousParameterGroupId":"a-32-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":75,"restingState":50},{"continuousParameterGroupId":"a-32-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":75,"restingState":50}],"createdOn":1710922988287},"e-358":{"id":"e-358","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-359"}},"mediaQueries":["main"],"target":{"id":"0305d8a9-61bd-241b-e252-72961eb941dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0305d8a9-61bd-241b-e252-72961eb941dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1743437456125},"e-359":{"id":"e-359","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-358"}},"mediaQueries":["main"],"target":{"id":"0305d8a9-61bd-241b-e252-72961eb941dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0305d8a9-61bd-241b-e252-72961eb941dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1743437456125},"e-364":{"id":"e-364","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-32","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"selector":".speaker-hero-grid_image-wrapper-2","originalId":"64f33353468c25972dd10ae2|ef184280-c757-8e95-d0ef-56fc15f8b13b","appliesTo":"CLASS"},"targets":[{"selector":".speaker-hero-grid_image-wrapper-2","originalId":"64f33353468c25972dd10ae2|ef184280-c757-8e95-d0ef-56fc15f8b13b","appliesTo":"CLASS"}],"config":[{"continuousParameterGroupId":"a-32-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":75,"restingState":50},{"continuousParameterGroupId":"a-32-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":75,"restingState":50}],"createdOn":1710922988287},"e-365":{"id":"e-365","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-366"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882ec2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882ec2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749967687721},"e-366":{"id":"e-366","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-365"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882ec2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882ec2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749967687721},"e-367":{"id":"e-367","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-368"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882eee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882eee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749967691478},"e-368":{"id":"e-368","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-367"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882eee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882eee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749967691478},"e-369":{"id":"e-369","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-370"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882f04","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882f04","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749967692363},"e-370":{"id":"e-370","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-369"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882f04","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882f04","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749967692363},"e-371":{"id":"e-371","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-372"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882f1a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882f1a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749967728614},"e-372":{"id":"e-372","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-371"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882f1a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882f1a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749967728614},"e-373":{"id":"e-373","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-374"}},"mediaQueries":["main"],"target":{"id":"6846a22a95d3c778d528cfb4|c0115db9-16f3-8f67-c156-47c8d69d744e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfb4|c0115db9-16f3-8f67-c156-47c8d69d744e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751969448949},"e-374":{"id":"e-374","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-373"}},"mediaQueries":["main"],"target":{"id":"6846a22a95d3c778d528cfb4|c0115db9-16f3-8f67-c156-47c8d69d744e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfb4|c0115db9-16f3-8f67-c156-47c8d69d744e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751969448949},"e-375":{"id":"e-375","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-376"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882ed8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882ed8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751969455694},"e-376":{"id":"e-376","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-375"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882ed8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882ed8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751969455694}},"actionLists":{"a-32":{"id":"a-32","title":"speaker-blur","continuousParameterGroups":[{"id":"a-32-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-32-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".speaker-main-grid_image.is-blur","selectorGuids":["ceccf952-5b8e-0381-293b-cfd2ee613213","b3481e0c-d293-54e8-083d-68b5b4195ec7"]},"xValue":-5,"yValue":null,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-32-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".speaker-main-grid_image.is-blur","selectorGuids":["ceccf952-5b8e-0381-293b-cfd2ee613213","b3481e0c-d293-54e8-083d-68b5b4195ec7"]},"xValue":5,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}}]}]},{"id":"a-32-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-32-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".speaker-main-grid_image.is-blur","selectorGuids":["ceccf952-5b8e-0381-293b-cfd2ee613213","b3481e0c-d293-54e8-083d-68b5b4195ec7"]},"yValue":-5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-32-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".speaker-main-grid_image.is-blur","selectorGuids":["ceccf952-5b8e-0381-293b-cfd2ee613213","b3481e0c-d293-54e8-083d-68b5b4195ec7"]},"yValue":5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}]}],"createdOn":1710922934251},"a-29":{"id":"a-29","title":"speakers-hover IN","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".aboutus24-main-grid_image.is-logo.is-partner","selectorGuids":["11cc42c8-231c-431e-3ce4-c220907217d1","f4c7a043-ec80-839e-971d-93169a3e1fa6","bd2d36ed-da98-a92a-b875-2f4c853ba74f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-29-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".aboutus24-main-grid_image.is-logo.is-partner","selectorGuids":["11cc42c8-231c-431e-3ce4-c220907217d1","f4c7a043-ec80-839e-971d-93169a3e1fa6","bd2d36ed-da98-a92a-b875-2f4c853ba74f"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1710756477764},"a-30":{"id":"a-30","title":"speakers-hover IN 2","actionItemGroups":[{"actionItems":[{"id":"a-30-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".speaker-main-grid_image.is-blur","selectorGuids":["ceccf952-5b8e-0381-293b-cfd2ee613213","b3481e0c-d293-54e8-083d-68b5b4195ec7"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1710756477764}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CursorHome(
    {
        as: _Component = _Builtin.Block,
        image1 = "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6849c7162aa50cfd87a209fa_Rectangle.png",
        image2 = "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6849c0dcdf85524fd281fad4_brush-fill.svg",
        image3 = "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6849c0dcdf85524fd281fad4_brush-fill.svg",
        image4 = "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6849c0dcdf85524fd281fad4_brush-fill.svg",
        image5 = "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6849c7162aa50cfd87a209fa_Rectangle.png",
        image6 = "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6849c71688189ad5dab29052_Image04.png",
        image7 = "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6849c7167cfe331395c7e1fb_Frame%2023762635.png",
        image8 = "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d4b5_where-shape.svg",

        link = {
            href: "mailto:awards@waysconf.com"
        },

        image9 = "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6849c8764ae9989fb3b71fb8_Zdje%CC%A8cie%20WhatsApp%202025-06-09%20o%2015.43.31_0a305058%201.png",
        pageGlobalsNavbarNavbarBorder = true,
        footer24Email = "hello@waysconf.com"
    }
) {
    _interactions.useInteractions(_interactionsData, _styles);

    return (
        <_Component className={_utils.cx(_styles, "page-wrapper-home")} tag="div"><PageGlobals navbarNavbarBorder={pageGlobalsNavbarNavbarBorder} /><_Builtin.Section
                className={_utils.cx(_styles, "section_home25-hero-2")}
                tag="section"
                grid={{
                    type: "section"
                }}><_Builtin.Block className={_utils.cx(_styles, "home25-hero-wrapper", "awards")} tag="div"><_Builtin.Heading
                        id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb940f9-1eb940f5")}
                        tag="h1">{"Showcasing the best in digital industry"}</_Builtin.Heading><_Builtin.Paragraph
                        className={_utils.cx(
                            _styles,
                            "ways25-text-size-24",
                            "text-weight-semibold",
                            "text-style-uppercase"
                        )}
                        id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb940fb-1eb940f5")}>{"recognizing the best in Digital Products, from mobile apps, web apps to APIs."}</_Builtin.Paragraph><_Builtin.Block
                        className={_utils.cx(_styles, "chips-horizontal-wrapper", "awards-hero")}
                        tag="div"><ComponentChip variant="White" chipText="EXPO KRAKÓW" /><ComponentChip variant="White" chipText="Sep 17, 2025, 17:00" /></_Builtin.Block></_Builtin.Block><HeroWaveLottie className={_utils.cx(_styles, "home25-hero-lottie")} /></_Builtin.Section><_Builtin.Section
                className={_utils.cx(_styles, "section_home25-numbers")}
                tag="section"
                grid={{
                    type: "section"
                }}><_Builtin.Block className={_utils.cx(_styles, "home25-numbers-grid")} tag="div"><_Builtin.Block
                        className={_utils.cx(_styles, "home25-numbers-left")}
                        id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb94105-1eb940f5")}
                        tag="div"><_Builtin.Block className={_utils.cx(_styles, "home25-numbers-left_content")} tag="div"><_Builtin.Image
                                className={_utils.cx(_styles, "background-video")}
                                width="auto"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src={image1} /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Section><_Builtin.Section
                className={_utils.cx(_styles, "section-awards24-programm", "is-awards")}
                tag="section"
                grid={{
                    type: "section"
                }}><_Builtin.Block className={_utils.cx(_styles, "awards-groups")} tag="div"><_Builtin.Grid className={_utils.cx(_styles, "awards-home-goup")} tag="div"><_Builtin.Block
                            className={_utils.cx(_styles, "awards-home-goup_content")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb9410b-1eb940f5")}
                            tag="div"><_Builtin.Heading
                                id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb9410c-1eb940f5")}
                                tag="h2">{"Websites"}</_Builtin.Heading><_Builtin.Block
                                className={_utils.cx(_styles, "is--paragraph", "is--text-color-silver")}
                                tag="div">{"Submit your outstanding website, whether it's a complete new build or just a specific functionality or feature, for a chance to be recognized as the best in its class."}<br /><br />{"Showcasing exceptional design, user experience, and functionality, we are seeking websites that push the boundaries of digital excellence."}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                            className={_utils.cx(_styles, "chip-wrapper-right")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb94113-1eb940f5")}
                            tag="div"><_Builtin.Block className={_utils.cx(_styles, "awards-group-headline")} tag="div"><_Builtin.Image
                                    className={_utils.cx(_styles, "icon-embed-xsmall")}
                                    width="auto"
                                    height="auto"
                                    loading="lazy"
                                    alt=""
                                    src={image2} /><_Builtin.Heading className={_utils.cx(_styles, "text-style-uppercase")} tag="h6">{"what can be sumbitted?"}</_Builtin.Heading></_Builtin.Block><_Builtin.Block className={_utils.cx(_styles, "spacer-small")} tag="div" /><_Builtin.Block
                                className={_utils.cx(_styles, "chip-wrapper-right", "is-chips", "is-awards24")}
                                id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb94119-1eb940f5")}
                                tag="div"><ComponentChip variant="Blue" chipText="BUSINESS WEBSITES" /><ComponentChip variant="Blue" chipText="PERSONAL WEBSITES" /><ComponentChip variant="Blue" chipText="PORTFOLIO WEBSITES" /><ComponentChip variant="Blue" chipText="E-COMMERCE WEBSITES" /><ComponentChip variant="Blue" chipText="INTERACTIVE ELEMENTS" /><ComponentChip variant="Blue" chipText="INNOVATIVE USER INTERFACES" /><ComponentChip variant="Blue" chipText="SEAMLESS USER JOURNEYS" /><ComponentChip variant="Blue" chipText="EDUCATIONAL WEBSITES" /><ComponentChip variant="Blue" chipText="INTEGRATION WITH THIRD-PARTY" /><ComponentChip variant="Blue" chipText="UX Writing" /><ComponentChip variant="Blue" chipText="LLM & AI" /></_Builtin.Block></_Builtin.Block></_Builtin.Grid><_Builtin.Grid className={_utils.cx(_styles, "awards-home-goup")} tag="div"><_Builtin.Block
                            className={_utils.cx(_styles, "awards-home-goup_content")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb94131-1eb940f5")}
                            tag="div"><_Builtin.Heading
                                id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb94132-1eb940f5")}
                                tag="h2">{"Mobile apps"}</_Builtin.Heading><_Builtin.Block
                                className={_utils.cx(_styles, "is--paragraph", "is--text-color-silver")}
                                tag="div">{"Submit your exceptional mobile app, whether it's a groundbreaking new release or a specific feature or module, for a chance to be honored as the top mobile app of the year. "}<br /><br />{"We are seeking mobile apps that combine seamless user experiences, innovative features, and outstanding performance, setting new standards in the digital landscape."}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                            className={_utils.cx(_styles, "chip-wrapper-right")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb94139-1eb940f5")}
                            tag="div"><_Builtin.Block className={_utils.cx(_styles, "awards-group-headline")} tag="div"><_Builtin.Image
                                    className={_utils.cx(_styles, "icon-embed-xsmall")}
                                    width="auto"
                                    height="auto"
                                    loading="lazy"
                                    alt=""
                                    src={image3} /><_Builtin.Heading className={_utils.cx(_styles, "text-style-uppercase")} tag="h6">{"what can be sumbitted?"}</_Builtin.Heading></_Builtin.Block><_Builtin.Block className={_utils.cx(_styles, "spacer-small")} tag="div" /><_Builtin.Block
                                className={_utils.cx(_styles, "chip-wrapper-right", "is-chips", "is-awards24")}
                                id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb9413f-1eb940f5")}
                                tag="div"><ComponentChip variant="Teal" chipText="MOBILE APPS" /><ComponentChip variant="Teal" chipText="MOBILE APP DESIGN GUIDELINES" /><ComponentChip variant="Teal" chipText="INTEGRATION WITH APIS AND SERVICES" /><ComponentChip variant="Teal" chipText="UNIQUE FEATURES OR MODULES" /><ComponentChip variant="Teal" chipText="OFFLINE CAPABILITIES" /><ComponentChip variant="Teal" chipText="PWA" /><ComponentChip variant="Teal" chipText="ACCESSIBILITY CONSIDERATIONS" /><ComponentChip variant="Teal" chipText="INTUITIVE USER INTERFACES" /></_Builtin.Block></_Builtin.Block></_Builtin.Grid><_Builtin.Grid className={_utils.cx(_styles, "awards-home-goup")} tag="div"><_Builtin.Block
                            className={_utils.cx(_styles, "awards-home-goup_content")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb94151-1eb940f5")}
                            tag="div"><_Builtin.Heading
                                id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb94152-1eb940f5")}
                                tag="h2">{"Desktop & web apps"}</_Builtin.Heading><_Builtin.Block
                                className={_utils.cx(_styles, "is--paragraph", "is--text-color-silver")}
                                tag="div">{"Submit your outstanding desktop or web app, whether it's a comprehensive CRM system, a robust ERP solution, or a powerful dashboard, for a chance to be recognized as the top desktop and web app of the year."}<br /><br />{"We are seeking applications that deliver seamless user experiences, advanced functionalities, and exceptional performance, revolutionizing the way businesses operate in the digital realm."}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                            className={_utils.cx(_styles, "chip-wrapper-right")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb94159-1eb940f5")}
                            tag="div"><_Builtin.Block className={_utils.cx(_styles, "awards-group-headline")} tag="div"><_Builtin.Image
                                    className={_utils.cx(_styles, "icon-embed-xsmall")}
                                    width="auto"
                                    height="auto"
                                    loading="lazy"
                                    alt=""
                                    src={image4} /><_Builtin.Heading className={_utils.cx(_styles, "text-style-uppercase")} tag="h6">{"what can be sumbitted?"}</_Builtin.Heading></_Builtin.Block><_Builtin.Block className={_utils.cx(_styles, "spacer-small")} tag="div" /><_Builtin.Block
                                className={_utils.cx(_styles, "chip-wrapper-right", "is-chips", "is-awards24")}
                                id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb9415f-1eb940f5")}
                                tag="div"><ComponentChip variant="Pink" chipText="DASHBOARDS" chipWrapperVisibility={true} /><ComponentChip variant="Pink" chipText="ERP SOLUTIONS" chipWrapperVisibility={true} /><ComponentChip variant="Pink" chipText="CRM SYSTEMS" chipWrapperVisibility={true} /><ComponentChip
                                    variant="Pink"
                                    chipText="EFFICIENT DATA MANAGEMENT"
                                    chipWrapperVisibility={true} /><ComponentChip variant="Pink" chipText="FINTECH APP" chipWrapperVisibility={true} /><ComponentChip variant="Pink" chipText="HR SYSTEM" chipWrapperVisibility={true} /><ComponentChip
                                    variant="Pink"
                                    chipText="SUPPLY MANAGEMENT SYSTEMS"
                                    chipWrapperVisibility={true} /><ComponentChip variant="Pink" chipText="CUSTOMER SUPPORT" chipWrapperVisibility={true} /><ComponentChip variant="Pink" chipText="CMS" chipWrapperVisibility={true} /><ComponentChip variant="Pink" chipText="LMS" chipWrapperVisibility={true} /><ComponentChip
                                    variant="Pink"
                                    chipText="PROJECT MANAGEMENT TOOLS"
                                    chipWrapperVisibility={true} /><ComponentChip
                                    variant="Pink"
                                    chipText="MARKETING AUTOMATION"
                                    chipWrapperVisibility={true} /></_Builtin.Block></_Builtin.Block></_Builtin.Grid><_Builtin.Grid className={_utils.cx(_styles, "awards-home-goup")} tag="div"><_Builtin.Block
                            className={_utils.cx(_styles, "awards-home-goup_content")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb94179-1eb940f5")}
                            tag="div"><_Builtin.Heading className={_utils.cx(_styles, "text-style-uppercase")} tag="h6">{"Special award"}</_Builtin.Heading><_Builtin.Heading
                                id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb9417c-1eb940f5")}
                                tag="h2">{"Public choice"}</_Builtin.Heading><_Builtin.Block
                                className={_utils.cx(_styles, "is--paragraph", "is--text-color-silver")}
                                tag="div">{"Submit your outstanding desktop or web app, whether it's a comprehensive CRM system, a robust ERP solution,or a powerful dashboard, for a chance to be recognized as the top desktop and web app of the year."}</_Builtin.Block></_Builtin.Block></_Builtin.Grid><_Builtin.Grid className={_utils.cx(_styles, "awards-home-goup", "nocode")} tag="div"><_Builtin.Block
                            className={_utils.cx(_styles, "awards-home-goup_content", "nocode")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb94181-1eb940f5")}
                            tag="div"><_Builtin.Heading
                                id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb94182-1eb940f5")}
                                tag="h2">{"No-code and low-code solutions in all categories"}</_Builtin.Heading><_Builtin.Block
                                className={_utils.cx(_styles, "is--paragraph", "is--text-color-silver")}
                                tag="div">{"This year, we are excited to introduce a special award recognizing exceptional no-code solutions across all categories. Submit your outstanding projects for a chance to be honored as leaders in the no-code revolution."}</_Builtin.Block></_Builtin.Block></_Builtin.Grid></_Builtin.Block></_Builtin.Section><_Builtin.Section
                className={_utils.cx(_styles, "section-awards25-schedule")}
                tag="section"
                grid={{
                    type: "section"
                }}><_Builtin.Block className={_utils.cx(_styles, "home25-session-content")} tag="div"><_Builtin.Heading className={_utils.cx(_styles, "text-align-center")} tag="h2">{"Awards schedule"}</_Builtin.Heading><_Builtin.Grid className={_utils.cx(_styles, "home25-session-content_grid")} tag="div"><_Builtin.Block
                            className={_utils.cx(_styles, "home25-session-content_grid-item")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb9418b-1eb940f5")}
                            tag="div"><_Builtin.Block
                                className={_utils.cx(_styles, "home25-session-tabs_grid-item-top")}
                                tag="div"><_Builtin.Block
                                    className={_utils.cx(_styles, "home25-session-content_grid-item-top")}
                                    tag="div"><_Builtin.HtmlEmbed
                                        className={_utils.cx(_styles, "icon-embed-xsmall-10")}
                                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M2%2011H22V20C22%2020.5523%2021.5523%2021%2021%2021H3C2.44772%2021%202%2020.5523%202%2020V11ZM17%203H21C21.5523%203%2022%203.44772%2022%204V9H2V4C2%203.44772%202.44772%203%203%203H7V1H9V3H15V1H17V3Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E" /><_Builtin.Block className={_utils.cx(_styles, "ways25-text-size-18")} tag="div">{"16.07 - 16.08"}</_Builtin.Block></_Builtin.Block><_Builtin.Heading className={_utils.cx(_styles, "ways25-heading5")} tag="h5">{"Project submissions"}</_Builtin.Heading><_Builtin.Paragraph>{"This is your time! The Call for Entries for the WaysConf Awards will be open on July 16th. You can count on us and our consultation related to the best possible completion of the application form. ;)"}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block><_Builtin.Block
                            className={_utils.cx(_styles, "home25-session-content_grid-item")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb94195-1eb940f5")}
                            tag="div"><_Builtin.Block
                                className={_utils.cx(_styles, "home25-session-tabs_grid-item-top")}
                                tag="div"><_Builtin.Block
                                    className={_utils.cx(_styles, "home25-session-content_grid-item-top")}
                                    tag="div"><_Builtin.HtmlEmbed
                                        className={_utils.cx(_styles, "icon-embed-xsmall-10")}
                                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M2%2011H22V20C22%2020.5523%2021.5523%2021%2021%2021H3C2.44772%2021%202%2020.5523%202%2020V11ZM17%203H21C21.5523%203%2022%203.44772%2022%204V9H2V4C2%203.44772%202.44772%203%203%203H7V1H9V3H15V1H17V3Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E" /><_Builtin.Block className={_utils.cx(_styles, "ways25-text-size-18")} tag="div">{"19.08 - 11.09"}</_Builtin.Block></_Builtin.Block><_Builtin.Heading className={_utils.cx(_styles, "ways25-heading5")} tag="h5">{"Jury's deliberations"}</_Builtin.Heading><_Builtin.Paragraph>{"It's time for the intense deliberations of our Jury, which will evaluate the submissions. This evaluation will be independent and anonymous, which means that our experts will not consult with each other about their evaluations. The proper conduct of this stage will be supervised by a voting coordinator, whose role is to ensure that the Jury's voting remains independent and anonymous."}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block><_Builtin.Block
                            className={_utils.cx(_styles, "home25-session-content_grid-item", "teal")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb9419f-1eb940f5")}
                            tag="div"><_Builtin.Block
                                className={_utils.cx(_styles, "home25-session-tabs_grid-item-top")}
                                tag="div"><_Builtin.Block
                                    className={_utils.cx(_styles, "home25-session-content_grid-item-top")}
                                    tag="div"><_Builtin.HtmlEmbed
                                        className={_utils.cx(_styles, "icon-embed-xsmall-10")}
                                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M2%2011H22V20C22%2020.5523%2021.5523%2021%2021%2021H3C2.44772%2021%202%2020.5523%202%2020V11ZM17%203H21C21.5523%203%2022%203.44772%2022%204V9H2V4C2%203.44772%202.44772%203%203%203H7V1H9V3H15V1H17V3Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E" /><_Builtin.Block className={_utils.cx(_styles, "ways25-text-size-18")} tag="div">{"26.08 - 11.09"}</_Builtin.Block></_Builtin.Block><_Builtin.Heading className={_utils.cx(_styles, "ways25-heading5")} tag="h5">{"Audience voting"}</_Builtin.Heading><_Builtin.Paragraph>{"Among the submissions, you'll have the opportunity to vote on the best projects in the following categories: Website, Webapp, Mobile App.Additionally, the best no-code projects will be awarded a separate prize."}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block><_Builtin.Block
                            className={_utils.cx(_styles, "home25-session-content_grid-item")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb941a9-1eb940f5")}
                            tag="div"><_Builtin.Block
                                className={_utils.cx(_styles, "home25-session-tabs_grid-item-top")}
                                tag="div"><_Builtin.Block
                                    className={_utils.cx(_styles, "home25-session-content_grid-item-top")}
                                    tag="div"><_Builtin.HtmlEmbed
                                        className={_utils.cx(_styles, "icon-embed-xsmall-10")}
                                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M2%2011H22V20C22%2020.5523%2021.5523%2021%2021%2021H3C2.44772%2021%202%2020.5523%202%2020V11ZM17%203H21C21.5523%203%2022%203.44772%2022%204V9H2V4C2%203.44772%202.44772%203%203%203H7V1H9V3H15V1H17V3Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E" /><_Builtin.Block className={_utils.cx(_styles, "ways25-text-size-18")} tag="div">{"17.09.2025"}</_Builtin.Block></_Builtin.Block><_Builtin.Heading className={_utils.cx(_styles, "ways25-heading5")} tag="h5">{"WaysConf Official Gala"}</_Builtin.Heading><_Builtin.Paragraph>{"The grand finale and awarding of statuettes in all categories will happen right after the first day of th Ways Conf at Expo Kraków. Admission is free, so bring your friends!"}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block></_Builtin.Grid></_Builtin.Block></_Builtin.Section><_Builtin.Section
                className={_utils.cx(_styles, "section_home25-session", "blue")}
                tag="section"
                grid={{
                    type: "section"
                }}><_Builtin.Block className={_utils.cx(_styles, "home25-session-border")} tag="div" /><_Builtin.Block className={_utils.cx(_styles, "home25-session-content")} tag="div"><_Builtin.Block className={_utils.cx(_styles, "max-width", "_100ch")} tag="div"><_Builtin.Heading className={_utils.cx(_styles, "ways25-heading2")} tag="h2">{"The process of selectingthe best projects"}</_Builtin.Heading></_Builtin.Block><_Builtin.Grid className={_utils.cx(_styles, "home25-session-tabs_grid")} tag="div"><_Builtin.Block
                            className={_utils.cx(_styles, "home25-session-tabs_grid-item-2")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb941ba-1eb940f5")}
                            tag="div"><_Builtin.Block
                                className={_utils.cx(_styles, "home25-session-tabs_grid-item-top")}
                                tag="div"><_Builtin.HtmlEmbed
                                    className={_utils.cx(_styles, "icon-embed-xsmall-9")}
                                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M18.1227%208.8438C19.0155%209.27862%2020.0267%209.40735%2021%209.2101V19.2001C21%2019.4388%2020.9052%2019.6677%2020.7364%2019.8365C20.5676%2020.0053%2020.3387%2020.1001%2020.1%2020.1001H3.9C3.66131%2020.1001%203.43239%2020.0053%203.2636%2019.8365C3.09482%2019.6677%203%2019.4388%203%2019.2001V4.8001C3%204.5614%203.09482%204.33248%203.2636%204.1637C3.43239%203.99492%203.66131%203.9001%203.9%203.9001H15.69C15.6306%204.1908%2015.6%204.4923%2015.6%204.8001C15.5985%205.86934%2015.9793%206.9039%2016.6737%207.717L12.0549%2011.7148L6.2823%206.8143L5.1177%208.1859L12.0657%2014.0854L18.1227%208.8438ZM20.1%207.5001C19.7454%207.5001%2019.3943%207.43026%2019.0668%207.29457C18.7392%207.15888%2018.4415%206.96%2018.1908%206.70929C17.9401%206.45857%2017.7412%206.16092%2017.6055%205.83334C17.4698%205.50576%2017.4%205.15467%2017.4%204.8001C17.4%204.44553%2017.4698%204.09443%2017.6055%203.76685C17.7412%203.43927%2017.9401%203.14163%2018.1908%202.89091C18.4415%202.64019%2018.7392%202.44131%2019.0668%202.30562C19.3943%202.16994%2019.7454%202.1001%2020.1%202.1001C20.8161%202.1001%2021.5028%202.38456%2022.0092%202.89091C22.5155%203.39726%2022.8%204.08401%2022.8%204.8001C22.8%205.51618%2022.5155%206.20294%2022.0092%206.70929C21.5028%207.21563%2020.8161%207.5001%2020.1%207.5001Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E" /><_Builtin.Heading className={_utils.cx(_styles, "ways25-heading5")} tag="h5">{"Gathering Submissions"}</_Builtin.Heading><_Builtin.Paragraph>{"We collect project submissions from talented digital product creators across various categories. This initial step gathers a diverse range of innovative projects for consideration. Submissions are open to agencies, freelancers, and companies, ensuring a wide variety of high-quality entries."}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block><_Builtin.Block
                            className={_utils.cx(_styles, "home25-session-tabs_grid-item-2")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb941c1-1eb940f5")}
                            tag="div"><_Builtin.Block
                                className={_utils.cx(_styles, "home25-session-tabs_grid-item-top")}
                                tag="div"><_Builtin.HtmlEmbed
                                    className={_utils.cx(_styles, "icon-embed-xsmall-10")}
                                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M10.2%2014.8548L18.4728%206.58105L19.7463%207.85365L10.2%2017.4L4.47241%2011.6724L5.74501%2010.3998L10.2%2014.8548Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E" /><_Builtin.Heading className={_utils.cx(_styles, "ways25-heading5")} tag="h5">{"Evaluation and selection"}</_Builtin.Heading><_Builtin.Paragraph>{"Our expert team carefully evaluates each submission, considering criteria such as creativity, innovation, functionality, and impact. The most promising projects are selected to advance to the next stage."}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block><_Builtin.Block
                            className={_utils.cx(_styles, "home25-session-tabs_grid-item-2")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb941c8-1eb940f5")}
                            tag="div"><_Builtin.Block
                                className={_utils.cx(_styles, "home25-session-tabs_grid-item-top")}
                                tag="div"><_Builtin.HtmlEmbed
                                    className={_utils.cx(_styles, "icon-embed-xsmall-10")}
                                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M12%2013.8001V21.0001H4.80005C4.80005%2019.0905%205.55862%2017.2592%206.90888%2015.9089C8.25914%2014.5587%2010.0905%2013.8001%2012%2013.8001ZM17.4%2020.5501L14.7549%2021.9406L15.2598%2018.9958L13.1205%2016.9096L16.0779%2016.4794L17.4%2013.8001L18.723%2016.4794L21.6795%2016.9096L19.5402%2018.9958L20.0442%2021.9406L17.4%2020.5501ZM12%2012.9001C9.01655%2012.9001%206.60005%2010.4836%206.60005%207.5001C6.60005%204.5166%209.01655%202.1001%2012%202.1001C14.9835%202.1001%2017.4%204.5166%2017.4%207.5001C17.4%2010.4836%2014.9835%2012.9001%2012%2012.9001Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E" /><_Builtin.Heading className={_utils.cx(_styles, "ways25-heading5")} tag="h5">{"Jury assessment and top picks"}</_Builtin.Heading><_Builtin.Paragraph>{"Esteemed jury members, with extensive industry experience, independently review the selected projects. Each juror chooses their top five projects in each category based on their expertise and judgment."}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block><_Builtin.Block
                            className={_utils.cx(_styles, "home25-session-tabs_grid-item-2")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb941cf-1eb940f5")}
                            tag="div"><_Builtin.Block
                                className={_utils.cx(_styles, "home25-session-tabs_grid-item-top")}
                                tag="div"><_Builtin.HtmlEmbed
                                    className={_utils.cx(_styles, "icon-embed-xsmall-10")}
                                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M19.1999%2021H4.7999C4.56121%2021%204.33229%2020.9052%204.16351%2020.7364C3.99472%2020.5676%203.8999%2020.3387%203.8999%2020.1V3.9C3.8999%203.66131%203.99472%203.43239%204.16351%203.2636C4.33229%203.09482%204.56121%203%204.7999%203H19.1999C19.4386%203%2019.6675%203.09482%2019.8363%203.2636C20.0051%203.43239%2020.0999%203.66131%2020.0999%203.9V20.1C20.0999%2020.3387%2020.0051%2020.5676%2019.8363%2020.7364C19.6675%2020.9052%2019.4386%2021%2019.1999%2021ZM8.3999%207.5V9.3H15.5999V7.5H8.3999ZM8.3999%2011.1V12.9H15.5999V11.1H8.3999ZM8.3999%2014.7V16.5H15.5999V14.7H8.3999Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E" /><_Builtin.Heading className={_utils.cx(_styles, "ways25-heading5")} tag="h5">{"Public voting and final rankings"}</_Builtin.Heading><_Builtin.Paragraph>{"Jury votes are tallied, assigning points based on rank: five points for first place, four for second, and so on. We calculate the average score for each project. The highest-scoring projects in each category are declared winners."}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block></_Builtin.Grid></_Builtin.Block><_Builtin.Block
                    className={_utils.cx(_styles, "home25-session-border", "bottom")}
                    tag="div" /></_Builtin.Section><_Builtin.Block
                className={_utils.cx(_styles, "section-hero-wrapper", "awards-jury")}
                tag="div"><_Builtin.Block className={_utils.cx(_styles, "home-speakers-content")} tag="div"><_Builtin.Heading
                        className={_utils.cx(_styles, "ways25-heading2", "text-align-center")}
                        tag="h2">{"Meet our esteemed experts"}</_Builtin.Heading><CursrorSectionJuryPeople
                            showTabs={false}
                            limit={5}
                            showMoreHref="/jury"
                            showMoreLabel="Pokaż więcej" /></_Builtin.Block></_Builtin.Block><_Builtin.Section
                className={_utils.cx(_styles, "section_home25-where")}
                tag="section"
                grid={{
                    type: "section"
                }}><_Builtin.Block className={_utils.cx(_styles, "home25-where-content")} tag="div"><_Builtin.Block className={_utils.cx(_styles, "home25-where-content_top")} tag="div"><_Builtin.Heading className={_utils.cx(_styles, "ways25-heading2")} tag="h2">{"WaysAwards Ceremony"}</_Builtin.Heading><_Builtin.Block
                            className={_utils.cx(_styles, "home25-where-content_top-content")}
                            tag="div"><_Builtin.Heading className={_utils.cx(_styles, "ways25-heading2")} tag="h2">{"17th Sep, EXPO Kraków"}</_Builtin.Heading></_Builtin.Block></_Builtin.Block><_Builtin.Grid className={_utils.cx(_styles, "home25-where-grid")} tag="div"><_Builtin.Image
                            className={_utils.cx(_styles, "home25-where-grid_asset")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb941f1-1eb940f5")}
                            width="70"
                            height="70"
                            loading="lazy"
                            alt=""
                            src={image5} /><_Builtin.Image
                            className={_utils.cx(_styles, "home25-where-grid_asset")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb941f2-1eb940f5")}
                            width="70"
                            height="70"
                            loading="lazy"
                            alt=""
                            src={image6} /><_Builtin.Image
                            className={_utils.cx(_styles, "home25-where-grid_asset")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb941f3-1eb940f5")}
                            width="70"
                            height="70"
                            loading="lazy"
                            alt=""
                            src={image7} /></_Builtin.Grid></_Builtin.Block><_Builtin.Image
                    className={_utils.cx(_styles, "home25-where-shape")}
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src={image8} /></_Builtin.Section><_Builtin.Section
                className={_utils.cx(_styles, "section-awards25-schedule")}
                tag="section"
                grid={{
                    type: "section"
                }}><_Builtin.Block className={_utils.cx(_styles, "home25-session-content")} tag="div"><_Builtin.Heading className={_utils.cx(_styles, "ways25-heading1")} tag="h2">{"Why is it worth it?"}</_Builtin.Heading><_Builtin.Grid className={_utils.cx(_styles, "awards-home-why_grid")} tag="div"><_Builtin.Block
                            className={_utils.cx(_styles, "home25-session-content_grid-item")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb941fa-1eb940f5")}
                            tag="div"><_Builtin.Block
                                className={_utils.cx(_styles, "home25-session-tabs_grid-item-top")}
                                tag="div"><_Builtin.HtmlEmbed
                                    className={_utils.cx(_styles, "icon-embed-xsmall-10", "text-color-blue")}
                                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M11.1%2017.4001H8.34689C8.07959%2016.2544%206.87359%2015.3175%206.37859%2014.7001C5.53096%2013.641%204.99974%2012.3641%204.84613%2011.0163C4.69251%209.66859%204.92275%208.30486%205.51032%207.08224C6.09788%205.85963%207.01888%204.82786%208.16721%204.1058C9.31554%203.38374%2010.6445%203.00076%2012.001%203.00098C13.3574%203.00119%2014.6863%203.3846%2015.8344%204.10703C16.9825%204.82946%2017.9031%205.86152%2018.4903%207.08432C19.0775%208.30713%2019.3073%209.67093%2019.1532%2011.0186C18.9992%2012.3663%2018.4676%2013.6431%2017.6196%2014.7019C17.1246%2015.3184%2015.9204%2016.2553%2015.6531%2017.4001H12.9V12.9001H11.1V17.4001ZM15.6%2019.2001V20.1001C15.6%2020.5775%2015.4103%2021.0353%2015.0728%2021.3729C14.7352%2021.7104%2014.2774%2021.9001%2013.8%2021.9001H10.2C9.7226%2021.9001%209.26476%2021.7104%208.9272%2021.3729C8.58963%2021.0353%208.39999%2020.5775%208.39999%2020.1001V19.2001H15.6Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E" /><_Builtin.Heading
                                    className={_utils.cx(_styles, "ways25-heading5", "text-size-32")}
                                    tag="h5">{"We promote good solutions and models"}</_Builtin.Heading><_Builtin.Paragraph>{"Through our conferences, new and innovative ideas have the chance to gain wider recognition. Every participant can find inspiration and practical tools to implement in their work."}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block><_Builtin.Block
                            className={_utils.cx(_styles, "home25-session-content_grid-item")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb94201-1eb940f5")}
                            tag="div"><_Builtin.Block
                                className={_utils.cx(_styles, "home25-session-tabs_grid-item-top")}
                                tag="div"><_Builtin.HtmlEmbed
                                    className={_utils.cx(_styles, "icon-embed-xsmall-10", "text-color-teal")}
                                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M5.7%203.8999V18.2999H20.1V20.0999H3.9V3.8999H5.7ZM19.146%206.5459L21.054%208.4539L15.6%2013.9097L12.9%2011.2097L9.354%2014.7557L7.446%2012.8459L12.9%207.3919L15.6%2010.0919L19.146%206.5459V6.5459Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E" /><_Builtin.Heading
                                    className={_utils.cx(_styles, "ways25-heading5", "text-size-32")}
                                    tag="h5">{"Together we observe and create trends"}</_Builtin.Heading><_Builtin.Paragraph>{"Our events are a perfect opportunity to follow the latest trends and share insights. Participants have the chance to shape the future of their industry together."}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block><_Builtin.Block
                            className={_utils.cx(_styles, "home25-session-content_grid-item")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb94208-1eb940f5")}
                            tag="div"><_Builtin.Block
                                className={_utils.cx(_styles, "home25-session-tabs_grid-item-top")}
                                tag="div"><_Builtin.HtmlEmbed
                                    className={_utils.cx(_styles, "icon-embed-xsmall-10", "text-color-pink")}
                                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M19.2%2021H7.04999C6.21456%2021%205.41335%2020.6681%204.82261%2020.0774C4.23187%2019.4866%203.89999%2018.6854%203.89999%2017.85V5.7C3.89999%204.98392%204.18446%204.29716%204.69081%203.79081C5.19715%203.28446%205.88391%203%206.59999%203H19.2C19.4387%203%2019.6676%203.09482%2019.8364%203.2636C20.0052%203.43239%2020.1%203.66131%2020.1%203.9V20.1C20.1%2020.3387%2020.0052%2020.5676%2019.8364%2020.7364C19.6676%2020.9052%2019.4387%2021%2019.2%2021ZM18.3%2019.2V16.5H7.04999C6.69195%2016.5%206.34857%2016.6422%206.0954%2016.8954C5.84223%2017.1486%205.69999%2017.492%205.69999%2017.85C5.69999%2018.208%205.84223%2018.5514%206.0954%2018.8046C6.34857%2019.0578%206.69195%2019.2%207.04999%2019.2H18.3Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E" /><_Builtin.Heading
                                    className={_utils.cx(_styles, "ways25-heading5", "text-size-32")}
                                    tag="h5">{"We show we knowthe industry"}</_Builtin.Heading><_Builtin.Paragraph>{"During our events, experts and professionals share their knowledge, confirming their position as industry leaders. It's also an opportunity to demonstrate expertise to a wide audience."}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block><_Builtin.Block
                            className={_utils.cx(_styles, "home25-session-content_grid-item")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb9420f-1eb940f5")}
                            tag="div"><_Builtin.Block
                                className={_utils.cx(_styles, "home25-session-tabs_grid-item-top")}
                                tag="div"><_Builtin.HtmlEmbed
                                    className={_utils.cx(_styles, "icon-embed-xsmall-10", "text-color-blue")}
                                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M12%202.09961C12.591%202.09961%2013.1761%202.21601%2013.7221%202.44215C14.2681%202.6683%2014.7641%202.99977%2015.182%203.41763C15.5999%203.83549%2015.9313%204.33157%2016.1575%204.87753C16.3836%205.4235%2016.5%206.00866%2016.5%206.59961V10.1996C16.5%2011.3931%2016.0259%2012.5377%2015.182%2013.3816C14.3381%2014.2255%2013.1935%2014.6996%2012%2014.6996C10.8065%2014.6996%209.66196%2014.2255%208.81804%2013.3816C7.97413%2012.5377%207.50002%2011.3931%207.50002%2010.1996V6.59961C7.50002%205.40614%207.97413%204.26154%208.81804%203.41763C9.66196%202.57372%2010.8065%202.09961%2012%202.09961V2.09961ZM3.94952%2011.0996H5.76302C5.98109%2012.5979%206.73131%2013.9676%207.87643%2014.9581C9.02156%2015.9487%2010.485%2016.4938%2011.9991%2016.4938C13.5132%2016.4938%2014.9767%2015.9487%2016.1218%2014.9581C17.2669%2013.9676%2018.0172%2012.5979%2018.2352%2011.0996H20.0496C19.845%2012.9255%2019.026%2014.6276%2017.7269%2015.9268C16.4278%2017.226%2014.7258%2018.0452%2012.9%2018.2501V21.8996H11.1V18.2501C9.27405%2018.0454%207.57183%2017.2263%206.27258%2015.9271C4.97333%2014.6278%204.1542%2012.9256%203.94952%2011.0996V11.0996Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E" /><_Builtin.Heading
                                    className={_utils.cx(_styles, "ways25-heading5", "text-size-32")}
                                    tag="h5">{"We talk about our work in front of a wider audience"}</_Builtin.Heading><_Builtin.Paragraph>{"Our conferences provide the opportunity to showcase personal achievements to a large audience, enhancing prestige and recognition. It's a chance to gain new contacts and partnerships."}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block><_Builtin.Block
                            className={_utils.cx(_styles, "home25-session-content_grid-item")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb94216-1eb940f5")}
                            tag="div"><_Builtin.Block
                                className={_utils.cx(_styles, "home25-session-tabs_grid-item-top")}
                                tag="div"><_Builtin.HtmlEmbed
                                    className={_utils.cx(_styles, "icon-embed-xsmall-10", "text-color-teal")}
                                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M9%206C9%206.82843%208.32843%207.5%207.5%207.5C6.67157%207.5%206%206.82843%206%206C6%205.17157%206.67157%204.5%207.5%204.5C8.32843%204.5%209%205.17157%209%206ZM6.75%2015V19.5H5.25V10.5C5.25%209.25736%206.25736%208.25%207.5%208.25C8.11544%208.25%208.67317%208.49709%209.07939%208.8975L10.8602%2010.5793L12.5948%208.84467L13.6555%209.90533L10.8901%2012.6707L9.75%2011.594V19.5H8.25V15H6.75ZM10.5%206.75H17.25V13.5H10.5V15H13.7741L15.8917%2019.5H17.5495L15.4318%2015H18C18.4142%2015%2018.75%2014.6642%2018.75%2014.25V6C18.75%205.58579%2018.4142%205.25%2018%205.25H10.5V6.75Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E" /><_Builtin.Heading
                                    className={_utils.cx(_styles, "ways25-heading5", "text-size-32")}
                                    tag="h5">{"We talk about submitted projects at conferences"}</_Builtin.Heading><_Builtin.Paragraph>{"Every participant can present their projects, allowing for evaluation and feedback from other specialists. It's also an opportunity to promote personal initiatives and find support for their implementation."}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block><_Builtin.Block
                            className={_utils.cx(_styles, "home25-session-content_grid-item")}
                            id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb9421d-1eb940f5")}
                            tag="div"><_Builtin.Block
                                className={_utils.cx(_styles, "home25-session-tabs_grid-item-top")}
                                tag="div"><_Builtin.HtmlEmbed
                                    className={_utils.cx(_styles, "icon-embed-xsmall-10", "text-color-pink")}
                                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M3.00001%209.3001H5.70001V20.1001H3.00001C2.76131%2020.1001%202.53239%2020.0053%202.36361%2019.8365C2.19483%2019.6677%202.10001%2019.4388%202.10001%2019.2001V10.2001C2.10001%209.96141%202.19483%209.73249%202.36361%209.5637C2.53239%209.39492%202.76131%209.3001%203.00001%209.3001V9.3001ZM7.76371%208.1364L13.5237%202.3764C13.6003%202.29962%2013.702%202.25307%2013.8101%202.2453C13.9182%202.23753%2014.0256%202.26906%2014.1123%202.3341L14.88%202.9101C15.0932%203.07016%2015.2543%203.28977%2015.3428%203.54123C15.4314%203.79269%2015.4435%204.06475%2015.3777%204.3231L14.34%208.4001H20.1C20.5774%208.4001%2021.0352%208.58974%2021.3728%208.92731C21.7104%209.26487%2021.9%209.72271%2021.9%2010.2001V12.0937C21.9002%2012.3289%2021.8544%2012.5619%2021.765%2012.7795L18.9795%2019.543C18.9116%2019.7079%2018.7961%2019.8489%2018.6479%2019.9481C18.4997%2020.0473%2018.3254%2020.1002%2018.147%2020.1001H8.40001C8.16131%2020.1001%207.93239%2020.0053%207.76361%2019.8365C7.59483%2019.6677%207.50001%2019.4388%207.50001%2019.2001V8.7727C7.50006%208.53402%207.59491%208.30514%207.76371%208.1364Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E" /><_Builtin.Heading
                                    className={_utils.cx(_styles, "ways25-heading5", "text-size-32")}
                                    tag="h5">{'Let\'s just say to each other "you did a great job" :)!'}</_Builtin.Heading><_Builtin.Paragraph>{"Our events are also a moment to appreciate each other and build a positive atmosphere of cooperation. This way, everyone feels part of a larger community."}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block></_Builtin.Grid><_Builtin.NotSupported _atom="Animation" /></_Builtin.Block></_Builtin.Section><_Builtin.Section
                className={_utils.cx(_styles, "section-awards-faq")}
                tag="section"
                grid={{
                    type: "section"
                }}><_Builtin.Block className={_utils.cx(_styles, "awards-faq-content")} tag="div"><_Builtin.Heading
                        className={_utils.cx(_styles, "ways25-heading1", "text-align-center", "mobile-custom")}
                        tag="h3">{"Frequently Asked Questions"}</_Builtin.Heading><_Builtin.Block className={_utils.cx(_styles, "awards-faq-group")} tag="div"><TicketsFaqItem
                            question="Who is the coordinator?"
                            answer={<>{"The coordinator is the person who ensures the independence of the vote. He does not take part in the evaluation of the works, while his role is:"}<br />{"- ensuring the correctness of the voting, "}<br />{"- verifying all paperwork, "}<br />{"- checking compliance with RODO procedures, "}<br />{"- Independence of the selection of nominees and winners, "}<br />{"- overseeing the entire project."}</>} /><TicketsFaqItem
                            question="How will we make sure that the WaysConf Awards are objective?"
                            answer={<>{"This is a big challenge, and we will try to do our best. What does this mean?"}<br />{"- multidisciplinarity of the Jury, "}<br />{"- an appropriate number of independent consultants, "}<br />{"- maintaining anonymity in voting (for as long as possible), "}<br />{"- taking part in the voting procedure only those projects with which no member of the Jury is in any way connected, "}<br />{"- publication of clear voting methods."}</>} /><TicketsFaqItem
                            question="What about NDA projects?"
                            answer={<>{"Make sure everything you submit has approval from clients before submitting. Projects submitted to the WaysConf Awards may be nominated for the Audience voting, which entails publication of the submission on the website and at the Ways Conf Awards."}<br /><br />{"In case you want to submit to the competition, for example, a process or solution in a project with strict NDA, but the very issues of customers, audience, users, etc. are irrelevant in the submission - you can submit a *white label* project, while you, as the submitter, take on any claims of the client."}</>} /><TicketsFaqItem
                            question="What kind of projects can be submitted?"
                            answer="Everything that has an interface and in some way facilitates communication between a machine and a user. You have specific lists next to the submission buttons above." /><TicketsFaqItem
                            question="Do the projects need to be published or only documented?"
                            answer="Projects have to be published." /><TicketsFaqItem
                            question="Who can submit their work?"
                            answer="Since **only non-NDA projects are submitted to the competition, a project can be submitted by a person who is able to declare that the submitted work is free of contractual claims. Thus, it can be a contact person, project manager, or supervisor. In addition, a field for the contact person is included in the submission form. Therefore, it is worthwhile for the contact person to be aware of the submission of a particular project to the competition. If you meet these two requirements, go ahead and send your application." /><TicketsFaqItem
                            question="What can be attached to the form?"
                            answer="You can submit up to 3 images, each with a maximum size of 10MB. Additionally, you can include a link to further materials at the end of your submission or send attachments to awards@waysconf.com." /><TicketsFaqItem
                            question="How does the Jury's vote look like?"
                            answer="Jury voting is subjective. Each member of the jury will be given anonymous works to evaluate. They will rate the projects based on their personal preferences, without access to any project metrics. The evaluation involves selecting their top 5 projects and assigning points accordingly, with the highest-ranking project receiving 5 points and subsequent projects receiving decreasing points. The coordinator will collect all the votes and calculate the average score by dividing the total points by the number of possible votes. Please note that jury members cannot vote for their own related projects. The number of possible votes may vary as a result." /><TicketsFaqItem
                            question="Is it possible to submit more than one work?"
                            answer="In each category, you may submit up to three projects. While you can submit multiple entries to the contest, each project may be entered into a maximum of two categories." /><TicketsFaqItem
                            question="We have a case study described on the website - can I post a link as a submission?"
                            answer="We try to make the process of submitting work as simple as possible. If you already have a case study written down, as much as possible post a link to it. However, make sure to include the information we suggest you include in your contest submission. Also, don't forget to complete the metric that is necessary for the submission." /><TicketsFaqItem
                            question="What language can the submission be in?"
                            answer="The official language is English, but you can submit it in Polish, and we will translate it ourselves." /><TicketsFaqItem
                            question="Can I verify the application with someone?"
                            answer={`Yes, however, only from the formal point of view. This includes: verification of the submission category, matters related to RODO, NDA, and verification of the correctness of filling in the halves regarding the metrics. We won't help you with this "How to describe your project?", you have to complete this information on your own, as this is an element subject to the Jury's evaluation.`} /><TicketsFaqItem
                            question="Are there limits on awards and nominations?"
                            answer={<>{"We plan to award the following statuettes:"}<br />{"• Best Website"}<br />{"• Best Mobile App"}<br />{"• Best Desktop & Web App"}<br />{"• Best Student Project"}<br />{"• Best No-Code Solution App"}<br />{"• Best No-Code Solution Website"}<br /><br />{"Additionally, we will have public choice awards in the same categories:"}<br />{"• Best Public Choice Website"}<br />{"• Best Public Choice Mobile App"}<br />{"• Best Public Choice Desktop & Web App"}<br />{"• Best Public Choice Student Project"}<br />{"• Best Public Choice No-Code Solution App"}<br />{"• Best Public Choice No-Code Solution Website"}</>} /><TicketsFaqItem
                            question="Can I improve my submission?"
                            answer="Once a submission has been sent, it is not possible to modify it. The exception to this is NDA issues - in these matters we will always help to make sure everything legally fits. For this matter, write to awards@waysconf.com" /><TicketsFaqItem
                            question="Who can come to the gala?"
                            answer="The gala will be part of the official WaysConf Awards Gala, held at Expo Kraków on September 17th at 17:00, right after the last talks at WaysConf. Participation is free and everyone is welcome. If you are not in the top group of the projects, you can still come for free after 16:30 without a ticket." /><TicketsFaqItem
                            question="Is there a fee to apply?"
                            answer="The application is 100% free of charge. The prizes awarded are of low value, so there are no additional issues such as tax on prizes." /><TicketsFaqItem
                            question="Out of what time period can I submit a project?"
                            answer="You can submit projects on which work was carried out in the period from June 2024 and June 2025. The submission period is from July 16th, 2025 to August 16th, 2025." /></_Builtin.Block></_Builtin.Block></_Builtin.Section><_Builtin.Section
                className={_utils.cx(_styles, "section-awards-faq")}
                tag="section"
                grid={{
                    type: "section"
                }}><_Builtin.Block className={_utils.cx(_styles, "awards-faq-content")} tag="div"><_Builtin.Heading
                        className={_utils.cx(_styles, "ways25-heading1", "text-align-center", "mobile-custom")}
                        tag="h3">{"Frequently Asked Questions"}</_Builtin.Heading><_Builtin.Block className={_utils.cx(_styles, "awards-faq-group")} tag="div"><TicketsFaqItem
                            question="Who is the coordinator?"
                            answer={<>{"The coordinator is the person who ensures the independence of the vote. He does not take part in the evaluation of the works, while his role is:"}<br />{"- ensuring the correctness of the voting, "}<br />{"- verifying all paperwork, "}<br />{"- checking compliance with RODO procedures, "}<br />{"- Independence of the selection of nominees and winners, "}<br />{"- overseeing the entire project."}</>} /><TicketsFaqItem
                            question="How will we make sure that the WaysConf Awards are objective?"
                            answer={<>{"This is a big challenge, and we will try to do our best. What does this mean?"}<br />{"- multidisciplinarity of the Jury, "}<br />{"- an appropriate number of independent consultants, "}<br />{"- maintaining anonymity in voting (for as long as possible), "}<br />{"- taking part in the voting procedure only those projects with which no member of the Jury is in any way connected, "}<br />{"- publication of clear voting methods."}</>} /><TicketsFaqItem
                            question="What about NDA projects?"
                            answer={<>{"Make sure everything you submit has approval from clients before submitting. Projects submitted to the WaysConf Awards may be nominated for the Audience voting, which entails publication of the submission on the website and at the Ways Conf Awards."}<br /><br />{"In case you want to submit to the competition, for example, a process or solution in a project with strict NDA, but the very issues of customers, audience, users, etc. are irrelevant in the submission - you can submit a *white label* project, while you, as the submitter, take on any claims of the client."}</>} /><TicketsFaqItem
                            question="What kind of projects can be submitted?"
                            answer="Everything that has an interface and in some way facilitates communication between a machine and a user. You have specific lists next to the submission buttons above." /><TicketsFaqItem
                            question="Do the projects need to be published or only documented?"
                            answer="Projects have to be published." /><TicketsFaqItem
                            question="Who can submit their work?"
                            answer="Since **only non-NDA projects are submitted to the competition, a project can be submitted by a person who is able to declare that the submitted work is free of contractual claims. Thus, it can be a contact person, project manager, or supervisor. In addition, a field for the contact person is included in the submission form. Therefore, it is worthwhile for the contact person to be aware of the submission of a particular project to the competition. If you meet these two requirements, go ahead and send your application." /><TicketsFaqItem
                            question="What can be attached to the form?"
                            answer="You can submit up to 3 images, each with a maximum size of 10MB. Additionally, you can include a link to further materials at the end of your submission or send attachments to awards@waysconf.com." /><TicketsFaqItem
                            question="How does the Jury's vote look like?"
                            answer="Jury voting is subjective. Each member of the jury will be given anonymous works to evaluate. They will rate the projects based on their personal preferences, without access to any project metrics. The evaluation involves selecting their top 5 projects and assigning points accordingly, with the highest-ranking project receiving 5 points and subsequent projects receiving decreasing points. The coordinator will collect all the votes and calculate the average score by dividing the total points by the number of possible votes. Please note that jury members cannot vote for their own related projects. The number of possible votes may vary as a result." /><TicketsFaqItem
                            question="Is it possible to submit more than one work?"
                            answer="In each category, you may submit up to three projects. While you can submit multiple entries to the contest, each project may be entered into a maximum of two categories." /><TicketsFaqItem
                            question="We have a case study described on the website - can I post a link as a submission?"
                            answer="We try to make the process of submitting work as simple as possible. If you already have a case study written down, as much as possible post a link to it. However, make sure to include the information we suggest you include in your contest submission. Also, don't forget to complete the metric that is necessary for the submission." /><TicketsFaqItem
                            question="What language can the submission be in?"
                            answer="The official language is English, but you can submit it in Polish, and we will translate it ourselves." /><TicketsFaqItem
                            question="Can I verify the application with someone?"
                            answer={"Yes, however, only from the formal point of view. This includes: verification of the submission category, matters related to RODO, NDA, and verification of the correctness of filling in the halves regarding the metrics. We won't help you with this \"How to describe your project?\", you have to complete this information on your own, as this is an element subject to the Jury's evaluation."} /><TicketsFaqItem
                            question="Are there limits on awards and nominations?"
                            answer={<>{"We plan to award the following statuettes:"}<br />{"• Best Website"}<br />{"• Best Mobile App"}<br />{"• Best Desktop & Web App"}<br />{"• Best Student Project"}<br />{"• Best No-Code Solution App"}<br />{"• Best No-Code Solution Website"}<br /><br />{"Additionally, we will have public choice awards in the same categories:"}<br />{"• Best Public Choice Website"}<br />{"• Best Public Choice Mobile App"}<br />{"• Best Public Choice Desktop & Web App"}<br />{"• Best Public Choice Student Project"}<br />{"• Best Public Choice No-Code Solution App"}<br />{"• Best Public Choice No-Code Solution Website"}</>} /><TicketsFaqItem
                            question="Can I improve my submission?"
                            answer="Once a submission has been sent, it is not possible to modify it. The exception to this is NDA issues - in these matters we will always help to make sure everything legally fits. For this matter, write to awards@waysconf.com" /><TicketsFaqItem
                            question="Who can come to the gala?"
                            answer="The gala will be part of the official WaysConf Awards Gala, held at Expo Kraków on September 17th at 17:00, right after the last talks at WaysConf. Participation is free and everyone is welcome. If you are not in the top group of the projects, you can still come for free after 16:30 without a ticket." /><TicketsFaqItem
                            question="Is there a fee to apply?"
                            answer="The application is 100% free of charge. The prizes awarded are of low value, so there are no additional issues such as tax on prizes." /><TicketsFaqItem
                            question="Out of what time period can I submit a project?"
                            answer="You can submit projects on which work was carried out in the period from June 2024 and June 2025. The submission period is from July 16th, 2025 to August 16th, 2025." /></_Builtin.Block></_Builtin.Block></_Builtin.Section><_Builtin.Section
                className={_utils.cx(_styles, "tomek_jest-sekcj")}
                tag="section"
                grid={{
                    type: "section"
                }}><_Builtin.Block className={_utils.cx(_styles, "spacer-xhuge")} tag="div" /><_Builtin.Block className={_utils.cx(_styles, "tomek-grid")} tag="div"><_Builtin.Block
                        className={_utils.cx(_styles, "home24-hero-header", "is-awards24")}
                        id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb94368-1eb940f5")}
                        tag="div"><_Builtin.Block className={_utils.cx(_styles, "div-block-25")} tag="div"><_Builtin.Heading
                                className={_utils.cx(_styles, "text-size-large", "is-preheader")}
                                tag="h4">{"Let's talk"}</_Builtin.Heading><_Builtin.Block className={_utils.cx(_styles, "spacer-16")} tag="div" /><_Builtin.Heading className={_utils.cx(_styles, "ways25-heading1")} tag="h2">{"Get in touch "}<br />{"with us"}</_Builtin.Heading><_Builtin.Block className={_utils.cx(_styles, "margin-top", "_16px")} tag="div"><_Builtin.Link
                                    className={_utils.cx(_styles, "chip-wrapper", "white")}
                                    button={false}
                                    block="inline"
                                    options={link}><_Builtin.Block tag="div">{"awards@waysconf.com"}</_Builtin.Block></_Builtin.Link></_Builtin.Block></_Builtin.Block><_Builtin.Block
                            className={_utils.cx(_styles, "text-wrapper", "awards-contact")}
                            tag="div"><_Builtin.Block
                                className={_utils.cx(_styles, "ways25-text-size-18", "text-weight-semibold")}
                                tag="div">{"DESIGNWAYS CONF SP Z O. O."}</_Builtin.Block><_Builtin.Block tag="div">{"al. Powstania Warszawskiego 15, 31-539 Kraków"}<br />{"KRS (National Court Register): 0000774156"}<br />{"EUVAT: PL 6772442132"}</_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block
                        className={_utils.cx(_styles, "swiper-slide", "is-council25", "is-talk-to-us")}
                        id={_utils.cx(_styles, "w-node-_0305d8a9-61bd-241b-e252-72961eb9437e-1eb940f5")}
                        tag="div"><_Builtin.Image
                            className={_utils.cx(_styles, "council-img")}
                            width="1000"
                            height="1000"
                            loading="lazy"
                            alt=""
                            src={image9} /><_Builtin.Block className={_utils.cx(_styles, "home25-council-img")} tag="div"><_Builtin.Block className={_utils.cx(_styles, "home25-council-text")} tag="div"><_Builtin.Block
                                    className={_utils.cx(_styles, "text-size-32", "text-weight-semibold")}
                                    tag="div">{"Monika Bać-Kapała"}</_Builtin.Block><_Builtin.Block className={_utils.cx(_styles, "spacer-16")} tag="div" /><_Builtin.Paragraph>{"Coordinator"}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className={_utils.cx(_styles, "spacer-xhuge")} tag="div" /></_Builtin.Section><Footer24 email={footer24Email} /></_Component>
    );
}
