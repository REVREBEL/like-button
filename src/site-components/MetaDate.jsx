"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function MetaDate(
    {
        as: _Component = _Builtin.Section,
        settingsVisibility = true,
        settingsTextColor = "Dark",
        settingsText = "Month YYYY"
    }
) {
    const _styleVariantMap = {
        "Light": "w-variant-ff9b9068-d19d-80c5-22ab-4665d3eeeb17",
        "Dark": "",
        "Color 1": "w-variant-ff9b9068-d19d-80c5-22ab-4665d3eeeb21",
        "Color 2": "w-variant-ff9b9068-d19d-80c5-22ab-4665d3eeeb22",
        "Color 3": "w-variant-ff9b9068-d19d-80c5-22ab-4665d3eeeb23",
        "Color 4": "w-variant-ff9b9068-d19d-80c5-22ab-4665d3eeeb24",
        "Color 5": "w-variant-ff9b9068-d19d-80c5-22ab-4665d3eeeb25",
        "Color 6": "w-variant-ff9b9068-d19d-80c5-22ab-4665d3eeeb26",
        "Color 7": "w-variant-ff9b9068-d19d-80c5-22ab-4665d3eeeb27",
        "Color 8": "w-variant-ff9b9068-d19d-80c5-22ab-4665d3eeeb28",
        "Color 9": "w-variant-ff9b9068-d19d-80c5-22ab-4665d3eeeb20"
    };

    const _activeStyleVariant = _styleVariantMap[settingsTextColor];

    return (
        <_Component
            className={`rebel-style--component_base ${_activeStyleVariant}`}
            tag="section"
            data-copilot="true"><_Builtin.Block
                className={`rebel-style--variants_text-color rebel-style--is-inline-block ${_activeStyleVariant}`}
                tag="div">{settingsVisibility ? <_Builtin.Block
                    className={`rebel-style--meta-date_wrapper ${_activeStyleVariant}`}
                    tag="div"><_Builtin.Block
                        className={`rebel-style--meta-date_text ${_activeStyleVariant}`}
                        tag="div">{settingsText}</_Builtin.Block></_Builtin.Block> : null}</_Builtin.Block></_Component>
    );
}