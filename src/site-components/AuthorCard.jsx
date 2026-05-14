"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { LetsWorkTogetherButton } from "./LetsWorkTogetherButton";

const _interactionsData = JSON.parse(
    '{"events":{"e-6703":{"id":"e-6703","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-6668"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-6705":{"id":"e-6705","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6670"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114}},"actionLists":{"a-16":{"id":"a-16","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-16-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AuthorCard(
    {
        as: _Component = _Builtin.Block,
        settingsAuthorCardVisibility = true,
        authorAuthorPicture = "",
        authorAuthorParagraphText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,.",
        authorAuthorName = "FirstName, LastName",
        authorAuthorLocation = "City, State",

        authorAuthorPageLink = {
            href: "#"
        },

        readMoreButtonButtonVisibility = true,
        readMoreButtonButtonId,
        readMoreButtonButtonText = "View All Articles",

        readMoreButtonLink = {
            href: "#"
        },

        readMoreButtonIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68fe0ac10c449af143f898f0_dffbd9532c91c5f9296aaeb82c2f9f6e_asterisk.svg",
        readMoreButtonIconAltText = "__wf_reserved_inherit",
        readMoreButtonSize = null,
        readMoreButtonUnderlineVisibility = true
    }
) {
    _interactions.useInteractions(_interactionsData);

    return settingsAuthorCardVisibility ? <_Component tag="div"><_Builtin.Block
            className="blog-detail-author padding-sm"
            id="w-node-_054d83be-dcd3-e695-ebcb-9468c4e1e12b-c4e1e12a"
            tag="div"><_Builtin.Block
                className="flex_horizontal"
                id="w-node-_054d83be-dcd3-e695-ebcb-9468c4e1e12c-c4e1e12a"
                tag="div"><_Builtin.Block className="author_image-wrapper" tag="div"><_Builtin.Link
                        className="link-block-3"
                        button={false}
                        block="inline"
                        options={authorAuthorPageLink}><_Builtin.Image
                            className="author_image"
                            width="175"
                            height="Auto"
                            loading="lazy"
                            src={authorAuthorPicture} /></_Builtin.Link></_Builtin.Block><_Builtin.Block className="blog-author-detail" tag="div"><_Builtin.Block className="author_name" tag="div"><_Builtin.Heading
                            className="headline-xs-2 margin-bottom_none-3 font-weight-bold-11"
                            tag="h1">{authorAuthorName}</_Builtin.Heading></_Builtin.Block><_Builtin.Block className="author_location margin-bottom_xs-4" tag="div">{authorAuthorLocation}</_Builtin.Block><_Builtin.Heading className="headline-tiny margin-bottom_none" tag="h2">{"About the author"}</_Builtin.Heading><_Builtin.Paragraph className="paragraph">{authorAuthorParagraphText}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block><_Builtin.Block
                className="item-wrapper"
                id="w-node-_054d83be-dcd3-e695-ebcb-9468c4e1e137-c4e1e12a"
                tag="div"><LetsWorkTogetherButton
                    buttonButtonCtaText={readMoreButtonButtonText}
                    optionsSize={readMoreButtonSize}
                    iconIcon={readMoreButtonIcon}
                    iconIconAltText={readMoreButtonIconAltText}
                    optionsUnderlineVisibility={readMoreButtonUnderlineVisibility}
                    settingsButtonId={readMoreButtonButtonId}
                    settingsButtonVisibility={readMoreButtonButtonVisibility}
                    buttonButtonLink={readMoreButtonLink} /></_Builtin.Block></_Builtin.Block></_Component> : null;
}