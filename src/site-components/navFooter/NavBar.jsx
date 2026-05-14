"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import DropdownList from "../webflow_modules/Dropdown/components/DropdownList";
import DropdownToggle from "../webflow_modules/Dropdown/components/DropdownToggle";
import DropdownWrapper from "../webflow_modules/Dropdown/components/DropdownWrapper";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";
import NavbarBrand from "../webflow_modules/Navbar/components/NavbarBrand";
import NavbarButton from "../webflow_modules/Navbar/components/NavbarButton";
import NavbarMenu from "../webflow_modules/Navbar/components/NavbarMenu";
import NavbarWrapper from "../webflow_modules/Navbar/components/NavbarWrapper";
import * as _interactions from "../webflow_modules/interactions";
import { ColorNavcardRecovered } from "../zzComponentsParts/ColorNavcardRecovered";
import { WhiteNavcard } from "../rebelStyle/zzComponentsParts/WhiteNavcard";

const _interactionsData = JSON.parse(
  '{"events":{"e-6726":{"id":"e-6726","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1894","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-749"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bd4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bd4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-6725":{"id":"e-6725","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1895","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-750"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bd4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bd4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-6727":{"id":"e-6727","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1892","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-752"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bdd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bdd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687761},"e-6728":{"id":"e-6728","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1893","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-751"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bdd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bdd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687764},"e-6729":{"id":"e-6729","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1892","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-754"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3be0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3be0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-6730":{"id":"e-6730","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1893","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-753"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3be0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3be0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-6731":{"id":"e-6731","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1896","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-758"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3be3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3be3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-6734":{"id":"e-6734","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1897","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-755"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3be3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3be3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-6732":{"id":"e-6732","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1898","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-757"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3be3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3be3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-6733":{"id":"e-6733","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1899","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-756"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3be3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3be3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-6736":{"id":"e-6736","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1896","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-762"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bed","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bed","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-6738":{"id":"e-6738","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1897","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-760"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bed","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bed","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-6737":{"id":"e-6737","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1898","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-759"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bed","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bed","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-6735":{"id":"e-6735","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1899","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-761"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bed","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bed","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-6739":{"id":"e-6739","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1892","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-764"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bf7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bf7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-6740":{"id":"e-6740","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1893","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-763"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bf7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bf7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-6741":{"id":"e-6741","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1892","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-766"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bfd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bfd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280},"e-6742":{"id":"e-6742","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1893","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-765"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bfd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"41b9e1ea-64d8-92d1-4a86-1ed604ca3bfd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280},"e-6721":{"id":"e-6721","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1892","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6694"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418908493},"e-6722":{"id":"e-6722","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1893","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6693"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418908497},"e-6723":{"id":"e-6723","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1892","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6696"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759419216572},"e-6724":{"id":"e-6724","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1893","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6695"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759419216576}},"actionLists":{"a-1894":{"id":"a-1894","title":"Navbar menu -> OPEN 11","actionItemGroups":[{"actionItems":[{"id":"a-1894-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f9231a"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-1894-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f92313"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-1894-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f92318"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-1894-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f92318"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-1894-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f92313"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-1895":{"id":"a-1895","title":"Navbar menu -> CLOSE 11","actionItemGroups":[{"actionItems":[{"id":"a-1895-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f92318"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-1895-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f92313"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-1895-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f92318"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-1895-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f92313"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-1895-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f9231a"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-1892":{"id":"a-1892","title":"NavBar Show Line 8","actionItemGroups":[{"actionItems":[{"id":"a-1892-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine.is-visible-onhover","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f9230e","128d91b0-7ee6-f4ed-60c5-23a742f9232c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-1892-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine.is-visible-onhover","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f9230e","128d91b0-7ee6-f4ed-60c5-23a742f9232c"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759361565807},"a-1893":{"id":"a-1893","title":"NavBar OffHover Hide Line 8","actionItemGroups":[{"actionItems":[{"id":"a-1893-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine.is-visible-onhover","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f9230e","128d91b0-7ee6-f4ed-60c5-23a742f9232c"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759361620708},"a-1896":{"id":"a-1896","title":"Navbar05 -> OPEN 11","actionItemGroups":[{"actionItems":[{"id":"a-1896-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f92320"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-1896-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-icon","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f92314"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-1896-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f92320"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626161550593},"a-1897":{"id":"a-1897","title":"Navbar05 -> CLOSE 11","actionItemGroups":[{"actionItems":[{"id":"a-1897-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-icon","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f92314"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-1897-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f92320"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626161607847},"a-1898":{"id":"a-1898","title":"Navbar05 dropdown (tablet) -> OPEN 11","actionItemGroups":[{"actionItems":[{"id":"a-1898-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f92320"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-1898-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f92320"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626242958157},"a-1899":{"id":"a-1899","title":"Navbar05 dropdown (tablet) -> CLOSE 11","actionItemGroups":[{"actionItems":[{"id":"a-1899-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu","selectorGuids":["128d91b0-7ee6-f4ed-60c5-23a742f92320"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626242958157}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavBar({
  brandLogoBrandLogoVisibility = true,
  brandLogoImage = "",
  brandLogoImageAltText = "__wf_reserved_inherit",

  buttonButtonLink = {
    href: "#",
  },

  buttonButtonText = "Get In Touch",
  buttonButtonVisibility = true,
  m1Card1HeadlineTag = "h3",
  m1Card1HeadlineText = "Revenue Strategy",
  m1Card1Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79295_d542d97d71213306b087706fc9f5ef01_plane.svg",
  m1Card1IconAltText = "__wf_reserved_inherit",

  m1Card1Link = {
    href: "#",
  },

  m1Card1LinkText = "Maximize Your Topline",
  m1Card1ParagraphText = "Maximize topline and margin with data-backed strategy",
  m1Card2HeadlineTag = "h3",
  m1Card2HeadlineText = "BRAND ACTIVATION",
  m1Card2Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79295_d542d97d71213306b087706fc9f5ef01_plane.svg",
  m1Card2IconAltText = "__wf_reserved_inherit",

  m1Card2Link = {
    href: "#",
  },

  m1Card2LinkText = "Generate Demand",
  m1Card2ParagraphText = "Create demand and drive bookings with targeted marketing.",
  m1Card3HeadlineTag = "h3",
  m1Card3HeadlineText = "Optimized Distribution",
  m1Card3Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79297_c9bb3cba00d02a45f7710f7bfd302570_gear.svg",
  m1Card3IconAltText = "__wf_reserved_inherit",

  m1Card3Link = {
    href: "#",
  },

  m1Card3LinkText = "Connect Strategically",
  m1Card3ParagraphText = "Amplify your presence, control your channels, increase conversions.",
  m1Card4CardIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79296_13f6256409a2a7a3236ad3d688e95c99_labtop-with-cursor.svg",
  m1Card4CardIconAltText = "__wf_reserved_inherit",
  m1Card4HeadlineTag = "h3",
  m1Card4HeadlineText = "Tech Integration",

  m1Card4Link = {
    href: "#",
  },

  m1Card4LinkText = "Build Your Engine",
  m1Card4ParagraphText = "Deploy and align the systems that power your hotel.",
  m2Card1HeadlineTag = "h3",
  m2Card1HeadlineText = "CTRLShift Blog",
  m2Card1Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79294_726a15c1e835325a1ae274a424187e88_get-quote.svg",
  m2Card1IconAltText = "__wf_reserved_inherit",
  m2Card1Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb94943cded46d23608a7_8c9424379024d451e75313095cdbe5ec_revrebel_the-private-courtyard-transforms-into-a-minimalist__83428.jpeg",
  m2Card1ImageAltText = "__wf_reserved_inherit",

  m2Card1Link = {
    href: "#",
  },

  m2Card1LinkText = "read more",
  m2Card1Paragraph = "Where we share our tips and ideas on generating revenueat your property",
  m2Card2HeadlineTag = "h3",
  m2Card2HeadlineText = "Travel Trends",
  m2Card2Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79295_d542d97d71213306b087706fc9f5ef01_plane.svg",
  m2Card2IconAltText = "__wf_reserved_inherit",
  m2Card2Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb94943cded46d23608a5_c03a47b0e3a13518e259481a39ec9be3_f8c4eb24-5293-46bd-b73f-5950bcef20b0.avif",
  m2Card2ImageAltText = "__wf_reserved_inherit",

  m2Card2Link = {
    href: "#",
  },

  m2Card2LinkText = "Explore Trends",
  m2Card2Paragraph = "A collection of trends from the largest travel sites, researchers and companies",
  m2Card3HeadlineTag = "h3",
  m2Card3HeadlineText = "Revenue Toolkits",
  m2Card3Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68f94877b5b71534ca461015_12ed20033a39e931c05a9bc9a0ea3244_gear.svg",
  m2Card3IconAltText = "__wf_reserved_inherit",
  m2Card3Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb94943cded46d23608a0_35f9a8f91c072b0c89f6c849cf016af4_revrebel_a-stylish-bartender-wearing-a-dark-canvas-apron-wi__94603.jpeg",
  m2Card3ImageAltText = "__wf_reserved_inherit",

  m2Card3Link2 = {
    href: "#",
  },

  m2Card3LinkText = "Tap + Discover",
  m2Card3Paragraph = "Packed with strategies and resources to help increase revenue.",
  m2Card4HeadlineTag = "h3",
  m2Card4HeadlineText = "Client Hub",
  m2Card4Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79296_13f6256409a2a7a3236ad3d688e95c99_labtop-with-cursor.svg",
  m2Card4IconAltText = "__wf_reserved_inherit",
  m2Card4Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb94943cded46d236089c_e3e49faf91fdbe89bf3b17a7d2f65b34_revrebel_edit_a-medium-shot-captures-a-30yearold-white-man-in-be__83443.jpg",
  m2Card4ImageAltText = "__wf_reserved_inherit",

  m2Card4Link = {
    href: "#",
  },

  m2Card4LinkText = "Get Briefed",
  m2Card4Paragraph = "Real-time metrics + a full view of our current engagement or project.",
  menuDropdown1MenuDropdownVisibility = true,
  menuDropdown2MenuDropdownVisibility = true,

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
  menuLink4MenuLinkVisibility = false,

  menuLink5MenuLink = {
    href: "#",
  },

  menuLink5MenuLinkText = "Client Login",
  menuLink5MenuLinkVisibility = true,
  optionsColorCardColor = null,
  optionsNavBarColor = "Light",
  optionsWhiteNavCardColor = null,
  settingsNavBarVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-4e24dabf-c0af-11e2-afba-04ed4d415ede",
  };

  const _activeStyleVariant = _styleVariantMap[optionsNavBarColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsNavBarVisibility ? (
        <NavbarWrapper
          className={`navbar_wrapper ${_activeStyleVariant}`}
          config={{
            easing: "ease",
            easing2: "ease",
            duration: 400,
            docHeight: false,
            noScroll: false,
            animation: "default",
            collapse: "medium",
          }}
          data-w-id={"41b9e1ea-64d8-92d1-4a86-1ed604ca3bd4"}
          data-watch={"nav-bar"}
          tag={"div"}
        >
          <Block
            className={`navbar_container ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`navbar_padding ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`navbar_inner-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                <NavbarBrand
                  className={`navbar_logo-link nav-is-open-2 ${_activeStyleVariant}`}
                  options={{
                    href: "#",
                  }}
                >
                  <Block
                    className={`navbar_brand-logo-wrapper ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {brandLogoBrandLogoVisibility ? (
                      <Image
                        className={`navbar_brand-logo ${_activeStyleVariant}`}
                        height={"auto"}
                        loading={"lazy"}
                        src={brandLogoImage}
                        width={"auto"}
                      />
                    ) : null}
                  </Block>
                </NavbarBrand>
                <NavbarMenu
                  className={`navbar_menu-wrapper ${_activeStyleVariant}`}
                  role={"navigation"}
                  tag={"nav"}
                >
                  <Block
                    className={`navbar_menu-left ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {menuLink1MenuLinkVisibility ? (
                      <Link
                        block={"inline"}
                        button={false}
                        className={`navbar_link ${_activeStyleVariant}`}
                        data-w-id={"41b9e1ea-64d8-92d1-4a86-1ed604ca3bdd"}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"resize-trigger"}
                        options={menuLink1MenuLink}
                      >
                        <Block
                          className={`navbar_text ${_activeStyleVariant}`}
                          dropdown-1={"font-size-trigger"}
                          dropdown-2={"font-size-trigger"}
                          tag={"div"}
                        >
                          {menuLink1MenuLinkText}
                        </Block>
                        <Block
                          className={`navbar_liine is-visible-onhover ${_activeStyleVariant}`}
                          navbar-line={"on-hover"}
                          tag={"div"}
                        />
                      </Link>
                    ) : null}
                    {menuLink2MenuLinkVisibility ? (
                      <Link
                        block={"inline"}
                        button={false}
                        className={`navbar_link ${_activeStyleVariant}`}
                        data-w-id={"41b9e1ea-64d8-92d1-4a86-1ed604ca3be0"}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"."}
                        options={menuLink2MenuLink}
                      >
                        <Block
                          className={`navbar_text ${_activeStyleVariant}`}
                          dropdown-1={"font-size-trigger"}
                          dropdown-2={"font-size-trigger"}
                          navbar-onclick={"dropdown-1"}
                          tag={"div"}
                        >
                          {menuLink2MenuLinkText}
                        </Block>
                        <Block
                          className={`navbar_liine is-visible-onhover ${_activeStyleVariant}`}
                          navbar-line={"on-hover"}
                          tag={"div"}
                        />
                      </Link>
                    ) : null}
                    {menuDropdown1MenuDropdownVisibility ? (
                      <DropdownWrapper
                        className={`navbar_menu-dropdown-wrapper ${_activeStyleVariant}`}
                        data-w-id={"41b9e1ea-64d8-92d1-4a86-1ed604ca3be3"}
                        delay={300}
                        dropdown-1={"trigger"}
                        dropdown-2={"resize-trigger"}
                        hover={false}
                        tag={"div"}
                      >
                        <DropdownToggle
                          className={`navbar_menu-dropdown ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Block
                            className={`navbar_text ${_activeStyleVariant}`}
                            dropdown-2={"font-size-trigger"}
                            tag={"div"}
                          >
                            {"Solutions"}
                          </Block>
                          <HtmlEmbed
                            className={`navbar_dropdown-icon navbar_line-none ${_activeStyleVariant}`}
                            content={""}
                            dropdown-2={"resize-icon-trigger"}
                            value={
                              "%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M21.9%2050.8l26%2036.4c.4.6%201.2%201%202%201%200%200%200%200%200%200%20.8-.1%201.5-.4%202-1.1l25.8-36.5c.5-.8.6-1.8.1-2.7%20-.5-.9-1.3-1.4-2.3-1.4H63.3l0-32.8c0-1.4-1.2-2.6-2.6-2.6l-22.6%200c-1.4-.1-2.6%201.1-2.6%202.5v32.7H23.3c-1%200-1.9.5-2.3%201.3%20-.5.8-.4%201.8.1%202.6Z%22%2F%3E%3C%2Fsvg%3E"
                            }
                          />
                        </DropdownToggle>
                        <DropdownList
                          className={`navbar_dropdown-menu ${_activeStyleVariant}`}
                          tag={"nav"}
                        >
                          <Block
                            className={`navbar_menu-content-wrapper ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Block
                              className={`navbar_menu-container ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              <Block
                                className={`navbar_menu-alignment ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                <WhiteNavcard
                                  whiteCard1HeadlineTag={m1Card1HeadlineTag}
                                  whiteCard1HeadlineText={m1Card1HeadlineText}
                                  whiteCard1Icon={m1Card1Icon}
                                  whiteCard1IconAltText={m1Card1IconAltText}
                                  whiteCard1Link={m1Card1Link}
                                  whiteCard1LinkText={m1Card1LinkText}
                                  whiteCard1Paragraph={m1Card1ParagraphText}
                                  whiteCard2HeadlineTag={m1Card2HeadlineTag}
                                  whiteCard2HeadlineText={m1Card2HeadlineText}
                                  whiteCard2Icon={m1Card2Icon}
                                  whiteCard2IconAltText={m1Card2IconAltText}
                                  whiteCard2Link={m1Card2Link}
                                  whiteCard2LinkText={m1Card2LinkText}
                                  whiteCard2Paragraph={m1Card2ParagraphText}
                                  whiteCard3HeadlineText={m1Card3HeadlineText}
                                  whiteCard3Icon={m1Card3Icon}
                                  whiteCard3IconAltText={m1Card3IconAltText}
                                  whiteCard3Link={m1Card3Link}
                                  whiteCard3LinkText={m1Card3LinkText}
                                  whiteCard3Paragraph={m1Card3ParagraphText}
                                  whiteCard4HeadlineTag={m1Card3HeadlineTag}
                                  whiteCard4HeadlineText={m1Card4HeadlineText}
                                  whiteCard4Icon={m1Card4CardIcon}
                                  whiteCard4IconAltText={m1Card4CardIconAltText}
                                  whiteCard4Link={m1Card4Link}
                                  whiteCard4LinkText={m1Card4LinkText}
                                  whiteCard4Paragraph={m1Card4ParagraphText}
                                />
                              </Block>
                            </Block>
                          </Block>
                        </DropdownList>
                      </DropdownWrapper>
                    ) : null}
                    {menuDropdown2MenuDropdownVisibility ? (
                      <DropdownWrapper
                        className={`navbar_menu-dropdown-wrapper ${_activeStyleVariant}`}
                        data-w-id={"41b9e1ea-64d8-92d1-4a86-1ed604ca3bed"}
                        delay={300}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"trigger"}
                        hover={false}
                        tag={"div"}
                      >
                        <DropdownToggle
                          className={`navbar_menu-dropdown ${_activeStyleVariant}`}
                          dropdown-1={"resize-trigger"}
                          dropdown-2={"resize-trigger"}
                          tag={"div"}
                        >
                          <Block
                            className={`navbar_text ${_activeStyleVariant}`}
                            dropdown-1={"font-size-trigger"}
                            tag={"div"}
                          >
                            {"Resources"}
                          </Block>
                          <HtmlEmbed
                            className={`navbar_dropdown-icon navbar_line-none ${_activeStyleVariant}`}
                            content={""}
                            dropdown-1={"resize-icon-trigger"}
                            value={
                              "%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M21.9%2050.8l26%2036.4c.4.6%201.2%201%202%201%200%200%200%200%200%200%20.8-.1%201.5-.4%202-1.1l25.8-36.5c.5-.8.6-1.8.1-2.7%20-.5-.9-1.3-1.4-2.3-1.4H63.3l0-32.8c0-1.4-1.2-2.6-2.6-2.6l-22.6%200c-1.4-.1-2.6%201.1-2.6%202.5v32.7H23.3c-1%200-1.9.5-2.3%201.3%20-.5.8-.4%201.8.1%202.6Z%22%2F%3E%3C%2Fsvg%3E"
                            }
                          />
                        </DropdownToggle>
                        <DropdownList
                          className={`navbar_dropdown-menu ${_activeStyleVariant}`}
                          tag={"nav"}
                        >
                          <Block
                            className={`navbar_menu-content-wrapper ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Block
                              className={`navbar_menu-container ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              <Block
                                className={`navbar_menu-alignment ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                <ColorNavcardRecovered
                                  colorCard1HeadlineTag={m2Card1HeadlineTag}
                                  colorCard1HeadlineText={m2Card1HeadlineText}
                                  colorCard1Icon={m2Card1Icon}
                                  colorCard1IconAltText={m2Card1IconAltText}
                                  colorCard1Image={m2Card1Image}
                                  colorCard1ImageAltText={m2Card1ImageAltText}
                                  colorCard1Link={m2Card1Link}
                                  colorCard1LinkText={m2Card1LinkText}
                                  colorCard1Paragraph={m2Card1Paragraph}
                                  colorCard2HeadlineTag={m2Card2HeadlineTag}
                                  colorCard2HeadlineText={m2Card2HeadlineText}
                                  colorCard2Icon={m2Card2Icon}
                                  colorCard2IconAltText={m2Card2IconAltText}
                                  colorCard2Image={m2Card2Image}
                                  colorCard2ImageAltText={m2Card2ImageAltText}
                                  colorCard2Link={m2Card2Link}
                                  colorCard2LinkText={m2Card2LinkText}
                                  colorCard2Paragraph={m2Card2Paragraph}
                                  colorCard3HeadlineTag={m2Card3HeadlineTag}
                                  colorCard3HeadlineText={m2Card3HeadlineText}
                                  colorCard3Icon={m2Card3Icon}
                                  colorCard3IconAltText={m2Card3IconAltText}
                                  colorCard3Image={m2Card3Image}
                                  colorCard3ImageAltText={m2Card3ImageAltText}
                                  colorCard3Link={m2Card3Link2}
                                  colorCard3LinkText={m2Card3LinkText}
                                  colorCard3Paragraph={m2Card3Paragraph}
                                  colorCard4HeadlineTag={m2Card4HeadlineTag}
                                  colorCard4HeadlineText={m2Card4HeadlineText}
                                  colorCard4Icon={m2Card4Icon}
                                  colorCard4IconAltText={m2Card4IconAltText}
                                  colorCard4Image={m2Card4Image}
                                  colorCard4ImageAltText={m2Card4ImageAltText}
                                  colorCard4Link={m2Card4Link}
                                  colorCard4LinkText={m2Card4LinkText}
                                  colorCard4Paragraph={m2Card4Paragraph}
                                />
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
                        className={`navbar_link ${_activeStyleVariant}`}
                        data-w-id={"41b9e1ea-64d8-92d1-4a86-1ed604ca3bf7"}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"resize-trigger"}
                        options={menuLink3MenuLink}
                      >
                        <Block
                          className={`navbar_text ${_activeStyleVariant}`}
                          dropdown-1={"font-size-trigger"}
                          dropdown-2={"font-size-trigger"}
                          tag={"div"}
                        >
                          {menuLink3MenuLinkText}
                        </Block>
                        <Block
                          className={`navbar_liine is-visible-onhover ${_activeStyleVariant}`}
                          tag={"div"}
                        />
                      </Link>
                    ) : null}
                  </Block>
                  <Block
                    className={`navbar_menu-right ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {menuLink4MenuLinkVisibility ? (
                      <Link
                        block={"inline"}
                        button={false}
                        className={`navbar_link ${_activeStyleVariant}`}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"resize-trigger"}
                        options={menuLink4MenuLink}
                      >
                        <Block
                          className={`navbar_text ${_activeStyleVariant}`}
                          dropdown-1={"font-size-trigger"}
                          dropdown-2={"font-size-trigger"}
                          tag={"div"}
                        >
                          {menuLink4MenuLinkText}
                        </Block>
                      </Link>
                    ) : null}
                    {menuLink5MenuLinkVisibility ? (
                      <Link
                        block={"inline"}
                        button={false}
                        className={`navbar_link ${_activeStyleVariant}`}
                        data-w-id={"41b9e1ea-64d8-92d1-4a86-1ed604ca3bfd"}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"resize-trigger"}
                        options={menuLink5MenuLink}
                      >
                        <Block
                          className={`navbar_text ${_activeStyleVariant}`}
                          dropdown-1={"font-size-trigger"}
                          dropdown-2={"font-size-trigger"}
                          tag={"div"}
                        >
                          {menuLink5MenuLinkText}
                        </Block>
                        <Block
                          className={`navbar_liine is-visible-onhover ${_activeStyleVariant}`}
                          navbar-line={"on-hover"}
                          tag={"div"}
                        />
                      </Link>
                    ) : null}
                    <Block
                      className={`navbar_button-wrapper ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      {buttonButtonVisibility ? (
                        <Link
                          block={"inline"}
                          button={false}
                          className={`button is-btn-sm flex-align_left ${_activeStyleVariant}`}
                          dropdown-1={"resize-trigger"}
                          dropdown-2={"resize-trigger"}
                          options={buttonButtonLink}
                        >
                          <Block
                            className={`navbar_text text-color-4 ${_activeStyleVariant}`}
                            dropdown-1={"font-size-trigger"}
                            dropdown-2={"font-size-trigger"}
                            tag={"div"}
                          >
                            {buttonButtonText}
                          </Block>
                        </Link>
                      ) : null}
                    </Block>
                  </Block>
                </NavbarMenu>
                <NavbarButton
                  className={`navbar_menu-button ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`menu-icon_component ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`menu-icon_line-top ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`menu-icon_line-middle ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`menu-icon_line-middle-inner ${_activeStyleVariant}`}
                        tag={"div"}
                      />
                    </Block>
                    <Block
                      className={`menu-icon_line-bottom ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                  </Block>
                </NavbarButton>
              </Block>
            </Block>
          </Block>
        </NavbarWrapper>
      ) : null}
    </div>
  );
}
