"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { Icon } from "../rebelStyle/uiElements/Icon";

export function ComponentLikeIcon({
  iconSizeVariant = "Regular",
  innerIconAltText = "__wf_reserved_inherit",
  innerIconColorVariants = "Color 7",
  innerIconImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/697b6edb647bab90a3f620cd_610b3cb61cb960b5e740df212d21c742_Like%20Inner.png",
  isActive = true,
  mainIconAltText = "__wf_reserved_inherit",
  mainIconColorVariants = "Primary",
  mainIconImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/69bbaf001e6c808db7cc087a_b29fbfdf61255e42d3985da94a4b8d54_heart.svg",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"component_like-icon"} tag={"div"}>
        <Block className={"componet_like-icon-z-index"} tag={"div"}>
          <Icon
            icon={mainIconImage}
            iconAltText={mainIconAltText}
            iconColor={mainIconColorVariants}
            iconSizeVariant={iconSizeVariant}
            iconVisibility={true}
          />
        </Block>
        {isActive ? (
          <Block className={"componet_like-icon-align"} tag={"div"}>
            <Icon
              icon={innerIconImage}
              iconAltText={innerIconAltText}
              iconColor={innerIconColorVariants}
              iconSizeVariant={iconSizeVariant}
              iconVisibility={isActive}
            />
          </Block>
        ) : null}
      </Block>
    </div>
  );
}
