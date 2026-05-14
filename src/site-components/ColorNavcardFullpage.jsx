"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ColorNavcardFullpage(
    {
        as: _Component = _Builtin.Block,
        colorCard1Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3a9f_726a15c1e835325a1ae274a424187e88_get-quote.svg",
        colorCard2Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa0_d542d97d71213306b087706fc9f5ef01_plane.svg",
        colorCard1IconAltText = "__wf_reserved_inherit",
        colorCard2IconAltText = "__wf_reserved_inherit",
        colorCard3Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68dee5a4cce74fcb4158c1ab_12ed20033a39e931c05a9bc9a0ea3244_gear.svg",
        colorCard3IconAltText = "__wf_reserved_inherit",
        colorCard1HeadlineTag = "h3",
        colorCard1HeadlineText = "CTRLShift Blog",
        colorCard2HeadlineTag = "h3",
        colorCard2HeadlineText = "Travel Trends",
        colorCard3HeadlineTag = "h3",
        colorCard3HeadlineText = "Revenue Toolkits",
        colorCard1Paragraph = "Where we shareour tips and ideas ongeneratingrevenue atyour property",

        colorCard1Link = {
            href: "#"
        },

        colorCard2Paragraph = "A collection of trends from the largest travel sites, researchers, and companies",

        colorCard2Link = {
            href: "#"
        },

        colorCard3Paragraph = "Packed with strategies and resources to help increase revenue.",

        colorCard3Link = {
            href: "#"
        },

        colorCard1LinkText = "read more",
        colorCard2LinkText = "Explore Trends",
        colorCard3LinkText = "Tap + Discover",
        colorCard1Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aae_8c9424379024d451e75313095cdbe5ec_revrebel_the-private-courtyard-transforms-into-a-minimalist__83428.jpeg",
        colorCard1ImageAltText = "__wf_reserved_inherit",
        colorCard3Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa7_35f9a8f91c072b0c89f6c849cf016af4_revrebel_a-stylish-bartender-wearing-a-dark-canvas-apron-wi__94603.jpeg",
        colorCard3ImageAltText = "__wf_reserved_inherit",
        colorCard2Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aac_c03a47b0e3a13518e259481a39ec9be3_f8c4eb24-5293-46bd-b73f-5950bcef20b0.avif",
        colorCard2ImageAltText = "__wf_reserved_inherit",
        colorCard4Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa1_13f6256409a2a7a3236ad3d688e95c99_labtop-with-cursor.svg",
        colorCard4IconAltText = "__wf_reserved_inherit",
        colorCard4HeadlineTag = "h3",
        colorCard4HeadlineText = "Client Hub",
        colorCard4Paragraph = "Real-time metrics + a full view of our current engagement or project.",

        colorCard4Link = {
            href: "#"
        },

        colorCard4LinkText = "Get Briefed",
        colorCard4Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa3_e3e49faf91fdbe89bf3b17a7d2f65b34_revrebel_edit_a-medium-shot-captures-a-30yearold-white-man-in-be__83443.jpg",
        colorCard4ImageAltText = "__wf_reserved_inherit",
        optionsColorCardColor = "Light"
    }
) {
    const _styleVariantMap = {
        "Light": "",
        "Dark": "w-variant-df89afeb-dc59-ed18-e314-75ca5a7dfe58"
    };

    const _activeStyleVariant = _styleVariantMap[optionsColorCardColor];

    return (
        <_Component
            className={`rebel-style--pagenav_dropdown-container ${_activeStyleVariant}`}
            tag="div"><_Builtin.Block
                className={`rebel-style--pagenav_navcard-wrapper ${_activeStyleVariant}`}
                id="w-node-d76e8f2e-c633-a48c-94f4-396d7965bf47-7965bf46"
                tag="div"><_Builtin.Link
                    className={`rebel-style--pagenav_color-navcard ${_activeStyleVariant}`}
                    button={false}
                    block="inline"
                    options={colorCard1Link}><_Builtin.Block
                        className={`rebel-style--pagenav_color-navcard_right-content ${_activeStyleVariant}`}
                        id="w-node-d76e8f2e-c633-a48c-94f4-396d7965bf49-7965bf46"
                        tag="div"><_Builtin.Block
                            className={`rebel-style--navcard_headline-wrapper ${_activeStyleVariant}`}
                            tag="div"><_Builtin.Block className={`rebel-style--navcard_icon ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                    className={`rebel-style--icon_3x3 rebel-style--is-icon-color-4 ${_activeStyleVariant}`}
                                    width="auto"
                                    height="auto"
                                    loading="lazy"
                                    src={colorCard1Icon} /></_Builtin.Block><_Builtin.Heading
                                className={`rebel-style--pagenav_navcard_headline ${_activeStyleVariant}`}
                                tag={colorCard1HeadlineTag}>{colorCard1HeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block
                            className={`rebel-style--pagenav_navcard_paragraph ${_activeStyleVariant}`}
                            tag="div">{colorCard1Paragraph}</_Builtin.Block><_Builtin.Block
                            className={`rebel-style--navcard_tag-link ${_activeStyleVariant}`}
                            tag="div">{colorCard1LinkText}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                        className={`rebel-style--pagenav_color-navcard_left-content ${_activeStyleVariant}`}
                        tag="div"><_Builtin.Image
                            className={`rebel-style--navcard_image ${_activeStyleVariant}`}
                            width="auto"
                            height="auto"
                            loading="lazy"
                            src={colorCard1Image} /></_Builtin.Block></_Builtin.Link></_Builtin.Block><_Builtin.Block
                className={`rebel-style--pagenav_navcard-wrapper ${_activeStyleVariant}`}
                id="w-node-d76e8f2e-c633-a48c-94f4-396d7965bf52-7965bf46"
                tag="div"><_Builtin.Link
                    className={`rebel-style--pagenav_color-navcard rebel-style--is-color-2 ${_activeStyleVariant}`}
                    button={false}
                    block="inline"
                    options={colorCard2Link}><_Builtin.Block
                        className={`rebel-style--pagenav_color-navcard_right-content rebel-style--is-inverse-color-2 ${_activeStyleVariant}`}
                        id="w-node-d76e8f2e-c633-a48c-94f4-396d7965bf54-7965bf46"
                        tag="div"><_Builtin.Block
                            className={`rebel-style--navcard_headline-wrapper ${_activeStyleVariant}`}
                            tag="div"><_Builtin.Block className={`rebel-style--navcard_icon ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                    className={`rebel-style--icon_3x3 rebel-style--is-icon-color-5 ${_activeStyleVariant}`}
                                    width="auto"
                                    height="auto"
                                    loading="lazy"
                                    src={colorCard2Icon} /></_Builtin.Block><_Builtin.Heading
                                className={`rebel-style--pagenav_navcard_headline ${_activeStyleVariant}`}
                                tag={colorCard2HeadlineTag}>{colorCard2HeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block
                            className={`rebel-style--pagenav_navcard_paragraph ${_activeStyleVariant}`}
                            tag="div">{colorCard2Paragraph}</_Builtin.Block><_Builtin.Block
                            className={`rebel-style--navcard_tag-link ${_activeStyleVariant}`}
                            tag="div">{colorCard2LinkText}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                        className={`rebel-style--pagenav_color-navcard_left-content ${_activeStyleVariant}`}
                        tag="div"><_Builtin.Image
                            className={`rebel-style--navcard_image ${_activeStyleVariant}`}
                            width="auto"
                            height="auto"
                            loading="lazy"
                            src={colorCard2Image} /></_Builtin.Block></_Builtin.Link></_Builtin.Block><_Builtin.Block
                className={`rebel-style--pagenav_navcard-wrapper ${_activeStyleVariant}`}
                id="w-node-d76e8f2e-c633-a48c-94f4-396d7965bf5d-7965bf46"
                tag="div"><_Builtin.Link
                    className={`rebel-style--pagenav_color-navcard rebel-style--is-color-5 ${_activeStyleVariant}`}
                    button={false}
                    block="inline"
                    options={colorCard3Link}><_Builtin.Block
                        className={`rebel-style--pagenav_color-navcard_right-content rebel-style--is-inverse-color-5 ${_activeStyleVariant}`}
                        id="w-node-d76e8f2e-c633-a48c-94f4-396d7965bf5f-7965bf46"
                        tag="div"><_Builtin.Block
                            className={`rebel-style--navcard_headline-wrapper ${_activeStyleVariant}`}
                            tag="div"><_Builtin.Block className={`rebel-style--navcard_icon ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                    className={`rebel-style--icon_3x3 rebel-style--is-icon-color-7 ${_activeStyleVariant}`}
                                    width="auto"
                                    height="auto"
                                    loading="lazy"
                                    src={colorCard3Icon} /></_Builtin.Block><_Builtin.Heading
                                className={`rebel-style--pagenav_navcard_headline ${_activeStyleVariant}`}
                                tag={colorCard3HeadlineTag}>{colorCard3HeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block
                            className={`rebel-style--pagenav_navcard_paragraph ${_activeStyleVariant}`}
                            tag="div">{colorCard3Paragraph}</_Builtin.Block><_Builtin.Block
                            className={`rebel-style--navcard_tag-link ${_activeStyleVariant}`}
                            tag="div">{colorCard3LinkText}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                        className={`rebel-style--pagenav_color-navcard_left-content ${_activeStyleVariant}`}
                        tag="div"><_Builtin.Image
                            className={`rebel-style--navcard_image ${_activeStyleVariant}`}
                            width="auto"
                            height="auto"
                            loading="lazy"
                            src={colorCard3Image} /></_Builtin.Block></_Builtin.Link></_Builtin.Block><_Builtin.Block
                className={`rebel-style--pagenav_navcard-wrapper ${_activeStyleVariant}`}
                id="w-node-d76e8f2e-c633-a48c-94f4-396d7965bf68-7965bf46"
                tag="div"><_Builtin.Link
                    className={`rebel-style--pagenav_color-navcard rebel-style--is-color-8 ${_activeStyleVariant}`}
                    button={false}
                    block="inline"
                    options={colorCard4Link}><_Builtin.Block
                        className={`rebel-style--pagenav_color-navcard_right-content rebel-style--is-inverse-color-8 ${_activeStyleVariant}`}
                        id="w-node-d76e8f2e-c633-a48c-94f4-396d7965bf6a-7965bf46"
                        tag="div"><_Builtin.Block
                            className={`rebel-style--navcard_headline-wrapper ${_activeStyleVariant}`}
                            tag="div"><_Builtin.Block className={`rebel-style--navcard_icon ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                    className={`rebel-style--icon_3x3 rebel-style--is-icon-color-6 ${_activeStyleVariant}`}
                                    width="auto"
                                    height="auto"
                                    loading="lazy"
                                    src={colorCard4Icon} /></_Builtin.Block><_Builtin.Heading
                                className={`rebel-style--pagenav_navcard_headline ${_activeStyleVariant}`}
                                tag={colorCard4HeadlineTag}>{colorCard4HeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block
                            className={`rebel-style--pagenav_navcard_paragraph ${_activeStyleVariant}`}
                            tag="div">{colorCard4Paragraph}</_Builtin.Block><_Builtin.Block
                            className={`rebel-style--navcard_tag-link ${_activeStyleVariant}`}
                            tag="div">{colorCard4LinkText}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                        className={`rebel-style--pagenav_color-navcard_left-content ${_activeStyleVariant}`}
                        tag="div"><_Builtin.Image
                            className={`rebel-style--navcard_image ${_activeStyleVariant}`}
                            width="auto"
                            height="auto"
                            loading="lazy"
                            src={colorCard4Image} /></_Builtin.Block></_Builtin.Link></_Builtin.Block></_Component>
    );
}