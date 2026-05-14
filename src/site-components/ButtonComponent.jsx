"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonColor } from "./ButtonColor";

export function ButtonComponent(
    {
        as: _Component = _Builtin.Link,
        settingsButtonVisibility = true,
        settingsButtonId,

        settingsButtonLink = {
            href: "#"
        },

        optionsColor = null,
        buttonStyleButtonTypeSize = null,
        enableIconIconVisibility = false,
        enableIconIconSize = null,
        iconsIconJackVisibility = false,
        iconsIconStarVisibility = false,
        iconsIconArrowVisibility = false,
        iconsIconImageVisibility = false,
        iconsIconImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d5fb16179349fc4fa754c4_e01a2149fe7bded8c1390dff893911bd_sheriff-badge.svg",
        settingsButtonText = "[ Icon Button ] ",
        iconsIconImageAltText = "__wf_reserved_inherit"
    }
) {
    return settingsButtonVisibility ? <_Component
        className="rebel-style--component-button_link-block"
        button={false}
        id={settingsButtonId}
        block="inline"
        options={settingsButtonLink}><ButtonColor
            optionsLabelText={settingsButtonText}
            optionsTypeSize={buttonStyleButtonTypeSize}
            optionsColor={optionsColor}
            optionsIconVisibility={enableIconIconVisibility}
            optionsIconSize={enableIconIconSize}
            iconsIconStarVisibility={iconsIconStarVisibility}
            iconsIconArrowVisibility={iconsIconArrowVisibility}
            iconsIconJackVisibility={iconsIconJackVisibility}
            iconsIconImageVisibility={iconsIconImageVisibility}
            iconsIconImage={iconsIconImage}
            iconsIconImageAltText={iconsIconImageAltText} /></_Component> : null;
}