"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { CardMetaItem } from "./CardMetaItem";
import { UnderlinedLink } from "./UnderlinedLink";

const _interactionsData = JSON.parse(
    '{"events":{"e-13269":{"id":"e-13269","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-13270"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":800,"direction":null,"effectIn":true},"createdOn":1754711831046,"origin":["6946540cc72b976861f8c836","e-69"]},"e-13283":{"id":"e-13283","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4762","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13284"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--image-animated","originalId":"e0ddf636-bf22-0eee-3530-ae2dda257d41","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--image-animated","originalId":"e0ddf636-bf22-0eee-3530-ae2dda257d41","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1763321911152,"origin":["6946540cc72b976861f8c836","e-846"]},"e-13285":{"id":"e-13285","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4763","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13286"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--image-animated","originalId":"68cf6673ed956e971b18d0ab|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--image-animated","originalId":"68cf6673ed956e971b18d0ab|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1763325802830,"origin":["6946540cc72b976861f8c836","e-848"]}},"actionLists":{"a-4762":{"id":"a-4762","origin":["6946540cc72b976861f8c836","a-94"],"title":"Scroll Into View - Fade-In","actionItemGroups":[{"actionItems":[{"id":"a-4762-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":2000,"target":{"useEventTarget":true,"id":"d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4762-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":2000,"target":{"useEventTarget":true,"id":"d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1755952745478},"a-4763":{"id":"a-4763","origin":["6946540cc72b976861f8c836","a-227"],"title":"Scroll Into View - Fade-In 2","actionItemGroups":[{"actionItems":[{"id":"a-4763-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":2000,"target":{"useEventTarget":true,"id":"68cf6673ed956e971b18d0ab|d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4763-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":2000,"target":{"useEventTarget":true,"id":"68cf6673ed956e971b18d0ab|d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1755952745478},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AuthorRecentBlogs(
    {
        as: _Component = _Builtin.Section
    }
) {
    _interactions.useInteractions(_interactionsData);

    return (
        <_Component
            className="rebel-style--section-spacing-bottom"
            tag="section"
            grid={{
                type: "section"
            }}><_Builtin.BlockContainer
                className="rebel-style--color-variants"
                tag="div"
                grid={{
                    type: "container"
                }}><_Builtin.Block className="rebel-style--team-detail-section-title" tag="div"><_Builtin.Link
                        className="rebel-style--blog-item rebel-style--gap-sm"
                        button={false}
                        data-match-height="author-blog-card"
                        block="inline"
                        options={{
                            href: "#"
                        }}><_Builtin.Block className="rebel-style--image-animated" tag="div"><_Builtin.Image
                                className="rebel-style--blog-image_3x2"
                                width="auto"
                                height="auto"
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68cfe601303bcf4493dde901_3a1a978f922b37418ac763aad8ccb26f_Placeholder%20Image.png" /></_Builtin.Block><_Builtin.Block className="rebel-style--blog_info" tag="div"><CardMetaItem /><_Builtin.Block className="rebel-style--article-card_item-wrapper" tag="div"><_Builtin.Heading className="rebel-style--headline-xs" tag="h1">{"Artical Headline"}</_Builtin.Heading></_Builtin.Block><UnderlinedLink /></_Builtin.Block></_Builtin.Link></_Builtin.Block></_Builtin.BlockContainer></_Component>
    );
}