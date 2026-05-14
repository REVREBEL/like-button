"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SocialShareSidebar(
    {
        as: _Component = _Builtin.Block,
        socialShareTopLabelText = "Share On",
        socialShareBottomLabelText = "subscribe",
        socialShareHashtags
    }
) {
    return (
        <_Component
            className="social-share_component"
            tag="aside"
            data-share-root=""
            data-share-hashtags={socialShareHashtags}><_Builtin.Block
                className="social-share"
                id="w-node-_28176cc2-90e0-693c-dd1d-25b6fb0d29d5-fb0d29d4"
                tag="div"><_Builtin.Grid className="social-share_grid" tag="div"><_Builtin.Block
                        className="label-sm-2 text-align_center"
                        id="w-node-_28176cc2-90e0-693c-dd1d-25b6fb0d29d7-fb0d29d4"
                        tag="div">{socialShareTopLabelText}</_Builtin.Block><_Builtin.Block
                        className="social-share_icon-size"
                        id="w-node-_28176cc2-90e0-693c-dd1d-25b6fb0d29d8-fb0d29d4"
                        tag="div"><_Builtin.Block
                            className="btn-share icon-solid_email filter_email"
                            tag="div"
                            data-share="email"
                            data-utm="utm_source=email&utm_medium=share&utm_campaign=post" /></_Builtin.Block><_Builtin.Block className="social-share_icon-size" tag="div"><_Builtin.Block
                            className="btn-share icon-solid_linkedin filter_linkedin-2"
                            tag="div"
                            data-share="linkedin"
                            data-utm="utm_source=linkedin&utm_medium=share&utm_campaign=post" /></_Builtin.Block><_Builtin.Block
                        className="social-share_icon-size"
                        id="w-node-_28176cc2-90e0-693c-dd1d-25b6fb0d29dc-fb0d29d4"
                        tag="div"><_Builtin.Block
                            className="btn-share icon-solid_x filter_x-2"
                            tag="div"
                            data-share="x"
                            data-utm="utm_source=x&utm_medium=share&utm_campaign=post" /></_Builtin.Block><_Builtin.Block className="social-share_icon-size" tag="div"><_Builtin.Block
                            className="btn-share icon-solid_telegram filter-telegram-2"
                            tag="div"
                            data-share="telegram"
                            data-utm="utm_source=telegram&utm_medium=share&utm_campaign=post" /></_Builtin.Block><_Builtin.Block className="social-share_icon-size" tag="div"><_Builtin.Block
                            className="btn-share icon-solid_facebook filter_facebook"
                            tag="div"
                            data-share="facebook"
                            data-utm="utm_source=facebook&utm_medium=share&utm_campaign=post" /></_Builtin.Block><_Builtin.Block className="social-share_icon-size" tag="div"><_Builtin.Block
                            className="btn-share icon-solid_blog-rss filter_blog-rss-2"
                            tag="div"
                            data-share="blog-ress"
                            data-utm="utm_source=blogrss&utm_medium=share&utm_campaign=post" /></_Builtin.Block><_Builtin.Block
                        className="label-sm-2 text-align_center"
                        id="w-node-_28176cc2-90e0-693c-dd1d-25b6fb0d29e4-fb0d29d4"
                        tag="div">{socialShareBottomLabelText}</_Builtin.Block></_Builtin.Grid></_Builtin.Block></_Component>
    );
}