"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { LikeArticle } from "./LikeArticle";

const _interactionsData = JSON.parse(
    '{"events":{"e-11407":{"id":"e-11407","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3237","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-11408"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".image-animated-3","originalId":"e0ddf636-bf22-0eee-3530-ae2dda257d41","appliesTo":"CLASS"},"targets":[{"selector":".image-animated-3","originalId":"e0ddf636-bf22-0eee-3530-ae2dda257d41","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1763321911152},"e-11409":{"id":"e-11409","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3237","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-11410"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".image-animated-3","originalId":"68cf6673ed956e971b18d0ab|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"},"targets":[{"selector":".image-animated-3","originalId":"68cf6673ed956e971b18d0ab|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1763325802830}},"actionLists":{"a-3237":{"id":"a-3237","title":"Scroll Into View - Fade-In 5","actionItemGroups":[{"actionItems":[{"id":"a-3237-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":2000,"target":{"useEventTarget":true,"id":"d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-3237-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":2000,"target":{"useEventTarget":true,"id":"d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1755952745478}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function BlogPreviewCard(
    {
        as: _Component = _Builtin.Block
    }
) {
    _interactions.useInteractions(_interactionsData);

    return (
        <_Component className="blog-preview-card" tag="div"><_Builtin.Block className="card-9 shadow-blue width_400px" tag="div"><_Builtin.Block className="card-body-2" tag="div"><_Builtin.Block className="card-content_wrapper text-color-primary-11" tag="div"><_Builtin.Block className="card_meta-2" tag="div"><_Builtin.Block
                                className="blog_category-5"
                                tag="div"
                                dyn={{
                                    bind: {}
                                }}>{"Category"}</_Builtin.Block><_Builtin.Paragraph className="meta-date_text-2">{"Month YYYY"}</_Builtin.Paragraph></_Builtin.Block><_Builtin.Heading
                            className="headline-sm-10 font-weight-semibold-3 padding-top_xs-3"
                            tag="h3">{"Headline"}</_Builtin.Heading><_Builtin.Block className="card_item-wrapper margin-top-auto-2 w-clearfix" tag="div"><_Builtin.Link
                                className="button-link_underline-5"
                                button={false}
                                dyn={{
                                    bind: {}
                                }}
                                block="inline"
                                options={{
                                    href: "#",
                                    target: "_blank",
                                    preload: "none"
                                }}><_Builtin.Paragraph className="cta-link">{"READ NOW"}</_Builtin.Paragraph><_Builtin.Block className="link-line-5" tag="div" /></_Builtin.Link><_Builtin.DOM
                                className="preview-card_trigger"
                                tag="a"
                                slot=""
                                _class="js-preview-btn tooltip-content w-inline-block"
                                data-blog-slug=""
                                aria-haspopup="dialog"
                                aria-label=""
                                 data-image-slug=""
                                data-blog-headline=""
                                data-blog-summary=""
                                data-image=""
                                data-publish-date=""
                                data-category=""
                                data-btn="tooltip-content"
                                data-root-blog_url="/blogs/"
                                data-root-image_url="https://res.cloudinary.com/revrebel/image/upload/t_Wide16X9/" /><_Builtin.Block className="like-button-5 margin_left-auto is-clear" tag="div"><_Builtin.Block className="views-wrapper-3" tag="div"><_Builtin.Block className="views-4" tag="div">{"VIEWS"}<br /></_Builtin.Block><_Builtin.Block className="views-count-4" tag="div" href="#" data-post-views="{{SLUG}}">{"+0"}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="likes-wrapper-3" tag="div"><_Builtin.Image
                                        className="like-icon-4"
                                        width="16"
                                        height="auto"
                                        loading="lazy"
                                        alt="Heart Icon"
                                        src="https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68ce36fc04efd02eeb070d94_f9c59b10bc61ec9a35e0bc0c355023b3_likes.svg" /><_Builtin.Block className="likes-count-4" tag="div" href="#" data-post-likes="{{SLUG}}">{"0"}</_Builtin.Block></_Builtin.Block></_Builtin.Block><LikeArticle /></_Builtin.Block></_Builtin.Block><_Builtin.Block className="image-cover-2 radius-top_none ratio_3x2-2" tag="div"><_Builtin.Image
                            className="image-animated-3 radius-top_none"
                            width="auto"
                            height="auto"
                            loading="lazy"
                            alt="Image Placeholder Icon"
                            src="https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68cfe601303bcf4493dde901_3a1a978f922b37418ac763aad8ccb26f_Placeholder%20Image.png" /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Component>
    );
}