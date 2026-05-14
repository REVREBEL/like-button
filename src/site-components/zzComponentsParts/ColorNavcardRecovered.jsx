"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";

export function ColorNavcardRecovered({
  colorCard1HeadlineTag = "h3",
  colorCard1HeadlineText = "CTRLShift Blog",
  colorCard1Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3a9f_726a15c1e835325a1ae274a424187e88_get-quote.svg",
  colorCard1IconAltText = "__wf_reserved_inherit",
  colorCard1Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aae_e9e0ff71a0dc475cb26ba3479471a233_revrebel_the-private-courtyard-transforms-into-a-minimalist__83428.avif",
  colorCard1ImageAltText = "__wf_reserved_inherit",

  colorCard1Link = {
    href: "#",
  },

  colorCard1LinkText = "read more",
  colorCard1Paragraph = (
    <>
      {
        "Where we share our tips and ideas on generating revenueat your property."
      }
      <br />
    </>
  ),
  colorCard2HeadlineTag = "h3",
  colorCard2HeadlineText = "Travel Trends",
  colorCard2Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa0_d542d97d71213306b087706fc9f5ef01_plane.svg",
  colorCard2IconAltText = "__wf_reserved_inherit",
  colorCard2Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aac_c03a47b0e3a13518e259481a39ec9be3_f8c4eb24-5293-46bd-b73f-5950bcef20b0.avif",
  colorCard2ImageAltText = "__wf_reserved_inherit",

  colorCard2Link = {
    href: "#",
  },

  colorCard2LinkText = "Explore Trends",
  colorCard2Paragraph = (
    <>
      {"A collection of trends from the largest travel sites and researchers."}
      <br />
    </>
  ),
  colorCard3HeadlineTag = "h3",
  colorCard3HeadlineText = "Revenue Toolkits",
  colorCard3Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68dee5a4cce74fcb4158c1ab_12ed20033a39e931c05a9bc9a0ea3244_gear.svg",
  colorCard3IconAltText = "__wf_reserved_inherit",
  colorCard3Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa7_b5d5569650edf9c998f5a0f5712d1c2f_revrebel_a-stylish-bartender-wearing-a-dark-canvas-apron-wi__94603.avif",
  colorCard3ImageAltText = "__wf_reserved_inherit",

  colorCard3Link = {
    href: "#",
  },

  colorCard3LinkText = "Tap + Discover",
  colorCard3Paragraph = "Packed with strategies and resources to help increase revenue.",
  colorCard4HeadlineTag = "h3",
  colorCard4HeadlineText = "Client Hub",
  colorCard4Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3aa1_13f6256409a2a7a3236ad3d688e95c99_labtop-with-cursor.svg",
  colorCard4IconAltText = "__wf_reserved_inherit",
  colorCard4Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/697ffd0a456ed08e7215031a_e3e49faf91fdbe89bf3b17a7d2f65b34_revrebel_edit_a-medium-shot-captures-a-30yearold-white-man-in-be__83443.jpg",
  colorCard4ImageAltText = "__wf_reserved_inherit",

  colorCard4Link = {
    href: "#",
  },

  colorCard4LinkText = "Get Briefed",
  colorCard4Paragraph = "Real-time metrics + a full view of our current engagement or project.",
  optionsColorCardColor = "Light",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-f10e89f3-da74-c230-1881-c48979e55aa3",
  };

  const _activeStyleVariant = _styleVariantMap[optionsColorCardColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`navcard_dropdown-container-3 ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block
          className={`navcard-wrapper-3 ${_activeStyleVariant}`}
          id={"w-node-b2c12583-2245-4b6c-5a38-9851b954e950-b954e94f"}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={`color-navcard-2 is-border-width_3px ${_activeStyleVariant}`}
            options={colorCard1Link}
          >
            <Block
              className={`color-navcard_right-content-2 ${_activeStyleVariant}`}
              id={"w-node-b2c12583-2245-4b6c-5a38-9851b954e952-b954e94f"}
              tag={"div"}
            >
              <Block
                className={`navcard_headline-wrapper-2 ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`navcard_icon-2 ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    className={`icon_3x3-5 is-icon-color-4 ${_activeStyleVariant}`}
                    height={"auto"}
                    loading={"lazy"}
                    src={colorCard1Icon}
                    width={"auto"}
                  />
                </Block>
                <Heading
                  className={`navcard_headline-2 dropdown-2_max-width ${_activeStyleVariant}`}
                  tag={colorCard1HeadlineTag}
                >
                  {colorCard1HeadlineText}
                </Heading>
              </Block>
              <Block
                className={`navcard_paragraph-2 ${_activeStyleVariant}`}
                tag={"div"}
              >
                {colorCard1Paragraph}
              </Block>
              <Block
                className={`navcard_tag-link-2 ${_activeStyleVariant}`}
                tag={"div"}
              >
                {colorCard1LinkText}
              </Block>
            </Block>
            <Block
              className={`color-navcard_left-content-2 ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Image
                className={`navcard_image-2 ${_activeStyleVariant}`}
                height={"auto"}
                loading={"lazy"}
                src={colorCard1Image}
                width={"auto"}
              />
            </Block>
          </Link>
        </Block>
        <Block
          className={`navcard-wrapper-3 ${_activeStyleVariant}`}
          id={"w-node-b2c12583-2245-4b6c-5a38-9851b954e95b-b954e94f"}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={`color-navcard-2 is-color-2 is-border-width_3px ${_activeStyleVariant}`}
            options={colorCard2Link}
          >
            <Block
              className={`color-navcard_right-content-2 is-inverse_color-2 ${_activeStyleVariant}`}
              id={"w-node-b2c12583-2245-4b6c-5a38-9851b954e95d-b954e94f"}
              tag={"div"}
            >
              <Block
                className={`navcard_headline-wrapper-2 ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`navcard_icon-2 ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    className={`icon_3x3-5 is-icon-color-5 ${_activeStyleVariant}`}
                    height={"auto"}
                    loading={"lazy"}
                    src={colorCard2Icon}
                    width={"auto"}
                  />
                </Block>
                <Heading
                  className={`navcard_headline-2 dropdown-2_max-width ${_activeStyleVariant}`}
                  tag={colorCard2HeadlineTag}
                >
                  {colorCard2HeadlineText}
                </Heading>
              </Block>
              <Block
                className={`navcard_paragraph-2 ${_activeStyleVariant}`}
                tag={"div"}
              >
                {colorCard2Paragraph}
              </Block>
              <Block
                className={`navcard_tag-link-2 ${_activeStyleVariant}`}
                tag={"div"}
              >
                {colorCard2LinkText}
              </Block>
            </Block>
            <Block
              className={`color-navcard_left-content-2 ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Image
                className={`navcard_image-2 ${_activeStyleVariant}`}
                height={"auto"}
                loading={"lazy"}
                src={colorCard2Image}
                width={"auto"}
              />
            </Block>
          </Link>
        </Block>
        <Block
          className={`navcard-wrapper-3 ${_activeStyleVariant}`}
          id={"w-node-b2c12583-2245-4b6c-5a38-9851b954e966-b954e94f"}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={`color-navcard-2 is-color-5 is-border-width_3px ${_activeStyleVariant}`}
            options={colorCard3Link}
          >
            <Block
              className={`color-navcard_right-content-2 is-inverse-color-5 ${_activeStyleVariant}`}
              id={"w-node-b2c12583-2245-4b6c-5a38-9851b954e968-b954e94f"}
              tag={"div"}
            >
              <Block
                className={`navcard_headline-wrapper-2 ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`navcard_icon-2 ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    className={`icon_3x3-5 is-icon-color-7 ${_activeStyleVariant}`}
                    height={"auto"}
                    loading={"lazy"}
                    src={colorCard3Icon}
                    width={"auto"}
                  />
                </Block>
                <Heading
                  className={`navcard_headline-2 dropdown-2_max-width ${_activeStyleVariant}`}
                  tag={colorCard3HeadlineTag}
                >
                  {colorCard3HeadlineText}
                </Heading>
              </Block>
              <Block
                className={`navcard_paragraph-2 ${_activeStyleVariant}`}
                tag={"div"}
              >
                {colorCard3Paragraph}
              </Block>
              <Block
                className={`navcard_tag-link-2 ${_activeStyleVariant}`}
                tag={"div"}
              >
                {colorCard3LinkText}
              </Block>
            </Block>
            <Block
              className={`color-navcard_left-content-2 ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Image
                className={`navcard_image-2 ${_activeStyleVariant}`}
                height={"auto"}
                loading={"lazy"}
                src={colorCard3Image}
                width={"auto"}
              />
            </Block>
          </Link>
        </Block>
        <Block
          className={`navcard-wrapper-3 ${_activeStyleVariant}`}
          id={"w-node-b2c12583-2245-4b6c-5a38-9851b954e971-b954e94f"}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={`color-navcard-2 is-color-8 is-border-width_3px ${_activeStyleVariant}`}
            options={colorCard4Link}
          >
            <Block
              className={`color-navcard_right-content-2 is-inverse-color-8 ${_activeStyleVariant}`}
              id={"w-node-b2c12583-2245-4b6c-5a38-9851b954e973-b954e94f"}
              tag={"div"}
            >
              <Block
                className={`navcard_headline-wrapper-2 ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`navcard_icon-2 ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    className={`icon_3x3-5 is-icon-color-6 ${_activeStyleVariant}`}
                    height={"auto"}
                    loading={"lazy"}
                    src={colorCard4Icon}
                    width={"auto"}
                  />
                </Block>
                <Heading
                  className={`navcard_headline-2 dropdown-2_max-width ${_activeStyleVariant}`}
                  tag={colorCard4HeadlineTag}
                >
                  {colorCard4HeadlineText}
                </Heading>
              </Block>
              <Block
                className={`navcard_paragraph-2 ${_activeStyleVariant}`}
                tag={"div"}
              >
                {colorCard4Paragraph}
              </Block>
              <Block
                className={`navcard_tag-link-2 ${_activeStyleVariant}`}
                tag={"div"}
              >
                {colorCard4LinkText}
              </Block>
            </Block>
            <Block
              className={`color-navcard_left-content-2 ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Image
                className={`navcard_image-2 ${_activeStyleVariant}`}
                height={"auto"}
                loading={"lazy"}
                src={colorCard4Image}
                width={"auto"}
              />
            </Block>
          </Link>
        </Block>
      </Block>
    </div>
  );
}
