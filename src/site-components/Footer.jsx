"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SocialsElement } from "./SocialsElement";

export function Footer(
    {
        as: _Component = _Builtin.Section,
        settingsFooterVisibility = true,
        settingsFooterId,
        brandBrandLogo = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68e147690f41e4018efd13ee_8469bab8f9f00a12a66efa980e9739c9_revrebel_vertical_logo.svg",
        brandBrandLogoAltText,
        brandBrandTaglineVisibility = true,
        brandBrandTaglineText = "We help hotels craft strategies to grow their revenues and crush the competition",
        newsletterNewsletterSignupText = "Get CtrlShift, ourBlog for HotelStrategy",
        newsletterNewsletterSignupCtaText = "Subscribe",
        newsletterPrivacyPolicy1Visibility = true,
        newsletterPrivacyPolicy1Text = "By subscribing you agree to with our ",
        newsletterPrivacyPolicyLinkVisibility = true,

        newsletterPrivacyPolicyLink = {
            href: "#"
        },

        newsletterPrivacyPolicy2Visibility = true,
        newsletterPrivacyPolicy2Text = " and provide consent to receive updates from our company.",
        copyrightCopyrightText = "© 2023 All Rights Reserved. made By ",
        policyLinksPrivacyPolicyLinkVisibility = true,

        policyLinksPrivacyPolicyLink = {
            href: "#"
        },

        policyLinksPrivacyPolicyLinkText = "Privacy Policy",
        policyLinksTermsOfServiceLinkVisibility = true,

        policyLinksTermsOfServiceLink = {
            href: "#"
        },

        policyLinksTermsOfServiceLinkText = "Terms of Service",
        policyLinksPrivacyPolicyText = "Privacy Policy",
        policyLinksCookiesLinkTextVisibility = true,

        policyLinksCookieLink = {
            href: "#"
        },

        policyLinksCookiesLinkText = "Cookies Settings",
        contactContactHeadlineVisibility = true,
        contactContactHeadlineText = "Get In Touch",
        contactPhoneNumberVisibility = true,
        contactPhoneNumberText = "(310) 800-1124",
        contactEmailAddressVisibility = true,
        contactEmailAddressText = "hello@revrebel.io",
        contactWebsiteAddressVisibility = true,
        contactWebsiteAddressText = "revrebel.io",
        addressAddressHeadlineVisibility = true,
        addressAddressHeadlineText = "Los Angeles HQ",
        addressAddressLine1Visibility = true,
        addressAddressLine1Text = "5101 Santa Monica Blvd.",
        addressAddressLine2Visibility = true,
        addressAddressLine2Text = "STE 8 PMB 69",
        addressCityStateZipVisibility = true,
        addressCityStateZipText = "Los Angeles, CA 90029",
        socialsSocialsHeadlineVisibility = true,
        socialsSocialsHeadlineText = "Stay in Touch",
        socialButton1SocialButtonVisibility = true,
        socialButton1IconSize = "Light",
        socialButton1SocialPlatform = null,
        socialButton2SocialButtonVisibility = true,
        socialButton2SocialPlatform = null,
        socialButton3SocialButtonVisibility = true,
        socialButton3SocialPlatform = null,
        socialButton3IconSize = "Light",
        socialButton4SocialButtonVisibility = true,
        socialButton4SocialPlatform = null,
        socialButton4IconSize = "Light",
        socialButton5SocialButtonVisibility = true,
        socialButton5SocialPlatform = null,
        socialButton5IconSize = "Light",

        socialButton5SocialButtonLink = {
            href: "https://www.instagram.com/hello_revrebel",
            target: "_blank"
        },

        socialButton3SocialButtonLink = {
            href: "https://www.instagram.com/hello_revrebel",
            target: "_blank"
        },

        socialButton1SocialButtonLink = {
            href: "https://www.instagram.com/hello_revrebel",
            target: "_blank"
        },

        socialButton2SocialButtonLink = {
            href: "https://www.instagram.com/hello_revrebel",
            target: "_blank"
        },

        socialButton4SocialButtonLink = {
            href: "https://www.instagram.com/hello_revrebel",
            target: "_blank"
        },

        socialButton2IconSize = "Light",
        variant = "Light"
    }
) {
    const _styleVariantMap = {
        "Light": "",
        "Outline Light": "w-variant-900441e7-5c5c-99bd-e549-451c1d63adf5",
        "Dark": "w-variant-900441e7-5c5c-99bd-e549-451c1d63adf6",
        "Outline Dark": "w-variant-900441e7-5c5c-99bd-e549-451c1d63adf7"
    };

    const _activeStyleVariant = _styleVariantMap[variant];

    return settingsFooterVisibility ? <_Component
        className={`footer-wrapper bg-color-light ${_activeStyleVariant}`}
        grid={{
            type: "section"
        }}
        tag="section"
        id={settingsFooterId}><_Builtin.BlockContainer
            className={`footer_container ${_activeStyleVariant}`}
            grid={{
                type: "container"
            }}
            tag="div"><_Builtin.Block className={`footer_padding ${_activeStyleVariant}`} tag="div"><_Builtin.HtmlEmbed
                    value="%3Cstyle%3E%0A%40media%20screen%20and%20(max-width%3A%201132px)%20%7B%0A%20%20.footer_contact-wrapper.margin_left-auto%20%7B%0A%20%20%20%20flex-flow%3A%20column%3B%0A%20%20%20%20margin-left%3A%20unset%3B%0A%20%20%20%20width%3A%20100%25%0A%20%20%7D%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%20%20.footer_contact-wrapper.margin_left-auto%20%7B%0A%20%20%20%20flex-flow%3A%20column%3B%0A%20%20%20%20width%3A%20100%25%0A%20%20%7D%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20.footer_contact-wrapper.margin_left-auto%20%7B%0A%20%20%20%20flex-flow%3A%20row%3B%0A%20%20%7D%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20479px)%20%7B%0A%20%20.footer_contact-wrapper.margin_left-auto%20%7B%0A%20%20%20%20flex-flow%3A%20column%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E" /><_Builtin.Block
                    className={`footer text-color_primary bg-color-light ${_activeStyleVariant}`}
                    tag="div"><_Builtin.Block className={` footer-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`footer_top-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`footer_left-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={` brand-logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                        className={` logo-wide ${_activeStyleVariant}`}
                                        width="250"
                                        height="Auto"
                                        loading="lazy"
                                        src={brandBrandLogo} />{brandBrandTaglineVisibility ? <_Builtin.Paragraph className={`footer_paragraph ${_activeStyleVariant}`}>{brandBrandTaglineText}</_Builtin.Paragraph> : null}</_Builtin.Block><_Builtin.Block className={`footer_actions ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`footer_form-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.FormWrapper className={`blog-signup_form-block ${_activeStyleVariant}`}><_Builtin.Block className={`footer_item-headline ${_activeStyleVariant}`} tag="div">{newsletterNewsletterSignupText}</_Builtin.Block><_Builtin.FormForm
                                                className={`blog-signup_form flex_horizontal-4 ${_activeStyleVariant}`}
                                                name="email-form"
                                                data-name="Email Form"
                                                method="get"
                                                id="email-form"><_Builtin.FormTextInput
                                                    className={`form_input is-email-address w-node-_6f0f3cbc-721e-3d0b-9af8-a177e9644788-e9644778 ${_activeStyleVariant}`}
                                                    id="blog-signup_email-address"
                                                    autoFocus={false}
                                                    maxLength={256}
                                                    name="Blog-Signup-Email-Address"
                                                    data-name="Blog Signup Email Address"
                                                    placeholder="Your Email  Address"
                                                    type="text"
                                                    disabled={false}
                                                    required={true} /><_Builtin.Block tag="div"><_Builtin.FormButton
                                                        className={`button is-btn-sm-2 ${_activeStyleVariant}`}
                                                        id="w-node-_6f0f3cbc-721e-3d0b-9af8-a177e964478a-e9644778"
                                                        type="submit"
                                                        data-wait="transmitting..."
                                                        value={newsletterNewsletterSignupCtaText} /></_Builtin.Block></_Builtin.FormForm><_Builtin.FormSuccessMessage
                                                className={`success-message_operator bg-color-blue-offset ${_activeStyleVariant}`}><_Builtin.Block
                                                    className={`success-message_text text-color-primary-6 text-size-sm-2 ${_activeStyleVariant}`}
                                                    tag="div">{"Welcome, Operator. You’ve just subscribed to the most profitable backchannel in hospitality."}</_Builtin.Block></_Builtin.FormSuccessMessage><_Builtin.FormErrorMessage className={`error-message_mission-control ${_activeStyleVariant}`}><_Builtin.Block className={`error-message_text ${_activeStyleVariant}`} tag="div">{"Mission control, we have a problem.Error please try again later."}</_Builtin.Block></_Builtin.FormErrorMessage></_Builtin.FormWrapper></_Builtin.Block><_Builtin.Block className={`item-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Block
                                            className={`paragraph_sm flex-vertical-3 line-height_1x margin-bottom_none-2 ${_activeStyleVariant}`}
                                            tag="div">{newsletterPrivacyPolicy1Visibility ? <_Builtin.Block
                                                className={` text-size-sm line-height_1x is-lowercase ${_activeStyleVariant}`}
                                                tag="div">{newsletterPrivacyPolicy1Text}</_Builtin.Block> : null}{newsletterPrivacyPolicyLinkVisibility ? <_Builtin.Link
                                                className={`label_sm ${_activeStyleVariant}`}
                                                button={false}
                                                block="inline"
                                                options={newsletterPrivacyPolicyLink}>{policyLinksPrivacyPolicyText}</_Builtin.Link> : null}{newsletterPrivacyPolicy2Visibility ? <_Builtin.Block
                                                className={` text-size-sm line-height_1x is-lowercase ${_activeStyleVariant}`}
                                                tag="div">{newsletterPrivacyPolicy2Text}</_Builtin.Block> : null}</_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className={`links ${_activeStyleVariant}`} tag="div"><_Builtin.Block
                                    className={`footer_contact-wrapper margin_left-auto ${_activeStyleVariant}`}
                                    tag="div"><_Builtin.Block
                                        className={`footer-column max-width_175px min-width_175px ${_activeStyleVariant}`}
                                        tag="div"><_Builtin.Block className={`space_xs ${_activeStyleVariant}`} tag="div" />{contactContactHeadlineVisibility ? <_Builtin.Block className={`footer_item-headline ${_activeStyleVariant}`} tag="div">{contactContactHeadlineText}</_Builtin.Block> : null}<_Builtin.Block className={_activeStyleVariant} tag="div"><_Builtin.Block className={`footer_link-wrapper ${_activeStyleVariant}`} tag="div">{contactPhoneNumberVisibility ? <_Builtin.Block
                                                    className={`footer_link-item font-weight-bold-8 ${_activeStyleVariant}`}
                                                    tag="div">{"[p] "}</_Builtin.Block> : null}{contactPhoneNumberVisibility ? <_Builtin.Block
                                                    className={`footer_link-item padding-left_5px ${_activeStyleVariant}`}
                                                    tag="div">{contactPhoneNumberText}</_Builtin.Block> : null}</_Builtin.Block><_Builtin.Block className={` footer_link-wrapper ${_activeStyleVariant}`} tag="div">{contactEmailAddressVisibility ? <_Builtin.Block
                                                    className={`footer_link-item font-weight-bold-8 ${_activeStyleVariant}`}
                                                    tag="div">{"[e] "}</_Builtin.Block> : null}{contactEmailAddressVisibility ? <_Builtin.Block
                                                    className={`footer_link-item padding-left_5px ${_activeStyleVariant}`}
                                                    tag="div">{contactEmailAddressText}</_Builtin.Block> : null}</_Builtin.Block><_Builtin.Block className={` footer_link-wrapper ${_activeStyleVariant}`} tag="div">{contactWebsiteAddressVisibility ? <_Builtin.Block
                                                    className={`footer_link-item font-weight-bold-8 ${_activeStyleVariant}`}
                                                    tag="div">{"[w] "}</_Builtin.Block> : null}{contactWebsiteAddressVisibility ? <_Builtin.Block
                                                    className={`footer_link-item padding-left_5px ${_activeStyleVariant}`}
                                                    tag="div">{contactWebsiteAddressText}</_Builtin.Block> : null}</_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                        className={` footer-column max-width_175px min-width_175px margin-right_auto-3 ${_activeStyleVariant}`}
                                        tag="div"><_Builtin.Block className={`space_xs ${_activeStyleVariant}`} tag="div" />{addressAddressHeadlineVisibility ? <_Builtin.Block className={` footer_item-headline ${_activeStyleVariant}`} tag="div">{addressAddressHeadlineText}</_Builtin.Block> : null}<_Builtin.Block className={_activeStyleVariant} tag="div"><_Builtin.Block className={` footer_link-wrapper ${_activeStyleVariant}`} tag="div">{addressAddressLine1Visibility ? <_Builtin.Block className={`footer_link-item ${_activeStyleVariant}`} tag="div">{addressAddressLine1Text}</_Builtin.Block> : null}</_Builtin.Block>{addressAddressLine2Visibility ? <_Builtin.Block className={` footer_link-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`footer_link-item ${_activeStyleVariant}`} tag="div">{addressAddressLine2Text}</_Builtin.Block></_Builtin.Block> : null}{addressCityStateZipVisibility ? <_Builtin.Block className={` footer_link-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`footer_link-item ${_activeStyleVariant}`} tag="div">{addressCityStateZipText}</_Builtin.Block></_Builtin.Block> : null}</_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                    className={`footer-column max-width_7rem margin-left_auto-2 ${_activeStyleVariant}`}
                                    tag="div"><_Builtin.Block className={`space_xs is-mobile-x3 ${_activeStyleVariant}`} tag="div" />{socialsSocialsHeadlineVisibility ? <_Builtin.Block
                                        className={` footer_item-headline text-align-right ${_activeStyleVariant}`}
                                        tag="div">{socialsSocialsHeadlineText}</_Builtin.Block> : null}<_Builtin.Block className={` socials_vertical ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`space_xs ${_activeStyleVariant}`} tag="div" /><SocialsElement
                                            socialPlatform={socialButton1SocialPlatform}
                                            socialButtonLinksSocialButtonLinkLink={socialButton1SocialButtonLink}
                                            iconSize={socialButton1IconSize}
                                            socialButtonIconSettingsSocialButtonVisibility={socialButton1SocialButtonVisibility} /><SocialsElement
                                            socialPlatform={socialButton2SocialPlatform}
                                            iconSize={socialButton2IconSize}
                                            socialButtonLinksSocialButtonLinkLink={socialButton2SocialButtonLink}
                                            socialButtonIconSettingsSocialButtonVisibility={socialButton2SocialButtonVisibility} /><SocialsElement
                                            socialPlatform={socialButton3SocialPlatform}
                                            iconSize={socialButton3IconSize}
                                            socialButtonLinksSocialButtonLinkLink={socialButton3SocialButtonLink}
                                            socialButtonIconSettingsSocialButtonVisibility={socialButton3SocialButtonVisibility} /><SocialsElement
                                            socialPlatform={socialButton4SocialPlatform}
                                            socialButtonLinksSocialButtonLinkLink={socialButton4SocialButtonLink}
                                            socialButtonIconSettingsSocialButtonVisibility={socialButton4SocialButtonVisibility}
                                            iconSize={socialButton4IconSize} /><SocialsElement
                                            socialPlatform={socialButton5SocialPlatform}
                                            socialButtonLinksSocialButtonLinkLink={socialButton5SocialButtonLink}
                                            iconSize={socialButton5IconSize}
                                            socialButtonIconSettingsSocialButtonVisibility={socialButton5SocialButtonVisibility} /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className={`credits ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={` credits-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Block
                                    className={`copyright-text ${_activeStyleVariant}`}
                                    id="w-node-_6f0f3cbc-721e-3d0b-9af8-a177e96447bf-e9644778"
                                    tag="div">{"© 2023 All Rights Reserved. made By "}<_Builtin.Link
                                        className={`  ${_activeStyleVariant}`}
                                        button={false}
                                        block=""
                                        options={{
                                            href: "#"
                                        }}><_Builtin.Span className={`logo-font ${_activeStyleVariant}`}>{"REVREBEL."}</_Builtin.Span></_Builtin.Link></_Builtin.Block><_Builtin.Block className={`footer-links ${_activeStyleVariant}`} tag="div">{policyLinksPrivacyPolicyLinkVisibility ? <_Builtin.Link
                                        className={`policy-link-block ${_activeStyleVariant}`}
                                        button={false}
                                        block="inline"
                                        options={policyLinksPrivacyPolicyLink}><_Builtin.Block
                                            className={`policy-link-block font-weight-bold ${_activeStyleVariant}`}
                                            tag="div">{policyLinksPrivacyPolicyLinkText}</_Builtin.Block></_Builtin.Link> : null}{policyLinksTermsOfServiceLinkVisibility ? <_Builtin.Link
                                        className={`policy-link-block ${_activeStyleVariant}`}
                                        button={false}
                                        block="inline"
                                        options={policyLinksTermsOfServiceLink}><_Builtin.Block
                                            className={` policy-link-block font-weight-bold ${_activeStyleVariant}`}
                                            tag="div">{policyLinksTermsOfServiceLinkText}</_Builtin.Block></_Builtin.Link> : null}{policyLinksCookiesLinkTextVisibility ? <_Builtin.Link
                                        className={`policy-link-block ${_activeStyleVariant}`}
                                        button={false}
                                        block="inline"
                                        options={policyLinksCookieLink}><_Builtin.Block
                                            className={` policy-link-block font-weight-bold ${_activeStyleVariant}`}
                                            tag="div">{policyLinksCookiesLinkText}</_Builtin.Block></_Builtin.Link> : null}</_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.BlockContainer></_Component> : null;
}