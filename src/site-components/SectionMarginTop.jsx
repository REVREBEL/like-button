"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SectionMarginTop(
    {
        as: _Component = _Builtin.Section,
        slotSlot,
        marginMarginTop = "Top Margin None"
    }
) {
    const _styleVariantMap = {
        "Top Margin None": "",
        "Top Margin 2x": "w-variant-c4177525-2a7f-72e9-e7bd-1e5f6a129443",
        "Top Margin 4x": "w-variant-c4177525-2a7f-72e9-e7bd-1e5f6a129444",
        "Top Margin 6x": "w-variant-c4177525-2a7f-72e9-e7bd-1e5f6a129445",
        "Top Margin 8x": "w-variant-c4177525-2a7f-72e9-e7bd-1e5f6a129446"
    };

    const _activeStyleVariant = _styleVariantMap[marginMarginTop];

    return (
        <_Component
            className={`rebel-style--component_margin ${_activeStyleVariant}`}
            grid={{
                type: "section"
            }}
            tag="section"><_Builtin.NotSupported _atom="Slot" /></_Component>
    );
}