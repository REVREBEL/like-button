"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SocialButton(
    {
        as: _Component = _Builtin.Block,
        socialPlatform = "Base"
    }
) {
    const _styleVariantMap = {
        "Base": "",
        "Instagram": "w-variant-de5fb2a0-ccd0-cdd7-7c2d-7ddea245d37f",
        "Instagram Outline": "w-variant-a2ac16c9-1a02-36bd-44b0-7f0e1005312a",
        "Linkedin": "w-variant-841adf25-f31c-fa0c-872e-3155fd2ba4db",
        "LinkedIn Outline": "w-variant-71a44a44-9164-4ae9-1294-436495d35e60",
        "Facebook": "w-variant-908ff316-64e0-5224-0e3b-022b57b79d4f",
        "Facebook Outline": "w-variant-e39e2ed1-d2b9-2342-1073-81f59f955c6f",
        "X": "w-variant-acccc6fa-2b17-52e4-1dfc-945ffa250823",
        "X Outline": "w-variant-e16391df-4cac-49cb-feff-3ddee21b4500",
        "Blog": "w-variant-33b0b924-37a5-d908-0460-c1379a172b0f",
        "Blog Outline": "w-variant-6ea65578-0b49-a0cb-c5e7-ca975a9f9f75",
        "Github": "w-variant-f01aa58a-8e1a-9544-26b2-a636753851f0",
        "Google": "w-variant-6cb59e76-ab73-5d2e-1a6b-d32bf38abc88",
        "Google Drive": "w-variant-a3fc72a8-d255-8f83-b892-cdba941e3049"
    };

    const _activeStyleVariant = _styleVariantMap[socialPlatform];

    return (
        <_Component
            className={`rebel-style--socials_component-button rebel-style--icon-toggle ${_activeStyleVariant}`}
            id="w-node-_1323a68f-966f-d714-d85e-5e2bb03e1683-b03e1683"
            tag="div"
            data-icon-size="2x2"><_Builtin.Block
                className={`rebel-style--socials_button_hover-on rebel-style--normal-state ${_activeStyleVariant}`}
                tag="div" /><_Builtin.Block
                className={`rebel-style--socials_button_hover-off rebel-style--hover-state ${_activeStyleVariant}`}
                tag="div" /></_Component>
    );
}