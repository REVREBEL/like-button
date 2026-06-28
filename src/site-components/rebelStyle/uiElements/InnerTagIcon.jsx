"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../../devlinkScope";
import Block from "../../webflow_modules/Basic/components/Block";
import { IconVariant } from "../variant/IconVariant";
import { VariantsIconSize } from "../variants/VariantsIconSize";

export function InnerTagIcon({
  icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68fa0f9c2e5c213941af2442_7ffe101a8bec806f54aec9e0844e5a6e_Arrow-currentColor.svg",
  iconAltText = "__wf_reserved_inherit",
  iconSizeVariants = "Extra Small",
  iconVisibility = true,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {iconVisibility ? (
        <Block className={"rebel-style--inner-component_icon"} tag={"div"}>
          <VariantsIconSize
            iconSizeVariant={iconSizeVariants}
            slotIconSize={<IconVariant icon={icon} iconAltText={iconAltText} />}
          />
        </Block>
      ) : null}
    </div>
  );
}
