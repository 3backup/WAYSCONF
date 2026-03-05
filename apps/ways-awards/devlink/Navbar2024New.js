"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Ways25Button } from "./Ways25Button";
import * as _utils from "./utils";
import _styles from "./Navbar2024New.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-122":{"id":"e-122","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-123"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ce6bff5d-b05a-caef-8bd5-836248cdcd57","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ce6bff5d-b05a-caef-8bd5-836248cdcd57","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1665739978284},"e-123":{"id":"e-123","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-122"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ce6bff5d-b05a-caef-8bd5-836248cdcd57","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ce6bff5d-b05a-caef-8bd5-836248cdcd57","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1665739978284},"e-186":{"id":"e-186","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-187"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3921d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3921d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666845185455},"e-187":{"id":"e-187","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-186"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3921d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3921d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666845185455},"e-188":{"id":"e-188","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-189"}},"mediaQueries":["main"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392a5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392a5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666845185455},"e-189":{"id":"e-189","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-188"}},"mediaQueries":["main"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392a5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392a5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666845185455},"e-190":{"id":"e-190","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-191"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392a5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392a5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666845185455},"e-191":{"id":"e-191","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-190"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392a5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392a5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666845185455},"e-192":{"id":"e-192","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-193"}},"mediaQueries":["main"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3930d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3930d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717361053874},"e-193":{"id":"e-193","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-192"}},"mediaQueries":["main"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3930d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3930d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717361053874},"e-194":{"id":"e-194","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-195"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3930d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3930d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717361053874},"e-195":{"id":"e-195","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-194"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3930d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d3930d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717361053874},"e-196":{"id":"e-196","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-197"}},"mediaQueries":["main"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717361054925},"e-197":{"id":"e-197","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-196"}},"mediaQueries":["main"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717361054925},"e-198":{"id":"e-198","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-199"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717361054925},"e-199":{"id":"e-199","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-198"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717361054925},"e-200":{"id":"e-200","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-201"}},"mediaQueries":["main"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717361062269},"e-201":{"id":"e-201","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-200"}},"mediaQueries":["main"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717361062269},"e-202":{"id":"e-202","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-203"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717361062269},"e-203":{"id":"e-203","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-202"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717361062269},"e-204":{"id":"e-204","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-205"}},"mediaQueries":["main"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392bb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392bb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717361063721},"e-205":{"id":"e-205","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-204"}},"mediaQueries":["main"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392bb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392bb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717361063721},"e-206":{"id":"e-206","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-207"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392bb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392bb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717361063721},"e-207":{"id":"e-207","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-206"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392bb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e23e86b6-cefa-0694-0d71-8f53e6d392bb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717361063721},"e-230":{"id":"e-230","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-231"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4f620b61-55a9-ac5a-4c84-0d8fc5b780b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4f620b61-55a9-ac5a-4c84-0d8fc5b780b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718193533045},"e-231":{"id":"e-231","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-230"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4f620b61-55a9-ac5a-4c84-0d8fc5b780b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4f620b61-55a9-ac5a-4c84-0d8fc5b780b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718193533045},"e-296":{"id":"e-296","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-297"}},"mediaQueries":["main"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f13ef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f13ef","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992},"e-297":{"id":"e-297","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-296"}},"mediaQueries":["main"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f13ef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f13ef","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992},"e-298":{"id":"e-298","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-299"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f13ef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f13ef","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992},"e-299":{"id":"e-299","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-298"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f13ef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f13ef","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992},"e-300":{"id":"e-300","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-301"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1418","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1418","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992},"e-301":{"id":"e-301","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-300"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1418","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1418","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992},"e-302":{"id":"e-302","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-303"}},"mediaQueries":["main"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1418","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1418","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992},"e-303":{"id":"e-303","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-302"}},"mediaQueries":["main"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1418","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1418","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992},"e-304":{"id":"e-304","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-305"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1444","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1444","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992},"e-305":{"id":"e-305","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-304"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1444","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1444","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992},"e-306":{"id":"e-306","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-307"}},"mediaQueries":["main"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1444","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1444","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992},"e-307":{"id":"e-307","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-306"}},"mediaQueries":["main"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1444","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1444","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992},"e-308":{"id":"e-308","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-309"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f145e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f145e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992},"e-309":{"id":"e-309","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-308"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f145e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f145e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992},"e-310":{"id":"e-310","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-311"}},"mediaQueries":["main"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f145e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f145e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992},"e-311":{"id":"e-311","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-310"}},"mediaQueries":["main"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f145e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f145e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992},"e-312":{"id":"e-312","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-313"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1474","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1474","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992},"e-313":{"id":"e-313","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-312"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1474","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1474","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992},"e-314":{"id":"e-314","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-315"}},"mediaQueries":["main"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1474","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1474","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992},"e-315":{"id":"e-315","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-314"}},"mediaQueries":["main"],"target":{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1474","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfaa|8dacb3de-7ef8-649d-6a6d-cebd1c4f1474","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721410243992}},"actionLists":{"a-22":{"id":"a-22","title":"Navbar 18 menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":"none"}},{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-22-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-22-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":"block"}},{"id":"a-22-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-22-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-base","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95957"]},"value":"block"}}]},{"actionItems":[{"id":"a-22-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-base","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95957"]},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-22-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-middle","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95966"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626233763968},"a-23":{"id":"a-23","title":"Navbar 18 menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-base","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95957"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-23-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-middle","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95966"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-23-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-23-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-23-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-23-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626235380056},"a-52":{"id":"a-52","title":"Navbar 2 [Open Menu] 2","actionItemGroups":[{"actionItems":[{"id":"a-52-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-52-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-52-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-52-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-52-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-middle","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95966"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626225663494},"a-53":{"id":"a-53","title":"Navbar 2 [Close Menu] 2","actionItemGroups":[{"actionItems":[{"id":"a-53-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-53-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-53-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-53-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-53-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-middle","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95966"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626226496146},"a-48":{"id":"a-48","title":"Navbar 2 Dropdown [Open] [Desktop]","actionItemGroups":[{"actionItems":[{"id":"a-48-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["029c5dd5-3f07-afe8-4dc2-547ddf37831a"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-48-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["029c5dd5-3f07-afe8-4dc2-547ddf37831a"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-48-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["029c5dd5-3f07-afe8-4dc2-547ddf37831a"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-48-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["029c5dd5-3f07-afe8-4dc2-547ddf37831a"]},"value":1,"unit":""}},{"id":"a-48-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rl-dropdown-icon","selectorGuids":["029c5dd5-3f07-afe8-4dc2-547ddf37831c"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-50":{"id":"a-50","title":"Navbar 2 Dropdown [Close] [Desktop]","actionItemGroups":[{"actionItems":[{"id":"a-50-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["029c5dd5-3f07-afe8-4dc2-547ddf37831a"]},"value":0,"unit":""}},{"id":"a-50-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rl-dropdown-icon","selectorGuids":["029c5dd5-3f07-afe8-4dc2-547ddf37831c"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-50-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["029c5dd5-3f07-afe8-4dc2-547ddf37831a"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-43":{"id":"a-43","title":"Navbar 2 Dropdown [Open] [Tablet]","actionItemGroups":[{"actionItems":[{"id":"a-43-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["029c5dd5-3f07-afe8-4dc2-547ddf37831a"]},"heightValue":0,"widthUnit":"px","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-43-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["029c5dd5-3f07-afe8-4dc2-547ddf37831a"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-43-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rl-dropdown-icon","selectorGuids":["029c5dd5-3f07-afe8-4dc2-547ddf37831c"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-37":{"id":"a-37","title":"Navbar 2 Dropdown [Close] [Tablet]","actionItemGroups":[{"actionItems":[{"id":"a-37-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["029c5dd5-3f07-afe8-4dc2-547ddf37831a"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-37-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rl-dropdown-icon","selectorGuids":["029c5dd5-3f07-afe8-4dc2-547ddf37831c"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-27":{"id":"a-27","title":"Navbar 18 menu [Open] 2","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":"none"}},{"id":"a-27-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-27-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-27-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-27-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":"block"}},{"id":"a-27-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-27-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-base","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95957"]},"value":"block"}}]},{"actionItems":[{"id":"a-27-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-base","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95957"]},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-27-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-middle","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95966"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626233763968},"a-28":{"id":"a-28","title":"Navbar 18 menu [Close] 2","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-base","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95957"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-28-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-middle","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95966"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-28-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-28-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-bottom","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95954"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-28-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon4_line-top","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb95963"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-28-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar18_menu","selectorGuids":["cf774892-eef8-f0d7-c07b-c336abb9596b"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626235380056}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar2024New({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar18_component", "is-custom")}
      data-w-id="e23e86b6-cefa-0694-0d71-8f53e6d3921d"
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      fs-scrolldisable-element="smart-nav"
      config={{
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: true,
        collapse: "medium",
        noScroll: true,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "annoucement-2025")}
        tag="div"
      >
        <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-3")}>
          {"🔥 New workshop with V. Friedman, D. Levitt & M. Voje – "}
          <_Builtin.Link
            className={_utils.cx(_styles, "link-banner")}
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"secure your spot here"}
          </_Builtin.Link>
        </_Builtin.Paragraph>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "rl_navbar2_container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "logo-wrappper")}
          tag="div"
        >
          <_Builtin.NavbarBrand
            className={_utils.cx(_styles, "rl_navbar2_logo-link")}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "rl_navbar2_logo")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6849c909d5e1a521e9fdbdd4_logo.svg"
            />
          </_Builtin.NavbarBrand>
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar18_date-wrapper", "is-custom")}
            id={_utils.cx(
              _styles,
              "w-node-e23e86b6-cefa-0694-0d71-8f53e6d39223-e6d3921d"
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
              {"17-18 sep 2025,"}
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
          id={_utils.cx(
            _styles,
            "w-node-e23e86b6-cefa-0694-0d71-8f53e6d3922b-e6d3921d"
          )}
          tag="nav"
          role="navigation"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "blur_bg", "is-custom")}
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
                {"Speakers"}
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
                    width="20"
                    height="20"
                    alt=""
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2f0_user-star-fill.svg"
                  />
                  <_Builtin.Block tag="div">{"Speakers"}</_Builtin.Block>
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d412_mic-line.svg"
                  />
                  <_Builtin.Block tag="div">
                    {"Best Speaker Awards"}
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d352_user-star-fill.svg"
                  />
                  <_Builtin.Block tag="div">
                    {"Become a speaker"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar_menu-mobile")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-header")}
                tag="div"
              >
                {"Tickets"}
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2ee_ticket-2-fill.svg"
                  />
                  <_Builtin.Block tag="div">{"Tickets"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar_menu-mobile")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-header")}
                tag="div"
              >
                {"Participants"}
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d313_building-4-line.svg"
                  />
                  <_Builtin.Block tag="div">
                    {"How to get & Venue"}
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2ee_ticket-2-fill.svg"
                  />
                  <_Builtin.Block tag="div">{"BeforeWays"}</_Builtin.Block>
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2d7_beer-fill.svg"
                  />
                  <_Builtin.Block tag="div">{"BetweenWays"}</_Builtin.Block>
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2e2_hand-heart-fill.svg"
                  />
                  <_Builtin.Block tag="div">{"Goodbye Party"}</_Builtin.Block>
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2da_eye-fill.svg"
                  />
                  <_Builtin.Block tag="div">{"Design Fair"}</_Builtin.Block>
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2e6_restaurant-fill.svg"
                  />
                  <_Builtin.Block tag="div">{"Food &Beverages"}</_Builtin.Block>
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2d9_hotel-bed-fill.svg"
                  />
                  <_Builtin.Block tag="div">{"Hotels"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar_menu-mobile")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-header")}
                tag="div"
              >
                {"Partners"}
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2eb_shake-hands-fill.svg"
                  />
                  <_Builtin.Block tag="div">{"Our Partners"}</_Builtin.Block>
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2e4_hand-coin-fill.svg"
                  />
                  <_Builtin.Block tag="div">{"Partner With Us"}</_Builtin.Block>
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2d8_image-fill.svg"
                  />
                  <_Builtin.Block tag="div">{"Media Kit"}</_Builtin.Block>
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2db_camera-fill.svg"
                  />
                  <_Builtin.Block tag="div">{"Accreditation"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar_menu-mobile")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-header")}
                tag="div"
              >
                {"WaysConf"}
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2dd_history-fill.svg"
                  />
                  <_Builtin.Block tag="div">{"Our story"}</_Builtin.Block>
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2e7_newspaper-fill.svg"
                  />
                  <_Builtin.Block tag="div">{"News"}</_Builtin.Block>
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2f2_user-heart-fill.svg"
                  />
                  <_Builtin.Block tag="div">{"Volunteers"}</_Builtin.Block>
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2e5_mail-fill.svg"
                  />
                  <_Builtin.Block tag="div">{"Newsletter"}</_Builtin.Block>
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2ed_send-plane-fill.svg"
                  />
                  <_Builtin.Block tag="div">{"Contact"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
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
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2ef_trophy-fill.svg"
                  />
                  <_Builtin.Block tag="div">{"Awards"}</_Builtin.Block>
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
                    href: "https://vote.wayscof.com",
                    target: "_blank",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-13")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d413_award-line.svg"
                  />
                  <_Builtin.Block tag="div">{"Voting"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.DropdownWrapper
            className={_utils.cx(
              _styles,
              "rl_navbar2_menu-dropdown",
              "is--display-hidden-tablet"
            )}
            data-w-id="e23e86b6-cefa-0694-0d71-8f53e6d392a5"
            tag="div"
            delay="200"
            hover={true}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(
                _styles,
                "rl_navbar2_dropdwn-toggle",
                "is-custom"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "rl_navbar2_link-text")}
                tag="div"
              >
                {"Agenda"}
              </_Builtin.Block>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "rl-dropdown-icon")}
                value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(
                _styles,
                "rl_navbar2_dropdown-list",
                "is-custom"
              )}
              tag="nav"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2f0_user-star-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Speakers"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2f0_user-star-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Call For Speakers"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "divider-menu")}
                tag="div"
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d314_presentation-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Workshops"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d314_presentation-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Masterclass"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d314_presentation-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Roundtable"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "divider-menu")}
                tag="div"
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d412_mic-line.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  <_Builtin.Strong>{"Best Speaker Awards"}</_Builtin.Strong>
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(
              _styles,
              "rl_navbar2_menu-dropdown",
              "is--display-hidden-tablet"
            )}
            data-w-id="e23e86b6-cefa-0694-0d71-8f53e6d392bb"
            tag="div"
            delay="200"
            hover={true}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(
                _styles,
                "rl_navbar2_dropdwn-toggle",
                "is-custom"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "rl_navbar2_link-text")}
                tag="div"
              >
                {"Participants"}
              </_Builtin.Block>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "rl-dropdown-icon")}
                value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(
                _styles,
                "rl_navbar2_dropdown-list",
                "is-custom"
              )}
              tag="nav"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d313_building-4-line.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"How to get & Venue"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "divider-menu")}
                tag="div"
              />
              <_Builtin.Paragraph className={_utils.cx(_styles, "menu-label")}>
                {"Side Events"}
              </_Builtin.Paragraph>
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2ee_ticket-2-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"BeforeWays "}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2d7_beer-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"BetweenWays "}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2e2_hand-heart-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Goodbye Party "}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "divider-menu")}
                tag="div"
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2da_eye-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Design Fair"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2e6_restaurant-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Food &Beverages"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2d9_hotel-bed-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Hotels"}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(
              _styles,
              "rl_navbar2_menu-dropdown",
              "is--display-hidden-tablet"
            )}
            data-w-id="e23e86b6-cefa-0694-0d71-8f53e6d392dd"
            tag="div"
            delay="200"
            hover={true}
          >
            <_Builtin.DropdownList
              className={_utils.cx(
                _styles,
                "rl_navbar2_dropdown-list",
                "is-custom"
              )}
              tag="nav"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "link-wrapper")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d30f_rocket-2-fill.svg"
                />
                <_Builtin.DropdownLink
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  options={{
                    href: "#",
                  }}
                >
                  {"Startup Valley"}
                </_Builtin.DropdownLink>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "link-wrapper")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2ef_trophy-fill.svg"
                />
                <_Builtin.DropdownLink
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  options={{
                    href: "#",
                  }}
                >
                  {"WaysAwards"}
                </_Builtin.DropdownLink>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "link-wrapper")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2da_eye-fill.svg"
                />
                <_Builtin.DropdownLink
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  options={{
                    href: "#",
                  }}
                >
                  {"Design Expo"}
                </_Builtin.DropdownLink>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "link-wrapper")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2f1_user-add-fill.svg"
                />
                <_Builtin.DropdownLink
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  options={{
                    href: "#",
                  }}
                >
                  {"Matchmaking"}
                </_Builtin.DropdownLink>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "link-wrapper")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2e9_list-unordered.svg"
                />
                <_Builtin.DropdownLink
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  options={{
                    href: "#",
                  }}
                >
                  {"Jobboard"}
                </_Builtin.DropdownLink>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(
              _styles,
              "rl_navbar2_menu-dropdown",
              "is--display-hidden-tablet"
            )}
            data-w-id="e23e86b6-cefa-0694-0d71-8f53e6d392f7"
            tag="div"
            delay="200"
            hover={true}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(
                _styles,
                "rl_navbar2_dropdwn-toggle",
                "is-custom"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "rl_navbar2_link-text")}
                tag="div"
              >
                {"Partners"}
              </_Builtin.Block>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "rl-dropdown-icon")}
                value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(
                _styles,
                "rl_navbar2_dropdown-list",
                "is-custom"
              )}
              tag="nav"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2eb_shake-hands-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Our Partners"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2e4_hand-coin-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Partner With Us"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2d8_image-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Media Kit"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2db_camera-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Accreditation"}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "rl_navbar2_menu-dropdown")}
            data-w-id="e23e86b6-cefa-0694-0d71-8f53e6d3930d"
            tag="div"
            delay="200"
            hover={true}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(
                _styles,
                "rl_navbar2_dropdwn-toggle",
                "is-custom"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "rl_navbar2_link-text")}
                tag="div"
              >
                {"WaysConf"}
              </_Builtin.Block>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "rl-dropdown-icon")}
                value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(
                _styles,
                "rl_navbar2_dropdown-list",
                "is-custom"
              )}
              tag="nav"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2dd_history-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Our story"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2e7_newspaper-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"News"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2f2_user-heart-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Volunteers"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2e5_mail-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Newsletter"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2ed_send-plane-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Contact"}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "rl_navbar2_menu-dropdown")}
            tag="div"
            delay="200"
            hover={true}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(
                _styles,
                "rl_navbar2_dropdwn-toggle",
                "is-custom",
                "is-awards"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "rl_navbar2_link-text")}
                tag="div"
              >
                {"Awards"}
              </_Builtin.Block>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "rl-dropdown-icon")}
                value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(
                _styles,
                "rl_navbar2_dropdown-list",
                "is-custom"
              )}
              tag="nav"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d3ed_trophy-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Awards"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d413_award-line.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Awards Ceremony"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d3ef_medal-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Previous Projects"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2f2_user-heart-fill.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Jury"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "link-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "https://vote.waysconf.com",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-12")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d413_award-line.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rl_navbar2_dropdown-link",
                    "is-custom"
                  )}
                  tag="div"
                >
                  {"Voting"}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "rl_navbar2_link-text",
              "is-single-link"
            )}
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Tickets"}
          </_Builtin.Link>
        </_Builtin.NavbarMenu>
        <_Builtin.Block
          className={_utils.cx(_styles, "button_wrapper-navbar")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "is-mobile-hidden")}
            tag="div"
          >
            <Ways25Button
              variant="Small-Default"
              label="Become a Partner"
              link={{
                href: "#",
              }}
            />
          </_Builtin.Block>
          <Ways25Button
            variant="Small-White"
            label="Get Tickets"
            link={{
              href: "#",
            }}
          />
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
      </_Builtin.Block>
    </_Component>
  );
}
