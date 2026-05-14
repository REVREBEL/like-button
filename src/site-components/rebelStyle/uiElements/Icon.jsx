"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../../devlinkScope";
import Block from "../../webflow_modules/Basic/components/Block";
import { IconColorFilter } from "./IconColorFilter";
import { VariantsIconSize } from "../variants/VariantsIconSize";

export function Icon({
  icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68f93f98beb76445a1d19ca1_b9e52061468938da827ccf50a1c66d41_rocket.svg",
  iconAltText = "__wf_reserved_inherit",
  iconColor = "Primary",
  iconSizeVariant = "Extra Small",
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
            iconSizeVariant={iconSizeVariant}
            slotIconSize={
              <IconColorFilter
                icon={icon}
                iconAltText={iconAltText}
                iconColor={iconColor}
                iconVisibility={iconVisibility}
              />
            }
          />
        </Block>
      ) : null}
    </div>
  );
}
