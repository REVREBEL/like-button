"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-13394":{"id":"e-13394","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4756","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13395"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758820901395,"origin":["6946540cc72b976861f8c836","e-664"]}},"actionLists":{"a-4756":{"id":"a-4756","origin":["6946540cc72b976861f8c836","a-165"],"title":"Preview Card [HIDE] 28","actionItemGroups":[{"actionItems":[{"id":"a-4756-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rebel-style--component_wrapper","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd69a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758820974099}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function RetroPattern(
    {
        as: _Component = _Builtin.Section,
        variant = "Color Primary",
        hashtagsHashtags = <>{"#Suspendisse #varius #enim"}<br /></>,
        headlineHeadlineTag = "h1",
        headlineHeadlineText = <>{"Synchronize. Optimize. "}<br />{"Outperform. Repeat."}</>,
        subHeadlineSubHeadline1 = <br />,
        id,
        settingsVisibility = true
    }
) {
    _interactions.useInteractions(_interactionsData);

    const _styleVariantMap = {
        "Color Primary": "",
        "Color Primary Other Pattern": "w-variant-fc2a1921-8ed7-4e9d-4b2b-ed54b57d5998",
        "Color 2": "w-variant-d7117764-6417-e8cc-637d-3ab761630174",
        "Color 5": "w-variant-a60c158d-d118-2e0e-6162-367e68919fbb",
        "Color 8": "w-variant-b6a335fb-7d8f-eb2b-d040-84c0be67046d",
        "Color 9": "w-variant-34cfde44-2597-1eae-1940-6a0fb3d503f8"
    };

    const _activeStyleVariant = _styleVariantMap[variant];

    return settingsVisibility ? <_Component
        className={`rebel-style--component_bg-pattern ${_activeStyleVariant}`}
        data-w-id="6e16e2a0-8026-f5a2-a452-24d237f3c3ad"
        tag="div"
        grid={{
            type: "section"
        }}
        id={id}><_Builtin.BlockContainer
            className={`rebel-style--component_wrapper rebel-style--max-width_medium rebel-style--padding-inline_sm ${_activeStyleVariant}`}
            tag="div"
            grid={{
                type: "container"
            }}><_Builtin.BlockContainer
                className={`rebel-style--component_container ${_activeStyleVariant}`}
                tag="div"
                grid={{
                    type: "container"
                }}><_Builtin.Block
                    className={`rebel-style--component_padding rebel-style--padding-sm ${_activeStyleVariant}`}
                    tag="div"><_Builtin.Block
                        className={`rebel-style--headline-responsive_align ${_activeStyleVariant}`}
                        tag="div"><_Builtin.Block
                            className={`rebel-style--headline-responsive_wrapper ${_activeStyleVariant}`}
                            tag="div"><_Builtin.Heading
                                className={`rebel-style--headline-responsive_size rebel-style--font-weight-bold rebel-style--headline-animated-block ${_activeStyleVariant}`}
                                tag={headlineHeadlineTag}>{headlineHeadlineText}</_Builtin.Heading><_Builtin.Block
                                className={`rebel-style--text-wrapper rebel-style--margin-top_xxs ${_activeStyleVariant}`}
                                tag="div"><_Builtin.Paragraph
                                    className={`rebel-style--sub-headline-regular rebel-style--margin-bottom_none ${_activeStyleVariant}`}
                                    editable={true}>{subHeadlineSubHeadline1}</_Builtin.Paragraph><_Builtin.Paragraph className={`rebel-style--sub-headline-regular ${_activeStyleVariant}`}><_Builtin.Span
                                        className={`rebel-style--highlighter-color-component ${_activeStyleVariant}`}>{"Suspendisse varius enim in eros elementum tristique. "}</_Builtin.Span><br /></_Builtin.Paragraph></_Builtin.Block><_Builtin.Paragraph
                                className={`rebel-style--sub-headline-regular rebel-style--is-hashtag rebel-style--highlighter-color-component ${_activeStyleVariant}`}>{hashtagsHashtags}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.BlockContainer></_Builtin.BlockContainer></_Component> : null;
}