"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-4726":{"id":"e-4726","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1016","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4687"}},"mediaQueries":["main","small","tiny"],"target":{"selector":".lets-work-together_component-button","originalId":"e875ba0a-bf7c-194a-fc83-45f9fd9cd53f","appliesTo":"CLASS"},"targets":[{"selector":".lets-work-together_component-button","originalId":"e875ba0a-bf7c-194a-fc83-45f9fd9cd53f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758685869163},"e-4727":{"id":"e-4727","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1017","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4686"}},"mediaQueries":["main","small","tiny"],"target":{"selector":".lets-work-together_component-button","originalId":"e875ba0a-bf7c-194a-fc83-45f9fd9cd53f","appliesTo":"CLASS"},"targets":[{"selector":".lets-work-together_component-button","originalId":"e875ba0a-bf7c-194a-fc83-45f9fd9cd53f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758685869167}},"actionLists":{"a-1016":{"id":"a-1016","title":"Contact Link Hover [IN]","actionItemGroups":[{"actionItems":[{"id":"a-1016-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inCirc","duration":1500,"target":{"selector":".work-link_icon","selectorGuids":["57b2e9ba-6b6d-5d31-6d00-cc81e7201bb2"]},"xValue":0,"yValue":0,"zValue":0,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}}]},{"actionItems":[{"id":"a-1016-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inCirc","duration":1500,"target":{"selector":".work-link_icon","selectorGuids":["57b2e9ba-6b6d-5d31-6d00-cc81e7201bb2"]},"yValue":0,"zValue":180,"xUnit":"DEG","yUnit":"deg","zUnit":"deg"}},{"id":"a-1016-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":150,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".work-link_line.is-rebel","selectorGuids":["57b2e9ba-6b6d-5d31-6d00-cc81e7201bb3","57b2e9ba-6b6d-5d31-6d00-cc81e7201bbc"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-1016-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":150,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".work-link_line.is-rebel","selectorGuids":["57b2e9ba-6b6d-5d31-6d00-cc81e7201bb3","57b2e9ba-6b6d-5d31-6d00-cc81e7201bbc"]},"value":0.3,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1712111368875},"a-1017":{"id":"a-1017","title":"Contact Link Hover [OUT]","actionItemGroups":[{"actionItems":[{"id":"a-1017-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outCubic","duration":1500,"target":{"selector":".work-link_icon","selectorGuids":["57b2e9ba-6b6d-5d31-6d00-cc81e7201bb2"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-1017-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outCubic","duration":1500,"target":{"selector":".work-link_icon","selectorGuids":["57b2e9ba-6b6d-5d31-6d00-cc81e7201bb2"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-1017-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".work-link_line.is-rebel","selectorGuids":["57b2e9ba-6b6d-5d31-6d00-cc81e7201bb3","57b2e9ba-6b6d-5d31-6d00-cc81e7201bbc"]},"value":0,"unit":""}},{"id":"a-1017-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":150,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".work-link_line.is-rebel","selectorGuids":["57b2e9ba-6b6d-5d31-6d00-cc81e7201bb3","57b2e9ba-6b6d-5d31-6d00-cc81e7201bbc"]},"heightValue":4,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1712111368875}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function LetsWorkTogetherButton(
    {
        as: _Component = _Builtin.Link,
        settingsButtonVisibility = true,
        settingsButtonId,
        optionsUnderlineVisibility = true,

        buttonButtonLink = {
            href: "#"
        },

        buttonButtonText = "Let’s work together",
        iconIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb94943cded46d23608af_9f7495ecacdf316f47f8490a05efa373_asterisk.svg",
        iconIconAltText = "__wf_reserved_inherit",
        optionsSize = "Big Left Align"
    }
) {
    _interactions.useInteractions(_interactionsData);

    const _styleVariantMap = {
        "Big Left Align": "",
        "Big Center Align": "w-variant-d1786a72-0806-6295-df52-b279f81b0b1f",
        "Regular Left Align": "w-variant-d1786a72-0806-6295-df52-b279f81b0b20",
        "Regular Center Align": "w-variant-d1786a72-0806-6295-df52-b279f81b0b21",
        "Small Left Align": "w-variant-d1786a72-0806-6295-df52-b279f81b0b22",
        "Small Center Align": "w-variant-d1786a72-0806-6295-df52-b279f81b0b23",
        "Responsive Size": "w-variant-d1786a72-0806-6295-df52-b279f81b0b24"
    };

    const _activeStyleVariant = _styleVariantMap[optionsSize];

    return settingsButtonVisibility ? <_Component
        className={`lets-work-together_component-button ${_activeStyleVariant}`}
        id="w-node-e875ba0a-bf7c-194a-fc83-45f9fd9cd53f-fd9cd53f"
        button={false}
        block="inline"
        options={buttonButtonLink}><_Builtin.Block className={`work-link-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Block
                className={`work-link_text-wrapper is-rebel ${_activeStyleVariant}`}
                tag="div"><_Builtin.Block className={`work-link_responsive-text ${_activeStyleVariant}`} tag="div">{buttonButtonText}</_Builtin.Block><_Builtin.Block className={`work-link-text ${_activeStyleVariant}`} tag="div">{buttonButtonText}</_Builtin.Block></_Builtin.Block><_Builtin.Block className={`work-link_icon-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                    className={`work-link_icon is-icon-color-blue ${_activeStyleVariant}`}
                    loading="lazy"
                    width="Auto"
                    height="auto"
                    src={iconIcon} /></_Builtin.Block></_Builtin.Block>{optionsUnderlineVisibility ? <_Builtin.Block className={`work-link_line is-rebel ${_activeStyleVariant}`} tag="div" /> : null}</_Component> : null;
}