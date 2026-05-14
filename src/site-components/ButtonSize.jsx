"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconComponent } from "./IconComponent";

export function ButtonSize(
    {
        as: _Component = _Builtin.Block,
        optionsTypeSize = "Button Regular",
        labelLabelText = "[ Icon Button ] ",
        iconsIconStarVisibility = false,
        iconsIconArrowVisibility = false,
        iconsIconJackVisibility = true,
        iconsIconImageAltText = "__wf_reserved_inherit",
        iconsIconImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d5fb16179349fc4fa754c4_e01a2149fe7bded8c1390dff893911bd_sheriff-badge.svg",
        optionsIconVisibility = false,
        optionsIconSize = "Button Regular",
        iconsIconImageVisibility = false
    }
) {
    const _styleVariantMap = {
        "Button Small": "w-variant-a387552c-61c2-7edd-a648-e57c1c0dd867",
        "Button Regular": "",
        "Button Large": "w-variant-bb2b4b7e-2e8b-3c64-8ec2-9903e378d1b4"
    };

    const _activeStyleVariant = _styleVariantMap[optionsTypeSize];

    return (
        <_Component
            className={`rebel-style--component-button_size ${_activeStyleVariant}`}
            tag="div"><_Builtin.Block
                className={`rebel-style--component-button_label ${_activeStyleVariant}`}
                tag="div">{labelLabelText}</_Builtin.Block>{optionsIconVisibility ? <_Builtin.Block
                className={`rebel-style--icon-image_visibility ${_activeStyleVariant}`}
                tag="div"><IconComponent
                    iconsIconImage={iconsIconImage}
                    iconsIconImageVisibility={iconsIconImageVisibility}
                    optionsIconSize={optionsIconSize}
                    optionsIconVisibility={optionsIconVisibility}
                    iconsIconJackVisibility={iconsIconJackVisibility}
                    iconsIconArrowVisibility={iconsIconArrowVisibility}
                    iconsIconStarVisibility={iconsIconStarVisibility}
                    iconsIconImageAltText={iconsIconImageAltText} /></_Builtin.Block> : null}</_Component>
    );
}