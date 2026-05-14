"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-6950":{"id":"e-6950","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1998","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-325"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button-link_underline","originalId":"68aeb08fae835690f41e06e1|6832d1d0-de60-605b-bf34-2e8d0b7e25df","appliesTo":"CLASS"},"targets":[{"selector":".button-link_underline","originalId":"68aeb08fae835690f41e06e1|6832d1d0-de60-605b-bf34-2e8d0b7e25df","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1756303378916},"e-6951":{"id":"e-6951","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1999","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-324"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button-link_underline","originalId":"68aeb08fae835690f41e06e1|6832d1d0-de60-605b-bf34-2e8d0b7e25df","appliesTo":"CLASS"},"targets":[{"selector":".button-link_underline","originalId":"68aeb08fae835690f41e06e1|6832d1d0-de60-605b-bf34-2e8d0b7e25df","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1756303378919}},"actionLists":{"a-1998":{"id":"a-1998","title":"Hover On  Link Line Green 18","actionItemGroups":[{"actionItems":[{"id":"a-1998-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".link-line","selectorGuids":["793c2636-37fc-c318-0418-40abdc117348"]},"globalSwatchId":"@var_variable-5c34b5aa-a793-0d4f-064d-1761fedc9141","rValue":113,"bValue":197,"gValue":201,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1756303386216},"a-1999":{"id":"a-1999","title":"Hover Off Link Line Blue 18","actionItemGroups":[{"actionItems":[{"id":"a-1999-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".link-line","selectorGuids":["793c2636-37fc-c318-0418-40abdc117348"]},"globalSwatchId":"@var_variable-2bb1ebee-e63b-0624-0a6e-46ad3ae5858d","rValue":22,"bValue":102,"gValue":54,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1756303386216}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function UnderlinedLinkElement(
    {
        as: _Component = _Builtin.Block,
        settingsUnderlinedLinkVisibility = true,

        underlinedLinkLink = {
            href: "#"
        },

        underlinedLinkLinkText = "Read Article",
        underlinedLinkUnderlineVisibility = true,
        optionsColor = "Light"
    }
) {
    _interactions.useInteractions(_interactionsData);

    const _styleVariantMap = {
        "Dark": "",
        "Light": "w-variant-f061d425-f464-0dea-a472-7b148798ad06",
        "Brand Color 2": "w-variant-f061d425-f464-0dea-a472-7b148798ad07",
        "Brand Color 4": "w-variant-f061d425-f464-0dea-a472-7b148798ad08",
        "Brand Color 5": "w-variant-f061d425-f464-0dea-a472-7b148798ad09",
        "Brand Color 6": "w-variant-f061d425-f464-0dea-a472-7b148798ad0a",
        "Brand Color 7": "w-variant-f061d425-f464-0dea-a472-7b148798ad0b",
        "Brand Color 8": "w-variant-f061d425-f464-0dea-a472-7b148798ad0c"
    };

    const _activeStyleVariant = _styleVariantMap[optionsColor];

    return settingsUnderlinedLinkVisibility ? <_Component className={`button-link_underline ${_activeStyleVariant}`} tag="div"><_Builtin.Link
            className={`link-block-2 ${_activeStyleVariant}`}
            button={false}
            block="inline"
            options={underlinedLinkLink}><_Builtin.Block className={`component_label ${_activeStyleVariant}`} tag="div">{underlinedLinkLinkText}</_Builtin.Block>{underlinedLinkUnderlineVisibility ? <_Builtin.Block className={`link-line ${_activeStyleVariant}`} tag="div" /> : null}</_Builtin.Link></_Component> : null;
}