"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CardLikesPosts(
    {
        as: _Component = _Builtin.Block,
        viewsAndLikesId,
        viewsAndLikesViewsAndLikesVisibility = true,
        viewsAndLikesViewsVisibility = true,
        viewsAndLikesLikesVisibility = true,
        likesLikeCount = "0",
        likesLikesCountRuntimeProps = {},
        likesLikeCountSlot,
        viewsViewsLabelText = "Views",
        viewsViewsCount = "0",
        viewsViewsCountRuntimeProps = {},
        viewsViewsCountSlot,
        viewsAndLikesColorVariant = "Color"
    }
) {
    const _styleVariantMap = {
        "Color": "",
        "Blue": "w-variant-02fdb460-febf-11ea-1bea-63d4335d329a",
        "White/Red": "w-variant-02fdb460-febf-11ea-1bea-63d4335d329b",
        "Color Small": "w-variant-02fdb460-febf-11ea-1bea-63d4335d329c",
        "Blue Small": "w-variant-02fdb460-febf-11ea-1bea-63d4335d329d",
        "White/Red Small": "w-variant-02fdb460-febf-11ea-1bea-63d4335d329e"
    };

    const _activeStyleVariant = _styleVariantMap[viewsAndLikesColorVariant];

    return viewsAndLikesViewsAndLikesVisibility ? <_Component
        className={`like-button-5 is-no-state-change ${_activeStyleVariant}`}
        tag="div"
        id={viewsAndLikesId}><_Builtin.Block className={`div-block-680 ${_activeStyleVariant}`} tag="div">{viewsAndLikesViewsVisibility ? <_Builtin.Block
                className={`views-wrapper-3 ${_activeStyleVariant}`}
                tag="div"
                {...viewsViewsCountRuntimeProps}>{viewsViewsCountSlot ?? <><_Builtin.Block className={`views-4 ${_activeStyleVariant}`} tag="div">{viewsViewsLabelText}</_Builtin.Block><_Builtin.Block
                        className={`views-count_wrapper ${_activeStyleVariant}`}
                        tag="div"
                        {...viewsViewsCountRuntimeProps}>{viewsViewsCountSlot ?? <><_Builtin.Block className={`views-count-4 ${_activeStyleVariant}`} tag="div">{"+"}</_Builtin.Block><_Builtin.Block
                                className={`views-count-4 ${_activeStyleVariant}`}
                                tag="div"
                                {...viewsViewsCountRuntimeProps}>{viewsViewsCountSlot ?? viewsViewsCount}</_Builtin.Block></>}</_Builtin.Block></>}</_Builtin.Block> : null}{viewsAndLikesLikesVisibility ? <_Builtin.Block
                className={`likes-wrapper-3 ${_activeStyleVariant}`}
                tag="div"
                {...likesLikesCountRuntimeProps}>{likesLikeCountSlot ?? <><_Builtin.Block className={`icon-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.HtmlEmbed
                            className={`like-icon-4 is-no-state-change ${_activeStyleVariant}`}
                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20id%3D%22like-button%22%20data-name%3D%22like-button%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22currentColor%22%20width%3D%22400%22%20height%3D%22400%22%20viewBox%3D%220%200%20400%20400%22%3E%0A%20%20%3Cpath%20d%3D%22M68.845%2C124.569c-9.123%2C39.832%2C11.255%2C82.13%2C37.273%2C114.612%2C18.503%2C24.035%2C36.461%2C47.596%2C55.554%2C71.005%2C6.281%2C7.164%2C13.812%2C12.608%2C22.909%2C14.731%2C10.794%2C2.483%2C21.633%2C1.19%2C33.556%2C1.496%2C22.507-.045%2C49.746.059%2C70.664-.008%2C7.108-.03%2C14.053.029%2C21.003-1.505%2C21.845-3.995%2C23.309-23.607%2C23.417-42.255.132-29.902.327-59.685-.194-89.641.199-31.722-15.015-48.609-31.421-73.606-9.126-13.071-17.542-27.675-31.358-36.267-17.31-10.482-39.982-10.946-58.288-2.886-8.502%2C3.327-16.922%2C11.254-25.052%2C13.238-13.077%2C2.752-22.807-11.479-34.689-15.197-35.923-15.336-76.535%2C7.996-83.334%2C46.093l-.041.19ZM135.086%2C95.41c9.313.939%2C17.914%2C5.151%2C24.757%2C11.691%2C10.453%2C9.906%2C19.782%2C27.726%2C34.847%2C12.668%2C5.036-4.977%2C9.372-10.887%2C15.021-15.258%2C7.226-5.767%2C15.731-9.139%2C24.426-9.557%2C25.335-.737%2C41.537%2C17.279%2C42.66%2C42.08%2C4.265%2C57.653-39.153%2C94.581-81.248%2C126.768-12.445%2C8.841-23.259%2C1.971-33.93-6.154-40.823-29.565-67.097-61.925-73.105-113.459-.31-6.147.306-12.148%2C1.827-17.555%2C5.561-21.274%2C23.786-33.713%2C44.548-31.243l.197.021Z%22%2F%3E%0A%3C%2Fsvg%3E" /></_Builtin.Block><_Builtin.Block
                        className={`likes-count-4 ${_activeStyleVariant}`}
                        tag="div"
                        data-like-btn="like-post"
                        {...likesLikesCountRuntimeProps}>{likesLikeCountSlot ?? likesLikeCount}</_Builtin.Block></>}</_Builtin.Block> : null}</_Builtin.Block></_Component> : null;
}