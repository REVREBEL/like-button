"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { AuthorCard } from "./AuthorCard";

const _interactionsData = JSON.parse(
    '{"events":{"e-13267":{"id":"e-13267","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4754","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13268"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a2a0dde-b6f4-a2a1-2745-430d44f31713","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a2a0dde-b6f4-a2a1-2745-430d44f31713","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1756310243805,"origin":["6946540cc72b976861f8c836","e-322"]},"e-13268":{"id":"e-13268","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4755","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13267"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a2a0dde-b6f4-a2a1-2745-430d44f31713","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a2a0dde-b6f4-a2a1-2745-430d44f31713","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1756310243807,"origin":["6946540cc72b976861f8c836","e-323"]},"e-13394":{"id":"e-13394","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4756","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13395"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758820901395,"origin":["6946540cc72b976861f8c836","e-664"]}},"actionLists":{"a-4754":{"id":"a-4754","origin":["6946540cc72b976861f8c836","a-99"],"title":"OnClick Social Likes Dark Red 24","actionItemGroups":[{"actionItems":[{"id":"a-4754-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--like-post","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd693"]},"globalSwatchId":"@var_variable-6f3cb532-cae1-f518-5888-757c8fe30823","rValue":203,"bValue":71,"gValue":71,"aValue":1}},{"id":"a-4754-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--like-icon.rebel-style--no-filter","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd698","9f4372d4-dcdd-e08e-46e2-0c42204bd6b1"]},"globalSwatchId":"@var_variable-6f3cb532-cae1-f518-5888-757c8fe30823","rValue":203,"bValue":71,"gValue":71,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1756308151225},"a-4755":{"id":"a-4755","origin":["6946540cc72b976861f8c836","a-98"],"title":"Hover Off Social Likes Blue 123","actionItemGroups":[{"actionItems":[{"id":"a-4755-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--like-icon.rebel-style--no-filter","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd698","9f4372d4-dcdd-e08e-46e2-0c42204bd6b1"]},"globalSwatchId":"@var_variable-2bb1ebee-e63b-0624-0a6e-46ad3ae5858d","rValue":22,"bValue":102,"gValue":54,"aValue":1}},{"id":"a-4755-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"easeOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--like-post","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd693"]},"globalSwatchId":"@var_variable-2bb1ebee-e63b-0624-0a6e-46ad3ae5858d","rValue":22,"bValue":102,"gValue":54,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1756308151225},"a-4756":{"id":"a-4756","origin":["6946540cc72b976861f8c836","a-165"],"title":"Preview Card [HIDE] 28","actionItemGroups":[{"actionItems":[{"id":"a-4756-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rebel-style--component_wrapper","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd69a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758820974099}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function BlogArticleSection(
    {
        as: _Component = _Builtin.Section,
        settingsBlogArticleSectionId = "article-body",
        settingsSummaryBlockVisibility = true,
        metaPublishDate = "Month YYYY",
        metaSlug,
        summarySectionSummaryBlockId,
        summarySectionSummaryHeadlineVisibility = true,
        summarySectionSummaryHeadlineTag = "h1",
        summarySectionSummaryParagraphVisibility = true,
        summarySectionSummaryParagraphText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        summarySectionMainHeadlineText = "Heading",
        mainSectionRichText = "",
        authorCardAuthorCardVisibility = true,
        authorCardExpertContributorPicture = "",
        authorCardAuthorNameText = "FirstName LastName",
        authorCardAuthorLocationText = "City, State",
        authorCardAuthorSummaryText = "adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",

        authorCardExpertContributorLink = {
            href: "#"
        },

        readMoreButtonButtonVisibility = true,
        readMoreButtonButtonId,
        readMoreButtonButtonCtaText = "View All Articles",

        readMoreButtonLink = {
            href: "#"
        },

        readMoreButtonIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68ce36fc04efd02eeb070d95_dffbd9532c91c5f9296aaeb82c2f9f6e_asterisk.svg",
        readMoreButtonIconAltText = "__wf_reserved_inherit",
        metaReadTimeMinutes = "XX Minute Read Time",
        summarySectionCategoryLabelText = "Category",
        mainSectionLikeThisArticleVisibility = true
    }
) {
    _interactions.useInteractions(_interactionsData);

    return settingsSummaryBlockVisibility ? <_Component
        className="rebel-style--component_wrapper"
        tag="section"
        grid={{
            type: "section"
        }}
        id={settingsBlogArticleSectionId}><_Builtin.BlockContainer
            className="rebel-style--component_container"
            grid={{
                type: "container"
            }}
            tag="div"><_Builtin.Block className="rebel-style--component_padding w-container" tag="div"><_Builtin.Block
                    className="rebel-style--data-share-start"
                    tag="div"
                    data-share-start="data-share-start" /><_Builtin.Block className="rebel-style--blogs_card-info-wrapper" tag="div"><_Builtin.Block className="rebel-style--blog-detail_info-wrapper" tag="div"><_Builtin.Block className="rebel-style--blogs_card_date-wrapper" tag="div"><_Builtin.Block className="rebel-style--blogs_date rebel-style--label_sm" tag="div">{metaPublishDate}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="rebel-style--blogs_card_read-time" tag="div"><_Builtin.Block
                                className="rebel-style--read-time rebel-style--label_sm"
                                tag="div"
                                ct-readtime-element="time">{metaReadTimeMinutes}</_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block
                    className="rebel-style--blog-single rebel-style--padding-sm rebel-style--text-color-primary"
                    tag="div"><_Builtin.Block
                        className="rebel-style--blog-detail_label-wrapper rebel-style--margin-top_md rebel-style--margin-bottom_xxs w-clearfix"
                        tag="div"><_Builtin.Block
                            className="rebel-style--blog_category rebel-style--margin-right_medium"
                            tag="div">{summarySectionCategoryLabelText}</_Builtin.Block><_Builtin.Block
                            className="rebel-style--like-button rebel-style--flex-algn_left rebel-style--margin-left-md"
                            tag="div"><_Builtin.Block className="rebel-style--views-wrapper" tag="div"><_Builtin.Block className="rebel-style--views" tag="div">{"VIEWS"}<br /></_Builtin.Block><_Builtin.Link
                                    className="rebel-style--views-count"
                                    button={false}
                                    data-post-views={metaSlug}
                                    block=""
                                    options={{
                                        href: "#"
                                    }}>{"+9"}</_Builtin.Link></_Builtin.Block><_Builtin.Block className="rebel-style--likes-wrapper" tag="div"><_Builtin.Image
                                    className="rebel-style--like-icon_red"
                                    width="25"
                                    height="Auto"
                                    loading="lazy"
                                    alt=""
                                    src="https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68ce91b95eec1340db096689_29baedeea10fa3eeea58261a3ab45f68_heart.svg" /><_Builtin.Link
                                    className="rebel-style--likes-count"
                                    button={false}
                                    data-post-likes={metaSlug}
                                    block=""
                                    options={{
                                        href: "#"
                                    }}>{"6"}</_Builtin.Link></_Builtin.Block></_Builtin.Block></_Builtin.Block>{settingsSummaryBlockVisibility ? <_Builtin.Block
                        className="rebel-style--blog-detail_top-content-block rebel-style--text-color-primary"
                        tag="header"
                        id={summarySectionSummaryBlockId}><_Builtin.Block
                            className="rebel-style--data-share-start"
                            tag="div"
                            data-share-start="data-share-start" />{summarySectionSummaryHeadlineVisibility ? <_Builtin.Heading
                            className="rebel-style--headline-regular rebel-style--font-weight-bold"
                            tag={summarySectionSummaryHeadlineTag}>{summarySectionMainHeadlineText}</_Builtin.Heading> : null}{summarySectionSummaryParagraphVisibility ? <_Builtin.Paragraph className="rebel-style--paragraph-lg">{summarySectionSummaryParagraphText}</_Builtin.Paragraph> : null}</_Builtin.Block> : null}<_Builtin.HtmlEmbed
                        value="%3Cstyle%3E%0A%2F*%20Fallback%20for%20browsers%20that%20do%20not%20support%20%22word-break%3A%20%20auto-phrase%22%20*%2F%0A%40supports%20(word-break%3A%20auto-phrase)%20%7B%0A%0A%20%20h1%2C%0A%20%20h2%2C%0A%20%20h3%2C%0A%20%20h4%2C%0A%20%20h5%2C%0A%20%20h6%2C%0A%20%20p%20%7B%0A%20%20%20%20word-break%3A%20auto-phrase%3B%0A%20%20%20%20%2F*%20Apply%20%22auto-phrase%22%20if%20supported%20*%2F%0A%20%20%7D%0A%7D%0A%0A%2F*%20Fallback%20for%20browsers%20that%20do%20not%20support%20%22word-break%3A%20%20auto-phrase%22%20*%2F%0A%40supports%20not%20(word-break%3A%20auto-phrase)%20%7B%0A%0A%20%20h1%2C%0A%20%20h2%2C%0A%20%20h3%2C%0A%20%20h4%2C%0A%20%20h5%2C%0A%20%20h6%2C%0A%20%20p%20%7B%0A%20%20%20%20word-break%3A%20normal%3B%0A%20%20%20%20%2F*%20Apply%20%22normal%22%20if%20%22auto-phrase%22%20is%20not%20supported%20*%2F%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E" /><_Builtin.Block className="rebel-style--like-wrapper w-clearfix" tag="div">{mainSectionLikeThisArticleVisibility ? <_Builtin.Block
                            className="rebel-style--like-button"
                            data-w-id="8a2a0dde-b6f4-a2a1-2745-430d44f31713"
                            tag="div"
                            data-like-btn={metaSlug}><_Builtin.HtmlEmbed
                                className="rebel-style--like-icon rebel-style--no-filter"
                                value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20id%3D%22heart%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%20400%20400%22%3E%3Cpath%20d%3D%22M47.2%2C125.4c-9.1%2C39.8%2C11.3%2C82.1%2C37.3%2C114.6%2C18.5%2C24%2C36.5%2C47.6%2C55.6%2C71%2C6.3%2C7.2%2C13.8%2C12.6%2C22.9%2C14.7%2C10.8%2C2.5%2C21.6%2C1.2%2C33.6%2C1.5%2C22.5%2C0%2C49.7%2C0%2C70.7%2C0%2C7.1%2C0%2C14.1%2C0%2C21-1.5%2C21.8-4%2C23.3-23.6%2C23.4-42.3.1-29.9.3-59.7-.2-89.6.2-31.7-15-48.6-31.4-73.6-9.1-13.1-17.5-27.7-31.4-36.3-17.3-10.5-40-10.9-58.3-2.9-8.5%2C3.3-16.9%2C11.3-25.1%2C13.2-13.1%2C2.8-22.8-11.5-34.7-15.2-35.9-15.3-76.5%2C8-83.3%2C46.1v.2ZM113.4%2C96.2c9.3.9%2C17.9%2C5.2%2C24.8%2C11.7%2C10.5%2C9.9%2C19.8%2C27.7%2C34.8%2C12.7%2C5-5%2C9.4-10.9%2C15-15.3%2C7.2-5.8%2C15.7-9.1%2C24.4-9.6%2C25.3-.7%2C41.5%2C17.3%2C42.7%2C42.1%2C4.3%2C57.7-39.2%2C94.6-81.2%2C126.8-12.4%2C8.8-23.3%2C2-33.9-6.2-40.8-29.6-67.1-61.9-73.1-113.5-.3-6.1.3-12.1%2C1.8-17.6%2C5.6-21.3%2C23.8-33.7%2C44.5-31.2h.2Z%22%2F%3E%3C%2Fsvg%3E" /><_Builtin.Block className="rebel-style--like-post" tag="div" data-like-btn={metaSlug}>{"Like this Article"}</_Builtin.Block></_Builtin.Block> : null}</_Builtin.Block><_Builtin.RichText
                        className="rebel-style--blogs_rich-text"
                        tag="main"
                        slot=""
                        ct-readtime-element="target"
                        data-blog-summary="article-body"
                        data-wordcount="reading-article">{mainSectionRichText}</_Builtin.RichText><AuthorCard
                        authorAuthorPageLink={authorCardExpertContributorLink}
                        authorAuthorPicture={authorCardExpertContributorPicture}
                        authorAuthorName={authorCardAuthorNameText}
                        authorAuthorLocation={authorCardAuthorLocationText}
                        authorAuthorParagraphText={authorCardAuthorSummaryText}
                        readMoreButtonButtonVisibility={readMoreButtonButtonVisibility}
                        readMoreButtonButtonId={readMoreButtonButtonId}
                        readMoreButtonButtonText={readMoreButtonButtonCtaText}
                        readMoreButtonLink={readMoreButtonLink}
                        readMoreButtonIcon={readMoreButtonIcon}
                        readMoreButtonIconAltText={readMoreButtonIconAltText}
                        settingsAuthorCardVisibility={authorCardAuthorCardVisibility} /><_Builtin.Block
                        className="rebel-style--data-share-end"
                        tag="div"
                        data-share-end="data-share-end" /></_Builtin.Block></_Builtin.Block></_Builtin.BlockContainer><_Builtin.BlockContainer
            className="rebel-style--container-sm"
            tag="div"
            grid={{
                type: "container"
            }}><_Builtin.Block className="rebel-style--blog_summary" tag="div" id="summary" /></_Builtin.BlockContainer><_Builtin.Block
            className="rebel-style--data-share-end"
            tag="div"
            data-share-end="data-share-end" /><_Builtin.HtmlEmbed
            value="%3Cdiv%20id%3D%22article-body-content%22%20style%3D%22display%3Anone%3B%22%3E%0A%20%20%7B%7B%20wf%20%7B%26quot%3Bpath%26quot%3B%3A%26quot%3Bpost-body%26quot%3B%2C%26quot%3Btype%26quot%3B%3A%26quot%3BRichText%26quot%3B%7D%20%7D%7D%0A%3C%2Fdiv%3E" /></_Component> : null;
}