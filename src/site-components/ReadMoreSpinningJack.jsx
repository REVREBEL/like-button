"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ReadMoreSpinningJack(
    {
        as: _Component = _Builtin.Block,
        settingsButtonId,
        readMoreButtonButtonCtaText = "Read More",

        readMoreButtonLink = {
            href: "#"
        },

        readMoreButtonIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68ce36fc04efd02eeb070d95_dffbd9532c91c5f9296aaeb82c2f9f6e_asterisk.svg",
        readMoreButtonIconAltText = "__wf_reserved_inherit",
        settingsButtonVisibility = true
    }
) {
    _interactions.useInteractions(_interactionsData);

    return settingsButtonVisibility ? <_Component
        className="rebel-style--readmore_button"
        id="w-node-_11cd6cca-7fbc-2bf9-c7ab-8827fb101a47-fb101a47"
        data-w-id="11cd6cca-7fbc-2bf9-c7ab-8827fb101a47"
        tag="div"
        href="#"
        spinning-icon="trigger"><_Builtin.Link
            className="rebel-style--read-more_link"
            button={false}
            block="inline"
            options={readMoreButtonLink}><_Builtin.Block className="rebel-style--read-more_text" tag="div">{readMoreButtonButtonCtaText}</_Builtin.Block><_Builtin.Block
                className="rebel-style--read-more_line rebel-style--is-rebel"
                tag="div"
                MovingColors="target" /><_Builtin.Image
                className="rebel-style--read-more_icon rebel-style--icon_3x3 rebel-style--is-icon-color-primary"
                loading="lazy"
                width="auto"
                height="auto"
                src={readMoreButtonIcon} /></_Builtin.Link></_Component> : null;
}