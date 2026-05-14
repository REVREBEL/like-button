"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function PageVerticalPadding(
    {
        as: _Component = _Builtin.Block,
        paddingPaddingVertical = "Padding None",
        slotSlot
    }
) {
    const _styleVariantMap = {
        "Padding None": "",
        "Padding 2x": "w-variant-ebdf94fe-edae-6f58-cbaa-36795f720dc9",
        "Padding 4x": "w-variant-12b77e95-740e-2eaf-1e43-ab7debdd17af",
        "Padding 6x": "w-variant-f3311495-cabb-8951-7321-37d63fc6f4c4",
        "Padding 8x": "w-variant-5fd10114-4aba-f1e6-8382-440eec1261e4"
    };

    const _activeStyleVariant = _styleVariantMap[paddingPaddingVertical];
    return <_Component className={`rebel-style--page-padding ${_activeStyleVariant}`} tag="div"><_Builtin.NotSupported _atom="Slot" /></_Component>;
}