"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function BlogHeroImageSection(
    {
        as: _Component = _Builtin.Section,
        photoCreditText = "",
        heroSectionHeroImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68cfe601303bcf4493dde901_3a1a978f922b37418ac763aad8ccb26f_Placeholder%20Image.png",
        heroSectionHeroImageAltText = "__wf_reserved_inherit",
        socialShareSidebarSocialShareBottomLabelText = "Subscribe",
        socialShareSidebarSocialShareHashtags
    }
) {
    return (
        <_Component
            className="rebel-style--blog-detail_hero"
            tag="section"
            grid={{
                type: "section"
            }}><_Builtin.Block className="rebel-style--content-wrapper-default" tag="div"><_Builtin.Block className="rebel-style--blog-detail-photo-credit-wrapper" tag="div"><_Builtin.RichText className="rebel-style--blogs_rich-text-photo-credit" tag="div" slot=""><_Builtin.Paragraph>{"Photo by "}<_Builtin.Link
                                button={false}
                                block=""
                                options={{
                                    href: "https://unsplash.com/@manuelmx?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                                }}><_Builtin.Strong>{"FIrstName LastName"}</_Builtin.Strong></_Builtin.Link>{" on "}<_Builtin.Link
                                button={false}
                                block=""
                                options={{
                                    href: "https://unsplash.com/photos/sunloungers-fronting-buildings-near-mountain-DGa0LQ0yDPc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                                }}><_Builtin.Strong className="rebel-style--bold-text-5">{"Unsplash"}</_Builtin.Strong></_Builtin.Link></_Builtin.Paragraph></_Builtin.RichText></_Builtin.Block><_Builtin.Block className="rebel-style--blog-detail_main-image" tag="div"><_Builtin.Block className="rebel-style--blog-details-hero-banner" tag="div"><_Builtin.Image
                            className="rebel-style--blog-hero_image"
                            loading="lazy"
                            width="auto"
                            height="auto"
                            src={heroSectionHeroImage} /><_Builtin.Block className="rebel-style--blog-hero_wrapper" tag="div"><_Builtin.Image
                                className="rebel-style--blog-hero_image-effect"
                                width="auto"
                                height="auto"
                                loading="lazy"
                                alt="Image Corner Curve"
                                src="https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68ce389bc9b7a5219c7dae3e_479d928d1126bf9494ef7a0aede4ab5a_Corner-Hero-Image.svg" /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Component>
    );
}