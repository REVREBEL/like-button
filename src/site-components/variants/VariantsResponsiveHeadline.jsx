"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";

export function VariantsResponsiveHeadline({
  headlineTag = "h1",
  headlineText = (
    <>
      {"Synchronize. Optimize. "}
      <br />
      {"Outperform. Repeat."}
    </>
  ),
  settingsResponsiveTextSizeVariants = "Base",
}) {
  const _styleVariantMap = {
    "Headline +6": "w-variant-19d0965c-76c7-0171-6c73-2cfa86c7832d",
    "Headline +5": "w-variant-19d0965c-76c7-0171-6c73-2cfa86c7832e",
    "Headline +4": "w-variant-19d0965c-76c7-0171-6c73-2cfa86c7832f",
    "Headline +3": "w-variant-19d0965c-76c7-0171-6c73-2cfa86c78330",
    "Headline +2": "w-variant-19d0965c-76c7-0171-6c73-2cfa86c78331",
    "Headline +1": "w-variant-19d0965c-76c7-0171-6c73-2cfa86c78332",
    Base: "",
    "Headline -1": "w-variant-19d0965c-76c7-0171-6c73-2cfa86c78333",
    "Headline -2": "w-variant-19d0965c-76c7-0171-6c73-2cfa86c78334",
    "Headline -3": "w-variant-19d0965c-76c7-0171-6c73-2cfa86c78335",
    "Headline -4": "w-variant-19d0965c-76c7-0171-6c73-2cfa86c78336",
  };

  const _activeStyleVariant =
    _styleVariantMap[settingsResponsiveTextSizeVariants];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`headline-responsive_align-3 ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block
          className={`variants_responsive-headline ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Heading
            className={`headline-responsive_size-2 ${_activeStyleVariant}`}
            tag={headlineTag}
          >
            {headlineText}
          </Heading>
        </Block>
      </Block>
    </div>
  );
}
