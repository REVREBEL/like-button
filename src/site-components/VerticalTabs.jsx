"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ButtonComponent } from "./ButtonComponent";

const _interactionsData = JSON.parse(
    '{"events":{"e-13394":{"id":"e-13394","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4756","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13395"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758820901395,"origin":["6946540cc72b976861f8c836","e-664"]}},"actionLists":{"a-4756":{"id":"a-4756","origin":["6946540cc72b976861f8c836","a-165"],"title":"Preview Card [HIDE] 28","actionItemGroups":[{"actionItems":[{"id":"a-4756-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rebel-style--component_wrapper","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd69a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758820974099}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function VerticalTabs(
    {
        as: _Component = _Builtin.Block,
        settingsSectionVisibility = true,
        settingsSectionId,
        mainSectionMainHeadline = <>{"Revenue Strategy That Hits"}<br />{"The Mark — and then Some"}</>,
        mainSectionMainHeadlineTag = "h1",
        mainTabsTab1Text = "Strategy Stack",
        mainTabsTab2Text = "Smart Pricing",
        mainTabsTab3Text = "DemandSignals",
        mainTabsTab4Text = "Offer Engine",
        mainTabsTab5Text = "Conversion Fuel",
        tab1HeadlineTag = "h3",
        tab1HeadlineText = "",
        tab1SubHeadlineText = "We monitor rate parity, analyze market trends, and develop dynamic pricing models that adapt faster than your comp set can copy them. Better rates. Sharper positioning. More profit. No spreadsheets left unturned.",
        tab1Item1Text = "Modular engagement models tailored to your needs.",
        tab1Item2Text = "Strategic roadmap with quarterly performance benchmarks.",
        tab1Item3Text = "Ongoing analysis, reporting, and course correction.",
        tab1Item4Text = "Revenue strategies aligned with tech stack + market position.",
        tab1Item5Text = "Dedicated revenue lead with hospitality + tech expertise.",
        tab1Button1Visibility = true,
        tab1Button1Text = "[ Icon Button ] ",

        tab1Button1Link = {
            href: "#"
        },

        tab1Button2ButtonVisibility = true,
        tab1Button2Text = "[ Icon Button ] ",

        tab1Button2Link = {
            href: "#"
        },

        tab2HeadlineTextTag = "h3",
        tab2HeadlineText = <>{"Dynamic Pricing "}<br />{"+ Rate Optimization"}</>,
        tab2SubheadlineText = "This plan is suitable for the beginner IT specialist and will allow you to familiarize yourself with all the main functions of the service.",
        tab2Item1 = "Adaptive rate strategy across seasons, segments, and channels",
        tab2Item2 = "Real-time comp set and demand analysis",
        tab2Item3 = "OTA parity monitoring and margin optimization",
        tab2Item4 = "Custom rate plans for packages, corporate, and loyalty audiences",
        tab2Item5 = "Pricing moves tied to revenue lift, not “industry norms”",
        tab2Button1Visibility = true,
        tab2Button1Text = "[ Icon Button ] ",

        tab2Button1Link = {
            href: "#"
        },

        tab2Button2Visibility = true,
        tab3HeadlineText = <>{"Demand Forecasting "}<br />{"& Inventory Control"}</>,
        tab3HeadlineTextTag = "h3",
        tab3SubHeadlineText = "We use predictive analytics and booking curve data to optimize availability and shift inventory where it matters most. It’s half math, half magic. We call it “inventory feng shui.”",
        tab3Item1 = "30/60/90-day rolling forecasts using live booking trends",
        tab2Button2Text = "[ Icon Button ] ",

        tab2Button2Link = {
            href: "#"
        },

        tab3Item2 = "Mobile VersInventory alignment across CRS, PMS, RMSion",
        tab3Item3 = "Dynamic controls based on pace, pickup, and demand compression",
        tab3Item4 = "Group displacement analysis and ROI-based decisions",
        tab3Item5 = "Room-type strategy to drive upsell and ADR lift",
        tab3Button1Visibility = true,
        tab3Button1Text = "[ Icon Button ] ",

        tab3Button1Link = {
            href: "#"
        },

        tab3Button2Visibility = true,
        tab3Button2Text = "[ Icon Button ] ",

        tab3Button2Link = {
            href: "#"
        },

        tab4HeadlineText = <>{"Promotional Planning "}<br />{"& Offer Design"}</>,
        tab4SubHeadlineText = "“10% off” isn’t a strategy. It’s a default. We help you build promotions that are timely, tactical, and tailored to how your guests actually buy.",
        tab4Item1 = "Package and offer design built around seasonality + behavior",
        tab4Item2 = "Promotional calendar planning with test-and-learn models",
        tab4Item3 = "Direct booking incentives backed by conversion data",
        tab4Item4 = "Segment-specific offers (e.g., bleisure, locals, families)",
        tab4Item5 = "Real-time performance tracking by promo, rate code, and channel",
        tab4Button1Visibility = true,
        tab4Button2Text = "[ Icon Button ] ",

        tab4Button1Link = {
            href: "#"
        },

        tab4Button2Visibility = true,
        tab4Button1Text = "[ Icon Button ] ",

        tab4Button2Link = {
            href: "#"
        },

        tag5HeadlineTextTag = "h3",
        tag5HeadlineText = "",
        tag5SubHeadlineText = "We make sure your marketing isn't just pretty — it performs. From landing pages to email to SEO, every message is calibrated for conversion and backed by revenue goals. Messaging and math, working in harmony.",
        tag5Item1 = "Landing page content that converts — not just attracts",
        tag5Item2 = "Email strategy aligned with pricing, urgency, and revenue goals",
        tag5Item4 = "Paid media strategies mapped to ROI, not impressions",
        tag5Item3 = "SEO built around booking intent and rate visibility",
        tag5Item5 = "Brand storytelling + performance metrics in sync",
        tag5Button1Visibility = true,
        tag5Button1Text = "[ Icon Button ] ",

        tag5Button1Link = {
            href: "#"
        },

        tag5Button2Visibility = true,
        tag5Button2Text = "[ Icon Button ] ",

        tag5Button2Link = {
            href: "#"
        }
    }
) {
    _interactions.useInteractions(_interactionsData);

    return settingsSectionVisibility ? <_Component className="rebel-style--component_base" tag="div" id={settingsSectionId}><_Builtin.Section
            className="rebel-style--component_wrapper"
            tag="section"
            grid={{
                type: "section"
            }}><_Builtin.BlockContainer
                className="rebel-style--component_container rebel-style--bg-color-light"
                tag="div"
                grid={{
                    type: "container"
                }}
                id="fixed-root"><_Builtin.Block
                    className="rebel-style--component_size rebel-style--bg-color-light rebel-style--text-color-primary"
                    tag="div"><_Builtin.Block
                        className="rebel-style--component_padding rebel-style--padding-md rebel-style--padding-inline_tablet-none"
                        tag="div"><_Builtin.Block
                            className="rebel-style--tabs_container rebel-style--text-color_primary"
                            tag="div"><_Builtin.Block
                                className="rebel-style--tabs_headline-padding rebel-style--text-color-primary rebel-style--flex-align_left"
                                tag="div"><_Builtin.Heading
                                    className="rebel-style--headline-medium rebel-style--margin-bottom_xs rebel-style--font-weight-bold"
                                    tag={mainSectionMainHeadlineTag}>{mainSectionMainHeadline}</_Builtin.Heading><_Builtin.Paragraph className="rebel-style--text-size-lg rebel-style--is-line-height_1-5">{"Here at "}<_Builtin.NotSupported _atom="InlineCode" />{", we take a surgical approach to revenue management — blending real-time market data, hotel-specific context, and a healthy dose of strategy nerdiness to build plans that actually move the needle.Whether you're flying solo or managing a portfolio, we help you connect your pricing, promotions, distribution, and marketing into one performance-powered system."}</_Builtin.Paragraph></_Builtin.Block><_Builtin.Block className="rebel-style--rig-grid" tag="div"><_Builtin.TabsWrapper
                                    className="rebel-style--tabs"
                                    id="w-node-_93310803-a611-396b-316a-734f168cd13d-168cd12f"
                                    data-duration-in="300"
                                    data-duration-out="100"
                                    current="Tab 2"
                                    easing="ease"
                                    fadeIn={300}
                                    fadeOut={100}><_Builtin.TabsMenu
                                        className="rebel-style--tabs_menu rebel-style--is-hidden_tablet"
                                        id="w-node-_93310803-a611-396b-316a-734f168cd13e-168cd12f"
                                        tag="div"><_Builtin.TabsLink
                                            className="rebel-style--label rebel-style--tabs_link rebel-style--tabs_first"
                                            data-w-tab="Tab 1"
                                            block="inline"><_Builtin.Block tag="div">{mainTabsTab1Text}</_Builtin.Block></_Builtin.TabsLink><_Builtin.TabsLink
                                            className="rebel-style--label rebel-style--tabs_link"
                                            data-w-tab="Tab 2"
                                            block="inline"><_Builtin.Block tag="div">{mainTabsTab2Text}</_Builtin.Block></_Builtin.TabsLink><_Builtin.TabsLink
                                            className="rebel-style--label rebel-style--tabs_link"
                                            data-w-tab="Tab 3"
                                            block="inline"><_Builtin.Block tag="div">{mainTabsTab3Text}</_Builtin.Block></_Builtin.TabsLink><_Builtin.TabsLink
                                            className="rebel-style--label rebel-style--tabs_link"
                                            data-w-tab="Tab 4"
                                            block="inline"><_Builtin.Block tag="div">{mainTabsTab4Text}</_Builtin.Block></_Builtin.TabsLink><_Builtin.TabsLink
                                            className="rebel-style--label rebel-style--tabs_link"
                                            data-w-tab="Tab 5"
                                            block="inline"><_Builtin.Block tag="div">{mainTabsTab5Text}</_Builtin.Block></_Builtin.TabsLink></_Builtin.TabsMenu><_Builtin.TabsMenu
                                        className="rebel-style--tabs_menu rebel-style--is-hidden_desktop"
                                        id="w-node-_93310803-a611-396b-316a-734f168cd149-168cd12f"
                                        tag="div"><_Builtin.TabsLink
                                            className="rebel-style--label rebel-style--tabs_link rebel-style--tabs_first"
                                            data-w-tab="Tab 1"
                                            block="inline"><_Builtin.Block tag="div">{"Strategy"}</_Builtin.Block></_Builtin.TabsLink><_Builtin.TabsLink
                                            className="rebel-style--label rebel-style--tabs_link"
                                            id="w-node-_93310803-a611-396b-316a-734f168cd14d-168cd12f"
                                            data-w-tab="Tab 2"
                                            block="inline"><_Builtin.Block tag="div">{"Pricing"}</_Builtin.Block></_Builtin.TabsLink><_Builtin.TabsLink
                                            className="rebel-style--label rebel-style--tabs_link"
                                            data-w-tab="Tab 3"
                                            block="inline"><_Builtin.Block tag="div">{"Demand"}</_Builtin.Block></_Builtin.TabsLink><_Builtin.TabsLink
                                            className="rebel-style--label rebel-style--tabs_link"
                                            id="w-node-_93310803-a611-396b-316a-734f168cd153-168cd12f"
                                            data-w-tab="Tab 4"
                                            block="inline"><_Builtin.Block tag="div">{"Offers"}</_Builtin.Block></_Builtin.TabsLink><_Builtin.TabsLink
                                            className="rebel-style--label rebel-style--tabs_link"
                                            data-w-tab="Tab 5"
                                            block="inline"><_Builtin.Block tag="div">{"Conversion"}</_Builtin.Block></_Builtin.TabsLink></_Builtin.TabsMenu><_Builtin.TabsContent
                                        className="rebel-style--tabs-content rebel-style--text-color-primary"
                                        id="w-node-_93310803-a611-396b-316a-734f168cd159-168cd12f"
                                        tag="div"><_Builtin.TabsPane className="rebel-style--tabs_pane" tag="div" data-w-tab="Tab 1"><_Builtin.Block className="rebel-style--tab_content" tag="div"><_Builtin.Heading
                                                    className="rebel-style--headline-regular rebel-style--font-weight-bold"
                                                    tag={tab1HeadlineTag}>{tab1HeadlineText}</_Builtin.Heading><_Builtin.Paragraph className="rebel-style--paragraph-md">{tab1SubHeadlineText}</_Builtin.Paragraph><_Builtin.Block className="rebel-style--tabs_check-list" tag="div"><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Image
                                                            className="rebel-style--tabs_check-icon rebel-style--is-icon-color-primary"
                                                            width="auto"
                                                            height="auto"
                                                            loading="lazy"
                                                            alt="Checkbox"
                                                            src="https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68f93469547c447ffcaa0a11_64598d049754fa265072cc16aa8758a4_check.svg" /><_Builtin.Block tag="div">{tab1Item1Text}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Image
                                                            className="rebel-style--tabs_check-icon rebel-style--is-icon-color-primary"
                                                            width="auto"
                                                            height="auto"
                                                            loading="lazy"
                                                            alt="Checkbox"
                                                            src="https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68f93469547c447ffcaa0a11_64598d049754fa265072cc16aa8758a4_check.svg" /><_Builtin.Block tag="div">{tab1Item2Text}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Image
                                                            className="rebel-style--tabs_check-icon rebel-style--is-icon-color-primary"
                                                            width="auto"
                                                            height="auto"
                                                            loading="lazy"
                                                            alt="Checkbox"
                                                            src="https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68f93469547c447ffcaa0a11_64598d049754fa265072cc16aa8758a4_check.svg" /><_Builtin.Block tag="div">{tab1Item3Text}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Image
                                                            className="rebel-style--tabs_check-icon rebel-style--is-icon-color-primary"
                                                            width="auto"
                                                            height="auto"
                                                            loading="lazy"
                                                            alt="Checkbox"
                                                            src="https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68f93469547c447ffcaa0a11_64598d049754fa265072cc16aa8758a4_check.svg" /><_Builtin.Block tag="div">{tab1Item4Text}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Image
                                                            className="rebel-style--tabs_check-icon rebel-style--is-icon-color-primary"
                                                            width="auto"
                                                            height="auto"
                                                            loading="lazy"
                                                            alt="Checkbox"
                                                            src="https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68f93469547c447ffcaa0a11_64598d049754fa265072cc16aa8758a4_check.svg" /><_Builtin.Block tag="div">{tab1Item5Text}</_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_buton-group-wrapper" tag="div"><ButtonComponent
                                                        settingsButtonLink={tab1Button1Link}
                                                        settingsButtonVisibility={tab1Button1Visibility}
                                                        settingsButtonText={tab1Button1Text} /><ButtonComponent
                                                        settingsButtonText={tab1Button2Text}
                                                        settingsButtonLink={tab1Button2Link}
                                                        settingsButtonVisibility={tab1Button2ButtonVisibility} /></_Builtin.Block></_Builtin.Block></_Builtin.TabsPane><_Builtin.TabsPane className="rebel-style--tabs_pane" tag="div" data-w-tab="Tab 2"><_Builtin.Block className="rebel-style--tab_content" tag="div"><_Builtin.Heading
                                                    className="rebel-style--headline-regular rebel-style--font-weight-bold"
                                                    tag={tab2HeadlineTextTag}>{tab2HeadlineText}</_Builtin.Heading><_Builtin.Paragraph className="rebel-style--paragraph-md">{tab2SubheadlineText}</_Builtin.Paragraph><_Builtin.Block className="rebel-style--tabs_check-list" tag="div"><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tab2Item1}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tab2Item2}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tab2Item3}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tab2Item4}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tab2Item5}</_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_buton-group-wrapper" tag="div"><ButtonComponent
                                                        settingsButtonText={tab2Button1Text}
                                                        settingsButtonLink={tab2Button1Link}
                                                        settingsButtonVisibility={tab2Button1Visibility} /><ButtonComponent
                                                        settingsButtonText={tab2Button2Text}
                                                        settingsButtonLink={tab2Button2Link}
                                                        settingsButtonVisibility={tab2Button2Visibility} /></_Builtin.Block></_Builtin.Block></_Builtin.TabsPane><_Builtin.TabsPane className="rebel-style--tabs_pane" tag="div" data-w-tab="Tab 3"><_Builtin.Block className="rebel-style--tab_content" tag="div"><_Builtin.Heading
                                                    className="rebel-style--headline-regular rebel-style--font-weight-bold"
                                                    tag={tab3HeadlineTextTag}>{tab3HeadlineText}</_Builtin.Heading><_Builtin.Paragraph className="rebel-style--paragraph-md">{tab3SubHeadlineText}</_Builtin.Paragraph><_Builtin.Block className="rebel-style--tabs_check-list" tag="div"><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tab3Item1}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tab3Item2}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tab3Item3}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tab3Item4}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tab3Item5}</_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_buton-group-wrapper" tag="div"><ButtonComponent
                                                        settingsButtonLink={tab3Button1Link}
                                                        settingsButtonText={tab3Button1Text}
                                                        settingsButtonVisibility={tab3Button1Visibility} /><ButtonComponent
                                                        settingsButtonVisibility={tab3Button2Visibility}
                                                        settingsButtonText={tab3Button2Text}
                                                        settingsButtonLink={tab3Button2Link} /></_Builtin.Block></_Builtin.Block></_Builtin.TabsPane><_Builtin.TabsPane className="rebel-style--tabs_pane" tag="div" data-w-tab="Tab 4"><_Builtin.Block className="rebel-style--tab_content" tag="div"><_Builtin.Heading
                                                    className="rebel-style--headline-regular rebel-style--font-weight-bold"
                                                    tag="h3">{tab4HeadlineText}</_Builtin.Heading><_Builtin.Paragraph className="rebel-style--paragraph-md">{tab4SubHeadlineText}</_Builtin.Paragraph><_Builtin.Block className="rebel-style--tabs_check-list" tag="div"><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tab4Item1}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tab4Item2}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tab4Item3}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tab4Item4}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div" /><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tab4Item5}</_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_buton-group-wrapper" tag="div"><ButtonComponent
                                                        settingsButtonLink={tab4Button1Link}
                                                        settingsButtonText={tab4Button1Text}
                                                        settingsButtonVisibility={tab4Button1Visibility} /><ButtonComponent
                                                        settingsButtonVisibility={tab4Button2Visibility}
                                                        settingsButtonLink={tab4Button2Link}
                                                        settingsButtonText={tab4Button2Text} /></_Builtin.Block></_Builtin.Block></_Builtin.TabsPane><_Builtin.TabsPane className="rebel-style--tabs_pane" tag="div" data-w-tab="Tab 5"><_Builtin.Block className="rebel-style--tab_content" tag="div"><_Builtin.Heading
                                                    className="rebel-style--headline-regular rebel-style--font-weight-bold"
                                                    tag={tag5HeadlineTextTag}>{tag5HeadlineText}</_Builtin.Heading><_Builtin.Paragraph className="rebel-style--paragraph-md">{tag5SubHeadlineText}</_Builtin.Paragraph><_Builtin.Block className="rebel-style--tabs_check-list" tag="div"><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tag5Item1}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tag5Item2}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tag5Item3}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tag5Item4}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_item" tag="div"><_Builtin.Block className="rebel-style--tabs_check-icon" tag="div" /><_Builtin.Block tag="div">{tag5Item5}</_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--tabs_buton-group-wrapper" tag="div"><ButtonComponent
                                                        settingsButtonLink={tag5Button1Link}
                                                        settingsButtonText={tag5Button1Text}
                                                        settingsButtonVisibility={tag5Button1Visibility} /><ButtonComponent
                                                        settingsButtonVisibility={tag5Button2Visibility}
                                                        settingsButtonText={tag5Button2Text}
                                                        settingsButtonLink={tag5Button2Link} /></_Builtin.Block></_Builtin.Block></_Builtin.TabsPane></_Builtin.TabsContent></_Builtin.TabsWrapper><_Builtin.Block
                                    className="rebel-style--bottom-info"
                                    id="w-node-_93310803-a611-396b-316a-734f168cd1ce-168cd12f"
                                    tag="div"><_Builtin.Paragraph className="rebel-style--user-message rebel-style--is-hidden_tablet"><_Builtin.Span className="rebel-style--text-highlighter-color-2">{"Click on an option and explore how we "}</_Builtin.Span><_Builtin.Span
                                            className="rebel-style--text-highlighter-color-2 rebel-style--highlighter-inset">{"optimize hotel revenue."}</_Builtin.Span></_Builtin.Paragraph></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.BlockContainer></_Builtin.Section></_Component> : null;
}