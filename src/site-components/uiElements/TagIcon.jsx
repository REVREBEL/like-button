"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { CodeIcon } from "../rebelStyle/uiElements/CodeIcon";
import { TagInnerComponent } from "../zzComponentsParts/TagInnerComponent";
import { VariantsTagFontSize } from "../rebelStyle/variants/VariantsTagFontSize";

export function TagIcon({
  iconArrowIcon = true,
  iconIconColorVariants = null,
  iconIconImageAltText = "__wf_reserved_inherit",
  iconIconImageVisibility = false,
  iconIconSizeVariants = null,
  iconIconVisibility = true,
  iconImageIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d5fb16179349fc4fa754c5_c68a1dfa80662c3064e12f294a7a2c05_close-x.svg",
  iconInverseOnHover = null,
  iconJackIcon = false,
  iconStarIcon = false,
  labelClickableLink = "Tag Non-Clickable",
  optionsTagColor = null,
  settingsTagId = "",
  settingsVisibility = true,
  tagTagSizeVariant = null,
  tagTagText = "Mavericks 4 Hre",
}) {
  const _styleVariantMap = {
    "Tag Non-Clickable": "",
    "Tag is Clickable": "w-variant-0db5ddee-c59b-dacd-9fe4-1e58043227de",
  };

  const _activeStyleVariant = _styleVariantMap[labelClickableLink];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsVisibility ? (
        <Block
          className={`component_base-11 ${_activeStyleVariant}`}
          id={settingsTagId}
          tag={"div"}
        >
          <Block
            className={`component_wrapper-22 display-inline-flex ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`component_clickable-variants ${_activeStyleVariant}`}
              tag={"div"}
            >
              <TagInnerComponent
                iconsIconArrowVisibility={iconArrowIcon}
                iconsIconImage={iconImageIcon}
                iconsIconImageAltText={iconIconImageAltText}
                iconsIconImageVisibility={iconIconImageVisibility}
                iconsIconJackVisibility={iconJackIcon}
                iconsIconStarVisibility={iconStarIcon}
                settingsIconSize={tagTagSizeVariant}
                settingsIconVisibility={iconIconVisibility}
                tagTagText={tagTagText}
                textIconSlot={
                  <>
                    <VariantsTagFontSize tagTagSize={"Regular"} />
                    <CodeIcon iconVisibility={iconIconImageVisibility} />
                  </>
                }
              />
            </Block>
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
