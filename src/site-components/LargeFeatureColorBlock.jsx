"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ButtonComponent } from "./ButtonComponent";

const _interactionsData = JSON.parse(
    '{"events":{"e-13269":{"id":"e-13269","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-13270"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":800,"direction":null,"effectIn":true},"createdOn":1754711831046,"origin":["6946540cc72b976861f8c836","e-69"]},"e-13271":{"id":"e-13271","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-13272"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359,"origin":["6946540cc72b976861f8c836","e-71"]},"e-13273":{"id":"e-13273","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4759","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13274"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114,"origin":["6946540cc72b976861f8c836","e-458"]},"e-13394":{"id":"e-13394","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4756","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13395"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758820901395,"origin":["6946540cc72b976861f8c836","e-664"]}},"actionLists":{"a-4759":{"id":"a-4759","origin":["6946540cc72b976861f8c836","a-22"],"title":"sticky-headline_fade-in 3","actionItemGroups":[{"actionItems":[{"id":"a-4759-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4759-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-4756":{"id":"a-4756","origin":["6946540cc72b976861f8c836","a-165"],"title":"Preview Card [HIDE] 28","actionItemGroups":[{"actionItems":[{"id":"a-4756-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rebel-style--component_wrapper","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd69a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758820974099},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function LargeFeatureColorBlock(
    {
        as: _Component = _Builtin.Section,
        settingsVisibility = true,
        settingsTextColor = "Dark",
        categoryFeatureBlockId,
        categoryFeatureBlockVisibility = true,
        categoryFeatureBlockHeadlineText = "Headline",
        categoryFeatureBlockHeadlineTextTag = "h3",
        categoryFeatureBlockSubHeadlineVisibility = true,
        categoryFeatureBlockSubHeadlineTextTag = "h4",
        categoryFeatureBlockSubHeadlineText = "Sub Headline",
        categoryFeatureBlockDescriptionOverviewVisibility = true,
        categoryFeatureBlockDescriptionOverviewText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",

        categoryFeatureBlockButtonLink = {
            href: "#"
        },

        categoryFeatureBlockButtonText = "[ Button ] ",
        categoryFeatureBlockButtonColor = "Dark",
        categoryFeatureBlockButtonTypeSize = "Dark",
        categoryFeatureBlockButtonId,
        categoryFeatureBlockButtonVisibility = true,
        categoryFeatureBlockRuntimeProps = {},
        categoryFeatureBlockSlot
    }
) {
    _interactions.useInteractions(_interactionsData);

    const _styleVariantMap = {
        "Light": "w-variant-0c73bced-2c11-a424-44d6-8b22df2cbc8a",
        "Dark": "",
        "Color 1": "w-variant-0c73bced-2c11-a424-44d6-8b22df2cbc8b",
        "Color 2": "w-variant-0c73bced-2c11-a424-44d6-8b22df2cbc8c",
        "Color 3": "w-variant-0c73bced-2c11-a424-44d6-8b22df2cbc8d",
        "Color 4": "w-variant-0c73bced-2c11-a424-44d6-8b22df2cbc8e",
        "Color 5": "w-variant-0c73bced-2c11-a424-44d6-8b22df2cbc8f",
        "Color 6": "w-variant-0c73bced-2c11-a424-44d6-8b22df2cbc90",
        "Color 7": "w-variant-0c73bced-2c11-a424-44d6-8b22df2cbc91",
        "Color 8": "w-variant-0c73bced-2c11-a424-44d6-8b22df2cbc92",
        "Color 9": "w-variant-0c73bced-2c11-a424-44d6-8b22df2cbc93"
    };

    const _activeStyleVariant = _styleVariantMap[settingsTextColor];

    return settingsVisibility ? <_Component
        className={`rebel-style--component_base rebel-style--padding-right_md ${_activeStyleVariant}`}
        tag="section"
        data-copilot="true"><_Builtin.Section
            className={`rebel-style--component_wrapper ${_activeStyleVariant}`}
            tag="section"
            grid={{
                type: "section"
            }}><_Builtin.BlockContainer
                className={`rebel-style--component_container ${_activeStyleVariant}`}
                tag="div"
                grid={{
                    type: "container"
                }}
                id="fixed-root"><_Builtin.Block
                    className={`rebel-style--component_padding ${_activeStyleVariant}`}
                    tag="div"><_Builtin.Block
                        className={`rebel-style--variants_text-color ${_activeStyleVariant}`}
                        tag="div"><_Builtin.Block
                            className={`rebel-style--card-body rebel-style--padding_xs ${_activeStyleVariant}`}
                            tag="div">{categoryFeatureBlockVisibility ? <_Builtin.Heading
                                className={`rebel-style--headline-medium rebel-style--font-weight-bold rebel-style--margin_bottom-none ${_activeStyleVariant}`}
                                tag={categoryFeatureBlockHeadlineTextTag}
                                id={categoryFeatureBlockId}
                                {...categoryFeatureBlockRuntimeProps}>{categoryFeatureBlockSlot ?? categoryFeatureBlockHeadlineText}</_Builtin.Heading> : null}{categoryFeatureBlockSubHeadlineVisibility ? <_Builtin.Heading
                                className={`rebel-style--headline-xs ${_activeStyleVariant}`}
                                tag={categoryFeatureBlockSubHeadlineTextTag}>{categoryFeatureBlockSubHeadlineText}</_Builtin.Heading> : null}{categoryFeatureBlockDescriptionOverviewVisibility ? <_Builtin.Paragraph className={`rebel-style--paragraph ${_activeStyleVariant}`}>{categoryFeatureBlockDescriptionOverviewText}</_Builtin.Paragraph> : null}<_Builtin.Block
                                className={`rebel-style--buton-wrapper rebel-style--margin-top_sm ${_activeStyleVariant}`}
                                tag="div"><ButtonComponent
                                    settingsButtonLink={categoryFeatureBlockButtonLink}
                                    settingsButtonText={categoryFeatureBlockButtonText}
                                    optionsColor={categoryFeatureBlockButtonColor}
                                    buttonStyleButtonTypeSize={categoryFeatureBlockButtonTypeSize}
                                    settingsButtonId={categoryFeatureBlockButtonId}
                                    settingsButtonVisibility={categoryFeatureBlockButtonVisibility} /></_Builtin.Block><_Builtin.Block
                                className={`rebel-style--divider rebel-style--is-color-primary rebel-style--margin-top_sm ${_activeStyleVariant}`}
                                tag="div" /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.BlockContainer></_Builtin.Section></_Component> : null;
}