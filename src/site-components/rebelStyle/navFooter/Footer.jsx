"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../../devlinkScope";
import Block from "../../webflow_modules/Basic/components/Block";
import BlockContainer from "../../webflow_modules/Layout/components/BlockContainer";
import FormButton from "../../webflow_modules/Form/components/FormButton";
import FormErrorMessage from "../../webflow_modules/Form/components/FormErrorMessage";
import FormForm from "../../webflow_modules/Form/components/FormForm";
import FormSuccessMessage from "../../webflow_modules/Form/components/FormSuccessMessage";
import FormTextInput from "../../webflow_modules/Form/components/FormTextInput";
import FormWrapper from "../../webflow_modules/Form/components/FormWrapper";
import HtmlEmbed from "../../webflow_modules/Embed/components/HtmlEmbed";
import Image from "../../webflow_modules/Basic/components/Image";
import Link from "../../webflow_modules/Basic/components/Link";
import Paragraph from "../../webflow_modules/Basic/components/Paragraph";
import Section from "../../webflow_modules/Layout/components/Section";
import { SocialsElement } from "../uiElements/SocialsElement";

export function Footer({
  addressAddressHeadlineText = "Los Angeles HQ",
  addressAddressHeadlineVisibility = true,
  addressAddressLine1Text = "5101 Santa Monica Blvd.",
  addressAddressLine1Visibility = true,
  addressAddressLine2Text = "STE 8 PMB 69",
  addressAddressLine2Visibility = true,

  addressAddressLink = {
    href: "#",
  },

  addressCityStateZipText = "Los Angeles, CA 90029",
  addressCityStateZipVisibility = true,
  brandBrandLogo = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d2285fa415f2c1d4da47fc_8469bab8f9f00a12a66efa980e9739c9_revrebel_vertical_logo.svg",
  brandBrandLogoAltText = "",
  brandBrandTaglineText = "We help hotels craft strategies to grow their revenues and crush the competition",
  brandBrandTaglineVisibility = true,
  contactContactHeadlineText = "Get In Touch",
  contactContactHeadlineVisibility = true,

  contactEmailAddressLink = {
    href: "mailto:hello@revrebel.io",
  },

  contactEmailAddressText = "hello@revrebel.io",
  contactEmailAddressVisibility = true,

  contactPhoneNumberLink = {
    href: "tel:+13108001124",
  },

  contactPhoneNumberText = "(310) 800-1124",
  contactPhoneNumberVisibility = true,

  contactWebsiteAddressLink = {
    href: "https://revrebel.io",
    target: "_blank",
  },

  contactWebsiteAddressText = "revrebel.io",
  contactWebsiteAddressVisibility = true,
  copyrightCopyrightText = "©2026 All Rights Reserved. made by REVREBEL.",
  newsletterNewsletterSignupText = "Get CtrlShift, ourBlog for HotelStrategy",
  newsletterPrivacyPolicy1Text = "By subscribing you agree to with our ",
  newsletterPrivacyPolicy1Visibility = true,
  newsletterPrivacyPolicy2Text = " and provide consent to receive updates from our company.",
  newsletterPrivacyPolicy2Visibility = true,

  newsletterPrivacyPolicyLink = {
    href: "#",
  },

  newsletterPrivacyPolicyLinkVisibility = true,

  policyLinksCookiesSettingsLink = {
    href: "#",
  },

  policyLinksCookiesSettingsText = "Cookies Settings",
  policyLinksCookiesSettingsVisibility = true,

  policyLinksPrivacyPolicyLink = {
    href: "#",
  },

  policyLinksPrivacyPolicyLinkText = "Privacy Policy",
  policyLinksPrivacyPolicyLinkVisibility = true,

  policyLinksTermsOfServiceLink = {
    href: "#",
  },

  policyLinksTermsOfServiceLinkText = "Terms of Service",
  policyLinksTermsOfServiceLinkVisibility = true,
  settingsBackgroundColorVariant = "Light",
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
  socialButton2SocialButtonIconSettingsSocialButtonId = "",

  socialButton2SocialButtonLink = {
    href: "https://x.com/hello_revrebel",
    target: "_blank",
  },

  socialButton2SocialButtonVisibility = true,
  socialButton2SocialPlatform = "Linkedin",
  socialButton3IconSize = "2x2",

  socialButton3SocialButtonLink = {
    href: "https://www.facebook.com/hello.revrebel",
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
}) {
  const _styleVariantMap = {
    Light: "",
    "Outline Light": "w-variant-83337a99-7fb8-e979-a03e-95adf6792ae7",
    Dark: "w-variant-97930807-4174-107c-43f3-2487628be942",
    "Outline Dark": "w-variant-3a508b3f-aa45-edbc-45d5-d5cdf4b847a2",
  };

  const _activeStyleVariant = _styleVariantMap[settingsBackgroundColorVariant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsFooterVisibility ? (
        <Section
          className={`rebel-style--footer-wrapper ${_activeStyleVariant}`}
          grid={{
            type: "section",
          }}
          id={settingsFooterId}
          tag={"section"}
        >
          <BlockContainer
            className={`rebel-style--footer_container ${_activeStyleVariant}`}
            grid={{
              type: "container",
            }}
            tag={"div"}
          >
            <Block
              className={`rebel-style--footer_padding ${_activeStyleVariant}`}
              tag={"div"}
            >
              <HtmlEmbed
                content={""}
                value={
                  "%3Cstyle%3E%0A%40media%20screen%20and%20(max-width%3A%201132px)%20%7B%0A%20%20.footer_contact-wrapper.margin_left-auto%20%7B%0A%20%20%20%20flex-flow%3A%20column%3B%0A%20%20%20%20margin-left%3A%20unset%3B%0A%20%20%20%20width%3A%20100%25%0A%20%20%7D%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%20%20.footer_contact-wrapper.margin_left-auto%20%7B%0A%20%20%20%20flex-flow%3A%20column%3B%0A%20%20%20%20width%3A%20100%25%0A%20%20%7D%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20.footer_contact-wrapper.margin_left-auto%20%7B%0A%20%20%20%20flex-flow%3A%20row%3B%0A%20%20%7D%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20479px)%20%7B%0A%20%20.footer_contact-wrapper.margin_left-auto%20%7B%0A%20%20%20%20flex-flow%3A%20column%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E"
                }
              />
              <Block
                className={`rebel-style--footer rebel-style--component_color ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={` rebel-style--footer-wrapper-inner ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`rebel-style--footer_top-wrapper ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`rebel-style--footer_left-wrapper ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={` rebel-style--brand-logo ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <Image
                          className={` rebel-style--logo-wide ${_activeStyleVariant}`}
                          height={"Auto"}
                          loading={"lazy"}
                          src={brandBrandLogo}
                          width={"250"}
                        />
                        {brandBrandTaglineVisibility ? (
                          <Paragraph
                            className={`rebel-style--footer_paragraph ${_activeStyleVariant}`}
                          >
                            {brandBrandTaglineText}
                          </Paragraph>
                        ) : null}
                      </Block>
                      <Block
                        className={`rebel-style--footer_actions ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <Block
                          className={`rebel-style--footer_form-wrapper ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <FormWrapper
                            className={`rebel-style--blog-signup_form-block ${_activeStyleVariant}`}
                          >
                            <Block
                              className={`rebel-style--footer_item-headline ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              {newsletterNewsletterSignupText}
                            </Block>
                            <FormForm
                              className={`rebel-style--blog-signup_form rebel-style--flex_horizontal ${_activeStyleVariant}`}
                              data-name={"Email Form"}
                              id={"email-form"}
                              method={"get"}
                              name={"email-form"}
                            >
                              <FormTextInput
                                autoComplete={"email"}
                                autoFocus={false}
                                className={`rebel-style--form_input rebel-style--is-footer ${_activeStyleVariant}`}
                                data-name={"Email"}
                                disabled={false}
                                id={"Email-Address"}
                                maxLength={256}
                                name={"Email"}
                                placeholder={"Email Address"}
                                required={true}
                                type={"email"}
                                user-input={"email"}
                                wized={"input_email"}
                              />
                              <Block
                                className={`rebel-style--button-wrapper rebel-style--is-footer ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                <FormButton
                                  className={`rebel-style--button rebel-style--is-btn-color-2 rebel-style--is-btn-sm rebel-style--is-footer ${_activeStyleVariant}`}
                                  data-wait={"Please wait..."}
                                  type={"submit"}
                                  value={"[ Subscribe ]"}
                                />
                              </Block>
                            </FormForm>
                            <FormSuccessMessage
                              className={`rebel-style--success-message_operator rebel-style--bg-color-blue-offset ${_activeStyleVariant}`}
                            >
                              <Block
                                className={`rebel-style--success-message_text rebel-style--text-color-primary rebel-style--text-size-sm ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                {
                                  "Welcome, Operator. You’ve just subscribed to the most profitable backchannel in hospitality."
                                }
                              </Block>
                            </FormSuccessMessage>
                            <FormErrorMessage
                              className={`rebel-style--error-message_mission-control ${_activeStyleVariant}`}
                            >
                              <Block
                                className={`rebel-style--error-message_text ${_activeStyleVariant}`}
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
                          className={`rebel-style--item-wrapper ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Block
                            className={`rebel-style--paragraph_sm rebel-style--flex-vertical rebel-style--footer-privacy-policy ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            {newsletterPrivacyPolicy1Visibility ? (
                              <Block
                                className={` rebel-style--text-size-sm rebel-style--is-lowercase rebel-style--line-height_1x ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                {newsletterPrivacyPolicy1Text}
                              </Block>
                            ) : null}
                            {newsletterPrivacyPolicyLinkVisibility ? (
                              <Link
                                block={"inline"}
                                button={false}
                                className={`rebel-style--label rebel-style--text-color-2 rebel-style--footer-privacy-policy ${_activeStyleVariant}`}
                                options={newsletterPrivacyPolicyLink}
                              >
                                {"Privacy Policy"}
                              </Link>
                            ) : null}
                            {newsletterPrivacyPolicy2Visibility ? (
                              <Block
                                className={` rebel-style--text-size-sm rebel-style--is-lowercase rebel-style--line-height_1x ${_activeStyleVariant}`}
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
                      className={`rebel-style--footer_links ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`rebel-style--footer_contact-wrapper rebel-style--margin_left-auto ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <Block
                          className={`rebel-style--footer-column rebel-style--max-width_175px rebel-style--min-width_175px ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Block
                            className={`rebel-style--space_xs ${_activeStyleVariant}`}
                            tag={"div"}
                          />
                          {contactContactHeadlineVisibility ? (
                            <Block
                              className={`rebel-style--footer_item-headline ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              {contactContactHeadlineText}
                            </Block>
                          ) : null}
                          <Block
                            className={` rebel-style--contact_grid_3-rows ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Link
                              block={"inline"}
                              button={false}
                              className={`rebel-style--footer_link-wrapper ${_activeStyleVariant}`}
                              options={contactPhoneNumberLink}
                            >
                              {contactPhoneNumberVisibility ? (
                                <Block
                                  className={`rebel-style--footer_link-item rebel-style--label ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {"[P] "}
                                </Block>
                              ) : null}
                              {contactPhoneNumberVisibility ? (
                                <Block
                                  className={`rebel-style--footer_link-item rebel-style--padding-bottom_3px ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {contactPhoneNumberText}
                                </Block>
                              ) : null}
                            </Link>
                            <Link
                              block={"inline"}
                              button={false}
                              className={` rebel-style--footer_link-wrapper ${_activeStyleVariant}`}
                              options={contactEmailAddressLink}
                            >
                              {contactEmailAddressVisibility ? (
                                <Block
                                  className={`rebel-style--footer_link-item rebel-style--label ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {"[E] "}
                                </Block>
                              ) : null}
                              {contactEmailAddressVisibility ? (
                                <Block
                                  className={`rebel-style--footer_link-item rebel-style--padding-bottom_3px ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {contactEmailAddressText}
                                </Block>
                              ) : null}
                            </Link>
                            <Link
                              block={"inline"}
                              button={false}
                              className={` rebel-style--footer_link-wrapper ${_activeStyleVariant}`}
                              options={contactWebsiteAddressLink}
                            >
                              {contactWebsiteAddressVisibility ? (
                                <Block
                                  className={`rebel-style--footer_link-item rebel-style--label ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {"[W] "}
                                </Block>
                              ) : null}
                              {contactWebsiteAddressVisibility ? (
                                <Block
                                  className={`rebel-style--footer_link-item rebel-style--padding-bottom_3px ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {contactWebsiteAddressText}
                                </Block>
                              ) : null}
                            </Link>
                          </Block>
                        </Block>
                        <Block
                          className={` rebel-style--footer-column rebel-style--max-width_175px rebel-style--min-width_175px rebel-style--margin-right_auto ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Block
                            className={`rebel-style--space_xs ${_activeStyleVariant}`}
                            tag={"div"}
                          />
                          {addressAddressHeadlineVisibility ? (
                            <Block
                              className={` rebel-style--footer_item-headline ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              {addressAddressHeadlineText}
                            </Block>
                          ) : null}
                          <Link
                            block={"inline"}
                            button={false}
                            options={addressAddressLink}
                          >
                            <Block
                              className={` rebel-style--contact_grid_3-rows ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              <Block
                                className={` rebel-style--footer_link-wrapper ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                {addressAddressLine1Visibility ? (
                                  <Block
                                    className={`rebel-style--footer_link-item ${_activeStyleVariant}`}
                                    tag={"div"}
                                  >
                                    {addressAddressLine1Text}
                                  </Block>
                                ) : null}
                              </Block>
                              {addressAddressLine2Visibility ? (
                                <Block
                                  className={` rebel-style--footer_link-wrapper ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  <Block
                                    className={`rebel-style--footer_link-item ${_activeStyleVariant}`}
                                    tag={"div"}
                                  >
                                    {addressAddressLine2Text}
                                  </Block>
                                </Block>
                              ) : null}
                              {addressCityStateZipVisibility ? (
                                <Block
                                  className={` rebel-style--footer_link-wrapper ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  <Block
                                    className={`rebel-style--footer_link-item ${_activeStyleVariant}`}
                                    tag={"div"}
                                  >
                                    {addressCityStateZipText}
                                  </Block>
                                </Block>
                              ) : null}
                            </Block>
                          </Link>
                        </Block>
                      </Block>
                      <Block
                        className={`rebel-style--footer-column rebel-style--margin-left_auto rebel-style--social-column ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <Block
                          className={`rebel-style--space_xs rebel-style--is-mobile-x3 ${_activeStyleVariant}`}
                          tag={"div"}
                        />
                        {socialsSocialsHeadlineVisibility ? (
                          <Block
                            className={` rebel-style--footer_item-headline rebel-style--text-align-right ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            {socialsSocialsHeadlineText}
                          </Block>
                        ) : null}
                        <Block
                          className={` rebel-style--socials_vertical ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Block
                            className={`rebel-style--space_xs ${_activeStyleVariant}`}
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
                            socialButtonIconSettingsSocialButtonId={
                              socialButton2SocialButtonIconSettingsSocialButtonId
                            }
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
                    className={`rebel-style--credits ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={` rebel-style--credits-wrapper ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`rebel-style--copyright-text ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {copyrightCopyrightText}
                      </Block>
                      <Block
                        className={`rebel-style--footer-links ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {policyLinksPrivacyPolicyLinkVisibility ? (
                          <Link
                            block={"inline"}
                            button={false}
                            className={`rebel-style--policy-link-block ${_activeStyleVariant}`}
                            options={policyLinksPrivacyPolicyLink}
                          >
                            <Block
                              className={`rebel-style--policy-link-block ${_activeStyleVariant}`}
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
                            className={`rebel-style--policy-link-block ${_activeStyleVariant}`}
                            options={policyLinksTermsOfServiceLink}
                          >
                            <Block
                              className={` rebel-style--policy-link-block ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              {policyLinksTermsOfServiceLinkText}
                            </Block>
                          </Link>
                        ) : null}
                        <Link
                          block={"inline"}
                          button={false}
                          className={`rebel-style--policy-link-block ${_activeStyleVariant}`}
                          options={policyLinksCookiesSettingsLink}
                        >
                          {policyLinksCookiesSettingsVisibility ? (
                            <Block
                              className={` rebel-style--policy-link-block ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              {policyLinksCookiesSettingsText}
                            </Block>
                          ) : null}
                        </Link>
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
