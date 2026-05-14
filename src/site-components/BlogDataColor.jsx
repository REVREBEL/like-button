"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function BlogDataColor(
    {
        as: _Component = _Builtin.Block,
        dateDateColor = "Brand Color 2",
        dateOriginalPublishDateVisibility = true,
        dateOriginalPublishDate = "Month YYYY"
    }
) {
    const _styleVariantMap = {
        "Brand Color 2": "",
        "Brand Color 3": "w-variant-aec5c7b6-6e24-2be2-d3fc-5a30da611f08",
        "Brand Color 4": "w-variant-c53db290-c6c0-d415-d629-dcda77e1ca58",
        "Brand Color Primary": "w-variant-e6fad1e5-8cf5-74fc-88a5-ba2931382293",
        "Brand Color Light": "w-variant-13d4889b-3bfe-fe11-6a3e-0fbcacc5f73d"
    };

    const _activeStyleVariant = _styleVariantMap[dateDateColor];

    return dateOriginalPublishDateVisibility ? <_Component
        className={`rebel-style--meta-date_color ${_activeStyleVariant}`}
        tag="div"><_Builtin.Block
            className={`rebel-style--meta-date_text ${_activeStyleVariant}`}
            tag="div">{dateOriginalPublishDate}</_Builtin.Block></_Component> : null;
}