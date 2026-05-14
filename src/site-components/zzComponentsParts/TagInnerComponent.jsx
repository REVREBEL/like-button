"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function TagInnerComponent({
  iconsIconArrowVisibility = true,
  iconsIconImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d5fb16179349fc4fa754c5_c68a1dfa80662c3064e12f294a7a2c05_close-x.svg",
  iconsIconImageAltText = "__wf_reserved_inherit",
  iconsIconImageVisibility = false,
  iconsIconJackVisibility = false,
  iconsIconStarVisibility = false,
  optionsColor = "Color Primary",
  settingsIconSize = null,
  settingsIconVisibility = true,
  tagTagText = "Mavericks4Life",
  textIconSlot,
}) {
  const _styleVariantMap = {
    Clear: "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dba",
    "Color Primary": "",
    "Color Primary Outline": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dbb",
    "Color 1": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dbc",
    "Color 1 Outline": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dbd",
    "Color 2": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dbe",
    "Color 2 Outline": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dbf",
    "Color 3": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dc0",
    "Color 3 Outline": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dc1",
    "Color 4": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dc2",
    "Color 4 Outline": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dc3",
    "Color 5": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dc4",
    "Color 5 Outline": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dc5",
    "Color 6": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dc6",
    "Color 6 Outline": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dc7",
    "Color 7": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dc8",
    "Color 7 Outline": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dc9",
    "Color 8": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dca",
    "Color 8 Outline": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dcb",
    "Color 9": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dcc",
    "Color 9 Outline": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dcd",
    "Color Light": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dce",
    "Color Light Outline": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dcf",
    "Color Dark": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dd0",
    "Color Dark Outline": "w-variant-f904fcc4-d485-41be-21fe-b9dd1da11dd1",
  };

  const _activeStyleVariant = _styleVariantMap[optionsColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`variants_tag-color flex_horizontal-6 ${_activeStyleVariant}`}
        tag={"div"}
      >
        {textIconSlot}
      </Block>
    </div>
  );
}
