"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { SocialsElement } from "./SocialsElement";

const _interactionsData = JSON.parse(
    '{"events":{"e-202":{"id":"e-202","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-197"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-204":{"id":"e-204","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-199"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114}},"actionLists":{"a-16":{"id":"a-16","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-16-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AuthorSection(
    {
        as: _Component = _Builtin.Block,
        authorMetaAuthorImage = "",
        authorMetaAuthorImageAltText = "__wf_reserved_inherit",
        authorMetaAuthorName = "FirstName LastName",
        authorMetaAuthorNameTag = "h1",
        authorMetaAuthorLocationText = "City, State",
        authorMetaAuthorHeadlineText = "Hospitality Rebel with an affinity for innovative building strategies.",
        authorMetaAuthorHeadlineTextTag = "h2",
        authorMetaAuthorBioSummary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        socialsVisibility,

        instagramInstagramLink = {
            href: "https://www.instagram.com/hello_revrebel",
            target: "_blank"
        },

        instagramInstagramVisibility = true,

        linkedinLinkedInLink = {
            href: "https://www.instagram.com/hello_revrebel",
            target: "_blank",
            preload: "none"
        },

        linkedinLinkedInVisibility = true,

        xXLink = {
            href: "https://www.instagram.com/hello_revrebel",
            target: "_blank"
        },

        xXVisibility = true,

        facebookFacebookLink = {
            href: "https://www.instagram.com/hello_revrebel",
            target: "_blank"
        },

        facebookFacebookVisibility = true,
        authorMetaEmailVisibility = true,
        authorMetaEmailAddressText = "name@domain.com",

        authorMetaEmailAddress = {
            href: "mailto:email@name.com"
        },

        authorMetaWebsiteVisibility = true,
        authorMetaWebsiteText = "website.com",

        authorMetaWebsite = {
            href: "#"
        },

        instagramIconSize = null,
        linkedinIconSize = null,
        facebookIconSize = null,
        xIconSize = null
    }
) {
    _interactions.useInteractions(_interactionsData);

    return (
        <_Component className="author_section text-color-brand-primany-3" tag="div"><_Builtin.BlockContainer
                className="container-2"
                grid={{
                    type: "container"
                }}
                tag="div"><_Builtin.Block className="author_detail" tag="div"><_Builtin.Block className="author_detail-wrapper" tag="div"><_Builtin.Block className="author_main-image-wrapper" tag="div"><_Builtin.Image
                                className="author_main-image"
                                width="Auto"
                                height="auto"
                                loading="lazy"
                                src={authorMetaAuthorImage} /></_Builtin.Block><_Builtin.Block className="author_bio-wrapper" tag="div"><_Builtin.Block className="author_meta-wrapper" tag="div"><_Builtin.Block className="div-block-618" tag="div"><_Builtin.Heading
                                        className="headline-small margin_bottom-none font-weight-bold"
                                        tag={authorMetaAuthorNameTag}>{authorMetaAuthorName}</_Builtin.Heading><_Builtin.Heading
                                        className="sub-headline-small margin-bottom_none"
                                        tag={authorMetaAuthorHeadlineTextTag}>{authorMetaAuthorHeadlineText}</_Builtin.Heading><_Builtin.Block className="label" tag="div">{authorMetaAuthorLocationText}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="space-xsmall-2" tag="div" /><_Builtin.Paragraph className="paragraph-2">{authorMetaAuthorBioSummary}</_Builtin.Paragraph><_Builtin.Block className="author_contact-block" tag="div">{authorMetaEmailVisibility ? <_Builtin.Link button={false} block="inline" options={authorMetaEmailAddress}><_Builtin.Block tag="div">{authorMetaEmailAddressText}</_Builtin.Block></_Builtin.Link> : null}{authorMetaWebsiteVisibility ? <_Builtin.Link button={false} block="inline" options={authorMetaWebsite}><_Builtin.Block tag="div" editable={true}>{authorMetaWebsiteText}</_Builtin.Block></_Builtin.Link> : null}</_Builtin.Block></_Builtin.Block>{socialsVisibility ? <_Builtin.Block
                                className="author_socials"
                                id="w-node-_97008b46-1fc3-cd89-1e38-ad7326dedbfa-26dedbe8"
                                tag="div"><_Builtin.Grid
                                    className="flex_vertical-2 gap-xxsmall"
                                    id="w-node-_97008b46-1fc3-cd89-1e38-ad7326dedbfb-26dedbe8"
                                    tag="div"><SocialsElement
                                        socialButtonLinksSocialButtonLinkLink={instagramInstagramLink}
                                        iconSize={instagramIconSize}
                                        socialButtonIconSettingsSocialButtonVisibility={instagramInstagramVisibility}
                                        socialPlatform="Instagram" /><SocialsElement
                                        socialButtonLinksSocialButtonLinkLink={linkedinLinkedInLink}
                                        iconSize={linkedinIconSize}
                                        socialButtonIconSettingsSocialButtonVisibility={linkedinLinkedInVisibility}
                                        socialPlatform="Linkedin" /><SocialsElement
                                        socialButtonLinksSocialButtonLinkLink={facebookFacebookLink}
                                        iconSize={facebookIconSize}
                                        socialButtonIconSettingsSocialButtonVisibility={facebookFacebookVisibility}
                                        socialPlatform="Facebook" /><SocialsElement
                                        socialButtonLinksSocialButtonLinkLink={xXLink}
                                        iconSize={xIconSize}
                                        socialButtonIconSettingsSocialButtonVisibility={xXVisibility}
                                        socialPlatform="X" /></_Builtin.Grid></_Builtin.Block> : null}</_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.BlockContainer></_Component>
    );
}ity={facebookFacebookVisibility}
                                        socialPlatform="Facebook" /><SocialsElement
                                        socialButtonLinksSocialButtonLinkLink={xXLink}
                                        iconSize={xIconSize}
                                        socialButtonIconSettingsSocialButtonVisibility={xXVisibility}
                                        socialPlatform="X" /></_Builtin.Grid></_Builtin.Block> : null}</_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.BlockContainer></_Component>
    );
}