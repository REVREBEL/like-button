"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../../devlinkScope";
import Block from "../../webflow_modules/Basic/components/Block";
import Link from "../../webflow_modules/Basic/components/Link";
import { CodeIcon } from "../uiElements/CodeIcon";
import { InnerComponentNavcard } from "../innerComponents/InnerComponentNavcard";
import { VariantsBgFontColorInverse } from "../variants/VariantsBgFontColorInverse";

export function NavcardColor({
  cardCardBackgroundTextColor = "Base",
  cardCardButtonText = "Read the Blog",
  cardCardHeadlineText = "CTRLShift Blog",
  cardCardId = "",
  cardCardImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aae_e9e0ff71a0dc475cb26ba3479471a233_revrebel_the-private-courtyard-transforms-into-a-minimalist__83428.avif",
  cardCardImageAltText = "__wf_reserved_inherit",

  cardCardLink = {
    href: "#",
  },

  cardCardParagraphText = (
    <>
      {
        "Where we share our tips and ideas on generating revenueat your property"
      }
      <br />
    </>
  ),
  cardCardVisibility = true,
  iconIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68ce8bb0c01ec8cccf36c875_ffbe2c29db9c0e8dc0fec9282659af58_generic-outline.svg",
  iconIconAltText = "__wf_reserved_inherit",
  iconIconColor = "Color 3",
  iconIconSize = "Regular",
  iconIconVisibility = true,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {cardCardVisibility ? (
        <Block
          className={"rebel-style--component_navcard-color"}
          id={cardCardId}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={"rebel-style--navcard_link-block"}
            options={cardCardLink}
          >
            <VariantsBgFontColorInverse
              optionsBackgroundTextColor={cardCardBackgroundTextColor}
              slotBgFontColorInverse={
                <InnerComponentNavcard
                  cardCardButtonText={cardCardButtonText}
                  cardCardHeadlineText={cardCardHeadlineText}
                  cardCardImage={cardCardImage}
                  cardCardImageAltText={cardCardImageAltText}
                  cardCardParagraphText={cardCardParagraphText}
                  cardSlotIcon={
                    <CodeIcon
                      icon={iconIcon}
                      iconAltText={iconIconAltText}
                      iconSize={iconIconSize}
                      iconVisibility={iconIconVisibility}
                    />
                  }
                />
              }
            />
          </Link>
        </Block>
      ) : null}
    </div>
  );
}
