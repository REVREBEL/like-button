"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ComponentSizeLikesViews } from "./ComponentSizeLikesViews";

export function ComponentFlexLikesViews(
    {
        as: _Component = _Builtin.Block,
        optionsStorageKey,
        optionsIsActive = false,
        optionsPositionVariant = "Inine",
        likesLikesCountVisibility = true,
        likesLikeCountsText = "0",
        likesLikesLabelVisibility = true,
        viewsViewsCountVisibility = true,
        viewsViewsCountText = <>{"0"}<br /></>,
        viewsViewsLabelVisibility = true,
        viewsViewsLabelText = <>{"Views"}<br /></>,
        viewsViewsCountRuntimeProps = {},
        viewsViewsCountSlot,
        likesLikesLabelText = "‍Likes",
        likesLikedButtonLabelText = "Liked",
        likesUnlikedButtonLabelText = "Like",
        likesLikesCountRuntimeProps = {},
        likesLikesCountSlot,
        optionsSizeVariant = "Inine",
        optionsIconVisibility = true,
        dataDataSlug
    }
) {
    const _styleVariantMap = {
        "Inine": "",
        "Stacked": "w-variant-502239a6-b59a-75ca-3a59-d11149ed4377"
    };

    const _activeStyleVariant = _styleVariantMap[optionsPositionVariant];

    return (
        <_Component
            className={`rebel-style--component-flex_varients ${_activeStyleVariant}`}
            tag="div"><ComponentSizeLikesViews
                optionsIsActive={optionsIsActive}
                likesLikesCountText={likesLikeCountsText}
                optionsSizeVariant={optionsSizeVariant}
                likesLikesLabelText={likesLikesLabelText}
                likesLikesLabelVisibility={likesLikesLabelVisibility}
                likesLikesCountVisibility={likesLikesCountVisibility}
                likesLikesCountSlot={likesLikesCountSlot}
                viewsViewsCountVisibility={viewsViewsCountVisibility}
                viewsViewsCountText={viewsViewsCountText}
                viewsViewsCountSlot={viewsViewsCountSlot}
                viewsViewsCountRuntimeProps={viewsViewsCountRuntimeProps}
                viewsLabelText={viewsViewsLabelText}
                likesLikesCountRuntimeProps={likesLikesCountRuntimeProps}
                likesLikedButtonLabelText={likesLikedButtonLabelText}
                likesUnlikedButtonLabelText={likesUnlikedButtonLabelText}
                viewsViewsLabelVisibility={viewsViewsLabelVisibility}
                optionsStorageKey={optionsStorageKey}
                optionsIconVisibility={optionsIconVisibility}
                dataDataSlug={dataDataSlug} /></_Component>
    );
}