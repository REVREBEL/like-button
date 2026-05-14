"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { TagInnerIconComponent } from "./TagInnerIconComponent";

export function TagInnerComponent(
    {
        as: _Component = _Builtin.Block,
        tagTagText = "Mavericks4Life",
        settingsIconVisibility = true,
        settingsIconSize = "Color Primary",
        optionsColor = "Color Primary",
        iconsIconJackVisibility = false,
        iconsIconArrowVisibility = true,
        iconsIconStarVisibility = false,
        iconsIconImageVisibility = false,
        iconsIconImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d5fb16179349fc4fa754c5_c68a1dfa80662c3064e12f294a7a2c05_close-x.svg",
        iconsIconImageAltText = "__wf_reserved_inherit"
    }
) {
    const _styleVariantMap = {
        "Clear": "w-variant-db1a48f5-746a-3230-0f60-ea7d14ee59b2",
        "Color Primary": "",
        "Color Primary Outline": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d3d",
        "Color 1": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d3e",
        "Color 1 Outline": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d3f",
        "Color 2": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d40",
        "Color 2 Outline": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d41",
        "Color 3": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d42",
        "Color 3 Outline": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d43",
        "Color 4": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d44",
        "Color 4 Outline": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d45",
        "Color 5": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d46",
        "Color 5 Outline": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d47",
        "Color 6": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d48",
        "Color 6 Outline": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d49",
        "Color 7": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d4a",
        "Color 7 Outline": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d4b",
        "Color 8": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d4c",
        "Color 8 Outline": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d4d",
        "Color 9": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d4e",
        "Color 9 Outline": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d4f",
        "Color Light": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d50",
        "Color Light Outline": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d51",
        "Color Dark": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d52",
        "Color Dark Outline": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d53"
    };

    const _activeStyleVariant = _styleVariantMap[optionsColor];

    return (
        <_Component
            className={`rebel-style--color_component rebel-style--flex_horizontal ${_activeStyleVariant}`}
            tag="div"><_Builtin.Block className={`rebel-style--tag_component ${_activeStyleVariant}`} tag="div">{tagTagText}</_Builtin.Block>{settingsIconVisibility ? <_Builtin.Block
                className={`rebel-style--space_tag-padding-right ${_activeStyleVariant}`}
                tag="div"><TagInnerIconComponent
                    optionsIconSize={settingsIconSize}
                    iconsIconImage={iconsIconImage}
                    iconsIconImageVisibility={iconsIconImageVisibility}
                    iconsIconImageAltText={iconsIconImageAltText}
                    iconsIconStarVisibility={iconsIconStarVisibility}
                    iconsIconArrowVisibility={iconsIconArrowVisibility}
                    iconsIconJackVisibility={iconsIconJackVisibility}
                    optionsIconVisibility={settingsIconVisibility} /></_Builtin.Block> : null}</_Component>
    );
}