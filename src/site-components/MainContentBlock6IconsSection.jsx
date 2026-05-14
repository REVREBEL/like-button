"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-13271":{"id":"e-13271","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-13272"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359,"origin":["6946540cc72b976861f8c836","e-71"]},"e-13273":{"id":"e-13273","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4759","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13274"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114,"origin":["6946540cc72b976861f8c836","e-458"]},"e-13321":{"id":"e-13321","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-13322"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"82094d3b-1c07-091c-b005-bd81f7076b18","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82094d3b-1c07-091c-b005-bd81f7076b18","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1755436931260,"origin":["6946540cc72b976861f8c836","e-156"]},"e-13323":{"id":"e-13323","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-13324"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"82094d3b-1c07-091c-b005-bd81f7076b19","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82094d3b-1c07-091c-b005-bd81f7076b19","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1755437250752,"origin":["6946540cc72b976861f8c836","e-158"]},"e-13394":{"id":"e-13394","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4756","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13395"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758820901395,"origin":["6946540cc72b976861f8c836","e-664"]}},"actionLists":{"a-4759":{"id":"a-4759","origin":["6946540cc72b976861f8c836","a-22"],"title":"sticky-headline_fade-in 3","actionItemGroups":[{"actionItems":[{"id":"a-4759-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4759-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-4756":{"id":"a-4756","origin":["6946540cc72b976861f8c836","a-165"],"title":"Preview Card [HIDE] 28","actionItemGroups":[{"actionItems":[{"id":"a-4756-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rebel-style--component_wrapper","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd69a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758820974099},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function MainContentBlock6IconsSection(
    {
        as: _Component = _Builtin.Section,
        mainHeadlineTag = "h2",
        mainSubHeadlineTag = "h3",
        mainSubHeadlineText = "Elevated Efficiency.",
        mainHeadlineText = "Technology Mastery. ",
        mainEyebrowText = "Tech Fluency",
        paragraphText = <>{"We help hotels harness the full potential of their technology. In an industry often tied to conventional approaches, we take a different path—leveraging deep expertise to streamline operations, optimize platforms, and drive results. "}<br /><br />{"From Opera Cloud and Sabre Hospitality Solutions to the latest PMS and distribution tools, our team doesn’t just use systems—we master them, ensuring your technology works harder for you."}</>,
        settingsSectionId,
        settingsSectionVisibility = true,
        imageImage1 = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d19bbb0edee3fc410f87dc_059ce2328f6d84875340ed536281bf47_amadeus_circle.png",
        image2 = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d19bbb0edee3fc410f87e0_c0c513ef2825212cb612b7a0941668e1_ota_insights_logo.png",
        imageImage3 = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d19bbb0edee3fc410f87e4_8f7d1eccf4591da5522f2ac34b8e67b0_oracle_circle.png",
        image4 = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d19bbb0edee3fc410f87e8_795a5bdba08aaf8dd739a7182a5fdef1_travelclick_circle.png",
        imageImage5 = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d19bbb0edee3fc410f87ec_dab44326a17b726e9d6dfce6d5b51330_travelclick_circle.png",
        imageImage6 = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d19bbb0edee3fc410f87f0_6046be3e4c58818c44a3e257f5170a20_sabre_circle.png",
        imageImage7 = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d19bbb0edee3fc410f87f4_11a27bb36af94a6ce8d3048cdc52908a_shr.png",
        imageImage8 = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d19bbc0edee3fc410f87f8_9414d90e8830efbe34f7f3e80c347e0d_ideas_circle.png",
        imageImage9 = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d19bbc0edee3fc410f87fc_3e82d9093da8e9a78c4c7b50887d7348_duetto_%20circle.png"
    }
) {
    _interactions.useInteractions(_interactionsData);

    return settingsSectionVisibility ? <_Component
        className="rebel-style--component_wrapper"
        grid={{
            type: "section"
        }}
        tag="section"
        id={settingsSectionId}><_Builtin.Block className="rebel-style--component_container" tag="div"><_Builtin.BlockContainer
                className="rebel-style--component_padding rebel-style--padding-md rebel-style--text-color-primary rebel-style--is-mobile_padding_none"
                grid={{
                    type: "container"
                }}
                tag="div"><_Builtin.Block className="rebel-style--padding-block_lg" tag="div"><_Builtin.Layout id="w-node-_82094d3b-1c07-091c-b005-bd81f7076b13-f7076b0f"><_Builtin.Cell
                            className="rebel-style--cell-align-middle-center"
                            id="w-node-_82094d3b-1c07-091c-b005-bd81f7076b14-f7076b0f"><_Builtin.Block className="rebel-style--content_left rebel-style--gap-sm" tag="div"><_Builtin.Block
                                    className="rebel-style--headline-wrapper rebel-style--text-color-blue"
                                    tag="div"><_Builtin.Block className="rebel-style--eyebrow" tag="div">{mainEyebrowText}</_Builtin.Block><_Builtin.Heading
                                        className="rebel-style--headline-regular rebel-style--mobile-heading-regular rebel-style--font-weight-bold rebel-style--scroll-in-view_sticky-fade-in"
                                        data-w-id="82094d3b-1c07-091c-b005-bd81f7076b18"
                                        tag={mainHeadlineTag}
                                        value="TY">{mainHeadlineText}</_Builtin.Heading><_Builtin.Heading
                                        className="rebel-style--headline-sm rebel-style--flex-algin_stretch rebel-style--text-color-bright-blue rebel-style--mobile-headline-sm rebel-style--scroll-in-view_sticky-fade-in"
                                        data-w-id="82094d3b-1c07-091c-b005-bd81f7076b19"
                                        tag={mainSubHeadlineTag}
                                        value="TY">{mainSubHeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Paragraph className="rebel-style--paragraph rebel-style--tex-color-blue">{paragraphText}</_Builtin.Paragraph></_Builtin.Block><_Builtin.Block
                                className="rebel-style--space-md rebel-style--is-hidden_desktop"
                                tag="div" /></_Builtin.Cell><_Builtin.Cell
                            className="rebel-style--cell-align-middle-center"
                            id="w-node-_82094d3b-1c07-091c-b005-bd81f7076b1c-f7076b0f"><_Builtin.Block
                                className="rebel-style--partners_logo-wrapper"
                                id="w-node-_82094d3b-1c07-091c-b005-bd81f7076b1d-f7076b0f"
                                tag="div"><_Builtin.Block
                                    className="rebel-style--partners_icon-wrapper"
                                    id="w-node-_82094d3b-1c07-091c-b005-bd81f7076b1e-f7076b0f"
                                    tag="div"><_Builtin.Image
                                        className="rebel-style--partner-icon"
                                        id="w-node-_82094d3b-1c07-091c-b005-bd81f7076b1f-f7076b0f"
                                        width="Auto"
                                        height="auto"
                                        loading="lazy"
                                        alt="Integration icon"
                                        src={imageImage1} /></_Builtin.Block><_Builtin.Block
                                    className="rebel-style--partners_icon-wrapper"
                                    id="w-node-_82094d3b-1c07-091c-b005-bd81f7076b20-f7076b0f"
                                    tag="div"><_Builtin.Image
                                        className="rebel-style--partner-icon"
                                        width="auto"
                                        height="auto"
                                        loading="lazy"
                                        alt="Integration icon"
                                        src={image2} /></_Builtin.Block><_Builtin.Block
                                    className="rebel-style--partners_icon-wrapper"
                                    id="w-node-_82094d3b-1c07-091c-b005-bd81f7076b22-f7076b0f"
                                    tag="div"><_Builtin.Image
                                        className="rebel-style--partner-icon"
                                        id="w-node-_82094d3b-1c07-091c-b005-bd81f7076b23-f7076b0f"
                                        width="auto"
                                        height="auto"
                                        loading="lazy"
                                        alt="Integration icon"
                                        src={imageImage3} /></_Builtin.Block><_Builtin.Block
                                    className="rebel-style--partners_icon-wrapper"
                                    id="w-node-_82094d3b-1c07-091c-b005-bd81f7076b24-f7076b0f"
                                    tag="div"><_Builtin.Image
                                        className="rebel-style--partner-icon"
                                        width="auto"
                                        height="auto"
                                        loading="lazy"
                                        alt="Integration icon"
                                        src={image4} /></_Builtin.Block><_Builtin.Block
                                    className="rebel-style--partners_icon-wrapper"
                                    id="w-node-_82094d3b-1c07-091c-b005-bd81f7076b26-f7076b0f"
                                    tag="div"><_Builtin.Image
                                        className="rebel-style--partner-icon"
                                        id="w-node-_82094d3b-1c07-091c-b005-bd81f7076b27-f7076b0f"
                                        width="auto"
                                        height="auto"
                                        loading="lazy"
                                        alt="Integration icon"
                                        src={imageImage5} /></_Builtin.Block><_Builtin.Block
                                    className="rebel-style--partners_icon-wrapper"
                                    id="w-node-_82094d3b-1c07-091c-b005-bd81f7076b28-f7076b0f"
                                    tag="div"><_Builtin.Image
                                        className="rebel-style--partner-icon"
                                        id="w-node-_82094d3b-1c07-091c-b005-bd81f7076b29-f7076b0f"
                                        width="auto"
                                        height="auto"
                                        loading="lazy"
                                        alt="Integration icon"
                                        src={imageImage6} /></_Builtin.Block><_Builtin.Block
                                    className="rebel-style--partners_icon-wrapper"
                                    id="w-node-_82094d3b-1c07-091c-b005-bd81f7076b2a-f7076b0f"
                                    tag="div"><_Builtin.Image
                                        className="rebel-style--partner-icon"
                                        id="w-node-_82094d3b-1c07-091c-b005-bd81f7076b2b-f7076b0f"
                                        width="auto"
                                        height="auto"
                                        loading="lazy"
                                        alt="Integration icon"
                                        src={imageImage7} /></_Builtin.Block><_Builtin.Block
                                    className="rebel-style--partners_icon-wrapper"
                                    id="w-node-_82094d3b-1c07-091c-b005-bd81f7076b2c-f7076b0f"
                                    tag="div"><_Builtin.Image
                                        className="rebel-style--partner-icon"
                                        width="auto"
                                        height="auto"
                                        loading="lazy"
                                        alt="Integration icon"
                                        src={imageImage8} /></_Builtin.Block><_Builtin.Block
                                    className="rebel-style--partners_icon-wrapper"
                                    id="w-node-_82094d3b-1c07-091c-b005-bd81f7076b2e-f7076b0f"
                                    tag="div"><_Builtin.Image
                                        className="rebel-style--partner-icon"
                                        id="w-node-_82094d3b-1c07-091c-b005-bd81f7076b2f-f7076b0f"
                                        width="auto"
                                        height="auto"
                                        loading="lazy"
                                        alt="Integration icon"
                                        src={imageImage9} /></_Builtin.Block></_Builtin.Block></_Builtin.Cell></_Builtin.Layout></_Builtin.Block></_Builtin.BlockContainer></_Builtin.Block></_Component> : null;
}