"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CardMetaItem } from "./CardMetaItem";
import { UnderlinedLink } from "./UnderlinedLink";

export function ArticlesListBlock(
    {
        as: _Component = _Builtin.Block,
        articlesListBlockVisibility = true,
        articlesListBlockId,
        cardMetaVisibility = true,
        cardMetaFontSize = null,
        readArticleColorVariant = null,
        readArticleLinkVisibility = true,
        readArticleLinkText = "Read Article",

        readArticleLink = {
            href: "#"
        },

        category1CategoryVisibility = true,
        category1CategoryText = "Category Name",
        cardContentParagraphVisibility = true,
        cardContentHeadlineTag = "h3",
        cardContentHeadlineText = "Tell Me something Good",
        cardContentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        category1CategorySlug = "{{CATEGORY-SLUG}}",
        category1CategoryTextColor = "{{TEXT-COLOR}}",
        category1CategoryPrimaryColor = "{{PRIMARY-COLOR}}",
        category1CategoryBackgroundColor = "{{BACKGROUND-COLOR}}",
        category1CategoryInverseColor = "{{INVERSE-COLOR}}",
        publishedDateVisibility = true,
        publishedDateDateTextColor = null,
        publishedDateDate = "Month YYYY"
    }
) {
    return articlesListBlockVisibility ? <_Component
        className="rebel-style--margin-inline_xxs rebel-style--margin-block_md rebel-style--padding_xs rebel-style--bg-color-9"
        tag="div"
        id={articlesListBlockId}><_Builtin.Block className="rebel-style--divider" tag="div" /><_Builtin.Block className="rebel-style--flex-vertical" tag="div"><CardMetaItem
                category1CategoryVisibility={category1CategoryVisibility}
                category1CategoryNameText={category1CategoryText}
                category1Link={readArticleLink}
                globalOptionsFontSize={cardMetaFontSize}
                category1CategorySlug={category1CategorySlug}
                category1CategoryTextColor={category1CategoryTextColor}
                category1CategoryPrimaryColor={category1CategoryPrimaryColor}
                category1CategoryBackgroundColor={category1CategoryBackgroundColor}
                category1CategoryInverseColor={category1CategoryInverseColor}
                dateDateVisibility={publishedDateVisibility}
                dateDateTextColor={publishedDateDateTextColor}
                dateDate={publishedDateDate}
                settingsVisibility={cardMetaVisibility}
                settingsId=""
                category2CategoryVisibility={false} /><_Builtin.Heading
                className="rebel-style--headline-tiny rebel-style--margin-block_xs"
                tag={cardContentHeadlineTag}>{cardContentHeadlineText}</_Builtin.Heading>{cardContentParagraphVisibility ? <_Builtin.Paragraph className=" rebel-style--paragraph_sm">{cardContentText}</_Builtin.Paragraph> : null}<_Builtin.Block className="rebel-style--button-wrapper" tag="div"><UnderlinedLink
                    underlinedLinkLinkText={readArticleLinkText}
                    underlinedLinkLink={readArticleLink}
                    underlinedLinkColor={readArticleColorVariant}
                    underlinedLinkLinkVisibility={readArticleLinkVisibility} /></_Builtin.Block></_Builtin.Block></_Component> : null;
}