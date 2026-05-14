"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonSize } from "./ButtonSize";

export function ButtonColor(
    {
        as: _Component = _Builtin.Block,
        optionsTypeSize = "Primary",
        optionsColor = "Primary",
        optionsIconVisibility = false,
        optionsIconSize = "Primary",
        optionsLabelText = "[ Icon Button ] ",
        iconsIconStarVisibility = false,
        iconsIconArrowVisibility = false,
        iconsIconJackVisibility = true,
        iconsIconImageVisibility = false,
        iconsIconImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d5fb16179349fc4fa754c4_e01a2149fe7bded8c1390dff893911bd_sheriff-badge.svg",
        iconsIconImageAltText = "__wf_reserved_inherit"
    }
) {
    const _styleVariantMap = {
        "Primary": "",
        "Primary Inverse": "w-variant-2de56a0d-e5fe-091b-e543-beb5b37901fa",
        "Primary Outline": "w-variant-f0daa171-cd6d-3a2c-5b81-dc64d0e0f133",
        "Light": "w-variant-63cd4846-710a-7d14-f9f5-038592bd8515",
        "Light Outline": "w-variant-8f04e851-a0fd-2fb0-afe3-88fec9ef65e4",
        "Dark": "w-variant-dc4ebbc4-b865-8dbe-280b-1e32e9353419",
        "Dark Outline": "w-variant-f0a307ba-d855-3623-97a8-cf2bb35797b1",
        "Color 1": "w-variant-14b566ef-769a-5c35-3137-c97b99b598b4",
        "Color 1 Outline": "w-variant-ec381254-739f-4996-62cc-c269024d26aa",
        "Color 1 Outline Inverse": "w-variant-6b0e9dee-ada1-3276-6444-7208f91637e1",
        "Color 2": "w-variant-8a349b38-ddb9-422c-144d-c705f953a6db",
        "Color 2 Outline": "w-variant-7e07b5b3-6d3a-0e1c-2997-b1c588eb9d0f",
        "Color 4": "w-variant-621daaab-7056-b877-3108-cd14b6a7f18e",
        "Color 5": "w-variant-41342276-aa54-b6e6-9042-0c31c9e1ca7d",
        "Color 5 Outline": "w-variant-7f90e10a-8df9-a78b-daef-c26b6a6659be",
        "Color 6": "w-variant-e63251cc-a5d6-89f8-1f56-8cc3f4dbbfb8",
        "Color 6 Outline": "w-variant-9294637e-8529-1af5-9194-a2de0f51b075",
        "Color 7": "w-variant-3de9f677-3b14-b908-79b7-dc17118114a0",
        "Color 8": "w-variant-acc9a4f6-3811-d00f-3058-157e191fff2d",
        "Color 8 Outline": "w-variant-dbad39e8-691f-dc28-e61e-b5579fb510a0",
        "Color 8 Outline Inverse": "w-variant-0c43cf71-0441-5a43-45ef-98bed69a3154",
        "Color 9 Outline": "w-variant-e572c86f-330b-811b-d375-5789384ab8b9",
        "Alert": "w-variant-d3dc0232-cee5-4f6b-ee95-5c84021bf8b5",
        "Alert Outline": "w-variant-9dff9f66-77bf-6417-0c4b-90461a7a1fc2",
        "Disabled": "w-variant-551e66fc-b703-6bc0-a866-ef8adcf950a6",
        "Transparent": "w-variant-501065f0-5aa5-be84-d014-7c696b9f9e77"
    };

    const _activeStyleVariant = _styleVariantMap[optionsColor];

    return (
        <_Component
            className={`rebel-style--component-button_color ${_activeStyleVariant}`}
            tag="div"><ButtonSize
                labelLabelText={optionsLabelText}
                optionsTypeSize={optionsTypeSize}
                optionsIconVisibility={optionsIconVisibility}
                optionsIconSize={optionsIconSize}
                iconsIconStarVisibility={iconsIconStarVisibility}
                iconsIconArrowVisibility={iconsIconArrowVisibility}
                iconsIconJackVisibility={iconsIconJackVisibility}
                iconsIconImageAltText={iconsIconImageAltText}
                iconsIconImage={iconsIconImage}
                iconsIconImageVisibility={iconsIconImageVisibility} /></_Component>
    );
}