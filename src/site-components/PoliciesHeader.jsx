"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-13271":{"id":"e-13271","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-13272"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359,"origin":["6946540cc72b976861f8c836","e-71"]},"e-13273":{"id":"e-13273","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4759","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13274"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114,"origin":["6946540cc72b976861f8c836","e-458"]},"e-13394":{"id":"e-13394","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4756","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13395"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758820901395,"origin":["6946540cc72b976861f8c836","e-664"]}},"actionLists":{"a-4759":{"id":"a-4759","origin":["6946540cc72b976861f8c836","a-22"],"title":"sticky-headline_fade-in 3","actionItemGroups":[{"actionItems":[{"id":"a-4759-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4759-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-4756":{"id":"a-4756","origin":["6946540cc72b976861f8c836","a-165"],"title":"Preview Card [HIDE] 28","actionItemGroups":[{"actionItems":[{"id":"a-4756-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rebel-style--component_wrapper","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd69a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758820974099},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PoliciesHeader(
    {
        as: _Component = _Builtin.Block,
        headlineText = <>{"THE"}<br />{"LEGAL"}<br />{"STUFF"}</>,
        headlineTextTag = "h1",
        paragraphText = <>{"Our Privacy Policies and Terms ensure transparency, outlining how we use data and govern our relationship with users. These terms apply to both partners who use our services and those we provide services to. By using our services, you agree to these terms in addition to any other applicable General Terms."}<br /><br />{"If you're using our services on behalf of your company, your company also agrees to these terms. Access our latest policies at the links below or on our website.Our most updated policies can always be found at the links below or at https://revrebel.io/policies."}</>,

        policiesLink1Link = {
            href: "#"
        },

        policiesLink2Link = {
            href: "#"
        },

        policiesLink3Link = {
            href: "#"
        },

        policiesLink4Link = {
            href: "#"
        },

        policiesLink1LinkText = "Privacy Policy",
        policiesLink2LinkText = "Terms of Service",
        policiesLink3LinkText = "Disclaimer",
        policiesLink4LinkText = "End User License Agreement",
        policiesLink4LinkVisibility = true,
        policiesLink3LinkVisibility = true,
        policiesLink2LinkVisibility = true,
        policiesLink1LinkVisibility = true
    }
) {
    _interactions.useInteractions(_interactionsData);

    return (
        <_Component className="rebel-style--component_wrapper" tag="div"><_Builtin.BlockContainer
                className="rebel-style--component_container"
                tag="div"
                grid={{
                    type: "container"
                }}
                id="fixed-root"><_Builtin.Block
                    className="rebel-style--component_padding rebel-style--padding-md rebel-style--text-color-primary"
                    tag="div"><_Builtin.Block
                        className="rebel-style--grid_3-col rebel-style--is-1-2-1 rebel-style--padding_medium rebel-style--is-mobile_padding_none"
                        tag="div"><_Builtin.Block id="w-node-_81be2e0c-650d-189a-a905-13e21abe0282-1abe027e" tag="div"><_Builtin.Heading
                                className="rebel-style--headline-md rebel-style--font-weight-bold rebel-style--headline-animated-block"
                                tag={headlineTextTag}>{headlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block id="w-node-_81be2e0c-650d-189a-a905-13e21abe0284-1abe027e" tag="div"><_Builtin.Paragraph className="rebel-style--paragraph rebel-style--is-color-inherit">{paragraphText}</_Builtin.Paragraph></_Builtin.Block><_Builtin.Block
                            className="rebel-style--margin-left-md rebel-style--padding-top_xxs rebel-style--is-mobile_padding_none"
                            id="w-node-_81be2e0c-650d-189a-a905-13e21abe0286-1abe027e"
                            tag="div"><_Builtin.Block className="rebel-style--label rebel-style--margin-bottom_xs" tag="div">{"Explore Our Polices"}</_Builtin.Block>{policiesLink1LinkVisibility ? <_Builtin.Block className="rebel-style--flex-vertical" tag="div"><_Builtin.Block
                                    className="rebel-style--flex_horizontal"
                                    id="w-node-_81be2e0c-650d-189a-a905-13e21abe028a-1abe027e"
                                    tag="div"><_Builtin.Link
                                        className="rebel-style--link-block rebel-style--flex-align_left rebel-style--flex-horizontal rebel-style--is-color-2"
                                        button={false}
                                        block="inline"
                                        options={policiesLink1Link}><_Builtin.Block
                                            className="rebel-style--tag rebel-style--is-color-2 rebel-style--flex-align_left rebel-style--text-size-regular"
                                            id="w-node-_81be2e0c-650d-189a-a905-13e21abe028c-1abe027e"
                                            tag="div">{policiesLink1LinkText}</_Builtin.Block></_Builtin.Link></_Builtin.Block>{policiesLink2LinkVisibility ? <_Builtin.Block
                                    className="rebel-style--flex_horizontal"
                                    id="w-node-_81be2e0c-650d-189a-a905-13e21abe028d-1abe027e"
                                    tag="div"><_Builtin.Link
                                        className="rebel-style--link-block rebel-style--flex-align_left rebel-style--flex-horizontal rebel-style--is-color-3"
                                        button={false}
                                        block="inline"
                                        options={policiesLink2Link}><_Builtin.Block
                                            className="rebel-style--tag rebel-style--is-color-3 rebel-style--flex-align_left rebel-style--text-size-regular"
                                            tag="div">{policiesLink2LinkText}</_Builtin.Block></_Builtin.Link></_Builtin.Block> : null}{policiesLink3LinkVisibility ? <_Builtin.Block
                                    className="rebel-style--flex_horizontal"
                                    id="w-node-_81be2e0c-650d-189a-a905-13e21abe0290-1abe027e"
                                    tag="div"><_Builtin.Link
                                        className="rebel-style--link-block rebel-style--flex-align_left rebel-style--flex-horizontal rebel-style--is-color-6"
                                        button={false}
                                        block="inline"
                                        options={policiesLink3Link}><_Builtin.Block
                                            className="rebel-style--tag rebel-style--is-color-6 rebel-style--flex-align_left rebel-style--text-size-regular"
                                            tag="div">{policiesLink3LinkText}</_Builtin.Block></_Builtin.Link></_Builtin.Block> : null}{policiesLink4LinkVisibility ? <_Builtin.Block
                                    className="rebel-style--flex_horizontal"
                                    id="w-node-_81be2e0c-650d-189a-a905-13e21abe0293-1abe027e"
                                    tag="div"><_Builtin.Link
                                        className="rebel-style--link-block rebel-style--flex-align_left rebel-style--flex-horizontal rebel-style--is-color-8"
                                        button={false}
                                        block="inline"
                                        options={policiesLink4Link}><_Builtin.Block
                                            className="rebel-style--tag rebel-style--is-color-8 rebel-style--flex-align-left rebel-style--text-size-regular"
                                            tag="div">{policiesLink4LinkText}</_Builtin.Block></_Builtin.Link></_Builtin.Block> : null}</_Builtin.Block> : null}</_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.BlockContainer></_Component>
    );
}