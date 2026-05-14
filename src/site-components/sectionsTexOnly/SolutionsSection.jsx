"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";

export function SolutionsSection({
  item1DescriptionText = "Easy, Flexible Short Term Support in a Specific Area.",
  item1Headline = "Drop-in Specialists",
  item1HeadlineTag = "h3",
  item1Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/6995aab239d84cd63ab25e01_6893a4440a25599917e86e40258e04cc_arrow-right.svg",
  item1IconAltText = "__wf_reserved_inherit",

  item1Link = {
    href: "#",
  },

  item2DescriptionText = "Full Agency Firepower, a Dedicated Team Backed With our Integrated Platforms",
  item2Headline = "Full Cast & Crew",
  item2HeadlineTag = "h3",
  item2Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/6995aab239d84cd63ab25e01_6893a4440a25599917e86e40258e04cc_arrow-right.svg",
  item2IconAltText = "__wf_reserved_inherit",

  item2Link = {
    href: "#",
  },

  item3DescriptionText = "We can Lead, Plan and Bring Dedicated Projects to the Finish Line.",
  item3Headline = "PROJECT CLOSERS",
  item3HeadlineTag = "h3",
  item3Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/6995aab239d84cd63ab25e01_6893a4440a25599917e86e40258e04cc_arrow-right.svg",
  item3IconAltText = "__wf_reserved_inherit",
  item4DescriptionText = "Uncover Untapped Revenue With a Focused Deep Dive.",
  item4Headline = "REVENUE REWRITERS",
  item4HeadlineTag = "h3",
  item4Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/6995aab239d84cd63ab25e01_6893a4440a25599917e86e40258e04cc_arrow-right.svg",
  item4IconAltText = "__wf_reserved_inherit",

  item4Link = {
    href: "#",
  },

  mainSectionHeadlineText = (
    <>
      {"Mavericks "}
      <br />
      {"for Hire."}
    </>
  ),
  mainSectionHeadlineTextTag = "h2",
  mainSectionParagraphText = "From project management to a comprehensive analysis of your strategy, we offer services that deliver impactful results. No matter the size of your hotel or the complexity of your challenge, if you’re looking for smarter ways to optimize, grow, or simply breathe easier, we’ve got your back.",
  mainSectionSubHeadlineText = "4-ways we can help",
  variant = "Light",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-442772ac-6c2a-d9f4-b41d-df1820df3ccf",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <BlockContainer
        className={`component_container-24 max-width_sm-3 text-color_primary-3 ${_activeStyleVariant}`}
        grid={{
          type: "container",
        }}
        id={"mavericks-for-hire"}
        tag={"div"}
      >
        <BlockContainer
          className={`component_wrapper-24 ${_activeStyleVariant}`}
          grid={{
            type: "container",
          }}
          tag={"div"}
        >
          <Block
            className={`component_padding-24 ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`solutions_wrapper-2 ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`solutions_main_headline-2 ${_activeStyleVariant}`}
                id={"w-node-bd2ca63d-d4c3-8496-fe41-00b9e1876528-e1876524"}
                tag={"div"}
              >
                <Block
                  className={`headline-wrapper-4 ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`eyebrow-11 text-size-sm-4 text-color-2-3 font-weight-regular-3 ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {"You have a mission. We have the talent. "}
                  </Block>
                  <Heading
                    className={`headline-md-9 font-weight-bold-15 ${_activeStyleVariant}`}
                    tag={mainSectionHeadlineTextTag}
                  >
                    {mainSectionHeadlineText}
                  </Heading>
                </Block>
                <Block
                  className={`headline-sm-15 text-color-bright-blue font-weight-semibold-4 ${_activeStyleVariant}`}
                  id={"w-node-bd2ca63d-d4c3-8496-fe41-00b9e187652d-e1876524"}
                  tag={"div"}
                >
                  {mainSectionSubHeadlineText}
                </Block>
                <Paragraph className={`paragraph-15 ${_activeStyleVariant}`}>
                  {mainSectionParagraphText}
                </Paragraph>
              </Block>
              <Block
                className={`solutions_right-wrapper-2 ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`solutions_grid-3 ${_activeStyleVariant}`}
                  id={"w-node-bd2ca63d-d4c3-8496-fe41-00b9e1876530-e1876524"}
                  tag={"div"}
                >
                  <Block
                    className={`solutions_number-2 ${_activeStyleVariant}`}
                    id={"w-node-bd2ca63d-d4c3-8496-fe41-00b9e1876531-e1876524"}
                    tag={"div"}
                  >
                    <Block
                      className={`solutions_number-2 ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      {"01|"}
                    </Block>
                  </Block>
                  <Block
                    className={`solutions_flex-wrapper-2 ${_activeStyleVariant}`}
                    id={"w-node-bd2ca63d-d4c3-8496-fe41-00b9e1876534-e1876524"}
                    tag={"div"}
                  >
                    <Block
                      className={`solutions-headline-2 ${_activeStyleVariant}`}
                      id={
                        "w-node-bd2ca63d-d4c3-8496-fe41-00b9e1876535-e1876524"
                      }
                      tag={"div"}
                    >
                      <Heading
                        className={`headline-sm-15 margin-bottom_none-6 scroll-in-view_fade-in-3 ${_activeStyleVariant}`}
                        tag={item1HeadlineTag}
                      >
                        {item1Headline}
                      </Heading>
                      <Block
                        className={`solutions_subheadline-2 text-color-blue ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {item1DescriptionText}
                      </Block>
                    </Block>
                    <Link
                      block={"inline"}
                      button={false}
                      className={`solutions_arrow-link ${_activeStyleVariant}`}
                      id={
                        "w-node-bd2ca63d-d4c3-8496-fe41-00b9e1876538-e1876524"
                      }
                      options={item1Link}
                    >
                      <Block
                        className={`solutions_arrow-2 ${_activeStyleVariant}`}
                        id={
                          "w-node-bd2ca63d-d4c3-8496-fe41-00b9e1876539-e1876524"
                        }
                        tag={"div"}
                      >
                        <Image
                          className={`solutions_arrow_icon-2 ${_activeStyleVariant}`}
                          height={"Auto"}
                          loading={"lazy"}
                          src={item1Icon}
                          width={"Auto"}
                        />
                      </Block>
                    </Link>
                  </Block>
                </Block>
                <Block
                  className={`solutions_grid-3 ${_activeStyleVariant}`}
                  id={"w-node-bd2ca63d-d4c3-8496-fe41-00b9e187653b-e1876524"}
                  tag={"div"}
                >
                  <Block
                    className={`solutions_number-2 ${_activeStyleVariant}`}
                    id={"w-node-bd2ca63d-d4c3-8496-fe41-00b9e187653c-e1876524"}
                    tag={"div"}
                  >
                    <Block
                      className={`solutions_number-2 ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      {"02|"}
                    </Block>
                  </Block>
                  <Block
                    className={`solutions_flex-wrapper-2 ${_activeStyleVariant}`}
                    id={"w-node-bd2ca63d-d4c3-8496-fe41-00b9e187653f-e1876524"}
                    tag={"div"}
                  >
                    <Block
                      className={`solutions-headline-2 ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Heading
                        className={`headline-sm-15 margin-bottom_none-6 scroll-in-view_fade-in-3 ${_activeStyleVariant}`}
                        tag={item3HeadlineTag}
                      >
                        {item3Headline}
                      </Heading>
                      <Block
                        className={`solutions_subheadline-2 ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {item3DescriptionText}
                      </Block>
                    </Block>
                    <Link
                      block={"inline"}
                      button={false}
                      className={`solutions_arrow-link ${_activeStyleVariant}`}
                      id={
                        "w-node-bd2ca63d-d4c3-8496-fe41-00b9e1876543-e1876524"
                      }
                      options={item2Link}
                    >
                      <Block
                        className={`solutions_arrow-2 ${_activeStyleVariant}`}
                        id={
                          "w-node-bd2ca63d-d4c3-8496-fe41-00b9e1876544-e1876524"
                        }
                        tag={"div"}
                      >
                        <Image
                          className={`solutions_arrow_icon-2 ${_activeStyleVariant}`}
                          height={"Auto"}
                          loading={"lazy"}
                          src={item3Icon}
                          width={"Auto"}
                        />
                      </Block>
                    </Link>
                  </Block>
                </Block>
                <Block
                  className={`solutions_grid-3 ${_activeStyleVariant}`}
                  id={"w-node-bd2ca63d-d4c3-8496-fe41-00b9e1876546-e1876524"}
                  tag={"div"}
                >
                  <Block
                    className={`solutions_number-2 ${_activeStyleVariant}`}
                    id={"w-node-bd2ca63d-d4c3-8496-fe41-00b9e1876547-e1876524"}
                    tag={"div"}
                  >
                    <Block
                      className={`solutions_number-2 ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      {"03|"}
                    </Block>
                  </Block>
                  <Block
                    className={`solutions_flex-wrapper-2 ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`solutions-headline-2 ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Heading
                        className={`headline-sm-15 margin-bottom_none-6 scroll-in-view_fade-in-3 ${_activeStyleVariant}`}
                        tag={item4HeadlineTag}
                      >
                        {item4Headline}
                      </Heading>
                      <Block
                        className={`solutions_subheadline-2 ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {item4DescriptionText}
                      </Block>
                    </Block>
                    <Link
                      block={"inline"}
                      button={false}
                      className={`solutions_arrow-link ${_activeStyleVariant}`}
                      id={
                        "w-node-bd2ca63d-d4c3-8496-fe41-00b9e187654e-e1876524"
                      }
                      options={{
                        href: "#",
                      }}
                    >
                      <Block
                        className={`solutions_arrow-2 ${_activeStyleVariant}`}
                        id={
                          "w-node-bd2ca63d-d4c3-8496-fe41-00b9e187654f-e1876524"
                        }
                        tag={"div"}
                      >
                        <Image
                          className={`solutions_arrow_icon-2 ${_activeStyleVariant}`}
                          height={"Auto"}
                          loading={"lazy"}
                          src={item4Icon}
                          width={"Auto"}
                        />
                      </Block>
                    </Link>
                  </Block>
                </Block>
                <Block
                  className={`solutions_grid-3 ${_activeStyleVariant}`}
                  id={"w-node-bd2ca63d-d4c3-8496-fe41-00b9e1876551-e1876524"}
                  tag={"div"}
                >
                  <Block
                    className={`solutions_number-2 ${_activeStyleVariant}`}
                    id={"w-node-bd2ca63d-d4c3-8496-fe41-00b9e1876552-e1876524"}
                    tag={"div"}
                  >
                    <Block
                      className={`solutions_number-2 ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      {"02|"}
                    </Block>
                  </Block>
                  <Block
                    className={`solutions_flex-wrapper-2 ${_activeStyleVariant}`}
                    id={"w-node-bd2ca63d-d4c3-8496-fe41-00b9e1876555-e1876524"}
                    tag={"div"}
                  >
                    <Block
                      className={`solutions-headline-2 ${_activeStyleVariant}`}
                      id={
                        "w-node-bd2ca63d-d4c3-8496-fe41-00b9e1876556-e1876524"
                      }
                      tag={"div"}
                    >
                      <Heading
                        className={`headline-sm-15 margin-bottom_none-6 scroll-in-view_fade-in-3 ${_activeStyleVariant}`}
                        tag={item2HeadlineTag}
                      >
                        {item2Headline}
                      </Heading>
                      <Block
                        className={`solutions_subheadline-2 ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {item2DescriptionText}
                      </Block>
                    </Block>
                    <Link
                      block={"inline"}
                      button={false}
                      className={`solutions_arrow-link ${_activeStyleVariant}`}
                      id={
                        "w-node-bd2ca63d-d4c3-8496-fe41-00b9e1876559-e1876524"
                      }
                      options={item4Link}
                    >
                      <Block
                        className={`solutions_arrow-2 ${_activeStyleVariant}`}
                        id={
                          "w-node-bd2ca63d-d4c3-8496-fe41-00b9e187655a-e1876524"
                        }
                        tag={"div"}
                      >
                        <Image
                          className={`solutions_arrow_icon-2 ${_activeStyleVariant}`}
                          height={"Auto"}
                          loading={"lazy"}
                          src={item2Icon}
                          width={"Auto"}
                        />
                      </Block>
                    </Link>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </BlockContainer>
      </BlockContainer>
    </div>
  );
}
