"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../../devlinkScope";
import Block from "../../webflow_modules/Basic/components/Block";
import Heading from "../../webflow_modules/Basic/components/Heading";
import Image from "../../webflow_modules/Basic/components/Image";
import Link from "../../webflow_modules/Basic/components/Link";

export function NavcardWhite({
  variant = "Light",
  whiteCardHeadlineTag = "h3",
  whiteCardHeadlineText = "Revenue Strategy",
  whiteCardIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3a9f_726a15c1e835325a1ae274a424187e88_get-quote.svg",
  whiteCardIconAltText = "__wf_reserved_inherit",
  whiteCardIconVisibility = false,

  whiteCardLink = {
    href: "#",
  },

  whiteCardParagraph = "Maximize topline and margin with data-backed strategy",
  whiteCardTagSlot,
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-7cc789b3-ada4-651a-5471-77fcabe8e1a2",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Link
        block={"inline"}
        button={false}
        className={`rebel-style--white-navcard ${_activeStyleVariant}`}
        options={whiteCardLink}
      >
        <Block
          className={`rebel-style--white-navcard_top-content ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`rebel-style--navcard_headline-wrapper ${_activeStyleVariant}`}
            tag={"div"}
          >
            {whiteCardIconVisibility ? (
              <Block
                className={`rebel-style--navcard_icon ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Image
                  className={`rebel-style--icon_3x3 ${_activeStyleVariant}`}
                  height={"auto"}
                  loading={"lazy"}
                  src={whiteCardIcon}
                  width={"auto"}
                />
              </Block>
            ) : null}
            <Heading
              className={`rebel-style--navcard_headline rebel-style--dropdown-1_max-width ${_activeStyleVariant}`}
              tag={whiteCardHeadlineTag}
            >
              {whiteCardHeadlineText}
            </Heading>
          </Block>
        </Block>
        <Block
          className={`rebel-style--white-navcard_bottom-content ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`rebel-style--navcard_paragraph ${_activeStyleVariant}`}
            tag={"div"}
          >
            {whiteCardParagraph}
          </Block>
          {whiteCardTagSlot}
        </Block>
      </Link>
    </div>
  );
}
