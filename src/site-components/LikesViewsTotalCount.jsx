"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ComponentFlexLikesViews } from "./ComponentFlexLikesViews";

export function LikesViewsTotalCount(
    {
        as: _Component = _Builtin.Block,
        componentId,
        componentVisibility = true,
        optionsIsActive = false,
        likesLikesCountVisibility = true,
        likesLikesCountId,
        likesLikeCountsText = "0",
        likesLikesLabelVisibility = true,
        viewsViewsCountId = "number-views-count",
        viewsViewsCountVisibility = true,
        viewsViewsCountText = <>{"0"}<br /></>,
        viewsViewsLabelVisibility = true,
        viewsViewsLabelText = <>{"Views"}<br /></>,
        optionsColorVariants = "Primary",
        viewsViewsCountRuntimeProps = {},
        viewsViewsCountSlot,
        likesLikesLabelText = "‍Likes",
        likesLikedButtonLabelText = "Liked",
        likesUnlikedButtonLabelText = "Like",
        likesLikesCountRuntimeProps = {},
        likesLikesCountSlot,
        optionsPositionVariant = "Primary",
        optionsSizeVariant = "Primary",
        optionsStorageKey,
        optionsIconVisibility = true,
        dataDataSlug
    }
) {
    const _styleVariantMap = {
        "Light": "w-variant-bd4012dc-d834-3b17-f233-608900159873",
        "Primary": "",
        "Color 2": "w-variant-5f6a095c-b8b7-a034-1e45-4c595d5a11eb",
        "Color 7": "w-variant-bcbcde30-ae7c-e275-38b4-058596de380d"
    };

    const _activeStyleVariant = _styleVariantMap[optionsColorVariants];

    return componentVisibility ? <_Component
        className={`rebel-style--component_color ${_activeStyleVariant}`}
        tag="div"
        data-action-view={dataDataSlug}
        id={componentId}><ComponentFlexLikesViews
            likesLikeCountsText={likesLikeCountsText}
            optionsIsActive={optionsIsActive}
            likesLikesLabelVisibility={likesLikesLabelVisibility}
            likesLikesCountVisibility={likesLikesCountVisibility}
            likesLikesCountRuntimeProps={likesLikesCountRuntimeProps}
            likesLikesCountSlot={likesLikesCountSlot}
            viewsViewsCountVisibility={viewsViewsCountVisibility}
            viewsViewsCountText={viewsViewsCountText}
            viewsViewsLabelText={viewsViewsLabelText}
            viewsViewsCountRuntimeProps={viewsViewsCountRuntimeProps}
            viewsViewsCountSlot={viewsViewsCountSlot}
            likesLikesLabelText={likesLikesLabelText}
            likesUnlikedButtonLabelText={likesUnlikedButtonLabelText}
            likesLikedButtonLabelText={likesLikedButtonLabelText}
            viewsViewsLabelVisibility={viewsViewsLabelVisibility}
            optionsPositionVariant={optionsPositionVariant}
            optionsSizeVariant={optionsSizeVariant}
            optionsStorageKey={optionsStorageKey}
            optionsIconVisibility={optionsIconVisibility}
            dataDataSlug={dataDataSlug} /></_Component> : null;
}