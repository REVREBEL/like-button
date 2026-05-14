"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function PrivacyPolicy(
    {
        as: _Component = _Builtin.BlockContainer,
        settingsSectionId,
        settingsSectionVisibility = true,
        contentRichTextContent = ""
    }
) {
    return (
        <_Component
            className="rebel-style--color-variants rebel-style--is-lg rebel-style--padding_large rebel-style--is-mobile_padding_none"
            grid={{
                type: "container"
            }}
            tag="div"
            id={settingsSectionId}><_Builtin.RichText className="rebel-style--rich-text_policies" tag="div" slot="">{contentRichTextContent}</_Builtin.RichText></_Component>
    );
}