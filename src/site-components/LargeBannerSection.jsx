"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ButtonComponent } from "./ButtonComponent";

const _interactionsData = JSON.parse(
    '{"events":{"e-13271":{"id":"e-13271","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-13272"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359,"origin":["6946540cc72b976861f8c836","e-71"]},"e-13273":{"id":"e-13273","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4759","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13274"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114,"origin":["6946540cc72b976861f8c836","e-458"]},"e-13309":{"id":"e-13309","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-13310"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fdd75dc-a848-0117-3fb3-af232421bf52","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fdd75dc-a848-0117-3fb3-af232421bf52","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1755341867480,"origin":["6946540cc72b976861f8c836","e-138"]},"e-13394":{"id":"e-13394","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4756","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13395"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758820901395,"origin":["6946540cc72b976861f8c836","e-664"]}},"actionLists":{"a-4759":{"id":"a-4759","origin":["6946540cc72b976861f8c836","a-22"],"title":"sticky-headline_fade-in 3","actionItemGroups":[{"actionItems":[{"id":"a-4759-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4759-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-4756":{"id":"a-4756","origin":["6946540cc72b976861f8c836","a-165"],"title":"Preview Card [HIDE] 28","actionItemGroups":[{"actionItems":[{"id":"a-4756-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rebel-style--component_wrapper","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd69a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758820974099},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function LargeBannerSection(
    {
        as: _Component = _Builtin.BlockContainer,
        sectionSectionVisibility = true,
        sectionSectionId,
        headlineHeadlineTag = "h2",
        headlineHeadlineText = <>{"TRAVEL "}<br />{"#TRENDS"}<br /></>,
        headlineSubHeadlineText = <>{"To Fuel Your Strategy"}<br /></>,
        paragraphParagraphText = "A collection of trends from the largest travel sites, researchers, and companies. Are you investing now to meet the demands of tomorrow?",
        buttonButtonVisible = true,
        buttonButtonColor = null,

        buttonButtonLink = {
            href: "#"
        },

        buttonButtonText = "[ Explore the Trends ]",
        variant = "Color 1",
        buttonTypeSize = "Color 1",
        buttonColor = null
    }
) {
    _interactions.useInteractions(_interactionsData);

    const _styleVariantMap = {
        "Color Primary": "w-variant-6691a007-f93b-211c-c508-ff30c91216b3",
        "Color 1": "",
        "Color 7": "w-variant-1d531217-ee79-bf0a-5592-4080176f5964",
        "Color 8": "w-variant-cee3f7de-fa40-fceb-bb57-9ec19d35ad3f"
    };

    const _activeStyleVariant = _styleVariantMap[variant];

    return sectionSectionVisibility ? <_Component
        className={`rebel-style--component_wrapper rebel-style--component_bg-color rebel-style--max-width_medium rebel-style--margin-horizontal_auto rebel-style--scroll-in-view_sticky-fade-in ${_activeStyleVariant}`}
        grid={{
            type: "container"
        }}
        tag="div"
        id={sectionSectionId}><_Builtin.BlockContainer
            className={`rebel-style--component_container ${_activeStyleVariant}`}
            grid={{
                type: "container"
            }}
            tag="div"><_Builtin.Block
                className={`rebel-style--component_padding rebel-style--padding-block_xl rebel-style--padding-inline_xs ${_activeStyleVariant}`}
                tag="div"><_Builtin.BlockContainer
                    className={`rebel-style--container-sm rebel-style--padding-inline_xxl ${_activeStyleVariant}`}
                    grid={{
                        type: "container"
                    }}
                    tag="div"><_Builtin.HFlex
                        className={`rebel-style--flex-align_center ${_activeStyleVariant}`}
                        id="w-node-_6fdd75dc-a848-0117-3fb3-af232421bf4f-2421bf4b"
                        tag="div"><_Builtin.Block
                            className={`rebel-style--banner_wrapper ${_activeStyleVariant}`}
                            id="w-node-_6fdd75dc-a848-0117-3fb3-af232421bf50-2421bf4b"
                            tag="div"><_Builtin.Block
                                className={`rebel-style--travel-trends_teaser_headline-weapper ${_activeStyleVariant}`}
                                id="w-node-_6fdd75dc-a848-0117-3fb3-af232421bf51-2421bf4b"
                                tag="div"><_Builtin.Heading
                                    className={`  rebel-style--headline-lg ${_activeStyleVariant}`}
                                    data-w-id="6fdd75dc-a848-0117-3fb3-af232421bf52"
                                    tag={headlineHeadlineTag}>{headlineHeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block
                                className={`rebel-style--travel-trends_teaser_headline-wrapper ${_activeStyleVariant}`}
                                id="w-node-_6fdd75dc-a848-0117-3fb3-af232421bf53-2421bf4b"
                                tag="div"><_Builtin.Block className={`  rebel-style--headline-sm ${_activeStyleVariant}`} tag="div">{headlineSubHeadlineText}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                                className={`rebel-style--travel-trends_text-wrapper ${_activeStyleVariant}`}
                                tag="div"><_Builtin.Paragraph
                                    className={`rebel-style--paragraph rebel-style--font-weight-regular rebel-style--text-align_center_mobile-l rebel-style--text-color-white ${_activeStyleVariant}`}>{paragraphParagraphText}</_Builtin.Paragraph></_Builtin.Block><_Builtin.Block
                                className={`rebel-style--travel-trends_teaser_button-wrapper ${_activeStyleVariant}`}
                                id="w-node-_6fdd75dc-a848-0117-3fb3-af232421bf57-2421bf4b"
                                tag="div"><ButtonComponent
                                    settingsButtonText={buttonButtonText}
                                    buttonStyleButtonTypeSize={buttonTypeSize}
                                    settingsButtonLink={buttonButtonLink}
                                    settingsButtonVisibility={buttonButtonVisible}
                                    optionsColor={buttonColor} /></_Builtin.Block></_Builtin.Block></_Builtin.HFlex></_Builtin.BlockContainer></_Builtin.Block></_Builtin.BlockContainer></_Component> : null;
}