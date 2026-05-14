"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ComponentFlexLikes } from "./ComponentFlexLikes";

export function LikeButton(
    {
        as: _Component = _Builtin.Block,
        eventButtonStateIconVisibility = true,
        eventButtonStateIsActive = false,
        labelLabelText = "Like",
        labelLabelVisibility = true,
        optionsSizeVariant = null,
        optionsFlexDirectionVariant = "Primary",
        developerRuntimeProps = {},
        developerSlot,
        componentVisibility = true,
        componentId,
        optionsColorVariant = "Primary"
    }
) {
    const _styleVariantMap = {
        "Light": "w-variant-3dfa9d09-f6d3-8ec7-df28-d43e730d6cea",
        "Primary": "",
        "Color 3": "w-variant-3dfa9d09-f6d3-8ec7-df28-d43e730d6ceb",
        "Color 7": "w-variant-3dfa9d09-f6d3-8ec7-df28-d43e730d6cec"
    };

    const _activeStyleVariant = _styleVariantMap[optionsColorVariant];

    return componentVisibility ? <_Component
        className={`component_color-7 ${_activeStyleVariant}`}
        tag="div"
        id={componentId}
        {...developerRuntimeProps}>{developerSlot ?? <ComponentFlexLikes
            developerRuntimeProps={developerRuntimeProps}
            likeButtonIsActive={eventButtonStateIsActive}
            labelLabelText={labelLabelText}
            labelLabelVisibility={labelLabelVisibility}
            optionsFlexDirectionVariant={optionsFlexDirectionVariant}
            optionsSizeVariant={optionsSizeVariant}
            likeButtonIconVisibility={eventButtonStateIconVisibility} />}</_Component> : null;
}