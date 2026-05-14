"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { WhiteNavcardFullpage } from "./WhiteNavcardFullpage";
import { ColorNavcardFullpage } from "./ColorNavcardFullpage";
import { LetsWorkTogetherButton } from "./LetsWorkTogetherButton";

const _interactionsData = JSON.parse(
    '{"events":{"e-13359":{"id":"e-13359","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4792","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13360"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451ec","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451ec","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759234248139,"origin":["6946540cc72b976861f8c836","e-708"]},"e-13360":{"id":"e-13360","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4794","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13359"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451ec","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451ec","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759234248142,"origin":["6946540cc72b976861f8c836","e-709"]},"e-13365":{"id":"e-13365","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4793","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13366"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451ec","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451ec","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759419910248,"origin":["6946540cc72b976861f8c836","e-773"]},"e-13366":{"id":"e-13366","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4795","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13365"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451ec","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451ec","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759419910251,"origin":["6946540cc72b976861f8c836","e-774"]},"e-13361":{"id":"e-13361","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4796","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13362"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_link-block","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_link-block","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418908493,"origin":["6946540cc72b976861f8c836","e-769"]},"e-13362":{"id":"e-13362","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4797","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13361"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_link-block","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_link-block","originalId":"2599fd81-a003-972b-f2af-9cbbcf3451fb","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418908497,"origin":["6946540cc72b976861f8c836","e-770"]},"e-13367":{"id":"e-13367","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4796","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13368"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2599fd81-a003-972b-f2af-9cbbcf3451fc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2599fd81-a003-972b-f2af-9cbbcf3451fc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418482469,"origin":["6946540cc72b976861f8c836","e-767"]},"e-13368":{"id":"e-13368","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4797","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13367"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2599fd81-a003-972b-f2af-9cbbcf3451fc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2599fd81-a003-972b-f2af-9cbbcf3451fc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418482469,"origin":["6946540cc72b976861f8c836","e-768"]},"e-13351":{"id":"e-13351","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4782","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13352"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-navbar_menu-dropdown","originalId":"2599fd81-a003-972b-f2af-9cbbcf34521c","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-navbar_menu-dropdown","originalId":"2599fd81-a003-972b-f2af-9cbbcf34521c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758712742002,"origin":["6946540cc72b976861f8c836","e-628"]},"e-13352":{"id":"e-13352","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4783","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13351"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-navbar_menu-dropdown","originalId":"2599fd81-a003-972b-f2af-9cbbcf34521c","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-navbar_menu-dropdown","originalId":"2599fd81-a003-972b-f2af-9cbbcf34521c","appliesTo":"CLASS"}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758712742006,"origin":["6946540cc72b976861f8c836","e-629"]},"e-13363":{"id":"e-13363","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4796","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13364"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_link","originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_link","originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759419216572,"origin":["6946540cc72b976861f8c836","e-771"]},"e-13364":{"id":"e-13364","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4797","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13363"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_link","originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_link","originalId":"2599fd81-a003-972b-f2af-9cbbcf34526d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759419216576,"origin":["6946540cc72b976861f8c836","e-772"]},"e-13347":{"id":"e-13347","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4776","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13348"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_link-block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce0","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_link-block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686658056499,"origin":["6946540cc72b976861f8c836","e-150"]},"e-13348":{"id":"e-13348","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4777","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13347"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_link-block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce0","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_link-block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686658056501,"origin":["6946540cc72b976861f8c836","e-151"]},"e-13349":{"id":"e-13349","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4778","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13350"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_sub-link_block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce4","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_sub-link_block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce4","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686658695587,"origin":["6946540cc72b976861f8c836","e-152"]},"e-13350":{"id":"e-13350","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4779","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13349"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_sub-link_block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce4","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_sub-link_block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce4","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686658695588,"origin":["6946540cc72b976861f8c836","e-153"]},"e-13353":{"id":"e-13353","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4784","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13354"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_link-block","originalId":"68d4f4db04a9a8cbac644b8f|5951306f-a988-e9f1-fd19-97fad63ff51a","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_link-block","originalId":"68d4f4db04a9a8cbac644b8f|5951306f-a988-e9f1-fd19-97fad63ff51a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758792040548,"origin":["6946540cc72b976861f8c836","e-638"]},"e-13354":{"id":"e-13354","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4785","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13353"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_link-block","originalId":"68d4f4db04a9a8cbac644b8f|5951306f-a988-e9f1-fd19-97fad63ff51a","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_link-block","originalId":"68d4f4db04a9a8cbac644b8f|5951306f-a988-e9f1-fd19-97fad63ff51a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758792040548,"origin":["6946540cc72b976861f8c836","e-639"]},"e-13355":{"id":"e-13355","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4786","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13356"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_sub-link_block","originalId":"68d4f4db04a9a8cbac644b8f|5951306f-a988-e9f1-fd19-97fad63ff51e","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_sub-link_block","originalId":"68d4f4db04a9a8cbac644b8f|5951306f-a988-e9f1-fd19-97fad63ff51e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758792040548,"origin":["6946540cc72b976861f8c836","e-640"]},"e-13356":{"id":"e-13356","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4787","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13355"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-nav_sub-link_block","originalId":"68d4f4db04a9a8cbac644b8f|5951306f-a988-e9f1-fd19-97fad63ff51e","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-nav_sub-link_block","originalId":"68d4f4db04a9a8cbac644b8f|5951306f-a988-e9f1-fd19-97fad63ff51e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758792040548,"origin":["6946540cc72b976861f8c836","e-641"]},"e-13357":{"id":"e-13357","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4788","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13358"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-navbar_menu-dropdown","originalId":"68db1c25cce6c78ece550d90|59bdbcd8-8514-263d-3984-3af63ebb7c39","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-navbar_menu-dropdown","originalId":"68db1c25cce6c78ece550d90|59bdbcd8-8514-263d-3984-3af63ebb7c39","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759190092330,"origin":["6946540cc72b976861f8c836","e-692"]},"e-13358":{"id":"e-13358","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4789","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13357"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--page-navbar_menu-dropdown","originalId":"68db1c25cce6c78ece550d90|59bdbcd8-8514-263d-3984-3af63ebb7c39","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--page-navbar_menu-dropdown","originalId":"68db1c25cce6c78ece550d90|59bdbcd8-8514-263d-3984-3af63ebb7c39","appliesTo":"CLASS"}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759190092330,"origin":["6946540cc72b976861f8c836","e-693"]},"e-13375":{"id":"e-13375","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4796","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-752"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687761,"origin":["6946540cc72b976861f8c836","e-741"]},"e-13376":{"id":"e-13376","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4797","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-751"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687764,"origin":["6946540cc72b976861f8c836","e-742"]},"e-13377":{"id":"e-13377","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4796","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-754"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514,"origin":["6946540cc72b976861f8c836","e-745"]},"e-13378":{"id":"e-13378","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4797","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-753"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143d5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143d5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514,"origin":["6946540cc72b976861f8c836","e-746"]},"e-13387":{"id":"e-13387","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4796","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-764"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143ec","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143ec","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631,"origin":["6946540cc72b976861f8c836","e-747"]},"e-13388":{"id":"e-13388","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4797","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-763"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143ec","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143ec","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631,"origin":["6946540cc72b976861f8c836","e-748"]},"e-13389":{"id":"e-13389","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4796","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-766"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143f2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143f2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280,"origin":["6946540cc72b976861f8c836","e-743"]},"e-13390":{"id":"e-13390","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4797","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-765"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0db3138-7c73-db77-5331-c684e9d143f2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0db3138-7c73-db77-5331-c684e9d143f2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280,"origin":["6946540cc72b976861f8c836","e-744"]}},"actionLists":{"a-4792":{"id":"a-4792","origin":["6946540cc72b976861f8c836","a-196"],"title":"PageNav OnOpen","actionItemGroups":[{"actionItems":[{"id":"a-4792-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".rebel-style--page-nav_menu-icon","selectorGuids":["5415596f-1d2c-077a-8db9-293ac0018412"]},"value":"none"}},{"id":"a-4792-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".rebel-style--page-nav_text","selectorGuids":["5415596f-1d2c-077a-8db9-293ac0018410"]},"value":"block"}}]},{"actionItems":[{"id":"a-4792-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".rebel-style--page-nav_text","selectorGuids":["5415596f-1d2c-077a-8db9-293ac0018410"]},"value":"none"}},{"id":"a-4792-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".rebel-style--page-nav_menu-icon","selectorGuids":["5415596f-1d2c-077a-8db9-293ac0018412"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759234259657},"a-4794":{"id":"a-4794","origin":["6946540cc72b976861f8c836","a-197"],"title":"PageNav OnClose","actionItemGroups":[{"actionItems":[{"id":"a-4794-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".rebel-style--page-nav_menu-icon","selectorGuids":["5415596f-1d2c-077a-8db9-293ac0018412"]},"value":"block"}},{"id":"a-4794-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".rebel-style--page-nav_text","selectorGuids":["5415596f-1d2c-077a-8db9-293ac0018410"]},"value":"none"}},{"id":"a-4794-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840f"]},"heightValue":40,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-4794-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840f"]},"globalSwatchId":"@var_variable-f6673889-8545-6a19-33f5-6f84b3d83740","rValue":0,"bValue":182,"gValue":166,"aValue":1}},{"id":"a-4794-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_menu-bg-circle","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840d"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4794-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".rebel-style--page-nav_menu-icon","selectorGuids":["5415596f-1d2c-077a-8db9-293ac0018412"]},"value":"none"}},{"id":"a-4794-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".rebel-style--page-nav_text","selectorGuids":["5415596f-1d2c-077a-8db9-293ac0018410"]},"value":"block"}},{"id":"a-4794-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_menu-bg-circle","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840d"]},"value":0.2,"unit":""}},{"id":"a-4794-n-9","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840f"]},"globalSwatchId":"@var_variable-45f8c66f-69af-4a44-f9c5-6bd10024a304","rValue":250,"bValue":120,"gValue":202,"aValue":1}},{"id":"a-4794-n-10","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840f"]},"heightValue":10,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759234372681},"a-4793":{"id":"a-4793","origin":["6946540cc72b976861f8c836","a-208"],"title":"PageNav OnHover","actionItemGroups":[{"actionItems":[{"id":"a-4793-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".rebel-style--page-nav_menu-icon","selectorGuids":["5415596f-1d2c-077a-8db9-293ac0018412"]},"value":"none"}},{"id":"a-4793-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_menu-bg-circle","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840d"]},"value":0.2,"unit":""}},{"id":"a-4793-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".rebel-style--page-nav_text","selectorGuids":["5415596f-1d2c-077a-8db9-293ac0018410"]},"value":"block"}}]},{"actionItems":[{"id":"a-4793-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_menu-bg-circle","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840d"]},"value":1,"unit":""}},{"id":"a-4793-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840f"]},"heightValue":10,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-4793-n-6","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840f"]},"globalSwatchId":"@var_variable-c021924e-35bb-28ad-f240-d7b98f49427f","rValue":250,"bValue":120,"gValue":202,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759234259657},"a-4795":{"id":"a-4795","origin":["6946540cc72b976861f8c836","a-209"],"title":"PageNav OffHover","actionItemGroups":[{"actionItems":[{"id":"a-4795-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".rebel-style--page-nav_menu-icon","selectorGuids":["5415596f-1d2c-077a-8db9-293ac0018412"]},"value":"none"}},{"id":"a-4795-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".rebel-style--page-nav_text","selectorGuids":["5415596f-1d2c-077a-8db9-293ac0018410"]},"value":"block"}},{"id":"a-4795-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840f"]},"heightValue":10,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-4795-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840f"]},"globalSwatchId":"@var_variable-c021924e-35bb-28ad-f240-d7b98f49427f","rValue":250,"bValue":120,"gValue":202,"aValue":1}},{"id":"a-4795-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_menu-bg-circle","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840d"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4795-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_menu-bg-circle","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840d"]},"value":0.2,"unit":""}},{"id":"a-4795-n-7","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840f"]},"globalSwatchId":"@var_variable-c3cb55ec-8170-b11a-6312-5f1a4b8af166","rValue":113,"bValue":197,"gValue":201,"aValue":1}},{"id":"a-4795-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840f"]},"heightValue":40,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759234372681},"a-4796":{"id":"a-4796","origin":["6946540cc72b976861f8c836","a-204"],"title":"NavBar Show Line 66","actionItemGroups":[{"actionItems":[{"id":"a-4796-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_liine.rebel-style--is-visible-onhover","selectorGuids":["5415596f-1d2c-077a-8db9-293ac0018413","5415596f-1d2c-077a-8db9-293ac0018439"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4796-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_liine.rebel-style--is-visible-onhover","selectorGuids":["5415596f-1d2c-077a-8db9-293ac0018413","5415596f-1d2c-077a-8db9-293ac0018439"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759361565807},"a-4797":{"id":"a-4797","origin":["6946540cc72b976861f8c836","a-205"],"title":"NavBar OffHover Hide Line 66","actionItemGroups":[{"actionItems":[{"id":"a-4797-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--navbar_liine.rebel-style--is-visible-onhover","selectorGuids":["5415596f-1d2c-077a-8db9-293ac0018413","5415596f-1d2c-077a-8db9-293ac0018439"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759361620708},"a-4782":{"id":"a-4782","origin":["6946540cc72b976861f8c836","a-144"],"title":"PageNav Arrow Right Menu [OPEN] 112","actionItemGroups":[{"actionItems":[{"id":"a-4782-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-navbar_dropdown-icon","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840a"]},"xValue":50,"zValue":null,"xUnit":"px","yUnit":"PX","zUnit":"px"}}]},{"actionItems":[{"id":"a-4782-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-navbar_dropdown-icon","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840a"]},"zValue":-180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758711997810},"a-4783":{"id":"a-4783","origin":["6946540cc72b976861f8c836","a-145"],"title":"PageNav Arrow Right Menu [CLOSE] 111","actionItemGroups":[{"actionItems":[{"id":"a-4783-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-navbar_dropdown-icon","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840a"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-4783-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-navbar_dropdown-icon","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840a"]},"yValue":0,"zValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758711997810},"a-4776":{"id":"a-4776","origin":["6946540cc72b976861f8c836","a-69"],"title":"Nav Link [ Hover IN ]","actionItemGroups":[{"actionItems":[{"id":"a-4776-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-menu_container","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f5"]},"value":0,"unit":""}},{"id":"a-4776-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-menu_container","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f5"]},"xValue":-50,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-4776-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-menu_container","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f5"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-4776-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-menu_container","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f5"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686657573155},"a-4777":{"id":"a-4777","origin":["6946540cc72b976861f8c836","a-70"],"title":"Nav Link [ Hover OUT ]","actionItemGroups":[{"actionItems":[{"id":"a-4777-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-menu_container","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f5"]},"xValue":-50,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-4777-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-menu_container","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f5"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686657573155},"a-4778":{"id":"a-4778","origin":["6946540cc72b976861f8c836","a-71"],"title":"Nav Sublink [ Hover IN ]","actionItemGroups":[{"actionItems":[{"id":"a-4778-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-link_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f8"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-4778-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-link_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f8"]},"globalSwatchId":"81aa02ec","rValue":182,"bValue":145,"gValue":169,"aValue":1}}]},{"actionItems":[{"id":"a-4778-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-link_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f8"]},"heightValue":50,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-4778-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-link_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f8"]},"globalSwatchId":"9474225c","rValue":239,"bValue":122,"gValue":118,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686658737913},"a-4779":{"id":"a-4779","origin":["6946540cc72b976861f8c836","a-72"],"title":"Nav Sublink [ Hover OUT ]","actionItemGroups":[{"actionItems":[{"id":"a-4779-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-link_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f8"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-4779-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-link_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f8"]},"globalSwatchId":"81aa02ec","rValue":182,"bValue":145,"gValue":169,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686658737913},"a-4784":{"id":"a-4784","origin":["6946540cc72b976861f8c836","a-152"],"title":"Nav Link [ Hover IN ] 2","actionItemGroups":[{"actionItems":[{"id":"a-4784-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-menu_container","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f5"]},"value":0,"unit":""}},{"id":"a-4784-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-menu_container","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f5"]},"xValue":-50,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-4784-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-menu_container","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f5"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-4784-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-menu_container","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f5"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686657573155},"a-4785":{"id":"a-4785","origin":["6946540cc72b976861f8c836","a-153"],"title":"Nav Link [ Hover OUT ] 2","actionItemGroups":[{"actionItems":[{"id":"a-4785-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-menu_container","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f5"]},"xValue":-50,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-4785-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-menu_container","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f5"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686657573155},"a-4786":{"id":"a-4786","origin":["6946540cc72b976861f8c836","a-154"],"title":"Nav Sublink [ Hover IN ] 2","actionItemGroups":[{"actionItems":[{"id":"a-4786-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-link_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f8"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-4786-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-link_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f8"]},"globalSwatchId":"81aa02ec","rValue":182,"bValue":145,"gValue":169,"aValue":1}}]},{"actionItems":[{"id":"a-4786-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-link_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f8"]},"heightValue":50,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-4786-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-link_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f8"]},"globalSwatchId":"9474225c","rValue":239,"bValue":122,"gValue":118,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686658737913},"a-4787":{"id":"a-4787","origin":["6946540cc72b976861f8c836","a-155"],"title":"Nav Sublink [ Hover OUT ] 2","actionItemGroups":[{"actionItems":[{"id":"a-4787-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-link_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f8"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-4787-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-nav_sub-link_line","selectorGuids":["5415596f-1d2c-077a-8db9-293ac00183f8"]},"globalSwatchId":"81aa02ec","rValue":182,"bValue":145,"gValue":169,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686658737913},"a-4788":{"id":"a-4788","origin":["6946540cc72b976861f8c836","a-188"],"title":"PageNav Arrow Right Menu [OPEN] 2","actionItemGroups":[{"actionItems":[{"id":"a-4788-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-navbar_dropdown-icon","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840a"]},"xValue":50,"zValue":null,"xUnit":"px","yUnit":"PX","zUnit":"px"}}]},{"actionItems":[{"id":"a-4788-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-navbar_dropdown-icon","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840a"]},"zValue":-180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758711997810},"a-4789":{"id":"a-4789","origin":["6946540cc72b976861f8c836","a-189"],"title":"PageNav Arrow Right Menu [CLOSE] 2","actionItemGroups":[{"actionItems":[{"id":"a-4789-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-navbar_dropdown-icon","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840a"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-4789-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--page-navbar_dropdown-icon","selectorGuids":["5415596f-1d2c-077a-8db9-293ac001840a"]},"yValue":0,"zValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758711997810}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PageNavInnerComponent(
    {
        as: _Component = _Builtin.NavbarWrapper,
        headlineMenuNavHeadline = "explore",
        headlineMenuNavHeadlineTag = "h2",

        menuLink1MenuLink = {
            href: "#"
        },

        menuLink1MenuText = "Home",
        menuLink2MenuText = "Meet the rebels",

        menuLink2MeetTheRebels = {
            href: "#"
        },

        menuLink3MenuText = "Solutions",
        m3Submenu1SubmenuHeadline = "Revenue Strategy",
        m3Submenu1SubmenuParagraph = "Maximize topline and margin with data-backed strategy",
        m3Submenu2SubmenuHeadline = "BRAND ACTIVATION",
        m3Submenu3SubmenuHeadline = "Optimized Distribution",
        m3Submenu4SubmenuHeadline = "Tech Integration",
        m3Submenu2SubmenuParagraph = "Create demand and drive bookings with targeted marketing.",
        m3Submenu3SubmenuParagraph = "Amplify your presence, control your channels, increase conversions.",
        m3Submenu3SubmenuTag = "Connect Strategically",
        m3Submenu2SubmenuTag = "Generate Demand",
        m3Submenu4SubmenuParagraph = "Deploy and align the systems that power your hotel.",
        m3Submenu4SubmenuTag = "Build Your Engine",
        menuLink4MenuText = "Resources",
        m4Submenu1SubmenuHeadline = "CTRLShift Blog",
        m4Submenu2SubmenuHeadline = "Travel Trends",
        m4Submenu3SubmenuHeadline = "Revenue Toolkits",
        m4Submenu4SubmenuHeadline = "Client Hub",
        m4Submenu1SubmenuParagraph = "Where we shareour tips and ideas ongeneratingrevenue atyour property",
        m4Submenu2SubmenuParagraph = "A collection of trends from the largest travel sites, researchers, and companies",
        m4Submenu3SubmenuParagraph = "Packed with strategies and resources to help increase revenue.",
        m4Submenu4SubmenuParagraph = "Real-time metrics + a full view of our current engagement or project.",
        m4Submenu1SubmenuTag = "Expore the trends",
        m4Submenu2SubmenuTag = "Explore the trends",
        m4Submenu3SubmenuTag = "Expore the trends",
        m4Submenu4SubmenuTag = "Expore the trends",
        m4Submenu1Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3a9f_726a15c1e835325a1ae274a424187e88_get-quote.svg",
        menuLink5MenuLinkText = "Partners",

        menuLink5MenuLink = {
            href: "#"
        },

        menuLink6MenuLink = {
            href: "#"
        },

        menuLink7MenuLink = {
            href: "#"
        },

        menuLink7MenuLinkText = "CLient login",
        menuLink6MenuLinkText = "faq",

        menuLink3SubmenuLink1 = {
            href: "#"
        },

        menuLink3SubmenuLink2 = {
            href: "#"
        },

        menuLink3SubmenuLink3 = {
            href: "#"
        },

        menuLink3SubmenuLink4 = {
            href: "#"
        },

        m3Submenu1SubmenuTag = "Maximize Your Topline",
        m4Submenu2Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa0_d542d97d71213306b087706fc9f5ef01_plane.svg",
        m4Submenu3Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa2_c9bb3cba00d02a45f7710f7bfd302570_gear.svg",
        m4Submenu4Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa1_13f6256409a2a7a3236ad3d688e95c99_labtop-with-cursor.svg",

        menuLink4SubmenuLink1 = {
            href: "#"
        },

        menuLink4SubmenuLink2 = {
            href: "#"
        },

        menuLink4SubmenuLink3 = {
            href: "#"
        },

        menuLink4SubmenuLink4 = {
            href: "#"
        },

        settingsNavBarId,
        settingsNavBarVisibility = true,
        settingsNavBarMainText = "MENU",
        triggerMenuTextVisibility = true,
        triggerMenuIconVisibility = true
    }
) {
    _interactions.useInteractions(_interactionsData);

    return settingsNavBarVisibility ? <_Component
        className="rebel-style--page-nav"
        tag="div"
        id={settingsNavBarId}
        config={{
            easing: "ease-out",
            easing2: "ease-in",
            duration: 400,
            docHeight: true,
            noScroll: true,
            animation: "over-left",
            collapse: "all"
        }}><_Builtin.NavbarButton
            className="rebel-style--page-nav_menu-button"
            id="w-node-_2599fd81-a003-972b-f2af-9cbbcf3451ed-cf3451ec"
            tag="div"
            data-watch="page-nav-btn"><_Builtin.Block
                className="rebel-style--page-nav_trigger_menu"
                tag="div"
                data-trigger="page-nav_menu"><_Builtin.Block
                    className="rebel-style--page-nav_menu-bg-circle"
                    tag="div"
                    data-target="page-nav_bg-circle" /><_Builtin.Block className="rebel-style--page-nav_menu-wrapper" tag="div"><_Builtin.Block
                        className="rebel-style--page-nav_line"
                        tag="div"
                        data-target="page-nav_menu-line" />{triggerMenuTextVisibility ? <_Builtin.Block
                        className="rebel-style--page-nav_text"
                        tag="div"
                        data-target="page-nav_menu-text">{"Menu"}</_Builtin.Block> : null}{triggerMenuIconVisibility ? <_Builtin.Image
                        className="rebel-style--page-nav_menu-icon"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        data-target="page-nav_menu-icon"
                        alt="Asterisk Icon"
                        src="https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68ce36fc04efd02eeb070d95_dffbd9532c91c5f9296aaeb82c2f9f6e_asterisk.svg" /> : null}</_Builtin.Block></_Builtin.Block></_Builtin.NavbarButton><_Builtin.NavbarMenu className="rebel-style--page-nav_menu" tag="nav" role="navigation"><_Builtin.Block className="rebel-style--page-nav_grid" tag="div"><_Builtin.Block
                    className="rebel-style--page-nav_border-right"
                    id="w-node-_2599fd81-a003-972b-f2af-9cbbcf3451f7-cf3451ec"
                    tag="div" /><_Builtin.Block
                    className="rebel-style--headline-wrapper rebel-style--padding-left_xs rebel-style--padding-bottom_sm rebel-style--text-color-blue"
                    id="w-node-_2599fd81-a003-972b-f2af-9cbbcf3451f8-cf3451ec"
                    tag="div"><_Builtin.Heading
                        className="rebel-style--page-nav_heading"
                        id="w-node-_2599fd81-a003-972b-f2af-9cbbcf3451f9-cf3451ec"
                        tag={headlineMenuNavHeadlineTag}>{headlineMenuNavHeadline}</_Builtin.Heading></_Builtin.Block><_Builtin.Block
                    className="rebel-style--page-nav_links-wrapper rebel-style--text-color-blue"
                    id="w-node-_2599fd81-a003-972b-f2af-9cbbcf3451fa-cf3451ec"
                    tag="div"><_Builtin.Block className="rebel-style--page-nav_link-block" tag="div"><_Builtin.Link
                            className="rebel-style--page-nav_link"
                            data-w-id="2599fd81-a003-972b-f2af-9cbbcf3451fc"
                            button={false}
                            dropdown-1="resize-trigger"
                            dropdown-2="."
                            block="inline"
                            options={{
                                href: "#"
                            }}><_Builtin.Block
                                className="rebel-style--pagenav_text"
                                tag="div"
                                navbar-onclick="dropdown-1"
                                dropdown-1="font-size-trigger"
                                dropdown-2="font-size-trigger">{menuLink1MenuText}</_Builtin.Block><_Builtin.Block
                                className="rebel-style--navbar_liine rebel-style--is-visible-onhover"
                                tag="div"
                                navbar-line="on-hover" /></_Builtin.Link></_Builtin.Block><_Builtin.Block className="rebel-style--page-nav_link-block" tag="div"><_Builtin.Link
                            className="rebel-style--page-nav_link"
                            button={false}
                            dropdown-1="resize-trigger"
                            dropdown-2="."
                            block="inline"
                            options={{
                                href: "#"
                            }}><_Builtin.Block
                                className="rebel-style--pagenav_text"
                                tag="div"
                                navbar-onclick="dropdown-1"
                                dropdown-1="font-size-trigger"
                                dropdown-2="font-size-trigger">{menuLink2MenuText}</_Builtin.Block><_Builtin.Block
                                className="rebel-style--navbar_liine rebel-style--is-visible-onhover"
                                tag="div"
                                navbar-line="on-hover" /></_Builtin.Link></_Builtin.Block><_Builtin.DropdownWrapper
                        className="rebel-style--page-nav_link-block rebel-style--is-hidden_mobile-p"
                        data-w-id="2599fd81-a003-972b-f2af-9cbbcf34521b"
                        tag="div"
                        delay={300}
                        hover={false}><_Builtin.DropdownToggle
                            className="rebel-style--page-navbar_menu-dropdown rebel-style--link-nav"
                            id="w-node-_2599fd81-a003-972b-f2af-9cbbcf34521c-cf3451ec"
                            tag="div"><_Builtin.HtmlEmbed
                                className="rebel-style--page-navbar_dropdown-icon"
                                value="%3Csvg%20viewBox%3D%220%200%20100%20100%22%20id%3D%22right-arrow%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22%23163666%22%20d%3D%22M50.868%2078.016l36.418-26.055c.66-.471%201.049-1.233%201.051-2.043%200-.006%200-.006%200-.006%20-.002-.815-.396-1.575-1.059-2.048L50.86%2021.977c-.767-.546-1.776-.616-2.612-.183%20-.835.426-1.361%201.292-1.361%202.236v12.183l-32.709-.001c-1.39%200-2.515%201.125-2.515%202.516l.001%2022.541c-.001%201.389%201.124%202.515%202.516%202.516h32.706v12.187c0%20.94.53%201.803%201.366%202.237%20.837.432%201.848.358%202.616-.193Z%22%2F%3E%3C%2Fsvg%3E" /><_Builtin.Block className="rebel-style--page-nav_link" tag="div">{menuLink3MenuText}</_Builtin.Block></_Builtin.DropdownToggle><_Builtin.DropdownList
                            className="rebel-style--page-navbar_dropdown-list rebel-style--solutions"
                            tag="nav"><_Builtin.Block className="rebel-style--page-navbar_container" tag="div"><_Builtin.Block className="rebel-style--pagebar_dropdown-wrapper" tag="div"><_Builtin.Block className="rebel-style--pagenav_content-wrapper" tag="div"><_Builtin.Block className="rebel-style--pagenav_content" tag="div"><WhiteNavcardFullpage /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper><_Builtin.DropdownWrapper
                        className="rebel-style--page-nav_link-block rebel-style--is-visible-mobile-p"
                        tag="div"
                        delay={0}
                        hover={false}><_Builtin.DropdownToggle className="rebel-style--page-navbar_menu-dropdown" tag="div"><_Builtin.HtmlEmbed
                                className="rebel-style--page-navbar_dropdown-icon rebel-style--is-down"
                                value="%3Csvg%20viewBox%3D%220%200%20100%20100%22%20id%3D%22down-arrow%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22%23163666%22%20d%3D%22M21.984%2050.868l26.055%2036.418c.471.66%201.233%201.049%202.043%201.051%20.006%200%20.006%200%20.006%200%20.815-.002%201.575-.396%202.048-1.059l25.887-36.417c.546-.767.616-1.776.183-2.612%20-.426-.835-1.292-1.361-2.236-1.361H63.787l.001-32.709c0-1.39-1.125-2.515-2.516-2.515l-22.541.001c-1.389-.001-2.515%201.124-2.516%202.516v32.705H24.029c-.94%200-1.803.53-2.237%201.367%20-.433.836-.358%201.847.192%202.615Z%22%2F%3E%3C%2Fsvg%3E" /><_Builtin.Block
                                className="rebel-style--page-nav_link rebel-style--text-color-primary"
                                tag="div">{menuLink3MenuText}</_Builtin.Block></_Builtin.DropdownToggle><_Builtin.DropdownList
                            className="rebel-style--page-navbar_dropdown-list rebel-style--is-mobile-version"
                            tag="nav"><_Builtin.Block className="rebel-style--page-nav_sub-link_block" tag="div"><_Builtin.Link
                                    className="rebel-style--page-nav_sublink"
                                    button={false}
                                    block=""
                                    options={menuLink3SubmenuLink1}>{m3Submenu1SubmenuHeadline}</_Builtin.Link></_Builtin.Block><_Builtin.Block className="rebel-style--page-nav_sub-link_block" tag="div"><_Builtin.Link
                                    className="rebel-style--page-nav_sublink"
                                    button={false}
                                    block=""
                                    options={menuLink3SubmenuLink2}>{m3Submenu2SubmenuHeadline}</_Builtin.Link></_Builtin.Block><_Builtin.Block className="rebel-style--page-nav_sub-link_block" tag="div"><_Builtin.Link
                                    className="rebel-style--page-nav_sublink"
                                    button={false}
                                    block=""
                                    options={menuLink3SubmenuLink3}>{m3Submenu3SubmenuHeadline}</_Builtin.Link></_Builtin.Block><_Builtin.Block className="rebel-style--page-nav_sub-link_block" tag="div"><_Builtin.Link
                                    className="rebel-style--page-nav_sublink"
                                    button={false}
                                    block=""
                                    options={menuLink3SubmenuLink4}>{m3Submenu4SubmenuHeadline}</_Builtin.Link></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper><_Builtin.DropdownWrapper
                        className="rebel-style--page-nav_link-block rebel-style--is-hidden_mobile-p"
                        tag="div"
                        delay={300}
                        hover={false}><_Builtin.DropdownToggle
                            className="rebel-style--page-navbar_menu-dropdown rebel-style--link-nav"
                            id="w-node-_2599fd81-a003-972b-f2af-9cbbcf345239-cf3451ec"
                            tag="div"><_Builtin.HtmlEmbed
                                className="rebel-style--page-navbar_dropdown-icon"
                                value="%3Csvg%20viewBox%3D%220%200%20100%20100%22%20id%3D%22right-arrow%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22%23163666%22%20d%3D%22M50.868%2078.016l36.418-26.055c.66-.471%201.049-1.233%201.051-2.043%200-.006%200-.006%200-.006%20-.002-.815-.396-1.575-1.059-2.048L50.86%2021.977c-.767-.546-1.776-.616-2.612-.183%20-.835.426-1.361%201.292-1.361%202.236v12.183l-32.709-.001c-1.39%200-2.515%201.125-2.515%202.516l.001%2022.541c-.001%201.389%201.124%202.515%202.516%202.516h32.706v12.187c0%20.94.53%201.803%201.366%202.237%20.837.432%201.848.358%202.616-.193Z%22%2F%3E%3C%2Fsvg%3E" /><_Builtin.Block
                                className="rebel-style--page-nav_link rebel-style--text-color-primary"
                                tag="div">{menuLink4MenuText}</_Builtin.Block></_Builtin.DropdownToggle><_Builtin.DropdownList
                            className="rebel-style--page-navbar_dropdown-list rebel-style--menu-dropdown-2"
                            tag="nav"><_Builtin.Block className="rebel-style--page-navbar_container" tag="div"><_Builtin.Block className="rebel-style--pagebar_dropdown-wrapper" tag="div"><_Builtin.Block className="rebel-style--pagenav_content-wrapper" tag="div"><_Builtin.Block className="rebel-style--pagenav_content" tag="div"><ColorNavcardFullpage /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper><_Builtin.DropdownWrapper
                        className="rebel-style--page-nav_link-block rebel-style--is-visible-mobile-p"
                        tag="div"
                        delay={0}
                        hover={false}><_Builtin.DropdownToggle className="rebel-style--page-navbar_menu-dropdown" tag="div"><_Builtin.HtmlEmbed
                                className="rebel-style--page-navbar_dropdown-icon rebel-style--is-down"
                                value="%3Csvg%20viewBox%3D%220%200%20100%20100%22%20id%3D%22down-arrow%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22%23163666%22%20d%3D%22M21.984%2050.868l26.055%2036.418c.471.66%201.233%201.049%202.043%201.051%20.006%200%20.006%200%20.006%200%20.815-.002%201.575-.396%202.048-1.059l25.887-36.417c.546-.767.616-1.776.183-2.612%20-.426-.835-1.292-1.361-2.236-1.361H63.787l.001-32.709c0-1.39-1.125-2.515-2.516-2.515l-22.541.001c-1.389-.001-2.515%201.124-2.516%202.516v32.705H24.029c-.94%200-1.803.53-2.237%201.367%20-.433.836-.358%201.847.192%202.615Z%22%2F%3E%3C%2Fsvg%3E" /><_Builtin.Block
                                className="rebel-style--page-nav_link rebel-style--text-color-primary"
                                tag="div">{menuLink4MenuText}</_Builtin.Block></_Builtin.DropdownToggle><_Builtin.DropdownList
                            className="rebel-style--page-navbar_dropdown-list rebel-style--is-mobile-version"
                            tag="nav"><_Builtin.Block className="rebel-style--page-nav_sub-link_block" tag="div"><_Builtin.Link
                                    className="rebel-style--page-nav_sublink"
                                    button={false}
                                    block=""
                                    options={menuLink4SubmenuLink3}>{m4Submenu3SubmenuHeadline}</_Builtin.Link><_Builtin.Block className="rebel-style--page-nav_sub-link_line" tag="div" /></_Builtin.Block><_Builtin.Block className="rebel-style--page-nav_sub-link_block" tag="div"><_Builtin.Link
                                    className="rebel-style--page-nav_sublink"
                                    button={false}
                                    block=""
                                    options={menuLink4SubmenuLink2}>{m4Submenu2SubmenuHeadline}</_Builtin.Link><_Builtin.Block className="rebel-style--page-nav_sub-link_line" tag="div" /></_Builtin.Block><_Builtin.Block className="rebel-style--page-nav_sub-link_block" tag="div"><_Builtin.Link
                                    className="rebel-style--page-nav_sublink"
                                    button={false}
                                    block=""
                                    options={menuLink4SubmenuLink1}>{m4Submenu1SubmenuHeadline}</_Builtin.Link><_Builtin.Block className="rebel-style--page-nav_sub-link_line" tag="div" /></_Builtin.Block><_Builtin.Block className="rebel-style--page-nav_sub-link_block" tag="div"><_Builtin.Link
                                    className="rebel-style--page-nav_sublink"
                                    button={false}
                                    block=""
                                    options={menuLink4SubmenuLink4}>{m4Submenu4SubmenuHeadline}</_Builtin.Link><_Builtin.Block className="rebel-style--page-nav_sub-link_line" tag="div" /></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper><_Builtin.Block className="rebel-style--page-nav_link-block" tag="div"><_Builtin.Link
                            className="rebel-style--page-nav_link"
                            button={false}
                            dropdown-1="resize-trigger"
                            dropdown-2="."
                            block="inline"
                            options={{
                                href: "#"
                            }}><_Builtin.Block
                                className="rebel-style--pagenav_text"
                                tag="div"
                                navbar-onclick="dropdown-1"
                                dropdown-1="font-size-trigger"
                                dropdown-2="font-size-trigger">{menuLink5MenuLinkText}</_Builtin.Block><_Builtin.Block
                                className="rebel-style--navbar_liine rebel-style--is-visible-onhover"
                                tag="div"
                                navbar-line="on-hover" /></_Builtin.Link></_Builtin.Block><_Builtin.Link
                        className="rebel-style--page-nav_link"
                        button={false}
                        dropdown-1="resize-trigger"
                        dropdown-2="."
                        block="inline"
                        options={{
                            href: "#"
                        }}><_Builtin.Block
                            className="rebel-style--pagenav_text"
                            tag="div"
                            navbar-onclick="dropdown-1"
                            dropdown-1="font-size-trigger"
                            dropdown-2="font-size-trigger">{menuLink6MenuLinkText}</_Builtin.Block><_Builtin.Block
                            className="rebel-style--navbar_liine rebel-style--is-visible-onhover"
                            tag="div"
                            navbar-line="on-hover" /></_Builtin.Link><_Builtin.Link
                        className="rebel-style--page-nav_link"
                        button={false}
                        dropdown-1="resize-trigger"
                        dropdown-2="."
                        block="inline"
                        options={{
                            href: "#"
                        }}><_Builtin.Block
                            className="rebel-style--pagenav_text"
                            tag="div"
                            navbar-onclick="dropdown-1"
                            dropdown-1="font-size-trigger"
                            dropdown-2="font-size-trigger">{menuLink7MenuLinkText}</_Builtin.Block><_Builtin.Block
                            className="rebel-style--navbar_liine rebel-style--is-visible-onhover"
                            tag="div"
                            navbar-line="on-hover" /></_Builtin.Link><_Builtin.Block
                        className="rebel-style--page-nav_link-block rebel-style--is-padding-right_20pct rebel-style--margin-top_sm rebel-style--trigger_page-navbar_close"
                        tag="div"><LetsWorkTogetherButton optionsSize="Responsive" buttonButtonCtaText="Get In Touch" /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.NavbarMenu></_Component> : null;
} tag="div"><_Builtin.Link
                                                        className="color-navcard is-brand-color-8"
                                                        button={false}
                                                        block="inline"
                                                        options={dropdownMenuLink4SubmenuLink4}><_Builtin.Block
                                                            className="color-navcard_right-content is-inverse_brand-color-8"
                                                            id="w-node-_27e585d3-4cff-c7d3-47c7-424dfb442d28-38fd65f9"
                                                            tag="div"><_Builtin.Block className="navcard_headline-wrapper" tag="div">{m4Submenu4IconVisibility ? <_Builtin.Block className="navcard_icon" tag="div"><_Builtin.Image
                                                                        className="icon_3x3 is-icon-brand-color-6"
                                                                        width="auto"
                                                                        height="auto"
                                                                        loading="lazy"
                                                                        src={m4Submenu4Icon} /></_Builtin.Block> : null}<_Builtin.Heading
                                                                    className="navcard_headline dropdown-2_max-width"
                                                                    tag={m4Submenu4SubmenuHeadlineTag}>{m4Submenu4SubmenuHeadline}</_Builtin.Heading></_Builtin.Block><_Builtin.Block className="navcard_paragraph" tag="div">{m4Submenu4SubmenuParagraph}</_Builtin.Block><_Builtin.Block className="navcard_tag-link" tag="div">{m4Submenu4SubmenuTag}</_Builtin.Block></_Builtin.Block>{m4Submenu4ImageVisibility ? <_Builtin.Block className="color-navcard_left-content" tag="div"><_Builtin.Image
                                                                className="navcard_image"
                                                                width="auto"
                                                                height="auto"
                                                                loading="lazy"
                                                                src={m4Submenu4Image} /></_Builtin.Block> : null}</_Builtin.Link></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper> : null}{dropdownMenuLink4MenuLink4Visibility ? <_Builtin.DropdownWrapper
                        className="page-nav_link-block is-visible-mobile-p"
                        data-w-id="c312d4dc-9a43-7774-0faf-5df038fd66b7"
                        tag="div"
                        delay={0}
                        hover={false}><_Builtin.DropdownToggle className="page-navbar_menu-dropdown" tag="div"><_Builtin.HtmlEmbed
                                className="page-navbar_dropdown-icon is-down"
                                value="%3Csvg%20viewBox%3D%220%200%20100%20100%22%20id%3D%22down-arrow%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22%23163666%22%20d%3D%22M21.984%2050.868l26.055%2036.418c.471.66%201.233%201.049%202.043%201.051%20.006%200%20.006%200%20.006%200%20.815-.002%201.575-.396%202.048-1.059l25.887-36.417c.546-.767.616-1.776.183-2.612%20-.426-.835-1.292-1.361-2.236-1.361H63.787l.001-32.709c0-1.39-1.125-2.515-2.516-2.515l-22.541.001c-1.389-.001-2.515%201.124-2.516%202.516v32.705H24.029c-.94%200-1.803.53-2.237%201.367%20-.433.836-.358%201.847.192%202.615Z%22%2F%3E%3C%2Fsvg%3E" /><_Builtin.Block className="page-nav_link text-color-brand-primany-5" tag="div">{dropdownMenuLink4MenuText}</_Builtin.Block></_Builtin.DropdownToggle><_Builtin.DropdownList className="page-navbar_dropdown-list is-mobile-version" tag="nav"><_Builtin.Block className="page-nav_sub-link_block" tag="div"><_Builtin.Link
                                    className="page-nav_sublink"
                                    button={false}
                                    block=""
                                    options={dropdownMenuLink4SubmenuLink3}>{m4Submenu3SubmenuHeadline}</_Builtin.Link><_Builtin.Block className="page-nav_sub-link_line" tag="div" /></_Builtin.Block><_Builtin.Block className="page-nav_sub-link_block" tag="div"><_Builtin.Link
                                    className="page-nav_sublink"
                                    button={false}
                                    block=""
                                    options={dropdownMenuLink4SubmenuLink2}>{m4Submenu2SubmenuHeadline}</_Builtin.Link><_Builtin.Block className="page-nav_sub-link_line" tag="div" /></_Builtin.Block><_Builtin.Block className="page-nav_sub-link_block" tag="div"><_Builtin.Link
                                    className="page-nav_sublink"
                                    button={false}
                                    block=""
                                    options={dropdownMenuLink4SubmenuLink1}>{m4Submenu1SubmenuHeadline}</_Builtin.Link><_Builtin.Block className="page-nav_sub-link_line" tag="div" /></_Builtin.Block><_Builtin.Block className="page-nav_sub-link_block" tag="div"><_Builtin.Link
                                    className="page-nav_sublink"
                                    button={false}
                                    block=""
                                    options={dropdownMenuLink4SubmenuLink4}>{m4Submenu4SubmenuHeadline}</_Builtin.Link><_Builtin.Block className="page-nav_sub-link_line" tag="div" /></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper> : null}{menuLink5MenuLink5Visibility ? <_Builtin.Block className="page-nav_link-block" tag="div"><_Builtin.Block className="page-nav_link-wrapper" tag="div"><_Builtin.Link
                                className="page-nav_link"
                                id="w-node-c312d4dc-9a43-7774-0faf-5df038fd66c9-38fd65f9"
                                button={false}
                                block=""
                                options={menuLink5MenuLink}>{menuLink5MenuLinkText}</_Builtin.Link><_Builtin.Block className="page-nav_underline" tag="div" /></_Builtin.Block><_Builtin.Block className="page-nav_sub-menu_container" tag="div"><_Builtin.Block className="page-nav_sub-link_block is-hidden-2" tag="div"><_Builtin.Link
                                    className="page-nav_sublink"
                                    button={false}
                                    block=""
                                    options={{
                                        href: "#"
                                    }}>{"shop 1"}</_Builtin.Link><_Builtin.Block className="page-nav_sub-link_line" tag="div" /></_Builtin.Block><_Builtin.Block className="page-nav_sub-link_block is-hidden-2" tag="div"><_Builtin.Link
                                    className="page-nav_sublink"
                                    button={false}
                                    block=""
                                    options={{
                                        href: "#"
                                    }}>{"shop 2"}</_Builtin.Link><_Builtin.Block className="page-nav_sub-link_line" tag="div" /></_Builtin.Block><_Builtin.Block className="page-nav_sub-link_block is-hidden-2" tag="div"><_Builtin.Link
                                    className="page-nav_sublink"
                                    button={false}
                                    block=""
                                    options={{
                                        href: "#"
                                    }}>{"shop 3"}</_Builtin.Link><_Builtin.Block className="page-nav_sub-link_line" tag="div" /></_Builtin.Block></_Builtin.Block></_Builtin.Block> : null}{menuLink6MenuLink6Visibility ? <_Builtin.Block className="page-nav_link-block" tag="div"><_Builtin.Block className="page-nav_link-wrapper" tag="div"><_Builtin.Link
                                className="page-nav_link"
                                button={false}
                                block=""
                                options={menuLink6MenuLink}>{menuLink6MenuLinkText}</_Builtin.Link><_Builtin.Block className="page-nav_underline" tag="div" /></_Builtin.Block></_Builtin.Block> : null}{menuLink7MenuLink7Visibility ? <_Builtin.Block className="page-nav_link-block" tag="div"><_Builtin.Block className="page-nav_link-wrapper" tag="div"><_Builtin.Link
                                className="page-nav_link"
                                button={false}
                                block=""
                                options={menuLink7MenuLink}>{menuLink7MenuLinkText}</_Builtin.Link><_Builtin.Block className="page-nav_underline" tag="div" /></_Builtin.Block></_Builtin.Block> : null}{contactLinkButtonVisibility ? <_Builtin.Block
                        className="page-nav_link-block is-padding-right_20pct margin-top_small-2 trigger_page-navbar_close"
                        tag="div"><_Builtin.HtmlEmbed
                            value="%3Cstyle%3E%0A%0A.is-rebel%2C%0A.text-rebel%20%7B%0A%20%20background-image%3A%20linear-gradient(to%20right%2C%20%2327498b%2C%20%23145491%2C%20%23005e95%2C%20%23006897%2C%20%23007198%2C%20%2300789b%2C%20%23007f9d%2C%20%2300869f%2C%20%23008ea5%2C%20%230096ab%2C%20%23009eb1%2C%20%2300a6b6%2C%20%2371c9c5%2C%20%237aceb5%2C%20%238fd2a2%2C%20%23abd38e%2C%20%23ccd17e%2C%20%23dbca73%2C%20%23ebc16d%2C%20%23fab86b%2C%20%23f9aa64%2C%20%23f89b5e%2C%20%23f68c5b%2C%20%23f37d59%2C%20%23f37d59%2C%20%23f07555%2C%20%23ec6d51%2C%20%23e9654e%2C%20%23e55c4b%2C%20%23df554f%2C%20%23d84e53%2C%20%23d04856%2C%20%23c2455f%2C%20%23b14565%2C%20%23a04569%2C%20%238e456a)%3B%0A%7D%0A%0A%3C%2Fstyle%3E" /><LetsWorkTogetherButton
                            buttonButtonText={contactLinkButtonText}
                            optionsSize={contactLinkButtonSize}
                            iconIcon={contactLinkIcon}
                            optionsUnderlineVisibility={contactLinkUnderlineVisibility}
                            buttonButtonLink={contactLinkButtonLink}
                            iconIconAltText={contactLinkIconAltText} /></_Builtin.Block> : null}</_Builtin.Block></_Builtin.Block></_Builtin.NavbarMenu></_Component> : null;
}