"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Button } from "./Button";

export function ComponentButton(
    {
        as: _Component = _Builtin.Block,
        buttonButtonVisible = true,
        buttonButtonId,
        buttonButtonColor = "Regular",

        buttonButtonLink = {
            href: "#"
        },

        buttonButtonText = "[ Button ]",
        buttonButtonSize = "Regular"
    }
) {
    const _styleVariantMap = {
        "Regular": "",
        "Small": "w-variant-2f50e8f2-03a7-4029-0315-f978e38e04ea",
        "Big": "w-variant-2f50e8f2-03a7-4029-0315-f978e38e04eb"
    };

    const _activeStyleVariant = _styleVariantMap[buttonButtonSize];

    return (
        <_Component
            className={`div-block-634 ${_activeStyleVariant}`}
            tag="div"
            data-button-size="normal"><Button
                buttonStyleButtonColor={buttonButtonColor}
                buttonVisible={buttonButtonVisible}
                buttonButtonId={buttonButtonId}
                buttonButtonText={buttonButtonText}
                buttonButtonLink={buttonButtonLink}
                buttonStyleButtonSize="normal" /></_Component>
    );
}