"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-6952":{"id":"e-6952","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2001","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-325"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button-link_underline-2","originalId":"68aeb08fae835690f41e06e1|6832d1d0-de60-605b-bf34-2e8d0b7e25df","appliesTo":"CLASS"},"targets":[{"selector":".button-link_underline-2","originalId":"68aeb08fae835690f41e06e1|6832d1d0-de60-605b-bf34-2e8d0b7e25df","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1756303378916},"e-6953":{"id":"e-6953","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2002","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-324"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button-link_underline-2","originalId":"68aeb08fae835690f41e06e1|6832d1d0-de60-605b-bf34-2e8d0b7e25df","appliesTo":"CLASS"},"targets":[{"selector":".button-link_underline-2","originalId":"68aeb08fae835690f41e06e1|6832d1d0-de60-605b-bf34-2e8d0b7e25df","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1756303378919}},"actionLists":{"a-2001":{"id":"a-2001","title":"Hover On  Link Line Green 19","actionItemGroups":[{"actionItems":[{"id":"a-2001-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".link-line-2","selectorGuids":["67b4e990-fc6e-bb94-22a5-40aecd719a5f"]},"globalSwatchId":"@var_variable-5c34b5aa-a793-0d4f-064d-1761fedc9141","rValue":113,"bValue":197,"gValue":201,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1756303386216},"a-2002":{"id":"a-2002","title":"Hover Off Link Line Blue 19","actionItemGroups":[{"actionItems":[{"id":"a-2002-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".link-line-2","selectorGuids":["67b4e990-fc6e-bb94-22a5-40aecd719a5f"]},"globalSwatchId":"@var_variable-2bb1ebee-e63b-0624-0a6e-46ad3ae5858d","rValue":22,"bValue":102,"gValue":54,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1756303386216}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function UnderlinedLinkElement2(
    {
        as: _Component = _Builtin.Block,
        settingsUnderlinedLinkVisibility = true,

        underlinedLinkLink = {
            href: "#"
        },

        underlinedLinkLinkText = "Read Article",
        underlinedLinkUnderlineVisibility = true,
        optionsColor = "Dark"
    }
) {
    _interactions.useInteractions(_interactionsData);

    const _styleVariantMap = {
        "Dark": "",
        "Light": "w-variant-6ffb2a81-c9de-bfae-dbd8-d0340c11fdd6",
        "Brand Color 2": "w-variant-6ffb2a81-c9de-bfae-dbd8-d0340c11fdd7",
        "Brand Color 4": "w-variant-6ffb2a81-c9de-bfae-dbd8-d0340c11fdd8",
        "Brand Color 5": "w-variant-6ffb2a81-c9de-bfae-dbd8-d0340c11fdd9",
        "Brand Color 6": "w-variant-6ffb2a81-c9de-bfae-dbd8-d0340c11fdda",
        "Brand Color 7": "w-variant-6ffb2a81-c9de-bfae-dbd8-d0340c11fddb",
        "Brand Color 8": "w-variant-6ffb2a81-c9de-bfae-dbd8-d0340c11fddc"
    };

    const _activeStyleVariant = _styleVariantMap[optionsColor];
    return settingsUnderlinedLinkVisibility ? <_Component className={`button-link_underline-2 ${_activeStyleVariant}`} tag="div"><_Builtin.Link button={false} block="inline" options={underlinedLinkLink}><_Builtin.Block className={`component_label-2 ${_activeStyleVariant}`} tag="div">{underlinedLinkLinkText}</_Builtin.Block>{underlinedLinkUnderlineVisibility ? <_Builtin.Block className={`link-line-2 ${_activeStyleVariant}`} tag="div" /> : null}</_Builtin.Link></_Component> : null;
}