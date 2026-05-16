"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../../devlinkScope";
import Block from "../../webflow_modules/Basic/components/Block";
import BlockContainer from "../../webflow_modules/Layout/components/BlockContainer";
import DropdownList from "../../webflow_modules/Dropdown/components/DropdownList";
import DropdownToggle from "../../webflow_modules/Dropdown/components/DropdownToggle";
import DropdownWrapper from "../../webflow_modules/Dropdown/components/DropdownWrapper";
import HtmlEmbed from "../../webflow_modules/Embed/components/HtmlEmbed";
import Image from "../../webflow_modules/Basic/components/Image";
import Link from "../../webflow_modules/Basic/components/Link";
import NavbarBrand from "../../webflow_modules/Navbar/components/NavbarBrand";
import NavbarButton from "../../webflow_modules/Navbar/components/NavbarButton";
import NavbarMenu from "../../webflow_modules/Navbar/components/NavbarMenu";
import NavbarWrapper from "../../webflow_modules/Navbar/components/NavbarWrapper";
import * as _interactions from "../../webflow_modules/interactions";
import { GlobalStyles } from "../globals/GlobalStyles";

const _interactionsData = JSON.parse(
  '{"events":{"e-50967":{"id":"e-50967","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22181","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-749"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb1b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb1b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915,"origin":["6a08e7cb405c19ccffa3d4b7","e-677"]},"e-50966":{"id":"e-50966","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22182","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-750"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb1b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb1b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915,"origin":["6a08e7cb405c19ccffa3d4b7","e-676"]},"e-50968":{"id":"e-50968","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22187","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-752"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb27","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb27","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687761,"origin":["6a08e7cb405c19ccffa3d4b7","e-741"]},"e-50969":{"id":"e-50969","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22188","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-751"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb27","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb27","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687764,"origin":["6a08e7cb405c19ccffa3d4b7","e-742"]},"e-50970":{"id":"e-50970","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22187","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-754"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb2a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb2a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514,"origin":["6a08e7cb405c19ccffa3d4b7","e-745"]},"e-50971":{"id":"e-50971","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22188","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-753"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb2a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb2a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514,"origin":["6a08e7cb405c19ccffa3d4b7","e-746"]},"e-50972":{"id":"e-50972","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22183","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-758"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb2d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb2d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915,"origin":["6a08e7cb405c19ccffa3d4b7","e-680"]},"e-50975":{"id":"e-50975","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22184","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-755"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb2d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb2d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915,"origin":["6a08e7cb405c19ccffa3d4b7","e-685"]},"e-50973":{"id":"e-50973","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22185","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-757"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb2d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb2d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915,"origin":["6a08e7cb405c19ccffa3d4b7","e-681"]},"e-50974":{"id":"e-50974","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22186","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-756"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb2d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb2d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915,"origin":["6a08e7cb405c19ccffa3d4b7","e-682"]},"e-50977":{"id":"e-50977","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22183","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-762"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb40","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb40","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058,"origin":["6a08e7cb405c19ccffa3d4b7","e-679"]},"e-50979":{"id":"e-50979","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22184","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-760"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb40","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb40","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058,"origin":["6a08e7cb405c19ccffa3d4b7","e-684"]},"e-50978":{"id":"e-50978","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22185","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-759"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb40","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb40","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058,"origin":["6a08e7cb405c19ccffa3d4b7","e-683"]},"e-50976":{"id":"e-50976","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22186","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-761"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb40","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb40","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058,"origin":["6a08e7cb405c19ccffa3d4b7","e-678"]},"e-50980":{"id":"e-50980","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22187","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-764"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb53","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb53","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631,"origin":["6a08e7cb405c19ccffa3d4b7","e-747"]},"e-50981":{"id":"e-50981","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22188","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-763"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb53","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb53","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631,"origin":["6a08e7cb405c19ccffa3d4b7","e-748"]},"e-50982":{"id":"e-50982","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22187","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1027"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb57","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb57","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1770142993312,"origin":["6a08e7cb405c19ccffa3d4b7","e-1008"]},"e-50983":{"id":"e-50983","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22188","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1026"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb57","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb57","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1770142993317,"origin":["6a08e7cb405c19ccffa3d4b7","e-1009"]},"e-50984":{"id":"e-50984","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22187","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-766"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb5a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb5a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280,"origin":["6a08e7cb405c19ccffa3d4b7","e-743"]},"e-50985":{"id":"e-50985","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22188","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-765"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb5a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"086cf11f-67e2-6c35-1242-b7000bf8fb5a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280,"origin":["6a08e7cb405c19ccffa3d4b7","e-744"]},"e-51074":{"id":"e-51074","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22187","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-51075"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_link-block","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_link-block","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418908493,"origin":["6a08e7cb405c19ccffa3d4b7","e-769"]},"e-51075":{"id":"e-51075","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22188","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-51074"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_link-block","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_link-block","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418908497,"origin":["6a08e7cb405c19ccffa3d4b7","e-770"]},"e-51080":{"id":"e-51080","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22187","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-51081"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2599fd81-a003-972b-f2af-9cbbcf3451fc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2599fd81-a003-972b-f2af-9cbbcf3451fc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418482469,"origin":["6a08e7cb405c19ccffa3d4b7","e-767"]},"e-51081":{"id":"e-51081","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22188","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-51080"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2599fd81-a003-972b-f2af-9cbbcf3451fc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2599fd81-a003-972b-f2af-9cbbcf3451fc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418482469,"origin":["6a08e7cb405c19ccffa3d4b7","e-768"]},"e-51076":{"id":"e-51076","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22187","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-51077"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_link","originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_link","originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759419216572,"origin":["6a08e7cb405c19ccffa3d4b7","e-771"]},"e-51077":{"id":"e-51077","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22188","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-51076"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_link","originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_link","originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759419216576,"origin":["6a08e7cb405c19ccffa3d4b7","e-772"]}},"actionLists":{"a-22181":{"id":"a-22181","origin":["6a08e7cb405c19ccffa3d4b7","a-180"],"title":"Navbar menu -> OPEN 4","actionItemGroups":[{"actionItems":[{"id":"a-22181-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-middle","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c5982868"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-22181-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-bottom","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c5982862"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-22181-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-top","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c5982867"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-22181-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-top","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c5982867"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-22181-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-bottom","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c5982862"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-22182":{"id":"a-22182","origin":["6a08e7cb405c19ccffa3d4b7","a-181"],"title":"Navbar menu -> CLOSE 4","actionItemGroups":[{"actionItems":[{"id":"a-22182-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-top","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c5982867"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-22182-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-bottom","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c5982862"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-22182-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-top","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c5982867"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-22182-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-bottom","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c5982862"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-22182-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--menu-icon_line-middle","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c5982868"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-22187":{"id":"a-22187","origin":["6a08e7cb405c19ccffa3d4b7","a-204"],"title":"NavBar Show Line 3","actionItemGroups":[{"actionItems":[{"id":"a-22187-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_liine.rebel-style--is-visible-onhover","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c5982873","092dd9bd-ca4f-2bf4-9c9f-e9c0c5982883"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22187-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_liine.rebel-style--is-visible-onhover","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c5982873","092dd9bd-ca4f-2bf4-9c9f-e9c0c5982883"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759361565807},"a-22188":{"id":"a-22188","origin":["6a08e7cb405c19ccffa3d4b7","a-205"],"title":"NavBar OffHover Hide Line 3","actionItemGroups":[{"actionItems":[{"id":"a-22188-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_liine.rebel-style--is-visible-onhover","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c5982873","092dd9bd-ca4f-2bf4-9c9f-e9c0c5982883"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759361620708},"a-22183":{"id":"a-22183","origin":["6a08e7cb405c19ccffa3d4b7","a-182"],"title":"Navbar05 -> OPEN 4","actionItemGroups":[{"actionItems":[{"id":"a-22183-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_dropdown-menu","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c598286e"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22183-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_dropdown-icon","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c5982863"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-22183-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_dropdown-menu","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c598286e"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626161550593},"a-22184":{"id":"a-22184","origin":["6a08e7cb405c19ccffa3d4b7","a-183"],"title":"Navbar05 -> CLOSE 4","actionItemGroups":[{"actionItems":[{"id":"a-22184-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_dropdown-icon","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c5982863"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-22184-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_dropdown-menu","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c598286e"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626161607847},"a-22185":{"id":"a-22185","origin":["6a08e7cb405c19ccffa3d4b7","a-184"],"title":"Navbar05 dropdown (tablet) -> OPEN 4","actionItemGroups":[{"actionItems":[{"id":"a-22185-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_dropdown-menu","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c598286e"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-22185-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_dropdown-menu","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c598286e"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626242958157},"a-22186":{"id":"a-22186","origin":["6a08e7cb405c19ccffa3d4b7","a-185"],"title":"Navbar05 dropdown (tablet) -> CLOSE 4","actionItemGroups":[{"actionItems":[{"id":"a-22186-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_dropdown-menu","selectorGuids":["092dd9bd-ca4f-2bf4-9c9f-e9c0c598286e"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626242958157}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavigationBar({
  brandLogoBrandLogoVisibility = true,
  brandLogoImage = "",
  brandLogoImageAltText = "__wf_reserved_inherit",

  brandLogoLogoLink = {
    href: "#",
  },

  buttonButton,
  menuDropdown1DropdownMenu1Card1,
  menuDropdown1DropdownMenu1Card2,
  menuDropdown1DropdownMenu1Card3,
  menuDropdown1DropdownMenu1Card4,
  menuDropdown1DropdownMenu1MenuVisibility = true,
  menuDropdown2DropdownMenu2Card1,
  menuDropdown2DropdownMenu2Card2,
  menuDropdown2DropdownMenu2Card3,
  menuDropdown2DropdownMenu2Card4,
  menuDropdown2DropdownMenu2MenuVisibility = true,

  menuLink1MenuLink = {
    href: "#",
  },

  menuLink1MenuLinkText = "Home",
  menuLink1MenuLinkVisibility = true,

  menuLink2MenuLink = {
    href: "#",
  },

  menuLink2MenuLinkText = "The Rebels",
  menuLink2MenuLinkVisibility = true,

  menuLink3MenuLink = {
    href: "#",
  },

  menuLink3MenuLinkText = "Pricing",
  menuLink3MenuLinkVisibility = false,

  menuLink4MenuLink = {
    href: "#",
  },

  menuLink4MenuLinkText = "Log in",
  menuLink4MenuLinkVisibility = true,

  menuLink5MenuLink = {
    href: "#",
  },

  menuLink5MenuLinkText = "Client Login",
  menuLink5MenuLinkVisibility = true,
  settingsNavigationColor = "Light",
  settingsNavigationVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-40473bb4-baf9-fd84-48bf-0619dbc14721",
  };

  const _activeStyleVariant = _styleVariantMap[settingsNavigationColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsNavigationVisibility ? (
        <NavbarWrapper
          className={`rebel-style--navbar_wrapper ${_activeStyleVariant}`}
          config={{
            easing: "ease",
            easing2: "ease",
            duration: 400,
            docHeight: true,
            noScroll: false,
            animation: "default",
            collapse: "medium",
          }}
          data-nav-open={"False"}
          data-w-id={"086cf11f-67e2-6c35-1242-b7000bf8fb1b"}
          data-watch={"nav-bar"}
          tag={"div"}
        >
          <GlobalStyles />
          <HtmlEmbed
            className={`rebel-style--embed_navbar ${_activeStyleVariant}`}
            content={""}
            value={
              "%3Cstyle%3E%0A%0Ahtml.wf-design-mode%20%5Bdata-nav-open%3D%22True%22%5D%20.w-nav-menu%20%7B%0A%20%20display%3A%20flex%20!important%3B%0A%20%20opacity%3A%201%20!important%3B%0A%20%20visibility%3A%20visible%20!important%3B%0A%20%20transform%3A%20none%20!important%3B%0A%7D%0A%0Ahtml.wf-design-mode%20%5Bdata-nav-dropdown-1%3D%22True%22%5D%20.w-dropdown-list%20%7B%0A%20%20display%3A%20block%20!important%3B%0A%20%20opacity%3A%201%20!important%3B%0A%20%20visibility%3A%20visible%20!important%3B%0A%20%20transform%3A%20none%20!important%3B%0A%7D%0A%0A%0Ahtml.wf-design-mode%20%5Bdata-nav-dropdown-2%3D%22True%22%5D%20.w-dropdown-list%20%7B%0A%20%20display%3A%20block%20!important%3B%0A%20%20opacity%3A%201%20!important%3B%0A%20%20visibility%3A%20visible%20!important%3B%0A%20%20transform%3A%20none%20!important%3B%0A%7D%0A%0A.w-dropdown-btn%2C%20.w-dropdown-toggle%2C%20.w-dropdown-link%20%7B%0A%09color%3A%20inherit%20!important%3B%0A%7D%0A%0A%3C%2Fstyle%3E"
            }
          />
          <BlockContainer
            className={`rebel-style--navbar_container ${_activeStyleVariant}`}
            grid={{
              type: "container",
            }}
            tag={"div"}
          >
            <Block
              className={`rebel-style--navbar_padding ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`rebel-style--navbar_inner-content-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                <NavbarBrand
                  className={`rebel-style--navbar_logo-link rebel-style--nav-is-open ${_activeStyleVariant}`}
                  options={brandLogoLogoLink}
                >
                  <Block
                    className={`rebel-style--navbar_brand-logo-wrapper ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`rebel-style--navbar_brand-logo-size ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      {brandLogoBrandLogoVisibility ? (
                        <Image
                          className={`rebel-style--navbar_brand-logo ${_activeStyleVariant}`}
                          height={"auto"}
                          loading={"lazy"}
                          src={brandLogoImage}
                          width={"auto"}
                        />
                      ) : null}
                    </Block>
                  </Block>
                </NavbarBrand>
                <NavbarMenu
                  className={`rebel-style--navbar_menu-wrapper ${_activeStyleVariant}`}
                  role={"navigation"}
                  tag={"nav"}
                >
                  <Block
                    className={`rebel-style--navbar_menu-left ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {menuLink1MenuLinkVisibility ? (
                      <Link
                        block={"inline"}
                        button={false}
                        className={`rebel-style--navbar_link ${_activeStyleVariant}`}
                        data-w-id={"086cf11f-67e2-6c35-1242-b7000bf8fb27"}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"resize-trigger"}
                        options={menuLink1MenuLink}
                      >
                        <Block
                          className={`rebel-style--navbar_text ${_activeStyleVariant}`}
                          dropdown-1={"font-size-trigger"}
                          dropdown-2={"font-size-trigger"}
                          tag={"div"}
                        >
                          {menuLink1MenuLinkText}
                        </Block>
                        <Block
                          className={`rebel-style--navbar_liine rebel-style--is-visible-onhover ${_activeStyleVariant}`}
                          navbar-line={"on-hover"}
                          tag={"div"}
                        />
                      </Link>
                    ) : null}
                    {menuLink2MenuLinkVisibility ? (
                      <Link
                        block={"inline"}
                        button={false}
                        className={`rebel-style--navbar_link ${_activeStyleVariant}`}
                        data-w-id={"086cf11f-67e2-6c35-1242-b7000bf8fb2a"}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"."}
                        options={menuLink2MenuLink}
                      >
                        <Block
                          className={`rebel-style--navbar_text ${_activeStyleVariant}`}
                          dropdown-1={"font-size-trigger"}
                          dropdown-2={"font-size-trigger"}
                          navbar-onclick={"dropdown-1"}
                          tag={"div"}
                        >
                          {menuLink2MenuLinkText}
                        </Block>
                        <Block
                          className={`rebel-style--navbar_liine rebel-style--is-visible-onhover ${_activeStyleVariant}`}
                          navbar-line={"on-hover"}
                          tag={"div"}
                        />
                      </Link>
                    ) : null}
                    {menuDropdown1DropdownMenu1MenuVisibility ? (
                      <DropdownWrapper
                        className={`rebel-style--navbar_menu-dropdown-wrapper ${_activeStyleVariant}`}
                        data-nav-dropdown-1={"False"}
                        data-w-id={"086cf11f-67e2-6c35-1242-b7000bf8fb2d"}
                        delay={300}
                        dropdown-1={"trigger"}
                        dropdown-2={"resize-trigger"}
                        hover={false}
                        tag={"div"}
                      >
                        <DropdownToggle
                          className={`rebel-style--navbar_menu-dropdown ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Block
                            className={`rebel-style--navbar_dropdown_wrapper ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Block
                              className={`rebel-style--navbar_text ${_activeStyleVariant}`}
                              dropdown-2={"font-size-trigger"}
                              tag={"div"}
                            >
                              {"Solutions"}
                            </Block>
                            <HtmlEmbed
                              className={`rebel-style--navbar_dropdown-icon rebel-style--navbar_line-none ${_activeStyleVariant}`}
                              content={""}
                              dropdown-2={"resize-icon-trigger"}
                              value={
                                "%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M21.9%2050.8l26%2036.4c.4.6%201.2%201%202%201%200%200%200%200%200%200%20.8-.1%201.5-.4%202-1.1l25.8-36.5c.5-.8.6-1.8.1-2.7%20-.5-.9-1.3-1.4-2.3-1.4H63.3l0-32.8c0-1.4-1.2-2.6-2.6-2.6l-22.6%200c-1.4-.1-2.6%201.1-2.6%202.5v32.7H23.3c-1%200-1.9.5-2.3%201.3%20-.5.8-.4%201.8.1%202.6Z%22%2F%3E%3C%2Fsvg%3E"
                              }
                            />
                          </Block>
                          <Block
                            className={`rebel-style--navbar_liine rebel-style--is-visible-onhover ${_activeStyleVariant}`}
                            navbar-line={"on-hover"}
                            tag={"div"}
                          />
                        </DropdownToggle>
                        <DropdownList
                          className={`rebel-style--navbar_dropdown-menu ${_activeStyleVariant}`}
                          tag={"nav"}
                        >
                          <Block
                            className={`rebel-style--navbar_menu-content-wrapper ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Block
                              className={`rebel-style--navbar_menu-container ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              <Block
                                className={`rebel-style--navcard_dropdown-container ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                <Block
                                  className={`rebel-style--navcard-wrapper ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {menuDropdown1DropdownMenu1Card1}
                                </Block>
                                <Block
                                  className={`rebel-style--navcard-wrapper ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {menuDropdown1DropdownMenu1Card2}
                                </Block>
                                <Block
                                  className={`rebel-style--navcard-wrapper ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {menuDropdown1DropdownMenu1Card3}
                                </Block>
                                <Block
                                  className={`rebel-style--navcard-wrapper ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {menuDropdown1DropdownMenu1Card4}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                        </DropdownList>
                      </DropdownWrapper>
                    ) : null}
                    {menuDropdown2DropdownMenu2MenuVisibility ? (
                      <DropdownWrapper
                        className={`rebel-style--navbar_menu-dropdown-wrapper ${_activeStyleVariant}`}
                        data-nav-dropdown-2={"False"}
                        data-w-id={"086cf11f-67e2-6c35-1242-b7000bf8fb40"}
                        delay={300}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"resize-trigger"}
                        hover={false}
                        tag={"div"}
                      >
                        <DropdownToggle
                          className={`rebel-style--navbar_menu-dropdown ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Block
                            className={`rebel-style--navbar_dropdown_wrapper ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Block
                              className={`rebel-style--navbar_text ${_activeStyleVariant}`}
                              dropdown-1={"font-size-trigger"}
                              tag={"div"}
                            >
                              {"Resources"}
                            </Block>
                            <HtmlEmbed
                              className={`rebel-style--navbar_dropdown-icon rebel-style--navbar_line-none ${_activeStyleVariant}`}
                              content={""}
                              dropdown-1={"resize-icon-trigger"}
                              value={
                                "%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M21.9%2050.8l26%2036.4c.4.6%201.2%201%202%201%200%200%200%200%200%200%20.8-.1%201.5-.4%202-1.1l25.8-36.5c.5-.8.6-1.8.1-2.7%20-.5-.9-1.3-1.4-2.3-1.4H63.3l0-32.8c0-1.4-1.2-2.6-2.6-2.6l-22.6%200c-1.4-.1-2.6%201.1-2.6%202.5v32.7H23.3c-1%200-1.9.5-2.3%201.3%20-.5.8-.4%201.8.1%202.6Z%22%2F%3E%3C%2Fsvg%3E"
                              }
                            />
                          </Block>
                          <Block
                            className={`rebel-style--navbar_liine rebel-style--is-visible-onhover ${_activeStyleVariant}`}
                            navbar-line={"on-hover"}
                            tag={"div"}
                          />
                        </DropdownToggle>
                        <DropdownList
                          className={`rebel-style--navbar_dropdown-menu ${_activeStyleVariant}`}
                          tag={"nav"}
                        >
                          <Block
                            className={`rebel-style--navbar_menu-content-wrapper ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Block
                              className={`rebel-style--navbar_menu-container ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              <Block
                                className={`rebel-style--navcard_dropdown-container ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                <Block
                                  className={`rebel-style--navcard-wrapper ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {menuDropdown2DropdownMenu2Card1}
                                </Block>
                                <Block
                                  className={`rebel-style--navcard-wrapper ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {menuDropdown2DropdownMenu2Card2}
                                </Block>
                                <Block
                                  className={`rebel-style--navcard-wrapper ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {menuDropdown2DropdownMenu2Card3}
                                </Block>
                                <Block
                                  className={`rebel-style--navcard-wrapper ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {menuDropdown2DropdownMenu2Card4}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                        </DropdownList>
                      </DropdownWrapper>
                    ) : null}
                    {menuLink3MenuLinkVisibility ? (
                      <Link
                        block={"inline"}
                        button={false}
                        className={`rebel-style--navbar_link ${_activeStyleVariant}`}
                        data-w-id={"086cf11f-67e2-6c35-1242-b7000bf8fb53"}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"resize-trigger"}
                        options={menuLink3MenuLink}
                      >
                        <Block
                          className={`rebel-style--navbar_text ${_activeStyleVariant}`}
                          dropdown-1={"font-size-trigger"}
                          dropdown-2={"font-size-trigger"}
                          tag={"div"}
                        >
                          {menuLink3MenuLinkText}
                        </Block>
                        <Block
                          className={`rebel-style--navbar_liine rebel-style--is-visible-onhover ${_activeStyleVariant}`}
                          tag={"div"}
                        />
                      </Link>
                    ) : null}
                  </Block>
                  <Block
                    className={`rebel-style--navbar_menu-right ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {menuLink4MenuLinkVisibility ? (
                      <Link
                        block={"inline"}
                        button={false}
                        className={`rebel-style--navbar_link ${_activeStyleVariant}`}
                        data-w-id={"086cf11f-67e2-6c35-1242-b7000bf8fb57"}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"resize-trigger"}
                        options={menuLink4MenuLink}
                      >
                        <Block
                          className={`rebel-style--navbar_text ${_activeStyleVariant}`}
                          dropdown-1={"font-size-trigger"}
                          dropdown-2={"font-size-trigger"}
                          tag={"div"}
                        >
                          {menuLink4MenuLinkText}
                        </Block>
                        <Block
                          className={`rebel-style--navbar_liine rebel-style--is-visible-onhover ${_activeStyleVariant}`}
                          navbar-line={"on-hover"}
                          tag={"div"}
                        />
                      </Link>
                    ) : null}
                    {menuLink5MenuLinkVisibility ? (
                      <Link
                        block={"inline"}
                        button={false}
                        className={`rebel-style--navbar_link ${_activeStyleVariant}`}
                        data-w-id={"086cf11f-67e2-6c35-1242-b7000bf8fb5a"}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"resize-trigger"}
                        options={menuLink5MenuLink}
                      >
                        <Block
                          className={`rebel-style--navbar_text ${_activeStyleVariant}`}
                          dropdown-1={"font-size-trigger"}
                          dropdown-2={"font-size-trigger"}
                          tag={"div"}
                        >
                          {menuLink5MenuLinkText}
                        </Block>
                        <Block
                          className={`rebel-style--navbar_liine rebel-style--is-visible-onhover ${_activeStyleVariant}`}
                          navbar-line={"on-hover"}
                          tag={"div"}
                        />
                      </Link>
                    ) : null}
                    <Block
                      className={`rebel-style--navbar_link rebel-style--padding-right_none ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`rebel-style--navbar_button-alignment rebel-style--navbar_link ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {buttonButton}
                      </Block>
                    </Block>
                  </Block>
                </NavbarMenu>
                <NavbarButton
                  className={`rebel-style--navbar_menu-button ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`rebel-style--menu-icon_component ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`rebel-style--menu-icon_line-top ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`rebel-style--menu-icon_line-middle ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`rebel-style--menu-icon_line-middle-inner ${_activeStyleVariant}`}
                        tag={"div"}
                      />
                    </Block>
                    <Block
                      className={`rebel-style--menu-icon_line-bottom ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                  </Block>
                </NavbarButton>
              </Block>
            </Block>
          </BlockContainer>
        </NavbarWrapper>
      ) : null}
    </div>
  );
}
