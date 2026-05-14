"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-13315":{"id":"e-13315","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4771","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13316"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"00a8c6b0-dca5-aeba-d391-da99d929b20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"00a8c6b0-dca5-aeba-d391-da99d929b20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756550819577,"origin":["6946540cc72b976861f8c836","e-426"]},"e-13313":{"id":"e-13313","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-13314"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--faq_item","originalId":"00a8c6b0-dca5-aeba-d391-da99d929b217","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--faq_item","originalId":"00a8c6b0-dca5-aeba-d391-da99d929b217","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1756547579783,"origin":["6946540cc72b976861f8c836","e-420"]},"e-13312":{"id":"e-13312","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4771","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13311"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--headline-animated-wrapper.rebel-style--for-h3","originalId":"689e55b50c8ee3ca795d259b|e6ec1aea-1a58-feab-f9bc-9210d50fa8c7","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--headline-animated-wrapper.rebel-style--for-h3","originalId":"689e55b50c8ee3ca795d259b|e6ec1aea-1a58-feab-f9bc-9210d50fa8c7","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":0,"direction":"LEFT","effectIn":true},"createdOn":1698664561561,"origin":["6946540cc72b976861f8c836","e-122"]},"e-13394":{"id":"e-13394","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4756","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13395"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758820901395,"origin":["6946540cc72b976861f8c836","e-664"]}},"actionLists":{"a-4771":{"id":"a-4771","origin":["6946540cc72b976861f8c836","a-54"],"title":"Heading Animation","actionItemGroups":[{"actionItems":[{"id":"a-4771-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--headline-animated-block","selectorGuids":["61970303-47e3-a93f-2ca9-24f5c7a96a1a"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-4771-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".rebel-style--headline-animated-block","selectorGuids":["61970303-47e3-a93f-2ca9-24f5c7a96a1a"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1698050551910},"a-4756":{"id":"a-4756","origin":["6946540cc72b976861f8c836","a-165"],"title":"Preview Card [HIDE] 28","actionItemGroups":[{"actionItems":[{"id":"a-4756-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rebel-style--component_wrapper","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd69a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758820974099},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FaqExpandingDropdownHorizontalSection(
    {
        as: _Component = _Builtin.BlockContainer,
        headlineEyebrowText = "Informed answers. Real hotel expertise.",
        headlineHeadlineTag = "h2",
        headlineHeadlineText = "Independent hotel FAQs, decoded fast",
        headlineSunHeadlineText = "Explore detailed, expert-driven answers to the most pressing questions about maximizing revenue, optimizing operations, and elevating performance for independent hotels. Our insights are tailored for owners and managers seeking clarity and results.",
        question1QuestionText = "How do you drive higher revenue?",
        question1AnswerRichText = "",
        question2QuestionText = "What sets your strategies apart?",
        question2AnswerRichText = "",
        question3QuestionText = "Do you handle short-term projects?",
        question3AnswerRichText = "",
        question4QuestionText = "Do you handle short-term projects?",
        question5QuestionText = "How is success evaluated?",
        question4AnswerRichText = "",
        question5AnswerRichText = "",
        variant = "Light"
    }
) {
    _interactions.useInteractions(_interactionsData);

    const _styleVariantMap = {
        "Light": "",
        "Dark": "w-variant-e812c72e-ab64-5f1d-0ac2-f5eb4c763d74"
    };

    const _activeStyleVariant = _styleVariantMap[variant];

    return (
        <_Component
            className={`rebel-style--component_wrapper ${_activeStyleVariant}`}
            grid={{
                type: "container"
            }}
            tag="div"><_Builtin.Block
                className={`rebel-style--component_container rebel-style--text-color_primary ${_activeStyleVariant}`}
                tag="div"><_Builtin.Block
                    className={`rebel-style--component_padding rebel-style--max-width_sm rebel-style--padding-md rebel-style--margin-inline_auto ${_activeStyleVariant}`}
                    tag="div"><_Builtin.Block
                        className={`rebel-style--headline-animated-wrapper ${_activeStyleVariant}`}
                        id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b20f-d929b20c"
                        data-w-id="00a8c6b0-dca5-aeba-d391-da99d929b20f"
                        tag="div"><_Builtin.Block
                            className={`rebel-style--headline_container rebel-style--margin-left_auto rebel-style--margin_right-auto rebel-style--max-width_xxl rebel-style--mobile-padding_xs rebel-style--headline-animated-block rebel-style--is-x-left ${_activeStyleVariant}`}
                            id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b210-d929b20c"
                            tag="div"><_Builtin.Block className={`rebel-style--eyebrow ${_activeStyleVariant}`} tag="div">{headlineEyebrowText}</_Builtin.Block><_Builtin.Heading
                                className={`rebel-style--headline-regular rebel-style--font-weight-bold ${_activeStyleVariant}`}
                                tag={headlineHeadlineTag}>{headlineHeadlineText}</_Builtin.Heading><_Builtin.Paragraph
                                className={`rebel-style--subheadline rebel-style--margin-top_xs ${_activeStyleVariant}`}>{headlineSunHeadlineText}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block><_Builtin.Block
                        className={`rebel-style--faq_table-row rebel-style--sg_border-bottom rebel-style--max-width_xxl rebel-style--is-hidden_tablet ${_activeStyleVariant}`}
                        tag="div"><_Builtin.Block
                            className={`rebel-style--faq_table-cell ${_activeStyleVariant}`}
                            tag="div"><_Builtin.Block className={`rebel-style--faq_divider ${_activeStyleVariant}`} tag="div" /><_Builtin.DropdownWrapper
                                className={`rebel-style--faq_item rebel-style--is-vertical ${_activeStyleVariant}`}
                                tag="div"
                                delay={250}
                                hover={false}><_Builtin.DropdownToggle className={`rebel-style--faq_toggle ${_activeStyleVariant}`} tag="div"><_Builtin.Block
                                        className={`rebel-style--question-wrapper ${_activeStyleVariant}`}
                                        id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b219-d929b20c"
                                        tag="div"><_Builtin.Block
                                            className={`rebel-style--headline-tiny ${_activeStyleVariant}`}
                                            id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b21a-d929b20c"
                                            tag="div">{question1QuestionText}</_Builtin.Block></_Builtin.Block><_Builtin.Icon
                                        className={`rebel-style--faq_icon rebel-style--show-on-mobile ${_activeStyleVariant}`}
                                        widget={{
                                            type: "icon",
                                            icon: "dropdown-toggle"
                                        }} /></_Builtin.DropdownToggle><_Builtin.DropdownList
                                    className={`rebel-style--faq_content w--open ${_activeStyleVariant}`}
                                    data-w-id="00a8c6b0-dca5-aeba-d391-da99d929b21c"
                                    tag="nav"
                                    id="faq-dropdown-1"><_Builtin.Block className={`rebel-style--faq_body ${_activeStyleVariant}`} tag="div"><_Builtin.RichText
                                            className={`rebel-style--rich-text ${_activeStyleVariant}`}
                                            tag="div"
                                            slot="">{question1AnswerRichText}</_Builtin.RichText></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper><_Builtin.Block className={`rebel-style--faq_divider ${_activeStyleVariant}`} tag="div" /><_Builtin.DropdownWrapper
                                className={`rebel-style--faq_item rebel-style--is-vertical ${_activeStyleVariant}`}
                                tag="div"
                                delay={250}
                                hover={false}><_Builtin.DropdownToggle className={`rebel-style--faq_toggle ${_activeStyleVariant}`} tag="div"><_Builtin.Block
                                        className={`rebel-style--question-wrapper ${_activeStyleVariant}`}
                                        id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b222-d929b20c"
                                        tag="div"><_Builtin.Block
                                            className={`rebel-style--headline-tiny ${_activeStyleVariant}`}
                                            id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b223-d929b20c"
                                            tag="div">{question2QuestionText}</_Builtin.Block></_Builtin.Block><_Builtin.Icon
                                        className={`rebel-style--faq_icon rebel-style--show-on-mobile ${_activeStyleVariant}`}
                                        widget={{
                                            type: "icon",
                                            icon: "dropdown-toggle"
                                        }} /></_Builtin.DropdownToggle><_Builtin.DropdownList
                                    className={`rebel-style--faq_content w--open ${_activeStyleVariant}`}
                                    tag="nav"
                                    id="faq-dropdown-2"><_Builtin.Block className={`rebel-style--faq_body ${_activeStyleVariant}`} tag="div"><_Builtin.RichText
                                            className={`rebel-style--rich-text ${_activeStyleVariant}`}
                                            tag="div"
                                            slot="">{question2AnswerRichText}</_Builtin.RichText></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper><_Builtin.Block className={`rebel-style--faq_divider ${_activeStyleVariant}`} tag="div" /><_Builtin.DropdownWrapper
                                className={`rebel-style--faq_item rebel-style--is-vertical ${_activeStyleVariant}`}
                                tag="div"
                                delay={250}
                                hover={false}><_Builtin.DropdownToggle
                                    className={`rebel-style--faq_toggle ${_activeStyleVariant}`}
                                    tag="div"
                                    id="faq-dropdown-3"><_Builtin.Block
                                        className={`rebel-style--question-wrapper ${_activeStyleVariant}`}
                                        id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b22b-d929b20c"
                                        tag="div"><_Builtin.Block
                                            className={`rebel-style--headline-tiny ${_activeStyleVariant}`}
                                            id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b22c-d929b20c"
                                            tag="div">{question3QuestionText}</_Builtin.Block></_Builtin.Block><_Builtin.Icon
                                        className={`rebel-style--faq_icon rebel-style--show-on-mobile ${_activeStyleVariant}`}
                                        widget={{
                                            type: "icon",
                                            icon: "dropdown-toggle"
                                        }} /></_Builtin.DropdownToggle><_Builtin.DropdownList
                                    className={`rebel-style--faq_content w--open ${_activeStyleVariant}`}
                                    tag="nav"
                                    id="faq-dropdown-3"><_Builtin.Block className={`rebel-style--faq_body ${_activeStyleVariant}`} tag="div"><_Builtin.RichText
                                            className={`rebel-style--rich-text ${_activeStyleVariant}`}
                                            tag="div"
                                            slot="">{question3AnswerRichText}</_Builtin.RichText></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper><_Builtin.Block className={`rebel-style--faq_divider ${_activeStyleVariant}`} tag="div" /><_Builtin.DropdownWrapper
                                className={`rebel-style--faq_item rebel-style--is-vertical ${_activeStyleVariant}`}
                                tag="div"
                                delay={250}
                                hover={false}><_Builtin.DropdownToggle className={`rebel-style--faq_toggle ${_activeStyleVariant}`} tag="div"><_Builtin.Block
                                        className={`rebel-style--question-wrapper ${_activeStyleVariant}`}
                                        id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b234-d929b20c"
                                        tag="div"><_Builtin.Block
                                            className={`rebel-style--headline-tiny ${_activeStyleVariant}`}
                                            id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b235-d929b20c"
                                            tag="div">{question4QuestionText}</_Builtin.Block></_Builtin.Block><_Builtin.Icon
                                        className={`rebel-style--faq_icon rebel-style--show-on-mobile ${_activeStyleVariant}`}
                                        widget={{
                                            type: "icon",
                                            icon: "dropdown-toggle"
                                        }} /></_Builtin.DropdownToggle><_Builtin.DropdownList
                                    className={`rebel-style--faq_content w--open ${_activeStyleVariant}`}
                                    tag="nav"
                                    id="faq-dropdown-4"><_Builtin.Block className={`rebel-style--faq_body ${_activeStyleVariant}`} tag="div"><_Builtin.RichText
                                            className={`rebel-style--rich-text ${_activeStyleVariant}`}
                                            tag="div"
                                            slot="">{question4AnswerRichText}</_Builtin.RichText></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper><_Builtin.Block className={`rebel-style--faq_divider ${_activeStyleVariant}`} tag="div" /><_Builtin.DropdownWrapper
                                className={`rebel-style--faq_item rebel-style--is-vertical ${_activeStyleVariant}`}
                                tag="div"
                                delay={250}
                                hover={false}><_Builtin.DropdownToggle
                                    className={`rebel-style--faq_toggle w--open ${_activeStyleVariant}`}
                                    tag="div"><_Builtin.Block
                                        className={`rebel-style--question-wrapper ${_activeStyleVariant}`}
                                        id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b23d-d929b20c"
                                        tag="div"><_Builtin.Block
                                            className={`rebel-style--headline-tiny ${_activeStyleVariant}`}
                                            id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b23e-d929b20c"
                                            tag="div">{question5QuestionText}</_Builtin.Block></_Builtin.Block><_Builtin.Icon
                                        className={`rebel-style--faq_icon rebel-style--show-on-mobile ${_activeStyleVariant}`}
                                        widget={{
                                            type: "icon",
                                            icon: "dropdown-toggle"
                                        }} /></_Builtin.DropdownToggle><_Builtin.DropdownList
                                    className={`rebel-style--faq_content w--open ${_activeStyleVariant}`}
                                    tag="nav"
                                    id="faq-dropdown-5"><_Builtin.Block className={`rebel-style--faq_body ${_activeStyleVariant}`} tag="div"><_Builtin.RichText
                                            className={`rebel-style--rich-text ${_activeStyleVariant}`}
                                            tag="div"
                                            slot="">{question5AnswerRichText}</_Builtin.RichText></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper><_Builtin.Block className={`rebel-style--faq_divider ${_activeStyleVariant}`} tag="div" /></_Builtin.Block></_Builtin.Block><_Builtin.Block
                        className={`rebel-style--faq_table-row rebel-style--sg_border-bottom rebel-style--max-width_xxl rebel-style--is-hidden_desktop ${_activeStyleVariant}`}
                        tag="div"><_Builtin.Block
                            className={`rebel-style--faq_table-cell ${_activeStyleVariant}`}
                            tag="div"><_Builtin.Block className={`rebel-style--faq_divider ${_activeStyleVariant}`} tag="div" /><_Builtin.DropdownWrapper
                                className={`rebel-style--faq_item rebel-style--is-vertical ${_activeStyleVariant}`}
                                tag="div"
                                delay={250}
                                hover={false}><_Builtin.DropdownToggle className={`rebel-style--faq_toggle ${_activeStyleVariant}`} tag="div"><_Builtin.Block
                                        className={`rebel-style--question-wrapper ${_activeStyleVariant}`}
                                        id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b249-d929b20c"
                                        tag="div"><_Builtin.Block
                                            className={`rebel-style--headline-tiny ${_activeStyleVariant}`}
                                            id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b24a-d929b20c"
                                            tag="div">{question1QuestionText}</_Builtin.Block></_Builtin.Block><_Builtin.Icon
                                        className={`rebel-style--faq_icon rebel-style--show-on-mobile ${_activeStyleVariant}`}
                                        widget={{
                                            type: "icon",
                                            icon: "dropdown-toggle"
                                        }} /></_Builtin.DropdownToggle><_Builtin.DropdownList
                                    className={`rebel-style--faq_content ${_activeStyleVariant}`}
                                    data-w-id="00a8c6b0-dca5-aeba-d391-da99d929b24c"
                                    tag="nav"
                                    id="faq-dropdown-1"><_Builtin.Block className={`rebel-style--faq_body ${_activeStyleVariant}`} tag="div"><_Builtin.RichText
                                            className={`rebel-style--rich-text-block ${_activeStyleVariant}`}
                                            tag="div"
                                            slot="">{question1AnswerRichText}</_Builtin.RichText></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper><_Builtin.Block className={`rebel-style--faq_divider ${_activeStyleVariant}`} tag="div" /><_Builtin.DropdownWrapper
                                className={`rebel-style--faq_item rebel-style--is-vertical ${_activeStyleVariant}`}
                                tag="div"
                                delay={250}
                                hover={false}><_Builtin.DropdownToggle className={`rebel-style--faq_toggle ${_activeStyleVariant}`} tag="div"><_Builtin.Block
                                        className={`rebel-style--question-wrapper ${_activeStyleVariant}`}
                                        id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b252-d929b20c"
                                        tag="div"><_Builtin.Block
                                            className={`rebel-style--headline-tiny ${_activeStyleVariant}`}
                                            id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b253-d929b20c"
                                            tag="div">{question2QuestionText}</_Builtin.Block></_Builtin.Block><_Builtin.Icon
                                        className={`rebel-style--faq_icon rebel-style--show-on-mobile ${_activeStyleVariant}`}
                                        widget={{
                                            type: "icon",
                                            icon: "dropdown-toggle"
                                        }} /></_Builtin.DropdownToggle><_Builtin.DropdownList
                                    className={`rebel-style--faq_content ${_activeStyleVariant}`}
                                    tag="nav"
                                    id="faq-dropdown-2"><_Builtin.Block className={`rebel-style--faq_body ${_activeStyleVariant}`} tag="div"><_Builtin.RichText
                                            className={`rebel-style--rich-text-block ${_activeStyleVariant}`}
                                            tag="div"
                                            slot="">{question2AnswerRichText}</_Builtin.RichText></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper><_Builtin.Block className={`rebel-style--faq_divider ${_activeStyleVariant}`} tag="div" /><_Builtin.DropdownWrapper
                                className={`rebel-style--faq_item rebel-style--is-vertical ${_activeStyleVariant}`}
                                tag="div"
                                delay={250}
                                hover={false}><_Builtin.DropdownToggle
                                    className={`rebel-style--faq_toggle ${_activeStyleVariant}`}
                                    tag="div"
                                    id="faq-dropdown-3"><_Builtin.Block
                                        className={`rebel-style--question-wrapper ${_activeStyleVariant}`}
                                        id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b25b-d929b20c"
                                        tag="div"><_Builtin.Block
                                            className={`rebel-style--headline-tiny ${_activeStyleVariant}`}
                                            id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b25c-d929b20c"
                                            tag="div">{question3QuestionText}</_Builtin.Block></_Builtin.Block><_Builtin.Icon
                                        className={`rebel-style--faq_icon rebel-style--show-on-mobile ${_activeStyleVariant}`}
                                        widget={{
                                            type: "icon",
                                            icon: "dropdown-toggle"
                                        }} /></_Builtin.DropdownToggle><_Builtin.DropdownList
                                    className={`rebel-style--faq_content ${_activeStyleVariant}`}
                                    tag="nav"
                                    id="faq-dropdown-3"><_Builtin.Block className={`rebel-style--faq_body ${_activeStyleVariant}`} tag="div"><_Builtin.RichText
                                            className={`rebel-style--rich-text-block ${_activeStyleVariant}`}
                                            tag="div"
                                            slot="">{question3AnswerRichText}</_Builtin.RichText></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper><_Builtin.Block className={`rebel-style--faq_divider ${_activeStyleVariant}`} tag="div" /><_Builtin.DropdownWrapper
                                className={`rebel-style--faq_item rebel-style--is-vertical ${_activeStyleVariant}`}
                                tag="div"
                                delay={250}
                                hover={false}><_Builtin.DropdownToggle className={`rebel-style--faq_toggle ${_activeStyleVariant}`} tag="div"><_Builtin.Block
                                        className={`rebel-style--question-wrapper ${_activeStyleVariant}`}
                                        id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b264-d929b20c"
                                        tag="div"><_Builtin.Block
                                            className={`rebel-style--headline-tiny ${_activeStyleVariant}`}
                                            id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b265-d929b20c"
                                            tag="div">{question4QuestionText}</_Builtin.Block></_Builtin.Block><_Builtin.Icon
                                        className={`rebel-style--faq_icon rebel-style--show-on-mobile ${_activeStyleVariant}`}
                                        widget={{
                                            type: "icon",
                                            icon: "dropdown-toggle"
                                        }} /></_Builtin.DropdownToggle><_Builtin.DropdownList
                                    className={`rebel-style--faq_content ${_activeStyleVariant}`}
                                    tag="nav"
                                    id="faq-dropdown-4"><_Builtin.Block className={`rebel-style--faq_body ${_activeStyleVariant}`} tag="div"><_Builtin.RichText
                                            className={`rebel-style--rich-text-block ${_activeStyleVariant}`}
                                            tag="div"
                                            slot="">{question4AnswerRichText}</_Builtin.RichText></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper><_Builtin.Block className={`rebel-style--faq_divider ${_activeStyleVariant}`} tag="div" /><_Builtin.DropdownWrapper
                                className={`rebel-style--faq_item rebel-style--is-vertical ${_activeStyleVariant}`}
                                tag="div"
                                delay={250}
                                hover={false}><_Builtin.DropdownToggle
                                    className={`rebel-style--faq_toggle w--open ${_activeStyleVariant}`}
                                    tag="div"><_Builtin.Block
                                        className={`rebel-style--question-wrapper ${_activeStyleVariant}`}
                                        id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b26d-d929b20c"
                                        tag="div"><_Builtin.Block
                                            className={`rebel-style--headline-tiny ${_activeStyleVariant}`}
                                            id="w-node-_00a8c6b0-dca5-aeba-d391-da99d929b26e-d929b20c"
                                            tag="div">{question5QuestionText}</_Builtin.Block></_Builtin.Block><_Builtin.Icon
                                        className={`rebel-style--faq_icon rebel-style--show-on-mobile ${_activeStyleVariant}`}
                                        widget={{
                                            type: "icon",
                                            icon: "dropdown-toggle"
                                        }} /></_Builtin.DropdownToggle><_Builtin.DropdownList
                                    className={`rebel-style--faq_content ${_activeStyleVariant}`}
                                    tag="nav"
                                    id="faq-dropdown-5"><_Builtin.Block className={`rebel-style--faq_body ${_activeStyleVariant}`} tag="div"><_Builtin.RichText
                                            className={`rebel-style--rich-text-block ${_activeStyleVariant}`}
                                            tag="div"
                                            slot="">{question5AnswerRichText}</_Builtin.RichText></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper><_Builtin.Block className={`rebel-style--faq_divider ${_activeStyleVariant}`} tag="div" /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Component>
    );
}