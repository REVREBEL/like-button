"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import { VariantsResponsiveHeadline } from "../variants/VariantsResponsiveHeadline";

export function ResponsiveHeadline({
  hashtagsHashtagsVisibility = true,
  hashtagsHashtagText = (
    <>
      {"#Suspendisse #varius #enim"}
      <br />
    </>
  ),
  headlineAlignment = "Left",
  headlineHeadlineTag = "h1",
  headlineHeadlineText = (
    <>
      {"Synchronize. Optimize."}
      <br />
      {"Outperform. Repeat."}
    </>
  ),
  headlineResponsiveTextSizeVariants = "Base",
  settingsSectionId = "",
  settingsSectionVisibility = true,
  subHeadlineSubHeadlineText = (
    <>
      {
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. "
      }
      <br />
    </>
  ),
  subHeadlineSubHeadlineVisibility = true,
}) {
  const _styleVariantMap = {
    Left: "",
    Center: "w-variant-3ba89054-c511-7657-448b-c21eccdd7477",
    Right: "w-variant-3ba89054-c511-7657-448b-c21eccdd7478",
  };

  const _activeStyleVariant = _styleVariantMap[headlineAlignment];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsSectionVisibility ? (
        <BlockContainer
          className={`component_responsive-headline is-full-width max-width_none ${_activeStyleVariant}`}
          grid={{
            type: "container",
          }}
          id={settingsSectionId}
          tag={"div"}
        >
          <Block
            className={`headline-responsive_align-2 ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`headline-responsive_wrapper-2 ${_activeStyleVariant}`}
              tag={"div"}
            >
              <VariantsResponsiveHeadline
                headlineTag={headlineHeadlineTag}
                headlineText={headlineHeadlineText}
                settingsResponsiveTextSizeVariants={
                  headlineResponsiveTextSizeVariants
                }
              />
              {subHeadlineSubHeadlineVisibility ? (
                <Paragraph
                  className={`subheadline-base-2 is-text-wrap-balance ${_activeStyleVariant}`}
                >
                  {subHeadlineSubHeadlineText}
                </Paragraph>
              ) : null}
              {hashtagsHashtagsVisibility ? (
                <Paragraph
                  className={`subheadline-base-2 is-hashtag ${_activeStyleVariant}`}
                >
                  {hashtagsHashtagText}
                </Paragraph>
              ) : null}
            </Block>
          </Block>
        </BlockContainer>
      ) : null}
    </div>
  );
}
