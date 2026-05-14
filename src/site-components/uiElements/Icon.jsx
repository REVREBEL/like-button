"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { IconColorFilter } from "../rebelStyle/uiElements/IconColorFilter";
import { VariantsIconSize } from "../rebelStyle/variants/VariantsIconSize";

export function Icon({
  icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68fa0f9c2e5c213941af2442_7ffe101a8bec806f54aec9e0844e5a6e_Arrow-currentColor.svg",
  iconAltText = "__wf_reserved_inherit",
  iconVariantIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68fa0f9c2e5c213941af2442_7ffe101a8bec806f54aec9e0844e5a6e_Arrow-currentColor.svg",
  iconVariantIconAltText = "__wf_reserved_inherit",
  iconVisibility = true,
  variantsIconColorNoCodeIconColor = "Primary",
  variantsIconSizeIconSizeVariant = "Regular",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {iconVisibility ? (
        <Block className={"inner-component_icon"} tag={"div"}>
          <VariantsIconSize
            iconSizeVariant={variantsIconSizeIconSizeVariant}
            slotIconSize={
              <IconColorFilter iconColor={variantsIconColorNoCodeIconColor} />
            }
          />
        </Block>
      ) : null}
    </div>
  );
}
