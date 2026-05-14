"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function HeroSection(
    {
        as: _Component = _Builtin.Section,
        settingsSectionId,
        settingsSectionVisibility = true,
        word1HeadlineTag = "h1",
        word1HeadlineText = "Synchronize.",
        word2HeadlineText = "Optimize.",
        word3HeadlineText = "Outperform.",
        word4HeadlineText = "Repeat.",
        word4HeadlineTextTag = "h1",
        word3HeadlineTextTag = "h1",
        word2HeadlineTextTag = "h1"
    }
) {
    return settingsSectionVisibility ? <_Component
        tag="section"
        grid={{
            type: "section"
        }}
        id={settingsSectionId}><_Builtin.HtmlEmbed
            className="rebel-style--code-embed-8"
            value="%3C!--%20Flowbase%20Booster%20%5BText%20Highlight%5D%20--%3E%20%0A%3Cscript%20src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40flowbase-co%2Fboosters-gsap-text-highlight%401%2Fdist%2Fgsap-text-highlight.min.js%22%20type%3D%22text%2Fjavascript%22%3E%3C%2Fscript%3E%20%0A%3Cscript%20src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40flowbase-co%2Fboosters-gsap%403%2Fdist%2Fgsap.min.js%22%20type%3D%22text%2Fjavascript%22%3E%3C%2Fscript%3E" /><_Builtin.Section
            className="rebel-style--hero-1-section"
            tag="section"
            grid={{
                type: "section"
            }}><_Builtin.Block className="rebel-style--content-wrapper-default" tag="div"><_Builtin.Block className="rebel-style--hero-1-content-wrapper" tag="div"><_Builtin.Block
                        className="rebel-style--hero-heading-wrapper rebel-style--hero-padding-right rebel-style--component-color"
                        tag="div"><_Builtin.Heading
                            className="rebel-style--headline-md rebel-style--highlighter-white rebel-style--margin-bottom rebel-style--stagger-word-1 rebel-style--font-weight-bold"
                            tag={word1HeadlineTag}
                            fb-text-highlight="true"
                            fb-text-highlight-type="2"
                            fb-text-highlight-speed="3"
                            fb-text-highlight-direction="both">{word1HeadlineText}</_Builtin.Heading><_Builtin.Heading
                            className="rebel-style--headline-md rebel-style--highlighter-white rebel-style--margin-bottom rebel-style--stagger-word-2 rebel-style--font-weight-bold"
                            tag={word2HeadlineTextTag}
                            fb-text-highlight="true"
                            fb-text-highlight-type="2"
                            fb-text-highlight-speed="3"
                            fb-text-highlight-direction="forward">{word2HeadlineText}</_Builtin.Heading><_Builtin.Heading
                            className="rebel-style--headline-md rebel-style--highlighter-white rebel-style--margin-bottom rebel-style--stagger-word-3 rebel-style--font-weight-bold"
                            tag={word3HeadlineTextTag}
                            fb-text-highlight="true"
                            fb-text-highlight-type="2"
                            fb-text-highlight-speed="3"
                            fb-text-highlight-direction="both">{word3HeadlineText}</_Builtin.Heading><_Builtin.Heading
                            className="rebel-style--headline-md rebel-style--highlighter-white rebel-style--margin-bottom rebel-style--stagger-word-4 rebel-style--font-weight-bold"
                            tag={word4HeadlineTextTag}
                            fb-text-highlight="true"
                            fb-text-highlight-type="2"
                            fb-text-highlight-speed="3"
                            fb-text-highlight-direction="forward">{word4HeadlineText}</_Builtin.Heading></_Builtin.Block><_Builtin.Block className="rebel-style--hero-banner" tag="div"><_Builtin.Block className="rebel-style--blog-hero_wrapper" tag="div"><_Builtin.Image
                                className="rebel-style--blog-hero_image-effect"
                                loading="lazy"
                                width="Auto"
                                height="auto"
                                alt="Image Corner Curve"
                                src="https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68ce389bc9b7a5219c7dae3e_479d928d1126bf9494ef7a0aede4ab5a_Corner-Hero-Image.svg" /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Section></_Component> : null;
}