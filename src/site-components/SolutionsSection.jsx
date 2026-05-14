"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-13271":{"id":"e-13271","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-13272"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359,"origin":["6946540cc72b976861f8c836","e-71"]},"e-13273":{"id":"e-13273","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4759","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13274"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114,"origin":["6946540cc72b976861f8c836","e-458"]},"e-13287":{"id":"e-13287","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-13288"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c40","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c40","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":1124,"direction":"LEFT","effectIn":true},"createdOn":1754681758337,"origin":["6946540cc72b976861f8c836","e-45"]},"e-13289":{"id":"e-13289","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-13290"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c41","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c41","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":800,"direction":"LEFT","effectIn":true},"createdOn":1754681870478,"origin":["6946540cc72b976861f8c836","e-49"]},"e-13291":{"id":"e-13291","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-13292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c42","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c42","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":1124,"direction":"BOTTOM","effectIn":true},"createdOn":1754681830024,"origin":["6946540cc72b976861f8c836","e-47"]},"e-13295":{"id":"e-13295","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4769","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13296"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c4c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c4c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1754682668966,"origin":["6946540cc72b976861f8c836","e-59"]},"e-13296":{"id":"e-13296","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4770","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13295"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c4c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c4c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1754682668966,"origin":["6946540cc72b976861f8c836","e-60"]},"e-13297":{"id":"e-13297","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-13298"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c54","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c54","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":1124,"direction":null,"effectIn":true},"createdOn":1758650058141,"origin":["6946540cc72b976861f8c836","e-604"]},"e-13299":{"id":"e-13299","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4769","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-794"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c56","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c56","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1754682473324,"origin":["6946540cc72b976861f8c836","e-55"]},"e-13300":{"id":"e-13300","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4770","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13299"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c56","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c56","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1754682473325,"origin":["6946540cc72b976861f8c836","e-56"]},"e-13301":{"id":"e-13301","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-13302"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c5f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c5f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":1124,"direction":null,"effectIn":true},"createdOn":1758650071696,"origin":["6946540cc72b976861f8c836","e-606"]},"e-13303":{"id":"e-13303","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4769","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13304"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c61","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c61","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1754682507992,"origin":["6946540cc72b976861f8c836","e-57"]},"e-13304":{"id":"e-13304","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4770","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-795"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c61","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c61","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1754682507992,"origin":["6946540cc72b976861f8c836","e-58"]},"e-13305":{"id":"e-13305","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-13306"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c6a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c6a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":1124,"direction":null,"effectIn":true},"createdOn":1758650090763,"origin":["6946540cc72b976861f8c836","e-608"]},"e-13307":{"id":"e-13307","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4769","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13308"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c6c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c6c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1754682431062,"origin":["6946540cc72b976861f8c836","e-53"]},"e-13308":{"id":"e-13308","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4770","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13307"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c6c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c6c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1754682431062,"origin":["6946540cc72b976861f8c836","e-54"]},"e-13394":{"id":"e-13394","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4756","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13395"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758820901395,"origin":["6946540cc72b976861f8c836","e-664"]}},"actionLists":{"a-4759":{"id":"a-4759","origin":["6946540cc72b976861f8c836","a-22"],"title":"sticky-headline_fade-in 3","actionItemGroups":[{"actionItems":[{"id":"a-4759-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4759-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-4769":{"id":"a-4769","origin":["6946540cc72b976861f8c836","a-49"],"title":"SolutionsArrowIn 22","actionItemGroups":[{"actionItems":[{"id":"a-4769-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c4d"},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4769-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".rebel-style--solutions_arrow","selectorGuids":["213d98d9-04ad-7e60-96c3-88065c39facb"]},"xValue":0.0625,"yValue":0.0625,"zValue":0.0625,"xUnit":"rem","yUnit":"rem","zUnit":"rem"}}]},{"actionItems":[{"id":"a-4769-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0.3125,"yValue":-0.625,"zValue":0.0625,"xUnit":"rem","yUnit":"rem","zUnit":"rem"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1656101469775},"a-4770":{"id":"a-4770","origin":["6946540cc72b976861f8c836","a-50"],"title":"SolutionsArrowOut 22","actionItemGroups":[{"actionItems":[{"id":"a-4770-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"ba310320-e22f-0e03-3ceb-5d9fba4b0c4d"},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4770-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".rebel-style--solutions_arrow","selectorGuids":["213d98d9-04ad-7e60-96c3-88065c39facb"]},"xValue":-0.0625,"yValue":-0.0625,"zValue":-0.0625,"xUnit":"rem","yUnit":"rem","zUnit":"rem"}}]},{"actionItems":[{"id":"a-4770-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":-0.3125,"yValue":0.625,"zValue":-0.0625,"xUnit":"rem","yUnit":"rem","zUnit":"rem"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1656101469775},"a-4756":{"id":"a-4756","origin":["6946540cc72b976861f8c836","a-165"],"title":"Preview Card [HIDE] 28","actionItemGroups":[{"actionItems":[{"id":"a-4756-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rebel-style--component_wrapper","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd69a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758820974099},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SolutionsSection(
    {
        as: _Component = _Builtin.BlockContainer,
        mainSectionHeadlineText = <>{"Mavericks "}<br />{"for Hire."}</>,
        mainSectionSubHeadlineText = "4-ways we can help",
        mainSectionParagraphText = "From project management to a comprehensive analysis of your strategy, we offer services that deliver impactful results. No matter the size of your hotel or the complexity of your challenge, if you’re looking for smarter ways to optimize, grow, or simply breathe easier, we’ve got your back.",
        item1HeadlineTag = "h3",
        item1Headline = "Drop-in Specialists",
        item1DescriptionText = "Easy, Flexible Short Term Support in a Specific Area.",
        item2HeadlineTag = "h3",
        item2Headline = "Full Cast & Crew",
        item2DescriptionText = "Full Agency Firepower, a Dedicated Team Backed With our Integrated Platforms",
        item3HeadlineTag = "h3",
        item3Headline = "PROJECT CLOSERS",
        item3DescriptionText = "We can Lead, Plan and Bring Dedicated Projects to the Finish Line.",
        item4HeadlineTag = "h3",
        item4Headline = "REVENUE REWRITERS",
        item4DescriptionText = "Uncover Untapped Revenue With a Focused Deep Dive.",
        item1Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d1035f06f481121f0f783d_6893a4440a25599917e86e40258e04cc_arrow-right.svg",
        item2Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d1035f06f481121f0f783d_6893a4440a25599917e86e40258e04cc_arrow-right.svg",
        item3Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d1035f06f481121f0f783d_6893a4440a25599917e86e40258e04cc_arrow-right.svg",
        item4Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d1035f06f481121f0f783d_6893a4440a25599917e86e40258e04cc_arrow-right.svg",
        item4IconAltText = "__wf_reserved_inherit",
        item3IconAltText = "__wf_reserved_inherit",
        item2IconAltText = "__wf_reserved_inherit",
        item1IconAltText = "__wf_reserved_inherit",
        variant = "Light"
    }
) {
    _interactions.useInteractions(_interactionsData);

    const _styleVariantMap = {
        "Light": "",
        "Dark": "w-variant-236fbc05-81c5-3eec-9197-f9bd467acc95"
    };

    const _activeStyleVariant = _styleVariantMap[variant];

    return (
        <_Component
            className={`rebel-style--component_container rebel-style--max-width_sm ${_activeStyleVariant}`}
            grid={{
                type: "container"
            }}
            tag="div"
            id="mavericks-for-hire"><_Builtin.BlockContainer
                className={`rebel-style--component_wrapper ${_activeStyleVariant}`}
                grid={{
                    type: "container"
                }}
                tag="div"><_Builtin.Block
                    className={`rebel-style--component_padding rebel-style--margin-block_md ${_activeStyleVariant}`}
                    tag="div"><_Builtin.Block
                        className={`rebel-style--solutions_wrapper rebel-style--text-color-blue ${_activeStyleVariant}`}
                        tag="div"><_Builtin.Block
                            className={`rebel-style--solutions_main_headline ${_activeStyleVariant}`}
                            id="w-node-ba310320-e22f-0e03-3ceb-5d9fba4b0c3c-ba4b0c38"
                            tag="div"><_Builtin.Block
                                className={`rebel-style--headline-wrapper ${_activeStyleVariant}`}
                                tag="div"><_Builtin.Block
                                    className={`rebel-style--eyebrow rebel-style--text-size-sm ${_activeStyleVariant}`}
                                    tag="div">{"You have a mission. We have the talent. "}</_Builtin.Block><_Builtin.Heading
                                    className={`rebel-style--headline-md rebel-style--font-weight-bold ${_activeStyleVariant}`}
                                    data-w-id="ba310320-e22f-0e03-3ceb-5d9fba4b0c40"
                                    tag="h2">{mainSectionHeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block
                                className={`rebel-style--headline-sm rebel-style--text-color-bright-blue rebel-style--font-weight-semibold ${_activeStyleVariant}`}
                                id="w-node-ba310320-e22f-0e03-3ceb-5d9fba4b0c41-ba4b0c38"
                                data-w-id="ba310320-e22f-0e03-3ceb-5d9fba4b0c41"
                                tag="div">{mainSectionSubHeadlineText}</_Builtin.Block><_Builtin.Paragraph
                                className={`rebel-style--paragraph ${_activeStyleVariant}`}
                                data-w-id="ba310320-e22f-0e03-3ceb-5d9fba4b0c42">{mainSectionParagraphText}</_Builtin.Paragraph></_Builtin.Block><_Builtin.Block
                            className={`rebel-style--solutions_right-wrapper ${_activeStyleVariant}`}
                            tag="div"><_Builtin.Block
                                className={`rebel-style--solutions_grid ${_activeStyleVariant}`}
                                id="w-node-ba310320-e22f-0e03-3ceb-5d9fba4b0c44-ba4b0c38"
                                tag="div"><_Builtin.Block
                                    className={`rebel-style--solutions_number ${_activeStyleVariant}`}
                                    id="w-node-ba310320-e22f-0e03-3ceb-5d9fba4b0c45-ba4b0c38"
                                    tag="div"><_Builtin.Block
                                        className={`rebel-style--solutions_number ${_activeStyleVariant}`}
                                        tag="div">{"01|"}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                                    className={`rebel-style--solutions_flex-wrapper rebel-style--text-color-primary ${_activeStyleVariant}`}
                                    id="w-node-ba310320-e22f-0e03-3ceb-5d9fba4b0c48-ba4b0c38"
                                    tag="div"><_Builtin.Block
                                        className={`rebel-style--solutions-headline ${_activeStyleVariant}`}
                                        id="w-node-ba310320-e22f-0e03-3ceb-5d9fba4b0c49-ba4b0c38"
                                        tag="div"><_Builtin.Heading
                                            className={`rebel-style--headline-sm rebel-style--margin-bottom_none rebel-style--scroll-in-view_fade-in ${_activeStyleVariant}`}
                                            data-w-id="ba310320-e22f-0e03-3ceb-5d9fba4b0c4a"
                                            tag={item1HeadlineTag}>{item1Headline}</_Builtin.Heading><_Builtin.Block
                                            className={`rebel-style--solutions_subheadline rebel-style--text-color-blue ${_activeStyleVariant}`}
                                            tag="div">{item1DescriptionText}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                                        className={`rebel-style--solutions_arrow ${_activeStyleVariant}`}
                                        id="w-node-ba310320-e22f-0e03-3ceb-5d9fba4b0c4c-ba4b0c38"
                                        data-w-id="ba310320-e22f-0e03-3ceb-5d9fba4b0c4c"
                                        tag="div"><_Builtin.Image
                                            className={`rebel-style--solutions_arrow_icon ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="25"
                                            height="25"
                                            src={item1Icon} /></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                className={`rebel-style--solutions_grid ${_activeStyleVariant}`}
                                id="w-node-ba310320-e22f-0e03-3ceb-5d9fba4b0c4e-ba4b0c38"
                                tag="div"><_Builtin.Block
                                    className={`rebel-style--solutions_number ${_activeStyleVariant}`}
                                    id="w-node-ba310320-e22f-0e03-3ceb-5d9fba4b0c4f-ba4b0c38"
                                    tag="div"><_Builtin.Block
                                        className={`rebel-style--solutions_number ${_activeStyleVariant}`}
                                        tag="div">{"02|"}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                                    className={`rebel-style--solutions_flex-wrapper rebel-style--text-color-primary ${_activeStyleVariant}`}
                                    tag="div"><_Builtin.Block
                                        className={`rebel-style--solutions-headline ${_activeStyleVariant}`}
                                        tag="div"><_Builtin.Heading
                                            className={`rebel-style--headline-sm rebel-style--margin-bottom_none rebel-style--scroll-in-view_fade-in ${_activeStyleVariant}`}
                                            data-w-id="ba310320-e22f-0e03-3ceb-5d9fba4b0c54"
                                            tag={item3HeadlineTag}>{item3Headline}</_Builtin.Heading><_Builtin.Block
                                            className={`rebel-style--solutions_subheadline rebel-style--text-color-blue ${_activeStyleVariant}`}
                                            tag="div">{item3DescriptionText}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                                        className={`rebel-style--solutions_arrow ${_activeStyleVariant}`}
                                        id="w-node-ba310320-e22f-0e03-3ceb-5d9fba4b0c56-ba4b0c38"
                                        data-w-id="ba310320-e22f-0e03-3ceb-5d9fba4b0c56"
                                        tag="div"><_Builtin.Image
                                            className={`rebel-style--solutions_arrow_icon ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="25"
                                            height="25"
                                            src={item3Icon} /><_Builtin.Block
                                            className={`rebel-style--gradient_div rebel-style--blue ${_activeStyleVariant}`}
                                            tag="div" /></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                className={`rebel-style--solutions_grid ${_activeStyleVariant}`}
                                id="w-node-ba310320-e22f-0e03-3ceb-5d9fba4b0c59-ba4b0c38"
                                tag="div"><_Builtin.Block
                                    className={`rebel-style--solutions_number ${_activeStyleVariant}`}
                                    id="w-node-ba310320-e22f-0e03-3ceb-5d9fba4b0c5a-ba4b0c38"
                                    tag="div"><_Builtin.Block
                                        className={`rebel-style--solutions_number ${_activeStyleVariant}`}
                                        tag="div">{"03|"}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                                    className={`rebel-style--solutions_flex-wrapper rebel-style--text-color-primary ${_activeStyleVariant}`}
                                    tag="div"><_Builtin.Block
                                        className={`rebel-style--solutions-headline ${_activeStyleVariant}`}
                                        tag="div"><_Builtin.Heading
                                            className={`rebel-style--headline-sm rebel-style--margin-bottom_none rebel-style--scroll-in-view_fade-in ${_activeStyleVariant}`}
                                            data-w-id="ba310320-e22f-0e03-3ceb-5d9fba4b0c5f"
                                            tag={item4HeadlineTag}>{item4Headline}</_Builtin.Heading><_Builtin.Block
                                            className={`rebel-style--solutions_subheadline rebel-style--text-color-blue ${_activeStyleVariant}`}
                                            tag="div">{item4DescriptionText}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                                        className={`rebel-style--solutions_arrow ${_activeStyleVariant}`}
                                        id="w-node-ba310320-e22f-0e03-3ceb-5d9fba4b0c61-ba4b0c38"
                                        data-w-id="ba310320-e22f-0e03-3ceb-5d9fba4b0c61"
                                        tag="div"><_Builtin.Image
                                            className={`rebel-style--solutions_arrow_icon ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="25"
                                            height="25"
                                            src={item4Icon} /><_Builtin.Block
                                            className={`rebel-style--gradient_div rebel-style--blue ${_activeStyleVariant}`}
                                            tag="div" /></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                className={`rebel-style--solutions_grid ${_activeStyleVariant}`}
                                id="w-node-ba310320-e22f-0e03-3ceb-5d9fba4b0c64-ba4b0c38"
                                tag="div"><_Builtin.Block
                                    className={`rebel-style--solutions_number ${_activeStyleVariant}`}
                                    id="w-node-ba310320-e22f-0e03-3ceb-5d9fba4b0c65-ba4b0c38"
                                    tag="div"><_Builtin.Block
                                        className={`rebel-style--solutions_number ${_activeStyleVariant}`}
                                        tag="div">{"02|"}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                                    className={`rebel-style--solutions_flex-wrapper rebel-style--text-color-primary ${_activeStyleVariant}`}
                                    id="w-node-ba310320-e22f-0e03-3ceb-5d9fba4b0c68-ba4b0c38"
                                    tag="div"><_Builtin.Block
                                        className={`rebel-style--solutions-headline ${_activeStyleVariant}`}
                                        id="w-node-ba310320-e22f-0e03-3ceb-5d9fba4b0c69-ba4b0c38"
                                        tag="div"><_Builtin.Heading
                                            className={`rebel-style--headline-sm rebel-style--margin-bottom_none rebel-style--scroll-in-view_fade-in ${_activeStyleVariant}`}
                                            data-w-id="ba310320-e22f-0e03-3ceb-5d9fba4b0c6a"
                                            tag={item2HeadlineTag}>{item2Headline}</_Builtin.Heading><_Builtin.Block
                                            className={`rebel-style--solutions_subheadline rebel-style--text-color-blue ${_activeStyleVariant}`}
                                            tag="div">{item2DescriptionText}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                                        className={`rebel-style--solutions_arrow ${_activeStyleVariant}`}
                                        id="w-node-ba310320-e22f-0e03-3ceb-5d9fba4b0c6c-ba4b0c38"
                                        data-w-id="ba310320-e22f-0e03-3ceb-5d9fba4b0c6c"
                                        tag="div"><_Builtin.Image
                                            className={`rebel-style--solutions_arrow_icon ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="25"
                                            height="25"
                                            src={item2Icon} /><_Builtin.Block
                                            className={`rebel-style--gradient_div rebel-style--blue ${_activeStyleVariant}`}
                                            tag="div" /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.BlockContainer></_Component>
    );
}