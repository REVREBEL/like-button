"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { CardMetaItem } from "./CardMetaItem";
import { UnderlinedLink } from "./UnderlinedLink";
import { LikesViewsTotalCount } from "./LikesViewsTotalCount";
import { Liked } from "./Liked";

const _interactionsData = JSON.parse(
    '{"events":{"e-13269":{"id":"e-13269","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-13270"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":800,"direction":null,"effectIn":true},"createdOn":1754711831046,"origin":["6946540cc72b976861f8c836","e-69"]},"e-13283":{"id":"e-13283","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4762","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13284"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--image-animated","originalId":"e0ddf636-bf22-0eee-3530-ae2dda257d41","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--image-animated","originalId":"e0ddf636-bf22-0eee-3530-ae2dda257d41","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1763321911152,"origin":["6946540cc72b976861f8c836","e-846"]},"e-13285":{"id":"e-13285","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4763","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13286"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--image-animated","originalId":"68cf6673ed956e971b18d0ab|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--image-animated","originalId":"68cf6673ed956e971b18d0ab|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1763325802830,"origin":["6946540cc72b976861f8c836","e-848"]}},"actionLists":{"a-4762":{"id":"a-4762","origin":["6946540cc72b976861f8c836","a-94"],"title":"Scroll Into View - Fade-In","actionItemGroups":[{"actionItems":[{"id":"a-4762-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":2000,"target":{"useEventTarget":true,"id":"d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4762-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":2000,"target":{"useEventTarget":true,"id":"d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1755952745478},"a-4763":{"id":"a-4763","origin":["6946540cc72b976861f8c836","a-227"],"title":"Scroll Into View - Fade-In 2","actionItemGroups":[{"actionItems":[{"id":"a-4763-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":2000,"target":{"useEventTarget":true,"id":"68cf6673ed956e971b18d0ab|d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4763-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":2000,"target":{"useEventTarget":true,"id":"68cf6673ed956e971b18d0ab|d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1755952745478},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function MainPreviewCard(
    {
        as: _Component = _Builtin.Block,
        mainCardId,
        mainCardVisibility = true,
        mainCardCardVisibility = true,
        mainCardImageVisibility = true,
        mainCardImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68cfe601303bcf4493dde901_3a1a978f922b37418ac763aad8ccb26f_Placeholder%20Image.png",
        mainCardImageAltText = "__wf_reserved_inherit",
        linkColor = null,
        linkPositionVariant = null,
        linkUnderlinedLinkVisibility = true,
        linkUnderlineVisibility = true,
        linkLinkText = "Read Article",

        linkLink = {
            href: "#"
        },

        metaBlogMetaId,
        metaBlogMetaVisibility = true,
        metaOriginalPublishDateVisibility = true,
        metaCategoryNameVisibility = true,
        metaLabelFontSize = null,
        metaCategoryNameText = "Category Name",
        metaOriginalPublishDate = "Month YYYY",
        metaCategorySlug = "Category Slug",
        metaCategoryInverseColor = "",
        metaCategoryPrimaryColor = "",
        mainCardCardId,
        mainCardHeadinlineTag = "h3",
        mainCardHeadlineText = "Headline",
        customCodeArticleSlugValue = "",
        viewsLikesVisibility = true,
        viewsLikesIsActive = false,
        viewsLikesColorVariants = null,
        viewsLikesSizeVariant = null,
        viewsLikesStorageKey,
        likeLikesLabelVisibility = true,
        likeIsActive = false,
        likeColorVariants = null,
        likeSizeVariant = null,
        likeLikesLabelText = "‍Like",
        likeLikedButtonLabelText = "Liked",
        likeUnlikedButtonLabelText = "Like"
    }
) {
    _interactions.useInteractions(_interactionsData);

    return mainCardVisibility ? <_Component
        className="rebel-style--main-preview-card_component"
        tag="div"
        id={mainCardId}>{mainCardCardVisibility ? <_Builtin.Block
            className="rebel-style--main-preview-card rebel-style--shadow-blue rebel-style--width_400px"
            tag="div"
            id={mainCardCardId}><_Builtin.Block className="rebel-style--main-preview-card_body" tag="div"><_Builtin.Block
                    className="rebel-style--main-preview-card_content-wrapper rebel-style--text-color-primary"
                    tag="div"><CardMetaItem
                        settingsVisibility={metaBlogMetaVisibility}
                        globalOptionsFontSize={metaLabelFontSize}
                        category2CategoryVisibility={metaCategoryNameVisibility}
                        category2CategoryNameText={metaCategoryNameText}
                        dateDateVisibility={metaOriginalPublishDateVisibility}
                        dateDate={metaOriginalPublishDate}
                        category1CategoryInverseColor={metaCategoryInverseColor}
                        category1CategoryPrimaryColor={metaCategoryPrimaryColor}
                        settingsId={metaBlogMetaId} /><_Builtin.Heading
                        className="rebel-style--headline-xs rebel-style--padding-top_xs"
                        tag={mainCardHeadinlineTag}>{mainCardHeadlineText}</_Builtin.Heading><_Builtin.Block
                        className="rebel-style--card_item-wrapper rebel-style--margin-top-auto"
                        tag="div"><UnderlinedLink
                            underlinedLinkColor={linkColor}
                            underlinedLinkLinkVisibility={linkUnderlinedLinkVisibility}
                            underlinedLinkLink={linkLink}
                            underlinedLinkLinkText={linkLinkText} /><_Builtin.DOM
                            className="rebel-style--preview-card_trigger"
                            tag="div"
                            slot=""
                            preview-trigger={listOfElementsToText(customCodeArticleSlugValue)} /><LikesViewsTotalCount
                            optionsColorVariants={viewsLikesColorVariants}
                            optionsIsActive={viewsLikesIsActive}
                            optionsSizeVariant={viewsLikesSizeVariant}
                            optionsStorageKey={viewsLikesStorageKey}
                            componentId={viewsLikesStorageKey}
                            componentVisibility={viewsLikesVisibility}
                            dataDataSlug={mainCardId}
                            likesLikesLabelVisibility={false} /></_Builtin.Block></_Builtin.Block><_Builtin.Block
                    className="rebel-style--image-cover rebel-style--radius-top_none rebel-style--ratio_3x2"
                    tag="div">{mainCardImageVisibility ? <_Builtin.Image
                        className="rebel-style--image-animated rebel-style--radius-top_none"
                        width="auto"
                        height="auto"
                        loading="lazy"
                        src={mainCardImage} /> : null}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--data-actiion-like_wrapper" tag="div"><Liked
                    likesLikesLabelText={likeLikesLabelText}
                    optionsIsActive={likeIsActive}
                    dataDataSlug={mainCardId}
                    optionsColorVariants={likeColorVariants}
                    optionsPositionVariant={linkPositionVariant}
                    optionsSizeVariant={likeSizeVariant}
                    likesLikedButtonLabelText={likeLikedButtonLabelText}
                    likesUnlikedButtonLabelText={likeUnlikedButtonLabelText}
                    optionsLikesLabelVisibility={likeLikesLabelVisibility}
                    optionsLikesCountVisibility={false} /></_Builtin.Block></_Builtin.Block> : null}</_Component> : null;
}