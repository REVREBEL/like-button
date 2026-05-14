"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function Button(
    {
        as: _Component = _Builtin.Link,
        buttonVisible = true,
        buttonStyleButtonColor = "Brand Primary",
        buttonStyleButtonSize = "normal",
        buttonButtonId,
        buttonButtonText = "[ Button ]",

        buttonButtonLink = {
            href: "#"
        }
    }
) {
    const _styleVariantMap = {
        "Brand Primary": "",
        "Brand Primary Outline": "w-variant-9daaf30d-f421-1f7b-35a8-1d87babbffb4",
        "White": "w-variant-9daaf30d-f421-1f7b-35a8-1d87babbffb5",
        "White Outline": "w-variant-9daaf30d-f421-1f7b-35a8-1d87babbffb6",
        "Brand Color 3": "w-variant-9daaf30d-f421-1f7b-35a8-1d87babbffb9",
        "Brand Color 3 Outline": "w-variant-9daaf30d-f421-1f7b-35a8-1d87babbffba",
        "Brand Color 4": "w-variant-2440caff-33a0-1f24-a6f5-34d46cd7e00f",
        "Brand Color 4 Outline": "w-variant-63c6287b-c2fd-ae85-b0df-8183cb4562a2",
        "Brand Color 5": "w-variant-9daaf30d-f421-1f7b-35a8-1d87babbffbb",
        "Brand Color 5 Outline": "w-variant-9daaf30d-f421-1f7b-35a8-1d87babbffbc",
        "Brand Color 8": "w-variant-9daaf30d-f421-1f7b-35a8-1d87babbffb7",
        "Brand Color 8 Outline": "w-variant-9daaf30d-f421-1f7b-35a8-1d87babbffb8",
        "Alert": "w-variant-8a7b15e3-7398-2a8d-c362-d464b06f4510",
        "Alert Outline": "w-variant-491d8671-7a44-99b9-79a5-23fbd3bb7628",
        "Disabled": "w-variant-d7a26e54-3f71-bbe2-2d8b-fd2ce1de87f1",
        "Disabled Outline": "w-variant-085a095d-9153-5747-7565-707a956eb26b"
    };

    const _activeStyleVariant = _styleVariantMap[buttonStyleButtonColor];

    return buttonVisible ? <_Component
        className={` rebel-style--component-button ${_activeStyleVariant}`}
        button={true}
        id={buttonButtonId}
        block=""
        options={buttonButtonLink}>{buttonButtonText}</_Component> : null;
}