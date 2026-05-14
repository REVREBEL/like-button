"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Label } from "./Label";

const _interactionsData = JSON.parse(
    '{"events":{"e-13271":{"id":"e-13271","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-13272"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359,"origin":["6946540cc72b976861f8c836","e-71"]},"e-13273":{"id":"e-13273","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4759","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13274"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114,"origin":["6946540cc72b976861f8c836","e-458"]}},"actionLists":{"a-4759":{"id":"a-4759","origin":["6946540cc72b976861f8c836","a-22"],"title":"sticky-headline_fade-in 3","actionItemGroups":[{"actionItems":[{"id":"a-4759-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4759-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Main9CardsSectionWithIcon(
    {
        as: _Component = _Builtin.Section,
        headlineHeadlineTextTag = "h2",
        headlineHeadlineText = "Discover Growth.",
        headlineSubHeadlineTag = "h2",
        headlineEyebrowText = "Data Driven Strategies",
        paragraphParagraphText = "Whether you need to enhance your team with experienced revenue management professionals or are navigating a period of change, our team can step-in to maximize your revenue, ensuring no opportunity is missed. Our approach to managing property revenue starts with a thorough analysis of key areas to establish a baseline. From there, we identify opportunities to improve revenue-focused strategies and work closely with the hotel team to implement these initiatives and evaluate the outcomes.",
        card1CardVisibility = true,
        card1CardHeadlineTag = "h3",
        card1CardHeadlineText = <>{"Revenue & Demand"}<br />{"Generation"}</>,
        card2CardVisibility = true,
        card2CardHeadlineTag = "h3",
        card2CardHeadlineText = <>{"Analytics "}<br />{"& Benchmarking"}</>,
        card3CardVisibility = true,
        card3CardHeadlineTag = "h3",
        card3CardHeadlineText = <>{"Proactive Strategy "}<br />{"in Action"}</>,
        card4CardVisibility = true,
        card4Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/694654a0a39b065a967fd32a_65cd6eebaa9a2842e7c46f4c7f8c53bd_money_18106317.svg",
        card5CardVisibility = true,
        card5Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/694654a0a39b065a967fd326_169221dd179cbadbf52f179acb5b3073_calendar.svg",
        card5CardParagraphText = <>{"Keep your team aligned and ready to act with structured touchpoints and transparent reporting. We prepare all revenue meeting materials in advance, conduct weekly strategy calls, and provide clear summary reports that document results and action items. "}<br /><br />{"With daily performance monitoring and consistent alignment, your team can make informed decisions quickly and stay ahead of shifting market conditions."}</>,
        card4CardParagraphText = <>{"Working alongside the sales team, we evaluate each group opportunity and provide tailored pricing recommendations that maximize profitability. "}<br /><br />{"By considering factors such as total room revenue potential, ancillary spend, length of stay, day of the week, and seasonal demand patterns, we ensure every decision strikes the right balance between winning the business and protecting high-value transient revenue."}</>,
        card5CardHeadlineTag = "h3",
        card5CardHeadlineText = <>{"Weekly Strategy "}<br />{"Meetings"}</>,
        card6CardVisibility = true,
        card6CardHeadlineTag = "h3",
        card6CardHeadlineText = <>{"Channel Partner "}<br />{"Engagement"}</>,
        card6Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/694654a0a39b065a967fd325_56e37c85ecb7106cec09800041bd2825_Network%209969977.svg",
        card4CardHeadlineTag = "h3",
        card4CardHeadlineText = <>{"Group Pricing "}<br />{"+ Analysis"}</>,
        card1CardParagraphText = <>{"Anticipate the market and capture demand before your competitors do. We identify high- and low-demand periods, then deploy proactive strategies to ensure you’re positioned to win. "}<br /><br />{"From targeted promotions to creative packages we help you generate demand that drives measurable results."}</>,
        card2CardParagraphText = <>{"Our approach combines performance benchmarking with expert analysis. From STR market share results to Demand360 insights, channel performance, segmentation, booking pace, and cancellation trends, we track every key metric. "}<br /><br />{"Custom KPI dashboards allow us to measure the impact of our strategies and share clear, actionable results with you."}</>,
        card3CardParagraphText = <>{"Revenue strategy only matters if it’s executed well. We provide hands-on guidance for pricing, group displacement analysis, and booking pace monitoring — ensuring your hotel reacts swiftly to market changes. "}<br /><br />{"By translating real-time data into clear actions, we help your team maximize revenue across every booking window."}</>,
        card6CardParagraphText = <>{"We maximize the value of your distribution partnerships by going beyond simple rate loading. Our team conducts ongoing audits of your OTA content to ensure your hotel’s best assets are always showcased — from imagery and descriptions to amenities and policies. "}<br /><br />{"Through on-going optimization, we help your hotel gain greater visibility, improve ranking, and shift bookings toward the most profitable channels."}</>,
        card7CardVisibility = true,
        card7Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/694654a0a39b065a967fd32c_b71d1d61b753c9dfeb6e0d8ea7697364_Support%208826930.svg",
        card8CardVisibility = true,
        card8Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/694654a0a39b065a967fd32b_3b276983455f5da97f549c131cf4dc4a_Cotrol%2018726053.svg",
        card9CardVisibility = true,
        card9Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/694654a0a39b065a967fd329_3cae9c6c78ee25e2a56dda2d9479f80f_product-launch_18478990.svg",
        card7CardHeadlineTag = "h3",
        card7CardHeadlineText = <>{"Call Center "}<br />{"Optimization"}</>,
        card8CardHeadlineTag = "h4",
        card8CardHeadlineText = <>{"Connectivity "}<br />{"& Rate loading"}</>,
        card9CardHeadlineTag = "h3",
        card9CardHeadlineText = <>{"Planning "}<br />{"& Forecasting"}</>,
        card1Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/694654a0a39b065a967fd32e_efaac6cc4cc7668a06ff36e6cf060174_Productivity%2017268483.svg",
        card2Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/694654a0a39b065a967fd328_a9b02076201d5cfeb6838911c20f3392_marketing-strategy_18479148.svg",
        card3Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/694654a0a39b065a967fd32d_831f4fb9f3548a683888ddfe315d78de_strategy_540851.svg",
        card9CardParagraphText = <>{"Gain confidence in planning with a detailed 90-day outlook that goes beyond surface-level projections. "}<br /><br />{"Our segment-level forecasts highlight future demand while analyzing rate opportunities, competitive benchmarks, and market-specific demand drivers. "}</>,
        card8CardParagraphText = <>{"We handle the behind-the-scenes system work that powers your revenue strategy. "}<br /><br />{"From loading rate changes and promotions to setting up corporate accounts and managing connectivity requests, we ensure your pricing and offers are executed seamlessly across all channels."}</>,
        card7CardParagraphText = <>{"Your call center should be more than just a reservations line — it’s a revenue channel. "}<br /><br />{"We evaluate performance, coach teams, and implement strategies to improve conversion, lower distribution costs, and elevate the guest booking experience."}</>,
        settingsSectionVisibility = true,
        settingsSectionId,
        card1IconVisibility = false,
        card2IconVisibility = false,
        card3IconVisibility = false,
        card4IconVisibility = false,
        iconVisibility = false,
        card6Visibility = false,
        card7Visibility = false,
        card8Visibility = false,
        card9Visibility = false
    }
) {
    _interactions.useInteractions(_interactionsData);

    return settingsSectionVisibility ? <_Component
        className="rebel-style--component_size rebel-style--padding_medium rebel-style--mobile-padding-bottom_medium rebel-style--mobile-margin-top_medium"
        tag="div"
        grid={{
            type: "section"
        }}
        id={settingsSectionId}><_Builtin.Container
            className="rebel-style--color-variants rebel-style--component_color"
            tag="div"><_Builtin.Block
                className="rebel-style--item-wrapper rebel-style--mobile-gap_xs"
                id="w-node-_3d384560-ca8e-19a8-10f8-e1febd3ee0b6-bd3ee0b4"
                tag="div"><_Builtin.Block className="rebel-style--item-wrapper" tag="div"><_Builtin.Block
                        className="rebel-style--eyebrow rebel-style--mobile-tex-align-center"
                        tag="div">{headlineEyebrowText}</_Builtin.Block><_Builtin.Heading
                        className="rebel-style--headline-regular rebel-style--mobile-heading-size_discover rebel-style--font-weight-bold rebel-style--mobile-text-align-center rebel-style--scroll-in-view_sticky-fade-in"
                        tag={headlineHeadlineTextTag}>{headlineHeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block className="rebel-style--item-wrapper" tag="div"><_Builtin.Heading
                        className="rebel-style--headline-sm rebel-style--text-color-bright-blue rebel-style--mobile-text-align-center rebel-style--scroll-in-view_sticky-fade-in"
                        tag={headlineSubHeadlineTag}>{"Property Revenue Management Support"}</_Builtin.Heading></_Builtin.Block><_Builtin.Block
                    className="rebel-style--item-wrapper rebel-style--mobile-margin-top_sm rebel-style--mobile-text-align-center rebel-style--margin-bottom_sm"
                    tag="div"><_Builtin.Paragraph className="rebel-style--paragraph">{paragraphParagraphText}</_Builtin.Paragraph><_Builtin.Block
                        className="rebel-style--div-block-638 rebel-style--padding_xs rebel-style--padding-left_none"
                        tag="div"><Label labelLabelText="Learn MOre " /><Label labelLabelText="View All Solutions" labelLabelColor="Color 2" /></_Builtin.Block></_Builtin.Block></_Builtin.Block>{card1CardVisibility ? <_Builtin.Block className="rebel-style--card-grid" tag="div"><_Builtin.Block
                    className="rebel-style--card rebel-style--shadow-blue"
                    id="w-node-_3d384560-ca8e-19a8-10f8-e1febd3ee0c5-bd3ee0b4"
                    tag="div"><_Builtin.Block className="rebel-style--card-body_sm" tag="div"><_Builtin.Block className="rebel-style--card_audit-item_top" tag="div">{card1IconVisibility ? <_Builtin.Image
                                className="rebel-style--icon_2x2 rebel-style--is-component-icon rebel-style--scroll-in-view_slide-up"
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt=""
                                src={card1Icon} /> : null}<_Builtin.Heading
                                className="  rebel-style--card_headline-medium rebel-style--scroll-in-view_slide-up"
                                tag={card1CardHeadlineTag}>{card1CardHeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block className="rebel-style--card_audit-item_bottom" tag="div"><_Builtin.Paragraph
                                className="rebel-style--paragraph-sm rebel-style--text-color-component rebel-style--scroll-in-view_slide-up">{card1CardParagraphText}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block></_Builtin.Block>{card2CardVisibility ? <_Builtin.Block
                    className="rebel-style--card rebel-style--shadow-blue"
                    id="w-node-_3d384560-ca8e-19a8-10f8-e1febd3ee0cc-bd3ee0b4"
                    tag="div"><_Builtin.Block className="rebel-style--card-body_sm" tag="div"><_Builtin.Block className="rebel-style--card_audit-item_top" tag="div">{card2IconVisibility ? <_Builtin.Image
                                className="rebel-style--icon_2x2 rebel-style--is-component-icon rebel-style--scroll-in-view_slide-up"
                                loading="lazy"
                                width="Auto"
                                height="auto"
                                alt=""
                                src={card2Icon} /> : null}<_Builtin.Heading
                                className="rebel-style--card_headline-medium rebel-style--scroll-in-view_slide-up"
                                tag={card2CardHeadlineTag}>{card2CardHeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block className="rebel-style--card_audit-item_bottom" tag="div"><_Builtin.Paragraph
                                className="rebel-style--paragraph-sm rebel-style--scroll-in-view_slide-up">{card2CardParagraphText}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block></_Builtin.Block> : null}{card3CardVisibility ? <_Builtin.Block
                    className="rebel-style--card rebel-style--shadow-blue"
                    id="w-node-_3d384560-ca8e-19a8-10f8-e1febd3ee0d3-bd3ee0b4"
                    tag="div"><_Builtin.Block className="rebel-style--card-body_sm" tag="div"><_Builtin.Block className="rebel-style--card_audit-item_top" tag="div">{card3IconVisibility ? <_Builtin.Image
                                className="rebel-style--icon_2x2 rebel-style--is-component-icon rebel-style--scroll-in-view_slide-up"
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt=""
                                src={card3Icon} /> : null}<_Builtin.Heading
                                className="rebel-style--card_headline-medium rebel-style--scroll-in-view_slide-up"
                                tag={card3CardHeadlineTag}>{card3CardHeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block className="rebel-style--card_audit-item_bottom" tag="div"><_Builtin.Paragraph
                                className="rebel-style--paragraph-sm rebel-style--text-color-component rebel-style--scroll-in-view_slide-up">{card3CardParagraphText}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block></_Builtin.Block> : null}{card4CardVisibility ? <_Builtin.Block
                    className="rebel-style--card rebel-style--shadow-blue"
                    id="w-node-_3d384560-ca8e-19a8-10f8-e1febd3ee0da-bd3ee0b4"
                    tag="div"><_Builtin.Block className="rebel-style--card-body_sm" tag="div"><_Builtin.Block className="rebel-style--card_audit-item_top" tag="div">{card4IconVisibility ? <_Builtin.Image
                                className="rebel-style--icon_2x2 rebel-style--is-component-icon rebel-style--scroll-in-view_slide-up"
                                loading="lazy"
                                width="Auto"
                                height="Auto"
                                alt=""
                                src={card4Icon} /> : null}<_Builtin.Heading
                                className="rebel-style--card_headline-medium rebel-style--scroll-in-view_slide-up"
                                tag={card4CardHeadlineTag}>{card4CardHeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block className="rebel-style--card_audit-item_bottom" tag="div"><_Builtin.Paragraph
                                className="rebel-style--paragraph-sm rebel-style--text-color-component rebel-style--scroll-in-view_slide-up">{card4CardParagraphText}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block></_Builtin.Block> : null}{card5CardVisibility ? <_Builtin.Block
                    className="rebel-style--card rebel-style--shadow-blue"
                    id="w-node-_3d384560-ca8e-19a8-10f8-e1febd3ee0e1-bd3ee0b4"
                    tag="div"><_Builtin.Block className="rebel-style--card-body_sm" tag="div"><_Builtin.Block className="rebel-style--card_audit-item_top" tag="div">{iconVisibility ? <_Builtin.Image
                                className="rebel-style--icon_2x2 rebel-style--is-component-icon rebel-style--scroll-in-view_slide-up"
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt=""
                                src={card5Icon} /> : null}<_Builtin.Heading
                                className="rebel-style--card_headline-medium rebel-style--scroll-in-view_slide-up"
                                tag={card5CardHeadlineTag}>{card5CardHeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block className="rebel-style--card_audit-item_bottom" tag="div"><_Builtin.Paragraph
                                className="rebel-style--paragraph-sm rebel-style--text-color-component rebel-style--scroll-in-view_slide-up">{card5CardParagraphText}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block></_Builtin.Block> : null}{card6CardVisibility ? <_Builtin.Block
                    className="rebel-style--card rebel-style--shadow-blue"
                    id="w-node-_3d384560-ca8e-19a8-10f8-e1febd3ee0e8-bd3ee0b4"
                    tag="div"><_Builtin.Block className="rebel-style--card-body_sm" tag="div"><_Builtin.Block className="rebel-style--card_audit-item_top" tag="div">{card6Visibility ? <_Builtin.Image
                                className="rebel-style--icon_2x2 rebel-style--is-component-icon rebel-style--scroll-in-view_slide-up"
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt=""
                                src={card6Icon} /> : null}<_Builtin.Heading
                                className="rebel-style--card_headline-medium rebel-style--scroll-in-view_slide-up"
                                tag={card6CardHeadlineTag}>{card6CardHeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block className="rebel-style--card_audit-item_bottom" tag="div"><_Builtin.Paragraph
                                className="rebel-style--paragraph-sm rebel-style--text-color-component rebel-style--scroll-in-view_slide-up">{card6CardParagraphText}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block></_Builtin.Block> : null}{card7CardVisibility ? <_Builtin.Block
                    className="rebel-style--card rebel-style--shadow-blue"
                    id="w-node-_3d384560-ca8e-19a8-10f8-e1febd3ee0ef-bd3ee0b4"
                    tag="div"><_Builtin.Block className="rebel-style--card-body_sm" tag="div"><_Builtin.Block className="rebel-style--card_headline-medium" tag="div">{card7Visibility ? <_Builtin.Image
                                className="rebel-style--icon_2x2 rebel-style--is-component-icon rebel-style--scroll-in-view_slide-up"
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt=""
                                src={card7Icon} /> : null}<_Builtin.Heading
                                className="rebel-style--card_headline-medium rebel-style--scroll-in-view_slide-up"
                                tag={card7CardHeadlineTag}>{card7CardHeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block className="rebel-style--card_audit-item_bottom" tag="div"><_Builtin.Paragraph
                                className="rebel-style--paragraph-sm rebel-style--text-color-component rebel-style--scroll-in-view_slide-up">{card7CardParagraphText}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block></_Builtin.Block> : null}{card8CardVisibility ? <_Builtin.Block
                    className="rebel-style--card rebel-style--shadow-blue"
                    id="w-node-_3d384560-ca8e-19a8-10f8-e1febd3ee0f6-bd3ee0b4"
                    tag="div"><_Builtin.Block className="rebel-style--card-body_sm" tag="div"><_Builtin.Block className="rebel-style--card_audit-item_top" tag="div">{card8Visibility ? <_Builtin.Image
                                className="rebel-style--icon_2x2 rebel-style--is-component-icon rebel-style--scroll-in-view_slide-up"
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt=""
                                src={card8Icon} /> : null}<_Builtin.Heading
                                className="rebel-style--card_headline-medium rebel-style--scroll-in-view_slide-up"
                                tag={card8CardHeadlineTag}>{card8CardHeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block className="rebel-style--card_audit-item_bottom" tag="div"><_Builtin.Paragraph
                                className="rebel-style--paragraph-sm rebel-style--text-color-component rebel-style--scroll-in-view_slide-up">{card8CardParagraphText}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block></_Builtin.Block> : null}{card9CardVisibility ? <_Builtin.Block
                    className="rebel-style--card rebel-style--shadow-blue"
                    id="w-node-_3d384560-ca8e-19a8-10f8-e1febd3ee0fd-bd3ee0b4"
                    tag="div"><_Builtin.Block className="rebel-style--card-body_sm" tag="div"><_Builtin.Block className="rebel-style--card_audit-item_top" tag="div">{card9Visibility ? <_Builtin.Image
                                className="rebel-style--icon_2x2 rebel-style--is-component-icon rebel-style--scroll-in-view_slide-up"
                                loading="lazy"
                                width="Auto"
                                height="auto"
                                alt=""
                                src={card9Icon} /> : null}<_Builtin.Heading
                                className="rebel-style--card_headline-medium rebel-style--scroll-in-view_slide-up"
                                tag={card9CardHeadlineTag}>{card9CardHeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block className="rebel-style--card_audit-item_bottom" tag="div"><_Builtin.Paragraph
                                className="rebel-style--paragraph-sm rebel-style--text-color-component rebel-style--scroll-in-view_slide-up">{card9CardParagraphText}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block></_Builtin.Block> : null}</_Builtin.Block> : null}</_Builtin.Container></_Component> : null;
}