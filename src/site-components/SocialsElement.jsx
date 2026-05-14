"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SocialButton } from "./SocialButton";

export function SocialsElement(
    {
        as: _Component = _Builtin.Block,
        socialPlatform = "2x2",
        socialButtonIconSettingsSocialButtonVisibility = true,
        socialButtonIconSettingsSocialButtonId,

        socialButtonLinksSocialButtonLinkLink = {
            href: "https://www.instagram.com/hello_revrebel",
            target: "_blank"
        },

        iconSize = "2x2"
    }
) {
    const _styleVariantMap = {
        "2x2": "",
        "3x3": "w-variant-21e7c99c-32e2-5b55-71ee-ce0675045332",
        "4x4": "w-variant-cd42a16a-90b9-27c3-5ba2-e2c82cafdd57"
    };

    const _activeStyleVariant = _styleVariantMap[iconSize];

    return socialButtonIconSettingsSocialButtonVisibility ? <_Component className={`rebel-style--social_icon ${_activeStyleVariant}`} tag="div"><_Builtin.Link
            className={`rebel-style--socials_link-block ${_activeStyleVariant}`}
            button={false}
            block="inline"
            options={{
                href: "https://www.instagram.com/hello_revrebel",
                target: "_blank"
            }}><_Builtin.Block
                className={`rebel-style--socials_icon-size ${_activeStyleVariant}`}
                tag="div"><SocialButton socialPlatform={socialPlatform} /></_Builtin.Block></_Builtin.Link></_Component> : null;
}