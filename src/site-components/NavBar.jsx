"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { WhiteNavcard } from "./WhiteNavcard";
import { ColorNavcard } from "./ColorNavcard";

const _interactionsData = JSON.parse(
    '{"events":{"e-13361":{"id":"e-13361","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4796","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13362"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_link-block","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_link-block","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418908493,"origin":["6946540cc72b976861f8c836","e-769"]},"e-13362":{"id":"e-13362","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4797","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13361"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_link-block","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_link-block","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418908497,"origin":["6946540cc72b976861f8c836","e-770"]},"e-13367":{"id":"e-13367","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4796","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13368"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2599fd81-a003-972b-f2af-9cbbcf3451fc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2599fd81-a003-972b-f2af-9cbbcf3451fc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418482469,"origin":["6946540cc72b976861f8c836","e-767"]},"e-13368":{"id":"e-13368","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4797","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13367"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2599fd81-a003-972b-f2af-9cbbcf3451fc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2599fd81-a003-972b-f2af-9cbbcf3451fc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418482469,"origin":["6946540cc72b976861f8c836","e-768"]},"e-13363":{"id":"e-13363","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4796","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13364"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_link","originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_link","originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759419216572,"origin":["6946540cc72b976861f8c836","e-771"]},"e-13364":{"id":"e-13364","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4797","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13363"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_link","originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_link","originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759419216576,"origin":["6946540cc72b976861f8c836","e-772"]},"e-13374":{"id":"e-13374","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4798","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-749"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915,"origin":["6946540cc72b976861f8c836","e-677"]},"e-13373":{"id":"e-13373","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4799","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-750"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915,"origin":["6946540cc72b976861f8c836","e-676"]},"e-13375":{"id":"e-13375","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4796","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-752"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687761,"origin":["6946540cc72b976861f8c836","e-741"]},"e-13376":{"id":"e-13376","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4797","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-751"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687764,"origin":["6946540cc72b976861f8c836","e-742"]},"e-13377":{"id":"e-13377","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4796","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-754"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514,"origin":["6946540cc72b976861f8c836","e-745"]},"e-13378":{"id":"e-13378","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4797","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-753"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514,"origin":["6946540cc72b976861f8c836","e-746"]},"e-13379":{"id":"e-13379","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4800","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-758"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915,"origin":["6946540cc72b976861f8c836","e-680"]},"e-13382":{"id":"e-13382","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4801","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-755"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915,"origin":["6946540cc72b976861f8c836","e-685"]},"e-13380":{"id":"e-13380","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4802","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-757"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915,"origin":["6946540cc72b976861f8c836","e-681"]},"e-13381":{"id":"e-13381","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4803","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-756"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915,"origin":["6946540cc72b976861f8c836","e-682"]},"e-13384":{"id":"e-13384","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4800","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-762"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143e2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143e2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058,"origin":["6946540cc72b976861f8c836","e-679"]},"e-13386":{"id":"e-13386","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4801","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-760"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143e2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143e2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058,"origin":["6946540cc72b976861f8c836","e-684"]},"e-13385":{"id":"e-13385","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4802","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-759"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143e2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143e2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058,"origin":["6946540cc72b976861f8c836","e-683"]},"e-13383":{"id":"e-13383","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4803","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-761"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143e2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143e2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058,"origin":["6946540cc72b976861f8c836","e-678"]},"e-13387":{"id":"e-13387","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4796","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-764"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143ec","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143ec","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631,"origin":["6946540cc72b976861f8c836","e-747"]},"e-13388":{"id":"e-13388","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4797","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-763"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143ec","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143ec","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631,"origin":["6946540cc72b976861f8c836","e-748"]},"e-13389":{"id":"e-13389","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4796","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-766"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143f2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143f2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280,"origin":["6946540cc72b976861f8c836","e-743"]},"e-13390":{"id":"e-13390","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4797","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-765"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143f2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143f2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280,"origin":["6946540cc72b976861f8c836","e-744"]}},"actionLists":{"a-4796":{"id":"a-4796","origin":["6946540cc72b976861f8c836","a-204"],"title":"NavBar Show Line 66","actionItemGroups":[{"actionItems":[{"id":"a-4796-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_liine.rebel-style--is-visible-onhover","selectorGuids":["5415596f-1d2c-077a-8db9-293ac0018413","5415596f-1d2c-077a-8db9-293ac0018439"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4796-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_liine.rebel-style--is-visible-onhover","selectorGuids":["5415596f-1d2c-077a-8db9-293ac0018413","5415596f-1d2c-077a-8db9-293ac0018439"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759361565807},"a-4797":{"id":"a-4797","origin":["6946540cc72b976861f8c836","a-205"],"title":"NavBar OffHover Hide Line 66","actionItemGroups":[{"actionItems":[{"id":"a-4797-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_liine.rebel-style--is-visible-onhover","selectorGuids":["5415596f-1d2c-077a-8db9-293ac0018413","5415596f-1d2c-077a-8db9-293ac0018439"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759361620708},"a-4798":{"id":"a-4798","origin":["6946540cc72b976861f8c836","a-180"],"title":"Navbar menu -> OPEN 4","actionItemGroups":[{"actionItems":[{"id":"a-4798-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-middle","selectorGuids":["fa22426f-c252-632e-8010-74cf0600531d"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-4798-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-bottom","selectorGuids":["fa22426f-c252-632e-8010-74cf06005316"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-4798-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-top","selectorGuids":["fa22426f-c252-632e-8010-74cf0600531b"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-4798-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-top","selectorGuids":["fa22426f-c252-632e-8010-74cf0600531b"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4798-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-bottom","selectorGuids":["fa22426f-c252-632e-8010-74cf06005316"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-4799":{"id":"a-4799","origin":["6946540cc72b976861f8c836","a-181"],"title":"Navbar menu -> CLOSE 4","actionItemGroups":[{"actionItems":[{"id":"a-4799-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-top","selectorGuids":["fa22426f-c252-632e-8010-74cf0600531b"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-4799-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-bottom","selectorGuids":["fa22426f-c252-632e-8010-74cf06005316"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4799-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-top","selectorGuids":["fa22426f-c252-632e-8010-74cf0600531b"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4799-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-bottom","selectorGuids":["fa22426f-c252-632e-8010-74cf06005316"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-4799-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-middle","selectorGuids":["fa22426f-c252-632e-8010-74cf0600531d"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-4800":{"id":"a-4800","origin":["6946540cc72b976861f8c836","a-182"],"title":"Navbar05 -> OPEN 4","actionItemGroups":[{"actionItems":[{"id":"a-4800-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_dropdown-menu","selectorGuids":["fa22426f-c252-632e-8010-74cf06005323"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4800-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_dropdown-icon","selectorGuids":["fa22426f-c252-632e-8010-74cf06005317"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4800-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_dropdown-menu","selectorGuids":["fa22426f-c252-632e-8010-74cf06005323"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626161550593},"a-4801":{"id":"a-4801","origin":["6946540cc72b976861f8c836","a-183"],"title":"Navbar05 -> CLOSE 4","actionItemGroups":[{"actionItems":[{"id":"a-4801-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_dropdown-icon","selectorGuids":["fa22426f-c252-632e-8010-74cf06005317"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4801-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_dropdown-menu","selectorGuids":["fa22426f-c252-632e-8010-74cf06005323"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626161607847},"a-4802":{"id":"a-4802","origin":["6946540cc72b976861f8c836","a-184"],"title":"Navbar05 dropdown (tablet) -> OPEN 4","actionItemGroups":[{"actionItems":[{"id":"a-4802-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_dropdown-menu","selectorGuids":["fa22426f-c252-632e-8010-74cf06005323"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-4802-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_dropdown-menu","selectorGuids":["fa22426f-c252-632e-8010-74cf06005323"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626242958157},"a-4803":{"id":"a-4803","origin":["6946540cc72b976861f8c836","a-185"],"title":"Navbar05 dropdown (tablet) -> CLOSE 4","actionItemGroups":[{"actionItems":[{"id":"a-4803-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_dropdown-menu","selectorGuids":["fa22426f-c252-632e-8010-74cf06005323"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626242958157}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavBar(
    {
        as: _Component = _Builtin.NavbarWrapper,
        settingsNavBarVisibility = true,
        optionsNavBarColor = "Light",
        optionsWhiteNavCardColor = "Light",
        brandLogoBrandLogoVisibility = true,
        brandLogoImage = "",
        brandLogoImageAltText = "__wf_reserved_inherit",
        menuLink1MenuLinkVisibility = true,

        menuLink1MenuLink = {
            href: "#"
        },

        menuLink1MenuLinkText = "Home",
        menuLink2MenuLinkVisibility = true,

        menuLink2MenuLink = {
            href: "#"
        },

        menuLink2MenuLinkText = "The Rebels",
        menuDropdown1MenuDropdownVisibility = true,
        m1Card1Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa0_d542d97d71213306b087706fc9f5ef01_plane.svg",
        m1Card1IconAltText = "__wf_reserved_inherit",
        m1Card1HeadlineTag = "h3",
        m1Card1HeadlineText = "Revenue Strategy",
        m1Card1ParagraphText = "Maximize topline and margin with data-backed strategy",

        m1Card1Link = {
            href: "#"
        },

        m1Card1LinkText = "Maximize Your Topline",
        m1Card2Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa0_d542d97d71213306b087706fc9f5ef01_plane.svg",
        m1Card2IconAltText = "__wf_reserved_inherit",
        m1Card2HeadlineTag = "h3",
        m1Card2HeadlineText = "BRAND ACTIVATION",
        m1Card2ParagraphText = "Create demand and drive bookings with targeted marketing.",
        m1Card2LinkText = "Generate Demand",
        m1Card3Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa2_c9bb3cba00d02a45f7710f7bfd302570_gear.svg",
        m1Card3IconAltText = "__wf_reserved_inherit",
        m1Card3HeadlineTag = "h3",
        m1Card3HeadlineText = "Optimized Distribution",
        m1Card3ParagraphText = "Amplify your presence, control your channels, increase conversions.",
        m1Card4CardIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa1_13f6256409a2a7a3236ad3d688e95c99_labtop-with-cursor.svg",
        m1Card4CardIconAltText = "__wf_reserved_inherit",
        m1Card4HeadlineTag = "h3",
        m1Card4HeadlineText = "Tech Integration",
        m1Card4ParagraphText = "Deploy and align the systems that power your hotel.",
        m1Card4LinkText = "Build Your Engine",
        menuDropdown2MenuDropdownVisibility = true,
        m2Card1Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3a9f_726a15c1e835325a1ae274a424187e88_get-quote.svg",
        m2Card1IconAltText = "__wf_reserved_inherit",
        m2Card2Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa0_d542d97d71213306b087706fc9f5ef01_plane.svg",
        m2Card2IconAltText = "__wf_reserved_inherit",
        m2Card3Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68dee5a4cce74fcb4158c1ab_12ed20033a39e931c05a9bc9a0ea3244_gear.svg",
        m2Card3IconAltText = "__wf_reserved_inherit",
        m2Card3HeadlineTag = "h3",
        m2Card3HeadlineText = "Revenue Toolkits",
        m2Card3Paragraph = "Packed with strategies and resources to help increase revenue.",

        m2Card3Link2 = {
            href: "#"
        },

        m2Card3LinkText = "Tap + Discover",
        m2Card3Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa7_35f9a8f91c072b0c89f6c849cf016af4_revrebel_a-stylish-bartender-wearing-a-dark-canvas-apron-wi__94603.jpeg",
        m2Card3ImageAltText = "__wf_reserved_inherit",
        m2Card4Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa1_13f6256409a2a7a3236ad3d688e95c99_labtop-with-cursor.svg",
        m2Card4IconAltText = "__wf_reserved_inherit",
        m2Card4HeadlineTag = "h3",
        m2Card4HeadlineText = "Client Hub",
        m2Card4Paragraph = "Real-time metrics + a full view of our current engagement or project.",

        m2Card4Link = {
            href: "#"
        },

        m2Card4LinkText = "Get Briefed",
        m2Card4Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa3_e3e49faf91fdbe89bf3b17a7d2f65b34_revrebel_edit_a-medium-shot-captures-a-30yearold-white-man-in-be__83443.jpg",
        m2Card4ImageAltText = "__wf_reserved_inherit",
        menuLink3MenuLinkVisibility = false,
        menuLink3MenuLinkText = "Pricing",

        menuLink3MenuLink = {
            href: "#"
        },

        menuLink4MenuLinkVisibility = false,

        menuLink4MenuLink = {
            href: "#"
        },

        menuLink4MenuLinkText = "Log in",
        menuLink5MenuLinkVisibility = true,

        menuLink5MenuLink = {
            href: "#"
        },

        menuLink5MenuLinkText = "Client Login",
        buttonButtonVisibility = true,

        buttonButtonLink = {
            href: "#"
        },

        buttonButtonText = "Get In Touch",

        m1Card2Link = {
            href: "#"
        },

        m1Card3Link = {
            href: "#"
        },

        m1Card3LinkText = "Connect Strategically",

        m1Card4Link = {
            href: "#"
        },

        optionsColorCardColor = "Light",
        m2Card1HeadlineTag = "h3",
        m2Card1HeadlineText = "CTRLShift Blog",
        m2Card1Paragraph = "Where we share our tips and ideas on generating revenueat your property",

        m2Card1Link = {
            href: "#"
        },

        m2Card1LinkText = "read more",
        m2Card1Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aae_8c9424379024d451e75313095cdbe5ec_revrebel_the-private-courtyard-transforms-into-a-minimalist__83428.jpeg",
        m2Card1ImageAltText = "__wf_reserved_inherit",
        m2Card2HeadlineTag = "h3",
        m2Card2Paragraph = "A collection of trends from the largest travel sites, researchers and companies",
        m2Card2HeadlineText = "Travel Trends",

        m2Card2Link = {
            href: "#"
        },

        m2Card2LinkText = "Explore Trends",
        m2Card2Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aac_c03a47b0e3a13518e259481a39ec9be3_f8c4eb24-5293-46bd-b73f-5950bcef20b0.avif",
        m2Card2ImageAltText = "__wf_reserved_inherit"
    }
) {
    _interactions.useInteractions(_interactionsData);

    const _styleVariantMap = {
        "Light": "",
        "Dark": "w-variant-40473bb4-baf9-fd84-48bf-0619dbc14721"
    };

    const _activeStyleVariant = _styleVariantMap[optionsNavBarColor];

    return settingsNavBarVisibility ? <_Component
        className={`rebel-style--navbar_wrapper ${_activeStyleVariant}`}
        data-w-id="c0db3138-7c73-db77-5331-c684e9d143c9"
        tag="div"
        data-watch="nav-bar"
        config={{
            easing: "ease",
            easing2: "ease",
            duration: 400,
            docHeight: false,
            noScroll: false,
            animation: "default",
            collapse: "medium"
        }}><_Builtin.Block
            className={`rebel-style--navbar_container ${_activeStyleVariant}`}
            tag="div"><_Builtin.Block
                className={`rebel-style--navbar_padding ${_activeStyleVariant}`}
                tag="div"><_Builtin.Block
                    className={`rebel-style--navbar_inner-content-wrapper ${_activeStyleVariant}`}
                    tag="div"><_Builtin.NavbarBrand
                        className={`rebel-style--navbar_logo-link rebel-style--nav-is-open ${_activeStyleVariant}`}
                        options={{
                            href: "#"
                        }}><_Builtin.Block
                            className={`rebel-style--navbar_brand-logo-wrapper ${_activeStyleVariant}`}
                            tag="div">{brandLogoBrandLogoVisibility ? <_Builtin.Image
                                className={`rebel-style--navbar_brand-logo ${_activeStyleVariant}`}
                                width="auto"
                                height="auto"
                                loading="lazy"
                                src={brandLogoImage} /> : null}</_Builtin.Block></_Builtin.NavbarBrand><_Builtin.NavbarMenu
                        className={`rebel-style--navbar_menu-wrapper ${_activeStyleVariant}`}
                        tag="nav"
                        role="navigation"><_Builtin.Block
                            className={`rebel-style--navbar_menu-left ${_activeStyleVariant}`}
                            tag="div">{menuLink1MenuLinkVisibility ? <_Builtin.Link
                                className={`rebel-style--navbar_link ${_activeStyleVariant}`}
                                data-w-id="c0db3138-7c73-db77-5331-c684e9d143d2"
                                button={false}
                                dropdown-1="resize-trigger"
                                dropdown-2="resize-trigger"
                                block="inline"
                                options={menuLink1MenuLink}><_Builtin.Block
                                    className={`rebel-style--navbar_text ${_activeStyleVariant}`}
                                    tag="div"
                                    dropdown-1="font-size-trigger"
                                    dropdown-2="font-size-trigger">{menuLink1MenuLinkText}</_Builtin.Block><_Builtin.Block
                                    className={`rebel-style--navbar_liine rebel-style--is-visible-onhover ${_activeStyleVariant}`}
                                    tag="div"
                                    navbar-line="on-hover" /></_Builtin.Link> : null}{menuLink2MenuLinkVisibility ? <_Builtin.Link
                                className={`rebel-style--navbar_link ${_activeStyleVariant}`}
                                data-w-id="c0db3138-7c73-db77-5331-c684e9d143d5"
                                button={false}
                                dropdown-1="resize-trigger"
                                dropdown-2="."
                                block="inline"
                                options={menuLink2MenuLink}><_Builtin.Block
                                    className={`rebel-style--navbar_text ${_activeStyleVariant}`}
                                    tag="div"
                                    navbar-onclick="dropdown-1"
                                    dropdown-1="font-size-trigger"
                                    dropdown-2="font-size-trigger">{menuLink2MenuLinkText}</_Builtin.Block><_Builtin.Block
                                    className={`rebel-style--navbar_liine rebel-style--is-visible-onhover ${_activeStyleVariant}`}
                                    tag="div"
                                    navbar-line="on-hover" /></_Builtin.Link> : null}{menuDropdown1MenuDropdownVisibility ? <_Builtin.DropdownWrapper
                                className={`rebel-style--navbar_menu-dropdown-wrapper ${_activeStyleVariant}`}
                                data-w-id="c0db3138-7c73-db77-5331-c684e9d143d8"
                                tag="div"
                                dropdown-2="resize-trigger"
                                dropdown-1="trigger"
                                delay={300}
                                hover={false}><_Builtin.DropdownToggle
                                    className={`rebel-style--navbar_menu-dropdown ${_activeStyleVariant}`}
                                    tag="div"><_Builtin.Block
                                        className={`rebel-style--navbar_text ${_activeStyleVariant}`}
                                        tag="div"
                                        dropdown-2="font-size-trigger">{"Solutions"}</_Builtin.Block><_Builtin.HtmlEmbed
                                        className={`rebel-style--navbar_dropdown-icon rebel-style--navbar_line-none ${_activeStyleVariant}`}
                                        dropdown-2="resize-icon-trigger"
                                        value="%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M21.9%2050.8l26%2036.4c.4.6%201.2%201%202%201%200%200%200%200%200%200%20.8-.1%201.5-.4%202-1.1l25.8-36.5c.5-.8.6-1.8.1-2.7%20-.5-.9-1.3-1.4-2.3-1.4H63.3l0-32.8c0-1.4-1.2-2.6-2.6-2.6l-22.6%200c-1.4-.1-2.6%201.1-2.6%202.5v32.7H23.3c-1%200-1.9.5-2.3%201.3%20-.5.8-.4%201.8.1%202.6Z%22%2F%3E%3C%2Fsvg%3E" /></_Builtin.DropdownToggle><_Builtin.DropdownList
                                    className={`rebel-style--navbar_dropdown-menu ${_activeStyleVariant}`}
                                    tag="nav"><_Builtin.Block
                                        className={`rebel-style--navbar_menu-content-wrapper ${_activeStyleVariant}`}
                                        tag="div"><_Builtin.Block
                                            className={`rebel-style--navbar_menu-container ${_activeStyleVariant}`}
                                            tag="div"><_Builtin.Block
                                                className={`rebel-style--navbar_menu-alignment ${_activeStyleVariant}`}
                                                tag="div"><WhiteNavcard
                                                    optionsWhiteNavCardColor={optionsWhiteNavCardColor}
                                                    whiteCard1HeadlineText={m1Card1HeadlineText}
                                                    whiteCard1Paragraph={m1Card1ParagraphText}
                                                    whiteCard1Link={m1Card1Link}
                                                    whiteCard1LinkText={m1Card1LinkText}
                                                    whiteCard1Icon={m1Card1Icon}
                                                    whiteCard1IconAltText={m1Card1IconAltText}
                                                    whiteCard1HeadlineTag={m1Card1HeadlineTag}
                                                    whiteCard2HeadlineTag={m1Card2HeadlineTag}
                                                    whiteCard2HeadlineText={m1Card2HeadlineText}
                                                    whiteCard2Paragraph={m1Card2ParagraphText}
                                                    whiteCard2Link={m1Card2Link}
                                                    whiteCard2LinkText={m1Card2LinkText}
                                                    whiteCard2Icon={m1Card2Icon}
                                                    whiteCard2IconAltText={m1Card2IconAltText}
                                                    whiteCard4HeadlineTag={m1Card3HeadlineTag}
                                                    whiteCard3HeadlineText={m1Card3HeadlineText}
                                                    whiteCard3Paragraph={m1Card3ParagraphText}
                                                    whiteCard3Link={m1Card3Link}
                                                    whiteCard3LinkText={m1Card3LinkText}
                                                    whiteCard3Icon={m1Card3Icon}
                                                    whiteCard3IconAltText={m1Card3IconAltText}
                                                    whiteCard4Paragraph={m1Card4ParagraphText}
                                                    whiteCard4HeadlineText={m1Card4HeadlineText}
                                                    whiteCard4Link={m1Card4Link}
                                                    whiteCard4LinkText={m1Card4LinkText}
                                                    whiteCard4Icon={m1Card4CardIcon}
                                                    whiteCard4IconAltText={m1Card4CardIconAltText} /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper> : null}{menuDropdown2MenuDropdownVisibility ? <_Builtin.DropdownWrapper
                                className={`rebel-style--navbar_menu-dropdown-wrapper ${_activeStyleVariant}`}
                                data-w-id="c0db3138-7c73-db77-5331-c684e9d143e2"
                                tag="div"
                                dropdown-1="resize-trigger"
                                dropdown-2="trigger"
                                delay={300}
                                hover={false}><_Builtin.DropdownToggle
                                    className={`rebel-style--navbar_menu-dropdown ${_activeStyleVariant}`}
                                    tag="div"
                                    dropdown-1="resize-trigger"
                                    dropdown-2="resize-trigger"><_Builtin.Block
                                        className={`rebel-style--navbar_text ${_activeStyleVariant}`}
                                        tag="div"
                                        dropdown-1="font-size-trigger">{"Resources"}</_Builtin.Block><_Builtin.HtmlEmbed
                                        className={`rebel-style--navbar_dropdown-icon rebel-style--navbar_line-none ${_activeStyleVariant}`}
                                        dropdown-1="resize-icon-trigger"
                                        value="%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M21.9%2050.8l26%2036.4c.4.6%201.2%201%202%201%200%200%200%200%200%200%20.8-.1%201.5-.4%202-1.1l25.8-36.5c.5-.8.6-1.8.1-2.7%20-.5-.9-1.3-1.4-2.3-1.4H63.3l0-32.8c0-1.4-1.2-2.6-2.6-2.6l-22.6%200c-1.4-.1-2.6%201.1-2.6%202.5v32.7H23.3c-1%200-1.9.5-2.3%201.3%20-.5.8-.4%201.8.1%202.6Z%22%2F%3E%3C%2Fsvg%3E" /></_Builtin.DropdownToggle><_Builtin.DropdownList
                                    className={`rebel-style--navbar_dropdown-menu ${_activeStyleVariant}`}
                                    tag="nav"><_Builtin.Block
                                        className={`rebel-style--navbar_menu-content-wrapper ${_activeStyleVariant}`}
                                        tag="div"><_Builtin.Block
                                            className={`rebel-style--navbar_menu-container ${_activeStyleVariant}`}
                                            tag="div"><_Builtin.Block
                                                className={`rebel-style--navbar_menu-alignment ${_activeStyleVariant}`}
                                                tag="div"><ColorNavcard
                                                    optionsColorCardColor={optionsColorCardColor}
                                                    colorCard1Icon={m2Card1Icon}
                                                    colorCard1IconAltText={m2Card1IconAltText}
                                                    colorCard1HeadlineTag={m2Card1HeadlineTag}
                                                    colorCard1HeadlineText={m2Card1HeadlineText}
                                                    colorCard1Paragraph={m2Card1Paragraph}
                                                    colorCard1Link={m2Card1Link}
                                                    colorCard1LinkText={m2Card1LinkText}
                                                    colorCard1Image={m2Card1Image}
                                                    colorCard1ImageAltText={m2Card1ImageAltText}
                                                    colorCard2Icon={m2Card2Icon}
                                                    colorCard2IconAltText={m2Card2IconAltText}
                                                    colorCard2HeadlineTag={m2Card2HeadlineTag}
                                                    colorCard2Paragraph={m2Card2Paragraph}
                                                    colorCard2HeadlineText={m2Card2HeadlineText}
                                                    colorCard2Link={m2Card2Link}
                                                    colorCard2LinkText={m2Card2LinkText}
                                                    colorCard2Image={m2Card2Image}
                                                    colorCard2ImageAltText={m2Card2ImageAltText}
                                                    colorCard3Icon={m2Card3Icon}
                                                    colorCard3IconAltText={m2Card3IconAltText}
                                                    colorCard3HeadlineTag={m2Card3HeadlineTag}
                                                    colorCard3HeadlineText={m2Card3HeadlineText}
                                                    colorCard3Paragraph={m2Card3Paragraph}
                                                    colorCard3Link={m2Card3Link2}
                                                    colorCard3LinkText={m2Card3LinkText}
                                                    colorCard3Image={m2Card3Image}
                                                    colorCard3ImageAltText={m2Card3ImageAltText}
                                                    colorCard4LinkText={m2Card4LinkText}
                                                    colorCard4Icon={m2Card4Icon}
                                                    colorCard4HeadlineTag={m2Card4HeadlineTag}
                                                    colorCard4HeadlineText={m2Card4HeadlineText}
                                                    colorCard4Paragraph={m2Card4Paragraph}
                                                    colorCard4Link={m2Card4Link}
                                                    colorCard4Image={m2Card4Image}
                                                    colorCard4IconAltText={m2Card4IconAltText}
                                                    colorCard4ImageAltText={m2Card4ImageAltText} /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper> : null}{menuLink3MenuLinkVisibility ? <_Builtin.Link
                                className={`rebel-style--navbar_link ${_activeStyleVariant}`}
                                data-w-id="c0db3138-7c73-db77-5331-c684e9d143ec"
                                button={false}
                                dropdown-1="resize-trigger"
                                dropdown-2="resize-trigger"
                                block="inline"
                                options={menuLink3MenuLink}><_Builtin.Block
                                    className={`rebel-style--navbar_text ${_activeStyleVariant}`}
                                    tag="div"
                                    dropdown-1="font-size-trigger"
                                    dropdown-2="font-size-trigger">{menuLink3MenuLinkText}</_Builtin.Block><_Builtin.Block
                                    className={`rebel-style--navbar_liine rebel-style--is-visible-onhover ${_activeStyleVariant}`}
                                    tag="div" /></_Builtin.Link> : null}</_Builtin.Block><_Builtin.Block
                            className={`rebel-style--navbar_menu-right ${_activeStyleVariant}`}
                            tag="div">{menuLink4MenuLinkVisibility ? <_Builtin.Link
                                className={`rebel-style--navbar_link ${_activeStyleVariant}`}
                                button={false}
                                dropdown-1="resize-trigger"
                                dropdown-2="resize-trigger"
                                block="inline"
                                options={menuLink4MenuLink}><_Builtin.Block
                                    className={`rebel-style--navbar_text ${_activeStyleVariant}`}
                                    tag="div"
                                    dropdown-1="font-size-trigger"
                                    dropdown-2="font-size-trigger">{menuLink4MenuLinkText}</_Builtin.Block></_Builtin.Link> : null}{menuLink5MenuLinkVisibility ? <_Builtin.Link
                                className={`rebel-style--navbar_link ${_activeStyleVariant}`}
                                data-w-id="c0db3138-7c73-db77-5331-c684e9d143f2"
                                button={false}
                                dropdown-1="resize-trigger"
                                dropdown-2="resize-trigger"
                                block="inline"
                                options={menuLink5MenuLink}><_Builtin.Block
                                    className={`rebel-style--navbar_text ${_activeStyleVariant}`}
                                    tag="div"
                                    dropdown-1="font-size-trigger"
                                    dropdown-2="font-size-trigger">{menuLink5MenuLinkText}</_Builtin.Block><_Builtin.Block
                                    className={`rebel-style--navbar_liine rebel-style--is-visible-onhover ${_activeStyleVariant}`}
                                    tag="div"
                                    navbar-line="on-hover" /></_Builtin.Link> : null}<_Builtin.Block
                                className={`rebel-style--navbar_button-wrapper ${_activeStyleVariant}`}
                                tag="div">{buttonButtonVisibility ? <_Builtin.Link
                                    className={`rebel-style--button rebel-style--is-btn-sm rebel-style--flex-align_left ${_activeStyleVariant}`}
                                    button={false}
                                    dropdown-1="resize-trigger"
                                    dropdown-2="resize-trigger"
                                    block="inline"
                                    options={buttonButtonLink}><_Builtin.Block
                                        className={`rebel-style--navbar_text rebel-style--text-color-4 ${_activeStyleVariant}`}
                                        tag="div"
                                        dropdown-1="font-size-trigger"
                                        dropdown-2="font-size-trigger">{buttonButtonText}</_Builtin.Block></_Builtin.Link> : null}</_Builtin.Block></_Builtin.Block></_Builtin.NavbarMenu><_Builtin.NavbarButton
                        className={`rebel-style--navbar_menu-button ${_activeStyleVariant}`}
                        tag="div"><_Builtin.Block
                            className={`rebel-style--menu-icon_component ${_activeStyleVariant}`}
                            tag="div"><_Builtin.Block
                                className={`rebel-style--menu-icon_line-top ${_activeStyleVariant}`}
                                tag="div" /><_Builtin.Block
                                className={`rebel-style--menu-icon_line-middle ${_activeStyleVariant}`}
                                tag="div"><_Builtin.Block
                                    className={`rebel-style--menu-icon_line-middle-inner ${_activeStyleVariant}`}
                                    tag="div" /></_Builtin.Block><_Builtin.Block
                                className={`rebel-style--menu-icon_line-bottom ${_activeStyleVariant}`}
                                tag="div" /></_Builtin.Block></_Builtin.NavbarButton></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Component> : null;
}