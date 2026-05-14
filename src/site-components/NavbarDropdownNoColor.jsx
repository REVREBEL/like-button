"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { TagIcon } from "./TagIcon";

export function NavbarDropdownNoColor(
    {
        as: _Component = _Builtin.Block,
        id,
        settingsVisibility = true,
        card1CardIconVisibility = false,
        card1TagVisibility = true,
        card1TagTagColor = null,
        card1TagIconVisibility = true,
        card1TagIconArrowVisibility = true,
        card1TagClickableLink = null,
        card1TagTagText = "Maximize Your Topline",

        card1TagLink = {
            href: "#"
        },

        card2CardIconVisibility = false,
        card2TagVisibility = true,
        card2TagTagColor = null,
        card2TagIconVisibility = true,
        card2TagIconArrowVisibility = true,
        card2TagClickableLink = null,
        card2TagTagText = "Generate Demand",

        card2TagLink = {
            href: "#",
            target: "_blank"
        },

        card3CardIconVisibility = false,
        card1HeadlineText = "Revenue Strategy",
        card2HeadlineText = "BRAND ACTIVATION",
        card3HeadlineText = "Optimized Distribution",
        card3TagVisibility = true,
        card3TagTagColor = null,
        card3TagIconArrowVisibility = true,
        card3TagIconVisibility = true,
        card3TagClickableLink = null,
        card3TagTagText = "Connect Strategically",

        card3TagLink = {
            href: "#"
        },

        card4HeadlineText = "Tech Integration",
        card4CardIconVisibility = false,
        card1ParagraphText = "Maximize topline and margin with data-backed strategy",
        card2ParagraphText = "Create demand and drive bookings with targeted marketing.",
        card3ParagraphText = "Amplify your presence, control your channels, increase conversions.",
        card4ParagraphText = "Deploy and align the systems that power your hotel.",
        card1LinkText = "Maximize Your Topline",
        card2LinkText = "Generate Demand",
        card3LinkText = "Connect Strategically",
        card4CardIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa1_13f6256409a2a7a3236ad3d688e95c99_labtop-with-cursor.svg",
        card1CardIconImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3a9f_726a15c1e835325a1ae274a424187e88_get-quote.svg",
        card2CardIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa0_d542d97d71213306b087706fc9f5ef01_plane.svg",
        card3CardIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa2_c9bb3cba00d02a45f7710f7bfd302570_gear.svg",
        card1CardIconAltText = "__wf_reserved_inherit",
        card2CardIconAltText = "__wf_reserved_inherit",
        card3CardIconAltText = "__wf_reserved_inherit",
        card4CardIconAltText = "__wf_reserved_inherit",
        card4TagVisibility = true,
        card4TagTagColor = null,
        card4TagIconVisibility = true,
        card4TagIconArrowVisibility = true,
        card4TagClickableLink = null,
        card4TagTagText = "Build Your Engine",

        card4TagLink = {
            href: "#"
        }
    }
) {
    return settingsVisibility ? <_Component className="rebel-style--navbar_menu-container" tag="div" id={id}><_Builtin.Block className="rebel-style--navcard_dropdown-content" tag="div"><_Builtin.Block
                className="rebel-style--navbar_dropdown-content-left rebel-style--text-color-light"
                tag="div"><_Builtin.Block
                    className="rebel-style--page-nav_dropdown-link-list"
                    id="w-node-_5b582c47-bfa2-f61b-7a6b-fd6add0d8bee-dd0d8beb"
                    tag="div"><_Builtin.Block
                        className="rebel-style--page-nav_dropdown-link rebel-style--card_nav-solutions"
                        tag="div"><_Builtin.Block className="rebel-style--page-nav_solutions_item-wrapper" tag="div"><_Builtin.Block className="rebel-style--page-nav_item-top" tag="div">{card1CardIconVisibility ? <_Builtin.Block className="rebel-style--page-nav_icon-holder" tag="div"><_Builtin.Block className="rebel-style--icon-featured-large" tag="div"><_Builtin.Image
                                            className="rebel-style--icon_3x3"
                                            width="auto"
                                            height="auto"
                                            loading="lazy"
                                            src={card1CardIconImage} /></_Builtin.Block></_Builtin.Block> : null}<_Builtin.Block className="rebel-style--page-nav_item-heading" tag="div">{card1HeadlineText}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                                className="rebel-style--white-navcard_bottom-content rebel-style--flex-vertical"
                                tag="div"><_Builtin.Block
                                    className="rebel-style--paragraph_sm rebel-style--font-weight-regular"
                                    tag="div">{card1ParagraphText}</_Builtin.Block><TagIcon
                                    labelLabelText={card1TagTagText}
                                    optionsTagColor={card1TagTagColor}
                                    settingsIconVisibility={card1TagIconVisibility}
                                    optionsClickableLink={card1TagClickableLink}
                                    labelLink={card1TagLink}
                                    iconIconArrowVisibility={card1TagIconArrowVisibility}
                                    settingsVisibility={card1TagVisibility}
                                    optionsIconSize="1x1x"
                                    iconIconJackVisibility={false}
                                    iconIconStarVisibility={false}
                                    iconIconImageVisibility={false}
                                    iconIconImage="https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d5fb16179349fc4fa754c5_c68a1dfa80662c3064e12f294a7a2c05_close-x.svg" /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--page-nav_dropdown-link-list" tag="div"><_Builtin.Block
                        className="rebel-style--page-nav_dropdown-link rebel-style--card_nav-solutions"
                        tag="div"><_Builtin.Block className="rebel-style--page-nav_solutions_item-wrapper" tag="div"><_Builtin.Block className="rebel-style--page-nav_item-top" tag="div">{card2CardIconVisibility ? <_Builtin.Block className="rebel-style--page-nav_icon-holder" tag="div"><_Builtin.Block className="rebel-style--icon-featured-large" tag="div"><_Builtin.Image
                                            className="rebel-style--icon_3x3"
                                            width="auto"
                                            height="auto"
                                            loading="lazy"
                                            src={card2CardIcon} /></_Builtin.Block></_Builtin.Block> : null}<_Builtin.Block className="rebel-style--page-nav_item-heading" tag="div">{card2HeadlineText}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                                className="rebel-style--white-navcard_bottom-content rebel-style--flex-vertical"
                                tag="div"><_Builtin.Block
                                    className="rebel-style--paragraph_sm rebel-style--font-weight-regular"
                                    tag="div">{card2ParagraphText}</_Builtin.Block><TagIcon
                                    labelLabelText={card2TagTagText}
                                    optionsTagColor={card2TagTagColor}
                                    settingsIconVisibility={card2TagIconVisibility}
                                    optionsClickableLink={card2TagClickableLink}
                                    labelLink={card2TagLink}
                                    iconIconArrowVisibility={card2TagIconArrowVisibility}
                                    settingsVisibility={card2TagVisibility} /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block
                    className="rebel-style--page-nav_dropdown-link-list"
                    id="w-node-_5b582c47-bfa2-f61b-7a6b-fd6add0d8c04-dd0d8beb"
                    tag="div"><_Builtin.Block
                        className="rebel-style--page-nav_dropdown-link rebel-style--card_nav-solutions"
                        tag="div"><_Builtin.Block className="rebel-style--page-nav_solutions_item-wrapper" tag="div"><_Builtin.Block className="rebel-style--page-nav_item-top" tag="div">{card3CardIconVisibility ? <_Builtin.Block className="rebel-style--page-nav_icon-holder" tag="div"><_Builtin.Block className="rebel-style--icon-featured-large" tag="div"><_Builtin.Image
                                            className="rebel-style--icon_3x3 rebel-style--is-icon-color-8_d400"
                                            width="auto"
                                            height="auto"
                                            loading="lazy"
                                            src={card3CardIcon} /></_Builtin.Block></_Builtin.Block> : null}<_Builtin.Block className="rebel-style--page-nav_item-heading" tag="div">{card3HeadlineText}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                                className="rebel-style--white-navcard_bottom-content rebel-style--flex-vertical"
                                tag="div"><_Builtin.Block
                                    className="rebel-style--paragraph_sm rebel-style--font-weight-regular"
                                    tag="div">{card3ParagraphText}</_Builtin.Block><TagIcon
                                    labelLabelText={card3TagTagText}
                                    optionsTagColor={card3TagTagColor}
                                    optionsClickableLink={card3TagClickableLink}
                                    settingsIconVisibility={card3TagIconVisibility}
                                    labelLink={card3TagLink}
                                    iconIconArrowVisibility={card3TagIconArrowVisibility}
                                    settingsVisibility={card3TagVisibility}
                                    optionsIconSize="1x1x" /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--page-nav_dropdown-link-list" tag="div"><_Builtin.Block
                        className="rebel-style--page-nav_dropdown-link rebel-style--card_nav-solutions"
                        id="w-node-_5b582c47-bfa2-f61b-7a6b-fd6add0d8c10-dd0d8beb"
                        tag="div"><_Builtin.Block className="rebel-style--page-nav_solutions_item-wrapper" tag="div"><_Builtin.Block
                                className="rebel-style--page-nav_item-top rebel-style--flex-align_center-2"
                                tag="div">{card4CardIconVisibility ? <_Builtin.Block
                                    className="rebel-style--page-nav_icon-holder rebel-style--flex-align_center-2"
                                    tag="div"><_Builtin.Block className="rebel-style--icon-featured-large" tag="div"><_Builtin.Image
                                            className="rebel-style--icon_3x3 rebel-style--is-icon-color-5_d200"
                                            width="auto"
                                            height="auto"
                                            loading="lazy"
                                            src={card4CardIcon} /></_Builtin.Block></_Builtin.Block> : null}<_Builtin.Block className="rebel-style--page-nav_item-heading" tag="div">{card4HeadlineText}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                                className="rebel-style--white-navcard_bottom-content rebel-style--flex-vertical"
                                tag="div"><_Builtin.Block
                                    className="rebel-style--paragraph_sm rebel-style--font-weight-regular"
                                    tag="div">{card4ParagraphText}</_Builtin.Block><TagIcon
                                    labelLabelText={card4TagTagText}
                                    optionsTagColor={card4TagTagColor}
                                    optionsClickableLink={card4TagClickableLink}
                                    settingsIconVisibility={card4TagIconVisibility}
                                    labelLink={card4TagLink}
                                    iconIconArrowVisibility={card4TagIconArrowVisibility}
                                    settingsVisibility={card4TagVisibility} /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Component> : null;
}