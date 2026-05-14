"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import DropdownList from "../webflow_modules/Dropdown/components/DropdownList";
import DropdownToggle from "../webflow_modules/Dropdown/components/DropdownToggle";
import DropdownWrapper from "../webflow_modules/Dropdown/components/DropdownWrapper";
import Heading from "../webflow_modules/Basic/components/Heading";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";
import NavbarButton from "../webflow_modules/Navbar/components/NavbarButton";
import NavbarMenu from "../webflow_modules/Navbar/components/NavbarMenu";
import NavbarWrapper from "../webflow_modules/Navbar/components/NavbarWrapper";
import * as _interactions from "../webflow_modules/interactions";
import { LetSWorkTogetherButton } from "../buttons/LetSWorkTogetherButton";

const _interactionsData = JSON.parse(
  '{"events":{"e-4722":{"id":"e-4722","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1010","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32812"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"c312d4dc-9a43-7774-0faf-5df038fd6624","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c312d4dc-9a43-7774-0faf-5df038fd6624","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758673105910},"e-4723":{"id":"e-4723","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1093","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32843"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"c312d4dc-9a43-7774-0faf-5df038fd6624","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c312d4dc-9a43-7774-0faf-5df038fd6624","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758673105910},"e-4710":{"id":"e-4710","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1006","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4697"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_sub-link_block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce4","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_sub-link_block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce4","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686658695587},"e-4711":{"id":"e-4711","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1007","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4696"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_sub-link_block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce4","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_sub-link_block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce4","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686658695588},"e-4716":{"id":"e-4716","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1006","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4703"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_sub-link_block","originalId":"68d4f4db04a9a8cbac644b8f|5951306f-a988-e9f1-fd19-97fad63ff51e","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_sub-link_block","originalId":"68d4f4db04a9a8cbac644b8f|5951306f-a988-e9f1-fd19-97fad63ff51e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758792040548},"e-4717":{"id":"e-4717","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1007","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4702"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_sub-link_block","originalId":"68d4f4db04a9a8cbac644b8f|5951306f-a988-e9f1-fd19-97fad63ff51e","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_sub-link_block","originalId":"68d4f4db04a9a8cbac644b8f|5951306f-a988-e9f1-fd19-97fad63ff51e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758792040548},"e-4728":{"id":"e-4728","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1018","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32834"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav","originalId":"c312d4dc-9a43-7774-0faf-5df038fd65f9","appliesTo":"CLASS"},"targets":[{"selector":".page-nav","originalId":"c312d4dc-9a43-7774-0faf-5df038fd65f9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759434661573},"e-4729":{"id":"e-4729","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1019","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32816"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav","originalId":"c312d4dc-9a43-7774-0faf-5df038fd65f9","appliesTo":"CLASS"},"targets":[{"selector":".page-nav","originalId":"c312d4dc-9a43-7774-0faf-5df038fd65f9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759434661575},"e-4730":{"id":"e-4730","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1020","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32840"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav","originalId":"c312d4dc-9a43-7774-0faf-5df038fd65f9","appliesTo":"CLASS"},"targets":[{"selector":".page-nav","originalId":"c312d4dc-9a43-7774-0faf-5df038fd65f9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759435001895},"e-4731":{"id":"e-4731","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1021","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32830"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav","originalId":"c312d4dc-9a43-7774-0faf-5df038fd65f9","appliesTo":"CLASS"},"targets":[{"selector":".page-nav","originalId":"c312d4dc-9a43-7774-0faf-5df038fd65f9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759435001897},"e-4896":{"id":"e-4896","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1010","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32819"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c312d4dc-9a43-7774-0faf-5df038fd667a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c312d4dc-9a43-7774-0faf-5df038fd667a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759537702317},"e-4897":{"id":"e-4897","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1011","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32844"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c312d4dc-9a43-7774-0faf-5df038fd667a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c312d4dc-9a43-7774-0faf-5df038fd667a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759537702320},"e-4898":{"id":"e-4898","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32824"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c312d4dc-9a43-7774-0faf-5df038fd66b7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c312d4dc-9a43-7774-0faf-5df038fd66b7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759543326021},"e-4899":{"id":"e-4899","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1103","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32835"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c312d4dc-9a43-7774-0faf-5df038fd66b7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c312d4dc-9a43-7774-0faf-5df038fd66b7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759543326023},"e-4900":{"id":"e-4900","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32847"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c312d4dc-9a43-7774-0faf-5df038fd6669","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c312d4dc-9a43-7774-0faf-5df038fd6669","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759543526750},"e-4901":{"id":"e-4901","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1103","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32842"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c312d4dc-9a43-7774-0faf-5df038fd6669","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c312d4dc-9a43-7774-0faf-5df038fd6669","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759543526753},"e-4902":{"id":"e-4902","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1104","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32821"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_link-wrapper","originalId":"82b2050c-aced-7f59-dafd-d5994924a42e","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_link-wrapper","originalId":"82b2050c-aced-7f59-dafd-d5994924a42e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759544617281},"e-4903":{"id":"e-4903","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1105","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32849"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_link-wrapper","originalId":"82b2050c-aced-7f59-dafd-d5994924a42e","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_link-wrapper","originalId":"82b2050c-aced-7f59-dafd-d5994924a42e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759544617283},"e-32843":{"id":"e-32843","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1010","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32812"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e742e1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e742e1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758673105910},"e-32812":{"id":"e-32812","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1093","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32843"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e742e1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e742e1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758673105910},"e-32844":{"id":"e-32844","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1010","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32819"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e7433a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e7433a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759537702317},"e-32819":{"id":"e-32819","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1011","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32844"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e7433a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e7433a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759537702320},"e-32835":{"id":"e-32835","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32824"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e74383","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e74383","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759543326021},"e-32824":{"id":"e-32824","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1103","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32835"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e74383","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e74383","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759543326023},"e-32830":{"id":"e-32830","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14376","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32840"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav","originalId":"c312d4dc-9a43-7774-0faf-5df038fd65f9","appliesTo":"CLASS"},"targets":[{"selector":".page-nav","originalId":"c312d4dc-9a43-7774-0faf-5df038fd65f9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759435001895},"e-32840":{"id":"e-32840","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14372","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32830"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav","originalId":"c312d4dc-9a43-7774-0faf-5df038fd65f9","appliesTo":"CLASS"},"targets":[{"selector":".page-nav","originalId":"c312d4dc-9a43-7774-0faf-5df038fd65f9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759435001897},"e-32816":{"id":"e-32816","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14383","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32834"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav","originalId":"c312d4dc-9a43-7774-0faf-5df038fd65f9","appliesTo":"CLASS"},"targets":[{"selector":".page-nav","originalId":"c312d4dc-9a43-7774-0faf-5df038fd65f9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759434661573},"e-32834":{"id":"e-32834","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14378","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32816"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav","originalId":"c312d4dc-9a43-7774-0faf-5df038fd65f9","appliesTo":"CLASS"},"targets":[{"selector":".page-nav","originalId":"c312d4dc-9a43-7774-0faf-5df038fd65f9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759434661575},"e-32813":{"id":"e-32813","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14370","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4703"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_sub-link_block","originalId":"68d4f4db04a9a8cbac644b8f|5951306f-a988-e9f1-fd19-97fad63ff51e","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_sub-link_block","originalId":"68d4f4db04a9a8cbac644b8f|5951306f-a988-e9f1-fd19-97fad63ff51e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758792040548},"e-32845":{"id":"e-32845","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14374","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4702"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_sub-link_block","originalId":"68d4f4db04a9a8cbac644b8f|5951306f-a988-e9f1-fd19-97fad63ff51e","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_sub-link_block","originalId":"68d4f4db04a9a8cbac644b8f|5951306f-a988-e9f1-fd19-97fad63ff51e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758792040548},"e-32838":{"id":"e-32838","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14370","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4697"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_sub-link_block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce4","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_sub-link_block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce4","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686658695587},"e-32829":{"id":"e-32829","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14374","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4696"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_sub-link_block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce4","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_sub-link_block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce4","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686658695588},"e-32842":{"id":"e-32842","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32847"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e74328","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e74328","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759543526750},"e-32847":{"id":"e-32847","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1103","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32842"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e74328","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e74328","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759543526753},"e-32849":{"id":"e-32849","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14381","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32821"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_link-wrapper","originalId":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e742c0","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_link-wrapper","originalId":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e742c0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759544617281},"e-32821":{"id":"e-32821","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14371","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32849"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_link-wrapper","originalId":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e742c0","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_link-wrapper","originalId":"697571a6cc7ceafc5454f9fc|156c4632-4f81-08ff-6243-7a6a43e742c0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759544617283}},"actionLists":{"a-1010":{"id":"a-1010","title":"PageNav Arrow Right Menu [OPEN]","actionItemGroups":[{"actionItems":[{"id":"a-1010-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-navbar_dropdown-icon","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95931"]},"xValue":50,"zValue":null,"xUnit":"px","yUnit":"PX","zUnit":"px"}}]},{"actionItems":[{"id":"a-1010-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-navbar_dropdown-icon","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95931"]},"zValue":-180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758711997810},"a-1093":{"id":"a-1093","title":"PageNav Arrow Right Menu [CLOSE]","actionItemGroups":[{"actionItems":[{"id":"a-1093-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-1093-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{},"yValue":0,"zValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758711997810},"a-1006":{"id":"a-1006","title":"Nav Sublink [ Hover IN ] 6","actionItemGroups":[{"actionItems":[{"id":"a-1006-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-link_line","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95914"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-1006-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-link_line","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95914"]},"globalSwatchId":"81aa02ec","rValue":182,"bValue":145,"gValue":169,"aValue":1}}]},{"actionItems":[{"id":"a-1006-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-link_line","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95914"]},"heightValue":50,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-1006-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-link_line","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95914"]},"globalSwatchId":"9474225c","rValue":239,"bValue":122,"gValue":118,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686658737913},"a-1007":{"id":"a-1007","title":"Nav Sublink [ Hover OUT ] 6","actionItemGroups":[{"actionItems":[{"id":"a-1007-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-link_line","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95914"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-1007-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-link_line","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95914"]},"globalSwatchId":"81aa02ec","rValue":182,"bValue":145,"gValue":169,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686658737913},"a-1018":{"id":"a-1018","title":"Menu OnHover","actionItemGroups":[{"actionItems":[{"id":"a-1018-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95936"]},"globalSwatchId":"--rebel-style_colors---color-5--color-5","rValue":250,"bValue":120,"gValue":202,"aValue":1}},{"id":"a-1018-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-bg-circle","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95934"]},"value":1,"unit":""}},{"id":"a-1018-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95936"]},"heightValue":15,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759434666711},"a-1019":{"id":"a-1019","title":"Menu OffHover","actionItemGroups":[{"actionItems":[{"id":"a-1019-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95936"]},"globalSwatchId":"--rebel-style---colors--color-2-input","rValue":0,"bValue":182,"gValue":166,"aValue":1}},{"id":"a-1019-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-bg-circle","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95934"]},"value":0.2,"unit":""}},{"id":"a-1019-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95936"]},"heightValue":40,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759434702263},"a-1020":{"id":"a-1020","title":"NavOpen Hide Menu","actionItemGroups":[{"actionItems":[{"id":"a-1020-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_text","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95937"]},"value":"none"}},{"id":"a-1020-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-icon","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95939"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-1020-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-bg-circle","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95934"]},"xValue":60,"yValue":null,"zValue":null,"xUnit":"px","yUnit":"px","zUnit":"px"}},{"id":"a-1020-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_text","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95937"]},"value":0,"unit":""}},{"id":"a-1020-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95936"]},"heightValue":15,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-1020-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-icon","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95939"]},"value":"block"}},{"id":"a-1020-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-icon","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95939"]},"value":1,"unit":""}},{"id":"a-1020-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeOut","duration":500,"target":{"selector":".navbar-outter-container","selectorGuids":["c5497302-b917-1a58-bb51-d6ab5b749ea9"]},"yValue":-120,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759435006862},"a-1021":{"id":"a-1021","title":"PageNav Menu [CLOSE]","actionItemGroups":[{"actionItems":[{"id":"a-1021-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_text","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95937"]},"value":"block"}}]},{"actionItems":[{"id":"a-1021-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-icon","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95939"]},"value":0,"unit":""}},{"id":"a-1021-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_text","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95937"]},"value":1,"unit":""}},{"id":"a-1021-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-bg-circle","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95934"]},"xValue":0,"yValue":0,"zValue":0,"xUnit":"px","yUnit":"px","zUnit":"px"}},{"id":"a-1021-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-bg-circle","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95934"]},"value":0.2,"unit":""}},{"id":"a-1021-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95936"]},"heightValue":40,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-1021-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"selector":".navbar-outter-container","selectorGuids":["c5497302-b917-1a58-bb51-d6ab5b749ea9"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759435054506},"a-1011":{"id":"a-1011","title":"PageNav Arrow Right Menu [CLOSE] 6","actionItemGroups":[{"actionItems":[{"id":"a-1011-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-navbar_dropdown-icon","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95931"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-1011-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-navbar_dropdown-icon","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95931"]},"yValue":0,"zValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758711997810},"a-1102":{"id":"a-1102","title":"PageNav Arrow Mobile","actionItemGroups":[{"actionItems":[{"id":"a-1102-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-navbar_dropdown-icon.is-down","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95931","03b7041c-6e7e-2029-dd7c-61cfecd95968"]},"zValue":-90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759543356365},"a-1103":{"id":"a-1103","title":"PageNav Arrow Mobile [CLOSE]","actionItemGroups":[{"actionItems":[{"id":"a-1103-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-navbar_dropdown-icon.is-down","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95931","03b7041c-6e7e-2029-dd7c-61cfecd95968"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759543439740},"a-1104":{"id":"a-1104","title":"On Hover Show Underline [IN]","actionItemGroups":[{"actionItems":[{"id":"a-1104-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_underline","selectorGuids":["ea549395-133b-3d0b-e93b-6739c1929736"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759544624392},"a-1105":{"id":"a-1105","title":"On Hover Show Underline [OUT]","actionItemGroups":[{"actionItems":[{"id":"a-1105-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_underline","selectorGuids":["ea549395-133b-3d0b-e93b-6739c1929736"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759544710282},"a-14376":{"id":"a-14376","title":"NavOpen Hide Menu 2","actionItemGroups":[{"actionItems":[{"id":"a-14376-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"none"}},{"id":"a-14376-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-icon","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95939"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-14376-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":60,"yValue":null,"zValue":null,"xUnit":"px","yUnit":"px","zUnit":"px"}},{"id":"a-14376-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":0,"unit":""}},{"id":"a-14376-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{},"heightValue":15,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-14376-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-icon","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95939"]},"value":"block"}},{"id":"a-14376-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-icon","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95939"]},"value":1,"unit":""}},{"id":"a-14376-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeOut","duration":500,"target":{"selector":".navbar-outter-container","selectorGuids":["c5497302-b917-1a58-bb51-d6ab5b749ea9"]},"yValue":-120,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759435006862},"a-14372":{"id":"a-14372","title":"PageNav Menu [CLOSE] 2","actionItemGroups":[{"actionItems":[{"id":"a-14372-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"block"}}]},{"actionItems":[{"id":"a-14372-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-icon","selectorGuids":["03b7041c-6e7e-2029-dd7c-61cfecd95939"]},"value":0,"unit":""}},{"id":"a-14372-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-14372-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":0,"xUnit":"px","yUnit":"px","zUnit":"px"}},{"id":"a-14372-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0.2,"unit":""}},{"id":"a-14372-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{},"heightValue":40,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-14372-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"selector":".navbar-outter-container","selectorGuids":["c5497302-b917-1a58-bb51-d6ab5b749ea9"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759435054506},"a-14383":{"id":"a-14383","title":"Menu OnHover 2","actionItemGroups":[{"actionItems":[{"id":"a-14383-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":500,"target":{},"globalSwatchId":"--rebel-style_colors---color-5--color-5","rValue":250,"bValue":120,"gValue":202,"aValue":1}},{"id":"a-14383-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-14383-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":250,"target":{},"heightValue":15,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759434666711},"a-14378":{"id":"a-14378","title":"Menu OffHover 2","actionItemGroups":[{"actionItems":[{"id":"a-14378-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{},"globalSwatchId":"--rebel-style---colors--color-2-input","rValue":0,"bValue":182,"gValue":166,"aValue":1}},{"id":"a-14378-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0.2,"unit":""}},{"id":"a-14378-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":250,"target":{},"heightValue":40,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759434702263},"a-14370":{"id":"a-14370","title":"Nav Sublink [ Hover IN ] 77","actionItemGroups":[{"actionItems":[{"id":"a-14370-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-14370-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{},"globalSwatchId":"81aa02ec","rValue":182,"bValue":145,"gValue":169,"aValue":1}}]},{"actionItems":[{"id":"a-14370-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{},"heightValue":50,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-14370-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{},"globalSwatchId":"9474225c","rValue":239,"bValue":122,"gValue":118,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686658737913},"a-14374":{"id":"a-14374","title":"Nav Sublink [ Hover OUT ] 77","actionItemGroups":[{"actionItems":[{"id":"a-14374-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-14374-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{},"globalSwatchId":"81aa02ec","rValue":182,"bValue":145,"gValue":169,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686658737913},"a-14381":{"id":"a-14381","title":"On Hover Show Underline [IN] 2","actionItemGroups":[{"actionItems":[{"id":"a-14381-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759544624392},"a-14371":{"id":"a-14371","title":"On Hover Show Underline [OUT] 2","actionItemGroups":[{"actionItems":[{"id":"a-14371-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":500,"target":{},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759544710282}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PageNavInnerComponent({
  contactLinkButtonLink = {
    href: "#",
  },

  contactLinkButtonSize = "Responsive Size",
  contactLinkButtonText = "Let's Work Together",
  contactLinkButtonVisibility = true,
  contactLinkIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb94943cded46d23608af_9f7495ecacdf316f47f8490a05efa373_asterisk.svg",
  contactLinkIconAltText = "__wf_reserved_inherit",
  contactLinkUnderlineVisibility = true,
  dropdownMenuLink3MenuLink3Visibility = true,
  dropdownMenuLink3MenuText = "Solutions",

  dropdownMenuLink3SubmenuLink1 = {
    href: "#",
  },

  dropdownMenuLink3SubmenuLink2 = {
    href: "#",
  },

  dropdownMenuLink3SubmenuLink3 = {
    href: "#",
  },

  dropdownMenuLink3SubmenuLink4 = {
    href: "#",
  },

  dropdownMenuLink4MenuLink4Visibility = true,
  dropdownMenuLink4MenuText = "Resources",

  dropdownMenuLink4SubmenuLink1 = {
    href: "#",
  },

  dropdownMenuLink4SubmenuLink2 = {
    href: "#",
  },

  dropdownMenuLink4SubmenuLink3 = {
    href: "#",
  },

  dropdownMenuLink4SubmenuLink4 = {
    href: "#",
  },

  headlineMenuNavHeadline = "Explore",
  headlineMenuNavHeadlineTag = "h2",
  m3Submenu1Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79294_726a15c1e835325a1ae274a424187e88_get-quote.svg",
  m3Submenu1IconAltText = "__wf_reserved_inherit",
  m3Submenu1IconVisibility = false,
  m3Submenu1SubmenuHeadline = "Revenue Strategy",
  m3Submenu1SubmenuHeadlineTag = "h3",
  m3Submenu1SubmenuParagraph = "Maximize topline and margin with data-backed strategy",
  m3Submenu1SubmenuTag = "Maximize Your Topline",
  m3Submenu2Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79294_726a15c1e835325a1ae274a424187e88_get-quote.svg",
  m3Submenu2IconAltText = "__wf_reserved_inherit",
  m3Submenu2IconVisibility = false,
  m3Submenu2SubmenuHeadline = (
    <>
      {"Brand Activation"}
      <br />
    </>
  ),
  m3Submenu2SubmenuHeadlineTag = "h3",
  m3Submenu2SubmenuParagraph = "Create demand and drive bookings with targeted marketing.",
  m3Submenu2SubmenuTag = "Generate Demand",
  m3Submenu3Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79294_726a15c1e835325a1ae274a424187e88_get-quote.svg",
  m3Submenu3IconAltText = "__wf_reserved_inherit",
  m3Submenu3IconVisibility = false,
  m3Submenu3SubmenuHeadline = "Optimized Distribution",
  m3Submenu3SubmenuHeadlineTag = "h3",
  m3Submenu3SubmenuParagraph = "Amplify your presence, control your channels, increase conversions.",
  m3Submenu3SubmenuTag = "Connect Strategically",
  m3Submenu4Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79294_726a15c1e835325a1ae274a424187e88_get-quote.svg",
  m3Submenu4IconAltText = "__wf_reserved_inherit",
  m3Submenu4IconVisibility = false,
  m3Submenu4SubmenuHeadline = "Tech Integration",
  m3Submenu4SubmenuHeadlineTag = "h3",
  m3Submenu4SubmenuParagraph = "Deploy and align the systems that power your hotel.",
  m3Submenu4SubmenuTag = "Build Your Engine",
  m4Submenu1Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79294_726a15c1e835325a1ae274a424187e88_get-quote.svg",
  m4Submenu1IconAltText = "__wf_reserved_inherit",
  m4Submenu1IconVisibility = true,
  m4Submenu1Image = "",
  m4Submenu1ImageAltText = "__wf_reserved_inherit",
  m4Submenu1ImageVisibility = true,
  m4Submenu1SubmenuHeadline = "CTRLShift Blog",
  m4Submenu1SubmenuHeadlineTag = "h3",
  m4Submenu1SubmenuParagraph = "Where we shareour tips and ideas ongeneratingrevenue atyour property",
  m4Submenu1SubmenuTag = "Read More",
  m4Submenu2Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79295_d542d97d71213306b087706fc9f5ef01_plane.svg",
  m4Submenu2IconAltText = "__wf_reserved_inherit",
  m4Submenu2IconVisibility = true,
  m4Submenu2Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb94943cded46d23608a5_c03a47b0e3a13518e259481a39ec9be3_f8c4eb24-5293-46bd-b73f-5950bcef20b0.avif",
  m4Submenu2ImageAltText = "__wf_reserved_inherit",
  m4Submenu2ImageVisibility = true,
  m4Submenu2SubmenuHeadline = "Travel Trends",
  m4Submenu2SubmenuHeadlineTag = "h3",
  m4Submenu2SubmenuParagraph = "A collection of trends from the largest travel sites, researchers, and companies",
  m4Submenu2SubmenuTag = "Explore Trends",
  m4Submenu3Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79297_c9bb3cba00d02a45f7710f7bfd302570_gear.svg",
  m4Submenu3IconAltText = "__wf_reserved_inherit",
  m4Submenu3IconVisibility = true,
  m4Submenu3Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb94943cded46d23608a0_35f9a8f91c072b0c89f6c849cf016af4_revrebel_a-stylish-bartender-wearing-a-dark-canvas-apron-wi__94603.jpeg",
  m4Submenu3ImageAltText = "__wf_reserved_inherit",
  m4Submenu3ImageVisibility = true,
  m4Submenu3SubmenuHeadline = "Revenue Toolkits",
  m4Submenu3SubmenuHeadlineTag = "h3",
  m4Submenu3SubmenuParagraph = "Packed with strategies and resources to help increase revenue.",
  m4Submenu3SubmenuTag = "Tap + Discover",
  m4Submenu4Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79296_13f6256409a2a7a3236ad3d688e95c99_labtop-with-cursor.svg",
  m4Submenu4IconAltText = "__wf_reserved_inherit",
  m4Submenu4IconVisibility = true,
  m4Submenu4Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb94943cded46d236089c_e3e49faf91fdbe89bf3b17a7d2f65b34_revrebel_edit_a-medium-shot-captures-a-30yearold-white-man-in-be__83443.jpg",
  m4Submenu4ImageAltText = "__wf_reserved_inherit",
  m4Submenu4ImageVisibility = true,
  m4Submenu4SubmenuHeadline = "Client Hub",
  m4Submenu4SubmenuHeadlineTag = "h3",
  m4Submenu4SubmenuParagraph = "Real-time metrics + a full view of our current engagement or project.",
  m4Submenu4SubmenuTag = "Get Briefed",

  menuLink1MenuLink = {
    href: "#",
  },

  menuLink1MenuText = "Home",
  menuLink1Visibility = true,

  menuLink2MenuLink = {
    href: "#",
  },

  menuLink2MenuText = "Meet the Rebels",
  menuLink2Visibility = true,

  menuLink5MenuLink = {
    href: "#",
  },

  menuLink5MenuLink5Visibility = true,
  menuLink5MenuLinkText = "Partners",

  menuLink6MenuLink = {
    href: "#",
  },

  menuLink6MenuLink6Visibility = true,
  menuLink6MenuLinkText = "faq",

  menuLink7MenuLink = {
    href: "#",
  },

  menuLink7MenuLink7Visibility = true,
  menuLink7MenuLinkText = "CLient login",
  settingsMenuOpenIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb94943cded46d23608af_9f7495ecacdf316f47f8490a05efa373_asterisk.svg",
  settingsMenuText = "Menu",
  settingsNavBarId = "",
  settingsNavBarVisibility = true,
  triggerMenuIconVisibility = true,
  triggerMenuTextVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsNavBarVisibility ? (
        <NavbarWrapper
          className={"page-nav"}
          config={{
            easing: "ease-out",
            easing2: "ease-in",
            duration: 400,
            docHeight: true,
            noScroll: true,
            animation: "over-left",
            collapse: "all",
          }}
          id={settingsNavBarId}
          tag={"div"}
        >
          <NavbarButton
            className={"page-nav_menu-button"}
            data-watch={"page-nav-btn"}
            id={"w-node-c312d4dc-9a43-7774-0faf-5df038fd65fa-38fd65f9"}
            tag={"div"}
          >
            <Block
              className={"page-nav_trigger_menu"}
              data-trigger={"page-nav_menu"}
              tag={"div"}
            >
              <Block className={"page-nav_menu-wrapper"} tag={"div"}>
                <Block
                  className={"page-nav_line"}
                  data-target={"page-nav_menu-line"}
                  tag={"div"}
                />
                {triggerMenuTextVisibility ? (
                  <Block
                    className={"page-nav_text"}
                    data-target={"page-nav_menu-text"}
                    tag={"div"}
                  >
                    {settingsMenuText}
                  </Block>
                ) : null}
                {triggerMenuIconVisibility ? (
                  <Image
                    alt={""}
                    className={"page-nav_menu-icon"}
                    data-target={"page-nav_menu-icon"}
                    height={"auto"}
                    loading={"lazy"}
                    src={settingsMenuOpenIcon}
                    width={"auto"}
                  />
                ) : null}
              </Block>
            </Block>
          </NavbarButton>
          <NavbarMenu
            className={"page-nav_menu"}
            role={"navigation"}
            tag={"nav"}
          >
            <Block className={"page-nav_grid"} tag={"div"}>
              <Block
                className={"page-nav_border-right"}
                id={"w-node-c312d4dc-9a43-7774-0faf-5df038fd6604-38fd65f9"}
                tag={"div"}
              />
              <Block
                className={"padding-left_xsmall"}
                id={"w-node-_24d37d46-4a68-96aa-db8f-dde9f575a1e1-38fd65f9"}
                tag={"div"}
              >
                <Heading
                  className={"page-nav_heading"}
                  id={"w-node-c312d4dc-9a43-7774-0faf-5df038fd6606-38fd65f9"}
                  tag={headlineMenuNavHeadlineTag}
                >
                  {headlineMenuNavHeadline}
                </Heading>
              </Block>
              <Block
                className={"page-nav_links-wrapper text-color-blue"}
                id={"w-node-c312d4dc-9a43-7774-0faf-5df038fd6607-38fd65f9"}
                tag={"div"}
              >
                {menuLink1Visibility ? (
                  <Block className={"page-nav_link-block"} tag={"div"}>
                    <Block className={"page-nav_link-wrapper"} tag={"div"}>
                      <Link
                        block={""}
                        button={false}
                        className={"page-nav_link"}
                        options={menuLink1MenuLink}
                      >
                        {menuLink1MenuText}
                      </Link>
                      <Block className={"page-nav_underline"} tag={"div"} />
                    </Block>
                    <Block
                      className={"page-nav_sub-menu_container"}
                      tag={"div"}
                    >
                      <Block
                        className={"page-nav_sub-link_block is-hidden-2"}
                        tag={"div"}
                      >
                        <Link
                          block={""}
                          button={false}
                          className={
                            "page-nav_sublink trigger_page-navbar_close"
                          }
                          options={{
                            href: "#",
                          }}
                        >
                          {"Home 1"}
                        </Link>
                        <Block
                          className={"page-nav_sub-link_line"}
                          tag={"div"}
                        />
                      </Block>
                      <Block
                        className={"page-nav_sub-link_block is-hidden-2"}
                        tag={"div"}
                      >
                        <Link
                          block={""}
                          button={false}
                          className={
                            "page-nav_sublink trigger_page-navbar_close"
                          }
                          options={{
                            href: "#",
                          }}
                        >
                          {"Home 2"}
                        </Link>
                        <Block
                          className={"page-nav_sub-link_line"}
                          tag={"div"}
                        />
                      </Block>
                      <Block
                        className={"page-nav_sub-link_block is-hidden-2"}
                        tag={"div"}
                      >
                        <Link
                          block={""}
                          button={false}
                          className={
                            "page-nav_sublink trigger_page-navbar_close"
                          }
                          options={{
                            href: "#",
                          }}
                        >
                          {"Home 3"}
                        </Link>
                        <Block
                          className={"page-nav_sub-link_line"}
                          tag={"div"}
                        />
                      </Block>
                    </Block>
                  </Block>
                ) : null}
                {menuLink2Visibility ? (
                  <Block className={"page-nav_link-block"} tag={"div"}>
                    <Block className={"page-nav_link-wrapper"} tag={"div"}>
                      <Link
                        block={""}
                        button={false}
                        className={"page-nav_link"}
                        options={menuLink2MenuLink}
                      >
                        {menuLink2MenuText}
                      </Link>
                      <Block className={"page-nav_underline"} tag={"div"} />
                    </Block>
                    <Block
                      className={"page-nav_sub-menu_container"}
                      tag={"div"}
                    >
                      <Block
                        className={"page-nav_sub-link_block is-hidden-2"}
                        tag={"div"}
                      >
                        <Link
                          block={""}
                          button={false}
                          className={"page-nav_sublink"}
                          options={{
                            href: "#",
                          }}
                        >
                          {"Portfolio 1"}
                        </Link>
                        <Block
                          className={"page-nav_sub-link_line"}
                          tag={"div"}
                        />
                      </Block>
                      <Block
                        className={"page-nav_sub-link_block is-hidden-2"}
                        tag={"div"}
                      >
                        <Block
                          className={"page-nav_sub-link_line"}
                          tag={"div"}
                        />
                      </Block>
                      <Block
                        className={"page-nav_sub-link_block is-hidden-2"}
                        tag={"div"}
                      >
                        <Link
                          block={""}
                          button={false}
                          className={"page-nav_sublink"}
                          options={{
                            href: "#",
                          }}
                        >
                          {"Portfolio 3"}
                        </Link>
                        <Block
                          className={"page-nav_sub-link_line"}
                          tag={"div"}
                        />
                      </Block>
                    </Block>
                  </Block>
                ) : null}
                {dropdownMenuLink3MenuLink3Visibility ? (
                  <DropdownWrapper
                    className={"page-nav_link-block is-hidden_mobile-p"}
                    data-w-id={"c312d4dc-9a43-7774-0faf-5df038fd6624"}
                    delay={300}
                    hover={false}
                    tag={"div"}
                  >
                    <DropdownToggle
                      className={"page-navbar_menu-dropdown link-nav"}
                      id={
                        "w-node-c312d4dc-9a43-7774-0faf-5df038fd6625-38fd65f9"
                      }
                      tag={"div"}
                    >
                      <HtmlEmbed
                        className={"page-navbar_dropdown-icon"}
                        content={""}
                        value={
                          "%3Csvg%20viewBox%3D%220%200%20100%20100%22%20id%3D%22right-arrow-1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%222rem%22%20width%3D%222rem%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M50.868%2078.016l36.418-26.055c.66-.471%201.049-1.233%201.051-2.043%200-.006%200-.006%200-.006%20-.002-.815-.396-1.575-1.059-2.048L50.86%2021.977c-.767-.546-1.776-.616-2.612-.183%20-.835.426-1.361%201.292-1.361%202.236v12.183l-32.709-.001c-1.39%200-2.515%201.125-2.515%202.516l.001%2022.541c-.001%201.389%201.124%202.515%202.516%202.516h32.706v12.187c0%20.94.53%201.803%201.366%202.237%20.837.432%201.848.358%202.616-.193Z%22%2F%3E%3C%2Fsvg%3E"
                        }
                      />
                      <Block className={"page-nav_link"} tag={"div"}>
                        {dropdownMenuLink3MenuText}
                      </Block>
                    </DropdownToggle>
                    <DropdownList
                      className={"page-navbar_dropdown-list solutions"}
                      tag={"nav"}
                    >
                      <Block className={"page-navbar_container"} tag={"div"}>
                        <Block
                          className={"page-navbar_dropdown-content"}
                          tag={"div"}
                        >
                          <Block
                            className={"page-navbar_dropdown-content-right"}
                            tag={"div"}
                          >
                            <Block
                              className={"page-navbar_container-wrapper"}
                              tag={"div"}
                            >
                              <Block
                                className={"navcard_dropdown-container"}
                                tag={"div"}
                              >
                                <Block
                                  className={"navcard-wrapper"}
                                  id={
                                    "w-node-_906f2c62-1b2c-3416-ef74-efd6df695554-38fd65f9"
                                  }
                                  tag={"div"}
                                >
                                  <Link
                                    block={"inline"}
                                    button={false}
                                    className={"white-navcard"}
                                    options={dropdownMenuLink3SubmenuLink1}
                                  >
                                    <Block
                                      className={"white-navcard_top-content"}
                                      tag={"div"}
                                    >
                                      <Block
                                        className={"navcard_headline-wrapper"}
                                        tag={"div"}
                                      >
                                        {m3Submenu1IconVisibility ? (
                                          <Block
                                            className={"navcard_icon"}
                                            tag={"div"}
                                          >
                                            <Image
                                              className={"icon_3x3"}
                                              height={"Auto"}
                                              loading={"lazy"}
                                              src={m3Submenu1Icon}
                                              width={"auto"}
                                            />
                                          </Block>
                                        ) : null}
                                        <Heading
                                          className={
                                            "navcard_headline dropdown-1_max-width"
                                          }
                                          tag={m3Submenu1SubmenuHeadlineTag}
                                        >
                                          {m3Submenu1SubmenuHeadline}
                                        </Heading>
                                      </Block>
                                    </Block>
                                    <Block
                                      className={"white-navcard_bottom-content"}
                                      tag={"div"}
                                    >
                                      <Block
                                        className={"navcard_paragraph"}
                                        tag={"div"}
                                      >
                                        {m3Submenu1SubmenuParagraph}
                                      </Block>
                                      <Block
                                        className={"navcard_label-link"}
                                        tag={"div"}
                                      >
                                        <Block
                                          className={" navcard_label-text"}
                                          tag={"div"}
                                        >
                                          {m3Submenu1SubmenuTag}
                                        </Block>
                                        <HtmlEmbed
                                          className={"code-embed_arrow"}
                                          content={""}
                                          value={
                                            "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20id%3D%22a%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2215px%22%20height%3D%2215px%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%20400%20400%22%3E%3Cpath%20d%3D%22M398.862%2C226.144l-.323-.694c-9.569-19.583-19.899-40.57-30.577-61.338l-.608-1.228c-1.89-3.832-4.031-8.175-7.29-10.94l-.164-.128c-28.553-20.358-84.938-60.531-125.301-89.287l-40.478-28.841c-5.375-4.974-12.583-6.688-18.408-4.363-5.38%2C2.147-8.685%2C7.24-9.068%2C13.971l-.004.13c-.034%2C8.376-.027%2C20.793-.021%2C31.747.004%2C6.791.008%2C13.085%2C0%2C17.65-.095%2C1.391-.034%2C2.557.016%2C3.498.008.143.015.295.022.446-10.412.034-57.856.026-96.504.019-26.417-.005-49.232-.01-53.773.002-4.124.081-9.718%2C2.19-13.057%2C7.863l-.074.135c-2.516%2C4.959-2.304%2C9.6-2.081%2C14.514.109%2C2.395.222%2C4.871.004%2C7.473l-.009.187c-.028%2C3.586-.069%2C7.643-.113%2C12.013-.439%2C43.414-.566%2C79.846%2C2.34%2C85.974%2C6.127%2C12.404%2C12.568%2C25.31%2C18.797%2C37.792%2C4.586%2C9.188%2C9.158%2C18.345%2C13.614%2C27.323%2C3.451%2C13.547%2C29.628%2C13.339%2C59.921%2C13.096%2C5.12-.041%2C10.414-.082%2C15.664-.056%2C7.196-.073%2C15.765-.399%2C24.05-.715%2C13.207-.504%2C26.857-1.023%2C35.762-.57%2C2.772.641%2C5.361%2C6.494%2C7.259%2C10.785%2C1.005%2C2.273%2C1.955%2C4.421%2C2.937%2C6.022%2C1.563%2C2.729%2C3.534%2C7.237%2C5.817%2C12.457%2C7.801%2C17.842%2C17.405%2C39.806%2C29.649%2C39.805.711%2C0%2C1.431-.074%2C2.161-.228l.433-.134c10.151-4.187%2C73.123-49.974%2C123.723-86.764%2C25.399-18.467%2C47.334-34.416%2C51.685-37.086l.141-.094c5.756-4.099%2C7.608-13.992%2C3.853-20.435ZM23.423%2C215.064l-.005-91.582%2C165.256.004v-62.326l151.57%2C107.741-151.574%2C108.439v-62.276H23.423Z%22%2F%3E%3C%2Fsvg%3E"
                                          }
                                        />
                                      </Block>
                                    </Block>
                                  </Link>
                                </Block>
                                <Block
                                  className={"navcard-wrapper"}
                                  id={
                                    "w-node-_906f2c62-1b2c-3416-ef74-efd6df695563-38fd65f9"
                                  }
                                  tag={"div"}
                                >
                                  <Link
                                    block={"inline"}
                                    button={false}
                                    className={"white-navcard"}
                                    options={dropdownMenuLink3SubmenuLink2}
                                  >
                                    <Block
                                      className={"white-navcard_top-content"}
                                      tag={"div"}
                                    >
                                      <Block
                                        className={"navcard_headline-wrapper"}
                                        tag={"div"}
                                      >
                                        {m3Submenu2IconVisibility ? (
                                          <Block
                                            className={"navcard_icon"}
                                            tag={"div"}
                                          >
                                            <Image
                                              className={"icon_3x3"}
                                              height={"auto"}
                                              loading={"lazy"}
                                              src={m3Submenu2Icon}
                                              width={"auto"}
                                            />
                                          </Block>
                                        ) : null}
                                        <Heading
                                          className={
                                            "navcard_headline dropdown-1_max-width"
                                          }
                                          tag={m3Submenu2SubmenuHeadlineTag}
                                        >
                                          {m3Submenu2SubmenuHeadline}
                                        </Heading>
                                      </Block>
                                    </Block>
                                    <Block
                                      className={
                                        "white-navcard_bottom-content flex-vertical"
                                      }
                                      tag={"div"}
                                    >
                                      <Block
                                        className={"navcard_paragraph"}
                                        tag={"div"}
                                      >
                                        {m3Submenu2SubmenuParagraph}
                                      </Block>
                                      <Block
                                        className={
                                          "navcard_label-link is-brand-color-2"
                                        }
                                        tag={"div"}
                                      >
                                        <Block
                                          className={" navcard_label-text"}
                                          tag={"div"}
                                        >
                                          {m3Submenu2SubmenuTag}
                                        </Block>
                                        <HtmlEmbed
                                          className={"code-embed_arrow"}
                                          content={""}
                                          value={
                                            "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20id%3D%22a%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2215px%22%20height%3D%2215px%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%20400%20400%22%3E%3Cpath%20d%3D%22M398.862%2C226.144l-.323-.694c-9.569-19.583-19.899-40.57-30.577-61.338l-.608-1.228c-1.89-3.832-4.031-8.175-7.29-10.94l-.164-.128c-28.553-20.358-84.938-60.531-125.301-89.287l-40.478-28.841c-5.375-4.974-12.583-6.688-18.408-4.363-5.38%2C2.147-8.685%2C7.24-9.068%2C13.971l-.004.13c-.034%2C8.376-.027%2C20.793-.021%2C31.747.004%2C6.791.008%2C13.085%2C0%2C17.65-.095%2C1.391-.034%2C2.557.016%2C3.498.008.143.015.295.022.446-10.412.034-57.856.026-96.504.019-26.417-.005-49.232-.01-53.773.002-4.124.081-9.718%2C2.19-13.057%2C7.863l-.074.135c-2.516%2C4.959-2.304%2C9.6-2.081%2C14.514.109%2C2.395.222%2C4.871.004%2C7.473l-.009.187c-.028%2C3.586-.069%2C7.643-.113%2C12.013-.439%2C43.414-.566%2C79.846%2C2.34%2C85.974%2C6.127%2C12.404%2C12.568%2C25.31%2C18.797%2C37.792%2C4.586%2C9.188%2C9.158%2C18.345%2C13.614%2C27.323%2C3.451%2C13.547%2C29.628%2C13.339%2C59.921%2C13.096%2C5.12-.041%2C10.414-.082%2C15.664-.056%2C7.196-.073%2C15.765-.399%2C24.05-.715%2C13.207-.504%2C26.857-1.023%2C35.762-.57%2C2.772.641%2C5.361%2C6.494%2C7.259%2C10.785%2C1.005%2C2.273%2C1.955%2C4.421%2C2.937%2C6.022%2C1.563%2C2.729%2C3.534%2C7.237%2C5.817%2C12.457%2C7.801%2C17.842%2C17.405%2C39.806%2C29.649%2C39.805.711%2C0%2C1.431-.074%2C2.161-.228l.433-.134c10.151-4.187%2C73.123-49.974%2C123.723-86.764%2C25.399-18.467%2C47.334-34.416%2C51.685-37.086l.141-.094c5.756-4.099%2C7.608-13.992%2C3.853-20.435ZM23.423%2C215.064l-.005-91.582%2C165.256.004v-62.326l151.57%2C107.741-151.574%2C108.439v-62.276H23.423Z%22%2F%3E%3C%2Fsvg%3E"
                                          }
                                        />
                                      </Block>
                                    </Block>
                                  </Link>
                                </Block>
                                <Block
                                  className={"navcard-wrapper"}
                                  id={
                                    "w-node-_906f2c62-1b2c-3416-ef74-efd6df695572-38fd65f9"
                                  }
                                  tag={"div"}
                                >
                                  <Link
                                    block={"inline"}
                                    button={false}
                                    className={"white-navcard"}
                                    options={dropdownMenuLink3SubmenuLink3}
                                  >
                                    <Block
                                      className={"white-navcard_top-content"}
                                      tag={"div"}
                                    >
                                      <Block
                                        className={"navcard_headline-wrapper"}
                                        tag={"div"}
                                      >
                                        {m3Submenu3IconVisibility ? (
                                          <Block
                                            className={"navcard_icon"}
                                            tag={"div"}
                                          >
                                            <Image
                                              className={"icon_3x3"}
                                              height={"auto"}
                                              loading={"lazy"}
                                              src={m3Submenu3Icon}
                                              width={"auto"}
                                            />
                                          </Block>
                                        ) : null}
                                        <Heading
                                          className={
                                            "navcard_headline dropdown-1_max-width"
                                          }
                                          tag={m3Submenu3SubmenuHeadlineTag}
                                        >
                                          {m3Submenu3SubmenuHeadline}
                                        </Heading>
                                      </Block>
                                    </Block>
                                    <Block
                                      className={
                                        "white-navcard_bottom-content flex-vertical"
                                      }
                                      tag={"div"}
                                    >
                                      <Block
                                        className={"navcard_paragraph"}
                                        tag={"div"}
                                      >
                                        {m3Submenu3SubmenuParagraph}
                                      </Block>
                                      <Block
                                        className={
                                          "navcard_label-link is-brand-color-5"
                                        }
                                        tag={"div"}
                                      >
                                        <Block
                                          className={" navcard_label-text"}
                                          tag={"div"}
                                        >
                                          {m3Submenu3SubmenuTag}
                                        </Block>
                                        <HtmlEmbed
                                          className={"code-embed_arrow"}
                                          content={""}
                                          value={
                                            "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20id%3D%22arrow%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20400%22%20fill%3D%22currentColor%22%20width%3D%2215px%22%20height%3D%2215px%22%3E%3Cpath%20d%3D%22M177%2C116.1v-48.6c0-7.7%2C15.7-16%2C22.7-10.1%2C45%2C26.2%2C95%2C47.2%2C139.6%2C73.6%2C11.5%2C6.8%2C18.1%2C12.9%2C19.4%2C27.3%2C4.3%2C50.3-3.3%2C106.7%2C0%2C157.7-1.7%2C15.2-13.3%2C25.8-28.3%2C27.2-45.7%2C4.2-97.6-3.3-143.9%2C0-6.8-.4-12.8-3-18.1-7.1-37-34.7-82.2-64.8-118.7-99.5-5.5-5.3-8.1-6.9-8.9-15.1-2.7-28.8%2C2.1-61.7%2C0-90.9-.8-5.1%2C7.6-14.5%2C12-14.5h124.3ZM207.3%2C248.6l81.9-72.4-81.9-71.4v29.6c0%2C3.5-8.5%2C12-12%2C12h-124.3v60.6h124.3c3.4%2C0%2C12%2C8.5%2C12%2C12v29.6Z%22%2F%3E%3C%2Fsvg%3E"
                                          }
                                        />
                                      </Block>
                                    </Block>
                                  </Link>
                                </Block>
                                <Block
                                  className={"navcard-wrapper"}
                                  id={
                                    "w-node-_906f2c62-1b2c-3416-ef74-efd6df695581-38fd65f9"
                                  }
                                  tag={"div"}
                                >
                                  <Link
                                    block={"inline"}
                                    button={false}
                                    className={"white-navcard"}
                                    options={dropdownMenuLink3SubmenuLink4}
                                  >
                                    <Block
                                      className={"white-navcard_top-content"}
                                      tag={"div"}
                                    >
                                      <Block
                                        className={"navcard_headline-wrapper"}
                                        tag={"div"}
                                      >
                                        {m3Submenu4IconVisibility ? (
                                          <Block
                                            className={"navcard_icon"}
                                            tag={"div"}
                                          >
                                            <Image
                                              className={"icon_3x3"}
                                              height={"auto"}
                                              loading={"lazy"}
                                              src={m3Submenu4Icon}
                                              width={"auto"}
                                            />
                                          </Block>
                                        ) : null}
                                        <Heading
                                          className={
                                            "navcard_headline dropdown-1_max-width"
                                          }
                                          tag={m3Submenu4SubmenuHeadlineTag}
                                        >
                                          {m3Submenu4SubmenuHeadline}
                                        </Heading>
                                      </Block>
                                    </Block>
                                    <Block
                                      className={
                                        "white-navcard_bottom-content flex-vertical"
                                      }
                                      tag={"div"}
                                    >
                                      <Block
                                        className={"navcard_paragraph"}
                                        tag={"div"}
                                      >
                                        {m3Submenu4SubmenuParagraph}
                                      </Block>
                                      <Block
                                        className={
                                          "navcard_label-link is-brand-color-8"
                                        }
                                        tag={"div"}
                                      >
                                        <Block
                                          className={" navcard_label-text"}
                                          tag={"div"}
                                        >
                                          {m3Submenu4SubmenuTag}
                                        </Block>
                                        <HtmlEmbed
                                          className={"code-embed_arrow"}
                                          content={""}
                                          value={
                                            "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20id%3D%22a%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2215px%22%20height%3D%2215px%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%20400%20400%22%3E%3Cpath%20d%3D%22M398.862%2C226.144l-.323-.694c-9.569-19.583-19.899-40.57-30.577-61.338l-.608-1.228c-1.89-3.832-4.031-8.175-7.29-10.94l-.164-.128c-28.553-20.358-84.938-60.531-125.301-89.287l-40.478-28.841c-5.375-4.974-12.583-6.688-18.408-4.363-5.38%2C2.147-8.685%2C7.24-9.068%2C13.971l-.004.13c-.034%2C8.376-.027%2C20.793-.021%2C31.747.004%2C6.791.008%2C13.085%2C0%2C17.65-.095%2C1.391-.034%2C2.557.016%2C3.498.008.143.015.295.022.446-10.412.034-57.856.026-96.504.019-26.417-.005-49.232-.01-53.773.002-4.124.081-9.718%2C2.19-13.057%2C7.863l-.074.135c-2.516%2C4.959-2.304%2C9.6-2.081%2C14.514.109%2C2.395.222%2C4.871.004%2C7.473l-.009.187c-.028%2C3.586-.069%2C7.643-.113%2C12.013-.439%2C43.414-.566%2C79.846%2C2.34%2C85.974%2C6.127%2C12.404%2C12.568%2C25.31%2C18.797%2C37.792%2C4.586%2C9.188%2C9.158%2C18.345%2C13.614%2C27.323%2C3.451%2C13.547%2C29.628%2C13.339%2C59.921%2C13.096%2C5.12-.041%2C10.414-.082%2C15.664-.056%2C7.196-.073%2C15.765-.399%2C24.05-.715%2C13.207-.504%2C26.857-1.023%2C35.762-.57%2C2.772.641%2C5.361%2C6.494%2C7.259%2C10.785%2C1.005%2C2.273%2C1.955%2C4.421%2C2.937%2C6.022%2C1.563%2C2.729%2C3.534%2C7.237%2C5.817%2C12.457%2C7.801%2C17.842%2C17.405%2C39.806%2C29.649%2C39.805.711%2C0%2C1.431-.074%2C2.161-.228l.433-.134c10.151-4.187%2C73.123-49.974%2C123.723-86.764%2C25.399-18.467%2C47.334-34.416%2C51.685-37.086l.141-.094c5.756-4.099%2C7.608-13.992%2C3.853-20.435ZM23.423%2C215.064l-.005-91.582%2C165.256.004v-62.326l151.57%2C107.741-151.574%2C108.439v-62.276H23.423Z%22%2F%3E%3C%2Fsvg%3E"
                                          }
                                        />
                                      </Block>
                                    </Block>
                                  </Link>
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                    </DropdownList>
                  </DropdownWrapper>
                ) : null}
                {dropdownMenuLink3MenuLink3Visibility ? (
                  <DropdownWrapper
                    className={"page-nav_link-block is-visible-mobile-p"}
                    data-w-id={"c312d4dc-9a43-7774-0faf-5df038fd6669"}
                    delay={0}
                    hover={false}
                    tag={"div"}
                  >
                    <DropdownToggle
                      className={"page-navbar_menu-dropdown"}
                      tag={"div"}
                    >
                      <HtmlEmbed
                        className={"page-navbar_dropdown-icon is-down"}
                        content={""}
                        value={
                          "%3Csvg%20viewBox%3D%220%200%20100%20100%22%20id%3D%22down-arrow%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22%23163666%22%20d%3D%22M21.984%2050.868l26.055%2036.418c.471.66%201.233%201.049%202.043%201.051%20.006%200%20.006%200%20.006%200%20.815-.002%201.575-.396%202.048-1.059l25.887-36.417c.546-.767.616-1.776.183-2.612%20-.426-.835-1.292-1.361-2.236-1.361H63.787l.001-32.709c0-1.39-1.125-2.515-2.516-2.515l-22.541.001c-1.389-.001-2.515%201.124-2.516%202.516v32.705H24.029c-.94%200-1.803.53-2.237%201.367%20-.433.836-.358%201.847.192%202.615Z%22%2F%3E%3C%2Fsvg%3E"
                        }
                      />
                      <Block
                        className={"page-nav_link text-color-brand-primany-5"}
                        tag={"div"}
                      >
                        {dropdownMenuLink3MenuText}
                      </Block>
                    </DropdownToggle>
                    <DropdownList
                      className={"page-navbar_dropdown-list is-mobile-version"}
                      tag={"nav"}
                    >
                      <Block className={"page-nav_sub-link_block"} tag={"div"}>
                        <Link
                          block={""}
                          button={false}
                          className={"page-nav_sublink"}
                          options={dropdownMenuLink3SubmenuLink1}
                        >
                          {m3Submenu1SubmenuHeadline}
                        </Link>
                      </Block>
                      <Block className={"page-nav_sub-link_block"} tag={"div"}>
                        <Link
                          block={""}
                          button={false}
                          className={"page-nav_sublink"}
                          options={dropdownMenuLink3SubmenuLink2}
                        >
                          {m3Submenu2SubmenuHeadline}
                        </Link>
                      </Block>
                      <Block className={"page-nav_sub-link_block"} tag={"div"}>
                        <Link
                          block={""}
                          button={false}
                          className={"page-nav_sublink"}
                          options={dropdownMenuLink3SubmenuLink3}
                        >
                          {m3Submenu3SubmenuHeadline}
                        </Link>
                      </Block>
                      <Block className={"page-nav_sub-link_block"} tag={"div"}>
                        <Link
                          block={""}
                          button={false}
                          className={"page-nav_sublink"}
                          options={dropdownMenuLink3SubmenuLink4}
                        >
                          {m3Submenu4SubmenuHeadline}
                        </Link>
                      </Block>
                    </DropdownList>
                  </DropdownWrapper>
                ) : null}
                {dropdownMenuLink4MenuLink4Visibility ? (
                  <DropdownWrapper
                    className={"page-nav_link-block is-hidden_mobile-p"}
                    data-w-id={"c312d4dc-9a43-7774-0faf-5df038fd667a"}
                    delay={300}
                    hover={false}
                    tag={"div"}
                  >
                    <DropdownToggle
                      className={"page-navbar_menu-dropdown link-nav"}
                      id={
                        "w-node-c312d4dc-9a43-7774-0faf-5df038fd667b-38fd65f9"
                      }
                      tag={"div"}
                    >
                      <HtmlEmbed
                        className={"page-navbar_dropdown-icon"}
                        content={""}
                        value={
                          "%3Csvg%20viewBox%3D%220%200%20100%20100%22%20height%3D%222rem%22%20width%3D%222rem%22%20id%3D%22right-arrow-2%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M50.868%2078.016l36.418-26.055c.66-.471%201.049-1.233%201.051-2.043%200-.006%200-.006%200-.006%20-.002-.815-.396-1.575-1.059-2.048L50.86%2021.977c-.767-.546-1.776-.616-2.612-.183%20-.835.426-1.361%201.292-1.361%202.236v12.183l-32.709-.001c-1.39%200-2.515%201.125-2.515%202.516l.001%2022.541c-.001%201.389%201.124%202.515%202.516%202.516h32.706v12.187c0%20.94.53%201.803%201.366%202.237%20.837.432%201.848.358%202.616-.193Z%22%2F%3E%3C%2Fsvg%3E"
                        }
                      />
                      <Block
                        className={"page-nav_link text-color-brand-primany-5"}
                        tag={"div"}
                      >
                        {dropdownMenuLink4MenuText}
                      </Block>
                    </DropdownToggle>
                    <DropdownList
                      className={"page-navbar_dropdown-list menu-dropdown-2"}
                      tag={"nav"}
                    >
                      <Block className={"page-navbar_container"} tag={"div"}>
                        <Block
                          className={"page-navbar_dropdown-content"}
                          tag={"div"}
                        >
                          <Block
                            className={"page-navbar_dropdown-content-right"}
                            tag={"div"}
                          >
                            <Block
                              className={"page-navbar_container-wrapper"}
                              tag={"div"}
                            >
                              <Block
                                className={"navcard_dropdown-container"}
                                tag={"div"}
                              >
                                <Block
                                  className={"navcard-wrapper"}
                                  id={
                                    "w-node-_27e585d3-4cff-c7d3-47c7-424dfb442cfa-38fd65f9"
                                  }
                                  tag={"div"}
                                >
                                  <Link
                                    block={"inline"}
                                    button={false}
                                    className={"color-navcard"}
                                    options={dropdownMenuLink4SubmenuLink1}
                                  >
                                    <Block
                                      className={"color-navcard_right-content"}
                                      id={
                                        "w-node-_27e585d3-4cff-c7d3-47c7-424dfb442cfc-38fd65f9"
                                      }
                                      tag={"div"}
                                    >
                                      <Block
                                        className={"navcard_headline-wrapper"}
                                        tag={"div"}
                                      >
                                        {m4Submenu1IconVisibility ? (
                                          <Block
                                            className={"navcard_icon"}
                                            tag={"div"}
                                          >
                                            <Image
                                              className={
                                                "icon_3x3 is-icon-brand-color-4"
                                              }
                                              height={"auto"}
                                              loading={"lazy"}
                                              src={m4Submenu1Icon}
                                              width={"auto"}
                                            />
                                          </Block>
                                        ) : null}
                                        <Heading
                                          className={
                                            "navcard_headline dropdown-2_max-width"
                                          }
                                          tag={m4Submenu1SubmenuHeadlineTag}
                                        >
                                          {m4Submenu1SubmenuHeadline}
                                        </Heading>
                                      </Block>
                                      <Block
                                        className={"navcard_paragraph"}
                                        tag={"div"}
                                      >
                                        {m4Submenu1SubmenuParagraph}
                                      </Block>
                                      <Block
                                        className={"navcard_tag-link"}
                                        tag={"div"}
                                      >
                                        {m4Submenu1SubmenuTag}
                                      </Block>
                                    </Block>
                                    {m4Submenu1ImageVisibility ? (
                                      <Block
                                        className={"color-navcard_left-content"}
                                        tag={"div"}
                                      >
                                        <Image
                                          className={"navcard_image"}
                                          height={"auto"}
                                          loading={"lazy"}
                                          src={m4Submenu1Image}
                                          width={"auto"}
                                        />
                                      </Block>
                                    ) : null}
                                  </Link>
                                </Block>
                                <Block
                                  className={"navcard-wrapper"}
                                  id={
                                    "w-node-_27e585d3-4cff-c7d3-47c7-424dfb442d09-38fd65f9"
                                  }
                                  tag={"div"}
                                >
                                  <Link
                                    block={"inline"}
                                    button={false}
                                    className={"color-navcard is-brand-color-2"}
                                    options={dropdownMenuLink4SubmenuLink2}
                                  >
                                    <Block
                                      className={
                                        "color-navcard_right-content is-inverse_brand-color-2"
                                      }
                                      id={
                                        "w-node-_27e585d3-4cff-c7d3-47c7-424dfb442d0b-38fd65f9"
                                      }
                                      tag={"div"}
                                    >
                                      <Block
                                        className={"navcard_headline-wrapper"}
                                        tag={"div"}
                                      >
                                        {m4Submenu2IconVisibility ? (
                                          <Block
                                            className={"navcard_icon"}
                                            tag={"div"}
                                          >
                                            <Image
                                              className={
                                                "icon_3x3 is-icon-brand-color-5"
                                              }
                                              height={"auto"}
                                              loading={"lazy"}
                                              src={m4Submenu2Icon}
                                              width={"auto"}
                                            />
                                          </Block>
                                        ) : null}
                                        <Heading
                                          className={
                                            "navcard_headline dropdown-2_max-width"
                                          }
                                          tag={m4Submenu2SubmenuHeadlineTag}
                                        >
                                          {m4Submenu2SubmenuHeadline}
                                        </Heading>
                                      </Block>
                                      <Block
                                        className={"navcard_paragraph"}
                                        tag={"div"}
                                      >
                                        {m4Submenu2SubmenuParagraph}
                                      </Block>
                                      <Block
                                        className={"navcard_tag-link"}
                                        tag={"div"}
                                      >
                                        {m4Submenu2SubmenuTag}
                                      </Block>
                                    </Block>
                                    {m4Submenu2ImageVisibility ? (
                                      <Block
                                        className={"color-navcard_left-content"}
                                        tag={"div"}
                                      >
                                        <Image
                                          className={"navcard_image"}
                                          height={"auto"}
                                          loading={"lazy"}
                                          src={m4Submenu2Image}
                                          width={"auto"}
                                        />
                                      </Block>
                                    ) : null}
                                  </Link>
                                </Block>
                                <Block
                                  className={"navcard-wrapper"}
                                  id={
                                    "w-node-_27e585d3-4cff-c7d3-47c7-424dfb442d18-38fd65f9"
                                  }
                                  tag={"div"}
                                >
                                  <Link
                                    block={"inline"}
                                    button={false}
                                    className={"color-navcard is-brand-color-5"}
                                    options={dropdownMenuLink4SubmenuLink3}
                                  >
                                    <Block
                                      className={
                                        "color-navcard_right-content is-inverse_brand-color-5"
                                      }
                                      id={
                                        "w-node-_27e585d3-4cff-c7d3-47c7-424dfb442d1a-38fd65f9"
                                      }
                                      tag={"div"}
                                    >
                                      <Block
                                        className={"navcard_headline-wrapper"}
                                        tag={"div"}
                                      >
                                        {m4Submenu3IconVisibility ? (
                                          <Block
                                            className={"navcard_icon"}
                                            tag={"div"}
                                          >
                                            <Image
                                              className={
                                                "icon_3x3 is-icon-brand-color-7"
                                              }
                                              height={"auto"}
                                              loading={"lazy"}
                                              src={m4Submenu3Icon}
                                              width={"auto"}
                                            />
                                          </Block>
                                        ) : null}
                                        <Heading
                                          className={
                                            "navcard_headline dropdown-2_max-width"
                                          }
                                          tag={m4Submenu3SubmenuHeadlineTag}
                                        >
                                          {m4Submenu3SubmenuHeadline}
                                        </Heading>
                                      </Block>
                                      <Block
                                        className={"navcard_paragraph"}
                                        tag={"div"}
                                      >
                                        {m4Submenu3SubmenuParagraph}
                                      </Block>
                                      <Block
                                        className={"navcard_tag-link"}
                                        tag={"div"}
                                      >
                                        {m4Submenu3SubmenuTag}
                                      </Block>
                                    </Block>
                                    {m4Submenu3ImageVisibility ? (
                                      <Block
                                        className={"color-navcard_left-content"}
                                        tag={"div"}
                                      >
                                        <Image
                                          className={"navcard_image"}
                                          height={"auto"}
                                          loading={"lazy"}
                                          src={m4Submenu3Image}
                                          width={"auto"}
                                        />
                                      </Block>
                                    ) : null}
                                  </Link>
                                </Block>
                                <Block
                                  className={"navcard-wrapper"}
                                  id={
                                    "w-node-_27e585d3-4cff-c7d3-47c7-424dfb442d26-38fd65f9"
                                  }
                                  tag={"div"}
                                >
                                  <Link
                                    block={"inline"}
                                    button={false}
                                    className={"color-navcard is-brand-color-8"}
                                    options={dropdownMenuLink4SubmenuLink4}
                                  >
                                    <Block
                                      className={
                                        "color-navcard_right-content is-inverse_brand-color-8"
                                      }
                                      id={
                                        "w-node-_27e585d3-4cff-c7d3-47c7-424dfb442d28-38fd65f9"
                                      }
                                      tag={"div"}
                                    >
                                      <Block
                                        className={"navcard_headline-wrapper"}
                                        tag={"div"}
                                      >
                                        {m4Submenu4IconVisibility ? (
                                          <Block
                                            className={"navcard_icon"}
                                            tag={"div"}
                                          >
                                            <Image
                                              className={
                                                "icon_3x3 is-icon-brand-color-6"
                                              }
                                              height={"auto"}
                                              loading={"lazy"}
                                              src={m4Submenu4Icon}
                                              width={"auto"}
                                            />
                                          </Block>
                                        ) : null}
                                        <Heading
                                          className={
                                            "navcard_headline dropdown-2_max-width"
                                          }
                                          tag={m4Submenu4SubmenuHeadlineTag}
                                        >
                                          {m4Submenu4SubmenuHeadline}
                                        </Heading>
                                      </Block>
                                      <Block
                                        className={"navcard_paragraph"}
                                        tag={"div"}
                                      >
                                        {m4Submenu4SubmenuParagraph}
                                      </Block>
                                      <Block
                                        className={"navcard_tag-link"}
                                        tag={"div"}
                                      >
                                        {m4Submenu4SubmenuTag}
                                      </Block>
                                    </Block>
                                    {m4Submenu4ImageVisibility ? (
                                      <Block
                                        className={"color-navcard_left-content"}
                                        tag={"div"}
                                      >
                                        <Image
                                          className={"navcard_image"}
                                          height={"auto"}
                                          loading={"lazy"}
                                          src={m4Submenu4Image}
                                          width={"auto"}
                                        />
                                      </Block>
                                    ) : null}
                                  </Link>
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                    </DropdownList>
                  </DropdownWrapper>
                ) : null}
                {dropdownMenuLink4MenuLink4Visibility ? (
                  <DropdownWrapper
                    className={"page-nav_link-block is-visible-mobile-p"}
                    data-w-id={"c312d4dc-9a43-7774-0faf-5df038fd66b7"}
                    delay={0}
                    hover={false}
                    tag={"div"}
                  >
                    <DropdownToggle
                      className={"page-navbar_menu-dropdown"}
                      tag={"div"}
                    >
                      <HtmlEmbed
                        className={"page-navbar_dropdown-icon is-down"}
                        content={""}
                        value={
                          "%3Csvg%20viewBox%3D%220%200%20100%20100%22%20id%3D%22down-arrow%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22%23163666%22%20d%3D%22M21.984%2050.868l26.055%2036.418c.471.66%201.233%201.049%202.043%201.051%20.006%200%20.006%200%20.006%200%20.815-.002%201.575-.396%202.048-1.059l25.887-36.417c.546-.767.616-1.776.183-2.612%20-.426-.835-1.292-1.361-2.236-1.361H63.787l.001-32.709c0-1.39-1.125-2.515-2.516-2.515l-22.541.001c-1.389-.001-2.515%201.124-2.516%202.516v32.705H24.029c-.94%200-1.803.53-2.237%201.367%20-.433.836-.358%201.847.192%202.615Z%22%2F%3E%3C%2Fsvg%3E"
                        }
                      />
                      <Block
                        className={"page-nav_link text-color-brand-primany-5"}
                        tag={"div"}
                      >
                        {dropdownMenuLink4MenuText}
                      </Block>
                    </DropdownToggle>
                    <DropdownList
                      className={"page-navbar_dropdown-list is-mobile-version"}
                      tag={"nav"}
                    >
                      <Block className={"page-nav_sub-link_block"} tag={"div"}>
                        <Link
                          block={""}
                          button={false}
                          className={"page-nav_sublink"}
                          options={dropdownMenuLink4SubmenuLink3}
                        >
                          {m4Submenu3SubmenuHeadline}
                        </Link>
                        <Block
                          className={"page-nav_sub-link_line"}
                          tag={"div"}
                        />
                      </Block>
                      <Block className={"page-nav_sub-link_block"} tag={"div"}>
                        <Link
                          block={""}
                          button={false}
                          className={"page-nav_sublink"}
                          options={dropdownMenuLink4SubmenuLink2}
                        >
                          {m4Submenu2SubmenuHeadline}
                        </Link>
                        <Block
                          className={"page-nav_sub-link_line"}
                          tag={"div"}
                        />
                      </Block>
                      <Block className={"page-nav_sub-link_block"} tag={"div"}>
                        <Link
                          block={""}
                          button={false}
                          className={"page-nav_sublink"}
                          options={dropdownMenuLink4SubmenuLink1}
                        >
                          {m4Submenu1SubmenuHeadline}
                        </Link>
                        <Block
                          className={"page-nav_sub-link_line"}
                          tag={"div"}
                        />
                      </Block>
                      <Block className={"page-nav_sub-link_block"} tag={"div"}>
                        <Link
                          block={""}
                          button={false}
                          className={"page-nav_sublink"}
                          options={dropdownMenuLink4SubmenuLink4}
                        >
                          {m4Submenu4SubmenuHeadline}
                        </Link>
                        <Block
                          className={"page-nav_sub-link_line"}
                          tag={"div"}
                        />
                      </Block>
                    </DropdownList>
                  </DropdownWrapper>
                ) : null}
                {menuLink5MenuLink5Visibility ? (
                  <Block className={"page-nav_link-block"} tag={"div"}>
                    <Block className={"page-nav_link-wrapper"} tag={"div"}>
                      <Link
                        block={""}
                        button={false}
                        className={"page-nav_link"}
                        id={
                          "w-node-c312d4dc-9a43-7774-0faf-5df038fd66c9-38fd65f9"
                        }
                        options={menuLink5MenuLink}
                      >
                        {menuLink5MenuLinkText}
                      </Link>
                      <Block className={"page-nav_underline"} tag={"div"} />
                    </Block>
                    <Block
                      className={"page-nav_sub-menu_container"}
                      tag={"div"}
                    >
                      <Block
                        className={"page-nav_sub-link_block is-hidden-2"}
                        tag={"div"}
                      >
                        <Link
                          block={""}
                          button={false}
                          className={"page-nav_sublink"}
                          options={{
                            href: "#",
                          }}
                        >
                          {"shop 1"}
                        </Link>
                        <Block
                          className={"page-nav_sub-link_line"}
                          tag={"div"}
                        />
                      </Block>
                      <Block
                        className={"page-nav_sub-link_block is-hidden-2"}
                        tag={"div"}
                      >
                        <Link
                          block={""}
                          button={false}
                          className={"page-nav_sublink"}
                          options={{
                            href: "#",
                          }}
                        >
                          {"shop 2"}
                        </Link>
                        <Block
                          className={"page-nav_sub-link_line"}
                          tag={"div"}
                        />
                      </Block>
                      <Block
                        className={"page-nav_sub-link_block is-hidden-2"}
                        tag={"div"}
                      >
                        <Link
                          block={""}
                          button={false}
                          className={"page-nav_sublink"}
                          options={{
                            href: "#",
                          }}
                        >
                          {"shop 3"}
                        </Link>
                        <Block
                          className={"page-nav_sub-link_line"}
                          tag={"div"}
                        />
                      </Block>
                    </Block>
                  </Block>
                ) : null}
                {menuLink6MenuLink6Visibility ? (
                  <Block className={"page-nav_link-block"} tag={"div"}>
                    <Block className={"page-nav_link-wrapper"} tag={"div"}>
                      <Link
                        block={""}
                        button={false}
                        className={"page-nav_link"}
                        options={menuLink6MenuLink}
                      >
                        {menuLink6MenuLinkText}
                      </Link>
                      <Block className={"page-nav_underline"} tag={"div"} />
                    </Block>
                  </Block>
                ) : null}
                {menuLink7MenuLink7Visibility ? (
                  <Block className={"page-nav_link-block"} tag={"div"}>
                    <Block className={"page-nav_link-wrapper"} tag={"div"}>
                      <Link
                        block={""}
                        button={false}
                        className={"page-nav_link"}
                        options={menuLink7MenuLink}
                      >
                        {menuLink7MenuLinkText}
                      </Link>
                      <Block className={"page-nav_underline"} tag={"div"} />
                    </Block>
                  </Block>
                ) : null}
                {contactLinkButtonVisibility ? (
                  <Block
                    className={
                      "page-nav_link-block is-padding-right_20pct margin-top_small-2 trigger_page-navbar_close"
                    }
                    tag={"div"}
                  >
                    <HtmlEmbed
                      content={""}
                      value={
                        "%3Cstyle%3E%0A%0A.is-rebel%2C%0A.text-rebel%20%7B%0A%20%20background-image%3A%20linear-gradient(to%20right%2C%20%2327498b%2C%20%23145491%2C%20%23005e95%2C%20%23006897%2C%20%23007198%2C%20%2300789b%2C%20%23007f9d%2C%20%2300869f%2C%20%23008ea5%2C%20%230096ab%2C%20%23009eb1%2C%20%2300a6b6%2C%20%2371c9c5%2C%20%237aceb5%2C%20%238fd2a2%2C%20%23abd38e%2C%20%23ccd17e%2C%20%23dbca73%2C%20%23ebc16d%2C%20%23fab86b%2C%20%23f9aa64%2C%20%23f89b5e%2C%20%23f68c5b%2C%20%23f37d59%2C%20%23f37d59%2C%20%23f07555%2C%20%23ec6d51%2C%20%23e9654e%2C%20%23e55c4b%2C%20%23df554f%2C%20%23d84e53%2C%20%23d04856%2C%20%23c2455f%2C%20%23b14565%2C%20%23a04569%2C%20%238e456a)%3B%0A%7D%0A%0A%3C%2Fstyle%3E"
                      }
                    />
                    <LetSWorkTogetherButton
                      buttonButtonLink={contactLinkButtonLink}
                      buttonButtonText={contactLinkButtonText}
                      iconIcon={contactLinkIcon}
                      iconIconAltText={contactLinkIconAltText}
                      optionsSize={contactLinkButtonSize}
                      optionsUnderlineVisibility={
                        contactLinkUnderlineVisibility
                      }
                    />
                  </Block>
                ) : null}
              </Block>
            </Block>
          </NavbarMenu>
        </NavbarWrapper>
      ) : null}
    </div>
  );
}
