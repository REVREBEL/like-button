"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-13271":{"id":"e-13271","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-13272"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359,"origin":["6946540cc72b976861f8c836","e-71"]},"e-13273":{"id":"e-13273","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4759","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13274"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114,"origin":["6946540cc72b976861f8c836","e-458"]},"e-13325":{"id":"e-13325","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4759","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13326"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564785767,"origin":["6946540cc72b976861f8c836","e-456"]}},"actionLists":{"a-4759":{"id":"a-4759","origin":["6946540cc72b976861f8c836","a-22"],"title":"sticky-headline_fade-in 3","actionItemGroups":[{"actionItems":[{"id":"a-4759-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4759-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function MainItem4CardsSection(
    {
        as: _Component = _Builtin.Section,
        sectionStyleSectionColor = "Light",
        settingsSectionId,
        settingsSectionVisibility = true,
        mainItemEyebrowText = "Revenue Audit",
        mainItemHeadlineText = "Explore your potenial.",
        mainItemHeadlineTextTag = "h2",
        mainItemSubHeadlineTag = "h3",
        mainItemSubHeadline = "Our in depth revenue audit.",
        mainItemParagraphText = "Independent hotels are as unique as their revenue management needs. Our approach starts with a comprehensive review of your current practices, company culture, and day-to-day operations. Our team takes a deep dive to carefully assess:",
        item1ParagraphText = "Deep dive evualuation into the daily, weekly, and monthly revenue management activities",
        item1HeadlineText = "Process",
        item1HeadlineTextTag = "h3",
        item2HeadlineText = "Strategy",
        item2HeadlineTextTag = "h3",
        item3HeadlineText = "Pricing",
        item4HeadlineText = "Systems",
        item4HeadlineTextTag = "h3",
        item1Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/694654a0a39b065a967fd327_2bddb81e8d7c24831198be037b9ef1f2_data-transer.svg",
        item1IconAltText = "__wf_reserved_inherit",
        item2Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d1da4ff0bb39d9224cece0_d2cfd271d6b1ddcb29bfbc271479e84b_strategy.svg",
        item2IconAltText = "__wf_reserved_inherit",
        item4IconAltText = "__wf_reserved_inherit",
        item4Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d1da4ff0bb39d9224cece1_e35c43d3145d316185d57be82ecdaed7_code.svg",
        item3Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d1da4ff0bb39d9224cece2_5600e257e00f110017ac3517fc07c445_data-sheet_1.svg",
        item3IconAltText = "__wf_reserved_inherit",
        item3IconVisible = true,
        item1IconVisible = true,
        item2ParagraphText = "Forecasting techniques, reporting frameworks, strategic evaluations, and group management",
        item4ParagraphText = "Comprehensive audit of distribution channels and property management systems",
        item3ParagraphText = "Review of key pricing strategies and potential additional room + ancillary revenue sources",
        item2IconVisible = true,
        item4IconVisible = true,
        customCodeMatchHeightGroupName = "audit-card-items",
        mainItemEyebrowVisibility = true,
        mainItemSubHeadlineVisibility = true,
        item1ItemVisibility = true,
        item2ItemVisibility = true,
        item3ItemVisibility = true,
        item4ItemVisibility = true
    }
) {
    _interactions.useInteractions(_interactionsData);

    const _styleVariantMap = {
        "Light": "",
        "Brand Color Primary Light": "w-variant-3e8937c9-0229-5acf-5dae-94f933374215",
        "Brand Color Primary Dark": "w-variant-bf8eac41-5c65-917e-8bd8-75e63a76e0a9",
        "Brand Color 8": "w-variant-4ae736fc-1244-31e7-7ae7-df9639ceafc5",
        "Brand Color 7": "w-variant-22e23a5a-ccb1-3e11-fe88-11095ab49a33"
    };

    const _activeStyleVariant = _styleVariantMap[sectionStyleSectionColor];

    return settingsSectionVisibility ? <_Component
        className={`rebel-style--component_size  ${_activeStyleVariant}`}
        grid={{
            type: "section"
        }}
        tag="section"
        id={settingsSectionId}><_Builtin.Container
            className={`rebel-style--grid_2-col rebel-style--is-3-1 rebel-style--component-color ${_activeStyleVariant}`}
            tag="div"><_Builtin.Block
                className={`rebel-style--audit-headline-container ${_activeStyleVariant}`}
                id="w-node-ca2a2051-cf6c-b280-f4bb-1d8d503b2ed2-503b2ed0"
                tag="div"><_Builtin.Block className={`rebel-style--item-wrapper ${_activeStyleVariant}`} tag="div">{mainItemEyebrowVisibility ? <_Builtin.Block className={`rebel-style--eyebrow ${_activeStyleVariant}`} tag="div">{mainItemEyebrowText}</_Builtin.Block> : null}<_Builtin.Heading
                        className={`rebel-style--headline-regular rebel-style--font-weight-bold rebel-style--scroll-in-view_slide-left ${_activeStyleVariant}`}
                        tag={mainItemHeadlineTextTag}>{mainItemHeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block className={`rebel-style--item-wrapper ${_activeStyleVariant}`} tag="div">{mainItemSubHeadlineVisibility ? <_Builtin.Heading
                        className={`rebel-style--headline-sm rebel-style--text-color-bright-blue rebel-style--scroll-in-view_slide-left ${_activeStyleVariant}`}
                        tag={mainItemSubHeadlineTag}>{mainItemSubHeadline}</_Builtin.Heading> : null}</_Builtin.Block><_Builtin.Block className={`rebel-style--item-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Paragraph
                        className={`rebel-style--paragraph rebel-style--margin-top_xxs ${_activeStyleVariant}`}>{mainItemParagraphText}</_Builtin.Paragraph></_Builtin.Block><_Builtin.Block
                    className={`rebel-style--space-md rebel-style--is-hidden_desktop rebel-style--is-hidden_mobile ${_activeStyleVariant}`}
                    tag="div" /></_Builtin.Block><_Builtin.Block
                className={`rebel-style--cards_2x2 ${_activeStyleVariant}`}
                id="w-node-ca2a2051-cf6c-b280-f4bb-1d8d503b2edb-503b2ed0"
                tag="div">{item1ItemVisibility ? <_Builtin.Block
                    className={`rebel-style--card rebel-style--shadow-blue rebel-style--bg-color-blue-offset ${_activeStyleVariant}`}
                    id="w-node-ca2a2051-cf6c-b280-f4bb-1d8d503b2edc-503b2ed0"
                    tag="div"><_Builtin.Block
                        className={`rebel-style--card-body_sm ${_activeStyleVariant}`}
                        tag="div"
                        data-match-height={customCodeMatchHeightGroupName}><_Builtin.Block
                            className={`rebel-style--card_audit-item_top ${_activeStyleVariant}`}
                            tag="div">{item1IconVisible ? <_Builtin.Image
                                className={`rebel-style--is-component-icon ${_activeStyleVariant}`}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src={item1Icon} /> : null}<_Builtin.Heading
                                className={`rebel-style--headline-sm rebel-style--scroll-in-view_sticky-fade-in ${_activeStyleVariant}`}
                                data-w-id="ca2a2051-cf6c-b280-f4bb-1d8d503b2ee0"
                                tag={item1HeadlineTextTag}>{item1HeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block
                            className={`rebel-style--card_audit-item_bottom ${_activeStyleVariant}`}
                            tag="div"><_Builtin.Paragraph
                                className={`rebel-style--paragraph rebel-style--text-color-component rebel-style--scroll-in-view_sticky-fade-in ${_activeStyleVariant}`}>{item1ParagraphText}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block></_Builtin.Block> : null}{item2ItemVisibility ? <_Builtin.Block
                    className={`rebel-style--card rebel-style--shadow-blue rebel-style--bg-color-blue-offset ${_activeStyleVariant}`}
                    tag="div"><_Builtin.Block
                        className={`rebel-style--card-body_sm ${_activeStyleVariant}`}
                        tag="div"
                        data-match-height={customCodeMatchHeightGroupName}><_Builtin.Block
                            className={`rebel-style--card_audit-item_top ${_activeStyleVariant}`}
                            tag="div">{item2IconVisible ? <_Builtin.Image
                                className={`rebel-style--is-component-icon ${_activeStyleVariant}`}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src={item2Icon} /> : null}<_Builtin.Heading
                                className={`rebel-style--headline-sm rebel-style--scroll-in-view_sticky-fade-in ${_activeStyleVariant}`}
                                tag={item2HeadlineTextTag}>{item2HeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block
                            className={`rebel-style--card_audit-item_bottom ${_activeStyleVariant}`}
                            tag="div"><_Builtin.Paragraph
                                className={`rebel-style--paragraph rebel-style--text-color-component rebel-style--scroll-in-view_sticky-fade-in ${_activeStyleVariant}`}>{item2ParagraphText}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block></_Builtin.Block> : null}{item3ItemVisibility ? <_Builtin.Block
                    className={`rebel-style--card rebel-style--shadow-blue rebel-style--bg-color-blue-offset ${_activeStyleVariant}`}
                    id="w-node-ca2a2051-cf6c-b280-f4bb-1d8d503b2eea-503b2ed0"
                    tag="div"><_Builtin.Block
                        className={`rebel-style--card-body_sm ${_activeStyleVariant}`}
                        id="w-node-ca2a2051-cf6c-b280-f4bb-1d8d503b2eeb-503b2ed0"
                        tag="div"
                        data-match-height={customCodeMatchHeightGroupName}><_Builtin.Block
                            className={`rebel-style--card_audit-item_top ${_activeStyleVariant}`}
                            tag="div">{item4IconVisible ? <_Builtin.Image
                                className={`rebel-style--is-component-icon ${_activeStyleVariant}`}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src={item4Icon} /> : null}<_Builtin.Heading
                                className={`rebel-style--headline-sm rebel-style--scroll-in-view_sticky-fade-in ${_activeStyleVariant}`}
                                tag={item4HeadlineTextTag}>{item4HeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block
                            className={`rebel-style--card_audit-item_bottom ${_activeStyleVariant}`}
                            tag="div"><_Builtin.Paragraph
                                className={`rebel-style--paragraph rebel-style--text-color-component rebel-style--scroll-in-view_sticky-fade-in ${_activeStyleVariant}`}>{item4ParagraphText}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block></_Builtin.Block> : null}{item4ItemVisibility ? <_Builtin.Block
                    className={`rebel-style--card rebel-style--shadow-blue rebel-style--bg-color-blue-offset ${_activeStyleVariant}`}
                    tag="div"><_Builtin.Block
                        className={`rebel-style--card-body_sm ${_activeStyleVariant}`}
                        tag="div"
                        data-match-height={customCodeMatchHeightGroupName}><_Builtin.Block
                            className={`rebel-style--card_audit-item_top ${_activeStyleVariant}`}
                            tag="div">{item3IconVisible ? <_Builtin.Image
                                className={`rebel-style--is-component-icon ${_activeStyleVariant}`}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src={item3Icon} /> : null}<_Builtin.Heading
                                className={`rebel-style--headline-sm rebel-style--scroll-in-view_sticky-fade-in ${_activeStyleVariant}`}
                                tag="h3">{item3HeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block
                            className={`rebel-style--card_audit-item_bottom ${_activeStyleVariant}`}
                            tag="div"><_Builtin.Paragraph
                                className={`rebel-style--paragraph rebel-style--text-color-component rebel-style--scroll-in-view_sticky-fade-in ${_activeStyleVariant}`}>{item3ParagraphText}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block></_Builtin.Block> : null}</_Builtin.Block></_Builtin.Container></_Component> : null;
}