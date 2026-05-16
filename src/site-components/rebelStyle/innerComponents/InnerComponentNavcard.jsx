"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../../devlinkScope";
import Block from "../../webflow_modules/Basic/components/Block";
import Heading from "../../webflow_modules/Basic/components/Heading";
import Image from "../../webflow_modules/Basic/components/Image";

export function InnerComponentNavcard({
  cardCardButtonText = "Read the Blog",
  cardCardHeadlineText = "CTRLShift Blog",
  cardCardImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aae_e9e0ff71a0dc475cb26ba3479471a233_revrebel_the-private-courtyard-transforms-into-a-minimalist__83428.avif",
  cardCardImageAltText = "__wf_reserved_inherit",
  cardCardParagraphText = (
    <>
      {
        "Where we share our tips and ideas on generating revenueat your property"
      }
      <br />
    </>
  ),
  cardSlotIcon,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={"rebel-style--navcard_wrapper rebel-style--is-color"}
        tag={"div"}
      >
        <Block
          className={"rebel-style--navcard_right-content rebel-style--is-color"}
          tag={"div"}
        >
          <Block className={"rebel-style--navcard_top-content"} tag={"div"}>
            {cardSlotIcon}
            <Heading className={"rebel-style--navcard_headline"} tag={"h3"}>
              {cardCardHeadlineText}
            </Heading>
          </Block>
          <Block className={"rebel-style--navcard_middle-content"} tag={"div"}>
            <Block className={"rebel-style--navcard_paragraph"} tag={"div"}>
              {cardCardParagraphText}
            </Block>
          </Block>
          <Block className={"rebel-style--navcard_bottom-content"} tag={"div"}>
            <Block className={"rebel-style--navcard_tag-link"} tag={"div"}>
              {cardCardButtonText}
            </Block>
          </Block>
        </Block>
        <Block
          className={"rebel-style--navcard_left-content rebel-style--is-color"}
          tag={"div"}
        >
          <Image
            className={"rebel-style--navcard_image"}
            height={"auto"}
            loading={"lazy"}
            src={cardCardImage}
            width={"auto"}
          />
        </Block>
      </Block>
    </div>
  );
}
