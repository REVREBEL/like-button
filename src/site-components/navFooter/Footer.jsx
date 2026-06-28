"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import FormButton from "../webflow_modules/Form/components/FormButton";
import FormErrorMessage from "../webflow_modules/Form/components/FormErrorMessage";
import FormForm from "../webflow_modules/Form/components/FormForm";
import FormSuccessMessage from "../webflow_modules/Form/components/FormSuccessMessage";
import FormTextInput from "../webflow_modules/Form/components/FormTextInput";
import FormWrapper from "../webflow_modules/Form/components/FormWrapper";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import Span from "../webflow_modules/Basic/components/Span";
import { SocialsElement } from "../rebelStyle/uiElements/SocialsElement";

export function Footer({
  addressAddressHeadlineText = "Los Angeles HQ",
  addressAddressHeadlineVisibility = true,
  addressAddressLine1Text = "5101 Santa Monica Blvd.",
  addressAddressLine1Visibility = true,
  addressAddressLine2Text = "STE 8 PMB 69",
  addressAddressLine2Visibility = true,
  addressCityStateZipText = "Los Angeles, CA 90029",
  addressCityStateZipVisibility = true,
  brandBrandLogo = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68e147690f41e4018efd13ee_8469bab8f9f00a12a66efa980e9739c9_revrebel_vertical_logo.svg",
  brandBrandLogoAltText = "",
  brandBrandTaglineText = "We help hotels craft strategies to grow their revenues and crush the competition",
  brandBrandTaglineVisibility = true,
  contactContactHeadlineText = "Get In Touch",
  contactContactHeadlineVisibility = true,
  contactEmailAddressText = "hello@revrebel.io",
  contactEmailAddressVisibility = true,
  contactPhoneNumberText = "(310) 800-1124",
  contactPhoneNumberVisibility = true,
  contactWebsiteAddressText = "revrebel.io",
  contactWebsiteAddressVisibility = true,
  copyrightCopyrightText = "© 2023 All Rights Reserved. made By ",
  newsletterNewsletterSignupCtaText = "Subscribe",
  newsletterNewsletterSignupText = "Get CtrlShift, ourBlog for HotelStrategy",
  newsletterPrivacyPolicy1Text = "By subscribing you agree to with our ",
  newsletterPrivacyPolicy1Visibility = true,
  newsletterPrivacyPolicy2Text = " and provide consent to receive updates from our company.",
  newsletterPrivacyPolicy2Visibility = true,

  newsletterPrivacyPolicyLink = {
    href: "#",
  },

  newsletterPrivacyPolicyLinkVisibility = true,

  policyLinksCookieLink = {
    href: "#",
  },

  policyLinksCookiesLinkText = "Cookies Settings",
  policyLinksCookiesLinkTextVisibility = true,

  policyLinksPrivacyPolicyLink = {
    href: "#",
  },

  policyLinksPrivacyPolicyLinkText = "Privacy Policy",
  policyLinksPrivacyPolicyLinkVisibility = true,
  policyLinksPrivacyPolicyText = "Privacy Policy",

  policyLinksTermsOfServiceLink = {
    href: "#",
  },

  policyLinksTermsOfServiceLinkText = "Terms of Service",
  policyLinksTermsOfServiceLinkVisibility = true,
  settingsFooterId = "",
  settingsFooterVisibility = true,
  socialButton1IconSize = "2x2",

  socialButton1SocialButtonLink = {
    href: "https://www.instagram.com/hello_revrebel",
    target: "_blank",
  },

  socialButton1SocialButtonVisibility = true,
  socialButton1SocialPlatform = "Instagram",
  socialButton2IconSize = "2x2",

  socialButton2SocialButtonLink = {
    href: "https://www.instagram.com/hello_revrebel",
    target: "_blank",
  },

  socialButton2SocialButtonVisibility = true,
  socialButton2SocialPlatform = "Linkedin",
  socialButton3IconSize = "2x2",

  socialButton3SocialButtonLink = {
    href: "https://www.instagram.com/hello_revrebel",
    target: "_blank",
  },

  socialButton3SocialButtonVisibility = true,
  socialButton3SocialPlatform = "Facebook",
  socialButton4IconSize = "2x2",

  socialButton4SocialButtonLink = {
    href: "https://www.instagram.com/hello_revrebel",
    target: "_blank",
  },

  socialButton4SocialButtonVisibility = true,
  socialButton4SocialPlatform = "X",
  socialButton5IconSize = "2x2",

  socialButton5SocialButtonLink = {
    href: "https://www.instagram.com/hello_revrebel",
    target: "_blank",
  },

  socialButton5SocialButtonVisibility = true,
  socialButton5SocialPlatform = "Blog",
  socialsSocialsHeadlineText = "Stay in Touch",
  socialsSocialsHeadlineVisibility = true,
  variant = "Light",
}) {
  const _styleVariantMap = {
    Light: "",
    "Outline Light": "w-variant-900441e7-5c5c-99bd-e549-451c1d63adf5",
    Dark: "w-variant-900441e7-5c5c-99bd-e549-451c1d63adf6",
    "Outline Dark": "w-variant-900441e7-5c5c-99bd-e549-451c1d63adf7",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsFooterVisibility ? (
        <Section
          className={`footer-wrapper bg-color-light ${_activeStyleVariant}`}
          grid={{
            type: "section",
          }}
          id={settingsFooterId}
          tag={"section"}
        >
          <BlockContainer
            className={`footer_container ${_activeStyleVariant}`}
            grid={{
              type: "container",
            }}
            tag={"div"}
          >
            <Block
              className={`footer_padding ${_activeStyleVariant}`}
              tag={"div"}
            >
              <HtmlEmbed
                content={""}
                value={
                  "%3Cstyle%3E%0A%40media%20screen%20and%20(max-width%3A%201132px)%20%7B%0A%20%20.footer_contact-wrapper.margin_left-auto%20%7B%0A%20%20%20%20flex-flow%3A%20column%3B%0A%20%20%20%20margin-left%3A%20unset%3B%0A%20%20%20%20width%3A%20100%25%0A%20%20%7D%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%20%20.footer_contact-wrapper.margin_left-auto%20%7B%0A%20%20%20%20flex-flow%3A%20column%3B%0A%20%20%20%20width%3A%20100%25%0A%20%20%7D%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20.footer_contact-wrapper.margin_left-auto%20%7B%0A%20%20%20%20flex-flow%3A%20row%3B%0A%20%20%7D%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20479px)%20%7B%0A%20%20.footer_contact-wrapper.margin_left-auto%20%7B%0A%20%20%20%20flex-flow%3A%20column%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E"
                }
              />
              <Block
                className={`footer text-color_primary bg-color-light ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={` footer-wrapper ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`footer_top-wrapper ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`footer_left-wrapper ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={` brand-logo ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <Image
                          className={` logo-wide ${_activeStyleVariant}`}
                          height={"Auto"}
                          loading={"lazy"}
                          src={brandBrandLogo}
                          width={"250"}
                        />
                        {brandBrandTaglineVisibility ? (
                          <Paragraph
                            className={`footer_paragraph ${_activeStyleVariant}`}
                          >
                            {brandBrandTaglineText}
                          </Paragraph>
                        ) : null}
                      </Block>
                      <Block
                        className={`footer_actions ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <Block
                          className={`footer_form-wrapper ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <FormWrapper
                            className={`blog-signup_form-block ${_activeStyleVariant}`}
                          >
                            <Block
                              className={`footer_item-headline ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              {newsletterNewsletterSignupText}
                            </Block>
                            <FormForm
                              className={`blog-signup_form flex_horizontal-4 ${_activeStyleVariant}`}
                              data-name={"Email Form"}
                              id={"email-form"}
                              method={"get"}
                              name={"email-form"}
                            >
                              <FormTextInput
                                autoFocus={false}
                                className={`form_input is-email-address w-node-_6f0f3cbc-721e-3d0b-9af8-a177e9644788-e9644778 ${_activeStyleVariant}`}
                                data-name={"Blog Signup Email Address"}
                                disabled={false}
                                id={"blog-signup_email-address"}
                                maxLength={256}
                                name={"Blog-Signup-Email-Address"}
                                placeholder={"Your Email  Address"}
                                required={true}
                                type={"text"}
                              />
                              <Block tag={"div"}>
                                <FormButton
                                  className={`button is-btn-sm-2 ${_activeStyleVariant}`}
                                  data-wait={"transmitting..."}
                                  type={"submit"}
                                  value={newsletterNewsletterSignupCtaText}
                                />
                              </Block>
                            </FormForm>
                            <FormSuccessMessage
                              className={`success-message_operator bg-color-blue-offset ${_activeStyleVariant}`}
                            >
                              <Block
                                className={`success-message_text text-color-primary-6 text-size-sm-2 ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                {
                                  "Welcome, Operator. You’ve just subscribed to the most profitable backchannel in hospitality."
                                }
                              </Block>
                            </FormSuccessMessage>
                            <FormErrorMessage
                              className={`error-message_mission-control ${_activeStyleVariant}`}
                            >
                              <Block
                                className={`error-message_text ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                {
                                  "Mission control, we have a problem.Error please try again later."
                                }
                              </Block>
                            </FormErrorMessage>
                          </FormWrapper>
                        </Block>
                        <Block
                          className={`item-wrapper ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Block
                            className={`paragraph_sm flex-vertical-3 line-height_1x margin-bottom_none-2 ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            {newsletterPrivacyPolicy1Visibility ? (
                              <Block
                                className={` text-size-sm line-height_1x is-lowercase ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                {newsletterPrivacyPolicy1Text}
                              </Block>
                            ) : null}
                            {newsletterPrivacyPolicyLinkVisibility ? (
                              <Link
                                block={"inline"}
                                button={false}
                                className={`label_sm ${_activeStyleVariant}`}
                                options={newsletterPrivacyPolicyLink}
                              >
                                {policyLinksPrivacyPolicyText}
                              </Link>
                            ) : null}
                            {newsletterPrivacyPolicy2Visibility ? (
                              <Block
                                className={` text-size-sm line-height_1x is-lowercase ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                {newsletterPrivacyPolicy2Text}
                              </Block>
                            ) : null}
                          </Block>
                        </Block>
                      </Block>
                    </Block>
                    <Block
                      className={`links ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`footer_contact-wrapper margin_left-auto ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <Block
                          className={`footer-column max-width_175px min-width_175px ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Block
                            className={`space_xs ${_activeStyleVariant}`}
                            tag={"div"}
                          />
                          {contactContactHeadlineVisibility ? (
                            <Block
                              className={`footer_item-headline ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              {contactContactHeadlineText}
                            </Block>
                          ) : null}
                          <Block className={_activeStyleVariant} tag={"div"}>
                            <Block
                              className={`footer_link-wrapper ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              {contactPhoneNumberVisibility ? (
                                <Block
                                  className={`footer_link-item font-weight-bold-8 ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {"[p] "}
                                </Block>
                              ) : null}
                              {contactPhoneNumberVisibility ? (
                                <Block
                                  className={`footer_link-item padding-left_5px ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {contactPhoneNumberText}
                                </Block>
                              ) : null}
                            </Block>
                            <Block
                              className={` footer_link-wrapper ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              {contactEmailAddressVisibility ? (
                                <Block
                                  className={`footer_link-item font-weight-bold-8 ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {"[e] "}
                                </Block>
                              ) : null}
                              {contactEmailAddressVisibility ? (
                                <Block
                                  className={`footer_link-item padding-left_5px ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {contactEmailAddressText}
                                </Block>
                              ) : null}
                            </Block>
                            <Block
                              className={` footer_link-wrapper ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              {contactWebsiteAddressVisibility ? (
                                <Block
                                  className={`footer_link-item font-weight-bold-8 ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {"[w] "}
                                </Block>
                              ) : null}
                              {contactWebsiteAddressVisibility ? (
                                <Block
                                  className={`footer_link-item padding-left_5px ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {contactWebsiteAddressText}
                                </Block>
                              ) : null}
                            </Block>
                          </Block>
                        </Block>
                        <Block
                          className={` footer-column max-width_175px min-width_175px margin-right_auto-3 ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Block
                            className={`space_xs ${_activeStyleVariant}`}
                            tag={"div"}
                          />
                          {addressAddressHeadlineVisibility ? (
                            <Block
                              className={` footer_item-headline ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              {addressAddressHeadlineText}
                            </Block>
                          ) : null}
                          <Block className={_activeStyleVariant} tag={"div"}>
                            <Block
                              className={` footer_link-wrapper ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              {addressAddressLine1Visibility ? (
                                <Block
                                  className={`footer_link-item ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {addressAddressLine1Text}
                                </Block>
                              ) : null}
                            </Block>
                            {addressAddressLine2Visibility ? (
                              <Block
                                className={` footer_link-wrapper ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                <Block
                                  className={`footer_link-item ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {addressAddressLine2Text}
                                </Block>
                              </Block>
                            ) : null}
                            {addressCityStateZipVisibility ? (
                              <Block
                                className={` footer_link-wrapper ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                <Block
                                  className={`footer_link-item ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {addressCityStateZipText}
                                </Block>
                              </Block>
                            ) : null}
                          </Block>
                        </Block>
                      </Block>
                      <Block
                        className={`footer-column max-width_7rem margin-left_auto-2 ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <Block
                          className={`space_xs is-mobile-x3 ${_activeStyleVariant}`}
                          tag={"div"}
                        />
                        {socialsSocialsHeadlineVisibility ? (
                          <Block
                            className={` footer_item-headline text-align-right ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            {socialsSocialsHeadlineText}
                          </Block>
                        ) : null}
                        <Block
                          className={` socials_vertical ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Block
                            className={`space_xs ${_activeStyleVariant}`}
                            tag={"div"}
                          />
                          <SocialsElement
                            iconSize={socialButton1IconSize}
                            socialButtonIconSettingsSocialButtonVisibility={
                              socialButton1SocialButtonVisibility
                            }
                            socialButtonLinksSocialButtonLinkLink={
                              socialButton1SocialButtonLink
                            }
                            socialPlatform={socialButton1SocialPlatform}
                          />
                          <SocialsElement
                            iconSize={socialButton2IconSize}
                            socialButtonIconSettingsSocialButtonVisibility={
                              socialButton2SocialButtonVisibility
                            }
                            socialButtonLinksSocialButtonLinkLink={
                              socialButton2SocialButtonLink
                            }
                            socialPlatform={socialButton2SocialPlatform}
                          />
                          <SocialsElement
                            iconSize={socialButton3IconSize}
                            socialButtonIconSettingsSocialButtonVisibility={
                              socialButton3SocialButtonVisibility
                            }
                            socialButtonLinksSocialButtonLinkLink={
                              socialButton3SocialButtonLink
                            }
                            socialPlatform={socialButton3SocialPlatform}
                          />
                          <SocialsElement
                            iconSize={socialButton4IconSize}
                            socialButtonIconSettingsSocialButtonVisibility={
                              socialButton4SocialButtonVisibility
                            }
                            socialButtonLinksSocialButtonLinkLink={
                              socialButton4SocialButtonLink
                            }
                            socialPlatform={socialButton4SocialPlatform}
                          />
                          <SocialsElement
                            iconSize={socialButton5IconSize}
                            socialButtonIconSettingsSocialButtonVisibility={
                              socialButton5SocialButtonVisibility
                            }
                            socialButtonLinksSocialButtonLinkLink={
                              socialButton5SocialButtonLink
                            }
                            socialPlatform={socialButton5SocialPlatform}
                          />
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                  <Block
                    className={`credits ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={` credits-wrapper ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`copyright-text ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {"© 2023 All Rights Reserved. made By "}
                        <Link
                          block={""}
                          button={false}
                          className={`  ${_activeStyleVariant}`}
                          options={{
                            href: "#",
                          }}
                        >
                          <Span className={`logo-font ${_activeStyleVariant}`}>
                            {"REVREBEL."}
                          </Span>
                        </Link>
                      </Block>
                      <Block
                        className={`footer-links ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {policyLinksPrivacyPolicyLinkVisibility ? (
                          <Link
                            block={"inline"}
                            button={false}
                            className={`policy-link-block ${_activeStyleVariant}`}
                            options={policyLinksPrivacyPolicyLink}
                          >
                            <Block
                              className={`policy-link-block font-weight-bold ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              {policyLinksPrivacyPolicyLinkText}
                            </Block>
                          </Link>
                        ) : null}
                        {policyLinksTermsOfServiceLinkVisibility ? (
                          <Link
                            block={"inline"}
                            button={false}
                            className={`policy-link-block ${_activeStyleVariant}`}
                            options={policyLinksTermsOfServiceLink}
                          >
                            <Block
                              className={` policy-link-block font-weight-bold ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              {policyLinksTermsOfServiceLinkText}
                            </Block>
                          </Link>
                        ) : null}
                        {policyLinksCookiesLinkTextVisibility ? (
                          <Link
                            block={"inline"}
                            button={false}
                            className={`policy-link-block ${_activeStyleVariant}`}
                            options={policyLinksCookieLink}
                          >
                            <Block
                              className={` policy-link-block font-weight-bold ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              {policyLinksCookiesLinkText}
                            </Block>
                          </Link>
                        ) : null}
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </BlockContainer>
        </Section>
      ) : null}
    </div>
  );
}
