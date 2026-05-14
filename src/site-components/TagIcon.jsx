"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { TagInnerComponent } from "./TagInnerComponent";

export function TagIcon(
    {
        as: _Component = _Builtin.Link,
        settingsVisibility = true,
        settingsTagId,
        optionsTagColor = null,
        optionsClickableLink = "Tag Non-Clickable",
        optionsIconSize = "Tag Non-Clickable",
        labelLabelText = "Mavericks4Life",

        labelLink = {
            href: "#"
        },

        settingsIconVisibility = true,
        iconIconJackVisibility = false,
        iconIconStarVisibility = false,
        iconIconArrowVisibility = true,
        iconIconImageVisibility = false,
        iconIconImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d5fb16179349fc4fa754c5_c68a1dfa80662c3064e12f294a7a2c05_close-x.svg",
        iconIconImageAltText = "__wf_reserved_inherit"
    }
) {
    const _styleVariantMap = {
        "Tag Non-Clickable": "",
        "Tag is Clickable": "w-variant-1a3813d0-ef31-e12e-cb79-1ba966de8d11"
    };

    const _activeStyleVariant = _styleVariantMap[optionsClickableLink];

    return settingsVisibility ? <_Component
        className={`rebel-style--tag_component-link-block rebel-style--flex-horizontal ${_activeStyleVariant}`}
        button={false}
        id={settingsTagId}
        block="inline"
        options={labelLink}><TagInnerComponent
            iconsIconArrowVisibility={iconIconArrowVisibility}
            optionsColor={optionsTagColor}
            settingsIconSize={optionsIconSize}
            settingsIconVisibility={settingsIconVisibility}
            tagTagText={labelLabelText}
            iconsIconJackVisibility={iconIconJackVisibility}
            iconsIconStarVisibility={iconIconStarVisibility}
            iconsIconImageVisibility={iconIconImageVisibility}
            iconsIconImage={iconIconImage}
            iconsIconImageAltText={iconIconImageAltText} /></_Component> : null;
}