"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function LabelElement(
    {
        as: _Component = _Builtin.Block,
        variant = "Color Primary",
        labelText = "Mavericks4Life"
    }
) {
    const _styleVariantMap = {
        "Color Primary": "",
        "Color Primary Outline": "w-variant-a17a95c5-33b2-c6a3-15b3-b38ff1864c3b",
        "Color 1": "w-variant-a31a9b25-59ae-96ba-267f-a7f74079bfae",
        "Color 1 Outline": "w-variant-8d783c96-6d77-fb99-3d36-839a4e0e4409",
        "Color 2": "w-variant-a31a9b25-59ae-96ba-267f-a7f74079bfaf",
        "Color 2 Outline": "w-variant-9fcdcaae-2a9f-9bc7-1747-0c8740817759",
        "Color 3": "w-variant-a31a9b25-59ae-96ba-267f-a7f74079bfb0",
        "Color 3 Outline": "w-variant-01005ac1-61f7-d609-73ae-5f4fccbc6d36",
        "Color 4": "w-variant-a31a9b25-59ae-96ba-267f-a7f74079bfb1",
        "Color 4 Outline": "w-variant-aa6d03e1-01cf-88ca-5326-58f56f286bcb",
        "Color 5": "w-variant-a31a9b25-59ae-96ba-267f-a7f74079bfb2",
        "Color 5 Outline": "w-variant-14c50b7d-7eca-9be1-9a47-1316de48b013",
        "Color 6": "w-variant-a31a9b25-59ae-96ba-267f-a7f74079bfb3",
        "Color 6 Outline": "w-variant-e6073ed0-5a6d-7f5c-4b40-8a14cd01a6c3",
        "Color 7": "w-variant-a31a9b25-59ae-96ba-267f-a7f74079bfb4",
        "Color 7 Outline": "w-variant-4da9bac6-3232-f98f-f11a-3b0c249e5920",
        "Color 8": "w-variant-a31a9b25-59ae-96ba-267f-a7f74079bfb5",
        "Color 8 Outline": "w-variant-9c19e8d4-100a-4b4a-8238-c409fae08dd1",
        "Color 9": "w-variant-a31a9b25-59ae-96ba-267f-a7f74079bfb6",
        "Color 9 Outline": "w-variant-9fa9229a-5c6f-5ee5-94fb-5016535988b6",
        "Color Light": "w-variant-a31a9b25-59ae-96ba-267f-a7f74079bfb7",
        "Color Light Outline": "w-variant-574a8bf0-ba0c-cf1c-ad3a-8aa7c14c34dd",
        "Color Dark": "w-variant-e75786f1-084b-20ce-f562-c0b5b3e388f9",
        "Color Dark Outline": "w-variant-273a90b9-d816-255e-0f12-3bd3d58f50dd"
    };

    const _activeStyleVariant = _styleVariantMap[variant];

    return (
        <_Component
            className={`rebel-style--color_component ${_activeStyleVariant}`}
            tag="div"><_Builtin.Block className={`rebel-style--tag_component ${_activeStyleVariant}`} tag="div">{labelText}</_Builtin.Block></_Component>
    );
}