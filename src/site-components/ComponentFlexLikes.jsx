"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ComponentSizeLikes } from "./ComponentSizeLikes";

export function ComponentFlexLikes(
    {
        as: _Component = _Builtin.Block,
        labelLabelVisibility = false,
        labelLabelText = "Like",
        optionsFlexDirectionVariant = "Inline",
        optionsSizeVariant = "Inline",
        likeButtonIsActive = false,
        likeButtonIconVisibility = true,
        developerRuntimeProps = {}
    }
) {
    const _styleVariantMap = {
        "Inline": "",
        "Stacked": "w-variant-00a02c54-a5e7-0dba-70f1-30c4d2af78e4"
    };

    const _activeStyleVariant = _styleVariantMap[optionsFlexDirectionVariant];

    return (
        <_Component
            className={`rebel-style--component-flex_varients ${_activeStyleVariant}`}
            tag="div"
            {...developerRuntimeProps}><ComponentSizeLikes
                labelRuntimeProps={developerRuntimeProps}
                likeButtonIsActive={likeButtonIsActive}
                likeButtonLabelText={labelLabelText}
                labelLabelVisibility={labelLabelVisibility}
                likeButtonPositionVariant={optionsSizeVariant} /></_Component>
    );
}