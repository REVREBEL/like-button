"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ComponentFlexLikeNew } from "./ComponentFlexLikeNew";

export function Liked(
    {
        as: _Component = _Builtin.Block,
        componentId,
        componentVisibility = true,
        optionsIsActive = false,
        likesLikeCountsText = "0",
        likesLikesLabelText = "‍Likes",
        likesLikedButtonLabelText = "Liked",
        likesUnlikedButtonLabelText = "Like",
        likesLikesCountRuntimeProps = {},
        likesLikesCountSlot,
        optionsIconVisibility = true,
        optionsLikesCountVisibility = true,
        optionsLikesLabelVisibility = true,
        optionsColorVariants = "Primary",
        optionsPositionVariant = "Primary",
        optionsSizeVariant = "Primary",
        dataDataSlug
    }
) {
    const _styleVariantMap = {
        "Light": "w-variant-9516b3ec-2d9b-7432-8503-7e1254e8aab9",
        "Primary": "",
        "Color 2": "w-variant-9516b3ec-2d9b-7432-8503-7e1254e8aaba",
        "Color 7": "w-variant-9516b3ec-2d9b-7432-8503-7e1254e8aabb"
    };

    const _activeStyleVariant = _styleVariantMap[optionsColorVariants];

    return componentVisibility ? <_Component
        className={`rebel-style--component_color rebel-style--on-hover ${_activeStyleVariant}`}
        tag="div"
        data-storage-key={dataDataSlug}
        data-action-like={dataDataSlug}
        id={componentId}><ComponentFlexLikeNew
            optionsIconVisibility={optionsIconVisibility}
            optionsLabelVisibility={optionsLikesLabelVisibility}
            optionsCountVisibility={optionsLikesCountVisibility}
            optionsPositionVariant={optionsPositionVariant}
            optionsSizeVariant={optionsSizeVariant}
            optionsIsActive={optionsIsActive}
            likesLikesCountVisibility={optionsLikesCountVisibility}
            likesLikeCountsText={likesLikeCountsText}
            likesLikesLabelVisibility={optionsLikesLabelVisibility}
            likesLikesLabelText={likesLikesLabelText}
            likesLikedButtonLabelText={likesLikedButtonLabelText}
            likesUnlikedButtonLabelText={likesUnlikedButtonLabelText}
            likesLikesCountRuntimeProps={likesLikesCountRuntimeProps}
            likesLikesCountSlot={likesLikesCountSlot}
            dataDataSlug={dataDataSlug} /></_Component> : null;
}