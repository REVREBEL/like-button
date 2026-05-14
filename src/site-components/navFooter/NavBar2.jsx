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
import { Button } from "../rebelStyle/buttons/Button";

const _interactionsData = JSON.parse(
  '{"events":{"e-21770":{"id":"e-21770","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8558","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-749"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-21769":{"id":"e-21769","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8559","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-750"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-21771":{"id":"e-21771","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8556","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-752"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687761},"e-21772":{"id":"e-21772","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8557","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-751"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687764},"e-21773":{"id":"e-21773","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8556","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-754"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-21774":{"id":"e-21774","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8557","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-753"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-21775":{"id":"e-21775","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8560","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-758"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-21778":{"id":"e-21778","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8561","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-755"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-21776":{"id":"e-21776","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8562","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-757"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-21777":{"id":"e-21777","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8563","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-756"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-21780":{"id":"e-21780","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8560","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-762"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-21782":{"id":"e-21782","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8561","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-760"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-21781":{"id":"e-21781","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8562","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-759"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-21779":{"id":"e-21779","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8563","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-761"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-21783":{"id":"e-21783","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8556","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-764"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143fa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143fa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-21784":{"id":"e-21784","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8557","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-763"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143fa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143fa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-21785":{"id":"e-21785","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8556","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-766"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d14400","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d14400","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280},"e-21786":{"id":"e-21786","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8557","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-765"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d14400","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d14400","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280},"e-21761":{"id":"e-21761","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8556","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21762"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418908493},"e-21762":{"id":"e-21762","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8557","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21761"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418908497},"e-21763":{"id":"e-21763","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8556","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21764"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759419216572},"e-21764":{"id":"e-21764","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8557","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21763"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759419216576}},"actionLists":{"a-8558":{"id":"a-8558","title":"Navbar menu -> OPEN 122","actionItemGroups":[{"actionItems":[{"id":"a-8558-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-2","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bd9"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-8558-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom-2","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bd2"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-8558-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top-2","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bd7"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-8558-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top-2","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bd7"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8558-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom-2","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bd2"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-8559":{"id":"a-8559","title":"Navbar menu -> CLOSE 122","actionItemGroups":[{"actionItems":[{"id":"a-8559-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top-2","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bd7"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-8559-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom-2","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bd2"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8559-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top-2","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bd7"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8559-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom-2","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bd2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-8559-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle-2","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bd9"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-8556":{"id":"a-8556","title":"NavBar Show Line 194","actionItemGroups":[{"actionItems":[{"id":"a-8556-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine-2.is-visible-onhover","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bce","b4f1142b-ddf1-6edc-1ca7-4837f4634bec"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8556-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine-2.is-visible-onhover","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bce","b4f1142b-ddf1-6edc-1ca7-4837f4634bec"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759361565807},"a-8557":{"id":"a-8557","title":"NavBar OffHover Hide Line 194","actionItemGroups":[{"actionItems":[{"id":"a-8557-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine-2.is-visible-onhover","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bce","b4f1142b-ddf1-6edc-1ca7-4837f4634bec"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759361620708},"a-8560":{"id":"a-8560","title":"Navbar05 -> OPEN 122","actionItemGroups":[{"actionItems":[{"id":"a-8560-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu-2","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bdf"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8560-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-icon-2","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bd3"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8560-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu-2","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bdf"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626161550593},"a-8561":{"id":"a-8561","title":"Navbar05 -> CLOSE 122","actionItemGroups":[{"actionItems":[{"id":"a-8561-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-icon-2","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bd3"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8561-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu-2","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bdf"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626161607847},"a-8562":{"id":"a-8562","title":"Navbar05 dropdown (tablet) -> OPEN 122","actionItemGroups":[{"actionItems":[{"id":"a-8562-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu-2","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bdf"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-8562-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu-2","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bdf"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626242958157},"a-8563":{"id":"a-8563","title":"Navbar05 dropdown (tablet) -> CLOSE 122","actionItemGroups":[{"actionItems":[{"id":"a-8563-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu-2","selectorGuids":["b4f1142b-ddf1-6edc-1ca7-4837f4634bdf"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626242958157}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavBar2({
  brandLogoBrandLogoVisibility = true,
  brandLogoImage = "",
  brandLogoImageAltText = "__wf_reserved_inherit",

  buttonButtonLink = {
    href: "#",
  },

  buttonButtonText = "Get In Touch",
  buttonButtonVisibility = true,
  colorNavCardSlot,
  colorNavCardSlot2,
  colorNavCardSlot3,
  colorNavCardSlot4,
  m2Card1HeadlineTag = "h3",
  m2Card1HeadlineText = "CTRLShift Blog",
  m2Card1Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3a9f_726a15c1e835325a1ae274a424187e88_get-quote.svg",
  m2Card1IconAltText = "__wf_reserved_inherit",
  m2Card1Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aae_e9e0ff71a0dc475cb26ba3479471a233_revrebel_the-private-courtyard-transforms-into-a-minimalist__83428.avif",
  m2Card1ImageAltText = "__wf_reserved_inherit",

  m2Card1Link = {
    href: "#",
  },

  m2Card1LinkText = "read more",
  m2Card1Paragraph = "Where we share our tips and ideas on generating revenueat your property",
  m2Card2HeadlineTag = "h3",
  m2Card2HeadlineText = "Travel Trends",
  m2Card2Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa0_d542d97d71213306b087706fc9f5ef01_plane.svg",
  m2Card2IconAltText = "__wf_reserved_inherit",
  m2Card2Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aac_c03a47b0e3a13518e259481a39ec9be3_f8c4eb24-5293-46bd-b73f-5950bcef20b0.avif",
  m2Card2ImageAltText = "__wf_reserved_inherit",

  m2Card2Link = {
    href: "#",
  },

  m2Card2LinkText = "Explore Trends",
  m2Card2Paragraph = "A collection of trends from the largest travel sites, researchers and companies",
  m2Card3HeadlineTag = "h3",
  m2Card3HeadlineText = "Revenue Toolkits",
  m2Card3Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68dee5a4cce74fcb4158c1ab_12ed20033a39e931c05a9bc9a0ea3244_gear.svg",
  m2Card3IconAltText = "__wf_reserved_inherit",
  m2Card3Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa7_b5d5569650edf9c998f5a0f5712d1c2f_revrebel_a-stylish-bartender-wearing-a-dark-canvas-apron-wi__94603.avif",
  m2Card3ImageAltText = "__wf_reserved_inherit",

  m2Card3Link2 = {
    href: "#",
  },

  m2Card3LinkText = "Tap + Discover",
  m2Card3Paragraph = "Packed with strategies and resources to help increase revenue.",
  m2Card4HeadlineTag = "h3",
  m2Card4HeadlineText = "Client Hub",
  m2Card4Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa1_13f6256409a2a7a3236ad3d688e95c99_labtop-with-cursor.svg",
  m2Card4IconAltText = "__wf_reserved_inherit",
  m2Card4Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/697ffd0a456ed08e7215031a_e3e49faf91fdbe89bf3b17a7d2f65b34_revrebel_edit_a-medium-shot-captures-a-30yearold-white-man-in-be__83443.jpg",
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
  settingsNavBarVisibility = true,
  whiteNavCardSlot,
  whiteNavCardSlot2,
  whiteNavCardSlot3,
  whiteNavCardSlot4,
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-c0b1ffc5-10a4-ce93-ca7a-c25b1c93cecb",
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
          className={`navbar_wrapper-2 ${_activeStyleVariant}`}
          config={{
            easing: "ease",
            easing2: "ease",
            duration: 400,
            docHeight: false,
            noScroll: false,
            animation: "default",
            collapse: "medium",
          }}
          data-w-id={"c0db3138-7c73-db77-5331-c684e9d143c9"}
          data-watch={"nav-bar"}
          tag={"div"}
        >
          <Block
            className={`navbar_container-2 ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`navbar_padding-2 ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`navbar_inner-content-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                <NavbarBrand
                  className={`navbar_logo-link-2 nav-is-open-3 ${_activeStyleVariant}`}
                  options={{
                    href: "#",
                  }}
                >
                  <Block
                    className={`navbar_brand-logo-wrapper-2 ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {brandLogoBrandLogoVisibility ? (
                      <Image
                        className={`navbar_brand-logo-2 ${_activeStyleVariant}`}
                        height={"auto"}
                        loading={"lazy"}
                        src={brandLogoImage}
                        width={"auto"}
                      />
                    ) : null}
                  </Block>
                </NavbarBrand>
                <NavbarMenu
                  className={`navbar_menu-wrapper-2 ${_activeStyleVariant}`}
                  role={"navigation"}
                  tag={"nav"}
                >
                  <Block
                    className={`navbar_menu-left-2 ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {menuLink1MenuLinkVisibility ? (
                      <Link
                        block={"inline"}
                        button={false}
                        className={`navbar_link-2 ${_activeStyleVariant}`}
                        data-w-id={"c0db3138-7c73-db77-5331-c684e9d143d2"}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"resize-trigger"}
                        options={menuLink1MenuLink}
                      >
                        <Block
                          className={`navbar_text-2 ${_activeStyleVariant}`}
                          dropdown-1={"font-size-trigger"}
                          dropdown-2={"font-size-trigger"}
                          tag={"div"}
                        >
                          {menuLink1MenuLinkText}
                        </Block>
                        <Block
                          className={`navbar_liine-2 is-visible-onhover ${_activeStyleVariant}`}
                          navbar-line={"on-hover"}
                          tag={"div"}
                        />
                      </Link>
                    ) : null}
                    {menuLink2MenuLinkVisibility ? (
                      <Link
                        block={"inline"}
                        button={false}
                        className={`navbar_link-2 ${_activeStyleVariant}`}
                        data-w-id={"c0db3138-7c73-db77-5331-c684e9d143d5"}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"."}
                        options={menuLink2MenuLink}
                      >
                        <Block
                          className={`navbar_text-2 ${_activeStyleVariant}`}
                          dropdown-1={"font-size-trigger"}
                          dropdown-2={"font-size-trigger"}
                          navbar-onclick={"dropdown-1"}
                          tag={"div"}
                        >
                          {menuLink2MenuLinkText}
                        </Block>
                        <Block
                          className={`navbar_liine-2 is-visible-onhover ${_activeStyleVariant}`}
                          navbar-line={"on-hover"}
                          tag={"div"}
                        />
                      </Link>
                    ) : null}
                    {menuDropdown1MenuDropdownVisibility ? (
                      <DropdownWrapper
                        className={`navbar_menu-dropdown-wrapper-2 ${_activeStyleVariant}`}
                        data-w-id={"c0db3138-7c73-db77-5331-c684e9d143d8"}
                        delay={300}
                        dropdown-1={"trigger"}
                        dropdown-2={"resize-trigger"}
                        hover={false}
                        tag={"div"}
                      >
                        <DropdownToggle
                          className={`navbar_menu-dropdown-2 ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Block
                            className={`navbar_text-2 ${_activeStyleVariant}`}
                            dropdown-2={"font-size-trigger"}
                            tag={"div"}
                          >
                            {"Solutions"}
                          </Block>
                          <HtmlEmbed
                            className={`navbar_dropdown-icon-2 navbar_line-none ${_activeStyleVariant}`}
                            content={""}
                            dropdown-2={"resize-icon-trigger"}
                            value={
                              "%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M21.9%2050.8l26%2036.4c.4.6%201.2%201%202%201%200%200%200%200%200%200%20.8-.1%201.5-.4%202-1.1l25.8-36.5c.5-.8.6-1.8.1-2.7%20-.5-.9-1.3-1.4-2.3-1.4H63.3l0-32.8c0-1.4-1.2-2.6-2.6-2.6l-22.6%200c-1.4-.1-2.6%201.1-2.6%202.5v32.7H23.3c-1%200-1.9.5-2.3%201.3%20-.5.8-.4%201.8.1%202.6Z%22%2F%3E%3C%2Fsvg%3E"
                            }
                          />
                        </DropdownToggle>
                        <DropdownList
                          className={`navbar_dropdown-menu-2 ${_activeStyleVariant}`}
                          tag={"nav"}
                        >
                          <Block
                            className={`navbar_menu-content-wrapper-2 ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Block
                              className={`navbar_menu-container-2 ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              <Block
                                className={`navcard_dropdown-container-2 ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                <Block
                                  className={`navcard-wrapper-2 ${_activeStyleVariant}`}
                                  id={
                                    "w-node-c0db3138-7c73-db77-5331-c684e9d143e1-e9d143c9"
                                  }
                                  tag={"div"}
                                >
                                  {whiteNavCardSlot}
                                </Block>
                                <Block
                                  className={`navcard-wrapper-2 ${_activeStyleVariant}`}
                                  id={
                                    "w-node-c0db3138-7c73-db77-5331-c684e9d143e3-e9d143c9"
                                  }
                                  tag={"div"}
                                >
                                  {whiteNavCardSlot2}
                                </Block>
                                <Block
                                  className={`navcard-wrapper-2 ${_activeStyleVariant}`}
                                  id={
                                    "w-node-c0db3138-7c73-db77-5331-c684e9d143e5-e9d143c9"
                                  }
                                  tag={"div"}
                                >
                                  {whiteNavCardSlot3}
                                </Block>
                                <Block
                                  className={`navcard-wrapper-2 ${_activeStyleVariant}`}
                                  id={
                                    "w-node-c0db3138-7c73-db77-5331-c684e9d143e7-e9d143c9"
                                  }
                                  tag={"div"}
                                >
                                  {whiteNavCardSlot4}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                        </DropdownList>
                      </DropdownWrapper>
                    ) : null}
                    {menuDropdown2MenuDropdownVisibility ? (
                      <DropdownWrapper
                        className={`navbar_menu-dropdown-wrapper-2 ${_activeStyleVariant}`}
                        data-w-id={"c0db3138-7c73-db77-5331-c684e9d143e9"}
                        delay={300}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"trigger"}
                        hover={false}
                        tag={"div"}
                      >
                        <DropdownToggle
                          className={`navbar_menu-dropdown-2 ${_activeStyleVariant}`}
                          dropdown-1={"resize-trigger"}
                          dropdown-2={"resize-trigger"}
                          tag={"div"}
                        >
                          <Block
                            className={`navbar_text-2 ${_activeStyleVariant}`}
                            dropdown-1={"font-size-trigger"}
                            tag={"div"}
                          >
                            {"Resources"}
                          </Block>
                          <HtmlEmbed
                            className={`navbar_dropdown-icon-2 navbar_line-none ${_activeStyleVariant}`}
                            content={""}
                            dropdown-1={"resize-icon-trigger"}
                            value={
                              "%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M21.9%2050.8l26%2036.4c.4.6%201.2%201%202%201%200%200%200%200%200%200%20.8-.1%201.5-.4%202-1.1l25.8-36.5c.5-.8.6-1.8.1-2.7%20-.5-.9-1.3-1.4-2.3-1.4H63.3l0-32.8c0-1.4-1.2-2.6-2.6-2.6l-22.6%200c-1.4-.1-2.6%201.1-2.6%202.5v32.7H23.3c-1%200-1.9.5-2.3%201.3%20-.5.8-.4%201.8.1%202.6Z%22%2F%3E%3C%2Fsvg%3E"
                            }
                          />
                        </DropdownToggle>
                        <DropdownList
                          className={`navbar_dropdown-menu-2 ${_activeStyleVariant}`}
                          tag={"nav"}
                        >
                          <Block
                            className={`navbar_menu-content-wrapper-2 ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Block
                              className={`navbar_menu-container-2 ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              <Block
                                className={`navcard_dropdown-container-2 ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                <Block
                                  className={`navcard-wrapper-2 ${_activeStyleVariant}`}
                                  id={
                                    "w-node-c0db3138-7c73-db77-5331-c684e9d143f2-e9d143c9"
                                  }
                                  tag={"div"}
                                >
                                  {colorNavCardSlot}
                                </Block>
                                <Block
                                  className={`navcard-wrapper-2 ${_activeStyleVariant}`}
                                  id={
                                    "w-node-c0db3138-7c73-db77-5331-c684e9d143f4-e9d143c9"
                                  }
                                  tag={"div"}
                                >
                                  {colorNavCardSlot2}
                                </Block>
                                <Block
                                  className={`navcard-wrapper-2 ${_activeStyleVariant}`}
                                  id={
                                    "w-node-c0db3138-7c73-db77-5331-c684e9d143f6-e9d143c9"
                                  }
                                  tag={"div"}
                                >
                                  {colorNavCardSlot3}
                                </Block>
                                <Block
                                  className={`navcard-wrapper-2 ${_activeStyleVariant}`}
                                  id={
                                    "w-node-c0db3138-7c73-db77-5331-c684e9d143f8-e9d143c9"
                                  }
                                  tag={"div"}
                                >
                                  {colorNavCardSlot4}
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
                        className={`navbar_link-2 ${_activeStyleVariant}`}
                        data-w-id={"c0db3138-7c73-db77-5331-c684e9d143fa"}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"resize-trigger"}
                        options={menuLink3MenuLink}
                      >
                        <Block
                          className={`navbar_text-2 ${_activeStyleVariant}`}
                          dropdown-1={"font-size-trigger"}
                          dropdown-2={"font-size-trigger"}
                          tag={"div"}
                        >
                          {menuLink3MenuLinkText}
                        </Block>
                        <Block
                          className={`navbar_liine-2 is-visible-onhover ${_activeStyleVariant}`}
                          tag={"div"}
                        />
                      </Link>
                    ) : null}
                  </Block>
                  <Block
                    className={`navbar_menu-right-2 ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {menuLink4MenuLinkVisibility ? (
                      <Link
                        block={"inline"}
                        button={false}
                        className={`navbar_link-2 ${_activeStyleVariant}`}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"resize-trigger"}
                        options={menuLink4MenuLink}
                      >
                        <Block
                          className={`navbar_text-2 ${_activeStyleVariant}`}
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
                        className={`navbar_link-2 ${_activeStyleVariant}`}
                        data-w-id={"c0db3138-7c73-db77-5331-c684e9d14400"}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"resize-trigger"}
                        options={menuLink5MenuLink}
                      >
                        <Block
                          className={`navbar_text-2 ${_activeStyleVariant}`}
                          dropdown-1={"font-size-trigger"}
                          dropdown-2={"font-size-trigger"}
                          tag={"div"}
                        >
                          {menuLink5MenuLinkText}
                        </Block>
                        <Block
                          className={`navbar_liine-2 is-visible-onhover ${_activeStyleVariant}`}
                          navbar-line={"on-hover"}
                          tag={"div"}
                        />
                      </Link>
                    ) : null}
                    <Block
                      className={`navbar_button-wrapper-2 ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Button
                        buttonLink={buttonButtonLink}
                        buttonText={buttonButtonText}
                        buttonVisibility={buttonButtonVisibility}
                      />
                    </Block>
                  </Block>
                </NavbarMenu>
                <NavbarButton
                  className={`navbar_menu-button-2 ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`menu-icon_component-2 ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`menu-icon_line-top-2 ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`menu-icon_line-middle-2 ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`menu-icon_line-middle-inner-2 ${_activeStyleVariant}`}
                        tag={"div"}
                      />
                    </Block>
                    <Block
                      className={`menu-icon_line-bottom-2 ${_activeStyleVariant}`}
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
