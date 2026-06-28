"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../../devlinkScope";
import Block from "../../webflow_modules/Basic/components/Block";
import { TagVariant } from "../variant/TagVariant";
import { VariantsTagColor } from "../variants/VariantsTagColor";
import { VariantsTagFontSize } from "../variants/VariantsTagFontSize";
import { VariantsTagStates } from "../variants/VariantsTagStates";
import { applyPredicate } from "../../webflow_modules/Conditions/helpers/applyPredicate";
import { styleVariantIsAny } from "../../webflow_modules/Basic/helpers/styleVariantIsAny";

export function TagIcon({
  iconIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68fa0f9c2e5c213941af2442_7ffe101a8bec806f54aec9e0844e5a6e_Arrow-currentColor.svg",
  iconIconAltText = "__wf_reserved_inherit",
  iconIconSizeVariants = "Extra Small",
  iconIconVisibility = true,
  tagColor = "Color 5",
  tagTagBackgroundClickable = "Solid Clickable",
  tagTagId = "",
  tagTagSize = "Regular",
  tagTagText = "Mavericks 4 Life",
  tagTagVisibility = true,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {tagTagVisibility ? (
        <Block
          className={"rebel-style--component_tag"}
          id={tagTagId}
          tag={"div"}
        >
          <VariantsTagFontSize
            tagSlotLabelFontSize={
              <VariantsTagStates
                slotTagStates={
                  <VariantsTagColor
                    settingsColor={tagColor}
                    slotVariantsTagColor={
                      <TagVariant
                        icon={iconIcon}
                        iconAltText={iconIconAltText}
                        iconIconVisibility={iconIconVisibility}
                        iconSizeVariants={iconIconSizeVariants}
                        tagTagText={tagTagText}
                        variantsIconColorIconColor={
                          applyPredicate(tagColor)(
                            styleVariantIsAny(["Primary"])
                          )
                            ? "Color 4"
                            : applyPredicate(tagColor)(
                                styleVariantIsAny(["Color 1"])
                              )
                            ? "Color 9"
                            : applyPredicate(tagColor)(
                                styleVariantIsAny(["Color 2"])
                              )
                            ? "Color 5"
                            : applyPredicate(tagColor)(
                                styleVariantIsAny(["Color 3"])
                              )
                            ? "Color 8"
                            : applyPredicate(tagColor)(
                                styleVariantIsAny(["Color 4"])
                              )
                            ? "Primary"
                            : applyPredicate(tagColor)(
                                styleVariantIsAny(["Color 5"])
                              )
                            ? "Color 7"
                            : applyPredicate(tagColor)(
                                styleVariantIsAny(["Color 6"])
                              )
                            ? "Primary"
                            : applyPredicate(tagColor)(
                                styleVariantIsAny(["Color 7"])
                              )
                            ? "Color 4"
                            : applyPredicate(tagColor)(
                                styleVariantIsAny(["Color 8"])
                              )
                            ? "Color 3"
                            : applyPredicate(tagColor)(
                                styleVariantIsAny(["Color 9"])
                              )
                            ? "Primary"
                            : applyPredicate(tagColor)(
                                styleVariantIsAny(["Light"])
                              )
                            ? "Dark"
                            : "None"
                        }
                      />
                    }
                  />
                }
                variant={tagTagBackgroundClickable}
              />
            }
            tagTagSize={tagTagSize}
          />
        </Block>
      ) : null}
    </div>
  );
}
