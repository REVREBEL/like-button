"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ComponentFlexLikes } from "./ComponentFlexLikes";

export function LikeArticle(
    {
        as: _Component = _Builtin.Block,
        labelLabelText = "Like",
        labelLabelVisibility = true,
        likeButtonId,
        optionsSizeVariant = "Primary",
        optionsFlexDirectionVariant = "Primary",
        developerRuntimeProps = {},
        developerSlot,
        eventButtonStateIsActive = false,
        eventButtonStateIconVisibility = true,
        optionsVariant = "Primary"
    }
) {
    const _styleVariantMap = {
        "Light": "w-variant-45fde7dc-d487-daf1-113a-101dcb448fae",
        "Primary": "",
        "Color 3": "w-variant-45fde7dc-d487-daf1-113a-101dcb448faf",
        "Color 7": "w-variant-45fde7dc-d487-daf1-113a-101dcb448fb0"
    };

    const _activeStyleVariant = _styleVariantMap[optionsVariant];

    return (
        <_Component
            className={`component_color-7 ${_activeStyleVariant}`}
            tag="div"
            id={likeButtonId}
            {...developerRuntimeProps}>{developerSlot ?? <ComponentFlexLikes
                developerRuntimeProps={developerRuntimeProps}
                likeButtonIsActive={eventButtonStateIsActive}
                labelLabelText={labelLabelText}
                labelLabelVisibility={labelLabelVisibility}
                optionsFlexDirectionVariant={optionsFlexDirectionVariant}
                optionsSizeVariant={optionsSizeVariant}
                likeButtonIconVisibility={eventButtonStateIconVisibility} />}</_Component>
    );
}