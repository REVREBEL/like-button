"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../../devlinkScope";
import Block from "../../webflow_modules/Basic/components/Block";
import { InnerTagIcon } from "../uiElements/InnerTagIcon";
import { VariantsIconColor } from "../variants/VariantsIconColor";

export function TagVariant({
  icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68fa0f9c2e5c213941af2442_7ffe101a8bec806f54aec9e0844e5a6e_Arrow-currentColor.svg",
  iconAltText = "__wf_reserved_inherit",
  iconIconVisibility = true,
  iconSizeVariants = "Extra Small",
  tagTagText = "Mavericks 4 Life",
  variantsIconColorIconColor = "Primary",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"rebel-style--tag-variant_wrapper"} tag={"div"}>
        <Block className={"rebel-style--tag-variant"} tag={"div"}>
          {tagTagText}
        </Block>
        {iconIconVisibility ? (
          <Block className={"rebel-style--tag_icon-spacer"} tag={"div"} />
        ) : null}
        <Block className={"rebel-style--varient_icon-align-adjust"} tag={"div"}>
          <VariantsIconColor
            iconColor={variantsIconColorIconColor}
            slotIconColor={
              <InnerTagIcon
                icon={icon}
                iconAltText={iconAltText}
                iconSizeVariants={iconSizeVariants}
                iconVisibility={iconIconVisibility}
              />
            }
          />
        </Block>
      </Block>
    </div>
  );
}
