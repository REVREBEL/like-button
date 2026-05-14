"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { CardMetaItem } from "./CardMetaItem";
import { UnderlinedLink } from "./UnderlinedLink";
import { LikesViewsTotalCount } from "./LikesViewsTotalCount";

const _interactionsData = JSON.parse(
    '{"events":{"e-13394":{"id":"e-13394","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4756","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13395"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758820901395,"origin":["6946540cc72b976861f8c836","e-664"]}},"actionLists":{"a-4756":{"id":"a-4756","origin":["6946540cc72b976861f8c836","a-165"],"title":"Preview Card [HIDE] 28","actionItemGroups":[{"actionItems":[{"id":"a-4756-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rebel-style--component_wrapper","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd69a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758820974099}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FeaturedListArticlesTop(
    {
        as: _Component = _Builtin.BlockContainer,
        settingsSectionVisibility = true,
        settingsSectionId,
        optionsLinkColor = "Primary",
        headlineLinkColor = "Primary",
        feature1HeadlineTextTag = "h3",
        feature1HeadlineText = "Feature Headline",
        feature1LinkText = "Read Article",
        feature1Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68cfe601303bcf4493dde901_3a1a978f922b37418ac763aad8ccb26f_Placeholder%20Image.png",
        feature1ImageAltText = "__wf_reserved_inherit",
        optionsColor = "Primary",
        dateDateVisibility = true,
        dateDateTextColor = "Primary",
        dateOriginalPublishDate = "Month YYYY",
        metaFontSize = "Primary",
        category1CategoryVisibility = true,

        category1Link = {
            href: "#"
        },

        category1CategoryTextColor = "{{TEXT-COLOR}}",
        category1CategoryPrimaryColor = "{{PRIMARY-COLOR}}",
        category1CategoryBackgroundColor = "{{BACKGROUND-COLOR}}",
        category1CategoryInverseColor = "{{INVERSE-COLOR}}",
        category1CategorySlug = "Category Slug",
        category2CategoryVisibility = true,
        category2CategoryNameText = "CATEGORY NAME",

        category2Link = {
            href: "#"
        },

        category2CategorySlug = "{{CATEGORY-SLUG}}",
        category2CategoryTextColor = "{{TEXT-COLOR}}",
        category2CategoryPrimaryColor = "{{PRIMARY-COLOR}}",
        category2CategoryBackgroundColor = "{{BACKGROUND-COLOR}}",
        category2CategoryInverseColor = "{{INVERSE-COLOR}}",
        likesViewsColorVariants = "Primary",
        likesViewsSizeVariant = null,
        likesViewsVisibility = true,
        likesViewsIsActive = false,
        likesViewsStorageKey,
        category1CategoryNameText = "CATEGORY NAME"
    }
) {
    _interactions.useInteractions(_interactionsData);

    const _styleVariantMap = {
        "Primary": "",
        "Color 3": "w-variant-37b38bd0-85e4-bb41-0e93-80c68ad0c5bd",
        "Color 7": "w-variant-37b38bd0-85e4-bb41-0e93-80c68ad0c5be"
    };

    const _activeStyleVariant = _styleVariantMap[optionsColor];

    return settingsSectionVisibility ? <_Component
        className={`rebel-style--component_wrapper ${_activeStyleVariant}`}
        grid={{
            type: "container"
        }}
        tag="div"
        id={settingsSectionId}><_Builtin.BlockContainer
            className={`rebel-style--component_container ${_activeStyleVariant}`}
            grid={{
                type: "container"
            }}
            tag="div"><_Builtin.Block
                className={`rebel-style--component_padding rebel-style--padding-md rebel-style--margin-block_ld rebel-style--max-width_large rebel-style--text-color-primary container w-container ${_activeStyleVariant}`}
                tag="div"><_Builtin.Block
                    className={`rebel-style--featured-article_color-varients ${_activeStyleVariant}`}
                    tag="div"><_Builtin.Block className={`rebel-style--item-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Block
                            className={`rebel-style--featured-article_content-wrapper ${_activeStyleVariant}`}
                            tag="div"><_Builtin.Block className={`rebel-style--card_meta ${_activeStyleVariant}`} tag="div"><CardMetaItem
                                    category2CategoryNameText={category2CategoryNameText}
                                    dateDate={dateOriginalPublishDate}
                                    category1CategoryNameText={category1CategoryNameText}
                                    category1Link={category1Link}
                                    category1CategorySlug={category1CategorySlug}
                                    globalOptionsFontSize={metaFontSize}
                                    category1CategoryVisibility={category1CategoryVisibility}
                                    category1CategoryTextColor={category1CategoryTextColor}
                                    category1CategoryPrimaryColor={category1CategoryPrimaryColor}
                                    category1CategoryBackgroundColor={category1CategoryBackgroundColor}
                                    category1CategoryInverseColor={category1CategoryInverseColor}
                                    category2CategoryVisibility={category2CategoryVisibility}
                                    category2Link={category2Link}
                                    category2CategorySlug={category2CategorySlug}
                                    category2CategoryTextColor={category2CategoryTextColor}
                                    category2CategoryPrimaryColor={category2CategoryPrimaryColor}
                                    category2CategoryBackgroundColor={category2CategoryBackgroundColor}
                                    category2CategoryInverseColor={category2CategoryInverseColor}
                                    dateDateVisibility={dateDateVisibility}
                                    dateDateTextColor={dateDateTextColor} /></_Builtin.Block><_Builtin.Heading
                                className={`rebel-style--headline-sm rebel-style--padding-top_xs rebel-style--padding-bottom_sm ${_activeStyleVariant}`}
                                tag={feature1HeadlineTextTag}>{feature1HeadlineText}</_Builtin.Heading><_Builtin.Block
                                className={`rebel-style--card_item-wrapper rebel-style--flex-strech ${_activeStyleVariant}`}
                                tag="div"><UnderlinedLink
                                    underlinedLinkLinkText={feature1LinkText}
                                    underlinedLinkLink={category1Link}
                                    underlinedLinkColor={optionsLinkColor} /><LikesViewsTotalCount
                                    optionsSizeVariant={likesViewsSizeVariant}
                                    optionsColorVariants={likesViewsColorVariants}
                                    optionsStorageKey={likesViewsStorageKey}
                                    componentId={likesViewsStorageKey}
                                    optionsIsActive={likesViewsIsActive}
                                    componentVisibility={likesViewsVisibility}
                                    likesLikesLabelVisibility={false} /></_Builtin.Block></_Builtin.Block><_Builtin.Link
                            className={`rebel-style--blog-list_content-wrapper ${_activeStyleVariant}`}
                            button={false}
                            block="inline"
                            options={{
                                href: "#"
                            }}><_Builtin.Block
                                className={`rebel-style--image-wrapper ${_activeStyleVariant}`}
                                id="w-node-_4628dd22-7e3c-f191-84a7-5d326fca5a89-6fca5a7b"
                                tag="div"><_Builtin.Image
                                    className={`rebel-style--blog-image_large rebel-style--image-animated ${_activeStyleVariant}`}
                                    loading="lazy"
                                    width="auto"
                                    height="auto"
                                    src={feature1Image} /></_Builtin.Block></_Builtin.Link></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.BlockContainer></_Component> : null;
}