"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { FormFieldFirstName } from "./FormFieldFirstName";
import { FormInputLastName } from "./FormInputLastName";
import { FormFieldEmailAddress } from "./FormFieldEmailAddress";
import { FormFieldPhoneNumber } from "./FormFieldPhoneNumber";
import { FormFieldCompanyName } from "./FormFieldCompanyName";
import { FormFieldWebsite } from "./FormFieldWebsite";
import { FormFieldUserMessage } from "./FormFieldUserMessage";

const _interactionsData = JSON.parse(
    '{"events":{"e-13271":{"id":"e-13271","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-13272"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359,"origin":["6946540cc72b976861f8c836","e-71"]},"e-13273":{"id":"e-13273","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4759","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13274"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114,"origin":["6946540cc72b976861f8c836","e-458"]}},"actionLists":{"a-4759":{"id":"a-4759","origin":["6946540cc72b976861f8c836","a-22"],"title":"sticky-headline_fade-in 3","actionItemGroups":[{"actionItems":[{"id":"a-4759-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4759-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function LargeContactForm(
    {
        as: _Component = _Builtin.Section,
        formStyleFormColor = "Dark",
        settingsFormVisibility = true,
        settingsFormId,
        contactUsContactUsHeadlineTag = "h2",
        contactUsContactUsHeadline = "Let's Generate More Revenue Together",
        contactUsContactUsText = "Get in touch for a free brainstorming session and strategy evaluation.",
        contactUsContactUsEmailText = "Fill the form or ",
        emailAddressEmailAddressText = "hello@revrebel.io",

        emailAddressEmailAddressLink = {
            href: "mailto:hello@revrebel.io?subject=A%20message%20from%20revrebel.io"
        },

        emailAddressEmailAddressIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68e184af162cf99220130a71_a0d0223cd53fea5e38222c66a5d8d5ea_pencil.svg",
        addressAddressText = <>{"5101 Santa Monica Blvd "}<br />{"Ste 8 PMB 69 "}<br />{"Los Angeles, CA 90029"}</>,
        addressAddressIconAltText = "White Compass Icon",
        addressAddressIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68dac0f920dd3eb3dae8dee9_e8c131e9c06f2287fd5e2abf3eeb2f7e_address-filled.svg",
        phoneNumberPhoneNumberText = "310-800-1124",

        phoneNumberPhoneNumberLink = {
            href: "tel:1-310-800-1124"
        },

        phoneNumberPhoneNumberIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68dac0f920dd3eb3dae8deea_0634a6c3fd6e87c06202bb42c51c1d75_Phone%20Filled.svg",
        phoneNumberPhoneNumberIconAltText = "White Phone Icon",

        contactUsContactUsEmailLink = {
            href: "mailto:hello@revrebel.io?subject=Dear%20REVREBEL...."
        },

        contactUsContactUsText2 = " ",
        emailAddressFormText = "Fill the form or",
        emailAddressEmailAddressLink2 = "hello@revrebel.io",
        buttonButtonText = "[ GET INTOUCH ]",
        buttonButtonLoadingMessage = "Please wait..."
    }
) {
    _interactions.useInteractions(_interactionsData);

    const _styleVariantMap = {
        "Dark": "",
        "Light": "w-variant-2544fef9-7a38-c6c6-f03e-f0de6a0be84f"
    };

    const _activeStyleVariant = _styleVariantMap[formStyleFormColor];

    return settingsFormVisibility ? <_Component
        className={`rebel-style--large-contact-form_padding ${_activeStyleVariant}`}
        tag="section"
        grid={{
            type: "section"
        }}
        id={settingsFormId}><_Builtin.Section
            className={`rebel-style--component_size ${_activeStyleVariant}`}
            tag="section"
            grid={{
                type: "section"
            }}><_Builtin.BlockContainer
                className={`rebel-style--color-variants ${_activeStyleVariant}`}
                tag="div"
                grid={{
                    type: "container"
                }}><_Builtin.Block
                    className={`rebel-style--big-headline_component-padding ${_activeStyleVariant}`}
                    tag="div"><_Builtin.Block
                        className={`rebel-style--mobile-padding ${_activeStyleVariant}`}
                        tag="div"><_Builtin.Block
                            className={`rebel-style--form-card_wrapper ${_activeStyleVariant}`}
                            tag="div"><_Builtin.Block
                                className={`rebel-style--conact-form_wrapper ${_activeStyleVariant}`}
                                tag="div"><_Builtin.Block
                                    className={`rebel-style--left-wrapper rebel-style--padding_xs rebel-style--margin-right_none width_100pct_mobile-l ${_activeStyleVariant}`}
                                    id="w-node-_67360bea-4128-bc90-7084-9e6d68eee8ee-68eee8e7"
                                    tag="div"><_Builtin.Heading
                                        className={`rebel-style--headline-regular rebel-style--text-color-component rebel-style--headline-animated-block rebel-style--font-weight-bold scroll-in-view_slide-left ${_activeStyleVariant}`}
                                        tag={contactUsContactUsHeadlineTag}
                                        clas="text-align_center_mobile-l">{contactUsContactUsHeadline}</_Builtin.Heading><_Builtin.Block
                                        className={`rebel-style--contact_paragraph-wrapper ${_activeStyleVariant}`}
                                        tag="div"><_Builtin.Paragraph
                                            className={`rebel-style--paragraph-lg rebel-style--text-color-blue-offset rebel-style--text-wrap-balance scroll-in-view_slide-left ${_activeStyleVariant}`}
                                            clas="text-align_center_mobile-l">{contactUsContactUsText}</_Builtin.Paragraph><_Builtin.Block className={`rebel-style--contact_text ${_activeStyleVariant}`} tag="div"><_Builtin.Paragraph
                                                className={`rebel-style--paragraph rebel-style--text-color-pale-blue rebel-style--text-align_center_mobile-l rebel-style--margin-bottom_none ${_activeStyleVariant}`}>{emailAddressFormText}</_Builtin.Paragraph><_Builtin.Link
                                                className={`rebel-style--email-us-link ${_activeStyleVariant}`}
                                                button={false}
                                                block=""
                                                options={emailAddressEmailAddressLink}>{emailAddressEmailAddressLink2}</_Builtin.Link></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                        className={`rebel-style--divider rebel-style--margin-bottom_sm rebel-style--margin-top_sm rebel-style--bg-color-white ${_activeStyleVariant}`}
                                        tag="div" /><_Builtin.Block
                                        className={`rebel-style--contact_wrapper rebel-style--width_100pct rebel-style--mobile-margin-top_sm rebel-style--text-color-component ${_activeStyleVariant}`}
                                        tag="div"><_Builtin.Block
                                            className={`rebel-style--contact-details_wrapper ${_activeStyleVariant}`}
                                            id="w-node-_67360bea-4128-bc90-7084-9e6d68eee8f7-68eee8e7"
                                            tag="div"><_Builtin.Block
                                                className={`rebel-style--flex-horizontal rebel-style--flex-align_center rebel-style--flex-algin_stretch ${_activeStyleVariant}`}
                                                id="w-node-_67360bea-4128-bc90-7084-9e6d68eee8f8-68eee8e7"
                                                tag="div"><_Builtin.Block
                                                    className={`rebel-style--icon-wrapper rebel-style--margin-right_xxs ${_activeStyleVariant}`}
                                                    id="w-node-_67360bea-4128-bc90-7084-9e6d68eee8f9-68eee8e7"
                                                    tag="div"><_Builtin.Image
                                                        className={`rebel-style--icon_3x3 rebel-style--icon-component rebel-style--margin-right_xxs ${_activeStyleVariant}`}
                                                        width="auto"
                                                        height="Auto"
                                                        loading="lazy"
                                                        src={phoneNumberPhoneNumberIcon} /></_Builtin.Block><_Builtin.Block
                                                    className={`rebel-style--item-wrapper rebel-style--flex-grow ${_activeStyleVariant}`}
                                                    tag="div"><_Builtin.Link
                                                        className={`rebel-style--link-block rebel-style--is-phone-number rebel-style--flex-grow ${_activeStyleVariant}`}
                                                        button={false}
                                                        block="inline"
                                                        options={phoneNumberPhoneNumberLink}><_Builtin.Block
                                                            className={`rebel-style--headline-tiny rebel-style--text-color-bright-blue rebel-style--margin-bottom_xxs rebel-style--scroll-in-view_slide-up ${_activeStyleVariant}`}
                                                            tag="div">{"Phone"}</_Builtin.Block><_Builtin.Block
                                                            className={`rebel-style--paragraph rebel-style--text-color-white rebel-style--scroll-in-view_slide-up rebel-style--is-adjustment_10px ${_activeStyleVariant}`}
                                                            tag="div">{phoneNumberPhoneNumberText}</_Builtin.Block></_Builtin.Link></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                                className={`rebel-style--flex_horizontal rebel-style--flex-align-center rebel-style--flex-algin_stretch ${_activeStyleVariant}`}
                                                id="w-node-_67360bea-4128-bc90-7084-9e6d68eee900-68eee8e7"
                                                tag="div"><_Builtin.Block className={`rebel-style--icon-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                                        className={`rebel-style--icon_3x3 rebel-style--icon-component rebel-style--margin-right_xxs rebel-style--is-adjustment ${_activeStyleVariant}`}
                                                        width="75"
                                                        height="auto"
                                                        loading="lazy"
                                                        alt="White Arrow Icon"
                                                        src={emailAddressEmailAddressIcon} /></_Builtin.Block><_Builtin.Block
                                                    className={`rebel-style--item-wrapper rebel-style--flex-grow ${_activeStyleVariant}`}
                                                    tag="div"><_Builtin.Link
                                                        className={`rebel-style--link-block rebel-style--is-email-address rebel-style--flex-grow ${_activeStyleVariant}`}
                                                        button={false}
                                                        block="inline"
                                                        options={emailAddressEmailAddressLink}><_Builtin.Block
                                                            className={`rebel-style--headline-tiny rebel-style--text-color-bright-blue rebel-style--margin-bottom_xxs rebel-style--scroll-in-view_slide-up ${_activeStyleVariant}`}
                                                            tag="div">{"Email"}</_Builtin.Block><_Builtin.Block
                                                            className={`rebel-style--paragraph rebel-style--text-color-white rebel-style--scroll-in-view_slide-up ${_activeStyleVariant}`}
                                                            tag="div">{emailAddressEmailAddressText}</_Builtin.Block></_Builtin.Link></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                            className={`rebel-style--flex_address ${_activeStyleVariant}`}
                                            id="w-node-_67360bea-4128-bc90-7084-9e6d68eee908-68eee8e7"
                                            tag="div"><_Builtin.Block className={`rebel-style--icon-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                                    className={`rebel-style--icon_3x3 rebel-style--icon-component rebel-style--margin-right_xxs ${_activeStyleVariant}`}
                                                    width="75"
                                                    height="auto"
                                                    loading="lazy"
                                                    src={addressAddressIcon} /></_Builtin.Block><_Builtin.Block className={`rebel-style--item-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Link
                                                    className={`rebel-style--link-block rebel-style--is-address ${_activeStyleVariant}`}
                                                    button={false}
                                                    block="inline"
                                                    options={{
                                                        href: "#"
                                                    }}><_Builtin.Block
                                                        className={`rebel-style--headline-tiny rebel-style--text-color-bright-blue rebel-style--margin-bottom_xxs rebel-style--scroll-in-view_slide-up ${_activeStyleVariant}`}
                                                        tag="div">{"Address"}</_Builtin.Block><_Builtin.Block
                                                        className={`rebel-style--paragraph rebel-style--text-color-white rebel-style--scroll-in-view_slide-up rebel-style--is-margin-left_10px ${_activeStyleVariant}`}
                                                        tag="div">{addressAddressText}</_Builtin.Block></_Builtin.Link></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                    className={`rebel-style--right-wrapper rebel-style--padding_xs rebel-style--width_100pct rebel-style--mobile-padding-top_adjustment ${_activeStyleVariant}`}
                                    id="w-node-_67360bea-4128-bc90-7084-9e6d68eee910-68eee8e7"
                                    tag="div"><_Builtin.FormWrapper
                                        className={`rebel-style--card ${_activeStyleVariant}`}
                                        target="_blank"
                                        id="homepage-contact-form-block"><_Builtin.FormForm
                                            className={`rebel-style--card-body rebel-style--margin-top_sm rebel-style--width_100pct ${_activeStyleVariant}`}
                                            name="wf-form-homepage-contact-form"
                                            data-name="homepage-contact-form"
                                            method="post"
                                            acceptCharset="UTF-8"
                                            zf_referrer_name="website/homepage-contact-form"
                                            encType="multipart/form-data"
                                            id="homepage-contact-form"><FormFieldFirstName id="w-node-_67360bea-4128-bc90-7084-9e6d68eee913-68eee8e7" /><FormInputLastName id="w-node-_67360bea-4128-bc90-7084-9e6d68eee914-68eee8e7" /><FormFieldEmailAddress id="w-node-_67360bea-4128-bc90-7084-9e6d68eee915-68eee8e7" /><FormFieldPhoneNumber id="w-node-_67360bea-4128-bc90-7084-9e6d68eee916-68eee8e7" /><FormFieldCompanyName id="w-node-_67360bea-4128-bc90-7084-9e6d68eee917-68eee8e7" /><FormFieldWebsite id="w-node-_67360bea-4128-bc90-7084-9e6d68eee918-68eee8e7" /><FormFieldUserMessage id="w-node-_67360bea-4128-bc90-7084-9e6d68eee919-68eee8e7" /><_Builtin.FormButton
                                                className={`rebel-style--button rebel-style--is-btn-color-5 rebel-style--max-width_50pct rebel-style--margin-top_sm rebel-style--text-color-primary ${_activeStyleVariant}`}
                                                type="submit"
                                                value={buttonButtonText}
                                                data-wait={buttonButtonLoadingMessage} /></_Builtin.FormForm><_Builtin.FormSuccessMessage
                                            className={`rebel-style--success-message_contact-form ${_activeStyleVariant}`}><_Builtin.Block className={`rebel-style--padding-sm ${_activeStyleVariant}`} tag="div"><_Builtin.Heading tag="h2">{"Success"}</_Builtin.Heading><_Builtin.Block
                                                    className={`rebel-style--text-block-200 ${_activeStyleVariant}`}
                                                    tag="div">{"Boom. You're on our radar."}</_Builtin.Block><_Builtin.Paragraph className={`rebel-style--paragraph-lg ${_activeStyleVariant}`}>{"Stand by — one of our strategists will be in touch faster than a last-minute OTA booking."}</_Builtin.Paragraph></_Builtin.Block></_Builtin.FormSuccessMessage><_Builtin.FormErrorMessage
                                            className={`rebel-style--error-message_contact-form ${_activeStyleVariant}`}><_Builtin.Block
                                                className={`rebel-style--text-block-141 ${_activeStyleVariant}`}
                                                tag="div">{"Oops! There was an error while submitting the form. Please email us at hello@revbel.io, and someone will get back to you shortly."}</_Builtin.Block></_Builtin.FormErrorMessage></_Builtin.FormWrapper></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.BlockContainer></_Builtin.Section></_Component> : null;
}