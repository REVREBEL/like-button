"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SectionMarginBottom(
    {
        as: _Component = _Builtin.Section,
        slotSlot,
        marginMarginBottom = "Bottom Margin None"
    }
) {
    const _styleVariantMap = {
        "Bottom Margin None": "",
        "Bottom Margin 2x": "w-variant-7c8bf190-d609-941c-a817-d9192082492b",
        "Bottom Margin 4x": "w-variant-7c8bf190-d609-941c-a817-d9192082492c",
        "Bottom Margin 6x": "w-variant-7c8bf190-d609-941c-a817-d9192082492d",
        "Bottom Margin 8x": "w-variant-7c8bf190-d609-941c-a817-d9192082492e"
    };

    const _activeStyleVariant = _styleVariantMap[marginMarginBottom];

    return (
        <_Component
            className={`rebel-style--component_margin ${_activeStyleVariant}`}
            grid={{
                type: "section"
            }}
            tag="section"><_Builtin.NotSupported _atom="Slot" /></_Component>
    );
}