"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-13267":{"id":"e-13267","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4754","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13268"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a2a0dde-b6f4-a2a1-2745-430d44f31713","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a2a0dde-b6f4-a2a1-2745-430d44f31713","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1756310243805,"origin":["6946540cc72b976861f8c836","e-322"]},"e-13268":{"id":"e-13268","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4755","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13267"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a2a0dde-b6f4-a2a1-2745-430d44f31713","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a2a0dde-b6f4-a2a1-2745-430d44f31713","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1756310243807,"origin":["6946540cc72b976861f8c836","e-323"]}},"actionLists":{"a-4754":{"id":"a-4754","origin":["6946540cc72b976861f8c836","a-99"],"title":"OnClick Social Likes Dark Red 24","actionItemGroups":[{"actionItems":[{"id":"a-4754-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--like-post","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd693"]},"globalSwatchId":"@var_variable-6f3cb532-cae1-f518-5888-757c8fe30823","rValue":203,"bValue":71,"gValue":71,"aValue":1}},{"id":"a-4754-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--like-icon.rebel-style--no-filter","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd698","9f4372d4-dcdd-e08e-46e2-0c42204bd6b1"]},"globalSwatchId":"@var_variable-6f3cb532-cae1-f518-5888-757c8fe30823","rValue":203,"bValue":71,"gValue":71,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1756308151225},"a-4755":{"id":"a-4755","origin":["6946540cc72b976861f8c836","a-98"],"title":"Hover Off Social Likes Blue 123","actionItemGroups":[{"actionItems":[{"id":"a-4755-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--like-icon.rebel-style--no-filter","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd698","9f4372d4-dcdd-e08e-46e2-0c42204bd6b1"]},"globalSwatchId":"@var_variable-2bb1ebee-e63b-0624-0a6e-46ad3ae5858d","rValue":22,"bValue":102,"gValue":54,"aValue":1}},{"id":"a-4755-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"easeOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--like-post","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd693"]},"globalSwatchId":"@var_variable-2bb1ebee-e63b-0624-0a6e-46ad3ae5858d","rValue":22,"bValue":102,"gValue":54,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1756308151225}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ComponentSizeLikes(
    {
        as: _Component = _Builtin.Block,
        likeButtonIsActive = true,
        likeButtonPositionVariant = "1.5x",
        likeButtonLabelText = "Like",
        labelRuntimeProps = {},
        labelLabelVisibility = true
    }
) {
    _interactions.useInteractions(_interactionsData);

    const _styleVariantMap = {
        "1": "w-variant-75a374b2-6323-6325-5cde-b7ffbc59a161",
        "1.5x": "",
        "2x": "w-variant-1b3ee076-0ead-42db-3ec0-45403bde732e",
        "2.5x": "w-variant-c50db3f7-0636-3214-6c27-451929dd90c5",
        "3x": "w-variant-922fd4d5-fc1e-1b97-b5f6-4ed67c59c01c"
    };

    const _activeStyleVariant = _styleVariantMap[likeButtonPositionVariant];

    return (
        <_Component
            className={`rebel-style--component_flex ${_activeStyleVariant}`}
            tag="div"><_Builtin.Block
                className={`rebel-style--component_position ${_activeStyleVariant}`}
                tag="div"><_Builtin.Block
                    className={`rebel-style--likes_component-size rebel-style--no-hxw-adjustment ${_activeStyleVariant}`}
                    id="w-node-_0771b419-1b47-23d0-782b-df902b6e530d-2b6e530b"
                    tag="div">{labelLabelVisibility ? <_Builtin.Block
                        className={`rebel-style--like-post ${_activeStyleVariant}`}
                        tag="div"
                        data-like-btn="like-post"
                        {...labelRuntimeProps}>{likeButtonLabelText}</_Builtin.Block> : null}</_Builtin.Block><_Builtin.Block
                    className={`rebel-style--likes_component-size ${_activeStyleVariant}`}
                    tag="div"
                    {...labelRuntimeProps}><_Builtin.HtmlEmbed
                        className={`rebel-style--like-icon ${_activeStyleVariant}`}
                        value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20id%3D%22like-button%22%20data-name%3D%22like-button%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22currentColor%22%20width%3D%22400%22%20height%3D%22400%22%20viewBox%3D%220%200%20400%20400%22%3E%0A%20%20%3Cpath%20d%3D%22M68.845%2C124.569c-9.123%2C39.832%2C11.255%2C82.13%2C37.273%2C114.612%2C18.503%2C24.035%2C36.461%2C47.596%2C55.554%2C71.005%2C6.281%2C7.164%2C13.812%2C12.608%2C22.909%2C14.731%2C10.794%2C2.483%2C21.633%2C1.19%2C33.556%2C1.496%2C22.507-.045%2C49.746.059%2C70.664-.008%2C7.108-.03%2C14.053.029%2C21.003-1.505%2C21.845-3.995%2C23.309-23.607%2C23.417-42.255.132-29.902.327-59.685-.194-89.641.199-31.722-15.015-48.609-31.421-73.606-9.126-13.071-17.542-27.675-31.358-36.267-17.31-10.482-39.982-10.946-58.288-2.886-8.502%2C3.327-16.922%2C11.254-25.052%2C13.238-13.077%2C2.752-22.807-11.479-34.689-15.197-35.923-15.336-76.535%2C7.996-83.334%2C46.093l-.041.19ZM135.086%2C95.41c9.313.939%2C17.914%2C5.151%2C24.757%2C11.691%2C10.453%2C9.906%2C19.782%2C27.726%2C34.847%2C12.668%2C5.036-4.977%2C9.372-10.887%2C15.021-15.258%2C7.226-5.767%2C15.731-9.139%2C24.426-9.557%2C25.335-.737%2C41.537%2C17.279%2C42.66%2C42.08%2C4.265%2C57.653-39.153%2C94.581-81.248%2C126.768-12.445%2C8.841-23.259%2C1.971-33.93-6.154-40.823-29.565-67.097-61.925-73.105-113.459-.31-6.147.306-12.148%2C1.827-17.555%2C5.561-21.274%2C23.786-33.713%2C44.548-31.243l.197.021Z%22%2F%3E%0A%3C%2Fsvg%3E"
                        {...labelRuntimeProps} />{likeButtonIsActive ? <_Builtin.HtmlEmbed
                        className={`rebel-style--like-icon rebel-style--is-active ${_activeStyleVariant}`}
                        value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20id%3D%22like-button%22%20data-name%3D%22like-button%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22currentColor%22%20width%3D%22400%22%20height%3D%22400%22%20viewBox%3D%220%200%20400%20400%22%3E%0A%20%20%3Cpath%20d%3D%22M68.845%2C124.569c-9.123%2C39.832%2C11.255%2C82.13%2C37.273%2C114.612%2C18.503%2C24.035%2C36.461%2C47.596%2C55.554%2C71.005%2C6.281%2C7.164%2C13.812%2C12.608%2C22.909%2C14.731%2C10.794%2C2.483%2C21.633%2C1.19%2C33.556%2C1.496%2C22.507-.045%2C49.746.059%2C70.664-.008%2C7.108-.03%2C14.053.029%2C21.003-1.505%2C21.845-3.995%2C23.309-23.607%2C23.417-42.255.132-29.902.327-59.685-.194-89.641.199-31.722-15.015-48.609-31.421-73.606-9.126-13.071-17.542-27.675-31.358-36.267-17.31-10.482-39.982-10.946-58.288-2.886-8.502%2C3.327-16.922%2C11.254-25.052%2C13.238-13.077%2C2.752-22.807-11.479-34.689-15.197-35.923-15.336-76.535%2C7.996-83.334%2C46.093l-.041.19ZM135.086%2C95.41c9.313.939%2C17.914%2C5.151%2C24.757%2C11.691%2C10.453%2C9.906%2C19.782%2C27.726%2C34.847%2C12.668%2C5.036-4.977%2C9.372-10.887%2C15.021-15.258%2C7.226-5.767%2C15.731-9.139%2C24.426-9.557%2C25.335-.737%2C41.537%2C17.279%2C42.66%2C42.08%2C4.265%2C57.653-39.153%2C94.581-81.248%2C126.768-12.445%2C8.841-23.259%2C1.971-33.93-6.154-40.823-29.565-67.097-61.925-73.105-113.459-.31-6.147.306-12.148%2C1.827-17.555%2C5.561-21.274%2C23.786-33.713%2C44.548-31.243l.197.021Z%22%2F%3E%0A%3C%2Fsvg%3E"
                        {...labelRuntimeProps} /> : null}{likeButtonIsActive ? <_Builtin.HtmlEmbed
                        className={`rebel-style--like-inner-icon rebel-style--is-active ${_activeStyleVariant}`}
                        value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20id%3D%22like-clicked%22%20data-name%3D%22like-clicked%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22currentColor%22%20width%3D%22400%22%20height%3D%22400%22%20viewBox%3D%220%200%20400%20400%22%3E%0A%20%20%3Cpath%20d%3D%22M132.406%2C92.202c9.313.939%2C17.914%2C5.151%2C24.757%2C11.691%2C10.453%2C9.906%2C19.782%2C27.726%2C34.847%2C12.668%2C5.036-4.977%2C9.372-10.887%2C15.021-15.258%2C7.226-5.767%2C15.731-9.139%2C24.426-9.557%2C25.335-.737%2C41.537%2C17.279%2C42.66%2C42.08%2C4.265%2C57.653-39.153%2C94.581-81.248%2C126.768-12.445%2C8.841-23.259%2C1.971-33.93-6.154-40.823-29.565-67.097-61.925-73.105-113.459-.31-6.147.306-12.148%2C1.827-17.555%2C5.561-21.274%2C23.786-33.713%2C44.548-31.243l.197.021Z%22%2F%3E%0A%3C%2Fsvg%3E"
                        {...labelRuntimeProps} /> : null}</_Builtin.Block></_Builtin.Block></_Component>
    );
}