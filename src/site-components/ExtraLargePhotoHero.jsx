"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ButtonComponent } from "./ButtonComponent";

const _interactionsData = JSON.parse(
    '{"events":{"e-13271":{"id":"e-13271","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-13272"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359,"origin":["6946540cc72b976861f8c836","e-71"]},"e-13273":{"id":"e-13273","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4759","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13274"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114,"origin":["6946540cc72b976861f8c836","e-458"]},"e-13394":{"id":"e-13394","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4756","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13395"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758820901395,"origin":["6946540cc72b976861f8c836","e-664"]}},"actionLists":{"a-4759":{"id":"a-4759","origin":["6946540cc72b976861f8c836","a-22"],"title":"sticky-headline_fade-in 3","actionItemGroups":[{"actionItems":[{"id":"a-4759-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4759-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-4756":{"id":"a-4756","origin":["6946540cc72b976861f8c836","a-165"],"title":"Preview Card [HIDE] 28","actionItemGroups":[{"actionItems":[{"id":"a-4756-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rebel-style--component_wrapper","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd69a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758820974099},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ExtraLargePhotoHero(
    {
        as: _Component = _Builtin.Section,
        headlineHeadlineTag = "h1",
        headlineHeadlineText = "Your value proposition.",
        headlineSubHeadlineText = "This is a subheading about one sentence in length. Use it to explain how your product solves a meaningful problem.",
        button1ButtonVisibility = true,

        button1ButtonLink = {
            href: "#"
        },

        button1ButtonText = "[ Icon Button ] ",
        button1ButtonTypeSize = "Light",
        button1ButtonColor = "Light",
        button2ButtonVisibility = true,

        button2ButtonLink = {
            href: "#"
        },

        button2ButtonText = "[ Icon Button ] ",
        button2ButtonTypeSize = "Light",
        button2ButtonColor = null,
        heroImageHeroImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68f928cddb1717c51ea64382_45299c12e744757a1e9e8af1deba0046_revrebel_a-guest-relaxes-at-the-balcony-of-a-palm-springs-m__83436.jpeg",
        heroImageHeroImageAltText = "__wf_reserved_inherit",
        heroImageIconOverImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68f928cddb1717c51ea64381_24e5e3edaf0f0e4643971b62db990a92_bar-chart.svg",
        heroImageIconAltText = "__wf_reserved_inherit",
        heroImageEyebrowText = "Key Focus Areas",
        variant = "Light"
    }
) {
    _interactions.useInteractions(_interactionsData);

    const _styleVariantMap = {
        "Light": "",
        "Dark": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426887",
        "Brand Color 1": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426888",
        "Brand Color 2": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426889",
        "Brand Color 3": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e42688a",
        "Brand Color 4": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e42688b",
        "Brand Color 5": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e42688c",
        "Brand Color 6": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e42688d",
        "Brand Color 7": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e42688e",
        "Brand Color 8": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e42688f",
        "Brand Color 1 Inverse": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426890",
        "Brand Color 2 Inverse": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426891",
        "Brand Color 3 Inverse": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426892",
        "Brand Color 4 Inverse": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426893",
        "Brand Color 5 Inverse": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426894",
        "Brand Color 6 Inverse": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426895",
        "Brand Color 7 Inverse": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426896",
        "Brand Color 8 Inverse": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426897"
    };

    const _activeStyleVariant = _styleVariantMap[variant];

    return (
        <_Component
            className={`rebel-style--component_size rebel-style--text-color-primary ${_activeStyleVariant}`}
            tag="section"
            data-copilot="true"><_Builtin.Section
                className={`rebel-style--component_wrapper rebel-style--overflow_visible ${_activeStyleVariant}`}
                tag="section"
                grid={{
                    type: "section"
                }}><_Builtin.BlockContainer
                    className={`rebel-style--component_container rebel-style--padding-inline_none ${_activeStyleVariant}`}
                    tag="div"
                    grid={{
                        type: "container"
                    }}
                    id="fixed-root"><_Builtin.Block
                        className={`rebel-style--component_size rebel-style--text-color-primary ${_activeStyleVariant}`}
                        tag="div"><_Builtin.Block
                            className={`rebel-style--component_padding rebel-style--padding-md rebel-style--padding-right_none rebel-style--padding-inline_mobile-none ${_activeStyleVariant}`}
                            tag="div"><_Builtin.Grid className={`rebel-style--grid-hero ${_activeStyleVariant}`} tag="div"><_Builtin.Block
                                    className={`rebel-style--section ${_activeStyleVariant}`}
                                    id="w-node-ac912b4e-41c3-59d6-5586-9531dcd77e0a-dcd77e04"
                                    tag="div"><_Builtin.Block
                                        className={`rebel-style--eyebrow rebel-style--margin-bottom_sm ${_activeStyleVariant}`}
                                        tag="div">{heroImageEyebrowText}</_Builtin.Block><_Builtin.Heading
                                        className={`rebel-style--headline-medium ${_activeStyleVariant}`}
                                        tag={headlineHeadlineTag}>{headlineHeadlineText}</_Builtin.Heading><_Builtin.Paragraph
                                        className={`rebel-style--paragraph rebel-style--margin-bottom_sm ${_activeStyleVariant}`}>{headlineSubHeadlineText}</_Builtin.Paragraph><_Builtin.Block className={`rebel-style--button-group ${_activeStyleVariant}`} tag="div"><ButtonComponent
                                            settingsButtonLink={button1ButtonLink}
                                            settingsButtonText={button1ButtonText}
                                            settingsButtonVisibility={button1ButtonVisibility}
                                            buttonStyleButtonTypeSize={button1ButtonTypeSize} /><ButtonComponent
                                            buttonStyleButtonTypeSize={button2ButtonTypeSize}
                                            settingsButtonText={button2ButtonText}
                                            settingsButtonLink={button2ButtonLink}
                                            settingsButtonVisibility={button2ButtonVisibility} /></_Builtin.Block></_Builtin.Block><_Builtin.Block id="w-node-ac912b4e-41c3-59d6-5586-9531dcd77e11-dcd77e04" tag="div"><_Builtin.Block
                                        className={`rebel-style--hero_image-wrapper rebel-style--overflow_visible ${_activeStyleVariant}`}
                                        id="w-node-ac912b4e-41c3-59d6-5586-9531dcd77e12-dcd77e04"
                                        tag="div"><_Builtin.Image
                                            className={`rebel-style--image_long-shadow ${_activeStyleVariant}`}
                                            width="auto"
                                            height="auto"
                                            loading="lazy"
                                            alt="Person in a sun hat and polka dot dress stands by a pool, facing away."
                                            src="https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68f928cddb1717c51ea64382_45299c12e744757a1e9e8af1deba0046_revrebel_a-guest-relaxes-at-the-balcony-of-a-palm-springs-m__83436.jpeg" /><_Builtin.Image
                                            className={`rebel-style--icon-over-image_large rebel-style--is-icon-color-3 ${_activeStyleVariant}`}
                                            width="auto"
                                            height="auto"
                                            loading="lazy"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68f928cddb1717c51ea64381_24e5e3edaf0f0e4643971b62db990a92_bar-chart.svg" /></_Builtin.Block></_Builtin.Block></_Builtin.Grid></_Builtin.Block></_Builtin.Block></_Builtin.BlockContainer></_Builtin.Section></_Component>
    );
}