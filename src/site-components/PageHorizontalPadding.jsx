"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function PageHorizontalPadding(
    {
        as: _Component = _Builtin.Block,
        slotSlot,
        paddingPaddingHorizontal = "Padding None",
        paddingPaddingVertical = "Padding None"
    }
) {
    const _styleVariantMap = {
        "Padding None": "",
        "Padding 2x": "w-variant-cb94db38-daf2-3de5-c435-cc6a7e0b4249",
        "Padding 4x": "w-variant-cb94db38-daf2-3de5-c435-cc6a7e0b424a",
        "Padding 6x": "w-variant-cb94db38-daf2-3de5-c435-cc6a7e0b424b",
        "Padding 8x": "w-variant-cb94db38-daf2-3de5-c435-cc6a7e0b424c"
    };

    const _activeStyleVariant = _styleVariantMap[paddingPaddingHorizontal];
    return <_Component className={`rebel-style--page-padding ${_activeStyleVariant}`} tag="div"><_Builtin.NotSupported _atom="Slot" /></_Component>;
}