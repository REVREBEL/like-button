"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function UnderlinedLink(
    {
        as: _Component = _Builtin.Block,
        underlinedLinkLinkVisibility = true,
        underlinedLinkColor = "Dark",
        underlinedLinkLinkText = "Read Article",

        underlinedLinkLink = {
            href: "#"
        }
    }
) {
    const _styleVariantMap = {
        "Light": "w-variant-a36ccb00-d7be-bf13-7ca8-19a47ef13156",
        "Dark": "",
        "Color 2": "w-variant-f7980415-dc61-0484-39f8-abe07720742a",
        "Color 4": "w-variant-adad8008-b56b-c486-e00a-414b44c64786",
        "Color 5": "w-variant-9409e122-d916-93fa-f1a7-bbe5cd093da4",
        "Color 6": "w-variant-997a3787-d800-6de9-8fd5-56e1a81babe5",
        "Color 7": "w-variant-d43a0a70-b3f1-9870-5ce5-0b412620c8b2",
        "Color 8": "w-variant-f198a1ed-05bd-4b40-0311-385f69842fed"
    };

    const _activeStyleVariant = _styleVariantMap[underlinedLinkColor];

    return underlinedLinkLinkVisibility ? <_Component
        className={`rebel-style--component_text-color ${_activeStyleVariant}`}
        tag="div"><_Builtin.Link
            className={`rebel-style--read-more_link-block ${_activeStyleVariant}`}
            button={false}
            block="inline"
            options={underlinedLinkLink}><_Builtin.Block
                className={`rebel-style--component_label ${_activeStyleVariant}`}
                tag="div">{underlinedLinkLinkText}</_Builtin.Block></_Builtin.Link></_Component> : null;
}