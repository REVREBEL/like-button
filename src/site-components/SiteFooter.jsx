"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import { Footer } from "./rebelStyle/navFooter/Footer";

export function SiteFooter({}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block tag={"div"}>
        <Footer
          newsletterPrivacyPolicyLink={{
            href: "https://revrebel.webflow.io/policy/privacy",
          }}
          policyLinksCookiesSettingsVisibility={false}
          policyLinksPrivacyPolicyLink={{
            href: "https://revrebel.webflow.io/policy/privacy",
          }}
          policyLinksTermsOfServiceLink={{
            href: "https://revrebel.webflow.io/policy/terms",
          }}
          settingsBackgroundColorVariant={"Light"}
          socialButton2SocialButtonLink={{
            href: "https://www.linkedin.com/company/revrebel",
            target: "_blank",
          }}
          socialButton3SocialButtonLink={{
            href: "https://www.facebook.com/hello.revrebel",
            target: "_blank",
          }}
          socialButton4SocialButtonLink={{
            href: "https://x.com/hello_revrebel",
            target: "_blank",
          }}
          socialButton5SocialButtonLink={{
            href: "https://www.revrebel.io/ctrlshift/rss.xml",
            target: "_blank",
          }}
        />
      </Block>
    </div>
  );
}
