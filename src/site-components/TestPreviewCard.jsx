"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SummaryPreviewCard } from "./SummaryPreviewCard";
import { MainPreviewCard } from "./MainPreviewCard";

export function TestPreviewCard(
    {
        as: _Component = _Builtin.Block,
        settingsSummaryCardVisibility = true,
        settingsBlogMetaVisibility = true,
        settingsCategoryNameVisibility = true,
        optionsLabelFontSize = null,
        settingsOriginalPublishDateVisibility = true,
        metaCategorySlug = "Category Slug",
        metaCategoryInverseColor = "",
        metaCategoryPrimaryColor = "",
        metaBlogMetaId,
        previewCardSizeVariant = null,
        previewCardColorVariants = null,
        previewCardHeadlineTextTag = "h3",
        previewCardOriginalPublishDate = "MONTHXXXX",
        previewCardMetaCategoryText = "Category",
        previewCardDescriptionParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        previewCardHeadlineText = "Headline",
        previewCardLinkText = "View Article",
        previewCardCardId,
        imageCardImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68cfe601303bcf4493dde901_3a1a978f922b37418ac763aad8ccb26f_Placeholder%20Image.png",
        imageBackgroundImage = "",
        imageImageAltText = "__wf_reserved_inherit",
        linkUnderlineVisibility = true,
        linkUnderlinedLinkVisibility = true,

        linkLink = {
            href: "#"
        },

        viewsLikesViewsAndLikesVisibility = true,
        viewsLikesLikesVisibility = true,
        viewsLikesViewsVisibility = true,
        optionsLinkColor = null,
        customCodeTargetArticleSlugValue,
        customCodeTriggerArticleSlugValue = "",
        settingsDataSlug,
        viewsLikesIsActive = false
    }
) {
    return (
        <_Component className="rebel-style--preview-card-component" tag="div"><SummaryPreviewCard
                previewCardHeadlineTextTag={previewCardHeadlineTextTag}
                previewCardDescriptionParagraph={previewCardDescriptionParagraph}
                previewCardHeadlineText={previewCardHeadlineText}
                imageBackgroundImage={imageBackgroundImage}
                imageBackgroundImageAltText={imageImageAltText}
                settingsCategoryNameVisibility={settingsCategoryNameVisibility}
                settingsOriginalPublishDateVisibility={settingsOriginalPublishDateVisibility}
                settingsLinkVisibility={linkUnderlinedLinkVisibility}
                settingsBlogMetaVisibility={settingsBlogMetaVisibility}
                settingsBlogMetaId={metaBlogMetaId}
                optionsLabelFontSize={optionsLabelFontSize}
                optionsUnderlineVisibility={linkUnderlinedLinkVisibility}
                metaOriginalPublishDate={previewCardOriginalPublishDate}
                metaCategorySlug={metaCategorySlug}
                metaCategoryInverseColor={metaCategoryInverseColor}
                metaCategoryPrimaryColor={metaCategoryPrimaryColor}
                linkLinkText={previewCardLinkText}
                metaCategoryNameText={previewCardMetaCategoryText}
                linkLink={linkLink}
                settingsCardVisibility={settingsSummaryCardVisibility}
                customCodeArticleSlugValue={customCodeTargetArticleSlugValue} /><MainPreviewCard
                mainCardImage={imageCardImage}
                mainCardImageAltText={imageImageAltText}
                mainCardCardId={previewCardCardId}
                mainCardHeadlineText={previewCardHeadlineText}
                mainCardHeadinlineTag={previewCardHeadlineTextTag}
                linkColor={optionsLinkColor}
                linkUnderlinedLinkVisibility={linkUnderlinedLinkVisibility}
                linkLinkText={previewCardLinkText}
                linkUnderlineVisibility={linkUnderlineVisibility}
                metaBlogMetaVisibility={settingsBlogMetaVisibility}
                metaCategoryNameVisibility={settingsCategoryNameVisibility}
                metaLabelFontSize={optionsLabelFontSize}
                metaCategoryNameText={previewCardMetaCategoryText}
                metaOriginalPublishDateVisibility={settingsOriginalPublishDateVisibility}
                metaOriginalPublishDate={previewCardOriginalPublishDate}
                metaCategorySlug={metaCategorySlug}
                metaCategoryInverseColor={metaCategoryInverseColor}
                metaCategoryPrimaryColor={metaCategoryPrimaryColor}
                metaBlogMetaId={metaBlogMetaId}
                linkLink={linkLink}
                customCodeArticleSlugValue={customCodeTriggerArticleSlugValue}
                mainCardId={settingsDataSlug}
                viewsLikesStorageKey={settingsDataSlug}
                likeIsActive={viewsLikesIsActive}
                viewsLikesColorVariants={previewCardColorVariants}
                viewsLikesSizeVariant={previewCardSizeVariant} /></_Component>
    );
}