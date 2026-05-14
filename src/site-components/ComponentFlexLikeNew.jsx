"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ComponentSizeLike } from "./ComponentSizeLike";

export function ComponentFlexLikeNew(
    {
        as: _Component = _Builtin.Block,
        optionsIsActive = false,
        likesLikesCountVisibility = true,
        likesLikeCountsText = "0",
        likesLikesLabelVisibility = true,
        likesLikesLabelText = "‍Likes",
        likesLikedButtonLabelText = "Liked",
        likesUnlikedButtonLabelText = "Like",
        likesLikesCountRuntimeProps = {},
        likesLikesCountSlot,
        optionsIconVisibility = true,
        optionsCountVisibility = true,
        optionsLabelVisibility = true,
        optionsPositionVariant = "Inine",
        optionsSizeVariant = "Inine",
        dataDataSlug
    }
) {
    const _styleVariantMap = {
        "Inine": "",
        "Stacked": "w-variant-74fb59cd-c3e5-75f4-5645-b322267be480"
    };

    const _activeStyleVariant = _styleVariantMap[optionsPositionVariant];

    return (
        <_Component
            className={`rebel-style--component-flex_varients ${_activeStyleVariant}`}
            tag="div"><ComponentSizeLike
                optionsIconVisibility={optionsIconVisibility}
                optionsCountVisibility={optionsCountVisibility}
                optionsLabelVisibility={optionsLabelVisibility}
                optionsIsActive={optionsIsActive}
                likesUnlikedButtonLabelText={likesUnlikedButtonLabelText}
                likesLikedButtonLabelText={likesLikedButtonLabelText}
                likesLikesLabelText={likesLikesLabelText}
                likesLikesCountVisibility={likesLikesCountVisibility}
                likesLikesCountText={likesLikeCountsText}
                likesLikesLabelVisibility={likesLikesLabelVisibility}
                likesLikesCountRuntimeProps={likesLikesCountRuntimeProps}
                likesLikesCountSlot={likesLikesCountSlot}
                optionsSizeVariant={optionsSizeVariant}
                dataDataSlug={dataDataSlug} /></_Component>
    );
}